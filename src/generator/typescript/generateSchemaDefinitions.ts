import { Context } from "../../context";
import * as fs from "fs";
import * as path from "path";
import * as prettier from "prettier";

/**
 * Generate TypeScript type definitions for all types available
 * in the database schema catalog along with request/response message
 * types for each available stored function.
 *
 *
 *
 * @param context
 * @param namespaces
 */
export const generateSchemaDefinitions = async (context: Context) => {
  // a place to store all the types
  const schemasFolder = path.join(context.generateInto, "schemas");
  try {
    await fs.promises.stat(schemasFolder);
    // smoke em so we get a clean generation
    await fs.promises.rm(schemasFolder, { recursive: true });
  } catch {
    // does not exist -- carry on
  }
  await fs.promises.mkdir(schemasFolder, { recursive: true });
  // each namespace gets a module
  await Promise.all(
    context.namespaces.map(async (n) => {
      const writeTo = path.join(schemasFolder, `${n.namespace}.ts`);
      const staticImports = `
      /* eslint-disable @typescript-eslint/no-empty-interface */
      /* eslint-disable @typescript-eslint/no-unused-vars */
      import {UUID, JsDate, JSONValue, JSONObject, Empty, Nullable} from "../../types";
      import {RequestMessage, ResponseMessage, JSONTypecastMap} from "../../client";
      `;
      const crossImports = context.namespaces
        .map((n) => `import * as ${n.namespace} from "./${n.namespace}";`)
        .join("\n");
      await fs.promises.writeFile(
        writeTo,
        await prettier.format(
          [
            staticImports,
            crossImports,
            n.typescriptTypeDefinition(context),
          ].join("\n"),
          {
            parser: "typescript",
          },
        ),
      );
    }),
  );
  // an overall module interface for typecasts
  const typecastSource = `
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type ArgumentToPostgres = any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type ArgumentFromPostgres = any;
  type Typecast = (x: ArgumentToPostgres) => ArgumentFromPostgres;
  export interface PostgresTypecasts {
    ${context.namespaces
      .flatMap((n) => n.types)
      .map((t) => `${t.postgresMarshallName}: Typecast`)
      .join(";\n")}
  }
  `;
  await fs.promises.writeFile(
    path.join(schemasFolder, "typecasts.ts"),
    await prettier.format([typecastSource].join("\n"), {
      parser: "typescript",
    }),
  );
};

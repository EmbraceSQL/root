import { GenerationContext } from "..";
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
export const generateSchemaDefinitions = async (context: GenerationContext) => {
  // a place to store all the types
  // buffer up generated code here
  const generationBuffer = [];
  generationBuffer.push(
    `
      /* eslint-disable @typescript-eslint/no-empty-interface */
      /* eslint-disable @typescript-eslint/no-unused-vars */
      /* eslint-disable @typescript-eslint/no-namespace */
      import {UUID, JsDate, JSONValue, JSONObject, Empty, Nullable} from "@embracesql/core/src/types";
      `,
  );
  // each postgres namespace gets a typescript namespace -- generates itself
  await Promise.all(
    context.namespaces.map((n) => {
      generationBuffer.push(
        n.typescriptTypeDefinition({
          ...context,
          currentNamespace: n.namespace,
        }),
      );
    }),
  );
  // all typecasts collected into a single interface
  generationBuffer.push(
    `
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
  `,
  );
  const writeTo = path.join(context.generateInto, `schemas.ts`);
  await fs.promises.writeFile(
    writeTo,
    await prettier.format(generationBuffer.join("\n"), {
      parser: "typescript",
    }),
  );
};

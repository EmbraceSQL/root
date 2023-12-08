import { GenerationContext } from "..";
import {
  SCRIPT_TYPES_NAMESPACE,
  SqlScriptOperations,
} from "../operations/sqlscript";
import { ASTKind, IsNamed, NamespaceVisitor } from "@embracesql/shared";
import { camelCase, pascalCase } from "change-case";

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
  const generationBuffer = [
    `
        // ⚠️ generated - do not modify ⚠️

        /**
         * BEGIN - shared types generated from schema.
         *
         * These types are node/browser isomorphic and are used by all other
         * EmbraceSQL generated code.
         */
        
        /* eslint-disable @typescript-eslint/no-empty-interface */
        /* eslint-disable @typescript-eslint/no-namespace */
        /* eslint-disable @typescript-eslint/no-unused-vars */
        import {UUID, JsDate, JSONValue, JSONObject, Empty, Nullable, undefinedIsNull} from "@embracesql/shared";

    `,
  ];
  // each postgres namespace gets a typescript namespace -- generates itself
  // this includes all namespaces in order to get all types which can
  // be used by user defined schemas
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
  // script parameter and return types
  // holder for all scripts provides a .Scripts grouping
  if (context.sqlScriptsFrom?.length) {
    const scripts = await SqlScriptOperations.factory(
      context,
      context.sqlScriptsFrom,
    );
    generationBuffer.push(`export namespace ${SCRIPT_TYPES_NAMESPACE}{`);
    generationBuffer.push(scripts.typescriptTypeDefinition(context));

    // close off Scripts namespace
    generationBuffer.push(`}`);
  }

  // primary key 'pickers' used to debounce and hash objects

  generationBuffer.push(`// begin primary key pickers`);
  context.handlers = {
    [ASTKind.Schema]: NamespaceVisitor,
    [ASTKind.Table]: {
      before: async (_, node) => {
        const tableTypeName = `${pascalCase(
          (node as unknown as IsNamed)?.name,
        )}`;
        const generationBuffer = [""];
        const primaryKey = node.primaryKey;
        if (primaryKey) {
          generationBuffer.push(
            `export function pickPrimaryKeyFrom${tableTypeName}(value: ${tableTypeName}) : string {`,
          );
          generationBuffer.push(`return JSON.stringify({`);
          primaryKey.columns.forEach((c) =>
            generationBuffer.push(
              `${camelCase(c.name)}: value.${camelCase(c.name)},`,
            ),
          );
          generationBuffer.push(`});`);
          generationBuffer.push(`}`);
        }

        return generationBuffer.join("\n");
      },
    },
  };
  generationBuffer.push(await context.database.visit(context));
  generationBuffer.push(`// end primary key pickers`);
  return generationBuffer.join("\n");
};

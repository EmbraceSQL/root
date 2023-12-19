import { GenerationContext } from "..";
import { Context } from "../..";
import {
  SCRIPT_TYPES_NAMESPACE,
  SqlScriptOperations,
} from "../operations/sqlscript";
import { generatePrimaryKeyPickers } from "./generatePrimaryKeyPickers";
import { generateTableTypeAliases } from "./generateTableTypeAliases";
import { generateTypeParsers } from "./generateTypeParsers";
import { ASTKind, NamespaceVisitor } from "@embracesql/shared";

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

  context.handlers = {
    [ASTKind.Database]: {
      before: async () => {
        return `// begin type definitions`;
      },
    },
    [ASTKind.Schema]: NamespaceVisitor,
    [ASTKind.Types]: NamespaceVisitor,
    [ASTKind.Type]: {
      before: async (context, node) => {
        // TODO: this is a cheat going to the postgres types not the AST
        const postgresType = (context as Context).resolveType(
          node.id as number,
        );
        return postgresType.typescriptTypeDefinition(context);
      },
    },
  };
  // no skipping schemas for parsing
  generationBuffer.push(
    await context.database.visit({ ...context, skipSchemas: [] }),
  );

  // each postgres namespace gets a typescript namespace -- generates itself
  // this includes all namespaces in order to get all types which can
  // be used by user defined schemas
  await Promise.all(
    context.namespaces.map((n) => {
      generationBuffer.push(
        n.typescriptTypeDefinition({
          ...context,
        }),
      );
    }),
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

  generationBuffer.push(await generateTypeParsers(context));
  generationBuffer.push(await generatePrimaryKeyPickers(context));
  generationBuffer.push(await generateTableTypeAliases(context));

  return generationBuffer.join("\n");
};

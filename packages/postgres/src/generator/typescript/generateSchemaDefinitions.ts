import { GenerationContext } from "..";
import {
  SCRIPT_TYPES_NAMESPACE,
  SqlScriptOperations,
} from "../operations/sqlscript";
import { generatePrimaryKeyPickers } from "./generatePrimaryKeyPickers";
import { generateTypeParsers } from "./generateTypeParsers";
import {
  ASTKind,
  AbstractTypeNode,
  NamespaceVisitor,
  ProcedureArgumentNode,
  cleanIdentifierForTypescript,
} from "@embracesql/shared";
import { GenerationContext as GC } from "@embracesql/shared";

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
        /* eslint-disable @typescript-eslint/no-explicit-any */
        /* eslint-disable @typescript-eslint/no-empty-interface */
        /* eslint-disable @typescript-eslint/no-namespace */
        /* eslint-disable @typescript-eslint/no-unused-vars */
        /* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
        import {UUID, JsDate, JSONValue, JSONObject, Empty, Nullable, undefinedIsNull} from "@embracesql/shared";

    `,
  ];

  const TypeDefiner = {
    before: async (context: GC, node: AbstractTypeNode) => {
      return `export type ${
        node.typescriptName
      } = ${node.parser.typescriptTypeDefinition(context)};`;
    },
  };

  // no skipping schemas while generating the type definitions - schemas
  // can reference on another, particularly pg_catalog base types
  generationBuffer.push(
    await context.database.visit({
      ...context,
      skipSchemas: [],
      handlers: {
        [ASTKind.Database]: {
          before: async () => {
            return `// begin type definitions`;
          },
        },
        [ASTKind.Schema]: NamespaceVisitor,
        [ASTKind.Types]: NamespaceVisitor,
        [ASTKind.Type]: TypeDefiner,
        [ASTKind.Enum]: {
          before: async (_, node) => {
            const namedValues = node.values.map(
              (a) => `${cleanIdentifierForTypescript(a)} = "${a}"`,
            );
            return `
              export enum ${node.typescriptName} {
                ${namedValues.join(",")}
              };
            `;
          },
        },
        [ASTKind.Tables]: NamespaceVisitor,
        // tables are defined by types -- but actual rows/records
        // coming back from queries need a required so we get
        // DBMS style value | null semantics -- no undefinded in SQL
        [ASTKind.Table]: {
          before: async (context, node) => {
            const generationBuffer = [
              await NamespaceVisitor.before(context, node),
            ];
            generationBuffer.push(
              `export type Record = Required<${node.type.typescriptNamespacedName}>;`,
            );

            return generationBuffer.join("\n");
          },
          after: NamespaceVisitor.after,
        },
        [ASTKind.Index]: {
          before: async (_, node) => `export type ${node.typescriptName} = {`,
          after: async () => `}`,
        },
        [ASTKind.IndexColumn]: {
          before: async (_, node) =>
            `${node.typescriptPropertyName}: ${node.type.typescriptNamespacedName} ;`,
        },
        [ASTKind.Procedures]: NamespaceVisitor,
        [ASTKind.Procedure]: {
          before: async (context, node) => {
            return [
              await NamespaceVisitor.before(context, node),
              `export type Arguments = {`,
              ...node.children
                .filter<ProcedureArgumentNode>(
                  (n): n is ProcedureArgumentNode =>
                    n.kind === ASTKind.ProcedureArgument,
                )
                .map(
                  (n) =>
                    `${n.typescriptPropertyName}: ${n.type.typescriptNamespacedName};`,
                ),
              "};",
              `export type Results = ${node.returnType.typescriptNamespacedName};`,
            ].join("\n");
          },
          after: NamespaceVisitor.after,
        },
        [ASTKind.CompositeType]: TypeDefiner,
        [ASTKind.Scripts]: NamespaceVisitor,
        [ASTKind.ScriptFolder]: NamespaceVisitor,
        [ASTKind.Script]: NamespaceVisitor,
      },
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

  return generationBuffer.join("\n");
};

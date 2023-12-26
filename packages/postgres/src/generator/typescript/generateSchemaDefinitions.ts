import { GenerationContext } from "..";
import { generatePrimaryKeyPickers } from "./generatePrimaryKeyPickers";
import { generateTypeParsers } from "./generateTypeParsers";
import {
  ASTKind,
  AbstractTypeNode,
  NamespaceVisitor,
  VALUES,
  cleanIdentifierForTypescript,
} from "@embracesql/shared";
import { GenerationContext as GC } from "@embracesql/shared";
import { pascalCase } from "change-case";

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
        /* eslint-disable @typescript-eslint/no-redundant-type-constituents */
        /* @typescript-eslint/no-redundant-type-constituents */
        import {UUID, JsDate, JSONValue, JSONObject, Empty, Nullable, undefinedIsNull} from "@embracesql/shared";
        import type { PartiallyOptional } from "@embracesql/shared";

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
            return [
              await NamespaceVisitor.before(context, node),
              `export type Record = {`,
              node.allColumns
                .map(
                  (c) =>
                    `${c.typescriptPropertyName}: ${
                      node.type.typescriptNamespacedName
                    }["${c.typescriptPropertyName}"] ${
                      c.allowsNull ? " | null" : ""
                    }`,
                )
                .join(";"),
              `};`,
            ].join("\n");
          },
          after: async (context, node) => {
            return [
              // exhaustive -- if there is no primary key, say so explicitly
              node.primaryKey ? "" : `export type PrimaryKey = never;`,
              // optional columns -- won't always need to pass these
              // ex: database has a default
              // TODO: test with a nullable column
              `export type Optional = Pick<Record,${
                node.optionalColumns
                  .map((c) => `"${c.typescriptPropertyName}"`)
                  .join("|") || "never"
              }>`,
              // values type -- used in create and update
              `export type ${pascalCase(
                VALUES,
              )} = PartiallyOptional<Record, Optional & PrimaryKey>`,
              await NamespaceVisitor.after(context, node),
            ].join("\n");
          },
        },
        [ASTKind.Index]: {
          before: async (_, node) => `export type ${node.typescriptName} = {`,
          after: async (_, node) =>
            [
              `}`,
              // alias primary key to the correct index
              node.primaryKey
                ? `export type PrimaryKey = ${node.typescriptName};`
                : "",
            ].join("\n"),
        },
        [ASTKind.IndexColumn]: {
          before: async (_, node) =>
            `${node.typescriptPropertyName}: ${node.type.typescriptNamespacedName} ;`,
        },
        [ASTKind.Procedures]: NamespaceVisitor,
        [ASTKind.Procedure]: NamespaceVisitor,
        [ASTKind.CompositeType]: TypeDefiner,
        [ASTKind.DomainType]: TypeDefiner,
        [ASTKind.AliasType]: TypeDefiner,
        [ASTKind.Scripts]: NamespaceVisitor,
        [ASTKind.ScriptFolder]: NamespaceVisitor,
        [ASTKind.Script]: NamespaceVisitor,
      },
    }),
  );

  generationBuffer.push(await generateTypeParsers(context));
  generationBuffer.push(await generatePrimaryKeyPickers(context));

  return generationBuffer.join("\n");
};

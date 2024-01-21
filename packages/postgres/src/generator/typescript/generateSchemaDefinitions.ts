import { GenerationContext } from "..";
import { asDocComment } from "../../util";
import { emptyTypescriptRow } from "./autocrud/shared";
import { generatePrimaryKeyPickers } from "./generatePrimaryKeyPickers";
import { generateTypeComparison } from "./generateTypeComparison";
import { generateTypeGuards } from "./generateTypeGuards";
import { generateTypeOptions } from "./generateTypeOptions";
import { generateTypeParsers } from "./generateTypeParsers";
import {
  ASTKind,
  AbstractTypeNode,
  ColumnNode,
  CompositeTypeNode,
  NamespaceVisitor,
  VALUES,
  cleanIdentifierForTypescript,
  isNodeType,
} from "@embracesql/shared";
import { GenerationContext as GC } from "@embracesql/shared";
import { pascalCase } from "change-case";

/**
 * All available columns -- generate the sort option permumtations
 * as an enum.
 */
function sortOptions(columns: ColumnNode[]) {
  return [
    `enum SortOptions  {`,
    `${columns
      .map((c) => `${c.typescriptPropertyName}Ascending = "${c.name} ASC",`)
      .join("\n")}`,
    `${columns
      .map((c) => `${c.typescriptPropertyName}Descending = "${c.name} DESC",`)
      .join("\n")}`,
    `}`,
  ].join("\n");
}

/**
 * All available columns -- generate column metadata.
 */
async function columnMetadata(context: GC, type: CompositeTypeNode) {
  return await type.visit({
    ...context,
    handlers: {
      [ASTKind.CompositeType]: {
        before: async () => `export const Columns = {`,
        after: async (_, node) => {
          return [
            `}`, // close columns
            // convenience iterable column names
            `export const ColumnNames = [${node.attributes
              .map((c) => `"${c.typescriptName}"`)
              .join(",")}] as const;`,
            `export const FieldNames = [${node.attributes
              .map((c) => `"${c.typescriptPropertyName}"`)
              .join(",")}] as const;`,
            `type FieldNamesType = typeof FieldNames[number];`,
          ].join("\n");
        },
      },
      [ASTKind.Attribute]: {
        before: async (_, node) => {
          // each column worth of metadata including a type constant
          return [
            `${node.typescriptName}: {`,
            ` typeName: "${node.type.typescriptNamespacedName}",`,
            ` fieldName: "${node.typescriptPropertyName}" as FieldNamesType,`,
            `},`,
          ].join("\n");
        },
      },
    },
  });
}

/**
 * Generate TypeScript type definitions for all types available
 * in the database schema catalog along with request/response message
 * types for each available stored function.
 */
export const generateSchemaDefinitions = async (context: GenerationContext) => {
  // a place to store all the types
  // buffer up generated code here
  const generationBuffer = [
    `
        // ⚠️ generated - do not modify ⚠️

        /**
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
        import {UUID, JsDate, JSONValue, JSONObject, Empty, Nullable, NullableMembers, undefinedIsNull, nullIsUndefined, NEVER} from "@embracesql/shared";
        import type { PartiallyOptional, PossiblyEmpty, ReadOptions, Sort } from "@embracesql/shared";
        import { Geometry } from "@embracesql/shared";

    `,
  ];

  const TypeDefiner = {
    before: async (context: GC, node: AbstractTypeNode) => {
      return [
        node.comment ? asDocComment(node.comment) : "",
        `export type ${node.typescriptName} = ${node.typescriptTypeDefinition(
          context,
        )};`,
      ].join("\n");
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
            return [
              // schema wide shared
            ].join("\n");
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
        // tables are defined by types -- but actual rows
        // coming back from queries need a required so we get
        // DBMS style value | null semantics -- no undefinded in SQL
        [ASTKind.Table]: {
          before: async (context, node) => {
            return [
              await NamespaceVisitor.before(context, node),
              // empty placeholder row used in UI adding
              `export function emptyRow() : PossiblyEmpty<${node.type.typescriptNamespacedName}> {`,
              ` return ${emptyTypescriptRow(context, node.type)};`,
              `}`,
              // exhaustive -- if there is no primary key, say so explicitly
              node.primaryKey ? "" : `export type PrimaryKey = never;`,
              // optional columns -- won't always need to pass these
              // ex: database has a default
              `export type Optional = Pick<${
                node.type.typescriptNamespacedName
              },${
                node.optionalColumns
                  .map((c) => `"${c.typescriptPropertyName}"`)
                  .join("|") || "never"
              }>`,
              // values type -- used in create and update
              `export type ${pascalCase(VALUES)} = PartiallyOptional<${
                node.type.typescriptNamespacedName
              }, ${
                node.optionalColumns.length ? "Optional &" : ""
              } PrimaryKey>`,
              // read options exist per table
              `export ${sortOptions(node.allColumns)};`,
              `export type Options = ReadOptions & {`,
              ` sort?: SortOptions[],`,
              `};`,
              // a convenient metadata constant for all columns
              await columnMetadata(context, node.type),
            ].join("\n");
          },
          after: NamespaceVisitor.after,
        },
        [ASTKind.Index]: {
          before: async (_, node) =>
            [
              // alias primary key to the correct index
              node.primaryKey
                ? `export type PrimaryKey = ${node.type.typescriptNamespacedName};`
                : "",
            ].join("\n"),
        },
        [ASTKind.Procedures]: NamespaceVisitor,
        [ASTKind.Procedure]: {
          before: async (context, node) => {
            return [
              await NamespaceVisitor.before(context, node),
              isNodeType(node.resultsType, ASTKind.CompositeType)
                ? await columnMetadata(context, node.resultsType)
                : "",
            ].join("\n");
          },
          after: NamespaceVisitor.after,
        },
        [ASTKind.DomainType]: TypeDefiner,
        [ASTKind.ArrayType]: TypeDefiner,
        [ASTKind.Scripts]: NamespaceVisitor,
        [ASTKind.ScriptFolder]: NamespaceVisitor,
        [ASTKind.Script]: {
          before: async (context, node) => {
            return [
              await NamespaceVisitor.before(context, node),
              isNodeType(node.resultsType, ASTKind.CompositeType)
                ? await columnMetadata(context, node.resultsType)
                : "",
            ].join("\n");
          },
          after: NamespaceVisitor.after,
        },
        [ASTKind.CompositeType]: {
          // composite types are a name and AttributeNode(s) will fill the body
          before: async (_, node) => {
            return [
              node.comment ? asDocComment(node.comment) : "",
              `export type ${node.typescriptName} = {`,
            ].join("\n");
          },
          after: async () => `}`,
        },
        [ASTKind.Attribute]: {
          before: async (_, node) => {
            // arrays are not nullable, they are empty arrays []
            if (node.type.kind === ASTKind.ArrayType) {
              return `${node.typescriptPropertyName}: ${node.type.typescriptNamespacedName};`;
            }
            // nullable is of course nullable
            if (node.nullable) {
              return `${node.typescriptPropertyName}: Nullable<${node.type.typescriptNamespacedName}>;`;
            } else {
              return `${node.typescriptPropertyName}: ${node.type.typescriptNamespacedName};`;
            }
          },
        },
      },
    }),
  );

  generationBuffer.push(await generateTypeParsers(context));
  generationBuffer.push(await generatePrimaryKeyPickers(context));
  generationBuffer.push(await generateTypeGuards(context));
  generationBuffer.push(await generateTypeComparison(context));
  generationBuffer.push(await generateTypeOptions(context));

  return generationBuffer.join("\n");
};

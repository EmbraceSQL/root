import { ASTKind, ContainerNode, GenerationContext } from "@embracesql/shared";

/**
 * Generate a fixed list of columns.
 */
async function generateColumns(
  context: GenerationContext,
  hasAttributes: ContainerNode,
) {
  return await hasAttributes.visit({
    ...context,
    handlers: {
      [ASTKind.Attribute]: {
        before: async (_, node) => {
          return `{name: "${node.name}", type: "${node.type.typescriptNamespacedName}"},`;
        },
      },
    },
  });
}

/**
 * Strong type for available database metadata.
 */
export async function generateMetadata(context: GenerationContext) {
  return await context.database.visit({
    ...context,
    handlers: {
      [ASTKind.Database]: {
        before: async () => {
          return [
            `export const Metadata : DatabaseMetadata = {`,
            `  get Schemas() {`,
            `      return [`,
          ].join("\n");
        },
        after: async () => {
          return [
            // close list
            `]; `,
            // close get Schemas
            `}`,
            // close
            `};`,
          ].join("\n");
        },
      },
      [ASTKind.Schema]: {
        before: async (_, node) => {
          return [`{`, ` name: "${node.name}",`].join("\n");
        },
        after: async () => {
          return [
            // close schema
            `},`,
          ].join("\n");
        },
      },
      [ASTKind.Tables]: {
        before: async (_, node) => {
          return [
            // get those tables
            `get ${node.typescriptName}() {`,
            // just a list
            `      return [`,
          ].join("\n");
        },
        after: async () => {
          return [
            // close list
            `];`,
            // close
            `},`,
          ].join("\n");
        },
      },
      [ASTKind.Table]: {
        before: async (context, node) => {
          const columns = await generateColumns(context, node.type);
          return [
            `{`,
            ` name: "${node.name}",`,
            ` get Columns() { `,
            `    return[${columns}];`,
            ` },`,
            ` get Indexes() { `,
            `    return[`,
          ].join("\n");
        },
        after: async () => {
          return [
            // close indexes list
            `];`,
            // close get Indexes
            ` }`,
            // close
            `},`,
          ].join("\n");
        },
      },
      [ASTKind.Index]: {
        before: async (context, node) => {
          const columns = await generateColumns(context, node.type);
          return [
            `{`,
            ` name: "${node.name}",`,
            ` get Columns() { `,
            `    return[${columns}];`,
            ` },`,
          ].join("\n");
        },
        after: async () => {
          return [`},`].join("\n");
        },
      },
      [ASTKind.Procedures]: {
        before: async (_, node) => {
          return [
            // get those procedures
            `get ${node.typescriptName}()   {`,
            // just a list
            `      return [`,
          ].join("\n");
        },
        after: async () => {
          return [
            // close list
            `];`,
            // close
            `},`,
          ].join("\n");
        },
      },
      [ASTKind.Procedure]: {
        before: async (_, node) => {
          return [`{`, ` name: "${node.name}"},`].join("\n");
        },
      },
    },
  });
}

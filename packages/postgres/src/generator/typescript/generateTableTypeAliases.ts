import { GenerationContext } from "..";
import { ASTKind, NamespaceVisitor } from "@embracesql/shared";

/**
 * Postgres has both types -- and tables that refer to those types.
 *
 * Alias the two namespaces together.
 */
export async function generateTableTypeAliases(context: GenerationContext) {
  const generationBuffer = [""];

  context.handlers = {
    [ASTKind.Database]: {
      before: async () => {
        return `// begin table type aliases`;
      },
    },
    [ASTKind.Schema]: NamespaceVisitor,
    [ASTKind.Tables]: NamespaceVisitor,
    [ASTKind.Table]: {
      before: async (context, node) => {
        const generationBuffer = [await NamespaceVisitor.before(context, node)];
        generationBuffer.push(
          `export type Record = ${node.type.typescriptNamespacedName};`,
        );
        if (node.primaryKey) {
          generationBuffer.push(
            `export type RecordNotPrimaryKey = ${node.type.typescriptNamespacedName}NotPrimaryKey;`,
          );
        }
        return generationBuffer.join("\n");
      },
      after: NamespaceVisitor.after,
    },
  };
  // no skipping schemas for parsing
  generationBuffer.push(
    await context.database.visit({ ...context, skipSchemas: [] }),
  );

  return generationBuffer.join("\n");
}

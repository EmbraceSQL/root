import {
  ASTKind,
  CompositeTypeNode,
  GenerationContext,
  NamespaceVisitor,
} from "@embracesql/shared";

/**
 * Type guards used to check and cast 'any' to our actual types.
 */
export async function generateTypeGuards(context: GenerationContext) {
  const generationBuffer = [""];

  generationBuffer.push(
    await context.database.visit({
      ...context,
      // all schemas are needed for type guards
      skipSchemas: [],
      handlers: {
        [ASTKind.Schema]: NamespaceVisitor,
        [ASTKind.Tables]: NamespaceVisitor,
        [ASTKind.Table]: NamespaceVisitor,
        [ASTKind.Scripts]: NamespaceVisitor,
        [ASTKind.ScriptFolder]: NamespaceVisitor,
        [ASTKind.Script]: NamespaceVisitor,
        [ASTKind.Procedures]: NamespaceVisitor,
        [ASTKind.Procedure]: NamespaceVisitor,
        [ASTKind.Types]: NamespaceVisitor,
        [ASTKind.CompositeType]: {
          before: async (
            context: GenerationContext,
            node: CompositeTypeNode,
          ) => {
            return [
              await NamespaceVisitor.before(context, node),
              `export function is(value: any) : value is ${node.typescriptNamespacedName} {`,
              `if (`,
              node.attributes
                .map((a) => `(value.${a.typescriptPropertyName} !== undefined)`)
                .join(" && "),
              `) return true;`,
              `return false;`,
            ].join("\n");
          },
          after: async (
            context: GenerationContext,
            node: CompositeTypeNode,
          ) => {
            return [`}`, await NamespaceVisitor.after(context, node)].join(
              "\n",
            );
          },
        },
      },
    }),
  );
  return generationBuffer.join("\n");
}

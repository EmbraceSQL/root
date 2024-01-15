import {
  ASTKind,
  AbstractTypeNode,
  GenerationContext,
  NamespaceVisitor,
} from "@embracesql/shared";

/**
 * Type parsers turn strings into typescript equivalent types.
 */
export async function generateTypeParsers(context: GenerationContext) {
  const generationBuffer = [""];

  const ParseVisitor = {
    before: async (context: GenerationContext, node: AbstractTypeNode) => {
      return [
        await NamespaceVisitor.before(context, node),
        `export function parse(from: unknown) {`,
        `// ${ASTKind[node.kind]}`,
        `${node.typescriptNullOrUndefined(context)}`,
        `${node.typescriptTypeParser(context)}`,
        `}`,
        "\n",
      ].join("\n");
    },
    after: NamespaceVisitor.after,
  };
  generationBuffer.push(
    await context.database.visit({
      ...context,
      // no skipping schemas for parsing, folks can and will reference across schemas
      skipSchemas: [],
      handlers: {
        [ASTKind.Schema]: NamespaceVisitor,
        [ASTKind.Types]: NamespaceVisitor,
        [ASTKind.Procedures]: NamespaceVisitor,
        [ASTKind.Procedure]: NamespaceVisitor,
        [ASTKind.Results]: NamespaceVisitor,
        [ASTKind.Tables]: NamespaceVisitor,
        [ASTKind.Table]: NamespaceVisitor,
        [ASTKind.Scripts]: NamespaceVisitor,
        [ASTKind.ScriptFolder]: NamespaceVisitor,
        [ASTKind.Script]: NamespaceVisitor,
        [ASTKind.CreateOperation]: NamespaceVisitor,
        [ASTKind.Type]: ParseVisitor,
        [ASTKind.CompositeType]: ParseVisitor,
        [ASTKind.Enum]: ParseVisitor,
        [ASTKind.DomainType]: ParseVisitor,
        [ASTKind.ArrayType]: ParseVisitor,
      },
    }),
  );

  // no skipping schemas for parsing
  generationBuffer.push(
    await context.database.visit({
      ...context,
      handlers: {
        [ASTKind.Database]: {
          before: async () => {
            return `// begin table column parser mapping`;
          },
        },
        [ASTKind.Schema]: NamespaceVisitor,
        [ASTKind.Tables]: NamespaceVisitor,
        [ASTKind.Table]: NamespaceVisitor,
        [ASTKind.Column]: {
          before: async (context, node) => {
            const generationBuffer = [
              await NamespaceVisitor.before(context, node),
            ];
            generationBuffer.push(
              `export const parse = ${node.type.typescriptNamespacedName}.parse;`,
            );
            return generationBuffer.join("\n");
          },
          after: NamespaceVisitor.after,
        },
      },
      skipSchemas: [],
    }),
  );

  return generationBuffer.join("\n");
}

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
      const generationBuffer = [await NamespaceVisitor.before(context, node)];
      generationBuffer.push(`export function parse(from: string|null) {`);
      generationBuffer.push(`${node.parser.typescriptTypeParser(context)}`);
      generationBuffer.push(`}`);
      return generationBuffer.join("\n");
    },
    after: NamespaceVisitor.after,
  };
  generationBuffer.push(
    await context.database.visit({
      ...context,
      // no skipping schemas for parsing, folks can and will reference across schemas
      skipSchemas: [],
      handlers: {
        [ASTKind.Database]: {
          before: async () => {
            return `// begin string parsers`;
          },
        },
        [ASTKind.Schema]: NamespaceVisitor,
        [ASTKind.Types]: NamespaceVisitor,
        [ASTKind.Type]: ParseVisitor,
        [ASTKind.Enum]: ParseVisitor,
      },
    }),
  );

  context.handlers = {
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
        const generationBuffer = [await NamespaceVisitor.before(context, node)];
        generationBuffer.push(
          `export const parse = ${node.type.typescriptNamespacedName}.parse;`,
        );
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

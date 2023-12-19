import { GenerationContext } from "..";
import { ASTKind, NamespaceVisitor } from "@embracesql/shared";

/**
 * Type parsers turn strings into typescript equivalent types.
 */
export async function generateTypeParsers(context: GenerationContext) {
  const generationBuffer = [""];

  context.handlers = {
    [ASTKind.Database]: {
      before: async () => {
        return `// begin string parsers`;
      },
    },
    [ASTKind.Schema]: NamespaceVisitor,
    [ASTKind.Types]: NamespaceVisitor,
    [ASTKind.Type]: {
      before: async (context, node) => {
        const generationBuffer = [await NamespaceVisitor.before(context, node)];
        generationBuffer.push(`export function parse(from: string|null) {`);
        generationBuffer.push(`${node.parser.typescriptTypeParser(context)}`);
        generationBuffer.push(`}`);
        return generationBuffer.join("\n");
      },
      after: NamespaceVisitor.after,
    },
  };
  // no skipping schemas for parsing
  generationBuffer.push(
    await context.database.visit({ ...context, skipSchemas: [] }),
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

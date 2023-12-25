import { GenerationContext, NamedASTNode } from ".";

/**
 * This is a really simple visitor that names the node into a namespace.
 */
export const NamespaceVisitor = {
  before: async (context: GenerationContext, node: NamedASTNode) => {
    console.assert(context);
    console.assert(node);
    return `export namespace ${node.typescriptName} {`;
  },
  after: async (context: GenerationContext, node: NamedASTNode) => {
    console.assert(context);
    console.assert(node);
    return "}";
  },
};

/**
 * Pretty much everything touched with JS/TS ends up as a string.
 * And needs to be parsed back from a string to a type.
 *
 * Implement this interface to generate a function *body* that
 * will turn a single input parameter `from: string|null` into
 * the actual type or `null`.
 */
export interface GeneratesTypeScript {
  /**
   * Generate code that parses a string into a typed value.
   */
  typescriptTypeParser(context: GenerationContext): string;
  /**
   * Generate code that defines the right hand side of a `type =` statement.
   */
  typescriptTypeDefinition(context: GenerationContext): string;
}

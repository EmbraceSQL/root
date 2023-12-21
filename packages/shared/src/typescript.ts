import { GenerationContext } from ".";
import { ASTNode, isNamed } from "./ast";
import { pascalCase } from "change-case";

/**
 * Give that node a typescript style type name.
 */
export function typescriptTypeName(node: ASTNode) {
  if (isNamed(node)) {
    return pascalCase(node.name);
  } else {
    return "";
  }
}

/**
 * Give that node a typescript style type name.
 */
export function typescriptFullyQualifiedTypeName(node: ASTNode): string {
  if (isNamed(node)) {
    return node.parent
      ? `${typescriptFullyQualifiedTypeName(node.parent)}.${pascalCase(
          node.name,
        )}`
      : `${pascalCase(node.name)}`;
  } else {
    return "";
  }
}

/**
 * This is a really simple visitor that names the node into a namespace.
 */
export const NamespaceVisitor = {
  before: async (_: GenerationContext, node: ASTNode) => {
    if (isNamed(node)) {
      return `export namespace ${typescriptTypeName(node)} {`;
    } else {
      return "";
    }
  },
  after: async (_: GenerationContext, node: ASTNode) => {
    if (isNamed(node)) {
      return "}";
    } else {
      return "";
    }
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

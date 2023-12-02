import { ASTNode, isContainer, isNamed } from "./ast";
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
 * Represent containers as namespaces.
 */
export function typescriptNamespaces(node: ASTNode) {
  const generationBuffer = [``];
  if (isContainer(node)) {
    for (const child of node.children) {
      generationBuffer.push(`export namespace ${typescriptTypeName(child)} {`);
      // and recurse!
      generationBuffer.push(typescriptNamespaces(child));
      generationBuffer.push("}");
    }
  }

  return generationBuffer.join("\n");
}

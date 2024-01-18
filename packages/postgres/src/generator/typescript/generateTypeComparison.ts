import {
  ASTKind,
  AbstractTypeNode,
  GenerationContext,
  NamespaceVisitor,
} from "@embracesql/shared";

const TypecastEntry = {
  before: async (_: GenerationContext, node: AbstractTypeNode) => {
    return [
      `export namespace ${node.typescriptName} {`,
      ` export function equals(l: ${node.typescriptNamespacedName}|undefined, r: unknown) {`,
      `  return JSON.stringify(l) === JSON.stringify(r);`,
      ` }`,
      `}`,
    ].join("\n");
  },
};

/**
 * Generate type comparisons.
 *
 * - equals returns `true` or `false` if two database typed objects had the same values
 */
export async function generateTypeComparison(context: GenerationContext) {
  context.handlers = {
    [ASTKind.Schema]: NamespaceVisitor,
    [ASTKind.Tables]: NamespaceVisitor,
    [ASTKind.Table]: NamespaceVisitor,
    [ASTKind.Scripts]: NamespaceVisitor,
    [ASTKind.ScriptFolder]: NamespaceVisitor,
    [ASTKind.Script]: NamespaceVisitor,
    [ASTKind.Procedures]: NamespaceVisitor,
    [ASTKind.Procedure]: NamespaceVisitor,
    [ASTKind.Types]: NamespaceVisitor,
    [ASTKind.Type]: TypecastEntry,
    [ASTKind.Enum]: TypecastEntry,
    [ASTKind.CompositeType]: TypecastEntry,
    [ASTKind.DomainType]: TypecastEntry,
    [ASTKind.ArrayType]: TypecastEntry,
  };
  // include all schemas -- need those built in types
  return await context.database.visit({ ...context, skipSchemas: [] });
}

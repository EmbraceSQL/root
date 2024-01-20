import {
  ASTKind,
  AbstractTypeNode,
  GenerationContext,
  NamespaceVisitor,
} from "@embracesql/shared";

const TypeOptionEntry = {
  before: async (context: GenerationContext, node: AbstractTypeNode) => {
    return [
      `export namespace ${node.typescriptName} {`,
      `${node.typescriptTypeOptions(context)}`,
      `}`,
    ].join("\n");
  },
};

/**
 * Generate type options. These are used in queries to modify sql generation.
 *
 */
export async function generateTypeOptions(context: GenerationContext) {
  context.handlers = {
    [ASTKind.Database]: {
      before: async () => `// Type Options`,
    },
    [ASTKind.Schema]: NamespaceVisitor,
    [ASTKind.Tables]: NamespaceVisitor,
    [ASTKind.Table]: NamespaceVisitor,
    [ASTKind.Scripts]: NamespaceVisitor,
    [ASTKind.ScriptFolder]: NamespaceVisitor,
    [ASTKind.Script]: NamespaceVisitor,
    [ASTKind.Procedures]: NamespaceVisitor,
    [ASTKind.Procedure]: NamespaceVisitor,
    [ASTKind.Types]: NamespaceVisitor,
    [ASTKind.Type]: TypeOptionEntry,
    [ASTKind.Enum]: TypeOptionEntry,
    [ASTKind.CompositeType]: TypeOptionEntry,
    [ASTKind.DomainType]: TypeOptionEntry,
    [ASTKind.ArrayType]: TypeOptionEntry,
  };
  // include all schemas -- need those built in types
  return await context.database.visit({ ...context, skipSchemas: [] });
}

import {
  ASTKind,
  AbstractTypeNode,
  GenerationContext,
} from "@embracesql/shared";

const TypecastEntry = {
  before: async (_: GenerationContext, node: AbstractTypeNode) => {
    return [
      node.id ? `[${node.id}]: Typecast;` : "",
      `["${node.typescriptNamespacedName}"]: Typecast`,
    ].join("\n");
  },
};

/**
 * Generate an overall flat namespace mapping. This is used
 * to generate typecasts.
 */
export async function generateTypecastMap(context: GenerationContext) {
  // overall type map -- define all possible types discovered
  // these are flattened names -- no namespacing
  context.handlers = {
    [ASTKind.Database]: {
      before: async () => {
        return `
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        type ArgumentToPostgres = any;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        type ArgumentFromPostgres = any;
        type Typecast = (x: ArgumentToPostgres) => ArgumentFromPostgres;
        export interface PostgresTypecasts { 
      `;
      },
      after: async () => {
        return `}`;
      },
    },
    [ASTKind.Type]: TypecastEntry,
    [ASTKind.Enum]: TypecastEntry,
    [ASTKind.CompositeType]: TypecastEntry,
    [ASTKind.DomainType]: TypecastEntry,
    [ASTKind.ArrayType]: TypecastEntry,
  };
  // include all schemas -- need those built in types
  return await context.database.visit({ ...context, skipSchemas: [] });
}

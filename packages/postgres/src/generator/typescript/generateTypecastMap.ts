import { ASTKind, GenerationContext } from "@embracesql/shared";

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
    [ASTKind.Type]: {
      before: async (_, node) => {
        return `${node.marshallName}: Typecast;`;
      },
    },
    [ASTKind.Enum]: {
      before: async (_, node) => {
        return `${node.marshallName}: Typecast;`;
      },
    },
  };
  // include all schemas -- need those built in types
  return await context.database.visit({ ...context, skipSchemas: [] });
}

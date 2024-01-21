import { ASTKind, GenerationContext } from "@embracesql/shared";

/**
 * Strong type for available database settings.
 */
export async function generateSettings(context: GenerationContext) {
  return await context.database.visit({
    ...context,
    handlers: {
      [ASTKind.Database]: {
        before: async () => {
          return [`export type Settings = {`].join("\n");
        },
        after: async () => {
          return [`}`].join("\n");
        },
      },
      [ASTKind.Setting]: {
        before: async (_, node) => {
          return [`${node.typescriptPropertyName}: string;`].join("\n");
        },
      },
    },
  });
}

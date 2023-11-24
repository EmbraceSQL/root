import { Context } from "../context";
import { generateDatabaseRoot } from "./typescript/generateDatabaseRoot";

/**
 * Shared context for the generation sequence.
 *
 * This combines our regular context to connect and work with
 * postgres along with needed metadata.
 */
export type GenerationContext = Context & {
  sqlScriptsFrom: string;
};

/**
 * The generator looks to the database api schema and creates:
 * - TypeScript for each database type
 * - OpenAPI controller endpoints for each database procedure
 */
export const regenerateFromDatabase = async (context: GenerationContext) => {
  // and this the actual object 'root' used to access the database
  return await generateDatabaseRoot(context);
};

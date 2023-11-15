import { Context } from "../context";
import {
  generateRoutes,
  generateProcCalls,
  generateSchemaDefinitions,
  generateRequestResponseDispatcher,
} from "./typescript";

/**
 * The generator looks to the database api schema and creates:
 * - TypeScript for each database type
 * - OpenAPI controller endpoints for each database procedure
 */
export const regenerateFromDatabase = async (context: Context) => {
  await generateSchemaDefinitions(context);
  await generateProcCalls(context);
  await generateRoutes(context);
  await generateRequestResponseDispatcher(context);
};

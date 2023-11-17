import { Context } from "../context";
import { generateProcCalls, generateSchemaDefinitions } from "./typescript";
import * as fs from "fs/promises";

/**
 * The generator looks to the database api schema and creates:
 * - TypeScript for each database type
 * - OpenAPI controller endpoints for each database procedure
 */
export const regenerateFromDatabase = async (context: Context) => {
  try {
    await fs.stat(context.generateInto);
    // smoke em so we get a clean generation
    await fs.rm(context.generateInto, { recursive: true });
  } catch {
    // does not exist -- carry on
  }
  await fs.mkdir(context.generateInto, { recursive: true });
  await generateSchemaDefinitions(context);
  await generateProcCalls(context);
};

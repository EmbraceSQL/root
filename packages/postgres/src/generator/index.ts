import { Context } from "../context";
import { GenerationContext as GC } from "@embracesql/shared";

export { generateDatabaseRoot } from "./typescript/generateDatabaseRoot";
export { generateOperationDispatcher } from "./typescript/generateOperationDispatcher";
export { generateSchemaDefinitions } from "./typescript/generateSchemaDefinitions";
export { registerOperatorOverride } from "./pgoperator";
export { registerOverride } from "./pgtype/overrides/_overrides";

/**
 * Shared context for the generation sequence.
 *
 * This combines our regular context to connect and work with
 * postgres along with needed metadata.
 */
export type GenerationContext = Context & GC;

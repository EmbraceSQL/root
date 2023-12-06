import { Context } from "../context";
import { GenerationContext as GC } from "@embracesql/shared";
import * as prettier from "prettier";

export { generateDatabaseRoot } from "./typescript/generateDatabaseRoot";
export { generateOperationDispatcher } from "./typescript/generateOperationDispatcher";

/**
 * Shared context for the generation sequence.
 *
 * This combines our regular context to connect and work with
 * postgres along with needed metadata.
 */
export type GenerationContext = Context & GC;

//TODO - this does not belong in postgres

/**
 * Make that generated source 💄.
 */
export const formatSource = async (source: string) => {
  try {
    return await prettier.format(source, { parser: "typescript" });
  } catch {
    // no format -- we'll need it to debug then
    return source;
  }
};

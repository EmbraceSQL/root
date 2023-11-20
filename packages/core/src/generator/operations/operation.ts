import { Context } from "../../context";

/**
 * The operation interface. Each operation is responsible for generating itself.
 */
export interface Operation {
  /**
   * Generate the source string defining the operation.
   */
  typescriptDefinition(context: Context): string;
}

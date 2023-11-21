import { Context } from "../../context";

/**
 * The operation interface. Each operation is responsible for generating itself.
 */
export interface Operation {
  /**
   * Build up the needed metadata.
   */
  build(context: Context): Promise<void>;
  /**
   * Generate the source string defining the operation.
   */
  typescriptDefinition(context: Context): string;
}

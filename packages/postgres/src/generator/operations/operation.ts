import { Context } from "../../context";

/**
 * Can be made into TypeScript source.
 */
export interface TypescriptGenerateable {
  /**
   * Build up the needed metadata.
   */
  build(context: Context): Promise<void>;
  /**
   * Generate the source string defining the operation.
   */
  typescriptDefinition(context: Context): string;
}

/**
 * The operation interface. Each operation is responsible for generating itself.
 */
export interface Operation extends TypescriptGenerateable {}

/**
 * Some operations have multiple operations - like one per index.
 */
export interface Operations extends TypescriptGenerateable {
  /**
   * All my contained operations.
   */
  get operations(): Operation[];
}

/**
 * A fairly boring type guard for strings.
 */
export const isOperations = (v: TypescriptGenerateable): v is Operations => {
  return (v as Operations).operations !== undefined;
};

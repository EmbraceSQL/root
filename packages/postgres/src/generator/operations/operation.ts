import { GenerationContext } from "..";

/**
 * Can be made into TypeScript source.
 */
export interface TypescriptGenerateable {
  /**
   * Build up the needed metadata.
   */
  build(context: GenerationContext): Promise<void>;
  /**
   * Generate the source string defining the operation.
   */
  typescriptDefinition(context: GenerationContext): string;
}

/**
 * The operation interface. Each operation is responsible for generating itself.
 */
export interface Operation extends TypescriptGenerateable {
  /**
   * Dispatch name used as a key in operation dispatch tables to connect
   * HTTP/S service and middleware to EmbraceSQL operations.
   */
  dispatchName(context: GenerationContext): string;

  /**
   * Typescript type name for any 'values' passed to the operation.
   *
   * These are used in create and update type operations to set table columns.
   *
   * Undefined if there are no values to pass.
   */
  typescriptValuesType(context: GenerationContext): string | undefined;

  /**
   * Typescript type name for any 'parameters' passed to the operation.
   *
   * These are used in any index access or procedure call.
   *
   * Undefined if there are no parameters to pass.
   */
  typescriptParametersType(context: GenerationContext): string | undefined;
}

/**
 * Some operations have multiple operations - like one per index.
 */
export interface Operations extends TypescriptGenerateable {
  /**
   * All my contained dispatchable operations.
   */
  get dispatchable(): Operation[];
}

/**
 * A fairly boring type guard for strings.
 */
export const isOperations = (v: TypescriptGenerateable): v is Operations => {
  return (v as Operations).dispatchable !== undefined;
};

export const isOperation = (v: TypescriptGenerateable): v is Operations => {
  return !isOperations(v);
};

import { DatabaseNode } from "./ast";

export * from "./ast";
export * from "./typescript";

/**
 * Message format for EmbraceSQL.
 *
 * The notion of headers is inspired by HTTP and allows you to specify
 * additional metadata.
 */
export type EmbraceSQLRequest<P, V = never> = {
  operation: string;
  headers?: Record<string, string>;
  parameters: P;
  values?: V;
};

/**
 * Message format for EmbraceSQL.
 */
export type EmbraceSQLResponse<R> = {
  operation: string;
  headers?: Record<string, string>;
  results: R;
};

/**
 * Operation dispatch. This has a vague type on purpose to allow
 * selecting the proper operation via HTTP/S + JSON.
 */
export type OperationDispatchMethod = (
  request: EmbraceSQLRequest<object, object>,
) => Promise<unknown>;

/**
 * Shared context for the generation sequence.
 */
export type GenerationContext = {
  sqlScriptsFrom?: string;
  skipSchemas?: string[];
  database: DatabaseNode;
};

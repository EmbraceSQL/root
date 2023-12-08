import { DatabaseNode, VisitorMap } from "./ast";

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
  parameters?: P;
  values?: V;
};

/**
 * Message format for EmbraceSQL.
 */
export type EmbraceSQLResponse<R> = {
  operation: string;
  headers?: Record<string, string>;
  results?: R;
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
  handlers?: VisitorMap;
};

/**
 * This lovely bit of type origami will generate string prefixed
 * with a pascal casing of the rest.
 */
export type PrefixedPascal<
  P extends string,
  T extends string,
> = T extends `${infer FirstChar}${infer Rest}`
  ? `${P}${Capitalize<FirstChar>}${Rest}`
  : never;

/**
 * Add change handlers on to an existing type of the form
 * `changePropertyName`.
 *
 * You really should only use this on types that have plain properties
 * that are not functions.
 */
export type WithChangeHandlers<T, E = never> = T & {
  [Property in keyof T as PrefixedPascal<"change", Property & string>]: (
    e: E,
  ) => void;
};

/**
 * This is an adapter as postgres driver does not auto translate
 * undefined to null.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const undefinedIsNull = (value: any) => {
  if (value === undefined) return null;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return value;
};
export type JsDate = Date;
export type Empty = Record<string, never>;
export type JSONValue =
  | string
  | number
  | boolean
  | { [x: string]: JSONValue }
  | Array<JSONValue>;
export type JSONObject = {
  [key: string]: JSONValue | JSONObject;
};
export type Nullable<T> = T | null | undefined;

export * from "./uuid";

/**
 * For a given object, there are different dispatch operations available.
 */
export type DispatchOperation = "" | ".create";

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

// type branding just to help typescript keep me lining things up correctly
export declare const __brand: unique symbol;
type WithBrand<B> = { __brand: B };
export type Branded<T, B> = T & WithBrand<B>;

export function Brand<T, B>(toBrand: T, withBrand: B) {
  return {
    __brand: withBrand,
    ...toBrand,
  };
}

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

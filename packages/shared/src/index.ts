import { DatabaseNode, VisitorMap } from "./ast";

export * from "./ast";
export * from "./typescript";
export * from "./parsers";

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

export type GenerationContextProps = {
  skipSchemas?: string[];
  sqlScriptsFrom?: string;
};

/**
 * Shared context for the generation sequence.
 */
export type GenerationContext = GenerationContextProps & {
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
export function undefinedIsNull<T>(value: T | undefined) {
  if (value === undefined) return null;
  return value;
}

/**
 * Adapter when we get a parsed null from the database but should
 * return an undefined for TypeScript
 * undefined to null.
 */
export function nullIsUndefined<T>(value: T | null) {
  if (value === null) return undefined;
  return value;
}

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

export type NullableMembers<T> = {
  [Member in keyof T]: Nullable<T[Member]>;
};

export * from "./uuid";

/**
 * For a given object, there are different dispatch operations available.
 */
export type DispatchOperation = "" | ".create";

export type { GeneratesTypeScript as GeneratesTypeScriptParser } from "./typescript";

// identifier legalizer?
const notLegalInIdentifiers = /[^\w$]/g;

/**
 * Clean identifiers to be only legal characters.
 */
export const cleanIdentifierForTypescript = (identifier: string) => {
  return identifier.replace(notLegalInIdentifiers, "_");
};

type CommonKeys<S, T> = {
  [K in keyof S & keyof T]: [S[K], T[K]] extends [T[K], S[K]] ? K : never;
}[keyof S & keyof T];

/**
 * Make just SOME properties optional.
 */
export type PartiallyOptional<T, U> =
  // keys in common -- these will be optional
  Partial<Pick<T, CommonKeys<T, U>>> &
    // keys not in common, these will remain as is from T
    Omit<T, CommonKeys<T, U>>;

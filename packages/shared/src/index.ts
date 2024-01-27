import { DatabaseNode, VisitorMap } from "./ast";

export * from "./ast";
export * from "./typescript";
export * from "./parsers";
export * from "./debounce";

export let NEVER: never;

/**
 * Headers are the classic string name/value pairs.
 */
export type Headers = Record<string, string>;

/**
 * If you've headers and you know it 👏.
 */
export type HasHeaders = {
  headers?: Headers;
};

/**
 * Invocation context for a single database operation.
 */
export type EmbraceSQLInvocation<
  P = object,
  V = object,
  O = object,
  H = Headers,
> = {
  /**
   * Header values can be generically augmented with well known
   * headers.
   */
  headers?: H & Headers;
  parameters?: P;
  values?: V;
  options?: O;
};

/**
 * Message format for EmbraceSQL.
 *
 * The notion of headers is inspired by HTTP and allows you to specify
 * additional metadata.
 */
export type EmbraceSQLRequest<
  P,
  V = never,
  O = never,
  H = Headers,
> = EmbraceSQLInvocation<P, V, O, H> & {
  operation: string;
};

/**
 * Message format for EmbraceSQL.
 */
export type EmbraceSQLResponse<R, H = Headers> = {
  operation: string;
  headers?: H & Headers;
  results?: R;
};

/**
 * Operation dispatch. This has a vague type on purpose to allow
 * selecting the proper operation via HTTP/S + JSON.
 */
export type OperationDispatchMethod<H = Headers> = (
  request: EmbraceSQLRequest<object, object, object, H>,
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
  currentSymbolName?: string;
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
export function nullIsUndefined<T>(value: unknown) {
  if (value === null) return undefined;
  return value as T;
}

export class JsDate extends Date {}
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
export type Nullable<T> = T | null;

export type NullableMembers<T> = {
  [Member in keyof T]: Nullable<T[Member]>;
};

export type NullableRecursive<T> = T extends object
  ? {
      [Member in keyof T]: NullableRecursive<T[Member]> | null;
    }
  : T | null;

export type PartialRecursive<T> = T extends object
  ? {
      [Member in keyof T]: PartialRecursive<T[Member]> | undefined;
    }
  : T | undefined;

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

/**
 * Result sets will be a mixture of one or multiple rows.
 */
export type OneOrMany<T> = T | T[];

/**
 * Additional options to control running a query on the database.
 */
export type InvokeQueryOptions<H = Headers> = {
  /**
   * When greater than 0, retry the query on any error this number
   * of times.
   */
  retries?: number;
  /**
   * Contains options supplied as headers from hooks or HTTP/S client
   * requests.
   *
   * You can also directly set any headers you see fit.
   */
  headers?: H & Headers;
};

/**
 * Multiple row reading operations have -- options
 */
export type ReadOptions = InvokeQueryOptions & {
  /**
   * Pagination support, this defines the page size.
   */
  limitNumberOfRows?: number;
  /**
   * Pagination support, this defines how many rows to skip
   * before returning a page.
   */
  offsetNumberOfRows?: number;
};

/**
 * Sorting mode.
 */
export enum Sort {
  Ascending = "ASC",
  Descending = "DESC",
}

/**
 * Possibly empty. Used for nice new empty rows ready for
 * user edits.
 */
export type PossiblyEmpty<T> = {
  [K in keyof T]: T[K] | undefined;
};

/**
 * Database metadata describing the database and contained
 * objects.
 */
export interface DatabaseMetadata {
  /**
   * Databases are divided into schemas.
   */
  Schemas: Schema[];
}

/**
 * Database schema containing database objects.
 */
export interface Schema {
  /**
   * Name as stated in the database.
   */
  name: string;

  /**
   * All procedures in this schema.
   */
  Procedures: Procedure[];

  /**
   * All tables in this schema.
   */
  Tables: Table[];
}

/**
 * Callable procedure or function in the database.
 */
export interface Procedure {
  /**
   * Name as stated in the database.
   */
  name: string;
}

/**
 * An individual Table.
 */
export interface Table {
  /**
   * Name as stated in the database.
   */
  name: string;
  /**
   * Columns included in the table.
   */
  Columns: Column[];
  /**
   * Every index on the table.
   */
  Indexes: Index[];
}

/**
 * Index on an individual table.
 */
export interface Index {
  /**
   * Name as stated in the database.
   */
  name: string;
  /**
   * Columns included in the index.
   */
  Columns: Column[];
}

/**
 * Column on an individual Table or Index.
 */
export interface Column {
  /**
   * Name as stated in the database.
   */
  name: string;
  /**
   * Database defined type, expressed in database type names.
   */
  type: string;
}

import {
  Intercepted,
  InterceptorCallback,
} from "./useEmbraceSQLUpdateCallback";

/**
 * Value interceptors can have their entire value bulk replaced.
 */
export interface AcceptsDatabaseUpdate<T> {
  wholeUpdateFromDatabase: (newValue: T) => void;
  value: T;
}

/**
 * You can intercept single rows or arrays of rows, but you don't have
 * an interceptor of an array, you have an array of interceptors.
 */
export type InterceptedResults<T> = T extends Array<infer Item>
  ? Intercepted<Item>[]
  : Intercepted<T>;

/**
 * Interceptors will be created generecally for many different row
 * value types.
 */
export interface InterceptorConstructor<T> {
  new (uninterceptedValue: T, callback: InterceptorCallback<T>): Intercepted<T>;
}

/**
 * Interceptors wrap raw record values from the database with
 * generated change handlers.
 *
 * This base class captures share functionality, and is extended with
 * a new interceptor for table type, with generated members for each
 * column.
 */
export abstract class InterceptorBase<T> implements AcceptsDatabaseUpdate<T> {
  constructor(
    protected uninterceptedValue: T,
    protected callback: InterceptorCallback<T>,
  ) {}

  wholeUpdateFromDatabase(newValue: T) {
    this.uninterceptedValue = newValue;
  }

  /**
   * Get a current value snapshot.
   */
  get value() {
    return { ...this.uninterceptedValue };
  }
}

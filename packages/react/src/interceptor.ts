import { WithChangeHandlers } from "@embracesql/shared";

/**
 * Input change event to pass values from the UI to an object.
 */
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

/**
 * When a type is wrapped up with an interceptor, brand it
 * in order to get some additional type checking.
 *
 * Easier to avoid passing the wrong thing...
 */
export type Intercepted<T> = WithChangeHandlers<T, ChangeEvent>;

/**
 * Call back into an interception hook with this interface.
 */
export type InterceptorCallback<T> = (value: T) => Promise<T>;

/**
 * Interceptors will be created generecally for many different row
 * value types.
 */
export interface InterceptorConstructor<T> {
  new (
    uninterceptedValue: T,
    callback: InterceptorCallback<T>,
    rowNumberInResultset?: number,
  ): Intercepted<T>;
}

/**
 * Rows in a resultset have a row number.
 */
export interface HasRowNumber {
  rowNumberInResultset: number;
}

/**
 * Interceptors wrap raw record values from the database with
 * generated change handlers.
 *
 * This base class captures share functionality, and is extended with
 * a new interceptor for table type, with generated members for each
 * column.
 */
export abstract class InterceptorBase<T> {
  constructor(
    protected uninterceptedValue: T,
    protected callback: InterceptorCallback<T>,
    public rowNumberInResultset?: number,
  ) {}

  /**
   * Get a current value snapshot.
   */
  get value() {
    return { ...this.uninterceptedValue };
  }
}

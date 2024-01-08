import { WithChangeHandlers } from "@embracesql/shared";

/**
 * Value interceptors can have their entire value bulk replaced.
 */
export interface AcceptsDatabaseUpdate<T> {
  wholeUpdateFromDatabase: (newValue: T) => void;
  value: T;
}

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
export type Intercepted<T> = WithChangeHandlers<T, ChangeEvent> &
  AcceptsDatabaseUpdate<T>;

/**
 * Call back into an interception hook with this interface.
 */
export type InterceptorCallback<T> = (value: Intercepted<T>) => Promise<void>;

/**
 * An Interceptor is a function that wraps some raw data T and 'intercepts'
 * writes via `set`.
 *
 * This is explicitly a code generated solution rather than using proxies becuase
 * it is easier to debug!
 */
export type Interceptor<T> = (
  uninterceptedValue: T,
  callback: InterceptorCallback<T>,
) => Intercepted<T>;

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

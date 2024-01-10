import { WithChangeHandlers } from "@embracesql/shared";

/**
 * Input change event to pass values from the UI.
 */
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

/**
 * Rows in a resultset have a row number.
 */
export interface HasRowNumber {
  rowNumberInResultset: number;
}

/**
 * A database raw data record in the UI is referred to as a Row.
 * Easier to avoid passing the wrong thing...
 */
export type Row<T> = WithChangeHandlers<T, ChangeEvent> & HasRowNumber;

/**
 * Call back into an interception hook with this interface.
 */
export type RecordCallback<R> = (record: R) => Promise<R>;

/**
 * Interceptors will be created generecally for many different row
 * value types.
 */
export interface RowConstructor<R> {
  new (
    uninterceptedValue: R,
    changeCallback: RecordCallback<R>,
    rowNumberInResultset: number,
  ): Row<R>;
}

/**
 * Rows wrap raw record values from the database to make them usable
 * hooked rows in the UI.
 */
export abstract class RowBase<R> {
  constructor(
    protected record: R,
    protected changeCallback: RecordCallback<R>,
    public rowNumberInResultset = 0,
  ) {}

  /**
   * Get a current value snapshot.
   */
  get value() {
    return { ...this.record };
  }
}

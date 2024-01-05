/**
 * Value interceptors can have their entire value bulk replaced.
 */
export interface AcceptsDatabaseUpdate<T> {
  wholeUpdateFromDatabase: (newValue: T) => void;
  value: T;
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
  constructor(protected uninterceptedValue: T) {}

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

import { Context } from "./context";
import postgres from "postgres";

export { initializeContext } from "./context";
export type { Context } from "./context";
export * from "./generator";

interface ConstructorOf<T> {
  new (context: Context): T;
}

type InvokeQuery<T> = (sql: postgres.Sql) => Promise<T>;

/**
 * Additional options to control running a query on the database.
 */
export type InvokeQueryOptions = {
  /**
   * When greater than 0, retry the query on any error this number
   * of times.
   */
  retries: number;
};

/**
 * A single postgres database. Inherit from this in generated code.
 */
export abstract class PostgresDatabase {
  constructor(public context: Context) {}

  /**
   * Clean up the connection.
   */
  public async disconnect() {
    await this.context.sql.end();
  }

  get cls(): ConstructorOf<this> {
    const current = Object.getPrototypeOf(this).constructor;
    return current;
  }

  get self(): this {
    return this;
  }

  // TODO: add in a generic get typed()

  /**
   * Returns a database scoped to a new transaction.
   * You must explicitly call `rollback` or `commit`.
   */
  async beginTransaction() {
    const myself = this.self;
    const CurrentSubclass = this.cls;
    return await new Promise<{
      database: typeof myself;
      commit: () => void;
      rollback: (message?: string) => void;
    }>((resolveReady) => {
      const complete = new Promise((resolve, reject) => {
        this.context.sql
          .begin(async (sql) => {
            resolveReady({
              database: new CurrentSubclass({ ...this.context, sql }),
              commit: () => resolve(true),
              rollback: (message?: string) => reject(message),
            });
            await complete;
          })
          .catch((reason) => reason);
      });
    });
  }

  /**
   * Use the database inside a transaction.
   *
   * A successful return is a commit.
   * An escaping exception is a rollback.
   */
  async withTransaction<T>(body: (database: this) => Promise<T>) {
    const CurrentSubclass = this.cls;
    if (this.context.sql.begin) {
      // root transaction
      return await this.context.sql.begin(
        async (sql) =>
          await body(new CurrentSubclass({ ...this.context, sql })),
      );
    } else {
      // nested transaction
      const nested = this.context.sql as postgres.TransactionSql;
      return await nested.savepoint(
        async (sql) =>
          await body(new CurrentSubclass({ ...this.context, sql })),
      );
    }
  }

  /**
   * Invoke a query.
   *
   * This provides a hook point for middleware before and after
   * your natural query invocation to interact with the database.
   */
  async invoke<T>(queryCallback: InvokeQuery<T>): Promise<T> {
    return await queryCallback(this.context.sql);
  }
}

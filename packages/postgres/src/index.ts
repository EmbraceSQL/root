import { Context } from "./context";
import databaseRole from "./middleware/role";
import { MiddlewareContext, MiddlewareDispatcher } from "./middleware/types";
import { EmbraceSQLInvocation, InvokeQueryOptions } from "@embracesql/shared";
import postgres from "postgres";

export { initializeContext } from "./context";
export type { Context } from "./context";
export * from "./generator";

interface ConstructorOf<T> {
  new (context: Context): T;
}

type InvokeQuery<T> = (sql: postgres.Sql) => Promise<T>;

/**
 * A single postgres database. Inherit from this in generated code.
 */
export abstract class PostgresDatabase<
  TTypecast,
> extends MiddlewareDispatcher<MiddlewareContext> {
  constructor(public context: Context) {
    super();
    // hooking up the default middleware, you can always `clear` this
    this.use(databaseRole);
  }

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

  get typed(): TTypecast {
    return this.context.sql.typed as unknown as TTypecast;
  }

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
              // this is 'the change' -- adding in a new sql that is in transaction
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
    if (this.context.sql.begin !== undefined) {
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
   * A query will run in an existing transaction, or begin one if no transaction
   * is in process.
   *
   * Middleware registered with `use` will be invoked before, and assuming
   * all middleware is successful, `queryCallback` will be invoke to generate
   * the final return results from the database.
   */
  async invoke<T>(
    queryCallback: InvokeQuery<T>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    request?: EmbraceSQLInvocation<object, object, InvokeQueryOptions>,
  ): Promise<T> {
    // here is the middleware run stack
    const runStack = async (database: this) => {
      // pick up the headers
      const headers = request?.options?.headers ?? {};
      // first the middleware
      await this.dispatch({ ...database.context, headers });
      const check_it = await database.context
        .sql`SELECT SESSION_USER, CURRENT_USER`;
      console.assert(check_it);
      return queryCallback(database.context.sql);
    };

    // need a reserved or single connection throughout
    // so that all effects are applied to the same session
    if (this.context.sql.begin !== undefined) {
      return this.withTransaction(async (database) => {
        return runStack(database);
      }) as T;
    } else {
      // if we are in a transaction, there won't be an option to reserve
      // but the good news is the driver has already reserved a connection
      // for the scope of the transaction
      return runStack(this);
    }
  }
}

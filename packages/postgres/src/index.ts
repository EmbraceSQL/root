import { Context } from "./context";
import databaseRole from "./middleware/role";
import { MiddlewareContext, MiddlewareDispatcher } from "./middleware/types";
import {
  EmbraceSQLInvocation,
  EmbraceSQLOptions,
  InvokeQueryOptions,
  sleep,
} from "@embracesql/shared";
import postgres from "postgres";

export { initializeContext } from "./context";
export type { Context } from "./context";
export * from "./generator";

interface ConstructorOf<T> {
  new (context: Context): T;
}

type InvokeQuery<
  R,
  P,
  V = never,
  O extends EmbraceSQLOptions = EmbraceSQLOptions,
> = (sql: postgres.Sql, request: EmbraceSQLInvocation<P, V, O>) => Promise<R>;

/**
 * A single postgres database.
 *
 * Code generation extends this class, making it specific to your database.
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
   * Call when you are all finished talking to the database.
   */
  public async disconnect() {
    await this.context.sql.end({ timeout: 1 });
  }

  private get cls(): ConstructorOf<this> {
    const current = Object.getPrototypeOf(this).constructor;
    return current;
  }

  get typed(): TTypecast {
    return this.context.sql.typed as unknown as TTypecast;
  }

  /**
   * Returns a database scoped to a new transaction.
   * You must explicitly call `rollback` or `commit`.
   */
  async beginTransaction() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const myself = this;
    const CurrentSubclass = this.cls;
    return await new Promise<{
      database: typeof myself;
      commit: () => void;
      rollback: (message?: string) => void;
    }>((resolveReady) => {
      const complete = new Promise((resolve, reject) => {
        // postgres doesn't really have 'nested' transactions -- it has savepoints
        // so check if we are 'in' a transaction
        const begin =
          this.context.sql.begin?.bind(this.context.sql) ??
          (this.context.sql as postgres.TransactionSql).savepoint.bind(
            this.context.sql,
          );

        begin(async (sql) => {
          resolveReady({
            // this is 'the change' -- adding in a new sql that is in transaction
            database: new CurrentSubclass({ ...this.context, sql }),
            commit: () => resolve(true),
            rollback: (message?: string) => reject(message),
          });
          await complete;
        }).catch((reason) => reason);
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
    const { database, commit, rollback } = await this.beginTransaction();
    try {
      const ret = await body(database);
      commit();
      return ret;
    } catch (e) {
      // the postgres driver has a flaw - if you encounter a fatal connection
      // error inside a transaction, such that `rollback` cannot be run
      // because the connection is dead -- the driver hangs awaiting a `rollback`
      // that simply cannot happen
      if ((e as postgres.PostgresError)?.severity === "FATAL") {
        // the error is the return value -- yeah a little odd
        // but this gets us past the rollback that won't roll back
        throw e;
      } else {
        rollback();
        throw e;
      }
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
  async invoke<
    R,
    P,
    V = never,
    O extends InvokeQueryOptions = InvokeQueryOptions,
  >(
    queryCallback: InvokeQuery<R, P, V, O>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    request: EmbraceSQLInvocation<P, V, O>,
  ): Promise<R> {
    // if retries are not specific -- now is the time

    // here is the middleware run stack
    const runStack = async (database: this, retry: number) => {
      // pick up the headers
      // first the middleware
      await this.dispatch({
        ...database.context,
        // types get erased at this level
        request: request as EmbraceSQLInvocation<
          object,
          object,
          EmbraceSQLOptions
        >,
        retry,
      });
      return queryCallback(database.context.sql, request);
    };

    let finalError: Error | undefined = undefined;
    for (let retry = 0; retry <= (request?.options?.retries ?? 0); retry += 1) {
      try {
        // need a reserved or single connection throughout
        // so that all effects are applied to the same session
        if (this.context.sql.begin !== undefined) {
          // make sure to await here -- need to catch what might be thrown
          return (await this.withTransaction(async (database) => {
            return await runStack(database, retry);
          })) as R;
        } else {
          // if we are in a transaction, there won't be an option to reserve
          // but the good news is the driver has already reserved a connection
          // for the scope of the transaction
          return await runStack(this, retry);
        }
      } catch (e) {
        finalError = e as Error;
        // this is the exponential backoff part
        if (retry > 0) {
          await sleep(100 * 2 ** retry);
        }
      }
    }

    // if we got here, we're past all the retries and it is time to throw
    throw finalError;
  }
}

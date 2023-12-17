import { Context } from "./context";

export { initializeContext } from "./context";
export type { Context } from "./context";
export * from "./generator";

interface ConstructorOf<T> {
  new (context: Context): T;
}

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
}

import { GenerationContext } from "..";
import { DatabaseOperation } from "../operations/database";
import { SqlScriptOperations } from "../operations/sqlscript";

/**
 * Generate a root object class that serves as 'the database'.
 *
 * Consuming code will `new` up an instance of this generated
 * class. Then you just . autocomplete your way to the geneated
 * proc or query you want to call!
 */
export const generateDatabaseRoot = async (context: GenerationContext) => {
  // starting off with all the imports, append to this list
  // and it will be the final output
  const generationBuffer = [
    `
        // BEGIN - Node side database connectivity layer
        import { Context, initializeContext } from "@embracesql/postgres";
        import postgres from "postgres";
    `,
  ];
  // the schema
  // common database interface
  generationBuffer.push(`
  interface HasDatabase {
    database: Database;
  }
  `);

  // class start
  generationBuffer.push(`export class Database { `);
  generationBuffer.push(`

    /**
     * Connect to your database server via URL, and return 
     * a fully typed database you can use to access it.
     */
    static async connect(postgresUrl: string) {
        return new Database(await initializeContext(postgresUrl));
    }

    private constructor(public context: Context) {`);

  // constructor body currently empty

  generationBuffer.push(`
    }

    /**
     * Clean up the connection.
     */
    async public disconnect() {
      await this.context.sql.end()
    }
    
    `);

  // transaction support is a nested context
  generationBuffer.push(`
    /**
     * Use the database inside a transaction. 
     * 
     * A successful return is a commit.
     * An escaping exception is a rollback.
     */
    async withTransaction<T>(body: (database: Database) => Promise<T>) {
      if(this.context.sql.begin) {
        // root transaction
        return await this.context.sql.begin(async (sql) => await body(new Database({...this.context, sql})));
      } else {
        // nested transaction
        const nested = this.context.sql as postgres.TransactionSql
        return await nested.savepoint(async (sql) => await body(new Database({...this.context, sql})));
      }
    }

  /**
   * Returns a database scoped to a new transaction.
   * You must explicitly call \`rollback\` or \`commit\`.
   */
  async beginTransaction() {
    return await new Promise<{
      database: Database;
      commit: () => void;
      rollback: (message?: string) => void;
    }>((resolveReady) => {
      const complete = new Promise((resolve, reject) => {
        this.context.sql.begin(async (sql) => {
          resolveReady({
            database: new Database({ ...this.context, sql }),
            commit: () => resolve(true),
            rollback: (message?: string) => reject(message),
          });
          await complete;
        }).catch((reason) => reason);
      });
    });
  }
  `);
  // wheel through every namespace, and every proc and generate calls
  // each schema / namespace turns into a .<Schema> grouping
  const operations = await DatabaseOperation.factory(context);
  generationBuffer.push(operations.typescriptDefinition(context));

  // holder for all scripts provides a .Scripts grouping
  if (context.sqlScriptsFrom?.length) {
    const scripts = await SqlScriptOperations.factory(
      context,
      context.sqlScriptsFrom,
    );
    generationBuffer.push(`
    public Scripts = new class implements HasDatabase {
       		constructor(public database: Database) {}
        `);
    generationBuffer.push(scripts.typescriptDefinition(context));

    // close off Scripts outer scope
    generationBuffer.push(`}(this)`);
  }

  //class end
  generationBuffer.push(`}`);
  return generationBuffer.join("\n");
};

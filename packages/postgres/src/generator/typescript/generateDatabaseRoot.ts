import { GenerationContext } from "..";
import { Context } from "../..";
import { DatabaseOperation } from "../operations/database";
import { SqlScriptOperations } from "../operations/sqlscript";
import { generateTypecastMap } from "./generateTypecastMap";
import { ASTKind } from "@embracesql/shared";

/**
 * Generate a root object class that serves as 'the database'.
 *
 * Consuming code will `new` up an instance of this generated
 * class. Then you just . autocomplete your way to the geneated
 * proc or query you want to call!
 */
export const generateDatabaseRoot = async (context: GenerationContext) => {
  const generationBuffer = [""];
  context.handlers = {
    [ASTKind.Database]: {
      before: async () => {
        return [
          // starting off with all the imports, append to this list
          // and it will be the final output
          `
            // BEGIN - Node side database connectivity layer
            import { Context, initializeContext, PostgresDatabase } from "@embracesql/postgres";
            import postgres from "postgres";
          `,
          // include all schemas -- need those built in types
          await generateTypecastMap({ ...context, skipSchemas: [] }),
          // common database interface
          `
            interface HasDatabase {
              database: Database;
            }
          `,
          // typecast map for postgres driver codec.

          // generated database class starts here
          `export class Database extends PostgresDatabase { `,
          // I have no idea how to 'new' a subclass in a static, so this
          // is generated
          // TODO: get this into the base class
          `
          /**
           * Connect to your database server via URL, and return 
           * a fully typed database you can use to access it.
           */
          static async connect(postgresUrl: string, props?: postgres.Options<never>) {
              return new Database(await initializeContext(postgresUrl, props));
          }
        
        `,
          // TODO: convert to AST
          (await DatabaseOperation.factory(context)).typescriptDefinition(
            context,
          ),
        ].join("\n");
      },
      after: async () => {
        return [
          // database class end
          `}`,
        ].join("\n");
      },
    },
    [ASTKind.Scripts]: {
      before: async (context) => {
        // TODO: convert to ast
        // holder for all scripts provides a .Scripts grouping
        if (context.sqlScriptsFrom?.length) {
          const scripts = await SqlScriptOperations.factory(
            context as Context,
            context.sqlScriptsFrom,
          );
          return [
            `
    public Scripts = new class implements HasDatabase {
       		constructor(public database: Database) {}
        `,
            scripts.typescriptDefinition(context as Context),

            // close off Scripts outer scope
            `}(this)`,
          ].join("\n");
        } else {
          return "";
        }
      },
    },
  };

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

  // include all schemas -- need those built in types
  return await context.database.visit({ ...context });
};

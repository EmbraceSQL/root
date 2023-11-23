import { GenerationContext } from "..";
import { DatabaseOperation } from "../operations/database";
import { SqlScriptOperations } from "../operations/sqlscript";
import { generateSchemaDefinitions } from "./generateSchemaDefinitions";
import * as fs from "fs";
import * as path from "path";
import * as prettier from "prettier";

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
        // ⚠️ generated - do not modify ⚠️
        /* eslint-disable @typescript-eslint/no-empty-interface */
        /* eslint-disable @typescript-eslint/no-namespace */
        /* eslint-disable @typescript-eslint/no-unused-vars */
        import {UUID, JsDate, JSONValue, JSONObject, Empty, Nullable, undefinedIsNull} from "@embracesql/core/src/types";
        import { Context, initializeContext } from "@embracesql/core/src/context";
        import postgres from "postgres";
    `,
  ];
  // the schema
  generationBuffer.push(await generateSchemaDefinitions(context));
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
  // wheel through every namespace, and every proc and generate calls
  // each schema / namespace turns into a .<Schema> grouping
  const procs = await DatabaseOperation.factory(context);
  generationBuffer.push(procs.typescriptDefinition(context));

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
  await fs.promises.writeFile(
    path.join(context.generateInto, `index.ts`),
    await prettier.format(generationBuffer.join("\n"), {
      parser: "typescript",
    }),
  );
};

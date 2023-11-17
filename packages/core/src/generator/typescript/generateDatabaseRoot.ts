import { GenerationContext } from "..";
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
        import * as schemas from "./schemas";
        import * as procs from "./procs";
        import { Context, initializeContext } from "@embracesql/core/src/context";
    `,
  ];
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

    private constructor(private context: Context) {
    }

    /**
     * Clean up the connection.
     */
    async public disconnect() {
      await this.context.sql.end()
    }
    
    `);
  // wheel through every namespace, and every proc and generate calls
  context.namespaces.map((n) => {
    generationBuffer.push(`
    public ${n.typescriptName} = new class {
       		constructor(public superThis: Database) {}
        `);
    n.procs.map((p) => {
      generationBuffer.push(`
      async ${
        p.typescriptName
      }(parameters : schemas.${p.typescriptNameForPostgresArguments(true)}){
        return procs.${n.typescriptName}.${
          p.typescriptName
        }(this.superThis.context, parameters)

      }`);
    });
    generationBuffer.push(`}(this)`);
  });

  //class end
  generationBuffer.push(`}`);
  await fs.promises.writeFile(
    path.join(context.generateInto, `index.ts`),
    await prettier.format(generationBuffer.join("\n"), {
      parser: "typescript",
    }),
  );
};

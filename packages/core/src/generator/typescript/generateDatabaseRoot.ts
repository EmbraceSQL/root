import { GenerationContext } from "..";
import { GeneratedFromSqlScript, isSqlScript } from "../../context";
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
        import * as sqlScripts from "./sqlScripts";
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
  context.namespaces.forEach((n) => {
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
        }(this.superThis.context, parameters);

      }`);
    });
    generationBuffer.push(`}(this)`);
  });

  // holder for all scripts provides a . separatio and a sql context
  generationBuffer.push(`
    public Scripts = new class {
       		constructor(private superThis: Database) {}
        `);

  // and through all the generated sql scripts, each one of these
  // gets a call wrapper -- namespaces recursively tree up as nested classes
  const depthFirst = (v: GeneratedFromSqlScript) => {
    Object.keys(v).forEach((key) => {
      const script = v[key];
      // this is the no fooling generation case -- pop into
      // the generation buffer
      if (isSqlScript(script)) {
        // snippet will build the ordered parameter list
        const parameterBuilders = script.metadata.types.map(
          (oid, i) =>
            `_${i + 1}: schemas.PgCatalog.${
              context.resolveType(oid).typescriptName
            }`,
        );
        const parameterString = parameterBuilders.length
          ? parameterBuilders.join(",")
          : "";
        // and the passes
        const parameterPasses = parameterBuilders.length
          ? "," + script.metadata.types.map((oid, i) => `_${i + 1}`).join(",")
          : "";
        generationBuffer.push(`
        async ${script.name}(${parameterString}) {
          return sqlScripts.${script.namespaceSegments.join(".")}${
            script.namespaceSegments.length ? "." : ""
          }${script.name}(this.superThis.context${parameterPasses});
        }
    `);
      } else {
        // and here is the depth first part, make a namespace and fill it
        generationBuffer.push(`
          public ${key} = new class {
       		  constructor(private superThis: Database) {}
        `);
        depthFirst(script);
        generationBuffer.push(`}(this.superThis)`);
      }
    });
  };
  // visit our entire script tree with some depth first search
  depthFirst(context.generatedFromSqlScripts);
  // close off Scripts outer scope
  generationBuffer.push(`}(this)`);

  //class end
  generationBuffer.push(`}`);
  await fs.promises.writeFile(
    path.join(context.generateInto, `index.ts`),
    await prettier.format(generationBuffer.join("\n"), {
      parser: "typescript",
    }),
  );
};

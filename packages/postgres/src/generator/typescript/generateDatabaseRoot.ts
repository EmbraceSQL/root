import { GenerationContext } from "..";
import { DatabaseOperation } from "../operations/database";
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
        // holder for all scripts provides a .Scripts grouping
        if (context.sqlScriptsFrom?.length) {
          return [
            `
    public Scripts = new class implements HasDatabase {
       		constructor(public database: Database) {}
        `,
          ].join("\n");
        } else {
          return "";
        }
      },
      after: async () => {
        return `}(this)`;
      },
    },
    [ASTKind.ScriptFolder]: {
      before: async (_, node) => {
        return `
          public ${node.typescriptName} = new class implements HasDatabase {
       		  constructor(private hasDatabase: HasDatabase) {
            }

            get database() {
              return this.hasDatabase.database;
            }
        `;
      },
      after: async () => {
        return `}(this)`;
      },
    },
    [ASTKind.Script]: {
      before: async (context, node) => {
        // passing in arguments
        const parameterPasses = node.argumentsType?.attributes?.length
          ? ", [" +
            node.argumentsType.attributes
              .map((a) => `parameters.${a.typescriptPropertyName}`)
              .join(",") +
            "]"
          : "";
        // just a bit of escaping of the passsed sql script
        const preparedSql = node.script.replace("`", "\\`");

        // pick results fields and add in null handling
        const recordPieceBuilders =
          node.resultsType?.attributes.map(
            (c) =>
              `${c.typescriptPropertyName}: undefinedIsNull(record.${c.typescriptPropertyName})`,
          ) ?? [];
        const parameters = node.argumentsType
          ? `parameters: ${node.argumentsType.typescriptNamespacedName}`
          : "";
        return `
         async ${node.typescriptPropertyName} (${parameters}) {
            const sql = this.database.context.sql;
            const response = await sql.unsafe(\`
                ${preparedSql}
                
                \`${parameterPasses});
            return response.map(record => ({ ${recordPieceBuilders.join(
              ",",
            )} }));
        `;
      },
      after: async () => {
        return `}`;
      },
    },
  };

  // include all schemas -- need those built in types
  return await context.database.visit({ ...context });
};

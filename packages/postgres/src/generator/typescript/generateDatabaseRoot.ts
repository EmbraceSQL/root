import { GenerationContext } from "..";
import { CreateOperation } from "./autocrud/create";
import { generateTypecastMap } from "./generateTypecastMap";
import { ASTKind, CompositeTypeNode, ScriptsNode } from "@embracesql/shared";

function nestedNamedClassVisitor(name: string) {
  return {
    before: async () => {
      return `
          public ${name} = new class implements HasDatabase {
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
  };
}

/**
 * Generate a root object class that serves as 'the database'.
 *
 * Consuming code will `new` up an instance of this generated
 * class. Then you just . autocomplete your way to the geneated
 * proc or query you want to call!
 */
export const generateDatabaseRoot = async (context: GenerationContext) => {
  return await context.database.visit({
    ...context,
    handlers: {
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
            `export class Database extends PostgresDatabase implements HasDatabase { `,
            `get database() { return this};`,
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
          ].join("\n");
        },
        after: async () => {
          return [
            // database class end
            `}`,
          ].join("\n");
        },
      },
      [ASTKind.Schema]: {
        before: async (_, node) =>
          nestedNamedClassVisitor(node.typescriptName).before(),
        after: async (_, node) =>
          nestedNamedClassVisitor(node.typescriptName).after(),
      },
      [ASTKind.Scripts]: nestedNamedClassVisitor(ScriptsNode.SCRIPTS),
      [ASTKind.ScriptFolder]: {
        before: async (_, node) =>
          nestedNamedClassVisitor(node.typescriptName).before(),
        after: async (_, node) =>
          nestedNamedClassVisitor(node.typescriptName).after(),
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
          // this will need to account for alias types
          const resultsFinalType = node.resultsResolvedType;
          // this is a bit over defensive programming -- scripts always
          // come back with composite types
          const recordPieceBuilders = (resultsFinalType as CompositeTypeNode)
            .attributes
            ? (resultsFinalType as CompositeTypeNode).attributes.map(
                (c) =>
                  `${c.typescriptPropertyName}: undefinedIsNull(record.${c.typescriptPropertyName})`,
              )
            : [];
          // and here is the really defensive part...
          console.assert(recordPieceBuilders.length);
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
      [ASTKind.Procedure]: {
        before: async (_, node) => {
          const resultType = `${node.resultsType?.typescriptNamespacedName}${
            node.returnsMany ? "[]" : ""
          }`;
          // function call start, passing in parameters
          const generationBuffer = [
            ` async ${node.typescriptPropertyName}(parameters : ${node.argumentsType?.typescriptNamespacedName}){`,
          ];
          // turn parameters into the postgres driver escape sequence
          // this is making a string interpolation with string interpoplation
          const parameterExpressions =
            node.argumentsType?.attributes.map(
              (a) =>
                (a.name ? `${a.name} =>` : ``) +
                ` \${ typed[${a.type.id}](undefinedIsNull(parameters.${a.typescriptPropertyName})) }`,
            ) ?? [];
          // if there is a composite -- pseudo -- return type, this will
          // need to call back into the sql driver to parse the results
          if (node.isPseudoType) {
            generationBuffer.push(`
            const parseResult = (context: Context,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              result: any)  => {
              return context.procTypes[${node.id}].parseFromPostgresIfRecord(context, result) as unknown as ${node.resultsType?.typescriptNamespacedName};
            } 
          `);
          }
          // and the call body
          generationBuffer.push(`
              console.assert(parameters);
              const sql = this.database.context.sql;
              const typed = sql.typed as unknown as PostgresTypecasts;
              const response = 
                  await sql\`
                  SELECT
                  ${node.databaseName}(${parameterExpressions.join(",")})\`;
              const results = response;
              const responseBody = ( ${(() => {
                // pseudo record -- which is always a table type but needs more parsing
                if (node.isPseudoType) {
                  return `results.map(x => parseResult(this.database.context, x.${node.nameInDatabase}))`;
                }
                // table cast of a defined type
                if (node.returnsMany) {
                  return `results.map(x => x.${node.nameInDatabase})`;
                }
                // pick out the scalar case
                return `results?.[0].${node.nameInDatabase}`;
              })()} ) as unknown as ${resultType};
              return responseBody;

    `);
          generationBuffer.push(`}`);

          return generationBuffer.join("\n");
        },
      },
      // tables host AutoCRUD
      [ASTKind.Table]: {
        before: async (_, node) =>
          nestedNamedClassVisitor(node.typescriptName).before(),
        after: async (_, node) =>
          nestedNamedClassVisitor(node.typescriptName).after(),
      },
      [ASTKind.CreateOperation]: CreateOperation,
    },
  });
};

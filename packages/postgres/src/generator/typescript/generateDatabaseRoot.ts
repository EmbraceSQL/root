import { AllOperation } from "./autocrud/all";
import { CreateOperation } from "./autocrud/create";
import { DeleteOperation } from "./autocrud/delete";
import { ReadOperation } from "./autocrud/read";
import { UpdateOperation } from "./autocrud/update";
import { generateTypecastMap } from "./generateTypecastMap";
import {
  ASTKind,
  BY_PRIMARY_KEY,
  CompositeTypeNode,
  GenerationContext,
  NamedASTNode,
} from "@embracesql/shared";

/**
 * Creating nested classes intead of namespaces to allow shared access
 * to the `database`.
 */
const NestedNamedClassVisitor = {
  before: async (context: GenerationContext, node: NamedASTNode) => {
    console.assert(context);
    return `
          public ${node.typescriptName} = new class implements HasDatabase {
       		  constructor(private hasDatabase: HasDatabase) {
            }

            get database() {
              return this.hasDatabase.database;
            }
        `;
  },
  after: async (context: GenerationContext, node: NamedASTNode) => {
    console.assert(context);
    console.assert(node);
    return `}(this)`;
  },
};

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
      [ASTKind.Schema]: NestedNamedClassVisitor,
      [ASTKind.Scripts]: NestedNamedClassVisitor,
      [ASTKind.ScriptFolder]: NestedNamedClassVisitor,
      [ASTKind.Script]: {
        before: async (context, node) => {
          const parameterPasses = node.parametersType?.attributes?.length
            ? ", [" +
              node.parametersType.attributes
                .map((a) => `parameters.${a.typescriptPropertyName}`)
                .join(",") +
              "]"
            : "";
          // just a bit of escaping of the passsed sql script
          const preparedSql = node.script.replace("`", "\\`");

          // pick results fields and add in null handling
          // this will need to account for alias types
          const resultsFinalType = node.resultsType;
          // this is a bit over defensive programming -- scripts always
          // come back with composite types
          const attributes = (resultsFinalType as CompositeTypeNode).attributes
            ? (resultsFinalType as CompositeTypeNode).attributes.map(
                (c) =>
                  `${c.typescriptPropertyName}: undefinedIsNull(${c.type.typescriptNamespacedName}.parse(r.${c.name}))`,
              )
            : [];
          // and here is the really defensive part...
          console.assert(attributes.length);
          const parameters = node.parametersType
            ? `parameters: ${node.parametersType.typescriptNamespacedName}`
            : "";
          return [
            await NestedNamedClassVisitor.before(context, node),
            `
          async call (${parameters}) {
            const sql = this.database.context.sql;
            const response = await sql.unsafe(\`
                ${preparedSql}
                
                \`${parameterPasses});
            return response.map(r => ({ ${attributes.join(",")} }));
          }
        `,
          ].join("\n");
        },
        after: NestedNamedClassVisitor.after,
      },
      [ASTKind.Procedures]: NestedNamedClassVisitor,
      [ASTKind.Procedure]: {
        before: async (_, node) => {
          // turn parameters into the postgres driver escape sequence
          // this is making a string interpolation with string interpoplation
          const parameterExpressions =
            node.parametersType?.attributes
              .map(
                (a) =>
                  (a.named ? `${a.name} =>` : ``) +
                  ` \${ typed[${a.type.id}](undefinedIsNull(parameters.${a.typescriptPropertyName})) }`,
              )
              .join(",") ?? "";
          const resultType = `${node.resultsType?.typescriptNamespacedName}`;
          // if there is a composite -- pseudo -- return type, this will
          // need to call back into the sql driver to parse the results
          const parseResult = node.isPseudoType
            ? `
            const parseResult = (context: Context, result: unknown) => {
              return context.procTypes[${node.id}].parseFromPostgresIfPseudoType(context, result) as unknown as ${node.resultsType?.typescriptNamespacedName};
            };
          `
            : `
            const parseResult = (context: Context, result: unknown) => {
              console.assert(context);
              return ${resultType}.parse(result);
            };
          `;
          // function call start, passing in parameters
          return [
            await NestedNamedClassVisitor.before(context, node),
            `async call(parameters : ${node.parametersType?.typescriptNamespacedName}) {`,
            `  console.assert(parameters);`,
            `  ${parseResult}`,
            `  const sql = this.database.context.sql;`,
            `  const typed = sql.typed as unknown as PostgresTypecasts;`,
            `  const response = await sql\`SELECT ${node.databaseName}(${parameterExpressions})\``,
            `  const results = response;`,
            `
              const responseBody = ( ${(() => {
                // table cast of a defined type
                if (node.returnsMany) {
                  return `results.map(x => parseResult(this.database.context, x.${node.nameInDatabase})).filter<${resultType}>((r):r is ${resultType} => r !== null)`;
                }
                // default to the scalar case
                return `${resultType}.parse(results?.[0].${node.nameInDatabase})`;
              })()} );
              return responseBody;
           `,
            `}`,
          ].join("\n");
        },
        after: NestedNamedClassVisitor.after,
      },
      // tables and indexes host AutoCRUD
      [ASTKind.Tables]: NestedNamedClassVisitor,
      [ASTKind.Table]: NestedNamedClassVisitor,
      [ASTKind.Index]: {
        before: NestedNamedClassVisitor.before,
        after: async (context, node) => {
          return [
            await NestedNamedClassVisitor.after(context, node),
            node.primaryKey
              ? `public get ${BY_PRIMARY_KEY}(){ return this.${node.typescriptName} };`
              : ``,
          ].join("\n");
        },
      },

      // C R U D - AutoCRUD!
      [ASTKind.CreateOperation]: CreateOperation,
      [ASTKind.ReadOperation]: ReadOperation,
      [ASTKind.AllOperation]: AllOperation,
      [ASTKind.UpdateOperation]: UpdateOperation,
      [ASTKind.DeleteOperation]: DeleteOperation,
    },
  });
};

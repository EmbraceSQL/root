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
  NamespaceVisitor,
  OPTIONS,
  PARAMETERS,
  REQUEST_PARAMETERS,
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
  return [
    await context.database.visit({
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
              `export class Database extends PostgresDatabase<PostgresTypecasts> implements HasDatabase { `,
              `get database() { return this };`,
              `get settings() { return this.context.settings as Settings };`,
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
          before: async (_, node) => {
            return `
            get ${node.typescriptName}() { return new ${node.typescriptNamespacedName}(this); }
            `;
          },
        },
        [ASTKind.Scripts]: NestedNamedClassVisitor,
        [ASTKind.ScriptFolder]: NestedNamedClassVisitor,
        [ASTKind.Script]: {
          before: async (context, node) => {
            const parametersExpression = node.parametersType?.attributes?.length
              ? ", [" +
                node.parametersType.attributes
                  .map(
                    (a) =>
                      `undefinedIsNull(${REQUEST_PARAMETERS.replace(
                        ".",
                        "?.",
                      )}?.${a.typescriptPropertyName})`,
                  )
                  .join(",") +
                "]"
              : "";
            const requestExpression = parametersExpression
              ? `{${PARAMETERS}, ${OPTIONS}}`
              : `{${OPTIONS}}`;
            // just a bit of escaping of the passsed sql script
            const preparedSql = node.script.replace("`", "\\`");

            // pick results fields and add in null handling
            // this will need to account for alias types
            const resultsFinalType = node.resultsType;
            // this is a bit over defensive programming -- scripts always
            // come back with composite types
            const attributes = (resultsFinalType as CompositeTypeNode)
              .attributes
              ? (resultsFinalType as CompositeTypeNode).attributes.map(
                  (c) =>
                    `${c.typescriptPropertyName}: undefinedIsNull(${c.type.typescriptNamespacedName}.parse(r.${c.name}))`,
                )
              : [];
            // and here is the really defensive part...
            console.assert(attributes.length);
            const parameters = node.parametersType
              ? `${PARAMETERS}: ${node.parametersType.typescriptNamespacedName}`
              : "";
            const options = parameters.length
              ? `, ${OPTIONS}?: InvokeQueryOptions`
              : `${OPTIONS}?: InvokeQueryOptions`;
            return [
              await NestedNamedClassVisitor.before(context, node),
              `
          async call (${parameters}${options}) {
            const response = await this.database.invoke( (sql, request) => sql.unsafe(\`
                ${preparedSql}
                \`${parametersExpression}), ${requestExpression});
            return response.map(r => ({ ${attributes.join(",")} }));
          }
        `,
            ].join("\n");
          },
          after: NestedNamedClassVisitor.after,
        },
      },
    }),
    // schema collects in database objects
    await context.database.visit({
      ...context,
      handlers: {
        [ASTKind.Schema]: {
          before: async (_, node) => {
            return `
          export class ${node.typescriptName} implements HasDatabase {
       		  constructor(private hasDatabase: HasDatabase) {
            }

            get database() {
              return this.hasDatabase.database;
            }

        `;
          },
          after: async () => {
            return `}`;
          },
        },
        [ASTKind.Procedures]: {
          before: async (_, node) => {
            return [
              `get ${node.typescriptName} () { return new ${node.typescriptNamespacedName}(this)} `,
            ].join("\n");
          },
        },
        [ASTKind.Tables]: {
          before: async (_, node) => {
            return [
              `get ${node.typescriptName} () { return new ${node.typescriptNamespacedName}(this)} `,
            ].join("\n");
          },
        },
      },
    }),
    // procedures collection holder
    await context.database.visit({
      ...context,
      handlers: {
        [ASTKind.Schema]: NamespaceVisitor,
        [ASTKind.Procedures]: {
          before: async (_, node) => {
            return `
          export class ${node.typescriptName} implements HasDatabase {
       		  constructor(private hasDatabase: HasDatabase) {
            }

            get database() {
              return this.hasDatabase.database;
            }

        `;
          },
          after: async () => {
            return `}`;
          },
        },
        [ASTKind.Procedure]: {
          before: async (_, node) => {
            return [
              `get ${node.typescriptName} () { return new ${node.typescriptNamespacedName}(this)} `,
            ].join("\n");
          },
        },
      },
    }),
    // stored callable procedure
    await context.database.visit({
      ...context,
      handlers: {
        [ASTKind.Schema]: NamespaceVisitor,
        [ASTKind.Procedures]: NamespaceVisitor,

        [ASTKind.Procedure]: {
          before: async (_, node) => {
            // turn parameters into the postgres driver escape sequence
            // this is making a string interpolation with string interpoplation
            const parameterExpressions =
              node.parametersType?.attributes
                .map(
                  (a) =>
                    (a.named ? `${a.name} =>` : ``) +
                    ` \${ typed[${
                      a.type.id
                    }](undefinedIsNull(${REQUEST_PARAMETERS.replace(
                      ".",
                      "?.",
                    )}?.${a.typescriptPropertyName})) }`,
                )
                .join(",") ?? "";
            const requestExpression = parameterExpressions
              ? `{${PARAMETERS}, ${OPTIONS}}`
              : `{${OPTIONS}}`;
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
            const parameters = node.parametersType
              ? `${PARAMETERS} : ${node.parametersType?.typescriptNamespacedName}`
              : ``;
            const options = parameters.length
              ? `, ${OPTIONS}?: InvokeQueryOptions`
              : `${OPTIONS}?: InvokeQueryOptions`;
            return [
              `export class ${node.typescriptName} implements HasDatabase {`,
              `  constructor(private hasDatabase: HasDatabase) {}`,
              `  get database() { return this.hasDatabase.database; }`,
              `  get name() { return "${node.name}"; }`,

              `async call(${parameters}${options}) {`,
              `  ${parseResult}`,
              `  const typed = this.database.typed;`,
              `  return await this.database.invoke( async (sql, request) => {`,
              `    const results = await  sql\`SELECT ${node.databaseName}(${parameterExpressions})\`;`,
              `
                   return ${(() => {
                     // table cast of a defined type
                     if (node.returnsMany) {
                       return `results.map(x => parseResult(this.database.context, x.${node.nameInDatabase})).filter<${resultType}>((r):r is ${resultType} => r !== null)`;
                     }
                     // default to the scalar case
                     return `${resultType}.parse(results?.[0].${node.nameInDatabase})`;
                   })()};`,
              `}, ${requestExpression});`,
              `}`,
            ].join("\n");
          },
          after: async () => {
            return `}`;
          },
        },
      },
    }),
    // tables collection holder
    await context.database.visit({
      ...context,
      handlers: {
        [ASTKind.Schema]: NamespaceVisitor,
        [ASTKind.Tables]: {
          before: async (_, node) => {
            return `
          export class ${node.typescriptName} implements HasDatabase {
       		  constructor(private hasDatabase: HasDatabase) {
            }

            get database() {
              return this.hasDatabase.database;
            }
        `;
          },
          after: async () => {
            return `}`;
          },
        },
        [ASTKind.Table]: {
          before: async (_, node) => {
            return [
              `get ${node.typescriptName} () { return new ${node.typescriptNamespacedName}(this)} `,
            ].join("\n");
          },
        },
      },
    }),

    // table and table operations
    await context.database.visit({
      ...context,
      handlers: {
        [ASTKind.Schema]: NamespaceVisitor,
        [ASTKind.Tables]: NamespaceVisitor,
        [ASTKind.Table]: {
          before: async (_, node) => {
            return `
          export class ${node.typescriptName} implements HasDatabase {
       		  constructor(private hasDatabase: HasDatabase) {
            }

            get database() {
              return this.hasDatabase.database;
            }
        `;
          },
          after: async () => {
            return `}`;
          },
        },
        [ASTKind.Index]: {
          before: async (context, node) => {
            return [
              node.primaryKey
                ? `public get ${BY_PRIMARY_KEY} () { return new ${node.typescriptNamespacedName}(this)}`
                : ``,
              `get ${node.typescriptName} () { return new ${node.typescriptNamespacedName}(this)} `,
            ].join("\n");
          },
        },

        // C R U D - AutoCRUD!
        [ASTKind.CreateOperation]: CreateOperation,
        [ASTKind.AllOperation]: AllOperation,
      },
    }),
    // index and index operations
    await context.database.visit({
      ...context,
      handlers: {
        [ASTKind.Schema]: NamespaceVisitor,
        [ASTKind.Tables]: NamespaceVisitor,
        [ASTKind.Table]: NamespaceVisitor,
        [ASTKind.Index]: {
          before: async (_, node) => {
            return `
          export class ${node.typescriptName} implements HasDatabase {
       		  constructor(private hasDatabase: HasDatabase) {
            }

            get database() {
              return this.hasDatabase.database;
            }

        `;
          },
          after: async () => {
            return `}`;
          },
        },

        // C R U D - AutoCRUD!
        // well - R U D - these are by index :)
        [ASTKind.ReadOperation]: ReadOperation,
        [ASTKind.UpdateOperation]: UpdateOperation,
        [ASTKind.DeleteOperation]: DeleteOperation,
      },
    }),
  ].join("\n");
};

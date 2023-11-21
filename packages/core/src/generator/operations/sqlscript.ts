import { Context } from "../../context";
import { Operation } from "./operation";
import { camelCase, pascalCase } from "change-case";
import * as fs from "fs/promises";
import * as path from "path";
import postgres from "postgres";

/**
 * Keep track of a single script that was used to generated a typed wrapper.
 */
class SqlScriptOperation implements Operation {
  script?: string;
  metadata?: postgres.Statement;
  name: string;

  constructor(public scriptPath: string) {
    this.name = path.basename(this.scriptPath, ".sql");
  }

  async build(context: Context) {
    this.metadata = await context.sql.file(this.scriptPath).describe();
    this.script = await fs.readFile(this.scriptPath, { encoding: "utf8" });
  }

  get typescriptName() {
    // individual scripts are methods, not types
    return camelCase(this.name);
  }

  typescriptDefinition(context: Context): string {
    if (!this.metadata || !this.script) {
      throw new Error(`Forgot to call build`);
    }
    const generationBuffer = [];

    // snippet will build the ordered parameter list
    const parameterBuilders = this.metadata.types.map(
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
      ? ", [" + this.metadata.types.map((oid, i) => `_${i + 1}`).join(",") + "]"
      : "";

    // snippet will pick resultset fields to type map
    const recordPieceBuilders = this.metadata.columns.map(
      (c) => `${camelCase(c.name)}: undefinedIsNull(record.${c.name})`,
    );

    // just a bit of escaping of the passsed sql script
    const preparedSql = this.script.replace("`", "\\`");

    // main call body
    generationBuffer.push(`
         ${this.typescriptName} = async (${parameterString})  => {
            const response = (await this.database.context.sql.begin(async (sql: postgres.Sql) =>{
                return await sql.unsafe(\`
                ${preparedSql}
                
                \`${parameterPasses});
            }))
            return response.map(record => ({ ${recordPieceBuilders.join(
              ",",
            )} }));
        }
    `);
    return generationBuffer.join("\n");
  }
}

/**
 * Build up a tree of operations from a given folder.
 */
export class SqlScriptOperations implements Operation {
  static async factory(context: Context, rootDirectory: string) {
    const root = new SqlScriptOperations(rootDirectory);
    await root.build(context);
    return root;
  }

  scripts: SqlScriptOperation[] = [];
  namespaces: SqlScriptOperations[] = [];
  name: string;
  private constructor(public rootDirectory: string) {
    this.name = rootDirectory.split(path.sep).pop() ?? "";
  }

  async build(context: Context) {
    const inPath = await fs.readdir(this.rootDirectory, {
      withFileTypes: true,
    });
    for (const entry of inPath) {
      if (entry.isDirectory()) {
        this.namespaces.push(
          new SqlScriptOperations(path.join(entry.path, entry.name)),
        );
      } else if (entry.name.endsWith(".sql")) {
        this.scripts.push(
          new SqlScriptOperation(path.join(entry.path, entry.name)),
        );
      }
    }

    // max async
    await Promise.all(this.namespaces.map((n) => n.build(context)));
    await Promise.all(this.scripts.map((n) => n.build(context)));
  }

  get typescriptName() {
    return pascalCase(this.name);
  }

  typescriptDefinition(context: Context): string {
    const generationBuffer = [``];
    generationBuffer.push(`
          public ${this.typescriptName} = new class implements HasDatabase {
       		  constructor(private hasDatabase: HasDatabase) {
            }

            get database() {
              return this.hasDatabase.database;
            }
        `);
    this.scripts.forEach((s) =>
      generationBuffer.push(s.typescriptDefinition(context)),
    );
    // and our nested spaces
    this.namespaces.forEach((s) =>
      generationBuffer.push(s.typescriptDefinition(context)),
    );
    generationBuffer.push(`}(this)`);
    return generationBuffer.join("\n");
  }
}

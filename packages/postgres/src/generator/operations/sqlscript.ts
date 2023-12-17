import { GenerationContext } from "..";
import { Operation, Operations } from "./operation";
import { camelCase, pascalCase } from "change-case";
import * as fs from "fs/promises";
import * as path from "path";
import postgres from "postgres";

export const SCRIPT_TYPES_NAMESPACE = "ScriptTypes";

/**
 * Keep track of a single script that was used to generated a typed wrapper.
 */
class SqlScriptOperation implements Operation {
  script?: string;
  metadata?: postgres.Statement;

  constructor(
    public rootDirectory: string,
    public scriptPath: string,
  ) {}

  get name() {
    return path.basename(this.scriptPath, ".sql");
  }

  dispatchName(context: GenerationContext): string {
    console.assert(context);
    const branchPath = path.dirname(
      path.relative(this.rootDirectory, this.scriptPath),
    );
    const segments = [
      SCRIPT_TYPES_NAMESPACE,
      ...branchPath.split(path.sep),
    ].filter((v) => v !== ".");
    return `${segments.map((p) => pascalCase(p)).join(".")}.${
      this.typescriptName
    }`;
  }

  typescriptParametersType(context: GenerationContext) {
    console.assert(context);
    if (!this.metadata || !this.script) {
      throw new Error(`Forgot to call build`);
    }
    if (this.metadata?.types.length) {
      return `${this.dispatchName(context)}Parameters`;
    } else {
      return undefined;
    }
  }

  typescriptValuesType(context: GenerationContext) {
    console.assert(context);
    return undefined;
  }

  async build(context: GenerationContext) {
    this.metadata = await context.sql.file(this.scriptPath).describe();
    this.script = await fs.readFile(this.scriptPath, { encoding: "utf8" });
  }

  get typescriptName() {
    // individual scripts are methods, not types
    return camelCase(this.name);
  }

  typescriptDefinition(context: GenerationContext): string {
    if (!this.metadata || !this.script) {
      throw new Error(`Forgot to call build`);
    }
    const generationBuffer = [];

    // and the passes
    const parameterPasses = this.metadata.types.length
      ? ", [" +
        this.metadata.types.map((oid, i) => `parameters._${i + 1}`).join(",") +
        "]"
      : "";

    // snippet will pick resultset fields to type map
    const recordPieceBuilders = this.metadata.columns.map(
      (c) => `${camelCase(c.name)}: undefinedIsNull(record.${c.name})`,
    );

    // just a bit of escaping of the passsed sql script
    const preparedSql = this.script.replace("`", "\\`");

    const parameters = this.metadata.types.length
      ? `parameters: ${this.typescriptParametersType(context)}`
      : ``;

    // main call body
    generationBuffer.push(`
         async ${this.typescriptName} (${parameters}) {
            const sql = this.database.context.sql;
            const response = await sql.unsafe(\`
                ${preparedSql}
                
                \`${parameterPasses});
            return response.map(record => ({ ${recordPieceBuilders.join(
              ",",
            )} }));
        }
    `);
    return generationBuffer.join("\n");
  }

  typescriptTypeDefinition(context: GenerationContext): string {
    if (!this.metadata || !this.script) {
      throw new Error(`Forgot to call build`);
    }
    if (this.metadata.types.length) {
      // at this level - not using the fully qualified name.
      const generationBuffer = [
        `export interface ${this.typescriptName}Parameters {`,
      ];

      // snippet will build the ordered parameter list
      this.metadata.types.forEach((oid, i) =>
        generationBuffer.push(
          `_${i + 1}: PgCatalog.${context.resolveType(oid).typescriptName};`,
        ),
      );

      // close off the interface
      generationBuffer.push(`}`);

      return generationBuffer.join("\n");
    } else {
      // well, no parameters is parameters...
      return ``;
    }
  }
}

/**
 * Build up a tree of operations from a given folder.
 */
export class SqlScriptOperations implements Operations {
  static async factory(context: GenerationContext, scriptDirectory: string) {
    // this is a tiny bit confusing, but the 'root' directory is one up from
    // the script directory, so we can have fully qualified . paths to callable
    // scripts that match the file structure.
    const root = new SqlScriptOperations(
      path.join(scriptDirectory, ".."),
      scriptDirectory,
    );
    await root.build(context);
    return root;
  }

  scripts: SqlScriptOperation[] = [];
  namespaces: SqlScriptOperations[] = [];
  name: string;
  private constructor(
    public rootDirectory: string,
    public directory: string,
  ) {
    this.name = directory.split(path.sep).pop() ?? "";
  }

  get dispatchable(): Operation[] {
    return [...this.namespaces.flatMap((n) => n.dispatchable), ...this.scripts];
  }

  async build(context: GenerationContext) {
    const inPath = await fs.readdir(this.directory, {
      withFileTypes: true,
    });
    for (const entry of inPath) {
      if (entry.isDirectory()) {
        this.namespaces.push(
          new SqlScriptOperations(
            this.rootDirectory,
            path.join(entry.path, entry.name),
          ),
        );
      } else if (entry.name.endsWith(".sql")) {
        this.scripts.push(
          new SqlScriptOperation(
            this.rootDirectory,
            path.join(entry.path, entry.name),
          ),
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

  typescriptDefinition(context: GenerationContext): string {
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

  typescriptTypeDefinition(context: GenerationContext): string {
    const generationBuffer = [``];
    generationBuffer.push(`export namespace ${this.typescriptName} {`);
    // scripts at this level
    this.scripts.forEach((s) =>
      generationBuffer.push(s.typescriptTypeDefinition(context)),
    );
    // and our nested spaces
    this.namespaces.forEach((s) =>
      generationBuffer.push(s.typescriptTypeDefinition(context)),
    );
    // close off namespace
    generationBuffer.push(`}`);

    return generationBuffer.join("\n");
  }
}

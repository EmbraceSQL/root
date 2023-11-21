import { Context } from "../../context";
import { PGNamespace } from "../pgtype/pgnamespace";
import { PGProc } from "../pgtype/pgproc";
import { Operation } from "./operation";

/**
 * Build up a namespace of operations.
 */
export class ProcOperations implements Operation {
  static async factory(context: Context) {
    const ret = new ProcOperations(context);
    await ret.build(context);
    return ret;
  }

  private namespaces: ProcNamespaceOperation[];

  private constructor(context: Context) {
    this.namespaces = context.namespaces.map(
      (n) => new ProcNamespaceOperation(n),
    );
  }

  async build(context: Context) {
    await Promise.all(this.namespaces.map((n) => n.build(context)));
  }

  typescriptDefinition(context: Context): string {
    return this.namespaces
      .map((n) => n.typescriptDefinition(context))
      .join("\n");
  }
}

/**
 * A single namespace full of procs.
 */
class ProcNamespaceOperation implements Operation {
  private procs: ProcOperation[];

  constructor(private namespace: PGNamespace) {
    this.procs = namespace.procs.map((p) => new ProcOperation(p));
  }

  async build(context: Context) {
    await Promise.all(this.procs.map((p) => p.build(context)));
  }

  typescriptDefinition(context: Context): string {
    const generationBuffer = [
      `
        public ${this.namespace.typescriptName} = new class {
       		constructor(private database: Database) {}
        `,
    ];
    this.procs.forEach((p) =>
      generationBuffer.push(p.typescriptDefinition(context)),
    );

    generationBuffer.push(`}(this)`);
    return generationBuffer.join("\n");
  }
}

/**
 * A single proc.
 */
class ProcOperation implements Operation {
  constructor(private proc: PGProc) {}
  async build(context: Context) {
    // currently nothing to do here
    console.assert(context);
  }
  typescriptDefinition(context: Context): string {
    const generationBuffer = [
      ` async ${
        this.proc.typescriptName
      }(parameters : schemas.${this.proc.typescriptNameForPostgresArguments(
        true,
      )}){`,
    ];
    // and the call body
    generationBuffer.push(`
              console.assert(parameters);
              const sql = this.database.context.sql;
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const typed = sql.typed as unknown as PostgresTypecasts;
              const response = (await sql.begin(async (sql: postgres.Sql) => {
                  return await sql\`
                  SELECT
                  ${
                    this.proc.postgresName
                  }${this.proc.typescriptProcedureCallArguments(context)};
                  \`
              }));
              const results = response;
              const responseBody = ( ${(() => {
                // pseudo record -- which is always a table type but needs more parsing
                if (this.proc.returnsPseudoTypeRecord) {
                  return `results.map(x => this.parse${this.proc.typescriptName}Result(this.database.context, x.${this.proc.resultsetName}))`;
                }
                // table cast of a defined type
                if (this.proc.returnsSet) {
                  return `results.map(x => x.${this.proc.resultsetName})`;
                }
                // pick out the scalar case
                return `results?.[0].${this.proc.resultsetName}`;
              })()} ) as unknown as schemas.${this.proc.typescriptNameForPostgresResult(
                true,
              )};
              return responseBody;

    `);
    generationBuffer.push(`}`);
    // parser
    if (this.proc.returnsPseudoTypeRecord) {
      generationBuffer.push(`
            const parse${this.proc.typescriptName}Result = (context: Context,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              result: any) : schemas.${this.proc.typescriptNameForPostgresResultsetRecord(
                true,
              )} => {
              return context.procTypes.${
                this.proc.postgresMarshallName
              }.parseFromPostgresIfRecord(context, result) as unknown as schemas.${this.proc.typescriptNameForPostgresResultsetRecord(
                true,
              )};
            } 
     `);
    }
    return generationBuffer.join("\n");
  }
}

import { Context } from "../../context";
import { PGNamespace } from "../pgtype/pgnamespace";
import { Operation } from "./operation";
import { ProcOperation } from "./proc";
import { TableOperation } from "./table";

/**
 * Build up a full database of operations.
 */
export class DatabaseOperation implements Operation {
  static async factory(context: Context) {
    const ret = new DatabaseOperation(context);
    await ret.build(context);
    return ret;
  }

  private namespaces: SchemaOperation[];

  private constructor(context: Context) {
    this.namespaces = context.namespaces.map((n) => new SchemaOperation(n));
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
 * A single schema full of operations in the database.
 *
 * This is referred to in the postgres catalog as a namespace.
 */
export class SchemaOperation implements Operation {
  private operations: Operation[];

  constructor(private namespace: PGNamespace) {
    this.operations = [];
    this.operations.push(...namespace.procs.map((p) => new ProcOperation(p)));
    this.operations.push(...namespace.tables.map((t) => new TableOperation(t)));
  }

  async build(context: Context) {
    await Promise.all(this.operations.map((p) => p.build(context)));
  }

  typescriptDefinition(context: Context): string {
    const generationBuffer = [
      `
        public ${this.namespace.typescriptName} = new class implements HasDatabase {
       		constructor(public database: Database) {
            }
        `,
    ];
    this.operations.forEach((p) =>
      generationBuffer.push(p.typescriptDefinition(context)),
    );

    generationBuffer.push(`}(this)`);
    return generationBuffer.join("\n");
  }
}

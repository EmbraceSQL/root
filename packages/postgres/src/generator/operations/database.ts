import { GenerationContext } from "..";
import { Context } from "../../context";
import { PGNamespace } from "../pgtype/pgnamespace";
import { PGTable } from "../pgtype/pgtable";
import { CreateOperation } from "./autocrud/create";
import { DeleteOperations } from "./autocrud/delete";
import { ReadOperations } from "./autocrud/read";
import { UpdateOperations } from "./autocrud/update";
import {
  Operation,
  Operations,
  TypescriptGenerateable,
  isOperations,
} from "./operation";
import { ProcOperation } from "./proc";

/**
 * Build up a full database of operations.
 */
export class DatabaseOperation implements Operations {
  static async factory(context: GenerationContext) {
    const ret = new DatabaseOperation(context);
    await ret.build(context);
    return ret;
  }

  private namespaces: SchemaOperation[];

  private constructor(context: GenerationContext) {
    this.namespaces = context.namespaces
      // skip over excluded schemas -- no need for operations to be generated
      .filter((n) => !(context.skipSchemas ?? []).includes(n.namespace))
      .map((n) => new SchemaOperation(n));
  }

  async build(context: Context) {
    await Promise.all(this.namespaces.map((n) => n.build(context)));
  }

  get dispatchable() {
    return this.namespaces.flatMap((n) => n.dispatchable);
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
export class SchemaOperation implements Operations {
  private operations: TypescriptGenerateable[];

  constructor(private namespace: PGNamespace) {
    this.operations = [];
    this.operations.push(...namespace.procs.map((p) => new ProcOperation(p)));
    this.operations.push(
      ...namespace.tables.map((t) => new TableOperations(t)),
    );
  }

  get dispatchable(): Operation[] {
    const ret = this.operations
      .flatMap((c) => (isOperations(c) ? c.dispatchable : c))
      .filter((o) => !isOperations(o));
    return ret as Operation[];
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

/**
 * Individual tables in the database expose operations for AutoCRUD.
 */
class TableOperations implements Operations {
  private cruds: TypescriptGenerateable[];
  constructor(private table: PGTable) {
    this.cruds = [
      new ReadOperations(table),
      new DeleteOperations(table),
      new UpdateOperations(table),
      new CreateOperation(table),
    ];
  }

  get dispatchable(): Operation[] {
    const ret = this.cruds
      .flatMap((c) => (isOperations(c) ? c.dispatchable : c))
      .filter((o) => !isOperations(o));
    return ret as Operation[];
  }

  async build(context: Context) {
    await Promise.all(this.cruds.map((o) => o.build(context)));
  }

  typescriptDefinition(context: Context): string {
    console.assert(context);
    const generationBuffer = [
      `
        public ${this.table.typescriptName} = new class implements HasDatabase {
       		constructor(private hasDatabase: HasDatabase) {
            }

            get database() {
              return this.hasDatabase.database;
            }
        `,
    ];
    this.cruds.forEach((o) =>
      generationBuffer.push(o.typescriptDefinition(context)),
    );

    generationBuffer.push(`}(this)`);
    return generationBuffer.join("\n");
  }
}

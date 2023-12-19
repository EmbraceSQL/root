import { GenerationContext } from "..";
import { Context } from "../../context";
import { PGIndex } from "../pgtype/pgindex";
import { PGTable } from "../pgtype/pgtable";
import { PGTypeComposite } from "../pgtype/pgtypecomposite";
import { Operation, Operations } from "./operation";
import { camelCase } from "change-case";

/**
 * A single operation on a table.
 */
export abstract class TableOperation implements Operation {
  constructor(public table: PGTable) {}

  async build(context: Context) {
    console.assert(context);
  }

  typescriptDefinition(context: Context): string {
    console.assert(context);
    throw new Error("not implemented");
  }

  dispatchName(context: Context): string {
    const namespace = context.namespaces.find(
      (n) => n.nspname === this.table.table.nspname,
    );
    return `${namespace?.typescriptName}.${this.table.typescriptName}`;
  }

  typescriptValuesType(context: GenerationContext): string | undefined {
    console.assert(context);
    return undefined;
  }

  typescriptParametersType(context: GenerationContext): string | undefined {
    console.assert(context);
    return undefined;
  }

  /**
   * Table return processing, this is used for SELECT and RETURNING.
   */
  protected typescriptTableReturnStatementsFromResponse(
    context: Context,
  ): string {
    const tableType = context.resolveType<PGTypeComposite>(
      this.table.table.tabletypeoid,
    );
    const generationBuffer = [""];
    // add in some types
    generationBuffer.push(
      `const results = ${tableType.postgresResultRecordToTypescript}`,
    );
    generationBuffer.push(`return results[0]`);
    return generationBuffer.join("\n");
  }
}

/**
 * A single operation on a table by index.
 */
export class TableIndexOperation extends TableOperation {
  constructor(
    public table: PGTable,
    public index: PGIndex,
  ) {
    super(table);
  }

  dispatchName(context: Context): string {
    const namespace = context.namespaces.find(
      (n) => n.nspname === this.table.table.nspname,
    );
    return `${namespace?.typescriptName}.${
      this.table.typescriptName
    }.${camelCase(this.index.typescriptName)}`;
  }

  typescriptParametersType(context: GenerationContext) {
    const tableType = context.resolveType<PGTypeComposite>(
      this.table.table.tabletypeoid,
    );
    const namespace = context.namespaces.find(
      (n) => n.nspname === this.table.table.nspname,
    );
    return `${namespace?.typescriptName}.Tables.${tableType.typescriptName}.${this.index.typescriptName}`;
  }

  /**
   * Return type declaration based on the index.
   */
  protected typescriptReturnType(context: GenerationContext): string {
    const table = context.database.resolveTable(this.table.table.tabletypeoid)!;

    if (this.index.unique) {
      return `Promise<${table.typescriptNamespacedName}.Record>`;
    } else {
      return `Promise<${table.typescriptNamespacedName}.Record[]>`;
    }
  }

  /**
   * Table return processing, this is used for SELECT and RETURNING.
   */
  protected typescriptTableReturnStatementsFromResponse(
    context: Context,
  ): string {
    const tableType = context.resolveType<PGTypeComposite>(
      this.table.table.tabletypeoid,
    );
    const generationBuffer = [""];
    // add in some types
    generationBuffer.push(
      `const results = ${tableType.postgresResultRecordToTypescript}`,
    );
    // if this is a unique index, pull back a single record
    // which makes this way more KV like than always having an array back
    if (this.index.index.indisunique) {
      generationBuffer.push(`return results[0]`);
    } else {
      generationBuffer.push(`return results`);
    }

    return generationBuffer.join("\n");
  }
}

/**
 * Builds up an operation per table per index.
 */
export abstract class TableIndexOperations implements Operations {
  private operations: Operation[];
  constructor(
    public table: PGTable,
    readonly OperationClass: new (
      table: PGTable,
      index: PGIndex,
    ) => TableIndexOperation,
  ) {
    this.operations = table.indexes.map(
      (index) => new OperationClass(table, index),
    );
  }

  get dispatchable() {
    return this.operations;
  }

  typescriptValuesType(context: GenerationContext): string | undefined {
    console.assert(context);
    return undefined;
  }

  typescriptParametersType(context: GenerationContext): string | undefined {
    console.assert(context);
    return undefined;
  }

  async build(context: GenerationContext) {
    await Promise.all(this.operations.map((o) => o.build(context)));
  }

  typescriptDefinition(context: Context): string {
    const generationBuffer = [""];
    this.operations.forEach((o) =>
      generationBuffer.push(o.typescriptDefinition(context)),
    );
    return generationBuffer.join("\n");
  }
}

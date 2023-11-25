import { Context } from "../../context";
import { PGIndex } from "../pgtype/pgindex";
import { PGTable } from "../pgtype/pgtable";
import { PGTypeComposite } from "../pgtype/pgtypecomposite";

/**
 * The operation interface. Each operation is responsible for generating itself.
 */
export interface Operation {
  /**
   * Build up the needed metadata.
   */
  build(context: Context): Promise<void>;
  /**
   * Generate the source string defining the operation.
   */
  typescriptDefinition(context: Context): string;
}

/**
 * Operations on a table.
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

  /**
   * Table return processing, this is used for SELECT and RETURNING.
   */
  protected typescriptTableReturnStatementsFromResponse(
    context: Context,
    index: PGIndex,
  ): string {
    const tableType = context.resolveType<PGTypeComposite>(
      this.table.table.tabletypeoid,
    );
    const generationBuffer = [""];
    // add in some types
    generationBuffer.push(
      `const results = ${tableType.postgresResultRecordToTypescript(context)}`,
    );
    // if this is a unique index, pull back a single record
    // which makes this way more KV like than always having an array back
    if (index.index.indisunique) {
      generationBuffer.push(`return results[0]`);
    } else {
      generationBuffer.push(`return results`);
    }

    return generationBuffer.join("\n");
  }
}

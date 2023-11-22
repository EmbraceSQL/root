import { PGTable } from "../../pgtype/pgtable";
import { Operation } from "../operation";
import { Context } from "@embracesql/core/src/context";

/**
 * AutoCRUD reads for a table.
 */
export class ReadOperation implements Operation {
  constructor(private table: PGTable) {}

  async build(context: Context) {
    console.assert(context);
  }

  typescriptDefinition(context: Context): string {
    console.assert(context);
    const generationBuffer = [""];

    return generationBuffer.join("\n");
  }
}

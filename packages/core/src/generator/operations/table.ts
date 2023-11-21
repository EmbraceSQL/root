import { Context } from "../../context";
import { PGTable } from "../pgtype/pgtable";
import { Operation } from "./operation";

/**
 * Individual tables in the database expose operations for AutoCRUD.
 */
export class TableOperation implements Operation {
  constructor(private table: PGTable) {}

  async build(context: Context) {
    console.assert(context);
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

    generationBuffer.push(`}(this)`);
    return generationBuffer.join("\n");
  }
}

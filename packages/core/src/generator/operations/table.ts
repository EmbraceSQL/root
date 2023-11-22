import { Context } from "../../context";
import { PGTable } from "../pgtype/pgtable";
import { ReadOperation } from "./autocrud/read";
import { Operation } from "./operation";

/**
 * Individual tables in the database expose operations for AutoCRUD.
 */
export class TableOperation implements Operation {
  private operations: Operation[];
  constructor(private table: PGTable) {
    this.operations = [new ReadOperation(table)];
  }

  async build(context: Context) {
    await Promise.all(this.operations.map((o) => o.build(context)));
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
    this.operations.forEach((o) =>
      generationBuffer.push(o.typescriptDefinition(context)),
    );

    generationBuffer.push(`}(this)`);
    return generationBuffer.join("\n");
  }
}

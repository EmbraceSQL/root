import { PGTable } from "../../pgtype/pgtable";
import { PGTypeComposite } from "../../pgtype/pgtypecomposite";
import { Operation } from "../operation";
import { Context } from "@embracesql/core/src/context";
import { pascalCase } from "change-case";

/**
 * AutoCRUD deletes by index for a table.
 */
export class DeleteOperation implements Operation {
  constructor(private table: PGTable) {}

  async build(context: Context) {
    console.assert(context);
  }

  typescriptDefinition(context: Context): string {
    console.assert(context);
    const generationBuffer = [""];
    const tableType = context.resolveType<PGTypeComposite>(
      this.table.table.tabletypeoid,
    );
    const namespace = context.namespaces.find(
      (n) => n.nspname === this.table.table.nspname,
    );
    for (const index of this.table.indexes) {
      const parameters = `parameters: ${namespace?.typescriptName}.Tables.${this.table.typescriptName}.${index.typescriptName}`;

      generationBuffer.push(
        `async delete${pascalCase(index.typescriptName)}(${parameters}){`,
      );
      generationBuffer.push(
        `
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      `,
      );

      // query using postgres driver bindings to the index
      const sql = `DELETE FROM ${
        tableType.postgresName
      } WHERE ${index.sqlPredicate(context)}`;
      generationBuffer.push(`await sql\`${sql}\``);

      generationBuffer.push(`}`);
    }

    return generationBuffer.join("\n");
  }
}

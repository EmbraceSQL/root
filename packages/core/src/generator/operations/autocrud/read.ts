import { PGTypeComposite } from "../../pgtype/pgtypecomposite";
import { TableOperation } from "../operation";
import { Context } from "@embracesql/core/src/context";
import { camelCase } from "change-case";

/**
 * AutoCRUD reads by index for a table.
 */
export class ReadOperation extends TableOperation {
  typescriptDefinition(context: Context): string {
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
        `async ${camelCase(index.typescriptName)}(${parameters}){`,
      );
      generationBuffer.push(
        `
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      `,
      );
      // query using postgres driver bindings to the index
      const sql = `SELECT ${tableType.sqlColumns(context)} FROM ${
        tableType.postgresName
      } WHERE ${index.sqlPredicate(context)}`;
      generationBuffer.push(`const response = await sql\`${sql}\``);

      generationBuffer.push(
        this.typescriptTableReturnStatementsFromResponse(context, index),
      );

      generationBuffer.push(`}`);
    }

    return generationBuffer.join("\n");
  }
}

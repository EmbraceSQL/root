import { Context } from "../../../context";
import { PGTable } from "../../pgtype/pgtable";
import { PGTypeComposite } from "../../pgtype/pgtypecomposite";
import { TableIndexOperation, TableIndexOperations } from "../table";
import { pascalCase } from "change-case";

/**
 * AutoCRUD deletes by index for a table.
 */
export class DeleteOperations extends TableIndexOperations {
  constructor(public table: PGTable) {
    super(table, DeleteOperation);
  }
}

class DeleteOperation extends TableIndexOperation {
  typescriptDefinition(context: Context): string {
    const generationBuffer = [""];
    const tableType = context.resolveType<PGTypeComposite>(
      this.table.table.tabletypeoid,
    );
    const namespace = context.namespaces.find(
      (n) => n.nspname === this.table.table.nspname,
    );
    const parameters = `parameters: ${namespace?.typescriptName}.Tables.${this.table.typescriptName}.${this.index.typescriptName}`;

    generationBuffer.push(
      `async delete${pascalCase(
        this.index.typescriptName,
      )}(${parameters}): ${this.typescriptReturnType(context)}{`,
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
    } WHERE ${this.index.sqlPredicate(
      context,
    )} RETURNING ${tableType.sqlColumns(context)}
      `;
    generationBuffer.push(`const response = await sql\`${sql}\``);

    generationBuffer.push(
      this.typescriptTableReturnStatementsFromResponse(context),
    );

    generationBuffer.push(`}`);

    return generationBuffer.join("\n");
  }
}

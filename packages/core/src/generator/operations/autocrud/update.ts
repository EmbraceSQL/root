import { PGTypeComposite } from "../../pgtype/pgtypecomposite";
import { TableOperation } from "../operation";
import { Context } from "@embracesql/core/src/context";
import { pascalCase } from "change-case";

/**
 * AutoCRUD updates by index for a table.
 */
export class UpdateOperation extends TableOperation {
  typescriptDefinition(context: Context): string {
    const generationBuffer = [""];
    const tableType = context.resolveType<PGTypeComposite>(
      this.table.table.tabletypeoid,
    );
    const namespace = context.namespaces.find(
      (n) => n.nspname === this.table.table.nspname,
    );
    for (const index of this.table.indexes) {
      const parameters = `parameters: ${namespace?.typescriptName}.Tables.${this.table.typescriptName}.${index.typescriptName}, values: Partial<${namespace?.typescriptName}.${this.table.typescriptName}>`;

      generationBuffer.push(
        `async update${pascalCase(index.typescriptName)}(${parameters}){`,
      );
      generationBuffer.push(
        `
      console.assert(parameters);
      console.assert(values);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      `,
      );
      // query using postgres driver bindings to the index
      const sql = `UPDATE ${
        tableType.postgresName
      } SET ${this.table.sqlSetExpressions(
        context,
        "values",
      )} WHERE ${index.sqlPredicate(context)} RETURNING ${tableType.sqlColumns(
        context,
      )}`;
      generationBuffer.push(`const response = await sql\`${sql}\``);

      generationBuffer.push(
        this.typescriptTableReturnStatementsFromResponse(context, index),
      );

      generationBuffer.push(`}`);
    }

    return generationBuffer.join("\n");
  }
}

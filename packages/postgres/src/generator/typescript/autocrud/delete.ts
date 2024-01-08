import { postgresResultRecordToTypescript, sqlPredicate } from "./shared";
import {
  PARAMETERS,
  DeleteOperationNode,
  GenerationContext,
} from "@embracesql/shared";

/**
 * AutoCRUD deletes records by index.
 *
 * Unique indexes delete single records, returning the deleted record.
 *
 * Non unique indexes delete multiple records, returning an array of the
 * deleted records.
 */
export const DeleteOperation = {
  async before(context: GenerationContext, node: DeleteOperationNode) {
    const parameters = `${PARAMETERS}: ${node.index.typescriptNamespacedName}`;
    const sqlColumnNames = node.index.table.type.attributes
      .map((a) => a.name)
      .join(",");
    // query using postgres driver bindings to the index
    const sql = `
    --
    DELETE FROM 
      ${node.index.table.databaseName} 
    WHERE
      ${sqlPredicate(context, node.index, PARAMETERS)}
    RETURNING ${sqlColumnNames}`;

    return [
      `async ${node.typescriptPropertyName}(${parameters}) {`,
      ` console.assert(parameters);`,
      ` const sql = this.database.context.sql;`,
      ` const typed = sql.typed as unknown as PostgresTypecasts;`,
      ` const response = await sql\`${sql}\``,
      ` return ${postgresResultRecordToTypescript(
        context,
        node.index.table.type,
      )}${node.index.unique ? "[0]" : ""}`,
      `}`,
    ].join("\n");
  },
};

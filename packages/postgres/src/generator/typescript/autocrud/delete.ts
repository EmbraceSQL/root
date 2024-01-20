import { postgresToTypescript, sqlPredicate } from "./shared";
import { DeleteOperationNode, GenerationContext } from "@embracesql/shared";

/**
 * AutoCRUD deletes rows by index.
 *
 * Unique indexes delete single rows, returning the deleted row.
 *
 * Non unique indexes delete multiple rows, returning an array of the
 * deleted rows.
 */
export const DeleteOperation = {
  async before(context: GenerationContext, node: DeleteOperationNode) {
    const parameters = `parameters: ${node.index.type.typescriptNamespacedName}`;
    const options = `options?: ${node.index.table.typescriptNamespacedName}.ModifyOptions`;
    const sqlColumnNames = node.index.table.type.attributes
      .map((a) => a.name)
      .join(",");
    // query using postgres driver bindings to the index
    const sql = `
    --
    DELETE FROM 
      ${node.index.table.databaseName} 
    WHERE
      ${sqlPredicate(context, node.index, "parameters")}
    RETURNING ${sqlColumnNames}`;

    return [
      `async ${node.typescriptPropertyName}(${parameters}, ${options}) {`,
      ` console.assert(parameters);`,
      ` const sql = this.database.context.sql;`,
      ` const typed = sql.typed as unknown as PostgresTypecasts;`,
      ` const response = await sql\`${sql}\``,
      ` return ${postgresToTypescript(context, node.index.table.type)}${
        node.index.unique ? "[0]" : ""
      }`,
      `}`,
    ].join("\n");
  },
};

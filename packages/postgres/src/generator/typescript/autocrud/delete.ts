import { postgresToTypescript, sqlPredicate } from "./shared";
import {
  DeleteOperationNode,
  GenerationContext,
  OPTIONS,
  PARAMETERS,
  REQUEST_PARAMETERS,
} from "@embracesql/shared";

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
    const parameters = `${PARAMETERS}: ${node.index.type.typescriptNamespacedName}`;
    const requestExpression = `{${PARAMETERS}, ${OPTIONS}}`;
    const optionType = `${node.index.type.typescriptNamespacedName}.Options & ${node.index.table.typescriptNamespacedName}.Options`;
    const options = `${OPTIONS}?: ${optionType}`;
    const sqlColumnNames = node.index.table.type.attributes
      .map((a) => a.name)
      .join(",");
    // query using postgres driver bindings to the index
    const sql = `
    --
    DELETE FROM 
      ${node.index.table.databaseName} 
    WHERE
      ${sqlPredicate(context, node.index, REQUEST_PARAMETERS)}
    RETURNING ${sqlColumnNames}`;

    return [
      `async ${node.typescriptPropertyName}(${parameters}, ${options}) {`,
      ` console.assert(parameters);`,
      ` const typed = this.database.typed;`,
      ` const response = await this.database.invoke( (sql, request) => sql\`${sql}\`, ${requestExpression});`,
      ` return ${postgresToTypescript(context, node.index.table.type)}${
        node.index.unique ? "[0]" : ""
      }`,
      `}`,
    ].join("\n");
  },
};

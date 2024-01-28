import {
  postgresToTypescript,
  sqlPredicate,
  sqlSetExpressions,
} from "./shared";
import {
  PARAMETERS,
  GenerationContext,
  UpdateOperationNode,
  VALUES,
} from "@embracesql/shared";

/**
 * AutoCRUD updates field values by index. Partial updates are allowed.
 *
 * Unique indexes update single rows, returning the modified row.
 *
 * Non unique indexes update multiple rows, returning an array of the
 * modified rows.
 */
export const UpdateOperation = {
  async before(context: GenerationContext, node: UpdateOperationNode) {
    const parameters = `${PARAMETERS}: ${node.index.type.typescriptNamespacedName}, ${VALUES}: Partial<${node.index.table.typescriptNamespacedName}.Values>`;
    const requestExpression = `{${PARAMETERS}, ${VALUES}, options}`;
    const optionType = `${node.index.type.typescriptNamespacedName}.Options & ${node.index.table.typescriptNamespacedName}.Options`;
    const options = `options?: ${optionType}`;
    const returns = node.index.unique
      ? `Promise<${node.index.table.type.typescriptNamespacedName}>`
      : `Promise<${node.index.table.type.typescriptNamespacedName}[]>`;
    const sqlColumnNames = node.index.table.type.attributes
      .map((a) => a.name)
      .join(",");
    // query using postgres driver bindings to the index
    const sql = `
    --
    UPDATE 
      ${node.index.table.databaseName} 
    SET
      ${sqlSetExpressions(context, node.index.table, VALUES, true)} 
    WHERE
      ${sqlPredicate(context, node.index, PARAMETERS)}
    RETURNING ${sqlColumnNames}`;

    return [
      `async ${node.typescriptPropertyName}(${parameters}, ${options}) : ${returns}{`,
      `
      console.assert(parameters);
      console.assert(values);
      const typed = this.database.typed;
      `,
      `const response = await this.database.invoke( (sql, request) => sql\`${sql}\`, ${requestExpression});`,

      `return ${postgresToTypescript(context, node.index.table.type)}${
        node.index.unique ? "[0]" : ""
      }`,
      `}`,
    ].join("\n");
  },
};

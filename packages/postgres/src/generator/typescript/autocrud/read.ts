import { postgresToTypescript, sqlPredicate } from "./shared";
import {
  PARAMETERS,
  GenerationContext,
  ReadOperationNode,
} from "@embracesql/shared";

/**
 * AutoCRUD reads row(s) by index.
 *
 * Unique indexes return single rows, non unique indexes returns arrays
 * of rows, which is the in memory equivalent of a table.
 */
export const ReadOperation = {
  async before(context: GenerationContext, node: ReadOperationNode) {
    const parameters = `${PARAMETERS}: ${node.index.type.typescriptNamespacedName}`;
    const requestExpression = `{${PARAMETERS}, ...(options ?? {})}`;
    const optionType = `${node.index.type.typescriptNamespacedName}.Options & ${node.index.table.typescriptNamespacedName}.Options`;
    const options = `options?: ${optionType}`;
    const returns = node.index.unique
      ? `Promise<${node.index.table.type.typescriptNamespacedName}>`
      : `Promise<${node.index.table.type.typescriptNamespacedName}[]>`;

    // query using postgres driver bindings to the index
    const sql = `
    -- 
    SELECT 
      ${node.index.table.allColumns.map((c) => c.name).join(",")} 
    FROM
      ${node.index.table.databaseName} 
    WHERE
      ${sqlPredicate(context, node.index, PARAMETERS)}
    \${sql.unsafe(\`\${orderBy}\`)}
    LIMIT \${options?.limitNumberOfRows ?? Number.MAX_SAFE_INTEGER} 
    OFFSET \${options?.offsetNumberOfRows ?? 0} 
    `;
    return [
      `async ${node.typescriptPropertyName}(${parameters}, ${options}) : ${returns}{`,
      `
      console.assert(parameters);
      const typed = this.database.typed;
      const orderBy = options?.sort ? \`ORDER BY \${options.sort.join(",")}\` : "";
      `,
      `const response = await this.database.invoke( (sql) => sql\`${sql}\`, ${requestExpression});`,

      `return ${postgresToTypescript(context, node.index.table.type)}${
        node.index.unique ? "[0]" : ""
      }`,

      `}`,
    ].join("\n");
  },
};

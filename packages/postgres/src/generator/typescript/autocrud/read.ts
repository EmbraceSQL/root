import { postgresToTypescript, sqlPredicate } from "./shared";
import {
  PARAMETERS,
  GenerationContext,
  ReadOperationNode,
  REQUEST_PARAMETERS,
  OPTIONS,
} from "@embracesql/shared";

/**
 * AutoCRUD reads row(s) by index.
 *
 * Unique indexes return single rows, non unique indexes returns arrays
 * of rows, which is the in memory equivalent of a table.
 */
export const ReadOperation = {
  async before(context: GenerationContext, node: ReadOperationNode) {
    const parametersType = `${node.index.type.typescriptNamespacedName}`;
    const parameters = `${PARAMETERS}: ${parametersType}`;
    const requestExpression = `{${PARAMETERS}, ${OPTIONS}}`;
    const optionsType = `${node.index.type.typescriptNamespacedName}.Options & ${node.index.table.typescriptNamespacedName}.Options`;
    const options = `${OPTIONS}?: ${optionsType}`;
    const returnType = node.index.unique
      ? `${node.index.table.type.typescriptNamespacedName}`
      : `${node.index.table.type.typescriptNamespacedName}[]`;
    const returns = `Promise<${returnType}>`;
    const invokeGeneric = `${returnType}, ${node.index.type.typescriptNamespacedName}, never, ${optionsType}`;

    // query using postgres driver bindings to the index
    const sql = `
    -- 
    SELECT 
      ${node.index.table.allColumns.map((c) => c.name).join(",")} 
    FROM
      ${node.index.table.databaseName} 
    WHERE
      ${sqlPredicate(context, node.index, REQUEST_PARAMETERS)}
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
      `return await this.database.invoke<${invokeGeneric}>( async (sql, request) => {`,
      `  const response = await sql\`${sql}\``,
      `  return ${postgresToTypescript(context, node.index.table.type)}${
        node.index.unique ? "[0]" : ""
      }`,
      `}, ${requestExpression});`,
      `}`,
    ].join("\n");
  },
};

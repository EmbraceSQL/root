import { postgresToTypescript } from "./shared";
import { GenerationContext, AllOperationNode } from "@embracesql/shared";

/**
 * AutoCRUD read all the rows in the table. All of them. No fooling.
 *
 */
export const AllOperation = {
  async before(context: GenerationContext, node: AllOperationNode) {
    const parameters = ``;
    const options = `options?: ${node.table.typescriptNamespacedName}.Options`;
    const returns = `Promise<${node.table.type.typescriptNamespacedName}[]>`;
    // query using postgres driver bindings to the index
    const sql = `
    SELECT 
      ${node.table.allColumns.map((c) => c.name).join(",")} 
    FROM
      ${node.table.databaseName} 
    \${sql.unsafe(\`\${orderBy}\`)}
    LIMIT \${options?.limitNumberOfRows ?? Number.MAX_SAFE_INTEGER} 
    OFFSET \${options?.offsetNumberOfRows ?? 0} 
    `;
    return [
      `async ${node.typescriptPropertyName}(${parameters}${options}) : ${returns}{`,
      `
      const typed = this.database.typed;
      const orderBy = options?.sort ? \`ORDER BY \${options.sort.join(",")}\` : "";
      `,
      `const response = await this.database.invoke( (sql) => sql\`${sql}\`, options);`,

      `return ${postgresToTypescript(context, node.table.type)}`,

      `}`,
    ].join("\n");
  },
};

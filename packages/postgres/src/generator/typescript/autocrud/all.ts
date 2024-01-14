import { postgresToTypescript } from "./shared";
import { GenerationContext, AllOperationNode } from "@embracesql/shared";

/**
 * AutoCRUD read all the records.
 *
 */
export const AllOperation = {
  async before(context: GenerationContext, node: AllOperationNode) {
    const parameters = ``;
    const returns = `Promise<${node.table.type.typescriptNamespacedName}[]>`;
    // query using postgres driver bindings to the index
    const sql = `
    -- 
    SELECT 
      ${node.table.allColumns.map((c) => c.name).join(",")} 
    FROM
      ${node.table.databaseName} 
    `;
    return [
      `async ${node.typescriptPropertyName}(${parameters}) : ${returns}{`,
      `
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      `,
      `const response = await sql\`${sql}\``,

      `return ${postgresToTypescript(context, node.table.type)}`,

      `}`,
    ].join("\n");
  },
};

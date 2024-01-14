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
    const generationBuffer = [""];
    const parameters = `${PARAMETERS}: ${node.index.typescriptNamespacedName}`;
    const returns = node.index.unique
      ? `Promise<${node.index.table.type.typescriptNamespacedName}>`
      : `Promise<${node.index.table.type.typescriptNamespacedName}[]>`;

    generationBuffer.push(
      `async ${node.typescriptPropertyName}(${parameters}) : ${returns}{`,
    );
    generationBuffer.push(
      `
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      `,
    );
    // query using postgres driver bindings to the index
    const sql = `
    -- 
    SELECT 
      ${node.index.table.allColumns.map((c) => c.name).join(",")} 
    FROM
      ${node.index.table.databaseName} 
    WHERE
      ${sqlPredicate(context, node.index, PARAMETERS)}
    `;
    generationBuffer.push(`const response = await sql\`${sql}\``);

    generationBuffer.push(
      `return ${postgresToTypescript(context, node.index.table.type)}${
        node.index.unique ? "[0]" : ""
      }`,
    );

    generationBuffer.push(`}`);

    return generationBuffer.join("\n");
  },
};

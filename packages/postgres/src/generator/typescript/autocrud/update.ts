import {
  postgresResultRecordToTypescript,
  sqlPredicate,
  sqlSetExpressions,
} from "./shared";
import {
  ARGUMENTS,
  GenerationContext,
  UpdateOperationNode,
  VALUES,
} from "@embracesql/shared";

/**
 * AutoCRUD updates field values by index. Partial updates are allowed.
 *
 * Unique indexes update single records, returning the modified record.
 *
 * Non unique indexes update multiple records, returning an array of the
 * modified records.
 */
export const UpdateOperation = {
  async before(context: GenerationContext, node: UpdateOperationNode) {
    const generationBuffer = [""];
    const parameters = `${ARGUMENTS}: ${node.index.typescriptNamespacedName}, ${VALUES}: Partial<${node.index.table.typescriptNamespacedName}.Values>`;
    const returns = node.index.unique
      ? `Promise<${node.index.table.typescriptNamespacedName}.Record>`
      : `Promise<${node.index.table.typescriptNamespacedName}.Record[]>`;
    const sqlColumnNames = node.index.table.type.attributes
      .map((a) => a.name)
      .join(",");

    generationBuffer.push(
      `async ${node.typescriptPropertyName}(${parameters}) : ${returns}{`,
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
    const sql = `
    --
    UPDATE 
      ${node.index.table.databaseName} 
    SET
      ${sqlSetExpressions(context, node.index.table, VALUES, true)} 
    WHERE
      ${sqlPredicate(context, node.index, ARGUMENTS)}
    RETURNING ${sqlColumnNames}`;

    generationBuffer.push(`const response = await sql\`${sql}\``);

    generationBuffer.push(
      `return ${postgresResultRecordToTypescript(
        context,
        node.index.table.type,
      )}${node.index.unique ? "[0]" : ""}`,
    );

    generationBuffer.push(`}`);

    return generationBuffer.join("\n");
  },
};

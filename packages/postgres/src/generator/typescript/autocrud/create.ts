import {
  postgresResultRecordToTypescript,
  postgresValueExpression,
} from "./shared";
import {
  CreateOperationNode,
  GenerationContext,
  VALUES,
} from "@embracesql/shared";
import { camelCase } from "change-case";

/**
 * AutoCRUD creates or upserts a record by table.
 */
export const CreateOperation = {
  async before(context: GenerationContext, node: CreateOperationNode) {
    const generationBuffer = [""];

    generationBuffer.push(
      `async create(${camelCase(VALUES)}: ${
        node.table.typescriptNamespacedName
      }.Values): Promise<${node.table.typescriptNamespacedName}.Record>{`,
    );
    generationBuffer.push(
      `
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      `,
    );
    const allSqlColumnNames = node.table.allColumns
      .map((a) => a.name)
      .join(",");
    const sqlColumnNamesWithoutPrimaryKey = node.table.columnsNotInPrimaryKey
      .map((a) => a.name)
      .join(",");
    // if there is a primary key with defaults
    // have the 'create with defaults' generated, meaning you can skip passing
    // in primary key values
    if (
      node.table.primaryKey &&
      node.table.columnsInPrimaryKey.every((c) => c.hasDefault)
    ) {
      generationBuffer.push(`
      if (!${
        node.table.typescriptNamespacedName
      }.includesPrimaryKey(${camelCase(VALUES)})) {
      `);
      const sql = `
      --
      INSERT INTO
        ${node.table.databaseName} (${sqlColumnNamesWithoutPrimaryKey})
      VALUES (${node.table.columnsNotInPrimaryKey
        .map((a) => postgresValueExpression(context, a, VALUES))
        .join(",")})
      RETURNING
        ${allSqlColumnNames}
    `;
      generationBuffer.push(`const response = await sql\`${sql}\``);

      generationBuffer.push(
        `return ${postgresResultRecordToTypescript(
          context,
          node.table.type,
        )}[0]`,
      );

      // close out the primary key case
      generationBuffer.push(`}`);
    }

    // default / fallthrough case -- all columns
    const sql = `
    INSERT INTO
      ${node.table.databaseName} (${allSqlColumnNames})
    VALUES (${node.table.type.attributes
      .map((a) => postgresValueExpression(context, a, VALUES))
      .join(",")})
    ON CONFLICT (${node.table.columnsInPrimaryKey
      .map((a) => a.name)
      .join(",")}) DO UPDATE
    SET
      ${node.table.columnsNotInPrimaryKey
        .map((a) => `${a.name} = EXCLUDED.${a.name}`)
        .join(",")}
    RETURNING
      ${allSqlColumnNames}
    `;
    // run that SQL
    generationBuffer.push(`const response = await sql\`${sql}\``);

    generationBuffer.push(
      `return ${postgresResultRecordToTypescript(context, node.table.type)}[0]`,
    );

    // close out the create function
    generationBuffer.push(`}`);

    return generationBuffer.join("\n");
  },
};

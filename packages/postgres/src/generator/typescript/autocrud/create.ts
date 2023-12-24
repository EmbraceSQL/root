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
    const sqlColumnNames = node.table.type.attributes
      .map((a) => a.name)
      .join(",");
    // when the passed values have the primary key -- upsert style is prepared
    if (node.table.primaryKey) {
      generationBuffer.push(`
      if (${node.table.typescriptNamespacedName}.includesPrimaryKey(${camelCase(
        VALUES,
      )})) {
      `);
      const sql = `INSERT INTO ${node.table.databaseName} (${sqlColumnNames})
    VALUES (${sqlColumnNames})
    ON CONFLICT (${node.table.attributesInPrimaryKey
      .map((a) => a.name)
      .join(",")}) DO UPDATE
    SET ${node.table.attributesNotInPrimaryKey
      .map((a) => `${a.name} = EXCLUDED.${a.name}`)
      .join(",")}
    RETURNING ${sqlColumnNames}
    `;
      generationBuffer.push(`const response = await sql\`${sql}\``);

      generationBuffer.push(
        `return ${await postgresResultRecordToTypescript(
          context,
          node.resultsResolvedType!,
        )}[0]`,
      );

      // close out the primary key case
      generationBuffer.push(`}`);
    }

    // default / fallthrough case when no primary key is included
    const sql = `INSERT INTO ${sqlColumnNames})
    VALUES (${node.table.type.attributes
      .map((a) => postgresValueExpression(context, a, VALUES))
      .join(",")})
    RETURNING ${sqlColumnNames}
    `;
    // run that SQL
    generationBuffer.push(`const response = await sql\`${sql}\``);

    generationBuffer.push(
      `return ${await postgresResultRecordToTypescript(
        context,
        node.resultsResolvedType!,
      )}[0]`,
    );

    // close out the create function
    generationBuffer.push(`}`);

    return generationBuffer.join("\n");
  },
};

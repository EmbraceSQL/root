import { postgresToTypescript, postgresValueExpression } from "./shared";
import { CreateOperationNode, GenerationContext } from "@embracesql/shared";

/**
 * AutoCRUD creates or upserts a row by table.
 */
export const CreateOperation = {
  async before(context: GenerationContext, node: CreateOperationNode) {
    const valuesType = `Partial<${node.table.type.typescriptNamespacedName}>`;
    const optionType = `${node.table.typescriptNamespacedName}.Options`;
    const generationBuffer = [""];

    generationBuffer.push(
      `async create(values: ${valuesType}, options?: ${optionType}): Promise<${node.table.type.typescriptNamespacedName}>{`,
    );
    generationBuffer.push(
      `
      const typed = this.database.typed;
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
      if (!${node.table.typescriptNamespacedName}.includesPrimaryKey(values)) {
      `);
      const sql = `
      --
      INSERT INTO
        ${node.table.databaseName} (${sqlColumnNamesWithoutPrimaryKey})
      VALUES (${node.table.columnsNotInPrimaryKey
        .map((a) => postgresValueExpression(context, a, "values"))
        .join(",")})
      RETURNING
        ${allSqlColumnNames}
    `;
      generationBuffer.push(
        `const response = await this.database.invoke( (sql) => sql\`${sql}\`, options);`,
      );

      generationBuffer.push(
        `return ${postgresToTypescript(context, node.table.type)}[0]`,
      );

      // close out the primary key case
      generationBuffer.push(`}`);
    }

    // default / fallthrough case -- all columns
    const sql = `
    INSERT INTO
      ${node.table.databaseName} (${allSqlColumnNames})
    VALUES (${node.table.type.attributes
      .map((a) => postgresValueExpression(context, a, "values"))
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
    generationBuffer.push(
      `const response = await this.database.invoke( (sql) => sql\`${sql}\`, options);`,
    );

    generationBuffer.push(
      `return ${postgresToTypescript(context, node.table.type)}[0]`,
    );

    // close out the create function
    generationBuffer.push(`}`);

    return generationBuffer.join("\n");
  },
};

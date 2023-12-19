import { Context } from "../../..";
import { PGTypeComposite } from "../../pgtype/pgtypecomposite";
import { TableOperation } from "../table";
import { GenerationContext } from "@embracesql/shared";

/**
 * AutoCRUD creates or upserts a record by table.
 */
export class CreateOperation extends TableOperation {
  typescriptValuesType(context: GenerationContext) {
    const table = context.database.resolveTable(this.table.table.tabletypeoid)!;
    return table.primaryKey
      ? `${table.typescriptNamespacedName}.Record | ${table.typescriptNamespacedName}.RecordNotPrimaryKey`
      : `${table.typescriptNamespacedName}.Record`;
  }

  dispatchName(context: GenerationContext): string {
    return `${super.dispatchName(context as Context)}.create`;
  }

  typescriptDefinition(context: GenerationContext): string {
    const table = context.database.resolveTable(this.table.table.tabletypeoid)!;
    const postgresTable = (context as Context).resolveType<PGTypeComposite>(
      table.type.id as number,
    );
    const generationBuffer = [""];
    const values = `values: ${this.typescriptValuesType(context)}`;

    generationBuffer.push(
      `async create(${values}): Promise<${table.typescriptNamespacedName}.Record>{`,
    );
    generationBuffer.push(
      `
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      `,
    );
    // when the passed values have the primary key -- upsert style is prepared
    if (table.primaryKey) {
      generationBuffer.push(`
      if (${table.typescriptNamespacedName}.includesPrimaryKey(values)) {
      `);
      const sql = `INSERT INTO ${postgresTable.postgresName} (${
        postgresTable.sqlColumns
      })
    VALUES (${postgresTable.attributes
      .map((a) =>
        a.postgresValueExpression(context as Context, "values", false),
      )
      .join(",")})
    ON CONFLICT (${postgresTable.primaryKeyAttributes
      .map((a) => a.postgresName)
      .join(",")}) DO UPDATE
    SET ${postgresTable.notPrimaryKeyAttributes
      .map((a) => `${a.postgresName} = EXCLUDED.${a.postgresName}`)
      .join(",")}
    RETURNING ${postgresTable.sqlColumns}
    `;
      generationBuffer.push(`const response = await sql\`${sql}\``);

      generationBuffer.push(
        this.typescriptTableReturnStatementsFromResponse(context as Context),
      );

      // close out the primary key case
      generationBuffer.push(`}`);
    }

    // default / fallthrough case when no primary key is included
    const sql = `INSERT INTO ${
      postgresTable.postgresName
    } (${postgresTable.notPrimaryKeyAttributes
      .map((a) => a.postgresName)
      .join(",")})
    VALUES (${postgresTable.notPrimaryKeyAttributes
      .map((a) =>
        a.postgresValueExpression(context as Context, "values", false),
      )
      .join(",")})
    RETURNING ${postgresTable.sqlColumns}
    `;
    generationBuffer.push(`const response = await sql\`${sql}\``);

    generationBuffer.push(
      this.typescriptTableReturnStatementsFromResponse(context as Context),
    );

    // close out the create function
    generationBuffer.push(`}`);

    return generationBuffer.join("\n");
  }
}

import { Context } from "../../../context";
import { PGTypeComposite } from "../../pgtype/pgtypecomposite";
import { TableOperation } from "../table";

/**
 * AutoCRUD creates or upserts a record by table.
 */
export class CreateOperation extends TableOperation {
  operationName(context: Context): string {
    return `${super.operationName(context)}.create`;
  }

  typescriptDefinition(context: Context): string {
    const generationBuffer = [""];
    const tableType = context.resolveType<PGTypeComposite>(
      this.table.table.tabletypeoid,
    );
    const namespace = context.namespaces.find(
      (n) => n.nspname === this.table.table.nspname,
    );
    const parameters = tableType.hasPrimaryKey
      ? `values: ${namespace?.typescriptName}.${this.table.typescriptName} | ${namespace?.typescriptName}.${this.table.typescriptName}NotPrimaryKey`
      : `values: ${namespace?.typescriptName}.${this.table.typescriptName}`;

    generationBuffer.push(
      `async create(${parameters}): Promise<${namespace?.typescriptName}.${this.table.typescriptName}>{`,
    );
    generationBuffer.push(
      `
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      `,
    );
    // when the passed values have the primary key -- upsert style is prepared
    if (tableType.hasPrimaryKey) {
      generationBuffer.push(`
      if (${namespace?.typescriptName}.includes${this.table.typescriptName}PrimaryKey(values)) {
      `);
      const sql = `INSERT INTO ${
        tableType.postgresName
      } (${tableType.sqlColumns(context)})
    VALUES (${tableType.attributes
      .map((a) => a.postgresValueExpression(context, "values", false))
      .join(",")})
    ON CONFLICT (${tableType.primaryKeyAttributes
      .map((a) => a.postgresName)
      .join(",")}) DO UPDATE
    SET ${tableType.notPrimaryKeyAttributes
      .map((a) => `${a.postgresName} = EXCLUDED.${a.postgresName}`)
      .join(",")}
    RETURNING ${tableType.sqlColumns(context)}
    `;
      generationBuffer.push(`const response = await sql\`${sql}\``);

      generationBuffer.push(
        this.typescriptTableReturnStatementsFromResponse(context),
      );

      // close out the primary key case
      generationBuffer.push(`}`);
    }

    // default / fallthrough case when no primary key is included
    const sql = `INSERT INTO ${
      tableType.postgresName
    } (${tableType.notPrimaryKeyAttributes
      .map((a) => a.postgresName)
      .join(",")})
    VALUES (${tableType.notPrimaryKeyAttributes
      .map((a) => a.postgresValueExpression(context, "values", false))
      .join(",")})
    RETURNING ${tableType.sqlColumns(context)}
    `;
    generationBuffer.push(`const response = await sql\`${sql}\``);

    generationBuffer.push(
      this.typescriptTableReturnStatementsFromResponse(context),
    );

    // close out the create function
    generationBuffer.push(`}`);

    return generationBuffer.join("\n");
  }
}

import { PGTable } from "../../pgtype/pgtable";
import { PGTypeComposite } from "../../pgtype/pgtypecomposite";
import { Operation } from "../operation";
import { Context } from "@embracesql/core/src/context";
import { camelCase } from "change-case";

/**
 * AutoCRUD reads for a table.
 */
export class ReadOperation implements Operation {
  constructor(private table: PGTable) {}

  async build(context: Context) {
    console.assert(context);
  }

  typescriptDefinition(context: Context): string {
    console.assert(context);
    const generationBuffer = [""];
    const tableType = context.resolveType<PGTypeComposite>(
      this.table.table.tabletypeoid,
    );
    const namespace = context.namespaces.find(
      (n) => n.nspname === this.table.table.nspname,
    );
    for (const index of this.table.indexes) {
      const parameters = `parameters: ${namespace?.typescriptName}.Tables.${this.table.typescriptName}.${index.typescriptName}`;

      generationBuffer.push(
        `async ${camelCase(index.typescriptName)}(${parameters}){`,
      );
      generationBuffer.push(
        `
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      `,
      );

      // query using postgres driver bindings to the index
      const sql = `SELECT ${tableType.sqlColumns(context)} FROM ${
        tableType.postgresName
      } WHERE ${index.sqlPredicate(context)}`;
      generationBuffer.push(`const response = await sql\`${sql}\``);
      // add in some types
      generationBuffer.push(
        `const results = ${tableType.postgresResultRecordToTypescript(
          context,
        )}`,
      );
      // if this is a unique index, pull back a single record
      // which makes this way more KV like than always having an array back
      if (index.index.indisunique) {
        generationBuffer.push(`return results[0]`);
      } else {
        generationBuffer.push(`return results`);
      }

      generationBuffer.push(`}`);
    }

    return generationBuffer.join("\n");
  }
}

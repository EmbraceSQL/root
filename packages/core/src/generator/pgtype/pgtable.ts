import { Context, TypeFactoryContext } from "../../context";
import { PGIndex } from "./pgindex";
import { PGTypes } from "./pgtype";
import { pascalCase } from "change-case";
import * as path from "path";
import { Sql } from "postgres";

type TableRow = {
  relname: string;
  nspname: string;
  tabletypeoid: number;
};

type PGTablesContext = TypeFactoryContext & { typeCatalog: PGTypes };

/**
 * Actual stored tables, each with a type defined in the postgres catalog.
 *
 * As conterintuitive as it sounds, tables are not a 'type' in postgres, but
 * are better thought of as a named storage of a type.
 */
export class PGTables {
  static async factory(context: PGTablesContext, sql: Sql) {
    return new PGTables(
      context,
      (await sql.file(
        path.join(__dirname, "pgtables.sql"),
      )) as unknown as TableRow[],
    );
  }

  tables: PGTable[];
  private constructor(context: PGTablesContext, tableRows: TableRow[]) {
    this.tables = tableRows.map((r) => new PGTable(context, r));
  }
}

/**
 * Metadata for a single table stored in the database.
 */
export class PGTable {
  indexes: PGIndex[];
  constructor(
    context: TypeFactoryContext,
    public table: TableRow,
  ) {
    this.indexes =
      context.indexes.indexesByTableTypeOid[table.tabletypeoid] ?? [];
  }

  get typescriptName() {
    return pascalCase(this.table.relname);
  }

  get postgresName() {
    return `${this.table.nspname}.${this.table.relname}`;
  }
  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    export namespace ${this.typescriptName}  {
      ${this.indexes.map((i) => i.typescriptTypeDefinition(context)).join("\n")}
    };
    `;
  }
}

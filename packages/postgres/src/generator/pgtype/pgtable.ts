import { TypeFactoryContext } from "../../context";
import { PGIndex } from "./pgindex";
import { PGTypes } from "./pgtype";
import { PGTypeComposite } from "./pgtypecomposite";
import {
  ColumnNode,
  GenerationContext,
  TableNode,
  TablesNode,
} from "@embracesql/shared";
import path from "path";
import { Sql } from "postgres";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
  tableType: PGTypeComposite;
  constructor(
    context: PGTablesContext,
    public table: TableRow,
  ) {
    this.indexes =
      context.indexes.indexesByTableTypeOid[table.tabletypeoid] ?? [];
    this.tableType = context.typeCatalog.typesByOid[
      table.tabletypeoid
    ] as PGTypeComposite;
  }

  loadAST(context: GenerationContext, tables: TablesNode) {
    const table = new TableNode(
      tables,
      this.table.relname,
      context.database.resolveType(this.table.tabletypeoid),
    );
    // hash lookup of all tables
    context.database.registerTable(table.type.id, table);
    // columns -- derived from the table type
    this.tableType.attributes.forEach((a) => {
      const typeNode = context.database.resolveType(a.attribute.atttypid);
      if (typeNode) {
        new ColumnNode(table, a.name, typeNode, a.hasDefault, a.allowsNull);
      } else {
        throw new Error(`${a.name} cannot find type ${a.attribute.atttypid}`);
      }
    });

    // and the indexes
    this.indexes.forEach((i) => i.loadAST(context, table));
  }
}

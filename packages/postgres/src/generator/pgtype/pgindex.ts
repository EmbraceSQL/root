import { groupBy } from "../../util";
import { operatorFor } from "../pgoperator";
import { PGTypes } from "./pgtype";
import { GenerationContext, IndexNode, TableNode } from "@embracesql/shared";
import path from "path";
import { Sql } from "postgres";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export type IndexRow = {
  tabletypeoid: number;
  indexrelid: number;
  indisunique: boolean;
  indisprimary: boolean;
  name: string;
  operators: string[];
};

type PGIndexesContext = { typeCatalog: PGTypes };

/**
 * Collect up all indexes in the postgres catalog.
 */
export class PGIndexes {
  static async factory(context: PGIndexesContext, sql: Sql) {
    const indexRows = (await sql.file(
      path.join(__dirname, "pgindexes.sql"),
    )) as unknown as IndexRow[];
    return new PGIndexes(indexRows);
  }

  indexesByTableTypeOid: Record<number, PGIndex[]>;
  private constructor(indexRows: IndexRow[]) {
    this.indexesByTableTypeOid = groupBy(
      indexRows,
      (r) => r.tabletypeoid,
      (r) => new PGIndex(r),
    );
  }
}

/**
 * Table and composite types have attributes, or as they are called
 * in real life -- columns.
 *
 */
export class PGIndex {
  constructor(public index: IndexRow) {}

  loadAST(context: GenerationContext, table: TableNode) {
    new IndexNode(
      this.index.name,
      table,
      this.index.indisunique,
      this.index.indisprimary,
      context.database.resolveType(this.index.indexrelid),
      this.index.operators.map(operatorFor),
    );
  }
}

import { TypeFactoryContext } from "../../context";
import { groupBy } from "../../util";
import { PGAttribute, PGAttributes } from "./pgattribute";
import { PGCatalogType } from "./pgcatalogtype";
import { PGTypeComposite } from "./pgtypecomposite";
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
};
/**
 * Collect up all indexes in the postgres catalog.
 */
export class PGIndexes {
  static async factory(sql: Sql, attributes: PGAttributes) {
    const indexRows = (await sql.file(
      path.join(__dirname, "pgindexes.sql"),
    )) as unknown as IndexRow[];
    return new PGIndexes(indexRows, attributes);
  }

  indexesByTableTypeOid: Record<number, PGIndex[]>;
  private constructor(indexRows: IndexRow[], attributes: PGAttributes) {
    this.indexesByTableTypeOid = groupBy(
      indexRows,
      (r) => r.tabletypeoid,
      (r) => new PGIndex(r, attributes),
    );
  }

  indexesForType(catalogType: PGCatalogType) {
    return (
      this.indexesByTableTypeOid[catalogType.oid]?.sort((l, r) =>
        l.name.localeCompare(r.name),
      ) ?? []
    );
  }
}

/**
 * Table and composite types have attributes, or as they are called
 * in real life -- columns.
 *
 */
export class PGIndex {
  attributes: PGAttribute[];
  constructor(
    public index: IndexRow,
    attributes: PGAttributes | PGAttribute[],
  ) {
    if ((attributes as PGAttributes).attributesByRelid) {
      this.attributes = (attributes as PGAttributes).attributesByRelid[
        index.indexrelid
      ];
    } else {
      this.attributes = attributes as PGAttribute[];
    }
  }

  loadAST(context: GenerationContext, table: TableNode) {
    new IndexNode(
      table,
      this.name,
      this.index.indisunique,
      this.index.indisprimary,
      this.attributes.map((a) => {
        const typeNode = context.database.resolveType(a.attribute.atttypid)!;
        return { name: a.name, type: typeNode };
      }),
    );
  }

  get name() {
    return `by_${this.attributes.map((a) => a.typescriptName).join("_")}`;
  }

  get primaryKey() {
    return this.index.indisprimary;
  }

  /**
   * Rewrite the index in terms of the base type attributes in order to
   * pick up type constraints and flags that are missing on the index
   * attributes themselves.
   *
   * But there are also computed index components that are not actullay in
   * the base table. So while a bit of extra complexity, there is a reason.
   */
  translateAttributes(context: TypeFactoryContext, forType: PGTypeComposite) {
    const translatedAttributes = context.attributes.attributesByRelid[
      this.index.indexrelid
    ].map((r) => forType.attributes.find((a) => a.name === r.name) ?? r);
    return new PGIndex(this.index, translatedAttributes);
  }
}

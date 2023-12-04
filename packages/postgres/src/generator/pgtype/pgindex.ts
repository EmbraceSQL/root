import { Context, TypeFactoryContext } from "../../context";
import { groupBy } from "../../util";
import { PGAttribute, PGAttributes } from "./pgattribute";
import { PGCatalogType } from "./pgcatalogtype";
import { PGTypeComposite } from "./pgtypecomposite";
import { IndexNode, TableNode } from "@embracesql/shared";
import { pascalCase } from "change-case";
import * as path from "path";
import { Sql } from "postgres";

export type IndexRow = {
  tabletypeoid: number;
  indexrelid: number;
  indisunique: boolean;
  indisprimary: boolean;
};
/**
 * Collect up all indexes in the posgres catalog.
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
        l.typescriptName.localeCompare(r.typescriptName),
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

  addToAST(table: TableNode) {
    const index = new IndexNode(table, this.name, this.index.indisunique);
    table.children.push(index);
  }

  get name() {
    return `by_${this.attributes.map((a) => a.typescriptName).join("_")}`;
  }

  get unique() {
    return this.index.indisunique;
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

  get typescriptName() {
    return `By${pascalCase(
      this.attributes.map((a) => a.typescriptName).join("_"),
    )}`;
  }

  typescriptTypeDefinition(context: Context) {
    const namedValues = this.attributes.map(
      (a) => `${a.typescriptName}: ${a.typescriptTypeDefinition(context)} ;`,
    );
    return `
    export interface ${this.typescriptName}  {
      ${namedValues.join("\n")}
    };
    `;
  }

  /**
   * Code generation builder for an exact index match.
   */
  sqlPredicate(context: Context, parameterHolder = "parameters") {
    return this.attributes
      .map(
        (a) =>
          `${a.postgresName} = ${a.postgresValueExpression(
            context,
            parameterHolder,
          )}`,
      )
      .join(" AND ");
  }
}

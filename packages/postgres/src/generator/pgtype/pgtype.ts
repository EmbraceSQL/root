import { TypeFactoryContext } from "../../context";
import { overrides } from "./overrides";
import { PGCatalogType } from "./pgcatalogtype";
import { PGTypeArray } from "./pgtypearray";
import { PGTypeBase } from "./pgtypebase";
import { PGTypeComposite } from "./pgtypecomposite";
import { PGTypeDomain } from "./pgtypedomain";
import { PGTypeEnum } from "./pgtypeenum";
import { PGTypeRange } from "./pgtyperange";
import path from "path";
import { Sql } from "postgres";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Database row for types in the pg catalog. All types - tables, views, indexes
 * enums, domains, composites, ranges all have a corresponding pg_type.
 */
export type CatalogRow = {
  oid: number;
  fullname: string;
  nspname: string;
  typname: string;
  typbasetype: number;
  typelem: number;
  rngsubtype: number;
  typtype: string;
  typrelid: number;
  typoutput: string;
  typcategory: string;
  description: string;
};

/**
 * Each type in the database is represented in TypeScript.
 *
 * This is used to generate concrete TypeScript types to drive
 * autocomplete when working with the API, as well as marshall
 * values to and from the database store functions.
 */
export class PGTypes {
  static async factory(context: TypeFactoryContext, sql: Sql) {
    return new PGTypes(
      context,
      (await sql.file(
        path.join(__dirname, "pgtypes.sql"),
      )) as unknown as CatalogRow[],
    );
  }

  types: PGCatalogType[];
  typesByOid: Record<number, PGCatalogType>;
  private constructor(context: TypeFactoryContext, catalogRows: CatalogRow[]) {
    this.types = catalogRows.map((r) => PGType.factory(context, r));
    this.typesByOid = Object.fromEntries(this.types.map((t) => [t.oid, t]));
  }
}
class PGType extends PGCatalogType {
  /**
   * Static factory to select the best available subtype.
   */
  static factory(context: TypeFactoryContext, catalog: CatalogRow) {
    // explicit overrides go before rule based type mappings
    // these are hard coded classes for base types
    if (overrides.has(catalog.typname)) {
      const cons = overrides.get(catalog.typname);
      if (cons) return new cons(catalog);
    }
    if (catalog.typtype === "c") return new PGTypeComposite(context, catalog);
    if (catalog.typtype === "e") return new PGTypeEnum(context, catalog);
    if (catalog.typtype === "d") return new PGTypeDomain(context, catalog);
    if (catalog.typelem > 0) return new PGTypeArray(context, catalog);
    if (catalog.rngsubtype > 0) return new PGTypeRange(context, catalog);
    // this is last on purpose -- typeelem and rngsubtype is more discriminating
    if (catalog.typtype === "b") return PGTypeBase.factory(context, catalog);

    // default through to no type at all -- void type
    return new PGType(catalog);
  }
}

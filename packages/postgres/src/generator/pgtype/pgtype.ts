import { PGTypeText } from "./base/text";
import { overrides } from "./overrides";
import { PGAttributes } from "./pgattribute";
import { PGCatalogType } from "./pgcatalogtype";
import { PGTypeArray } from "./pgtypearray";
import { PGTypeBase } from "./pgtypebase";
import { PGTypeComposite } from "./pgtypecomposite";
import { PGTypeDomain } from "./pgtypedomain";
import { PGTypeEnum, PGTypeEnumValues } from "./pgtypeenum";
import { PGTypeRange } from "./pgtyperange";
import path from "path";
import { Sql } from "postgres";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Type factories need metadata from the 'leaf' level ahead of time
 * to join up. This allows one query per catalog table instead of
 * ORM style chitter chatter.
 */
export type TypeFactoryContext = {
  attributes: PGAttributes;
  enumValues: PGTypeEnumValues;
};

/**
 * Database row for types in the pg catalog. All types - tables, views, indexes
 * enums, domains, composites, ranges all have a corresponding pg_type.
 */
export type CatalogRow = {
  oid: number;
  nspname: string;
  typname: string;
  typbasetype: number;
  typelem: number;
  rngsubtype: number;
  typtype: string;
  typrelid: number;
  typoutput: string;
  typcategory: string;
};

/**
 * Each type in the database is represented in TypeScript.
 *
 * This is used to generate concrete TypeScript types to drive
 * autocomplete when working with the API, as well as marshall
 * values to and from the database store functions.
 */
export class PGTypes {
  static async factory(sql: Sql) {
    // Attributes on the composite type that represent each relation (table, view, index).
    const attributes = await PGAttributes.factory(sql);
    // enum values -- these are the individual bits of the enum like attributes
    // but not the postgres type that is the enum itself
    const enumValues = await PGTypeEnumValues.factory(sql);
    return new PGTypes(
      { attributes, enumValues },
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
      if (cons)
        return new cons(catalog.oid, catalog.nspname, catalog.typname, "");
    }
    // there are 'odd' base types that are arrays of scalars but when you
    // but are not named like other arrays

    if (catalog.typname === "oidvector")
      return PGTypeBase.factory(context, catalog);
    if (catalog.typname === "name")
      return new PGTypeText(catalog.oid, catalog.nspname, catalog.typname, "");

    if (catalog.typtype === "c")
      return new PGTypeComposite(
        context,
        catalog.oid,
        catalog.nspname,
        catalog.typname,
        "",
        catalog.typrelid,
      );
    if (catalog.typtype === "e")
      return new PGTypeEnum(
        context,
        catalog.oid,
        catalog.nspname,
        catalog.typname,
        "",
      );
    if (catalog.typtype === "d")
      return new PGTypeDomain(
        context,
        catalog.oid,
        catalog.nspname,
        catalog.typname,
        "",
        catalog.typbasetype,
      );
    if (catalog.typelem > 0)
      return new PGTypeArray(
        context,
        catalog.oid,
        catalog.nspname,
        catalog.typname,
        "",
        catalog.typelem,
      );
    if (catalog.rngsubtype > 0)
      return new PGTypeRange(
        context,
        catalog.oid,
        catalog.nspname,
        catalog.typname,
        "",
        catalog.rngsubtype,
      );
    // this is last on purpose -- typeelem and rngsubtype is more discriminating
    if (catalog.typtype === "b") return PGTypeBase.factory(context, catalog);

    // default through to no type at all -- void type
    return new PGType(catalog.oid, catalog.nspname, catalog.typname, "");
  }
}

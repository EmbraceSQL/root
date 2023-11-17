import { CatalogRow } from "../../context";
import { overrides } from "./overrides";
import { PGCatalogType } from "./pgcatalogtype";
import { PGTypeArray } from "./pgtypearray";
import { PGTypeBase } from "./pgtypebase";
import { PGTypeComposite } from "./pgtypecomposite";
import { PGTypeDomain } from "./pgtypedomain";
import { PGTypeEnum } from "./pgtypeenum";
import { PGTypeRange } from "./pgtyperange";

/**
 * Each type in the database is represented in TypeScript.
 *
 * This is used to generate concrete TypeScript types to drive
 * autocomplete when working with the API, as well as marshall
 * values to and from the database store functions.
 */
export class PGType extends PGCatalogType {
  /**
   * Static factory to select the best available subtype.
   */
  static factory(catalog: CatalogRow) {
    // explicit overrides go before rule based type mappings
    if (overrides.has(catalog.typname)) {
      const cons = overrides.get(catalog.typname);
      if (cons) return new cons(catalog);
    }
    if (catalog.attributes?.length) return new PGTypeComposite(catalog);
    if (catalog.enums?.length) return new PGTypeEnum(catalog);
    if (catalog.typbasetype > 0) return new PGTypeDomain(catalog);
    if (catalog.typelem > 0) return new PGTypeArray(catalog);
    if (catalog.rngsubtype > 0) return new PGTypeRange(catalog);
    if (catalog.typtype === "b") return PGTypeBase.factory(catalog);

    // default through to no type at all -- void type
    return new PGType(catalog);
  }
}

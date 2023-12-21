import { TypeFactoryContext } from "../../context";
import { PGTypeBool } from "./base/bool";
import { PGTypeBigInt, PGTypeBytea, PGTypeNumber } from "./base/number";
import { PGTypeText, PGTypeTextArray } from "./base/text";
import { PGTypeUri } from "./base/uri";
import { PGCatalogType } from "./pgcatalogtype";
import { CatalogRow } from "./pgtype";
import { PGTypeArray } from "./pgtypearray";
import { GenerationContext } from "@embracesql/shared";

/**
 * Base types defined by PostgreSQL.
 *
 * This is another factory that dispenses type specific code generation strategies.
 */
export class PGTypeBase extends PGCatalogType {
  static factory(context: TypeFactoryContext, catalog: CatalogRow) {
    switch (catalog.typname) {
      case "tid":
        return new PGTypeTid(catalog);
      case "xml":
        return new PGTypeText(catalog);
      case "name":
        return new PGTypeText(catalog);
      case "gtrgm":
        return new PGTypeText(catalog);
      case "text":
        return new PGTypeText(catalog);
      case "char":
        return new PGTypeText(catalog);
      case "varchar":
        return new PGTypeText(catalog);
      case "bool":
        return new PGTypeBool(catalog);
      case "bit":
        return new PGTypeBool(catalog);
      case "varbit":
        return new PGTypeBool(catalog);
      case "macaddr":
        return new PGTypeBytea(catalog);
      case "macaddr8":
        return new PGTypeBytea(catalog);
      case "cidr":
        return new PGTypeBytea(catalog);
      case "bytea":
        return new PGTypeBytea(catalog);
      case "inet":
        return new PGTypeInet(catalog);
      case "jsonpath":
        return new PGTypeText(catalog);
      case "aclitem":
        return new PGTypeText(catalog);
      case "bpchar":
        return new PGTypeText(catalog);
      case "pg_lsn":
        return new PGTypeBigInt(catalog);
      case "tsvector":
        return new PGTypeText(catalog);
      case "gtsvector":
        return new PGTypeTextArray(catalog);
      case "tsquery":
        return new PGTypeText(catalog);
      case "uri":
        return new PGTypeUri(catalog);
      case "oidvector":
        return new PGTypeArray(context, catalog, { arraySuffix: false });
      default:
        // if the db wants to code it as text, so do we
        if (catalog.typoutput === "textout") return new PGTypeText(catalog);
        // categorical type mappings form a backstop
        switch (catalog.typcategory) {
          case "N":
            return new PGTypeNumber(catalog);
          case "S":
            return new PGTypeText(catalog);
          default:
            // TODO: handle types that map to any
            return new PGTypeText(
              catalog,
              `FIXME: ${catalog.typname} did not resolve to a base type`,
            );
        }
    }
  }
}

class PGTypeTid extends PGTypeBase {
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `
    {
      blockNumber: number;
      tupleIndex: number;
    }
    `;
  }
}

class PGTypeInet extends PGTypeBase {
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `string`;
  }
}

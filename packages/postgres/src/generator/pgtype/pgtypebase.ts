import { PGTypeBool } from "./base/bool";
import { PGTypeBigInt, PGTypeBytea, PGTypeNumber } from "./base/number";
import { PGTypeText, PGTypeTextArray } from "./base/text";
import { PGTypeUri } from "./base/uri";
import { PGCatalogType } from "./pgcatalogtype";
import { CatalogRow, TypeFactoryContext } from "./pgtype";
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
        return new PGTypeTid(catalog.oid, catalog.nspname, catalog.typname, "");
      case "xml":
        return new PGTypeText(
          catalog.oid,
          catalog.nspname,
          catalog.typname,
          "",
        );
      case "name":
        return new PGTypeText(
          catalog.oid,
          catalog.nspname,
          catalog.typname,
          "",
        );
      case "gtrgm":
        return new PGTypeText(
          catalog.oid,
          catalog.nspname,
          catalog.typname,
          "",
        );
      case "text":
        return new PGTypeText(
          catalog.oid,
          catalog.nspname,
          catalog.typname,
          "",
        );
      case "char":
        return new PGTypeText(
          catalog.oid,
          catalog.nspname,
          catalog.typname,
          "",
        );
      case "varchar":
        return new PGTypeText(
          catalog.oid,
          catalog.nspname,
          catalog.typname,
          "",
        );
      case "bool":
        return new PGTypeBool(
          catalog.oid,
          catalog.nspname,
          catalog.typname,
          "",
        );
      case "bit":
        return new PGTypeBool(
          catalog.oid,
          catalog.nspname,
          catalog.typname,
          "",
        );
      case "varbit":
        return new PGTypeBool(
          catalog.oid,
          catalog.nspname,
          catalog.typname,
          "",
        );
      case "macaddr":
        return new PGTypeBytea(
          catalog.oid,
          catalog.nspname,
          catalog.typname,
          "",
        );
      case "macaddr8":
        return new PGTypeBytea(
          catalog.oid,
          catalog.nspname,
          catalog.typname,
          "",
        );
      case "cidr":
        return new PGTypeBytea(
          catalog.oid,
          catalog.nspname,
          catalog.typname,
          "",
        );
      case "bytea":
        return new PGTypeBytea(
          catalog.oid,
          catalog.nspname,
          catalog.typname,
          "",
        );
      case "inet":
        return new PGTypeInet(
          catalog.oid,
          catalog.nspname,
          catalog.typname,
          "",
        );
      case "jsonpath":
        return new PGTypeText(
          catalog.oid,
          catalog.nspname,
          catalog.typname,
          "",
        );
      case "aclitem":
        return new PGTypeText(
          catalog.oid,
          catalog.nspname,
          catalog.typname,
          "",
        );
      case "bpchar":
        return new PGTypeText(
          catalog.oid,
          catalog.nspname,
          catalog.typname,
          "",
        );
      case "pg_lsn":
        return new PGTypeBigInt(
          catalog.oid,
          catalog.nspname,
          catalog.typname,
          "",
        );
      case "gtsvector":
        return new PGTypeTextArray(
          catalog.oid,
          catalog.nspname,
          catalog.typname,
          "",
        );
      case "uri":
        return new PGTypeUri(catalog.oid, catalog.nspname, catalog.typname, "");
      case "cid":
        return new PGTypeNumber(
          catalog.oid,
          catalog.nspname,
          catalog.typname,
          "",
        );
      case "xid":
        return new PGTypeNumber(
          catalog.oid,
          catalog.nspname,
          catalog.typname,
          "",
        );
      case "xid8":
        return new PGTypeNumber(
          catalog.oid,
          catalog.nspname,
          catalog.typname,
          "",
        );
      case "oidvector":
        return new PGTypeArray(
          context,
          catalog.oid,
          catalog.nspname,
          catalog.typname,
          "",
          catalog.typelem,
          { arraySuffix: false },
        );
      default:
        // if the db wants to code it as text, so do we
        if (catalog.typoutput === "textout")
          return new PGTypeText(
            catalog.oid,
            catalog.nspname,
            catalog.typname,
            "",
          );
        // categorical type mappings form a backstop
        switch (catalog.typcategory) {
          case "N":
            return new PGTypeNumber(
              catalog.oid,
              catalog.nspname,
              catalog.typname,
              "",
            );
          case "S":
            return new PGTypeText(
              catalog.oid,
              catalog.nspname,
              catalog.typname,
              "",
            );
          default:
            // TODO: handle types
            return new PGTypeText(
              catalog.oid,
              catalog.nspname,
              catalog.typname,
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

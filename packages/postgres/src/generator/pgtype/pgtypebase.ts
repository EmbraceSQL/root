import { Context, TypeFactoryContext } from "../../context";
import { asDocComment } from "../../util";
import { PGTypeBool } from "./base/bool";
import {
  PGTypeBigInt,
  PGTypeBytea,
  PGTypeNumber,
  PGTypeVector,
} from "./base/number";
import { PGTypeText, PGTypeTextArray } from "./base/text";
import { PGTypeUri } from "./base/uri";
import { PGCatalogType } from "./pgcatalogtype";
import { CatalogRow } from "./pgtype";
import { PGTypeArray } from "./pgtypearray";

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
      case "vector":
        return new PGTypeVector(catalog);
      case "inet":
        return new PGTypeInet(catalog);
      case "jsonpath":
        return new PGTypeText(catalog);
      case "point":
        return new PGTypePoint(catalog);
      case "box":
        return new PGTypePointPair(catalog);
      case "path":
        return new PGTypePointArray(catalog);
      case "polygon":
        return new PGTypePointArray(catalog);
      case "circle":
        return new PGTypeCircle(catalog);
      case "aclitem":
        return new PGTypeText(catalog);
      case "bpchar":
        return new PGTypeText(catalog);
      case "lsn":
        return new PGTypeBigInt(catalog);
      case "tsvector":
        return new PGTypeTextArray(catalog);
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
            return new PGTypeText(
              catalog,
              `FIXME: ${catalog.typname} did not resolve to a base type`,
            );
        }
    }
  }
}

class PGTypeTid extends PGTypeBase {
  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    export type ${this.typescriptName} = {
      blockNumber: number;
      tupleIndex: number;
    };
    `;
  }
}

class PGTypeInet extends PGTypeBase {
  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    ${asDocComment(this.comment)}
    export type ${this.typescriptName} = string;
    `;
  }
}

class PGTypePoint extends PGTypeBase {
  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    ${asDocComment(this.comment)}
    export type ${this.typescriptName} = {
      x: number;
      y: number;
    };
    `;
  }
}
class PGTypePointPair extends PGTypeBase {
  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    ${asDocComment(this.comment)}
    export type ${this.typescriptName} = {
      from: Point;
      to: Point;
    };
    `;
  }
}

class PGTypePointArray extends PGTypeBase {
  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    ${asDocComment(this.comment)}
    export type ${this.typescriptName} = Array<Point>;
    `;
  }
}

class PGTypeCircle extends PGTypeBase {
  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    ${asDocComment(this.comment)}
    export type ${this.typescriptName} = {
      center: Point;
      radius: number;
    };
    `;
  }
}

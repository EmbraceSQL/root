import { Context } from "../../../../context";
import { PGCatalogType } from "../../pgcatalogtype";
import { registerOverride } from "../_overrides";
import { GenerationContext, Geometry } from "@embracesql/shared";

class PGTypePoint extends PGCatalogType {
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `Geometry.Point`;
  }
  typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    return `
      return Geometry.parsePoint(from);
    `;
  }

  serializeToPostgres(context: Context, x: unknown) {
    console.assert(context);
    return Geometry.serializePoint(x);
  }

  parseFromPostgres(context: Context, x: unknown) {
    console.assert(context);
    return Geometry.parsePoint(x as string);
  }
}

class PGTypePointArray extends PGCatalogType {
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `Array<Point>`;
  }
}

registerOverride("point", PGTypePoint);
// TODO: proper parsing, these are not just arrays
registerOverride("path", PGTypePointArray);
registerOverride("polygon", PGTypePointArray);

import { Context } from "../../../../context";
import { PGCatalogType } from "../../pgcatalogtype";
import { registerOverride } from "../_overrides";
import { GenerationContext, Geometry } from "@embracesql/shared";

class PGTypePath extends PGCatalogType {
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `Geometry.Path`;
  }
  typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    return `
      return Geometry.parsePath(from);
    `;
  }

  serializeToPostgres(context: Context, x: unknown) {
    console.assert(context);
    return Geometry.serializePath(x);
  }

  parseFromPostgres(context: Context, x: unknown) {
    console.assert(context);
    return Geometry.parsePath(x as string);
  }
}

registerOverride("path", PGTypePath);

class PGTypePolygon extends PGCatalogType {
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `Geometry.Polygon`;
  }
  typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    return `
      return Geometry.parsePolygon(from);
    `;
  }

  serializeToPostgres(context: Context, x: unknown) {
    console.assert(context);
    return Geometry.serializePolygon(x);
  }

  parseFromPostgres(context: Context, x: unknown) {
    console.assert(context);
    return Geometry.parsePolygon(x as string);
  }
}
registerOverride("polygon", PGTypePolygon);

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

registerOverride("point", PGTypePoint);

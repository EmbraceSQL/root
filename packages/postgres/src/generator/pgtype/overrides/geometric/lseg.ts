import { Context } from "../../../../context";
import { PGCatalogType } from "../../pgcatalogtype";
import { registerOverride } from "../_overrides";
import { GenerationContext, Geometry } from "@embracesql/shared";

class PGLineSegment extends PGCatalogType {
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `Geometry.LineSegment`;
  }
  typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    return `
      return Geometry.parseLineSegment(from);
    `;
  }

  serializeToPostgres(context: Context, x: unknown) {
    console.assert(context);
    return Geometry.serializeLineSegment(x);
  }

  parseFromPostgres(context: Context, x: unknown) {
    console.assert(context);
    return Geometry.parseLineSegment(x as string);
  }
}

registerOverride("lseg", PGLineSegment);

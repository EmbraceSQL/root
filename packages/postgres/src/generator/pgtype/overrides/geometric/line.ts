import { Context } from "../../../../context";
import { PGCatalogType } from "../../pgcatalogtype";
import { registerOverride } from "../_overrides";
import { GenerationContext, Geometry } from "@embracesql/shared";

class PGLine extends PGCatalogType {
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `Geometry.Line`;
  }
  typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    return `
      return Geometry.parseLine(from);
    `;
  }

  serializeToPostgres(context: Context, x: unknown) {
    console.assert(context);
    return Geometry.serializeLine(x);
  }

  parseFromPostgres(context: Context, x: unknown) {
    console.assert(context);
    return Geometry.parseLine(x as string);
  }
}

registerOverride("line", PGLine);

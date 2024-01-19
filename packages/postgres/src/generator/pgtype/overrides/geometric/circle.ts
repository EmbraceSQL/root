import { Context } from "../../../../context";
import { PGTypeBase } from "../../pgtypebase";
import { registerOverride } from "../_overrides";
import { GenerationContext, Geometry } from "@embracesql/shared";

class PGTypeCircle extends PGTypeBase {
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `Geometry.Circle`;
  }
  typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    return `
      return Geometry.parseCircle(from);
    `;
  }

  serializeToPostgres(context: Context, x: unknown) {
    console.assert(context);
    return Geometry.serializeCircle(x);
  }

  parseFromPostgres(context: Context, x: unknown) {
    console.assert(context);
    return Geometry.parseCircle(x as string);
  }
}

registerOverride("circle", PGTypeCircle);

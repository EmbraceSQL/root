import { Context } from "../../../../context";
import { PGCatalogType } from "../../pgcatalogtype";
import { registerOverride } from "../_overrides";
import {
  GenerationContext,
  parsePoint,
  serializePoint,
} from "@embracesql/shared";

class PGTypePoint extends PGCatalogType {
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `
     {
      x: number;
      y: number;
    }
    `;
  }
  typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    return `
      return parsePoint(from);
    `;
  }

  serializeToPostgres(context: Context, x: unknown) {
    console.assert(context);
    return serializePoint(x);
  }

  parseFromPostgres(context: Context, x: unknown) {
    console.assert(context);
    return parsePoint(x as string);
  }
}

class PGTypePointArray extends PGCatalogType {
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `Array<Point>`;
  }
}

registerOverride("point", PGTypePoint);
registerOverride("path", PGTypePointArray);
registerOverride("polygon", PGTypePointArray);

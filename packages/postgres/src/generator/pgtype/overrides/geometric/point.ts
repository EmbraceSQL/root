import { PGCatalogType } from "../../pgcatalogtype";
import { registerOverride } from "../_overrides";
import { GenerationContext } from "@embracesql/shared";

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

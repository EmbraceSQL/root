import { PGCatalogType } from "../../pgcatalogtype";
import { registerOverride } from "../_overrides";
import { GenerationContext } from "@embracesql/shared";

class PGTypeBox extends PGCatalogType {
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `
    {
      upperRight: Point;
      lowerLeft: Point;
    }
    `;
  }
}

registerOverride("box", PGTypeBox);

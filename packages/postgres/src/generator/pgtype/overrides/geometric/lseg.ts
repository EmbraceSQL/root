import { PGCatalogType } from "../../pgcatalogtype";
import { registerOverride } from "../_overrides";
import { GenerationContext } from "@embracesql/shared";

class PGLineSegment extends PGCatalogType {
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `
     {
      from: Point;
      to: Point;
    }
    `;
  }
}

registerOverride("lseg", PGLineSegment);

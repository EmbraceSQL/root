import { Context } from "../../../../context";
import { PGCatalogType } from "../../pgcatalogtype";
import { registerOverride } from "../_overrides";

class PGTypeBox extends PGCatalogType {
  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    export type ${this.typescriptName} = {
      upperRight: Point;
      lowerLeft: Point;
    };
    `;
  }
}

registerOverride("box", PGTypeBox);

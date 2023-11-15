import { registerOverride } from "./_overrides";
import { Context } from "../../../context";
import { PGCatalogType } from "../pgcatalogtype";

class PGBox extends PGCatalogType {
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

registerOverride("box", PGBox);

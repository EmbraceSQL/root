import { registerOverride } from "./_overrides";
import { Context } from "../../../context";
import { PGCatalogType } from "../pgcatalogtype";

class PGPoint extends PGCatalogType {
  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    export type ${this.typescriptName} = {
      x: number;
      y: number;
    };
    `;
  }
}

registerOverride("point", PGPoint);

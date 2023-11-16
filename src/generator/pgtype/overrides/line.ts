import { Context } from "../../../context";
import { PGCatalogType } from "../pgcatalogtype";
import { registerOverride } from "./_overrides";

class PGLine extends PGCatalogType {
  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    export type ${this.typescriptName} = {
      a: number;
      b: number;
      c: number;
    };
    `;
  }
}

registerOverride("line", PGLine);

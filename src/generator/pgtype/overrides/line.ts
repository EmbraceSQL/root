import { registerOverride } from "./_overrides";
import { Context } from "../../../context";
import { PGCatalogType } from "../pgcatalogtype";

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

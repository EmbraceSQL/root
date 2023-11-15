import { registerOverride } from "./_overrides";
import { Context } from "../../../context";
import { PGCatalogType } from "../pgcatalogtype";

class PGInt2Vector extends PGCatalogType {
  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    export type ${this.typescriptName} = Uint16Array;
    `;
  }
}

registerOverride("int2vector", PGInt2Vector);

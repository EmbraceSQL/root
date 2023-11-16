import { Context } from "../../../context";
import { PGCatalogType } from "../pgcatalogtype";
import { registerOverride } from "./_overrides";

class PGOidVector extends PGCatalogType {
  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    export type ${this.typescriptName} = Array<number>;
    `;
  }
}

registerOverride("oidvector", PGOidVector);

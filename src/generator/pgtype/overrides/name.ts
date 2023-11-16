import { Context } from "../../../context";
import { PGCatalogType } from "../pgcatalogtype";
import { registerOverride } from "./_overrides";

class PGName extends PGCatalogType {
  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    export type ${this.typescriptName} = string;
    `;
  }
}

registerOverride("name", PGName);

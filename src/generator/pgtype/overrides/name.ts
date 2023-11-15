import { registerOverride } from "./_overrides";
import { Context } from "../../../context";
import { PGCatalogType } from "../pgcatalogtype";

class PGName extends PGCatalogType {
  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    export type ${this.typescriptName} = string;
    `;
  }
}

registerOverride("name", PGName);

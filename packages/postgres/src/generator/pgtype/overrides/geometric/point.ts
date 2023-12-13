import { Context } from "../../../../context";
import { PGCatalogType } from "../../pgcatalogtype";
import { registerOverride } from "../_overrides";

class PGTypePoint extends PGCatalogType {
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

class PGTypePointArray extends PGCatalogType {
  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    export type ${this.typescriptName} = Array<Point>;
    `;
  }
}

registerOverride("point", PGTypePoint);
registerOverride("path", PGTypePointArray);
registerOverride("polygoin", PGTypePointArray);

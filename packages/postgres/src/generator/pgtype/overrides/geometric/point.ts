import { PGCatalogType } from "../../pgcatalogtype";
import { registerOverride } from "../_overrides";
import { GenerationContext } from "@embracesql/shared";

class PGTypePoint extends PGCatalogType {
  typescriptTypeDefinition(context: GenerationContext) {
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
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `
    export type ${this.typescriptName} = Array<Point>;
    `;
  }
}

registerOverride("point", PGTypePoint);
registerOverride("path", PGTypePointArray);
registerOverride("polygoin", PGTypePointArray);

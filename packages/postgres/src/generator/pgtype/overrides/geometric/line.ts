import { PGCatalogType } from "../../pgcatalogtype";
import { registerOverride } from "../_overrides";
import { GenerationContext } from "@embracesql/shared";

class PGLine extends PGCatalogType {
  typescriptTypeDefinition(context: GenerationContext) {
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

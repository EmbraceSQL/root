import { PGTypeBase } from "../../pgtypebase";
import { registerOverride } from "../_overrides";
import { GenerationContext } from "@embracesql/shared";

class PGTypeCircle extends PGTypeBase {
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `
    export type ${this.typescriptName} = {
      center: Point;
      radius: number;
    };
    `;
  }
}

registerOverride("circle", PGTypeCircle);

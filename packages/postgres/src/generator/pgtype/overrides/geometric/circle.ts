import { Context } from "../../../..";
import { PGTypeBase } from "../../pgtypebase";
import { registerOverride } from "../_overrides";

class PGTypeCircle extends PGTypeBase {
  typescriptTypeDefinition(context: Context) {
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

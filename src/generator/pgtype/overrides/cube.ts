/* eslint-disable @typescript-eslint/no-unsafe-return */

/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Context } from "../../../context";
import { PGCatalogType } from "../pgcatalogtype";
import { registerOverride } from "./_overrides";

class PGCube extends PGCatalogType {
  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    export type ${this.typescriptName} = Float32Array;
    `;
  }

  /**
   * Coming in from JSON as an array like object, make this into
   * a float buffer
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  serializeToPostgres(context: Context, x: any) {
    console.assert(context);
    // default is just 'a string of it'
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    if (x === null) return null;
    // postgres array literal
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return `${Object.values(x)
      .map((x) => (x ? x : 0))
      .join(",")}`;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parseFromPostgres(context: Context, x: any) {
    console.assert(context);
    if (x) {
      return JSON.parse(`${x}`);
    } else {
      return null;
    }
  }
}

registerOverride("cube", PGCube);

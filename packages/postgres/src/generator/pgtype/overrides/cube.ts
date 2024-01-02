/* eslint-disable @typescript-eslint/no-unsafe-return */

/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Context } from "../../../context";
import { PGCatalogType } from "../pgcatalogtype";
import { registerOverride } from "./_overrides";
import { GenerationContext, commaSeparatedNumbers } from "@embracesql/shared";

class PGTypeCube extends PGCatalogType {
  typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    return `
      if (typeof from === "string"){
       return new Float32Array(JSON.parse(from));
      }
      if (Array.isArray(from)) {
        return new Float32Array(from);
      }
      return null;
    `;
  }
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `Float32Array`;
  }

  /**
   * Coming in from JSON as an array like object, make this into
   * a float buffer
   */
  serializeToPostgres(context: Context, x: unknown) {
    console.assert(context);
    // default is just 'a string of it'
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    if (x === null) return null;
    // postgres array literal
    if (Array.isArray(x))
      return `${Object.values(x)
        .map((x) => (x ? x : 0))
        .join(",")}`;
    // wing it 🪽
    return `${x}`;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parseFromPostgres(context: Context, x: any) {
    console.assert(context);
    if (x) {
      return new Float32Array(commaSeparatedNumbers.tryParse(`${x}`));
    } else {
      return null;
    }
  }
}

registerOverride("cube", PGTypeCube);

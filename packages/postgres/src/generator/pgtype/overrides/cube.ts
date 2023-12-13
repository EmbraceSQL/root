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
    parse${this.typescriptName}(from: string|null) {
      if (from === null) return null;
      const source = Array.isArray(from) ? new Float32Array(from) : JSON.parse(from);
      return new Float32Array(source);
    }
    `;
  }
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

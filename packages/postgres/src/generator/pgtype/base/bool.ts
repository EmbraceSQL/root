import { Context } from "../../..";
import { PGCatalogType } from "../pgcatalogtype";
import { GenerationContext } from "@embracesql/shared";

/**
 * Boolean types in postgres can be bit like, or string like t | f.
 */
export class PGTypeBool extends PGCatalogType {
  typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    return `
    parse${this.typescriptName}(from: string|null) {
      if (from === null) return null;
      if(['t', 'T', 'true', 'True'].includes(from)) return true;
      try {
        if (Number.parseFloat(from) > 0) return true;
      } catch (e) {
        // eat
      }
      return false;
    }
    `;
  }
  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    export type ${this.typescriptName} = boolean;
    `;
  }
  serializeToPostgres(context: Context, x: unknown) {
    console.assert(context);
    // string it -- yeah I know this is strange -- but it is how the
    // postges protocol works
    // https://github.com/porsager/postgres/blob/master/src/types.js#L25
    return x ? "t" : "f";
  }
  parseFromPostgres(context: Context, x: string | null) {
    // I've seen text encoding come back with t, f, true, false
    if (["t", "true"].includes(x as string)) return true;
    // false is the default
    return false;
  }
}

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
      if (typeof from === "boolean") {
        return from;
      }
      if (typeof from === "string") {
        if(['t', 'true', 'on', 'yes'].includes(from.toLowerCase())) return true;
        try {
          if (Number.parseFloat(from) > 0) return true;
        } catch (e) {
          // eat
        }
      }
      if (typeof from === "number") {
        return from !== 0;
      }
      return false;
    `;
  }
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `boolean`;
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

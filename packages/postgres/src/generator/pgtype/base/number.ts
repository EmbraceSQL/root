import { Context } from "../../../context";
import { PGCatalogType } from "../pgcatalogtype";
import { GenerationContext } from "@embracesql/shared";

/**
 * Numbers in the database flow from here.
 *
 * One thing to keep in mind, JS/TS have a powerful -- but only the
 * one number type. Postgres is closer to C byte width style numerics.
 */
export class PGTypeNumber extends PGCatalogType {
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `number`;
  }

  typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    return `
    if (typeof from === "string"){
      return Number.parseFloat(from);
    }
    if (typeof from === "number") {
      return from;
    }
    return null;
    `;
  }

  serializeToPostgres(context: Context, x: unknown) {
    console.assert(context);
    // string it
    if (!(x === undefined) && !(x === null)) {
      // eslint-disable-next-line @typescript-eslint/no-base-to-string, @typescript-eslint/restrict-template-expressions
      return `${x}`;
    } else {
      return null;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parseFromPostgres(context: Context, x: any): bigint | number | null {
    if (!(x === undefined) && !(x === null)) {
      return +x;
    } else {
      return null;
    }
  }
}

/**
 * Large integers. Surprise! JS does have a type for this too.
 */
export class PGTypeBigInt extends PGTypeNumber {
  typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    return `
    if (typeof from === "bigint") {
      return from;
    }
    if (typeof from === "number") {
      return BigInt(from);
    }
    if (typeof from === "string") {
      if (from === '') return null;
      return BigInt(from);
    }
    return null;
    `;
  }

  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `bigint`;
  }

  parseFromPostgres(context: Context, x: unknown) {
    if (!(x === undefined) && !(x === null)) {
      return BigInt(+x);
    } else {
      return null;
    }
  }
}

export class PGTypeBytea extends PGCatalogType {
  typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    return `
    if (typeof from === "string"){
      return new Uint8Array(JSON.parse(from));
    }
    if (Array.isArray(from)) {
      return new Uint8Array(from);
    }
    return [];
    `;
  }
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `Uint8Array`;
  }
}

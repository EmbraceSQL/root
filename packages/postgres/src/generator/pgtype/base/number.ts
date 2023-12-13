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
  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    export type ${this.typescriptName} = number;
    `;
  }

  typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    return `
    parse${this.typescriptName}(from: string|null) {
      if (from === null) return null;
      return Number.parseFloat(from);
    }
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
    parse${this.typescriptName}(from: string|null) {
      if (from === null) return null;
      if (from === '') return null;
      return BigInt(from);
    }
    `;
  }

  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    export type ${this.typescriptName} = bigint;
    `;
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
    parse${this.typescriptName}(from: string|null) {
      return from ? new Uint8Array(JSON.parse(from)) : null;
    }
    `;
  }
  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    export type ${this.typescriptName} = Uint8Array;
    `;
  }
}

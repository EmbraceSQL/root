import { Context } from "../../../context";
import { PGCatalogType } from "../pgcatalogtype";

export class PGNumber extends PGCatalogType {
  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    export type ${this.typescriptName} = number;
    `;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  serializeToPostgres(context: Context, x: any) {
    // string it
    if (!(x === undefined) && !(x === null)) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      return `${x}`;
    } else {
      return null;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parseFromPostgres(context: Context, x: any) {
    if (!(x === undefined) && !(x === null)) {
      return +x;
    } else {
      return null;
    }
  }
}

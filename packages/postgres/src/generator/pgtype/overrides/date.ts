import { Context } from "../../../context";
import { PGCatalogType } from "../pgcatalogtype";
import { registerOverride } from "./_overrides";

class PGDate extends PGCatalogType {
  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    export type ${this.typescriptName} = JsDate;
    `;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  serializeToPostgres(context: Context, x: any) {
    // string it
    if (x) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      return (x instanceof Date ? x : new Date(`${x}`)).toISOString();
    } else {
      return null;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parseFromPostgres(context: Context, x: any) {
    // parse that string value into a date
    if (x) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      return new Date(`${x}`);
    } else {
      return null;
    }
  }
}

registerOverride("timestamptz", PGDate);
registerOverride("timestamp", PGDate);
registerOverride("date", PGDate);
registerOverride("time", PGDate);
registerOverride("timetz", PGDate);

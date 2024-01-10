import { Context } from "../../../context";
import { PGCatalogType } from "../pgcatalogtype";
import { registerOverride } from "./_overrides";
import { GenerationContext } from "@embracesql/shared";

class PGDate extends PGCatalogType {
  typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    return `
      if ((from as unknown) instanceof JsDate) return from as Date;
      return new JsDate(from as string);
    `;
  }
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    // date ends up with a type alias
    return `JsDate`;
  }

  serializeToPostgres(context: Context, x: unknown) {
    console.assert(context);
    // string it
    if (x) {
      // eslint-disable-next-line @typescript-eslint/no-base-to-string, @typescript-eslint/restrict-template-expressions
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

// TODO: gonna need a real JS 'time' type
registerOverride("time", PGDate);
registerOverride("timetz", PGDate);

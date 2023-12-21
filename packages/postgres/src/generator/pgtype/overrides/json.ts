/* eslint-disable @typescript-eslint/no-unsafe-return */

/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Context } from "../../../context";
import { PGCatalogType } from "../pgcatalogtype";
import { registerOverride } from "./_overrides";
import { GenerationContext } from "@embracesql/shared";

class PGJson extends PGCatalogType {
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `JSONObject`;
  }

  serializeToPostgres(context: Context, x: unknown) {
    console.assert(context);
    // string it if we need it
    if (x) {
      if (typeof x === "string") return x;
      return JSON.stringify(x);
    } else {
      return null;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parseFromPostgres(context: Context, x: any) {
    if (x) {
      return JSON.parse(`${x}`);
    } else {
      return null;
    }
  }
}

registerOverride("json", PGJson);
registerOverride("jsonb", PGJson);

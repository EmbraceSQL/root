import { Context } from "../../../context";
import { PGCatalogType } from "../pgcatalogtype";
import { registerOverride } from "./_overrides";
import { UUID } from "@embracesql/shared";

class PGUUID extends PGCatalogType {
  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    export type ${this.typescriptName} = UUID;
    `;
  }

  serializeToPostgres(context: Context, x: UUID) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return x ? x.uuid : null;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parseFromPostgres(context: Context, x: any) {
    if (x) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      return new UUID(`${x}`);
    } else {
      return null;
    }
  }
}

registerOverride("uuid", PGUUID);

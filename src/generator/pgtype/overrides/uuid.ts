import { registerOverride } from "./_overrides";
import { Context } from "../../../context";
import { UUID } from "../../../types";
import { PGCatalogType } from "../pgcatalogtype";

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
  typescriptCastFromJSON(context: Context) {
    console.assert(context);
    return `
    return new UUID(o as unknown as UUID);
    `;
  }
}

registerOverride("uuid", PGUUID);

import { Context } from "../../../context";
import { PGCatalogType } from "../pgcatalogtype";
import { registerOverride } from "./_overrides";
import { GenerationContext, UUID } from "@embracesql/shared";

class PGUUID extends PGCatalogType {
  typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    return `
      return from ? new UUID(from) : null;
    `;
  }
  typescriptTypeDefinition(context: GenerationContext) {
    console.assert(context);
    return `
    export type ${this.typescriptName} = UUID;
    `;
  }

  serializeToPostgres(context: Context, x: unknown) {
    if (x === null) return null;
    if ((x as UUID).uuid) return (x as UUID).uuid;
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return `${x}`;
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

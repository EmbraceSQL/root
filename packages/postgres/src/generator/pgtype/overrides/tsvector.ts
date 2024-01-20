import { PGTypeText } from "../base/text";
import { registerOverride } from "./_overrides";
import { GenerationContext } from "@embracesql/shared";

/**
 * Full text search vectors stored in the database are searched
 * with @@ operators and a transform to `to_tsquery` family of
 * functions.
 */
export class PGTypeTsVector extends PGTypeText {
  override postgresWrapReadParameter(
    context: GenerationContext,
    expression: string,
  ): string {
    console.assert(context);
    return `to_tsquery(${expression})`;
  }

  /**
   * Passed as the well known type text.
   */
  override get toOID(): number {
    // yep, you just gotta know this.
    return 25;
  }
}

registerOverride("tsvector", PGTypeTsVector);
registerOverride("tsquery", PGTypeTsVector);

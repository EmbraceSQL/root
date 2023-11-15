import { CatalogRow, Context } from "../../context";
import { PGCatalogType } from "./pgcatalogtype";

/**
 * Ranges are pairs of base types the specify the low and high potential
 * values.
 */
export class PGTypeRange extends PGCatalogType {
  constructor(catalog: CatalogRow) {
    super(catalog);
  }

  typescriptTypeDefinition(context: Context) {
    // look up the range'd type and use it to make a tuple.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const type = context.resolveType(this.catalog.rngsubtype)!;
    return `
    export type ${this.typescriptName} = [${type.typescriptNameWithNamespace(
      context
    )}, ${type.typescriptNameWithNamespace(context)}];
    `;
  }
}

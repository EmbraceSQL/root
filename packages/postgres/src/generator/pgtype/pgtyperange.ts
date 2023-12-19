import { TypeFactoryContext } from "../../context";
import { PGCatalogType } from "./pgcatalogtype";
import { CatalogRow } from "./pgtype";
import { GenerationContext } from "@embracesql/shared";

/**
 * Ranges are pairs of base types the specify the low and high potential
 * values.
 */
export class PGTypeRange extends PGCatalogType {
  constructor(context: TypeFactoryContext, catalog: CatalogRow) {
    super(catalog);
  }

  typescriptTypeDefinition(context: GenerationContext) {
    // look up the range'd type and use it to make a tuple.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const type = context.database.resolveType(this.catalog.rngsubtype)!;
    // array with two elements is the nearst-to-a-tuple in JS
    return `
    export type ${this.typescriptName} = [${type.typescriptNamespacedName}, ${type.typescriptNamespacedName}];
    `;
  }
}

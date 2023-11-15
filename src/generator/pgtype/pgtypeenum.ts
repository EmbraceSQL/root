import { CatalogRow, Context } from "../../context";
import { PGCatalogType } from "./pgcatalogtype";

/**
 * Enumerated types in PG are string-ish constants.
 */
export class PGTypeEnum extends PGCatalogType {
  constructor(catalog: CatalogRow) {
    super(catalog);
  }

  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    const namedValues = this.catalog.enums.map(
      (a) => `${a.enumlabel} = "${a.enumlabel}"`
    );
    return `
    export enum ${this.typescriptName} {
      ${namedValues.join(",")}
    };
    `;
  }
}

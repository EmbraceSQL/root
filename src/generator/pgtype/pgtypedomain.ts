import { CatalogRow, Context } from "../../context";
import { PGCatalogType } from "./pgcatalogtype";

/**
 * Domain types are renaming of other types.
 *
 * In the database these may have different constraints
 */
export class PGTypeDomain extends PGCatalogType {
  constructor(catalog: CatalogRow) {
    super(catalog);
  }

  typescriptTypeDefinition(context: Context) {
    return `
    export type ${this.typescriptName} = ${
      context
        .resolveType(this.catalog.typbasetype)
        ?.typescriptNameWithNamespace(context) ?? "void"
    };
    `;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parseFromPostgres(context: Context, x: any) {
    // delegate to the bast type
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return context
      .resolveType(this.catalog.typbasetype)
      .parseFromPostgres(context, x);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  serializeToPostgres(context: Context, x: any) {
    // delegate to the base type
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return context
      .resolveType(this.catalog.typbasetype)
      .serializeToPostgres(context, x);
  }
}

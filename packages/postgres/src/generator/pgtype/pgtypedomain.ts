import { Context, TypeFactoryContext } from "../../context";
import { PGCatalogType } from "./pgcatalogtype";
import { CatalogRow } from "./pgtype";
import { GenerationContext } from "@embracesql/shared";

/**
 * Domain types are renaming of other types.
 *
 * In the database these may have different constraints
 */
export class PGTypeDomain extends PGCatalogType {
  constructor(context: TypeFactoryContext, catalog: CatalogRow) {
    super(catalog);
  }

  typescriptTypeDefinition(context: GenerationContext) {
    return `${
      context.database.resolveType(this.catalog.typbasetype)
        ?.typescriptNamespacedName ?? "void"
    }`;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parseFromPostgres(context: Context, x: any) {
    // delegate to the bast type
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return context
      .resolveType(this.catalog.typbasetype)
      .parseFromPostgres(context, x);
  }

  serializeToPostgres(context: Context, x: unknown) {
    // delegate to the base type
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return context
      .resolveType(this.catalog.typbasetype)
      .serializeToPostgres(context, x);
  }
}

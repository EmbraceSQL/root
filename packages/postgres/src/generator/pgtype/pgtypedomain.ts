import { Context, TypeFactoryContext } from "../../context";
import { PGCatalogType } from "./pgcatalogtype";
import { CatalogRow } from "./pgtype";
import { DomainTypeNode, GenerationContext } from "@embracesql/shared";

/**
 * Domain types are renaming of other types.
 *
 * In the database these may have different constraints
 */
export class PGTypeDomain extends PGCatalogType {
  constructor(context: TypeFactoryContext, catalog: CatalogRow) {
    super(catalog);
  }

  loadAST(context: GenerationContext) {
    const schema = context.database.resolveSchema(this.catalog.nspname);

    // there is no guarantee that the types of the attributes are loaded yet
    const type = new DomainTypeNode(
      this.catalog.typname,
      schema.types,
      this.oid,
      this.comment,
    );
    context.database.registerType(type.id, type);
  }

  finalizeAST(context: GenerationContext) {
    const typeNode = context.database.resolveType<DomainTypeNode>(this.oid);
    typeNode.baseType = context.database.resolveType(this.catalog.typbasetype);
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

import { Context } from "../../context";
import { PGCatalogType } from "./pgcatalogtype";
import { TypeFactoryContext } from "./pgtype";
import { DomainTypeNode, GenerationContext } from "@embracesql/shared";

/**
 * Domain types are renaming of other types.
 *
 * In the database these may have different constraints
 */
export class PGTypeDomain extends PGCatalogType {
  constructor(
    context: TypeFactoryContext,
    oid: number,
    nspname: string,
    typname: string,
    comment: string,
    public typbasetype: number,
  ) {
    console.assert(context);
    super(oid, nspname, typname, comment);
  }

  loadAST(context: GenerationContext) {
    const schema = context.database.resolveSchema(this.nspname);

    // there is no guarantee that the types of the attributes are loaded yet
    const type = new DomainTypeNode(
      this.typname,
      schema.types,
      this.oid,
      this.comment,
    );
    context.database.registerType(type.id, type);
  }

  finalizeAST(context: GenerationContext) {
    const typeNode = context.database.resolveType<DomainTypeNode>(this.oid);
    typeNode.baseType = context.database.resolveType(this.typbasetype);
  }

  typescriptTypeDefinition(context: GenerationContext) {
    return `${
      context.database.resolveType(this.typbasetype)
        ?.typescriptNamespacedName ?? "void"
    }`;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parseFromPostgres(context: Context, x: any) {
    // delegate to the bast type
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return context.resolveType(this.typbasetype).parseFromPostgres(context, x);
  }

  serializeToPostgres(context: Context, x: unknown) {
    // delegate to the base type
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return context
      .resolveType(this.typbasetype)
      .serializeToPostgres(context, x);
  }
}

import { Context, TypeFactoryContext } from "../../context";
import { PGCatalogType } from "./pgcatalogtype";
import { CatalogRow } from "./pgtype";
import {
  ArrayTypeNode,
  DELIMITER,
  GenerationContext,
  arrayAttribute,
  escapeArrayValue,
} from "@embracesql/shared";

type Props = {
  arraySuffix: boolean;
};

/**
 * Arrays of other types are somewhat simple to declare - it is just Array<...>.
 */
export class PGTypeArray extends PGCatalogType {
  constructor(
    context: TypeFactoryContext,
    catalog: CatalogRow,
    private props: Props = { arraySuffix: true },
  ) {
    super(catalog);
  }

  loadAST(context: GenerationContext) {
    const schema = context.database.resolveSchema(this.catalog.nspname);

    const type = new ArrayTypeNode(
      `${this.catalog.typname}${this.props.arraySuffix ? "_array" : ""}`,
      schema.types,
      this.oid,
    );
    context.database.registerType(type.id, type);
  }

  finalizeAST(context: GenerationContext): void {
    // this needs to be done 'later' to make sure the member type
    // has had a chance to be created -- two passes since types form a
    // graph, not a strict tree
    const memberType = context.database.resolveType(this.catalog.typelem);
    context.database.resolveType<ArrayTypeNode>(this.catalog.oid).memberType =
      memberType;
  }

  serializeToPostgres(context: Context, x: unknown) {
    // passed object
    if (x) {
      // make an array type -- the passed x is gonna be elements
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const elements = x as any[];
      const elementType = context.resolveType(this.catalog.typelem);
      const attributes = elements.map((e) => {
        // hand off the the serializer
        const value = elementType.serializeToPostgres(context, e);
        // null out unknown values
        if (value === null || value === undefined) return "NULL";
        // quick escape with regex
        return value ? escapeArrayValue.tryParse(`${value}`) : "";
      });
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      return `{${attributes.join(DELIMITER)}}`;
    } else {
      return null;
    }
  }

  parseFromPostgres(context: Context, x: string) {
    if (x) {
      const elements = arrayAttribute.tryParse(x);
      const elementType = context.resolveType(this.catalog.typelem);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return elements.map((e) =>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        elementType.parseFromPostgres(context, e),
      );
    } else {
      return null;
    }
  }
}

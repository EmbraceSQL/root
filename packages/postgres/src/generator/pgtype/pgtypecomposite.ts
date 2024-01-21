import { Context } from "../../context";
import { PGAttribute } from "./pgattribute";
import { PGCatalogType } from "./pgcatalogtype";
import { TypeFactoryContext } from "./pgtype";
import {
  AttributeNode,
  CompositeTypeNode,
  DELIMITER,
  GenerationContext,
  compositeAttribute,
  escapeCompositeValue,
  parseObjectWithAttributes,
} from "@embracesql/shared";
import { camelCase } from "change-case";

/**
 * Composite types are built up with other types into name:type
 * properties.
 */
export class PGTypeComposite extends PGCatalogType {
  attributes: PGAttribute[];
  constructor(
    context: TypeFactoryContext,
    oid: number,
    nspname: string,
    typname: string,
    comment: string,
    public typrelid: number,
  ) {
    super(oid, nspname, typname, comment);

    this.attributes = context.attributes.attributesForType(typrelid);
  }

  loadAST(context: GenerationContext) {
    const schema = context.database.resolveSchema(this.nspname);

    // there is no guarantee that the types of the attributes are loaded yet
    const type = new CompositeTypeNode(
      this.typname,
      schema.types,
      this.oid,
      this.comment,
    );
    context.database.registerType(type.id, type);
  }

  finalizeAST(context: GenerationContext) {
    const typeNode = context.database.resolveType<CompositeTypeNode>(this.oid);
    this.attributes.forEach((a, i) => {
      const attributeType = context.database.resolveType(a.attribute.atttypid);
      if (!attributeType) {
        throw new Error(
          `${this.typname} cannot find type for ${a.attribute.attname} ${a.attribute.atttypid}`,
        );
      }
      new AttributeNode(
        typeNode,
        a.name,
        i,
        attributeType,
        !a.isOptional,
        !a.notNull,
      );
    });
  }

  attributeByAttnum(attnum: number) {
    // yep -- postgres is one based
    return this.attributes[attnum - 1];
  }

  get postgresToTypescript() {
    // snippet will pick resultset fields to type map
    const attributes = this.attributes.map(
      (c) => `${camelCase(c.name)}: undefinedIsNull(r.${c.name})`,
    );
    // all the fields in the resultset mapped out to an inferred type array
    return `response.map(r => ({ ${attributes.join(",")} }))`;
  }

  serializeToPostgres(context: Context, x: unknown) {
    // make a composite type -- escape the values looked up from the
    // passed object
    if (typeof x === "object") {
      const attributes = this.attributes.map((a) => {
        // hand off the the serializer
        const value = context
          .resolveType(a.attribute.atttypid)
          .serializeToPostgres(
            context,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            (x as Record<string, object>)[camelCase(a.attribute.attname)],
          );
        // quick escape with regex
        return value ? escapeCompositeValue.tryParse(`${value}`) : "";
      });
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      return `(${attributes.join(DELIMITER)})`;
    } else {
      return null;
    }
  }

  parseFromPostgres(context: Context, x: string) {
    // have parsimmon pick out an object right from our metadata
    // and chain along to the parser for that type
    const attributes = this.attributes.map((a) => [
      camelCase(a.attribute.attname),
      compositeAttribute.map(
        (parsedAttributeText) =>
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          context
            .resolveType(a.attribute.atttypid)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .parseFromPostgres(context, parsedAttributeText) as any,
      ),
    ]);
    return parseObjectWithAttributes(attributes, x);
  }
}

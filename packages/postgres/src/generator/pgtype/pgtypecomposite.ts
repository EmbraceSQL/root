import { Context, TypeFactoryContext } from "../../context";
import { PGAttribute } from "./pgattribute";
import { PGCatalogType } from "./pgcatalogtype";
import { PGIndex } from "./pgindex";
import { CatalogRow } from "./pgtype";
import {
  AttributeTypeNode,
  CompositeTypeNode,
  DELIMITER,
  GenerationContext,
  cleanIdentifierForTypescript,
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
  indexes: PGIndex[];
  constructor(context: TypeFactoryContext, catalog: CatalogRow) {
    super(catalog);

    this.attributes = context.attributes.attributesForType(this);
    // translate the attributes on the index into attributes on the type
    // this is needed to properly pick up constraints which are on the type
    // for the base table but are not on the type for the index
    this.indexes = context.indexes
      .indexesForType(this)
      .map((i) => i.translateAttributes(context, this));
  }

  loadAST(context: GenerationContext) {
    const schema = context.database.resolveSchema(this.catalog.nspname);

    // there is no guarantee that the types of the attributes are loaded yet
    const type = new CompositeTypeNode(
      this.catalog.typname,
      schema.types,
      this.oid,
    );
    context.database.registerType(type.id, type);
  }

  finalizeAST(context: GenerationContext) {
    const typeNode = context.database.resolveType<CompositeTypeNode>(this.oid);
    this.attributes.forEach((a, i) =>
      typeNode.children.push(
        new AttributeTypeNode(
          typeNode,
          a.name,
          i,
          context.database.resolveType(a.attribute.atttypid),
          !a.isOptional,
        ),
      ),
    );
  }

  get hasPrimaryKey() {
    return this.primaryKey !== undefined;
  }

  get hasPrimaryKeyDefault() {
    const primaryKey = this.indexes.find((i) => i.primaryKey);
    if (primaryKey !== undefined) {
      // check all the primary key attributes
      return (
        primaryKey.attributes.filter((a) => a.hasDefault).length ===
        primaryKey.attributes.length
      );
    }
    //fallthrough
    return false;
  }

  get primaryKey() {
    return this.indexes.find((i) => i.primaryKey);
  }

  get primaryKeyAttributes() {
    const primaryKey = this.indexes.find((i) => i.primaryKey);
    return primaryKey?.attributes ?? [];
  }

  get notPrimaryKeyAttributes() {
    const primaryKey = this.indexes.find((i) => i.primaryKey);
    const notIt = primaryKey?.attributes.map((a) => a.name) ?? [];
    return this.attributes.filter((a) => !notIt.includes(a.name));
  }

  attributeByAttnum(attnum: number) {
    // yep -- postgres is one based
    return this.attributes[attnum - 1];
  }

  typescriptTypeDefinition(context: GenerationContext) {
    // all the fields -- and a partial type to allow filling out with
    // various sub selects
    const nameAndType = this.attributes.map((a) => {
      const attributeType = context.database.resolveType(a.attribute.atttypid)!;
      const attributeName = `${camelCase(
        cleanIdentifierForTypescript(a.attribute.attname),
      )}`;
      const attributeTypeName = a.notNull
        ? attributeType.typescriptNamespacedName
        : `Nullable<${attributeType.typescriptNamespacedName}>`;
      return `${attributeName}${
        a.isOptional ? "?" : ""
      }: ${attributeTypeName};`;
    });
    return `{${nameAndType.join(" ")}}`;
  }

  get sqlColumns() {
    return this.attributes.map((a) => a.postgresName).join(",");
  }

  get postgresResultRecordToTypescript() {
    // snippet will pick resultset fields to type map
    const recordPieceBuilders = this.attributes.map(
      (c) => `${camelCase(c.name)}: undefinedIsNull(record.${c.name})`,
    );
    // all the fields in the resultset mapped out to an inferred type array
    return `response.map(record => ({ ${recordPieceBuilders.join(",")} }))`;
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
      compositeAttribute.map((parsedAttributeText) =>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        context
          .resolveType(a.attribute.atttypid)
          .parseFromPostgres(context, parsedAttributeText),
      ),
    ]);
    return parseObjectWithAttributes(attributes, x);
  }
}

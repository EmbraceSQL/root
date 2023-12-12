import { Context, TypeFactoryContext } from "../../context";
import { PGAttribute } from "./pgattribute";
import { PGCatalogType } from "./pgcatalogtype";
import { PGIndex } from "./pgindex";
import { CatalogRow } from "./pgtype";
import {
  DELIMITER,
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

  typescriptTypeDefinition(context: Context) {
    const generationBuffer = [``];
    // all the fields -- and a partial type to allow filling out with
    // various sub selects
    const nameAndType = this.attributes.map(
      (a) =>
        `${a.typescriptName}${
          a.isOptional ? "?" : ""
        }: ${a.typescriptTypeDefinition(context)};`,
    );
    generationBuffer.push(`
    export interface ${this.typescriptName}  {
      ${nameAndType.join("\n")}
    };
    `);

    if (this.hasPrimaryKey) {
      // without the primary key, used to create rows when there
      // is a default value in the database on the primary key
      const nameAndType = this.notPrimaryKeyAttributes.map(
        (a) =>
          `${a.typescriptName}${
            a.attribute.attnotnull ? "" : "?"
          }: ${a.typescriptTypeDefinition(context)};`,
      );
      generationBuffer.push(`
    export interface ${this.typescriptName}NotPrimaryKey  {
      ${nameAndType.join("\n")}
    };
    `);

      const primaryKeyNames =
        this.primaryKey?.attributes.map(
          (a) => `value.${a.typescriptName} !== undefined`,
        ) || [];
      generationBuffer.push(`
      export function includes${this.typescriptName}PrimaryKey(value: Partial<${
        this.typescriptName
      }>): value is ${this.typescriptName}{
        return ${primaryKeyNames.join(" && ")}
      }
      `);
    }

    return generationBuffer.join("\n");
  }

  sqlColumns(context: Context) {
    console.assert(context);
    return this.attributes.map((a) => a.postgresName).join(",");
  }

  postgresResultRecordToTypescript(
    context: Context,
    resultsetName = "response",
  ) {
    console.assert(context);
    // snippet will pick resultset fields to type map
    const recordPieceBuilders = this.attributes.map(
      (c) => `${camelCase(c.name)}: undefinedIsNull(record.${c.name})`,
    );
    // all the fields in the resultset mapped out to an inferred type array
    return `${resultsetName}.map(record => ({ ${recordPieceBuilders.join(
      ",",
    )} }))`;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  serializeToPostgres(context: Context, x: any) {
    // make a composite type -- escape the values looked up from the
    // passed object
    if (x) {
      const attributes = this.attributes.map((a) => {
        // hand off the the serializer
        const value = context
          .resolveType(a.attribute.atttypid)
          .serializeToPostgres(
            context,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            x[camelCase(a.attribute.attname)],
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

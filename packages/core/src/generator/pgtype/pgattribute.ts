import { Context } from "../../context";
import { groupBy } from "../../util";
import { PGTypeComposite } from "./pgtypecomposite";
import { camelCase } from "change-case";
import * as path from "path";
import { Sql } from "postgres";

type AttributeRow = {
  attnum: number;
  attrelid: number;
  atttypid: number;
  attname: string;
  attnotnull: boolean;
};

/**
 * All attributes in the postgres catalog.
 */
export class PGAttributes {
  static async factory(sql: Sql) {
    const attributes = (await sql.file(
      path.join(__dirname, "pgattributes.sql"),
    )) as unknown as AttributeRow[];
    return new PGAttributes(attributes);
  }

  public attributesByRelid: Record<number, PGAttribute[]>;
  private constructor(attributes: AttributeRow[]) {
    this.attributesByRelid = groupBy(
      attributes,
      (r) => r.attrelid,
      (r) => new PGAttribute(r),
    );
  }

  attributesForType(catalogType: PGTypeComposite) {
    return (
      this.attributesByRelid[catalogType.catalog.typrelid]?.sort(
        (l, r) => l.attribute.attnum - r.attribute.attnum,
      ) ?? []
    );
  }
}

/**
 * Table and composite types have attributes, or as they are called
 * in real life -- columns.
 *
 */
export class PGAttribute {
  constructor(public attribute: AttributeRow) {}

  get name() {
    return this.attribute.attname;
  }

  get typescriptName() {
    // camel case -- this is a 'property like'
    return `${camelCase(this.attribute.attname)}`;
  }

  get postgresName() {
    return this.attribute.attname;
  }

  typescriptTypeDefinition(context: Context) {
    // nullability, but otherwise delegate to the type of the attribute
    const underlyingType =
      context
        .resolveType(this.attribute.atttypid)
        ?.typescriptNameWithNamespace(context) ?? "void";
    if (this.attribute.attnotnull) {
      return underlyingType;
    } else {
      return `Nullable<${underlyingType}>`;
    }
  }

  /**
   * Render a code generation string that will create a postgres 'right hand side'
   * of an equals value expression for this attribute.
   *
   * This will create an expression that will self equal for undefined on the
   * parameterHolder in calling typescript -- allows partial updates.
   *
   */
  postgresValueExpression(context: Context, parameterHolder = "parameters") {
    const postgresType = context.resolveType(this.attribute.atttypid);
    const undefinedSelfEqualExpression = `sql("${this.postgresName}")`;
    const valueExpression = `typed.${postgresType.postgresMarshallName}(${parameterHolder}.${this.typescriptName})`;
    const combinedExpression = `${parameterHolder}.${this.typescriptName} === undefined ? ${undefinedSelfEqualExpression} : ${valueExpression}`;
    return `\${ ${combinedExpression} }`;
  }
}

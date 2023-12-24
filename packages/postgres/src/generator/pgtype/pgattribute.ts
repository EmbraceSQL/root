import { Context } from "../../context";
import { groupBy } from "../../util";
import { PGTypeComposite } from "./pgtypecomposite";
import { cleanIdentifierForTypescript } from "@embracesql/shared";
import { camelCase } from "change-case";
import path from "path";
import { Sql } from "postgres";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

type AttributeRow = {
  attnum: number;
  attrelid: number;
  atttypid: number;
  attname: string;
  attnotnull: boolean;
  atthasdef: boolean;
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

  get notNull() {
    return this.attribute.attnotnull;
  }

  get allowsNull() {
    return !this.attribute.attnotnull;
  }

  get hasDefault() {
    return this.attribute.atthasdef;
  }

  get isOptional() {
    return this.allowsNull || this.hasDefault;
  }

  get name() {
    return this.attribute.attname;
  }

  get typescriptName() {
    // camel case -- this is a 'property like'
    return `${camelCase(cleanIdentifierForTypescript(this.attribute.attname))}`;
  }

  get postgresName() {
    return this.attribute.attname;
  }

  /**
   * Render a code generation string that will create a postgres 'right hand side'
   * of an equals value expression for this attribute.
   *
   * This will create an expression that will self equal for undefined on the
   * parameterHolder in calling typescript -- allows partial updates.
   *
   */
  postgresValueExpression(
    context: Context,
    parameterHolder = "parameters",
    selfEqual = true,
  ) {
    const postgresType = context.resolveType(this.attribute.atttypid);
    const undefinedExpression = selfEqual
      ? `sql("${this.postgresName}")`
      : "sql`DEFAULT`";
    const valueExpression = `typed[${postgresType.oid}](${parameterHolder}.${this.typescriptName})`;
    const combinedExpression = `${parameterHolder}.${this.typescriptName} === undefined ? ${undefinedExpression} : ${valueExpression}`;
    return `\${ ${combinedExpression} }`;
  }
}

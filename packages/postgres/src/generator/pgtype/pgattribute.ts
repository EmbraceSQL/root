import { groupBy } from "../../util";
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

  attributesForType(typrelid: number) {
    return (
      this.attributesByRelid[typrelid]?.sort(
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
}

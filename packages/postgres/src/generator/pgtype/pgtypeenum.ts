import { groupBy } from "../../util";
import { PGCatalogType } from "./pgcatalogtype";
import { TypeFactoryContext } from "./pgtype";
import { EnumTypeNode, GenerationContext } from "@embracesql/shared";
import path from "path";
import { Sql } from "postgres";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

type EnumRow = {
  enumsortorder: number;
  enumtypid: number;
  enumlabel: string;
};

/**
 * All enum values.
 */
export class PGTypeEnumValues {
  static async factory(sql: Sql) {
    return new PGTypeEnumValues(
      (await sql.file(
        path.join(__dirname, "pgtypeenumvalues.sql"),
      )) as unknown as EnumRow[],
    );
  }

  enumValuesByTypeId: Record<number, EnumRow[]>;
  private constructor(enumRows: EnumRow[]) {
    this.enumValuesByTypeId = groupBy(enumRows, (r) => r.enumtypid);
  }
}

/**
 * Enumerated types in PG are string-ish constants.
 */
export class PGTypeEnum extends PGCatalogType {
  values: EnumRow[];

  constructor(
    context: TypeFactoryContext,
    oid: number,
    nspname: string,
    typname: string,
    comment: string,
  ) {
    console.assert(context);
    super(oid, nspname, typname, comment);
    this.values = context.enumValues.enumValuesByTypeId[oid];
    this.values.toSorted((l, r) => l.enumsortorder - r.enumsortorder);
  }

  loadAST(context: GenerationContext) {
    const schema = context.database.resolveSchema(this.nspname);

    const type = new EnumTypeNode(
      this.typname,
      this.values.map((v) => v.enumlabel),
      schema.types,
      this.oid,
      this.comment,
      this,
    );
    context.database.registerType(type.id, type);
  }
}

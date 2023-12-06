import { Context, TypeFactoryContext } from "../../context";
import { cleanIdentifierForTypescript, groupBy } from "../../util";
import { PGCatalogType } from "./pgcatalogtype";
import { CatalogRow } from "./pgtype";
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

  constructor(context: TypeFactoryContext, catalog: CatalogRow) {
    super(catalog);
    this.values = context.enumValues.enumValuesByTypeId[catalog.oid];
  }

  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    const namedValues = this.values.map(
      (a) => `${cleanIdentifierForTypescript(a.enumlabel)} = "${a.enumlabel}"`,
    );
    return `
    export enum ${this.typescriptName} {
      ${namedValues.join(",")}
    };
    `;
  }
}

import { CatalogRow, Context, ProcRow, TableRow } from "../../context";
import { groupBy } from "../../util";
import { PGCatalogType } from "./pgcatalogtype";
import { PGProc } from "./pgproc";
import { PGTable } from "./pgtable";
import { PGType } from "./pgtype";
import { pascalCase } from "change-case";

/**
 * Namespace in the postgres catalog tables correspond to SCHEMA in SQL.
 *
 * Namespaces group and fully qualify types and procedures in the database.
 */
export class PGNamespace {
  /**
   * Build all namespaces to be found in the passed catalogs.
   */
  static factory(
    typeCatalog: CatalogRow[],
    tableCatalog: TableRow[],
    procCatalog: ProcRow[],
  ) {
    const typesByNamespace = groupBy(typeCatalog, (r) => r.nspname);
    const tablesByNamespace = groupBy(tableCatalog, (r) => r.nspname);
    const procsByNamespace = groupBy(procCatalog, (r) => r.nspname);
    return Object.keys(typesByNamespace).map(
      (namespace) =>
        new PGNamespace(
          namespace,
          typesByNamespace[namespace] ?? [],
          tablesByNamespace[namespace] ?? [],
          procsByNamespace[namespace] ?? [],
        ),
    );
  }

  namespace: string;
  types: PGCatalogType[];
  tables: PGTable[];
  procs: PGProc[];

  constructor(
    namespace: string,
    types: CatalogRow[],
    tables: TableRow[],
    procs: ProcRow[],
  ) {
    this.namespace = namespace;
    this.types = types.map((t) => PGType.factory(t)).filter((t) => t);
    this.tables = tables.map((t) => new PGTable(this, t));
    this.procs = procs.map((p) => new PGProc(this, p));
  }

  get typescriptName() {
    return pascalCase(this.namespace);
  }

  /**
   * Generate typescript source for this namespace.
   */
  typescriptTypeDefinition(context: Context) {
    return `
      export namespace ${this.typescriptName} {
      ${this.types.map((t) => t.typescriptTypeDefinition(context)).join("\n")}
      ${this.procs.map((t) => t.typescriptTypeDefinition(context)).join("\n")}
      }
    `;
  }
}

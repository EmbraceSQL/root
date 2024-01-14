import { groupBy } from "../../util";
import { PGCatalogType } from "./pgcatalogtype";
import { PGProc, PGProcPseudoType, PGProcs } from "./pgproc/pgproc";
import { PGTable, PGTables } from "./pgtable";
import { PGTypes } from "./pgtype";
import { GenerationContext, TablesNode } from "@embracesql/shared";

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
    typeCatalog: PGTypes,
    tableCatalog: PGTables,
    procCatalog: PGProcs,
  ) {
    const typesByNamespace = groupBy(
      typeCatalog.types,
      (r) => r.catalog.nspname,
      (r) => r,
    );
    const tablesByNamespace = groupBy(
      tableCatalog.tables,
      (r) => r.table.nspname,
      (r) => r,
    );
    const procsByNamespace = groupBy(
      procCatalog.procs,
      (r) => r.proc.nspname,
      (r) => r,
    );
    return Object.keys(typesByNamespace).map((namespace): PGNamespace => {
      return new PGNamespace(
        namespace,
        [
          ...typesByNamespace[namespace],
          ...(procsByNamespace[namespace] ?? [])
            .filter((p) => p.returnsPseudoType)
            .map((p) => new PGProcPseudoType(p)),
        ] ?? [],
        tablesByNamespace[namespace] ?? [],
        procsByNamespace[namespace] ?? [],
      );
    });
  }

  constructor(
    public namespace: string,
    public types: PGCatalogType[],
    public tables: PGTable[],
    public procs: PGProc[],
  ) {}

  loadAST(context: GenerationContext) {
    const schema = context.database.resolveSchema(this.nspname);
    const tables = new TablesNode(schema);
    this.tables.forEach((t) => {
      t.loadAST(context, tables);
    });
  }

  get nspname() {
    return this.namespace;
  }
}

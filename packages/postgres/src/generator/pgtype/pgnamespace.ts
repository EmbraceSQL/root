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
  static factory(typeCatalog: PGTypes) {
    const typesByNamespace = groupBy(
      typeCatalog.types,
      (r) => r.nspname,
      (r) => r,
    );
    return Object.keys(typesByNamespace).map((namespace): PGNamespace => {
      return new PGNamespace(namespace, typesByNamespace[namespace]);
    });
  }

  _procs: PGProc[] = [];
  _tables: PGTable[] = [];
  _types: PGCatalogType[];
  _pseudoTypes: PGCatalogType[] = [];
  constructor(
    public namespace: string,
    types: PGCatalogType[],
  ) {
    this._types = types;
  }

  get procs() {
    return this._procs;
  }

  pickProcs(procs: PGProcs) {
    this._procs = procs.procsByNamespace[this.namespace] ?? [];
    this._pseudoTypes = this._procs
      .filter((p) => p.returnsPseudoType)
      .map((p) => new PGProcPseudoType(p));
  }

  get tables() {
    return this._tables;
  }

  pickTables(tables: PGTables) {
    this._tables = tables.tablesByNamespace[this.namespace] ?? [];
  }

  get types() {
    return [...this._types, ...this._pseudoTypes];
  }

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

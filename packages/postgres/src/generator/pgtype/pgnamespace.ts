import { groupBy } from "../../util";
import { PGCatalogType } from "./pgcatalogtype";
import { PGProc, PGProcPseudoType, PGProcs } from "./pgproc/pgproc";
import { PGTable, PGTables } from "./pgtable";
import { PGTypes } from "./pgtype";
import { GenerationContext, TablesNode } from "@embracesql/shared";
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
            .filter((p) => p.returnsPseudoTypeRecord)
            .map((p) => new PGProcPseudoType(p)),
        ] ?? [],
        tablesByNamespace[namespace] ?? [],
        procsByNamespace[namespace] ?? [],
      );
    });
  }

  /**
   * Name formatting for typescript, which PascalCase as a sql namespace
   * is like a typescript namespace or nested class.
   */
  static typescriptName(name: string) {
    return pascalCase(name);
  }

  constructor(
    public namespace: string,
    public types: PGCatalogType[],
    public tables: PGTable[],
    public procs: PGProc[],
  ) {}

  loadAST(context: GenerationContext) {
    const schema = context.database.resolveSchema(this.nspname);
    // TODO: add prop to schema, move to constructor
    const tables = new TablesNode(schema);
    this.tables.forEach((t) => {
      t.loadAST(context, tables);
    });
  }

  get typescriptName() {
    return PGNamespace.typescriptName(this.namespace);
  }

  get nspname() {
    return this.namespace;
  }
}

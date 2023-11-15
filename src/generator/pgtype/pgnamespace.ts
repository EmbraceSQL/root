import { CatalogRow, Context, ProcRow } from "../../context";
import { groupBy } from "../../util";
import { PGCatalogType } from "./pgcatalogtype";
import { PGProc } from "./pgproc";
import { PGType } from "./pgtype";

/**
 * Namespace in the postgres catalog tables correspond to SCHEMA in SQL.
 *
 * Namespaces group and fully qualify types and procedures in the database.
 */
export class PGNamespace {
  /**
   * Build all namespaces to be found in the passed catalogs.
   */
  static factory(typeCatalog: CatalogRow[], procCatalog: ProcRow[]) {
    const typesByNamespace = groupBy(typeCatalog, (r) => r.nspname);
    const procsByNamespace = groupBy(procCatalog, (r) => r.nspname);
    return Object.keys(typesByNamespace).map(
      (namespace) =>
        new PGNamespace(
          namespace,
          typesByNamespace[namespace],
          procsByNamespace[namespace] ?? []
        )
    );
  }

  namespace: string;
  types: PGCatalogType[];
  procs: PGProc[];

  constructor(namespace: string, types: CatalogRow[], procs: ProcRow[]) {
    this.namespace = namespace === "public" ? "public" : namespace;
    this.types = types.map((t) => PGType.factory(t)).filter((t) => t);
    this.procs = procs.map((p) => new PGProc(p));
  }

  /**
   * Generate typescript source for this namespace.
   */
  typescriptTypeDefinition(context: Context) {
    return `
      ${this.types.map((t) => t.typescriptTypeDefinition(context)).join("\n")}
      ${this.procs.map((t) => t.typescriptTypeDefinition(context)).join("\n")}
    `;
  }
}

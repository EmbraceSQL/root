import { TableRow } from "../../context";
import { PGNamespace } from "./pgnamespace";
import { pascalCase } from "change-case";

/**
 * Actual stored tables, each with a type defined in the postgres catalog.
 *
 * As conterintuitive as it sounds, tables are not a 'type' in postgres, but
 * are better thought of as a named storage of a type.
 */
export class PGTable {
  constructor(
    public namespace: PGNamespace,
    public table: TableRow,
  ) {}

  get typescriptName() {
    return pascalCase(this.table.relname);
  }

  get typescriptNamespaceName() {
    return this.namespace.typescriptName;
  }

  get postgresName() {
    return `${this.namespace.namespace}.${this.table.relname}`;
  }
}

import { Context, PostgresTypecast } from "../../context";
import { asDocComment } from "../../util";
import { CatalogRow } from "./pgtype";
import {
  GeneratesTypeScriptParser,
  GenerationContext,
} from "@embracesql/shared";
import { pascalCase } from "change-case";

/**
 * All types come from here.
 */
export class PGCatalogType implements GeneratesTypeScriptParser {
  /**
   * Base constructions picks out the name.
   *
   * @param catalog
   */
  constructor(
    public catalog: CatalogRow,
    public comment = "",
  ) {}

  /**
   * The all powerful oid.
   */
  get oid() {
    return this.catalog.oid;
  }

  /**
   * The default parser doesn't do much -- just echoes a string.
   */
  typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    return `
      return from;
    `;
  }

  /**
   * Convention is pascal case for TS.
   */
  get typescriptName() {
    return pascalCase(this.catalog.typname);
  }

  /**
   * Convention is pascal case for TS. Excludes reserved words.
   */
  get typescriptNamespaceName() {
    const formatted = pascalCase(this.catalog.nspname);
    return formatted;
  }

  typescriptNameWithNamespace(context: Context) {
    if (this.catalog.nspname === context.currentNamespace) {
      return this.typescriptName;
    } else {
      return `${this.typescriptNamespaceName}.${this.typescriptName}`;
    }
  }

  /**
   * Convention is snake case in PG, separating namespace(schema) from
   * the object (type, table, proc...) with a `.`.
   */
  get postgresName() {
    return `${this.catalog.nspname}.${this.catalog.typname}`;
  }

  /**
   * Marshalling name mashes the namespace and the type into one snake string.
   *
   * This doesn't look very TypeScript-y on purpose so it stands out.
   */
  get postgresMarshallName() {
    return `${this.catalog.nspname}_${this.catalog.typname}`;
  }

  /**
   * TypeScript source code for a type definition for this database
   * type.
   *
   * Good news is -- nested types can be referenced by name, so there
   * is no need for a 'global' type catalog to make this work.
   *
   * You are gonna need to override this.
   */
  typescriptTypeDefinition(context: Context) {
    console.assert(context);
    return `
    ${asDocComment(this.comment)}
    export type ${this.typescriptName} = void;
    `;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  serializeToPostgres(context: Context, x: unknown) {
    console.assert(context);
    // default is just 'a string of it'
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    if (x === null) return null;
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return `${x}`;
  }

  /**
   * Given text encoded data coming in from postgres, parse it into
   * structured data.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parseFromPostgres(context: Context, x: any) {
    // default is just to echo it -- which is almost never correct
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return x;
  }

  /**
   * Build up the postgres type casting capability. This is used by the postgres
   * driver to go to and from the database.
   */
  postgresTypecast(context: Context): PostgresTypecast {
    return {
      to: this.catalog.oid,
      from: [this.catalog.oid],
      serialize: (x) => this.serializeToPostgres(context, x),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      parse: (x) => this.parseFromPostgres(context, x),
    };
  }
}

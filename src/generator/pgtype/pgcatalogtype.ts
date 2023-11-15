import { pascalCase } from "change-case";
import { CatalogRow, Context, PostgresTypecast } from "../../context";

/**
 * All types come from here.
 */
export class PGCatalogType {
  catalog: CatalogRow;
  /**
   * Base constructions picks out the name.
   *
   * @param catalog
   */
  constructor(catalog: CatalogRow) {
    this.catalog = catalog;
  }

  /**
   * The all powerful oid.
   */
  get oid() {
    return this.catalog.oid;
  }

  /**
   * Convention is pascal case for TS.
   */
  get typescriptName() {
    return pascalCase(this.catalog.typname);
  }

  /**
   * Convention is pascal case. Public is a reserved word in TypeScript.
   */
  typescriptNameWithNamespace(context: Context) {
    if (["public"].includes(this.catalog.nspname)) {
      return `_${this.catalog.nspname}.${this.typescriptName}`;
    } else {
      return `${this.catalog.nspname}.${this.typescriptName}`;
    }
  }

  /**
   * Convention is snake case in PG.
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
    export type ${this.typescriptName} = void;
    `;
  }

  /**
   * Override this to get 'to' postgres and interface with the database.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  serializeToPostgres(context: Context, x: any) {
    // default is just 'a string of it'
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    if (x === null) return null;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return x;
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
   * Data coming back over HTTP in JSON is all JS primitives. Parse this into
   * TS types.
   *
   * This is very similar to parsing PG query results that come back in all
   * strings.
   *
   * This needs to generate code that is the body of a JSONTypecast. The default
   * is to just echo what is passed, which will work great for numbers and strings.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  typescriptCastFromJSON(context: Context) {
    console.assert(context);
    return `
    return o;
    `;
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

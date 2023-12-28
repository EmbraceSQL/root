import { Context, PostgresTypecast } from "../../context";
import { CatalogRow } from "./pgtype";
import {
  GeneratesTypeScript,
  GenerationContext,
  TypeNode,
} from "@embracesql/shared";
import { pascalCase } from "change-case";

/**
 * All types come from here.
 */
export class PGCatalogType implements GeneratesTypeScript {
  /**
   * Base constructions picks out the name.
   */
  constructor(
    public catalog: CatalogRow,
    public comment = "",
  ) {}

  loadAST(context: GenerationContext) {
    const schema = context.database.resolveSchema(this.catalog.nspname);

    const type = new TypeNode(
      // TODO - just use name
      this.typescriptName,
      schema.types,
      this.oid,
      this,
    );
    context.database.registerType(type.id, type);
  }

  /**
   * Types are a connected graph, not just a tree, so two passes
   * are required to build cross references and back links.
   */
  finalizeAST(context: GenerationContext) {
    console.assert(context);
    // default is no operation
  }

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
  // TODO remove

  /**
   * Convention is pascal case for TS. Excludes reserved words.
   */
  get typescriptNamespaceName() {
    const formatted = pascalCase(this.catalog.nspname);
    return formatted;
  }
  // TODO remove

  /**
   * Convention is snake case in PG, separating namespace(schema) from
   * the object (type, table, proc...) with a `.`.
   */
  get postgresName() {
    return `${this.catalog.nspname}.${this.catalog.typname}`;
  }

  /**
   * TypeScript source code for a type definition for this database
   * type.
   *
   * You are gonna need to override this.
   */
  typescriptTypeDefinition(context: GenerationContext): string {
    console.assert(context);
    return `any`;
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

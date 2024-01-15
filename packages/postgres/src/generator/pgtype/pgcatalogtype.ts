import { Context, PostgresTypecast } from "../../context";
import {
  GeneratesTypeScript,
  GenerationContext,
  TypeNode,
} from "@embracesql/shared";

/**
 * All types come from here.
 */
export class PGCatalogType implements GeneratesTypeScript {
  /**
   * Base constructions picks out the name.
   */
  constructor(
    public oid: number,
    public nspname: string,
    public typname: string,
    public comment = "",
  ) {}

  /**
   * First pass load this type into the AST within the passed `context`.
   */
  loadAST(context: GenerationContext) {
    const schema = context.database.resolveSchema(this.nspname);

    const type = new TypeNode(
      this.typname,
      schema.types,
      this.oid,
      this.comment,
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
   * The default parser doesn't do much -- just echoes a string.
   */
  typescriptTypeParser(context: GenerationContext) {
    console.assert(context);
    return `
      return from;
    `;
  }

  /**
   * TypeScript source code for a type definition for this database
   * type.
   *
   * You are gonna need to override this.
   */
  typescriptTypeDefinition(context: GenerationContext): string {
    console.assert(context);
    return `unknown`;
  }

  /**
   * Given a value, turn it into postgres protocol serialization format
   * for use with the postgres driver.
   */
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
  parseFromPostgres(context: Context, x: unknown) {
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
      to: this.oid,
      from: [this.oid],
      serialize: (x) => this.serializeToPostgres(context, x),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      parse: (x) => this.parseFromPostgres(context, x),
    };
  }
}

import { PGAttributes } from "./generator/pgtype/pgattribute";
import { PGCatalogType } from "./generator/pgtype/pgcatalogtype";
import { PGIndexes } from "./generator/pgtype/pgindex";
import { PGNamespace } from "./generator/pgtype/pgnamespace";
import { PGProcs } from "./generator/pgtype/pgproc/pgproc";
import { PGTables } from "./generator/pgtype/pgtable";
import { PGTypes } from "./generator/pgtype/pgtype";
import { PGTypeEnumValues } from "./generator/pgtype/pgtypeenum";
import { oneBasedArgumentNamefromZeroBasedIndex } from "./util";
import {
  ARGUMENTS,
  ASTKind,
  ASTNode,
  AttributeTypeNode,
  CompositeTypeNode,
  DatabaseNode,
  GenerationContextProps,
  RESULTS,
  ScriptsNode,
} from "@embracesql/shared";
import path from "path";
import pgconnectionstring from "pg-connection-string";
import postgres from "postgres";

/**
 * Defines how to typecast types both to and from
 * the wire protocol.
 *
 * Implementations of this interface will be generated from the postgres catalog.
 */
export interface PostgresTypecast {
  /**
   * Type identifier of the target type.
   */
  to: number;
  /**
   * Type identifiers of possible source type identifiers.
   */
  from: number[];
  /**
   * Turn an in-typescript value into the serialized format
   * used by the postgres wire protocol.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  serialize: (value: any) => unknown;
  /**
   * Parse a postgres wire protocol value into typescript.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parse: (raw: any) => any;
}

/**
 * Multiple typecasts.
 *
 * Implementations of this interface will be generated from the postgres catalog.
 */
export interface PostgresTypecastMap {
  [name: string]: PostgresTypecast;
}

/**
 * Procs with RETURNS TABLE have a pseudo type without an OID.
 * So, this is a different parsing path to turn said procs into objects.
 */
export interface PostgresProcTypecast {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parseFromPostgresIfRecord: (context: Context, x: any) => any;
}

/**
 * Multiple RETURNS TABLE proc typecasts.
 */
export interface PostgresProcTypecastMap {
  [name: string]: PostgresProcTypecast;
}

/**
 * Type factories need metadata from the 'leaf' level ahead of time
 * to join up. This allows one query per catalog table instead of
 * ORM style chitter chatter.
 */
export type TypeFactoryContext = {
  attributes: PGAttributes;
  indexes: PGIndexes;
  enumValues: PGTypeEnumValues;
};

const DEFAULT_POSTGRES_URL =
  "postgres://postgres:postgres@localhost:5432/postgres";

type ConnectionStringProps = {
  [Property in keyof pgconnectionstring.ConnectionOptions]: NonNullable<
    pgconnectionstring.ConnectionOptions[Property]
  >;
};

type InitializeContextProps = postgres.Options<never> &
  Partial<GenerationContextProps>;

/**
 * A single context is passed through as a shared blackboard to
 * collect data from the postgres catalog. This shared data is then used
 * for code generation.
 *
 * Postgres connectivity automatically uses the standard variables:
 * PGHOST, PHPORT, PGDATABASE, PGUSERNAME, PGPASSWORD so -- chance are
 * this will 'just work'.
 */
export const initializeContext = async (
  postgresUrl = DEFAULT_POSTGRES_URL,
  props?: InitializeContextProps,
) => {
  // props leaking in .database will cause a connection failure that is
  // confusing to read -- it'll look like a proper URL that really does
  // exist, trouble is it just doesn't match the arguments to `postgres`
  delete props?.database;
  const parsed = pgconnectionstring.parse(postgresUrl) as ConnectionStringProps;
  // little tweaks of types
  const connection = {
    ...parsed,
    port: parsed.port ? Number.parseInt(parsed.port) : undefined,
    ssl: parsed.ssl as boolean | object | undefined,
  };
  // initial sql -- connect to the database, this is used to query the catalog
  let sql = postgres({
    ...connection,
    prepare: false,
    ...(props ?? {}),
  });
  /**
   * Time to get that catalog -- this is the way we make sure our type
   * mappings represent the current OID space of the database.
   *
   * Oh - this is worth knowing, you can end up with two databases that are in
   * your mind 'the same' - created from the same create scripts - but aren't
   * 'the same' in that different OIDs will be assigned to the logical 'same type'.
   *
   * So - having the generated code be in terms of 'names' but this runtime
   * context be in terms of OIDs is the way you can connect to local or dev
   * database as well as a production database with the same code.
   */

  const databaseName = (await sql` SELECT current_database();`)[0]
    .current_database;

  // Attributes on the composite type that represent each relation (table, view, index).
  const attributes = await PGAttributes.factory(sql);

  // indexes a bit more obvious in the catalog, but they need attributes ahead of time
  // to join up
  const indexes = await PGIndexes.factory(sql, attributes);

  // enum values -- these are the individual bits of the enum like attributes
  // but not the postgres type that is the enum itself
  const enumValues = await PGTypeEnumValues.factory(sql);

  // and now we have enough data to really make types
  const typeCatalog = await PGTypes.factory(
    { attributes, indexes, enumValues },
    sql,
  );

  // procs rely on types so we can create them now
  const procCatalog = await PGProcs.factory({ typeCatalog }, sql);

  // Tables - meaning plain old tables. The definition of tables comes from types.
  // Tables are interesting because they have columns (attributes) and indexes.
  const tableCatalog = await PGTables.factory(
    { attributes, indexes, enumValues, typeCatalog },
    sql,
  );

  // and group up all the database by namespaces
  const namespaces = PGNamespace.factory(
    typeCatalog,
    tableCatalog,
    procCatalog,
  );

  // abstract database representation
  const database = new DatabaseNode(databaseName);
  const generationContext = {
    ...props,
    database,
  };
  // ok, this is a bit tricky since - tables and types can cross namespaces
  // so the first pass will set up all the schemas from catalog namespaces
  // along with their types
  namespaces.forEach((n) => {
    // all types in the namespace
    n.types.forEach((t) => t.loadAST(generationContext));
  });
  // now we have an initial generation context that can resolve types

  // we now know all types -- now we have enough information to load the
  // AST with database schema objects - tables, columns, indexes
  namespaces.forEach((n) => n.loadAST(generationContext));

  // second pass now that all types are registered
  namespaces.forEach((n) => {
    // all types in the namespace
    n.types.forEach((t) => t.finalizeAST(generationContext));
  });

  // stored scripts -- load up the AST
  await ScriptsNode.loadAST(generationContext);
  // visit all scripts and ask the database for metadata
  // we'll be discarding the string results
  await database.visit({
    ...generationContext,
    handlers: {
      [ASTKind.Script]: {
        before: async (context, node) => {
          // these are not 'data base catalog types'
          // -- do not register them with the database
          // there is no actual database object or oid
          const scriptPath = path.join(node.path.dir, node.path.base);
          const metadata = await sql.file(scriptPath).describe();
          const resultsNode = new CompositeTypeNode(RESULTS, node, "");
          metadata.columns.forEach(
            (a, i) =>
              new AttributeTypeNode(
                resultsNode,
                a.name,
                i,
                context.database.resolveType(a.type)!,
                true,
              ),
          );
          if (metadata.types.length) {
            const argumentsNode = new CompositeTypeNode(ARGUMENTS, node, "");
            metadata.types.forEach(
              (a, i) =>
                new AttributeTypeNode(
                  argumentsNode,
                  // these don't have natural names, just positions
                  // so manufacture names
                  oneBasedArgumentNamefromZeroBasedIndex(i),
                  i,
                  context.database.resolveType(a)!,
                  true,
                ),
            );
          }
          return "";
        },
      },
    },
  });

  // map in procedure calls
  await procCatalog.loadAST(generationContext);

  // sanity check and verification of all created nodes
  ASTNode.verify();

  // now we set up a new sql that can do type marshalling - runtime data
  // from the database is complete
  await sql.end();
  const types: PostgresTypecastMap = {};
  const procTypes: PostgresProcTypecastMap = {};

  // ok a little odd loading this up here -- we're going to modify it later before
  // we return which will allow the context being created to be passed to
  // type resolvers that can parse composite and RETURNS TABLE types at runtime
  const resolveType = <T extends PGCatalogType>(oid: number) => {
    return typeCatalog.typesByOid[oid] as T;
  };
  const context = {
    sql,
    types,
    procTypes,
    resolveType,
    namespaces,
    currentNamespace: "",
    database,
  };

  // expand out the type resolvers for all types -- these are used by
  // the postgres driver to encode/decodej
  typeCatalog.types.forEach((t) => {
    // by oid -- postgres style
    types[t.oid] = t.postgresTypecast(context);
    // by name -- typescript generated style
    const typeNode = database.resolveType(t.oid);
    if (typeNode) {
      types[typeNode.typescriptNamespacedName] = t.postgresTypecast(context);
    }
  });
  // and resolvers for procs, which have their own pseudo types as return types
  namespaces
    .flatMap((n) => n.procs)
    .filter((p) => p.returnsPseudoTypeRecord)
    .forEach((p) => {
      // by oid -- postgres style
      procTypes[p.proc.oid] = p;
      // by name -- typescript generated style
      const typeNode = database.resolveType(p.proc.oid);
      if (typeNode) {
        procTypes[typeNode.typescriptNamespacedName] = p;
      }
    });

  // no need to fetch types -- we're making our own
  // comprehensive catalog type mapping
  sql = postgres({
    ...connection,
    types,
    fetch_types: false,
    prepare: false,
    target_session_attrs: "read-write",
    transform: { undefined: null },
  });

  return {
    ...context,
    // this is the hook into 'actually running postgres'
    sql,
    // and an abstract of the database
    database,
  };
};

/**
 * This is the shared context. This needs to be a parameter to ... everything.
 */
export type Context = Awaited<ReturnType<typeof initializeContext>>;

/**
 * Marker interface for anything with a context. Cast to this to allow forcing
 * a context onto any old JS object.
 */
export interface HasContext {
  context: Context;
}

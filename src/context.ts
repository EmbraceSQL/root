import { PGNamespace } from "./generator/pgtype/pgnamespace";
import { groupBy } from "./util";
import * as path from "path";
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
 * Database row type for attributes -- the pg catalog name for columns.
 */
export type AttributeRow = {
  attnum: number;
  attrelid: number;
  atttypid: number;
  attname: string;
};

/**
 * Database row type for enums.
 */
export type EnumRow = {
  enumsortorder: number;
  enumtypid: number;
  enumlabel: string;
};

/**
 * Database row for types in the pg catalog.
 */
export type CatalogRow = {
  oid: number;
  fullname: string;
  nspname: string;
  typname: string;
  typbasetype: number;
  typelem: number;
  rngsubtype: number;
  typtype: string;
  typrelid: number;
  attributes: Array<AttributeRow>;
  enums: Array<EnumRow>;
  typoutput: string;
  typcategory: string;
  description: string;
};

/**
 * Database row for procs in the pg catalog - pg catalog name for functions.
 */
export type ProcRow = {
  oid: number;
  proname: string;
  nspname: string;
  proargtypes: number[];
  proallargtypes: number[];
  proargnames: string[];
  prorettype: number;
  proretset: boolean;
  pronargdefaults: number;
};

/**
 * Props to control which postgres.
 */
type PostgresConnectionProps = {
  username: string;
  password: string;
  host: string;
  port: number;
  database: string;
};

/**
 * Props to configure the generation context.
 */
type Props = {
  connection: Partial<PostgresConnectionProps>;
  generateInto: string;
};

/**
 * A single context is passed through as a shared blackboard to
 * collect data from the postgres catalog. This shared data is then used
 * for code generation.
 *
 * Postgres connectivity automatically uses the standard variables:
 * PGHOST, PHPORT, PGDATABASE, PGUSERNAME, PGPASSWORD so -- chance are
 * this will 'just work'.
 */
export const initializeContext = async (props?: Partial<Props>) => {
  const {
    connection = {
      username: process.env["PGUSERNAME"] ?? "postgres",
      password: process.env["PGPASSWORD"] ?? "postgres",
      host: process.env["PGHOST"] ?? "localhost",
      port: process.env["PGPORT"]
        ? Number.parseInt(process.env["PGPORT"])
        : 5432,
      database: process.env["PGDATABASE"] ?? "postgres",
    },
    generateInto = path.join(__dirname, "../tmp/generated"),
  } = props ?? {};
  // initial sql -- connect to the database and query the catalog
  let sql = postgres({ ...connection, prepare: false });
  /**
   * Time to get that catalog -- this is the way we make sure our type
   * mappings represent the current OID space of the database.
   *
   * Oh - this is worth knowing, you can end up with two databases that are in
   * your mind 'the same' - created from the same create scripts - but aren't
   * 'the same' in that different OIDs will be assigned to the logical 'same type'.
   */

  /**
   * Attributes on the composite type that represent each relation (table).
   */
  const attributes = groupBy(
    (await sql`
  SELECT 
    attnum,
    attrelid,
    atttypid,
    attname
  FROM 
    pg_attribute a 
    JOIN pg_type t ON a.atttypid = t.oid
  WHERE 
    attnum > 0 
    AND atttypid > 0
  `) as unknown as AttributeRow[],
    (r) => r.attrelid,
  );
  /**
   * Enumerated values.
   */
  const enums = groupBy(
    (await sql`
    SELECT 
        oid, 
        enumtypid,
        enumsortorder, 
        enumlabel
    FROM 
      pg_enum
    `) as unknown as EnumRow[],
    (r) => r.enumtypid,
  );
  /**
   * Need to look up the types in the database. The postgres catalog unfortunately
   * does not have this all in one place, so this is going to join a few things up.
   */
  const typeCatalog = (await sql`
  SELECT 
    oid,
    typname,
    (select nspname FROM pg_namespace n WHERE n.oid = p.typnamespace) nspname,
    typcategory,
    typtype,
    p.typbasetype,
    typrelid,
    p.typelem,
    typoutput,
    -- don't need a whole lot for range types
    (SELECT rngsubtype::int FROM pg_range WHERE rngtypid = p.oid) rngsubtype,
    format_type(oid, typtypmod) fullname,
    (select description FROM pg_description d WHERE d.objoid = p.oid) description
  FROM
    pg_type p
  WHERE
    -- excluding 'magic' internal types on purpose, these won't show up
    -- in user schema / code
    typname NOT LIKE '__pg%'
    AND typname NOT LIKE 'pg_%'
  ORDER BY
    typname ASC
  `) as unknown as CatalogRow[];

  // join up types with their attributes, this makes composite row types real
  typeCatalog.forEach(
    (t) =>
      (t.attributes = attributes[t.typrelid]?.sort(
        (l, r) => l.attnum - r.attnum,
      )),
  );
  // join up enums with their values, this makes enum types real
  typeCatalog.forEach(
    (t) =>
      (t.enums = enums[t.oid]?.sort(
        (l, r) => l.enumsortorder - r.enumsortorder,
      )),
  );

  /**
   * All the procs -- stored procedures and functions -- along with
   * their arguments.
   */
  const procCatalog = (await sql`
  WITH all_procs AS (
  SELECT 
    oid,
    prokind,
    proname, 
    (select nspname FROM pg_namespace n WHERE n.oid = pronamespace) nspname,
    provariadic, 
    pronargdefaults,
    prorettype, 
    proretset, 
    COALESCE(proargtypes, ARRAY[]::oid[]) proargtypes, 
    COALESCE(proallargtypes, ARRAY[]::oid[]) proallargtypes, 
    COALESCE(proargnames, ARRAY[]::text[]) proargnames
  FROM 
    pg_proc
  )
  SELECT 
    *
  FROM
      all_procs
  WHERE 
    NOT proname ~ '^_'
    -- schemas that we will need to skip go here
    AND nspname NOT IN('pg_catalog')
    -- only functions and procs
    AND prokind IN ('f', 'p')
  `) as unknown as ProcRow[];

  const namespaces = PGNamespace.factory(typeCatalog, procCatalog);

  const typeMap = new Map(
    namespaces.flatMap((n) => n.types).map((t) => [t.oid, t]),
  );

  // now we set up a new sql that can do type marshalling
  await sql.end();
  const types: PostgresTypecastMap = {};
  const procTypes: PostgresProcTypecastMap = {};
  // ok a little odd loading this up here -- we're going to modify it later before
  // we return which will allow the context being created to be passed to
  // type resolvers

  const context = {
    sql,
    types,
    procTypes,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    resolveType: (oid: number) => typeMap.get(oid)!,
    namespaces,
    generateInto,
    currentNamespace: "",
  };

  // expand out the type resolvers for all types
  namespaces
    .flatMap((n) => n.types)
    .forEach(
      (t) => (types[t.postgresMarshallName] = t.postgresTypecast(context)),
    );
  namespaces
    .flatMap((n) => n.procs)
    .filter((p) => p.returnsPseudoTypeRecord)
    .forEach((p) => {
      procTypes[p.postgresMarshallName] = p;
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
    sql,
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

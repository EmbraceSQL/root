import { PGAttributes } from "./generator/pgtype/pgattribute";
import { PGCatalogType } from "./generator/pgtype/pgcatalogtype";
import { PGIndexes } from "./generator/pgtype/pgindex";
import { PGNamespace } from "./generator/pgtype/pgnamespace";
import { PGProcs } from "./generator/pgtype/pgproc/pgproc";
import { PGTables } from "./generator/pgtype/pgtable";
import { PGTypes } from "./generator/pgtype/pgtype";
import { PGTypeEnumValues } from "./generator/pgtype/pgtypeenum";
import {
  ColumnNode,
  DatabaseNode,
  IndexNode,
  IsNamed,
  SchemaNode,
  TableNode,
  TablesNode,
  TypeNode,
  TypesNode,
} from "@embracesql/shared";
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

type ConnectionProps = {
  [Property in keyof pgconnectionstring.ConnectionOptions]: NonNullable<
    pgconnectionstring.ConnectionOptions[Property]
  >;
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
export const initializeContext = async (postgresUrl = DEFAULT_POSTGRES_URL) => {
  const parsed = pgconnectionstring.parse(postgresUrl) as ConnectionProps;
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
  // ok, this is a bit tricky since - tables and types can cross namespaces
  // so the first pass will set up all the schemas from catalog namespaces
  // along with their types
  namespaces.forEach((n) => {
    const schema = new SchemaNode(database, n.namespace);
    database.children.push(schema);
    const types = new TypesNode(schema);
    schema.children.push(types);
    // all types in the namespace
    n.types.forEach((t) => {
      const type = new TypeNode(t.typescriptName, types, t.oid, t);
      database.registerType(type.id, type);
      types.children.push(type);
    });
  });
  // ok -- we now know all types -- now we have enough information to make tables
  namespaces.forEach((n) => {
    const schema = database.children.find(
      (c) => (c as unknown as IsNamed)?.name === n.namespace,
    ) as SchemaNode;
    if (schema) {
      const tables = new TablesNode(schema);
      schema.children.push(tables);
      n.tables.forEach((t) => {
        // the table and ...
        const table = new TableNode(
          tables,
          t.table.relname,
          database.resolveType(t.table.tabletypeoid)!,
        );
        tables.children.push(table);
        // it's columns
        t.tableType.attributes.forEach((a) => {
          const typeNode = database.resolveType(a.attribute.atttypid);
          if (typeNode) {
            table.children.push(new ColumnNode(table, a.name, typeNode));
          } else {
            throw new Error(
              `${a.name} cannot find type ${a.attribute.atttypid}`,
            );
          }
        });
        // indexes go on the table as well
        t.indexes.forEach((i) => {
          const index = new IndexNode(
            table,
            i.name,
            i.index.indisunique,
            i.index.indisprimary,
            i.attributes.map((a) => {
              const typeNode = database.resolveType(a.attribute.atttypid);
              if (typeNode) {
                return { name: a.name, type: typeNode };
              } else {
                throw new Error(
                  `${a.name} cannot find type ${a.attribute.atttypid}`,
                );
              }
            }),
          );
          table.children.push(index);
        });
      });
    } else {
      throw new Error(`cannot find namespace ${n.namespace}`);
    }
  });

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

  // expand out the type resolvers for all types
  typeCatalog.types.forEach(
    (t) => (types[t.postgresMarshallName] = t.postgresTypecast(context)),
  );
  // and resolvers for procs, which have their own pseudo types as return types
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

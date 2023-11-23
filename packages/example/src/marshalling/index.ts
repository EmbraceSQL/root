// ⚠️ generated - do not modify ⚠️
/* eslint-disable @typescript-eslint/no-namespace */
import * as schemas from "./schemas";
import { Context, initializeContext } from "@embracesql/core/src/context";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { PostgresTypecasts } from "./schemas";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { undefinedIsNull, Nullable } from "@embracesql/core/src/types";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import postgres from "postgres";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface HasDatabase {
  database: Database;
}

export class Database {
  /**
   * Connect to your database server via URL, and return
   * a fully typed database you can use to access it.
   */
  static async connect(postgresUrl: string) {
    return new Database(await initializeContext(postgresUrl));
  }

  private constructor(public context: Context) {}

  /**
   * Clean up the connection.
   */
  public async disconnect() {
    await this.context.sql.end();
  }

  public PgCatalog = new (class implements HasDatabase {
    constructor(public database: Database) {}

    public PgStatistic = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byStarelidStaattnumStainherit(
        parameters: schemas.PgCatalog.Tables.PgStatistic.ByStarelidStaattnumStainherit,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT starelid,staattnum,stainherit,stanullfrac,stawidth,stadistinct,stakind1,stakind2,stakind3,stakind4,stakind5,staop1,staop2,staop3,staop4,staop5,stacoll1,stacoll2,stacoll3,stacoll4,stacoll5,stanumbers1,stanumbers2,stanumbers3,stanumbers4,stanumbers5,stavalues1,stavalues2,stavalues3,stavalues4,stavalues5 FROM pg_catalog.pg_statistic WHERE starelid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.starelid),
          )} AND staattnum =  ${typed.pg_catalog_int2(
            undefinedIsNull(parameters.staattnum),
          )} AND stainherit =  ${typed.pg_catalog_bool(
            undefinedIsNull(parameters.stainherit),
          )}`;
        const results = response.map((record) => ({
          starelid: undefinedIsNull(record.starelid),
          staattnum: undefinedIsNull(record.staattnum),
          stainherit: undefinedIsNull(record.stainherit),
          stanullfrac: undefinedIsNull(record.stanullfrac),
          stawidth: undefinedIsNull(record.stawidth),
          stadistinct: undefinedIsNull(record.stadistinct),
          stakind1: undefinedIsNull(record.stakind1),
          stakind2: undefinedIsNull(record.stakind2),
          stakind3: undefinedIsNull(record.stakind3),
          stakind4: undefinedIsNull(record.stakind4),
          stakind5: undefinedIsNull(record.stakind5),
          staop1: undefinedIsNull(record.staop1),
          staop2: undefinedIsNull(record.staop2),
          staop3: undefinedIsNull(record.staop3),
          staop4: undefinedIsNull(record.staop4),
          staop5: undefinedIsNull(record.staop5),
          stacoll1: undefinedIsNull(record.stacoll1),
          stacoll2: undefinedIsNull(record.stacoll2),
          stacoll3: undefinedIsNull(record.stacoll3),
          stacoll4: undefinedIsNull(record.stacoll4),
          stacoll5: undefinedIsNull(record.stacoll5),
          stanumbers1: undefinedIsNull(record.stanumbers1),
          stanumbers2: undefinedIsNull(record.stanumbers2),
          stanumbers3: undefinedIsNull(record.stanumbers3),
          stanumbers4: undefinedIsNull(record.stanumbers4),
          stanumbers5: undefinedIsNull(record.stanumbers5),
          stavalues1: undefinedIsNull(record.stavalues1),
          stavalues2: undefinedIsNull(record.stavalues2),
          stavalues3: undefinedIsNull(record.stavalues3),
          stavalues4: undefinedIsNull(record.stavalues4),
          stavalues5: undefinedIsNull(record.stavalues5),
        }));
        return results[0];
      }
    })(this);

    public PgType = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byOid(parameters: schemas.PgCatalog.Tables.PgType.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,typname,typnamespace,typowner,typlen,typbyval,typtype,typcategory,typispreferred,typisdefined,typdelim,typrelid,typsubscript,typelem,typarray,typinput,typoutput,typreceive,typsend,typmodin,typmodout,typanalyze,typalign,typstorage,typnotnull,typbasetype,typtypmod,typndims,typcollation,typdefaultbin,typdefault,typacl FROM pg_catalog.pg_type WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          typname: undefinedIsNull(record.typname),
          typnamespace: undefinedIsNull(record.typnamespace),
          typowner: undefinedIsNull(record.typowner),
          typlen: undefinedIsNull(record.typlen),
          typbyval: undefinedIsNull(record.typbyval),
          typtype: undefinedIsNull(record.typtype),
          typcategory: undefinedIsNull(record.typcategory),
          typispreferred: undefinedIsNull(record.typispreferred),
          typisdefined: undefinedIsNull(record.typisdefined),
          typdelim: undefinedIsNull(record.typdelim),
          typrelid: undefinedIsNull(record.typrelid),
          typsubscript: undefinedIsNull(record.typsubscript),
          typelem: undefinedIsNull(record.typelem),
          typarray: undefinedIsNull(record.typarray),
          typinput: undefinedIsNull(record.typinput),
          typoutput: undefinedIsNull(record.typoutput),
          typreceive: undefinedIsNull(record.typreceive),
          typsend: undefinedIsNull(record.typsend),
          typmodin: undefinedIsNull(record.typmodin),
          typmodout: undefinedIsNull(record.typmodout),
          typanalyze: undefinedIsNull(record.typanalyze),
          typalign: undefinedIsNull(record.typalign),
          typstorage: undefinedIsNull(record.typstorage),
          typnotnull: undefinedIsNull(record.typnotnull),
          typbasetype: undefinedIsNull(record.typbasetype),
          typtypmod: undefinedIsNull(record.typtypmod),
          typndims: undefinedIsNull(record.typndims),
          typcollation: undefinedIsNull(record.typcollation),
          typdefaultbin: undefinedIsNull(record.typdefaultbin),
          typdefault: undefinedIsNull(record.typdefault),
          typacl: undefinedIsNull(record.typacl),
        }));
        return results[0];
      }
      async byTypnameTypnamespace(
        parameters: schemas.PgCatalog.Tables.PgType.ByTypnameTypnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,typname,typnamespace,typowner,typlen,typbyval,typtype,typcategory,typispreferred,typisdefined,typdelim,typrelid,typsubscript,typelem,typarray,typinput,typoutput,typreceive,typsend,typmodin,typmodout,typanalyze,typalign,typstorage,typnotnull,typbasetype,typtypmod,typndims,typcollation,typdefaultbin,typdefault,typacl FROM pg_catalog.pg_type WHERE typname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.typname),
          )} AND typnamespace =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.typnamespace),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          typname: undefinedIsNull(record.typname),
          typnamespace: undefinedIsNull(record.typnamespace),
          typowner: undefinedIsNull(record.typowner),
          typlen: undefinedIsNull(record.typlen),
          typbyval: undefinedIsNull(record.typbyval),
          typtype: undefinedIsNull(record.typtype),
          typcategory: undefinedIsNull(record.typcategory),
          typispreferred: undefinedIsNull(record.typispreferred),
          typisdefined: undefinedIsNull(record.typisdefined),
          typdelim: undefinedIsNull(record.typdelim),
          typrelid: undefinedIsNull(record.typrelid),
          typsubscript: undefinedIsNull(record.typsubscript),
          typelem: undefinedIsNull(record.typelem),
          typarray: undefinedIsNull(record.typarray),
          typinput: undefinedIsNull(record.typinput),
          typoutput: undefinedIsNull(record.typoutput),
          typreceive: undefinedIsNull(record.typreceive),
          typsend: undefinedIsNull(record.typsend),
          typmodin: undefinedIsNull(record.typmodin),
          typmodout: undefinedIsNull(record.typmodout),
          typanalyze: undefinedIsNull(record.typanalyze),
          typalign: undefinedIsNull(record.typalign),
          typstorage: undefinedIsNull(record.typstorage),
          typnotnull: undefinedIsNull(record.typnotnull),
          typbasetype: undefinedIsNull(record.typbasetype),
          typtypmod: undefinedIsNull(record.typtypmod),
          typndims: undefinedIsNull(record.typndims),
          typcollation: undefinedIsNull(record.typcollation),
          typdefaultbin: undefinedIsNull(record.typdefaultbin),
          typdefault: undefinedIsNull(record.typdefault),
          typacl: undefinedIsNull(record.typacl),
        }));
        return results[0];
      }
    })(this);

    public PgForeignTable = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byFtrelid(
        parameters: schemas.PgCatalog.Tables.PgForeignTable.ByFtrelid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT ftrelid,ftserver,ftoptions FROM pg_catalog.pg_foreign_table WHERE ftrelid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.ftrelid),
          )}`;
        const results = response.map((record) => ({
          ftrelid: undefinedIsNull(record.ftrelid),
          ftserver: undefinedIsNull(record.ftserver),
          ftoptions: undefinedIsNull(record.ftoptions),
        }));
        return results[0];
      }
    })(this);

    public PgAuthid = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byOid(parameters: schemas.PgCatalog.Tables.PgAuthid.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,rolname,rolsuper,rolinherit,rolcreaterole,rolcreatedb,rolcanlogin,rolreplication,rolbypassrls,rolconnlimit,rolpassword,rolvaliduntil FROM pg_catalog.pg_authid WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          rolname: undefinedIsNull(record.rolname),
          rolsuper: undefinedIsNull(record.rolsuper),
          rolinherit: undefinedIsNull(record.rolinherit),
          rolcreaterole: undefinedIsNull(record.rolcreaterole),
          rolcreatedb: undefinedIsNull(record.rolcreatedb),
          rolcanlogin: undefinedIsNull(record.rolcanlogin),
          rolreplication: undefinedIsNull(record.rolreplication),
          rolbypassrls: undefinedIsNull(record.rolbypassrls),
          rolconnlimit: undefinedIsNull(record.rolconnlimit),
          rolpassword: undefinedIsNull(record.rolpassword),
          rolvaliduntil: undefinedIsNull(record.rolvaliduntil),
        }));
        return results[0];
      }
      async byRolname(parameters: schemas.PgCatalog.Tables.PgAuthid.ByRolname) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,rolname,rolsuper,rolinherit,rolcreaterole,rolcreatedb,rolcanlogin,rolreplication,rolbypassrls,rolconnlimit,rolpassword,rolvaliduntil FROM pg_catalog.pg_authid WHERE rolname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.rolname),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          rolname: undefinedIsNull(record.rolname),
          rolsuper: undefinedIsNull(record.rolsuper),
          rolinherit: undefinedIsNull(record.rolinherit),
          rolcreaterole: undefinedIsNull(record.rolcreaterole),
          rolcreatedb: undefinedIsNull(record.rolcreatedb),
          rolcanlogin: undefinedIsNull(record.rolcanlogin),
          rolreplication: undefinedIsNull(record.rolreplication),
          rolbypassrls: undefinedIsNull(record.rolbypassrls),
          rolconnlimit: undefinedIsNull(record.rolconnlimit),
          rolpassword: undefinedIsNull(record.rolpassword),
          rolvaliduntil: undefinedIsNull(record.rolvaliduntil),
        }));
        return results[0];
      }
    })(this);

    public PgStatisticExtData = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byStxoidStxdinherit(
        parameters: schemas.PgCatalog.Tables.PgStatisticExtData.ByStxoidStxdinherit,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT stxoid,stxdinherit,stxdndistinct,stxddependencies,stxdmcv,stxdexpr FROM pg_catalog.pg_statistic_ext_data WHERE stxoid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.stxoid),
          )} AND stxdinherit =  ${typed.pg_catalog_bool(
            undefinedIsNull(parameters.stxdinherit),
          )}`;
        const results = response.map((record) => ({
          stxoid: undefinedIsNull(record.stxoid),
          stxdinherit: undefinedIsNull(record.stxdinherit),
          stxdndistinct: undefinedIsNull(record.stxdndistinct),
          stxddependencies: undefinedIsNull(record.stxddependencies),
          stxdmcv: undefinedIsNull(record.stxdmcv),
          stxdexpr: undefinedIsNull(record.stxdexpr),
        }));
        return results[0];
      }
    })(this);

    public PgUserMapping = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byOid(parameters: schemas.PgCatalog.Tables.PgUserMapping.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,umuser,umserver,umoptions FROM pg_catalog.pg_user_mapping WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          umuser: undefinedIsNull(record.umuser),
          umserver: undefinedIsNull(record.umserver),
          umoptions: undefinedIsNull(record.umoptions),
        }));
        return results[0];
      }
      async byUmuserUmserver(
        parameters: schemas.PgCatalog.Tables.PgUserMapping.ByUmuserUmserver,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,umuser,umserver,umoptions FROM pg_catalog.pg_user_mapping WHERE umuser =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.umuser),
          )} AND umserver =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.umserver),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          umuser: undefinedIsNull(record.umuser),
          umserver: undefinedIsNull(record.umserver),
          umoptions: undefinedIsNull(record.umoptions),
        }));
        return results[0];
      }
    })(this);

    public PgSubscription = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byOid(parameters: schemas.PgCatalog.Tables.PgSubscription.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,subdbid,subskiplsn,subname,subowner,subenabled,subbinary,substream,subtwophasestate,subdisableonerr,subpasswordrequired,subrunasowner,subconninfo,subslotname,subsynccommit,subpublications,suborigin FROM pg_catalog.pg_subscription WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          subdbid: undefinedIsNull(record.subdbid),
          subskiplsn: undefinedIsNull(record.subskiplsn),
          subname: undefinedIsNull(record.subname),
          subowner: undefinedIsNull(record.subowner),
          subenabled: undefinedIsNull(record.subenabled),
          subbinary: undefinedIsNull(record.subbinary),
          substream: undefinedIsNull(record.substream),
          subtwophasestate: undefinedIsNull(record.subtwophasestate),
          subdisableonerr: undefinedIsNull(record.subdisableonerr),
          subpasswordrequired: undefinedIsNull(record.subpasswordrequired),
          subrunasowner: undefinedIsNull(record.subrunasowner),
          subconninfo: undefinedIsNull(record.subconninfo),
          subslotname: undefinedIsNull(record.subslotname),
          subsynccommit: undefinedIsNull(record.subsynccommit),
          subpublications: undefinedIsNull(record.subpublications),
          suborigin: undefinedIsNull(record.suborigin),
        }));
        return results[0];
      }
      async bySubdbidSubname(
        parameters: schemas.PgCatalog.Tables.PgSubscription.BySubdbidSubname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,subdbid,subskiplsn,subname,subowner,subenabled,subbinary,substream,subtwophasestate,subdisableonerr,subpasswordrequired,subrunasowner,subconninfo,subslotname,subsynccommit,subpublications,suborigin FROM pg_catalog.pg_subscription WHERE subdbid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.subdbid),
          )} AND subname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.subname),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          subdbid: undefinedIsNull(record.subdbid),
          subskiplsn: undefinedIsNull(record.subskiplsn),
          subname: undefinedIsNull(record.subname),
          subowner: undefinedIsNull(record.subowner),
          subenabled: undefinedIsNull(record.subenabled),
          subbinary: undefinedIsNull(record.subbinary),
          substream: undefinedIsNull(record.substream),
          subtwophasestate: undefinedIsNull(record.subtwophasestate),
          subdisableonerr: undefinedIsNull(record.subdisableonerr),
          subpasswordrequired: undefinedIsNull(record.subpasswordrequired),
          subrunasowner: undefinedIsNull(record.subrunasowner),
          subconninfo: undefinedIsNull(record.subconninfo),
          subslotname: undefinedIsNull(record.subslotname),
          subsynccommit: undefinedIsNull(record.subsynccommit),
          subpublications: undefinedIsNull(record.subpublications),
          suborigin: undefinedIsNull(record.suborigin),
        }));
        return results[0];
      }
    })(this);

    public PgAttribute = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byAttrelidAttname(
        parameters: schemas.PgCatalog.Tables.PgAttribute.ByAttrelidAttname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT attrelid,attname,atttypid,attlen,attnum,attcacheoff,atttypmod,attndims,attbyval,attalign,attstorage,attcompression,attnotnull,atthasdef,atthasmissing,attidentity,attgenerated,attisdropped,attislocal,attinhcount,attstattarget,attcollation,attacl,attoptions,attfdwoptions,attmissingval FROM pg_catalog.pg_attribute WHERE attrelid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.attrelid),
          )} AND attname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.attname),
          )}`;
        const results = response.map((record) => ({
          attrelid: undefinedIsNull(record.attrelid),
          attname: undefinedIsNull(record.attname),
          atttypid: undefinedIsNull(record.atttypid),
          attlen: undefinedIsNull(record.attlen),
          attnum: undefinedIsNull(record.attnum),
          attcacheoff: undefinedIsNull(record.attcacheoff),
          atttypmod: undefinedIsNull(record.atttypmod),
          attndims: undefinedIsNull(record.attndims),
          attbyval: undefinedIsNull(record.attbyval),
          attalign: undefinedIsNull(record.attalign),
          attstorage: undefinedIsNull(record.attstorage),
          attcompression: undefinedIsNull(record.attcompression),
          attnotnull: undefinedIsNull(record.attnotnull),
          atthasdef: undefinedIsNull(record.atthasdef),
          atthasmissing: undefinedIsNull(record.atthasmissing),
          attidentity: undefinedIsNull(record.attidentity),
          attgenerated: undefinedIsNull(record.attgenerated),
          attisdropped: undefinedIsNull(record.attisdropped),
          attislocal: undefinedIsNull(record.attislocal),
          attinhcount: undefinedIsNull(record.attinhcount),
          attstattarget: undefinedIsNull(record.attstattarget),
          attcollation: undefinedIsNull(record.attcollation),
          attacl: undefinedIsNull(record.attacl),
          attoptions: undefinedIsNull(record.attoptions),
          attfdwoptions: undefinedIsNull(record.attfdwoptions),
          attmissingval: undefinedIsNull(record.attmissingval),
        }));
        return results[0];
      }
      async byAttrelidAttnum(
        parameters: schemas.PgCatalog.Tables.PgAttribute.ByAttrelidAttnum,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT attrelid,attname,atttypid,attlen,attnum,attcacheoff,atttypmod,attndims,attbyval,attalign,attstorage,attcompression,attnotnull,atthasdef,atthasmissing,attidentity,attgenerated,attisdropped,attislocal,attinhcount,attstattarget,attcollation,attacl,attoptions,attfdwoptions,attmissingval FROM pg_catalog.pg_attribute WHERE attrelid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.attrelid),
          )} AND attnum =  ${typed.pg_catalog_int2(
            undefinedIsNull(parameters.attnum),
          )}`;
        const results = response.map((record) => ({
          attrelid: undefinedIsNull(record.attrelid),
          attname: undefinedIsNull(record.attname),
          atttypid: undefinedIsNull(record.atttypid),
          attlen: undefinedIsNull(record.attlen),
          attnum: undefinedIsNull(record.attnum),
          attcacheoff: undefinedIsNull(record.attcacheoff),
          atttypmod: undefinedIsNull(record.atttypmod),
          attndims: undefinedIsNull(record.attndims),
          attbyval: undefinedIsNull(record.attbyval),
          attalign: undefinedIsNull(record.attalign),
          attstorage: undefinedIsNull(record.attstorage),
          attcompression: undefinedIsNull(record.attcompression),
          attnotnull: undefinedIsNull(record.attnotnull),
          atthasdef: undefinedIsNull(record.atthasdef),
          atthasmissing: undefinedIsNull(record.atthasmissing),
          attidentity: undefinedIsNull(record.attidentity),
          attgenerated: undefinedIsNull(record.attgenerated),
          attisdropped: undefinedIsNull(record.attisdropped),
          attislocal: undefinedIsNull(record.attislocal),
          attinhcount: undefinedIsNull(record.attinhcount),
          attstattarget: undefinedIsNull(record.attstattarget),
          attcollation: undefinedIsNull(record.attcollation),
          attacl: undefinedIsNull(record.attacl),
          attoptions: undefinedIsNull(record.attoptions),
          attfdwoptions: undefinedIsNull(record.attfdwoptions),
          attmissingval: undefinedIsNull(record.attmissingval),
        }));
        return results[0];
      }
    })(this);

    public PgProc = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byOid(parameters: schemas.PgCatalog.Tables.PgProc.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,proname,pronamespace,proowner,prolang,procost,prorows,provariadic,prosupport,prokind,prosecdef,proleakproof,proisstrict,proretset,provolatile,proparallel,pronargs,pronargdefaults,prorettype,proargtypes,proallargtypes,proargmodes,proargnames,proargdefaults,protrftypes,prosrc,probin,prosqlbody,proconfig,proacl FROM pg_catalog.pg_proc WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          proname: undefinedIsNull(record.proname),
          pronamespace: undefinedIsNull(record.pronamespace),
          proowner: undefinedIsNull(record.proowner),
          prolang: undefinedIsNull(record.prolang),
          procost: undefinedIsNull(record.procost),
          prorows: undefinedIsNull(record.prorows),
          provariadic: undefinedIsNull(record.provariadic),
          prosupport: undefinedIsNull(record.prosupport),
          prokind: undefinedIsNull(record.prokind),
          prosecdef: undefinedIsNull(record.prosecdef),
          proleakproof: undefinedIsNull(record.proleakproof),
          proisstrict: undefinedIsNull(record.proisstrict),
          proretset: undefinedIsNull(record.proretset),
          provolatile: undefinedIsNull(record.provolatile),
          proparallel: undefinedIsNull(record.proparallel),
          pronargs: undefinedIsNull(record.pronargs),
          pronargdefaults: undefinedIsNull(record.pronargdefaults),
          prorettype: undefinedIsNull(record.prorettype),
          proargtypes: undefinedIsNull(record.proargtypes),
          proallargtypes: undefinedIsNull(record.proallargtypes),
          proargmodes: undefinedIsNull(record.proargmodes),
          proargnames: undefinedIsNull(record.proargnames),
          proargdefaults: undefinedIsNull(record.proargdefaults),
          protrftypes: undefinedIsNull(record.protrftypes),
          prosrc: undefinedIsNull(record.prosrc),
          probin: undefinedIsNull(record.probin),
          prosqlbody: undefinedIsNull(record.prosqlbody),
          proconfig: undefinedIsNull(record.proconfig),
          proacl: undefinedIsNull(record.proacl),
        }));
        return results[0];
      }
      async byPronameProargtypesPronamespace(
        parameters: schemas.PgCatalog.Tables.PgProc.ByPronameProargtypesPronamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,proname,pronamespace,proowner,prolang,procost,prorows,provariadic,prosupport,prokind,prosecdef,proleakproof,proisstrict,proretset,provolatile,proparallel,pronargs,pronargdefaults,prorettype,proargtypes,proallargtypes,proargmodes,proargnames,proargdefaults,protrftypes,prosrc,probin,prosqlbody,proconfig,proacl FROM pg_catalog.pg_proc WHERE proname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.proname),
          )} AND proargtypes =  ${typed.pg_catalog_oidvector(
            undefinedIsNull(parameters.proargtypes),
          )} AND pronamespace =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.pronamespace),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          proname: undefinedIsNull(record.proname),
          pronamespace: undefinedIsNull(record.pronamespace),
          proowner: undefinedIsNull(record.proowner),
          prolang: undefinedIsNull(record.prolang),
          procost: undefinedIsNull(record.procost),
          prorows: undefinedIsNull(record.prorows),
          provariadic: undefinedIsNull(record.provariadic),
          prosupport: undefinedIsNull(record.prosupport),
          prokind: undefinedIsNull(record.prokind),
          prosecdef: undefinedIsNull(record.prosecdef),
          proleakproof: undefinedIsNull(record.proleakproof),
          proisstrict: undefinedIsNull(record.proisstrict),
          proretset: undefinedIsNull(record.proretset),
          provolatile: undefinedIsNull(record.provolatile),
          proparallel: undefinedIsNull(record.proparallel),
          pronargs: undefinedIsNull(record.pronargs),
          pronargdefaults: undefinedIsNull(record.pronargdefaults),
          prorettype: undefinedIsNull(record.prorettype),
          proargtypes: undefinedIsNull(record.proargtypes),
          proallargtypes: undefinedIsNull(record.proallargtypes),
          proargmodes: undefinedIsNull(record.proargmodes),
          proargnames: undefinedIsNull(record.proargnames),
          proargdefaults: undefinedIsNull(record.proargdefaults),
          protrftypes: undefinedIsNull(record.protrftypes),
          prosrc: undefinedIsNull(record.prosrc),
          probin: undefinedIsNull(record.probin),
          prosqlbody: undefinedIsNull(record.prosqlbody),
          proconfig: undefinedIsNull(record.proconfig),
          proacl: undefinedIsNull(record.proacl),
        }));
        return results[0];
      }
    })(this);

    public PgClass = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byOid(parameters: schemas.PgCatalog.Tables.PgClass.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,relname,relnamespace,reltype,reloftype,relowner,relam,relfilenode,reltablespace,relpages,reltuples,relallvisible,reltoastrelid,relhasindex,relisshared,relpersistence,relkind,relnatts,relchecks,relhasrules,relhastriggers,relhassubclass,relrowsecurity,relforcerowsecurity,relispopulated,relreplident,relispartition,relrewrite,relfrozenxid,relminmxid,relacl,reloptions,relpartbound FROM pg_catalog.pg_class WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          relname: undefinedIsNull(record.relname),
          relnamespace: undefinedIsNull(record.relnamespace),
          reltype: undefinedIsNull(record.reltype),
          reloftype: undefinedIsNull(record.reloftype),
          relowner: undefinedIsNull(record.relowner),
          relam: undefinedIsNull(record.relam),
          relfilenode: undefinedIsNull(record.relfilenode),
          reltablespace: undefinedIsNull(record.reltablespace),
          relpages: undefinedIsNull(record.relpages),
          reltuples: undefinedIsNull(record.reltuples),
          relallvisible: undefinedIsNull(record.relallvisible),
          reltoastrelid: undefinedIsNull(record.reltoastrelid),
          relhasindex: undefinedIsNull(record.relhasindex),
          relisshared: undefinedIsNull(record.relisshared),
          relpersistence: undefinedIsNull(record.relpersistence),
          relkind: undefinedIsNull(record.relkind),
          relnatts: undefinedIsNull(record.relnatts),
          relchecks: undefinedIsNull(record.relchecks),
          relhasrules: undefinedIsNull(record.relhasrules),
          relhastriggers: undefinedIsNull(record.relhastriggers),
          relhassubclass: undefinedIsNull(record.relhassubclass),
          relrowsecurity: undefinedIsNull(record.relrowsecurity),
          relforcerowsecurity: undefinedIsNull(record.relforcerowsecurity),
          relispopulated: undefinedIsNull(record.relispopulated),
          relreplident: undefinedIsNull(record.relreplident),
          relispartition: undefinedIsNull(record.relispartition),
          relrewrite: undefinedIsNull(record.relrewrite),
          relfrozenxid: undefinedIsNull(record.relfrozenxid),
          relminmxid: undefinedIsNull(record.relminmxid),
          relacl: undefinedIsNull(record.relacl),
          reloptions: undefinedIsNull(record.reloptions),
          relpartbound: undefinedIsNull(record.relpartbound),
        }));
        return results[0];
      }
      async byRelnameRelnamespace(
        parameters: schemas.PgCatalog.Tables.PgClass.ByRelnameRelnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,relname,relnamespace,reltype,reloftype,relowner,relam,relfilenode,reltablespace,relpages,reltuples,relallvisible,reltoastrelid,relhasindex,relisshared,relpersistence,relkind,relnatts,relchecks,relhasrules,relhastriggers,relhassubclass,relrowsecurity,relforcerowsecurity,relispopulated,relreplident,relispartition,relrewrite,relfrozenxid,relminmxid,relacl,reloptions,relpartbound FROM pg_catalog.pg_class WHERE relname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.relname),
          )} AND relnamespace =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.relnamespace),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          relname: undefinedIsNull(record.relname),
          relnamespace: undefinedIsNull(record.relnamespace),
          reltype: undefinedIsNull(record.reltype),
          reloftype: undefinedIsNull(record.reloftype),
          relowner: undefinedIsNull(record.relowner),
          relam: undefinedIsNull(record.relam),
          relfilenode: undefinedIsNull(record.relfilenode),
          reltablespace: undefinedIsNull(record.reltablespace),
          relpages: undefinedIsNull(record.relpages),
          reltuples: undefinedIsNull(record.reltuples),
          relallvisible: undefinedIsNull(record.relallvisible),
          reltoastrelid: undefinedIsNull(record.reltoastrelid),
          relhasindex: undefinedIsNull(record.relhasindex),
          relisshared: undefinedIsNull(record.relisshared),
          relpersistence: undefinedIsNull(record.relpersistence),
          relkind: undefinedIsNull(record.relkind),
          relnatts: undefinedIsNull(record.relnatts),
          relchecks: undefinedIsNull(record.relchecks),
          relhasrules: undefinedIsNull(record.relhasrules),
          relhastriggers: undefinedIsNull(record.relhastriggers),
          relhassubclass: undefinedIsNull(record.relhassubclass),
          relrowsecurity: undefinedIsNull(record.relrowsecurity),
          relforcerowsecurity: undefinedIsNull(record.relforcerowsecurity),
          relispopulated: undefinedIsNull(record.relispopulated),
          relreplident: undefinedIsNull(record.relreplident),
          relispartition: undefinedIsNull(record.relispartition),
          relrewrite: undefinedIsNull(record.relrewrite),
          relfrozenxid: undefinedIsNull(record.relfrozenxid),
          relminmxid: undefinedIsNull(record.relminmxid),
          relacl: undefinedIsNull(record.relacl),
          reloptions: undefinedIsNull(record.reloptions),
          relpartbound: undefinedIsNull(record.relpartbound),
        }));
        return results[0];
      }
      async byReltablespaceRelfilenode(
        parameters: schemas.PgCatalog.Tables.PgClass.ByReltablespaceRelfilenode,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,relname,relnamespace,reltype,reloftype,relowner,relam,relfilenode,reltablespace,relpages,reltuples,relallvisible,reltoastrelid,relhasindex,relisshared,relpersistence,relkind,relnatts,relchecks,relhasrules,relhastriggers,relhassubclass,relrowsecurity,relforcerowsecurity,relispopulated,relreplident,relispartition,relrewrite,relfrozenxid,relminmxid,relacl,reloptions,relpartbound FROM pg_catalog.pg_class WHERE reltablespace =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.reltablespace),
          )} AND relfilenode =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.relfilenode),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          relname: undefinedIsNull(record.relname),
          relnamespace: undefinedIsNull(record.relnamespace),
          reltype: undefinedIsNull(record.reltype),
          reloftype: undefinedIsNull(record.reloftype),
          relowner: undefinedIsNull(record.relowner),
          relam: undefinedIsNull(record.relam),
          relfilenode: undefinedIsNull(record.relfilenode),
          reltablespace: undefinedIsNull(record.reltablespace),
          relpages: undefinedIsNull(record.relpages),
          reltuples: undefinedIsNull(record.reltuples),
          relallvisible: undefinedIsNull(record.relallvisible),
          reltoastrelid: undefinedIsNull(record.reltoastrelid),
          relhasindex: undefinedIsNull(record.relhasindex),
          relisshared: undefinedIsNull(record.relisshared),
          relpersistence: undefinedIsNull(record.relpersistence),
          relkind: undefinedIsNull(record.relkind),
          relnatts: undefinedIsNull(record.relnatts),
          relchecks: undefinedIsNull(record.relchecks),
          relhasrules: undefinedIsNull(record.relhasrules),
          relhastriggers: undefinedIsNull(record.relhastriggers),
          relhassubclass: undefinedIsNull(record.relhassubclass),
          relrowsecurity: undefinedIsNull(record.relrowsecurity),
          relforcerowsecurity: undefinedIsNull(record.relforcerowsecurity),
          relispopulated: undefinedIsNull(record.relispopulated),
          relreplident: undefinedIsNull(record.relreplident),
          relispartition: undefinedIsNull(record.relispartition),
          relrewrite: undefinedIsNull(record.relrewrite),
          relfrozenxid: undefinedIsNull(record.relfrozenxid),
          relminmxid: undefinedIsNull(record.relminmxid),
          relacl: undefinedIsNull(record.relacl),
          reloptions: undefinedIsNull(record.reloptions),
          relpartbound: undefinedIsNull(record.relpartbound),
        }));
        return results;
      }
    })(this);

    public PgAttrdef = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byAdrelidAdnum(
        parameters: schemas.PgCatalog.Tables.PgAttrdef.ByAdrelidAdnum,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,adrelid,adnum,adbin FROM pg_catalog.pg_attrdef WHERE adrelid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.adrelid),
          )} AND adnum =  ${typed.pg_catalog_int2(
            undefinedIsNull(parameters.adnum),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          adrelid: undefinedIsNull(record.adrelid),
          adnum: undefinedIsNull(record.adnum),
          adbin: undefinedIsNull(record.adbin),
        }));
        return results[0];
      }
      async byOid(parameters: schemas.PgCatalog.Tables.PgAttrdef.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,adrelid,adnum,adbin FROM pg_catalog.pg_attrdef WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          adrelid: undefinedIsNull(record.adrelid),
          adnum: undefinedIsNull(record.adnum),
          adbin: undefinedIsNull(record.adbin),
        }));
        return results[0];
      }
    })(this);

    public PgConstraint = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byConnameConnamespace(
        parameters: schemas.PgCatalog.Tables.PgConstraint.ByConnameConnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,conname,connamespace,contype,condeferrable,condeferred,convalidated,conrelid,contypid,conindid,conparentid,confrelid,confupdtype,confdeltype,confmatchtype,conislocal,coninhcount,connoinherit,conkey,confkey,conpfeqop,conppeqop,conffeqop,confdelsetcols,conexclop,conbin FROM pg_catalog.pg_constraint WHERE conname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.conname),
          )} AND connamespace =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.connamespace),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          conname: undefinedIsNull(record.conname),
          connamespace: undefinedIsNull(record.connamespace),
          contype: undefinedIsNull(record.contype),
          condeferrable: undefinedIsNull(record.condeferrable),
          condeferred: undefinedIsNull(record.condeferred),
          convalidated: undefinedIsNull(record.convalidated),
          conrelid: undefinedIsNull(record.conrelid),
          contypid: undefinedIsNull(record.contypid),
          conindid: undefinedIsNull(record.conindid),
          conparentid: undefinedIsNull(record.conparentid),
          confrelid: undefinedIsNull(record.confrelid),
          confupdtype: undefinedIsNull(record.confupdtype),
          confdeltype: undefinedIsNull(record.confdeltype),
          confmatchtype: undefinedIsNull(record.confmatchtype),
          conislocal: undefinedIsNull(record.conislocal),
          coninhcount: undefinedIsNull(record.coninhcount),
          connoinherit: undefinedIsNull(record.connoinherit),
          conkey: undefinedIsNull(record.conkey),
          confkey: undefinedIsNull(record.confkey),
          conpfeqop: undefinedIsNull(record.conpfeqop),
          conppeqop: undefinedIsNull(record.conppeqop),
          conffeqop: undefinedIsNull(record.conffeqop),
          confdelsetcols: undefinedIsNull(record.confdelsetcols),
          conexclop: undefinedIsNull(record.conexclop),
          conbin: undefinedIsNull(record.conbin),
        }));
        return results;
      }
      async byConparentid(
        parameters: schemas.PgCatalog.Tables.PgConstraint.ByConparentid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,conname,connamespace,contype,condeferrable,condeferred,convalidated,conrelid,contypid,conindid,conparentid,confrelid,confupdtype,confdeltype,confmatchtype,conislocal,coninhcount,connoinherit,conkey,confkey,conpfeqop,conppeqop,conffeqop,confdelsetcols,conexclop,conbin FROM pg_catalog.pg_constraint WHERE conparentid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.conparentid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          conname: undefinedIsNull(record.conname),
          connamespace: undefinedIsNull(record.connamespace),
          contype: undefinedIsNull(record.contype),
          condeferrable: undefinedIsNull(record.condeferrable),
          condeferred: undefinedIsNull(record.condeferred),
          convalidated: undefinedIsNull(record.convalidated),
          conrelid: undefinedIsNull(record.conrelid),
          contypid: undefinedIsNull(record.contypid),
          conindid: undefinedIsNull(record.conindid),
          conparentid: undefinedIsNull(record.conparentid),
          confrelid: undefinedIsNull(record.confrelid),
          confupdtype: undefinedIsNull(record.confupdtype),
          confdeltype: undefinedIsNull(record.confdeltype),
          confmatchtype: undefinedIsNull(record.confmatchtype),
          conislocal: undefinedIsNull(record.conislocal),
          coninhcount: undefinedIsNull(record.coninhcount),
          connoinherit: undefinedIsNull(record.connoinherit),
          conkey: undefinedIsNull(record.conkey),
          confkey: undefinedIsNull(record.confkey),
          conpfeqop: undefinedIsNull(record.conpfeqop),
          conppeqop: undefinedIsNull(record.conppeqop),
          conffeqop: undefinedIsNull(record.conffeqop),
          confdelsetcols: undefinedIsNull(record.confdelsetcols),
          conexclop: undefinedIsNull(record.conexclop),
          conbin: undefinedIsNull(record.conbin),
        }));
        return results;
      }
      async byConrelidContypidConname(
        parameters: schemas.PgCatalog.Tables.PgConstraint.ByConrelidContypidConname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,conname,connamespace,contype,condeferrable,condeferred,convalidated,conrelid,contypid,conindid,conparentid,confrelid,confupdtype,confdeltype,confmatchtype,conislocal,coninhcount,connoinherit,conkey,confkey,conpfeqop,conppeqop,conffeqop,confdelsetcols,conexclop,conbin FROM pg_catalog.pg_constraint WHERE conrelid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.conrelid),
          )} AND contypid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.contypid),
          )} AND conname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.conname),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          conname: undefinedIsNull(record.conname),
          connamespace: undefinedIsNull(record.connamespace),
          contype: undefinedIsNull(record.contype),
          condeferrable: undefinedIsNull(record.condeferrable),
          condeferred: undefinedIsNull(record.condeferred),
          convalidated: undefinedIsNull(record.convalidated),
          conrelid: undefinedIsNull(record.conrelid),
          contypid: undefinedIsNull(record.contypid),
          conindid: undefinedIsNull(record.conindid),
          conparentid: undefinedIsNull(record.conparentid),
          confrelid: undefinedIsNull(record.confrelid),
          confupdtype: undefinedIsNull(record.confupdtype),
          confdeltype: undefinedIsNull(record.confdeltype),
          confmatchtype: undefinedIsNull(record.confmatchtype),
          conislocal: undefinedIsNull(record.conislocal),
          coninhcount: undefinedIsNull(record.coninhcount),
          connoinherit: undefinedIsNull(record.connoinherit),
          conkey: undefinedIsNull(record.conkey),
          confkey: undefinedIsNull(record.confkey),
          conpfeqop: undefinedIsNull(record.conpfeqop),
          conppeqop: undefinedIsNull(record.conppeqop),
          conffeqop: undefinedIsNull(record.conffeqop),
          confdelsetcols: undefinedIsNull(record.confdelsetcols),
          conexclop: undefinedIsNull(record.conexclop),
          conbin: undefinedIsNull(record.conbin),
        }));
        return results[0];
      }
      async byContypid(
        parameters: schemas.PgCatalog.Tables.PgConstraint.ByContypid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,conname,connamespace,contype,condeferrable,condeferred,convalidated,conrelid,contypid,conindid,conparentid,confrelid,confupdtype,confdeltype,confmatchtype,conislocal,coninhcount,connoinherit,conkey,confkey,conpfeqop,conppeqop,conffeqop,confdelsetcols,conexclop,conbin FROM pg_catalog.pg_constraint WHERE contypid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.contypid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          conname: undefinedIsNull(record.conname),
          connamespace: undefinedIsNull(record.connamespace),
          contype: undefinedIsNull(record.contype),
          condeferrable: undefinedIsNull(record.condeferrable),
          condeferred: undefinedIsNull(record.condeferred),
          convalidated: undefinedIsNull(record.convalidated),
          conrelid: undefinedIsNull(record.conrelid),
          contypid: undefinedIsNull(record.contypid),
          conindid: undefinedIsNull(record.conindid),
          conparentid: undefinedIsNull(record.conparentid),
          confrelid: undefinedIsNull(record.confrelid),
          confupdtype: undefinedIsNull(record.confupdtype),
          confdeltype: undefinedIsNull(record.confdeltype),
          confmatchtype: undefinedIsNull(record.confmatchtype),
          conislocal: undefinedIsNull(record.conislocal),
          coninhcount: undefinedIsNull(record.coninhcount),
          connoinherit: undefinedIsNull(record.connoinherit),
          conkey: undefinedIsNull(record.conkey),
          confkey: undefinedIsNull(record.confkey),
          conpfeqop: undefinedIsNull(record.conpfeqop),
          conppeqop: undefinedIsNull(record.conppeqop),
          conffeqop: undefinedIsNull(record.conffeqop),
          confdelsetcols: undefinedIsNull(record.confdelsetcols),
          conexclop: undefinedIsNull(record.conexclop),
          conbin: undefinedIsNull(record.conbin),
        }));
        return results;
      }
      async byOid(parameters: schemas.PgCatalog.Tables.PgConstraint.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,conname,connamespace,contype,condeferrable,condeferred,convalidated,conrelid,contypid,conindid,conparentid,confrelid,confupdtype,confdeltype,confmatchtype,conislocal,coninhcount,connoinherit,conkey,confkey,conpfeqop,conppeqop,conffeqop,confdelsetcols,conexclop,conbin FROM pg_catalog.pg_constraint WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          conname: undefinedIsNull(record.conname),
          connamespace: undefinedIsNull(record.connamespace),
          contype: undefinedIsNull(record.contype),
          condeferrable: undefinedIsNull(record.condeferrable),
          condeferred: undefinedIsNull(record.condeferred),
          convalidated: undefinedIsNull(record.convalidated),
          conrelid: undefinedIsNull(record.conrelid),
          contypid: undefinedIsNull(record.contypid),
          conindid: undefinedIsNull(record.conindid),
          conparentid: undefinedIsNull(record.conparentid),
          confrelid: undefinedIsNull(record.confrelid),
          confupdtype: undefinedIsNull(record.confupdtype),
          confdeltype: undefinedIsNull(record.confdeltype),
          confmatchtype: undefinedIsNull(record.confmatchtype),
          conislocal: undefinedIsNull(record.conislocal),
          coninhcount: undefinedIsNull(record.coninhcount),
          connoinherit: undefinedIsNull(record.connoinherit),
          conkey: undefinedIsNull(record.conkey),
          confkey: undefinedIsNull(record.confkey),
          conpfeqop: undefinedIsNull(record.conpfeqop),
          conppeqop: undefinedIsNull(record.conppeqop),
          conffeqop: undefinedIsNull(record.conffeqop),
          confdelsetcols: undefinedIsNull(record.confdelsetcols),
          conexclop: undefinedIsNull(record.conexclop),
          conbin: undefinedIsNull(record.conbin),
        }));
        return results[0];
      }
    })(this);

    public PgInherits = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byInhparent(
        parameters: schemas.PgCatalog.Tables.PgInherits.ByInhparent,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT inhrelid,inhparent,inhseqno,inhdetachpending FROM pg_catalog.pg_inherits WHERE inhparent =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.inhparent),
          )}`;
        const results = response.map((record) => ({
          inhrelid: undefinedIsNull(record.inhrelid),
          inhparent: undefinedIsNull(record.inhparent),
          inhseqno: undefinedIsNull(record.inhseqno),
          inhdetachpending: undefinedIsNull(record.inhdetachpending),
        }));
        return results;
      }
      async byInhrelidInhseqno(
        parameters: schemas.PgCatalog.Tables.PgInherits.ByInhrelidInhseqno,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT inhrelid,inhparent,inhseqno,inhdetachpending FROM pg_catalog.pg_inherits WHERE inhrelid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.inhrelid),
          )} AND inhseqno =  ${typed.pg_catalog_int4(
            undefinedIsNull(parameters.inhseqno),
          )}`;
        const results = response.map((record) => ({
          inhrelid: undefinedIsNull(record.inhrelid),
          inhparent: undefinedIsNull(record.inhparent),
          inhseqno: undefinedIsNull(record.inhseqno),
          inhdetachpending: undefinedIsNull(record.inhdetachpending),
        }));
        return results[0];
      }
    })(this);

    public PgIndex = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byIndexrelid(
        parameters: schemas.PgCatalog.Tables.PgIndex.ByIndexrelid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT indexrelid,indrelid,indnatts,indnkeyatts,indisunique,indnullsnotdistinct,indisprimary,indisexclusion,indimmediate,indisclustered,indisvalid,indcheckxmin,indisready,indislive,indisreplident,indkey,indcollation,indclass,indoption,indexprs,indpred FROM pg_catalog.pg_index WHERE indexrelid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.indexrelid),
          )}`;
        const results = response.map((record) => ({
          indexrelid: undefinedIsNull(record.indexrelid),
          indrelid: undefinedIsNull(record.indrelid),
          indnatts: undefinedIsNull(record.indnatts),
          indnkeyatts: undefinedIsNull(record.indnkeyatts),
          indisunique: undefinedIsNull(record.indisunique),
          indnullsnotdistinct: undefinedIsNull(record.indnullsnotdistinct),
          indisprimary: undefinedIsNull(record.indisprimary),
          indisexclusion: undefinedIsNull(record.indisexclusion),
          indimmediate: undefinedIsNull(record.indimmediate),
          indisclustered: undefinedIsNull(record.indisclustered),
          indisvalid: undefinedIsNull(record.indisvalid),
          indcheckxmin: undefinedIsNull(record.indcheckxmin),
          indisready: undefinedIsNull(record.indisready),
          indislive: undefinedIsNull(record.indislive),
          indisreplident: undefinedIsNull(record.indisreplident),
          indkey: undefinedIsNull(record.indkey),
          indcollation: undefinedIsNull(record.indcollation),
          indclass: undefinedIsNull(record.indclass),
          indoption: undefinedIsNull(record.indoption),
          indexprs: undefinedIsNull(record.indexprs),
          indpred: undefinedIsNull(record.indpred),
        }));
        return results[0];
      }
      async byIndrelid(
        parameters: schemas.PgCatalog.Tables.PgIndex.ByIndrelid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT indexrelid,indrelid,indnatts,indnkeyatts,indisunique,indnullsnotdistinct,indisprimary,indisexclusion,indimmediate,indisclustered,indisvalid,indcheckxmin,indisready,indislive,indisreplident,indkey,indcollation,indclass,indoption,indexprs,indpred FROM pg_catalog.pg_index WHERE indrelid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.indrelid),
          )}`;
        const results = response.map((record) => ({
          indexrelid: undefinedIsNull(record.indexrelid),
          indrelid: undefinedIsNull(record.indrelid),
          indnatts: undefinedIsNull(record.indnatts),
          indnkeyatts: undefinedIsNull(record.indnkeyatts),
          indisunique: undefinedIsNull(record.indisunique),
          indnullsnotdistinct: undefinedIsNull(record.indnullsnotdistinct),
          indisprimary: undefinedIsNull(record.indisprimary),
          indisexclusion: undefinedIsNull(record.indisexclusion),
          indimmediate: undefinedIsNull(record.indimmediate),
          indisclustered: undefinedIsNull(record.indisclustered),
          indisvalid: undefinedIsNull(record.indisvalid),
          indcheckxmin: undefinedIsNull(record.indcheckxmin),
          indisready: undefinedIsNull(record.indisready),
          indislive: undefinedIsNull(record.indislive),
          indisreplident: undefinedIsNull(record.indisreplident),
          indkey: undefinedIsNull(record.indkey),
          indcollation: undefinedIsNull(record.indcollation),
          indclass: undefinedIsNull(record.indclass),
          indoption: undefinedIsNull(record.indoption),
          indexprs: undefinedIsNull(record.indexprs),
          indpred: undefinedIsNull(record.indpred),
        }));
        return results;
      }
    })(this);

    public PgOperator = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byOid(parameters: schemas.PgCatalog.Tables.PgOperator.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,oprname,oprnamespace,oprowner,oprkind,oprcanmerge,oprcanhash,oprleft,oprright,oprresult,oprcom,oprnegate,oprcode,oprrest,oprjoin FROM pg_catalog.pg_operator WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          oprname: undefinedIsNull(record.oprname),
          oprnamespace: undefinedIsNull(record.oprnamespace),
          oprowner: undefinedIsNull(record.oprowner),
          oprkind: undefinedIsNull(record.oprkind),
          oprcanmerge: undefinedIsNull(record.oprcanmerge),
          oprcanhash: undefinedIsNull(record.oprcanhash),
          oprleft: undefinedIsNull(record.oprleft),
          oprright: undefinedIsNull(record.oprright),
          oprresult: undefinedIsNull(record.oprresult),
          oprcom: undefinedIsNull(record.oprcom),
          oprnegate: undefinedIsNull(record.oprnegate),
          oprcode: undefinedIsNull(record.oprcode),
          oprrest: undefinedIsNull(record.oprrest),
          oprjoin: undefinedIsNull(record.oprjoin),
        }));
        return results[0];
      }
      async byOprnameOprleftOprrightOprnamespace(
        parameters: schemas.PgCatalog.Tables.PgOperator.ByOprnameOprleftOprrightOprnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,oprname,oprnamespace,oprowner,oprkind,oprcanmerge,oprcanhash,oprleft,oprright,oprresult,oprcom,oprnegate,oprcode,oprrest,oprjoin FROM pg_catalog.pg_operator WHERE oprname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.oprname),
          )} AND oprleft =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oprleft),
          )} AND oprright =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oprright),
          )} AND oprnamespace =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oprnamespace),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          oprname: undefinedIsNull(record.oprname),
          oprnamespace: undefinedIsNull(record.oprnamespace),
          oprowner: undefinedIsNull(record.oprowner),
          oprkind: undefinedIsNull(record.oprkind),
          oprcanmerge: undefinedIsNull(record.oprcanmerge),
          oprcanhash: undefinedIsNull(record.oprcanhash),
          oprleft: undefinedIsNull(record.oprleft),
          oprright: undefinedIsNull(record.oprright),
          oprresult: undefinedIsNull(record.oprresult),
          oprcom: undefinedIsNull(record.oprcom),
          oprnegate: undefinedIsNull(record.oprnegate),
          oprcode: undefinedIsNull(record.oprcode),
          oprrest: undefinedIsNull(record.oprrest),
          oprjoin: undefinedIsNull(record.oprjoin),
        }));
        return results[0];
      }
    })(this);

    public PgOpfamily = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byOid(parameters: schemas.PgCatalog.Tables.PgOpfamily.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,opfmethod,opfname,opfnamespace,opfowner FROM pg_catalog.pg_opfamily WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          opfmethod: undefinedIsNull(record.opfmethod),
          opfname: undefinedIsNull(record.opfname),
          opfnamespace: undefinedIsNull(record.opfnamespace),
          opfowner: undefinedIsNull(record.opfowner),
        }));
        return results[0];
      }
      async byOpfmethodOpfnameOpfnamespace(
        parameters: schemas.PgCatalog.Tables.PgOpfamily.ByOpfmethodOpfnameOpfnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,opfmethod,opfname,opfnamespace,opfowner FROM pg_catalog.pg_opfamily WHERE opfmethod =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.opfmethod),
          )} AND opfname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.opfname),
          )} AND opfnamespace =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.opfnamespace),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          opfmethod: undefinedIsNull(record.opfmethod),
          opfname: undefinedIsNull(record.opfname),
          opfnamespace: undefinedIsNull(record.opfnamespace),
          opfowner: undefinedIsNull(record.opfowner),
        }));
        return results[0];
      }
    })(this);

    public PgOpclass = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byOid(parameters: schemas.PgCatalog.Tables.PgOpclass.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,opcmethod,opcname,opcnamespace,opcowner,opcfamily,opcintype,opcdefault,opckeytype FROM pg_catalog.pg_opclass WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          opcmethod: undefinedIsNull(record.opcmethod),
          opcname: undefinedIsNull(record.opcname),
          opcnamespace: undefinedIsNull(record.opcnamespace),
          opcowner: undefinedIsNull(record.opcowner),
          opcfamily: undefinedIsNull(record.opcfamily),
          opcintype: undefinedIsNull(record.opcintype),
          opcdefault: undefinedIsNull(record.opcdefault),
          opckeytype: undefinedIsNull(record.opckeytype),
        }));
        return results[0];
      }
      async byOpcmethodOpcnameOpcnamespace(
        parameters: schemas.PgCatalog.Tables.PgOpclass.ByOpcmethodOpcnameOpcnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,opcmethod,opcname,opcnamespace,opcowner,opcfamily,opcintype,opcdefault,opckeytype FROM pg_catalog.pg_opclass WHERE opcmethod =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.opcmethod),
          )} AND opcname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.opcname),
          )} AND opcnamespace =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.opcnamespace),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          opcmethod: undefinedIsNull(record.opcmethod),
          opcname: undefinedIsNull(record.opcname),
          opcnamespace: undefinedIsNull(record.opcnamespace),
          opcowner: undefinedIsNull(record.opcowner),
          opcfamily: undefinedIsNull(record.opcfamily),
          opcintype: undefinedIsNull(record.opcintype),
          opcdefault: undefinedIsNull(record.opcdefault),
          opckeytype: undefinedIsNull(record.opckeytype),
        }));
        return results[0];
      }
    })(this);

    public PgAm = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byAmname(parameters: schemas.PgCatalog.Tables.PgAm.ByAmname) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,amname,amhandler,amtype FROM pg_catalog.pg_am WHERE amname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.amname),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          amname: undefinedIsNull(record.amname),
          amhandler: undefinedIsNull(record.amhandler),
          amtype: undefinedIsNull(record.amtype),
        }));
        return results[0];
      }
      async byOid(parameters: schemas.PgCatalog.Tables.PgAm.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,amname,amhandler,amtype FROM pg_catalog.pg_am WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          amname: undefinedIsNull(record.amname),
          amhandler: undefinedIsNull(record.amhandler),
          amtype: undefinedIsNull(record.amtype),
        }));
        return results[0];
      }
    })(this);

    public PgAmop = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byAmopfamilyAmoplefttypeAmoprighttypeAmopstrategy(
        parameters: schemas.PgCatalog.Tables.PgAmop.ByAmopfamilyAmoplefttypeAmoprighttypeAmopstrategy,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,amopfamily,amoplefttype,amoprighttype,amopstrategy,amoppurpose,amopopr,amopmethod,amopsortfamily FROM pg_catalog.pg_amop WHERE amopfamily =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.amopfamily),
          )} AND amoplefttype =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.amoplefttype),
          )} AND amoprighttype =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.amoprighttype),
          )} AND amopstrategy =  ${typed.pg_catalog_int2(
            undefinedIsNull(parameters.amopstrategy),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          amopfamily: undefinedIsNull(record.amopfamily),
          amoplefttype: undefinedIsNull(record.amoplefttype),
          amoprighttype: undefinedIsNull(record.amoprighttype),
          amopstrategy: undefinedIsNull(record.amopstrategy),
          amoppurpose: undefinedIsNull(record.amoppurpose),
          amopopr: undefinedIsNull(record.amopopr),
          amopmethod: undefinedIsNull(record.amopmethod),
          amopsortfamily: undefinedIsNull(record.amopsortfamily),
        }));
        return results[0];
      }
      async byAmopoprAmoppurposeAmopfamily(
        parameters: schemas.PgCatalog.Tables.PgAmop.ByAmopoprAmoppurposeAmopfamily,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,amopfamily,amoplefttype,amoprighttype,amopstrategy,amoppurpose,amopopr,amopmethod,amopsortfamily FROM pg_catalog.pg_amop WHERE amopopr =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.amopopr),
          )} AND amoppurpose =  ${typed.pg_catalog_char(
            undefinedIsNull(parameters.amoppurpose),
          )} AND amopfamily =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.amopfamily),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          amopfamily: undefinedIsNull(record.amopfamily),
          amoplefttype: undefinedIsNull(record.amoplefttype),
          amoprighttype: undefinedIsNull(record.amoprighttype),
          amopstrategy: undefinedIsNull(record.amopstrategy),
          amoppurpose: undefinedIsNull(record.amoppurpose),
          amopopr: undefinedIsNull(record.amopopr),
          amopmethod: undefinedIsNull(record.amopmethod),
          amopsortfamily: undefinedIsNull(record.amopsortfamily),
        }));
        return results[0];
      }
      async byOid(parameters: schemas.PgCatalog.Tables.PgAmop.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,amopfamily,amoplefttype,amoprighttype,amopstrategy,amoppurpose,amopopr,amopmethod,amopsortfamily FROM pg_catalog.pg_amop WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          amopfamily: undefinedIsNull(record.amopfamily),
          amoplefttype: undefinedIsNull(record.amoplefttype),
          amoprighttype: undefinedIsNull(record.amoprighttype),
          amopstrategy: undefinedIsNull(record.amopstrategy),
          amoppurpose: undefinedIsNull(record.amoppurpose),
          amopopr: undefinedIsNull(record.amopopr),
          amopmethod: undefinedIsNull(record.amopmethod),
          amopsortfamily: undefinedIsNull(record.amopsortfamily),
        }));
        return results[0];
      }
    })(this);

    public PgAmproc = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byAmprocfamilyAmproclefttypeAmprocrighttypeAmprocnum(
        parameters: schemas.PgCatalog.Tables.PgAmproc.ByAmprocfamilyAmproclefttypeAmprocrighttypeAmprocnum,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,amprocfamily,amproclefttype,amprocrighttype,amprocnum,amproc FROM pg_catalog.pg_amproc WHERE amprocfamily =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.amprocfamily),
          )} AND amproclefttype =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.amproclefttype),
          )} AND amprocrighttype =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.amprocrighttype),
          )} AND amprocnum =  ${typed.pg_catalog_int2(
            undefinedIsNull(parameters.amprocnum),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          amprocfamily: undefinedIsNull(record.amprocfamily),
          amproclefttype: undefinedIsNull(record.amproclefttype),
          amprocrighttype: undefinedIsNull(record.amprocrighttype),
          amprocnum: undefinedIsNull(record.amprocnum),
          amproc: undefinedIsNull(record.amproc),
        }));
        return results[0];
      }
      async byOid(parameters: schemas.PgCatalog.Tables.PgAmproc.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,amprocfamily,amproclefttype,amprocrighttype,amprocnum,amproc FROM pg_catalog.pg_amproc WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          amprocfamily: undefinedIsNull(record.amprocfamily),
          amproclefttype: undefinedIsNull(record.amproclefttype),
          amprocrighttype: undefinedIsNull(record.amprocrighttype),
          amprocnum: undefinedIsNull(record.amprocnum),
          amproc: undefinedIsNull(record.amproc),
        }));
        return results[0];
      }
    })(this);

    public PgLanguage = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byLanname(
        parameters: schemas.PgCatalog.Tables.PgLanguage.ByLanname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,lanname,lanowner,lanispl,lanpltrusted,lanplcallfoid,laninline,lanvalidator,lanacl FROM pg_catalog.pg_language WHERE lanname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.lanname),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          lanname: undefinedIsNull(record.lanname),
          lanowner: undefinedIsNull(record.lanowner),
          lanispl: undefinedIsNull(record.lanispl),
          lanpltrusted: undefinedIsNull(record.lanpltrusted),
          lanplcallfoid: undefinedIsNull(record.lanplcallfoid),
          laninline: undefinedIsNull(record.laninline),
          lanvalidator: undefinedIsNull(record.lanvalidator),
          lanacl: undefinedIsNull(record.lanacl),
        }));
        return results[0];
      }
      async byOid(parameters: schemas.PgCatalog.Tables.PgLanguage.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,lanname,lanowner,lanispl,lanpltrusted,lanplcallfoid,laninline,lanvalidator,lanacl FROM pg_catalog.pg_language WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          lanname: undefinedIsNull(record.lanname),
          lanowner: undefinedIsNull(record.lanowner),
          lanispl: undefinedIsNull(record.lanispl),
          lanpltrusted: undefinedIsNull(record.lanpltrusted),
          lanplcallfoid: undefinedIsNull(record.lanplcallfoid),
          laninline: undefinedIsNull(record.laninline),
          lanvalidator: undefinedIsNull(record.lanvalidator),
          lanacl: undefinedIsNull(record.lanacl),
        }));
        return results[0];
      }
    })(this);

    public PgLargeobjectMetadata = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byOid(
        parameters: schemas.PgCatalog.Tables.PgLargeobjectMetadata.ByOid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,lomowner,lomacl FROM pg_catalog.pg_largeobject_metadata WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          lomowner: undefinedIsNull(record.lomowner),
          lomacl: undefinedIsNull(record.lomacl),
        }));
        return results[0];
      }
    })(this);

    public PgAggregate = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byAggfnoid(
        parameters: schemas.PgCatalog.Tables.PgAggregate.ByAggfnoid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT aggfnoid,aggkind,aggnumdirectargs,aggtransfn,aggfinalfn,aggcombinefn,aggserialfn,aggdeserialfn,aggmtransfn,aggminvtransfn,aggmfinalfn,aggfinalextra,aggmfinalextra,aggfinalmodify,aggmfinalmodify,aggsortop,aggtranstype,aggtransspace,aggmtranstype,aggmtransspace,agginitval,aggminitval FROM pg_catalog.pg_aggregate WHERE aggfnoid =  ${typed.pg_catalog_regproc(
            undefinedIsNull(parameters.aggfnoid),
          )}`;
        const results = response.map((record) => ({
          aggfnoid: undefinedIsNull(record.aggfnoid),
          aggkind: undefinedIsNull(record.aggkind),
          aggnumdirectargs: undefinedIsNull(record.aggnumdirectargs),
          aggtransfn: undefinedIsNull(record.aggtransfn),
          aggfinalfn: undefinedIsNull(record.aggfinalfn),
          aggcombinefn: undefinedIsNull(record.aggcombinefn),
          aggserialfn: undefinedIsNull(record.aggserialfn),
          aggdeserialfn: undefinedIsNull(record.aggdeserialfn),
          aggmtransfn: undefinedIsNull(record.aggmtransfn),
          aggminvtransfn: undefinedIsNull(record.aggminvtransfn),
          aggmfinalfn: undefinedIsNull(record.aggmfinalfn),
          aggfinalextra: undefinedIsNull(record.aggfinalextra),
          aggmfinalextra: undefinedIsNull(record.aggmfinalextra),
          aggfinalmodify: undefinedIsNull(record.aggfinalmodify),
          aggmfinalmodify: undefinedIsNull(record.aggmfinalmodify),
          aggsortop: undefinedIsNull(record.aggsortop),
          aggtranstype: undefinedIsNull(record.aggtranstype),
          aggtransspace: undefinedIsNull(record.aggtransspace),
          aggmtranstype: undefinedIsNull(record.aggmtranstype),
          aggmtransspace: undefinedIsNull(record.aggmtransspace),
          agginitval: undefinedIsNull(record.agginitval),
          aggminitval: undefinedIsNull(record.aggminitval),
        }));
        return results[0];
      }
    })(this);

    public PgStatisticExt = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byOid(parameters: schemas.PgCatalog.Tables.PgStatisticExt.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,stxrelid,stxname,stxnamespace,stxowner,stxstattarget,stxkeys,stxkind,stxexprs FROM pg_catalog.pg_statistic_ext WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          stxrelid: undefinedIsNull(record.stxrelid),
          stxname: undefinedIsNull(record.stxname),
          stxnamespace: undefinedIsNull(record.stxnamespace),
          stxowner: undefinedIsNull(record.stxowner),
          stxstattarget: undefinedIsNull(record.stxstattarget),
          stxkeys: undefinedIsNull(record.stxkeys),
          stxkind: undefinedIsNull(record.stxkind),
          stxexprs: undefinedIsNull(record.stxexprs),
        }));
        return results[0];
      }
      async byStxnameStxnamespace(
        parameters: schemas.PgCatalog.Tables.PgStatisticExt.ByStxnameStxnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,stxrelid,stxname,stxnamespace,stxowner,stxstattarget,stxkeys,stxkind,stxexprs FROM pg_catalog.pg_statistic_ext WHERE stxname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.stxname),
          )} AND stxnamespace =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.stxnamespace),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          stxrelid: undefinedIsNull(record.stxrelid),
          stxname: undefinedIsNull(record.stxname),
          stxnamespace: undefinedIsNull(record.stxnamespace),
          stxowner: undefinedIsNull(record.stxowner),
          stxstattarget: undefinedIsNull(record.stxstattarget),
          stxkeys: undefinedIsNull(record.stxkeys),
          stxkind: undefinedIsNull(record.stxkind),
          stxexprs: undefinedIsNull(record.stxexprs),
        }));
        return results[0];
      }
      async byStxrelid(
        parameters: schemas.PgCatalog.Tables.PgStatisticExt.ByStxrelid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,stxrelid,stxname,stxnamespace,stxowner,stxstattarget,stxkeys,stxkind,stxexprs FROM pg_catalog.pg_statistic_ext WHERE stxrelid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.stxrelid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          stxrelid: undefinedIsNull(record.stxrelid),
          stxname: undefinedIsNull(record.stxname),
          stxnamespace: undefinedIsNull(record.stxnamespace),
          stxowner: undefinedIsNull(record.stxowner),
          stxstattarget: undefinedIsNull(record.stxstattarget),
          stxkeys: undefinedIsNull(record.stxkeys),
          stxkind: undefinedIsNull(record.stxkind),
          stxexprs: undefinedIsNull(record.stxexprs),
        }));
        return results;
      }
    })(this);

    public PgRewrite = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byEvClassRulename(
        parameters: schemas.PgCatalog.Tables.PgRewrite.ByEvClassRulename,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,rulename,ev_class,ev_type,ev_enabled,is_instead,ev_qual,ev_action FROM pg_catalog.pg_rewrite WHERE ev_class =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.evClass),
          )} AND rulename =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.rulename),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          rulename: undefinedIsNull(record.rulename),
          evClass: undefinedIsNull(record.ev_class),
          evType: undefinedIsNull(record.ev_type),
          evEnabled: undefinedIsNull(record.ev_enabled),
          isInstead: undefinedIsNull(record.is_instead),
          evQual: undefinedIsNull(record.ev_qual),
          evAction: undefinedIsNull(record.ev_action),
        }));
        return results[0];
      }
      async byOid(parameters: schemas.PgCatalog.Tables.PgRewrite.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,rulename,ev_class,ev_type,ev_enabled,is_instead,ev_qual,ev_action FROM pg_catalog.pg_rewrite WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          rulename: undefinedIsNull(record.rulename),
          evClass: undefinedIsNull(record.ev_class),
          evType: undefinedIsNull(record.ev_type),
          evEnabled: undefinedIsNull(record.ev_enabled),
          isInstead: undefinedIsNull(record.is_instead),
          evQual: undefinedIsNull(record.ev_qual),
          evAction: undefinedIsNull(record.ev_action),
        }));
        return results[0];
      }
    })(this);

    public PgTrigger = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byOid(parameters: schemas.PgCatalog.Tables.PgTrigger.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,tgrelid,tgparentid,tgname,tgfoid,tgtype,tgenabled,tgisinternal,tgconstrrelid,tgconstrindid,tgconstraint,tgdeferrable,tginitdeferred,tgnargs,tgattr,tgargs,tgqual,tgoldtable,tgnewtable FROM pg_catalog.pg_trigger WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          tgrelid: undefinedIsNull(record.tgrelid),
          tgparentid: undefinedIsNull(record.tgparentid),
          tgname: undefinedIsNull(record.tgname),
          tgfoid: undefinedIsNull(record.tgfoid),
          tgtype: undefinedIsNull(record.tgtype),
          tgenabled: undefinedIsNull(record.tgenabled),
          tgisinternal: undefinedIsNull(record.tgisinternal),
          tgconstrrelid: undefinedIsNull(record.tgconstrrelid),
          tgconstrindid: undefinedIsNull(record.tgconstrindid),
          tgconstraint: undefinedIsNull(record.tgconstraint),
          tgdeferrable: undefinedIsNull(record.tgdeferrable),
          tginitdeferred: undefinedIsNull(record.tginitdeferred),
          tgnargs: undefinedIsNull(record.tgnargs),
          tgattr: undefinedIsNull(record.tgattr),
          tgargs: undefinedIsNull(record.tgargs),
          tgqual: undefinedIsNull(record.tgqual),
          tgoldtable: undefinedIsNull(record.tgoldtable),
          tgnewtable: undefinedIsNull(record.tgnewtable),
        }));
        return results[0];
      }
      async byTgconstraint(
        parameters: schemas.PgCatalog.Tables.PgTrigger.ByTgconstraint,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,tgrelid,tgparentid,tgname,tgfoid,tgtype,tgenabled,tgisinternal,tgconstrrelid,tgconstrindid,tgconstraint,tgdeferrable,tginitdeferred,tgnargs,tgattr,tgargs,tgqual,tgoldtable,tgnewtable FROM pg_catalog.pg_trigger WHERE tgconstraint =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.tgconstraint),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          tgrelid: undefinedIsNull(record.tgrelid),
          tgparentid: undefinedIsNull(record.tgparentid),
          tgname: undefinedIsNull(record.tgname),
          tgfoid: undefinedIsNull(record.tgfoid),
          tgtype: undefinedIsNull(record.tgtype),
          tgenabled: undefinedIsNull(record.tgenabled),
          tgisinternal: undefinedIsNull(record.tgisinternal),
          tgconstrrelid: undefinedIsNull(record.tgconstrrelid),
          tgconstrindid: undefinedIsNull(record.tgconstrindid),
          tgconstraint: undefinedIsNull(record.tgconstraint),
          tgdeferrable: undefinedIsNull(record.tgdeferrable),
          tginitdeferred: undefinedIsNull(record.tginitdeferred),
          tgnargs: undefinedIsNull(record.tgnargs),
          tgattr: undefinedIsNull(record.tgattr),
          tgargs: undefinedIsNull(record.tgargs),
          tgqual: undefinedIsNull(record.tgqual),
          tgoldtable: undefinedIsNull(record.tgoldtable),
          tgnewtable: undefinedIsNull(record.tgnewtable),
        }));
        return results;
      }
      async byTgrelidTgname(
        parameters: schemas.PgCatalog.Tables.PgTrigger.ByTgrelidTgname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,tgrelid,tgparentid,tgname,tgfoid,tgtype,tgenabled,tgisinternal,tgconstrrelid,tgconstrindid,tgconstraint,tgdeferrable,tginitdeferred,tgnargs,tgattr,tgargs,tgqual,tgoldtable,tgnewtable FROM pg_catalog.pg_trigger WHERE tgrelid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.tgrelid),
          )} AND tgname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.tgname),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          tgrelid: undefinedIsNull(record.tgrelid),
          tgparentid: undefinedIsNull(record.tgparentid),
          tgname: undefinedIsNull(record.tgname),
          tgfoid: undefinedIsNull(record.tgfoid),
          tgtype: undefinedIsNull(record.tgtype),
          tgenabled: undefinedIsNull(record.tgenabled),
          tgisinternal: undefinedIsNull(record.tgisinternal),
          tgconstrrelid: undefinedIsNull(record.tgconstrrelid),
          tgconstrindid: undefinedIsNull(record.tgconstrindid),
          tgconstraint: undefinedIsNull(record.tgconstraint),
          tgdeferrable: undefinedIsNull(record.tgdeferrable),
          tginitdeferred: undefinedIsNull(record.tginitdeferred),
          tgnargs: undefinedIsNull(record.tgnargs),
          tgattr: undefinedIsNull(record.tgattr),
          tgargs: undefinedIsNull(record.tgargs),
          tgqual: undefinedIsNull(record.tgqual),
          tgoldtable: undefinedIsNull(record.tgoldtable),
          tgnewtable: undefinedIsNull(record.tgnewtable),
        }));
        return results[0];
      }
    })(this);

    public PgEventTrigger = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byEvtname(
        parameters: schemas.PgCatalog.Tables.PgEventTrigger.ByEvtname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,evtname,evtevent,evtowner,evtfoid,evtenabled,evttags FROM pg_catalog.pg_event_trigger WHERE evtname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.evtname),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          evtname: undefinedIsNull(record.evtname),
          evtevent: undefinedIsNull(record.evtevent),
          evtowner: undefinedIsNull(record.evtowner),
          evtfoid: undefinedIsNull(record.evtfoid),
          evtenabled: undefinedIsNull(record.evtenabled),
          evttags: undefinedIsNull(record.evttags),
        }));
        return results[0];
      }
      async byOid(parameters: schemas.PgCatalog.Tables.PgEventTrigger.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,evtname,evtevent,evtowner,evtfoid,evtenabled,evttags FROM pg_catalog.pg_event_trigger WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          evtname: undefinedIsNull(record.evtname),
          evtevent: undefinedIsNull(record.evtevent),
          evtowner: undefinedIsNull(record.evtowner),
          evtfoid: undefinedIsNull(record.evtfoid),
          evtenabled: undefinedIsNull(record.evtenabled),
          evttags: undefinedIsNull(record.evttags),
        }));
        return results[0];
      }
    })(this);

    public PgDescription = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byObjoidClassoidObjsubid(
        parameters: schemas.PgCatalog.Tables.PgDescription.ByObjoidClassoidObjsubid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT objoid,classoid,objsubid,description FROM pg_catalog.pg_description WHERE objoid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.objoid),
          )} AND classoid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.classoid),
          )} AND objsubid =  ${typed.pg_catalog_int4(
            undefinedIsNull(parameters.objsubid),
          )}`;
        const results = response.map((record) => ({
          objoid: undefinedIsNull(record.objoid),
          classoid: undefinedIsNull(record.classoid),
          objsubid: undefinedIsNull(record.objsubid),
          description: undefinedIsNull(record.description),
        }));
        return results[0];
      }
    })(this);

    public PgCast = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byCastsourceCasttarget(
        parameters: schemas.PgCatalog.Tables.PgCast.ByCastsourceCasttarget,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,castsource,casttarget,castfunc,castcontext,castmethod FROM pg_catalog.pg_cast WHERE castsource =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.castsource),
          )} AND casttarget =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.casttarget),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          castsource: undefinedIsNull(record.castsource),
          casttarget: undefinedIsNull(record.casttarget),
          castfunc: undefinedIsNull(record.castfunc),
          castcontext: undefinedIsNull(record.castcontext),
          castmethod: undefinedIsNull(record.castmethod),
        }));
        return results[0];
      }
      async byOid(parameters: schemas.PgCatalog.Tables.PgCast.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,castsource,casttarget,castfunc,castcontext,castmethod FROM pg_catalog.pg_cast WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          castsource: undefinedIsNull(record.castsource),
          casttarget: undefinedIsNull(record.casttarget),
          castfunc: undefinedIsNull(record.castfunc),
          castcontext: undefinedIsNull(record.castcontext),
          castmethod: undefinedIsNull(record.castmethod),
        }));
        return results[0];
      }
    })(this);

    public PgEnum = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byEnumtypidEnumlabel(
        parameters: schemas.PgCatalog.Tables.PgEnum.ByEnumtypidEnumlabel,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,enumtypid,enumsortorder,enumlabel FROM pg_catalog.pg_enum WHERE enumtypid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.enumtypid),
          )} AND enumlabel =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.enumlabel),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          enumtypid: undefinedIsNull(record.enumtypid),
          enumsortorder: undefinedIsNull(record.enumsortorder),
          enumlabel: undefinedIsNull(record.enumlabel),
        }));
        return results[0];
      }
      async byEnumtypidEnumsortorder(
        parameters: schemas.PgCatalog.Tables.PgEnum.ByEnumtypidEnumsortorder,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,enumtypid,enumsortorder,enumlabel FROM pg_catalog.pg_enum WHERE enumtypid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.enumtypid),
          )} AND enumsortorder =  ${typed.pg_catalog_float4(
            undefinedIsNull(parameters.enumsortorder),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          enumtypid: undefinedIsNull(record.enumtypid),
          enumsortorder: undefinedIsNull(record.enumsortorder),
          enumlabel: undefinedIsNull(record.enumlabel),
        }));
        return results[0];
      }
      async byOid(parameters: schemas.PgCatalog.Tables.PgEnum.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,enumtypid,enumsortorder,enumlabel FROM pg_catalog.pg_enum WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          enumtypid: undefinedIsNull(record.enumtypid),
          enumsortorder: undefinedIsNull(record.enumsortorder),
          enumlabel: undefinedIsNull(record.enumlabel),
        }));
        return results[0];
      }
    })(this);

    public PgNamespace = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byNspname(
        parameters: schemas.PgCatalog.Tables.PgNamespace.ByNspname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,nspname,nspowner,nspacl FROM pg_catalog.pg_namespace WHERE nspname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.nspname),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          nspname: undefinedIsNull(record.nspname),
          nspowner: undefinedIsNull(record.nspowner),
          nspacl: undefinedIsNull(record.nspacl),
        }));
        return results[0];
      }
      async byOid(parameters: schemas.PgCatalog.Tables.PgNamespace.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,nspname,nspowner,nspacl FROM pg_catalog.pg_namespace WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          nspname: undefinedIsNull(record.nspname),
          nspowner: undefinedIsNull(record.nspowner),
          nspacl: undefinedIsNull(record.nspacl),
        }));
        return results[0];
      }
    })(this);

    public PgConversion = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byConnameConnamespace(
        parameters: schemas.PgCatalog.Tables.PgConversion.ByConnameConnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,conname,connamespace,conowner,conforencoding,contoencoding,conproc,condefault FROM pg_catalog.pg_conversion WHERE conname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.conname),
          )} AND connamespace =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.connamespace),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          conname: undefinedIsNull(record.conname),
          connamespace: undefinedIsNull(record.connamespace),
          conowner: undefinedIsNull(record.conowner),
          conforencoding: undefinedIsNull(record.conforencoding),
          contoencoding: undefinedIsNull(record.contoencoding),
          conproc: undefinedIsNull(record.conproc),
          condefault: undefinedIsNull(record.condefault),
        }));
        return results[0];
      }
      async byConnamespaceConforencodingContoencodingOid(
        parameters: schemas.PgCatalog.Tables.PgConversion.ByConnamespaceConforencodingContoencodingOid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,conname,connamespace,conowner,conforencoding,contoencoding,conproc,condefault FROM pg_catalog.pg_conversion WHERE connamespace =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.connamespace),
          )} AND conforencoding =  ${typed.pg_catalog_int4(
            undefinedIsNull(parameters.conforencoding),
          )} AND contoencoding =  ${typed.pg_catalog_int4(
            undefinedIsNull(parameters.contoencoding),
          )} AND oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          conname: undefinedIsNull(record.conname),
          connamespace: undefinedIsNull(record.connamespace),
          conowner: undefinedIsNull(record.conowner),
          conforencoding: undefinedIsNull(record.conforencoding),
          contoencoding: undefinedIsNull(record.contoencoding),
          conproc: undefinedIsNull(record.conproc),
          condefault: undefinedIsNull(record.condefault),
        }));
        return results[0];
      }
      async byOid(parameters: schemas.PgCatalog.Tables.PgConversion.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,conname,connamespace,conowner,conforencoding,contoencoding,conproc,condefault FROM pg_catalog.pg_conversion WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          conname: undefinedIsNull(record.conname),
          connamespace: undefinedIsNull(record.connamespace),
          conowner: undefinedIsNull(record.conowner),
          conforencoding: undefinedIsNull(record.conforencoding),
          contoencoding: undefinedIsNull(record.contoencoding),
          conproc: undefinedIsNull(record.conproc),
          condefault: undefinedIsNull(record.condefault),
        }));
        return results[0];
      }
    })(this);

    public PgDepend = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byClassidObjidObjsubid(
        parameters: schemas.PgCatalog.Tables.PgDepend.ByClassidObjidObjsubid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT classid,objid,objsubid,refclassid,refobjid,refobjsubid,deptype FROM pg_catalog.pg_depend WHERE classid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.classid),
          )} AND objid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.objid),
          )} AND objsubid =  ${typed.pg_catalog_int4(
            undefinedIsNull(parameters.objsubid),
          )}`;
        const results = response.map((record) => ({
          classid: undefinedIsNull(record.classid),
          objid: undefinedIsNull(record.objid),
          objsubid: undefinedIsNull(record.objsubid),
          refclassid: undefinedIsNull(record.refclassid),
          refobjid: undefinedIsNull(record.refobjid),
          refobjsubid: undefinedIsNull(record.refobjsubid),
          deptype: undefinedIsNull(record.deptype),
        }));
        return results;
      }
      async byRefclassidRefobjidRefobjsubid(
        parameters: schemas.PgCatalog.Tables.PgDepend.ByRefclassidRefobjidRefobjsubid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT classid,objid,objsubid,refclassid,refobjid,refobjsubid,deptype FROM pg_catalog.pg_depend WHERE refclassid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.refclassid),
          )} AND refobjid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.refobjid),
          )} AND refobjsubid =  ${typed.pg_catalog_int4(
            undefinedIsNull(parameters.refobjsubid),
          )}`;
        const results = response.map((record) => ({
          classid: undefinedIsNull(record.classid),
          objid: undefinedIsNull(record.objid),
          objsubid: undefinedIsNull(record.objsubid),
          refclassid: undefinedIsNull(record.refclassid),
          refobjid: undefinedIsNull(record.refobjid),
          refobjsubid: undefinedIsNull(record.refobjsubid),
          deptype: undefinedIsNull(record.deptype),
        }));
        return results;
      }
    })(this);

    public PgDatabase = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byDatname(
        parameters: schemas.PgCatalog.Tables.PgDatabase.ByDatname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,datname,datdba,encoding,datlocprovider,datistemplate,datallowconn,datconnlimit,datfrozenxid,datminmxid,dattablespace,datcollate,datctype,daticulocale,daticurules,datcollversion,datacl FROM pg_catalog.pg_database WHERE datname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.datname),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          datname: undefinedIsNull(record.datname),
          datdba: undefinedIsNull(record.datdba),
          encoding: undefinedIsNull(record.encoding),
          datlocprovider: undefinedIsNull(record.datlocprovider),
          datistemplate: undefinedIsNull(record.datistemplate),
          datallowconn: undefinedIsNull(record.datallowconn),
          datconnlimit: undefinedIsNull(record.datconnlimit),
          datfrozenxid: undefinedIsNull(record.datfrozenxid),
          datminmxid: undefinedIsNull(record.datminmxid),
          dattablespace: undefinedIsNull(record.dattablespace),
          datcollate: undefinedIsNull(record.datcollate),
          datctype: undefinedIsNull(record.datctype),
          daticulocale: undefinedIsNull(record.daticulocale),
          daticurules: undefinedIsNull(record.daticurules),
          datcollversion: undefinedIsNull(record.datcollversion),
          datacl: undefinedIsNull(record.datacl),
        }));
        return results[0];
      }
      async byOid(parameters: schemas.PgCatalog.Tables.PgDatabase.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,datname,datdba,encoding,datlocprovider,datistemplate,datallowconn,datconnlimit,datfrozenxid,datminmxid,dattablespace,datcollate,datctype,daticulocale,daticurules,datcollversion,datacl FROM pg_catalog.pg_database WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          datname: undefinedIsNull(record.datname),
          datdba: undefinedIsNull(record.datdba),
          encoding: undefinedIsNull(record.encoding),
          datlocprovider: undefinedIsNull(record.datlocprovider),
          datistemplate: undefinedIsNull(record.datistemplate),
          datallowconn: undefinedIsNull(record.datallowconn),
          datconnlimit: undefinedIsNull(record.datconnlimit),
          datfrozenxid: undefinedIsNull(record.datfrozenxid),
          datminmxid: undefinedIsNull(record.datminmxid),
          dattablespace: undefinedIsNull(record.dattablespace),
          datcollate: undefinedIsNull(record.datcollate),
          datctype: undefinedIsNull(record.datctype),
          daticulocale: undefinedIsNull(record.daticulocale),
          daticurules: undefinedIsNull(record.daticurules),
          datcollversion: undefinedIsNull(record.datcollversion),
          datacl: undefinedIsNull(record.datacl),
        }));
        return results[0];
      }
    })(this);

    public PgDbRoleSetting = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async bySetdatabaseSetrole(
        parameters: schemas.PgCatalog.Tables.PgDbRoleSetting.BySetdatabaseSetrole,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT setdatabase,setrole,setconfig FROM pg_catalog.pg_db_role_setting WHERE setdatabase =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.setdatabase),
          )} AND setrole =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.setrole),
          )}`;
        const results = response.map((record) => ({
          setdatabase: undefinedIsNull(record.setdatabase),
          setrole: undefinedIsNull(record.setrole),
          setconfig: undefinedIsNull(record.setconfig),
        }));
        return results[0];
      }
    })(this);

    public PgTablespace = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byOid(parameters: schemas.PgCatalog.Tables.PgTablespace.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,spcname,spcowner,spcacl,spcoptions FROM pg_catalog.pg_tablespace WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          spcname: undefinedIsNull(record.spcname),
          spcowner: undefinedIsNull(record.spcowner),
          spcacl: undefinedIsNull(record.spcacl),
          spcoptions: undefinedIsNull(record.spcoptions),
        }));
        return results[0];
      }
      async bySpcname(
        parameters: schemas.PgCatalog.Tables.PgTablespace.BySpcname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,spcname,spcowner,spcacl,spcoptions FROM pg_catalog.pg_tablespace WHERE spcname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.spcname),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          spcname: undefinedIsNull(record.spcname),
          spcowner: undefinedIsNull(record.spcowner),
          spcacl: undefinedIsNull(record.spcacl),
          spcoptions: undefinedIsNull(record.spcoptions),
        }));
        return results[0];
      }
    })(this);

    public PgAuthMembers = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byGrantor(
        parameters: schemas.PgCatalog.Tables.PgAuthMembers.ByGrantor,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,roleid,member,grantor,admin_option,inherit_option,set_option FROM pg_catalog.pg_auth_members WHERE grantor =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.grantor),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          roleid: undefinedIsNull(record.roleid),
          member: undefinedIsNull(record.member),
          grantor: undefinedIsNull(record.grantor),
          adminOption: undefinedIsNull(record.admin_option),
          inheritOption: undefinedIsNull(record.inherit_option),
          setOption: undefinedIsNull(record.set_option),
        }));
        return results;
      }
      async byMemberRoleidGrantor(
        parameters: schemas.PgCatalog.Tables.PgAuthMembers.ByMemberRoleidGrantor,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,roleid,member,grantor,admin_option,inherit_option,set_option FROM pg_catalog.pg_auth_members WHERE member =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.member),
          )} AND roleid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.roleid),
          )} AND grantor =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.grantor),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          roleid: undefinedIsNull(record.roleid),
          member: undefinedIsNull(record.member),
          grantor: undefinedIsNull(record.grantor),
          adminOption: undefinedIsNull(record.admin_option),
          inheritOption: undefinedIsNull(record.inherit_option),
          setOption: undefinedIsNull(record.set_option),
        }));
        return results[0];
      }
      async byOid(parameters: schemas.PgCatalog.Tables.PgAuthMembers.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,roleid,member,grantor,admin_option,inherit_option,set_option FROM pg_catalog.pg_auth_members WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          roleid: undefinedIsNull(record.roleid),
          member: undefinedIsNull(record.member),
          grantor: undefinedIsNull(record.grantor),
          adminOption: undefinedIsNull(record.admin_option),
          inheritOption: undefinedIsNull(record.inherit_option),
          setOption: undefinedIsNull(record.set_option),
        }));
        return results[0];
      }
      async byRoleidMemberGrantor(
        parameters: schemas.PgCatalog.Tables.PgAuthMembers.ByRoleidMemberGrantor,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,roleid,member,grantor,admin_option,inherit_option,set_option FROM pg_catalog.pg_auth_members WHERE roleid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.roleid),
          )} AND member =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.member),
          )} AND grantor =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.grantor),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          roleid: undefinedIsNull(record.roleid),
          member: undefinedIsNull(record.member),
          grantor: undefinedIsNull(record.grantor),
          adminOption: undefinedIsNull(record.admin_option),
          inheritOption: undefinedIsNull(record.inherit_option),
          setOption: undefinedIsNull(record.set_option),
        }));
        return results[0];
      }
    })(this);

    public PgShdepend = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byDbidClassidObjidObjsubid(
        parameters: schemas.PgCatalog.Tables.PgShdepend.ByDbidClassidObjidObjsubid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT dbid,classid,objid,objsubid,refclassid,refobjid,deptype FROM pg_catalog.pg_shdepend WHERE dbid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.dbid),
          )} AND classid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.classid),
          )} AND objid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.objid),
          )} AND objsubid =  ${typed.pg_catalog_int4(
            undefinedIsNull(parameters.objsubid),
          )}`;
        const results = response.map((record) => ({
          dbid: undefinedIsNull(record.dbid),
          classid: undefinedIsNull(record.classid),
          objid: undefinedIsNull(record.objid),
          objsubid: undefinedIsNull(record.objsubid),
          refclassid: undefinedIsNull(record.refclassid),
          refobjid: undefinedIsNull(record.refobjid),
          deptype: undefinedIsNull(record.deptype),
        }));
        return results;
      }
      async byRefclassidRefobjid(
        parameters: schemas.PgCatalog.Tables.PgShdepend.ByRefclassidRefobjid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT dbid,classid,objid,objsubid,refclassid,refobjid,deptype FROM pg_catalog.pg_shdepend WHERE refclassid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.refclassid),
          )} AND refobjid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.refobjid),
          )}`;
        const results = response.map((record) => ({
          dbid: undefinedIsNull(record.dbid),
          classid: undefinedIsNull(record.classid),
          objid: undefinedIsNull(record.objid),
          objsubid: undefinedIsNull(record.objsubid),
          refclassid: undefinedIsNull(record.refclassid),
          refobjid: undefinedIsNull(record.refobjid),
          deptype: undefinedIsNull(record.deptype),
        }));
        return results;
      }
    })(this);

    public PgShdescription = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byObjoidClassoid(
        parameters: schemas.PgCatalog.Tables.PgShdescription.ByObjoidClassoid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT objoid,classoid,description FROM pg_catalog.pg_shdescription WHERE objoid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.objoid),
          )} AND classoid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.classoid),
          )}`;
        const results = response.map((record) => ({
          objoid: undefinedIsNull(record.objoid),
          classoid: undefinedIsNull(record.classoid),
          description: undefinedIsNull(record.description),
        }));
        return results[0];
      }
    })(this);

    public PgTsConfig = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byCfgnameCfgnamespace(
        parameters: schemas.PgCatalog.Tables.PgTsConfig.ByCfgnameCfgnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,cfgname,cfgnamespace,cfgowner,cfgparser FROM pg_catalog.pg_ts_config WHERE cfgname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.cfgname),
          )} AND cfgnamespace =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.cfgnamespace),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          cfgname: undefinedIsNull(record.cfgname),
          cfgnamespace: undefinedIsNull(record.cfgnamespace),
          cfgowner: undefinedIsNull(record.cfgowner),
          cfgparser: undefinedIsNull(record.cfgparser),
        }));
        return results[0];
      }
      async byOid(parameters: schemas.PgCatalog.Tables.PgTsConfig.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,cfgname,cfgnamespace,cfgowner,cfgparser FROM pg_catalog.pg_ts_config WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          cfgname: undefinedIsNull(record.cfgname),
          cfgnamespace: undefinedIsNull(record.cfgnamespace),
          cfgowner: undefinedIsNull(record.cfgowner),
          cfgparser: undefinedIsNull(record.cfgparser),
        }));
        return results[0];
      }
    })(this);

    public PgTsConfigMap = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byMapcfgMaptokentypeMapseqno(
        parameters: schemas.PgCatalog.Tables.PgTsConfigMap.ByMapcfgMaptokentypeMapseqno,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT mapcfg,maptokentype,mapseqno,mapdict FROM pg_catalog.pg_ts_config_map WHERE mapcfg =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.mapcfg),
          )} AND maptokentype =  ${typed.pg_catalog_int4(
            undefinedIsNull(parameters.maptokentype),
          )} AND mapseqno =  ${typed.pg_catalog_int4(
            undefinedIsNull(parameters.mapseqno),
          )}`;
        const results = response.map((record) => ({
          mapcfg: undefinedIsNull(record.mapcfg),
          maptokentype: undefinedIsNull(record.maptokentype),
          mapseqno: undefinedIsNull(record.mapseqno),
          mapdict: undefinedIsNull(record.mapdict),
        }));
        return results[0];
      }
    })(this);

    public PgTsDict = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byDictnameDictnamespace(
        parameters: schemas.PgCatalog.Tables.PgTsDict.ByDictnameDictnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,dictname,dictnamespace,dictowner,dicttemplate,dictinitoption FROM pg_catalog.pg_ts_dict WHERE dictname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.dictname),
          )} AND dictnamespace =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.dictnamespace),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          dictname: undefinedIsNull(record.dictname),
          dictnamespace: undefinedIsNull(record.dictnamespace),
          dictowner: undefinedIsNull(record.dictowner),
          dicttemplate: undefinedIsNull(record.dicttemplate),
          dictinitoption: undefinedIsNull(record.dictinitoption),
        }));
        return results[0];
      }
      async byOid(parameters: schemas.PgCatalog.Tables.PgTsDict.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,dictname,dictnamespace,dictowner,dicttemplate,dictinitoption FROM pg_catalog.pg_ts_dict WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          dictname: undefinedIsNull(record.dictname),
          dictnamespace: undefinedIsNull(record.dictnamespace),
          dictowner: undefinedIsNull(record.dictowner),
          dicttemplate: undefinedIsNull(record.dicttemplate),
          dictinitoption: undefinedIsNull(record.dictinitoption),
        }));
        return results[0];
      }
    })(this);

    public PgTsParser = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byOid(parameters: schemas.PgCatalog.Tables.PgTsParser.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,prsname,prsnamespace,prsstart,prstoken,prsend,prsheadline,prslextype FROM pg_catalog.pg_ts_parser WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          prsname: undefinedIsNull(record.prsname),
          prsnamespace: undefinedIsNull(record.prsnamespace),
          prsstart: undefinedIsNull(record.prsstart),
          prstoken: undefinedIsNull(record.prstoken),
          prsend: undefinedIsNull(record.prsend),
          prsheadline: undefinedIsNull(record.prsheadline),
          prslextype: undefinedIsNull(record.prslextype),
        }));
        return results[0];
      }
      async byPrsnamePrsnamespace(
        parameters: schemas.PgCatalog.Tables.PgTsParser.ByPrsnamePrsnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,prsname,prsnamespace,prsstart,prstoken,prsend,prsheadline,prslextype FROM pg_catalog.pg_ts_parser WHERE prsname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.prsname),
          )} AND prsnamespace =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.prsnamespace),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          prsname: undefinedIsNull(record.prsname),
          prsnamespace: undefinedIsNull(record.prsnamespace),
          prsstart: undefinedIsNull(record.prsstart),
          prstoken: undefinedIsNull(record.prstoken),
          prsend: undefinedIsNull(record.prsend),
          prsheadline: undefinedIsNull(record.prsheadline),
          prslextype: undefinedIsNull(record.prslextype),
        }));
        return results[0];
      }
    })(this);

    public PgTsTemplate = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byOid(parameters: schemas.PgCatalog.Tables.PgTsTemplate.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,tmplname,tmplnamespace,tmplinit,tmpllexize FROM pg_catalog.pg_ts_template WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          tmplname: undefinedIsNull(record.tmplname),
          tmplnamespace: undefinedIsNull(record.tmplnamespace),
          tmplinit: undefinedIsNull(record.tmplinit),
          tmpllexize: undefinedIsNull(record.tmpllexize),
        }));
        return results[0];
      }
      async byTmplnameTmplnamespace(
        parameters: schemas.PgCatalog.Tables.PgTsTemplate.ByTmplnameTmplnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,tmplname,tmplnamespace,tmplinit,tmpllexize FROM pg_catalog.pg_ts_template WHERE tmplname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.tmplname),
          )} AND tmplnamespace =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.tmplnamespace),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          tmplname: undefinedIsNull(record.tmplname),
          tmplnamespace: undefinedIsNull(record.tmplnamespace),
          tmplinit: undefinedIsNull(record.tmplinit),
          tmpllexize: undefinedIsNull(record.tmpllexize),
        }));
        return results[0];
      }
    })(this);

    public PgExtension = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byExtname(
        parameters: schemas.PgCatalog.Tables.PgExtension.ByExtname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,extname,extowner,extnamespace,extrelocatable,extversion,extconfig,extcondition FROM pg_catalog.pg_extension WHERE extname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.extname),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          extname: undefinedIsNull(record.extname),
          extowner: undefinedIsNull(record.extowner),
          extnamespace: undefinedIsNull(record.extnamespace),
          extrelocatable: undefinedIsNull(record.extrelocatable),
          extversion: undefinedIsNull(record.extversion),
          extconfig: undefinedIsNull(record.extconfig),
          extcondition: undefinedIsNull(record.extcondition),
        }));
        return results[0];
      }
      async byOid(parameters: schemas.PgCatalog.Tables.PgExtension.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,extname,extowner,extnamespace,extrelocatable,extversion,extconfig,extcondition FROM pg_catalog.pg_extension WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          extname: undefinedIsNull(record.extname),
          extowner: undefinedIsNull(record.extowner),
          extnamespace: undefinedIsNull(record.extnamespace),
          extrelocatable: undefinedIsNull(record.extrelocatable),
          extversion: undefinedIsNull(record.extversion),
          extconfig: undefinedIsNull(record.extconfig),
          extcondition: undefinedIsNull(record.extcondition),
        }));
        return results[0];
      }
    })(this);

    public PgForeignDataWrapper = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byFdwname(
        parameters: schemas.PgCatalog.Tables.PgForeignDataWrapper.ByFdwname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,fdwname,fdwowner,fdwhandler,fdwvalidator,fdwacl,fdwoptions FROM pg_catalog.pg_foreign_data_wrapper WHERE fdwname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.fdwname),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          fdwname: undefinedIsNull(record.fdwname),
          fdwowner: undefinedIsNull(record.fdwowner),
          fdwhandler: undefinedIsNull(record.fdwhandler),
          fdwvalidator: undefinedIsNull(record.fdwvalidator),
          fdwacl: undefinedIsNull(record.fdwacl),
          fdwoptions: undefinedIsNull(record.fdwoptions),
        }));
        return results[0];
      }
      async byOid(
        parameters: schemas.PgCatalog.Tables.PgForeignDataWrapper.ByOid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,fdwname,fdwowner,fdwhandler,fdwvalidator,fdwacl,fdwoptions FROM pg_catalog.pg_foreign_data_wrapper WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          fdwname: undefinedIsNull(record.fdwname),
          fdwowner: undefinedIsNull(record.fdwowner),
          fdwhandler: undefinedIsNull(record.fdwhandler),
          fdwvalidator: undefinedIsNull(record.fdwvalidator),
          fdwacl: undefinedIsNull(record.fdwacl),
          fdwoptions: undefinedIsNull(record.fdwoptions),
        }));
        return results[0];
      }
    })(this);

    public PgForeignServer = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byOid(parameters: schemas.PgCatalog.Tables.PgForeignServer.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,srvname,srvowner,srvfdw,srvtype,srvversion,srvacl,srvoptions FROM pg_catalog.pg_foreign_server WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          srvname: undefinedIsNull(record.srvname),
          srvowner: undefinedIsNull(record.srvowner),
          srvfdw: undefinedIsNull(record.srvfdw),
          srvtype: undefinedIsNull(record.srvtype),
          srvversion: undefinedIsNull(record.srvversion),
          srvacl: undefinedIsNull(record.srvacl),
          srvoptions: undefinedIsNull(record.srvoptions),
        }));
        return results[0];
      }
      async bySrvname(
        parameters: schemas.PgCatalog.Tables.PgForeignServer.BySrvname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,srvname,srvowner,srvfdw,srvtype,srvversion,srvacl,srvoptions FROM pg_catalog.pg_foreign_server WHERE srvname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.srvname),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          srvname: undefinedIsNull(record.srvname),
          srvowner: undefinedIsNull(record.srvowner),
          srvfdw: undefinedIsNull(record.srvfdw),
          srvtype: undefinedIsNull(record.srvtype),
          srvversion: undefinedIsNull(record.srvversion),
          srvacl: undefinedIsNull(record.srvacl),
          srvoptions: undefinedIsNull(record.srvoptions),
        }));
        return results[0];
      }
    })(this);

    public PgPolicy = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byOid(parameters: schemas.PgCatalog.Tables.PgPolicy.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,polname,polrelid,polcmd,polpermissive,polroles,polqual,polwithcheck FROM pg_catalog.pg_policy WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          polname: undefinedIsNull(record.polname),
          polrelid: undefinedIsNull(record.polrelid),
          polcmd: undefinedIsNull(record.polcmd),
          polpermissive: undefinedIsNull(record.polpermissive),
          polroles: undefinedIsNull(record.polroles),
          polqual: undefinedIsNull(record.polqual),
          polwithcheck: undefinedIsNull(record.polwithcheck),
        }));
        return results[0];
      }
      async byPolrelidPolname(
        parameters: schemas.PgCatalog.Tables.PgPolicy.ByPolrelidPolname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,polname,polrelid,polcmd,polpermissive,polroles,polqual,polwithcheck FROM pg_catalog.pg_policy WHERE polrelid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.polrelid),
          )} AND polname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.polname),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          polname: undefinedIsNull(record.polname),
          polrelid: undefinedIsNull(record.polrelid),
          polcmd: undefinedIsNull(record.polcmd),
          polpermissive: undefinedIsNull(record.polpermissive),
          polroles: undefinedIsNull(record.polroles),
          polqual: undefinedIsNull(record.polqual),
          polwithcheck: undefinedIsNull(record.polwithcheck),
        }));
        return results[0];
      }
    })(this);

    public PgReplicationOrigin = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byRoident(
        parameters: schemas.PgCatalog.Tables.PgReplicationOrigin.ByRoident,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT roident,roname FROM pg_catalog.pg_replication_origin WHERE roident =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.roident),
          )}`;
        const results = response.map((record) => ({
          roident: undefinedIsNull(record.roident),
          roname: undefinedIsNull(record.roname),
        }));
        return results[0];
      }
      async byRoname(
        parameters: schemas.PgCatalog.Tables.PgReplicationOrigin.ByRoname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT roident,roname FROM pg_catalog.pg_replication_origin WHERE roname =  ${typed.pg_catalog_text(
            undefinedIsNull(parameters.roname),
          )}`;
        const results = response.map((record) => ({
          roident: undefinedIsNull(record.roident),
          roname: undefinedIsNull(record.roname),
        }));
        return results[0];
      }
    })(this);

    public PgDefaultAcl = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byDefaclroleDefaclnamespaceDefaclobjtype(
        parameters: schemas.PgCatalog.Tables.PgDefaultAcl.ByDefaclroleDefaclnamespaceDefaclobjtype,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,defaclrole,defaclnamespace,defaclobjtype,defaclacl FROM pg_catalog.pg_default_acl WHERE defaclrole =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.defaclrole),
          )} AND defaclnamespace =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.defaclnamespace),
          )} AND defaclobjtype =  ${typed.pg_catalog_char(
            undefinedIsNull(parameters.defaclobjtype),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          defaclrole: undefinedIsNull(record.defaclrole),
          defaclnamespace: undefinedIsNull(record.defaclnamespace),
          defaclobjtype: undefinedIsNull(record.defaclobjtype),
          defaclacl: undefinedIsNull(record.defaclacl),
        }));
        return results[0];
      }
      async byOid(parameters: schemas.PgCatalog.Tables.PgDefaultAcl.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,defaclrole,defaclnamespace,defaclobjtype,defaclacl FROM pg_catalog.pg_default_acl WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          defaclrole: undefinedIsNull(record.defaclrole),
          defaclnamespace: undefinedIsNull(record.defaclnamespace),
          defaclobjtype: undefinedIsNull(record.defaclobjtype),
          defaclacl: undefinedIsNull(record.defaclacl),
        }));
        return results[0];
      }
    })(this);

    public PgInitPrivs = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byObjoidClassoidObjsubid(
        parameters: schemas.PgCatalog.Tables.PgInitPrivs.ByObjoidClassoidObjsubid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT objoid,classoid,objsubid,privtype,initprivs FROM pg_catalog.pg_init_privs WHERE objoid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.objoid),
          )} AND classoid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.classoid),
          )} AND objsubid =  ${typed.pg_catalog_int4(
            undefinedIsNull(parameters.objsubid),
          )}`;
        const results = response.map((record) => ({
          objoid: undefinedIsNull(record.objoid),
          classoid: undefinedIsNull(record.classoid),
          objsubid: undefinedIsNull(record.objsubid),
          privtype: undefinedIsNull(record.privtype),
          initprivs: undefinedIsNull(record.initprivs),
        }));
        return results[0];
      }
    })(this);

    public PgSeclabel = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byObjoidClassoidObjsubidProvider(
        parameters: schemas.PgCatalog.Tables.PgSeclabel.ByObjoidClassoidObjsubidProvider,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT objoid,classoid,objsubid,provider,label FROM pg_catalog.pg_seclabel WHERE objoid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.objoid),
          )} AND classoid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.classoid),
          )} AND objsubid =  ${typed.pg_catalog_int4(
            undefinedIsNull(parameters.objsubid),
          )} AND provider =  ${typed.pg_catalog_text(
            undefinedIsNull(parameters.provider),
          )}`;
        const results = response.map((record) => ({
          objoid: undefinedIsNull(record.objoid),
          classoid: undefinedIsNull(record.classoid),
          objsubid: undefinedIsNull(record.objsubid),
          provider: undefinedIsNull(record.provider),
          label: undefinedIsNull(record.label),
        }));
        return results[0];
      }
    })(this);

    public PgShseclabel = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byObjoidClassoidProvider(
        parameters: schemas.PgCatalog.Tables.PgShseclabel.ByObjoidClassoidProvider,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT objoid,classoid,provider,label FROM pg_catalog.pg_shseclabel WHERE objoid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.objoid),
          )} AND classoid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.classoid),
          )} AND provider =  ${typed.pg_catalog_text(
            undefinedIsNull(parameters.provider),
          )}`;
        const results = response.map((record) => ({
          objoid: undefinedIsNull(record.objoid),
          classoid: undefinedIsNull(record.classoid),
          provider: undefinedIsNull(record.provider),
          label: undefinedIsNull(record.label),
        }));
        return results[0];
      }
    })(this);

    public PgCollation = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byCollnameCollencodingCollnamespace(
        parameters: schemas.PgCatalog.Tables.PgCollation.ByCollnameCollencodingCollnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,collname,collnamespace,collowner,collprovider,collisdeterministic,collencoding,collcollate,collctype,colliculocale,collicurules,collversion FROM pg_catalog.pg_collation WHERE collname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.collname),
          )} AND collencoding =  ${typed.pg_catalog_int4(
            undefinedIsNull(parameters.collencoding),
          )} AND collnamespace =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.collnamespace),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          collname: undefinedIsNull(record.collname),
          collnamespace: undefinedIsNull(record.collnamespace),
          collowner: undefinedIsNull(record.collowner),
          collprovider: undefinedIsNull(record.collprovider),
          collisdeterministic: undefinedIsNull(record.collisdeterministic),
          collencoding: undefinedIsNull(record.collencoding),
          collcollate: undefinedIsNull(record.collcollate),
          collctype: undefinedIsNull(record.collctype),
          colliculocale: undefinedIsNull(record.colliculocale),
          collicurules: undefinedIsNull(record.collicurules),
          collversion: undefinedIsNull(record.collversion),
        }));
        return results[0];
      }
      async byOid(parameters: schemas.PgCatalog.Tables.PgCollation.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,collname,collnamespace,collowner,collprovider,collisdeterministic,collencoding,collcollate,collctype,colliculocale,collicurules,collversion FROM pg_catalog.pg_collation WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          collname: undefinedIsNull(record.collname),
          collnamespace: undefinedIsNull(record.collnamespace),
          collowner: undefinedIsNull(record.collowner),
          collprovider: undefinedIsNull(record.collprovider),
          collisdeterministic: undefinedIsNull(record.collisdeterministic),
          collencoding: undefinedIsNull(record.collencoding),
          collcollate: undefinedIsNull(record.collcollate),
          collctype: undefinedIsNull(record.collctype),
          colliculocale: undefinedIsNull(record.colliculocale),
          collicurules: undefinedIsNull(record.collicurules),
          collversion: undefinedIsNull(record.collversion),
        }));
        return results[0];
      }
    })(this);

    public PgParameterAcl = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byOid(parameters: schemas.PgCatalog.Tables.PgParameterAcl.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,parname,paracl FROM pg_catalog.pg_parameter_acl WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          parname: undefinedIsNull(record.parname),
          paracl: undefinedIsNull(record.paracl),
        }));
        return results[0];
      }
      async byParname(
        parameters: schemas.PgCatalog.Tables.PgParameterAcl.ByParname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,parname,paracl FROM pg_catalog.pg_parameter_acl WHERE parname =  ${typed.pg_catalog_text(
            undefinedIsNull(parameters.parname),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          parname: undefinedIsNull(record.parname),
          paracl: undefinedIsNull(record.paracl),
        }));
        return results[0];
      }
    })(this);

    public PgPartitionedTable = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byPartrelid(
        parameters: schemas.PgCatalog.Tables.PgPartitionedTable.ByPartrelid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT partrelid,partstrat,partnatts,partdefid,partattrs,partclass,partcollation,partexprs FROM pg_catalog.pg_partitioned_table WHERE partrelid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.partrelid),
          )}`;
        const results = response.map((record) => ({
          partrelid: undefinedIsNull(record.partrelid),
          partstrat: undefinedIsNull(record.partstrat),
          partnatts: undefinedIsNull(record.partnatts),
          partdefid: undefinedIsNull(record.partdefid),
          partattrs: undefinedIsNull(record.partattrs),
          partclass: undefinedIsNull(record.partclass),
          partcollation: undefinedIsNull(record.partcollation),
          partexprs: undefinedIsNull(record.partexprs),
        }));
        return results[0];
      }
    })(this);

    public PgRange = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byRngmultitypid(
        parameters: schemas.PgCatalog.Tables.PgRange.ByRngmultitypid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT rngtypid,rngsubtype,rngmultitypid,rngcollation,rngsubopc,rngcanonical,rngsubdiff FROM pg_catalog.pg_range WHERE rngmultitypid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.rngmultitypid),
          )}`;
        const results = response.map((record) => ({
          rngtypid: undefinedIsNull(record.rngtypid),
          rngsubtype: undefinedIsNull(record.rngsubtype),
          rngmultitypid: undefinedIsNull(record.rngmultitypid),
          rngcollation: undefinedIsNull(record.rngcollation),
          rngsubopc: undefinedIsNull(record.rngsubopc),
          rngcanonical: undefinedIsNull(record.rngcanonical),
          rngsubdiff: undefinedIsNull(record.rngsubdiff),
        }));
        return results[0];
      }
      async byRngtypid(
        parameters: schemas.PgCatalog.Tables.PgRange.ByRngtypid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT rngtypid,rngsubtype,rngmultitypid,rngcollation,rngsubopc,rngcanonical,rngsubdiff FROM pg_catalog.pg_range WHERE rngtypid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.rngtypid),
          )}`;
        const results = response.map((record) => ({
          rngtypid: undefinedIsNull(record.rngtypid),
          rngsubtype: undefinedIsNull(record.rngsubtype),
          rngmultitypid: undefinedIsNull(record.rngmultitypid),
          rngcollation: undefinedIsNull(record.rngcollation),
          rngsubopc: undefinedIsNull(record.rngsubopc),
          rngcanonical: undefinedIsNull(record.rngcanonical),
          rngsubdiff: undefinedIsNull(record.rngsubdiff),
        }));
        return results[0];
      }
    })(this);

    public PgTransform = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byOid(parameters: schemas.PgCatalog.Tables.PgTransform.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,trftype,trflang,trffromsql,trftosql FROM pg_catalog.pg_transform WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          trftype: undefinedIsNull(record.trftype),
          trflang: undefinedIsNull(record.trflang),
          trffromsql: undefinedIsNull(record.trffromsql),
          trftosql: undefinedIsNull(record.trftosql),
        }));
        return results[0];
      }
      async byTrftypeTrflang(
        parameters: schemas.PgCatalog.Tables.PgTransform.ByTrftypeTrflang,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,trftype,trflang,trffromsql,trftosql FROM pg_catalog.pg_transform WHERE trftype =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.trftype),
          )} AND trflang =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.trflang),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          trftype: undefinedIsNull(record.trftype),
          trflang: undefinedIsNull(record.trflang),
          trffromsql: undefinedIsNull(record.trffromsql),
          trftosql: undefinedIsNull(record.trftosql),
        }));
        return results[0];
      }
    })(this);

    public PgSequence = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async bySeqrelid(
        parameters: schemas.PgCatalog.Tables.PgSequence.BySeqrelid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT seqrelid,seqtypid,seqstart,seqincrement,seqmax,seqmin,seqcache,seqcycle FROM pg_catalog.pg_sequence WHERE seqrelid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.seqrelid),
          )}`;
        const results = response.map((record) => ({
          seqrelid: undefinedIsNull(record.seqrelid),
          seqtypid: undefinedIsNull(record.seqtypid),
          seqstart: undefinedIsNull(record.seqstart),
          seqincrement: undefinedIsNull(record.seqincrement),
          seqmax: undefinedIsNull(record.seqmax),
          seqmin: undefinedIsNull(record.seqmin),
          seqcache: undefinedIsNull(record.seqcache),
          seqcycle: undefinedIsNull(record.seqcycle),
        }));
        return results[0];
      }
    })(this);

    public PgPublication = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byOid(parameters: schemas.PgCatalog.Tables.PgPublication.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,pubname,pubowner,puballtables,pubinsert,pubupdate,pubdelete,pubtruncate,pubviaroot FROM pg_catalog.pg_publication WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          pubname: undefinedIsNull(record.pubname),
          pubowner: undefinedIsNull(record.pubowner),
          puballtables: undefinedIsNull(record.puballtables),
          pubinsert: undefinedIsNull(record.pubinsert),
          pubupdate: undefinedIsNull(record.pubupdate),
          pubdelete: undefinedIsNull(record.pubdelete),
          pubtruncate: undefinedIsNull(record.pubtruncate),
          pubviaroot: undefinedIsNull(record.pubviaroot),
        }));
        return results[0];
      }
      async byPubname(
        parameters: schemas.PgCatalog.Tables.PgPublication.ByPubname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,pubname,pubowner,puballtables,pubinsert,pubupdate,pubdelete,pubtruncate,pubviaroot FROM pg_catalog.pg_publication WHERE pubname =  ${typed.pg_catalog_cstring(
            undefinedIsNull(parameters.pubname),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          pubname: undefinedIsNull(record.pubname),
          pubowner: undefinedIsNull(record.pubowner),
          puballtables: undefinedIsNull(record.puballtables),
          pubinsert: undefinedIsNull(record.pubinsert),
          pubupdate: undefinedIsNull(record.pubupdate),
          pubdelete: undefinedIsNull(record.pubdelete),
          pubtruncate: undefinedIsNull(record.pubtruncate),
          pubviaroot: undefinedIsNull(record.pubviaroot),
        }));
        return results[0];
      }
    })(this);

    public PgPublicationNamespace = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byOid(
        parameters: schemas.PgCatalog.Tables.PgPublicationNamespace.ByOid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,pnpubid,pnnspid FROM pg_catalog.pg_publication_namespace WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          pnpubid: undefinedIsNull(record.pnpubid),
          pnnspid: undefinedIsNull(record.pnnspid),
        }));
        return results[0];
      }
      async byPnnspidPnpubid(
        parameters: schemas.PgCatalog.Tables.PgPublicationNamespace.ByPnnspidPnpubid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,pnpubid,pnnspid FROM pg_catalog.pg_publication_namespace WHERE pnnspid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.pnnspid),
          )} AND pnpubid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.pnpubid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          pnpubid: undefinedIsNull(record.pnpubid),
          pnnspid: undefinedIsNull(record.pnnspid),
        }));
        return results[0];
      }
    })(this);

    public PgPublicationRel = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byOid(parameters: schemas.PgCatalog.Tables.PgPublicationRel.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,prpubid,prrelid,prqual,prattrs FROM pg_catalog.pg_publication_rel WHERE oid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.oid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          prpubid: undefinedIsNull(record.prpubid),
          prrelid: undefinedIsNull(record.prrelid),
          prqual: undefinedIsNull(record.prqual),
          prattrs: undefinedIsNull(record.prattrs),
        }));
        return results[0];
      }
      async byPrpubid(
        parameters: schemas.PgCatalog.Tables.PgPublicationRel.ByPrpubid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,prpubid,prrelid,prqual,prattrs FROM pg_catalog.pg_publication_rel WHERE prpubid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.prpubid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          prpubid: undefinedIsNull(record.prpubid),
          prrelid: undefinedIsNull(record.prrelid),
          prqual: undefinedIsNull(record.prqual),
          prattrs: undefinedIsNull(record.prattrs),
        }));
        return results;
      }
      async byPrrelidPrpubid(
        parameters: schemas.PgCatalog.Tables.PgPublicationRel.ByPrrelidPrpubid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,prpubid,prrelid,prqual,prattrs FROM pg_catalog.pg_publication_rel WHERE prrelid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.prrelid),
          )} AND prpubid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.prpubid),
          )}`;
        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          prpubid: undefinedIsNull(record.prpubid),
          prrelid: undefinedIsNull(record.prrelid),
          prqual: undefinedIsNull(record.prqual),
          prattrs: undefinedIsNull(record.prattrs),
        }));
        return results[0];
      }
    })(this);

    public PgSubscriptionRel = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async bySrrelidSrsubid(
        parameters: schemas.PgCatalog.Tables.PgSubscriptionRel.BySrrelidSrsubid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT srsubid,srrelid,srsubstate,srsublsn FROM pg_catalog.pg_subscription_rel WHERE srrelid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.srrelid),
          )} AND srsubid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.srsubid),
          )}`;
        const results = response.map((record) => ({
          srsubid: undefinedIsNull(record.srsubid),
          srrelid: undefinedIsNull(record.srrelid),
          srsubstate: undefinedIsNull(record.srsubstate),
          srsublsn: undefinedIsNull(record.srsublsn),
        }));
        return results[0];
      }
    })(this);

    public PgLargeobject = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byLoidPageno(
        parameters: schemas.PgCatalog.Tables.PgLargeobject.ByLoidPageno,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT loid,pageno,data FROM pg_catalog.pg_largeobject WHERE loid =  ${typed.pg_catalog_oid(
            undefinedIsNull(parameters.loid),
          )} AND pageno =  ${typed.pg_catalog_int4(
            undefinedIsNull(parameters.pageno),
          )}`;
        const results = response.map((record) => ({
          loid: undefinedIsNull(record.loid),
          pageno: undefinedIsNull(record.pageno),
          data: undefinedIsNull(record.data),
        }));
        return results[0];
      }
    })(this);
  })(this);

  public InformationSchema = new (class implements HasDatabase {
    constructor(public database: Database) {}

    public SqlFeatures = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public SqlImplementationInfo = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public SqlParts = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public SqlSizing = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);
  })(this);

  public Api = new (class implements HasDatabase {
    constructor(public database: Database) {}

    async Echo(parameters: schemas.Api.EchoArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  api.echo(message => ${typed.pg_catalog_text(
                    undefinedIsNull(parameters.message),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .echo as unknown as schemas.Api.EchoSingleResultsetRecord;
      return responseBody;
    }
    async EchoSet(parameters: schemas.Api.EchoSetArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  api.echo_set(message => ${typed.pg_catalog_text(
                    undefinedIsNull(parameters.message),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results.map(
        (x) => x.echo_set,
      ) as unknown as schemas.Api.EchoSetResultset;
      return responseBody;
    }
    async EchoTable(parameters: schemas.Api.EchoTableArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  api.echo_table(message => ${typed.pg_catalog_text(
                    undefinedIsNull(parameters.message),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results.map((x) =>
        this.parseEchoTableResult(this.database.context, x.echo_table),
      ) as unknown as schemas.Api.EchoTableResultset;
      return responseBody;
    }

    parseEchoTableResult = (
      context: Context,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      result: any,
    ): schemas.Api.EchoTableSingleResultsetRecord => {
      return context.procTypes.api_echo_table.parseFromPostgresIfRecord(
        context,
        result,
      ) as unknown as schemas.Api.EchoTableSingleResultsetRecord;
    };

    async EchoType(parameters: schemas.Api.EchoTypeArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  api.echo_type(message => ${typed.pg_catalog_text(
                    undefinedIsNull(parameters.message),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .echo_type as unknown as schemas.Api.EchoTypeSingleResultsetRecord;
      return responseBody;
    }
    async EchoTypeArray(parameters: schemas.Api.EchoTypeArrayArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  api.echo_type_array(message => ${typed.pg_catalog_text(
                    undefinedIsNull(parameters.message),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .echo_type_array as unknown as schemas.Api.EchoTypeArraySingleResultsetRecord;
      return responseBody;
    }
    async EchoTypeNested(parameters: schemas.Api.EchoTypeNestedArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  api.echo_type_nested(message => ${typed.pg_catalog_text(
                    undefinedIsNull(parameters.message),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .echo_type_nested as unknown as schemas.Api.EchoTypeNestedSingleResultsetRecord;
      return responseBody;
    }
    async EchoTypeSet(parameters: schemas.Api.EchoTypeSetArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  api.echo_type_set(message => ${typed.pg_catalog_text(
                    undefinedIsNull(parameters.message),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results.map(
        (x) => x.echo_type_set,
      ) as unknown as schemas.Api.EchoTypeSetResultset;
      return responseBody;
    }
  })(this);
}

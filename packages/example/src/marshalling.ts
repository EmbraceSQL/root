// ⚠️ generated - do not modify ⚠️
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  UUID,
  JsDate,
  JSONValue,
  JSONObject,
  Empty,
  Nullable,
  undefinedIsNull,
} from "@embracesql/core/src/types";
import { Context, initializeContext } from "@embracesql/core/src/context";
import postgres from "postgres";

export namespace PgCatalog {
  export type AclitemArray = Array<Aclitem>;

  export type BitArray = Array<Bit>;

  export type BoolArray = Array<Bool>;

  export type BoxArray = Array<Box>;

  export type BpcharArray = Array<Bpchar>;

  export type ByteaArray = Array<Bytea>;

  export type CharArray = Array<Char>;

  export type CidArray = Array<Cid>;

  export type CidrArray = Array<Cidr>;

  export type CircleArray = Array<Circle>;

  export type CstringArray = Array<Cstring>;

  export type DateArray = Array<Date>;

  export type DatemultirangeArray = Array<Datemultirange>;

  export type DaterangeArray = Array<Daterange>;

  export type Float4Array = Array<Float4>;

  export type Float8Array = Array<Float8>;

  export type GtsvectorArray = Array<Gtsvector>;

  export type InetArray = Array<Inet>;

  export type Int2Array = Array<Int2>;

  export type Int2vectorArray = Array<Int2vector>;

  export type Int4Array = Array<Int4>;

  export type Int4multirangeArray = Array<Int4multirange>;

  export type Int4rangeArray = Array<Int4range>;

  export type Int8Array = Array<Int8>;

  export type Int8multirangeArray = Array<Int8multirange>;

  export type Int8rangeArray = Array<Int8range>;

  export type IntervalArray = Array<Interval>;

  export type JsonArray = Array<Json>;

  export type JsonbArray = Array<Jsonb>;

  export type JsonpathArray = Array<Jsonpath>;

  export type LineArray = Array<Line>;

  export type LsegArray = Array<Lseg>;

  export type MacaddrArray = Array<Macaddr>;

  export type Macaddr8Array = Array<Macaddr8>;

  export type MoneyArray = Array<Money>;

  export type NameArray = Array<Name>;

  export type NumericArray = Array<Numeric>;

  export type NummultirangeArray = Array<Nummultirange>;

  export type NumrangeArray = Array<Numrange>;

  export type OidArray = Array<Oid>;

  export type OidvectorArray = Array<Oidvector>;

  export type PathArray = Array<Path>;

  export type PgAggregateArray = Array<PgAggregate>;

  export type PgAmArray = Array<PgAm>;

  export type PgAmopArray = Array<PgAmop>;

  export type PgAmprocArray = Array<PgAmproc>;

  export type PgAttrdefArray = Array<PgAttrdef>;

  export type PgAttributeArray = Array<PgAttribute>;

  export type PgAuthMembersArray = Array<PgAuthMembers>;

  export type PgAuthidArray = Array<PgAuthid>;

  export type PgAvailableExtensionVersionsArray =
    Array<PgAvailableExtensionVersions>;

  export type PgAvailableExtensionsArray = Array<PgAvailableExtensions>;

  export type PgBackendMemoryContextsArray = Array<PgBackendMemoryContexts>;

  export type PgCastArray = Array<PgCast>;

  export type PgClassArray = Array<PgClass>;

  export type PgCollationArray = Array<PgCollation>;

  export type PgConfigArray = Array<PgConfig>;

  export type PgConstraintArray = Array<PgConstraint>;

  export type PgConversionArray = Array<PgConversion>;

  export type PgCursorsArray = Array<PgCursors>;

  export type PgDatabaseArray = Array<PgDatabase>;

  export type PgDbRoleSettingArray = Array<PgDbRoleSetting>;

  export type PgDefaultAclArray = Array<PgDefaultAcl>;

  export type PgDependArray = Array<PgDepend>;

  export type PgDescriptionArray = Array<PgDescription>;

  export type PgEnumArray = Array<PgEnum>;

  export type PgEventTriggerArray = Array<PgEventTrigger>;

  export type PgExtensionArray = Array<PgExtension>;

  export type PgFileSettingsArray = Array<PgFileSettings>;

  export type PgForeignDataWrapperArray = Array<PgForeignDataWrapper>;

  export type PgForeignServerArray = Array<PgForeignServer>;

  export type PgForeignTableArray = Array<PgForeignTable>;

  export type PgGroupArray = Array<PgGroup>;

  export type PgHbaFileRulesArray = Array<PgHbaFileRules>;

  export type PgIdentFileMappingsArray = Array<PgIdentFileMappings>;

  export type PgIndexArray = Array<PgIndex>;

  export type PgIndexesArray = Array<PgIndexes>;

  export type PgInheritsArray = Array<PgInherits>;

  export type PgInitPrivsArray = Array<PgInitPrivs>;

  export type PgLanguageArray = Array<PgLanguage>;

  export type PgLargeobjectArray = Array<PgLargeobject>;

  export type PgLargeobjectMetadataArray = Array<PgLargeobjectMetadata>;

  export type PgLocksArray = Array<PgLocks>;

  export type PgLsnArray = Array<PgLsn>;

  export type PgMatviewsArray = Array<PgMatviews>;

  export type PgNamespaceArray = Array<PgNamespace>;

  export type PgOpclassArray = Array<PgOpclass>;

  export type PgOperatorArray = Array<PgOperator>;

  export type PgOpfamilyArray = Array<PgOpfamily>;

  export type PgParameterAclArray = Array<PgParameterAcl>;

  export type PgPartitionedTableArray = Array<PgPartitionedTable>;

  export type PgPoliciesArray = Array<PgPolicies>;

  export type PgPolicyArray = Array<PgPolicy>;

  export type PgPreparedStatementsArray = Array<PgPreparedStatements>;

  export type PgPreparedXactsArray = Array<PgPreparedXacts>;

  export type PgProcArray = Array<PgProc>;

  export type PgPublicationArray = Array<PgPublication>;

  export type PgPublicationNamespaceArray = Array<PgPublicationNamespace>;

  export type PgPublicationRelArray = Array<PgPublicationRel>;

  export type PgPublicationTablesArray = Array<PgPublicationTables>;

  export type PgRangeArray = Array<PgRange>;

  export type PgReplicationOriginArray = Array<PgReplicationOrigin>;

  export type PgReplicationOriginStatusArray = Array<PgReplicationOriginStatus>;

  export type PgReplicationSlotsArray = Array<PgReplicationSlots>;

  export type PgRewriteArray = Array<PgRewrite>;

  export type PgRolesArray = Array<PgRoles>;

  export type PgRulesArray = Array<PgRules>;

  export type PgSeclabelArray = Array<PgSeclabel>;

  export type PgSeclabelsArray = Array<PgSeclabels>;

  export type PgSequenceArray = Array<PgSequence>;

  export type PgSequencesArray = Array<PgSequences>;

  export type PgSettingsArray = Array<PgSettings>;

  export type PgShadowArray = Array<PgShadow>;

  export type PgShdependArray = Array<PgShdepend>;

  export type PgShdescriptionArray = Array<PgShdescription>;

  export type PgShmemAllocationsArray = Array<PgShmemAllocations>;

  export type PgShseclabelArray = Array<PgShseclabel>;

  export type PgSnapshotArray = Array<PgSnapshot>;

  export type PgStatActivityArray = Array<PgStatActivity>;

  export type PgStatAllIndexesArray = Array<PgStatAllIndexes>;

  export type PgStatAllTablesArray = Array<PgStatAllTables>;

  export type PgStatArchiverArray = Array<PgStatArchiver>;

  export type PgStatBgwriterArray = Array<PgStatBgwriter>;

  export type PgStatDatabaseArray = Array<PgStatDatabase>;

  export type PgStatDatabaseConflictsArray = Array<PgStatDatabaseConflicts>;

  export type PgStatGssapiArray = Array<PgStatGssapi>;

  export type PgStatIoArray = Array<PgStatIo>;

  export type PgStatProgressAnalyzeArray = Array<PgStatProgressAnalyze>;

  export type PgStatProgressBasebackupArray = Array<PgStatProgressBasebackup>;

  export type PgStatProgressClusterArray = Array<PgStatProgressCluster>;

  export type PgStatProgressCopyArray = Array<PgStatProgressCopy>;

  export type PgStatProgressCreateIndexArray = Array<PgStatProgressCreateIndex>;

  export type PgStatProgressVacuumArray = Array<PgStatProgressVacuum>;

  export type PgStatRecoveryPrefetchArray = Array<PgStatRecoveryPrefetch>;

  export type PgStatReplicationArray = Array<PgStatReplication>;

  export type PgStatReplicationSlotsArray = Array<PgStatReplicationSlots>;

  export type PgStatSlruArray = Array<PgStatSlru>;

  export type PgStatSslArray = Array<PgStatSsl>;

  export type PgStatSubscriptionArray = Array<PgStatSubscription>;

  export type PgStatSubscriptionStatsArray = Array<PgStatSubscriptionStats>;

  export type PgStatSysIndexesArray = Array<PgStatSysIndexes>;

  export type PgStatSysTablesArray = Array<PgStatSysTables>;

  export type PgStatUserFunctionsArray = Array<PgStatUserFunctions>;

  export type PgStatUserIndexesArray = Array<PgStatUserIndexes>;

  export type PgStatUserTablesArray = Array<PgStatUserTables>;

  export type PgStatWalArray = Array<PgStatWal>;

  export type PgStatWalReceiverArray = Array<PgStatWalReceiver>;

  export type PgStatXactAllTablesArray = Array<PgStatXactAllTables>;

  export type PgStatXactSysTablesArray = Array<PgStatXactSysTables>;

  export type PgStatXactUserFunctionsArray = Array<PgStatXactUserFunctions>;

  export type PgStatXactUserTablesArray = Array<PgStatXactUserTables>;

  export type PgStatioAllIndexesArray = Array<PgStatioAllIndexes>;

  export type PgStatioAllSequencesArray = Array<PgStatioAllSequences>;

  export type PgStatioAllTablesArray = Array<PgStatioAllTables>;

  export type PgStatioSysIndexesArray = Array<PgStatioSysIndexes>;

  export type PgStatioSysSequencesArray = Array<PgStatioSysSequences>;

  export type PgStatioSysTablesArray = Array<PgStatioSysTables>;

  export type PgStatioUserIndexesArray = Array<PgStatioUserIndexes>;

  export type PgStatioUserSequencesArray = Array<PgStatioUserSequences>;

  export type PgStatioUserTablesArray = Array<PgStatioUserTables>;

  export type PgStatisticArray = Array<PgStatistic>;

  export type PgStatisticExtArray = Array<PgStatisticExt>;

  export type PgStatisticExtDataArray = Array<PgStatisticExtData>;

  export type PgStatsArray = Array<PgStats>;

  export type PgStatsExtArray = Array<PgStatsExt>;

  export type PgStatsExtExprsArray = Array<PgStatsExtExprs>;

  export type PgSubscriptionArray = Array<PgSubscription>;

  export type PgSubscriptionRelArray = Array<PgSubscriptionRel>;

  export type PgTablesArray = Array<PgTables>;

  export type PgTablespaceArray = Array<PgTablespace>;

  export type PgTimezoneAbbrevsArray = Array<PgTimezoneAbbrevs>;

  export type PgTimezoneNamesArray = Array<PgTimezoneNames>;

  export type PgTransformArray = Array<PgTransform>;

  export type PgTriggerArray = Array<PgTrigger>;

  export type PgTsConfigArray = Array<PgTsConfig>;

  export type PgTsConfigMapArray = Array<PgTsConfigMap>;

  export type PgTsDictArray = Array<PgTsDict>;

  export type PgTsParserArray = Array<PgTsParser>;

  export type PgTsTemplateArray = Array<PgTsTemplate>;

  export type PgTypeArray = Array<PgType>;

  export type PgUserArray = Array<PgUser>;

  export type PgUserMappingArray = Array<PgUserMapping>;

  export type PgUserMappingsArray = Array<PgUserMappings>;

  export type PgViewsArray = Array<PgViews>;

  export type PointArray = Array<Point>;

  export type PolygonArray = Array<Polygon>;

  export type RecordArray = Array<Record>;

  export type RefcursorArray = Array<Refcursor>;

  export type RegclassArray = Array<Regclass>;

  export type RegcollationArray = Array<Regcollation>;

  export type RegconfigArray = Array<Regconfig>;

  export type RegdictionaryArray = Array<Regdictionary>;

  export type RegnamespaceArray = Array<Regnamespace>;

  export type RegoperArray = Array<Regoper>;

  export type RegoperatorArray = Array<Regoperator>;

  export type RegprocArray = Array<Regproc>;

  export type RegprocedureArray = Array<Regprocedure>;

  export type RegroleArray = Array<Regrole>;

  export type RegtypeArray = Array<Regtype>;

  export type TextArray = Array<Text>;

  export type TidArray = Array<Tid>;

  export type TimeArray = Array<Time>;

  export type TimestampArray = Array<Timestamp>;

  export type TimestamptzArray = Array<Timestamptz>;

  export type TimetzArray = Array<Timetz>;

  export type TsmultirangeArray = Array<Tsmultirange>;

  export type TsqueryArray = Array<Tsquery>;

  export type TsrangeArray = Array<Tsrange>;

  export type TstzmultirangeArray = Array<Tstzmultirange>;

  export type TstzrangeArray = Array<Tstzrange>;

  export type TsvectorArray = Array<Tsvector>;

  export type TxidSnapshotArray = Array<TxidSnapshot>;

  export type UuidArray = Array<Uuid>;

  export type VarbitArray = Array<Varbit>;

  export type VarcharArray = Array<Varchar>;

  export type XidArray = Array<Xid>;

  export type Xid8Array = Array<Xid8>;

  export type XmlArray = Array<Xml>;

  export type Aclitem = string;

  export type Any = void;

  export type Anyarray = void;

  export type Anycompatible = void;

  export type Anycompatiblearray = void;

  export type Anycompatiblemultirange = void;

  export type Anycompatiblenonarray = void;

  export type Anycompatiblerange = void;

  export type Anyelement = void;

  export type Anyenum = void;

  export type Anymultirange = void;

  export type Anynonarray = void;

  export type Anyrange = void;

  export type Bit = boolean;

  export type Bool = boolean;

  export type Box = {
    upperRight: Point;
    lowerLeft: Point;
  };

  export type Bpchar = string;

  export type Bytea = Uint8Array;

  export type Char = string;

  export type Cid = number;

  export type Cidr = Uint8Array;

  export type Circle = {
    center: Point;
    radius: number;
  };

  export type Cstring = void;

  export type Date = JsDate;

  export type Datemultirange = void;

  export type Daterange = [Date, Date];

  export type EventTrigger = void;

  export type FdwHandler = void;

  export type Float4 = number;

  export type Float8 = number;

  export type Gtsvector = Array<string>;

  export type IndexAmHandler = void;

  export type Inet = string;

  export type Int2 = number;

  export type Int2vector = Uint16Array;

  export type Int4 = number;

  export type Int4multirange = void;

  export type Int4range = [Int4, Int4];

  export type Int8 = number;

  export type Int8multirange = void;

  export type Int8range = [Int8, Int8];

  export type Internal = void;

  export type Interval = number;

  export type Json = JSONObject;

  export type Jsonb = JSONObject;

  export type Jsonpath = string;

  export type LanguageHandler = void;

  export type Line = {
    a: number;
    b: number;
    c: number;
  };

  export type Lseg = {
    from: Point;
    to: Point;
  };

  export type Macaddr = Uint8Array;

  export type Macaddr8 = Uint8Array;

  export type Money = number;

  export type Name = string;

  export type Numeric = number;

  export type Nummultirange = void;

  export type Numrange = [Numeric, Numeric];

  export type Oid = number;

  export type Oidvector = Array<number>;

  export type Path = Array<Point>;

  export interface PgAggregate {
    aggfnoid: Regproc;
    aggkind: Char;
    aggnumdirectargs: Int2;
    aggtransfn: Regproc;
    aggfinalfn: Regproc;
    aggcombinefn: Regproc;
    aggserialfn: Regproc;
    aggdeserialfn: Regproc;
    aggmtransfn: Regproc;
    aggminvtransfn: Regproc;
    aggmfinalfn: Regproc;
    aggfinalextra: Bool;
    aggmfinalextra: Bool;
    aggfinalmodify: Char;
    aggmfinalmodify: Char;
    aggsortop: Oid;
    aggtranstype: Oid;
    aggtransspace: Int4;
    aggmtranstype: Oid;
    aggmtransspace: Int4;
    agginitval?: Nullable<Text>;
    aggminitval?: Nullable<Text>;
  }

  export interface PgAm {
    oid: Oid;
    amname: Name;
    amhandler: Regproc;
    amtype: Char;
  }

  export interface PgAmop {
    oid: Oid;
    amopfamily: Oid;
    amoplefttype: Oid;
    amoprighttype: Oid;
    amopstrategy: Int2;
    amoppurpose: Char;
    amopopr: Oid;
    amopmethod: Oid;
    amopsortfamily: Oid;
  }

  export interface PgAmproc {
    oid: Oid;
    amprocfamily: Oid;
    amproclefttype: Oid;
    amprocrighttype: Oid;
    amprocnum: Int2;
    amproc: Regproc;
  }

  export interface PgAttrdef {
    oid: Oid;
    adrelid: Oid;
    adnum: Int2;
    adbin: PgNodeTree;
  }

  export interface PgAttribute {
    attrelid: Oid;
    attname: Name;
    atttypid: Oid;
    attlen: Int2;
    attnum: Int2;
    attcacheoff: Int4;
    atttypmod: Int4;
    attndims: Int2;
    attbyval: Bool;
    attalign: Char;
    attstorage: Char;
    attcompression: Char;
    attnotnull: Bool;
    atthasdef: Bool;
    atthasmissing: Bool;
    attidentity: Char;
    attgenerated: Char;
    attisdropped: Bool;
    attislocal: Bool;
    attinhcount: Int2;
    attstattarget: Int2;
    attcollation: Oid;
    attacl?: Nullable<AclitemArray>;
    attoptions?: Nullable<TextArray>;
    attfdwoptions?: Nullable<TextArray>;
    attmissingval?: Nullable<Anyarray>;
  }

  export interface PgAuthMembers {
    oid: Oid;
    roleid: Oid;
    member: Oid;
    grantor: Oid;
    adminOption: Bool;
    inheritOption: Bool;
    setOption: Bool;
  }

  export interface PgAuthid {
    oid: Oid;
    rolname: Name;
    rolsuper: Bool;
    rolinherit: Bool;
    rolcreaterole: Bool;
    rolcreatedb: Bool;
    rolcanlogin: Bool;
    rolreplication: Bool;
    rolbypassrls: Bool;
    rolconnlimit: Int4;
    rolpassword?: Nullable<Text>;
    rolvaliduntil?: Nullable<Timestamptz>;
  }

  export interface PgAvailableExtensionVersions {
    name?: Nullable<Name>;
    version?: Nullable<Text>;
    installed?: Nullable<Bool>;
    superuser?: Nullable<Bool>;
    trusted?: Nullable<Bool>;
    relocatable?: Nullable<Bool>;
    schema?: Nullable<Name>;
    requires?: Nullable<NameArray>;
    comment?: Nullable<Text>;
  }

  export interface PgAvailableExtensions {
    name?: Nullable<Name>;
    defaultVersion?: Nullable<Text>;
    installedVersion?: Nullable<Text>;
    comment?: Nullable<Text>;
  }

  export interface PgBackendMemoryContexts {
    name?: Nullable<Text>;
    ident?: Nullable<Text>;
    parent?: Nullable<Text>;
    level?: Nullable<Int4>;
    totalBytes?: Nullable<Int8>;
    totalNblocks?: Nullable<Int8>;
    freeBytes?: Nullable<Int8>;
    freeChunks?: Nullable<Int8>;
    usedBytes?: Nullable<Int8>;
  }

  /**
   * FIXME: pg_brin_bloom_summary did not resolve to a base type
   */
  export type PgBrinBloomSummary = string;

  /**
   * FIXME: pg_brin_minmax_multi_summary did not resolve to a base type
   */
  export type PgBrinMinmaxMultiSummary = string;

  export interface PgCast {
    oid: Oid;
    castsource: Oid;
    casttarget: Oid;
    castfunc: Oid;
    castcontext: Char;
    castmethod: Char;
  }

  export interface PgClass {
    oid: Oid;
    relname: Name;
    relnamespace: Oid;
    reltype: Oid;
    reloftype: Oid;
    relowner: Oid;
    relam: Oid;
    relfilenode: Oid;
    reltablespace: Oid;
    relpages: Int4;
    reltuples: Float4;
    relallvisible: Int4;
    reltoastrelid: Oid;
    relhasindex: Bool;
    relisshared: Bool;
    relpersistence: Char;
    relkind: Char;
    relnatts: Int2;
    relchecks: Int2;
    relhasrules: Bool;
    relhastriggers: Bool;
    relhassubclass: Bool;
    relrowsecurity: Bool;
    relforcerowsecurity: Bool;
    relispopulated: Bool;
    relreplident: Char;
    relispartition: Bool;
    relrewrite: Oid;
    relfrozenxid: Xid;
    relminmxid: Xid;
    relacl?: Nullable<AclitemArray>;
    reloptions?: Nullable<TextArray>;
    relpartbound?: Nullable<PgNodeTree>;
  }

  export interface PgCollation {
    oid: Oid;
    collname: Name;
    collnamespace: Oid;
    collowner: Oid;
    collprovider: Char;
    collisdeterministic: Bool;
    collencoding: Int4;
    collcollate?: Nullable<Text>;
    collctype?: Nullable<Text>;
    colliculocale?: Nullable<Text>;
    collicurules?: Nullable<Text>;
    collversion?: Nullable<Text>;
  }

  export interface PgConfig {
    name?: Nullable<Text>;
    setting?: Nullable<Text>;
  }

  export interface PgConstraint {
    oid: Oid;
    conname: Name;
    connamespace: Oid;
    contype: Char;
    condeferrable: Bool;
    condeferred: Bool;
    convalidated: Bool;
    conrelid: Oid;
    contypid: Oid;
    conindid: Oid;
    conparentid: Oid;
    confrelid: Oid;
    confupdtype: Char;
    confdeltype: Char;
    confmatchtype: Char;
    conislocal: Bool;
    coninhcount: Int2;
    connoinherit: Bool;
    conkey?: Nullable<Int2Array>;
    confkey?: Nullable<Int2Array>;
    conpfeqop?: Nullable<OidArray>;
    conppeqop?: Nullable<OidArray>;
    conffeqop?: Nullable<OidArray>;
    confdelsetcols?: Nullable<Int2Array>;
    conexclop?: Nullable<OidArray>;
    conbin?: Nullable<PgNodeTree>;
  }

  export interface PgConversion {
    oid: Oid;
    conname: Name;
    connamespace: Oid;
    conowner: Oid;
    conforencoding: Int4;
    contoencoding: Int4;
    conproc: Regproc;
    condefault: Bool;
  }

  export interface PgCursors {
    name?: Nullable<Text>;
    statement?: Nullable<Text>;
    isHoldable?: Nullable<Bool>;
    isBinary?: Nullable<Bool>;
    isScrollable?: Nullable<Bool>;
    creationTime?: Nullable<Timestamptz>;
  }

  export interface PgDatabase {
    oid: Oid;
    datname: Name;
    datdba: Oid;
    encoding: Int4;
    datlocprovider: Char;
    datistemplate: Bool;
    datallowconn: Bool;
    datconnlimit: Int4;
    datfrozenxid: Xid;
    datminmxid: Xid;
    dattablespace: Oid;
    datcollate: Text;
    datctype: Text;
    daticulocale?: Nullable<Text>;
    daticurules?: Nullable<Text>;
    datcollversion?: Nullable<Text>;
    datacl?: Nullable<AclitemArray>;
  }

  export interface PgDbRoleSetting {
    setdatabase: Oid;
    setrole: Oid;
    setconfig?: Nullable<TextArray>;
  }

  export type PgDdlCommand = void;

  export interface PgDefaultAcl {
    oid: Oid;
    defaclrole: Oid;
    defaclnamespace: Oid;
    defaclobjtype: Char;
    defaclacl: AclitemArray;
  }

  export interface PgDepend {
    classid: Oid;
    objid: Oid;
    objsubid: Int4;
    refclassid: Oid;
    refobjid: Oid;
    refobjsubid: Int4;
    deptype: Char;
  }

  /**
   * FIXME: pg_dependencies did not resolve to a base type
   */
  export type PgDependencies = string;

  export interface PgDescription {
    objoid: Oid;
    classoid: Oid;
    objsubid: Int4;
    description: Text;
  }

  export interface PgEnum {
    oid: Oid;
    enumtypid: Oid;
    enumsortorder: Float4;
    enumlabel: Name;
  }

  export interface PgEventTrigger {
    oid: Oid;
    evtname: Name;
    evtevent: Name;
    evtowner: Oid;
    evtfoid: Oid;
    evtenabled: Char;
    evttags?: Nullable<TextArray>;
  }

  export interface PgExtension {
    oid: Oid;
    extname: Name;
    extowner: Oid;
    extnamespace: Oid;
    extrelocatable: Bool;
    extversion: Text;
    extconfig?: Nullable<OidArray>;
    extcondition?: Nullable<TextArray>;
  }

  export interface PgFileSettings {
    sourcefile?: Nullable<Text>;
    sourceline?: Nullable<Int4>;
    seqno?: Nullable<Int4>;
    name?: Nullable<Text>;
    setting?: Nullable<Text>;
    applied?: Nullable<Bool>;
    error?: Nullable<Text>;
  }

  export interface PgForeignDataWrapper {
    oid: Oid;
    fdwname: Name;
    fdwowner: Oid;
    fdwhandler: Oid;
    fdwvalidator: Oid;
    fdwacl?: Nullable<AclitemArray>;
    fdwoptions?: Nullable<TextArray>;
  }

  export interface PgForeignServer {
    oid: Oid;
    srvname: Name;
    srvowner: Oid;
    srvfdw: Oid;
    srvtype?: Nullable<Text>;
    srvversion?: Nullable<Text>;
    srvacl?: Nullable<AclitemArray>;
    srvoptions?: Nullable<TextArray>;
  }

  export interface PgForeignTable {
    ftrelid: Oid;
    ftserver: Oid;
    ftoptions?: Nullable<TextArray>;
  }

  export interface PgGroup {
    groname?: Nullable<Name>;
    grosysid?: Nullable<Oid>;
    grolist?: Nullable<OidArray>;
  }

  export interface PgHbaFileRules {
    ruleNumber?: Nullable<Int4>;
    fileName?: Nullable<Text>;
    lineNumber?: Nullable<Int4>;
    type?: Nullable<Text>;
    database?: Nullable<TextArray>;
    userName?: Nullable<TextArray>;
    address?: Nullable<Text>;
    netmask?: Nullable<Text>;
    authMethod?: Nullable<Text>;
    options?: Nullable<TextArray>;
    error?: Nullable<Text>;
  }

  export interface PgIdentFileMappings {
    mapNumber?: Nullable<Int4>;
    fileName?: Nullable<Text>;
    lineNumber?: Nullable<Int4>;
    mapName?: Nullable<Text>;
    sysName?: Nullable<Text>;
    pgUsername?: Nullable<Text>;
    error?: Nullable<Text>;
  }

  export interface PgIndex {
    indexrelid: Oid;
    indrelid: Oid;
    indnatts: Int2;
    indnkeyatts: Int2;
    indisunique: Bool;
    indnullsnotdistinct: Bool;
    indisprimary: Bool;
    indisexclusion: Bool;
    indimmediate: Bool;
    indisclustered: Bool;
    indisvalid: Bool;
    indcheckxmin: Bool;
    indisready: Bool;
    indislive: Bool;
    indisreplident: Bool;
    indkey: Int2vector;
    indcollation: Oidvector;
    indclass: Oidvector;
    indoption: Int2vector;
    indexprs?: Nullable<PgNodeTree>;
    indpred?: Nullable<PgNodeTree>;
  }

  export interface PgIndexes {
    schemaname?: Nullable<Name>;
    tablename?: Nullable<Name>;
    indexname?: Nullable<Name>;
    tablespace?: Nullable<Name>;
    indexdef?: Nullable<Text>;
  }

  export interface PgInherits {
    inhrelid: Oid;
    inhparent: Oid;
    inhseqno: Int4;
    inhdetachpending: Bool;
  }

  export interface PgInitPrivs {
    objoid: Oid;
    classoid: Oid;
    objsubid: Int4;
    privtype: Char;
    initprivs: AclitemArray;
  }

  export interface PgLanguage {
    oid: Oid;
    lanname: Name;
    lanowner: Oid;
    lanispl: Bool;
    lanpltrusted: Bool;
    lanplcallfoid: Oid;
    laninline: Oid;
    lanvalidator: Oid;
    lanacl?: Nullable<AclitemArray>;
  }

  export interface PgLargeobject {
    loid: Oid;
    pageno: Int4;
    data: Bytea;
  }

  export interface PgLargeobjectMetadata {
    oid: Oid;
    lomowner: Oid;
    lomacl?: Nullable<AclitemArray>;
  }

  export interface PgLocks {
    locktype?: Nullable<Text>;
    database?: Nullable<Oid>;
    relation?: Nullable<Oid>;
    page?: Nullable<Int4>;
    tuple?: Nullable<Int2>;
    virtualxid?: Nullable<Text>;
    transactionid?: Nullable<Xid>;
    classid?: Nullable<Oid>;
    objid?: Nullable<Oid>;
    objsubid?: Nullable<Int2>;
    virtualtransaction?: Nullable<Text>;
    pid?: Nullable<Int4>;
    mode?: Nullable<Text>;
    granted?: Nullable<Bool>;
    fastpath?: Nullable<Bool>;
    waitstart?: Nullable<Timestamptz>;
  }

  /**
   * FIXME: pg_lsn did not resolve to a base type
   */
  export type PgLsn = string;

  export interface PgMatviews {
    schemaname?: Nullable<Name>;
    matviewname?: Nullable<Name>;
    matviewowner?: Nullable<Name>;
    tablespace?: Nullable<Name>;
    hasindexes?: Nullable<Bool>;
    ispopulated?: Nullable<Bool>;
    definition?: Nullable<Text>;
  }

  /**
   * FIXME: pg_mcv_list did not resolve to a base type
   */
  export type PgMcvList = string;

  export interface PgNamespace {
    oid: Oid;
    nspname: Name;
    nspowner: Oid;
    nspacl?: Nullable<AclitemArray>;
  }

  /**
   * FIXME: pg_ndistinct did not resolve to a base type
   */
  export type PgNdistinct = string;

  /**
   * FIXME: pg_node_tree did not resolve to a base type
   */
  export type PgNodeTree = string;

  export interface PgOpclass {
    oid: Oid;
    opcmethod: Oid;
    opcname: Name;
    opcnamespace: Oid;
    opcowner: Oid;
    opcfamily: Oid;
    opcintype: Oid;
    opcdefault: Bool;
    opckeytype: Oid;
  }

  export interface PgOperator {
    oid: Oid;
    oprname: Name;
    oprnamespace: Oid;
    oprowner: Oid;
    oprkind: Char;
    oprcanmerge: Bool;
    oprcanhash: Bool;
    oprleft: Oid;
    oprright: Oid;
    oprresult: Oid;
    oprcom: Oid;
    oprnegate: Oid;
    oprcode: Regproc;
    oprrest: Regproc;
    oprjoin: Regproc;
  }

  export interface PgOpfamily {
    oid: Oid;
    opfmethod: Oid;
    opfname: Name;
    opfnamespace: Oid;
    opfowner: Oid;
  }

  export interface PgParameterAcl {
    oid: Oid;
    parname: Text;
    paracl?: Nullable<AclitemArray>;
  }

  export interface PgPartitionedTable {
    partrelid: Oid;
    partstrat: Char;
    partnatts: Int2;
    partdefid: Oid;
    partattrs: Int2vector;
    partclass: Oidvector;
    partcollation: Oidvector;
    partexprs?: Nullable<PgNodeTree>;
  }

  export interface PgPolicies {
    schemaname?: Nullable<Name>;
    tablename?: Nullable<Name>;
    policyname?: Nullable<Name>;
    permissive?: Nullable<Text>;
    roles?: Nullable<NameArray>;
    cmd?: Nullable<Text>;
    qual?: Nullable<Text>;
    withCheck?: Nullable<Text>;
  }

  export interface PgPolicy {
    oid: Oid;
    polname: Name;
    polrelid: Oid;
    polcmd: Char;
    polpermissive: Bool;
    polroles: OidArray;
    polqual?: Nullable<PgNodeTree>;
    polwithcheck?: Nullable<PgNodeTree>;
  }

  export interface PgPreparedStatements {
    name?: Nullable<Text>;
    statement?: Nullable<Text>;
    prepareTime?: Nullable<Timestamptz>;
    parameterTypes?: Nullable<RegtypeArray>;
    resultTypes?: Nullable<RegtypeArray>;
    fromSql?: Nullable<Bool>;
    genericPlans?: Nullable<Int8>;
    customPlans?: Nullable<Int8>;
  }

  export interface PgPreparedXacts {
    transaction?: Nullable<Xid>;
    gid?: Nullable<Text>;
    prepared?: Nullable<Timestamptz>;
    owner?: Nullable<Name>;
    database?: Nullable<Name>;
  }

  export interface PgProc {
    oid: Oid;
    proname: Name;
    pronamespace: Oid;
    proowner: Oid;
    prolang: Oid;
    procost: Float4;
    prorows: Float4;
    provariadic: Oid;
    prosupport: Regproc;
    prokind: Char;
    prosecdef: Bool;
    proleakproof: Bool;
    proisstrict: Bool;
    proretset: Bool;
    provolatile: Char;
    proparallel: Char;
    pronargs: Int2;
    pronargdefaults: Int2;
    prorettype: Oid;
    proargtypes: Oidvector;
    proallargtypes?: Nullable<OidArray>;
    proargmodes?: Nullable<CharArray>;
    proargnames?: Nullable<TextArray>;
    proargdefaults?: Nullable<PgNodeTree>;
    protrftypes?: Nullable<OidArray>;
    prosrc: Text;
    probin?: Nullable<Text>;
    prosqlbody?: Nullable<PgNodeTree>;
    proconfig?: Nullable<TextArray>;
    proacl?: Nullable<AclitemArray>;
  }

  export interface PgPublication {
    oid: Oid;
    pubname: Name;
    pubowner: Oid;
    puballtables: Bool;
    pubinsert: Bool;
    pubupdate: Bool;
    pubdelete: Bool;
    pubtruncate: Bool;
    pubviaroot: Bool;
  }

  export interface PgPublicationNamespace {
    oid: Oid;
    pnpubid: Oid;
    pnnspid: Oid;
  }

  export interface PgPublicationRel {
    oid: Oid;
    prpubid: Oid;
    prrelid: Oid;
    prqual?: Nullable<PgNodeTree>;
    prattrs?: Nullable<Int2vector>;
  }

  export interface PgPublicationTables {
    pubname?: Nullable<Name>;
    schemaname?: Nullable<Name>;
    tablename?: Nullable<Name>;
    attnames?: Nullable<NameArray>;
    rowfilter?: Nullable<Text>;
  }

  export interface PgRange {
    rngtypid: Oid;
    rngsubtype: Oid;
    rngmultitypid: Oid;
    rngcollation: Oid;
    rngsubopc: Oid;
    rngcanonical: Regproc;
    rngsubdiff: Regproc;
  }

  export interface PgReplicationOrigin {
    roident: Oid;
    roname: Text;
  }

  export interface PgReplicationOriginStatus {
    localId?: Nullable<Oid>;
    externalId?: Nullable<Text>;
    remoteLsn?: Nullable<PgLsn>;
    localLsn?: Nullable<PgLsn>;
  }

  export interface PgReplicationSlots {
    slotName?: Nullable<Name>;
    plugin?: Nullable<Name>;
    slotType?: Nullable<Text>;
    datoid?: Nullable<Oid>;
    database?: Nullable<Name>;
    temporary?: Nullable<Bool>;
    active?: Nullable<Bool>;
    activePid?: Nullable<Int4>;
    xmin?: Nullable<Xid>;
    catalogXmin?: Nullable<Xid>;
    restartLsn?: Nullable<PgLsn>;
    confirmedFlushLsn?: Nullable<PgLsn>;
    walStatus?: Nullable<Text>;
    safeWalSize?: Nullable<Int8>;
    twoPhase?: Nullable<Bool>;
    conflicting?: Nullable<Bool>;
  }

  export interface PgRewrite {
    oid: Oid;
    rulename: Name;
    evClass: Oid;
    evType: Char;
    evEnabled: Char;
    isInstead: Bool;
    evQual: PgNodeTree;
    evAction: PgNodeTree;
  }

  export interface PgRoles {
    rolname?: Nullable<Name>;
    rolsuper?: Nullable<Bool>;
    rolinherit?: Nullable<Bool>;
    rolcreaterole?: Nullable<Bool>;
    rolcreatedb?: Nullable<Bool>;
    rolcanlogin?: Nullable<Bool>;
    rolreplication?: Nullable<Bool>;
    rolconnlimit?: Nullable<Int4>;
    rolpassword?: Nullable<Text>;
    rolvaliduntil?: Nullable<Timestamptz>;
    rolbypassrls?: Nullable<Bool>;
    rolconfig?: Nullable<TextArray>;
    oid?: Nullable<Oid>;
  }

  export interface PgRules {
    schemaname?: Nullable<Name>;
    tablename?: Nullable<Name>;
    rulename?: Nullable<Name>;
    definition?: Nullable<Text>;
  }

  export interface PgSeclabel {
    objoid: Oid;
    classoid: Oid;
    objsubid: Int4;
    provider: Text;
    label: Text;
  }

  export interface PgSeclabels {
    objoid?: Nullable<Oid>;
    classoid?: Nullable<Oid>;
    objsubid?: Nullable<Int4>;
    objtype?: Nullable<Text>;
    objnamespace?: Nullable<Oid>;
    objname?: Nullable<Text>;
    provider?: Nullable<Text>;
    label?: Nullable<Text>;
  }

  export interface PgSequence {
    seqrelid: Oid;
    seqtypid: Oid;
    seqstart: Int8;
    seqincrement: Int8;
    seqmax: Int8;
    seqmin: Int8;
    seqcache: Int8;
    seqcycle: Bool;
  }

  export interface PgSequences {
    schemaname?: Nullable<Name>;
    sequencename?: Nullable<Name>;
    sequenceowner?: Nullable<Name>;
    dataType?: Nullable<Regtype>;
    startValue?: Nullable<Int8>;
    minValue?: Nullable<Int8>;
    maxValue?: Nullable<Int8>;
    incrementBy?: Nullable<Int8>;
    cycle?: Nullable<Bool>;
    cacheSize?: Nullable<Int8>;
    lastValue?: Nullable<Int8>;
  }

  export interface PgSettings {
    name?: Nullable<Text>;
    setting?: Nullable<Text>;
    unit?: Nullable<Text>;
    category?: Nullable<Text>;
    shortDesc?: Nullable<Text>;
    extraDesc?: Nullable<Text>;
    context?: Nullable<Text>;
    vartype?: Nullable<Text>;
    source?: Nullable<Text>;
    minVal?: Nullable<Text>;
    maxVal?: Nullable<Text>;
    enumvals?: Nullable<TextArray>;
    bootVal?: Nullable<Text>;
    resetVal?: Nullable<Text>;
    sourcefile?: Nullable<Text>;
    sourceline?: Nullable<Int4>;
    pendingRestart?: Nullable<Bool>;
  }

  export interface PgShadow {
    usename?: Nullable<Name>;
    usesysid?: Nullable<Oid>;
    usecreatedb?: Nullable<Bool>;
    usesuper?: Nullable<Bool>;
    userepl?: Nullable<Bool>;
    usebypassrls?: Nullable<Bool>;
    passwd?: Nullable<Text>;
    valuntil?: Nullable<Timestamptz>;
    useconfig?: Nullable<TextArray>;
  }

  export interface PgShdepend {
    dbid: Oid;
    classid: Oid;
    objid: Oid;
    objsubid: Int4;
    refclassid: Oid;
    refobjid: Oid;
    deptype: Char;
  }

  export interface PgShdescription {
    objoid: Oid;
    classoid: Oid;
    description: Text;
  }

  export interface PgShmemAllocations {
    name?: Nullable<Text>;
    off?: Nullable<Int8>;
    size?: Nullable<Int8>;
    allocatedSize?: Nullable<Int8>;
  }

  export interface PgShseclabel {
    objoid: Oid;
    classoid: Oid;
    provider: Text;
    label: Text;
  }

  /**
   * FIXME: pg_snapshot did not resolve to a base type
   */
  export type PgSnapshot = string;

  export interface PgStatActivity {
    datid?: Nullable<Oid>;
    datname?: Nullable<Name>;
    pid?: Nullable<Int4>;
    leaderPid?: Nullable<Int4>;
    usesysid?: Nullable<Oid>;
    usename?: Nullable<Name>;
    applicationName?: Nullable<Text>;
    clientAddr?: Nullable<Inet>;
    clientHostname?: Nullable<Text>;
    clientPort?: Nullable<Int4>;
    backendStart?: Nullable<Timestamptz>;
    xactStart?: Nullable<Timestamptz>;
    queryStart?: Nullable<Timestamptz>;
    stateChange?: Nullable<Timestamptz>;
    waitEventType?: Nullable<Text>;
    waitEvent?: Nullable<Text>;
    state?: Nullable<Text>;
    backendXid?: Nullable<Xid>;
    backendXmin?: Nullable<Xid>;
    queryId?: Nullable<Int8>;
    query?: Nullable<Text>;
    backendType?: Nullable<Text>;
  }

  export interface PgStatAllIndexes {
    relid?: Nullable<Oid>;
    indexrelid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    indexrelname?: Nullable<Name>;
    idxScan?: Nullable<Int8>;
    lastIdxScan?: Nullable<Timestamptz>;
    idxTupRead?: Nullable<Int8>;
    idxTupFetch?: Nullable<Int8>;
  }

  export interface PgStatAllTables {
    relid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    seqScan?: Nullable<Int8>;
    lastSeqScan?: Nullable<Timestamptz>;
    seqTupRead?: Nullable<Int8>;
    idxScan?: Nullable<Int8>;
    lastIdxScan?: Nullable<Timestamptz>;
    idxTupFetch?: Nullable<Int8>;
    nTupIns?: Nullable<Int8>;
    nTupUpd?: Nullable<Int8>;
    nTupDel?: Nullable<Int8>;
    nTupHotUpd?: Nullable<Int8>;
    nTupNewpageUpd?: Nullable<Int8>;
    nLiveTup?: Nullable<Int8>;
    nDeadTup?: Nullable<Int8>;
    nModSinceAnalyze?: Nullable<Int8>;
    nInsSinceVacuum?: Nullable<Int8>;
    lastVacuum?: Nullable<Timestamptz>;
    lastAutovacuum?: Nullable<Timestamptz>;
    lastAnalyze?: Nullable<Timestamptz>;
    lastAutoanalyze?: Nullable<Timestamptz>;
    vacuumCount?: Nullable<Int8>;
    autovacuumCount?: Nullable<Int8>;
    analyzeCount?: Nullable<Int8>;
    autoanalyzeCount?: Nullable<Int8>;
  }

  export interface PgStatArchiver {
    archivedCount?: Nullable<Int8>;
    lastArchivedWal?: Nullable<Text>;
    lastArchivedTime?: Nullable<Timestamptz>;
    failedCount?: Nullable<Int8>;
    lastFailedWal?: Nullable<Text>;
    lastFailedTime?: Nullable<Timestamptz>;
    statsReset?: Nullable<Timestamptz>;
  }

  export interface PgStatBgwriter {
    checkpointsTimed?: Nullable<Int8>;
    checkpointsReq?: Nullable<Int8>;
    checkpointWriteTime?: Nullable<Float8>;
    checkpointSyncTime?: Nullable<Float8>;
    buffersCheckpoint?: Nullable<Int8>;
    buffersClean?: Nullable<Int8>;
    maxwrittenClean?: Nullable<Int8>;
    buffersBackend?: Nullable<Int8>;
    buffersBackendFsync?: Nullable<Int8>;
    buffersAlloc?: Nullable<Int8>;
    statsReset?: Nullable<Timestamptz>;
  }

  export interface PgStatDatabase {
    datid?: Nullable<Oid>;
    datname?: Nullable<Name>;
    numbackends?: Nullable<Int4>;
    xactCommit?: Nullable<Int8>;
    xactRollback?: Nullable<Int8>;
    blksRead?: Nullable<Int8>;
    blksHit?: Nullable<Int8>;
    tupReturned?: Nullable<Int8>;
    tupFetched?: Nullable<Int8>;
    tupInserted?: Nullable<Int8>;
    tupUpdated?: Nullable<Int8>;
    tupDeleted?: Nullable<Int8>;
    conflicts?: Nullable<Int8>;
    tempFiles?: Nullable<Int8>;
    tempBytes?: Nullable<Int8>;
    deadlocks?: Nullable<Int8>;
    checksumFailures?: Nullable<Int8>;
    checksumLastFailure?: Nullable<Timestamptz>;
    blkReadTime?: Nullable<Float8>;
    blkWriteTime?: Nullable<Float8>;
    sessionTime?: Nullable<Float8>;
    activeTime?: Nullable<Float8>;
    idleInTransactionTime?: Nullable<Float8>;
    sessions?: Nullable<Int8>;
    sessionsAbandoned?: Nullable<Int8>;
    sessionsFatal?: Nullable<Int8>;
    sessionsKilled?: Nullable<Int8>;
    statsReset?: Nullable<Timestamptz>;
  }

  export interface PgStatDatabaseConflicts {
    datid?: Nullable<Oid>;
    datname?: Nullable<Name>;
    conflTablespace?: Nullable<Int8>;
    conflLock?: Nullable<Int8>;
    conflSnapshot?: Nullable<Int8>;
    conflBufferpin?: Nullable<Int8>;
    conflDeadlock?: Nullable<Int8>;
    conflActiveLogicalslot?: Nullable<Int8>;
  }

  export interface PgStatGssapi {
    pid?: Nullable<Int4>;
    gssAuthenticated?: Nullable<Bool>;
    principal?: Nullable<Text>;
    encrypted?: Nullable<Bool>;
    credentialsDelegated?: Nullable<Bool>;
  }

  export interface PgStatIo {
    backendType?: Nullable<Text>;
    object?: Nullable<Text>;
    context?: Nullable<Text>;
    reads?: Nullable<Int8>;
    readTime?: Nullable<Float8>;
    writes?: Nullable<Int8>;
    writeTime?: Nullable<Float8>;
    writebacks?: Nullable<Int8>;
    writebackTime?: Nullable<Float8>;
    extends?: Nullable<Int8>;
    extendTime?: Nullable<Float8>;
    opBytes?: Nullable<Int8>;
    hits?: Nullable<Int8>;
    evictions?: Nullable<Int8>;
    reuses?: Nullable<Int8>;
    fsyncs?: Nullable<Int8>;
    fsyncTime?: Nullable<Float8>;
    statsReset?: Nullable<Timestamptz>;
  }

  export interface PgStatProgressAnalyze {
    pid?: Nullable<Int4>;
    datid?: Nullable<Oid>;
    datname?: Nullable<Name>;
    relid?: Nullable<Oid>;
    phase?: Nullable<Text>;
    sampleBlksTotal?: Nullable<Int8>;
    sampleBlksScanned?: Nullable<Int8>;
    extStatsTotal?: Nullable<Int8>;
    extStatsComputed?: Nullable<Int8>;
    childTablesTotal?: Nullable<Int8>;
    childTablesDone?: Nullable<Int8>;
    currentChildTableRelid?: Nullable<Oid>;
  }

  export interface PgStatProgressBasebackup {
    pid?: Nullable<Int4>;
    phase?: Nullable<Text>;
    backupTotal?: Nullable<Int8>;
    backupStreamed?: Nullable<Int8>;
    tablespacesTotal?: Nullable<Int8>;
    tablespacesStreamed?: Nullable<Int8>;
  }

  export interface PgStatProgressCluster {
    pid?: Nullable<Int4>;
    datid?: Nullable<Oid>;
    datname?: Nullable<Name>;
    relid?: Nullable<Oid>;
    command?: Nullable<Text>;
    phase?: Nullable<Text>;
    clusterIndexRelid?: Nullable<Oid>;
    heapTuplesScanned?: Nullable<Int8>;
    heapTuplesWritten?: Nullable<Int8>;
    heapBlksTotal?: Nullable<Int8>;
    heapBlksScanned?: Nullable<Int8>;
    indexRebuildCount?: Nullable<Int8>;
  }

  export interface PgStatProgressCopy {
    pid?: Nullable<Int4>;
    datid?: Nullable<Oid>;
    datname?: Nullable<Name>;
    relid?: Nullable<Oid>;
    command?: Nullable<Text>;
    type?: Nullable<Text>;
    bytesProcessed?: Nullable<Int8>;
    bytesTotal?: Nullable<Int8>;
    tuplesProcessed?: Nullable<Int8>;
    tuplesExcluded?: Nullable<Int8>;
  }

  export interface PgStatProgressCreateIndex {
    pid?: Nullable<Int4>;
    datid?: Nullable<Oid>;
    datname?: Nullable<Name>;
    relid?: Nullable<Oid>;
    indexRelid?: Nullable<Oid>;
    command?: Nullable<Text>;
    phase?: Nullable<Text>;
    lockersTotal?: Nullable<Int8>;
    lockersDone?: Nullable<Int8>;
    currentLockerPid?: Nullable<Int8>;
    blocksTotal?: Nullable<Int8>;
    blocksDone?: Nullable<Int8>;
    tuplesTotal?: Nullable<Int8>;
    tuplesDone?: Nullable<Int8>;
    partitionsTotal?: Nullable<Int8>;
    partitionsDone?: Nullable<Int8>;
  }

  export interface PgStatProgressVacuum {
    pid?: Nullable<Int4>;
    datid?: Nullable<Oid>;
    datname?: Nullable<Name>;
    relid?: Nullable<Oid>;
    phase?: Nullable<Text>;
    heapBlksTotal?: Nullable<Int8>;
    heapBlksScanned?: Nullable<Int8>;
    heapBlksVacuumed?: Nullable<Int8>;
    indexVacuumCount?: Nullable<Int8>;
    maxDeadTuples?: Nullable<Int8>;
    numDeadTuples?: Nullable<Int8>;
  }

  export interface PgStatRecoveryPrefetch {
    statsReset?: Nullable<Timestamptz>;
    prefetch?: Nullable<Int8>;
    hit?: Nullable<Int8>;
    skipInit?: Nullable<Int8>;
    skipNew?: Nullable<Int8>;
    skipFpw?: Nullable<Int8>;
    skipRep?: Nullable<Int8>;
    walDistance?: Nullable<Int4>;
    blockDistance?: Nullable<Int4>;
    ioDepth?: Nullable<Int4>;
  }

  export interface PgStatReplication {
    pid?: Nullable<Int4>;
    usesysid?: Nullable<Oid>;
    usename?: Nullable<Name>;
    applicationName?: Nullable<Text>;
    clientAddr?: Nullable<Inet>;
    clientHostname?: Nullable<Text>;
    clientPort?: Nullable<Int4>;
    backendStart?: Nullable<Timestamptz>;
    backendXmin?: Nullable<Xid>;
    state?: Nullable<Text>;
    sentLsn?: Nullable<PgLsn>;
    writeLsn?: Nullable<PgLsn>;
    flushLsn?: Nullable<PgLsn>;
    replayLsn?: Nullable<PgLsn>;
    writeLag?: Nullable<Interval>;
    flushLag?: Nullable<Interval>;
    replayLag?: Nullable<Interval>;
    syncPriority?: Nullable<Int4>;
    syncState?: Nullable<Text>;
    replyTime?: Nullable<Timestamptz>;
  }

  export interface PgStatReplicationSlots {
    slotName?: Nullable<Text>;
    spillTxns?: Nullable<Int8>;
    spillCount?: Nullable<Int8>;
    spillBytes?: Nullable<Int8>;
    streamTxns?: Nullable<Int8>;
    streamCount?: Nullable<Int8>;
    streamBytes?: Nullable<Int8>;
    totalTxns?: Nullable<Int8>;
    totalBytes?: Nullable<Int8>;
    statsReset?: Nullable<Timestamptz>;
  }

  export interface PgStatSlru {
    name?: Nullable<Text>;
    blksZeroed?: Nullable<Int8>;
    blksHit?: Nullable<Int8>;
    blksRead?: Nullable<Int8>;
    blksWritten?: Nullable<Int8>;
    blksExists?: Nullable<Int8>;
    flushes?: Nullable<Int8>;
    truncates?: Nullable<Int8>;
    statsReset?: Nullable<Timestamptz>;
  }

  export interface PgStatSsl {
    pid?: Nullable<Int4>;
    ssl?: Nullable<Bool>;
    version?: Nullable<Text>;
    cipher?: Nullable<Text>;
    bits?: Nullable<Int4>;
    clientDn?: Nullable<Text>;
    clientSerial?: Nullable<Numeric>;
    issuerDn?: Nullable<Text>;
  }

  export interface PgStatSubscription {
    subid?: Nullable<Oid>;
    subname?: Nullable<Name>;
    pid?: Nullable<Int4>;
    leaderPid?: Nullable<Int4>;
    relid?: Nullable<Oid>;
    receivedLsn?: Nullable<PgLsn>;
    lastMsgSendTime?: Nullable<Timestamptz>;
    lastMsgReceiptTime?: Nullable<Timestamptz>;
    latestEndLsn?: Nullable<PgLsn>;
    latestEndTime?: Nullable<Timestamptz>;
  }

  export interface PgStatSubscriptionStats {
    subid?: Nullable<Oid>;
    subname?: Nullable<Name>;
    applyErrorCount?: Nullable<Int8>;
    syncErrorCount?: Nullable<Int8>;
    statsReset?: Nullable<Timestamptz>;
  }

  export interface PgStatSysIndexes {
    relid?: Nullable<Oid>;
    indexrelid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    indexrelname?: Nullable<Name>;
    idxScan?: Nullable<Int8>;
    lastIdxScan?: Nullable<Timestamptz>;
    idxTupRead?: Nullable<Int8>;
    idxTupFetch?: Nullable<Int8>;
  }

  export interface PgStatSysTables {
    relid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    seqScan?: Nullable<Int8>;
    lastSeqScan?: Nullable<Timestamptz>;
    seqTupRead?: Nullable<Int8>;
    idxScan?: Nullable<Int8>;
    lastIdxScan?: Nullable<Timestamptz>;
    idxTupFetch?: Nullable<Int8>;
    nTupIns?: Nullable<Int8>;
    nTupUpd?: Nullable<Int8>;
    nTupDel?: Nullable<Int8>;
    nTupHotUpd?: Nullable<Int8>;
    nTupNewpageUpd?: Nullable<Int8>;
    nLiveTup?: Nullable<Int8>;
    nDeadTup?: Nullable<Int8>;
    nModSinceAnalyze?: Nullable<Int8>;
    nInsSinceVacuum?: Nullable<Int8>;
    lastVacuum?: Nullable<Timestamptz>;
    lastAutovacuum?: Nullable<Timestamptz>;
    lastAnalyze?: Nullable<Timestamptz>;
    lastAutoanalyze?: Nullable<Timestamptz>;
    vacuumCount?: Nullable<Int8>;
    autovacuumCount?: Nullable<Int8>;
    analyzeCount?: Nullable<Int8>;
    autoanalyzeCount?: Nullable<Int8>;
  }

  export interface PgStatUserFunctions {
    funcid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    funcname?: Nullable<Name>;
    calls?: Nullable<Int8>;
    totalTime?: Nullable<Float8>;
    selfTime?: Nullable<Float8>;
  }

  export interface PgStatUserIndexes {
    relid?: Nullable<Oid>;
    indexrelid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    indexrelname?: Nullable<Name>;
    idxScan?: Nullable<Int8>;
    lastIdxScan?: Nullable<Timestamptz>;
    idxTupRead?: Nullable<Int8>;
    idxTupFetch?: Nullable<Int8>;
  }

  export interface PgStatUserTables {
    relid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    seqScan?: Nullable<Int8>;
    lastSeqScan?: Nullable<Timestamptz>;
    seqTupRead?: Nullable<Int8>;
    idxScan?: Nullable<Int8>;
    lastIdxScan?: Nullable<Timestamptz>;
    idxTupFetch?: Nullable<Int8>;
    nTupIns?: Nullable<Int8>;
    nTupUpd?: Nullable<Int8>;
    nTupDel?: Nullable<Int8>;
    nTupHotUpd?: Nullable<Int8>;
    nTupNewpageUpd?: Nullable<Int8>;
    nLiveTup?: Nullable<Int8>;
    nDeadTup?: Nullable<Int8>;
    nModSinceAnalyze?: Nullable<Int8>;
    nInsSinceVacuum?: Nullable<Int8>;
    lastVacuum?: Nullable<Timestamptz>;
    lastAutovacuum?: Nullable<Timestamptz>;
    lastAnalyze?: Nullable<Timestamptz>;
    lastAutoanalyze?: Nullable<Timestamptz>;
    vacuumCount?: Nullable<Int8>;
    autovacuumCount?: Nullable<Int8>;
    analyzeCount?: Nullable<Int8>;
    autoanalyzeCount?: Nullable<Int8>;
  }

  export interface PgStatWal {
    walRecords?: Nullable<Int8>;
    walFpi?: Nullable<Int8>;
    walBytes?: Nullable<Numeric>;
    walBuffersFull?: Nullable<Int8>;
    walWrite?: Nullable<Int8>;
    walSync?: Nullable<Int8>;
    walWriteTime?: Nullable<Float8>;
    walSyncTime?: Nullable<Float8>;
    statsReset?: Nullable<Timestamptz>;
  }

  export interface PgStatWalReceiver {
    pid?: Nullable<Int4>;
    status?: Nullable<Text>;
    receiveStartLsn?: Nullable<PgLsn>;
    receiveStartTli?: Nullable<Int4>;
    writtenLsn?: Nullable<PgLsn>;
    flushedLsn?: Nullable<PgLsn>;
    receivedTli?: Nullable<Int4>;
    lastMsgSendTime?: Nullable<Timestamptz>;
    lastMsgReceiptTime?: Nullable<Timestamptz>;
    latestEndLsn?: Nullable<PgLsn>;
    latestEndTime?: Nullable<Timestamptz>;
    slotName?: Nullable<Text>;
    senderHost?: Nullable<Text>;
    senderPort?: Nullable<Int4>;
    conninfo?: Nullable<Text>;
  }

  export interface PgStatXactAllTables {
    relid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    seqScan?: Nullable<Int8>;
    seqTupRead?: Nullable<Int8>;
    idxScan?: Nullable<Int8>;
    idxTupFetch?: Nullable<Int8>;
    nTupIns?: Nullable<Int8>;
    nTupUpd?: Nullable<Int8>;
    nTupDel?: Nullable<Int8>;
    nTupHotUpd?: Nullable<Int8>;
    nTupNewpageUpd?: Nullable<Int8>;
  }

  export interface PgStatXactSysTables {
    relid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    seqScan?: Nullable<Int8>;
    seqTupRead?: Nullable<Int8>;
    idxScan?: Nullable<Int8>;
    idxTupFetch?: Nullable<Int8>;
    nTupIns?: Nullable<Int8>;
    nTupUpd?: Nullable<Int8>;
    nTupDel?: Nullable<Int8>;
    nTupHotUpd?: Nullable<Int8>;
    nTupNewpageUpd?: Nullable<Int8>;
  }

  export interface PgStatXactUserFunctions {
    funcid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    funcname?: Nullable<Name>;
    calls?: Nullable<Int8>;
    totalTime?: Nullable<Float8>;
    selfTime?: Nullable<Float8>;
  }

  export interface PgStatXactUserTables {
    relid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    seqScan?: Nullable<Int8>;
    seqTupRead?: Nullable<Int8>;
    idxScan?: Nullable<Int8>;
    idxTupFetch?: Nullable<Int8>;
    nTupIns?: Nullable<Int8>;
    nTupUpd?: Nullable<Int8>;
    nTupDel?: Nullable<Int8>;
    nTupHotUpd?: Nullable<Int8>;
    nTupNewpageUpd?: Nullable<Int8>;
  }

  export interface PgStatioAllIndexes {
    relid?: Nullable<Oid>;
    indexrelid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    indexrelname?: Nullable<Name>;
    idxBlksRead?: Nullable<Int8>;
    idxBlksHit?: Nullable<Int8>;
  }

  export interface PgStatioAllSequences {
    relid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    blksRead?: Nullable<Int8>;
    blksHit?: Nullable<Int8>;
  }

  export interface PgStatioAllTables {
    relid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    heapBlksRead?: Nullable<Int8>;
    heapBlksHit?: Nullable<Int8>;
    idxBlksRead?: Nullable<Int8>;
    idxBlksHit?: Nullable<Int8>;
    toastBlksRead?: Nullable<Int8>;
    toastBlksHit?: Nullable<Int8>;
    tidxBlksRead?: Nullable<Int8>;
    tidxBlksHit?: Nullable<Int8>;
  }

  export interface PgStatioSysIndexes {
    relid?: Nullable<Oid>;
    indexrelid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    indexrelname?: Nullable<Name>;
    idxBlksRead?: Nullable<Int8>;
    idxBlksHit?: Nullable<Int8>;
  }

  export interface PgStatioSysSequences {
    relid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    blksRead?: Nullable<Int8>;
    blksHit?: Nullable<Int8>;
  }

  export interface PgStatioSysTables {
    relid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    heapBlksRead?: Nullable<Int8>;
    heapBlksHit?: Nullable<Int8>;
    idxBlksRead?: Nullable<Int8>;
    idxBlksHit?: Nullable<Int8>;
    toastBlksRead?: Nullable<Int8>;
    toastBlksHit?: Nullable<Int8>;
    tidxBlksRead?: Nullable<Int8>;
    tidxBlksHit?: Nullable<Int8>;
  }

  export interface PgStatioUserIndexes {
    relid?: Nullable<Oid>;
    indexrelid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    indexrelname?: Nullable<Name>;
    idxBlksRead?: Nullable<Int8>;
    idxBlksHit?: Nullable<Int8>;
  }

  export interface PgStatioUserSequences {
    relid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    blksRead?: Nullable<Int8>;
    blksHit?: Nullable<Int8>;
  }

  export interface PgStatioUserTables {
    relid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    heapBlksRead?: Nullable<Int8>;
    heapBlksHit?: Nullable<Int8>;
    idxBlksRead?: Nullable<Int8>;
    idxBlksHit?: Nullable<Int8>;
    toastBlksRead?: Nullable<Int8>;
    toastBlksHit?: Nullable<Int8>;
    tidxBlksRead?: Nullable<Int8>;
    tidxBlksHit?: Nullable<Int8>;
  }

  export interface PgStatistic {
    starelid: Oid;
    staattnum: Int2;
    stainherit: Bool;
    stanullfrac: Float4;
    stawidth: Int4;
    stadistinct: Float4;
    stakind1: Int2;
    stakind2: Int2;
    stakind3: Int2;
    stakind4: Int2;
    stakind5: Int2;
    staop1: Oid;
    staop2: Oid;
    staop3: Oid;
    staop4: Oid;
    staop5: Oid;
    stacoll1: Oid;
    stacoll2: Oid;
    stacoll3: Oid;
    stacoll4: Oid;
    stacoll5: Oid;
    stanumbers1?: Nullable<Float4Array>;
    stanumbers2?: Nullable<Float4Array>;
    stanumbers3?: Nullable<Float4Array>;
    stanumbers4?: Nullable<Float4Array>;
    stanumbers5?: Nullable<Float4Array>;
    stavalues1?: Nullable<Anyarray>;
    stavalues2?: Nullable<Anyarray>;
    stavalues3?: Nullable<Anyarray>;
    stavalues4?: Nullable<Anyarray>;
    stavalues5?: Nullable<Anyarray>;
  }

  export interface PgStatisticExt {
    oid: Oid;
    stxrelid: Oid;
    stxname: Name;
    stxnamespace: Oid;
    stxowner: Oid;
    stxstattarget: Int4;
    stxkeys: Int2vector;
    stxkind: CharArray;
    stxexprs?: Nullable<PgNodeTree>;
  }

  export interface PgStatisticExtData {
    stxoid: Oid;
    stxdinherit: Bool;
    stxdndistinct?: Nullable<PgNdistinct>;
    stxddependencies?: Nullable<PgDependencies>;
    stxdmcv?: Nullable<PgMcvList>;
    stxdexpr?: Nullable<PgStatisticArray>;
  }

  export interface PgStats {
    schemaname?: Nullable<Name>;
    tablename?: Nullable<Name>;
    attname?: Nullable<Name>;
    inherited?: Nullable<Bool>;
    nullFrac?: Nullable<Float4>;
    avgWidth?: Nullable<Int4>;
    nDistinct?: Nullable<Float4>;
    mostCommonVals?: Nullable<Anyarray>;
    mostCommonFreqs?: Nullable<Float4Array>;
    histogramBounds?: Nullable<Anyarray>;
    correlation?: Nullable<Float4>;
    mostCommonElems?: Nullable<Anyarray>;
    mostCommonElemFreqs?: Nullable<Float4Array>;
    elemCountHistogram?: Nullable<Float4Array>;
  }

  export interface PgStatsExt {
    schemaname?: Nullable<Name>;
    tablename?: Nullable<Name>;
    statisticsSchemaname?: Nullable<Name>;
    statisticsName?: Nullable<Name>;
    statisticsOwner?: Nullable<Name>;
    attnames?: Nullable<NameArray>;
    exprs?: Nullable<TextArray>;
    kinds?: Nullable<CharArray>;
    inherited?: Nullable<Bool>;
    nDistinct?: Nullable<PgNdistinct>;
    dependencies?: Nullable<PgDependencies>;
    mostCommonVals?: Nullable<TextArray>;
    mostCommonValNulls?: Nullable<BoolArray>;
    mostCommonFreqs?: Nullable<Float8Array>;
    mostCommonBaseFreqs?: Nullable<Float8Array>;
  }

  export interface PgStatsExtExprs {
    schemaname?: Nullable<Name>;
    tablename?: Nullable<Name>;
    statisticsSchemaname?: Nullable<Name>;
    statisticsName?: Nullable<Name>;
    statisticsOwner?: Nullable<Name>;
    expr?: Nullable<Text>;
    inherited?: Nullable<Bool>;
    nullFrac?: Nullable<Float4>;
    avgWidth?: Nullable<Int4>;
    nDistinct?: Nullable<Float4>;
    mostCommonVals?: Nullable<Anyarray>;
    mostCommonFreqs?: Nullable<Float4Array>;
    histogramBounds?: Nullable<Anyarray>;
    correlation?: Nullable<Float4>;
    mostCommonElems?: Nullable<Anyarray>;
    mostCommonElemFreqs?: Nullable<Float4Array>;
    elemCountHistogram?: Nullable<Float4Array>;
  }

  export interface PgSubscription {
    oid: Oid;
    subdbid: Oid;
    subskiplsn: PgLsn;
    subname: Name;
    subowner: Oid;
    subenabled: Bool;
    subbinary: Bool;
    substream: Char;
    subtwophasestate: Char;
    subdisableonerr: Bool;
    subpasswordrequired: Bool;
    subrunasowner: Bool;
    subconninfo: Text;
    subslotname?: Nullable<Name>;
    subsynccommit: Text;
    subpublications: TextArray;
    suborigin?: Nullable<Text>;
  }

  export interface PgSubscriptionRel {
    srsubid: Oid;
    srrelid: Oid;
    srsubstate: Char;
    srsublsn?: Nullable<PgLsn>;
  }

  export interface PgTables {
    schemaname?: Nullable<Name>;
    tablename?: Nullable<Name>;
    tableowner?: Nullable<Name>;
    tablespace?: Nullable<Name>;
    hasindexes?: Nullable<Bool>;
    hasrules?: Nullable<Bool>;
    hastriggers?: Nullable<Bool>;
    rowsecurity?: Nullable<Bool>;
  }

  export interface PgTablespace {
    oid: Oid;
    spcname: Name;
    spcowner: Oid;
    spcacl?: Nullable<AclitemArray>;
    spcoptions?: Nullable<TextArray>;
  }

  export interface PgTimezoneAbbrevs {
    abbrev?: Nullable<Text>;
    utcOffset?: Nullable<Interval>;
    isDst?: Nullable<Bool>;
  }

  export interface PgTimezoneNames {
    name?: Nullable<Text>;
    abbrev?: Nullable<Text>;
    utcOffset?: Nullable<Interval>;
    isDst?: Nullable<Bool>;
  }

  export interface PgTransform {
    oid: Oid;
    trftype: Oid;
    trflang: Oid;
    trffromsql: Regproc;
    trftosql: Regproc;
  }

  export interface PgTrigger {
    oid: Oid;
    tgrelid: Oid;
    tgparentid: Oid;
    tgname: Name;
    tgfoid: Oid;
    tgtype: Int2;
    tgenabled: Char;
    tgisinternal: Bool;
    tgconstrrelid: Oid;
    tgconstrindid: Oid;
    tgconstraint: Oid;
    tgdeferrable: Bool;
    tginitdeferred: Bool;
    tgnargs: Int2;
    tgattr: Int2vector;
    tgargs: Bytea;
    tgqual?: Nullable<PgNodeTree>;
    tgoldtable?: Nullable<Name>;
    tgnewtable?: Nullable<Name>;
  }

  export interface PgTsConfig {
    oid: Oid;
    cfgname: Name;
    cfgnamespace: Oid;
    cfgowner: Oid;
    cfgparser: Oid;
  }

  export interface PgTsConfigMap {
    mapcfg: Oid;
    maptokentype: Int4;
    mapseqno: Int4;
    mapdict: Oid;
  }

  export interface PgTsDict {
    oid: Oid;
    dictname: Name;
    dictnamespace: Oid;
    dictowner: Oid;
    dicttemplate: Oid;
    dictinitoption?: Nullable<Text>;
  }

  export interface PgTsParser {
    oid: Oid;
    prsname: Name;
    prsnamespace: Oid;
    prsstart: Regproc;
    prstoken: Regproc;
    prsend: Regproc;
    prsheadline: Regproc;
    prslextype: Regproc;
  }

  export interface PgTsTemplate {
    oid: Oid;
    tmplname: Name;
    tmplnamespace: Oid;
    tmplinit: Regproc;
    tmpllexize: Regproc;
  }

  export interface PgType {
    oid: Oid;
    typname: Name;
    typnamespace: Oid;
    typowner: Oid;
    typlen: Int2;
    typbyval: Bool;
    typtype: Char;
    typcategory: Char;
    typispreferred: Bool;
    typisdefined: Bool;
    typdelim: Char;
    typrelid: Oid;
    typsubscript: Regproc;
    typelem: Oid;
    typarray: Oid;
    typinput: Regproc;
    typoutput: Regproc;
    typreceive: Regproc;
    typsend: Regproc;
    typmodin: Regproc;
    typmodout: Regproc;
    typanalyze: Regproc;
    typalign: Char;
    typstorage: Char;
    typnotnull: Bool;
    typbasetype: Oid;
    typtypmod: Int4;
    typndims: Int4;
    typcollation: Oid;
    typdefaultbin?: Nullable<PgNodeTree>;
    typdefault?: Nullable<Text>;
    typacl?: Nullable<AclitemArray>;
  }

  export interface PgUser {
    usename?: Nullable<Name>;
    usesysid?: Nullable<Oid>;
    usecreatedb?: Nullable<Bool>;
    usesuper?: Nullable<Bool>;
    userepl?: Nullable<Bool>;
    usebypassrls?: Nullable<Bool>;
    passwd?: Nullable<Text>;
    valuntil?: Nullable<Timestamptz>;
    useconfig?: Nullable<TextArray>;
  }

  export interface PgUserMapping {
    oid: Oid;
    umuser: Oid;
    umserver: Oid;
    umoptions?: Nullable<TextArray>;
  }

  export interface PgUserMappings {
    umid?: Nullable<Oid>;
    srvid?: Nullable<Oid>;
    srvname?: Nullable<Name>;
    umuser?: Nullable<Oid>;
    usename?: Nullable<Name>;
    umoptions?: Nullable<TextArray>;
  }

  export interface PgViews {
    schemaname?: Nullable<Name>;
    viewname?: Nullable<Name>;
    viewowner?: Nullable<Name>;
    definition?: Nullable<Text>;
  }

  export type Point = {
    x: number;
    y: number;
  };

  export type Polygon = Array<Point>;

  export type Record = void;

  export type Refcursor = string;

  export type Regclass = number;

  export type Regcollation = number;

  export type Regconfig = number;

  export type Regdictionary = number;

  export type Regnamespace = number;

  export type Regoper = number;

  export type Regoperator = number;

  export type Regproc = number;

  export type Regprocedure = number;

  export type Regrole = number;

  export type Regtype = number;

  export type TableAmHandler = void;

  export type Text = string;

  export type Tid = {
    blockNumber: number;
    tupleIndex: number;
  };

  export type Time = JsDate;

  export type Timestamp = JsDate;

  export type Timestamptz = JsDate;

  export type Timetz = JsDate;

  export type Trigger = void;

  export type TsmHandler = void;

  export type Tsmultirange = void;

  export type Tsquery = string;

  export type Tsrange = [Timestamp, Timestamp];

  export type Tstzmultirange = void;

  export type Tstzrange = [Timestamptz, Timestamptz];

  export type Tsvector = Array<string>;

  export type TxidSnapshot = number;

  export type Unknown = void;

  export type Uuid = UUID;

  export type Varbit = boolean;

  export type Varchar = string;

  export type Void = void;

  export type Xid = number;

  export type Xid8 = number;

  export type Xml = string;

  export namespace Tables {
    export namespace PgStatistic {
      export interface ByStarelidStaattnumStainherit {
        starelid: Nullable<Oid>;
        staattnum: Nullable<Int2>;
        stainherit: Nullable<Bool>;
      }
    }

    export namespace PgType {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByTypnameTypnamespace {
        typname: Nullable<Cstring>;
        typnamespace: Nullable<Oid>;
      }
    }

    export namespace PgForeignTable {
      export interface ByFtrelid {
        ftrelid: Nullable<Oid>;
      }
    }

    export namespace PgAuthid {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByRolname {
        rolname: Nullable<Cstring>;
      }
    }

    export namespace PgStatisticExtData {
      export interface ByStxoidStxdinherit {
        stxoid: Nullable<Oid>;
        stxdinherit: Nullable<Bool>;
      }
    }

    export namespace PgUserMapping {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByUmuserUmserver {
        umuser: Nullable<Oid>;
        umserver: Nullable<Oid>;
      }
    }

    export namespace PgSubscription {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface BySubdbidSubname {
        subdbid: Nullable<Oid>;
        subname: Nullable<Cstring>;
      }
    }

    export namespace PgAttribute {
      export interface ByAttrelidAttname {
        attrelid: Nullable<Oid>;
        attname: Nullable<Cstring>;
      }

      export interface ByAttrelidAttnum {
        attrelid: Nullable<Oid>;
        attnum: Nullable<Int2>;
      }
    }

    export namespace PgProc {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByPronameProargtypesPronamespace {
        proname: Nullable<Cstring>;
        proargtypes: Nullable<Oidvector>;
        pronamespace: Nullable<Oid>;
      }
    }

    export namespace PgClass {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByRelnameRelnamespace {
        relname: Nullable<Cstring>;
        relnamespace: Nullable<Oid>;
      }

      export interface ByReltablespaceRelfilenode {
        reltablespace: Nullable<Oid>;
        relfilenode: Nullable<Oid>;
      }
    }

    export namespace PgAttrdef {
      export interface ByAdrelidAdnum {
        adrelid: Nullable<Oid>;
        adnum: Nullable<Int2>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgConstraint {
      export interface ByConnameConnamespace {
        conname: Nullable<Cstring>;
        connamespace: Nullable<Oid>;
      }

      export interface ByConparentid {
        conparentid: Nullable<Oid>;
      }

      export interface ByConrelidContypidConname {
        conrelid: Nullable<Oid>;
        contypid: Nullable<Oid>;
        conname: Nullable<Cstring>;
      }

      export interface ByContypid {
        contypid: Nullable<Oid>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgInherits {
      export interface ByInhparent {
        inhparent: Nullable<Oid>;
      }

      export interface ByInhrelidInhseqno {
        inhrelid: Nullable<Oid>;
        inhseqno: Nullable<Int4>;
      }
    }

    export namespace PgIndex {
      export interface ByIndexrelid {
        indexrelid: Nullable<Oid>;
      }

      export interface ByIndrelid {
        indrelid: Nullable<Oid>;
      }
    }

    export namespace PgOperator {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByOprnameOprleftOprrightOprnamespace {
        oprname: Nullable<Cstring>;
        oprleft: Nullable<Oid>;
        oprright: Nullable<Oid>;
        oprnamespace: Nullable<Oid>;
      }
    }

    export namespace PgOpfamily {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByOpfmethodOpfnameOpfnamespace {
        opfmethod: Nullable<Oid>;
        opfname: Nullable<Cstring>;
        opfnamespace: Nullable<Oid>;
      }
    }

    export namespace PgOpclass {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByOpcmethodOpcnameOpcnamespace {
        opcmethod: Nullable<Oid>;
        opcname: Nullable<Cstring>;
        opcnamespace: Nullable<Oid>;
      }
    }

    export namespace PgAm {
      export interface ByAmname {
        amname: Nullable<Cstring>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgAmop {
      export interface ByAmopfamilyAmoplefttypeAmoprighttypeAmopstrategy {
        amopfamily: Nullable<Oid>;
        amoplefttype: Nullable<Oid>;
        amoprighttype: Nullable<Oid>;
        amopstrategy: Nullable<Int2>;
      }

      export interface ByAmopoprAmoppurposeAmopfamily {
        amopopr: Nullable<Oid>;
        amoppurpose: Nullable<Char>;
        amopfamily: Nullable<Oid>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgAmproc {
      export interface ByAmprocfamilyAmproclefttypeAmprocrighttypeAmprocnum {
        amprocfamily: Nullable<Oid>;
        amproclefttype: Nullable<Oid>;
        amprocrighttype: Nullable<Oid>;
        amprocnum: Nullable<Int2>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgLanguage {
      export interface ByLanname {
        lanname: Nullable<Cstring>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgLargeobjectMetadata {
      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgAggregate {
      export interface ByAggfnoid {
        aggfnoid: Nullable<Regproc>;
      }
    }

    export namespace PgStatisticExt {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByStxnameStxnamespace {
        stxname: Nullable<Cstring>;
        stxnamespace: Nullable<Oid>;
      }

      export interface ByStxrelid {
        stxrelid: Nullable<Oid>;
      }
    }

    export namespace PgRewrite {
      export interface ByEvClassRulename {
        evClass: Nullable<Oid>;
        rulename: Nullable<Cstring>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgTrigger {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByTgconstraint {
        tgconstraint: Nullable<Oid>;
      }

      export interface ByTgrelidTgname {
        tgrelid: Nullable<Oid>;
        tgname: Nullable<Cstring>;
      }
    }

    export namespace PgEventTrigger {
      export interface ByEvtname {
        evtname: Nullable<Cstring>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgDescription {
      export interface ByObjoidClassoidObjsubid {
        objoid: Nullable<Oid>;
        classoid: Nullable<Oid>;
        objsubid: Nullable<Int4>;
      }
    }

    export namespace PgCast {
      export interface ByCastsourceCasttarget {
        castsource: Nullable<Oid>;
        casttarget: Nullable<Oid>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgEnum {
      export interface ByEnumtypidEnumlabel {
        enumtypid: Nullable<Oid>;
        enumlabel: Nullable<Cstring>;
      }

      export interface ByEnumtypidEnumsortorder {
        enumtypid: Nullable<Oid>;
        enumsortorder: Nullable<Float4>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgNamespace {
      export interface ByNspname {
        nspname: Nullable<Cstring>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgConversion {
      export interface ByConnameConnamespace {
        conname: Nullable<Cstring>;
        connamespace: Nullable<Oid>;
      }

      export interface ByConnamespaceConforencodingContoencodingOid {
        connamespace: Nullable<Oid>;
        conforencoding: Nullable<Int4>;
        contoencoding: Nullable<Int4>;
        oid: Nullable<Oid>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgDepend {
      export interface ByClassidObjidObjsubid {
        classid: Nullable<Oid>;
        objid: Nullable<Oid>;
        objsubid: Nullable<Int4>;
      }

      export interface ByRefclassidRefobjidRefobjsubid {
        refclassid: Nullable<Oid>;
        refobjid: Nullable<Oid>;
        refobjsubid: Nullable<Int4>;
      }
    }

    export namespace PgDatabase {
      export interface ByDatname {
        datname: Nullable<Cstring>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgDbRoleSetting {
      export interface BySetdatabaseSetrole {
        setdatabase: Nullable<Oid>;
        setrole: Nullable<Oid>;
      }
    }

    export namespace PgTablespace {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface BySpcname {
        spcname: Nullable<Cstring>;
      }
    }

    export namespace PgAuthMembers {
      export interface ByGrantor {
        grantor: Nullable<Oid>;
      }

      export interface ByMemberRoleidGrantor {
        member: Nullable<Oid>;
        roleid: Nullable<Oid>;
        grantor: Nullable<Oid>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByRoleidMemberGrantor {
        roleid: Nullable<Oid>;
        member: Nullable<Oid>;
        grantor: Nullable<Oid>;
      }
    }

    export namespace PgShdepend {
      export interface ByDbidClassidObjidObjsubid {
        dbid: Nullable<Oid>;
        classid: Nullable<Oid>;
        objid: Nullable<Oid>;
        objsubid: Nullable<Int4>;
      }

      export interface ByRefclassidRefobjid {
        refclassid: Nullable<Oid>;
        refobjid: Nullable<Oid>;
      }
    }

    export namespace PgShdescription {
      export interface ByObjoidClassoid {
        objoid: Nullable<Oid>;
        classoid: Nullable<Oid>;
      }
    }

    export namespace PgTsConfig {
      export interface ByCfgnameCfgnamespace {
        cfgname: Nullable<Cstring>;
        cfgnamespace: Nullable<Oid>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgTsConfigMap {
      export interface ByMapcfgMaptokentypeMapseqno {
        mapcfg: Nullable<Oid>;
        maptokentype: Nullable<Int4>;
        mapseqno: Nullable<Int4>;
      }
    }

    export namespace PgTsDict {
      export interface ByDictnameDictnamespace {
        dictname: Nullable<Cstring>;
        dictnamespace: Nullable<Oid>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgTsParser {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByPrsnamePrsnamespace {
        prsname: Nullable<Cstring>;
        prsnamespace: Nullable<Oid>;
      }
    }

    export namespace PgTsTemplate {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByTmplnameTmplnamespace {
        tmplname: Nullable<Cstring>;
        tmplnamespace: Nullable<Oid>;
      }
    }

    export namespace PgExtension {
      export interface ByExtname {
        extname: Nullable<Cstring>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgForeignDataWrapper {
      export interface ByFdwname {
        fdwname: Nullable<Cstring>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgForeignServer {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface BySrvname {
        srvname: Nullable<Cstring>;
      }
    }

    export namespace PgPolicy {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByPolrelidPolname {
        polrelid: Nullable<Oid>;
        polname: Nullable<Cstring>;
      }
    }

    export namespace PgReplicationOrigin {
      export interface ByRoident {
        roident: Nullable<Oid>;
      }

      export interface ByRoname {
        roname: Nullable<Text>;
      }
    }

    export namespace PgDefaultAcl {
      export interface ByDefaclroleDefaclnamespaceDefaclobjtype {
        defaclrole: Nullable<Oid>;
        defaclnamespace: Nullable<Oid>;
        defaclobjtype: Nullable<Char>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgInitPrivs {
      export interface ByObjoidClassoidObjsubid {
        objoid: Nullable<Oid>;
        classoid: Nullable<Oid>;
        objsubid: Nullable<Int4>;
      }
    }

    export namespace PgSeclabel {
      export interface ByObjoidClassoidObjsubidProvider {
        objoid: Nullable<Oid>;
        classoid: Nullable<Oid>;
        objsubid: Nullable<Int4>;
        provider: Nullable<Text>;
      }
    }

    export namespace PgShseclabel {
      export interface ByObjoidClassoidProvider {
        objoid: Nullable<Oid>;
        classoid: Nullable<Oid>;
        provider: Nullable<Text>;
      }
    }

    export namespace PgCollation {
      export interface ByCollnameCollencodingCollnamespace {
        collname: Nullable<Cstring>;
        collencoding: Nullable<Int4>;
        collnamespace: Nullable<Oid>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgParameterAcl {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByParname {
        parname: Nullable<Text>;
      }
    }

    export namespace PgPartitionedTable {
      export interface ByPartrelid {
        partrelid: Nullable<Oid>;
      }
    }

    export namespace PgRange {
      export interface ByRngmultitypid {
        rngmultitypid: Nullable<Oid>;
      }

      export interface ByRngtypid {
        rngtypid: Nullable<Oid>;
      }
    }

    export namespace PgTransform {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByTrftypeTrflang {
        trftype: Nullable<Oid>;
        trflang: Nullable<Oid>;
      }
    }

    export namespace PgSequence {
      export interface BySeqrelid {
        seqrelid: Nullable<Oid>;
      }
    }

    export namespace PgPublication {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByPubname {
        pubname: Nullable<Cstring>;
      }
    }

    export namespace PgPublicationNamespace {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByPnnspidPnpubid {
        pnnspid: Nullable<Oid>;
        pnpubid: Nullable<Oid>;
      }
    }

    export namespace PgPublicationRel {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByPrpubid {
        prpubid: Nullable<Oid>;
      }

      export interface ByPrrelidPrpubid {
        prrelid: Nullable<Oid>;
        prpubid: Nullable<Oid>;
      }
    }

    export namespace PgSubscriptionRel {
      export interface BySrrelidSrsubid {
        srrelid: Nullable<Oid>;
        srsubid: Nullable<Oid>;
      }
    }

    export namespace PgLargeobject {
      export interface ByLoidPageno {
        loid: Nullable<Oid>;
        pageno: Nullable<Int4>;
      }
    }
  }
}

export namespace InformationSchema {
  export type AdministrableRoleAuthorizationsArray =
    Array<AdministrableRoleAuthorizations>;

  export type ApplicableRolesArray = Array<ApplicableRoles>;

  export type AttributesArray = Array<Attributes>;

  export type CardinalNumberArray = Array<CardinalNumber>;

  export type CharacterDataArray = Array<CharacterData>;

  export type CharacterSetsArray = Array<CharacterSets>;

  export type CheckConstraintRoutineUsageArray =
    Array<CheckConstraintRoutineUsage>;

  export type CheckConstraintsArray = Array<CheckConstraints>;

  export type CollationCharacterSetApplicabilityArray =
    Array<CollationCharacterSetApplicability>;

  export type CollationsArray = Array<Collations>;

  export type ColumnColumnUsageArray = Array<ColumnColumnUsage>;

  export type ColumnDomainUsageArray = Array<ColumnDomainUsage>;

  export type ColumnOptionsArray = Array<ColumnOptions>;

  export type ColumnPrivilegesArray = Array<ColumnPrivileges>;

  export type ColumnUdtUsageArray = Array<ColumnUdtUsage>;

  export type ColumnsArray = Array<Columns>;

  export type ConstraintColumnUsageArray = Array<ConstraintColumnUsage>;

  export type ConstraintTableUsageArray = Array<ConstraintTableUsage>;

  export type DataTypePrivilegesArray = Array<DataTypePrivileges>;

  export type DomainConstraintsArray = Array<DomainConstraints>;

  export type DomainUdtUsageArray = Array<DomainUdtUsage>;

  export type DomainsArray = Array<Domains>;

  export type ElementTypesArray = Array<ElementTypes>;

  export type EnabledRolesArray = Array<EnabledRoles>;

  export type ForeignDataWrapperOptionsArray = Array<ForeignDataWrapperOptions>;

  export type ForeignDataWrappersArray = Array<ForeignDataWrappers>;

  export type ForeignServerOptionsArray = Array<ForeignServerOptions>;

  export type ForeignServersArray = Array<ForeignServers>;

  export type ForeignTableOptionsArray = Array<ForeignTableOptions>;

  export type ForeignTablesArray = Array<ForeignTables>;

  export type InformationSchemaCatalogNameArray =
    Array<InformationSchemaCatalogName>;

  export type KeyColumnUsageArray = Array<KeyColumnUsage>;

  export type ParametersArray = Array<Parameters>;

  export interface PgForeignDataWrappers {
    oid?: Nullable<PgCatalog.Oid>;
    fdwowner?: Nullable<PgCatalog.Oid>;
    fdwoptions?: Nullable<PgCatalog.TextArray>;
    foreignDataWrapperCatalog?: Nullable<SqlIdentifier>;
    foreignDataWrapperName?: Nullable<SqlIdentifier>;
    authorizationIdentifier?: Nullable<SqlIdentifier>;
    foreignDataWrapperLanguage?: Nullable<CharacterData>;
  }

  export interface PgForeignServers {
    oid?: Nullable<PgCatalog.Oid>;
    srvoptions?: Nullable<PgCatalog.TextArray>;
    foreignServerCatalog?: Nullable<SqlIdentifier>;
    foreignServerName?: Nullable<SqlIdentifier>;
    foreignDataWrapperCatalog?: Nullable<SqlIdentifier>;
    foreignDataWrapperName?: Nullable<SqlIdentifier>;
    foreignServerType?: Nullable<CharacterData>;
    foreignServerVersion?: Nullable<CharacterData>;
    authorizationIdentifier?: Nullable<SqlIdentifier>;
  }

  export interface PgForeignTableColumns {
    nspname?: Nullable<PgCatalog.Name>;
    relname?: Nullable<PgCatalog.Name>;
    attname?: Nullable<PgCatalog.Name>;
    attfdwoptions?: Nullable<PgCatalog.TextArray>;
  }

  export interface PgForeignTables {
    foreignTableCatalog?: Nullable<SqlIdentifier>;
    foreignTableSchema?: Nullable<SqlIdentifier>;
    foreignTableName?: Nullable<SqlIdentifier>;
    ftoptions?: Nullable<PgCatalog.TextArray>;
    foreignServerCatalog?: Nullable<SqlIdentifier>;
    foreignServerName?: Nullable<SqlIdentifier>;
    authorizationIdentifier?: Nullable<SqlIdentifier>;
  }

  export interface PgUserMappings {
    oid?: Nullable<PgCatalog.Oid>;
    umoptions?: Nullable<PgCatalog.TextArray>;
    umuser?: Nullable<PgCatalog.Oid>;
    authorizationIdentifier?: Nullable<SqlIdentifier>;
    foreignServerCatalog?: Nullable<SqlIdentifier>;
    foreignServerName?: Nullable<SqlIdentifier>;
    srvowner?: Nullable<SqlIdentifier>;
  }

  export type ReferentialConstraintsArray = Array<ReferentialConstraints>;

  export type RoleColumnGrantsArray = Array<RoleColumnGrants>;

  export type RoleRoutineGrantsArray = Array<RoleRoutineGrants>;

  export type RoleTableGrantsArray = Array<RoleTableGrants>;

  export type RoleUdtGrantsArray = Array<RoleUdtGrants>;

  export type RoleUsageGrantsArray = Array<RoleUsageGrants>;

  export type RoutineColumnUsageArray = Array<RoutineColumnUsage>;

  export type RoutinePrivilegesArray = Array<RoutinePrivileges>;

  export type RoutineRoutineUsageArray = Array<RoutineRoutineUsage>;

  export type RoutineSequenceUsageArray = Array<RoutineSequenceUsage>;

  export type RoutineTableUsageArray = Array<RoutineTableUsage>;

  export type RoutinesArray = Array<Routines>;

  export type SchemataArray = Array<Schemata>;

  export type SequencesArray = Array<Sequences>;

  export type SqlFeaturesArray = Array<SqlFeatures>;

  export type SqlIdentifierArray = Array<SqlIdentifier>;

  export type SqlImplementationInfoArray = Array<SqlImplementationInfo>;

  export type SqlPartsArray = Array<SqlParts>;

  export type SqlSizingArray = Array<SqlSizing>;

  export type TableConstraintsArray = Array<TableConstraints>;

  export type TablePrivilegesArray = Array<TablePrivileges>;

  export type TablesArray = Array<Tables>;

  export type TimeStampArray = Array<TimeStamp>;

  export type TransformsArray = Array<Transforms>;

  export type TriggeredUpdateColumnsArray = Array<TriggeredUpdateColumns>;

  export type TriggersArray = Array<Triggers>;

  export type UdtPrivilegesArray = Array<UdtPrivileges>;

  export type UsagePrivilegesArray = Array<UsagePrivileges>;

  export type UserDefinedTypesArray = Array<UserDefinedTypes>;

  export type UserMappingOptionsArray = Array<UserMappingOptions>;

  export type UserMappingsArray = Array<UserMappings>;

  export type ViewColumnUsageArray = Array<ViewColumnUsage>;

  export type ViewRoutineUsageArray = Array<ViewRoutineUsage>;

  export type ViewTableUsageArray = Array<ViewTableUsage>;

  export type ViewsArray = Array<Views>;

  export type YesOrNoArray = Array<YesOrNo>;

  export interface AdministrableRoleAuthorizations {
    grantee?: Nullable<SqlIdentifier>;
    roleName?: Nullable<SqlIdentifier>;
    isGrantable?: Nullable<YesOrNo>;
  }

  export interface ApplicableRoles {
    grantee?: Nullable<SqlIdentifier>;
    roleName?: Nullable<SqlIdentifier>;
    isGrantable?: Nullable<YesOrNo>;
  }

  export interface Attributes {
    udtCatalog?: Nullable<SqlIdentifier>;
    udtSchema?: Nullable<SqlIdentifier>;
    udtName?: Nullable<SqlIdentifier>;
    attributeName?: Nullable<SqlIdentifier>;
    ordinalPosition?: Nullable<CardinalNumber>;
    attributeDefault?: Nullable<CharacterData>;
    isNullable?: Nullable<YesOrNo>;
    dataType?: Nullable<CharacterData>;
    characterMaximumLength?: Nullable<CardinalNumber>;
    characterOctetLength?: Nullable<CardinalNumber>;
    characterSetCatalog?: Nullable<SqlIdentifier>;
    characterSetSchema?: Nullable<SqlIdentifier>;
    characterSetName?: Nullable<SqlIdentifier>;
    collationCatalog?: Nullable<SqlIdentifier>;
    collationSchema?: Nullable<SqlIdentifier>;
    collationName?: Nullable<SqlIdentifier>;
    numericPrecision?: Nullable<CardinalNumber>;
    numericPrecisionRadix?: Nullable<CardinalNumber>;
    numericScale?: Nullable<CardinalNumber>;
    datetimePrecision?: Nullable<CardinalNumber>;
    intervalType?: Nullable<CharacterData>;
    intervalPrecision?: Nullable<CardinalNumber>;
    attributeUdtCatalog?: Nullable<SqlIdentifier>;
    attributeUdtSchema?: Nullable<SqlIdentifier>;
    attributeUdtName?: Nullable<SqlIdentifier>;
    scopeCatalog?: Nullable<SqlIdentifier>;
    scopeSchema?: Nullable<SqlIdentifier>;
    scopeName?: Nullable<SqlIdentifier>;
    maximumCardinality?: Nullable<CardinalNumber>;
    dtdIdentifier?: Nullable<SqlIdentifier>;
    isDerivedReferenceAttribute?: Nullable<YesOrNo>;
  }

  export type CardinalNumber = PgCatalog.Int4;

  export type CharacterData = PgCatalog.Varchar;

  export interface CharacterSets {
    characterSetCatalog?: Nullable<SqlIdentifier>;
    characterSetSchema?: Nullable<SqlIdentifier>;
    characterSetName?: Nullable<SqlIdentifier>;
    characterRepertoire?: Nullable<SqlIdentifier>;
    formOfUse?: Nullable<SqlIdentifier>;
    defaultCollateCatalog?: Nullable<SqlIdentifier>;
    defaultCollateSchema?: Nullable<SqlIdentifier>;
    defaultCollateName?: Nullable<SqlIdentifier>;
  }

  export interface CheckConstraintRoutineUsage {
    constraintCatalog?: Nullable<SqlIdentifier>;
    constraintSchema?: Nullable<SqlIdentifier>;
    constraintName?: Nullable<SqlIdentifier>;
    specificCatalog?: Nullable<SqlIdentifier>;
    specificSchema?: Nullable<SqlIdentifier>;
    specificName?: Nullable<SqlIdentifier>;
  }

  export interface CheckConstraints {
    constraintCatalog?: Nullable<SqlIdentifier>;
    constraintSchema?: Nullable<SqlIdentifier>;
    constraintName?: Nullable<SqlIdentifier>;
    checkClause?: Nullable<CharacterData>;
  }

  export interface CollationCharacterSetApplicability {
    collationCatalog?: Nullable<SqlIdentifier>;
    collationSchema?: Nullable<SqlIdentifier>;
    collationName?: Nullable<SqlIdentifier>;
    characterSetCatalog?: Nullable<SqlIdentifier>;
    characterSetSchema?: Nullable<SqlIdentifier>;
    characterSetName?: Nullable<SqlIdentifier>;
  }

  export interface Collations {
    collationCatalog?: Nullable<SqlIdentifier>;
    collationSchema?: Nullable<SqlIdentifier>;
    collationName?: Nullable<SqlIdentifier>;
    padAttribute?: Nullable<CharacterData>;
  }

  export interface ColumnColumnUsage {
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    columnName?: Nullable<SqlIdentifier>;
    dependentColumn?: Nullable<SqlIdentifier>;
  }

  export interface ColumnDomainUsage {
    domainCatalog?: Nullable<SqlIdentifier>;
    domainSchema?: Nullable<SqlIdentifier>;
    domainName?: Nullable<SqlIdentifier>;
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    columnName?: Nullable<SqlIdentifier>;
  }

  export interface ColumnOptions {
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    columnName?: Nullable<SqlIdentifier>;
    optionName?: Nullable<SqlIdentifier>;
    optionValue?: Nullable<CharacterData>;
  }

  export interface ColumnPrivileges {
    grantor?: Nullable<SqlIdentifier>;
    grantee?: Nullable<SqlIdentifier>;
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    columnName?: Nullable<SqlIdentifier>;
    privilegeType?: Nullable<CharacterData>;
    isGrantable?: Nullable<YesOrNo>;
  }

  export interface ColumnUdtUsage {
    udtCatalog?: Nullable<SqlIdentifier>;
    udtSchema?: Nullable<SqlIdentifier>;
    udtName?: Nullable<SqlIdentifier>;
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    columnName?: Nullable<SqlIdentifier>;
  }

  export interface Columns {
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    columnName?: Nullable<SqlIdentifier>;
    ordinalPosition?: Nullable<CardinalNumber>;
    columnDefault?: Nullable<CharacterData>;
    isNullable?: Nullable<YesOrNo>;
    dataType?: Nullable<CharacterData>;
    characterMaximumLength?: Nullable<CardinalNumber>;
    characterOctetLength?: Nullable<CardinalNumber>;
    numericPrecision?: Nullable<CardinalNumber>;
    numericPrecisionRadix?: Nullable<CardinalNumber>;
    numericScale?: Nullable<CardinalNumber>;
    datetimePrecision?: Nullable<CardinalNumber>;
    intervalType?: Nullable<CharacterData>;
    intervalPrecision?: Nullable<CardinalNumber>;
    characterSetCatalog?: Nullable<SqlIdentifier>;
    characterSetSchema?: Nullable<SqlIdentifier>;
    characterSetName?: Nullable<SqlIdentifier>;
    collationCatalog?: Nullable<SqlIdentifier>;
    collationSchema?: Nullable<SqlIdentifier>;
    collationName?: Nullable<SqlIdentifier>;
    domainCatalog?: Nullable<SqlIdentifier>;
    domainSchema?: Nullable<SqlIdentifier>;
    domainName?: Nullable<SqlIdentifier>;
    udtCatalog?: Nullable<SqlIdentifier>;
    udtSchema?: Nullable<SqlIdentifier>;
    udtName?: Nullable<SqlIdentifier>;
    scopeCatalog?: Nullable<SqlIdentifier>;
    scopeSchema?: Nullable<SqlIdentifier>;
    scopeName?: Nullable<SqlIdentifier>;
    maximumCardinality?: Nullable<CardinalNumber>;
    dtdIdentifier?: Nullable<SqlIdentifier>;
    isSelfReferencing?: Nullable<YesOrNo>;
    isIdentity?: Nullable<YesOrNo>;
    identityGeneration?: Nullable<CharacterData>;
    identityStart?: Nullable<CharacterData>;
    identityIncrement?: Nullable<CharacterData>;
    identityMaximum?: Nullable<CharacterData>;
    identityMinimum?: Nullable<CharacterData>;
    identityCycle?: Nullable<YesOrNo>;
    isGenerated?: Nullable<CharacterData>;
    generationExpression?: Nullable<CharacterData>;
    isUpdatable?: Nullable<YesOrNo>;
  }

  export interface ConstraintColumnUsage {
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    columnName?: Nullable<SqlIdentifier>;
    constraintCatalog?: Nullable<SqlIdentifier>;
    constraintSchema?: Nullable<SqlIdentifier>;
    constraintName?: Nullable<SqlIdentifier>;
  }

  export interface ConstraintTableUsage {
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    constraintCatalog?: Nullable<SqlIdentifier>;
    constraintSchema?: Nullable<SqlIdentifier>;
    constraintName?: Nullable<SqlIdentifier>;
  }

  export interface DataTypePrivileges {
    objectCatalog?: Nullable<SqlIdentifier>;
    objectSchema?: Nullable<SqlIdentifier>;
    objectName?: Nullable<SqlIdentifier>;
    objectType?: Nullable<CharacterData>;
    dtdIdentifier?: Nullable<SqlIdentifier>;
  }

  export interface DomainConstraints {
    constraintCatalog?: Nullable<SqlIdentifier>;
    constraintSchema?: Nullable<SqlIdentifier>;
    constraintName?: Nullable<SqlIdentifier>;
    domainCatalog?: Nullable<SqlIdentifier>;
    domainSchema?: Nullable<SqlIdentifier>;
    domainName?: Nullable<SqlIdentifier>;
    isDeferrable?: Nullable<YesOrNo>;
    initiallyDeferred?: Nullable<YesOrNo>;
  }

  export interface DomainUdtUsage {
    udtCatalog?: Nullable<SqlIdentifier>;
    udtSchema?: Nullable<SqlIdentifier>;
    udtName?: Nullable<SqlIdentifier>;
    domainCatalog?: Nullable<SqlIdentifier>;
    domainSchema?: Nullable<SqlIdentifier>;
    domainName?: Nullable<SqlIdentifier>;
  }

  export interface Domains {
    domainCatalog?: Nullable<SqlIdentifier>;
    domainSchema?: Nullable<SqlIdentifier>;
    domainName?: Nullable<SqlIdentifier>;
    dataType?: Nullable<CharacterData>;
    characterMaximumLength?: Nullable<CardinalNumber>;
    characterOctetLength?: Nullable<CardinalNumber>;
    characterSetCatalog?: Nullable<SqlIdentifier>;
    characterSetSchema?: Nullable<SqlIdentifier>;
    characterSetName?: Nullable<SqlIdentifier>;
    collationCatalog?: Nullable<SqlIdentifier>;
    collationSchema?: Nullable<SqlIdentifier>;
    collationName?: Nullable<SqlIdentifier>;
    numericPrecision?: Nullable<CardinalNumber>;
    numericPrecisionRadix?: Nullable<CardinalNumber>;
    numericScale?: Nullable<CardinalNumber>;
    datetimePrecision?: Nullable<CardinalNumber>;
    intervalType?: Nullable<CharacterData>;
    intervalPrecision?: Nullable<CardinalNumber>;
    domainDefault?: Nullable<CharacterData>;
    udtCatalog?: Nullable<SqlIdentifier>;
    udtSchema?: Nullable<SqlIdentifier>;
    udtName?: Nullable<SqlIdentifier>;
    scopeCatalog?: Nullable<SqlIdentifier>;
    scopeSchema?: Nullable<SqlIdentifier>;
    scopeName?: Nullable<SqlIdentifier>;
    maximumCardinality?: Nullable<CardinalNumber>;
    dtdIdentifier?: Nullable<SqlIdentifier>;
  }

  export interface ElementTypes {
    objectCatalog?: Nullable<SqlIdentifier>;
    objectSchema?: Nullable<SqlIdentifier>;
    objectName?: Nullable<SqlIdentifier>;
    objectType?: Nullable<CharacterData>;
    collectionTypeIdentifier?: Nullable<SqlIdentifier>;
    dataType?: Nullable<CharacterData>;
    characterMaximumLength?: Nullable<CardinalNumber>;
    characterOctetLength?: Nullable<CardinalNumber>;
    characterSetCatalog?: Nullable<SqlIdentifier>;
    characterSetSchema?: Nullable<SqlIdentifier>;
    characterSetName?: Nullable<SqlIdentifier>;
    collationCatalog?: Nullable<SqlIdentifier>;
    collationSchema?: Nullable<SqlIdentifier>;
    collationName?: Nullable<SqlIdentifier>;
    numericPrecision?: Nullable<CardinalNumber>;
    numericPrecisionRadix?: Nullable<CardinalNumber>;
    numericScale?: Nullable<CardinalNumber>;
    datetimePrecision?: Nullable<CardinalNumber>;
    intervalType?: Nullable<CharacterData>;
    intervalPrecision?: Nullable<CardinalNumber>;
    domainDefault?: Nullable<CharacterData>;
    udtCatalog?: Nullable<SqlIdentifier>;
    udtSchema?: Nullable<SqlIdentifier>;
    udtName?: Nullable<SqlIdentifier>;
    scopeCatalog?: Nullable<SqlIdentifier>;
    scopeSchema?: Nullable<SqlIdentifier>;
    scopeName?: Nullable<SqlIdentifier>;
    maximumCardinality?: Nullable<CardinalNumber>;
    dtdIdentifier?: Nullable<SqlIdentifier>;
  }

  export interface EnabledRoles {
    roleName?: Nullable<SqlIdentifier>;
  }

  export interface ForeignDataWrapperOptions {
    foreignDataWrapperCatalog?: Nullable<SqlIdentifier>;
    foreignDataWrapperName?: Nullable<SqlIdentifier>;
    optionName?: Nullable<SqlIdentifier>;
    optionValue?: Nullable<CharacterData>;
  }

  export interface ForeignDataWrappers {
    foreignDataWrapperCatalog?: Nullable<SqlIdentifier>;
    foreignDataWrapperName?: Nullable<SqlIdentifier>;
    authorizationIdentifier?: Nullable<SqlIdentifier>;
    libraryName?: Nullable<CharacterData>;
    foreignDataWrapperLanguage?: Nullable<CharacterData>;
  }

  export interface ForeignServerOptions {
    foreignServerCatalog?: Nullable<SqlIdentifier>;
    foreignServerName?: Nullable<SqlIdentifier>;
    optionName?: Nullable<SqlIdentifier>;
    optionValue?: Nullable<CharacterData>;
  }

  export interface ForeignServers {
    foreignServerCatalog?: Nullable<SqlIdentifier>;
    foreignServerName?: Nullable<SqlIdentifier>;
    foreignDataWrapperCatalog?: Nullable<SqlIdentifier>;
    foreignDataWrapperName?: Nullable<SqlIdentifier>;
    foreignServerType?: Nullable<CharacterData>;
    foreignServerVersion?: Nullable<CharacterData>;
    authorizationIdentifier?: Nullable<SqlIdentifier>;
  }

  export interface ForeignTableOptions {
    foreignTableCatalog?: Nullable<SqlIdentifier>;
    foreignTableSchema?: Nullable<SqlIdentifier>;
    foreignTableName?: Nullable<SqlIdentifier>;
    optionName?: Nullable<SqlIdentifier>;
    optionValue?: Nullable<CharacterData>;
  }

  export interface ForeignTables {
    foreignTableCatalog?: Nullable<SqlIdentifier>;
    foreignTableSchema?: Nullable<SqlIdentifier>;
    foreignTableName?: Nullable<SqlIdentifier>;
    foreignServerCatalog?: Nullable<SqlIdentifier>;
    foreignServerName?: Nullable<SqlIdentifier>;
  }

  export interface InformationSchemaCatalogName {
    catalogName?: Nullable<SqlIdentifier>;
  }

  export interface KeyColumnUsage {
    constraintCatalog?: Nullable<SqlIdentifier>;
    constraintSchema?: Nullable<SqlIdentifier>;
    constraintName?: Nullable<SqlIdentifier>;
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    columnName?: Nullable<SqlIdentifier>;
    ordinalPosition?: Nullable<CardinalNumber>;
    positionInUniqueConstraint?: Nullable<CardinalNumber>;
  }

  export interface Parameters {
    specificCatalog?: Nullable<SqlIdentifier>;
    specificSchema?: Nullable<SqlIdentifier>;
    specificName?: Nullable<SqlIdentifier>;
    ordinalPosition?: Nullable<CardinalNumber>;
    parameterMode?: Nullable<CharacterData>;
    isResult?: Nullable<YesOrNo>;
    asLocator?: Nullable<YesOrNo>;
    parameterName?: Nullable<SqlIdentifier>;
    dataType?: Nullable<CharacterData>;
    characterMaximumLength?: Nullable<CardinalNumber>;
    characterOctetLength?: Nullable<CardinalNumber>;
    characterSetCatalog?: Nullable<SqlIdentifier>;
    characterSetSchema?: Nullable<SqlIdentifier>;
    characterSetName?: Nullable<SqlIdentifier>;
    collationCatalog?: Nullable<SqlIdentifier>;
    collationSchema?: Nullable<SqlIdentifier>;
    collationName?: Nullable<SqlIdentifier>;
    numericPrecision?: Nullable<CardinalNumber>;
    numericPrecisionRadix?: Nullable<CardinalNumber>;
    numericScale?: Nullable<CardinalNumber>;
    datetimePrecision?: Nullable<CardinalNumber>;
    intervalType?: Nullable<CharacterData>;
    intervalPrecision?: Nullable<CardinalNumber>;
    udtCatalog?: Nullable<SqlIdentifier>;
    udtSchema?: Nullable<SqlIdentifier>;
    udtName?: Nullable<SqlIdentifier>;
    scopeCatalog?: Nullable<SqlIdentifier>;
    scopeSchema?: Nullable<SqlIdentifier>;
    scopeName?: Nullable<SqlIdentifier>;
    maximumCardinality?: Nullable<CardinalNumber>;
    dtdIdentifier?: Nullable<SqlIdentifier>;
    parameterDefault?: Nullable<CharacterData>;
  }

  export interface ReferentialConstraints {
    constraintCatalog?: Nullable<SqlIdentifier>;
    constraintSchema?: Nullable<SqlIdentifier>;
    constraintName?: Nullable<SqlIdentifier>;
    uniqueConstraintCatalog?: Nullable<SqlIdentifier>;
    uniqueConstraintSchema?: Nullable<SqlIdentifier>;
    uniqueConstraintName?: Nullable<SqlIdentifier>;
    matchOption?: Nullable<CharacterData>;
    updateRule?: Nullable<CharacterData>;
    deleteRule?: Nullable<CharacterData>;
  }

  export interface RoleColumnGrants {
    grantor?: Nullable<SqlIdentifier>;
    grantee?: Nullable<SqlIdentifier>;
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    columnName?: Nullable<SqlIdentifier>;
    privilegeType?: Nullable<CharacterData>;
    isGrantable?: Nullable<YesOrNo>;
  }

  export interface RoleRoutineGrants {
    grantor?: Nullable<SqlIdentifier>;
    grantee?: Nullable<SqlIdentifier>;
    specificCatalog?: Nullable<SqlIdentifier>;
    specificSchema?: Nullable<SqlIdentifier>;
    specificName?: Nullable<SqlIdentifier>;
    routineCatalog?: Nullable<SqlIdentifier>;
    routineSchema?: Nullable<SqlIdentifier>;
    routineName?: Nullable<SqlIdentifier>;
    privilegeType?: Nullable<CharacterData>;
    isGrantable?: Nullable<YesOrNo>;
  }

  export interface RoleTableGrants {
    grantor?: Nullable<SqlIdentifier>;
    grantee?: Nullable<SqlIdentifier>;
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    privilegeType?: Nullable<CharacterData>;
    isGrantable?: Nullable<YesOrNo>;
    withHierarchy?: Nullable<YesOrNo>;
  }

  export interface RoleUdtGrants {
    grantor?: Nullable<SqlIdentifier>;
    grantee?: Nullable<SqlIdentifier>;
    udtCatalog?: Nullable<SqlIdentifier>;
    udtSchema?: Nullable<SqlIdentifier>;
    udtName?: Nullable<SqlIdentifier>;
    privilegeType?: Nullable<CharacterData>;
    isGrantable?: Nullable<YesOrNo>;
  }

  export interface RoleUsageGrants {
    grantor?: Nullable<SqlIdentifier>;
    grantee?: Nullable<SqlIdentifier>;
    objectCatalog?: Nullable<SqlIdentifier>;
    objectSchema?: Nullable<SqlIdentifier>;
    objectName?: Nullable<SqlIdentifier>;
    objectType?: Nullable<CharacterData>;
    privilegeType?: Nullable<CharacterData>;
    isGrantable?: Nullable<YesOrNo>;
  }

  export interface RoutineColumnUsage {
    specificCatalog?: Nullable<SqlIdentifier>;
    specificSchema?: Nullable<SqlIdentifier>;
    specificName?: Nullable<SqlIdentifier>;
    routineCatalog?: Nullable<SqlIdentifier>;
    routineSchema?: Nullable<SqlIdentifier>;
    routineName?: Nullable<SqlIdentifier>;
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    columnName?: Nullable<SqlIdentifier>;
  }

  export interface RoutinePrivileges {
    grantor?: Nullable<SqlIdentifier>;
    grantee?: Nullable<SqlIdentifier>;
    specificCatalog?: Nullable<SqlIdentifier>;
    specificSchema?: Nullable<SqlIdentifier>;
    specificName?: Nullable<SqlIdentifier>;
    routineCatalog?: Nullable<SqlIdentifier>;
    routineSchema?: Nullable<SqlIdentifier>;
    routineName?: Nullable<SqlIdentifier>;
    privilegeType?: Nullable<CharacterData>;
    isGrantable?: Nullable<YesOrNo>;
  }

  export interface RoutineRoutineUsage {
    specificCatalog?: Nullable<SqlIdentifier>;
    specificSchema?: Nullable<SqlIdentifier>;
    specificName?: Nullable<SqlIdentifier>;
    routineCatalog?: Nullable<SqlIdentifier>;
    routineSchema?: Nullable<SqlIdentifier>;
    routineName?: Nullable<SqlIdentifier>;
  }

  export interface RoutineSequenceUsage {
    specificCatalog?: Nullable<SqlIdentifier>;
    specificSchema?: Nullable<SqlIdentifier>;
    specificName?: Nullable<SqlIdentifier>;
    routineCatalog?: Nullable<SqlIdentifier>;
    routineSchema?: Nullable<SqlIdentifier>;
    routineName?: Nullable<SqlIdentifier>;
    sequenceCatalog?: Nullable<SqlIdentifier>;
    sequenceSchema?: Nullable<SqlIdentifier>;
    sequenceName?: Nullable<SqlIdentifier>;
  }

  export interface RoutineTableUsage {
    specificCatalog?: Nullable<SqlIdentifier>;
    specificSchema?: Nullable<SqlIdentifier>;
    specificName?: Nullable<SqlIdentifier>;
    routineCatalog?: Nullable<SqlIdentifier>;
    routineSchema?: Nullable<SqlIdentifier>;
    routineName?: Nullable<SqlIdentifier>;
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
  }

  export interface Routines {
    specificCatalog?: Nullable<SqlIdentifier>;
    specificSchema?: Nullable<SqlIdentifier>;
    specificName?: Nullable<SqlIdentifier>;
    routineCatalog?: Nullable<SqlIdentifier>;
    routineSchema?: Nullable<SqlIdentifier>;
    routineName?: Nullable<SqlIdentifier>;
    routineType?: Nullable<CharacterData>;
    moduleCatalog?: Nullable<SqlIdentifier>;
    moduleSchema?: Nullable<SqlIdentifier>;
    moduleName?: Nullable<SqlIdentifier>;
    udtCatalog?: Nullable<SqlIdentifier>;
    udtSchema?: Nullable<SqlIdentifier>;
    udtName?: Nullable<SqlIdentifier>;
    dataType?: Nullable<CharacterData>;
    characterMaximumLength?: Nullable<CardinalNumber>;
    characterOctetLength?: Nullable<CardinalNumber>;
    characterSetCatalog?: Nullable<SqlIdentifier>;
    characterSetSchema?: Nullable<SqlIdentifier>;
    characterSetName?: Nullable<SqlIdentifier>;
    collationCatalog?: Nullable<SqlIdentifier>;
    collationSchema?: Nullable<SqlIdentifier>;
    collationName?: Nullable<SqlIdentifier>;
    numericPrecision?: Nullable<CardinalNumber>;
    numericPrecisionRadix?: Nullable<CardinalNumber>;
    numericScale?: Nullable<CardinalNumber>;
    datetimePrecision?: Nullable<CardinalNumber>;
    intervalType?: Nullable<CharacterData>;
    intervalPrecision?: Nullable<CardinalNumber>;
    typeUdtCatalog?: Nullable<SqlIdentifier>;
    typeUdtSchema?: Nullable<SqlIdentifier>;
    typeUdtName?: Nullable<SqlIdentifier>;
    scopeCatalog?: Nullable<SqlIdentifier>;
    scopeSchema?: Nullable<SqlIdentifier>;
    scopeName?: Nullable<SqlIdentifier>;
    maximumCardinality?: Nullable<CardinalNumber>;
    dtdIdentifier?: Nullable<SqlIdentifier>;
    routineBody?: Nullable<CharacterData>;
    routineDefinition?: Nullable<CharacterData>;
    externalName?: Nullable<CharacterData>;
    externalLanguage?: Nullable<CharacterData>;
    parameterStyle?: Nullable<CharacterData>;
    isDeterministic?: Nullable<YesOrNo>;
    sqlDataAccess?: Nullable<CharacterData>;
    isNullCall?: Nullable<YesOrNo>;
    sqlPath?: Nullable<CharacterData>;
    schemaLevelRoutine?: Nullable<YesOrNo>;
    maxDynamicResultSets?: Nullable<CardinalNumber>;
    isUserDefinedCast?: Nullable<YesOrNo>;
    isImplicitlyInvocable?: Nullable<YesOrNo>;
    securityType?: Nullable<CharacterData>;
    toSqlSpecificCatalog?: Nullable<SqlIdentifier>;
    toSqlSpecificSchema?: Nullable<SqlIdentifier>;
    toSqlSpecificName?: Nullable<SqlIdentifier>;
    asLocator?: Nullable<YesOrNo>;
    created?: Nullable<TimeStamp>;
    lastAltered?: Nullable<TimeStamp>;
    newSavepointLevel?: Nullable<YesOrNo>;
    isUdtDependent?: Nullable<YesOrNo>;
    resultCastFromDataType?: Nullable<CharacterData>;
    resultCastAsLocator?: Nullable<YesOrNo>;
    resultCastCharMaxLength?: Nullable<CardinalNumber>;
    resultCastCharOctetLength?: Nullable<CardinalNumber>;
    resultCastCharSetCatalog?: Nullable<SqlIdentifier>;
    resultCastCharSetSchema?: Nullable<SqlIdentifier>;
    resultCastCharSetName?: Nullable<SqlIdentifier>;
    resultCastCollationCatalog?: Nullable<SqlIdentifier>;
    resultCastCollationSchema?: Nullable<SqlIdentifier>;
    resultCastCollationName?: Nullable<SqlIdentifier>;
    resultCastNumericPrecision?: Nullable<CardinalNumber>;
    resultCastNumericPrecisionRadix?: Nullable<CardinalNumber>;
    resultCastNumericScale?: Nullable<CardinalNumber>;
    resultCastDatetimePrecision?: Nullable<CardinalNumber>;
    resultCastIntervalType?: Nullable<CharacterData>;
    resultCastIntervalPrecision?: Nullable<CardinalNumber>;
    resultCastTypeUdtCatalog?: Nullable<SqlIdentifier>;
    resultCastTypeUdtSchema?: Nullable<SqlIdentifier>;
    resultCastTypeUdtName?: Nullable<SqlIdentifier>;
    resultCastScopeCatalog?: Nullable<SqlIdentifier>;
    resultCastScopeSchema?: Nullable<SqlIdentifier>;
    resultCastScopeName?: Nullable<SqlIdentifier>;
    resultCastMaximumCardinality?: Nullable<CardinalNumber>;
    resultCastDtdIdentifier?: Nullable<SqlIdentifier>;
  }

  export interface Schemata {
    catalogName?: Nullable<SqlIdentifier>;
    schemaName?: Nullable<SqlIdentifier>;
    schemaOwner?: Nullable<SqlIdentifier>;
    defaultCharacterSetCatalog?: Nullable<SqlIdentifier>;
    defaultCharacterSetSchema?: Nullable<SqlIdentifier>;
    defaultCharacterSetName?: Nullable<SqlIdentifier>;
    sqlPath?: Nullable<CharacterData>;
  }

  export interface Sequences {
    sequenceCatalog?: Nullable<SqlIdentifier>;
    sequenceSchema?: Nullable<SqlIdentifier>;
    sequenceName?: Nullable<SqlIdentifier>;
    dataType?: Nullable<CharacterData>;
    numericPrecision?: Nullable<CardinalNumber>;
    numericPrecisionRadix?: Nullable<CardinalNumber>;
    numericScale?: Nullable<CardinalNumber>;
    startValue?: Nullable<CharacterData>;
    minimumValue?: Nullable<CharacterData>;
    maximumValue?: Nullable<CharacterData>;
    increment?: Nullable<CharacterData>;
    cycleOption?: Nullable<YesOrNo>;
  }

  export interface SqlFeatures {
    featureId?: Nullable<CharacterData>;
    featureName?: Nullable<CharacterData>;
    subFeatureId?: Nullable<CharacterData>;
    subFeatureName?: Nullable<CharacterData>;
    isSupported?: Nullable<YesOrNo>;
    isVerifiedBy?: Nullable<CharacterData>;
    comments?: Nullable<CharacterData>;
  }

  export type SqlIdentifier = PgCatalog.Name;

  export interface SqlImplementationInfo {
    implementationInfoId?: Nullable<CharacterData>;
    implementationInfoName?: Nullable<CharacterData>;
    integerValue?: Nullable<CardinalNumber>;
    characterValue?: Nullable<CharacterData>;
    comments?: Nullable<CharacterData>;
  }

  export interface SqlParts {
    featureId?: Nullable<CharacterData>;
    featureName?: Nullable<CharacterData>;
    isSupported?: Nullable<YesOrNo>;
    isVerifiedBy?: Nullable<CharacterData>;
    comments?: Nullable<CharacterData>;
  }

  export interface SqlSizing {
    sizingId?: Nullable<CardinalNumber>;
    sizingName?: Nullable<CharacterData>;
    supportedValue?: Nullable<CardinalNumber>;
    comments?: Nullable<CharacterData>;
  }

  export interface TableConstraints {
    constraintCatalog?: Nullable<SqlIdentifier>;
    constraintSchema?: Nullable<SqlIdentifier>;
    constraintName?: Nullable<SqlIdentifier>;
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    constraintType?: Nullable<CharacterData>;
    isDeferrable?: Nullable<YesOrNo>;
    initiallyDeferred?: Nullable<YesOrNo>;
    enforced?: Nullable<YesOrNo>;
    nullsDistinct?: Nullable<YesOrNo>;
  }

  export interface TablePrivileges {
    grantor?: Nullable<SqlIdentifier>;
    grantee?: Nullable<SqlIdentifier>;
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    privilegeType?: Nullable<CharacterData>;
    isGrantable?: Nullable<YesOrNo>;
    withHierarchy?: Nullable<YesOrNo>;
  }

  export interface Tables {
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    tableType?: Nullable<CharacterData>;
    selfReferencingColumnName?: Nullable<SqlIdentifier>;
    referenceGeneration?: Nullable<CharacterData>;
    userDefinedTypeCatalog?: Nullable<SqlIdentifier>;
    userDefinedTypeSchema?: Nullable<SqlIdentifier>;
    userDefinedTypeName?: Nullable<SqlIdentifier>;
    isInsertableInto?: Nullable<YesOrNo>;
    isTyped?: Nullable<YesOrNo>;
    commitAction?: Nullable<CharacterData>;
  }

  export type TimeStamp = PgCatalog.Timestamptz;

  export interface Transforms {
    udtCatalog?: Nullable<SqlIdentifier>;
    udtSchema?: Nullable<SqlIdentifier>;
    udtName?: Nullable<SqlIdentifier>;
    specificCatalog?: Nullable<SqlIdentifier>;
    specificSchema?: Nullable<SqlIdentifier>;
    specificName?: Nullable<SqlIdentifier>;
    groupName?: Nullable<SqlIdentifier>;
    transformType?: Nullable<CharacterData>;
  }

  export interface TriggeredUpdateColumns {
    triggerCatalog?: Nullable<SqlIdentifier>;
    triggerSchema?: Nullable<SqlIdentifier>;
    triggerName?: Nullable<SqlIdentifier>;
    eventObjectCatalog?: Nullable<SqlIdentifier>;
    eventObjectSchema?: Nullable<SqlIdentifier>;
    eventObjectTable?: Nullable<SqlIdentifier>;
    eventObjectColumn?: Nullable<SqlIdentifier>;
  }

  export interface Triggers {
    triggerCatalog?: Nullable<SqlIdentifier>;
    triggerSchema?: Nullable<SqlIdentifier>;
    triggerName?: Nullable<SqlIdentifier>;
    eventManipulation?: Nullable<CharacterData>;
    eventObjectCatalog?: Nullable<SqlIdentifier>;
    eventObjectSchema?: Nullable<SqlIdentifier>;
    eventObjectTable?: Nullable<SqlIdentifier>;
    actionOrder?: Nullable<CardinalNumber>;
    actionCondition?: Nullable<CharacterData>;
    actionStatement?: Nullable<CharacterData>;
    actionOrientation?: Nullable<CharacterData>;
    actionTiming?: Nullable<CharacterData>;
    actionReferenceOldTable?: Nullable<SqlIdentifier>;
    actionReferenceNewTable?: Nullable<SqlIdentifier>;
    actionReferenceOldRow?: Nullable<SqlIdentifier>;
    actionReferenceNewRow?: Nullable<SqlIdentifier>;
    created?: Nullable<TimeStamp>;
  }

  export interface UdtPrivileges {
    grantor?: Nullable<SqlIdentifier>;
    grantee?: Nullable<SqlIdentifier>;
    udtCatalog?: Nullable<SqlIdentifier>;
    udtSchema?: Nullable<SqlIdentifier>;
    udtName?: Nullable<SqlIdentifier>;
    privilegeType?: Nullable<CharacterData>;
    isGrantable?: Nullable<YesOrNo>;
  }

  export interface UsagePrivileges {
    grantor?: Nullable<SqlIdentifier>;
    grantee?: Nullable<SqlIdentifier>;
    objectCatalog?: Nullable<SqlIdentifier>;
    objectSchema?: Nullable<SqlIdentifier>;
    objectName?: Nullable<SqlIdentifier>;
    objectType?: Nullable<CharacterData>;
    privilegeType?: Nullable<CharacterData>;
    isGrantable?: Nullable<YesOrNo>;
  }

  export interface UserDefinedTypes {
    userDefinedTypeCatalog?: Nullable<SqlIdentifier>;
    userDefinedTypeSchema?: Nullable<SqlIdentifier>;
    userDefinedTypeName?: Nullable<SqlIdentifier>;
    userDefinedTypeCategory?: Nullable<CharacterData>;
    isInstantiable?: Nullable<YesOrNo>;
    isFinal?: Nullable<YesOrNo>;
    orderingForm?: Nullable<CharacterData>;
    orderingCategory?: Nullable<CharacterData>;
    orderingRoutineCatalog?: Nullable<SqlIdentifier>;
    orderingRoutineSchema?: Nullable<SqlIdentifier>;
    orderingRoutineName?: Nullable<SqlIdentifier>;
    referenceType?: Nullable<CharacterData>;
    dataType?: Nullable<CharacterData>;
    characterMaximumLength?: Nullable<CardinalNumber>;
    characterOctetLength?: Nullable<CardinalNumber>;
    characterSetCatalog?: Nullable<SqlIdentifier>;
    characterSetSchema?: Nullable<SqlIdentifier>;
    characterSetName?: Nullable<SqlIdentifier>;
    collationCatalog?: Nullable<SqlIdentifier>;
    collationSchema?: Nullable<SqlIdentifier>;
    collationName?: Nullable<SqlIdentifier>;
    numericPrecision?: Nullable<CardinalNumber>;
    numericPrecisionRadix?: Nullable<CardinalNumber>;
    numericScale?: Nullable<CardinalNumber>;
    datetimePrecision?: Nullable<CardinalNumber>;
    intervalType?: Nullable<CharacterData>;
    intervalPrecision?: Nullable<CardinalNumber>;
    sourceDtdIdentifier?: Nullable<SqlIdentifier>;
    refDtdIdentifier?: Nullable<SqlIdentifier>;
  }

  export interface UserMappingOptions {
    authorizationIdentifier?: Nullable<SqlIdentifier>;
    foreignServerCatalog?: Nullable<SqlIdentifier>;
    foreignServerName?: Nullable<SqlIdentifier>;
    optionName?: Nullable<SqlIdentifier>;
    optionValue?: Nullable<CharacterData>;
  }

  export interface UserMappings {
    authorizationIdentifier?: Nullable<SqlIdentifier>;
    foreignServerCatalog?: Nullable<SqlIdentifier>;
    foreignServerName?: Nullable<SqlIdentifier>;
  }

  export interface ViewColumnUsage {
    viewCatalog?: Nullable<SqlIdentifier>;
    viewSchema?: Nullable<SqlIdentifier>;
    viewName?: Nullable<SqlIdentifier>;
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    columnName?: Nullable<SqlIdentifier>;
  }

  export interface ViewRoutineUsage {
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    specificCatalog?: Nullable<SqlIdentifier>;
    specificSchema?: Nullable<SqlIdentifier>;
    specificName?: Nullable<SqlIdentifier>;
  }

  export interface ViewTableUsage {
    viewCatalog?: Nullable<SqlIdentifier>;
    viewSchema?: Nullable<SqlIdentifier>;
    viewName?: Nullable<SqlIdentifier>;
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
  }

  export interface Views {
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    viewDefinition?: Nullable<CharacterData>;
    checkOption?: Nullable<CharacterData>;
    isUpdatable?: Nullable<YesOrNo>;
    isInsertableInto?: Nullable<YesOrNo>;
    isTriggerUpdatable?: Nullable<YesOrNo>;
    isTriggerDeletable?: Nullable<YesOrNo>;
    isTriggerInsertableInto?: Nullable<YesOrNo>;
  }

  export type YesOrNo = PgCatalog.Varchar;

  export namespace Tables {
    export namespace SqlFeatures {}

    export namespace SqlImplementationInfo {}

    export namespace SqlParts {}

    export namespace SqlSizing {}
  }
}

export namespace Api {
  export type EchoTypeArray = Array<EchoType>;

  export type EchoTypeNestedArray = Array<EchoTypeNested>;

  export interface EchoType {
    echomessage?: Nullable<PgCatalog.Text>;
    at?: Nullable<PgCatalog.Timestamptz>;
  }

  export interface EchoTypeNested {
    echoes?: Nullable<EchoTypeArray>;
  }

  export interface EchoArguments {
    message: Nullable<PgCatalog.Text>;
  }

  export type EchoSingleResultsetRecord = PgCatalog.Text;

  export type EchoResultset = EchoSingleResultsetRecord[];

  export interface EchoSetArguments {
    message: Nullable<PgCatalog.Text>;
  }

  export type EchoSetSingleResultsetRecord = PgCatalog.Text;

  export type EchoSetResultset = EchoSetSingleResultsetRecord[];

  export interface EchoTableArguments {
    message: Nullable<PgCatalog.Text>;
  }

  interface EchoTableResponseRecord {
    echomessage: PgCatalog.Text;
    at: PgCatalog.Timestamptz;
  }
  export type EchoTableSingleResultsetRecord = EchoTableResponseRecord;

  export type EchoTableResultset = EchoTableSingleResultsetRecord[];

  export interface EchoTypeArguments {
    message: Nullable<PgCatalog.Text>;
  }

  export type EchoTypeSingleResultsetRecord = EchoType;

  export type EchoTypeResultset = EchoTypeSingleResultsetRecord[];

  export interface EchoTypeArrayArguments {
    message: Nullable<PgCatalog.Text>;
  }

  export type EchoTypeArraySingleResultsetRecord = EchoTypeArray;

  export type EchoTypeArrayResultset = EchoTypeArraySingleResultsetRecord[];

  export interface EchoTypeNestedArguments {
    message: Nullable<PgCatalog.Text>;
  }

  export type EchoTypeNestedSingleResultsetRecord = EchoTypeNested;

  export type EchoTypeNestedResultset = EchoTypeNestedSingleResultsetRecord[];

  export interface EchoTypeSetArguments {
    message: Nullable<PgCatalog.Text>;
  }

  export type EchoTypeSetSingleResultsetRecord = EchoType;

  export type EchoTypeSetResultset = EchoTypeSetSingleResultsetRecord[];

  export namespace Tables {}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ArgumentToPostgres = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ArgumentFromPostgres = any;
type Typecast = (x: ArgumentToPostgres) => ArgumentFromPostgres;
export interface PostgresTypecasts {
  pg_catalog__aclitem: Typecast;
  pg_catalog__bit: Typecast;
  pg_catalog__bool: Typecast;
  pg_catalog__box: Typecast;
  pg_catalog__bpchar: Typecast;
  pg_catalog__bytea: Typecast;
  pg_catalog__char: Typecast;
  pg_catalog__cid: Typecast;
  pg_catalog__cidr: Typecast;
  pg_catalog__circle: Typecast;
  pg_catalog__cstring: Typecast;
  pg_catalog__date: Typecast;
  pg_catalog__datemultirange: Typecast;
  pg_catalog__daterange: Typecast;
  pg_catalog__float4: Typecast;
  pg_catalog__float8: Typecast;
  pg_catalog__gtsvector: Typecast;
  pg_catalog__inet: Typecast;
  pg_catalog__int2: Typecast;
  pg_catalog__int2vector: Typecast;
  pg_catalog__int4: Typecast;
  pg_catalog__int4multirange: Typecast;
  pg_catalog__int4range: Typecast;
  pg_catalog__int8: Typecast;
  pg_catalog__int8multirange: Typecast;
  pg_catalog__int8range: Typecast;
  pg_catalog__interval: Typecast;
  pg_catalog__json: Typecast;
  pg_catalog__jsonb: Typecast;
  pg_catalog__jsonpath: Typecast;
  pg_catalog__line: Typecast;
  pg_catalog__lseg: Typecast;
  pg_catalog__macaddr: Typecast;
  pg_catalog__macaddr8: Typecast;
  pg_catalog__money: Typecast;
  pg_catalog__name: Typecast;
  pg_catalog__numeric: Typecast;
  pg_catalog__nummultirange: Typecast;
  pg_catalog__numrange: Typecast;
  pg_catalog__oid: Typecast;
  pg_catalog__oidvector: Typecast;
  pg_catalog__path: Typecast;
  pg_catalog__pg_aggregate: Typecast;
  pg_catalog__pg_am: Typecast;
  pg_catalog__pg_amop: Typecast;
  pg_catalog__pg_amproc: Typecast;
  pg_catalog__pg_attrdef: Typecast;
  pg_catalog__pg_attribute: Typecast;
  pg_catalog__pg_auth_members: Typecast;
  pg_catalog__pg_authid: Typecast;
  pg_catalog__pg_available_extension_versions: Typecast;
  pg_catalog__pg_available_extensions: Typecast;
  pg_catalog__pg_backend_memory_contexts: Typecast;
  pg_catalog__pg_cast: Typecast;
  pg_catalog__pg_class: Typecast;
  pg_catalog__pg_collation: Typecast;
  pg_catalog__pg_config: Typecast;
  pg_catalog__pg_constraint: Typecast;
  pg_catalog__pg_conversion: Typecast;
  pg_catalog__pg_cursors: Typecast;
  pg_catalog__pg_database: Typecast;
  pg_catalog__pg_db_role_setting: Typecast;
  pg_catalog__pg_default_acl: Typecast;
  pg_catalog__pg_depend: Typecast;
  pg_catalog__pg_description: Typecast;
  pg_catalog__pg_enum: Typecast;
  pg_catalog__pg_event_trigger: Typecast;
  pg_catalog__pg_extension: Typecast;
  pg_catalog__pg_file_settings: Typecast;
  pg_catalog__pg_foreign_data_wrapper: Typecast;
  pg_catalog__pg_foreign_server: Typecast;
  pg_catalog__pg_foreign_table: Typecast;
  pg_catalog__pg_group: Typecast;
  pg_catalog__pg_hba_file_rules: Typecast;
  pg_catalog__pg_ident_file_mappings: Typecast;
  pg_catalog__pg_index: Typecast;
  pg_catalog__pg_indexes: Typecast;
  pg_catalog__pg_inherits: Typecast;
  pg_catalog__pg_init_privs: Typecast;
  pg_catalog__pg_language: Typecast;
  pg_catalog__pg_largeobject: Typecast;
  pg_catalog__pg_largeobject_metadata: Typecast;
  pg_catalog__pg_locks: Typecast;
  pg_catalog__pg_lsn: Typecast;
  pg_catalog__pg_matviews: Typecast;
  pg_catalog__pg_namespace: Typecast;
  pg_catalog__pg_opclass: Typecast;
  pg_catalog__pg_operator: Typecast;
  pg_catalog__pg_opfamily: Typecast;
  pg_catalog__pg_parameter_acl: Typecast;
  pg_catalog__pg_partitioned_table: Typecast;
  pg_catalog__pg_policies: Typecast;
  pg_catalog__pg_policy: Typecast;
  pg_catalog__pg_prepared_statements: Typecast;
  pg_catalog__pg_prepared_xacts: Typecast;
  pg_catalog__pg_proc: Typecast;
  pg_catalog__pg_publication: Typecast;
  pg_catalog__pg_publication_namespace: Typecast;
  pg_catalog__pg_publication_rel: Typecast;
  pg_catalog__pg_publication_tables: Typecast;
  pg_catalog__pg_range: Typecast;
  pg_catalog__pg_replication_origin: Typecast;
  pg_catalog__pg_replication_origin_status: Typecast;
  pg_catalog__pg_replication_slots: Typecast;
  pg_catalog__pg_rewrite: Typecast;
  pg_catalog__pg_roles: Typecast;
  pg_catalog__pg_rules: Typecast;
  pg_catalog__pg_seclabel: Typecast;
  pg_catalog__pg_seclabels: Typecast;
  pg_catalog__pg_sequence: Typecast;
  pg_catalog__pg_sequences: Typecast;
  pg_catalog__pg_settings: Typecast;
  pg_catalog__pg_shadow: Typecast;
  pg_catalog__pg_shdepend: Typecast;
  pg_catalog__pg_shdescription: Typecast;
  pg_catalog__pg_shmem_allocations: Typecast;
  pg_catalog__pg_shseclabel: Typecast;
  pg_catalog__pg_snapshot: Typecast;
  pg_catalog__pg_stat_activity: Typecast;
  pg_catalog__pg_stat_all_indexes: Typecast;
  pg_catalog__pg_stat_all_tables: Typecast;
  pg_catalog__pg_stat_archiver: Typecast;
  pg_catalog__pg_stat_bgwriter: Typecast;
  pg_catalog__pg_stat_database: Typecast;
  pg_catalog__pg_stat_database_conflicts: Typecast;
  pg_catalog__pg_stat_gssapi: Typecast;
  pg_catalog__pg_stat_io: Typecast;
  pg_catalog__pg_stat_progress_analyze: Typecast;
  pg_catalog__pg_stat_progress_basebackup: Typecast;
  pg_catalog__pg_stat_progress_cluster: Typecast;
  pg_catalog__pg_stat_progress_copy: Typecast;
  pg_catalog__pg_stat_progress_create_index: Typecast;
  pg_catalog__pg_stat_progress_vacuum: Typecast;
  pg_catalog__pg_stat_recovery_prefetch: Typecast;
  pg_catalog__pg_stat_replication: Typecast;
  pg_catalog__pg_stat_replication_slots: Typecast;
  pg_catalog__pg_stat_slru: Typecast;
  pg_catalog__pg_stat_ssl: Typecast;
  pg_catalog__pg_stat_subscription: Typecast;
  pg_catalog__pg_stat_subscription_stats: Typecast;
  pg_catalog__pg_stat_sys_indexes: Typecast;
  pg_catalog__pg_stat_sys_tables: Typecast;
  pg_catalog__pg_stat_user_functions: Typecast;
  pg_catalog__pg_stat_user_indexes: Typecast;
  pg_catalog__pg_stat_user_tables: Typecast;
  pg_catalog__pg_stat_wal: Typecast;
  pg_catalog__pg_stat_wal_receiver: Typecast;
  pg_catalog__pg_stat_xact_all_tables: Typecast;
  pg_catalog__pg_stat_xact_sys_tables: Typecast;
  pg_catalog__pg_stat_xact_user_functions: Typecast;
  pg_catalog__pg_stat_xact_user_tables: Typecast;
  pg_catalog__pg_statio_all_indexes: Typecast;
  pg_catalog__pg_statio_all_sequences: Typecast;
  pg_catalog__pg_statio_all_tables: Typecast;
  pg_catalog__pg_statio_sys_indexes: Typecast;
  pg_catalog__pg_statio_sys_sequences: Typecast;
  pg_catalog__pg_statio_sys_tables: Typecast;
  pg_catalog__pg_statio_user_indexes: Typecast;
  pg_catalog__pg_statio_user_sequences: Typecast;
  pg_catalog__pg_statio_user_tables: Typecast;
  pg_catalog__pg_statistic: Typecast;
  pg_catalog__pg_statistic_ext: Typecast;
  pg_catalog__pg_statistic_ext_data: Typecast;
  pg_catalog__pg_stats: Typecast;
  pg_catalog__pg_stats_ext: Typecast;
  pg_catalog__pg_stats_ext_exprs: Typecast;
  pg_catalog__pg_subscription: Typecast;
  pg_catalog__pg_subscription_rel: Typecast;
  pg_catalog__pg_tables: Typecast;
  pg_catalog__pg_tablespace: Typecast;
  pg_catalog__pg_timezone_abbrevs: Typecast;
  pg_catalog__pg_timezone_names: Typecast;
  pg_catalog__pg_transform: Typecast;
  pg_catalog__pg_trigger: Typecast;
  pg_catalog__pg_ts_config: Typecast;
  pg_catalog__pg_ts_config_map: Typecast;
  pg_catalog__pg_ts_dict: Typecast;
  pg_catalog__pg_ts_parser: Typecast;
  pg_catalog__pg_ts_template: Typecast;
  pg_catalog__pg_type: Typecast;
  pg_catalog__pg_user: Typecast;
  pg_catalog__pg_user_mapping: Typecast;
  pg_catalog__pg_user_mappings: Typecast;
  pg_catalog__pg_views: Typecast;
  pg_catalog__point: Typecast;
  pg_catalog__polygon: Typecast;
  pg_catalog__record: Typecast;
  pg_catalog__refcursor: Typecast;
  pg_catalog__regclass: Typecast;
  pg_catalog__regcollation: Typecast;
  pg_catalog__regconfig: Typecast;
  pg_catalog__regdictionary: Typecast;
  pg_catalog__regnamespace: Typecast;
  pg_catalog__regoper: Typecast;
  pg_catalog__regoperator: Typecast;
  pg_catalog__regproc: Typecast;
  pg_catalog__regprocedure: Typecast;
  pg_catalog__regrole: Typecast;
  pg_catalog__regtype: Typecast;
  pg_catalog__text: Typecast;
  pg_catalog__tid: Typecast;
  pg_catalog__time: Typecast;
  pg_catalog__timestamp: Typecast;
  pg_catalog__timestamptz: Typecast;
  pg_catalog__timetz: Typecast;
  pg_catalog__tsmultirange: Typecast;
  pg_catalog__tsquery: Typecast;
  pg_catalog__tsrange: Typecast;
  pg_catalog__tstzmultirange: Typecast;
  pg_catalog__tstzrange: Typecast;
  pg_catalog__tsvector: Typecast;
  pg_catalog__txid_snapshot: Typecast;
  pg_catalog__uuid: Typecast;
  pg_catalog__varbit: Typecast;
  pg_catalog__varchar: Typecast;
  pg_catalog__xid: Typecast;
  pg_catalog__xid8: Typecast;
  pg_catalog__xml: Typecast;
  pg_catalog_aclitem: Typecast;
  pg_catalog_any: Typecast;
  pg_catalog_anyarray: Typecast;
  pg_catalog_anycompatible: Typecast;
  pg_catalog_anycompatiblearray: Typecast;
  pg_catalog_anycompatiblemultirange: Typecast;
  pg_catalog_anycompatiblenonarray: Typecast;
  pg_catalog_anycompatiblerange: Typecast;
  pg_catalog_anyelement: Typecast;
  pg_catalog_anyenum: Typecast;
  pg_catalog_anymultirange: Typecast;
  pg_catalog_anynonarray: Typecast;
  pg_catalog_anyrange: Typecast;
  pg_catalog_bit: Typecast;
  pg_catalog_bool: Typecast;
  pg_catalog_box: Typecast;
  pg_catalog_bpchar: Typecast;
  pg_catalog_bytea: Typecast;
  pg_catalog_char: Typecast;
  pg_catalog_cid: Typecast;
  pg_catalog_cidr: Typecast;
  pg_catalog_circle: Typecast;
  pg_catalog_cstring: Typecast;
  pg_catalog_date: Typecast;
  pg_catalog_datemultirange: Typecast;
  pg_catalog_daterange: Typecast;
  pg_catalog_event_trigger: Typecast;
  pg_catalog_fdw_handler: Typecast;
  pg_catalog_float4: Typecast;
  pg_catalog_float8: Typecast;
  pg_catalog_gtsvector: Typecast;
  pg_catalog_index_am_handler: Typecast;
  pg_catalog_inet: Typecast;
  pg_catalog_int2: Typecast;
  pg_catalog_int2vector: Typecast;
  pg_catalog_int4: Typecast;
  pg_catalog_int4multirange: Typecast;
  pg_catalog_int4range: Typecast;
  pg_catalog_int8: Typecast;
  pg_catalog_int8multirange: Typecast;
  pg_catalog_int8range: Typecast;
  pg_catalog_internal: Typecast;
  pg_catalog_interval: Typecast;
  pg_catalog_json: Typecast;
  pg_catalog_jsonb: Typecast;
  pg_catalog_jsonpath: Typecast;
  pg_catalog_language_handler: Typecast;
  pg_catalog_line: Typecast;
  pg_catalog_lseg: Typecast;
  pg_catalog_macaddr: Typecast;
  pg_catalog_macaddr8: Typecast;
  pg_catalog_money: Typecast;
  pg_catalog_name: Typecast;
  pg_catalog_numeric: Typecast;
  pg_catalog_nummultirange: Typecast;
  pg_catalog_numrange: Typecast;
  pg_catalog_oid: Typecast;
  pg_catalog_oidvector: Typecast;
  pg_catalog_path: Typecast;
  pg_catalog_pg_aggregate: Typecast;
  pg_catalog_pg_am: Typecast;
  pg_catalog_pg_amop: Typecast;
  pg_catalog_pg_amproc: Typecast;
  pg_catalog_pg_attrdef: Typecast;
  pg_catalog_pg_attribute: Typecast;
  pg_catalog_pg_auth_members: Typecast;
  pg_catalog_pg_authid: Typecast;
  pg_catalog_pg_available_extension_versions: Typecast;
  pg_catalog_pg_available_extensions: Typecast;
  pg_catalog_pg_backend_memory_contexts: Typecast;
  pg_catalog_pg_brin_bloom_summary: Typecast;
  pg_catalog_pg_brin_minmax_multi_summary: Typecast;
  pg_catalog_pg_cast: Typecast;
  pg_catalog_pg_class: Typecast;
  pg_catalog_pg_collation: Typecast;
  pg_catalog_pg_config: Typecast;
  pg_catalog_pg_constraint: Typecast;
  pg_catalog_pg_conversion: Typecast;
  pg_catalog_pg_cursors: Typecast;
  pg_catalog_pg_database: Typecast;
  pg_catalog_pg_db_role_setting: Typecast;
  pg_catalog_pg_ddl_command: Typecast;
  pg_catalog_pg_default_acl: Typecast;
  pg_catalog_pg_depend: Typecast;
  pg_catalog_pg_dependencies: Typecast;
  pg_catalog_pg_description: Typecast;
  pg_catalog_pg_enum: Typecast;
  pg_catalog_pg_event_trigger: Typecast;
  pg_catalog_pg_extension: Typecast;
  pg_catalog_pg_file_settings: Typecast;
  pg_catalog_pg_foreign_data_wrapper: Typecast;
  pg_catalog_pg_foreign_server: Typecast;
  pg_catalog_pg_foreign_table: Typecast;
  pg_catalog_pg_group: Typecast;
  pg_catalog_pg_hba_file_rules: Typecast;
  pg_catalog_pg_ident_file_mappings: Typecast;
  pg_catalog_pg_index: Typecast;
  pg_catalog_pg_indexes: Typecast;
  pg_catalog_pg_inherits: Typecast;
  pg_catalog_pg_init_privs: Typecast;
  pg_catalog_pg_language: Typecast;
  pg_catalog_pg_largeobject: Typecast;
  pg_catalog_pg_largeobject_metadata: Typecast;
  pg_catalog_pg_locks: Typecast;
  pg_catalog_pg_lsn: Typecast;
  pg_catalog_pg_matviews: Typecast;
  pg_catalog_pg_mcv_list: Typecast;
  pg_catalog_pg_namespace: Typecast;
  pg_catalog_pg_ndistinct: Typecast;
  pg_catalog_pg_node_tree: Typecast;
  pg_catalog_pg_opclass: Typecast;
  pg_catalog_pg_operator: Typecast;
  pg_catalog_pg_opfamily: Typecast;
  pg_catalog_pg_parameter_acl: Typecast;
  pg_catalog_pg_partitioned_table: Typecast;
  pg_catalog_pg_policies: Typecast;
  pg_catalog_pg_policy: Typecast;
  pg_catalog_pg_prepared_statements: Typecast;
  pg_catalog_pg_prepared_xacts: Typecast;
  pg_catalog_pg_proc: Typecast;
  pg_catalog_pg_publication: Typecast;
  pg_catalog_pg_publication_namespace: Typecast;
  pg_catalog_pg_publication_rel: Typecast;
  pg_catalog_pg_publication_tables: Typecast;
  pg_catalog_pg_range: Typecast;
  pg_catalog_pg_replication_origin: Typecast;
  pg_catalog_pg_replication_origin_status: Typecast;
  pg_catalog_pg_replication_slots: Typecast;
  pg_catalog_pg_rewrite: Typecast;
  pg_catalog_pg_roles: Typecast;
  pg_catalog_pg_rules: Typecast;
  pg_catalog_pg_seclabel: Typecast;
  pg_catalog_pg_seclabels: Typecast;
  pg_catalog_pg_sequence: Typecast;
  pg_catalog_pg_sequences: Typecast;
  pg_catalog_pg_settings: Typecast;
  pg_catalog_pg_shadow: Typecast;
  pg_catalog_pg_shdepend: Typecast;
  pg_catalog_pg_shdescription: Typecast;
  pg_catalog_pg_shmem_allocations: Typecast;
  pg_catalog_pg_shseclabel: Typecast;
  pg_catalog_pg_snapshot: Typecast;
  pg_catalog_pg_stat_activity: Typecast;
  pg_catalog_pg_stat_all_indexes: Typecast;
  pg_catalog_pg_stat_all_tables: Typecast;
  pg_catalog_pg_stat_archiver: Typecast;
  pg_catalog_pg_stat_bgwriter: Typecast;
  pg_catalog_pg_stat_database: Typecast;
  pg_catalog_pg_stat_database_conflicts: Typecast;
  pg_catalog_pg_stat_gssapi: Typecast;
  pg_catalog_pg_stat_io: Typecast;
  pg_catalog_pg_stat_progress_analyze: Typecast;
  pg_catalog_pg_stat_progress_basebackup: Typecast;
  pg_catalog_pg_stat_progress_cluster: Typecast;
  pg_catalog_pg_stat_progress_copy: Typecast;
  pg_catalog_pg_stat_progress_create_index: Typecast;
  pg_catalog_pg_stat_progress_vacuum: Typecast;
  pg_catalog_pg_stat_recovery_prefetch: Typecast;
  pg_catalog_pg_stat_replication: Typecast;
  pg_catalog_pg_stat_replication_slots: Typecast;
  pg_catalog_pg_stat_slru: Typecast;
  pg_catalog_pg_stat_ssl: Typecast;
  pg_catalog_pg_stat_subscription: Typecast;
  pg_catalog_pg_stat_subscription_stats: Typecast;
  pg_catalog_pg_stat_sys_indexes: Typecast;
  pg_catalog_pg_stat_sys_tables: Typecast;
  pg_catalog_pg_stat_user_functions: Typecast;
  pg_catalog_pg_stat_user_indexes: Typecast;
  pg_catalog_pg_stat_user_tables: Typecast;
  pg_catalog_pg_stat_wal: Typecast;
  pg_catalog_pg_stat_wal_receiver: Typecast;
  pg_catalog_pg_stat_xact_all_tables: Typecast;
  pg_catalog_pg_stat_xact_sys_tables: Typecast;
  pg_catalog_pg_stat_xact_user_functions: Typecast;
  pg_catalog_pg_stat_xact_user_tables: Typecast;
  pg_catalog_pg_statio_all_indexes: Typecast;
  pg_catalog_pg_statio_all_sequences: Typecast;
  pg_catalog_pg_statio_all_tables: Typecast;
  pg_catalog_pg_statio_sys_indexes: Typecast;
  pg_catalog_pg_statio_sys_sequences: Typecast;
  pg_catalog_pg_statio_sys_tables: Typecast;
  pg_catalog_pg_statio_user_indexes: Typecast;
  pg_catalog_pg_statio_user_sequences: Typecast;
  pg_catalog_pg_statio_user_tables: Typecast;
  pg_catalog_pg_statistic: Typecast;
  pg_catalog_pg_statistic_ext: Typecast;
  pg_catalog_pg_statistic_ext_data: Typecast;
  pg_catalog_pg_stats: Typecast;
  pg_catalog_pg_stats_ext: Typecast;
  pg_catalog_pg_stats_ext_exprs: Typecast;
  pg_catalog_pg_subscription: Typecast;
  pg_catalog_pg_subscription_rel: Typecast;
  pg_catalog_pg_tables: Typecast;
  pg_catalog_pg_tablespace: Typecast;
  pg_catalog_pg_timezone_abbrevs: Typecast;
  pg_catalog_pg_timezone_names: Typecast;
  pg_catalog_pg_transform: Typecast;
  pg_catalog_pg_trigger: Typecast;
  pg_catalog_pg_ts_config: Typecast;
  pg_catalog_pg_ts_config_map: Typecast;
  pg_catalog_pg_ts_dict: Typecast;
  pg_catalog_pg_ts_parser: Typecast;
  pg_catalog_pg_ts_template: Typecast;
  pg_catalog_pg_type: Typecast;
  pg_catalog_pg_user: Typecast;
  pg_catalog_pg_user_mapping: Typecast;
  pg_catalog_pg_user_mappings: Typecast;
  pg_catalog_pg_views: Typecast;
  pg_catalog_point: Typecast;
  pg_catalog_polygon: Typecast;
  pg_catalog_record: Typecast;
  pg_catalog_refcursor: Typecast;
  pg_catalog_regclass: Typecast;
  pg_catalog_regcollation: Typecast;
  pg_catalog_regconfig: Typecast;
  pg_catalog_regdictionary: Typecast;
  pg_catalog_regnamespace: Typecast;
  pg_catalog_regoper: Typecast;
  pg_catalog_regoperator: Typecast;
  pg_catalog_regproc: Typecast;
  pg_catalog_regprocedure: Typecast;
  pg_catalog_regrole: Typecast;
  pg_catalog_regtype: Typecast;
  pg_catalog_table_am_handler: Typecast;
  pg_catalog_text: Typecast;
  pg_catalog_tid: Typecast;
  pg_catalog_time: Typecast;
  pg_catalog_timestamp: Typecast;
  pg_catalog_timestamptz: Typecast;
  pg_catalog_timetz: Typecast;
  pg_catalog_trigger: Typecast;
  pg_catalog_tsm_handler: Typecast;
  pg_catalog_tsmultirange: Typecast;
  pg_catalog_tsquery: Typecast;
  pg_catalog_tsrange: Typecast;
  pg_catalog_tstzmultirange: Typecast;
  pg_catalog_tstzrange: Typecast;
  pg_catalog_tsvector: Typecast;
  pg_catalog_txid_snapshot: Typecast;
  pg_catalog_unknown: Typecast;
  pg_catalog_uuid: Typecast;
  pg_catalog_varbit: Typecast;
  pg_catalog_varchar: Typecast;
  pg_catalog_void: Typecast;
  pg_catalog_xid: Typecast;
  pg_catalog_xid8: Typecast;
  pg_catalog_xml: Typecast;
  information_schema__administrable_role_authorizations: Typecast;
  information_schema__applicable_roles: Typecast;
  information_schema__attributes: Typecast;
  information_schema__cardinal_number: Typecast;
  information_schema__character_data: Typecast;
  information_schema__character_sets: Typecast;
  information_schema__check_constraint_routine_usage: Typecast;
  information_schema__check_constraints: Typecast;
  information_schema__collation_character_set_applicability: Typecast;
  information_schema__collations: Typecast;
  information_schema__column_column_usage: Typecast;
  information_schema__column_domain_usage: Typecast;
  information_schema__column_options: Typecast;
  information_schema__column_privileges: Typecast;
  information_schema__column_udt_usage: Typecast;
  information_schema__columns: Typecast;
  information_schema__constraint_column_usage: Typecast;
  information_schema__constraint_table_usage: Typecast;
  information_schema__data_type_privileges: Typecast;
  information_schema__domain_constraints: Typecast;
  information_schema__domain_udt_usage: Typecast;
  information_schema__domains: Typecast;
  information_schema__element_types: Typecast;
  information_schema__enabled_roles: Typecast;
  information_schema__foreign_data_wrapper_options: Typecast;
  information_schema__foreign_data_wrappers: Typecast;
  information_schema__foreign_server_options: Typecast;
  information_schema__foreign_servers: Typecast;
  information_schema__foreign_table_options: Typecast;
  information_schema__foreign_tables: Typecast;
  information_schema__information_schema_catalog_name: Typecast;
  information_schema__key_column_usage: Typecast;
  information_schema__parameters: Typecast;
  information_schema__pg_foreign_data_wrappers: Typecast;
  information_schema__pg_foreign_servers: Typecast;
  information_schema__pg_foreign_table_columns: Typecast;
  information_schema__pg_foreign_tables: Typecast;
  information_schema__pg_user_mappings: Typecast;
  information_schema__referential_constraints: Typecast;
  information_schema__role_column_grants: Typecast;
  information_schema__role_routine_grants: Typecast;
  information_schema__role_table_grants: Typecast;
  information_schema__role_udt_grants: Typecast;
  information_schema__role_usage_grants: Typecast;
  information_schema__routine_column_usage: Typecast;
  information_schema__routine_privileges: Typecast;
  information_schema__routine_routine_usage: Typecast;
  information_schema__routine_sequence_usage: Typecast;
  information_schema__routine_table_usage: Typecast;
  information_schema__routines: Typecast;
  information_schema__schemata: Typecast;
  information_schema__sequences: Typecast;
  information_schema__sql_features: Typecast;
  information_schema__sql_identifier: Typecast;
  information_schema__sql_implementation_info: Typecast;
  information_schema__sql_parts: Typecast;
  information_schema__sql_sizing: Typecast;
  information_schema__table_constraints: Typecast;
  information_schema__table_privileges: Typecast;
  information_schema__tables: Typecast;
  information_schema__time_stamp: Typecast;
  information_schema__transforms: Typecast;
  information_schema__triggered_update_columns: Typecast;
  information_schema__triggers: Typecast;
  information_schema__udt_privileges: Typecast;
  information_schema__usage_privileges: Typecast;
  information_schema__user_defined_types: Typecast;
  information_schema__user_mapping_options: Typecast;
  information_schema__user_mappings: Typecast;
  information_schema__view_column_usage: Typecast;
  information_schema__view_routine_usage: Typecast;
  information_schema__view_table_usage: Typecast;
  information_schema__views: Typecast;
  information_schema__yes_or_no: Typecast;
  information_schema_administrable_role_authorizations: Typecast;
  information_schema_applicable_roles: Typecast;
  information_schema_attributes: Typecast;
  information_schema_cardinal_number: Typecast;
  information_schema_character_data: Typecast;
  information_schema_character_sets: Typecast;
  information_schema_check_constraint_routine_usage: Typecast;
  information_schema_check_constraints: Typecast;
  information_schema_collation_character_set_applicability: Typecast;
  information_schema_collations: Typecast;
  information_schema_column_column_usage: Typecast;
  information_schema_column_domain_usage: Typecast;
  information_schema_column_options: Typecast;
  information_schema_column_privileges: Typecast;
  information_schema_column_udt_usage: Typecast;
  information_schema_columns: Typecast;
  information_schema_constraint_column_usage: Typecast;
  information_schema_constraint_table_usage: Typecast;
  information_schema_data_type_privileges: Typecast;
  information_schema_domain_constraints: Typecast;
  information_schema_domain_udt_usage: Typecast;
  information_schema_domains: Typecast;
  information_schema_element_types: Typecast;
  information_schema_enabled_roles: Typecast;
  information_schema_foreign_data_wrapper_options: Typecast;
  information_schema_foreign_data_wrappers: Typecast;
  information_schema_foreign_server_options: Typecast;
  information_schema_foreign_servers: Typecast;
  information_schema_foreign_table_options: Typecast;
  information_schema_foreign_tables: Typecast;
  information_schema_information_schema_catalog_name: Typecast;
  information_schema_key_column_usage: Typecast;
  information_schema_parameters: Typecast;
  information_schema_referential_constraints: Typecast;
  information_schema_role_column_grants: Typecast;
  information_schema_role_routine_grants: Typecast;
  information_schema_role_table_grants: Typecast;
  information_schema_role_udt_grants: Typecast;
  information_schema_role_usage_grants: Typecast;
  information_schema_routine_column_usage: Typecast;
  information_schema_routine_privileges: Typecast;
  information_schema_routine_routine_usage: Typecast;
  information_schema_routine_sequence_usage: Typecast;
  information_schema_routine_table_usage: Typecast;
  information_schema_routines: Typecast;
  information_schema_schemata: Typecast;
  information_schema_sequences: Typecast;
  information_schema_sql_features: Typecast;
  information_schema_sql_identifier: Typecast;
  information_schema_sql_implementation_info: Typecast;
  information_schema_sql_parts: Typecast;
  information_schema_sql_sizing: Typecast;
  information_schema_table_constraints: Typecast;
  information_schema_table_privileges: Typecast;
  information_schema_tables: Typecast;
  information_schema_time_stamp: Typecast;
  information_schema_transforms: Typecast;
  information_schema_triggered_update_columns: Typecast;
  information_schema_triggers: Typecast;
  information_schema_udt_privileges: Typecast;
  information_schema_usage_privileges: Typecast;
  information_schema_user_defined_types: Typecast;
  information_schema_user_mapping_options: Typecast;
  information_schema_user_mappings: Typecast;
  information_schema_view_column_usage: Typecast;
  information_schema_view_routine_usage: Typecast;
  information_schema_view_table_usage: Typecast;
  information_schema_views: Typecast;
  information_schema_yes_or_no: Typecast;
  api__echo_type: Typecast;
  api__echo_type_nested: Typecast;
  api_echo_type: Typecast;
  api_echo_type_nested: Typecast;
}

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

  /**
   * Use the database inside a transaction.
   *
   * A successful return is a commit.
   * An escaping exception is a rollback.
   */
  async withTransaction<T>(body: (database: Database) => Promise<T>) {
    return await this.context.sql.begin(
      async (sql) => await body(new Database({ ...this.context, sql })),
    );
  }

  /**
   * Returns a database scoped to a new transaction.
   * You must explicitly call `rollback` or `commit`.
   */
  async beginTransaction() {
    return await new Promise<{
      database: Database;
      commit: () => void;
      rollback: (message?: string) => void;
    }>((resolveReady) => {
      const complete = new Promise((resolve, reject) => {
        this.context.sql
          .begin(async (sql) => {
            resolveReady({
              database: new Database({ ...this.context, sql }),
              commit: () => resolve(true),
              rollback: (message?: string) => reject(message),
            });
            await complete;
          })
          .catch((reason) => reason);
      });
    });
  }

  public PgCatalog = new (class implements HasDatabase {
    constructor(public database: Database) {}

    public PgStatistic = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byStarelidStaattnumStainherit(
        parameters: PgCatalog.Tables.PgStatistic.ByStarelidStaattnumStainherit,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT starelid,staattnum,stainherit,stanullfrac,stawidth,stadistinct,stakind1,stakind2,stakind3,stakind4,stakind5,staop1,staop2,staop3,staop4,staop5,stacoll1,stacoll2,stacoll3,stacoll4,stacoll5,stanumbers1,stanumbers2,stanumbers3,stanumbers4,stanumbers5,stavalues1,stavalues2,stavalues3,stavalues4,stavalues5 FROM pg_catalog.pg_statistic WHERE starelid = ${
            parameters.starelid === undefined
              ? "starelid"
              : typed.pg_catalog_oid(parameters.starelid)
          } AND staattnum = ${
            parameters.staattnum === undefined
              ? "staattnum"
              : typed.pg_catalog_int2(parameters.staattnum)
          } AND stainherit = ${
            parameters.stainherit === undefined
              ? "stainherit"
              : typed.pg_catalog_bool(parameters.stainherit)
          }`;

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

      async deleteByStarelidStaattnumStainherit(
        parameters: PgCatalog.Tables.PgStatistic.ByStarelidStaattnumStainherit,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_statistic WHERE starelid = ${
            parameters.starelid === undefined
              ? "starelid"
              : typed.pg_catalog_oid(parameters.starelid)
          } AND staattnum = ${
            parameters.staattnum === undefined
              ? "staattnum"
              : typed.pg_catalog_int2(parameters.staattnum)
          } AND stainherit = ${
            parameters.stainherit === undefined
              ? "stainherit"
              : typed.pg_catalog_bool(parameters.stainherit)
          } RETURNING starelid,staattnum,stainherit,stanullfrac,stawidth,stadistinct,stakind1,stakind2,stakind3,stakind4,stakind5,staop1,staop2,staop3,staop4,staop5,stacoll1,stacoll2,stacoll3,stacoll4,stacoll5,stanumbers1,stanumbers2,stanumbers3,stanumbers4,stanumbers5,stavalues1,stavalues2,stavalues3,stavalues4,stavalues5
      `;

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

      async byOid(parameters: PgCatalog.Tables.PgType.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,typname,typnamespace,typowner,typlen,typbyval,typtype,typcategory,typispreferred,typisdefined,typdelim,typrelid,typsubscript,typelem,typarray,typinput,typoutput,typreceive,typsend,typmodin,typmodout,typanalyze,typalign,typstorage,typnotnull,typbasetype,typtypmod,typndims,typcollation,typdefaultbin,typdefault,typacl FROM pg_catalog.pg_type WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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
        parameters: PgCatalog.Tables.PgType.ByTypnameTypnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,typname,typnamespace,typowner,typlen,typbyval,typtype,typcategory,typispreferred,typisdefined,typdelim,typrelid,typsubscript,typelem,typarray,typinput,typoutput,typreceive,typsend,typmodin,typmodout,typanalyze,typalign,typstorage,typnotnull,typbasetype,typtypmod,typndims,typcollation,typdefaultbin,typdefault,typacl FROM pg_catalog.pg_type WHERE typname = ${
            parameters.typname === undefined
              ? "typname"
              : typed.pg_catalog_cstring(parameters.typname)
          } AND typnamespace = ${
            parameters.typnamespace === undefined
              ? "typnamespace"
              : typed.pg_catalog_oid(parameters.typnamespace)
          }`;

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

      async deleteByOid(parameters: PgCatalog.Tables.PgType.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`DELETE FROM pg_catalog.pg_type WHERE oid = ${
          parameters.oid === undefined
            ? "oid"
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,typname,typnamespace,typowner,typlen,typbyval,typtype,typcategory,typispreferred,typisdefined,typdelim,typrelid,typsubscript,typelem,typarray,typinput,typoutput,typreceive,typsend,typmodin,typmodout,typanalyze,typalign,typstorage,typnotnull,typbasetype,typtypmod,typndims,typcollation,typdefaultbin,typdefault,typacl
      `;

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
      async deleteByTypnameTypnamespace(
        parameters: PgCatalog.Tables.PgType.ByTypnameTypnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_type WHERE typname = ${
            parameters.typname === undefined
              ? "typname"
              : typed.pg_catalog_cstring(parameters.typname)
          } AND typnamespace = ${
            parameters.typnamespace === undefined
              ? "typnamespace"
              : typed.pg_catalog_oid(parameters.typnamespace)
          } RETURNING oid,typname,typnamespace,typowner,typlen,typbyval,typtype,typcategory,typispreferred,typisdefined,typdelim,typrelid,typsubscript,typelem,typarray,typinput,typoutput,typreceive,typsend,typmodin,typmodout,typanalyze,typalign,typstorage,typnotnull,typbasetype,typtypmod,typndims,typcollation,typdefaultbin,typdefault,typacl
      `;

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

      async byFtrelid(parameters: PgCatalog.Tables.PgForeignTable.ByFtrelid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT ftrelid,ftserver,ftoptions FROM pg_catalog.pg_foreign_table WHERE ftrelid = ${
            parameters.ftrelid === undefined
              ? "ftrelid"
              : typed.pg_catalog_oid(parameters.ftrelid)
          }`;

        const results = response.map((record) => ({
          ftrelid: undefinedIsNull(record.ftrelid),
          ftserver: undefinedIsNull(record.ftserver),
          ftoptions: undefinedIsNull(record.ftoptions),
        }));
        return results[0];
      }

      async deleteByFtrelid(
        parameters: PgCatalog.Tables.PgForeignTable.ByFtrelid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_foreign_table WHERE ftrelid = ${
            parameters.ftrelid === undefined
              ? "ftrelid"
              : typed.pg_catalog_oid(parameters.ftrelid)
          } RETURNING ftrelid,ftserver,ftoptions
      `;

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

      async byOid(parameters: PgCatalog.Tables.PgAuthid.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,rolname,rolsuper,rolinherit,rolcreaterole,rolcreatedb,rolcanlogin,rolreplication,rolbypassrls,rolconnlimit,rolpassword,rolvaliduntil FROM pg_catalog.pg_authid WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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
      async byRolname(parameters: PgCatalog.Tables.PgAuthid.ByRolname) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,rolname,rolsuper,rolinherit,rolcreaterole,rolcreatedb,rolcanlogin,rolreplication,rolbypassrls,rolconnlimit,rolpassword,rolvaliduntil FROM pg_catalog.pg_authid WHERE rolname = ${
            parameters.rolname === undefined
              ? "rolname"
              : typed.pg_catalog_cstring(parameters.rolname)
          }`;

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

      async deleteByOid(parameters: PgCatalog.Tables.PgAuthid.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_authid WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,rolname,rolsuper,rolinherit,rolcreaterole,rolcreatedb,rolcanlogin,rolreplication,rolbypassrls,rolconnlimit,rolpassword,rolvaliduntil
      `;

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
      async deleteByRolname(parameters: PgCatalog.Tables.PgAuthid.ByRolname) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_authid WHERE rolname = ${
            parameters.rolname === undefined
              ? "rolname"
              : typed.pg_catalog_cstring(parameters.rolname)
          } RETURNING oid,rolname,rolsuper,rolinherit,rolcreaterole,rolcreatedb,rolcanlogin,rolreplication,rolbypassrls,rolconnlimit,rolpassword,rolvaliduntil
      `;

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
        parameters: PgCatalog.Tables.PgStatisticExtData.ByStxoidStxdinherit,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT stxoid,stxdinherit,stxdndistinct,stxddependencies,stxdmcv,stxdexpr FROM pg_catalog.pg_statistic_ext_data WHERE stxoid = ${
            parameters.stxoid === undefined
              ? "stxoid"
              : typed.pg_catalog_oid(parameters.stxoid)
          } AND stxdinherit = ${
            parameters.stxdinherit === undefined
              ? "stxdinherit"
              : typed.pg_catalog_bool(parameters.stxdinherit)
          }`;

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

      async deleteByStxoidStxdinherit(
        parameters: PgCatalog.Tables.PgStatisticExtData.ByStxoidStxdinherit,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_statistic_ext_data WHERE stxoid = ${
            parameters.stxoid === undefined
              ? "stxoid"
              : typed.pg_catalog_oid(parameters.stxoid)
          } AND stxdinherit = ${
            parameters.stxdinherit === undefined
              ? "stxdinherit"
              : typed.pg_catalog_bool(parameters.stxdinherit)
          } RETURNING stxoid,stxdinherit,stxdndistinct,stxddependencies,stxdmcv,stxdexpr
      `;

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

      async byOid(parameters: PgCatalog.Tables.PgUserMapping.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,umuser,umserver,umoptions FROM pg_catalog.pg_user_mapping WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          umuser: undefinedIsNull(record.umuser),
          umserver: undefinedIsNull(record.umserver),
          umoptions: undefinedIsNull(record.umoptions),
        }));
        return results[0];
      }
      async byUmuserUmserver(
        parameters: PgCatalog.Tables.PgUserMapping.ByUmuserUmserver,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,umuser,umserver,umoptions FROM pg_catalog.pg_user_mapping WHERE umuser = ${
            parameters.umuser === undefined
              ? "umuser"
              : typed.pg_catalog_oid(parameters.umuser)
          } AND umserver = ${
            parameters.umserver === undefined
              ? "umserver"
              : typed.pg_catalog_oid(parameters.umserver)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          umuser: undefinedIsNull(record.umuser),
          umserver: undefinedIsNull(record.umserver),
          umoptions: undefinedIsNull(record.umoptions),
        }));
        return results[0];
      }

      async deleteByOid(parameters: PgCatalog.Tables.PgUserMapping.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_user_mapping WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,umuser,umserver,umoptions
      `;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          umuser: undefinedIsNull(record.umuser),
          umserver: undefinedIsNull(record.umserver),
          umoptions: undefinedIsNull(record.umoptions),
        }));
        return results[0];
      }
      async deleteByUmuserUmserver(
        parameters: PgCatalog.Tables.PgUserMapping.ByUmuserUmserver,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_user_mapping WHERE umuser = ${
            parameters.umuser === undefined
              ? "umuser"
              : typed.pg_catalog_oid(parameters.umuser)
          } AND umserver = ${
            parameters.umserver === undefined
              ? "umserver"
              : typed.pg_catalog_oid(parameters.umserver)
          } RETURNING oid,umuser,umserver,umoptions
      `;

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

      async byOid(parameters: PgCatalog.Tables.PgSubscription.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,subdbid,subskiplsn,subname,subowner,subenabled,subbinary,substream,subtwophasestate,subdisableonerr,subpasswordrequired,subrunasowner,subconninfo,subslotname,subsynccommit,subpublications,suborigin FROM pg_catalog.pg_subscription WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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
        parameters: PgCatalog.Tables.PgSubscription.BySubdbidSubname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,subdbid,subskiplsn,subname,subowner,subenabled,subbinary,substream,subtwophasestate,subdisableonerr,subpasswordrequired,subrunasowner,subconninfo,subslotname,subsynccommit,subpublications,suborigin FROM pg_catalog.pg_subscription WHERE subdbid = ${
            parameters.subdbid === undefined
              ? "subdbid"
              : typed.pg_catalog_oid(parameters.subdbid)
          } AND subname = ${
            parameters.subname === undefined
              ? "subname"
              : typed.pg_catalog_cstring(parameters.subname)
          }`;

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

      async deleteByOid(parameters: PgCatalog.Tables.PgSubscription.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_subscription WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,subdbid,subskiplsn,subname,subowner,subenabled,subbinary,substream,subtwophasestate,subdisableonerr,subpasswordrequired,subrunasowner,subconninfo,subslotname,subsynccommit,subpublications,suborigin
      `;

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
      async deleteBySubdbidSubname(
        parameters: PgCatalog.Tables.PgSubscription.BySubdbidSubname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_subscription WHERE subdbid = ${
            parameters.subdbid === undefined
              ? "subdbid"
              : typed.pg_catalog_oid(parameters.subdbid)
          } AND subname = ${
            parameters.subname === undefined
              ? "subname"
              : typed.pg_catalog_cstring(parameters.subname)
          } RETURNING oid,subdbid,subskiplsn,subname,subowner,subenabled,subbinary,substream,subtwophasestate,subdisableonerr,subpasswordrequired,subrunasowner,subconninfo,subslotname,subsynccommit,subpublications,suborigin
      `;

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
        parameters: PgCatalog.Tables.PgAttribute.ByAttrelidAttname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT attrelid,attname,atttypid,attlen,attnum,attcacheoff,atttypmod,attndims,attbyval,attalign,attstorage,attcompression,attnotnull,atthasdef,atthasmissing,attidentity,attgenerated,attisdropped,attislocal,attinhcount,attstattarget,attcollation,attacl,attoptions,attfdwoptions,attmissingval FROM pg_catalog.pg_attribute WHERE attrelid = ${
            parameters.attrelid === undefined
              ? "attrelid"
              : typed.pg_catalog_oid(parameters.attrelid)
          } AND attname = ${
            parameters.attname === undefined
              ? "attname"
              : typed.pg_catalog_cstring(parameters.attname)
          }`;

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
        parameters: PgCatalog.Tables.PgAttribute.ByAttrelidAttnum,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT attrelid,attname,atttypid,attlen,attnum,attcacheoff,atttypmod,attndims,attbyval,attalign,attstorage,attcompression,attnotnull,atthasdef,atthasmissing,attidentity,attgenerated,attisdropped,attislocal,attinhcount,attstattarget,attcollation,attacl,attoptions,attfdwoptions,attmissingval FROM pg_catalog.pg_attribute WHERE attrelid = ${
            parameters.attrelid === undefined
              ? "attrelid"
              : typed.pg_catalog_oid(parameters.attrelid)
          } AND attnum = ${
            parameters.attnum === undefined
              ? "attnum"
              : typed.pg_catalog_int2(parameters.attnum)
          }`;

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

      async deleteByAttrelidAttname(
        parameters: PgCatalog.Tables.PgAttribute.ByAttrelidAttname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_attribute WHERE attrelid = ${
            parameters.attrelid === undefined
              ? "attrelid"
              : typed.pg_catalog_oid(parameters.attrelid)
          } AND attname = ${
            parameters.attname === undefined
              ? "attname"
              : typed.pg_catalog_cstring(parameters.attname)
          } RETURNING attrelid,attname,atttypid,attlen,attnum,attcacheoff,atttypmod,attndims,attbyval,attalign,attstorage,attcompression,attnotnull,atthasdef,atthasmissing,attidentity,attgenerated,attisdropped,attislocal,attinhcount,attstattarget,attcollation,attacl,attoptions,attfdwoptions,attmissingval
      `;

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
      async deleteByAttrelidAttnum(
        parameters: PgCatalog.Tables.PgAttribute.ByAttrelidAttnum,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_attribute WHERE attrelid = ${
            parameters.attrelid === undefined
              ? "attrelid"
              : typed.pg_catalog_oid(parameters.attrelid)
          } AND attnum = ${
            parameters.attnum === undefined
              ? "attnum"
              : typed.pg_catalog_int2(parameters.attnum)
          } RETURNING attrelid,attname,atttypid,attlen,attnum,attcacheoff,atttypmod,attndims,attbyval,attalign,attstorage,attcompression,attnotnull,atthasdef,atthasmissing,attidentity,attgenerated,attisdropped,attislocal,attinhcount,attstattarget,attcollation,attacl,attoptions,attfdwoptions,attmissingval
      `;

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

      async byOid(parameters: PgCatalog.Tables.PgProc.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,proname,pronamespace,proowner,prolang,procost,prorows,provariadic,prosupport,prokind,prosecdef,proleakproof,proisstrict,proretset,provolatile,proparallel,pronargs,pronargdefaults,prorettype,proargtypes,proallargtypes,proargmodes,proargnames,proargdefaults,protrftypes,prosrc,probin,prosqlbody,proconfig,proacl FROM pg_catalog.pg_proc WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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
        parameters: PgCatalog.Tables.PgProc.ByPronameProargtypesPronamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,proname,pronamespace,proowner,prolang,procost,prorows,provariadic,prosupport,prokind,prosecdef,proleakproof,proisstrict,proretset,provolatile,proparallel,pronargs,pronargdefaults,prorettype,proargtypes,proallargtypes,proargmodes,proargnames,proargdefaults,protrftypes,prosrc,probin,prosqlbody,proconfig,proacl FROM pg_catalog.pg_proc WHERE proname = ${
            parameters.proname === undefined
              ? "proname"
              : typed.pg_catalog_cstring(parameters.proname)
          } AND proargtypes = ${
            parameters.proargtypes === undefined
              ? "proargtypes"
              : typed.pg_catalog_oidvector(parameters.proargtypes)
          } AND pronamespace = ${
            parameters.pronamespace === undefined
              ? "pronamespace"
              : typed.pg_catalog_oid(parameters.pronamespace)
          }`;

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

      async deleteByOid(parameters: PgCatalog.Tables.PgProc.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`DELETE FROM pg_catalog.pg_proc WHERE oid = ${
          parameters.oid === undefined
            ? "oid"
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,proname,pronamespace,proowner,prolang,procost,prorows,provariadic,prosupport,prokind,prosecdef,proleakproof,proisstrict,proretset,provolatile,proparallel,pronargs,pronargdefaults,prorettype,proargtypes,proallargtypes,proargmodes,proargnames,proargdefaults,protrftypes,prosrc,probin,prosqlbody,proconfig,proacl
      `;

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
      async deleteByPronameProargtypesPronamespace(
        parameters: PgCatalog.Tables.PgProc.ByPronameProargtypesPronamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_proc WHERE proname = ${
            parameters.proname === undefined
              ? "proname"
              : typed.pg_catalog_cstring(parameters.proname)
          } AND proargtypes = ${
            parameters.proargtypes === undefined
              ? "proargtypes"
              : typed.pg_catalog_oidvector(parameters.proargtypes)
          } AND pronamespace = ${
            parameters.pronamespace === undefined
              ? "pronamespace"
              : typed.pg_catalog_oid(parameters.pronamespace)
          } RETURNING oid,proname,pronamespace,proowner,prolang,procost,prorows,provariadic,prosupport,prokind,prosecdef,proleakproof,proisstrict,proretset,provolatile,proparallel,pronargs,pronargdefaults,prorettype,proargtypes,proallargtypes,proargmodes,proargnames,proargdefaults,protrftypes,prosrc,probin,prosqlbody,proconfig,proacl
      `;

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

      async byOid(parameters: PgCatalog.Tables.PgClass.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,relname,relnamespace,reltype,reloftype,relowner,relam,relfilenode,reltablespace,relpages,reltuples,relallvisible,reltoastrelid,relhasindex,relisshared,relpersistence,relkind,relnatts,relchecks,relhasrules,relhastriggers,relhassubclass,relrowsecurity,relforcerowsecurity,relispopulated,relreplident,relispartition,relrewrite,relfrozenxid,relminmxid,relacl,reloptions,relpartbound FROM pg_catalog.pg_class WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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
        parameters: PgCatalog.Tables.PgClass.ByRelnameRelnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,relname,relnamespace,reltype,reloftype,relowner,relam,relfilenode,reltablespace,relpages,reltuples,relallvisible,reltoastrelid,relhasindex,relisshared,relpersistence,relkind,relnatts,relchecks,relhasrules,relhastriggers,relhassubclass,relrowsecurity,relforcerowsecurity,relispopulated,relreplident,relispartition,relrewrite,relfrozenxid,relminmxid,relacl,reloptions,relpartbound FROM pg_catalog.pg_class WHERE relname = ${
            parameters.relname === undefined
              ? "relname"
              : typed.pg_catalog_cstring(parameters.relname)
          } AND relnamespace = ${
            parameters.relnamespace === undefined
              ? "relnamespace"
              : typed.pg_catalog_oid(parameters.relnamespace)
          }`;

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
        parameters: PgCatalog.Tables.PgClass.ByReltablespaceRelfilenode,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,relname,relnamespace,reltype,reloftype,relowner,relam,relfilenode,reltablespace,relpages,reltuples,relallvisible,reltoastrelid,relhasindex,relisshared,relpersistence,relkind,relnatts,relchecks,relhasrules,relhastriggers,relhassubclass,relrowsecurity,relforcerowsecurity,relispopulated,relreplident,relispartition,relrewrite,relfrozenxid,relminmxid,relacl,reloptions,relpartbound FROM pg_catalog.pg_class WHERE reltablespace = ${
            parameters.reltablespace === undefined
              ? "reltablespace"
              : typed.pg_catalog_oid(parameters.reltablespace)
          } AND relfilenode = ${
            parameters.relfilenode === undefined
              ? "relfilenode"
              : typed.pg_catalog_oid(parameters.relfilenode)
          }`;

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

      async deleteByOid(parameters: PgCatalog.Tables.PgClass.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_class WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,relname,relnamespace,reltype,reloftype,relowner,relam,relfilenode,reltablespace,relpages,reltuples,relallvisible,reltoastrelid,relhasindex,relisshared,relpersistence,relkind,relnatts,relchecks,relhasrules,relhastriggers,relhassubclass,relrowsecurity,relforcerowsecurity,relispopulated,relreplident,relispartition,relrewrite,relfrozenxid,relminmxid,relacl,reloptions,relpartbound
      `;

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
      async deleteByRelnameRelnamespace(
        parameters: PgCatalog.Tables.PgClass.ByRelnameRelnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_class WHERE relname = ${
            parameters.relname === undefined
              ? "relname"
              : typed.pg_catalog_cstring(parameters.relname)
          } AND relnamespace = ${
            parameters.relnamespace === undefined
              ? "relnamespace"
              : typed.pg_catalog_oid(parameters.relnamespace)
          } RETURNING oid,relname,relnamespace,reltype,reloftype,relowner,relam,relfilenode,reltablespace,relpages,reltuples,relallvisible,reltoastrelid,relhasindex,relisshared,relpersistence,relkind,relnatts,relchecks,relhasrules,relhastriggers,relhassubclass,relrowsecurity,relforcerowsecurity,relispopulated,relreplident,relispartition,relrewrite,relfrozenxid,relminmxid,relacl,reloptions,relpartbound
      `;

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
      async deleteByReltablespaceRelfilenode(
        parameters: PgCatalog.Tables.PgClass.ByReltablespaceRelfilenode,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_class WHERE reltablespace = ${
            parameters.reltablespace === undefined
              ? "reltablespace"
              : typed.pg_catalog_oid(parameters.reltablespace)
          } AND relfilenode = ${
            parameters.relfilenode === undefined
              ? "relfilenode"
              : typed.pg_catalog_oid(parameters.relfilenode)
          } RETURNING oid,relname,relnamespace,reltype,reloftype,relowner,relam,relfilenode,reltablespace,relpages,reltuples,relallvisible,reltoastrelid,relhasindex,relisshared,relpersistence,relkind,relnatts,relchecks,relhasrules,relhastriggers,relhassubclass,relrowsecurity,relforcerowsecurity,relispopulated,relreplident,relispartition,relrewrite,relfrozenxid,relminmxid,relacl,reloptions,relpartbound
      `;

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
        parameters: PgCatalog.Tables.PgAttrdef.ByAdrelidAdnum,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,adrelid,adnum,adbin FROM pg_catalog.pg_attrdef WHERE adrelid = ${
            parameters.adrelid === undefined
              ? "adrelid"
              : typed.pg_catalog_oid(parameters.adrelid)
          } AND adnum = ${
            parameters.adnum === undefined
              ? "adnum"
              : typed.pg_catalog_int2(parameters.adnum)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          adrelid: undefinedIsNull(record.adrelid),
          adnum: undefinedIsNull(record.adnum),
          adbin: undefinedIsNull(record.adbin),
        }));
        return results[0];
      }
      async byOid(parameters: PgCatalog.Tables.PgAttrdef.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,adrelid,adnum,adbin FROM pg_catalog.pg_attrdef WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          adrelid: undefinedIsNull(record.adrelid),
          adnum: undefinedIsNull(record.adnum),
          adbin: undefinedIsNull(record.adbin),
        }));
        return results[0];
      }

      async deleteByAdrelidAdnum(
        parameters: PgCatalog.Tables.PgAttrdef.ByAdrelidAdnum,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_attrdef WHERE adrelid = ${
            parameters.adrelid === undefined
              ? "adrelid"
              : typed.pg_catalog_oid(parameters.adrelid)
          } AND adnum = ${
            parameters.adnum === undefined
              ? "adnum"
              : typed.pg_catalog_int2(parameters.adnum)
          } RETURNING oid,adrelid,adnum,adbin
      `;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          adrelid: undefinedIsNull(record.adrelid),
          adnum: undefinedIsNull(record.adnum),
          adbin: undefinedIsNull(record.adbin),
        }));
        return results[0];
      }
      async deleteByOid(parameters: PgCatalog.Tables.PgAttrdef.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_attrdef WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,adrelid,adnum,adbin
      `;

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
        parameters: PgCatalog.Tables.PgConstraint.ByConnameConnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,conname,connamespace,contype,condeferrable,condeferred,convalidated,conrelid,contypid,conindid,conparentid,confrelid,confupdtype,confdeltype,confmatchtype,conislocal,coninhcount,connoinherit,conkey,confkey,conpfeqop,conppeqop,conffeqop,confdelsetcols,conexclop,conbin FROM pg_catalog.pg_constraint WHERE conname = ${
            parameters.conname === undefined
              ? "conname"
              : typed.pg_catalog_cstring(parameters.conname)
          } AND connamespace = ${
            parameters.connamespace === undefined
              ? "connamespace"
              : typed.pg_catalog_oid(parameters.connamespace)
          }`;

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
        parameters: PgCatalog.Tables.PgConstraint.ByConparentid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,conname,connamespace,contype,condeferrable,condeferred,convalidated,conrelid,contypid,conindid,conparentid,confrelid,confupdtype,confdeltype,confmatchtype,conislocal,coninhcount,connoinherit,conkey,confkey,conpfeqop,conppeqop,conffeqop,confdelsetcols,conexclop,conbin FROM pg_catalog.pg_constraint WHERE conparentid = ${
            parameters.conparentid === undefined
              ? "conparentid"
              : typed.pg_catalog_oid(parameters.conparentid)
          }`;

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
        parameters: PgCatalog.Tables.PgConstraint.ByConrelidContypidConname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,conname,connamespace,contype,condeferrable,condeferred,convalidated,conrelid,contypid,conindid,conparentid,confrelid,confupdtype,confdeltype,confmatchtype,conislocal,coninhcount,connoinherit,conkey,confkey,conpfeqop,conppeqop,conffeqop,confdelsetcols,conexclop,conbin FROM pg_catalog.pg_constraint WHERE conrelid = ${
            parameters.conrelid === undefined
              ? "conrelid"
              : typed.pg_catalog_oid(parameters.conrelid)
          } AND contypid = ${
            parameters.contypid === undefined
              ? "contypid"
              : typed.pg_catalog_oid(parameters.contypid)
          } AND conname = ${
            parameters.conname === undefined
              ? "conname"
              : typed.pg_catalog_cstring(parameters.conname)
          }`;

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
      async byContypid(parameters: PgCatalog.Tables.PgConstraint.ByContypid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,conname,connamespace,contype,condeferrable,condeferred,convalidated,conrelid,contypid,conindid,conparentid,confrelid,confupdtype,confdeltype,confmatchtype,conislocal,coninhcount,connoinherit,conkey,confkey,conpfeqop,conppeqop,conffeqop,confdelsetcols,conexclop,conbin FROM pg_catalog.pg_constraint WHERE contypid = ${
            parameters.contypid === undefined
              ? "contypid"
              : typed.pg_catalog_oid(parameters.contypid)
          }`;

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
      async byOid(parameters: PgCatalog.Tables.PgConstraint.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,conname,connamespace,contype,condeferrable,condeferred,convalidated,conrelid,contypid,conindid,conparentid,confrelid,confupdtype,confdeltype,confmatchtype,conislocal,coninhcount,connoinherit,conkey,confkey,conpfeqop,conppeqop,conffeqop,confdelsetcols,conexclop,conbin FROM pg_catalog.pg_constraint WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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

      async deleteByConnameConnamespace(
        parameters: PgCatalog.Tables.PgConstraint.ByConnameConnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_constraint WHERE conname = ${
            parameters.conname === undefined
              ? "conname"
              : typed.pg_catalog_cstring(parameters.conname)
          } AND connamespace = ${
            parameters.connamespace === undefined
              ? "connamespace"
              : typed.pg_catalog_oid(parameters.connamespace)
          } RETURNING oid,conname,connamespace,contype,condeferrable,condeferred,convalidated,conrelid,contypid,conindid,conparentid,confrelid,confupdtype,confdeltype,confmatchtype,conislocal,coninhcount,connoinherit,conkey,confkey,conpfeqop,conppeqop,conffeqop,confdelsetcols,conexclop,conbin
      `;

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
      async deleteByConparentid(
        parameters: PgCatalog.Tables.PgConstraint.ByConparentid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_constraint WHERE conparentid = ${
            parameters.conparentid === undefined
              ? "conparentid"
              : typed.pg_catalog_oid(parameters.conparentid)
          } RETURNING oid,conname,connamespace,contype,condeferrable,condeferred,convalidated,conrelid,contypid,conindid,conparentid,confrelid,confupdtype,confdeltype,confmatchtype,conislocal,coninhcount,connoinherit,conkey,confkey,conpfeqop,conppeqop,conffeqop,confdelsetcols,conexclop,conbin
      `;

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
      async deleteByConrelidContypidConname(
        parameters: PgCatalog.Tables.PgConstraint.ByConrelidContypidConname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_constraint WHERE conrelid = ${
            parameters.conrelid === undefined
              ? "conrelid"
              : typed.pg_catalog_oid(parameters.conrelid)
          } AND contypid = ${
            parameters.contypid === undefined
              ? "contypid"
              : typed.pg_catalog_oid(parameters.contypid)
          } AND conname = ${
            parameters.conname === undefined
              ? "conname"
              : typed.pg_catalog_cstring(parameters.conname)
          } RETURNING oid,conname,connamespace,contype,condeferrable,condeferred,convalidated,conrelid,contypid,conindid,conparentid,confrelid,confupdtype,confdeltype,confmatchtype,conislocal,coninhcount,connoinherit,conkey,confkey,conpfeqop,conppeqop,conffeqop,confdelsetcols,conexclop,conbin
      `;

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
      async deleteByContypid(
        parameters: PgCatalog.Tables.PgConstraint.ByContypid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_constraint WHERE contypid = ${
            parameters.contypid === undefined
              ? "contypid"
              : typed.pg_catalog_oid(parameters.contypid)
          } RETURNING oid,conname,connamespace,contype,condeferrable,condeferred,convalidated,conrelid,contypid,conindid,conparentid,confrelid,confupdtype,confdeltype,confmatchtype,conislocal,coninhcount,connoinherit,conkey,confkey,conpfeqop,conppeqop,conffeqop,confdelsetcols,conexclop,conbin
      `;

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
      async deleteByOid(parameters: PgCatalog.Tables.PgConstraint.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_constraint WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,conname,connamespace,contype,condeferrable,condeferred,convalidated,conrelid,contypid,conindid,conparentid,confrelid,confupdtype,confdeltype,confmatchtype,conislocal,coninhcount,connoinherit,conkey,confkey,conpfeqop,conppeqop,conffeqop,confdelsetcols,conexclop,conbin
      `;

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

      async byInhparent(parameters: PgCatalog.Tables.PgInherits.ByInhparent) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT inhrelid,inhparent,inhseqno,inhdetachpending FROM pg_catalog.pg_inherits WHERE inhparent = ${
            parameters.inhparent === undefined
              ? "inhparent"
              : typed.pg_catalog_oid(parameters.inhparent)
          }`;

        const results = response.map((record) => ({
          inhrelid: undefinedIsNull(record.inhrelid),
          inhparent: undefinedIsNull(record.inhparent),
          inhseqno: undefinedIsNull(record.inhseqno),
          inhdetachpending: undefinedIsNull(record.inhdetachpending),
        }));
        return results;
      }
      async byInhrelidInhseqno(
        parameters: PgCatalog.Tables.PgInherits.ByInhrelidInhseqno,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT inhrelid,inhparent,inhseqno,inhdetachpending FROM pg_catalog.pg_inherits WHERE inhrelid = ${
            parameters.inhrelid === undefined
              ? "inhrelid"
              : typed.pg_catalog_oid(parameters.inhrelid)
          } AND inhseqno = ${
            parameters.inhseqno === undefined
              ? "inhseqno"
              : typed.pg_catalog_int4(parameters.inhseqno)
          }`;

        const results = response.map((record) => ({
          inhrelid: undefinedIsNull(record.inhrelid),
          inhparent: undefinedIsNull(record.inhparent),
          inhseqno: undefinedIsNull(record.inhseqno),
          inhdetachpending: undefinedIsNull(record.inhdetachpending),
        }));
        return results[0];
      }

      async deleteByInhparent(
        parameters: PgCatalog.Tables.PgInherits.ByInhparent,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_inherits WHERE inhparent = ${
            parameters.inhparent === undefined
              ? "inhparent"
              : typed.pg_catalog_oid(parameters.inhparent)
          } RETURNING inhrelid,inhparent,inhseqno,inhdetachpending
      `;

        const results = response.map((record) => ({
          inhrelid: undefinedIsNull(record.inhrelid),
          inhparent: undefinedIsNull(record.inhparent),
          inhseqno: undefinedIsNull(record.inhseqno),
          inhdetachpending: undefinedIsNull(record.inhdetachpending),
        }));
        return results;
      }
      async deleteByInhrelidInhseqno(
        parameters: PgCatalog.Tables.PgInherits.ByInhrelidInhseqno,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_inherits WHERE inhrelid = ${
            parameters.inhrelid === undefined
              ? "inhrelid"
              : typed.pg_catalog_oid(parameters.inhrelid)
          } AND inhseqno = ${
            parameters.inhseqno === undefined
              ? "inhseqno"
              : typed.pg_catalog_int4(parameters.inhseqno)
          } RETURNING inhrelid,inhparent,inhseqno,inhdetachpending
      `;

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

      async byIndexrelid(parameters: PgCatalog.Tables.PgIndex.ByIndexrelid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT indexrelid,indrelid,indnatts,indnkeyatts,indisunique,indnullsnotdistinct,indisprimary,indisexclusion,indimmediate,indisclustered,indisvalid,indcheckxmin,indisready,indislive,indisreplident,indkey,indcollation,indclass,indoption,indexprs,indpred FROM pg_catalog.pg_index WHERE indexrelid = ${
            parameters.indexrelid === undefined
              ? "indexrelid"
              : typed.pg_catalog_oid(parameters.indexrelid)
          }`;

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
      async byIndrelid(parameters: PgCatalog.Tables.PgIndex.ByIndrelid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT indexrelid,indrelid,indnatts,indnkeyatts,indisunique,indnullsnotdistinct,indisprimary,indisexclusion,indimmediate,indisclustered,indisvalid,indcheckxmin,indisready,indislive,indisreplident,indkey,indcollation,indclass,indoption,indexprs,indpred FROM pg_catalog.pg_index WHERE indrelid = ${
            parameters.indrelid === undefined
              ? "indrelid"
              : typed.pg_catalog_oid(parameters.indrelid)
          }`;

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

      async deleteByIndexrelid(
        parameters: PgCatalog.Tables.PgIndex.ByIndexrelid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_index WHERE indexrelid = ${
            parameters.indexrelid === undefined
              ? "indexrelid"
              : typed.pg_catalog_oid(parameters.indexrelid)
          } RETURNING indexrelid,indrelid,indnatts,indnkeyatts,indisunique,indnullsnotdistinct,indisprimary,indisexclusion,indimmediate,indisclustered,indisvalid,indcheckxmin,indisready,indislive,indisreplident,indkey,indcollation,indclass,indoption,indexprs,indpred
      `;

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
      async deleteByIndrelid(parameters: PgCatalog.Tables.PgIndex.ByIndrelid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_index WHERE indrelid = ${
            parameters.indrelid === undefined
              ? "indrelid"
              : typed.pg_catalog_oid(parameters.indrelid)
          } RETURNING indexrelid,indrelid,indnatts,indnkeyatts,indisunique,indnullsnotdistinct,indisprimary,indisexclusion,indimmediate,indisclustered,indisvalid,indcheckxmin,indisready,indislive,indisreplident,indkey,indcollation,indclass,indoption,indexprs,indpred
      `;

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

      async byOid(parameters: PgCatalog.Tables.PgOperator.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,oprname,oprnamespace,oprowner,oprkind,oprcanmerge,oprcanhash,oprleft,oprright,oprresult,oprcom,oprnegate,oprcode,oprrest,oprjoin FROM pg_catalog.pg_operator WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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
        parameters: PgCatalog.Tables.PgOperator.ByOprnameOprleftOprrightOprnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,oprname,oprnamespace,oprowner,oprkind,oprcanmerge,oprcanhash,oprleft,oprright,oprresult,oprcom,oprnegate,oprcode,oprrest,oprjoin FROM pg_catalog.pg_operator WHERE oprname = ${
            parameters.oprname === undefined
              ? "oprname"
              : typed.pg_catalog_cstring(parameters.oprname)
          } AND oprleft = ${
            parameters.oprleft === undefined
              ? "oprleft"
              : typed.pg_catalog_oid(parameters.oprleft)
          } AND oprright = ${
            parameters.oprright === undefined
              ? "oprright"
              : typed.pg_catalog_oid(parameters.oprright)
          } AND oprnamespace = ${
            parameters.oprnamespace === undefined
              ? "oprnamespace"
              : typed.pg_catalog_oid(parameters.oprnamespace)
          }`;

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

      async deleteByOid(parameters: PgCatalog.Tables.PgOperator.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_operator WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,oprname,oprnamespace,oprowner,oprkind,oprcanmerge,oprcanhash,oprleft,oprright,oprresult,oprcom,oprnegate,oprcode,oprrest,oprjoin
      `;

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
      async deleteByOprnameOprleftOprrightOprnamespace(
        parameters: PgCatalog.Tables.PgOperator.ByOprnameOprleftOprrightOprnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_operator WHERE oprname = ${
            parameters.oprname === undefined
              ? "oprname"
              : typed.pg_catalog_cstring(parameters.oprname)
          } AND oprleft = ${
            parameters.oprleft === undefined
              ? "oprleft"
              : typed.pg_catalog_oid(parameters.oprleft)
          } AND oprright = ${
            parameters.oprright === undefined
              ? "oprright"
              : typed.pg_catalog_oid(parameters.oprright)
          } AND oprnamespace = ${
            parameters.oprnamespace === undefined
              ? "oprnamespace"
              : typed.pg_catalog_oid(parameters.oprnamespace)
          } RETURNING oid,oprname,oprnamespace,oprowner,oprkind,oprcanmerge,oprcanhash,oprleft,oprright,oprresult,oprcom,oprnegate,oprcode,oprrest,oprjoin
      `;

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

      async byOid(parameters: PgCatalog.Tables.PgOpfamily.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,opfmethod,opfname,opfnamespace,opfowner FROM pg_catalog.pg_opfamily WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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
        parameters: PgCatalog.Tables.PgOpfamily.ByOpfmethodOpfnameOpfnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,opfmethod,opfname,opfnamespace,opfowner FROM pg_catalog.pg_opfamily WHERE opfmethod = ${
            parameters.opfmethod === undefined
              ? "opfmethod"
              : typed.pg_catalog_oid(parameters.opfmethod)
          } AND opfname = ${
            parameters.opfname === undefined
              ? "opfname"
              : typed.pg_catalog_cstring(parameters.opfname)
          } AND opfnamespace = ${
            parameters.opfnamespace === undefined
              ? "opfnamespace"
              : typed.pg_catalog_oid(parameters.opfnamespace)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          opfmethod: undefinedIsNull(record.opfmethod),
          opfname: undefinedIsNull(record.opfname),
          opfnamespace: undefinedIsNull(record.opfnamespace),
          opfowner: undefinedIsNull(record.opfowner),
        }));
        return results[0];
      }

      async deleteByOid(parameters: PgCatalog.Tables.PgOpfamily.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_opfamily WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,opfmethod,opfname,opfnamespace,opfowner
      `;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          opfmethod: undefinedIsNull(record.opfmethod),
          opfname: undefinedIsNull(record.opfname),
          opfnamespace: undefinedIsNull(record.opfnamespace),
          opfowner: undefinedIsNull(record.opfowner),
        }));
        return results[0];
      }
      async deleteByOpfmethodOpfnameOpfnamespace(
        parameters: PgCatalog.Tables.PgOpfamily.ByOpfmethodOpfnameOpfnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_opfamily WHERE opfmethod = ${
            parameters.opfmethod === undefined
              ? "opfmethod"
              : typed.pg_catalog_oid(parameters.opfmethod)
          } AND opfname = ${
            parameters.opfname === undefined
              ? "opfname"
              : typed.pg_catalog_cstring(parameters.opfname)
          } AND opfnamespace = ${
            parameters.opfnamespace === undefined
              ? "opfnamespace"
              : typed.pg_catalog_oid(parameters.opfnamespace)
          } RETURNING oid,opfmethod,opfname,opfnamespace,opfowner
      `;

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

      async byOid(parameters: PgCatalog.Tables.PgOpclass.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,opcmethod,opcname,opcnamespace,opcowner,opcfamily,opcintype,opcdefault,opckeytype FROM pg_catalog.pg_opclass WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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
        parameters: PgCatalog.Tables.PgOpclass.ByOpcmethodOpcnameOpcnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,opcmethod,opcname,opcnamespace,opcowner,opcfamily,opcintype,opcdefault,opckeytype FROM pg_catalog.pg_opclass WHERE opcmethod = ${
            parameters.opcmethod === undefined
              ? "opcmethod"
              : typed.pg_catalog_oid(parameters.opcmethod)
          } AND opcname = ${
            parameters.opcname === undefined
              ? "opcname"
              : typed.pg_catalog_cstring(parameters.opcname)
          } AND opcnamespace = ${
            parameters.opcnamespace === undefined
              ? "opcnamespace"
              : typed.pg_catalog_oid(parameters.opcnamespace)
          }`;

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

      async deleteByOid(parameters: PgCatalog.Tables.PgOpclass.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_opclass WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,opcmethod,opcname,opcnamespace,opcowner,opcfamily,opcintype,opcdefault,opckeytype
      `;

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
      async deleteByOpcmethodOpcnameOpcnamespace(
        parameters: PgCatalog.Tables.PgOpclass.ByOpcmethodOpcnameOpcnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_opclass WHERE opcmethod = ${
            parameters.opcmethod === undefined
              ? "opcmethod"
              : typed.pg_catalog_oid(parameters.opcmethod)
          } AND opcname = ${
            parameters.opcname === undefined
              ? "opcname"
              : typed.pg_catalog_cstring(parameters.opcname)
          } AND opcnamespace = ${
            parameters.opcnamespace === undefined
              ? "opcnamespace"
              : typed.pg_catalog_oid(parameters.opcnamespace)
          } RETURNING oid,opcmethod,opcname,opcnamespace,opcowner,opcfamily,opcintype,opcdefault,opckeytype
      `;

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

      async byAmname(parameters: PgCatalog.Tables.PgAm.ByAmname) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,amname,amhandler,amtype FROM pg_catalog.pg_am WHERE amname = ${
            parameters.amname === undefined
              ? "amname"
              : typed.pg_catalog_cstring(parameters.amname)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          amname: undefinedIsNull(record.amname),
          amhandler: undefinedIsNull(record.amhandler),
          amtype: undefinedIsNull(record.amtype),
        }));
        return results[0];
      }
      async byOid(parameters: PgCatalog.Tables.PgAm.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,amname,amhandler,amtype FROM pg_catalog.pg_am WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          amname: undefinedIsNull(record.amname),
          amhandler: undefinedIsNull(record.amhandler),
          amtype: undefinedIsNull(record.amtype),
        }));
        return results[0];
      }

      async deleteByAmname(parameters: PgCatalog.Tables.PgAm.ByAmname) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_am WHERE amname = ${
            parameters.amname === undefined
              ? "amname"
              : typed.pg_catalog_cstring(parameters.amname)
          } RETURNING oid,amname,amhandler,amtype
      `;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          amname: undefinedIsNull(record.amname),
          amhandler: undefinedIsNull(record.amhandler),
          amtype: undefinedIsNull(record.amtype),
        }));
        return results[0];
      }
      async deleteByOid(parameters: PgCatalog.Tables.PgAm.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`DELETE FROM pg_catalog.pg_am WHERE oid = ${
          parameters.oid === undefined
            ? "oid"
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,amname,amhandler,amtype
      `;

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
        parameters: PgCatalog.Tables.PgAmop.ByAmopfamilyAmoplefttypeAmoprighttypeAmopstrategy,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,amopfamily,amoplefttype,amoprighttype,amopstrategy,amoppurpose,amopopr,amopmethod,amopsortfamily FROM pg_catalog.pg_amop WHERE amopfamily = ${
            parameters.amopfamily === undefined
              ? "amopfamily"
              : typed.pg_catalog_oid(parameters.amopfamily)
          } AND amoplefttype = ${
            parameters.amoplefttype === undefined
              ? "amoplefttype"
              : typed.pg_catalog_oid(parameters.amoplefttype)
          } AND amoprighttype = ${
            parameters.amoprighttype === undefined
              ? "amoprighttype"
              : typed.pg_catalog_oid(parameters.amoprighttype)
          } AND amopstrategy = ${
            parameters.amopstrategy === undefined
              ? "amopstrategy"
              : typed.pg_catalog_int2(parameters.amopstrategy)
          }`;

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
        parameters: PgCatalog.Tables.PgAmop.ByAmopoprAmoppurposeAmopfamily,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,amopfamily,amoplefttype,amoprighttype,amopstrategy,amoppurpose,amopopr,amopmethod,amopsortfamily FROM pg_catalog.pg_amop WHERE amopopr = ${
            parameters.amopopr === undefined
              ? "amopopr"
              : typed.pg_catalog_oid(parameters.amopopr)
          } AND amoppurpose = ${
            parameters.amoppurpose === undefined
              ? "amoppurpose"
              : typed.pg_catalog_char(parameters.amoppurpose)
          } AND amopfamily = ${
            parameters.amopfamily === undefined
              ? "amopfamily"
              : typed.pg_catalog_oid(parameters.amopfamily)
          }`;

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
      async byOid(parameters: PgCatalog.Tables.PgAmop.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,amopfamily,amoplefttype,amoprighttype,amopstrategy,amoppurpose,amopopr,amopmethod,amopsortfamily FROM pg_catalog.pg_amop WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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

      async deleteByAmopfamilyAmoplefttypeAmoprighttypeAmopstrategy(
        parameters: PgCatalog.Tables.PgAmop.ByAmopfamilyAmoplefttypeAmoprighttypeAmopstrategy,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_amop WHERE amopfamily = ${
            parameters.amopfamily === undefined
              ? "amopfamily"
              : typed.pg_catalog_oid(parameters.amopfamily)
          } AND amoplefttype = ${
            parameters.amoplefttype === undefined
              ? "amoplefttype"
              : typed.pg_catalog_oid(parameters.amoplefttype)
          } AND amoprighttype = ${
            parameters.amoprighttype === undefined
              ? "amoprighttype"
              : typed.pg_catalog_oid(parameters.amoprighttype)
          } AND amopstrategy = ${
            parameters.amopstrategy === undefined
              ? "amopstrategy"
              : typed.pg_catalog_int2(parameters.amopstrategy)
          } RETURNING oid,amopfamily,amoplefttype,amoprighttype,amopstrategy,amoppurpose,amopopr,amopmethod,amopsortfamily
      `;

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
      async deleteByAmopoprAmoppurposeAmopfamily(
        parameters: PgCatalog.Tables.PgAmop.ByAmopoprAmoppurposeAmopfamily,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_amop WHERE amopopr = ${
            parameters.amopopr === undefined
              ? "amopopr"
              : typed.pg_catalog_oid(parameters.amopopr)
          } AND amoppurpose = ${
            parameters.amoppurpose === undefined
              ? "amoppurpose"
              : typed.pg_catalog_char(parameters.amoppurpose)
          } AND amopfamily = ${
            parameters.amopfamily === undefined
              ? "amopfamily"
              : typed.pg_catalog_oid(parameters.amopfamily)
          } RETURNING oid,amopfamily,amoplefttype,amoprighttype,amopstrategy,amoppurpose,amopopr,amopmethod,amopsortfamily
      `;

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
      async deleteByOid(parameters: PgCatalog.Tables.PgAmop.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`DELETE FROM pg_catalog.pg_amop WHERE oid = ${
          parameters.oid === undefined
            ? "oid"
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,amopfamily,amoplefttype,amoprighttype,amopstrategy,amoppurpose,amopopr,amopmethod,amopsortfamily
      `;

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
        parameters: PgCatalog.Tables.PgAmproc.ByAmprocfamilyAmproclefttypeAmprocrighttypeAmprocnum,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,amprocfamily,amproclefttype,amprocrighttype,amprocnum,amproc FROM pg_catalog.pg_amproc WHERE amprocfamily = ${
            parameters.amprocfamily === undefined
              ? "amprocfamily"
              : typed.pg_catalog_oid(parameters.amprocfamily)
          } AND amproclefttype = ${
            parameters.amproclefttype === undefined
              ? "amproclefttype"
              : typed.pg_catalog_oid(parameters.amproclefttype)
          } AND amprocrighttype = ${
            parameters.amprocrighttype === undefined
              ? "amprocrighttype"
              : typed.pg_catalog_oid(parameters.amprocrighttype)
          } AND amprocnum = ${
            parameters.amprocnum === undefined
              ? "amprocnum"
              : typed.pg_catalog_int2(parameters.amprocnum)
          }`;

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
      async byOid(parameters: PgCatalog.Tables.PgAmproc.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,amprocfamily,amproclefttype,amprocrighttype,amprocnum,amproc FROM pg_catalog.pg_amproc WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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

      async deleteByAmprocfamilyAmproclefttypeAmprocrighttypeAmprocnum(
        parameters: PgCatalog.Tables.PgAmproc.ByAmprocfamilyAmproclefttypeAmprocrighttypeAmprocnum,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_amproc WHERE amprocfamily = ${
            parameters.amprocfamily === undefined
              ? "amprocfamily"
              : typed.pg_catalog_oid(parameters.amprocfamily)
          } AND amproclefttype = ${
            parameters.amproclefttype === undefined
              ? "amproclefttype"
              : typed.pg_catalog_oid(parameters.amproclefttype)
          } AND amprocrighttype = ${
            parameters.amprocrighttype === undefined
              ? "amprocrighttype"
              : typed.pg_catalog_oid(parameters.amprocrighttype)
          } AND amprocnum = ${
            parameters.amprocnum === undefined
              ? "amprocnum"
              : typed.pg_catalog_int2(parameters.amprocnum)
          } RETURNING oid,amprocfamily,amproclefttype,amprocrighttype,amprocnum,amproc
      `;

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
      async deleteByOid(parameters: PgCatalog.Tables.PgAmproc.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_amproc WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,amprocfamily,amproclefttype,amprocrighttype,amprocnum,amproc
      `;

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

      async byLanname(parameters: PgCatalog.Tables.PgLanguage.ByLanname) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,lanname,lanowner,lanispl,lanpltrusted,lanplcallfoid,laninline,lanvalidator,lanacl FROM pg_catalog.pg_language WHERE lanname = ${
            parameters.lanname === undefined
              ? "lanname"
              : typed.pg_catalog_cstring(parameters.lanname)
          }`;

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
      async byOid(parameters: PgCatalog.Tables.PgLanguage.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,lanname,lanowner,lanispl,lanpltrusted,lanplcallfoid,laninline,lanvalidator,lanacl FROM pg_catalog.pg_language WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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

      async deleteByLanname(parameters: PgCatalog.Tables.PgLanguage.ByLanname) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_language WHERE lanname = ${
            parameters.lanname === undefined
              ? "lanname"
              : typed.pg_catalog_cstring(parameters.lanname)
          } RETURNING oid,lanname,lanowner,lanispl,lanpltrusted,lanplcallfoid,laninline,lanvalidator,lanacl
      `;

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
      async deleteByOid(parameters: PgCatalog.Tables.PgLanguage.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_language WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,lanname,lanowner,lanispl,lanpltrusted,lanplcallfoid,laninline,lanvalidator,lanacl
      `;

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

      async byOid(parameters: PgCatalog.Tables.PgLargeobjectMetadata.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,lomowner,lomacl FROM pg_catalog.pg_largeobject_metadata WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          lomowner: undefinedIsNull(record.lomowner),
          lomacl: undefinedIsNull(record.lomacl),
        }));
        return results[0];
      }

      async deleteByOid(
        parameters: PgCatalog.Tables.PgLargeobjectMetadata.ByOid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_largeobject_metadata WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,lomowner,lomacl
      `;

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

      async byAggfnoid(parameters: PgCatalog.Tables.PgAggregate.ByAggfnoid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT aggfnoid,aggkind,aggnumdirectargs,aggtransfn,aggfinalfn,aggcombinefn,aggserialfn,aggdeserialfn,aggmtransfn,aggminvtransfn,aggmfinalfn,aggfinalextra,aggmfinalextra,aggfinalmodify,aggmfinalmodify,aggsortop,aggtranstype,aggtransspace,aggmtranstype,aggmtransspace,agginitval,aggminitval FROM pg_catalog.pg_aggregate WHERE aggfnoid = ${
            parameters.aggfnoid === undefined
              ? "aggfnoid"
              : typed.pg_catalog_regproc(parameters.aggfnoid)
          }`;

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

      async deleteByAggfnoid(
        parameters: PgCatalog.Tables.PgAggregate.ByAggfnoid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_aggregate WHERE aggfnoid = ${
            parameters.aggfnoid === undefined
              ? "aggfnoid"
              : typed.pg_catalog_regproc(parameters.aggfnoid)
          } RETURNING aggfnoid,aggkind,aggnumdirectargs,aggtransfn,aggfinalfn,aggcombinefn,aggserialfn,aggdeserialfn,aggmtransfn,aggminvtransfn,aggmfinalfn,aggfinalextra,aggmfinalextra,aggfinalmodify,aggmfinalmodify,aggsortop,aggtranstype,aggtransspace,aggmtranstype,aggmtransspace,agginitval,aggminitval
      `;

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

      async byOid(parameters: PgCatalog.Tables.PgStatisticExt.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,stxrelid,stxname,stxnamespace,stxowner,stxstattarget,stxkeys,stxkind,stxexprs FROM pg_catalog.pg_statistic_ext WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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
        parameters: PgCatalog.Tables.PgStatisticExt.ByStxnameStxnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,stxrelid,stxname,stxnamespace,stxowner,stxstattarget,stxkeys,stxkind,stxexprs FROM pg_catalog.pg_statistic_ext WHERE stxname = ${
            parameters.stxname === undefined
              ? "stxname"
              : typed.pg_catalog_cstring(parameters.stxname)
          } AND stxnamespace = ${
            parameters.stxnamespace === undefined
              ? "stxnamespace"
              : typed.pg_catalog_oid(parameters.stxnamespace)
          }`;

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
      async byStxrelid(parameters: PgCatalog.Tables.PgStatisticExt.ByStxrelid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,stxrelid,stxname,stxnamespace,stxowner,stxstattarget,stxkeys,stxkind,stxexprs FROM pg_catalog.pg_statistic_ext WHERE stxrelid = ${
            parameters.stxrelid === undefined
              ? "stxrelid"
              : typed.pg_catalog_oid(parameters.stxrelid)
          }`;

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

      async deleteByOid(parameters: PgCatalog.Tables.PgStatisticExt.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_statistic_ext WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,stxrelid,stxname,stxnamespace,stxowner,stxstattarget,stxkeys,stxkind,stxexprs
      `;

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
      async deleteByStxnameStxnamespace(
        parameters: PgCatalog.Tables.PgStatisticExt.ByStxnameStxnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_statistic_ext WHERE stxname = ${
            parameters.stxname === undefined
              ? "stxname"
              : typed.pg_catalog_cstring(parameters.stxname)
          } AND stxnamespace = ${
            parameters.stxnamespace === undefined
              ? "stxnamespace"
              : typed.pg_catalog_oid(parameters.stxnamespace)
          } RETURNING oid,stxrelid,stxname,stxnamespace,stxowner,stxstattarget,stxkeys,stxkind,stxexprs
      `;

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
      async deleteByStxrelid(
        parameters: PgCatalog.Tables.PgStatisticExt.ByStxrelid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_statistic_ext WHERE stxrelid = ${
            parameters.stxrelid === undefined
              ? "stxrelid"
              : typed.pg_catalog_oid(parameters.stxrelid)
          } RETURNING oid,stxrelid,stxname,stxnamespace,stxowner,stxstattarget,stxkeys,stxkind,stxexprs
      `;

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
        parameters: PgCatalog.Tables.PgRewrite.ByEvClassRulename,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,rulename,ev_class,ev_type,ev_enabled,is_instead,ev_qual,ev_action FROM pg_catalog.pg_rewrite WHERE ev_class = ${
            parameters.evClass === undefined
              ? "ev_class"
              : typed.pg_catalog_oid(parameters.evClass)
          } AND rulename = ${
            parameters.rulename === undefined
              ? "rulename"
              : typed.pg_catalog_cstring(parameters.rulename)
          }`;

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
      async byOid(parameters: PgCatalog.Tables.PgRewrite.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,rulename,ev_class,ev_type,ev_enabled,is_instead,ev_qual,ev_action FROM pg_catalog.pg_rewrite WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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

      async deleteByEvClassRulename(
        parameters: PgCatalog.Tables.PgRewrite.ByEvClassRulename,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_rewrite WHERE ev_class = ${
            parameters.evClass === undefined
              ? "ev_class"
              : typed.pg_catalog_oid(parameters.evClass)
          } AND rulename = ${
            parameters.rulename === undefined
              ? "rulename"
              : typed.pg_catalog_cstring(parameters.rulename)
          } RETURNING oid,rulename,ev_class,ev_type,ev_enabled,is_instead,ev_qual,ev_action
      `;

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
      async deleteByOid(parameters: PgCatalog.Tables.PgRewrite.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_rewrite WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,rulename,ev_class,ev_type,ev_enabled,is_instead,ev_qual,ev_action
      `;

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

      async byOid(parameters: PgCatalog.Tables.PgTrigger.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,tgrelid,tgparentid,tgname,tgfoid,tgtype,tgenabled,tgisinternal,tgconstrrelid,tgconstrindid,tgconstraint,tgdeferrable,tginitdeferred,tgnargs,tgattr,tgargs,tgqual,tgoldtable,tgnewtable FROM pg_catalog.pg_trigger WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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
        parameters: PgCatalog.Tables.PgTrigger.ByTgconstraint,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,tgrelid,tgparentid,tgname,tgfoid,tgtype,tgenabled,tgisinternal,tgconstrrelid,tgconstrindid,tgconstraint,tgdeferrable,tginitdeferred,tgnargs,tgattr,tgargs,tgqual,tgoldtable,tgnewtable FROM pg_catalog.pg_trigger WHERE tgconstraint = ${
            parameters.tgconstraint === undefined
              ? "tgconstraint"
              : typed.pg_catalog_oid(parameters.tgconstraint)
          }`;

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
        parameters: PgCatalog.Tables.PgTrigger.ByTgrelidTgname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,tgrelid,tgparentid,tgname,tgfoid,tgtype,tgenabled,tgisinternal,tgconstrrelid,tgconstrindid,tgconstraint,tgdeferrable,tginitdeferred,tgnargs,tgattr,tgargs,tgqual,tgoldtable,tgnewtable FROM pg_catalog.pg_trigger WHERE tgrelid = ${
            parameters.tgrelid === undefined
              ? "tgrelid"
              : typed.pg_catalog_oid(parameters.tgrelid)
          } AND tgname = ${
            parameters.tgname === undefined
              ? "tgname"
              : typed.pg_catalog_cstring(parameters.tgname)
          }`;

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

      async deleteByOid(parameters: PgCatalog.Tables.PgTrigger.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_trigger WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,tgrelid,tgparentid,tgname,tgfoid,tgtype,tgenabled,tgisinternal,tgconstrrelid,tgconstrindid,tgconstraint,tgdeferrable,tginitdeferred,tgnargs,tgattr,tgargs,tgqual,tgoldtable,tgnewtable
      `;

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
      async deleteByTgconstraint(
        parameters: PgCatalog.Tables.PgTrigger.ByTgconstraint,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_trigger WHERE tgconstraint = ${
            parameters.tgconstraint === undefined
              ? "tgconstraint"
              : typed.pg_catalog_oid(parameters.tgconstraint)
          } RETURNING oid,tgrelid,tgparentid,tgname,tgfoid,tgtype,tgenabled,tgisinternal,tgconstrrelid,tgconstrindid,tgconstraint,tgdeferrable,tginitdeferred,tgnargs,tgattr,tgargs,tgqual,tgoldtable,tgnewtable
      `;

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
      async deleteByTgrelidTgname(
        parameters: PgCatalog.Tables.PgTrigger.ByTgrelidTgname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_trigger WHERE tgrelid = ${
            parameters.tgrelid === undefined
              ? "tgrelid"
              : typed.pg_catalog_oid(parameters.tgrelid)
          } AND tgname = ${
            parameters.tgname === undefined
              ? "tgname"
              : typed.pg_catalog_cstring(parameters.tgname)
          } RETURNING oid,tgrelid,tgparentid,tgname,tgfoid,tgtype,tgenabled,tgisinternal,tgconstrrelid,tgconstrindid,tgconstraint,tgdeferrable,tginitdeferred,tgnargs,tgattr,tgargs,tgqual,tgoldtable,tgnewtable
      `;

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

      async byEvtname(parameters: PgCatalog.Tables.PgEventTrigger.ByEvtname) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,evtname,evtevent,evtowner,evtfoid,evtenabled,evttags FROM pg_catalog.pg_event_trigger WHERE evtname = ${
            parameters.evtname === undefined
              ? "evtname"
              : typed.pg_catalog_cstring(parameters.evtname)
          }`;

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
      async byOid(parameters: PgCatalog.Tables.PgEventTrigger.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,evtname,evtevent,evtowner,evtfoid,evtenabled,evttags FROM pg_catalog.pg_event_trigger WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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

      async deleteByEvtname(
        parameters: PgCatalog.Tables.PgEventTrigger.ByEvtname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_event_trigger WHERE evtname = ${
            parameters.evtname === undefined
              ? "evtname"
              : typed.pg_catalog_cstring(parameters.evtname)
          } RETURNING oid,evtname,evtevent,evtowner,evtfoid,evtenabled,evttags
      `;

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
      async deleteByOid(parameters: PgCatalog.Tables.PgEventTrigger.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_event_trigger WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,evtname,evtevent,evtowner,evtfoid,evtenabled,evttags
      `;

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
        parameters: PgCatalog.Tables.PgDescription.ByObjoidClassoidObjsubid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT objoid,classoid,objsubid,description FROM pg_catalog.pg_description WHERE objoid = ${
            parameters.objoid === undefined
              ? "objoid"
              : typed.pg_catalog_oid(parameters.objoid)
          } AND classoid = ${
            parameters.classoid === undefined
              ? "classoid"
              : typed.pg_catalog_oid(parameters.classoid)
          } AND objsubid = ${
            parameters.objsubid === undefined
              ? "objsubid"
              : typed.pg_catalog_int4(parameters.objsubid)
          }`;

        const results = response.map((record) => ({
          objoid: undefinedIsNull(record.objoid),
          classoid: undefinedIsNull(record.classoid),
          objsubid: undefinedIsNull(record.objsubid),
          description: undefinedIsNull(record.description),
        }));
        return results[0];
      }

      async deleteByObjoidClassoidObjsubid(
        parameters: PgCatalog.Tables.PgDescription.ByObjoidClassoidObjsubid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_description WHERE objoid = ${
            parameters.objoid === undefined
              ? "objoid"
              : typed.pg_catalog_oid(parameters.objoid)
          } AND classoid = ${
            parameters.classoid === undefined
              ? "classoid"
              : typed.pg_catalog_oid(parameters.classoid)
          } AND objsubid = ${
            parameters.objsubid === undefined
              ? "objsubid"
              : typed.pg_catalog_int4(parameters.objsubid)
          } RETURNING objoid,classoid,objsubid,description
      `;

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
        parameters: PgCatalog.Tables.PgCast.ByCastsourceCasttarget,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,castsource,casttarget,castfunc,castcontext,castmethod FROM pg_catalog.pg_cast WHERE castsource = ${
            parameters.castsource === undefined
              ? "castsource"
              : typed.pg_catalog_oid(parameters.castsource)
          } AND casttarget = ${
            parameters.casttarget === undefined
              ? "casttarget"
              : typed.pg_catalog_oid(parameters.casttarget)
          }`;

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
      async byOid(parameters: PgCatalog.Tables.PgCast.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,castsource,casttarget,castfunc,castcontext,castmethod FROM pg_catalog.pg_cast WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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

      async deleteByCastsourceCasttarget(
        parameters: PgCatalog.Tables.PgCast.ByCastsourceCasttarget,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_cast WHERE castsource = ${
            parameters.castsource === undefined
              ? "castsource"
              : typed.pg_catalog_oid(parameters.castsource)
          } AND casttarget = ${
            parameters.casttarget === undefined
              ? "casttarget"
              : typed.pg_catalog_oid(parameters.casttarget)
          } RETURNING oid,castsource,casttarget,castfunc,castcontext,castmethod
      `;

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
      async deleteByOid(parameters: PgCatalog.Tables.PgCast.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`DELETE FROM pg_catalog.pg_cast WHERE oid = ${
          parameters.oid === undefined
            ? "oid"
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,castsource,casttarget,castfunc,castcontext,castmethod
      `;

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
        parameters: PgCatalog.Tables.PgEnum.ByEnumtypidEnumlabel,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,enumtypid,enumsortorder,enumlabel FROM pg_catalog.pg_enum WHERE enumtypid = ${
            parameters.enumtypid === undefined
              ? "enumtypid"
              : typed.pg_catalog_oid(parameters.enumtypid)
          } AND enumlabel = ${
            parameters.enumlabel === undefined
              ? "enumlabel"
              : typed.pg_catalog_cstring(parameters.enumlabel)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          enumtypid: undefinedIsNull(record.enumtypid),
          enumsortorder: undefinedIsNull(record.enumsortorder),
          enumlabel: undefinedIsNull(record.enumlabel),
        }));
        return results[0];
      }
      async byEnumtypidEnumsortorder(
        parameters: PgCatalog.Tables.PgEnum.ByEnumtypidEnumsortorder,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,enumtypid,enumsortorder,enumlabel FROM pg_catalog.pg_enum WHERE enumtypid = ${
            parameters.enumtypid === undefined
              ? "enumtypid"
              : typed.pg_catalog_oid(parameters.enumtypid)
          } AND enumsortorder = ${
            parameters.enumsortorder === undefined
              ? "enumsortorder"
              : typed.pg_catalog_float4(parameters.enumsortorder)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          enumtypid: undefinedIsNull(record.enumtypid),
          enumsortorder: undefinedIsNull(record.enumsortorder),
          enumlabel: undefinedIsNull(record.enumlabel),
        }));
        return results[0];
      }
      async byOid(parameters: PgCatalog.Tables.PgEnum.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,enumtypid,enumsortorder,enumlabel FROM pg_catalog.pg_enum WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          enumtypid: undefinedIsNull(record.enumtypid),
          enumsortorder: undefinedIsNull(record.enumsortorder),
          enumlabel: undefinedIsNull(record.enumlabel),
        }));
        return results[0];
      }

      async deleteByEnumtypidEnumlabel(
        parameters: PgCatalog.Tables.PgEnum.ByEnumtypidEnumlabel,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_enum WHERE enumtypid = ${
            parameters.enumtypid === undefined
              ? "enumtypid"
              : typed.pg_catalog_oid(parameters.enumtypid)
          } AND enumlabel = ${
            parameters.enumlabel === undefined
              ? "enumlabel"
              : typed.pg_catalog_cstring(parameters.enumlabel)
          } RETURNING oid,enumtypid,enumsortorder,enumlabel
      `;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          enumtypid: undefinedIsNull(record.enumtypid),
          enumsortorder: undefinedIsNull(record.enumsortorder),
          enumlabel: undefinedIsNull(record.enumlabel),
        }));
        return results[0];
      }
      async deleteByEnumtypidEnumsortorder(
        parameters: PgCatalog.Tables.PgEnum.ByEnumtypidEnumsortorder,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_enum WHERE enumtypid = ${
            parameters.enumtypid === undefined
              ? "enumtypid"
              : typed.pg_catalog_oid(parameters.enumtypid)
          } AND enumsortorder = ${
            parameters.enumsortorder === undefined
              ? "enumsortorder"
              : typed.pg_catalog_float4(parameters.enumsortorder)
          } RETURNING oid,enumtypid,enumsortorder,enumlabel
      `;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          enumtypid: undefinedIsNull(record.enumtypid),
          enumsortorder: undefinedIsNull(record.enumsortorder),
          enumlabel: undefinedIsNull(record.enumlabel),
        }));
        return results[0];
      }
      async deleteByOid(parameters: PgCatalog.Tables.PgEnum.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`DELETE FROM pg_catalog.pg_enum WHERE oid = ${
          parameters.oid === undefined
            ? "oid"
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,enumtypid,enumsortorder,enumlabel
      `;

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

      async byNspname(parameters: PgCatalog.Tables.PgNamespace.ByNspname) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,nspname,nspowner,nspacl FROM pg_catalog.pg_namespace WHERE nspname = ${
            parameters.nspname === undefined
              ? "nspname"
              : typed.pg_catalog_cstring(parameters.nspname)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          nspname: undefinedIsNull(record.nspname),
          nspowner: undefinedIsNull(record.nspowner),
          nspacl: undefinedIsNull(record.nspacl),
        }));
        return results[0];
      }
      async byOid(parameters: PgCatalog.Tables.PgNamespace.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,nspname,nspowner,nspacl FROM pg_catalog.pg_namespace WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          nspname: undefinedIsNull(record.nspname),
          nspowner: undefinedIsNull(record.nspowner),
          nspacl: undefinedIsNull(record.nspacl),
        }));
        return results[0];
      }

      async deleteByNspname(
        parameters: PgCatalog.Tables.PgNamespace.ByNspname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_namespace WHERE nspname = ${
            parameters.nspname === undefined
              ? "nspname"
              : typed.pg_catalog_cstring(parameters.nspname)
          } RETURNING oid,nspname,nspowner,nspacl
      `;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          nspname: undefinedIsNull(record.nspname),
          nspowner: undefinedIsNull(record.nspowner),
          nspacl: undefinedIsNull(record.nspacl),
        }));
        return results[0];
      }
      async deleteByOid(parameters: PgCatalog.Tables.PgNamespace.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_namespace WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,nspname,nspowner,nspacl
      `;

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
        parameters: PgCatalog.Tables.PgConversion.ByConnameConnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,conname,connamespace,conowner,conforencoding,contoencoding,conproc,condefault FROM pg_catalog.pg_conversion WHERE conname = ${
            parameters.conname === undefined
              ? "conname"
              : typed.pg_catalog_cstring(parameters.conname)
          } AND connamespace = ${
            parameters.connamespace === undefined
              ? "connamespace"
              : typed.pg_catalog_oid(parameters.connamespace)
          }`;

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
        parameters: PgCatalog.Tables.PgConversion.ByConnamespaceConforencodingContoencodingOid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,conname,connamespace,conowner,conforencoding,contoencoding,conproc,condefault FROM pg_catalog.pg_conversion WHERE connamespace = ${
            parameters.connamespace === undefined
              ? "connamespace"
              : typed.pg_catalog_oid(parameters.connamespace)
          } AND conforencoding = ${
            parameters.conforencoding === undefined
              ? "conforencoding"
              : typed.pg_catalog_int4(parameters.conforencoding)
          } AND contoencoding = ${
            parameters.contoencoding === undefined
              ? "contoencoding"
              : typed.pg_catalog_int4(parameters.contoencoding)
          } AND oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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
      async byOid(parameters: PgCatalog.Tables.PgConversion.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,conname,connamespace,conowner,conforencoding,contoencoding,conproc,condefault FROM pg_catalog.pg_conversion WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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

      async deleteByConnameConnamespace(
        parameters: PgCatalog.Tables.PgConversion.ByConnameConnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_conversion WHERE conname = ${
            parameters.conname === undefined
              ? "conname"
              : typed.pg_catalog_cstring(parameters.conname)
          } AND connamespace = ${
            parameters.connamespace === undefined
              ? "connamespace"
              : typed.pg_catalog_oid(parameters.connamespace)
          } RETURNING oid,conname,connamespace,conowner,conforencoding,contoencoding,conproc,condefault
      `;

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
      async deleteByConnamespaceConforencodingContoencodingOid(
        parameters: PgCatalog.Tables.PgConversion.ByConnamespaceConforencodingContoencodingOid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_conversion WHERE connamespace = ${
            parameters.connamespace === undefined
              ? "connamespace"
              : typed.pg_catalog_oid(parameters.connamespace)
          } AND conforencoding = ${
            parameters.conforencoding === undefined
              ? "conforencoding"
              : typed.pg_catalog_int4(parameters.conforencoding)
          } AND contoencoding = ${
            parameters.contoencoding === undefined
              ? "contoencoding"
              : typed.pg_catalog_int4(parameters.contoencoding)
          } AND oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,conname,connamespace,conowner,conforencoding,contoencoding,conproc,condefault
      `;

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
      async deleteByOid(parameters: PgCatalog.Tables.PgConversion.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_conversion WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,conname,connamespace,conowner,conforencoding,contoencoding,conproc,condefault
      `;

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
        parameters: PgCatalog.Tables.PgDepend.ByClassidObjidObjsubid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT classid,objid,objsubid,refclassid,refobjid,refobjsubid,deptype FROM pg_catalog.pg_depend WHERE classid = ${
            parameters.classid === undefined
              ? "classid"
              : typed.pg_catalog_oid(parameters.classid)
          } AND objid = ${
            parameters.objid === undefined
              ? "objid"
              : typed.pg_catalog_oid(parameters.objid)
          } AND objsubid = ${
            parameters.objsubid === undefined
              ? "objsubid"
              : typed.pg_catalog_int4(parameters.objsubid)
          }`;

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
        parameters: PgCatalog.Tables.PgDepend.ByRefclassidRefobjidRefobjsubid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT classid,objid,objsubid,refclassid,refobjid,refobjsubid,deptype FROM pg_catalog.pg_depend WHERE refclassid = ${
            parameters.refclassid === undefined
              ? "refclassid"
              : typed.pg_catalog_oid(parameters.refclassid)
          } AND refobjid = ${
            parameters.refobjid === undefined
              ? "refobjid"
              : typed.pg_catalog_oid(parameters.refobjid)
          } AND refobjsubid = ${
            parameters.refobjsubid === undefined
              ? "refobjsubid"
              : typed.pg_catalog_int4(parameters.refobjsubid)
          }`;

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

      async deleteByClassidObjidObjsubid(
        parameters: PgCatalog.Tables.PgDepend.ByClassidObjidObjsubid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_depend WHERE classid = ${
            parameters.classid === undefined
              ? "classid"
              : typed.pg_catalog_oid(parameters.classid)
          } AND objid = ${
            parameters.objid === undefined
              ? "objid"
              : typed.pg_catalog_oid(parameters.objid)
          } AND objsubid = ${
            parameters.objsubid === undefined
              ? "objsubid"
              : typed.pg_catalog_int4(parameters.objsubid)
          } RETURNING classid,objid,objsubid,refclassid,refobjid,refobjsubid,deptype
      `;

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
      async deleteByRefclassidRefobjidRefobjsubid(
        parameters: PgCatalog.Tables.PgDepend.ByRefclassidRefobjidRefobjsubid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_depend WHERE refclassid = ${
            parameters.refclassid === undefined
              ? "refclassid"
              : typed.pg_catalog_oid(parameters.refclassid)
          } AND refobjid = ${
            parameters.refobjid === undefined
              ? "refobjid"
              : typed.pg_catalog_oid(parameters.refobjid)
          } AND refobjsubid = ${
            parameters.refobjsubid === undefined
              ? "refobjsubid"
              : typed.pg_catalog_int4(parameters.refobjsubid)
          } RETURNING classid,objid,objsubid,refclassid,refobjid,refobjsubid,deptype
      `;

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

      async byDatname(parameters: PgCatalog.Tables.PgDatabase.ByDatname) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,datname,datdba,encoding,datlocprovider,datistemplate,datallowconn,datconnlimit,datfrozenxid,datminmxid,dattablespace,datcollate,datctype,daticulocale,daticurules,datcollversion,datacl FROM pg_catalog.pg_database WHERE datname = ${
            parameters.datname === undefined
              ? "datname"
              : typed.pg_catalog_cstring(parameters.datname)
          }`;

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
      async byOid(parameters: PgCatalog.Tables.PgDatabase.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,datname,datdba,encoding,datlocprovider,datistemplate,datallowconn,datconnlimit,datfrozenxid,datminmxid,dattablespace,datcollate,datctype,daticulocale,daticurules,datcollversion,datacl FROM pg_catalog.pg_database WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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

      async deleteByDatname(parameters: PgCatalog.Tables.PgDatabase.ByDatname) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_database WHERE datname = ${
            parameters.datname === undefined
              ? "datname"
              : typed.pg_catalog_cstring(parameters.datname)
          } RETURNING oid,datname,datdba,encoding,datlocprovider,datistemplate,datallowconn,datconnlimit,datfrozenxid,datminmxid,dattablespace,datcollate,datctype,daticulocale,daticurules,datcollversion,datacl
      `;

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
      async deleteByOid(parameters: PgCatalog.Tables.PgDatabase.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_database WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,datname,datdba,encoding,datlocprovider,datistemplate,datallowconn,datconnlimit,datfrozenxid,datminmxid,dattablespace,datcollate,datctype,daticulocale,daticurules,datcollversion,datacl
      `;

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
        parameters: PgCatalog.Tables.PgDbRoleSetting.BySetdatabaseSetrole,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT setdatabase,setrole,setconfig FROM pg_catalog.pg_db_role_setting WHERE setdatabase = ${
            parameters.setdatabase === undefined
              ? "setdatabase"
              : typed.pg_catalog_oid(parameters.setdatabase)
          } AND setrole = ${
            parameters.setrole === undefined
              ? "setrole"
              : typed.pg_catalog_oid(parameters.setrole)
          }`;

        const results = response.map((record) => ({
          setdatabase: undefinedIsNull(record.setdatabase),
          setrole: undefinedIsNull(record.setrole),
          setconfig: undefinedIsNull(record.setconfig),
        }));
        return results[0];
      }

      async deleteBySetdatabaseSetrole(
        parameters: PgCatalog.Tables.PgDbRoleSetting.BySetdatabaseSetrole,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_db_role_setting WHERE setdatabase = ${
            parameters.setdatabase === undefined
              ? "setdatabase"
              : typed.pg_catalog_oid(parameters.setdatabase)
          } AND setrole = ${
            parameters.setrole === undefined
              ? "setrole"
              : typed.pg_catalog_oid(parameters.setrole)
          } RETURNING setdatabase,setrole,setconfig
      `;

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

      async byOid(parameters: PgCatalog.Tables.PgTablespace.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,spcname,spcowner,spcacl,spcoptions FROM pg_catalog.pg_tablespace WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          spcname: undefinedIsNull(record.spcname),
          spcowner: undefinedIsNull(record.spcowner),
          spcacl: undefinedIsNull(record.spcacl),
          spcoptions: undefinedIsNull(record.spcoptions),
        }));
        return results[0];
      }
      async bySpcname(parameters: PgCatalog.Tables.PgTablespace.BySpcname) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,spcname,spcowner,spcacl,spcoptions FROM pg_catalog.pg_tablespace WHERE spcname = ${
            parameters.spcname === undefined
              ? "spcname"
              : typed.pg_catalog_cstring(parameters.spcname)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          spcname: undefinedIsNull(record.spcname),
          spcowner: undefinedIsNull(record.spcowner),
          spcacl: undefinedIsNull(record.spcacl),
          spcoptions: undefinedIsNull(record.spcoptions),
        }));
        return results[0];
      }

      async deleteByOid(parameters: PgCatalog.Tables.PgTablespace.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_tablespace WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,spcname,spcowner,spcacl,spcoptions
      `;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          spcname: undefinedIsNull(record.spcname),
          spcowner: undefinedIsNull(record.spcowner),
          spcacl: undefinedIsNull(record.spcacl),
          spcoptions: undefinedIsNull(record.spcoptions),
        }));
        return results[0];
      }
      async deleteBySpcname(
        parameters: PgCatalog.Tables.PgTablespace.BySpcname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_tablespace WHERE spcname = ${
            parameters.spcname === undefined
              ? "spcname"
              : typed.pg_catalog_cstring(parameters.spcname)
          } RETURNING oid,spcname,spcowner,spcacl,spcoptions
      `;

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

      async byGrantor(parameters: PgCatalog.Tables.PgAuthMembers.ByGrantor) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,roleid,member,grantor,admin_option,inherit_option,set_option FROM pg_catalog.pg_auth_members WHERE grantor = ${
            parameters.grantor === undefined
              ? "grantor"
              : typed.pg_catalog_oid(parameters.grantor)
          }`;

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
        parameters: PgCatalog.Tables.PgAuthMembers.ByMemberRoleidGrantor,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,roleid,member,grantor,admin_option,inherit_option,set_option FROM pg_catalog.pg_auth_members WHERE member = ${
            parameters.member === undefined
              ? "member"
              : typed.pg_catalog_oid(parameters.member)
          } AND roleid = ${
            parameters.roleid === undefined
              ? "roleid"
              : typed.pg_catalog_oid(parameters.roleid)
          } AND grantor = ${
            parameters.grantor === undefined
              ? "grantor"
              : typed.pg_catalog_oid(parameters.grantor)
          }`;

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
      async byOid(parameters: PgCatalog.Tables.PgAuthMembers.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,roleid,member,grantor,admin_option,inherit_option,set_option FROM pg_catalog.pg_auth_members WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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
        parameters: PgCatalog.Tables.PgAuthMembers.ByRoleidMemberGrantor,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,roleid,member,grantor,admin_option,inherit_option,set_option FROM pg_catalog.pg_auth_members WHERE roleid = ${
            parameters.roleid === undefined
              ? "roleid"
              : typed.pg_catalog_oid(parameters.roleid)
          } AND member = ${
            parameters.member === undefined
              ? "member"
              : typed.pg_catalog_oid(parameters.member)
          } AND grantor = ${
            parameters.grantor === undefined
              ? "grantor"
              : typed.pg_catalog_oid(parameters.grantor)
          }`;

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

      async deleteByGrantor(
        parameters: PgCatalog.Tables.PgAuthMembers.ByGrantor,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_auth_members WHERE grantor = ${
            parameters.grantor === undefined
              ? "grantor"
              : typed.pg_catalog_oid(parameters.grantor)
          } RETURNING oid,roleid,member,grantor,admin_option,inherit_option,set_option
      `;

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
      async deleteByMemberRoleidGrantor(
        parameters: PgCatalog.Tables.PgAuthMembers.ByMemberRoleidGrantor,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_auth_members WHERE member = ${
            parameters.member === undefined
              ? "member"
              : typed.pg_catalog_oid(parameters.member)
          } AND roleid = ${
            parameters.roleid === undefined
              ? "roleid"
              : typed.pg_catalog_oid(parameters.roleid)
          } AND grantor = ${
            parameters.grantor === undefined
              ? "grantor"
              : typed.pg_catalog_oid(parameters.grantor)
          } RETURNING oid,roleid,member,grantor,admin_option,inherit_option,set_option
      `;

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
      async deleteByOid(parameters: PgCatalog.Tables.PgAuthMembers.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_auth_members WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,roleid,member,grantor,admin_option,inherit_option,set_option
      `;

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
      async deleteByRoleidMemberGrantor(
        parameters: PgCatalog.Tables.PgAuthMembers.ByRoleidMemberGrantor,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_auth_members WHERE roleid = ${
            parameters.roleid === undefined
              ? "roleid"
              : typed.pg_catalog_oid(parameters.roleid)
          } AND member = ${
            parameters.member === undefined
              ? "member"
              : typed.pg_catalog_oid(parameters.member)
          } AND grantor = ${
            parameters.grantor === undefined
              ? "grantor"
              : typed.pg_catalog_oid(parameters.grantor)
          } RETURNING oid,roleid,member,grantor,admin_option,inherit_option,set_option
      `;

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
        parameters: PgCatalog.Tables.PgShdepend.ByDbidClassidObjidObjsubid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT dbid,classid,objid,objsubid,refclassid,refobjid,deptype FROM pg_catalog.pg_shdepend WHERE dbid = ${
            parameters.dbid === undefined
              ? "dbid"
              : typed.pg_catalog_oid(parameters.dbid)
          } AND classid = ${
            parameters.classid === undefined
              ? "classid"
              : typed.pg_catalog_oid(parameters.classid)
          } AND objid = ${
            parameters.objid === undefined
              ? "objid"
              : typed.pg_catalog_oid(parameters.objid)
          } AND objsubid = ${
            parameters.objsubid === undefined
              ? "objsubid"
              : typed.pg_catalog_int4(parameters.objsubid)
          }`;

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
        parameters: PgCatalog.Tables.PgShdepend.ByRefclassidRefobjid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT dbid,classid,objid,objsubid,refclassid,refobjid,deptype FROM pg_catalog.pg_shdepend WHERE refclassid = ${
            parameters.refclassid === undefined
              ? "refclassid"
              : typed.pg_catalog_oid(parameters.refclassid)
          } AND refobjid = ${
            parameters.refobjid === undefined
              ? "refobjid"
              : typed.pg_catalog_oid(parameters.refobjid)
          }`;

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

      async deleteByDbidClassidObjidObjsubid(
        parameters: PgCatalog.Tables.PgShdepend.ByDbidClassidObjidObjsubid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_shdepend WHERE dbid = ${
            parameters.dbid === undefined
              ? "dbid"
              : typed.pg_catalog_oid(parameters.dbid)
          } AND classid = ${
            parameters.classid === undefined
              ? "classid"
              : typed.pg_catalog_oid(parameters.classid)
          } AND objid = ${
            parameters.objid === undefined
              ? "objid"
              : typed.pg_catalog_oid(parameters.objid)
          } AND objsubid = ${
            parameters.objsubid === undefined
              ? "objsubid"
              : typed.pg_catalog_int4(parameters.objsubid)
          } RETURNING dbid,classid,objid,objsubid,refclassid,refobjid,deptype
      `;

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
      async deleteByRefclassidRefobjid(
        parameters: PgCatalog.Tables.PgShdepend.ByRefclassidRefobjid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_shdepend WHERE refclassid = ${
            parameters.refclassid === undefined
              ? "refclassid"
              : typed.pg_catalog_oid(parameters.refclassid)
          } AND refobjid = ${
            parameters.refobjid === undefined
              ? "refobjid"
              : typed.pg_catalog_oid(parameters.refobjid)
          } RETURNING dbid,classid,objid,objsubid,refclassid,refobjid,deptype
      `;

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
        parameters: PgCatalog.Tables.PgShdescription.ByObjoidClassoid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT objoid,classoid,description FROM pg_catalog.pg_shdescription WHERE objoid = ${
            parameters.objoid === undefined
              ? "objoid"
              : typed.pg_catalog_oid(parameters.objoid)
          } AND classoid = ${
            parameters.classoid === undefined
              ? "classoid"
              : typed.pg_catalog_oid(parameters.classoid)
          }`;

        const results = response.map((record) => ({
          objoid: undefinedIsNull(record.objoid),
          classoid: undefinedIsNull(record.classoid),
          description: undefinedIsNull(record.description),
        }));
        return results[0];
      }

      async deleteByObjoidClassoid(
        parameters: PgCatalog.Tables.PgShdescription.ByObjoidClassoid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_shdescription WHERE objoid = ${
            parameters.objoid === undefined
              ? "objoid"
              : typed.pg_catalog_oid(parameters.objoid)
          } AND classoid = ${
            parameters.classoid === undefined
              ? "classoid"
              : typed.pg_catalog_oid(parameters.classoid)
          } RETURNING objoid,classoid,description
      `;

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
        parameters: PgCatalog.Tables.PgTsConfig.ByCfgnameCfgnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,cfgname,cfgnamespace,cfgowner,cfgparser FROM pg_catalog.pg_ts_config WHERE cfgname = ${
            parameters.cfgname === undefined
              ? "cfgname"
              : typed.pg_catalog_cstring(parameters.cfgname)
          } AND cfgnamespace = ${
            parameters.cfgnamespace === undefined
              ? "cfgnamespace"
              : typed.pg_catalog_oid(parameters.cfgnamespace)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          cfgname: undefinedIsNull(record.cfgname),
          cfgnamespace: undefinedIsNull(record.cfgnamespace),
          cfgowner: undefinedIsNull(record.cfgowner),
          cfgparser: undefinedIsNull(record.cfgparser),
        }));
        return results[0];
      }
      async byOid(parameters: PgCatalog.Tables.PgTsConfig.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,cfgname,cfgnamespace,cfgowner,cfgparser FROM pg_catalog.pg_ts_config WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          cfgname: undefinedIsNull(record.cfgname),
          cfgnamespace: undefinedIsNull(record.cfgnamespace),
          cfgowner: undefinedIsNull(record.cfgowner),
          cfgparser: undefinedIsNull(record.cfgparser),
        }));
        return results[0];
      }

      async deleteByCfgnameCfgnamespace(
        parameters: PgCatalog.Tables.PgTsConfig.ByCfgnameCfgnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_ts_config WHERE cfgname = ${
            parameters.cfgname === undefined
              ? "cfgname"
              : typed.pg_catalog_cstring(parameters.cfgname)
          } AND cfgnamespace = ${
            parameters.cfgnamespace === undefined
              ? "cfgnamespace"
              : typed.pg_catalog_oid(parameters.cfgnamespace)
          } RETURNING oid,cfgname,cfgnamespace,cfgowner,cfgparser
      `;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          cfgname: undefinedIsNull(record.cfgname),
          cfgnamespace: undefinedIsNull(record.cfgnamespace),
          cfgowner: undefinedIsNull(record.cfgowner),
          cfgparser: undefinedIsNull(record.cfgparser),
        }));
        return results[0];
      }
      async deleteByOid(parameters: PgCatalog.Tables.PgTsConfig.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_ts_config WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,cfgname,cfgnamespace,cfgowner,cfgparser
      `;

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
        parameters: PgCatalog.Tables.PgTsConfigMap.ByMapcfgMaptokentypeMapseqno,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT mapcfg,maptokentype,mapseqno,mapdict FROM pg_catalog.pg_ts_config_map WHERE mapcfg = ${
            parameters.mapcfg === undefined
              ? "mapcfg"
              : typed.pg_catalog_oid(parameters.mapcfg)
          } AND maptokentype = ${
            parameters.maptokentype === undefined
              ? "maptokentype"
              : typed.pg_catalog_int4(parameters.maptokentype)
          } AND mapseqno = ${
            parameters.mapseqno === undefined
              ? "mapseqno"
              : typed.pg_catalog_int4(parameters.mapseqno)
          }`;

        const results = response.map((record) => ({
          mapcfg: undefinedIsNull(record.mapcfg),
          maptokentype: undefinedIsNull(record.maptokentype),
          mapseqno: undefinedIsNull(record.mapseqno),
          mapdict: undefinedIsNull(record.mapdict),
        }));
        return results[0];
      }

      async deleteByMapcfgMaptokentypeMapseqno(
        parameters: PgCatalog.Tables.PgTsConfigMap.ByMapcfgMaptokentypeMapseqno,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_ts_config_map WHERE mapcfg = ${
            parameters.mapcfg === undefined
              ? "mapcfg"
              : typed.pg_catalog_oid(parameters.mapcfg)
          } AND maptokentype = ${
            parameters.maptokentype === undefined
              ? "maptokentype"
              : typed.pg_catalog_int4(parameters.maptokentype)
          } AND mapseqno = ${
            parameters.mapseqno === undefined
              ? "mapseqno"
              : typed.pg_catalog_int4(parameters.mapseqno)
          } RETURNING mapcfg,maptokentype,mapseqno,mapdict
      `;

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
        parameters: PgCatalog.Tables.PgTsDict.ByDictnameDictnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,dictname,dictnamespace,dictowner,dicttemplate,dictinitoption FROM pg_catalog.pg_ts_dict WHERE dictname = ${
            parameters.dictname === undefined
              ? "dictname"
              : typed.pg_catalog_cstring(parameters.dictname)
          } AND dictnamespace = ${
            parameters.dictnamespace === undefined
              ? "dictnamespace"
              : typed.pg_catalog_oid(parameters.dictnamespace)
          }`;

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
      async byOid(parameters: PgCatalog.Tables.PgTsDict.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,dictname,dictnamespace,dictowner,dicttemplate,dictinitoption FROM pg_catalog.pg_ts_dict WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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

      async deleteByDictnameDictnamespace(
        parameters: PgCatalog.Tables.PgTsDict.ByDictnameDictnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_ts_dict WHERE dictname = ${
            parameters.dictname === undefined
              ? "dictname"
              : typed.pg_catalog_cstring(parameters.dictname)
          } AND dictnamespace = ${
            parameters.dictnamespace === undefined
              ? "dictnamespace"
              : typed.pg_catalog_oid(parameters.dictnamespace)
          } RETURNING oid,dictname,dictnamespace,dictowner,dicttemplate,dictinitoption
      `;

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
      async deleteByOid(parameters: PgCatalog.Tables.PgTsDict.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_ts_dict WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,dictname,dictnamespace,dictowner,dicttemplate,dictinitoption
      `;

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

      async byOid(parameters: PgCatalog.Tables.PgTsParser.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,prsname,prsnamespace,prsstart,prstoken,prsend,prsheadline,prslextype FROM pg_catalog.pg_ts_parser WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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
        parameters: PgCatalog.Tables.PgTsParser.ByPrsnamePrsnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,prsname,prsnamespace,prsstart,prstoken,prsend,prsheadline,prslextype FROM pg_catalog.pg_ts_parser WHERE prsname = ${
            parameters.prsname === undefined
              ? "prsname"
              : typed.pg_catalog_cstring(parameters.prsname)
          } AND prsnamespace = ${
            parameters.prsnamespace === undefined
              ? "prsnamespace"
              : typed.pg_catalog_oid(parameters.prsnamespace)
          }`;

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

      async deleteByOid(parameters: PgCatalog.Tables.PgTsParser.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_ts_parser WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,prsname,prsnamespace,prsstart,prstoken,prsend,prsheadline,prslextype
      `;

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
      async deleteByPrsnamePrsnamespace(
        parameters: PgCatalog.Tables.PgTsParser.ByPrsnamePrsnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_ts_parser WHERE prsname = ${
            parameters.prsname === undefined
              ? "prsname"
              : typed.pg_catalog_cstring(parameters.prsname)
          } AND prsnamespace = ${
            parameters.prsnamespace === undefined
              ? "prsnamespace"
              : typed.pg_catalog_oid(parameters.prsnamespace)
          } RETURNING oid,prsname,prsnamespace,prsstart,prstoken,prsend,prsheadline,prslextype
      `;

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

      async byOid(parameters: PgCatalog.Tables.PgTsTemplate.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,tmplname,tmplnamespace,tmplinit,tmpllexize FROM pg_catalog.pg_ts_template WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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
        parameters: PgCatalog.Tables.PgTsTemplate.ByTmplnameTmplnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,tmplname,tmplnamespace,tmplinit,tmpllexize FROM pg_catalog.pg_ts_template WHERE tmplname = ${
            parameters.tmplname === undefined
              ? "tmplname"
              : typed.pg_catalog_cstring(parameters.tmplname)
          } AND tmplnamespace = ${
            parameters.tmplnamespace === undefined
              ? "tmplnamespace"
              : typed.pg_catalog_oid(parameters.tmplnamespace)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          tmplname: undefinedIsNull(record.tmplname),
          tmplnamespace: undefinedIsNull(record.tmplnamespace),
          tmplinit: undefinedIsNull(record.tmplinit),
          tmpllexize: undefinedIsNull(record.tmpllexize),
        }));
        return results[0];
      }

      async deleteByOid(parameters: PgCatalog.Tables.PgTsTemplate.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_ts_template WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,tmplname,tmplnamespace,tmplinit,tmpllexize
      `;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          tmplname: undefinedIsNull(record.tmplname),
          tmplnamespace: undefinedIsNull(record.tmplnamespace),
          tmplinit: undefinedIsNull(record.tmplinit),
          tmpllexize: undefinedIsNull(record.tmpllexize),
        }));
        return results[0];
      }
      async deleteByTmplnameTmplnamespace(
        parameters: PgCatalog.Tables.PgTsTemplate.ByTmplnameTmplnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_ts_template WHERE tmplname = ${
            parameters.tmplname === undefined
              ? "tmplname"
              : typed.pg_catalog_cstring(parameters.tmplname)
          } AND tmplnamespace = ${
            parameters.tmplnamespace === undefined
              ? "tmplnamespace"
              : typed.pg_catalog_oid(parameters.tmplnamespace)
          } RETURNING oid,tmplname,tmplnamespace,tmplinit,tmpllexize
      `;

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

      async byExtname(parameters: PgCatalog.Tables.PgExtension.ByExtname) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,extname,extowner,extnamespace,extrelocatable,extversion,extconfig,extcondition FROM pg_catalog.pg_extension WHERE extname = ${
            parameters.extname === undefined
              ? "extname"
              : typed.pg_catalog_cstring(parameters.extname)
          }`;

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
      async byOid(parameters: PgCatalog.Tables.PgExtension.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,extname,extowner,extnamespace,extrelocatable,extversion,extconfig,extcondition FROM pg_catalog.pg_extension WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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

      async deleteByExtname(
        parameters: PgCatalog.Tables.PgExtension.ByExtname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_extension WHERE extname = ${
            parameters.extname === undefined
              ? "extname"
              : typed.pg_catalog_cstring(parameters.extname)
          } RETURNING oid,extname,extowner,extnamespace,extrelocatable,extversion,extconfig,extcondition
      `;

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
      async deleteByOid(parameters: PgCatalog.Tables.PgExtension.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_extension WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,extname,extowner,extnamespace,extrelocatable,extversion,extconfig,extcondition
      `;

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
        parameters: PgCatalog.Tables.PgForeignDataWrapper.ByFdwname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,fdwname,fdwowner,fdwhandler,fdwvalidator,fdwacl,fdwoptions FROM pg_catalog.pg_foreign_data_wrapper WHERE fdwname = ${
            parameters.fdwname === undefined
              ? "fdwname"
              : typed.pg_catalog_cstring(parameters.fdwname)
          }`;

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
      async byOid(parameters: PgCatalog.Tables.PgForeignDataWrapper.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,fdwname,fdwowner,fdwhandler,fdwvalidator,fdwacl,fdwoptions FROM pg_catalog.pg_foreign_data_wrapper WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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

      async deleteByFdwname(
        parameters: PgCatalog.Tables.PgForeignDataWrapper.ByFdwname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_foreign_data_wrapper WHERE fdwname = ${
            parameters.fdwname === undefined
              ? "fdwname"
              : typed.pg_catalog_cstring(parameters.fdwname)
          } RETURNING oid,fdwname,fdwowner,fdwhandler,fdwvalidator,fdwacl,fdwoptions
      `;

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
      async deleteByOid(
        parameters: PgCatalog.Tables.PgForeignDataWrapper.ByOid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_foreign_data_wrapper WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,fdwname,fdwowner,fdwhandler,fdwvalidator,fdwacl,fdwoptions
      `;

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

      async byOid(parameters: PgCatalog.Tables.PgForeignServer.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,srvname,srvowner,srvfdw,srvtype,srvversion,srvacl,srvoptions FROM pg_catalog.pg_foreign_server WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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
      async bySrvname(parameters: PgCatalog.Tables.PgForeignServer.BySrvname) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,srvname,srvowner,srvfdw,srvtype,srvversion,srvacl,srvoptions FROM pg_catalog.pg_foreign_server WHERE srvname = ${
            parameters.srvname === undefined
              ? "srvname"
              : typed.pg_catalog_cstring(parameters.srvname)
          }`;

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

      async deleteByOid(parameters: PgCatalog.Tables.PgForeignServer.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_foreign_server WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,srvname,srvowner,srvfdw,srvtype,srvversion,srvacl,srvoptions
      `;

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
      async deleteBySrvname(
        parameters: PgCatalog.Tables.PgForeignServer.BySrvname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_foreign_server WHERE srvname = ${
            parameters.srvname === undefined
              ? "srvname"
              : typed.pg_catalog_cstring(parameters.srvname)
          } RETURNING oid,srvname,srvowner,srvfdw,srvtype,srvversion,srvacl,srvoptions
      `;

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

      async byOid(parameters: PgCatalog.Tables.PgPolicy.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,polname,polrelid,polcmd,polpermissive,polroles,polqual,polwithcheck FROM pg_catalog.pg_policy WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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
        parameters: PgCatalog.Tables.PgPolicy.ByPolrelidPolname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,polname,polrelid,polcmd,polpermissive,polroles,polqual,polwithcheck FROM pg_catalog.pg_policy WHERE polrelid = ${
            parameters.polrelid === undefined
              ? "polrelid"
              : typed.pg_catalog_oid(parameters.polrelid)
          } AND polname = ${
            parameters.polname === undefined
              ? "polname"
              : typed.pg_catalog_cstring(parameters.polname)
          }`;

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

      async deleteByOid(parameters: PgCatalog.Tables.PgPolicy.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_policy WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,polname,polrelid,polcmd,polpermissive,polroles,polqual,polwithcheck
      `;

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
      async deleteByPolrelidPolname(
        parameters: PgCatalog.Tables.PgPolicy.ByPolrelidPolname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_policy WHERE polrelid = ${
            parameters.polrelid === undefined
              ? "polrelid"
              : typed.pg_catalog_oid(parameters.polrelid)
          } AND polname = ${
            parameters.polname === undefined
              ? "polname"
              : typed.pg_catalog_cstring(parameters.polname)
          } RETURNING oid,polname,polrelid,polcmd,polpermissive,polroles,polqual,polwithcheck
      `;

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
        parameters: PgCatalog.Tables.PgReplicationOrigin.ByRoident,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT roident,roname FROM pg_catalog.pg_replication_origin WHERE roident = ${
            parameters.roident === undefined
              ? "roident"
              : typed.pg_catalog_oid(parameters.roident)
          }`;

        const results = response.map((record) => ({
          roident: undefinedIsNull(record.roident),
          roname: undefinedIsNull(record.roname),
        }));
        return results[0];
      }
      async byRoname(
        parameters: PgCatalog.Tables.PgReplicationOrigin.ByRoname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT roident,roname FROM pg_catalog.pg_replication_origin WHERE roname = ${
            parameters.roname === undefined
              ? "roname"
              : typed.pg_catalog_text(parameters.roname)
          }`;

        const results = response.map((record) => ({
          roident: undefinedIsNull(record.roident),
          roname: undefinedIsNull(record.roname),
        }));
        return results[0];
      }

      async deleteByRoident(
        parameters: PgCatalog.Tables.PgReplicationOrigin.ByRoident,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_replication_origin WHERE roident = ${
            parameters.roident === undefined
              ? "roident"
              : typed.pg_catalog_oid(parameters.roident)
          } RETURNING roident,roname
      `;

        const results = response.map((record) => ({
          roident: undefinedIsNull(record.roident),
          roname: undefinedIsNull(record.roname),
        }));
        return results[0];
      }
      async deleteByRoname(
        parameters: PgCatalog.Tables.PgReplicationOrigin.ByRoname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_replication_origin WHERE roname = ${
            parameters.roname === undefined
              ? "roname"
              : typed.pg_catalog_text(parameters.roname)
          } RETURNING roident,roname
      `;

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
        parameters: PgCatalog.Tables.PgDefaultAcl.ByDefaclroleDefaclnamespaceDefaclobjtype,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,defaclrole,defaclnamespace,defaclobjtype,defaclacl FROM pg_catalog.pg_default_acl WHERE defaclrole = ${
            parameters.defaclrole === undefined
              ? "defaclrole"
              : typed.pg_catalog_oid(parameters.defaclrole)
          } AND defaclnamespace = ${
            parameters.defaclnamespace === undefined
              ? "defaclnamespace"
              : typed.pg_catalog_oid(parameters.defaclnamespace)
          } AND defaclobjtype = ${
            parameters.defaclobjtype === undefined
              ? "defaclobjtype"
              : typed.pg_catalog_char(parameters.defaclobjtype)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          defaclrole: undefinedIsNull(record.defaclrole),
          defaclnamespace: undefinedIsNull(record.defaclnamespace),
          defaclobjtype: undefinedIsNull(record.defaclobjtype),
          defaclacl: undefinedIsNull(record.defaclacl),
        }));
        return results[0];
      }
      async byOid(parameters: PgCatalog.Tables.PgDefaultAcl.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,defaclrole,defaclnamespace,defaclobjtype,defaclacl FROM pg_catalog.pg_default_acl WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          defaclrole: undefinedIsNull(record.defaclrole),
          defaclnamespace: undefinedIsNull(record.defaclnamespace),
          defaclobjtype: undefinedIsNull(record.defaclobjtype),
          defaclacl: undefinedIsNull(record.defaclacl),
        }));
        return results[0];
      }

      async deleteByDefaclroleDefaclnamespaceDefaclobjtype(
        parameters: PgCatalog.Tables.PgDefaultAcl.ByDefaclroleDefaclnamespaceDefaclobjtype,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_default_acl WHERE defaclrole = ${
            parameters.defaclrole === undefined
              ? "defaclrole"
              : typed.pg_catalog_oid(parameters.defaclrole)
          } AND defaclnamespace = ${
            parameters.defaclnamespace === undefined
              ? "defaclnamespace"
              : typed.pg_catalog_oid(parameters.defaclnamespace)
          } AND defaclobjtype = ${
            parameters.defaclobjtype === undefined
              ? "defaclobjtype"
              : typed.pg_catalog_char(parameters.defaclobjtype)
          } RETURNING oid,defaclrole,defaclnamespace,defaclobjtype,defaclacl
      `;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          defaclrole: undefinedIsNull(record.defaclrole),
          defaclnamespace: undefinedIsNull(record.defaclnamespace),
          defaclobjtype: undefinedIsNull(record.defaclobjtype),
          defaclacl: undefinedIsNull(record.defaclacl),
        }));
        return results[0];
      }
      async deleteByOid(parameters: PgCatalog.Tables.PgDefaultAcl.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_default_acl WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,defaclrole,defaclnamespace,defaclobjtype,defaclacl
      `;

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
        parameters: PgCatalog.Tables.PgInitPrivs.ByObjoidClassoidObjsubid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT objoid,classoid,objsubid,privtype,initprivs FROM pg_catalog.pg_init_privs WHERE objoid = ${
            parameters.objoid === undefined
              ? "objoid"
              : typed.pg_catalog_oid(parameters.objoid)
          } AND classoid = ${
            parameters.classoid === undefined
              ? "classoid"
              : typed.pg_catalog_oid(parameters.classoid)
          } AND objsubid = ${
            parameters.objsubid === undefined
              ? "objsubid"
              : typed.pg_catalog_int4(parameters.objsubid)
          }`;

        const results = response.map((record) => ({
          objoid: undefinedIsNull(record.objoid),
          classoid: undefinedIsNull(record.classoid),
          objsubid: undefinedIsNull(record.objsubid),
          privtype: undefinedIsNull(record.privtype),
          initprivs: undefinedIsNull(record.initprivs),
        }));
        return results[0];
      }

      async deleteByObjoidClassoidObjsubid(
        parameters: PgCatalog.Tables.PgInitPrivs.ByObjoidClassoidObjsubid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_init_privs WHERE objoid = ${
            parameters.objoid === undefined
              ? "objoid"
              : typed.pg_catalog_oid(parameters.objoid)
          } AND classoid = ${
            parameters.classoid === undefined
              ? "classoid"
              : typed.pg_catalog_oid(parameters.classoid)
          } AND objsubid = ${
            parameters.objsubid === undefined
              ? "objsubid"
              : typed.pg_catalog_int4(parameters.objsubid)
          } RETURNING objoid,classoid,objsubid,privtype,initprivs
      `;

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
        parameters: PgCatalog.Tables.PgSeclabel.ByObjoidClassoidObjsubidProvider,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT objoid,classoid,objsubid,provider,label FROM pg_catalog.pg_seclabel WHERE objoid = ${
            parameters.objoid === undefined
              ? "objoid"
              : typed.pg_catalog_oid(parameters.objoid)
          } AND classoid = ${
            parameters.classoid === undefined
              ? "classoid"
              : typed.pg_catalog_oid(parameters.classoid)
          } AND objsubid = ${
            parameters.objsubid === undefined
              ? "objsubid"
              : typed.pg_catalog_int4(parameters.objsubid)
          } AND provider = ${
            parameters.provider === undefined
              ? "provider"
              : typed.pg_catalog_text(parameters.provider)
          }`;

        const results = response.map((record) => ({
          objoid: undefinedIsNull(record.objoid),
          classoid: undefinedIsNull(record.classoid),
          objsubid: undefinedIsNull(record.objsubid),
          provider: undefinedIsNull(record.provider),
          label: undefinedIsNull(record.label),
        }));
        return results[0];
      }

      async deleteByObjoidClassoidObjsubidProvider(
        parameters: PgCatalog.Tables.PgSeclabel.ByObjoidClassoidObjsubidProvider,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_seclabel WHERE objoid = ${
            parameters.objoid === undefined
              ? "objoid"
              : typed.pg_catalog_oid(parameters.objoid)
          } AND classoid = ${
            parameters.classoid === undefined
              ? "classoid"
              : typed.pg_catalog_oid(parameters.classoid)
          } AND objsubid = ${
            parameters.objsubid === undefined
              ? "objsubid"
              : typed.pg_catalog_int4(parameters.objsubid)
          } AND provider = ${
            parameters.provider === undefined
              ? "provider"
              : typed.pg_catalog_text(parameters.provider)
          } RETURNING objoid,classoid,objsubid,provider,label
      `;

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
        parameters: PgCatalog.Tables.PgShseclabel.ByObjoidClassoidProvider,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT objoid,classoid,provider,label FROM pg_catalog.pg_shseclabel WHERE objoid = ${
            parameters.objoid === undefined
              ? "objoid"
              : typed.pg_catalog_oid(parameters.objoid)
          } AND classoid = ${
            parameters.classoid === undefined
              ? "classoid"
              : typed.pg_catalog_oid(parameters.classoid)
          } AND provider = ${
            parameters.provider === undefined
              ? "provider"
              : typed.pg_catalog_text(parameters.provider)
          }`;

        const results = response.map((record) => ({
          objoid: undefinedIsNull(record.objoid),
          classoid: undefinedIsNull(record.classoid),
          provider: undefinedIsNull(record.provider),
          label: undefinedIsNull(record.label),
        }));
        return results[0];
      }

      async deleteByObjoidClassoidProvider(
        parameters: PgCatalog.Tables.PgShseclabel.ByObjoidClassoidProvider,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_shseclabel WHERE objoid = ${
            parameters.objoid === undefined
              ? "objoid"
              : typed.pg_catalog_oid(parameters.objoid)
          } AND classoid = ${
            parameters.classoid === undefined
              ? "classoid"
              : typed.pg_catalog_oid(parameters.classoid)
          } AND provider = ${
            parameters.provider === undefined
              ? "provider"
              : typed.pg_catalog_text(parameters.provider)
          } RETURNING objoid,classoid,provider,label
      `;

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
        parameters: PgCatalog.Tables.PgCollation.ByCollnameCollencodingCollnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,collname,collnamespace,collowner,collprovider,collisdeterministic,collencoding,collcollate,collctype,colliculocale,collicurules,collversion FROM pg_catalog.pg_collation WHERE collname = ${
            parameters.collname === undefined
              ? "collname"
              : typed.pg_catalog_cstring(parameters.collname)
          } AND collencoding = ${
            parameters.collencoding === undefined
              ? "collencoding"
              : typed.pg_catalog_int4(parameters.collencoding)
          } AND collnamespace = ${
            parameters.collnamespace === undefined
              ? "collnamespace"
              : typed.pg_catalog_oid(parameters.collnamespace)
          }`;

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
      async byOid(parameters: PgCatalog.Tables.PgCollation.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,collname,collnamespace,collowner,collprovider,collisdeterministic,collencoding,collcollate,collctype,colliculocale,collicurules,collversion FROM pg_catalog.pg_collation WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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

      async deleteByCollnameCollencodingCollnamespace(
        parameters: PgCatalog.Tables.PgCollation.ByCollnameCollencodingCollnamespace,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_collation WHERE collname = ${
            parameters.collname === undefined
              ? "collname"
              : typed.pg_catalog_cstring(parameters.collname)
          } AND collencoding = ${
            parameters.collencoding === undefined
              ? "collencoding"
              : typed.pg_catalog_int4(parameters.collencoding)
          } AND collnamespace = ${
            parameters.collnamespace === undefined
              ? "collnamespace"
              : typed.pg_catalog_oid(parameters.collnamespace)
          } RETURNING oid,collname,collnamespace,collowner,collprovider,collisdeterministic,collencoding,collcollate,collctype,colliculocale,collicurules,collversion
      `;

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
      async deleteByOid(parameters: PgCatalog.Tables.PgCollation.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_collation WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,collname,collnamespace,collowner,collprovider,collisdeterministic,collencoding,collcollate,collctype,colliculocale,collicurules,collversion
      `;

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

      async byOid(parameters: PgCatalog.Tables.PgParameterAcl.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,parname,paracl FROM pg_catalog.pg_parameter_acl WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          parname: undefinedIsNull(record.parname),
          paracl: undefinedIsNull(record.paracl),
        }));
        return results[0];
      }
      async byParname(parameters: PgCatalog.Tables.PgParameterAcl.ByParname) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,parname,paracl FROM pg_catalog.pg_parameter_acl WHERE parname = ${
            parameters.parname === undefined
              ? "parname"
              : typed.pg_catalog_text(parameters.parname)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          parname: undefinedIsNull(record.parname),
          paracl: undefinedIsNull(record.paracl),
        }));
        return results[0];
      }

      async deleteByOid(parameters: PgCatalog.Tables.PgParameterAcl.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_parameter_acl WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,parname,paracl
      `;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          parname: undefinedIsNull(record.parname),
          paracl: undefinedIsNull(record.paracl),
        }));
        return results[0];
      }
      async deleteByParname(
        parameters: PgCatalog.Tables.PgParameterAcl.ByParname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_parameter_acl WHERE parname = ${
            parameters.parname === undefined
              ? "parname"
              : typed.pg_catalog_text(parameters.parname)
          } RETURNING oid,parname,paracl
      `;

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
        parameters: PgCatalog.Tables.PgPartitionedTable.ByPartrelid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT partrelid,partstrat,partnatts,partdefid,partattrs,partclass,partcollation,partexprs FROM pg_catalog.pg_partitioned_table WHERE partrelid = ${
            parameters.partrelid === undefined
              ? "partrelid"
              : typed.pg_catalog_oid(parameters.partrelid)
          }`;

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

      async deleteByPartrelid(
        parameters: PgCatalog.Tables.PgPartitionedTable.ByPartrelid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_partitioned_table WHERE partrelid = ${
            parameters.partrelid === undefined
              ? "partrelid"
              : typed.pg_catalog_oid(parameters.partrelid)
          } RETURNING partrelid,partstrat,partnatts,partdefid,partattrs,partclass,partcollation,partexprs
      `;

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
        parameters: PgCatalog.Tables.PgRange.ByRngmultitypid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT rngtypid,rngsubtype,rngmultitypid,rngcollation,rngsubopc,rngcanonical,rngsubdiff FROM pg_catalog.pg_range WHERE rngmultitypid = ${
            parameters.rngmultitypid === undefined
              ? "rngmultitypid"
              : typed.pg_catalog_oid(parameters.rngmultitypid)
          }`;

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
      async byRngtypid(parameters: PgCatalog.Tables.PgRange.ByRngtypid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT rngtypid,rngsubtype,rngmultitypid,rngcollation,rngsubopc,rngcanonical,rngsubdiff FROM pg_catalog.pg_range WHERE rngtypid = ${
            parameters.rngtypid === undefined
              ? "rngtypid"
              : typed.pg_catalog_oid(parameters.rngtypid)
          }`;

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

      async deleteByRngmultitypid(
        parameters: PgCatalog.Tables.PgRange.ByRngmultitypid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_range WHERE rngmultitypid = ${
            parameters.rngmultitypid === undefined
              ? "rngmultitypid"
              : typed.pg_catalog_oid(parameters.rngmultitypid)
          } RETURNING rngtypid,rngsubtype,rngmultitypid,rngcollation,rngsubopc,rngcanonical,rngsubdiff
      `;

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
      async deleteByRngtypid(parameters: PgCatalog.Tables.PgRange.ByRngtypid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_range WHERE rngtypid = ${
            parameters.rngtypid === undefined
              ? "rngtypid"
              : typed.pg_catalog_oid(parameters.rngtypid)
          } RETURNING rngtypid,rngsubtype,rngmultitypid,rngcollation,rngsubopc,rngcanonical,rngsubdiff
      `;

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

      async byOid(parameters: PgCatalog.Tables.PgTransform.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,trftype,trflang,trffromsql,trftosql FROM pg_catalog.pg_transform WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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
        parameters: PgCatalog.Tables.PgTransform.ByTrftypeTrflang,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,trftype,trflang,trffromsql,trftosql FROM pg_catalog.pg_transform WHERE trftype = ${
            parameters.trftype === undefined
              ? "trftype"
              : typed.pg_catalog_oid(parameters.trftype)
          } AND trflang = ${
            parameters.trflang === undefined
              ? "trflang"
              : typed.pg_catalog_oid(parameters.trflang)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          trftype: undefinedIsNull(record.trftype),
          trflang: undefinedIsNull(record.trflang),
          trffromsql: undefinedIsNull(record.trffromsql),
          trftosql: undefinedIsNull(record.trftosql),
        }));
        return results[0];
      }

      async deleteByOid(parameters: PgCatalog.Tables.PgTransform.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_transform WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,trftype,trflang,trffromsql,trftosql
      `;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          trftype: undefinedIsNull(record.trftype),
          trflang: undefinedIsNull(record.trflang),
          trffromsql: undefinedIsNull(record.trffromsql),
          trftosql: undefinedIsNull(record.trftosql),
        }));
        return results[0];
      }
      async deleteByTrftypeTrflang(
        parameters: PgCatalog.Tables.PgTransform.ByTrftypeTrflang,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_transform WHERE trftype = ${
            parameters.trftype === undefined
              ? "trftype"
              : typed.pg_catalog_oid(parameters.trftype)
          } AND trflang = ${
            parameters.trflang === undefined
              ? "trflang"
              : typed.pg_catalog_oid(parameters.trflang)
          } RETURNING oid,trftype,trflang,trffromsql,trftosql
      `;

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

      async bySeqrelid(parameters: PgCatalog.Tables.PgSequence.BySeqrelid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT seqrelid,seqtypid,seqstart,seqincrement,seqmax,seqmin,seqcache,seqcycle FROM pg_catalog.pg_sequence WHERE seqrelid = ${
            parameters.seqrelid === undefined
              ? "seqrelid"
              : typed.pg_catalog_oid(parameters.seqrelid)
          }`;

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

      async deleteBySeqrelid(
        parameters: PgCatalog.Tables.PgSequence.BySeqrelid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_sequence WHERE seqrelid = ${
            parameters.seqrelid === undefined
              ? "seqrelid"
              : typed.pg_catalog_oid(parameters.seqrelid)
          } RETURNING seqrelid,seqtypid,seqstart,seqincrement,seqmax,seqmin,seqcache,seqcycle
      `;

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

      async byOid(parameters: PgCatalog.Tables.PgPublication.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,pubname,pubowner,puballtables,pubinsert,pubupdate,pubdelete,pubtruncate,pubviaroot FROM pg_catalog.pg_publication WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

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
      async byPubname(parameters: PgCatalog.Tables.PgPublication.ByPubname) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,pubname,pubowner,puballtables,pubinsert,pubupdate,pubdelete,pubtruncate,pubviaroot FROM pg_catalog.pg_publication WHERE pubname = ${
            parameters.pubname === undefined
              ? "pubname"
              : typed.pg_catalog_cstring(parameters.pubname)
          }`;

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

      async deleteByOid(parameters: PgCatalog.Tables.PgPublication.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_publication WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,pubname,pubowner,puballtables,pubinsert,pubupdate,pubdelete,pubtruncate,pubviaroot
      `;

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
      async deleteByPubname(
        parameters: PgCatalog.Tables.PgPublication.ByPubname,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_publication WHERE pubname = ${
            parameters.pubname === undefined
              ? "pubname"
              : typed.pg_catalog_cstring(parameters.pubname)
          } RETURNING oid,pubname,pubowner,puballtables,pubinsert,pubupdate,pubdelete,pubtruncate,pubviaroot
      `;

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

      async byOid(parameters: PgCatalog.Tables.PgPublicationNamespace.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,pnpubid,pnnspid FROM pg_catalog.pg_publication_namespace WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          pnpubid: undefinedIsNull(record.pnpubid),
          pnnspid: undefinedIsNull(record.pnnspid),
        }));
        return results[0];
      }
      async byPnnspidPnpubid(
        parameters: PgCatalog.Tables.PgPublicationNamespace.ByPnnspidPnpubid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,pnpubid,pnnspid FROM pg_catalog.pg_publication_namespace WHERE pnnspid = ${
            parameters.pnnspid === undefined
              ? "pnnspid"
              : typed.pg_catalog_oid(parameters.pnnspid)
          } AND pnpubid = ${
            parameters.pnpubid === undefined
              ? "pnpubid"
              : typed.pg_catalog_oid(parameters.pnpubid)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          pnpubid: undefinedIsNull(record.pnpubid),
          pnnspid: undefinedIsNull(record.pnnspid),
        }));
        return results[0];
      }

      async deleteByOid(
        parameters: PgCatalog.Tables.PgPublicationNamespace.ByOid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_publication_namespace WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,pnpubid,pnnspid
      `;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          pnpubid: undefinedIsNull(record.pnpubid),
          pnnspid: undefinedIsNull(record.pnnspid),
        }));
        return results[0];
      }
      async deleteByPnnspidPnpubid(
        parameters: PgCatalog.Tables.PgPublicationNamespace.ByPnnspidPnpubid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_publication_namespace WHERE pnnspid = ${
            parameters.pnnspid === undefined
              ? "pnnspid"
              : typed.pg_catalog_oid(parameters.pnnspid)
          } AND pnpubid = ${
            parameters.pnpubid === undefined
              ? "pnpubid"
              : typed.pg_catalog_oid(parameters.pnpubid)
          } RETURNING oid,pnpubid,pnnspid
      `;

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

      async byOid(parameters: PgCatalog.Tables.PgPublicationRel.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,prpubid,prrelid,prqual,prattrs FROM pg_catalog.pg_publication_rel WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          prpubid: undefinedIsNull(record.prpubid),
          prrelid: undefinedIsNull(record.prrelid),
          prqual: undefinedIsNull(record.prqual),
          prattrs: undefinedIsNull(record.prattrs),
        }));
        return results[0];
      }
      async byPrpubid(parameters: PgCatalog.Tables.PgPublicationRel.ByPrpubid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,prpubid,prrelid,prqual,prattrs FROM pg_catalog.pg_publication_rel WHERE prpubid = ${
            parameters.prpubid === undefined
              ? "prpubid"
              : typed.pg_catalog_oid(parameters.prpubid)
          }`;

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
        parameters: PgCatalog.Tables.PgPublicationRel.ByPrrelidPrpubid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,prpubid,prrelid,prqual,prattrs FROM pg_catalog.pg_publication_rel WHERE prrelid = ${
            parameters.prrelid === undefined
              ? "prrelid"
              : typed.pg_catalog_oid(parameters.prrelid)
          } AND prpubid = ${
            parameters.prpubid === undefined
              ? "prpubid"
              : typed.pg_catalog_oid(parameters.prpubid)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          prpubid: undefinedIsNull(record.prpubid),
          prrelid: undefinedIsNull(record.prrelid),
          prqual: undefinedIsNull(record.prqual),
          prattrs: undefinedIsNull(record.prattrs),
        }));
        return results[0];
      }

      async deleteByOid(parameters: PgCatalog.Tables.PgPublicationRel.ByOid) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_publication_rel WHERE oid = ${
            parameters.oid === undefined
              ? "oid"
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,prpubid,prrelid,prqual,prattrs
      `;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          prpubid: undefinedIsNull(record.prpubid),
          prrelid: undefinedIsNull(record.prrelid),
          prqual: undefinedIsNull(record.prqual),
          prattrs: undefinedIsNull(record.prattrs),
        }));
        return results[0];
      }
      async deleteByPrpubid(
        parameters: PgCatalog.Tables.PgPublicationRel.ByPrpubid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_publication_rel WHERE prpubid = ${
            parameters.prpubid === undefined
              ? "prpubid"
              : typed.pg_catalog_oid(parameters.prpubid)
          } RETURNING oid,prpubid,prrelid,prqual,prattrs
      `;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          prpubid: undefinedIsNull(record.prpubid),
          prrelid: undefinedIsNull(record.prrelid),
          prqual: undefinedIsNull(record.prqual),
          prattrs: undefinedIsNull(record.prattrs),
        }));
        return results;
      }
      async deleteByPrrelidPrpubid(
        parameters: PgCatalog.Tables.PgPublicationRel.ByPrrelidPrpubid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_publication_rel WHERE prrelid = ${
            parameters.prrelid === undefined
              ? "prrelid"
              : typed.pg_catalog_oid(parameters.prrelid)
          } AND prpubid = ${
            parameters.prpubid === undefined
              ? "prpubid"
              : typed.pg_catalog_oid(parameters.prpubid)
          } RETURNING oid,prpubid,prrelid,prqual,prattrs
      `;

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
        parameters: PgCatalog.Tables.PgSubscriptionRel.BySrrelidSrsubid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT srsubid,srrelid,srsubstate,srsublsn FROM pg_catalog.pg_subscription_rel WHERE srrelid = ${
            parameters.srrelid === undefined
              ? "srrelid"
              : typed.pg_catalog_oid(parameters.srrelid)
          } AND srsubid = ${
            parameters.srsubid === undefined
              ? "srsubid"
              : typed.pg_catalog_oid(parameters.srsubid)
          }`;

        const results = response.map((record) => ({
          srsubid: undefinedIsNull(record.srsubid),
          srrelid: undefinedIsNull(record.srrelid),
          srsubstate: undefinedIsNull(record.srsubstate),
          srsublsn: undefinedIsNull(record.srsublsn),
        }));
        return results[0];
      }

      async deleteBySrrelidSrsubid(
        parameters: PgCatalog.Tables.PgSubscriptionRel.BySrrelidSrsubid,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_subscription_rel WHERE srrelid = ${
            parameters.srrelid === undefined
              ? "srrelid"
              : typed.pg_catalog_oid(parameters.srrelid)
          } AND srsubid = ${
            parameters.srsubid === undefined
              ? "srsubid"
              : typed.pg_catalog_oid(parameters.srsubid)
          } RETURNING srsubid,srrelid,srsubstate,srsublsn
      `;

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
        parameters: PgCatalog.Tables.PgLargeobject.ByLoidPageno,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT loid,pageno,data FROM pg_catalog.pg_largeobject WHERE loid = ${
            parameters.loid === undefined
              ? "loid"
              : typed.pg_catalog_oid(parameters.loid)
          } AND pageno = ${
            parameters.pageno === undefined
              ? "pageno"
              : typed.pg_catalog_int4(parameters.pageno)
          }`;

        const results = response.map((record) => ({
          loid: undefinedIsNull(record.loid),
          pageno: undefinedIsNull(record.pageno),
          data: undefinedIsNull(record.data),
        }));
        return results[0];
      }

      async deleteByLoidPageno(
        parameters: PgCatalog.Tables.PgLargeobject.ByLoidPageno,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_largeobject WHERE loid = ${
            parameters.loid === undefined
              ? "loid"
              : typed.pg_catalog_oid(parameters.loid)
          } AND pageno = ${
            parameters.pageno === undefined
              ? "pageno"
              : typed.pg_catalog_int4(parameters.pageno)
          } RETURNING loid,pageno,data
      `;

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

    async Echo(parameters: Api.EchoArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
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
        .echo as unknown as Api.EchoSingleResultsetRecord;
      return responseBody;
    }
    async EchoSet(parameters: Api.EchoSetArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
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
      ) as unknown as Api.EchoSetResultset;
      return responseBody;
    }
    async EchoTable(parameters: Api.EchoTableArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
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
      ) as unknown as Api.EchoTableResultset;
      return responseBody;
    }

    parseEchoTableResult = (
      context: Context,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      result: any,
    ): Api.EchoTableSingleResultsetRecord => {
      return context.procTypes.api_echo_table.parseFromPostgresIfRecord(
        context,
        result,
      ) as unknown as Api.EchoTableSingleResultsetRecord;
    };

    async EchoType(parameters: Api.EchoTypeArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
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
        .echo_type as unknown as Api.EchoTypeSingleResultsetRecord;
      return responseBody;
    }
    async EchoTypeArray(parameters: Api.EchoTypeArrayArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
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
        .echo_type_array as unknown as Api.EchoTypeArraySingleResultsetRecord;
      return responseBody;
    }
    async EchoTypeNested(parameters: Api.EchoTypeNestedArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
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
        .echo_type_nested as unknown as Api.EchoTypeNestedSingleResultsetRecord;
      return responseBody;
    }
    async EchoTypeSet(parameters: Api.EchoTypeSetArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
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
      ) as unknown as Api.EchoTypeSetResultset;
      return responseBody;
    }
  })(this);
}

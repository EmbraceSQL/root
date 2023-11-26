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

  export interface PgAggregateNotPrimaryKey {
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

  export function includesPgAggregatePrimaryKey(value: Partial<PgAggregate>) {
    return value.aggfnoid !== undefined;
  }

  export interface PgAm {
    oid: Oid;
    amname: Name;
    amhandler: Regproc;
    amtype: Char;
  }

  export interface PgAmNotPrimaryKey {
    amname: Name;
    amhandler: Regproc;
    amtype: Char;
  }

  export function includesPgAmPrimaryKey(value: Partial<PgAm>) {
    return value.oid !== undefined;
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

  export interface PgAmopNotPrimaryKey {
    amopfamily: Oid;
    amoplefttype: Oid;
    amoprighttype: Oid;
    amopstrategy: Int2;
    amoppurpose: Char;
    amopopr: Oid;
    amopmethod: Oid;
    amopsortfamily: Oid;
  }

  export function includesPgAmopPrimaryKey(value: Partial<PgAmop>) {
    return value.oid !== undefined;
  }

  export interface PgAmproc {
    oid: Oid;
    amprocfamily: Oid;
    amproclefttype: Oid;
    amprocrighttype: Oid;
    amprocnum: Int2;
    amproc: Regproc;
  }

  export interface PgAmprocNotPrimaryKey {
    amprocfamily: Oid;
    amproclefttype: Oid;
    amprocrighttype: Oid;
    amprocnum: Int2;
    amproc: Regproc;
  }

  export function includesPgAmprocPrimaryKey(value: Partial<PgAmproc>) {
    return value.oid !== undefined;
  }

  export interface PgAttrdef {
    oid: Oid;
    adrelid: Oid;
    adnum: Int2;
    adbin: PgNodeTree;
  }

  export interface PgAttrdefNotPrimaryKey {
    adrelid: Oid;
    adnum: Int2;
    adbin: PgNodeTree;
  }

  export function includesPgAttrdefPrimaryKey(value: Partial<PgAttrdef>) {
    return value.oid !== undefined;
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

  export interface PgAttributeNotPrimaryKey {
    attname: Name;
    atttypid: Oid;
    attlen: Int2;
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

  export function includesPgAttributePrimaryKey(value: Partial<PgAttribute>) {
    return value.attrelid !== undefined && value.attnum !== undefined;
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

  export interface PgAuthMembersNotPrimaryKey {
    roleid: Oid;
    member: Oid;
    grantor: Oid;
    adminOption: Bool;
    inheritOption: Bool;
    setOption: Bool;
  }

  export function includesPgAuthMembersPrimaryKey(
    value: Partial<PgAuthMembers>,
  ) {
    return value.oid !== undefined;
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

  export interface PgAuthidNotPrimaryKey {
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

  export function includesPgAuthidPrimaryKey(value: Partial<PgAuthid>) {
    return value.oid !== undefined;
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

  export interface PgCastNotPrimaryKey {
    castsource: Oid;
    casttarget: Oid;
    castfunc: Oid;
    castcontext: Char;
    castmethod: Char;
  }

  export function includesPgCastPrimaryKey(value: Partial<PgCast>) {
    return value.oid !== undefined;
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

  export interface PgClassNotPrimaryKey {
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

  export function includesPgClassPrimaryKey(value: Partial<PgClass>) {
    return value.oid !== undefined;
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

  export interface PgCollationNotPrimaryKey {
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

  export function includesPgCollationPrimaryKey(value: Partial<PgCollation>) {
    return value.oid !== undefined;
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

  export interface PgConstraintNotPrimaryKey {
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

  export function includesPgConstraintPrimaryKey(value: Partial<PgConstraint>) {
    return value.oid !== undefined;
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

  export interface PgConversionNotPrimaryKey {
    conname: Name;
    connamespace: Oid;
    conowner: Oid;
    conforencoding: Int4;
    contoencoding: Int4;
    conproc: Regproc;
    condefault: Bool;
  }

  export function includesPgConversionPrimaryKey(value: Partial<PgConversion>) {
    return value.oid !== undefined;
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

  export interface PgDatabaseNotPrimaryKey {
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

  export function includesPgDatabasePrimaryKey(value: Partial<PgDatabase>) {
    return value.oid !== undefined;
  }

  export interface PgDbRoleSetting {
    setdatabase: Oid;
    setrole: Oid;
    setconfig?: Nullable<TextArray>;
  }

  export interface PgDbRoleSettingNotPrimaryKey {
    setconfig?: Nullable<TextArray>;
  }

  export function includesPgDbRoleSettingPrimaryKey(
    value: Partial<PgDbRoleSetting>,
  ) {
    return value.setdatabase !== undefined && value.setrole !== undefined;
  }

  export type PgDdlCommand = void;

  export interface PgDefaultAcl {
    oid: Oid;
    defaclrole: Oid;
    defaclnamespace: Oid;
    defaclobjtype: Char;
    defaclacl: AclitemArray;
  }

  export interface PgDefaultAclNotPrimaryKey {
    defaclrole: Oid;
    defaclnamespace: Oid;
    defaclobjtype: Char;
    defaclacl: AclitemArray;
  }

  export function includesPgDefaultAclPrimaryKey(value: Partial<PgDefaultAcl>) {
    return value.oid !== undefined;
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

  export interface PgDescriptionNotPrimaryKey {
    description: Text;
  }

  export function includesPgDescriptionPrimaryKey(
    value: Partial<PgDescription>,
  ) {
    return (
      value.objoid !== undefined &&
      value.classoid !== undefined &&
      value.objsubid !== undefined
    );
  }

  export interface PgEnum {
    oid: Oid;
    enumtypid: Oid;
    enumsortorder: Float4;
    enumlabel: Name;
  }

  export interface PgEnumNotPrimaryKey {
    enumtypid: Oid;
    enumsortorder: Float4;
    enumlabel: Name;
  }

  export function includesPgEnumPrimaryKey(value: Partial<PgEnum>) {
    return value.oid !== undefined;
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

  export interface PgEventTriggerNotPrimaryKey {
    evtname: Name;
    evtevent: Name;
    evtowner: Oid;
    evtfoid: Oid;
    evtenabled: Char;
    evttags?: Nullable<TextArray>;
  }

  export function includesPgEventTriggerPrimaryKey(
    value: Partial<PgEventTrigger>,
  ) {
    return value.oid !== undefined;
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

  export interface PgExtensionNotPrimaryKey {
    extname: Name;
    extowner: Oid;
    extnamespace: Oid;
    extrelocatable: Bool;
    extversion: Text;
    extconfig?: Nullable<OidArray>;
    extcondition?: Nullable<TextArray>;
  }

  export function includesPgExtensionPrimaryKey(value: Partial<PgExtension>) {
    return value.oid !== undefined;
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

  export interface PgForeignDataWrapperNotPrimaryKey {
    fdwname: Name;
    fdwowner: Oid;
    fdwhandler: Oid;
    fdwvalidator: Oid;
    fdwacl?: Nullable<AclitemArray>;
    fdwoptions?: Nullable<TextArray>;
  }

  export function includesPgForeignDataWrapperPrimaryKey(
    value: Partial<PgForeignDataWrapper>,
  ) {
    return value.oid !== undefined;
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

  export interface PgForeignServerNotPrimaryKey {
    srvname: Name;
    srvowner: Oid;
    srvfdw: Oid;
    srvtype?: Nullable<Text>;
    srvversion?: Nullable<Text>;
    srvacl?: Nullable<AclitemArray>;
    srvoptions?: Nullable<TextArray>;
  }

  export function includesPgForeignServerPrimaryKey(
    value: Partial<PgForeignServer>,
  ) {
    return value.oid !== undefined;
  }

  export interface PgForeignTable {
    ftrelid: Oid;
    ftserver: Oid;
    ftoptions?: Nullable<TextArray>;
  }

  export interface PgForeignTableNotPrimaryKey {
    ftserver: Oid;
    ftoptions?: Nullable<TextArray>;
  }

  export function includesPgForeignTablePrimaryKey(
    value: Partial<PgForeignTable>,
  ) {
    return value.ftrelid !== undefined;
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

  export interface PgIndexNotPrimaryKey {
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

  export function includesPgIndexPrimaryKey(value: Partial<PgIndex>) {
    return value.indexrelid !== undefined;
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

  export interface PgInheritsNotPrimaryKey {
    inhparent: Oid;
    inhdetachpending: Bool;
  }

  export function includesPgInheritsPrimaryKey(value: Partial<PgInherits>) {
    return value.inhrelid !== undefined && value.inhseqno !== undefined;
  }

  export interface PgInitPrivs {
    objoid: Oid;
    classoid: Oid;
    objsubid: Int4;
    privtype: Char;
    initprivs: AclitemArray;
  }

  export interface PgInitPrivsNotPrimaryKey {
    privtype: Char;
    initprivs: AclitemArray;
  }

  export function includesPgInitPrivsPrimaryKey(value: Partial<PgInitPrivs>) {
    return (
      value.objoid !== undefined &&
      value.classoid !== undefined &&
      value.objsubid !== undefined
    );
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

  export interface PgLanguageNotPrimaryKey {
    lanname: Name;
    lanowner: Oid;
    lanispl: Bool;
    lanpltrusted: Bool;
    lanplcallfoid: Oid;
    laninline: Oid;
    lanvalidator: Oid;
    lanacl?: Nullable<AclitemArray>;
  }

  export function includesPgLanguagePrimaryKey(value: Partial<PgLanguage>) {
    return value.oid !== undefined;
  }

  export interface PgLargeobject {
    loid: Oid;
    pageno: Int4;
    data: Bytea;
  }

  export interface PgLargeobjectNotPrimaryKey {
    data: Bytea;
  }

  export function includesPgLargeobjectPrimaryKey(
    value: Partial<PgLargeobject>,
  ) {
    return value.loid !== undefined && value.pageno !== undefined;
  }

  export interface PgLargeobjectMetadata {
    oid: Oid;
    lomowner: Oid;
    lomacl?: Nullable<AclitemArray>;
  }

  export interface PgLargeobjectMetadataNotPrimaryKey {
    lomowner: Oid;
    lomacl?: Nullable<AclitemArray>;
  }

  export function includesPgLargeobjectMetadataPrimaryKey(
    value: Partial<PgLargeobjectMetadata>,
  ) {
    return value.oid !== undefined;
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

  export interface PgNamespaceNotPrimaryKey {
    nspname: Name;
    nspowner: Oid;
    nspacl?: Nullable<AclitemArray>;
  }

  export function includesPgNamespacePrimaryKey(value: Partial<PgNamespace>) {
    return value.oid !== undefined;
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

  export interface PgOpclassNotPrimaryKey {
    opcmethod: Oid;
    opcname: Name;
    opcnamespace: Oid;
    opcowner: Oid;
    opcfamily: Oid;
    opcintype: Oid;
    opcdefault: Bool;
    opckeytype: Oid;
  }

  export function includesPgOpclassPrimaryKey(value: Partial<PgOpclass>) {
    return value.oid !== undefined;
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

  export interface PgOperatorNotPrimaryKey {
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

  export function includesPgOperatorPrimaryKey(value: Partial<PgOperator>) {
    return value.oid !== undefined;
  }

  export interface PgOpfamily {
    oid: Oid;
    opfmethod: Oid;
    opfname: Name;
    opfnamespace: Oid;
    opfowner: Oid;
  }

  export interface PgOpfamilyNotPrimaryKey {
    opfmethod: Oid;
    opfname: Name;
    opfnamespace: Oid;
    opfowner: Oid;
  }

  export function includesPgOpfamilyPrimaryKey(value: Partial<PgOpfamily>) {
    return value.oid !== undefined;
  }

  export interface PgParameterAcl {
    oid: Oid;
    parname: Text;
    paracl?: Nullable<AclitemArray>;
  }

  export interface PgParameterAclNotPrimaryKey {
    parname: Text;
    paracl?: Nullable<AclitemArray>;
  }

  export function includesPgParameterAclPrimaryKey(
    value: Partial<PgParameterAcl>,
  ) {
    return value.oid !== undefined;
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

  export interface PgPartitionedTableNotPrimaryKey {
    partstrat: Char;
    partnatts: Int2;
    partdefid: Oid;
    partattrs: Int2vector;
    partclass: Oidvector;
    partcollation: Oidvector;
    partexprs?: Nullable<PgNodeTree>;
  }

  export function includesPgPartitionedTablePrimaryKey(
    value: Partial<PgPartitionedTable>,
  ) {
    return value.partrelid !== undefined;
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

  export interface PgPolicyNotPrimaryKey {
    polname: Name;
    polrelid: Oid;
    polcmd: Char;
    polpermissive: Bool;
    polroles: OidArray;
    polqual?: Nullable<PgNodeTree>;
    polwithcheck?: Nullable<PgNodeTree>;
  }

  export function includesPgPolicyPrimaryKey(value: Partial<PgPolicy>) {
    return value.oid !== undefined;
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

  export interface PgProcNotPrimaryKey {
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

  export function includesPgProcPrimaryKey(value: Partial<PgProc>) {
    return value.oid !== undefined;
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

  export interface PgPublicationNotPrimaryKey {
    pubname: Name;
    pubowner: Oid;
    puballtables: Bool;
    pubinsert: Bool;
    pubupdate: Bool;
    pubdelete: Bool;
    pubtruncate: Bool;
    pubviaroot: Bool;
  }

  export function includesPgPublicationPrimaryKey(
    value: Partial<PgPublication>,
  ) {
    return value.oid !== undefined;
  }

  export interface PgPublicationNamespace {
    oid: Oid;
    pnpubid: Oid;
    pnnspid: Oid;
  }

  export interface PgPublicationNamespaceNotPrimaryKey {
    pnpubid: Oid;
    pnnspid: Oid;
  }

  export function includesPgPublicationNamespacePrimaryKey(
    value: Partial<PgPublicationNamespace>,
  ) {
    return value.oid !== undefined;
  }

  export interface PgPublicationRel {
    oid: Oid;
    prpubid: Oid;
    prrelid: Oid;
    prqual?: Nullable<PgNodeTree>;
    prattrs?: Nullable<Int2vector>;
  }

  export interface PgPublicationRelNotPrimaryKey {
    prpubid: Oid;
    prrelid: Oid;
    prqual?: Nullable<PgNodeTree>;
    prattrs?: Nullable<Int2vector>;
  }

  export function includesPgPublicationRelPrimaryKey(
    value: Partial<PgPublicationRel>,
  ) {
    return value.oid !== undefined;
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

  export interface PgRangeNotPrimaryKey {
    rngsubtype: Oid;
    rngmultitypid: Oid;
    rngcollation: Oid;
    rngsubopc: Oid;
    rngcanonical: Regproc;
    rngsubdiff: Regproc;
  }

  export function includesPgRangePrimaryKey(value: Partial<PgRange>) {
    return value.rngtypid !== undefined;
  }

  export interface PgReplicationOrigin {
    roident: Oid;
    roname: Text;
  }

  export interface PgReplicationOriginNotPrimaryKey {
    roname: Text;
  }

  export function includesPgReplicationOriginPrimaryKey(
    value: Partial<PgReplicationOrigin>,
  ) {
    return value.roident !== undefined;
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

  export interface PgRewriteNotPrimaryKey {
    rulename: Name;
    evClass: Oid;
    evType: Char;
    evEnabled: Char;
    isInstead: Bool;
    evQual: PgNodeTree;
    evAction: PgNodeTree;
  }

  export function includesPgRewritePrimaryKey(value: Partial<PgRewrite>) {
    return value.oid !== undefined;
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

  export interface PgSeclabelNotPrimaryKey {
    label: Text;
  }

  export function includesPgSeclabelPrimaryKey(value: Partial<PgSeclabel>) {
    return (
      value.objoid !== undefined &&
      value.classoid !== undefined &&
      value.objsubid !== undefined &&
      value.provider !== undefined
    );
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

  export interface PgSequenceNotPrimaryKey {
    seqtypid: Oid;
    seqstart: Int8;
    seqincrement: Int8;
    seqmax: Int8;
    seqmin: Int8;
    seqcache: Int8;
    seqcycle: Bool;
  }

  export function includesPgSequencePrimaryKey(value: Partial<PgSequence>) {
    return value.seqrelid !== undefined;
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

  export interface PgShdescriptionNotPrimaryKey {
    description: Text;
  }

  export function includesPgShdescriptionPrimaryKey(
    value: Partial<PgShdescription>,
  ) {
    return value.objoid !== undefined && value.classoid !== undefined;
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

  export interface PgShseclabelNotPrimaryKey {
    label: Text;
  }

  export function includesPgShseclabelPrimaryKey(value: Partial<PgShseclabel>) {
    return (
      value.objoid !== undefined &&
      value.classoid !== undefined &&
      value.provider !== undefined
    );
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

  export interface PgStatisticNotPrimaryKey {
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

  export function includesPgStatisticPrimaryKey(value: Partial<PgStatistic>) {
    return (
      value.starelid !== undefined &&
      value.staattnum !== undefined &&
      value.stainherit !== undefined
    );
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

  export interface PgStatisticExtNotPrimaryKey {
    stxrelid: Oid;
    stxname: Name;
    stxnamespace: Oid;
    stxowner: Oid;
    stxstattarget: Int4;
    stxkeys: Int2vector;
    stxkind: CharArray;
    stxexprs?: Nullable<PgNodeTree>;
  }

  export function includesPgStatisticExtPrimaryKey(
    value: Partial<PgStatisticExt>,
  ) {
    return value.oid !== undefined;
  }

  export interface PgStatisticExtData {
    stxoid: Oid;
    stxdinherit: Bool;
    stxdndistinct?: Nullable<PgNdistinct>;
    stxddependencies?: Nullable<PgDependencies>;
    stxdmcv?: Nullable<PgMcvList>;
    stxdexpr?: Nullable<PgStatisticArray>;
  }

  export interface PgStatisticExtDataNotPrimaryKey {
    stxdndistinct?: Nullable<PgNdistinct>;
    stxddependencies?: Nullable<PgDependencies>;
    stxdmcv?: Nullable<PgMcvList>;
    stxdexpr?: Nullable<PgStatisticArray>;
  }

  export function includesPgStatisticExtDataPrimaryKey(
    value: Partial<PgStatisticExtData>,
  ) {
    return value.stxoid !== undefined && value.stxdinherit !== undefined;
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

  export interface PgSubscriptionNotPrimaryKey {
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

  export function includesPgSubscriptionPrimaryKey(
    value: Partial<PgSubscription>,
  ) {
    return value.oid !== undefined;
  }

  export interface PgSubscriptionRel {
    srsubid: Oid;
    srrelid: Oid;
    srsubstate: Char;
    srsublsn?: Nullable<PgLsn>;
  }

  export interface PgSubscriptionRelNotPrimaryKey {
    srsubstate: Char;
    srsublsn?: Nullable<PgLsn>;
  }

  export function includesPgSubscriptionRelPrimaryKey(
    value: Partial<PgSubscriptionRel>,
  ) {
    return value.srrelid !== undefined && value.srsubid !== undefined;
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

  export interface PgTablespaceNotPrimaryKey {
    spcname: Name;
    spcowner: Oid;
    spcacl?: Nullable<AclitemArray>;
    spcoptions?: Nullable<TextArray>;
  }

  export function includesPgTablespacePrimaryKey(value: Partial<PgTablespace>) {
    return value.oid !== undefined;
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

  export interface PgTransformNotPrimaryKey {
    trftype: Oid;
    trflang: Oid;
    trffromsql: Regproc;
    trftosql: Regproc;
  }

  export function includesPgTransformPrimaryKey(value: Partial<PgTransform>) {
    return value.oid !== undefined;
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

  export interface PgTriggerNotPrimaryKey {
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

  export function includesPgTriggerPrimaryKey(value: Partial<PgTrigger>) {
    return value.oid !== undefined;
  }

  export interface PgTsConfig {
    oid: Oid;
    cfgname: Name;
    cfgnamespace: Oid;
    cfgowner: Oid;
    cfgparser: Oid;
  }

  export interface PgTsConfigNotPrimaryKey {
    cfgname: Name;
    cfgnamespace: Oid;
    cfgowner: Oid;
    cfgparser: Oid;
  }

  export function includesPgTsConfigPrimaryKey(value: Partial<PgTsConfig>) {
    return value.oid !== undefined;
  }

  export interface PgTsConfigMap {
    mapcfg: Oid;
    maptokentype: Int4;
    mapseqno: Int4;
    mapdict: Oid;
  }

  export interface PgTsConfigMapNotPrimaryKey {
    mapdict: Oid;
  }

  export function includesPgTsConfigMapPrimaryKey(
    value: Partial<PgTsConfigMap>,
  ) {
    return (
      value.mapcfg !== undefined &&
      value.maptokentype !== undefined &&
      value.mapseqno !== undefined
    );
  }

  export interface PgTsDict {
    oid: Oid;
    dictname: Name;
    dictnamespace: Oid;
    dictowner: Oid;
    dicttemplate: Oid;
    dictinitoption?: Nullable<Text>;
  }

  export interface PgTsDictNotPrimaryKey {
    dictname: Name;
    dictnamespace: Oid;
    dictowner: Oid;
    dicttemplate: Oid;
    dictinitoption?: Nullable<Text>;
  }

  export function includesPgTsDictPrimaryKey(value: Partial<PgTsDict>) {
    return value.oid !== undefined;
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

  export interface PgTsParserNotPrimaryKey {
    prsname: Name;
    prsnamespace: Oid;
    prsstart: Regproc;
    prstoken: Regproc;
    prsend: Regproc;
    prsheadline: Regproc;
    prslextype: Regproc;
  }

  export function includesPgTsParserPrimaryKey(value: Partial<PgTsParser>) {
    return value.oid !== undefined;
  }

  export interface PgTsTemplate {
    oid: Oid;
    tmplname: Name;
    tmplnamespace: Oid;
    tmplinit: Regproc;
    tmpllexize: Regproc;
  }

  export interface PgTsTemplateNotPrimaryKey {
    tmplname: Name;
    tmplnamespace: Oid;
    tmplinit: Regproc;
    tmpllexize: Regproc;
  }

  export function includesPgTsTemplatePrimaryKey(value: Partial<PgTsTemplate>) {
    return value.oid !== undefined;
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

  export interface PgTypeNotPrimaryKey {
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

  export function includesPgTypePrimaryKey(value: Partial<PgType>) {
    return value.oid !== undefined;
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

  export interface PgUserMappingNotPrimaryKey {
    umuser: Oid;
    umserver: Oid;
    umoptions?: Nullable<TextArray>;
  }

  export function includesPgUserMappingPrimaryKey(
    value: Partial<PgUserMapping>,
  ) {
    return value.oid !== undefined;
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
    if (this.context.sql.begin) {
      // root transaction
      return await this.context.sql.begin(
        async (sql) => await body(new Database({ ...this.context, sql })),
      );
    } else {
      // nested transaction
      const nested = this.context.sql as postgres.TransactionSql;
      return await nested.savepoint(
        async (sql) => await body(new Database({ ...this.context, sql })),
      );
    }
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
      ): Promise<PgCatalog.PgStatistic> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT starelid,staattnum,stainherit,stanullfrac,stawidth,stadistinct,stakind1,stakind2,stakind3,stakind4,stakind5,staop1,staop2,staop3,staop4,staop5,stacoll1,stacoll2,stacoll3,stacoll4,stacoll5,stanumbers1,stanumbers2,stanumbers3,stanumbers4,stanumbers5,stavalues1,stavalues2,stavalues3,stavalues4,stavalues5 FROM pg_catalog.pg_statistic WHERE starelid = ${
            parameters.starelid === undefined
              ? sql("starelid")
              : typed.pg_catalog_oid(parameters.starelid)
          } AND staattnum = ${
            parameters.staattnum === undefined
              ? sql("staattnum")
              : typed.pg_catalog_int2(parameters.staattnum)
          } AND stainherit = ${
            parameters.stainherit === undefined
              ? sql("stainherit")
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
      ): Promise<PgCatalog.PgStatistic> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_statistic WHERE starelid = ${
            parameters.starelid === undefined
              ? sql("starelid")
              : typed.pg_catalog_oid(parameters.starelid)
          } AND staattnum = ${
            parameters.staattnum === undefined
              ? sql("staattnum")
              : typed.pg_catalog_int2(parameters.staattnum)
          } AND stainherit = ${
            parameters.stainherit === undefined
              ? sql("stainherit")
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

      async updateByStarelidStaattnumStainherit(
        parameters: PgCatalog.Tables.PgStatistic.ByStarelidStaattnumStainherit,
        values: Partial<PgCatalog.PgStatistic>,
      ): Promise<PgCatalog.PgStatistic> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_statistic SET starelid = ${
            values.starelid === undefined
              ? sql("starelid")
              : typed.pg_catalog_oid(values.starelid)
          } , staattnum = ${
            values.staattnum === undefined
              ? sql("staattnum")
              : typed.pg_catalog_int2(values.staattnum)
          } , stainherit = ${
            values.stainherit === undefined
              ? sql("stainherit")
              : typed.pg_catalog_bool(values.stainherit)
          } , stanullfrac = ${
            values.stanullfrac === undefined
              ? sql("stanullfrac")
              : typed.pg_catalog_float4(values.stanullfrac)
          } , stawidth = ${
            values.stawidth === undefined
              ? sql("stawidth")
              : typed.pg_catalog_int4(values.stawidth)
          } , stadistinct = ${
            values.stadistinct === undefined
              ? sql("stadistinct")
              : typed.pg_catalog_float4(values.stadistinct)
          } , stakind1 = ${
            values.stakind1 === undefined
              ? sql("stakind1")
              : typed.pg_catalog_int2(values.stakind1)
          } , stakind2 = ${
            values.stakind2 === undefined
              ? sql("stakind2")
              : typed.pg_catalog_int2(values.stakind2)
          } , stakind3 = ${
            values.stakind3 === undefined
              ? sql("stakind3")
              : typed.pg_catalog_int2(values.stakind3)
          } , stakind4 = ${
            values.stakind4 === undefined
              ? sql("stakind4")
              : typed.pg_catalog_int2(values.stakind4)
          } , stakind5 = ${
            values.stakind5 === undefined
              ? sql("stakind5")
              : typed.pg_catalog_int2(values.stakind5)
          } , staop1 = ${
            values.staop1 === undefined
              ? sql("staop1")
              : typed.pg_catalog_oid(values.staop1)
          } , staop2 = ${
            values.staop2 === undefined
              ? sql("staop2")
              : typed.pg_catalog_oid(values.staop2)
          } , staop3 = ${
            values.staop3 === undefined
              ? sql("staop3")
              : typed.pg_catalog_oid(values.staop3)
          } , staop4 = ${
            values.staop4 === undefined
              ? sql("staop4")
              : typed.pg_catalog_oid(values.staop4)
          } , staop5 = ${
            values.staop5 === undefined
              ? sql("staop5")
              : typed.pg_catalog_oid(values.staop5)
          } , stacoll1 = ${
            values.stacoll1 === undefined
              ? sql("stacoll1")
              : typed.pg_catalog_oid(values.stacoll1)
          } , stacoll2 = ${
            values.stacoll2 === undefined
              ? sql("stacoll2")
              : typed.pg_catalog_oid(values.stacoll2)
          } , stacoll3 = ${
            values.stacoll3 === undefined
              ? sql("stacoll3")
              : typed.pg_catalog_oid(values.stacoll3)
          } , stacoll4 = ${
            values.stacoll4 === undefined
              ? sql("stacoll4")
              : typed.pg_catalog_oid(values.stacoll4)
          } , stacoll5 = ${
            values.stacoll5 === undefined
              ? sql("stacoll5")
              : typed.pg_catalog_oid(values.stacoll5)
          } , stanumbers1 = ${
            values.stanumbers1 === undefined
              ? sql("stanumbers1")
              : typed.pg_catalog__float4(values.stanumbers1)
          } , stanumbers2 = ${
            values.stanumbers2 === undefined
              ? sql("stanumbers2")
              : typed.pg_catalog__float4(values.stanumbers2)
          } , stanumbers3 = ${
            values.stanumbers3 === undefined
              ? sql("stanumbers3")
              : typed.pg_catalog__float4(values.stanumbers3)
          } , stanumbers4 = ${
            values.stanumbers4 === undefined
              ? sql("stanumbers4")
              : typed.pg_catalog__float4(values.stanumbers4)
          } , stanumbers5 = ${
            values.stanumbers5 === undefined
              ? sql("stanumbers5")
              : typed.pg_catalog__float4(values.stanumbers5)
          } , stavalues1 = ${
            values.stavalues1 === undefined
              ? sql("stavalues1")
              : typed.pg_catalog_anyarray(values.stavalues1)
          } , stavalues2 = ${
            values.stavalues2 === undefined
              ? sql("stavalues2")
              : typed.pg_catalog_anyarray(values.stavalues2)
          } , stavalues3 = ${
            values.stavalues3 === undefined
              ? sql("stavalues3")
              : typed.pg_catalog_anyarray(values.stavalues3)
          } , stavalues4 = ${
            values.stavalues4 === undefined
              ? sql("stavalues4")
              : typed.pg_catalog_anyarray(values.stavalues4)
          } , stavalues5 = ${
            values.stavalues5 === undefined
              ? sql("stavalues5")
              : typed.pg_catalog_anyarray(values.stavalues5)
          } WHERE starelid = ${
            parameters.starelid === undefined
              ? sql("starelid")
              : typed.pg_catalog_oid(parameters.starelid)
          } AND staattnum = ${
            parameters.staattnum === undefined
              ? sql("staattnum")
              : typed.pg_catalog_int2(parameters.staattnum)
          } AND stainherit = ${
            parameters.stainherit === undefined
              ? sql("stainherit")
              : typed.pg_catalog_bool(parameters.stainherit)
          } RETURNING starelid,staattnum,stainherit,stanullfrac,stawidth,stadistinct,stakind1,stakind2,stakind3,stakind4,stakind5,staop1,staop2,staop3,staop4,staop5,stacoll1,stacoll2,stacoll3,stacoll4,stacoll5,stanumbers1,stanumbers2,stanumbers3,stanumbers4,stanumbers5,stavalues1,stavalues2,stavalues3,stavalues4,stavalues5`;

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

      async byOid(
        parameters: PgCatalog.Tables.PgType.ByOid,
      ): Promise<PgCatalog.PgType> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,typname,typnamespace,typowner,typlen,typbyval,typtype,typcategory,typispreferred,typisdefined,typdelim,typrelid,typsubscript,typelem,typarray,typinput,typoutput,typreceive,typsend,typmodin,typmodout,typanalyze,typalign,typstorage,typnotnull,typbasetype,typtypmod,typndims,typcollation,typdefaultbin,typdefault,typacl FROM pg_catalog.pg_type WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgType> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,typname,typnamespace,typowner,typlen,typbyval,typtype,typcategory,typispreferred,typisdefined,typdelim,typrelid,typsubscript,typelem,typarray,typinput,typoutput,typreceive,typsend,typmodin,typmodout,typanalyze,typalign,typstorage,typnotnull,typbasetype,typtypmod,typndims,typcollation,typdefaultbin,typdefault,typacl FROM pg_catalog.pg_type WHERE typname = ${
            parameters.typname === undefined
              ? sql("typname")
              : typed.pg_catalog_cstring(parameters.typname)
          } AND typnamespace = ${
            parameters.typnamespace === undefined
              ? sql("typnamespace")
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

      async deleteByOid(
        parameters: PgCatalog.Tables.PgType.ByOid,
      ): Promise<PgCatalog.PgType> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`DELETE FROM pg_catalog.pg_type WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
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
      ): Promise<PgCatalog.PgType> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_type WHERE typname = ${
            parameters.typname === undefined
              ? sql("typname")
              : typed.pg_catalog_cstring(parameters.typname)
          } AND typnamespace = ${
            parameters.typnamespace === undefined
              ? sql("typnamespace")
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

      async updateByOid(
        parameters: PgCatalog.Tables.PgType.ByOid,
        values: Partial<PgCatalog.PgType>,
      ): Promise<PgCatalog.PgType> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_type SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , typname = ${
          values.typname === undefined
            ? sql("typname")
            : typed.pg_catalog_name(values.typname)
        } , typnamespace = ${
          values.typnamespace === undefined
            ? sql("typnamespace")
            : typed.pg_catalog_oid(values.typnamespace)
        } , typowner = ${
          values.typowner === undefined
            ? sql("typowner")
            : typed.pg_catalog_oid(values.typowner)
        } , typlen = ${
          values.typlen === undefined
            ? sql("typlen")
            : typed.pg_catalog_int2(values.typlen)
        } , typbyval = ${
          values.typbyval === undefined
            ? sql("typbyval")
            : typed.pg_catalog_bool(values.typbyval)
        } , typtype = ${
          values.typtype === undefined
            ? sql("typtype")
            : typed.pg_catalog_char(values.typtype)
        } , typcategory = ${
          values.typcategory === undefined
            ? sql("typcategory")
            : typed.pg_catalog_char(values.typcategory)
        } , typispreferred = ${
          values.typispreferred === undefined
            ? sql("typispreferred")
            : typed.pg_catalog_bool(values.typispreferred)
        } , typisdefined = ${
          values.typisdefined === undefined
            ? sql("typisdefined")
            : typed.pg_catalog_bool(values.typisdefined)
        } , typdelim = ${
          values.typdelim === undefined
            ? sql("typdelim")
            : typed.pg_catalog_char(values.typdelim)
        } , typrelid = ${
          values.typrelid === undefined
            ? sql("typrelid")
            : typed.pg_catalog_oid(values.typrelid)
        } , typsubscript = ${
          values.typsubscript === undefined
            ? sql("typsubscript")
            : typed.pg_catalog_regproc(values.typsubscript)
        } , typelem = ${
          values.typelem === undefined
            ? sql("typelem")
            : typed.pg_catalog_oid(values.typelem)
        } , typarray = ${
          values.typarray === undefined
            ? sql("typarray")
            : typed.pg_catalog_oid(values.typarray)
        } , typinput = ${
          values.typinput === undefined
            ? sql("typinput")
            : typed.pg_catalog_regproc(values.typinput)
        } , typoutput = ${
          values.typoutput === undefined
            ? sql("typoutput")
            : typed.pg_catalog_regproc(values.typoutput)
        } , typreceive = ${
          values.typreceive === undefined
            ? sql("typreceive")
            : typed.pg_catalog_regproc(values.typreceive)
        } , typsend = ${
          values.typsend === undefined
            ? sql("typsend")
            : typed.pg_catalog_regproc(values.typsend)
        } , typmodin = ${
          values.typmodin === undefined
            ? sql("typmodin")
            : typed.pg_catalog_regproc(values.typmodin)
        } , typmodout = ${
          values.typmodout === undefined
            ? sql("typmodout")
            : typed.pg_catalog_regproc(values.typmodout)
        } , typanalyze = ${
          values.typanalyze === undefined
            ? sql("typanalyze")
            : typed.pg_catalog_regproc(values.typanalyze)
        } , typalign = ${
          values.typalign === undefined
            ? sql("typalign")
            : typed.pg_catalog_char(values.typalign)
        } , typstorage = ${
          values.typstorage === undefined
            ? sql("typstorage")
            : typed.pg_catalog_char(values.typstorage)
        } , typnotnull = ${
          values.typnotnull === undefined
            ? sql("typnotnull")
            : typed.pg_catalog_bool(values.typnotnull)
        } , typbasetype = ${
          values.typbasetype === undefined
            ? sql("typbasetype")
            : typed.pg_catalog_oid(values.typbasetype)
        } , typtypmod = ${
          values.typtypmod === undefined
            ? sql("typtypmod")
            : typed.pg_catalog_int4(values.typtypmod)
        } , typndims = ${
          values.typndims === undefined
            ? sql("typndims")
            : typed.pg_catalog_int4(values.typndims)
        } , typcollation = ${
          values.typcollation === undefined
            ? sql("typcollation")
            : typed.pg_catalog_oid(values.typcollation)
        } , typdefaultbin = ${
          values.typdefaultbin === undefined
            ? sql("typdefaultbin")
            : typed.pg_catalog_pg_node_tree(values.typdefaultbin)
        } , typdefault = ${
          values.typdefault === undefined
            ? sql("typdefault")
            : typed.pg_catalog_text(values.typdefault)
        } , typacl = ${
          values.typacl === undefined
            ? sql("typacl")
            : typed.pg_catalog__aclitem(values.typacl)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,typname,typnamespace,typowner,typlen,typbyval,typtype,typcategory,typispreferred,typisdefined,typdelim,typrelid,typsubscript,typelem,typarray,typinput,typoutput,typreceive,typsend,typmodin,typmodout,typanalyze,typalign,typstorage,typnotnull,typbasetype,typtypmod,typndims,typcollation,typdefaultbin,typdefault,typacl`;

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
      async updateByTypnameTypnamespace(
        parameters: PgCatalog.Tables.PgType.ByTypnameTypnamespace,
        values: Partial<PgCatalog.PgType>,
      ): Promise<PgCatalog.PgType> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_type SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , typname = ${
          values.typname === undefined
            ? sql("typname")
            : typed.pg_catalog_name(values.typname)
        } , typnamespace = ${
          values.typnamespace === undefined
            ? sql("typnamespace")
            : typed.pg_catalog_oid(values.typnamespace)
        } , typowner = ${
          values.typowner === undefined
            ? sql("typowner")
            : typed.pg_catalog_oid(values.typowner)
        } , typlen = ${
          values.typlen === undefined
            ? sql("typlen")
            : typed.pg_catalog_int2(values.typlen)
        } , typbyval = ${
          values.typbyval === undefined
            ? sql("typbyval")
            : typed.pg_catalog_bool(values.typbyval)
        } , typtype = ${
          values.typtype === undefined
            ? sql("typtype")
            : typed.pg_catalog_char(values.typtype)
        } , typcategory = ${
          values.typcategory === undefined
            ? sql("typcategory")
            : typed.pg_catalog_char(values.typcategory)
        } , typispreferred = ${
          values.typispreferred === undefined
            ? sql("typispreferred")
            : typed.pg_catalog_bool(values.typispreferred)
        } , typisdefined = ${
          values.typisdefined === undefined
            ? sql("typisdefined")
            : typed.pg_catalog_bool(values.typisdefined)
        } , typdelim = ${
          values.typdelim === undefined
            ? sql("typdelim")
            : typed.pg_catalog_char(values.typdelim)
        } , typrelid = ${
          values.typrelid === undefined
            ? sql("typrelid")
            : typed.pg_catalog_oid(values.typrelid)
        } , typsubscript = ${
          values.typsubscript === undefined
            ? sql("typsubscript")
            : typed.pg_catalog_regproc(values.typsubscript)
        } , typelem = ${
          values.typelem === undefined
            ? sql("typelem")
            : typed.pg_catalog_oid(values.typelem)
        } , typarray = ${
          values.typarray === undefined
            ? sql("typarray")
            : typed.pg_catalog_oid(values.typarray)
        } , typinput = ${
          values.typinput === undefined
            ? sql("typinput")
            : typed.pg_catalog_regproc(values.typinput)
        } , typoutput = ${
          values.typoutput === undefined
            ? sql("typoutput")
            : typed.pg_catalog_regproc(values.typoutput)
        } , typreceive = ${
          values.typreceive === undefined
            ? sql("typreceive")
            : typed.pg_catalog_regproc(values.typreceive)
        } , typsend = ${
          values.typsend === undefined
            ? sql("typsend")
            : typed.pg_catalog_regproc(values.typsend)
        } , typmodin = ${
          values.typmodin === undefined
            ? sql("typmodin")
            : typed.pg_catalog_regproc(values.typmodin)
        } , typmodout = ${
          values.typmodout === undefined
            ? sql("typmodout")
            : typed.pg_catalog_regproc(values.typmodout)
        } , typanalyze = ${
          values.typanalyze === undefined
            ? sql("typanalyze")
            : typed.pg_catalog_regproc(values.typanalyze)
        } , typalign = ${
          values.typalign === undefined
            ? sql("typalign")
            : typed.pg_catalog_char(values.typalign)
        } , typstorage = ${
          values.typstorage === undefined
            ? sql("typstorage")
            : typed.pg_catalog_char(values.typstorage)
        } , typnotnull = ${
          values.typnotnull === undefined
            ? sql("typnotnull")
            : typed.pg_catalog_bool(values.typnotnull)
        } , typbasetype = ${
          values.typbasetype === undefined
            ? sql("typbasetype")
            : typed.pg_catalog_oid(values.typbasetype)
        } , typtypmod = ${
          values.typtypmod === undefined
            ? sql("typtypmod")
            : typed.pg_catalog_int4(values.typtypmod)
        } , typndims = ${
          values.typndims === undefined
            ? sql("typndims")
            : typed.pg_catalog_int4(values.typndims)
        } , typcollation = ${
          values.typcollation === undefined
            ? sql("typcollation")
            : typed.pg_catalog_oid(values.typcollation)
        } , typdefaultbin = ${
          values.typdefaultbin === undefined
            ? sql("typdefaultbin")
            : typed.pg_catalog_pg_node_tree(values.typdefaultbin)
        } , typdefault = ${
          values.typdefault === undefined
            ? sql("typdefault")
            : typed.pg_catalog_text(values.typdefault)
        } , typacl = ${
          values.typacl === undefined
            ? sql("typacl")
            : typed.pg_catalog__aclitem(values.typacl)
        } WHERE typname = ${
          parameters.typname === undefined
            ? sql("typname")
            : typed.pg_catalog_cstring(parameters.typname)
        } AND typnamespace = ${
          parameters.typnamespace === undefined
            ? sql("typnamespace")
            : typed.pg_catalog_oid(parameters.typnamespace)
        } RETURNING oid,typname,typnamespace,typowner,typlen,typbyval,typtype,typcategory,typispreferred,typisdefined,typdelim,typrelid,typsubscript,typelem,typarray,typinput,typoutput,typreceive,typsend,typmodin,typmodout,typanalyze,typalign,typstorage,typnotnull,typbasetype,typtypmod,typndims,typcollation,typdefaultbin,typdefault,typacl`;

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
        parameters: PgCatalog.Tables.PgForeignTable.ByFtrelid,
      ): Promise<PgCatalog.PgForeignTable> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT ftrelid,ftserver,ftoptions FROM pg_catalog.pg_foreign_table WHERE ftrelid = ${
            parameters.ftrelid === undefined
              ? sql("ftrelid")
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
      ): Promise<PgCatalog.PgForeignTable> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_foreign_table WHERE ftrelid = ${
            parameters.ftrelid === undefined
              ? sql("ftrelid")
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

      async updateByFtrelid(
        parameters: PgCatalog.Tables.PgForeignTable.ByFtrelid,
        values: Partial<PgCatalog.PgForeignTable>,
      ): Promise<PgCatalog.PgForeignTable> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_foreign_table SET ftrelid = ${
            values.ftrelid === undefined
              ? sql("ftrelid")
              : typed.pg_catalog_oid(values.ftrelid)
          } , ftserver = ${
            values.ftserver === undefined
              ? sql("ftserver")
              : typed.pg_catalog_oid(values.ftserver)
          } , ftoptions = ${
            values.ftoptions === undefined
              ? sql("ftoptions")
              : typed.pg_catalog__text(values.ftoptions)
          } WHERE ftrelid = ${
            parameters.ftrelid === undefined
              ? sql("ftrelid")
              : typed.pg_catalog_oid(parameters.ftrelid)
          } RETURNING ftrelid,ftserver,ftoptions`;

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

      async byOid(
        parameters: PgCatalog.Tables.PgAuthid.ByOid,
      ): Promise<PgCatalog.PgAuthid> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,rolname,rolsuper,rolinherit,rolcreaterole,rolcreatedb,rolcanlogin,rolreplication,rolbypassrls,rolconnlimit,rolpassword,rolvaliduntil FROM pg_catalog.pg_authid WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      async byRolname(
        parameters: PgCatalog.Tables.PgAuthid.ByRolname,
      ): Promise<PgCatalog.PgAuthid> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,rolname,rolsuper,rolinherit,rolcreaterole,rolcreatedb,rolcanlogin,rolreplication,rolbypassrls,rolconnlimit,rolpassword,rolvaliduntil FROM pg_catalog.pg_authid WHERE rolname = ${
            parameters.rolname === undefined
              ? sql("rolname")
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

      async deleteByOid(
        parameters: PgCatalog.Tables.PgAuthid.ByOid,
      ): Promise<PgCatalog.PgAuthid> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_authid WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      async deleteByRolname(
        parameters: PgCatalog.Tables.PgAuthid.ByRolname,
      ): Promise<PgCatalog.PgAuthid> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_authid WHERE rolname = ${
            parameters.rolname === undefined
              ? sql("rolname")
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

      async updateByOid(
        parameters: PgCatalog.Tables.PgAuthid.ByOid,
        values: Partial<PgCatalog.PgAuthid>,
      ): Promise<PgCatalog.PgAuthid> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_authid SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , rolname = ${
          values.rolname === undefined
            ? sql("rolname")
            : typed.pg_catalog_name(values.rolname)
        } , rolsuper = ${
          values.rolsuper === undefined
            ? sql("rolsuper")
            : typed.pg_catalog_bool(values.rolsuper)
        } , rolinherit = ${
          values.rolinherit === undefined
            ? sql("rolinherit")
            : typed.pg_catalog_bool(values.rolinherit)
        } , rolcreaterole = ${
          values.rolcreaterole === undefined
            ? sql("rolcreaterole")
            : typed.pg_catalog_bool(values.rolcreaterole)
        } , rolcreatedb = ${
          values.rolcreatedb === undefined
            ? sql("rolcreatedb")
            : typed.pg_catalog_bool(values.rolcreatedb)
        } , rolcanlogin = ${
          values.rolcanlogin === undefined
            ? sql("rolcanlogin")
            : typed.pg_catalog_bool(values.rolcanlogin)
        } , rolreplication = ${
          values.rolreplication === undefined
            ? sql("rolreplication")
            : typed.pg_catalog_bool(values.rolreplication)
        } , rolbypassrls = ${
          values.rolbypassrls === undefined
            ? sql("rolbypassrls")
            : typed.pg_catalog_bool(values.rolbypassrls)
        } , rolconnlimit = ${
          values.rolconnlimit === undefined
            ? sql("rolconnlimit")
            : typed.pg_catalog_int4(values.rolconnlimit)
        } , rolpassword = ${
          values.rolpassword === undefined
            ? sql("rolpassword")
            : typed.pg_catalog_text(values.rolpassword)
        } , rolvaliduntil = ${
          values.rolvaliduntil === undefined
            ? sql("rolvaliduntil")
            : typed.pg_catalog_timestamptz(values.rolvaliduntil)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,rolname,rolsuper,rolinherit,rolcreaterole,rolcreatedb,rolcanlogin,rolreplication,rolbypassrls,rolconnlimit,rolpassword,rolvaliduntil`;

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
      async updateByRolname(
        parameters: PgCatalog.Tables.PgAuthid.ByRolname,
        values: Partial<PgCatalog.PgAuthid>,
      ): Promise<PgCatalog.PgAuthid> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_authid SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , rolname = ${
          values.rolname === undefined
            ? sql("rolname")
            : typed.pg_catalog_name(values.rolname)
        } , rolsuper = ${
          values.rolsuper === undefined
            ? sql("rolsuper")
            : typed.pg_catalog_bool(values.rolsuper)
        } , rolinherit = ${
          values.rolinherit === undefined
            ? sql("rolinherit")
            : typed.pg_catalog_bool(values.rolinherit)
        } , rolcreaterole = ${
          values.rolcreaterole === undefined
            ? sql("rolcreaterole")
            : typed.pg_catalog_bool(values.rolcreaterole)
        } , rolcreatedb = ${
          values.rolcreatedb === undefined
            ? sql("rolcreatedb")
            : typed.pg_catalog_bool(values.rolcreatedb)
        } , rolcanlogin = ${
          values.rolcanlogin === undefined
            ? sql("rolcanlogin")
            : typed.pg_catalog_bool(values.rolcanlogin)
        } , rolreplication = ${
          values.rolreplication === undefined
            ? sql("rolreplication")
            : typed.pg_catalog_bool(values.rolreplication)
        } , rolbypassrls = ${
          values.rolbypassrls === undefined
            ? sql("rolbypassrls")
            : typed.pg_catalog_bool(values.rolbypassrls)
        } , rolconnlimit = ${
          values.rolconnlimit === undefined
            ? sql("rolconnlimit")
            : typed.pg_catalog_int4(values.rolconnlimit)
        } , rolpassword = ${
          values.rolpassword === undefined
            ? sql("rolpassword")
            : typed.pg_catalog_text(values.rolpassword)
        } , rolvaliduntil = ${
          values.rolvaliduntil === undefined
            ? sql("rolvaliduntil")
            : typed.pg_catalog_timestamptz(values.rolvaliduntil)
        } WHERE rolname = ${
          parameters.rolname === undefined
            ? sql("rolname")
            : typed.pg_catalog_cstring(parameters.rolname)
        } RETURNING oid,rolname,rolsuper,rolinherit,rolcreaterole,rolcreatedb,rolcanlogin,rolreplication,rolbypassrls,rolconnlimit,rolpassword,rolvaliduntil`;

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
      ): Promise<PgCatalog.PgStatisticExtData> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT stxoid,stxdinherit,stxdndistinct,stxddependencies,stxdmcv,stxdexpr FROM pg_catalog.pg_statistic_ext_data WHERE stxoid = ${
            parameters.stxoid === undefined
              ? sql("stxoid")
              : typed.pg_catalog_oid(parameters.stxoid)
          } AND stxdinherit = ${
            parameters.stxdinherit === undefined
              ? sql("stxdinherit")
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
      ): Promise<PgCatalog.PgStatisticExtData> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_statistic_ext_data WHERE stxoid = ${
            parameters.stxoid === undefined
              ? sql("stxoid")
              : typed.pg_catalog_oid(parameters.stxoid)
          } AND stxdinherit = ${
            parameters.stxdinherit === undefined
              ? sql("stxdinherit")
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

      async updateByStxoidStxdinherit(
        parameters: PgCatalog.Tables.PgStatisticExtData.ByStxoidStxdinherit,
        values: Partial<PgCatalog.PgStatisticExtData>,
      ): Promise<PgCatalog.PgStatisticExtData> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_statistic_ext_data SET stxoid = ${
            values.stxoid === undefined
              ? sql("stxoid")
              : typed.pg_catalog_oid(values.stxoid)
          } , stxdinherit = ${
            values.stxdinherit === undefined
              ? sql("stxdinherit")
              : typed.pg_catalog_bool(values.stxdinherit)
          } , stxdndistinct = ${
            values.stxdndistinct === undefined
              ? sql("stxdndistinct")
              : typed.pg_catalog_pg_ndistinct(values.stxdndistinct)
          } , stxddependencies = ${
            values.stxddependencies === undefined
              ? sql("stxddependencies")
              : typed.pg_catalog_pg_dependencies(values.stxddependencies)
          } , stxdmcv = ${
            values.stxdmcv === undefined
              ? sql("stxdmcv")
              : typed.pg_catalog_pg_mcv_list(values.stxdmcv)
          } , stxdexpr = ${
            values.stxdexpr === undefined
              ? sql("stxdexpr")
              : typed.pg_catalog__pg_statistic(values.stxdexpr)
          } WHERE stxoid = ${
            parameters.stxoid === undefined
              ? sql("stxoid")
              : typed.pg_catalog_oid(parameters.stxoid)
          } AND stxdinherit = ${
            parameters.stxdinherit === undefined
              ? sql("stxdinherit")
              : typed.pg_catalog_bool(parameters.stxdinherit)
          } RETURNING stxoid,stxdinherit,stxdndistinct,stxddependencies,stxdmcv,stxdexpr`;

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

      async byOid(
        parameters: PgCatalog.Tables.PgUserMapping.ByOid,
      ): Promise<PgCatalog.PgUserMapping> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,umuser,umserver,umoptions FROM pg_catalog.pg_user_mapping WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgUserMapping> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,umuser,umserver,umoptions FROM pg_catalog.pg_user_mapping WHERE umuser = ${
            parameters.umuser === undefined
              ? sql("umuser")
              : typed.pg_catalog_oid(parameters.umuser)
          } AND umserver = ${
            parameters.umserver === undefined
              ? sql("umserver")
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

      async deleteByOid(
        parameters: PgCatalog.Tables.PgUserMapping.ByOid,
      ): Promise<PgCatalog.PgUserMapping> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_user_mapping WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgUserMapping> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_user_mapping WHERE umuser = ${
            parameters.umuser === undefined
              ? sql("umuser")
              : typed.pg_catalog_oid(parameters.umuser)
          } AND umserver = ${
            parameters.umserver === undefined
              ? sql("umserver")
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

      async updateByOid(
        parameters: PgCatalog.Tables.PgUserMapping.ByOid,
        values: Partial<PgCatalog.PgUserMapping>,
      ): Promise<PgCatalog.PgUserMapping> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_user_mapping SET oid = ${
            values.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(values.oid)
          } , umuser = ${
            values.umuser === undefined
              ? sql("umuser")
              : typed.pg_catalog_oid(values.umuser)
          } , umserver = ${
            values.umserver === undefined
              ? sql("umserver")
              : typed.pg_catalog_oid(values.umserver)
          } , umoptions = ${
            values.umoptions === undefined
              ? sql("umoptions")
              : typed.pg_catalog__text(values.umoptions)
          } WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,umuser,umserver,umoptions`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          umuser: undefinedIsNull(record.umuser),
          umserver: undefinedIsNull(record.umserver),
          umoptions: undefinedIsNull(record.umoptions),
        }));
        return results[0];
      }
      async updateByUmuserUmserver(
        parameters: PgCatalog.Tables.PgUserMapping.ByUmuserUmserver,
        values: Partial<PgCatalog.PgUserMapping>,
      ): Promise<PgCatalog.PgUserMapping> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_user_mapping SET oid = ${
            values.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(values.oid)
          } , umuser = ${
            values.umuser === undefined
              ? sql("umuser")
              : typed.pg_catalog_oid(values.umuser)
          } , umserver = ${
            values.umserver === undefined
              ? sql("umserver")
              : typed.pg_catalog_oid(values.umserver)
          } , umoptions = ${
            values.umoptions === undefined
              ? sql("umoptions")
              : typed.pg_catalog__text(values.umoptions)
          } WHERE umuser = ${
            parameters.umuser === undefined
              ? sql("umuser")
              : typed.pg_catalog_oid(parameters.umuser)
          } AND umserver = ${
            parameters.umserver === undefined
              ? sql("umserver")
              : typed.pg_catalog_oid(parameters.umserver)
          } RETURNING oid,umuser,umserver,umoptions`;

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

      async byOid(
        parameters: PgCatalog.Tables.PgSubscription.ByOid,
      ): Promise<PgCatalog.PgSubscription> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,subdbid,subskiplsn,subname,subowner,subenabled,subbinary,substream,subtwophasestate,subdisableonerr,subpasswordrequired,subrunasowner,subconninfo,subslotname,subsynccommit,subpublications,suborigin FROM pg_catalog.pg_subscription WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgSubscription> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,subdbid,subskiplsn,subname,subowner,subenabled,subbinary,substream,subtwophasestate,subdisableonerr,subpasswordrequired,subrunasowner,subconninfo,subslotname,subsynccommit,subpublications,suborigin FROM pg_catalog.pg_subscription WHERE subdbid = ${
            parameters.subdbid === undefined
              ? sql("subdbid")
              : typed.pg_catalog_oid(parameters.subdbid)
          } AND subname = ${
            parameters.subname === undefined
              ? sql("subname")
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

      async deleteByOid(
        parameters: PgCatalog.Tables.PgSubscription.ByOid,
      ): Promise<PgCatalog.PgSubscription> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_subscription WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgSubscription> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_subscription WHERE subdbid = ${
            parameters.subdbid === undefined
              ? sql("subdbid")
              : typed.pg_catalog_oid(parameters.subdbid)
          } AND subname = ${
            parameters.subname === undefined
              ? sql("subname")
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

      async updateByOid(
        parameters: PgCatalog.Tables.PgSubscription.ByOid,
        values: Partial<PgCatalog.PgSubscription>,
      ): Promise<PgCatalog.PgSubscription> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_subscription SET oid = ${
            values.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(values.oid)
          } , subdbid = ${
            values.subdbid === undefined
              ? sql("subdbid")
              : typed.pg_catalog_oid(values.subdbid)
          } , subskiplsn = ${
            values.subskiplsn === undefined
              ? sql("subskiplsn")
              : typed.pg_catalog_pg_lsn(values.subskiplsn)
          } , subname = ${
            values.subname === undefined
              ? sql("subname")
              : typed.pg_catalog_name(values.subname)
          } , subowner = ${
            values.subowner === undefined
              ? sql("subowner")
              : typed.pg_catalog_oid(values.subowner)
          } , subenabled = ${
            values.subenabled === undefined
              ? sql("subenabled")
              : typed.pg_catalog_bool(values.subenabled)
          } , subbinary = ${
            values.subbinary === undefined
              ? sql("subbinary")
              : typed.pg_catalog_bool(values.subbinary)
          } , substream = ${
            values.substream === undefined
              ? sql("substream")
              : typed.pg_catalog_char(values.substream)
          } , subtwophasestate = ${
            values.subtwophasestate === undefined
              ? sql("subtwophasestate")
              : typed.pg_catalog_char(values.subtwophasestate)
          } , subdisableonerr = ${
            values.subdisableonerr === undefined
              ? sql("subdisableonerr")
              : typed.pg_catalog_bool(values.subdisableonerr)
          } , subpasswordrequired = ${
            values.subpasswordrequired === undefined
              ? sql("subpasswordrequired")
              : typed.pg_catalog_bool(values.subpasswordrequired)
          } , subrunasowner = ${
            values.subrunasowner === undefined
              ? sql("subrunasowner")
              : typed.pg_catalog_bool(values.subrunasowner)
          } , subconninfo = ${
            values.subconninfo === undefined
              ? sql("subconninfo")
              : typed.pg_catalog_text(values.subconninfo)
          } , subslotname = ${
            values.subslotname === undefined
              ? sql("subslotname")
              : typed.pg_catalog_name(values.subslotname)
          } , subsynccommit = ${
            values.subsynccommit === undefined
              ? sql("subsynccommit")
              : typed.pg_catalog_text(values.subsynccommit)
          } , subpublications = ${
            values.subpublications === undefined
              ? sql("subpublications")
              : typed.pg_catalog__text(values.subpublications)
          } , suborigin = ${
            values.suborigin === undefined
              ? sql("suborigin")
              : typed.pg_catalog_text(values.suborigin)
          } WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,subdbid,subskiplsn,subname,subowner,subenabled,subbinary,substream,subtwophasestate,subdisableonerr,subpasswordrequired,subrunasowner,subconninfo,subslotname,subsynccommit,subpublications,suborigin`;

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
      async updateBySubdbidSubname(
        parameters: PgCatalog.Tables.PgSubscription.BySubdbidSubname,
        values: Partial<PgCatalog.PgSubscription>,
      ): Promise<PgCatalog.PgSubscription> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_subscription SET oid = ${
            values.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(values.oid)
          } , subdbid = ${
            values.subdbid === undefined
              ? sql("subdbid")
              : typed.pg_catalog_oid(values.subdbid)
          } , subskiplsn = ${
            values.subskiplsn === undefined
              ? sql("subskiplsn")
              : typed.pg_catalog_pg_lsn(values.subskiplsn)
          } , subname = ${
            values.subname === undefined
              ? sql("subname")
              : typed.pg_catalog_name(values.subname)
          } , subowner = ${
            values.subowner === undefined
              ? sql("subowner")
              : typed.pg_catalog_oid(values.subowner)
          } , subenabled = ${
            values.subenabled === undefined
              ? sql("subenabled")
              : typed.pg_catalog_bool(values.subenabled)
          } , subbinary = ${
            values.subbinary === undefined
              ? sql("subbinary")
              : typed.pg_catalog_bool(values.subbinary)
          } , substream = ${
            values.substream === undefined
              ? sql("substream")
              : typed.pg_catalog_char(values.substream)
          } , subtwophasestate = ${
            values.subtwophasestate === undefined
              ? sql("subtwophasestate")
              : typed.pg_catalog_char(values.subtwophasestate)
          } , subdisableonerr = ${
            values.subdisableonerr === undefined
              ? sql("subdisableonerr")
              : typed.pg_catalog_bool(values.subdisableonerr)
          } , subpasswordrequired = ${
            values.subpasswordrequired === undefined
              ? sql("subpasswordrequired")
              : typed.pg_catalog_bool(values.subpasswordrequired)
          } , subrunasowner = ${
            values.subrunasowner === undefined
              ? sql("subrunasowner")
              : typed.pg_catalog_bool(values.subrunasowner)
          } , subconninfo = ${
            values.subconninfo === undefined
              ? sql("subconninfo")
              : typed.pg_catalog_text(values.subconninfo)
          } , subslotname = ${
            values.subslotname === undefined
              ? sql("subslotname")
              : typed.pg_catalog_name(values.subslotname)
          } , subsynccommit = ${
            values.subsynccommit === undefined
              ? sql("subsynccommit")
              : typed.pg_catalog_text(values.subsynccommit)
          } , subpublications = ${
            values.subpublications === undefined
              ? sql("subpublications")
              : typed.pg_catalog__text(values.subpublications)
          } , suborigin = ${
            values.suborigin === undefined
              ? sql("suborigin")
              : typed.pg_catalog_text(values.suborigin)
          } WHERE subdbid = ${
            parameters.subdbid === undefined
              ? sql("subdbid")
              : typed.pg_catalog_oid(parameters.subdbid)
          } AND subname = ${
            parameters.subname === undefined
              ? sql("subname")
              : typed.pg_catalog_cstring(parameters.subname)
          } RETURNING oid,subdbid,subskiplsn,subname,subowner,subenabled,subbinary,substream,subtwophasestate,subdisableonerr,subpasswordrequired,subrunasowner,subconninfo,subslotname,subsynccommit,subpublications,suborigin`;

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
      ): Promise<PgCatalog.PgAttribute> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT attrelid,attname,atttypid,attlen,attnum,attcacheoff,atttypmod,attndims,attbyval,attalign,attstorage,attcompression,attnotnull,atthasdef,atthasmissing,attidentity,attgenerated,attisdropped,attislocal,attinhcount,attstattarget,attcollation,attacl,attoptions,attfdwoptions,attmissingval FROM pg_catalog.pg_attribute WHERE attrelid = ${
            parameters.attrelid === undefined
              ? sql("attrelid")
              : typed.pg_catalog_oid(parameters.attrelid)
          } AND attname = ${
            parameters.attname === undefined
              ? sql("attname")
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
      ): Promise<PgCatalog.PgAttribute> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT attrelid,attname,atttypid,attlen,attnum,attcacheoff,atttypmod,attndims,attbyval,attalign,attstorage,attcompression,attnotnull,atthasdef,atthasmissing,attidentity,attgenerated,attisdropped,attislocal,attinhcount,attstattarget,attcollation,attacl,attoptions,attfdwoptions,attmissingval FROM pg_catalog.pg_attribute WHERE attrelid = ${
            parameters.attrelid === undefined
              ? sql("attrelid")
              : typed.pg_catalog_oid(parameters.attrelid)
          } AND attnum = ${
            parameters.attnum === undefined
              ? sql("attnum")
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
      ): Promise<PgCatalog.PgAttribute> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_attribute WHERE attrelid = ${
            parameters.attrelid === undefined
              ? sql("attrelid")
              : typed.pg_catalog_oid(parameters.attrelid)
          } AND attname = ${
            parameters.attname === undefined
              ? sql("attname")
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
      ): Promise<PgCatalog.PgAttribute> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_attribute WHERE attrelid = ${
            parameters.attrelid === undefined
              ? sql("attrelid")
              : typed.pg_catalog_oid(parameters.attrelid)
          } AND attnum = ${
            parameters.attnum === undefined
              ? sql("attnum")
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

      async updateByAttrelidAttname(
        parameters: PgCatalog.Tables.PgAttribute.ByAttrelidAttname,
        values: Partial<PgCatalog.PgAttribute>,
      ): Promise<PgCatalog.PgAttribute> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_attribute SET attrelid = ${
            values.attrelid === undefined
              ? sql("attrelid")
              : typed.pg_catalog_oid(values.attrelid)
          } , attname = ${
            values.attname === undefined
              ? sql("attname")
              : typed.pg_catalog_name(values.attname)
          } , atttypid = ${
            values.atttypid === undefined
              ? sql("atttypid")
              : typed.pg_catalog_oid(values.atttypid)
          } , attlen = ${
            values.attlen === undefined
              ? sql("attlen")
              : typed.pg_catalog_int2(values.attlen)
          } , attnum = ${
            values.attnum === undefined
              ? sql("attnum")
              : typed.pg_catalog_int2(values.attnum)
          } , attcacheoff = ${
            values.attcacheoff === undefined
              ? sql("attcacheoff")
              : typed.pg_catalog_int4(values.attcacheoff)
          } , atttypmod = ${
            values.atttypmod === undefined
              ? sql("atttypmod")
              : typed.pg_catalog_int4(values.atttypmod)
          } , attndims = ${
            values.attndims === undefined
              ? sql("attndims")
              : typed.pg_catalog_int2(values.attndims)
          } , attbyval = ${
            values.attbyval === undefined
              ? sql("attbyval")
              : typed.pg_catalog_bool(values.attbyval)
          } , attalign = ${
            values.attalign === undefined
              ? sql("attalign")
              : typed.pg_catalog_char(values.attalign)
          } , attstorage = ${
            values.attstorage === undefined
              ? sql("attstorage")
              : typed.pg_catalog_char(values.attstorage)
          } , attcompression = ${
            values.attcompression === undefined
              ? sql("attcompression")
              : typed.pg_catalog_char(values.attcompression)
          } , attnotnull = ${
            values.attnotnull === undefined
              ? sql("attnotnull")
              : typed.pg_catalog_bool(values.attnotnull)
          } , atthasdef = ${
            values.atthasdef === undefined
              ? sql("atthasdef")
              : typed.pg_catalog_bool(values.atthasdef)
          } , atthasmissing = ${
            values.atthasmissing === undefined
              ? sql("atthasmissing")
              : typed.pg_catalog_bool(values.atthasmissing)
          } , attidentity = ${
            values.attidentity === undefined
              ? sql("attidentity")
              : typed.pg_catalog_char(values.attidentity)
          } , attgenerated = ${
            values.attgenerated === undefined
              ? sql("attgenerated")
              : typed.pg_catalog_char(values.attgenerated)
          } , attisdropped = ${
            values.attisdropped === undefined
              ? sql("attisdropped")
              : typed.pg_catalog_bool(values.attisdropped)
          } , attislocal = ${
            values.attislocal === undefined
              ? sql("attislocal")
              : typed.pg_catalog_bool(values.attislocal)
          } , attinhcount = ${
            values.attinhcount === undefined
              ? sql("attinhcount")
              : typed.pg_catalog_int2(values.attinhcount)
          } , attstattarget = ${
            values.attstattarget === undefined
              ? sql("attstattarget")
              : typed.pg_catalog_int2(values.attstattarget)
          } , attcollation = ${
            values.attcollation === undefined
              ? sql("attcollation")
              : typed.pg_catalog_oid(values.attcollation)
          } , attacl = ${
            values.attacl === undefined
              ? sql("attacl")
              : typed.pg_catalog__aclitem(values.attacl)
          } , attoptions = ${
            values.attoptions === undefined
              ? sql("attoptions")
              : typed.pg_catalog__text(values.attoptions)
          } , attfdwoptions = ${
            values.attfdwoptions === undefined
              ? sql("attfdwoptions")
              : typed.pg_catalog__text(values.attfdwoptions)
          } , attmissingval = ${
            values.attmissingval === undefined
              ? sql("attmissingval")
              : typed.pg_catalog_anyarray(values.attmissingval)
          } WHERE attrelid = ${
            parameters.attrelid === undefined
              ? sql("attrelid")
              : typed.pg_catalog_oid(parameters.attrelid)
          } AND attname = ${
            parameters.attname === undefined
              ? sql("attname")
              : typed.pg_catalog_cstring(parameters.attname)
          } RETURNING attrelid,attname,atttypid,attlen,attnum,attcacheoff,atttypmod,attndims,attbyval,attalign,attstorage,attcompression,attnotnull,atthasdef,atthasmissing,attidentity,attgenerated,attisdropped,attislocal,attinhcount,attstattarget,attcollation,attacl,attoptions,attfdwoptions,attmissingval`;

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
      async updateByAttrelidAttnum(
        parameters: PgCatalog.Tables.PgAttribute.ByAttrelidAttnum,
        values: Partial<PgCatalog.PgAttribute>,
      ): Promise<PgCatalog.PgAttribute> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_attribute SET attrelid = ${
            values.attrelid === undefined
              ? sql("attrelid")
              : typed.pg_catalog_oid(values.attrelid)
          } , attname = ${
            values.attname === undefined
              ? sql("attname")
              : typed.pg_catalog_name(values.attname)
          } , atttypid = ${
            values.atttypid === undefined
              ? sql("atttypid")
              : typed.pg_catalog_oid(values.atttypid)
          } , attlen = ${
            values.attlen === undefined
              ? sql("attlen")
              : typed.pg_catalog_int2(values.attlen)
          } , attnum = ${
            values.attnum === undefined
              ? sql("attnum")
              : typed.pg_catalog_int2(values.attnum)
          } , attcacheoff = ${
            values.attcacheoff === undefined
              ? sql("attcacheoff")
              : typed.pg_catalog_int4(values.attcacheoff)
          } , atttypmod = ${
            values.atttypmod === undefined
              ? sql("atttypmod")
              : typed.pg_catalog_int4(values.atttypmod)
          } , attndims = ${
            values.attndims === undefined
              ? sql("attndims")
              : typed.pg_catalog_int2(values.attndims)
          } , attbyval = ${
            values.attbyval === undefined
              ? sql("attbyval")
              : typed.pg_catalog_bool(values.attbyval)
          } , attalign = ${
            values.attalign === undefined
              ? sql("attalign")
              : typed.pg_catalog_char(values.attalign)
          } , attstorage = ${
            values.attstorage === undefined
              ? sql("attstorage")
              : typed.pg_catalog_char(values.attstorage)
          } , attcompression = ${
            values.attcompression === undefined
              ? sql("attcompression")
              : typed.pg_catalog_char(values.attcompression)
          } , attnotnull = ${
            values.attnotnull === undefined
              ? sql("attnotnull")
              : typed.pg_catalog_bool(values.attnotnull)
          } , atthasdef = ${
            values.atthasdef === undefined
              ? sql("atthasdef")
              : typed.pg_catalog_bool(values.atthasdef)
          } , atthasmissing = ${
            values.atthasmissing === undefined
              ? sql("atthasmissing")
              : typed.pg_catalog_bool(values.atthasmissing)
          } , attidentity = ${
            values.attidentity === undefined
              ? sql("attidentity")
              : typed.pg_catalog_char(values.attidentity)
          } , attgenerated = ${
            values.attgenerated === undefined
              ? sql("attgenerated")
              : typed.pg_catalog_char(values.attgenerated)
          } , attisdropped = ${
            values.attisdropped === undefined
              ? sql("attisdropped")
              : typed.pg_catalog_bool(values.attisdropped)
          } , attislocal = ${
            values.attislocal === undefined
              ? sql("attislocal")
              : typed.pg_catalog_bool(values.attislocal)
          } , attinhcount = ${
            values.attinhcount === undefined
              ? sql("attinhcount")
              : typed.pg_catalog_int2(values.attinhcount)
          } , attstattarget = ${
            values.attstattarget === undefined
              ? sql("attstattarget")
              : typed.pg_catalog_int2(values.attstattarget)
          } , attcollation = ${
            values.attcollation === undefined
              ? sql("attcollation")
              : typed.pg_catalog_oid(values.attcollation)
          } , attacl = ${
            values.attacl === undefined
              ? sql("attacl")
              : typed.pg_catalog__aclitem(values.attacl)
          } , attoptions = ${
            values.attoptions === undefined
              ? sql("attoptions")
              : typed.pg_catalog__text(values.attoptions)
          } , attfdwoptions = ${
            values.attfdwoptions === undefined
              ? sql("attfdwoptions")
              : typed.pg_catalog__text(values.attfdwoptions)
          } , attmissingval = ${
            values.attmissingval === undefined
              ? sql("attmissingval")
              : typed.pg_catalog_anyarray(values.attmissingval)
          } WHERE attrelid = ${
            parameters.attrelid === undefined
              ? sql("attrelid")
              : typed.pg_catalog_oid(parameters.attrelid)
          } AND attnum = ${
            parameters.attnum === undefined
              ? sql("attnum")
              : typed.pg_catalog_int2(parameters.attnum)
          } RETURNING attrelid,attname,atttypid,attlen,attnum,attcacheoff,atttypmod,attndims,attbyval,attalign,attstorage,attcompression,attnotnull,atthasdef,atthasmissing,attidentity,attgenerated,attisdropped,attislocal,attinhcount,attstattarget,attcollation,attacl,attoptions,attfdwoptions,attmissingval`;

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

      async byOid(
        parameters: PgCatalog.Tables.PgProc.ByOid,
      ): Promise<PgCatalog.PgProc> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,proname,pronamespace,proowner,prolang,procost,prorows,provariadic,prosupport,prokind,prosecdef,proleakproof,proisstrict,proretset,provolatile,proparallel,pronargs,pronargdefaults,prorettype,proargtypes,proallargtypes,proargmodes,proargnames,proargdefaults,protrftypes,prosrc,probin,prosqlbody,proconfig,proacl FROM pg_catalog.pg_proc WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgProc> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,proname,pronamespace,proowner,prolang,procost,prorows,provariadic,prosupport,prokind,prosecdef,proleakproof,proisstrict,proretset,provolatile,proparallel,pronargs,pronargdefaults,prorettype,proargtypes,proallargtypes,proargmodes,proargnames,proargdefaults,protrftypes,prosrc,probin,prosqlbody,proconfig,proacl FROM pg_catalog.pg_proc WHERE proname = ${
            parameters.proname === undefined
              ? sql("proname")
              : typed.pg_catalog_cstring(parameters.proname)
          } AND proargtypes = ${
            parameters.proargtypes === undefined
              ? sql("proargtypes")
              : typed.pg_catalog_oidvector(parameters.proargtypes)
          } AND pronamespace = ${
            parameters.pronamespace === undefined
              ? sql("pronamespace")
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

      async deleteByOid(
        parameters: PgCatalog.Tables.PgProc.ByOid,
      ): Promise<PgCatalog.PgProc> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`DELETE FROM pg_catalog.pg_proc WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
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
      ): Promise<PgCatalog.PgProc> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_proc WHERE proname = ${
            parameters.proname === undefined
              ? sql("proname")
              : typed.pg_catalog_cstring(parameters.proname)
          } AND proargtypes = ${
            parameters.proargtypes === undefined
              ? sql("proargtypes")
              : typed.pg_catalog_oidvector(parameters.proargtypes)
          } AND pronamespace = ${
            parameters.pronamespace === undefined
              ? sql("pronamespace")
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

      async updateByOid(
        parameters: PgCatalog.Tables.PgProc.ByOid,
        values: Partial<PgCatalog.PgProc>,
      ): Promise<PgCatalog.PgProc> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_proc SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , proname = ${
          values.proname === undefined
            ? sql("proname")
            : typed.pg_catalog_name(values.proname)
        } , pronamespace = ${
          values.pronamespace === undefined
            ? sql("pronamespace")
            : typed.pg_catalog_oid(values.pronamespace)
        } , proowner = ${
          values.proowner === undefined
            ? sql("proowner")
            : typed.pg_catalog_oid(values.proowner)
        } , prolang = ${
          values.prolang === undefined
            ? sql("prolang")
            : typed.pg_catalog_oid(values.prolang)
        } , procost = ${
          values.procost === undefined
            ? sql("procost")
            : typed.pg_catalog_float4(values.procost)
        } , prorows = ${
          values.prorows === undefined
            ? sql("prorows")
            : typed.pg_catalog_float4(values.prorows)
        } , provariadic = ${
          values.provariadic === undefined
            ? sql("provariadic")
            : typed.pg_catalog_oid(values.provariadic)
        } , prosupport = ${
          values.prosupport === undefined
            ? sql("prosupport")
            : typed.pg_catalog_regproc(values.prosupport)
        } , prokind = ${
          values.prokind === undefined
            ? sql("prokind")
            : typed.pg_catalog_char(values.prokind)
        } , prosecdef = ${
          values.prosecdef === undefined
            ? sql("prosecdef")
            : typed.pg_catalog_bool(values.prosecdef)
        } , proleakproof = ${
          values.proleakproof === undefined
            ? sql("proleakproof")
            : typed.pg_catalog_bool(values.proleakproof)
        } , proisstrict = ${
          values.proisstrict === undefined
            ? sql("proisstrict")
            : typed.pg_catalog_bool(values.proisstrict)
        } , proretset = ${
          values.proretset === undefined
            ? sql("proretset")
            : typed.pg_catalog_bool(values.proretset)
        } , provolatile = ${
          values.provolatile === undefined
            ? sql("provolatile")
            : typed.pg_catalog_char(values.provolatile)
        } , proparallel = ${
          values.proparallel === undefined
            ? sql("proparallel")
            : typed.pg_catalog_char(values.proparallel)
        } , pronargs = ${
          values.pronargs === undefined
            ? sql("pronargs")
            : typed.pg_catalog_int2(values.pronargs)
        } , pronargdefaults = ${
          values.pronargdefaults === undefined
            ? sql("pronargdefaults")
            : typed.pg_catalog_int2(values.pronargdefaults)
        } , prorettype = ${
          values.prorettype === undefined
            ? sql("prorettype")
            : typed.pg_catalog_oid(values.prorettype)
        } , proargtypes = ${
          values.proargtypes === undefined
            ? sql("proargtypes")
            : typed.pg_catalog_oidvector(values.proargtypes)
        } , proallargtypes = ${
          values.proallargtypes === undefined
            ? sql("proallargtypes")
            : typed.pg_catalog__oid(values.proallargtypes)
        } , proargmodes = ${
          values.proargmodes === undefined
            ? sql("proargmodes")
            : typed.pg_catalog__char(values.proargmodes)
        } , proargnames = ${
          values.proargnames === undefined
            ? sql("proargnames")
            : typed.pg_catalog__text(values.proargnames)
        } , proargdefaults = ${
          values.proargdefaults === undefined
            ? sql("proargdefaults")
            : typed.pg_catalog_pg_node_tree(values.proargdefaults)
        } , protrftypes = ${
          values.protrftypes === undefined
            ? sql("protrftypes")
            : typed.pg_catalog__oid(values.protrftypes)
        } , prosrc = ${
          values.prosrc === undefined
            ? sql("prosrc")
            : typed.pg_catalog_text(values.prosrc)
        } , probin = ${
          values.probin === undefined
            ? sql("probin")
            : typed.pg_catalog_text(values.probin)
        } , prosqlbody = ${
          values.prosqlbody === undefined
            ? sql("prosqlbody")
            : typed.pg_catalog_pg_node_tree(values.prosqlbody)
        } , proconfig = ${
          values.proconfig === undefined
            ? sql("proconfig")
            : typed.pg_catalog__text(values.proconfig)
        } , proacl = ${
          values.proacl === undefined
            ? sql("proacl")
            : typed.pg_catalog__aclitem(values.proacl)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,proname,pronamespace,proowner,prolang,procost,prorows,provariadic,prosupport,prokind,prosecdef,proleakproof,proisstrict,proretset,provolatile,proparallel,pronargs,pronargdefaults,prorettype,proargtypes,proallargtypes,proargmodes,proargnames,proargdefaults,protrftypes,prosrc,probin,prosqlbody,proconfig,proacl`;

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
      async updateByPronameProargtypesPronamespace(
        parameters: PgCatalog.Tables.PgProc.ByPronameProargtypesPronamespace,
        values: Partial<PgCatalog.PgProc>,
      ): Promise<PgCatalog.PgProc> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_proc SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , proname = ${
          values.proname === undefined
            ? sql("proname")
            : typed.pg_catalog_name(values.proname)
        } , pronamespace = ${
          values.pronamespace === undefined
            ? sql("pronamespace")
            : typed.pg_catalog_oid(values.pronamespace)
        } , proowner = ${
          values.proowner === undefined
            ? sql("proowner")
            : typed.pg_catalog_oid(values.proowner)
        } , prolang = ${
          values.prolang === undefined
            ? sql("prolang")
            : typed.pg_catalog_oid(values.prolang)
        } , procost = ${
          values.procost === undefined
            ? sql("procost")
            : typed.pg_catalog_float4(values.procost)
        } , prorows = ${
          values.prorows === undefined
            ? sql("prorows")
            : typed.pg_catalog_float4(values.prorows)
        } , provariadic = ${
          values.provariadic === undefined
            ? sql("provariadic")
            : typed.pg_catalog_oid(values.provariadic)
        } , prosupport = ${
          values.prosupport === undefined
            ? sql("prosupport")
            : typed.pg_catalog_regproc(values.prosupport)
        } , prokind = ${
          values.prokind === undefined
            ? sql("prokind")
            : typed.pg_catalog_char(values.prokind)
        } , prosecdef = ${
          values.prosecdef === undefined
            ? sql("prosecdef")
            : typed.pg_catalog_bool(values.prosecdef)
        } , proleakproof = ${
          values.proleakproof === undefined
            ? sql("proleakproof")
            : typed.pg_catalog_bool(values.proleakproof)
        } , proisstrict = ${
          values.proisstrict === undefined
            ? sql("proisstrict")
            : typed.pg_catalog_bool(values.proisstrict)
        } , proretset = ${
          values.proretset === undefined
            ? sql("proretset")
            : typed.pg_catalog_bool(values.proretset)
        } , provolatile = ${
          values.provolatile === undefined
            ? sql("provolatile")
            : typed.pg_catalog_char(values.provolatile)
        } , proparallel = ${
          values.proparallel === undefined
            ? sql("proparallel")
            : typed.pg_catalog_char(values.proparallel)
        } , pronargs = ${
          values.pronargs === undefined
            ? sql("pronargs")
            : typed.pg_catalog_int2(values.pronargs)
        } , pronargdefaults = ${
          values.pronargdefaults === undefined
            ? sql("pronargdefaults")
            : typed.pg_catalog_int2(values.pronargdefaults)
        } , prorettype = ${
          values.prorettype === undefined
            ? sql("prorettype")
            : typed.pg_catalog_oid(values.prorettype)
        } , proargtypes = ${
          values.proargtypes === undefined
            ? sql("proargtypes")
            : typed.pg_catalog_oidvector(values.proargtypes)
        } , proallargtypes = ${
          values.proallargtypes === undefined
            ? sql("proallargtypes")
            : typed.pg_catalog__oid(values.proallargtypes)
        } , proargmodes = ${
          values.proargmodes === undefined
            ? sql("proargmodes")
            : typed.pg_catalog__char(values.proargmodes)
        } , proargnames = ${
          values.proargnames === undefined
            ? sql("proargnames")
            : typed.pg_catalog__text(values.proargnames)
        } , proargdefaults = ${
          values.proargdefaults === undefined
            ? sql("proargdefaults")
            : typed.pg_catalog_pg_node_tree(values.proargdefaults)
        } , protrftypes = ${
          values.protrftypes === undefined
            ? sql("protrftypes")
            : typed.pg_catalog__oid(values.protrftypes)
        } , prosrc = ${
          values.prosrc === undefined
            ? sql("prosrc")
            : typed.pg_catalog_text(values.prosrc)
        } , probin = ${
          values.probin === undefined
            ? sql("probin")
            : typed.pg_catalog_text(values.probin)
        } , prosqlbody = ${
          values.prosqlbody === undefined
            ? sql("prosqlbody")
            : typed.pg_catalog_pg_node_tree(values.prosqlbody)
        } , proconfig = ${
          values.proconfig === undefined
            ? sql("proconfig")
            : typed.pg_catalog__text(values.proconfig)
        } , proacl = ${
          values.proacl === undefined
            ? sql("proacl")
            : typed.pg_catalog__aclitem(values.proacl)
        } WHERE proname = ${
          parameters.proname === undefined
            ? sql("proname")
            : typed.pg_catalog_cstring(parameters.proname)
        } AND proargtypes = ${
          parameters.proargtypes === undefined
            ? sql("proargtypes")
            : typed.pg_catalog_oidvector(parameters.proargtypes)
        } AND pronamespace = ${
          parameters.pronamespace === undefined
            ? sql("pronamespace")
            : typed.pg_catalog_oid(parameters.pronamespace)
        } RETURNING oid,proname,pronamespace,proowner,prolang,procost,prorows,provariadic,prosupport,prokind,prosecdef,proleakproof,proisstrict,proretset,provolatile,proparallel,pronargs,pronargdefaults,prorettype,proargtypes,proallargtypes,proargmodes,proargnames,proargdefaults,protrftypes,prosrc,probin,prosqlbody,proconfig,proacl`;

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

      async byOid(
        parameters: PgCatalog.Tables.PgClass.ByOid,
      ): Promise<PgCatalog.PgClass> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,relname,relnamespace,reltype,reloftype,relowner,relam,relfilenode,reltablespace,relpages,reltuples,relallvisible,reltoastrelid,relhasindex,relisshared,relpersistence,relkind,relnatts,relchecks,relhasrules,relhastriggers,relhassubclass,relrowsecurity,relforcerowsecurity,relispopulated,relreplident,relispartition,relrewrite,relfrozenxid,relminmxid,relacl,reloptions,relpartbound FROM pg_catalog.pg_class WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgClass> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,relname,relnamespace,reltype,reloftype,relowner,relam,relfilenode,reltablespace,relpages,reltuples,relallvisible,reltoastrelid,relhasindex,relisshared,relpersistence,relkind,relnatts,relchecks,relhasrules,relhastriggers,relhassubclass,relrowsecurity,relforcerowsecurity,relispopulated,relreplident,relispartition,relrewrite,relfrozenxid,relminmxid,relacl,reloptions,relpartbound FROM pg_catalog.pg_class WHERE relname = ${
            parameters.relname === undefined
              ? sql("relname")
              : typed.pg_catalog_cstring(parameters.relname)
          } AND relnamespace = ${
            parameters.relnamespace === undefined
              ? sql("relnamespace")
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
      ): Promise<PgCatalog.PgClass[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,relname,relnamespace,reltype,reloftype,relowner,relam,relfilenode,reltablespace,relpages,reltuples,relallvisible,reltoastrelid,relhasindex,relisshared,relpersistence,relkind,relnatts,relchecks,relhasrules,relhastriggers,relhassubclass,relrowsecurity,relforcerowsecurity,relispopulated,relreplident,relispartition,relrewrite,relfrozenxid,relminmxid,relacl,reloptions,relpartbound FROM pg_catalog.pg_class WHERE reltablespace = ${
            parameters.reltablespace === undefined
              ? sql("reltablespace")
              : typed.pg_catalog_oid(parameters.reltablespace)
          } AND relfilenode = ${
            parameters.relfilenode === undefined
              ? sql("relfilenode")
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

      async deleteByOid(
        parameters: PgCatalog.Tables.PgClass.ByOid,
      ): Promise<PgCatalog.PgClass> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_class WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgClass> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_class WHERE relname = ${
            parameters.relname === undefined
              ? sql("relname")
              : typed.pg_catalog_cstring(parameters.relname)
          } AND relnamespace = ${
            parameters.relnamespace === undefined
              ? sql("relnamespace")
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
      ): Promise<PgCatalog.PgClass[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_class WHERE reltablespace = ${
            parameters.reltablespace === undefined
              ? sql("reltablespace")
              : typed.pg_catalog_oid(parameters.reltablespace)
          } AND relfilenode = ${
            parameters.relfilenode === undefined
              ? sql("relfilenode")
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

      async updateByOid(
        parameters: PgCatalog.Tables.PgClass.ByOid,
        values: Partial<PgCatalog.PgClass>,
      ): Promise<PgCatalog.PgClass> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_class SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , relname = ${
          values.relname === undefined
            ? sql("relname")
            : typed.pg_catalog_name(values.relname)
        } , relnamespace = ${
          values.relnamespace === undefined
            ? sql("relnamespace")
            : typed.pg_catalog_oid(values.relnamespace)
        } , reltype = ${
          values.reltype === undefined
            ? sql("reltype")
            : typed.pg_catalog_oid(values.reltype)
        } , reloftype = ${
          values.reloftype === undefined
            ? sql("reloftype")
            : typed.pg_catalog_oid(values.reloftype)
        } , relowner = ${
          values.relowner === undefined
            ? sql("relowner")
            : typed.pg_catalog_oid(values.relowner)
        } , relam = ${
          values.relam === undefined
            ? sql("relam")
            : typed.pg_catalog_oid(values.relam)
        } , relfilenode = ${
          values.relfilenode === undefined
            ? sql("relfilenode")
            : typed.pg_catalog_oid(values.relfilenode)
        } , reltablespace = ${
          values.reltablespace === undefined
            ? sql("reltablespace")
            : typed.pg_catalog_oid(values.reltablespace)
        } , relpages = ${
          values.relpages === undefined
            ? sql("relpages")
            : typed.pg_catalog_int4(values.relpages)
        } , reltuples = ${
          values.reltuples === undefined
            ? sql("reltuples")
            : typed.pg_catalog_float4(values.reltuples)
        } , relallvisible = ${
          values.relallvisible === undefined
            ? sql("relallvisible")
            : typed.pg_catalog_int4(values.relallvisible)
        } , reltoastrelid = ${
          values.reltoastrelid === undefined
            ? sql("reltoastrelid")
            : typed.pg_catalog_oid(values.reltoastrelid)
        } , relhasindex = ${
          values.relhasindex === undefined
            ? sql("relhasindex")
            : typed.pg_catalog_bool(values.relhasindex)
        } , relisshared = ${
          values.relisshared === undefined
            ? sql("relisshared")
            : typed.pg_catalog_bool(values.relisshared)
        } , relpersistence = ${
          values.relpersistence === undefined
            ? sql("relpersistence")
            : typed.pg_catalog_char(values.relpersistence)
        } , relkind = ${
          values.relkind === undefined
            ? sql("relkind")
            : typed.pg_catalog_char(values.relkind)
        } , relnatts = ${
          values.relnatts === undefined
            ? sql("relnatts")
            : typed.pg_catalog_int2(values.relnatts)
        } , relchecks = ${
          values.relchecks === undefined
            ? sql("relchecks")
            : typed.pg_catalog_int2(values.relchecks)
        } , relhasrules = ${
          values.relhasrules === undefined
            ? sql("relhasrules")
            : typed.pg_catalog_bool(values.relhasrules)
        } , relhastriggers = ${
          values.relhastriggers === undefined
            ? sql("relhastriggers")
            : typed.pg_catalog_bool(values.relhastriggers)
        } , relhassubclass = ${
          values.relhassubclass === undefined
            ? sql("relhassubclass")
            : typed.pg_catalog_bool(values.relhassubclass)
        } , relrowsecurity = ${
          values.relrowsecurity === undefined
            ? sql("relrowsecurity")
            : typed.pg_catalog_bool(values.relrowsecurity)
        } , relforcerowsecurity = ${
          values.relforcerowsecurity === undefined
            ? sql("relforcerowsecurity")
            : typed.pg_catalog_bool(values.relforcerowsecurity)
        } , relispopulated = ${
          values.relispopulated === undefined
            ? sql("relispopulated")
            : typed.pg_catalog_bool(values.relispopulated)
        } , relreplident = ${
          values.relreplident === undefined
            ? sql("relreplident")
            : typed.pg_catalog_char(values.relreplident)
        } , relispartition = ${
          values.relispartition === undefined
            ? sql("relispartition")
            : typed.pg_catalog_bool(values.relispartition)
        } , relrewrite = ${
          values.relrewrite === undefined
            ? sql("relrewrite")
            : typed.pg_catalog_oid(values.relrewrite)
        } , relfrozenxid = ${
          values.relfrozenxid === undefined
            ? sql("relfrozenxid")
            : typed.pg_catalog_xid(values.relfrozenxid)
        } , relminmxid = ${
          values.relminmxid === undefined
            ? sql("relminmxid")
            : typed.pg_catalog_xid(values.relminmxid)
        } , relacl = ${
          values.relacl === undefined
            ? sql("relacl")
            : typed.pg_catalog__aclitem(values.relacl)
        } , reloptions = ${
          values.reloptions === undefined
            ? sql("reloptions")
            : typed.pg_catalog__text(values.reloptions)
        } , relpartbound = ${
          values.relpartbound === undefined
            ? sql("relpartbound")
            : typed.pg_catalog_pg_node_tree(values.relpartbound)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,relname,relnamespace,reltype,reloftype,relowner,relam,relfilenode,reltablespace,relpages,reltuples,relallvisible,reltoastrelid,relhasindex,relisshared,relpersistence,relkind,relnatts,relchecks,relhasrules,relhastriggers,relhassubclass,relrowsecurity,relforcerowsecurity,relispopulated,relreplident,relispartition,relrewrite,relfrozenxid,relminmxid,relacl,reloptions,relpartbound`;

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
      async updateByRelnameRelnamespace(
        parameters: PgCatalog.Tables.PgClass.ByRelnameRelnamespace,
        values: Partial<PgCatalog.PgClass>,
      ): Promise<PgCatalog.PgClass> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_class SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , relname = ${
          values.relname === undefined
            ? sql("relname")
            : typed.pg_catalog_name(values.relname)
        } , relnamespace = ${
          values.relnamespace === undefined
            ? sql("relnamespace")
            : typed.pg_catalog_oid(values.relnamespace)
        } , reltype = ${
          values.reltype === undefined
            ? sql("reltype")
            : typed.pg_catalog_oid(values.reltype)
        } , reloftype = ${
          values.reloftype === undefined
            ? sql("reloftype")
            : typed.pg_catalog_oid(values.reloftype)
        } , relowner = ${
          values.relowner === undefined
            ? sql("relowner")
            : typed.pg_catalog_oid(values.relowner)
        } , relam = ${
          values.relam === undefined
            ? sql("relam")
            : typed.pg_catalog_oid(values.relam)
        } , relfilenode = ${
          values.relfilenode === undefined
            ? sql("relfilenode")
            : typed.pg_catalog_oid(values.relfilenode)
        } , reltablespace = ${
          values.reltablespace === undefined
            ? sql("reltablespace")
            : typed.pg_catalog_oid(values.reltablespace)
        } , relpages = ${
          values.relpages === undefined
            ? sql("relpages")
            : typed.pg_catalog_int4(values.relpages)
        } , reltuples = ${
          values.reltuples === undefined
            ? sql("reltuples")
            : typed.pg_catalog_float4(values.reltuples)
        } , relallvisible = ${
          values.relallvisible === undefined
            ? sql("relallvisible")
            : typed.pg_catalog_int4(values.relallvisible)
        } , reltoastrelid = ${
          values.reltoastrelid === undefined
            ? sql("reltoastrelid")
            : typed.pg_catalog_oid(values.reltoastrelid)
        } , relhasindex = ${
          values.relhasindex === undefined
            ? sql("relhasindex")
            : typed.pg_catalog_bool(values.relhasindex)
        } , relisshared = ${
          values.relisshared === undefined
            ? sql("relisshared")
            : typed.pg_catalog_bool(values.relisshared)
        } , relpersistence = ${
          values.relpersistence === undefined
            ? sql("relpersistence")
            : typed.pg_catalog_char(values.relpersistence)
        } , relkind = ${
          values.relkind === undefined
            ? sql("relkind")
            : typed.pg_catalog_char(values.relkind)
        } , relnatts = ${
          values.relnatts === undefined
            ? sql("relnatts")
            : typed.pg_catalog_int2(values.relnatts)
        } , relchecks = ${
          values.relchecks === undefined
            ? sql("relchecks")
            : typed.pg_catalog_int2(values.relchecks)
        } , relhasrules = ${
          values.relhasrules === undefined
            ? sql("relhasrules")
            : typed.pg_catalog_bool(values.relhasrules)
        } , relhastriggers = ${
          values.relhastriggers === undefined
            ? sql("relhastriggers")
            : typed.pg_catalog_bool(values.relhastriggers)
        } , relhassubclass = ${
          values.relhassubclass === undefined
            ? sql("relhassubclass")
            : typed.pg_catalog_bool(values.relhassubclass)
        } , relrowsecurity = ${
          values.relrowsecurity === undefined
            ? sql("relrowsecurity")
            : typed.pg_catalog_bool(values.relrowsecurity)
        } , relforcerowsecurity = ${
          values.relforcerowsecurity === undefined
            ? sql("relforcerowsecurity")
            : typed.pg_catalog_bool(values.relforcerowsecurity)
        } , relispopulated = ${
          values.relispopulated === undefined
            ? sql("relispopulated")
            : typed.pg_catalog_bool(values.relispopulated)
        } , relreplident = ${
          values.relreplident === undefined
            ? sql("relreplident")
            : typed.pg_catalog_char(values.relreplident)
        } , relispartition = ${
          values.relispartition === undefined
            ? sql("relispartition")
            : typed.pg_catalog_bool(values.relispartition)
        } , relrewrite = ${
          values.relrewrite === undefined
            ? sql("relrewrite")
            : typed.pg_catalog_oid(values.relrewrite)
        } , relfrozenxid = ${
          values.relfrozenxid === undefined
            ? sql("relfrozenxid")
            : typed.pg_catalog_xid(values.relfrozenxid)
        } , relminmxid = ${
          values.relminmxid === undefined
            ? sql("relminmxid")
            : typed.pg_catalog_xid(values.relminmxid)
        } , relacl = ${
          values.relacl === undefined
            ? sql("relacl")
            : typed.pg_catalog__aclitem(values.relacl)
        } , reloptions = ${
          values.reloptions === undefined
            ? sql("reloptions")
            : typed.pg_catalog__text(values.reloptions)
        } , relpartbound = ${
          values.relpartbound === undefined
            ? sql("relpartbound")
            : typed.pg_catalog_pg_node_tree(values.relpartbound)
        } WHERE relname = ${
          parameters.relname === undefined
            ? sql("relname")
            : typed.pg_catalog_cstring(parameters.relname)
        } AND relnamespace = ${
          parameters.relnamespace === undefined
            ? sql("relnamespace")
            : typed.pg_catalog_oid(parameters.relnamespace)
        } RETURNING oid,relname,relnamespace,reltype,reloftype,relowner,relam,relfilenode,reltablespace,relpages,reltuples,relallvisible,reltoastrelid,relhasindex,relisshared,relpersistence,relkind,relnatts,relchecks,relhasrules,relhastriggers,relhassubclass,relrowsecurity,relforcerowsecurity,relispopulated,relreplident,relispartition,relrewrite,relfrozenxid,relminmxid,relacl,reloptions,relpartbound`;

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
      async updateByReltablespaceRelfilenode(
        parameters: PgCatalog.Tables.PgClass.ByReltablespaceRelfilenode,
        values: Partial<PgCatalog.PgClass>,
      ): Promise<PgCatalog.PgClass[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_class SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , relname = ${
          values.relname === undefined
            ? sql("relname")
            : typed.pg_catalog_name(values.relname)
        } , relnamespace = ${
          values.relnamespace === undefined
            ? sql("relnamespace")
            : typed.pg_catalog_oid(values.relnamespace)
        } , reltype = ${
          values.reltype === undefined
            ? sql("reltype")
            : typed.pg_catalog_oid(values.reltype)
        } , reloftype = ${
          values.reloftype === undefined
            ? sql("reloftype")
            : typed.pg_catalog_oid(values.reloftype)
        } , relowner = ${
          values.relowner === undefined
            ? sql("relowner")
            : typed.pg_catalog_oid(values.relowner)
        } , relam = ${
          values.relam === undefined
            ? sql("relam")
            : typed.pg_catalog_oid(values.relam)
        } , relfilenode = ${
          values.relfilenode === undefined
            ? sql("relfilenode")
            : typed.pg_catalog_oid(values.relfilenode)
        } , reltablespace = ${
          values.reltablespace === undefined
            ? sql("reltablespace")
            : typed.pg_catalog_oid(values.reltablespace)
        } , relpages = ${
          values.relpages === undefined
            ? sql("relpages")
            : typed.pg_catalog_int4(values.relpages)
        } , reltuples = ${
          values.reltuples === undefined
            ? sql("reltuples")
            : typed.pg_catalog_float4(values.reltuples)
        } , relallvisible = ${
          values.relallvisible === undefined
            ? sql("relallvisible")
            : typed.pg_catalog_int4(values.relallvisible)
        } , reltoastrelid = ${
          values.reltoastrelid === undefined
            ? sql("reltoastrelid")
            : typed.pg_catalog_oid(values.reltoastrelid)
        } , relhasindex = ${
          values.relhasindex === undefined
            ? sql("relhasindex")
            : typed.pg_catalog_bool(values.relhasindex)
        } , relisshared = ${
          values.relisshared === undefined
            ? sql("relisshared")
            : typed.pg_catalog_bool(values.relisshared)
        } , relpersistence = ${
          values.relpersistence === undefined
            ? sql("relpersistence")
            : typed.pg_catalog_char(values.relpersistence)
        } , relkind = ${
          values.relkind === undefined
            ? sql("relkind")
            : typed.pg_catalog_char(values.relkind)
        } , relnatts = ${
          values.relnatts === undefined
            ? sql("relnatts")
            : typed.pg_catalog_int2(values.relnatts)
        } , relchecks = ${
          values.relchecks === undefined
            ? sql("relchecks")
            : typed.pg_catalog_int2(values.relchecks)
        } , relhasrules = ${
          values.relhasrules === undefined
            ? sql("relhasrules")
            : typed.pg_catalog_bool(values.relhasrules)
        } , relhastriggers = ${
          values.relhastriggers === undefined
            ? sql("relhastriggers")
            : typed.pg_catalog_bool(values.relhastriggers)
        } , relhassubclass = ${
          values.relhassubclass === undefined
            ? sql("relhassubclass")
            : typed.pg_catalog_bool(values.relhassubclass)
        } , relrowsecurity = ${
          values.relrowsecurity === undefined
            ? sql("relrowsecurity")
            : typed.pg_catalog_bool(values.relrowsecurity)
        } , relforcerowsecurity = ${
          values.relforcerowsecurity === undefined
            ? sql("relforcerowsecurity")
            : typed.pg_catalog_bool(values.relforcerowsecurity)
        } , relispopulated = ${
          values.relispopulated === undefined
            ? sql("relispopulated")
            : typed.pg_catalog_bool(values.relispopulated)
        } , relreplident = ${
          values.relreplident === undefined
            ? sql("relreplident")
            : typed.pg_catalog_char(values.relreplident)
        } , relispartition = ${
          values.relispartition === undefined
            ? sql("relispartition")
            : typed.pg_catalog_bool(values.relispartition)
        } , relrewrite = ${
          values.relrewrite === undefined
            ? sql("relrewrite")
            : typed.pg_catalog_oid(values.relrewrite)
        } , relfrozenxid = ${
          values.relfrozenxid === undefined
            ? sql("relfrozenxid")
            : typed.pg_catalog_xid(values.relfrozenxid)
        } , relminmxid = ${
          values.relminmxid === undefined
            ? sql("relminmxid")
            : typed.pg_catalog_xid(values.relminmxid)
        } , relacl = ${
          values.relacl === undefined
            ? sql("relacl")
            : typed.pg_catalog__aclitem(values.relacl)
        } , reloptions = ${
          values.reloptions === undefined
            ? sql("reloptions")
            : typed.pg_catalog__text(values.reloptions)
        } , relpartbound = ${
          values.relpartbound === undefined
            ? sql("relpartbound")
            : typed.pg_catalog_pg_node_tree(values.relpartbound)
        } WHERE reltablespace = ${
          parameters.reltablespace === undefined
            ? sql("reltablespace")
            : typed.pg_catalog_oid(parameters.reltablespace)
        } AND relfilenode = ${
          parameters.relfilenode === undefined
            ? sql("relfilenode")
            : typed.pg_catalog_oid(parameters.relfilenode)
        } RETURNING oid,relname,relnamespace,reltype,reloftype,relowner,relam,relfilenode,reltablespace,relpages,reltuples,relallvisible,reltoastrelid,relhasindex,relisshared,relpersistence,relkind,relnatts,relchecks,relhasrules,relhastriggers,relhassubclass,relrowsecurity,relforcerowsecurity,relispopulated,relreplident,relispartition,relrewrite,relfrozenxid,relminmxid,relacl,reloptions,relpartbound`;

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
      ): Promise<PgCatalog.PgAttrdef> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,adrelid,adnum,adbin FROM pg_catalog.pg_attrdef WHERE adrelid = ${
            parameters.adrelid === undefined
              ? sql("adrelid")
              : typed.pg_catalog_oid(parameters.adrelid)
          } AND adnum = ${
            parameters.adnum === undefined
              ? sql("adnum")
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
      async byOid(
        parameters: PgCatalog.Tables.PgAttrdef.ByOid,
      ): Promise<PgCatalog.PgAttrdef> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,adrelid,adnum,adbin FROM pg_catalog.pg_attrdef WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgAttrdef> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_attrdef WHERE adrelid = ${
            parameters.adrelid === undefined
              ? sql("adrelid")
              : typed.pg_catalog_oid(parameters.adrelid)
          } AND adnum = ${
            parameters.adnum === undefined
              ? sql("adnum")
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
      async deleteByOid(
        parameters: PgCatalog.Tables.PgAttrdef.ByOid,
      ): Promise<PgCatalog.PgAttrdef> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_attrdef WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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

      async updateByAdrelidAdnum(
        parameters: PgCatalog.Tables.PgAttrdef.ByAdrelidAdnum,
        values: Partial<PgCatalog.PgAttrdef>,
      ): Promise<PgCatalog.PgAttrdef> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_attrdef SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , adrelid = ${
          values.adrelid === undefined
            ? sql("adrelid")
            : typed.pg_catalog_oid(values.adrelid)
        } , adnum = ${
          values.adnum === undefined
            ? sql("adnum")
            : typed.pg_catalog_int2(values.adnum)
        } , adbin = ${
          values.adbin === undefined
            ? sql("adbin")
            : typed.pg_catalog_pg_node_tree(values.adbin)
        } WHERE adrelid = ${
          parameters.adrelid === undefined
            ? sql("adrelid")
            : typed.pg_catalog_oid(parameters.adrelid)
        } AND adnum = ${
          parameters.adnum === undefined
            ? sql("adnum")
            : typed.pg_catalog_int2(parameters.adnum)
        } RETURNING oid,adrelid,adnum,adbin`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          adrelid: undefinedIsNull(record.adrelid),
          adnum: undefinedIsNull(record.adnum),
          adbin: undefinedIsNull(record.adbin),
        }));
        return results[0];
      }
      async updateByOid(
        parameters: PgCatalog.Tables.PgAttrdef.ByOid,
        values: Partial<PgCatalog.PgAttrdef>,
      ): Promise<PgCatalog.PgAttrdef> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_attrdef SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , adrelid = ${
          values.adrelid === undefined
            ? sql("adrelid")
            : typed.pg_catalog_oid(values.adrelid)
        } , adnum = ${
          values.adnum === undefined
            ? sql("adnum")
            : typed.pg_catalog_int2(values.adnum)
        } , adbin = ${
          values.adbin === undefined
            ? sql("adbin")
            : typed.pg_catalog_pg_node_tree(values.adbin)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,adrelid,adnum,adbin`;

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
      ): Promise<PgCatalog.PgConstraint[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,conname,connamespace,contype,condeferrable,condeferred,convalidated,conrelid,contypid,conindid,conparentid,confrelid,confupdtype,confdeltype,confmatchtype,conislocal,coninhcount,connoinherit,conkey,confkey,conpfeqop,conppeqop,conffeqop,confdelsetcols,conexclop,conbin FROM pg_catalog.pg_constraint WHERE conname = ${
            parameters.conname === undefined
              ? sql("conname")
              : typed.pg_catalog_cstring(parameters.conname)
          } AND connamespace = ${
            parameters.connamespace === undefined
              ? sql("connamespace")
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
      ): Promise<PgCatalog.PgConstraint[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,conname,connamespace,contype,condeferrable,condeferred,convalidated,conrelid,contypid,conindid,conparentid,confrelid,confupdtype,confdeltype,confmatchtype,conislocal,coninhcount,connoinherit,conkey,confkey,conpfeqop,conppeqop,conffeqop,confdelsetcols,conexclop,conbin FROM pg_catalog.pg_constraint WHERE conparentid = ${
            parameters.conparentid === undefined
              ? sql("conparentid")
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
      ): Promise<PgCatalog.PgConstraint> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,conname,connamespace,contype,condeferrable,condeferred,convalidated,conrelid,contypid,conindid,conparentid,confrelid,confupdtype,confdeltype,confmatchtype,conislocal,coninhcount,connoinherit,conkey,confkey,conpfeqop,conppeqop,conffeqop,confdelsetcols,conexclop,conbin FROM pg_catalog.pg_constraint WHERE conrelid = ${
            parameters.conrelid === undefined
              ? sql("conrelid")
              : typed.pg_catalog_oid(parameters.conrelid)
          } AND contypid = ${
            parameters.contypid === undefined
              ? sql("contypid")
              : typed.pg_catalog_oid(parameters.contypid)
          } AND conname = ${
            parameters.conname === undefined
              ? sql("conname")
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
      async byContypid(
        parameters: PgCatalog.Tables.PgConstraint.ByContypid,
      ): Promise<PgCatalog.PgConstraint[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,conname,connamespace,contype,condeferrable,condeferred,convalidated,conrelid,contypid,conindid,conparentid,confrelid,confupdtype,confdeltype,confmatchtype,conislocal,coninhcount,connoinherit,conkey,confkey,conpfeqop,conppeqop,conffeqop,confdelsetcols,conexclop,conbin FROM pg_catalog.pg_constraint WHERE contypid = ${
            parameters.contypid === undefined
              ? sql("contypid")
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
      async byOid(
        parameters: PgCatalog.Tables.PgConstraint.ByOid,
      ): Promise<PgCatalog.PgConstraint> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,conname,connamespace,contype,condeferrable,condeferred,convalidated,conrelid,contypid,conindid,conparentid,confrelid,confupdtype,confdeltype,confmatchtype,conislocal,coninhcount,connoinherit,conkey,confkey,conpfeqop,conppeqop,conffeqop,confdelsetcols,conexclop,conbin FROM pg_catalog.pg_constraint WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgConstraint[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_constraint WHERE conname = ${
            parameters.conname === undefined
              ? sql("conname")
              : typed.pg_catalog_cstring(parameters.conname)
          } AND connamespace = ${
            parameters.connamespace === undefined
              ? sql("connamespace")
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
      ): Promise<PgCatalog.PgConstraint[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_constraint WHERE conparentid = ${
            parameters.conparentid === undefined
              ? sql("conparentid")
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
      ): Promise<PgCatalog.PgConstraint> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_constraint WHERE conrelid = ${
            parameters.conrelid === undefined
              ? sql("conrelid")
              : typed.pg_catalog_oid(parameters.conrelid)
          } AND contypid = ${
            parameters.contypid === undefined
              ? sql("contypid")
              : typed.pg_catalog_oid(parameters.contypid)
          } AND conname = ${
            parameters.conname === undefined
              ? sql("conname")
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
      ): Promise<PgCatalog.PgConstraint[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_constraint WHERE contypid = ${
            parameters.contypid === undefined
              ? sql("contypid")
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
      async deleteByOid(
        parameters: PgCatalog.Tables.PgConstraint.ByOid,
      ): Promise<PgCatalog.PgConstraint> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_constraint WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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

      async updateByConnameConnamespace(
        parameters: PgCatalog.Tables.PgConstraint.ByConnameConnamespace,
        values: Partial<PgCatalog.PgConstraint>,
      ): Promise<PgCatalog.PgConstraint[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_constraint SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , conname = ${
          values.conname === undefined
            ? sql("conname")
            : typed.pg_catalog_name(values.conname)
        } , connamespace = ${
          values.connamespace === undefined
            ? sql("connamespace")
            : typed.pg_catalog_oid(values.connamespace)
        } , contype = ${
          values.contype === undefined
            ? sql("contype")
            : typed.pg_catalog_char(values.contype)
        } , condeferrable = ${
          values.condeferrable === undefined
            ? sql("condeferrable")
            : typed.pg_catalog_bool(values.condeferrable)
        } , condeferred = ${
          values.condeferred === undefined
            ? sql("condeferred")
            : typed.pg_catalog_bool(values.condeferred)
        } , convalidated = ${
          values.convalidated === undefined
            ? sql("convalidated")
            : typed.pg_catalog_bool(values.convalidated)
        } , conrelid = ${
          values.conrelid === undefined
            ? sql("conrelid")
            : typed.pg_catalog_oid(values.conrelid)
        } , contypid = ${
          values.contypid === undefined
            ? sql("contypid")
            : typed.pg_catalog_oid(values.contypid)
        } , conindid = ${
          values.conindid === undefined
            ? sql("conindid")
            : typed.pg_catalog_oid(values.conindid)
        } , conparentid = ${
          values.conparentid === undefined
            ? sql("conparentid")
            : typed.pg_catalog_oid(values.conparentid)
        } , confrelid = ${
          values.confrelid === undefined
            ? sql("confrelid")
            : typed.pg_catalog_oid(values.confrelid)
        } , confupdtype = ${
          values.confupdtype === undefined
            ? sql("confupdtype")
            : typed.pg_catalog_char(values.confupdtype)
        } , confdeltype = ${
          values.confdeltype === undefined
            ? sql("confdeltype")
            : typed.pg_catalog_char(values.confdeltype)
        } , confmatchtype = ${
          values.confmatchtype === undefined
            ? sql("confmatchtype")
            : typed.pg_catalog_char(values.confmatchtype)
        } , conislocal = ${
          values.conislocal === undefined
            ? sql("conislocal")
            : typed.pg_catalog_bool(values.conislocal)
        } , coninhcount = ${
          values.coninhcount === undefined
            ? sql("coninhcount")
            : typed.pg_catalog_int2(values.coninhcount)
        } , connoinherit = ${
          values.connoinherit === undefined
            ? sql("connoinherit")
            : typed.pg_catalog_bool(values.connoinherit)
        } , conkey = ${
          values.conkey === undefined
            ? sql("conkey")
            : typed.pg_catalog__int2(values.conkey)
        } , confkey = ${
          values.confkey === undefined
            ? sql("confkey")
            : typed.pg_catalog__int2(values.confkey)
        } , conpfeqop = ${
          values.conpfeqop === undefined
            ? sql("conpfeqop")
            : typed.pg_catalog__oid(values.conpfeqop)
        } , conppeqop = ${
          values.conppeqop === undefined
            ? sql("conppeqop")
            : typed.pg_catalog__oid(values.conppeqop)
        } , conffeqop = ${
          values.conffeqop === undefined
            ? sql("conffeqop")
            : typed.pg_catalog__oid(values.conffeqop)
        } , confdelsetcols = ${
          values.confdelsetcols === undefined
            ? sql("confdelsetcols")
            : typed.pg_catalog__int2(values.confdelsetcols)
        } , conexclop = ${
          values.conexclop === undefined
            ? sql("conexclop")
            : typed.pg_catalog__oid(values.conexclop)
        } , conbin = ${
          values.conbin === undefined
            ? sql("conbin")
            : typed.pg_catalog_pg_node_tree(values.conbin)
        } WHERE conname = ${
          parameters.conname === undefined
            ? sql("conname")
            : typed.pg_catalog_cstring(parameters.conname)
        } AND connamespace = ${
          parameters.connamespace === undefined
            ? sql("connamespace")
            : typed.pg_catalog_oid(parameters.connamespace)
        } RETURNING oid,conname,connamespace,contype,condeferrable,condeferred,convalidated,conrelid,contypid,conindid,conparentid,confrelid,confupdtype,confdeltype,confmatchtype,conislocal,coninhcount,connoinherit,conkey,confkey,conpfeqop,conppeqop,conffeqop,confdelsetcols,conexclop,conbin`;

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
      async updateByConparentid(
        parameters: PgCatalog.Tables.PgConstraint.ByConparentid,
        values: Partial<PgCatalog.PgConstraint>,
      ): Promise<PgCatalog.PgConstraint[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_constraint SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , conname = ${
          values.conname === undefined
            ? sql("conname")
            : typed.pg_catalog_name(values.conname)
        } , connamespace = ${
          values.connamespace === undefined
            ? sql("connamespace")
            : typed.pg_catalog_oid(values.connamespace)
        } , contype = ${
          values.contype === undefined
            ? sql("contype")
            : typed.pg_catalog_char(values.contype)
        } , condeferrable = ${
          values.condeferrable === undefined
            ? sql("condeferrable")
            : typed.pg_catalog_bool(values.condeferrable)
        } , condeferred = ${
          values.condeferred === undefined
            ? sql("condeferred")
            : typed.pg_catalog_bool(values.condeferred)
        } , convalidated = ${
          values.convalidated === undefined
            ? sql("convalidated")
            : typed.pg_catalog_bool(values.convalidated)
        } , conrelid = ${
          values.conrelid === undefined
            ? sql("conrelid")
            : typed.pg_catalog_oid(values.conrelid)
        } , contypid = ${
          values.contypid === undefined
            ? sql("contypid")
            : typed.pg_catalog_oid(values.contypid)
        } , conindid = ${
          values.conindid === undefined
            ? sql("conindid")
            : typed.pg_catalog_oid(values.conindid)
        } , conparentid = ${
          values.conparentid === undefined
            ? sql("conparentid")
            : typed.pg_catalog_oid(values.conparentid)
        } , confrelid = ${
          values.confrelid === undefined
            ? sql("confrelid")
            : typed.pg_catalog_oid(values.confrelid)
        } , confupdtype = ${
          values.confupdtype === undefined
            ? sql("confupdtype")
            : typed.pg_catalog_char(values.confupdtype)
        } , confdeltype = ${
          values.confdeltype === undefined
            ? sql("confdeltype")
            : typed.pg_catalog_char(values.confdeltype)
        } , confmatchtype = ${
          values.confmatchtype === undefined
            ? sql("confmatchtype")
            : typed.pg_catalog_char(values.confmatchtype)
        } , conislocal = ${
          values.conislocal === undefined
            ? sql("conislocal")
            : typed.pg_catalog_bool(values.conislocal)
        } , coninhcount = ${
          values.coninhcount === undefined
            ? sql("coninhcount")
            : typed.pg_catalog_int2(values.coninhcount)
        } , connoinherit = ${
          values.connoinherit === undefined
            ? sql("connoinherit")
            : typed.pg_catalog_bool(values.connoinherit)
        } , conkey = ${
          values.conkey === undefined
            ? sql("conkey")
            : typed.pg_catalog__int2(values.conkey)
        } , confkey = ${
          values.confkey === undefined
            ? sql("confkey")
            : typed.pg_catalog__int2(values.confkey)
        } , conpfeqop = ${
          values.conpfeqop === undefined
            ? sql("conpfeqop")
            : typed.pg_catalog__oid(values.conpfeqop)
        } , conppeqop = ${
          values.conppeqop === undefined
            ? sql("conppeqop")
            : typed.pg_catalog__oid(values.conppeqop)
        } , conffeqop = ${
          values.conffeqop === undefined
            ? sql("conffeqop")
            : typed.pg_catalog__oid(values.conffeqop)
        } , confdelsetcols = ${
          values.confdelsetcols === undefined
            ? sql("confdelsetcols")
            : typed.pg_catalog__int2(values.confdelsetcols)
        } , conexclop = ${
          values.conexclop === undefined
            ? sql("conexclop")
            : typed.pg_catalog__oid(values.conexclop)
        } , conbin = ${
          values.conbin === undefined
            ? sql("conbin")
            : typed.pg_catalog_pg_node_tree(values.conbin)
        } WHERE conparentid = ${
          parameters.conparentid === undefined
            ? sql("conparentid")
            : typed.pg_catalog_oid(parameters.conparentid)
        } RETURNING oid,conname,connamespace,contype,condeferrable,condeferred,convalidated,conrelid,contypid,conindid,conparentid,confrelid,confupdtype,confdeltype,confmatchtype,conislocal,coninhcount,connoinherit,conkey,confkey,conpfeqop,conppeqop,conffeqop,confdelsetcols,conexclop,conbin`;

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
      async updateByConrelidContypidConname(
        parameters: PgCatalog.Tables.PgConstraint.ByConrelidContypidConname,
        values: Partial<PgCatalog.PgConstraint>,
      ): Promise<PgCatalog.PgConstraint> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_constraint SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , conname = ${
          values.conname === undefined
            ? sql("conname")
            : typed.pg_catalog_name(values.conname)
        } , connamespace = ${
          values.connamespace === undefined
            ? sql("connamespace")
            : typed.pg_catalog_oid(values.connamespace)
        } , contype = ${
          values.contype === undefined
            ? sql("contype")
            : typed.pg_catalog_char(values.contype)
        } , condeferrable = ${
          values.condeferrable === undefined
            ? sql("condeferrable")
            : typed.pg_catalog_bool(values.condeferrable)
        } , condeferred = ${
          values.condeferred === undefined
            ? sql("condeferred")
            : typed.pg_catalog_bool(values.condeferred)
        } , convalidated = ${
          values.convalidated === undefined
            ? sql("convalidated")
            : typed.pg_catalog_bool(values.convalidated)
        } , conrelid = ${
          values.conrelid === undefined
            ? sql("conrelid")
            : typed.pg_catalog_oid(values.conrelid)
        } , contypid = ${
          values.contypid === undefined
            ? sql("contypid")
            : typed.pg_catalog_oid(values.contypid)
        } , conindid = ${
          values.conindid === undefined
            ? sql("conindid")
            : typed.pg_catalog_oid(values.conindid)
        } , conparentid = ${
          values.conparentid === undefined
            ? sql("conparentid")
            : typed.pg_catalog_oid(values.conparentid)
        } , confrelid = ${
          values.confrelid === undefined
            ? sql("confrelid")
            : typed.pg_catalog_oid(values.confrelid)
        } , confupdtype = ${
          values.confupdtype === undefined
            ? sql("confupdtype")
            : typed.pg_catalog_char(values.confupdtype)
        } , confdeltype = ${
          values.confdeltype === undefined
            ? sql("confdeltype")
            : typed.pg_catalog_char(values.confdeltype)
        } , confmatchtype = ${
          values.confmatchtype === undefined
            ? sql("confmatchtype")
            : typed.pg_catalog_char(values.confmatchtype)
        } , conislocal = ${
          values.conislocal === undefined
            ? sql("conislocal")
            : typed.pg_catalog_bool(values.conislocal)
        } , coninhcount = ${
          values.coninhcount === undefined
            ? sql("coninhcount")
            : typed.pg_catalog_int2(values.coninhcount)
        } , connoinherit = ${
          values.connoinherit === undefined
            ? sql("connoinherit")
            : typed.pg_catalog_bool(values.connoinherit)
        } , conkey = ${
          values.conkey === undefined
            ? sql("conkey")
            : typed.pg_catalog__int2(values.conkey)
        } , confkey = ${
          values.confkey === undefined
            ? sql("confkey")
            : typed.pg_catalog__int2(values.confkey)
        } , conpfeqop = ${
          values.conpfeqop === undefined
            ? sql("conpfeqop")
            : typed.pg_catalog__oid(values.conpfeqop)
        } , conppeqop = ${
          values.conppeqop === undefined
            ? sql("conppeqop")
            : typed.pg_catalog__oid(values.conppeqop)
        } , conffeqop = ${
          values.conffeqop === undefined
            ? sql("conffeqop")
            : typed.pg_catalog__oid(values.conffeqop)
        } , confdelsetcols = ${
          values.confdelsetcols === undefined
            ? sql("confdelsetcols")
            : typed.pg_catalog__int2(values.confdelsetcols)
        } , conexclop = ${
          values.conexclop === undefined
            ? sql("conexclop")
            : typed.pg_catalog__oid(values.conexclop)
        } , conbin = ${
          values.conbin === undefined
            ? sql("conbin")
            : typed.pg_catalog_pg_node_tree(values.conbin)
        } WHERE conrelid = ${
          parameters.conrelid === undefined
            ? sql("conrelid")
            : typed.pg_catalog_oid(parameters.conrelid)
        } AND contypid = ${
          parameters.contypid === undefined
            ? sql("contypid")
            : typed.pg_catalog_oid(parameters.contypid)
        } AND conname = ${
          parameters.conname === undefined
            ? sql("conname")
            : typed.pg_catalog_cstring(parameters.conname)
        } RETURNING oid,conname,connamespace,contype,condeferrable,condeferred,convalidated,conrelid,contypid,conindid,conparentid,confrelid,confupdtype,confdeltype,confmatchtype,conislocal,coninhcount,connoinherit,conkey,confkey,conpfeqop,conppeqop,conffeqop,confdelsetcols,conexclop,conbin`;

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
      async updateByContypid(
        parameters: PgCatalog.Tables.PgConstraint.ByContypid,
        values: Partial<PgCatalog.PgConstraint>,
      ): Promise<PgCatalog.PgConstraint[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_constraint SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , conname = ${
          values.conname === undefined
            ? sql("conname")
            : typed.pg_catalog_name(values.conname)
        } , connamespace = ${
          values.connamespace === undefined
            ? sql("connamespace")
            : typed.pg_catalog_oid(values.connamespace)
        } , contype = ${
          values.contype === undefined
            ? sql("contype")
            : typed.pg_catalog_char(values.contype)
        } , condeferrable = ${
          values.condeferrable === undefined
            ? sql("condeferrable")
            : typed.pg_catalog_bool(values.condeferrable)
        } , condeferred = ${
          values.condeferred === undefined
            ? sql("condeferred")
            : typed.pg_catalog_bool(values.condeferred)
        } , convalidated = ${
          values.convalidated === undefined
            ? sql("convalidated")
            : typed.pg_catalog_bool(values.convalidated)
        } , conrelid = ${
          values.conrelid === undefined
            ? sql("conrelid")
            : typed.pg_catalog_oid(values.conrelid)
        } , contypid = ${
          values.contypid === undefined
            ? sql("contypid")
            : typed.pg_catalog_oid(values.contypid)
        } , conindid = ${
          values.conindid === undefined
            ? sql("conindid")
            : typed.pg_catalog_oid(values.conindid)
        } , conparentid = ${
          values.conparentid === undefined
            ? sql("conparentid")
            : typed.pg_catalog_oid(values.conparentid)
        } , confrelid = ${
          values.confrelid === undefined
            ? sql("confrelid")
            : typed.pg_catalog_oid(values.confrelid)
        } , confupdtype = ${
          values.confupdtype === undefined
            ? sql("confupdtype")
            : typed.pg_catalog_char(values.confupdtype)
        } , confdeltype = ${
          values.confdeltype === undefined
            ? sql("confdeltype")
            : typed.pg_catalog_char(values.confdeltype)
        } , confmatchtype = ${
          values.confmatchtype === undefined
            ? sql("confmatchtype")
            : typed.pg_catalog_char(values.confmatchtype)
        } , conislocal = ${
          values.conislocal === undefined
            ? sql("conislocal")
            : typed.pg_catalog_bool(values.conislocal)
        } , coninhcount = ${
          values.coninhcount === undefined
            ? sql("coninhcount")
            : typed.pg_catalog_int2(values.coninhcount)
        } , connoinherit = ${
          values.connoinherit === undefined
            ? sql("connoinherit")
            : typed.pg_catalog_bool(values.connoinherit)
        } , conkey = ${
          values.conkey === undefined
            ? sql("conkey")
            : typed.pg_catalog__int2(values.conkey)
        } , confkey = ${
          values.confkey === undefined
            ? sql("confkey")
            : typed.pg_catalog__int2(values.confkey)
        } , conpfeqop = ${
          values.conpfeqop === undefined
            ? sql("conpfeqop")
            : typed.pg_catalog__oid(values.conpfeqop)
        } , conppeqop = ${
          values.conppeqop === undefined
            ? sql("conppeqop")
            : typed.pg_catalog__oid(values.conppeqop)
        } , conffeqop = ${
          values.conffeqop === undefined
            ? sql("conffeqop")
            : typed.pg_catalog__oid(values.conffeqop)
        } , confdelsetcols = ${
          values.confdelsetcols === undefined
            ? sql("confdelsetcols")
            : typed.pg_catalog__int2(values.confdelsetcols)
        } , conexclop = ${
          values.conexclop === undefined
            ? sql("conexclop")
            : typed.pg_catalog__oid(values.conexclop)
        } , conbin = ${
          values.conbin === undefined
            ? sql("conbin")
            : typed.pg_catalog_pg_node_tree(values.conbin)
        } WHERE contypid = ${
          parameters.contypid === undefined
            ? sql("contypid")
            : typed.pg_catalog_oid(parameters.contypid)
        } RETURNING oid,conname,connamespace,contype,condeferrable,condeferred,convalidated,conrelid,contypid,conindid,conparentid,confrelid,confupdtype,confdeltype,confmatchtype,conislocal,coninhcount,connoinherit,conkey,confkey,conpfeqop,conppeqop,conffeqop,confdelsetcols,conexclop,conbin`;

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
      async updateByOid(
        parameters: PgCatalog.Tables.PgConstraint.ByOid,
        values: Partial<PgCatalog.PgConstraint>,
      ): Promise<PgCatalog.PgConstraint> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_constraint SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , conname = ${
          values.conname === undefined
            ? sql("conname")
            : typed.pg_catalog_name(values.conname)
        } , connamespace = ${
          values.connamespace === undefined
            ? sql("connamespace")
            : typed.pg_catalog_oid(values.connamespace)
        } , contype = ${
          values.contype === undefined
            ? sql("contype")
            : typed.pg_catalog_char(values.contype)
        } , condeferrable = ${
          values.condeferrable === undefined
            ? sql("condeferrable")
            : typed.pg_catalog_bool(values.condeferrable)
        } , condeferred = ${
          values.condeferred === undefined
            ? sql("condeferred")
            : typed.pg_catalog_bool(values.condeferred)
        } , convalidated = ${
          values.convalidated === undefined
            ? sql("convalidated")
            : typed.pg_catalog_bool(values.convalidated)
        } , conrelid = ${
          values.conrelid === undefined
            ? sql("conrelid")
            : typed.pg_catalog_oid(values.conrelid)
        } , contypid = ${
          values.contypid === undefined
            ? sql("contypid")
            : typed.pg_catalog_oid(values.contypid)
        } , conindid = ${
          values.conindid === undefined
            ? sql("conindid")
            : typed.pg_catalog_oid(values.conindid)
        } , conparentid = ${
          values.conparentid === undefined
            ? sql("conparentid")
            : typed.pg_catalog_oid(values.conparentid)
        } , confrelid = ${
          values.confrelid === undefined
            ? sql("confrelid")
            : typed.pg_catalog_oid(values.confrelid)
        } , confupdtype = ${
          values.confupdtype === undefined
            ? sql("confupdtype")
            : typed.pg_catalog_char(values.confupdtype)
        } , confdeltype = ${
          values.confdeltype === undefined
            ? sql("confdeltype")
            : typed.pg_catalog_char(values.confdeltype)
        } , confmatchtype = ${
          values.confmatchtype === undefined
            ? sql("confmatchtype")
            : typed.pg_catalog_char(values.confmatchtype)
        } , conislocal = ${
          values.conislocal === undefined
            ? sql("conislocal")
            : typed.pg_catalog_bool(values.conislocal)
        } , coninhcount = ${
          values.coninhcount === undefined
            ? sql("coninhcount")
            : typed.pg_catalog_int2(values.coninhcount)
        } , connoinherit = ${
          values.connoinherit === undefined
            ? sql("connoinherit")
            : typed.pg_catalog_bool(values.connoinherit)
        } , conkey = ${
          values.conkey === undefined
            ? sql("conkey")
            : typed.pg_catalog__int2(values.conkey)
        } , confkey = ${
          values.confkey === undefined
            ? sql("confkey")
            : typed.pg_catalog__int2(values.confkey)
        } , conpfeqop = ${
          values.conpfeqop === undefined
            ? sql("conpfeqop")
            : typed.pg_catalog__oid(values.conpfeqop)
        } , conppeqop = ${
          values.conppeqop === undefined
            ? sql("conppeqop")
            : typed.pg_catalog__oid(values.conppeqop)
        } , conffeqop = ${
          values.conffeqop === undefined
            ? sql("conffeqop")
            : typed.pg_catalog__oid(values.conffeqop)
        } , confdelsetcols = ${
          values.confdelsetcols === undefined
            ? sql("confdelsetcols")
            : typed.pg_catalog__int2(values.confdelsetcols)
        } , conexclop = ${
          values.conexclop === undefined
            ? sql("conexclop")
            : typed.pg_catalog__oid(values.conexclop)
        } , conbin = ${
          values.conbin === undefined
            ? sql("conbin")
            : typed.pg_catalog_pg_node_tree(values.conbin)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,conname,connamespace,contype,condeferrable,condeferred,convalidated,conrelid,contypid,conindid,conparentid,confrelid,confupdtype,confdeltype,confmatchtype,conislocal,coninhcount,connoinherit,conkey,confkey,conpfeqop,conppeqop,conffeqop,confdelsetcols,conexclop,conbin`;

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
        parameters: PgCatalog.Tables.PgInherits.ByInhparent,
      ): Promise<PgCatalog.PgInherits[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT inhrelid,inhparent,inhseqno,inhdetachpending FROM pg_catalog.pg_inherits WHERE inhparent = ${
            parameters.inhparent === undefined
              ? sql("inhparent")
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
      ): Promise<PgCatalog.PgInherits> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT inhrelid,inhparent,inhseqno,inhdetachpending FROM pg_catalog.pg_inherits WHERE inhrelid = ${
            parameters.inhrelid === undefined
              ? sql("inhrelid")
              : typed.pg_catalog_oid(parameters.inhrelid)
          } AND inhseqno = ${
            parameters.inhseqno === undefined
              ? sql("inhseqno")
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
      ): Promise<PgCatalog.PgInherits[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_inherits WHERE inhparent = ${
            parameters.inhparent === undefined
              ? sql("inhparent")
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
      ): Promise<PgCatalog.PgInherits> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_inherits WHERE inhrelid = ${
            parameters.inhrelid === undefined
              ? sql("inhrelid")
              : typed.pg_catalog_oid(parameters.inhrelid)
          } AND inhseqno = ${
            parameters.inhseqno === undefined
              ? sql("inhseqno")
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

      async updateByInhparent(
        parameters: PgCatalog.Tables.PgInherits.ByInhparent,
        values: Partial<PgCatalog.PgInherits>,
      ): Promise<PgCatalog.PgInherits[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_inherits SET inhrelid = ${
            values.inhrelid === undefined
              ? sql("inhrelid")
              : typed.pg_catalog_oid(values.inhrelid)
          } , inhparent = ${
            values.inhparent === undefined
              ? sql("inhparent")
              : typed.pg_catalog_oid(values.inhparent)
          } , inhseqno = ${
            values.inhseqno === undefined
              ? sql("inhseqno")
              : typed.pg_catalog_int4(values.inhseqno)
          } , inhdetachpending = ${
            values.inhdetachpending === undefined
              ? sql("inhdetachpending")
              : typed.pg_catalog_bool(values.inhdetachpending)
          } WHERE inhparent = ${
            parameters.inhparent === undefined
              ? sql("inhparent")
              : typed.pg_catalog_oid(parameters.inhparent)
          } RETURNING inhrelid,inhparent,inhseqno,inhdetachpending`;

        const results = response.map((record) => ({
          inhrelid: undefinedIsNull(record.inhrelid),
          inhparent: undefinedIsNull(record.inhparent),
          inhseqno: undefinedIsNull(record.inhseqno),
          inhdetachpending: undefinedIsNull(record.inhdetachpending),
        }));
        return results;
      }
      async updateByInhrelidInhseqno(
        parameters: PgCatalog.Tables.PgInherits.ByInhrelidInhseqno,
        values: Partial<PgCatalog.PgInherits>,
      ): Promise<PgCatalog.PgInherits> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_inherits SET inhrelid = ${
            values.inhrelid === undefined
              ? sql("inhrelid")
              : typed.pg_catalog_oid(values.inhrelid)
          } , inhparent = ${
            values.inhparent === undefined
              ? sql("inhparent")
              : typed.pg_catalog_oid(values.inhparent)
          } , inhseqno = ${
            values.inhseqno === undefined
              ? sql("inhseqno")
              : typed.pg_catalog_int4(values.inhseqno)
          } , inhdetachpending = ${
            values.inhdetachpending === undefined
              ? sql("inhdetachpending")
              : typed.pg_catalog_bool(values.inhdetachpending)
          } WHERE inhrelid = ${
            parameters.inhrelid === undefined
              ? sql("inhrelid")
              : typed.pg_catalog_oid(parameters.inhrelid)
          } AND inhseqno = ${
            parameters.inhseqno === undefined
              ? sql("inhseqno")
              : typed.pg_catalog_int4(parameters.inhseqno)
          } RETURNING inhrelid,inhparent,inhseqno,inhdetachpending`;

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
        parameters: PgCatalog.Tables.PgIndex.ByIndexrelid,
      ): Promise<PgCatalog.PgIndex> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT indexrelid,indrelid,indnatts,indnkeyatts,indisunique,indnullsnotdistinct,indisprimary,indisexclusion,indimmediate,indisclustered,indisvalid,indcheckxmin,indisready,indislive,indisreplident,indkey,indcollation,indclass,indoption,indexprs,indpred FROM pg_catalog.pg_index WHERE indexrelid = ${
            parameters.indexrelid === undefined
              ? sql("indexrelid")
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
      async byIndrelid(
        parameters: PgCatalog.Tables.PgIndex.ByIndrelid,
      ): Promise<PgCatalog.PgIndex[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT indexrelid,indrelid,indnatts,indnkeyatts,indisunique,indnullsnotdistinct,indisprimary,indisexclusion,indimmediate,indisclustered,indisvalid,indcheckxmin,indisready,indislive,indisreplident,indkey,indcollation,indclass,indoption,indexprs,indpred FROM pg_catalog.pg_index WHERE indrelid = ${
            parameters.indrelid === undefined
              ? sql("indrelid")
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
      ): Promise<PgCatalog.PgIndex> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_index WHERE indexrelid = ${
            parameters.indexrelid === undefined
              ? sql("indexrelid")
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
      async deleteByIndrelid(
        parameters: PgCatalog.Tables.PgIndex.ByIndrelid,
      ): Promise<PgCatalog.PgIndex[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_index WHERE indrelid = ${
            parameters.indrelid === undefined
              ? sql("indrelid")
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

      async updateByIndexrelid(
        parameters: PgCatalog.Tables.PgIndex.ByIndexrelid,
        values: Partial<PgCatalog.PgIndex>,
      ): Promise<PgCatalog.PgIndex> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_index SET indexrelid = ${
            values.indexrelid === undefined
              ? sql("indexrelid")
              : typed.pg_catalog_oid(values.indexrelid)
          } , indrelid = ${
            values.indrelid === undefined
              ? sql("indrelid")
              : typed.pg_catalog_oid(values.indrelid)
          } , indnatts = ${
            values.indnatts === undefined
              ? sql("indnatts")
              : typed.pg_catalog_int2(values.indnatts)
          } , indnkeyatts = ${
            values.indnkeyatts === undefined
              ? sql("indnkeyatts")
              : typed.pg_catalog_int2(values.indnkeyatts)
          } , indisunique = ${
            values.indisunique === undefined
              ? sql("indisunique")
              : typed.pg_catalog_bool(values.indisunique)
          } , indnullsnotdistinct = ${
            values.indnullsnotdistinct === undefined
              ? sql("indnullsnotdistinct")
              : typed.pg_catalog_bool(values.indnullsnotdistinct)
          } , indisprimary = ${
            values.indisprimary === undefined
              ? sql("indisprimary")
              : typed.pg_catalog_bool(values.indisprimary)
          } , indisexclusion = ${
            values.indisexclusion === undefined
              ? sql("indisexclusion")
              : typed.pg_catalog_bool(values.indisexclusion)
          } , indimmediate = ${
            values.indimmediate === undefined
              ? sql("indimmediate")
              : typed.pg_catalog_bool(values.indimmediate)
          } , indisclustered = ${
            values.indisclustered === undefined
              ? sql("indisclustered")
              : typed.pg_catalog_bool(values.indisclustered)
          } , indisvalid = ${
            values.indisvalid === undefined
              ? sql("indisvalid")
              : typed.pg_catalog_bool(values.indisvalid)
          } , indcheckxmin = ${
            values.indcheckxmin === undefined
              ? sql("indcheckxmin")
              : typed.pg_catalog_bool(values.indcheckxmin)
          } , indisready = ${
            values.indisready === undefined
              ? sql("indisready")
              : typed.pg_catalog_bool(values.indisready)
          } , indislive = ${
            values.indislive === undefined
              ? sql("indislive")
              : typed.pg_catalog_bool(values.indislive)
          } , indisreplident = ${
            values.indisreplident === undefined
              ? sql("indisreplident")
              : typed.pg_catalog_bool(values.indisreplident)
          } , indkey = ${
            values.indkey === undefined
              ? sql("indkey")
              : typed.pg_catalog_int2vector(values.indkey)
          } , indcollation = ${
            values.indcollation === undefined
              ? sql("indcollation")
              : typed.pg_catalog_oidvector(values.indcollation)
          } , indclass = ${
            values.indclass === undefined
              ? sql("indclass")
              : typed.pg_catalog_oidvector(values.indclass)
          } , indoption = ${
            values.indoption === undefined
              ? sql("indoption")
              : typed.pg_catalog_int2vector(values.indoption)
          } , indexprs = ${
            values.indexprs === undefined
              ? sql("indexprs")
              : typed.pg_catalog_pg_node_tree(values.indexprs)
          } , indpred = ${
            values.indpred === undefined
              ? sql("indpred")
              : typed.pg_catalog_pg_node_tree(values.indpred)
          } WHERE indexrelid = ${
            parameters.indexrelid === undefined
              ? sql("indexrelid")
              : typed.pg_catalog_oid(parameters.indexrelid)
          } RETURNING indexrelid,indrelid,indnatts,indnkeyatts,indisunique,indnullsnotdistinct,indisprimary,indisexclusion,indimmediate,indisclustered,indisvalid,indcheckxmin,indisready,indislive,indisreplident,indkey,indcollation,indclass,indoption,indexprs,indpred`;

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
      async updateByIndrelid(
        parameters: PgCatalog.Tables.PgIndex.ByIndrelid,
        values: Partial<PgCatalog.PgIndex>,
      ): Promise<PgCatalog.PgIndex[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_index SET indexrelid = ${
            values.indexrelid === undefined
              ? sql("indexrelid")
              : typed.pg_catalog_oid(values.indexrelid)
          } , indrelid = ${
            values.indrelid === undefined
              ? sql("indrelid")
              : typed.pg_catalog_oid(values.indrelid)
          } , indnatts = ${
            values.indnatts === undefined
              ? sql("indnatts")
              : typed.pg_catalog_int2(values.indnatts)
          } , indnkeyatts = ${
            values.indnkeyatts === undefined
              ? sql("indnkeyatts")
              : typed.pg_catalog_int2(values.indnkeyatts)
          } , indisunique = ${
            values.indisunique === undefined
              ? sql("indisunique")
              : typed.pg_catalog_bool(values.indisunique)
          } , indnullsnotdistinct = ${
            values.indnullsnotdistinct === undefined
              ? sql("indnullsnotdistinct")
              : typed.pg_catalog_bool(values.indnullsnotdistinct)
          } , indisprimary = ${
            values.indisprimary === undefined
              ? sql("indisprimary")
              : typed.pg_catalog_bool(values.indisprimary)
          } , indisexclusion = ${
            values.indisexclusion === undefined
              ? sql("indisexclusion")
              : typed.pg_catalog_bool(values.indisexclusion)
          } , indimmediate = ${
            values.indimmediate === undefined
              ? sql("indimmediate")
              : typed.pg_catalog_bool(values.indimmediate)
          } , indisclustered = ${
            values.indisclustered === undefined
              ? sql("indisclustered")
              : typed.pg_catalog_bool(values.indisclustered)
          } , indisvalid = ${
            values.indisvalid === undefined
              ? sql("indisvalid")
              : typed.pg_catalog_bool(values.indisvalid)
          } , indcheckxmin = ${
            values.indcheckxmin === undefined
              ? sql("indcheckxmin")
              : typed.pg_catalog_bool(values.indcheckxmin)
          } , indisready = ${
            values.indisready === undefined
              ? sql("indisready")
              : typed.pg_catalog_bool(values.indisready)
          } , indislive = ${
            values.indislive === undefined
              ? sql("indislive")
              : typed.pg_catalog_bool(values.indislive)
          } , indisreplident = ${
            values.indisreplident === undefined
              ? sql("indisreplident")
              : typed.pg_catalog_bool(values.indisreplident)
          } , indkey = ${
            values.indkey === undefined
              ? sql("indkey")
              : typed.pg_catalog_int2vector(values.indkey)
          } , indcollation = ${
            values.indcollation === undefined
              ? sql("indcollation")
              : typed.pg_catalog_oidvector(values.indcollation)
          } , indclass = ${
            values.indclass === undefined
              ? sql("indclass")
              : typed.pg_catalog_oidvector(values.indclass)
          } , indoption = ${
            values.indoption === undefined
              ? sql("indoption")
              : typed.pg_catalog_int2vector(values.indoption)
          } , indexprs = ${
            values.indexprs === undefined
              ? sql("indexprs")
              : typed.pg_catalog_pg_node_tree(values.indexprs)
          } , indpred = ${
            values.indpred === undefined
              ? sql("indpred")
              : typed.pg_catalog_pg_node_tree(values.indpred)
          } WHERE indrelid = ${
            parameters.indrelid === undefined
              ? sql("indrelid")
              : typed.pg_catalog_oid(parameters.indrelid)
          } RETURNING indexrelid,indrelid,indnatts,indnkeyatts,indisunique,indnullsnotdistinct,indisprimary,indisexclusion,indimmediate,indisclustered,indisvalid,indcheckxmin,indisready,indislive,indisreplident,indkey,indcollation,indclass,indoption,indexprs,indpred`;

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

      async byOid(
        parameters: PgCatalog.Tables.PgOperator.ByOid,
      ): Promise<PgCatalog.PgOperator> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,oprname,oprnamespace,oprowner,oprkind,oprcanmerge,oprcanhash,oprleft,oprright,oprresult,oprcom,oprnegate,oprcode,oprrest,oprjoin FROM pg_catalog.pg_operator WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgOperator> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,oprname,oprnamespace,oprowner,oprkind,oprcanmerge,oprcanhash,oprleft,oprright,oprresult,oprcom,oprnegate,oprcode,oprrest,oprjoin FROM pg_catalog.pg_operator WHERE oprname = ${
            parameters.oprname === undefined
              ? sql("oprname")
              : typed.pg_catalog_cstring(parameters.oprname)
          } AND oprleft = ${
            parameters.oprleft === undefined
              ? sql("oprleft")
              : typed.pg_catalog_oid(parameters.oprleft)
          } AND oprright = ${
            parameters.oprright === undefined
              ? sql("oprright")
              : typed.pg_catalog_oid(parameters.oprright)
          } AND oprnamespace = ${
            parameters.oprnamespace === undefined
              ? sql("oprnamespace")
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

      async deleteByOid(
        parameters: PgCatalog.Tables.PgOperator.ByOid,
      ): Promise<PgCatalog.PgOperator> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_operator WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgOperator> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_operator WHERE oprname = ${
            parameters.oprname === undefined
              ? sql("oprname")
              : typed.pg_catalog_cstring(parameters.oprname)
          } AND oprleft = ${
            parameters.oprleft === undefined
              ? sql("oprleft")
              : typed.pg_catalog_oid(parameters.oprleft)
          } AND oprright = ${
            parameters.oprright === undefined
              ? sql("oprright")
              : typed.pg_catalog_oid(parameters.oprright)
          } AND oprnamespace = ${
            parameters.oprnamespace === undefined
              ? sql("oprnamespace")
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

      async updateByOid(
        parameters: PgCatalog.Tables.PgOperator.ByOid,
        values: Partial<PgCatalog.PgOperator>,
      ): Promise<PgCatalog.PgOperator> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_operator SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , oprname = ${
          values.oprname === undefined
            ? sql("oprname")
            : typed.pg_catalog_name(values.oprname)
        } , oprnamespace = ${
          values.oprnamespace === undefined
            ? sql("oprnamespace")
            : typed.pg_catalog_oid(values.oprnamespace)
        } , oprowner = ${
          values.oprowner === undefined
            ? sql("oprowner")
            : typed.pg_catalog_oid(values.oprowner)
        } , oprkind = ${
          values.oprkind === undefined
            ? sql("oprkind")
            : typed.pg_catalog_char(values.oprkind)
        } , oprcanmerge = ${
          values.oprcanmerge === undefined
            ? sql("oprcanmerge")
            : typed.pg_catalog_bool(values.oprcanmerge)
        } , oprcanhash = ${
          values.oprcanhash === undefined
            ? sql("oprcanhash")
            : typed.pg_catalog_bool(values.oprcanhash)
        } , oprleft = ${
          values.oprleft === undefined
            ? sql("oprleft")
            : typed.pg_catalog_oid(values.oprleft)
        } , oprright = ${
          values.oprright === undefined
            ? sql("oprright")
            : typed.pg_catalog_oid(values.oprright)
        } , oprresult = ${
          values.oprresult === undefined
            ? sql("oprresult")
            : typed.pg_catalog_oid(values.oprresult)
        } , oprcom = ${
          values.oprcom === undefined
            ? sql("oprcom")
            : typed.pg_catalog_oid(values.oprcom)
        } , oprnegate = ${
          values.oprnegate === undefined
            ? sql("oprnegate")
            : typed.pg_catalog_oid(values.oprnegate)
        } , oprcode = ${
          values.oprcode === undefined
            ? sql("oprcode")
            : typed.pg_catalog_regproc(values.oprcode)
        } , oprrest = ${
          values.oprrest === undefined
            ? sql("oprrest")
            : typed.pg_catalog_regproc(values.oprrest)
        } , oprjoin = ${
          values.oprjoin === undefined
            ? sql("oprjoin")
            : typed.pg_catalog_regproc(values.oprjoin)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,oprname,oprnamespace,oprowner,oprkind,oprcanmerge,oprcanhash,oprleft,oprright,oprresult,oprcom,oprnegate,oprcode,oprrest,oprjoin`;

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
      async updateByOprnameOprleftOprrightOprnamespace(
        parameters: PgCatalog.Tables.PgOperator.ByOprnameOprleftOprrightOprnamespace,
        values: Partial<PgCatalog.PgOperator>,
      ): Promise<PgCatalog.PgOperator> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_operator SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , oprname = ${
          values.oprname === undefined
            ? sql("oprname")
            : typed.pg_catalog_name(values.oprname)
        } , oprnamespace = ${
          values.oprnamespace === undefined
            ? sql("oprnamespace")
            : typed.pg_catalog_oid(values.oprnamespace)
        } , oprowner = ${
          values.oprowner === undefined
            ? sql("oprowner")
            : typed.pg_catalog_oid(values.oprowner)
        } , oprkind = ${
          values.oprkind === undefined
            ? sql("oprkind")
            : typed.pg_catalog_char(values.oprkind)
        } , oprcanmerge = ${
          values.oprcanmerge === undefined
            ? sql("oprcanmerge")
            : typed.pg_catalog_bool(values.oprcanmerge)
        } , oprcanhash = ${
          values.oprcanhash === undefined
            ? sql("oprcanhash")
            : typed.pg_catalog_bool(values.oprcanhash)
        } , oprleft = ${
          values.oprleft === undefined
            ? sql("oprleft")
            : typed.pg_catalog_oid(values.oprleft)
        } , oprright = ${
          values.oprright === undefined
            ? sql("oprright")
            : typed.pg_catalog_oid(values.oprright)
        } , oprresult = ${
          values.oprresult === undefined
            ? sql("oprresult")
            : typed.pg_catalog_oid(values.oprresult)
        } , oprcom = ${
          values.oprcom === undefined
            ? sql("oprcom")
            : typed.pg_catalog_oid(values.oprcom)
        } , oprnegate = ${
          values.oprnegate === undefined
            ? sql("oprnegate")
            : typed.pg_catalog_oid(values.oprnegate)
        } , oprcode = ${
          values.oprcode === undefined
            ? sql("oprcode")
            : typed.pg_catalog_regproc(values.oprcode)
        } , oprrest = ${
          values.oprrest === undefined
            ? sql("oprrest")
            : typed.pg_catalog_regproc(values.oprrest)
        } , oprjoin = ${
          values.oprjoin === undefined
            ? sql("oprjoin")
            : typed.pg_catalog_regproc(values.oprjoin)
        } WHERE oprname = ${
          parameters.oprname === undefined
            ? sql("oprname")
            : typed.pg_catalog_cstring(parameters.oprname)
        } AND oprleft = ${
          parameters.oprleft === undefined
            ? sql("oprleft")
            : typed.pg_catalog_oid(parameters.oprleft)
        } AND oprright = ${
          parameters.oprright === undefined
            ? sql("oprright")
            : typed.pg_catalog_oid(parameters.oprright)
        } AND oprnamespace = ${
          parameters.oprnamespace === undefined
            ? sql("oprnamespace")
            : typed.pg_catalog_oid(parameters.oprnamespace)
        } RETURNING oid,oprname,oprnamespace,oprowner,oprkind,oprcanmerge,oprcanhash,oprleft,oprright,oprresult,oprcom,oprnegate,oprcode,oprrest,oprjoin`;

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

      async byOid(
        parameters: PgCatalog.Tables.PgOpfamily.ByOid,
      ): Promise<PgCatalog.PgOpfamily> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,opfmethod,opfname,opfnamespace,opfowner FROM pg_catalog.pg_opfamily WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgOpfamily> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,opfmethod,opfname,opfnamespace,opfowner FROM pg_catalog.pg_opfamily WHERE opfmethod = ${
            parameters.opfmethod === undefined
              ? sql("opfmethod")
              : typed.pg_catalog_oid(parameters.opfmethod)
          } AND opfname = ${
            parameters.opfname === undefined
              ? sql("opfname")
              : typed.pg_catalog_cstring(parameters.opfname)
          } AND opfnamespace = ${
            parameters.opfnamespace === undefined
              ? sql("opfnamespace")
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

      async deleteByOid(
        parameters: PgCatalog.Tables.PgOpfamily.ByOid,
      ): Promise<PgCatalog.PgOpfamily> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_opfamily WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgOpfamily> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_opfamily WHERE opfmethod = ${
            parameters.opfmethod === undefined
              ? sql("opfmethod")
              : typed.pg_catalog_oid(parameters.opfmethod)
          } AND opfname = ${
            parameters.opfname === undefined
              ? sql("opfname")
              : typed.pg_catalog_cstring(parameters.opfname)
          } AND opfnamespace = ${
            parameters.opfnamespace === undefined
              ? sql("opfnamespace")
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

      async updateByOid(
        parameters: PgCatalog.Tables.PgOpfamily.ByOid,
        values: Partial<PgCatalog.PgOpfamily>,
      ): Promise<PgCatalog.PgOpfamily> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_opfamily SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , opfmethod = ${
          values.opfmethod === undefined
            ? sql("opfmethod")
            : typed.pg_catalog_oid(values.opfmethod)
        } , opfname = ${
          values.opfname === undefined
            ? sql("opfname")
            : typed.pg_catalog_name(values.opfname)
        } , opfnamespace = ${
          values.opfnamespace === undefined
            ? sql("opfnamespace")
            : typed.pg_catalog_oid(values.opfnamespace)
        } , opfowner = ${
          values.opfowner === undefined
            ? sql("opfowner")
            : typed.pg_catalog_oid(values.opfowner)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,opfmethod,opfname,opfnamespace,opfowner`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          opfmethod: undefinedIsNull(record.opfmethod),
          opfname: undefinedIsNull(record.opfname),
          opfnamespace: undefinedIsNull(record.opfnamespace),
          opfowner: undefinedIsNull(record.opfowner),
        }));
        return results[0];
      }
      async updateByOpfmethodOpfnameOpfnamespace(
        parameters: PgCatalog.Tables.PgOpfamily.ByOpfmethodOpfnameOpfnamespace,
        values: Partial<PgCatalog.PgOpfamily>,
      ): Promise<PgCatalog.PgOpfamily> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_opfamily SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , opfmethod = ${
          values.opfmethod === undefined
            ? sql("opfmethod")
            : typed.pg_catalog_oid(values.opfmethod)
        } , opfname = ${
          values.opfname === undefined
            ? sql("opfname")
            : typed.pg_catalog_name(values.opfname)
        } , opfnamespace = ${
          values.opfnamespace === undefined
            ? sql("opfnamespace")
            : typed.pg_catalog_oid(values.opfnamespace)
        } , opfowner = ${
          values.opfowner === undefined
            ? sql("opfowner")
            : typed.pg_catalog_oid(values.opfowner)
        } WHERE opfmethod = ${
          parameters.opfmethod === undefined
            ? sql("opfmethod")
            : typed.pg_catalog_oid(parameters.opfmethod)
        } AND opfname = ${
          parameters.opfname === undefined
            ? sql("opfname")
            : typed.pg_catalog_cstring(parameters.opfname)
        } AND opfnamespace = ${
          parameters.opfnamespace === undefined
            ? sql("opfnamespace")
            : typed.pg_catalog_oid(parameters.opfnamespace)
        } RETURNING oid,opfmethod,opfname,opfnamespace,opfowner`;

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

      async byOid(
        parameters: PgCatalog.Tables.PgOpclass.ByOid,
      ): Promise<PgCatalog.PgOpclass> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,opcmethod,opcname,opcnamespace,opcowner,opcfamily,opcintype,opcdefault,opckeytype FROM pg_catalog.pg_opclass WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgOpclass> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,opcmethod,opcname,opcnamespace,opcowner,opcfamily,opcintype,opcdefault,opckeytype FROM pg_catalog.pg_opclass WHERE opcmethod = ${
            parameters.opcmethod === undefined
              ? sql("opcmethod")
              : typed.pg_catalog_oid(parameters.opcmethod)
          } AND opcname = ${
            parameters.opcname === undefined
              ? sql("opcname")
              : typed.pg_catalog_cstring(parameters.opcname)
          } AND opcnamespace = ${
            parameters.opcnamespace === undefined
              ? sql("opcnamespace")
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

      async deleteByOid(
        parameters: PgCatalog.Tables.PgOpclass.ByOid,
      ): Promise<PgCatalog.PgOpclass> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_opclass WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgOpclass> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_opclass WHERE opcmethod = ${
            parameters.opcmethod === undefined
              ? sql("opcmethod")
              : typed.pg_catalog_oid(parameters.opcmethod)
          } AND opcname = ${
            parameters.opcname === undefined
              ? sql("opcname")
              : typed.pg_catalog_cstring(parameters.opcname)
          } AND opcnamespace = ${
            parameters.opcnamespace === undefined
              ? sql("opcnamespace")
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

      async updateByOid(
        parameters: PgCatalog.Tables.PgOpclass.ByOid,
        values: Partial<PgCatalog.PgOpclass>,
      ): Promise<PgCatalog.PgOpclass> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_opclass SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , opcmethod = ${
          values.opcmethod === undefined
            ? sql("opcmethod")
            : typed.pg_catalog_oid(values.opcmethod)
        } , opcname = ${
          values.opcname === undefined
            ? sql("opcname")
            : typed.pg_catalog_name(values.opcname)
        } , opcnamespace = ${
          values.opcnamespace === undefined
            ? sql("opcnamespace")
            : typed.pg_catalog_oid(values.opcnamespace)
        } , opcowner = ${
          values.opcowner === undefined
            ? sql("opcowner")
            : typed.pg_catalog_oid(values.opcowner)
        } , opcfamily = ${
          values.opcfamily === undefined
            ? sql("opcfamily")
            : typed.pg_catalog_oid(values.opcfamily)
        } , opcintype = ${
          values.opcintype === undefined
            ? sql("opcintype")
            : typed.pg_catalog_oid(values.opcintype)
        } , opcdefault = ${
          values.opcdefault === undefined
            ? sql("opcdefault")
            : typed.pg_catalog_bool(values.opcdefault)
        } , opckeytype = ${
          values.opckeytype === undefined
            ? sql("opckeytype")
            : typed.pg_catalog_oid(values.opckeytype)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,opcmethod,opcname,opcnamespace,opcowner,opcfamily,opcintype,opcdefault,opckeytype`;

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
      async updateByOpcmethodOpcnameOpcnamespace(
        parameters: PgCatalog.Tables.PgOpclass.ByOpcmethodOpcnameOpcnamespace,
        values: Partial<PgCatalog.PgOpclass>,
      ): Promise<PgCatalog.PgOpclass> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_opclass SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , opcmethod = ${
          values.opcmethod === undefined
            ? sql("opcmethod")
            : typed.pg_catalog_oid(values.opcmethod)
        } , opcname = ${
          values.opcname === undefined
            ? sql("opcname")
            : typed.pg_catalog_name(values.opcname)
        } , opcnamespace = ${
          values.opcnamespace === undefined
            ? sql("opcnamespace")
            : typed.pg_catalog_oid(values.opcnamespace)
        } , opcowner = ${
          values.opcowner === undefined
            ? sql("opcowner")
            : typed.pg_catalog_oid(values.opcowner)
        } , opcfamily = ${
          values.opcfamily === undefined
            ? sql("opcfamily")
            : typed.pg_catalog_oid(values.opcfamily)
        } , opcintype = ${
          values.opcintype === undefined
            ? sql("opcintype")
            : typed.pg_catalog_oid(values.opcintype)
        } , opcdefault = ${
          values.opcdefault === undefined
            ? sql("opcdefault")
            : typed.pg_catalog_bool(values.opcdefault)
        } , opckeytype = ${
          values.opckeytype === undefined
            ? sql("opckeytype")
            : typed.pg_catalog_oid(values.opckeytype)
        } WHERE opcmethod = ${
          parameters.opcmethod === undefined
            ? sql("opcmethod")
            : typed.pg_catalog_oid(parameters.opcmethod)
        } AND opcname = ${
          parameters.opcname === undefined
            ? sql("opcname")
            : typed.pg_catalog_cstring(parameters.opcname)
        } AND opcnamespace = ${
          parameters.opcnamespace === undefined
            ? sql("opcnamespace")
            : typed.pg_catalog_oid(parameters.opcnamespace)
        } RETURNING oid,opcmethod,opcname,opcnamespace,opcowner,opcfamily,opcintype,opcdefault,opckeytype`;

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

      async byAmname(
        parameters: PgCatalog.Tables.PgAm.ByAmname,
      ): Promise<PgCatalog.PgAm> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,amname,amhandler,amtype FROM pg_catalog.pg_am WHERE amname = ${
            parameters.amname === undefined
              ? sql("amname")
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
      async byOid(
        parameters: PgCatalog.Tables.PgAm.ByOid,
      ): Promise<PgCatalog.PgAm> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,amname,amhandler,amtype FROM pg_catalog.pg_am WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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

      async deleteByAmname(
        parameters: PgCatalog.Tables.PgAm.ByAmname,
      ): Promise<PgCatalog.PgAm> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_am WHERE amname = ${
            parameters.amname === undefined
              ? sql("amname")
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
      async deleteByOid(
        parameters: PgCatalog.Tables.PgAm.ByOid,
      ): Promise<PgCatalog.PgAm> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`DELETE FROM pg_catalog.pg_am WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
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

      async updateByAmname(
        parameters: PgCatalog.Tables.PgAm.ByAmname,
        values: Partial<PgCatalog.PgAm>,
      ): Promise<PgCatalog.PgAm> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_am SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , amname = ${
          values.amname === undefined
            ? sql("amname")
            : typed.pg_catalog_name(values.amname)
        } , amhandler = ${
          values.amhandler === undefined
            ? sql("amhandler")
            : typed.pg_catalog_regproc(values.amhandler)
        } , amtype = ${
          values.amtype === undefined
            ? sql("amtype")
            : typed.pg_catalog_char(values.amtype)
        } WHERE amname = ${
          parameters.amname === undefined
            ? sql("amname")
            : typed.pg_catalog_cstring(parameters.amname)
        } RETURNING oid,amname,amhandler,amtype`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          amname: undefinedIsNull(record.amname),
          amhandler: undefinedIsNull(record.amhandler),
          amtype: undefinedIsNull(record.amtype),
        }));
        return results[0];
      }
      async updateByOid(
        parameters: PgCatalog.Tables.PgAm.ByOid,
        values: Partial<PgCatalog.PgAm>,
      ): Promise<PgCatalog.PgAm> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_am SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , amname = ${
          values.amname === undefined
            ? sql("amname")
            : typed.pg_catalog_name(values.amname)
        } , amhandler = ${
          values.amhandler === undefined
            ? sql("amhandler")
            : typed.pg_catalog_regproc(values.amhandler)
        } , amtype = ${
          values.amtype === undefined
            ? sql("amtype")
            : typed.pg_catalog_char(values.amtype)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,amname,amhandler,amtype`;

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
      ): Promise<PgCatalog.PgAmop> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,amopfamily,amoplefttype,amoprighttype,amopstrategy,amoppurpose,amopopr,amopmethod,amopsortfamily FROM pg_catalog.pg_amop WHERE amopfamily = ${
            parameters.amopfamily === undefined
              ? sql("amopfamily")
              : typed.pg_catalog_oid(parameters.amopfamily)
          } AND amoplefttype = ${
            parameters.amoplefttype === undefined
              ? sql("amoplefttype")
              : typed.pg_catalog_oid(parameters.amoplefttype)
          } AND amoprighttype = ${
            parameters.amoprighttype === undefined
              ? sql("amoprighttype")
              : typed.pg_catalog_oid(parameters.amoprighttype)
          } AND amopstrategy = ${
            parameters.amopstrategy === undefined
              ? sql("amopstrategy")
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
      ): Promise<PgCatalog.PgAmop> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,amopfamily,amoplefttype,amoprighttype,amopstrategy,amoppurpose,amopopr,amopmethod,amopsortfamily FROM pg_catalog.pg_amop WHERE amopopr = ${
            parameters.amopopr === undefined
              ? sql("amopopr")
              : typed.pg_catalog_oid(parameters.amopopr)
          } AND amoppurpose = ${
            parameters.amoppurpose === undefined
              ? sql("amoppurpose")
              : typed.pg_catalog_char(parameters.amoppurpose)
          } AND amopfamily = ${
            parameters.amopfamily === undefined
              ? sql("amopfamily")
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
      async byOid(
        parameters: PgCatalog.Tables.PgAmop.ByOid,
      ): Promise<PgCatalog.PgAmop> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,amopfamily,amoplefttype,amoprighttype,amopstrategy,amoppurpose,amopopr,amopmethod,amopsortfamily FROM pg_catalog.pg_amop WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgAmop> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_amop WHERE amopfamily = ${
            parameters.amopfamily === undefined
              ? sql("amopfamily")
              : typed.pg_catalog_oid(parameters.amopfamily)
          } AND amoplefttype = ${
            parameters.amoplefttype === undefined
              ? sql("amoplefttype")
              : typed.pg_catalog_oid(parameters.amoplefttype)
          } AND amoprighttype = ${
            parameters.amoprighttype === undefined
              ? sql("amoprighttype")
              : typed.pg_catalog_oid(parameters.amoprighttype)
          } AND amopstrategy = ${
            parameters.amopstrategy === undefined
              ? sql("amopstrategy")
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
      ): Promise<PgCatalog.PgAmop> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_amop WHERE amopopr = ${
            parameters.amopopr === undefined
              ? sql("amopopr")
              : typed.pg_catalog_oid(parameters.amopopr)
          } AND amoppurpose = ${
            parameters.amoppurpose === undefined
              ? sql("amoppurpose")
              : typed.pg_catalog_char(parameters.amoppurpose)
          } AND amopfamily = ${
            parameters.amopfamily === undefined
              ? sql("amopfamily")
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
      async deleteByOid(
        parameters: PgCatalog.Tables.PgAmop.ByOid,
      ): Promise<PgCatalog.PgAmop> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`DELETE FROM pg_catalog.pg_amop WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
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

      async updateByAmopfamilyAmoplefttypeAmoprighttypeAmopstrategy(
        parameters: PgCatalog.Tables.PgAmop.ByAmopfamilyAmoplefttypeAmoprighttypeAmopstrategy,
        values: Partial<PgCatalog.PgAmop>,
      ): Promise<PgCatalog.PgAmop> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_amop SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , amopfamily = ${
          values.amopfamily === undefined
            ? sql("amopfamily")
            : typed.pg_catalog_oid(values.amopfamily)
        } , amoplefttype = ${
          values.amoplefttype === undefined
            ? sql("amoplefttype")
            : typed.pg_catalog_oid(values.amoplefttype)
        } , amoprighttype = ${
          values.amoprighttype === undefined
            ? sql("amoprighttype")
            : typed.pg_catalog_oid(values.amoprighttype)
        } , amopstrategy = ${
          values.amopstrategy === undefined
            ? sql("amopstrategy")
            : typed.pg_catalog_int2(values.amopstrategy)
        } , amoppurpose = ${
          values.amoppurpose === undefined
            ? sql("amoppurpose")
            : typed.pg_catalog_char(values.amoppurpose)
        } , amopopr = ${
          values.amopopr === undefined
            ? sql("amopopr")
            : typed.pg_catalog_oid(values.amopopr)
        } , amopmethod = ${
          values.amopmethod === undefined
            ? sql("amopmethod")
            : typed.pg_catalog_oid(values.amopmethod)
        } , amopsortfamily = ${
          values.amopsortfamily === undefined
            ? sql("amopsortfamily")
            : typed.pg_catalog_oid(values.amopsortfamily)
        } WHERE amopfamily = ${
          parameters.amopfamily === undefined
            ? sql("amopfamily")
            : typed.pg_catalog_oid(parameters.amopfamily)
        } AND amoplefttype = ${
          parameters.amoplefttype === undefined
            ? sql("amoplefttype")
            : typed.pg_catalog_oid(parameters.amoplefttype)
        } AND amoprighttype = ${
          parameters.amoprighttype === undefined
            ? sql("amoprighttype")
            : typed.pg_catalog_oid(parameters.amoprighttype)
        } AND amopstrategy = ${
          parameters.amopstrategy === undefined
            ? sql("amopstrategy")
            : typed.pg_catalog_int2(parameters.amopstrategy)
        } RETURNING oid,amopfamily,amoplefttype,amoprighttype,amopstrategy,amoppurpose,amopopr,amopmethod,amopsortfamily`;

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
      async updateByAmopoprAmoppurposeAmopfamily(
        parameters: PgCatalog.Tables.PgAmop.ByAmopoprAmoppurposeAmopfamily,
        values: Partial<PgCatalog.PgAmop>,
      ): Promise<PgCatalog.PgAmop> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_amop SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , amopfamily = ${
          values.amopfamily === undefined
            ? sql("amopfamily")
            : typed.pg_catalog_oid(values.amopfamily)
        } , amoplefttype = ${
          values.amoplefttype === undefined
            ? sql("amoplefttype")
            : typed.pg_catalog_oid(values.amoplefttype)
        } , amoprighttype = ${
          values.amoprighttype === undefined
            ? sql("amoprighttype")
            : typed.pg_catalog_oid(values.amoprighttype)
        } , amopstrategy = ${
          values.amopstrategy === undefined
            ? sql("amopstrategy")
            : typed.pg_catalog_int2(values.amopstrategy)
        } , amoppurpose = ${
          values.amoppurpose === undefined
            ? sql("amoppurpose")
            : typed.pg_catalog_char(values.amoppurpose)
        } , amopopr = ${
          values.amopopr === undefined
            ? sql("amopopr")
            : typed.pg_catalog_oid(values.amopopr)
        } , amopmethod = ${
          values.amopmethod === undefined
            ? sql("amopmethod")
            : typed.pg_catalog_oid(values.amopmethod)
        } , amopsortfamily = ${
          values.amopsortfamily === undefined
            ? sql("amopsortfamily")
            : typed.pg_catalog_oid(values.amopsortfamily)
        } WHERE amopopr = ${
          parameters.amopopr === undefined
            ? sql("amopopr")
            : typed.pg_catalog_oid(parameters.amopopr)
        } AND amoppurpose = ${
          parameters.amoppurpose === undefined
            ? sql("amoppurpose")
            : typed.pg_catalog_char(parameters.amoppurpose)
        } AND amopfamily = ${
          parameters.amopfamily === undefined
            ? sql("amopfamily")
            : typed.pg_catalog_oid(parameters.amopfamily)
        } RETURNING oid,amopfamily,amoplefttype,amoprighttype,amopstrategy,amoppurpose,amopopr,amopmethod,amopsortfamily`;

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
      async updateByOid(
        parameters: PgCatalog.Tables.PgAmop.ByOid,
        values: Partial<PgCatalog.PgAmop>,
      ): Promise<PgCatalog.PgAmop> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_amop SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , amopfamily = ${
          values.amopfamily === undefined
            ? sql("amopfamily")
            : typed.pg_catalog_oid(values.amopfamily)
        } , amoplefttype = ${
          values.amoplefttype === undefined
            ? sql("amoplefttype")
            : typed.pg_catalog_oid(values.amoplefttype)
        } , amoprighttype = ${
          values.amoprighttype === undefined
            ? sql("amoprighttype")
            : typed.pg_catalog_oid(values.amoprighttype)
        } , amopstrategy = ${
          values.amopstrategy === undefined
            ? sql("amopstrategy")
            : typed.pg_catalog_int2(values.amopstrategy)
        } , amoppurpose = ${
          values.amoppurpose === undefined
            ? sql("amoppurpose")
            : typed.pg_catalog_char(values.amoppurpose)
        } , amopopr = ${
          values.amopopr === undefined
            ? sql("amopopr")
            : typed.pg_catalog_oid(values.amopopr)
        } , amopmethod = ${
          values.amopmethod === undefined
            ? sql("amopmethod")
            : typed.pg_catalog_oid(values.amopmethod)
        } , amopsortfamily = ${
          values.amopsortfamily === undefined
            ? sql("amopsortfamily")
            : typed.pg_catalog_oid(values.amopsortfamily)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,amopfamily,amoplefttype,amoprighttype,amopstrategy,amoppurpose,amopopr,amopmethod,amopsortfamily`;

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
      ): Promise<PgCatalog.PgAmproc> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,amprocfamily,amproclefttype,amprocrighttype,amprocnum,amproc FROM pg_catalog.pg_amproc WHERE amprocfamily = ${
            parameters.amprocfamily === undefined
              ? sql("amprocfamily")
              : typed.pg_catalog_oid(parameters.amprocfamily)
          } AND amproclefttype = ${
            parameters.amproclefttype === undefined
              ? sql("amproclefttype")
              : typed.pg_catalog_oid(parameters.amproclefttype)
          } AND amprocrighttype = ${
            parameters.amprocrighttype === undefined
              ? sql("amprocrighttype")
              : typed.pg_catalog_oid(parameters.amprocrighttype)
          } AND amprocnum = ${
            parameters.amprocnum === undefined
              ? sql("amprocnum")
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
      async byOid(
        parameters: PgCatalog.Tables.PgAmproc.ByOid,
      ): Promise<PgCatalog.PgAmproc> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,amprocfamily,amproclefttype,amprocrighttype,amprocnum,amproc FROM pg_catalog.pg_amproc WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgAmproc> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_amproc WHERE amprocfamily = ${
            parameters.amprocfamily === undefined
              ? sql("amprocfamily")
              : typed.pg_catalog_oid(parameters.amprocfamily)
          } AND amproclefttype = ${
            parameters.amproclefttype === undefined
              ? sql("amproclefttype")
              : typed.pg_catalog_oid(parameters.amproclefttype)
          } AND amprocrighttype = ${
            parameters.amprocrighttype === undefined
              ? sql("amprocrighttype")
              : typed.pg_catalog_oid(parameters.amprocrighttype)
          } AND amprocnum = ${
            parameters.amprocnum === undefined
              ? sql("amprocnum")
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
      async deleteByOid(
        parameters: PgCatalog.Tables.PgAmproc.ByOid,
      ): Promise<PgCatalog.PgAmproc> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_amproc WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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

      async updateByAmprocfamilyAmproclefttypeAmprocrighttypeAmprocnum(
        parameters: PgCatalog.Tables.PgAmproc.ByAmprocfamilyAmproclefttypeAmprocrighttypeAmprocnum,
        values: Partial<PgCatalog.PgAmproc>,
      ): Promise<PgCatalog.PgAmproc> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_amproc SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , amprocfamily = ${
          values.amprocfamily === undefined
            ? sql("amprocfamily")
            : typed.pg_catalog_oid(values.amprocfamily)
        } , amproclefttype = ${
          values.amproclefttype === undefined
            ? sql("amproclefttype")
            : typed.pg_catalog_oid(values.amproclefttype)
        } , amprocrighttype = ${
          values.amprocrighttype === undefined
            ? sql("amprocrighttype")
            : typed.pg_catalog_oid(values.amprocrighttype)
        } , amprocnum = ${
          values.amprocnum === undefined
            ? sql("amprocnum")
            : typed.pg_catalog_int2(values.amprocnum)
        } , amproc = ${
          values.amproc === undefined
            ? sql("amproc")
            : typed.pg_catalog_regproc(values.amproc)
        } WHERE amprocfamily = ${
          parameters.amprocfamily === undefined
            ? sql("amprocfamily")
            : typed.pg_catalog_oid(parameters.amprocfamily)
        } AND amproclefttype = ${
          parameters.amproclefttype === undefined
            ? sql("amproclefttype")
            : typed.pg_catalog_oid(parameters.amproclefttype)
        } AND amprocrighttype = ${
          parameters.amprocrighttype === undefined
            ? sql("amprocrighttype")
            : typed.pg_catalog_oid(parameters.amprocrighttype)
        } AND amprocnum = ${
          parameters.amprocnum === undefined
            ? sql("amprocnum")
            : typed.pg_catalog_int2(parameters.amprocnum)
        } RETURNING oid,amprocfamily,amproclefttype,amprocrighttype,amprocnum,amproc`;

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
      async updateByOid(
        parameters: PgCatalog.Tables.PgAmproc.ByOid,
        values: Partial<PgCatalog.PgAmproc>,
      ): Promise<PgCatalog.PgAmproc> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_amproc SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , amprocfamily = ${
          values.amprocfamily === undefined
            ? sql("amprocfamily")
            : typed.pg_catalog_oid(values.amprocfamily)
        } , amproclefttype = ${
          values.amproclefttype === undefined
            ? sql("amproclefttype")
            : typed.pg_catalog_oid(values.amproclefttype)
        } , amprocrighttype = ${
          values.amprocrighttype === undefined
            ? sql("amprocrighttype")
            : typed.pg_catalog_oid(values.amprocrighttype)
        } , amprocnum = ${
          values.amprocnum === undefined
            ? sql("amprocnum")
            : typed.pg_catalog_int2(values.amprocnum)
        } , amproc = ${
          values.amproc === undefined
            ? sql("amproc")
            : typed.pg_catalog_regproc(values.amproc)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,amprocfamily,amproclefttype,amprocrighttype,amprocnum,amproc`;

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
        parameters: PgCatalog.Tables.PgLanguage.ByLanname,
      ): Promise<PgCatalog.PgLanguage> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,lanname,lanowner,lanispl,lanpltrusted,lanplcallfoid,laninline,lanvalidator,lanacl FROM pg_catalog.pg_language WHERE lanname = ${
            parameters.lanname === undefined
              ? sql("lanname")
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
      async byOid(
        parameters: PgCatalog.Tables.PgLanguage.ByOid,
      ): Promise<PgCatalog.PgLanguage> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,lanname,lanowner,lanispl,lanpltrusted,lanplcallfoid,laninline,lanvalidator,lanacl FROM pg_catalog.pg_language WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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

      async deleteByLanname(
        parameters: PgCatalog.Tables.PgLanguage.ByLanname,
      ): Promise<PgCatalog.PgLanguage> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_language WHERE lanname = ${
            parameters.lanname === undefined
              ? sql("lanname")
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
      async deleteByOid(
        parameters: PgCatalog.Tables.PgLanguage.ByOid,
      ): Promise<PgCatalog.PgLanguage> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_language WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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

      async updateByLanname(
        parameters: PgCatalog.Tables.PgLanguage.ByLanname,
        values: Partial<PgCatalog.PgLanguage>,
      ): Promise<PgCatalog.PgLanguage> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_language SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , lanname = ${
          values.lanname === undefined
            ? sql("lanname")
            : typed.pg_catalog_name(values.lanname)
        } , lanowner = ${
          values.lanowner === undefined
            ? sql("lanowner")
            : typed.pg_catalog_oid(values.lanowner)
        } , lanispl = ${
          values.lanispl === undefined
            ? sql("lanispl")
            : typed.pg_catalog_bool(values.lanispl)
        } , lanpltrusted = ${
          values.lanpltrusted === undefined
            ? sql("lanpltrusted")
            : typed.pg_catalog_bool(values.lanpltrusted)
        } , lanplcallfoid = ${
          values.lanplcallfoid === undefined
            ? sql("lanplcallfoid")
            : typed.pg_catalog_oid(values.lanplcallfoid)
        } , laninline = ${
          values.laninline === undefined
            ? sql("laninline")
            : typed.pg_catalog_oid(values.laninline)
        } , lanvalidator = ${
          values.lanvalidator === undefined
            ? sql("lanvalidator")
            : typed.pg_catalog_oid(values.lanvalidator)
        } , lanacl = ${
          values.lanacl === undefined
            ? sql("lanacl")
            : typed.pg_catalog__aclitem(values.lanacl)
        } WHERE lanname = ${
          parameters.lanname === undefined
            ? sql("lanname")
            : typed.pg_catalog_cstring(parameters.lanname)
        } RETURNING oid,lanname,lanowner,lanispl,lanpltrusted,lanplcallfoid,laninline,lanvalidator,lanacl`;

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
      async updateByOid(
        parameters: PgCatalog.Tables.PgLanguage.ByOid,
        values: Partial<PgCatalog.PgLanguage>,
      ): Promise<PgCatalog.PgLanguage> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_language SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , lanname = ${
          values.lanname === undefined
            ? sql("lanname")
            : typed.pg_catalog_name(values.lanname)
        } , lanowner = ${
          values.lanowner === undefined
            ? sql("lanowner")
            : typed.pg_catalog_oid(values.lanowner)
        } , lanispl = ${
          values.lanispl === undefined
            ? sql("lanispl")
            : typed.pg_catalog_bool(values.lanispl)
        } , lanpltrusted = ${
          values.lanpltrusted === undefined
            ? sql("lanpltrusted")
            : typed.pg_catalog_bool(values.lanpltrusted)
        } , lanplcallfoid = ${
          values.lanplcallfoid === undefined
            ? sql("lanplcallfoid")
            : typed.pg_catalog_oid(values.lanplcallfoid)
        } , laninline = ${
          values.laninline === undefined
            ? sql("laninline")
            : typed.pg_catalog_oid(values.laninline)
        } , lanvalidator = ${
          values.lanvalidator === undefined
            ? sql("lanvalidator")
            : typed.pg_catalog_oid(values.lanvalidator)
        } , lanacl = ${
          values.lanacl === undefined
            ? sql("lanacl")
            : typed.pg_catalog__aclitem(values.lanacl)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,lanname,lanowner,lanispl,lanpltrusted,lanplcallfoid,laninline,lanvalidator,lanacl`;

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
        parameters: PgCatalog.Tables.PgLargeobjectMetadata.ByOid,
      ): Promise<PgCatalog.PgLargeobjectMetadata> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,lomowner,lomacl FROM pg_catalog.pg_largeobject_metadata WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgLargeobjectMetadata> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_largeobject_metadata WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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

      async updateByOid(
        parameters: PgCatalog.Tables.PgLargeobjectMetadata.ByOid,
        values: Partial<PgCatalog.PgLargeobjectMetadata>,
      ): Promise<PgCatalog.PgLargeobjectMetadata> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_largeobject_metadata SET oid = ${
            values.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(values.oid)
          } , lomowner = ${
            values.lomowner === undefined
              ? sql("lomowner")
              : typed.pg_catalog_oid(values.lomowner)
          } , lomacl = ${
            values.lomacl === undefined
              ? sql("lomacl")
              : typed.pg_catalog__aclitem(values.lomacl)
          } WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,lomowner,lomacl`;

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
        parameters: PgCatalog.Tables.PgAggregate.ByAggfnoid,
      ): Promise<PgCatalog.PgAggregate> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT aggfnoid,aggkind,aggnumdirectargs,aggtransfn,aggfinalfn,aggcombinefn,aggserialfn,aggdeserialfn,aggmtransfn,aggminvtransfn,aggmfinalfn,aggfinalextra,aggmfinalextra,aggfinalmodify,aggmfinalmodify,aggsortop,aggtranstype,aggtransspace,aggmtranstype,aggmtransspace,agginitval,aggminitval FROM pg_catalog.pg_aggregate WHERE aggfnoid = ${
            parameters.aggfnoid === undefined
              ? sql("aggfnoid")
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
      ): Promise<PgCatalog.PgAggregate> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_aggregate WHERE aggfnoid = ${
            parameters.aggfnoid === undefined
              ? sql("aggfnoid")
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

      async updateByAggfnoid(
        parameters: PgCatalog.Tables.PgAggregate.ByAggfnoid,
        values: Partial<PgCatalog.PgAggregate>,
      ): Promise<PgCatalog.PgAggregate> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_aggregate SET aggfnoid = ${
            values.aggfnoid === undefined
              ? sql("aggfnoid")
              : typed.pg_catalog_regproc(values.aggfnoid)
          } , aggkind = ${
            values.aggkind === undefined
              ? sql("aggkind")
              : typed.pg_catalog_char(values.aggkind)
          } , aggnumdirectargs = ${
            values.aggnumdirectargs === undefined
              ? sql("aggnumdirectargs")
              : typed.pg_catalog_int2(values.aggnumdirectargs)
          } , aggtransfn = ${
            values.aggtransfn === undefined
              ? sql("aggtransfn")
              : typed.pg_catalog_regproc(values.aggtransfn)
          } , aggfinalfn = ${
            values.aggfinalfn === undefined
              ? sql("aggfinalfn")
              : typed.pg_catalog_regproc(values.aggfinalfn)
          } , aggcombinefn = ${
            values.aggcombinefn === undefined
              ? sql("aggcombinefn")
              : typed.pg_catalog_regproc(values.aggcombinefn)
          } , aggserialfn = ${
            values.aggserialfn === undefined
              ? sql("aggserialfn")
              : typed.pg_catalog_regproc(values.aggserialfn)
          } , aggdeserialfn = ${
            values.aggdeserialfn === undefined
              ? sql("aggdeserialfn")
              : typed.pg_catalog_regproc(values.aggdeserialfn)
          } , aggmtransfn = ${
            values.aggmtransfn === undefined
              ? sql("aggmtransfn")
              : typed.pg_catalog_regproc(values.aggmtransfn)
          } , aggminvtransfn = ${
            values.aggminvtransfn === undefined
              ? sql("aggminvtransfn")
              : typed.pg_catalog_regproc(values.aggminvtransfn)
          } , aggmfinalfn = ${
            values.aggmfinalfn === undefined
              ? sql("aggmfinalfn")
              : typed.pg_catalog_regproc(values.aggmfinalfn)
          } , aggfinalextra = ${
            values.aggfinalextra === undefined
              ? sql("aggfinalextra")
              : typed.pg_catalog_bool(values.aggfinalextra)
          } , aggmfinalextra = ${
            values.aggmfinalextra === undefined
              ? sql("aggmfinalextra")
              : typed.pg_catalog_bool(values.aggmfinalextra)
          } , aggfinalmodify = ${
            values.aggfinalmodify === undefined
              ? sql("aggfinalmodify")
              : typed.pg_catalog_char(values.aggfinalmodify)
          } , aggmfinalmodify = ${
            values.aggmfinalmodify === undefined
              ? sql("aggmfinalmodify")
              : typed.pg_catalog_char(values.aggmfinalmodify)
          } , aggsortop = ${
            values.aggsortop === undefined
              ? sql("aggsortop")
              : typed.pg_catalog_oid(values.aggsortop)
          } , aggtranstype = ${
            values.aggtranstype === undefined
              ? sql("aggtranstype")
              : typed.pg_catalog_oid(values.aggtranstype)
          } , aggtransspace = ${
            values.aggtransspace === undefined
              ? sql("aggtransspace")
              : typed.pg_catalog_int4(values.aggtransspace)
          } , aggmtranstype = ${
            values.aggmtranstype === undefined
              ? sql("aggmtranstype")
              : typed.pg_catalog_oid(values.aggmtranstype)
          } , aggmtransspace = ${
            values.aggmtransspace === undefined
              ? sql("aggmtransspace")
              : typed.pg_catalog_int4(values.aggmtransspace)
          } , agginitval = ${
            values.agginitval === undefined
              ? sql("agginitval")
              : typed.pg_catalog_text(values.agginitval)
          } , aggminitval = ${
            values.aggminitval === undefined
              ? sql("aggminitval")
              : typed.pg_catalog_text(values.aggminitval)
          } WHERE aggfnoid = ${
            parameters.aggfnoid === undefined
              ? sql("aggfnoid")
              : typed.pg_catalog_regproc(parameters.aggfnoid)
          } RETURNING aggfnoid,aggkind,aggnumdirectargs,aggtransfn,aggfinalfn,aggcombinefn,aggserialfn,aggdeserialfn,aggmtransfn,aggminvtransfn,aggmfinalfn,aggfinalextra,aggmfinalextra,aggfinalmodify,aggmfinalmodify,aggsortop,aggtranstype,aggtransspace,aggmtranstype,aggmtransspace,agginitval,aggminitval`;

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

      async byOid(
        parameters: PgCatalog.Tables.PgStatisticExt.ByOid,
      ): Promise<PgCatalog.PgStatisticExt> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,stxrelid,stxname,stxnamespace,stxowner,stxstattarget,stxkeys,stxkind,stxexprs FROM pg_catalog.pg_statistic_ext WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgStatisticExt> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,stxrelid,stxname,stxnamespace,stxowner,stxstattarget,stxkeys,stxkind,stxexprs FROM pg_catalog.pg_statistic_ext WHERE stxname = ${
            parameters.stxname === undefined
              ? sql("stxname")
              : typed.pg_catalog_cstring(parameters.stxname)
          } AND stxnamespace = ${
            parameters.stxnamespace === undefined
              ? sql("stxnamespace")
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
      async byStxrelid(
        parameters: PgCatalog.Tables.PgStatisticExt.ByStxrelid,
      ): Promise<PgCatalog.PgStatisticExt[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,stxrelid,stxname,stxnamespace,stxowner,stxstattarget,stxkeys,stxkind,stxexprs FROM pg_catalog.pg_statistic_ext WHERE stxrelid = ${
            parameters.stxrelid === undefined
              ? sql("stxrelid")
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

      async deleteByOid(
        parameters: PgCatalog.Tables.PgStatisticExt.ByOid,
      ): Promise<PgCatalog.PgStatisticExt> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_statistic_ext WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgStatisticExt> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_statistic_ext WHERE stxname = ${
            parameters.stxname === undefined
              ? sql("stxname")
              : typed.pg_catalog_cstring(parameters.stxname)
          } AND stxnamespace = ${
            parameters.stxnamespace === undefined
              ? sql("stxnamespace")
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
      ): Promise<PgCatalog.PgStatisticExt[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_statistic_ext WHERE stxrelid = ${
            parameters.stxrelid === undefined
              ? sql("stxrelid")
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

      async updateByOid(
        parameters: PgCatalog.Tables.PgStatisticExt.ByOid,
        values: Partial<PgCatalog.PgStatisticExt>,
      ): Promise<PgCatalog.PgStatisticExt> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_statistic_ext SET oid = ${
            values.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(values.oid)
          } , stxrelid = ${
            values.stxrelid === undefined
              ? sql("stxrelid")
              : typed.pg_catalog_oid(values.stxrelid)
          } , stxname = ${
            values.stxname === undefined
              ? sql("stxname")
              : typed.pg_catalog_name(values.stxname)
          } , stxnamespace = ${
            values.stxnamespace === undefined
              ? sql("stxnamespace")
              : typed.pg_catalog_oid(values.stxnamespace)
          } , stxowner = ${
            values.stxowner === undefined
              ? sql("stxowner")
              : typed.pg_catalog_oid(values.stxowner)
          } , stxstattarget = ${
            values.stxstattarget === undefined
              ? sql("stxstattarget")
              : typed.pg_catalog_int4(values.stxstattarget)
          } , stxkeys = ${
            values.stxkeys === undefined
              ? sql("stxkeys")
              : typed.pg_catalog_int2vector(values.stxkeys)
          } , stxkind = ${
            values.stxkind === undefined
              ? sql("stxkind")
              : typed.pg_catalog__char(values.stxkind)
          } , stxexprs = ${
            values.stxexprs === undefined
              ? sql("stxexprs")
              : typed.pg_catalog_pg_node_tree(values.stxexprs)
          } WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,stxrelid,stxname,stxnamespace,stxowner,stxstattarget,stxkeys,stxkind,stxexprs`;

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
      async updateByStxnameStxnamespace(
        parameters: PgCatalog.Tables.PgStatisticExt.ByStxnameStxnamespace,
        values: Partial<PgCatalog.PgStatisticExt>,
      ): Promise<PgCatalog.PgStatisticExt> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_statistic_ext SET oid = ${
            values.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(values.oid)
          } , stxrelid = ${
            values.stxrelid === undefined
              ? sql("stxrelid")
              : typed.pg_catalog_oid(values.stxrelid)
          } , stxname = ${
            values.stxname === undefined
              ? sql("stxname")
              : typed.pg_catalog_name(values.stxname)
          } , stxnamespace = ${
            values.stxnamespace === undefined
              ? sql("stxnamespace")
              : typed.pg_catalog_oid(values.stxnamespace)
          } , stxowner = ${
            values.stxowner === undefined
              ? sql("stxowner")
              : typed.pg_catalog_oid(values.stxowner)
          } , stxstattarget = ${
            values.stxstattarget === undefined
              ? sql("stxstattarget")
              : typed.pg_catalog_int4(values.stxstattarget)
          } , stxkeys = ${
            values.stxkeys === undefined
              ? sql("stxkeys")
              : typed.pg_catalog_int2vector(values.stxkeys)
          } , stxkind = ${
            values.stxkind === undefined
              ? sql("stxkind")
              : typed.pg_catalog__char(values.stxkind)
          } , stxexprs = ${
            values.stxexprs === undefined
              ? sql("stxexprs")
              : typed.pg_catalog_pg_node_tree(values.stxexprs)
          } WHERE stxname = ${
            parameters.stxname === undefined
              ? sql("stxname")
              : typed.pg_catalog_cstring(parameters.stxname)
          } AND stxnamespace = ${
            parameters.stxnamespace === undefined
              ? sql("stxnamespace")
              : typed.pg_catalog_oid(parameters.stxnamespace)
          } RETURNING oid,stxrelid,stxname,stxnamespace,stxowner,stxstattarget,stxkeys,stxkind,stxexprs`;

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
      async updateByStxrelid(
        parameters: PgCatalog.Tables.PgStatisticExt.ByStxrelid,
        values: Partial<PgCatalog.PgStatisticExt>,
      ): Promise<PgCatalog.PgStatisticExt[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_statistic_ext SET oid = ${
            values.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(values.oid)
          } , stxrelid = ${
            values.stxrelid === undefined
              ? sql("stxrelid")
              : typed.pg_catalog_oid(values.stxrelid)
          } , stxname = ${
            values.stxname === undefined
              ? sql("stxname")
              : typed.pg_catalog_name(values.stxname)
          } , stxnamespace = ${
            values.stxnamespace === undefined
              ? sql("stxnamespace")
              : typed.pg_catalog_oid(values.stxnamespace)
          } , stxowner = ${
            values.stxowner === undefined
              ? sql("stxowner")
              : typed.pg_catalog_oid(values.stxowner)
          } , stxstattarget = ${
            values.stxstattarget === undefined
              ? sql("stxstattarget")
              : typed.pg_catalog_int4(values.stxstattarget)
          } , stxkeys = ${
            values.stxkeys === undefined
              ? sql("stxkeys")
              : typed.pg_catalog_int2vector(values.stxkeys)
          } , stxkind = ${
            values.stxkind === undefined
              ? sql("stxkind")
              : typed.pg_catalog__char(values.stxkind)
          } , stxexprs = ${
            values.stxexprs === undefined
              ? sql("stxexprs")
              : typed.pg_catalog_pg_node_tree(values.stxexprs)
          } WHERE stxrelid = ${
            parameters.stxrelid === undefined
              ? sql("stxrelid")
              : typed.pg_catalog_oid(parameters.stxrelid)
          } RETURNING oid,stxrelid,stxname,stxnamespace,stxowner,stxstattarget,stxkeys,stxkind,stxexprs`;

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
      ): Promise<PgCatalog.PgRewrite> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,rulename,ev_class,ev_type,ev_enabled,is_instead,ev_qual,ev_action FROM pg_catalog.pg_rewrite WHERE ev_class = ${
            parameters.evClass === undefined
              ? sql("ev_class")
              : typed.pg_catalog_oid(parameters.evClass)
          } AND rulename = ${
            parameters.rulename === undefined
              ? sql("rulename")
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
      async byOid(
        parameters: PgCatalog.Tables.PgRewrite.ByOid,
      ): Promise<PgCatalog.PgRewrite> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,rulename,ev_class,ev_type,ev_enabled,is_instead,ev_qual,ev_action FROM pg_catalog.pg_rewrite WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgRewrite> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_rewrite WHERE ev_class = ${
            parameters.evClass === undefined
              ? sql("ev_class")
              : typed.pg_catalog_oid(parameters.evClass)
          } AND rulename = ${
            parameters.rulename === undefined
              ? sql("rulename")
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
      async deleteByOid(
        parameters: PgCatalog.Tables.PgRewrite.ByOid,
      ): Promise<PgCatalog.PgRewrite> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_rewrite WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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

      async updateByEvClassRulename(
        parameters: PgCatalog.Tables.PgRewrite.ByEvClassRulename,
        values: Partial<PgCatalog.PgRewrite>,
      ): Promise<PgCatalog.PgRewrite> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_rewrite SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , rulename = ${
          values.rulename === undefined
            ? sql("rulename")
            : typed.pg_catalog_name(values.rulename)
        } , ev_class = ${
          values.evClass === undefined
            ? sql("ev_class")
            : typed.pg_catalog_oid(values.evClass)
        } , ev_type = ${
          values.evType === undefined
            ? sql("ev_type")
            : typed.pg_catalog_char(values.evType)
        } , ev_enabled = ${
          values.evEnabled === undefined
            ? sql("ev_enabled")
            : typed.pg_catalog_char(values.evEnabled)
        } , is_instead = ${
          values.isInstead === undefined
            ? sql("is_instead")
            : typed.pg_catalog_bool(values.isInstead)
        } , ev_qual = ${
          values.evQual === undefined
            ? sql("ev_qual")
            : typed.pg_catalog_pg_node_tree(values.evQual)
        } , ev_action = ${
          values.evAction === undefined
            ? sql("ev_action")
            : typed.pg_catalog_pg_node_tree(values.evAction)
        } WHERE ev_class = ${
          parameters.evClass === undefined
            ? sql("ev_class")
            : typed.pg_catalog_oid(parameters.evClass)
        } AND rulename = ${
          parameters.rulename === undefined
            ? sql("rulename")
            : typed.pg_catalog_cstring(parameters.rulename)
        } RETURNING oid,rulename,ev_class,ev_type,ev_enabled,is_instead,ev_qual,ev_action`;

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
      async updateByOid(
        parameters: PgCatalog.Tables.PgRewrite.ByOid,
        values: Partial<PgCatalog.PgRewrite>,
      ): Promise<PgCatalog.PgRewrite> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_rewrite SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , rulename = ${
          values.rulename === undefined
            ? sql("rulename")
            : typed.pg_catalog_name(values.rulename)
        } , ev_class = ${
          values.evClass === undefined
            ? sql("ev_class")
            : typed.pg_catalog_oid(values.evClass)
        } , ev_type = ${
          values.evType === undefined
            ? sql("ev_type")
            : typed.pg_catalog_char(values.evType)
        } , ev_enabled = ${
          values.evEnabled === undefined
            ? sql("ev_enabled")
            : typed.pg_catalog_char(values.evEnabled)
        } , is_instead = ${
          values.isInstead === undefined
            ? sql("is_instead")
            : typed.pg_catalog_bool(values.isInstead)
        } , ev_qual = ${
          values.evQual === undefined
            ? sql("ev_qual")
            : typed.pg_catalog_pg_node_tree(values.evQual)
        } , ev_action = ${
          values.evAction === undefined
            ? sql("ev_action")
            : typed.pg_catalog_pg_node_tree(values.evAction)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,rulename,ev_class,ev_type,ev_enabled,is_instead,ev_qual,ev_action`;

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

      async byOid(
        parameters: PgCatalog.Tables.PgTrigger.ByOid,
      ): Promise<PgCatalog.PgTrigger> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,tgrelid,tgparentid,tgname,tgfoid,tgtype,tgenabled,tgisinternal,tgconstrrelid,tgconstrindid,tgconstraint,tgdeferrable,tginitdeferred,tgnargs,tgattr,tgargs,tgqual,tgoldtable,tgnewtable FROM pg_catalog.pg_trigger WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgTrigger[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,tgrelid,tgparentid,tgname,tgfoid,tgtype,tgenabled,tgisinternal,tgconstrrelid,tgconstrindid,tgconstraint,tgdeferrable,tginitdeferred,tgnargs,tgattr,tgargs,tgqual,tgoldtable,tgnewtable FROM pg_catalog.pg_trigger WHERE tgconstraint = ${
            parameters.tgconstraint === undefined
              ? sql("tgconstraint")
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
      ): Promise<PgCatalog.PgTrigger> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,tgrelid,tgparentid,tgname,tgfoid,tgtype,tgenabled,tgisinternal,tgconstrrelid,tgconstrindid,tgconstraint,tgdeferrable,tginitdeferred,tgnargs,tgattr,tgargs,tgqual,tgoldtable,tgnewtable FROM pg_catalog.pg_trigger WHERE tgrelid = ${
            parameters.tgrelid === undefined
              ? sql("tgrelid")
              : typed.pg_catalog_oid(parameters.tgrelid)
          } AND tgname = ${
            parameters.tgname === undefined
              ? sql("tgname")
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

      async deleteByOid(
        parameters: PgCatalog.Tables.PgTrigger.ByOid,
      ): Promise<PgCatalog.PgTrigger> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_trigger WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgTrigger[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_trigger WHERE tgconstraint = ${
            parameters.tgconstraint === undefined
              ? sql("tgconstraint")
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
      ): Promise<PgCatalog.PgTrigger> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_trigger WHERE tgrelid = ${
            parameters.tgrelid === undefined
              ? sql("tgrelid")
              : typed.pg_catalog_oid(parameters.tgrelid)
          } AND tgname = ${
            parameters.tgname === undefined
              ? sql("tgname")
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

      async updateByOid(
        parameters: PgCatalog.Tables.PgTrigger.ByOid,
        values: Partial<PgCatalog.PgTrigger>,
      ): Promise<PgCatalog.PgTrigger> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_trigger SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , tgrelid = ${
          values.tgrelid === undefined
            ? sql("tgrelid")
            : typed.pg_catalog_oid(values.tgrelid)
        } , tgparentid = ${
          values.tgparentid === undefined
            ? sql("tgparentid")
            : typed.pg_catalog_oid(values.tgparentid)
        } , tgname = ${
          values.tgname === undefined
            ? sql("tgname")
            : typed.pg_catalog_name(values.tgname)
        } , tgfoid = ${
          values.tgfoid === undefined
            ? sql("tgfoid")
            : typed.pg_catalog_oid(values.tgfoid)
        } , tgtype = ${
          values.tgtype === undefined
            ? sql("tgtype")
            : typed.pg_catalog_int2(values.tgtype)
        } , tgenabled = ${
          values.tgenabled === undefined
            ? sql("tgenabled")
            : typed.pg_catalog_char(values.tgenabled)
        } , tgisinternal = ${
          values.tgisinternal === undefined
            ? sql("tgisinternal")
            : typed.pg_catalog_bool(values.tgisinternal)
        } , tgconstrrelid = ${
          values.tgconstrrelid === undefined
            ? sql("tgconstrrelid")
            : typed.pg_catalog_oid(values.tgconstrrelid)
        } , tgconstrindid = ${
          values.tgconstrindid === undefined
            ? sql("tgconstrindid")
            : typed.pg_catalog_oid(values.tgconstrindid)
        } , tgconstraint = ${
          values.tgconstraint === undefined
            ? sql("tgconstraint")
            : typed.pg_catalog_oid(values.tgconstraint)
        } , tgdeferrable = ${
          values.tgdeferrable === undefined
            ? sql("tgdeferrable")
            : typed.pg_catalog_bool(values.tgdeferrable)
        } , tginitdeferred = ${
          values.tginitdeferred === undefined
            ? sql("tginitdeferred")
            : typed.pg_catalog_bool(values.tginitdeferred)
        } , tgnargs = ${
          values.tgnargs === undefined
            ? sql("tgnargs")
            : typed.pg_catalog_int2(values.tgnargs)
        } , tgattr = ${
          values.tgattr === undefined
            ? sql("tgattr")
            : typed.pg_catalog_int2vector(values.tgattr)
        } , tgargs = ${
          values.tgargs === undefined
            ? sql("tgargs")
            : typed.pg_catalog_bytea(values.tgargs)
        } , tgqual = ${
          values.tgqual === undefined
            ? sql("tgqual")
            : typed.pg_catalog_pg_node_tree(values.tgqual)
        } , tgoldtable = ${
          values.tgoldtable === undefined
            ? sql("tgoldtable")
            : typed.pg_catalog_name(values.tgoldtable)
        } , tgnewtable = ${
          values.tgnewtable === undefined
            ? sql("tgnewtable")
            : typed.pg_catalog_name(values.tgnewtable)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,tgrelid,tgparentid,tgname,tgfoid,tgtype,tgenabled,tgisinternal,tgconstrrelid,tgconstrindid,tgconstraint,tgdeferrable,tginitdeferred,tgnargs,tgattr,tgargs,tgqual,tgoldtable,tgnewtable`;

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
      async updateByTgconstraint(
        parameters: PgCatalog.Tables.PgTrigger.ByTgconstraint,
        values: Partial<PgCatalog.PgTrigger>,
      ): Promise<PgCatalog.PgTrigger[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_trigger SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , tgrelid = ${
          values.tgrelid === undefined
            ? sql("tgrelid")
            : typed.pg_catalog_oid(values.tgrelid)
        } , tgparentid = ${
          values.tgparentid === undefined
            ? sql("tgparentid")
            : typed.pg_catalog_oid(values.tgparentid)
        } , tgname = ${
          values.tgname === undefined
            ? sql("tgname")
            : typed.pg_catalog_name(values.tgname)
        } , tgfoid = ${
          values.tgfoid === undefined
            ? sql("tgfoid")
            : typed.pg_catalog_oid(values.tgfoid)
        } , tgtype = ${
          values.tgtype === undefined
            ? sql("tgtype")
            : typed.pg_catalog_int2(values.tgtype)
        } , tgenabled = ${
          values.tgenabled === undefined
            ? sql("tgenabled")
            : typed.pg_catalog_char(values.tgenabled)
        } , tgisinternal = ${
          values.tgisinternal === undefined
            ? sql("tgisinternal")
            : typed.pg_catalog_bool(values.tgisinternal)
        } , tgconstrrelid = ${
          values.tgconstrrelid === undefined
            ? sql("tgconstrrelid")
            : typed.pg_catalog_oid(values.tgconstrrelid)
        } , tgconstrindid = ${
          values.tgconstrindid === undefined
            ? sql("tgconstrindid")
            : typed.pg_catalog_oid(values.tgconstrindid)
        } , tgconstraint = ${
          values.tgconstraint === undefined
            ? sql("tgconstraint")
            : typed.pg_catalog_oid(values.tgconstraint)
        } , tgdeferrable = ${
          values.tgdeferrable === undefined
            ? sql("tgdeferrable")
            : typed.pg_catalog_bool(values.tgdeferrable)
        } , tginitdeferred = ${
          values.tginitdeferred === undefined
            ? sql("tginitdeferred")
            : typed.pg_catalog_bool(values.tginitdeferred)
        } , tgnargs = ${
          values.tgnargs === undefined
            ? sql("tgnargs")
            : typed.pg_catalog_int2(values.tgnargs)
        } , tgattr = ${
          values.tgattr === undefined
            ? sql("tgattr")
            : typed.pg_catalog_int2vector(values.tgattr)
        } , tgargs = ${
          values.tgargs === undefined
            ? sql("tgargs")
            : typed.pg_catalog_bytea(values.tgargs)
        } , tgqual = ${
          values.tgqual === undefined
            ? sql("tgqual")
            : typed.pg_catalog_pg_node_tree(values.tgqual)
        } , tgoldtable = ${
          values.tgoldtable === undefined
            ? sql("tgoldtable")
            : typed.pg_catalog_name(values.tgoldtable)
        } , tgnewtable = ${
          values.tgnewtable === undefined
            ? sql("tgnewtable")
            : typed.pg_catalog_name(values.tgnewtable)
        } WHERE tgconstraint = ${
          parameters.tgconstraint === undefined
            ? sql("tgconstraint")
            : typed.pg_catalog_oid(parameters.tgconstraint)
        } RETURNING oid,tgrelid,tgparentid,tgname,tgfoid,tgtype,tgenabled,tgisinternal,tgconstrrelid,tgconstrindid,tgconstraint,tgdeferrable,tginitdeferred,tgnargs,tgattr,tgargs,tgqual,tgoldtable,tgnewtable`;

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
      async updateByTgrelidTgname(
        parameters: PgCatalog.Tables.PgTrigger.ByTgrelidTgname,
        values: Partial<PgCatalog.PgTrigger>,
      ): Promise<PgCatalog.PgTrigger> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_trigger SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , tgrelid = ${
          values.tgrelid === undefined
            ? sql("tgrelid")
            : typed.pg_catalog_oid(values.tgrelid)
        } , tgparentid = ${
          values.tgparentid === undefined
            ? sql("tgparentid")
            : typed.pg_catalog_oid(values.tgparentid)
        } , tgname = ${
          values.tgname === undefined
            ? sql("tgname")
            : typed.pg_catalog_name(values.tgname)
        } , tgfoid = ${
          values.tgfoid === undefined
            ? sql("tgfoid")
            : typed.pg_catalog_oid(values.tgfoid)
        } , tgtype = ${
          values.tgtype === undefined
            ? sql("tgtype")
            : typed.pg_catalog_int2(values.tgtype)
        } , tgenabled = ${
          values.tgenabled === undefined
            ? sql("tgenabled")
            : typed.pg_catalog_char(values.tgenabled)
        } , tgisinternal = ${
          values.tgisinternal === undefined
            ? sql("tgisinternal")
            : typed.pg_catalog_bool(values.tgisinternal)
        } , tgconstrrelid = ${
          values.tgconstrrelid === undefined
            ? sql("tgconstrrelid")
            : typed.pg_catalog_oid(values.tgconstrrelid)
        } , tgconstrindid = ${
          values.tgconstrindid === undefined
            ? sql("tgconstrindid")
            : typed.pg_catalog_oid(values.tgconstrindid)
        } , tgconstraint = ${
          values.tgconstraint === undefined
            ? sql("tgconstraint")
            : typed.pg_catalog_oid(values.tgconstraint)
        } , tgdeferrable = ${
          values.tgdeferrable === undefined
            ? sql("tgdeferrable")
            : typed.pg_catalog_bool(values.tgdeferrable)
        } , tginitdeferred = ${
          values.tginitdeferred === undefined
            ? sql("tginitdeferred")
            : typed.pg_catalog_bool(values.tginitdeferred)
        } , tgnargs = ${
          values.tgnargs === undefined
            ? sql("tgnargs")
            : typed.pg_catalog_int2(values.tgnargs)
        } , tgattr = ${
          values.tgattr === undefined
            ? sql("tgattr")
            : typed.pg_catalog_int2vector(values.tgattr)
        } , tgargs = ${
          values.tgargs === undefined
            ? sql("tgargs")
            : typed.pg_catalog_bytea(values.tgargs)
        } , tgqual = ${
          values.tgqual === undefined
            ? sql("tgqual")
            : typed.pg_catalog_pg_node_tree(values.tgqual)
        } , tgoldtable = ${
          values.tgoldtable === undefined
            ? sql("tgoldtable")
            : typed.pg_catalog_name(values.tgoldtable)
        } , tgnewtable = ${
          values.tgnewtable === undefined
            ? sql("tgnewtable")
            : typed.pg_catalog_name(values.tgnewtable)
        } WHERE tgrelid = ${
          parameters.tgrelid === undefined
            ? sql("tgrelid")
            : typed.pg_catalog_oid(parameters.tgrelid)
        } AND tgname = ${
          parameters.tgname === undefined
            ? sql("tgname")
            : typed.pg_catalog_cstring(parameters.tgname)
        } RETURNING oid,tgrelid,tgparentid,tgname,tgfoid,tgtype,tgenabled,tgisinternal,tgconstrrelid,tgconstrindid,tgconstraint,tgdeferrable,tginitdeferred,tgnargs,tgattr,tgargs,tgqual,tgoldtable,tgnewtable`;

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
        parameters: PgCatalog.Tables.PgEventTrigger.ByEvtname,
      ): Promise<PgCatalog.PgEventTrigger> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,evtname,evtevent,evtowner,evtfoid,evtenabled,evttags FROM pg_catalog.pg_event_trigger WHERE evtname = ${
            parameters.evtname === undefined
              ? sql("evtname")
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
      async byOid(
        parameters: PgCatalog.Tables.PgEventTrigger.ByOid,
      ): Promise<PgCatalog.PgEventTrigger> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,evtname,evtevent,evtowner,evtfoid,evtenabled,evttags FROM pg_catalog.pg_event_trigger WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgEventTrigger> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_event_trigger WHERE evtname = ${
            parameters.evtname === undefined
              ? sql("evtname")
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
      async deleteByOid(
        parameters: PgCatalog.Tables.PgEventTrigger.ByOid,
      ): Promise<PgCatalog.PgEventTrigger> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_event_trigger WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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

      async updateByEvtname(
        parameters: PgCatalog.Tables.PgEventTrigger.ByEvtname,
        values: Partial<PgCatalog.PgEventTrigger>,
      ): Promise<PgCatalog.PgEventTrigger> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_event_trigger SET oid = ${
            values.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(values.oid)
          } , evtname = ${
            values.evtname === undefined
              ? sql("evtname")
              : typed.pg_catalog_name(values.evtname)
          } , evtevent = ${
            values.evtevent === undefined
              ? sql("evtevent")
              : typed.pg_catalog_name(values.evtevent)
          } , evtowner = ${
            values.evtowner === undefined
              ? sql("evtowner")
              : typed.pg_catalog_oid(values.evtowner)
          } , evtfoid = ${
            values.evtfoid === undefined
              ? sql("evtfoid")
              : typed.pg_catalog_oid(values.evtfoid)
          } , evtenabled = ${
            values.evtenabled === undefined
              ? sql("evtenabled")
              : typed.pg_catalog_char(values.evtenabled)
          } , evttags = ${
            values.evttags === undefined
              ? sql("evttags")
              : typed.pg_catalog__text(values.evttags)
          } WHERE evtname = ${
            parameters.evtname === undefined
              ? sql("evtname")
              : typed.pg_catalog_cstring(parameters.evtname)
          } RETURNING oid,evtname,evtevent,evtowner,evtfoid,evtenabled,evttags`;

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
      async updateByOid(
        parameters: PgCatalog.Tables.PgEventTrigger.ByOid,
        values: Partial<PgCatalog.PgEventTrigger>,
      ): Promise<PgCatalog.PgEventTrigger> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_event_trigger SET oid = ${
            values.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(values.oid)
          } , evtname = ${
            values.evtname === undefined
              ? sql("evtname")
              : typed.pg_catalog_name(values.evtname)
          } , evtevent = ${
            values.evtevent === undefined
              ? sql("evtevent")
              : typed.pg_catalog_name(values.evtevent)
          } , evtowner = ${
            values.evtowner === undefined
              ? sql("evtowner")
              : typed.pg_catalog_oid(values.evtowner)
          } , evtfoid = ${
            values.evtfoid === undefined
              ? sql("evtfoid")
              : typed.pg_catalog_oid(values.evtfoid)
          } , evtenabled = ${
            values.evtenabled === undefined
              ? sql("evtenabled")
              : typed.pg_catalog_char(values.evtenabled)
          } , evttags = ${
            values.evttags === undefined
              ? sql("evttags")
              : typed.pg_catalog__text(values.evttags)
          } WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,evtname,evtevent,evtowner,evtfoid,evtenabled,evttags`;

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
      ): Promise<PgCatalog.PgDescription> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT objoid,classoid,objsubid,description FROM pg_catalog.pg_description WHERE objoid = ${
            parameters.objoid === undefined
              ? sql("objoid")
              : typed.pg_catalog_oid(parameters.objoid)
          } AND classoid = ${
            parameters.classoid === undefined
              ? sql("classoid")
              : typed.pg_catalog_oid(parameters.classoid)
          } AND objsubid = ${
            parameters.objsubid === undefined
              ? sql("objsubid")
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
      ): Promise<PgCatalog.PgDescription> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_description WHERE objoid = ${
            parameters.objoid === undefined
              ? sql("objoid")
              : typed.pg_catalog_oid(parameters.objoid)
          } AND classoid = ${
            parameters.classoid === undefined
              ? sql("classoid")
              : typed.pg_catalog_oid(parameters.classoid)
          } AND objsubid = ${
            parameters.objsubid === undefined
              ? sql("objsubid")
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

      async updateByObjoidClassoidObjsubid(
        parameters: PgCatalog.Tables.PgDescription.ByObjoidClassoidObjsubid,
        values: Partial<PgCatalog.PgDescription>,
      ): Promise<PgCatalog.PgDescription> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_description SET objoid = ${
            values.objoid === undefined
              ? sql("objoid")
              : typed.pg_catalog_oid(values.objoid)
          } , classoid = ${
            values.classoid === undefined
              ? sql("classoid")
              : typed.pg_catalog_oid(values.classoid)
          } , objsubid = ${
            values.objsubid === undefined
              ? sql("objsubid")
              : typed.pg_catalog_int4(values.objsubid)
          } , description = ${
            values.description === undefined
              ? sql("description")
              : typed.pg_catalog_text(values.description)
          } WHERE objoid = ${
            parameters.objoid === undefined
              ? sql("objoid")
              : typed.pg_catalog_oid(parameters.objoid)
          } AND classoid = ${
            parameters.classoid === undefined
              ? sql("classoid")
              : typed.pg_catalog_oid(parameters.classoid)
          } AND objsubid = ${
            parameters.objsubid === undefined
              ? sql("objsubid")
              : typed.pg_catalog_int4(parameters.objsubid)
          } RETURNING objoid,classoid,objsubid,description`;

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
      ): Promise<PgCatalog.PgCast> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,castsource,casttarget,castfunc,castcontext,castmethod FROM pg_catalog.pg_cast WHERE castsource = ${
            parameters.castsource === undefined
              ? sql("castsource")
              : typed.pg_catalog_oid(parameters.castsource)
          } AND casttarget = ${
            parameters.casttarget === undefined
              ? sql("casttarget")
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
      async byOid(
        parameters: PgCatalog.Tables.PgCast.ByOid,
      ): Promise<PgCatalog.PgCast> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,castsource,casttarget,castfunc,castcontext,castmethod FROM pg_catalog.pg_cast WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgCast> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_cast WHERE castsource = ${
            parameters.castsource === undefined
              ? sql("castsource")
              : typed.pg_catalog_oid(parameters.castsource)
          } AND casttarget = ${
            parameters.casttarget === undefined
              ? sql("casttarget")
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
      async deleteByOid(
        parameters: PgCatalog.Tables.PgCast.ByOid,
      ): Promise<PgCatalog.PgCast> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`DELETE FROM pg_catalog.pg_cast WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
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

      async updateByCastsourceCasttarget(
        parameters: PgCatalog.Tables.PgCast.ByCastsourceCasttarget,
        values: Partial<PgCatalog.PgCast>,
      ): Promise<PgCatalog.PgCast> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_cast SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , castsource = ${
          values.castsource === undefined
            ? sql("castsource")
            : typed.pg_catalog_oid(values.castsource)
        } , casttarget = ${
          values.casttarget === undefined
            ? sql("casttarget")
            : typed.pg_catalog_oid(values.casttarget)
        } , castfunc = ${
          values.castfunc === undefined
            ? sql("castfunc")
            : typed.pg_catalog_oid(values.castfunc)
        } , castcontext = ${
          values.castcontext === undefined
            ? sql("castcontext")
            : typed.pg_catalog_char(values.castcontext)
        } , castmethod = ${
          values.castmethod === undefined
            ? sql("castmethod")
            : typed.pg_catalog_char(values.castmethod)
        } WHERE castsource = ${
          parameters.castsource === undefined
            ? sql("castsource")
            : typed.pg_catalog_oid(parameters.castsource)
        } AND casttarget = ${
          parameters.casttarget === undefined
            ? sql("casttarget")
            : typed.pg_catalog_oid(parameters.casttarget)
        } RETURNING oid,castsource,casttarget,castfunc,castcontext,castmethod`;

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
      async updateByOid(
        parameters: PgCatalog.Tables.PgCast.ByOid,
        values: Partial<PgCatalog.PgCast>,
      ): Promise<PgCatalog.PgCast> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_cast SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , castsource = ${
          values.castsource === undefined
            ? sql("castsource")
            : typed.pg_catalog_oid(values.castsource)
        } , casttarget = ${
          values.casttarget === undefined
            ? sql("casttarget")
            : typed.pg_catalog_oid(values.casttarget)
        } , castfunc = ${
          values.castfunc === undefined
            ? sql("castfunc")
            : typed.pg_catalog_oid(values.castfunc)
        } , castcontext = ${
          values.castcontext === undefined
            ? sql("castcontext")
            : typed.pg_catalog_char(values.castcontext)
        } , castmethod = ${
          values.castmethod === undefined
            ? sql("castmethod")
            : typed.pg_catalog_char(values.castmethod)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,castsource,casttarget,castfunc,castcontext,castmethod`;

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
      ): Promise<PgCatalog.PgEnum> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,enumtypid,enumsortorder,enumlabel FROM pg_catalog.pg_enum WHERE enumtypid = ${
            parameters.enumtypid === undefined
              ? sql("enumtypid")
              : typed.pg_catalog_oid(parameters.enumtypid)
          } AND enumlabel = ${
            parameters.enumlabel === undefined
              ? sql("enumlabel")
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
      ): Promise<PgCatalog.PgEnum> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,enumtypid,enumsortorder,enumlabel FROM pg_catalog.pg_enum WHERE enumtypid = ${
            parameters.enumtypid === undefined
              ? sql("enumtypid")
              : typed.pg_catalog_oid(parameters.enumtypid)
          } AND enumsortorder = ${
            parameters.enumsortorder === undefined
              ? sql("enumsortorder")
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
      async byOid(
        parameters: PgCatalog.Tables.PgEnum.ByOid,
      ): Promise<PgCatalog.PgEnum> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,enumtypid,enumsortorder,enumlabel FROM pg_catalog.pg_enum WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgEnum> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_enum WHERE enumtypid = ${
            parameters.enumtypid === undefined
              ? sql("enumtypid")
              : typed.pg_catalog_oid(parameters.enumtypid)
          } AND enumlabel = ${
            parameters.enumlabel === undefined
              ? sql("enumlabel")
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
      ): Promise<PgCatalog.PgEnum> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_enum WHERE enumtypid = ${
            parameters.enumtypid === undefined
              ? sql("enumtypid")
              : typed.pg_catalog_oid(parameters.enumtypid)
          } AND enumsortorder = ${
            parameters.enumsortorder === undefined
              ? sql("enumsortorder")
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
      async deleteByOid(
        parameters: PgCatalog.Tables.PgEnum.ByOid,
      ): Promise<PgCatalog.PgEnum> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`DELETE FROM pg_catalog.pg_enum WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
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

      async updateByEnumtypidEnumlabel(
        parameters: PgCatalog.Tables.PgEnum.ByEnumtypidEnumlabel,
        values: Partial<PgCatalog.PgEnum>,
      ): Promise<PgCatalog.PgEnum> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_enum SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , enumtypid = ${
          values.enumtypid === undefined
            ? sql("enumtypid")
            : typed.pg_catalog_oid(values.enumtypid)
        } , enumsortorder = ${
          values.enumsortorder === undefined
            ? sql("enumsortorder")
            : typed.pg_catalog_float4(values.enumsortorder)
        } , enumlabel = ${
          values.enumlabel === undefined
            ? sql("enumlabel")
            : typed.pg_catalog_name(values.enumlabel)
        } WHERE enumtypid = ${
          parameters.enumtypid === undefined
            ? sql("enumtypid")
            : typed.pg_catalog_oid(parameters.enumtypid)
        } AND enumlabel = ${
          parameters.enumlabel === undefined
            ? sql("enumlabel")
            : typed.pg_catalog_cstring(parameters.enumlabel)
        } RETURNING oid,enumtypid,enumsortorder,enumlabel`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          enumtypid: undefinedIsNull(record.enumtypid),
          enumsortorder: undefinedIsNull(record.enumsortorder),
          enumlabel: undefinedIsNull(record.enumlabel),
        }));
        return results[0];
      }
      async updateByEnumtypidEnumsortorder(
        parameters: PgCatalog.Tables.PgEnum.ByEnumtypidEnumsortorder,
        values: Partial<PgCatalog.PgEnum>,
      ): Promise<PgCatalog.PgEnum> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_enum SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , enumtypid = ${
          values.enumtypid === undefined
            ? sql("enumtypid")
            : typed.pg_catalog_oid(values.enumtypid)
        } , enumsortorder = ${
          values.enumsortorder === undefined
            ? sql("enumsortorder")
            : typed.pg_catalog_float4(values.enumsortorder)
        } , enumlabel = ${
          values.enumlabel === undefined
            ? sql("enumlabel")
            : typed.pg_catalog_name(values.enumlabel)
        } WHERE enumtypid = ${
          parameters.enumtypid === undefined
            ? sql("enumtypid")
            : typed.pg_catalog_oid(parameters.enumtypid)
        } AND enumsortorder = ${
          parameters.enumsortorder === undefined
            ? sql("enumsortorder")
            : typed.pg_catalog_float4(parameters.enumsortorder)
        } RETURNING oid,enumtypid,enumsortorder,enumlabel`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          enumtypid: undefinedIsNull(record.enumtypid),
          enumsortorder: undefinedIsNull(record.enumsortorder),
          enumlabel: undefinedIsNull(record.enumlabel),
        }));
        return results[0];
      }
      async updateByOid(
        parameters: PgCatalog.Tables.PgEnum.ByOid,
        values: Partial<PgCatalog.PgEnum>,
      ): Promise<PgCatalog.PgEnum> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_enum SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , enumtypid = ${
          values.enumtypid === undefined
            ? sql("enumtypid")
            : typed.pg_catalog_oid(values.enumtypid)
        } , enumsortorder = ${
          values.enumsortorder === undefined
            ? sql("enumsortorder")
            : typed.pg_catalog_float4(values.enumsortorder)
        } , enumlabel = ${
          values.enumlabel === undefined
            ? sql("enumlabel")
            : typed.pg_catalog_name(values.enumlabel)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,enumtypid,enumsortorder,enumlabel`;

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
        parameters: PgCatalog.Tables.PgNamespace.ByNspname,
      ): Promise<PgCatalog.PgNamespace> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,nspname,nspowner,nspacl FROM pg_catalog.pg_namespace WHERE nspname = ${
            parameters.nspname === undefined
              ? sql("nspname")
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
      async byOid(
        parameters: PgCatalog.Tables.PgNamespace.ByOid,
      ): Promise<PgCatalog.PgNamespace> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,nspname,nspowner,nspacl FROM pg_catalog.pg_namespace WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgNamespace> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_namespace WHERE nspname = ${
            parameters.nspname === undefined
              ? sql("nspname")
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
      async deleteByOid(
        parameters: PgCatalog.Tables.PgNamespace.ByOid,
      ): Promise<PgCatalog.PgNamespace> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_namespace WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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

      async updateByNspname(
        parameters: PgCatalog.Tables.PgNamespace.ByNspname,
        values: Partial<PgCatalog.PgNamespace>,
      ): Promise<PgCatalog.PgNamespace> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_namespace SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , nspname = ${
          values.nspname === undefined
            ? sql("nspname")
            : typed.pg_catalog_name(values.nspname)
        } , nspowner = ${
          values.nspowner === undefined
            ? sql("nspowner")
            : typed.pg_catalog_oid(values.nspowner)
        } , nspacl = ${
          values.nspacl === undefined
            ? sql("nspacl")
            : typed.pg_catalog__aclitem(values.nspacl)
        } WHERE nspname = ${
          parameters.nspname === undefined
            ? sql("nspname")
            : typed.pg_catalog_cstring(parameters.nspname)
        } RETURNING oid,nspname,nspowner,nspacl`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          nspname: undefinedIsNull(record.nspname),
          nspowner: undefinedIsNull(record.nspowner),
          nspacl: undefinedIsNull(record.nspacl),
        }));
        return results[0];
      }
      async updateByOid(
        parameters: PgCatalog.Tables.PgNamespace.ByOid,
        values: Partial<PgCatalog.PgNamespace>,
      ): Promise<PgCatalog.PgNamespace> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_namespace SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , nspname = ${
          values.nspname === undefined
            ? sql("nspname")
            : typed.pg_catalog_name(values.nspname)
        } , nspowner = ${
          values.nspowner === undefined
            ? sql("nspowner")
            : typed.pg_catalog_oid(values.nspowner)
        } , nspacl = ${
          values.nspacl === undefined
            ? sql("nspacl")
            : typed.pg_catalog__aclitem(values.nspacl)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,nspname,nspowner,nspacl`;

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
      ): Promise<PgCatalog.PgConversion> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,conname,connamespace,conowner,conforencoding,contoencoding,conproc,condefault FROM pg_catalog.pg_conversion WHERE conname = ${
            parameters.conname === undefined
              ? sql("conname")
              : typed.pg_catalog_cstring(parameters.conname)
          } AND connamespace = ${
            parameters.connamespace === undefined
              ? sql("connamespace")
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
      ): Promise<PgCatalog.PgConversion> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,conname,connamespace,conowner,conforencoding,contoencoding,conproc,condefault FROM pg_catalog.pg_conversion WHERE connamespace = ${
            parameters.connamespace === undefined
              ? sql("connamespace")
              : typed.pg_catalog_oid(parameters.connamespace)
          } AND conforencoding = ${
            parameters.conforencoding === undefined
              ? sql("conforencoding")
              : typed.pg_catalog_int4(parameters.conforencoding)
          } AND contoencoding = ${
            parameters.contoencoding === undefined
              ? sql("contoencoding")
              : typed.pg_catalog_int4(parameters.contoencoding)
          } AND oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      async byOid(
        parameters: PgCatalog.Tables.PgConversion.ByOid,
      ): Promise<PgCatalog.PgConversion> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,conname,connamespace,conowner,conforencoding,contoencoding,conproc,condefault FROM pg_catalog.pg_conversion WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgConversion> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_conversion WHERE conname = ${
            parameters.conname === undefined
              ? sql("conname")
              : typed.pg_catalog_cstring(parameters.conname)
          } AND connamespace = ${
            parameters.connamespace === undefined
              ? sql("connamespace")
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
      ): Promise<PgCatalog.PgConversion> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_conversion WHERE connamespace = ${
            parameters.connamespace === undefined
              ? sql("connamespace")
              : typed.pg_catalog_oid(parameters.connamespace)
          } AND conforencoding = ${
            parameters.conforencoding === undefined
              ? sql("conforencoding")
              : typed.pg_catalog_int4(parameters.conforencoding)
          } AND contoencoding = ${
            parameters.contoencoding === undefined
              ? sql("contoencoding")
              : typed.pg_catalog_int4(parameters.contoencoding)
          } AND oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      async deleteByOid(
        parameters: PgCatalog.Tables.PgConversion.ByOid,
      ): Promise<PgCatalog.PgConversion> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_conversion WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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

      async updateByConnameConnamespace(
        parameters: PgCatalog.Tables.PgConversion.ByConnameConnamespace,
        values: Partial<PgCatalog.PgConversion>,
      ): Promise<PgCatalog.PgConversion> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_conversion SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , conname = ${
          values.conname === undefined
            ? sql("conname")
            : typed.pg_catalog_name(values.conname)
        } , connamespace = ${
          values.connamespace === undefined
            ? sql("connamespace")
            : typed.pg_catalog_oid(values.connamespace)
        } , conowner = ${
          values.conowner === undefined
            ? sql("conowner")
            : typed.pg_catalog_oid(values.conowner)
        } , conforencoding = ${
          values.conforencoding === undefined
            ? sql("conforencoding")
            : typed.pg_catalog_int4(values.conforencoding)
        } , contoencoding = ${
          values.contoencoding === undefined
            ? sql("contoencoding")
            : typed.pg_catalog_int4(values.contoencoding)
        } , conproc = ${
          values.conproc === undefined
            ? sql("conproc")
            : typed.pg_catalog_regproc(values.conproc)
        } , condefault = ${
          values.condefault === undefined
            ? sql("condefault")
            : typed.pg_catalog_bool(values.condefault)
        } WHERE conname = ${
          parameters.conname === undefined
            ? sql("conname")
            : typed.pg_catalog_cstring(parameters.conname)
        } AND connamespace = ${
          parameters.connamespace === undefined
            ? sql("connamespace")
            : typed.pg_catalog_oid(parameters.connamespace)
        } RETURNING oid,conname,connamespace,conowner,conforencoding,contoencoding,conproc,condefault`;

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
      async updateByConnamespaceConforencodingContoencodingOid(
        parameters: PgCatalog.Tables.PgConversion.ByConnamespaceConforencodingContoencodingOid,
        values: Partial<PgCatalog.PgConversion>,
      ): Promise<PgCatalog.PgConversion> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_conversion SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , conname = ${
          values.conname === undefined
            ? sql("conname")
            : typed.pg_catalog_name(values.conname)
        } , connamespace = ${
          values.connamespace === undefined
            ? sql("connamespace")
            : typed.pg_catalog_oid(values.connamespace)
        } , conowner = ${
          values.conowner === undefined
            ? sql("conowner")
            : typed.pg_catalog_oid(values.conowner)
        } , conforencoding = ${
          values.conforencoding === undefined
            ? sql("conforencoding")
            : typed.pg_catalog_int4(values.conforencoding)
        } , contoencoding = ${
          values.contoencoding === undefined
            ? sql("contoencoding")
            : typed.pg_catalog_int4(values.contoencoding)
        } , conproc = ${
          values.conproc === undefined
            ? sql("conproc")
            : typed.pg_catalog_regproc(values.conproc)
        } , condefault = ${
          values.condefault === undefined
            ? sql("condefault")
            : typed.pg_catalog_bool(values.condefault)
        } WHERE connamespace = ${
          parameters.connamespace === undefined
            ? sql("connamespace")
            : typed.pg_catalog_oid(parameters.connamespace)
        } AND conforencoding = ${
          parameters.conforencoding === undefined
            ? sql("conforencoding")
            : typed.pg_catalog_int4(parameters.conforencoding)
        } AND contoencoding = ${
          parameters.contoencoding === undefined
            ? sql("contoencoding")
            : typed.pg_catalog_int4(parameters.contoencoding)
        } AND oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,conname,connamespace,conowner,conforencoding,contoencoding,conproc,condefault`;

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
      async updateByOid(
        parameters: PgCatalog.Tables.PgConversion.ByOid,
        values: Partial<PgCatalog.PgConversion>,
      ): Promise<PgCatalog.PgConversion> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_conversion SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , conname = ${
          values.conname === undefined
            ? sql("conname")
            : typed.pg_catalog_name(values.conname)
        } , connamespace = ${
          values.connamespace === undefined
            ? sql("connamespace")
            : typed.pg_catalog_oid(values.connamespace)
        } , conowner = ${
          values.conowner === undefined
            ? sql("conowner")
            : typed.pg_catalog_oid(values.conowner)
        } , conforencoding = ${
          values.conforencoding === undefined
            ? sql("conforencoding")
            : typed.pg_catalog_int4(values.conforencoding)
        } , contoencoding = ${
          values.contoencoding === undefined
            ? sql("contoencoding")
            : typed.pg_catalog_int4(values.contoencoding)
        } , conproc = ${
          values.conproc === undefined
            ? sql("conproc")
            : typed.pg_catalog_regproc(values.conproc)
        } , condefault = ${
          values.condefault === undefined
            ? sql("condefault")
            : typed.pg_catalog_bool(values.condefault)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,conname,connamespace,conowner,conforencoding,contoencoding,conproc,condefault`;

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
      ): Promise<PgCatalog.PgDepend[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT classid,objid,objsubid,refclassid,refobjid,refobjsubid,deptype FROM pg_catalog.pg_depend WHERE classid = ${
            parameters.classid === undefined
              ? sql("classid")
              : typed.pg_catalog_oid(parameters.classid)
          } AND objid = ${
            parameters.objid === undefined
              ? sql("objid")
              : typed.pg_catalog_oid(parameters.objid)
          } AND objsubid = ${
            parameters.objsubid === undefined
              ? sql("objsubid")
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
      ): Promise<PgCatalog.PgDepend[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT classid,objid,objsubid,refclassid,refobjid,refobjsubid,deptype FROM pg_catalog.pg_depend WHERE refclassid = ${
            parameters.refclassid === undefined
              ? sql("refclassid")
              : typed.pg_catalog_oid(parameters.refclassid)
          } AND refobjid = ${
            parameters.refobjid === undefined
              ? sql("refobjid")
              : typed.pg_catalog_oid(parameters.refobjid)
          } AND refobjsubid = ${
            parameters.refobjsubid === undefined
              ? sql("refobjsubid")
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
      ): Promise<PgCatalog.PgDepend[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_depend WHERE classid = ${
            parameters.classid === undefined
              ? sql("classid")
              : typed.pg_catalog_oid(parameters.classid)
          } AND objid = ${
            parameters.objid === undefined
              ? sql("objid")
              : typed.pg_catalog_oid(parameters.objid)
          } AND objsubid = ${
            parameters.objsubid === undefined
              ? sql("objsubid")
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
      ): Promise<PgCatalog.PgDepend[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_depend WHERE refclassid = ${
            parameters.refclassid === undefined
              ? sql("refclassid")
              : typed.pg_catalog_oid(parameters.refclassid)
          } AND refobjid = ${
            parameters.refobjid === undefined
              ? sql("refobjid")
              : typed.pg_catalog_oid(parameters.refobjid)
          } AND refobjsubid = ${
            parameters.refobjsubid === undefined
              ? sql("refobjsubid")
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

      async updateByClassidObjidObjsubid(
        parameters: PgCatalog.Tables.PgDepend.ByClassidObjidObjsubid,
        values: Partial<PgCatalog.PgDepend>,
      ): Promise<PgCatalog.PgDepend[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_depend SET classid = ${
          values.classid === undefined
            ? sql("classid")
            : typed.pg_catalog_oid(values.classid)
        } , objid = ${
          values.objid === undefined
            ? sql("objid")
            : typed.pg_catalog_oid(values.objid)
        } , objsubid = ${
          values.objsubid === undefined
            ? sql("objsubid")
            : typed.pg_catalog_int4(values.objsubid)
        } , refclassid = ${
          values.refclassid === undefined
            ? sql("refclassid")
            : typed.pg_catalog_oid(values.refclassid)
        } , refobjid = ${
          values.refobjid === undefined
            ? sql("refobjid")
            : typed.pg_catalog_oid(values.refobjid)
        } , refobjsubid = ${
          values.refobjsubid === undefined
            ? sql("refobjsubid")
            : typed.pg_catalog_int4(values.refobjsubid)
        } , deptype = ${
          values.deptype === undefined
            ? sql("deptype")
            : typed.pg_catalog_char(values.deptype)
        } WHERE classid = ${
          parameters.classid === undefined
            ? sql("classid")
            : typed.pg_catalog_oid(parameters.classid)
        } AND objid = ${
          parameters.objid === undefined
            ? sql("objid")
            : typed.pg_catalog_oid(parameters.objid)
        } AND objsubid = ${
          parameters.objsubid === undefined
            ? sql("objsubid")
            : typed.pg_catalog_int4(parameters.objsubid)
        } RETURNING classid,objid,objsubid,refclassid,refobjid,refobjsubid,deptype`;

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
      async updateByRefclassidRefobjidRefobjsubid(
        parameters: PgCatalog.Tables.PgDepend.ByRefclassidRefobjidRefobjsubid,
        values: Partial<PgCatalog.PgDepend>,
      ): Promise<PgCatalog.PgDepend[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_depend SET classid = ${
          values.classid === undefined
            ? sql("classid")
            : typed.pg_catalog_oid(values.classid)
        } , objid = ${
          values.objid === undefined
            ? sql("objid")
            : typed.pg_catalog_oid(values.objid)
        } , objsubid = ${
          values.objsubid === undefined
            ? sql("objsubid")
            : typed.pg_catalog_int4(values.objsubid)
        } , refclassid = ${
          values.refclassid === undefined
            ? sql("refclassid")
            : typed.pg_catalog_oid(values.refclassid)
        } , refobjid = ${
          values.refobjid === undefined
            ? sql("refobjid")
            : typed.pg_catalog_oid(values.refobjid)
        } , refobjsubid = ${
          values.refobjsubid === undefined
            ? sql("refobjsubid")
            : typed.pg_catalog_int4(values.refobjsubid)
        } , deptype = ${
          values.deptype === undefined
            ? sql("deptype")
            : typed.pg_catalog_char(values.deptype)
        } WHERE refclassid = ${
          parameters.refclassid === undefined
            ? sql("refclassid")
            : typed.pg_catalog_oid(parameters.refclassid)
        } AND refobjid = ${
          parameters.refobjid === undefined
            ? sql("refobjid")
            : typed.pg_catalog_oid(parameters.refobjid)
        } AND refobjsubid = ${
          parameters.refobjsubid === undefined
            ? sql("refobjsubid")
            : typed.pg_catalog_int4(parameters.refobjsubid)
        } RETURNING classid,objid,objsubid,refclassid,refobjid,refobjsubid,deptype`;

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
        parameters: PgCatalog.Tables.PgDatabase.ByDatname,
      ): Promise<PgCatalog.PgDatabase> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,datname,datdba,encoding,datlocprovider,datistemplate,datallowconn,datconnlimit,datfrozenxid,datminmxid,dattablespace,datcollate,datctype,daticulocale,daticurules,datcollversion,datacl FROM pg_catalog.pg_database WHERE datname = ${
            parameters.datname === undefined
              ? sql("datname")
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
      async byOid(
        parameters: PgCatalog.Tables.PgDatabase.ByOid,
      ): Promise<PgCatalog.PgDatabase> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,datname,datdba,encoding,datlocprovider,datistemplate,datallowconn,datconnlimit,datfrozenxid,datminmxid,dattablespace,datcollate,datctype,daticulocale,daticurules,datcollversion,datacl FROM pg_catalog.pg_database WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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

      async deleteByDatname(
        parameters: PgCatalog.Tables.PgDatabase.ByDatname,
      ): Promise<PgCatalog.PgDatabase> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_database WHERE datname = ${
            parameters.datname === undefined
              ? sql("datname")
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
      async deleteByOid(
        parameters: PgCatalog.Tables.PgDatabase.ByOid,
      ): Promise<PgCatalog.PgDatabase> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_database WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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

      async updateByDatname(
        parameters: PgCatalog.Tables.PgDatabase.ByDatname,
        values: Partial<PgCatalog.PgDatabase>,
      ): Promise<PgCatalog.PgDatabase> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_database SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , datname = ${
          values.datname === undefined
            ? sql("datname")
            : typed.pg_catalog_name(values.datname)
        } , datdba = ${
          values.datdba === undefined
            ? sql("datdba")
            : typed.pg_catalog_oid(values.datdba)
        } , encoding = ${
          values.encoding === undefined
            ? sql("encoding")
            : typed.pg_catalog_int4(values.encoding)
        } , datlocprovider = ${
          values.datlocprovider === undefined
            ? sql("datlocprovider")
            : typed.pg_catalog_char(values.datlocprovider)
        } , datistemplate = ${
          values.datistemplate === undefined
            ? sql("datistemplate")
            : typed.pg_catalog_bool(values.datistemplate)
        } , datallowconn = ${
          values.datallowconn === undefined
            ? sql("datallowconn")
            : typed.pg_catalog_bool(values.datallowconn)
        } , datconnlimit = ${
          values.datconnlimit === undefined
            ? sql("datconnlimit")
            : typed.pg_catalog_int4(values.datconnlimit)
        } , datfrozenxid = ${
          values.datfrozenxid === undefined
            ? sql("datfrozenxid")
            : typed.pg_catalog_xid(values.datfrozenxid)
        } , datminmxid = ${
          values.datminmxid === undefined
            ? sql("datminmxid")
            : typed.pg_catalog_xid(values.datminmxid)
        } , dattablespace = ${
          values.dattablespace === undefined
            ? sql("dattablespace")
            : typed.pg_catalog_oid(values.dattablespace)
        } , datcollate = ${
          values.datcollate === undefined
            ? sql("datcollate")
            : typed.pg_catalog_text(values.datcollate)
        } , datctype = ${
          values.datctype === undefined
            ? sql("datctype")
            : typed.pg_catalog_text(values.datctype)
        } , daticulocale = ${
          values.daticulocale === undefined
            ? sql("daticulocale")
            : typed.pg_catalog_text(values.daticulocale)
        } , daticurules = ${
          values.daticurules === undefined
            ? sql("daticurules")
            : typed.pg_catalog_text(values.daticurules)
        } , datcollversion = ${
          values.datcollversion === undefined
            ? sql("datcollversion")
            : typed.pg_catalog_text(values.datcollversion)
        } , datacl = ${
          values.datacl === undefined
            ? sql("datacl")
            : typed.pg_catalog__aclitem(values.datacl)
        } WHERE datname = ${
          parameters.datname === undefined
            ? sql("datname")
            : typed.pg_catalog_cstring(parameters.datname)
        } RETURNING oid,datname,datdba,encoding,datlocprovider,datistemplate,datallowconn,datconnlimit,datfrozenxid,datminmxid,dattablespace,datcollate,datctype,daticulocale,daticurules,datcollversion,datacl`;

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
      async updateByOid(
        parameters: PgCatalog.Tables.PgDatabase.ByOid,
        values: Partial<PgCatalog.PgDatabase>,
      ): Promise<PgCatalog.PgDatabase> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_database SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , datname = ${
          values.datname === undefined
            ? sql("datname")
            : typed.pg_catalog_name(values.datname)
        } , datdba = ${
          values.datdba === undefined
            ? sql("datdba")
            : typed.pg_catalog_oid(values.datdba)
        } , encoding = ${
          values.encoding === undefined
            ? sql("encoding")
            : typed.pg_catalog_int4(values.encoding)
        } , datlocprovider = ${
          values.datlocprovider === undefined
            ? sql("datlocprovider")
            : typed.pg_catalog_char(values.datlocprovider)
        } , datistemplate = ${
          values.datistemplate === undefined
            ? sql("datistemplate")
            : typed.pg_catalog_bool(values.datistemplate)
        } , datallowconn = ${
          values.datallowconn === undefined
            ? sql("datallowconn")
            : typed.pg_catalog_bool(values.datallowconn)
        } , datconnlimit = ${
          values.datconnlimit === undefined
            ? sql("datconnlimit")
            : typed.pg_catalog_int4(values.datconnlimit)
        } , datfrozenxid = ${
          values.datfrozenxid === undefined
            ? sql("datfrozenxid")
            : typed.pg_catalog_xid(values.datfrozenxid)
        } , datminmxid = ${
          values.datminmxid === undefined
            ? sql("datminmxid")
            : typed.pg_catalog_xid(values.datminmxid)
        } , dattablespace = ${
          values.dattablespace === undefined
            ? sql("dattablespace")
            : typed.pg_catalog_oid(values.dattablespace)
        } , datcollate = ${
          values.datcollate === undefined
            ? sql("datcollate")
            : typed.pg_catalog_text(values.datcollate)
        } , datctype = ${
          values.datctype === undefined
            ? sql("datctype")
            : typed.pg_catalog_text(values.datctype)
        } , daticulocale = ${
          values.daticulocale === undefined
            ? sql("daticulocale")
            : typed.pg_catalog_text(values.daticulocale)
        } , daticurules = ${
          values.daticurules === undefined
            ? sql("daticurules")
            : typed.pg_catalog_text(values.daticurules)
        } , datcollversion = ${
          values.datcollversion === undefined
            ? sql("datcollversion")
            : typed.pg_catalog_text(values.datcollversion)
        } , datacl = ${
          values.datacl === undefined
            ? sql("datacl")
            : typed.pg_catalog__aclitem(values.datacl)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,datname,datdba,encoding,datlocprovider,datistemplate,datallowconn,datconnlimit,datfrozenxid,datminmxid,dattablespace,datcollate,datctype,daticulocale,daticurules,datcollversion,datacl`;

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
      ): Promise<PgCatalog.PgDbRoleSetting> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT setdatabase,setrole,setconfig FROM pg_catalog.pg_db_role_setting WHERE setdatabase = ${
            parameters.setdatabase === undefined
              ? sql("setdatabase")
              : typed.pg_catalog_oid(parameters.setdatabase)
          } AND setrole = ${
            parameters.setrole === undefined
              ? sql("setrole")
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
      ): Promise<PgCatalog.PgDbRoleSetting> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_db_role_setting WHERE setdatabase = ${
            parameters.setdatabase === undefined
              ? sql("setdatabase")
              : typed.pg_catalog_oid(parameters.setdatabase)
          } AND setrole = ${
            parameters.setrole === undefined
              ? sql("setrole")
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

      async updateBySetdatabaseSetrole(
        parameters: PgCatalog.Tables.PgDbRoleSetting.BySetdatabaseSetrole,
        values: Partial<PgCatalog.PgDbRoleSetting>,
      ): Promise<PgCatalog.PgDbRoleSetting> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_db_role_setting SET setdatabase = ${
            values.setdatabase === undefined
              ? sql("setdatabase")
              : typed.pg_catalog_oid(values.setdatabase)
          } , setrole = ${
            values.setrole === undefined
              ? sql("setrole")
              : typed.pg_catalog_oid(values.setrole)
          } , setconfig = ${
            values.setconfig === undefined
              ? sql("setconfig")
              : typed.pg_catalog__text(values.setconfig)
          } WHERE setdatabase = ${
            parameters.setdatabase === undefined
              ? sql("setdatabase")
              : typed.pg_catalog_oid(parameters.setdatabase)
          } AND setrole = ${
            parameters.setrole === undefined
              ? sql("setrole")
              : typed.pg_catalog_oid(parameters.setrole)
          } RETURNING setdatabase,setrole,setconfig`;

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

      async byOid(
        parameters: PgCatalog.Tables.PgTablespace.ByOid,
      ): Promise<PgCatalog.PgTablespace> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,spcname,spcowner,spcacl,spcoptions FROM pg_catalog.pg_tablespace WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      async bySpcname(
        parameters: PgCatalog.Tables.PgTablespace.BySpcname,
      ): Promise<PgCatalog.PgTablespace> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,spcname,spcowner,spcacl,spcoptions FROM pg_catalog.pg_tablespace WHERE spcname = ${
            parameters.spcname === undefined
              ? sql("spcname")
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

      async deleteByOid(
        parameters: PgCatalog.Tables.PgTablespace.ByOid,
      ): Promise<PgCatalog.PgTablespace> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_tablespace WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgTablespace> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_tablespace WHERE spcname = ${
            parameters.spcname === undefined
              ? sql("spcname")
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

      async updateByOid(
        parameters: PgCatalog.Tables.PgTablespace.ByOid,
        values: Partial<PgCatalog.PgTablespace>,
      ): Promise<PgCatalog.PgTablespace> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_tablespace SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , spcname = ${
          values.spcname === undefined
            ? sql("spcname")
            : typed.pg_catalog_name(values.spcname)
        } , spcowner = ${
          values.spcowner === undefined
            ? sql("spcowner")
            : typed.pg_catalog_oid(values.spcowner)
        } , spcacl = ${
          values.spcacl === undefined
            ? sql("spcacl")
            : typed.pg_catalog__aclitem(values.spcacl)
        } , spcoptions = ${
          values.spcoptions === undefined
            ? sql("spcoptions")
            : typed.pg_catalog__text(values.spcoptions)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,spcname,spcowner,spcacl,spcoptions`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          spcname: undefinedIsNull(record.spcname),
          spcowner: undefinedIsNull(record.spcowner),
          spcacl: undefinedIsNull(record.spcacl),
          spcoptions: undefinedIsNull(record.spcoptions),
        }));
        return results[0];
      }
      async updateBySpcname(
        parameters: PgCatalog.Tables.PgTablespace.BySpcname,
        values: Partial<PgCatalog.PgTablespace>,
      ): Promise<PgCatalog.PgTablespace> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_tablespace SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , spcname = ${
          values.spcname === undefined
            ? sql("spcname")
            : typed.pg_catalog_name(values.spcname)
        } , spcowner = ${
          values.spcowner === undefined
            ? sql("spcowner")
            : typed.pg_catalog_oid(values.spcowner)
        } , spcacl = ${
          values.spcacl === undefined
            ? sql("spcacl")
            : typed.pg_catalog__aclitem(values.spcacl)
        } , spcoptions = ${
          values.spcoptions === undefined
            ? sql("spcoptions")
            : typed.pg_catalog__text(values.spcoptions)
        } WHERE spcname = ${
          parameters.spcname === undefined
            ? sql("spcname")
            : typed.pg_catalog_cstring(parameters.spcname)
        } RETURNING oid,spcname,spcowner,spcacl,spcoptions`;

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
        parameters: PgCatalog.Tables.PgAuthMembers.ByGrantor,
      ): Promise<PgCatalog.PgAuthMembers[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,roleid,member,grantor,admin_option,inherit_option,set_option FROM pg_catalog.pg_auth_members WHERE grantor = ${
            parameters.grantor === undefined
              ? sql("grantor")
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
      ): Promise<PgCatalog.PgAuthMembers> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,roleid,member,grantor,admin_option,inherit_option,set_option FROM pg_catalog.pg_auth_members WHERE member = ${
            parameters.member === undefined
              ? sql("member")
              : typed.pg_catalog_oid(parameters.member)
          } AND roleid = ${
            parameters.roleid === undefined
              ? sql("roleid")
              : typed.pg_catalog_oid(parameters.roleid)
          } AND grantor = ${
            parameters.grantor === undefined
              ? sql("grantor")
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
      async byOid(
        parameters: PgCatalog.Tables.PgAuthMembers.ByOid,
      ): Promise<PgCatalog.PgAuthMembers> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,roleid,member,grantor,admin_option,inherit_option,set_option FROM pg_catalog.pg_auth_members WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgAuthMembers> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,roleid,member,grantor,admin_option,inherit_option,set_option FROM pg_catalog.pg_auth_members WHERE roleid = ${
            parameters.roleid === undefined
              ? sql("roleid")
              : typed.pg_catalog_oid(parameters.roleid)
          } AND member = ${
            parameters.member === undefined
              ? sql("member")
              : typed.pg_catalog_oid(parameters.member)
          } AND grantor = ${
            parameters.grantor === undefined
              ? sql("grantor")
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
      ): Promise<PgCatalog.PgAuthMembers[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_auth_members WHERE grantor = ${
            parameters.grantor === undefined
              ? sql("grantor")
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
      ): Promise<PgCatalog.PgAuthMembers> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_auth_members WHERE member = ${
            parameters.member === undefined
              ? sql("member")
              : typed.pg_catalog_oid(parameters.member)
          } AND roleid = ${
            parameters.roleid === undefined
              ? sql("roleid")
              : typed.pg_catalog_oid(parameters.roleid)
          } AND grantor = ${
            parameters.grantor === undefined
              ? sql("grantor")
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
      async deleteByOid(
        parameters: PgCatalog.Tables.PgAuthMembers.ByOid,
      ): Promise<PgCatalog.PgAuthMembers> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_auth_members WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgAuthMembers> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_auth_members WHERE roleid = ${
            parameters.roleid === undefined
              ? sql("roleid")
              : typed.pg_catalog_oid(parameters.roleid)
          } AND member = ${
            parameters.member === undefined
              ? sql("member")
              : typed.pg_catalog_oid(parameters.member)
          } AND grantor = ${
            parameters.grantor === undefined
              ? sql("grantor")
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

      async updateByGrantor(
        parameters: PgCatalog.Tables.PgAuthMembers.ByGrantor,
        values: Partial<PgCatalog.PgAuthMembers>,
      ): Promise<PgCatalog.PgAuthMembers[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_auth_members SET oid = ${
            values.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(values.oid)
          } , roleid = ${
            values.roleid === undefined
              ? sql("roleid")
              : typed.pg_catalog_oid(values.roleid)
          } , member = ${
            values.member === undefined
              ? sql("member")
              : typed.pg_catalog_oid(values.member)
          } , grantor = ${
            values.grantor === undefined
              ? sql("grantor")
              : typed.pg_catalog_oid(values.grantor)
          } , admin_option = ${
            values.adminOption === undefined
              ? sql("admin_option")
              : typed.pg_catalog_bool(values.adminOption)
          } , inherit_option = ${
            values.inheritOption === undefined
              ? sql("inherit_option")
              : typed.pg_catalog_bool(values.inheritOption)
          } , set_option = ${
            values.setOption === undefined
              ? sql("set_option")
              : typed.pg_catalog_bool(values.setOption)
          } WHERE grantor = ${
            parameters.grantor === undefined
              ? sql("grantor")
              : typed.pg_catalog_oid(parameters.grantor)
          } RETURNING oid,roleid,member,grantor,admin_option,inherit_option,set_option`;

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
      async updateByMemberRoleidGrantor(
        parameters: PgCatalog.Tables.PgAuthMembers.ByMemberRoleidGrantor,
        values: Partial<PgCatalog.PgAuthMembers>,
      ): Promise<PgCatalog.PgAuthMembers> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_auth_members SET oid = ${
            values.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(values.oid)
          } , roleid = ${
            values.roleid === undefined
              ? sql("roleid")
              : typed.pg_catalog_oid(values.roleid)
          } , member = ${
            values.member === undefined
              ? sql("member")
              : typed.pg_catalog_oid(values.member)
          } , grantor = ${
            values.grantor === undefined
              ? sql("grantor")
              : typed.pg_catalog_oid(values.grantor)
          } , admin_option = ${
            values.adminOption === undefined
              ? sql("admin_option")
              : typed.pg_catalog_bool(values.adminOption)
          } , inherit_option = ${
            values.inheritOption === undefined
              ? sql("inherit_option")
              : typed.pg_catalog_bool(values.inheritOption)
          } , set_option = ${
            values.setOption === undefined
              ? sql("set_option")
              : typed.pg_catalog_bool(values.setOption)
          } WHERE member = ${
            parameters.member === undefined
              ? sql("member")
              : typed.pg_catalog_oid(parameters.member)
          } AND roleid = ${
            parameters.roleid === undefined
              ? sql("roleid")
              : typed.pg_catalog_oid(parameters.roleid)
          } AND grantor = ${
            parameters.grantor === undefined
              ? sql("grantor")
              : typed.pg_catalog_oid(parameters.grantor)
          } RETURNING oid,roleid,member,grantor,admin_option,inherit_option,set_option`;

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
      async updateByOid(
        parameters: PgCatalog.Tables.PgAuthMembers.ByOid,
        values: Partial<PgCatalog.PgAuthMembers>,
      ): Promise<PgCatalog.PgAuthMembers> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_auth_members SET oid = ${
            values.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(values.oid)
          } , roleid = ${
            values.roleid === undefined
              ? sql("roleid")
              : typed.pg_catalog_oid(values.roleid)
          } , member = ${
            values.member === undefined
              ? sql("member")
              : typed.pg_catalog_oid(values.member)
          } , grantor = ${
            values.grantor === undefined
              ? sql("grantor")
              : typed.pg_catalog_oid(values.grantor)
          } , admin_option = ${
            values.adminOption === undefined
              ? sql("admin_option")
              : typed.pg_catalog_bool(values.adminOption)
          } , inherit_option = ${
            values.inheritOption === undefined
              ? sql("inherit_option")
              : typed.pg_catalog_bool(values.inheritOption)
          } , set_option = ${
            values.setOption === undefined
              ? sql("set_option")
              : typed.pg_catalog_bool(values.setOption)
          } WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,roleid,member,grantor,admin_option,inherit_option,set_option`;

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
      async updateByRoleidMemberGrantor(
        parameters: PgCatalog.Tables.PgAuthMembers.ByRoleidMemberGrantor,
        values: Partial<PgCatalog.PgAuthMembers>,
      ): Promise<PgCatalog.PgAuthMembers> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_auth_members SET oid = ${
            values.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(values.oid)
          } , roleid = ${
            values.roleid === undefined
              ? sql("roleid")
              : typed.pg_catalog_oid(values.roleid)
          } , member = ${
            values.member === undefined
              ? sql("member")
              : typed.pg_catalog_oid(values.member)
          } , grantor = ${
            values.grantor === undefined
              ? sql("grantor")
              : typed.pg_catalog_oid(values.grantor)
          } , admin_option = ${
            values.adminOption === undefined
              ? sql("admin_option")
              : typed.pg_catalog_bool(values.adminOption)
          } , inherit_option = ${
            values.inheritOption === undefined
              ? sql("inherit_option")
              : typed.pg_catalog_bool(values.inheritOption)
          } , set_option = ${
            values.setOption === undefined
              ? sql("set_option")
              : typed.pg_catalog_bool(values.setOption)
          } WHERE roleid = ${
            parameters.roleid === undefined
              ? sql("roleid")
              : typed.pg_catalog_oid(parameters.roleid)
          } AND member = ${
            parameters.member === undefined
              ? sql("member")
              : typed.pg_catalog_oid(parameters.member)
          } AND grantor = ${
            parameters.grantor === undefined
              ? sql("grantor")
              : typed.pg_catalog_oid(parameters.grantor)
          } RETURNING oid,roleid,member,grantor,admin_option,inherit_option,set_option`;

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
      ): Promise<PgCatalog.PgShdepend[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT dbid,classid,objid,objsubid,refclassid,refobjid,deptype FROM pg_catalog.pg_shdepend WHERE dbid = ${
            parameters.dbid === undefined
              ? sql("dbid")
              : typed.pg_catalog_oid(parameters.dbid)
          } AND classid = ${
            parameters.classid === undefined
              ? sql("classid")
              : typed.pg_catalog_oid(parameters.classid)
          } AND objid = ${
            parameters.objid === undefined
              ? sql("objid")
              : typed.pg_catalog_oid(parameters.objid)
          } AND objsubid = ${
            parameters.objsubid === undefined
              ? sql("objsubid")
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
      ): Promise<PgCatalog.PgShdepend[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT dbid,classid,objid,objsubid,refclassid,refobjid,deptype FROM pg_catalog.pg_shdepend WHERE refclassid = ${
            parameters.refclassid === undefined
              ? sql("refclassid")
              : typed.pg_catalog_oid(parameters.refclassid)
          } AND refobjid = ${
            parameters.refobjid === undefined
              ? sql("refobjid")
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
      ): Promise<PgCatalog.PgShdepend[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_shdepend WHERE dbid = ${
            parameters.dbid === undefined
              ? sql("dbid")
              : typed.pg_catalog_oid(parameters.dbid)
          } AND classid = ${
            parameters.classid === undefined
              ? sql("classid")
              : typed.pg_catalog_oid(parameters.classid)
          } AND objid = ${
            parameters.objid === undefined
              ? sql("objid")
              : typed.pg_catalog_oid(parameters.objid)
          } AND objsubid = ${
            parameters.objsubid === undefined
              ? sql("objsubid")
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
      ): Promise<PgCatalog.PgShdepend[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_shdepend WHERE refclassid = ${
            parameters.refclassid === undefined
              ? sql("refclassid")
              : typed.pg_catalog_oid(parameters.refclassid)
          } AND refobjid = ${
            parameters.refobjid === undefined
              ? sql("refobjid")
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

      async updateByDbidClassidObjidObjsubid(
        parameters: PgCatalog.Tables.PgShdepend.ByDbidClassidObjidObjsubid,
        values: Partial<PgCatalog.PgShdepend>,
      ): Promise<PgCatalog.PgShdepend[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_shdepend SET dbid = ${
          values.dbid === undefined
            ? sql("dbid")
            : typed.pg_catalog_oid(values.dbid)
        } , classid = ${
          values.classid === undefined
            ? sql("classid")
            : typed.pg_catalog_oid(values.classid)
        } , objid = ${
          values.objid === undefined
            ? sql("objid")
            : typed.pg_catalog_oid(values.objid)
        } , objsubid = ${
          values.objsubid === undefined
            ? sql("objsubid")
            : typed.pg_catalog_int4(values.objsubid)
        } , refclassid = ${
          values.refclassid === undefined
            ? sql("refclassid")
            : typed.pg_catalog_oid(values.refclassid)
        } , refobjid = ${
          values.refobjid === undefined
            ? sql("refobjid")
            : typed.pg_catalog_oid(values.refobjid)
        } , deptype = ${
          values.deptype === undefined
            ? sql("deptype")
            : typed.pg_catalog_char(values.deptype)
        } WHERE dbid = ${
          parameters.dbid === undefined
            ? sql("dbid")
            : typed.pg_catalog_oid(parameters.dbid)
        } AND classid = ${
          parameters.classid === undefined
            ? sql("classid")
            : typed.pg_catalog_oid(parameters.classid)
        } AND objid = ${
          parameters.objid === undefined
            ? sql("objid")
            : typed.pg_catalog_oid(parameters.objid)
        } AND objsubid = ${
          parameters.objsubid === undefined
            ? sql("objsubid")
            : typed.pg_catalog_int4(parameters.objsubid)
        } RETURNING dbid,classid,objid,objsubid,refclassid,refobjid,deptype`;

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
      async updateByRefclassidRefobjid(
        parameters: PgCatalog.Tables.PgShdepend.ByRefclassidRefobjid,
        values: Partial<PgCatalog.PgShdepend>,
      ): Promise<PgCatalog.PgShdepend[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_shdepend SET dbid = ${
          values.dbid === undefined
            ? sql("dbid")
            : typed.pg_catalog_oid(values.dbid)
        } , classid = ${
          values.classid === undefined
            ? sql("classid")
            : typed.pg_catalog_oid(values.classid)
        } , objid = ${
          values.objid === undefined
            ? sql("objid")
            : typed.pg_catalog_oid(values.objid)
        } , objsubid = ${
          values.objsubid === undefined
            ? sql("objsubid")
            : typed.pg_catalog_int4(values.objsubid)
        } , refclassid = ${
          values.refclassid === undefined
            ? sql("refclassid")
            : typed.pg_catalog_oid(values.refclassid)
        } , refobjid = ${
          values.refobjid === undefined
            ? sql("refobjid")
            : typed.pg_catalog_oid(values.refobjid)
        } , deptype = ${
          values.deptype === undefined
            ? sql("deptype")
            : typed.pg_catalog_char(values.deptype)
        } WHERE refclassid = ${
          parameters.refclassid === undefined
            ? sql("refclassid")
            : typed.pg_catalog_oid(parameters.refclassid)
        } AND refobjid = ${
          parameters.refobjid === undefined
            ? sql("refobjid")
            : typed.pg_catalog_oid(parameters.refobjid)
        } RETURNING dbid,classid,objid,objsubid,refclassid,refobjid,deptype`;

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
      ): Promise<PgCatalog.PgShdescription> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT objoid,classoid,description FROM pg_catalog.pg_shdescription WHERE objoid = ${
            parameters.objoid === undefined
              ? sql("objoid")
              : typed.pg_catalog_oid(parameters.objoid)
          } AND classoid = ${
            parameters.classoid === undefined
              ? sql("classoid")
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
      ): Promise<PgCatalog.PgShdescription> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_shdescription WHERE objoid = ${
            parameters.objoid === undefined
              ? sql("objoid")
              : typed.pg_catalog_oid(parameters.objoid)
          } AND classoid = ${
            parameters.classoid === undefined
              ? sql("classoid")
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

      async updateByObjoidClassoid(
        parameters: PgCatalog.Tables.PgShdescription.ByObjoidClassoid,
        values: Partial<PgCatalog.PgShdescription>,
      ): Promise<PgCatalog.PgShdescription> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_shdescription SET objoid = ${
            values.objoid === undefined
              ? sql("objoid")
              : typed.pg_catalog_oid(values.objoid)
          } , classoid = ${
            values.classoid === undefined
              ? sql("classoid")
              : typed.pg_catalog_oid(values.classoid)
          } , description = ${
            values.description === undefined
              ? sql("description")
              : typed.pg_catalog_text(values.description)
          } WHERE objoid = ${
            parameters.objoid === undefined
              ? sql("objoid")
              : typed.pg_catalog_oid(parameters.objoid)
          } AND classoid = ${
            parameters.classoid === undefined
              ? sql("classoid")
              : typed.pg_catalog_oid(parameters.classoid)
          } RETURNING objoid,classoid,description`;

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
      ): Promise<PgCatalog.PgTsConfig> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,cfgname,cfgnamespace,cfgowner,cfgparser FROM pg_catalog.pg_ts_config WHERE cfgname = ${
            parameters.cfgname === undefined
              ? sql("cfgname")
              : typed.pg_catalog_cstring(parameters.cfgname)
          } AND cfgnamespace = ${
            parameters.cfgnamespace === undefined
              ? sql("cfgnamespace")
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
      async byOid(
        parameters: PgCatalog.Tables.PgTsConfig.ByOid,
      ): Promise<PgCatalog.PgTsConfig> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,cfgname,cfgnamespace,cfgowner,cfgparser FROM pg_catalog.pg_ts_config WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgTsConfig> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_ts_config WHERE cfgname = ${
            parameters.cfgname === undefined
              ? sql("cfgname")
              : typed.pg_catalog_cstring(parameters.cfgname)
          } AND cfgnamespace = ${
            parameters.cfgnamespace === undefined
              ? sql("cfgnamespace")
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
      async deleteByOid(
        parameters: PgCatalog.Tables.PgTsConfig.ByOid,
      ): Promise<PgCatalog.PgTsConfig> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_ts_config WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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

      async updateByCfgnameCfgnamespace(
        parameters: PgCatalog.Tables.PgTsConfig.ByCfgnameCfgnamespace,
        values: Partial<PgCatalog.PgTsConfig>,
      ): Promise<PgCatalog.PgTsConfig> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_ts_config SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , cfgname = ${
          values.cfgname === undefined
            ? sql("cfgname")
            : typed.pg_catalog_name(values.cfgname)
        } , cfgnamespace = ${
          values.cfgnamespace === undefined
            ? sql("cfgnamespace")
            : typed.pg_catalog_oid(values.cfgnamespace)
        } , cfgowner = ${
          values.cfgowner === undefined
            ? sql("cfgowner")
            : typed.pg_catalog_oid(values.cfgowner)
        } , cfgparser = ${
          values.cfgparser === undefined
            ? sql("cfgparser")
            : typed.pg_catalog_oid(values.cfgparser)
        } WHERE cfgname = ${
          parameters.cfgname === undefined
            ? sql("cfgname")
            : typed.pg_catalog_cstring(parameters.cfgname)
        } AND cfgnamespace = ${
          parameters.cfgnamespace === undefined
            ? sql("cfgnamespace")
            : typed.pg_catalog_oid(parameters.cfgnamespace)
        } RETURNING oid,cfgname,cfgnamespace,cfgowner,cfgparser`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          cfgname: undefinedIsNull(record.cfgname),
          cfgnamespace: undefinedIsNull(record.cfgnamespace),
          cfgowner: undefinedIsNull(record.cfgowner),
          cfgparser: undefinedIsNull(record.cfgparser),
        }));
        return results[0];
      }
      async updateByOid(
        parameters: PgCatalog.Tables.PgTsConfig.ByOid,
        values: Partial<PgCatalog.PgTsConfig>,
      ): Promise<PgCatalog.PgTsConfig> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_ts_config SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , cfgname = ${
          values.cfgname === undefined
            ? sql("cfgname")
            : typed.pg_catalog_name(values.cfgname)
        } , cfgnamespace = ${
          values.cfgnamespace === undefined
            ? sql("cfgnamespace")
            : typed.pg_catalog_oid(values.cfgnamespace)
        } , cfgowner = ${
          values.cfgowner === undefined
            ? sql("cfgowner")
            : typed.pg_catalog_oid(values.cfgowner)
        } , cfgparser = ${
          values.cfgparser === undefined
            ? sql("cfgparser")
            : typed.pg_catalog_oid(values.cfgparser)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,cfgname,cfgnamespace,cfgowner,cfgparser`;

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
      ): Promise<PgCatalog.PgTsConfigMap> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT mapcfg,maptokentype,mapseqno,mapdict FROM pg_catalog.pg_ts_config_map WHERE mapcfg = ${
            parameters.mapcfg === undefined
              ? sql("mapcfg")
              : typed.pg_catalog_oid(parameters.mapcfg)
          } AND maptokentype = ${
            parameters.maptokentype === undefined
              ? sql("maptokentype")
              : typed.pg_catalog_int4(parameters.maptokentype)
          } AND mapseqno = ${
            parameters.mapseqno === undefined
              ? sql("mapseqno")
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
      ): Promise<PgCatalog.PgTsConfigMap> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_ts_config_map WHERE mapcfg = ${
            parameters.mapcfg === undefined
              ? sql("mapcfg")
              : typed.pg_catalog_oid(parameters.mapcfg)
          } AND maptokentype = ${
            parameters.maptokentype === undefined
              ? sql("maptokentype")
              : typed.pg_catalog_int4(parameters.maptokentype)
          } AND mapseqno = ${
            parameters.mapseqno === undefined
              ? sql("mapseqno")
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

      async updateByMapcfgMaptokentypeMapseqno(
        parameters: PgCatalog.Tables.PgTsConfigMap.ByMapcfgMaptokentypeMapseqno,
        values: Partial<PgCatalog.PgTsConfigMap>,
      ): Promise<PgCatalog.PgTsConfigMap> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_ts_config_map SET mapcfg = ${
            values.mapcfg === undefined
              ? sql("mapcfg")
              : typed.pg_catalog_oid(values.mapcfg)
          } , maptokentype = ${
            values.maptokentype === undefined
              ? sql("maptokentype")
              : typed.pg_catalog_int4(values.maptokentype)
          } , mapseqno = ${
            values.mapseqno === undefined
              ? sql("mapseqno")
              : typed.pg_catalog_int4(values.mapseqno)
          } , mapdict = ${
            values.mapdict === undefined
              ? sql("mapdict")
              : typed.pg_catalog_oid(values.mapdict)
          } WHERE mapcfg = ${
            parameters.mapcfg === undefined
              ? sql("mapcfg")
              : typed.pg_catalog_oid(parameters.mapcfg)
          } AND maptokentype = ${
            parameters.maptokentype === undefined
              ? sql("maptokentype")
              : typed.pg_catalog_int4(parameters.maptokentype)
          } AND mapseqno = ${
            parameters.mapseqno === undefined
              ? sql("mapseqno")
              : typed.pg_catalog_int4(parameters.mapseqno)
          } RETURNING mapcfg,maptokentype,mapseqno,mapdict`;

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
      ): Promise<PgCatalog.PgTsDict> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,dictname,dictnamespace,dictowner,dicttemplate,dictinitoption FROM pg_catalog.pg_ts_dict WHERE dictname = ${
            parameters.dictname === undefined
              ? sql("dictname")
              : typed.pg_catalog_cstring(parameters.dictname)
          } AND dictnamespace = ${
            parameters.dictnamespace === undefined
              ? sql("dictnamespace")
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
      async byOid(
        parameters: PgCatalog.Tables.PgTsDict.ByOid,
      ): Promise<PgCatalog.PgTsDict> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,dictname,dictnamespace,dictowner,dicttemplate,dictinitoption FROM pg_catalog.pg_ts_dict WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgTsDict> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_ts_dict WHERE dictname = ${
            parameters.dictname === undefined
              ? sql("dictname")
              : typed.pg_catalog_cstring(parameters.dictname)
          } AND dictnamespace = ${
            parameters.dictnamespace === undefined
              ? sql("dictnamespace")
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
      async deleteByOid(
        parameters: PgCatalog.Tables.PgTsDict.ByOid,
      ): Promise<PgCatalog.PgTsDict> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_ts_dict WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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

      async updateByDictnameDictnamespace(
        parameters: PgCatalog.Tables.PgTsDict.ByDictnameDictnamespace,
        values: Partial<PgCatalog.PgTsDict>,
      ): Promise<PgCatalog.PgTsDict> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_ts_dict SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , dictname = ${
          values.dictname === undefined
            ? sql("dictname")
            : typed.pg_catalog_name(values.dictname)
        } , dictnamespace = ${
          values.dictnamespace === undefined
            ? sql("dictnamespace")
            : typed.pg_catalog_oid(values.dictnamespace)
        } , dictowner = ${
          values.dictowner === undefined
            ? sql("dictowner")
            : typed.pg_catalog_oid(values.dictowner)
        } , dicttemplate = ${
          values.dicttemplate === undefined
            ? sql("dicttemplate")
            : typed.pg_catalog_oid(values.dicttemplate)
        } , dictinitoption = ${
          values.dictinitoption === undefined
            ? sql("dictinitoption")
            : typed.pg_catalog_text(values.dictinitoption)
        } WHERE dictname = ${
          parameters.dictname === undefined
            ? sql("dictname")
            : typed.pg_catalog_cstring(parameters.dictname)
        } AND dictnamespace = ${
          parameters.dictnamespace === undefined
            ? sql("dictnamespace")
            : typed.pg_catalog_oid(parameters.dictnamespace)
        } RETURNING oid,dictname,dictnamespace,dictowner,dicttemplate,dictinitoption`;

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
      async updateByOid(
        parameters: PgCatalog.Tables.PgTsDict.ByOid,
        values: Partial<PgCatalog.PgTsDict>,
      ): Promise<PgCatalog.PgTsDict> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_ts_dict SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , dictname = ${
          values.dictname === undefined
            ? sql("dictname")
            : typed.pg_catalog_name(values.dictname)
        } , dictnamespace = ${
          values.dictnamespace === undefined
            ? sql("dictnamespace")
            : typed.pg_catalog_oid(values.dictnamespace)
        } , dictowner = ${
          values.dictowner === undefined
            ? sql("dictowner")
            : typed.pg_catalog_oid(values.dictowner)
        } , dicttemplate = ${
          values.dicttemplate === undefined
            ? sql("dicttemplate")
            : typed.pg_catalog_oid(values.dicttemplate)
        } , dictinitoption = ${
          values.dictinitoption === undefined
            ? sql("dictinitoption")
            : typed.pg_catalog_text(values.dictinitoption)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,dictname,dictnamespace,dictowner,dicttemplate,dictinitoption`;

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

      async byOid(
        parameters: PgCatalog.Tables.PgTsParser.ByOid,
      ): Promise<PgCatalog.PgTsParser> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,prsname,prsnamespace,prsstart,prstoken,prsend,prsheadline,prslextype FROM pg_catalog.pg_ts_parser WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgTsParser> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,prsname,prsnamespace,prsstart,prstoken,prsend,prsheadline,prslextype FROM pg_catalog.pg_ts_parser WHERE prsname = ${
            parameters.prsname === undefined
              ? sql("prsname")
              : typed.pg_catalog_cstring(parameters.prsname)
          } AND prsnamespace = ${
            parameters.prsnamespace === undefined
              ? sql("prsnamespace")
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

      async deleteByOid(
        parameters: PgCatalog.Tables.PgTsParser.ByOid,
      ): Promise<PgCatalog.PgTsParser> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_ts_parser WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgTsParser> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_ts_parser WHERE prsname = ${
            parameters.prsname === undefined
              ? sql("prsname")
              : typed.pg_catalog_cstring(parameters.prsname)
          } AND prsnamespace = ${
            parameters.prsnamespace === undefined
              ? sql("prsnamespace")
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

      async updateByOid(
        parameters: PgCatalog.Tables.PgTsParser.ByOid,
        values: Partial<PgCatalog.PgTsParser>,
      ): Promise<PgCatalog.PgTsParser> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_ts_parser SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , prsname = ${
          values.prsname === undefined
            ? sql("prsname")
            : typed.pg_catalog_name(values.prsname)
        } , prsnamespace = ${
          values.prsnamespace === undefined
            ? sql("prsnamespace")
            : typed.pg_catalog_oid(values.prsnamespace)
        } , prsstart = ${
          values.prsstart === undefined
            ? sql("prsstart")
            : typed.pg_catalog_regproc(values.prsstart)
        } , prstoken = ${
          values.prstoken === undefined
            ? sql("prstoken")
            : typed.pg_catalog_regproc(values.prstoken)
        } , prsend = ${
          values.prsend === undefined
            ? sql("prsend")
            : typed.pg_catalog_regproc(values.prsend)
        } , prsheadline = ${
          values.prsheadline === undefined
            ? sql("prsheadline")
            : typed.pg_catalog_regproc(values.prsheadline)
        } , prslextype = ${
          values.prslextype === undefined
            ? sql("prslextype")
            : typed.pg_catalog_regproc(values.prslextype)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,prsname,prsnamespace,prsstart,prstoken,prsend,prsheadline,prslextype`;

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
      async updateByPrsnamePrsnamespace(
        parameters: PgCatalog.Tables.PgTsParser.ByPrsnamePrsnamespace,
        values: Partial<PgCatalog.PgTsParser>,
      ): Promise<PgCatalog.PgTsParser> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_ts_parser SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , prsname = ${
          values.prsname === undefined
            ? sql("prsname")
            : typed.pg_catalog_name(values.prsname)
        } , prsnamespace = ${
          values.prsnamespace === undefined
            ? sql("prsnamespace")
            : typed.pg_catalog_oid(values.prsnamespace)
        } , prsstart = ${
          values.prsstart === undefined
            ? sql("prsstart")
            : typed.pg_catalog_regproc(values.prsstart)
        } , prstoken = ${
          values.prstoken === undefined
            ? sql("prstoken")
            : typed.pg_catalog_regproc(values.prstoken)
        } , prsend = ${
          values.prsend === undefined
            ? sql("prsend")
            : typed.pg_catalog_regproc(values.prsend)
        } , prsheadline = ${
          values.prsheadline === undefined
            ? sql("prsheadline")
            : typed.pg_catalog_regproc(values.prsheadline)
        } , prslextype = ${
          values.prslextype === undefined
            ? sql("prslextype")
            : typed.pg_catalog_regproc(values.prslextype)
        } WHERE prsname = ${
          parameters.prsname === undefined
            ? sql("prsname")
            : typed.pg_catalog_cstring(parameters.prsname)
        } AND prsnamespace = ${
          parameters.prsnamespace === undefined
            ? sql("prsnamespace")
            : typed.pg_catalog_oid(parameters.prsnamespace)
        } RETURNING oid,prsname,prsnamespace,prsstart,prstoken,prsend,prsheadline,prslextype`;

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

      async byOid(
        parameters: PgCatalog.Tables.PgTsTemplate.ByOid,
      ): Promise<PgCatalog.PgTsTemplate> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,tmplname,tmplnamespace,tmplinit,tmpllexize FROM pg_catalog.pg_ts_template WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgTsTemplate> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,tmplname,tmplnamespace,tmplinit,tmpllexize FROM pg_catalog.pg_ts_template WHERE tmplname = ${
            parameters.tmplname === undefined
              ? sql("tmplname")
              : typed.pg_catalog_cstring(parameters.tmplname)
          } AND tmplnamespace = ${
            parameters.tmplnamespace === undefined
              ? sql("tmplnamespace")
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

      async deleteByOid(
        parameters: PgCatalog.Tables.PgTsTemplate.ByOid,
      ): Promise<PgCatalog.PgTsTemplate> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_ts_template WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgTsTemplate> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_ts_template WHERE tmplname = ${
            parameters.tmplname === undefined
              ? sql("tmplname")
              : typed.pg_catalog_cstring(parameters.tmplname)
          } AND tmplnamespace = ${
            parameters.tmplnamespace === undefined
              ? sql("tmplnamespace")
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

      async updateByOid(
        parameters: PgCatalog.Tables.PgTsTemplate.ByOid,
        values: Partial<PgCatalog.PgTsTemplate>,
      ): Promise<PgCatalog.PgTsTemplate> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_ts_template SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , tmplname = ${
          values.tmplname === undefined
            ? sql("tmplname")
            : typed.pg_catalog_name(values.tmplname)
        } , tmplnamespace = ${
          values.tmplnamespace === undefined
            ? sql("tmplnamespace")
            : typed.pg_catalog_oid(values.tmplnamespace)
        } , tmplinit = ${
          values.tmplinit === undefined
            ? sql("tmplinit")
            : typed.pg_catalog_regproc(values.tmplinit)
        } , tmpllexize = ${
          values.tmpllexize === undefined
            ? sql("tmpllexize")
            : typed.pg_catalog_regproc(values.tmpllexize)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,tmplname,tmplnamespace,tmplinit,tmpllexize`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          tmplname: undefinedIsNull(record.tmplname),
          tmplnamespace: undefinedIsNull(record.tmplnamespace),
          tmplinit: undefinedIsNull(record.tmplinit),
          tmpllexize: undefinedIsNull(record.tmpllexize),
        }));
        return results[0];
      }
      async updateByTmplnameTmplnamespace(
        parameters: PgCatalog.Tables.PgTsTemplate.ByTmplnameTmplnamespace,
        values: Partial<PgCatalog.PgTsTemplate>,
      ): Promise<PgCatalog.PgTsTemplate> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_ts_template SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , tmplname = ${
          values.tmplname === undefined
            ? sql("tmplname")
            : typed.pg_catalog_name(values.tmplname)
        } , tmplnamespace = ${
          values.tmplnamespace === undefined
            ? sql("tmplnamespace")
            : typed.pg_catalog_oid(values.tmplnamespace)
        } , tmplinit = ${
          values.tmplinit === undefined
            ? sql("tmplinit")
            : typed.pg_catalog_regproc(values.tmplinit)
        } , tmpllexize = ${
          values.tmpllexize === undefined
            ? sql("tmpllexize")
            : typed.pg_catalog_regproc(values.tmpllexize)
        } WHERE tmplname = ${
          parameters.tmplname === undefined
            ? sql("tmplname")
            : typed.pg_catalog_cstring(parameters.tmplname)
        } AND tmplnamespace = ${
          parameters.tmplnamespace === undefined
            ? sql("tmplnamespace")
            : typed.pg_catalog_oid(parameters.tmplnamespace)
        } RETURNING oid,tmplname,tmplnamespace,tmplinit,tmpllexize`;

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
        parameters: PgCatalog.Tables.PgExtension.ByExtname,
      ): Promise<PgCatalog.PgExtension> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,extname,extowner,extnamespace,extrelocatable,extversion,extconfig,extcondition FROM pg_catalog.pg_extension WHERE extname = ${
            parameters.extname === undefined
              ? sql("extname")
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
      async byOid(
        parameters: PgCatalog.Tables.PgExtension.ByOid,
      ): Promise<PgCatalog.PgExtension> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,extname,extowner,extnamespace,extrelocatable,extversion,extconfig,extcondition FROM pg_catalog.pg_extension WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgExtension> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_extension WHERE extname = ${
            parameters.extname === undefined
              ? sql("extname")
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
      async deleteByOid(
        parameters: PgCatalog.Tables.PgExtension.ByOid,
      ): Promise<PgCatalog.PgExtension> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_extension WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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

      async updateByExtname(
        parameters: PgCatalog.Tables.PgExtension.ByExtname,
        values: Partial<PgCatalog.PgExtension>,
      ): Promise<PgCatalog.PgExtension> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_extension SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , extname = ${
          values.extname === undefined
            ? sql("extname")
            : typed.pg_catalog_name(values.extname)
        } , extowner = ${
          values.extowner === undefined
            ? sql("extowner")
            : typed.pg_catalog_oid(values.extowner)
        } , extnamespace = ${
          values.extnamespace === undefined
            ? sql("extnamespace")
            : typed.pg_catalog_oid(values.extnamespace)
        } , extrelocatable = ${
          values.extrelocatable === undefined
            ? sql("extrelocatable")
            : typed.pg_catalog_bool(values.extrelocatable)
        } , extversion = ${
          values.extversion === undefined
            ? sql("extversion")
            : typed.pg_catalog_text(values.extversion)
        } , extconfig = ${
          values.extconfig === undefined
            ? sql("extconfig")
            : typed.pg_catalog__oid(values.extconfig)
        } , extcondition = ${
          values.extcondition === undefined
            ? sql("extcondition")
            : typed.pg_catalog__text(values.extcondition)
        } WHERE extname = ${
          parameters.extname === undefined
            ? sql("extname")
            : typed.pg_catalog_cstring(parameters.extname)
        } RETURNING oid,extname,extowner,extnamespace,extrelocatable,extversion,extconfig,extcondition`;

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
      async updateByOid(
        parameters: PgCatalog.Tables.PgExtension.ByOid,
        values: Partial<PgCatalog.PgExtension>,
      ): Promise<PgCatalog.PgExtension> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_extension SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , extname = ${
          values.extname === undefined
            ? sql("extname")
            : typed.pg_catalog_name(values.extname)
        } , extowner = ${
          values.extowner === undefined
            ? sql("extowner")
            : typed.pg_catalog_oid(values.extowner)
        } , extnamespace = ${
          values.extnamespace === undefined
            ? sql("extnamespace")
            : typed.pg_catalog_oid(values.extnamespace)
        } , extrelocatable = ${
          values.extrelocatable === undefined
            ? sql("extrelocatable")
            : typed.pg_catalog_bool(values.extrelocatable)
        } , extversion = ${
          values.extversion === undefined
            ? sql("extversion")
            : typed.pg_catalog_text(values.extversion)
        } , extconfig = ${
          values.extconfig === undefined
            ? sql("extconfig")
            : typed.pg_catalog__oid(values.extconfig)
        } , extcondition = ${
          values.extcondition === undefined
            ? sql("extcondition")
            : typed.pg_catalog__text(values.extcondition)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,extname,extowner,extnamespace,extrelocatable,extversion,extconfig,extcondition`;

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
      ): Promise<PgCatalog.PgForeignDataWrapper> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,fdwname,fdwowner,fdwhandler,fdwvalidator,fdwacl,fdwoptions FROM pg_catalog.pg_foreign_data_wrapper WHERE fdwname = ${
            parameters.fdwname === undefined
              ? sql("fdwname")
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
      async byOid(
        parameters: PgCatalog.Tables.PgForeignDataWrapper.ByOid,
      ): Promise<PgCatalog.PgForeignDataWrapper> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,fdwname,fdwowner,fdwhandler,fdwvalidator,fdwacl,fdwoptions FROM pg_catalog.pg_foreign_data_wrapper WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgForeignDataWrapper> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_foreign_data_wrapper WHERE fdwname = ${
            parameters.fdwname === undefined
              ? sql("fdwname")
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
      ): Promise<PgCatalog.PgForeignDataWrapper> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_foreign_data_wrapper WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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

      async updateByFdwname(
        parameters: PgCatalog.Tables.PgForeignDataWrapper.ByFdwname,
        values: Partial<PgCatalog.PgForeignDataWrapper>,
      ): Promise<PgCatalog.PgForeignDataWrapper> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_foreign_data_wrapper SET oid = ${
            values.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(values.oid)
          } , fdwname = ${
            values.fdwname === undefined
              ? sql("fdwname")
              : typed.pg_catalog_name(values.fdwname)
          } , fdwowner = ${
            values.fdwowner === undefined
              ? sql("fdwowner")
              : typed.pg_catalog_oid(values.fdwowner)
          } , fdwhandler = ${
            values.fdwhandler === undefined
              ? sql("fdwhandler")
              : typed.pg_catalog_oid(values.fdwhandler)
          } , fdwvalidator = ${
            values.fdwvalidator === undefined
              ? sql("fdwvalidator")
              : typed.pg_catalog_oid(values.fdwvalidator)
          } , fdwacl = ${
            values.fdwacl === undefined
              ? sql("fdwacl")
              : typed.pg_catalog__aclitem(values.fdwacl)
          } , fdwoptions = ${
            values.fdwoptions === undefined
              ? sql("fdwoptions")
              : typed.pg_catalog__text(values.fdwoptions)
          } WHERE fdwname = ${
            parameters.fdwname === undefined
              ? sql("fdwname")
              : typed.pg_catalog_cstring(parameters.fdwname)
          } RETURNING oid,fdwname,fdwowner,fdwhandler,fdwvalidator,fdwacl,fdwoptions`;

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
      async updateByOid(
        parameters: PgCatalog.Tables.PgForeignDataWrapper.ByOid,
        values: Partial<PgCatalog.PgForeignDataWrapper>,
      ): Promise<PgCatalog.PgForeignDataWrapper> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_foreign_data_wrapper SET oid = ${
            values.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(values.oid)
          } , fdwname = ${
            values.fdwname === undefined
              ? sql("fdwname")
              : typed.pg_catalog_name(values.fdwname)
          } , fdwowner = ${
            values.fdwowner === undefined
              ? sql("fdwowner")
              : typed.pg_catalog_oid(values.fdwowner)
          } , fdwhandler = ${
            values.fdwhandler === undefined
              ? sql("fdwhandler")
              : typed.pg_catalog_oid(values.fdwhandler)
          } , fdwvalidator = ${
            values.fdwvalidator === undefined
              ? sql("fdwvalidator")
              : typed.pg_catalog_oid(values.fdwvalidator)
          } , fdwacl = ${
            values.fdwacl === undefined
              ? sql("fdwacl")
              : typed.pg_catalog__aclitem(values.fdwacl)
          } , fdwoptions = ${
            values.fdwoptions === undefined
              ? sql("fdwoptions")
              : typed.pg_catalog__text(values.fdwoptions)
          } WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,fdwname,fdwowner,fdwhandler,fdwvalidator,fdwacl,fdwoptions`;

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

      async byOid(
        parameters: PgCatalog.Tables.PgForeignServer.ByOid,
      ): Promise<PgCatalog.PgForeignServer> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,srvname,srvowner,srvfdw,srvtype,srvversion,srvacl,srvoptions FROM pg_catalog.pg_foreign_server WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      async bySrvname(
        parameters: PgCatalog.Tables.PgForeignServer.BySrvname,
      ): Promise<PgCatalog.PgForeignServer> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,srvname,srvowner,srvfdw,srvtype,srvversion,srvacl,srvoptions FROM pg_catalog.pg_foreign_server WHERE srvname = ${
            parameters.srvname === undefined
              ? sql("srvname")
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

      async deleteByOid(
        parameters: PgCatalog.Tables.PgForeignServer.ByOid,
      ): Promise<PgCatalog.PgForeignServer> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_foreign_server WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgForeignServer> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_foreign_server WHERE srvname = ${
            parameters.srvname === undefined
              ? sql("srvname")
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

      async updateByOid(
        parameters: PgCatalog.Tables.PgForeignServer.ByOid,
        values: Partial<PgCatalog.PgForeignServer>,
      ): Promise<PgCatalog.PgForeignServer> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_foreign_server SET oid = ${
            values.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(values.oid)
          } , srvname = ${
            values.srvname === undefined
              ? sql("srvname")
              : typed.pg_catalog_name(values.srvname)
          } , srvowner = ${
            values.srvowner === undefined
              ? sql("srvowner")
              : typed.pg_catalog_oid(values.srvowner)
          } , srvfdw = ${
            values.srvfdw === undefined
              ? sql("srvfdw")
              : typed.pg_catalog_oid(values.srvfdw)
          } , srvtype = ${
            values.srvtype === undefined
              ? sql("srvtype")
              : typed.pg_catalog_text(values.srvtype)
          } , srvversion = ${
            values.srvversion === undefined
              ? sql("srvversion")
              : typed.pg_catalog_text(values.srvversion)
          } , srvacl = ${
            values.srvacl === undefined
              ? sql("srvacl")
              : typed.pg_catalog__aclitem(values.srvacl)
          } , srvoptions = ${
            values.srvoptions === undefined
              ? sql("srvoptions")
              : typed.pg_catalog__text(values.srvoptions)
          } WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,srvname,srvowner,srvfdw,srvtype,srvversion,srvacl,srvoptions`;

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
      async updateBySrvname(
        parameters: PgCatalog.Tables.PgForeignServer.BySrvname,
        values: Partial<PgCatalog.PgForeignServer>,
      ): Promise<PgCatalog.PgForeignServer> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_foreign_server SET oid = ${
            values.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(values.oid)
          } , srvname = ${
            values.srvname === undefined
              ? sql("srvname")
              : typed.pg_catalog_name(values.srvname)
          } , srvowner = ${
            values.srvowner === undefined
              ? sql("srvowner")
              : typed.pg_catalog_oid(values.srvowner)
          } , srvfdw = ${
            values.srvfdw === undefined
              ? sql("srvfdw")
              : typed.pg_catalog_oid(values.srvfdw)
          } , srvtype = ${
            values.srvtype === undefined
              ? sql("srvtype")
              : typed.pg_catalog_text(values.srvtype)
          } , srvversion = ${
            values.srvversion === undefined
              ? sql("srvversion")
              : typed.pg_catalog_text(values.srvversion)
          } , srvacl = ${
            values.srvacl === undefined
              ? sql("srvacl")
              : typed.pg_catalog__aclitem(values.srvacl)
          } , srvoptions = ${
            values.srvoptions === undefined
              ? sql("srvoptions")
              : typed.pg_catalog__text(values.srvoptions)
          } WHERE srvname = ${
            parameters.srvname === undefined
              ? sql("srvname")
              : typed.pg_catalog_cstring(parameters.srvname)
          } RETURNING oid,srvname,srvowner,srvfdw,srvtype,srvversion,srvacl,srvoptions`;

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

      async byOid(
        parameters: PgCatalog.Tables.PgPolicy.ByOid,
      ): Promise<PgCatalog.PgPolicy> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,polname,polrelid,polcmd,polpermissive,polroles,polqual,polwithcheck FROM pg_catalog.pg_policy WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgPolicy> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,polname,polrelid,polcmd,polpermissive,polroles,polqual,polwithcheck FROM pg_catalog.pg_policy WHERE polrelid = ${
            parameters.polrelid === undefined
              ? sql("polrelid")
              : typed.pg_catalog_oid(parameters.polrelid)
          } AND polname = ${
            parameters.polname === undefined
              ? sql("polname")
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

      async deleteByOid(
        parameters: PgCatalog.Tables.PgPolicy.ByOid,
      ): Promise<PgCatalog.PgPolicy> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_policy WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgPolicy> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_policy WHERE polrelid = ${
            parameters.polrelid === undefined
              ? sql("polrelid")
              : typed.pg_catalog_oid(parameters.polrelid)
          } AND polname = ${
            parameters.polname === undefined
              ? sql("polname")
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

      async updateByOid(
        parameters: PgCatalog.Tables.PgPolicy.ByOid,
        values: Partial<PgCatalog.PgPolicy>,
      ): Promise<PgCatalog.PgPolicy> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_policy SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , polname = ${
          values.polname === undefined
            ? sql("polname")
            : typed.pg_catalog_name(values.polname)
        } , polrelid = ${
          values.polrelid === undefined
            ? sql("polrelid")
            : typed.pg_catalog_oid(values.polrelid)
        } , polcmd = ${
          values.polcmd === undefined
            ? sql("polcmd")
            : typed.pg_catalog_char(values.polcmd)
        } , polpermissive = ${
          values.polpermissive === undefined
            ? sql("polpermissive")
            : typed.pg_catalog_bool(values.polpermissive)
        } , polroles = ${
          values.polroles === undefined
            ? sql("polroles")
            : typed.pg_catalog__oid(values.polroles)
        } , polqual = ${
          values.polqual === undefined
            ? sql("polqual")
            : typed.pg_catalog_pg_node_tree(values.polqual)
        } , polwithcheck = ${
          values.polwithcheck === undefined
            ? sql("polwithcheck")
            : typed.pg_catalog_pg_node_tree(values.polwithcheck)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,polname,polrelid,polcmd,polpermissive,polroles,polqual,polwithcheck`;

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
      async updateByPolrelidPolname(
        parameters: PgCatalog.Tables.PgPolicy.ByPolrelidPolname,
        values: Partial<PgCatalog.PgPolicy>,
      ): Promise<PgCatalog.PgPolicy> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_policy SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , polname = ${
          values.polname === undefined
            ? sql("polname")
            : typed.pg_catalog_name(values.polname)
        } , polrelid = ${
          values.polrelid === undefined
            ? sql("polrelid")
            : typed.pg_catalog_oid(values.polrelid)
        } , polcmd = ${
          values.polcmd === undefined
            ? sql("polcmd")
            : typed.pg_catalog_char(values.polcmd)
        } , polpermissive = ${
          values.polpermissive === undefined
            ? sql("polpermissive")
            : typed.pg_catalog_bool(values.polpermissive)
        } , polroles = ${
          values.polroles === undefined
            ? sql("polroles")
            : typed.pg_catalog__oid(values.polroles)
        } , polqual = ${
          values.polqual === undefined
            ? sql("polqual")
            : typed.pg_catalog_pg_node_tree(values.polqual)
        } , polwithcheck = ${
          values.polwithcheck === undefined
            ? sql("polwithcheck")
            : typed.pg_catalog_pg_node_tree(values.polwithcheck)
        } WHERE polrelid = ${
          parameters.polrelid === undefined
            ? sql("polrelid")
            : typed.pg_catalog_oid(parameters.polrelid)
        } AND polname = ${
          parameters.polname === undefined
            ? sql("polname")
            : typed.pg_catalog_cstring(parameters.polname)
        } RETURNING oid,polname,polrelid,polcmd,polpermissive,polroles,polqual,polwithcheck`;

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
      ): Promise<PgCatalog.PgReplicationOrigin> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT roident,roname FROM pg_catalog.pg_replication_origin WHERE roident = ${
            parameters.roident === undefined
              ? sql("roident")
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
      ): Promise<PgCatalog.PgReplicationOrigin> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT roident,roname FROM pg_catalog.pg_replication_origin WHERE roname = ${
            parameters.roname === undefined
              ? sql("roname")
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
      ): Promise<PgCatalog.PgReplicationOrigin> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_replication_origin WHERE roident = ${
            parameters.roident === undefined
              ? sql("roident")
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
      ): Promise<PgCatalog.PgReplicationOrigin> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_replication_origin WHERE roname = ${
            parameters.roname === undefined
              ? sql("roname")
              : typed.pg_catalog_text(parameters.roname)
          } RETURNING roident,roname
      `;

        const results = response.map((record) => ({
          roident: undefinedIsNull(record.roident),
          roname: undefinedIsNull(record.roname),
        }));
        return results[0];
      }

      async updateByRoident(
        parameters: PgCatalog.Tables.PgReplicationOrigin.ByRoident,
        values: Partial<PgCatalog.PgReplicationOrigin>,
      ): Promise<PgCatalog.PgReplicationOrigin> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_replication_origin SET roident = ${
            values.roident === undefined
              ? sql("roident")
              : typed.pg_catalog_oid(values.roident)
          } , roname = ${
            values.roname === undefined
              ? sql("roname")
              : typed.pg_catalog_text(values.roname)
          } WHERE roident = ${
            parameters.roident === undefined
              ? sql("roident")
              : typed.pg_catalog_oid(parameters.roident)
          } RETURNING roident,roname`;

        const results = response.map((record) => ({
          roident: undefinedIsNull(record.roident),
          roname: undefinedIsNull(record.roname),
        }));
        return results[0];
      }
      async updateByRoname(
        parameters: PgCatalog.Tables.PgReplicationOrigin.ByRoname,
        values: Partial<PgCatalog.PgReplicationOrigin>,
      ): Promise<PgCatalog.PgReplicationOrigin> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_replication_origin SET roident = ${
            values.roident === undefined
              ? sql("roident")
              : typed.pg_catalog_oid(values.roident)
          } , roname = ${
            values.roname === undefined
              ? sql("roname")
              : typed.pg_catalog_text(values.roname)
          } WHERE roname = ${
            parameters.roname === undefined
              ? sql("roname")
              : typed.pg_catalog_text(parameters.roname)
          } RETURNING roident,roname`;

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
      ): Promise<PgCatalog.PgDefaultAcl> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,defaclrole,defaclnamespace,defaclobjtype,defaclacl FROM pg_catalog.pg_default_acl WHERE defaclrole = ${
            parameters.defaclrole === undefined
              ? sql("defaclrole")
              : typed.pg_catalog_oid(parameters.defaclrole)
          } AND defaclnamespace = ${
            parameters.defaclnamespace === undefined
              ? sql("defaclnamespace")
              : typed.pg_catalog_oid(parameters.defaclnamespace)
          } AND defaclobjtype = ${
            parameters.defaclobjtype === undefined
              ? sql("defaclobjtype")
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
      async byOid(
        parameters: PgCatalog.Tables.PgDefaultAcl.ByOid,
      ): Promise<PgCatalog.PgDefaultAcl> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,defaclrole,defaclnamespace,defaclobjtype,defaclacl FROM pg_catalog.pg_default_acl WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgDefaultAcl> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_default_acl WHERE defaclrole = ${
            parameters.defaclrole === undefined
              ? sql("defaclrole")
              : typed.pg_catalog_oid(parameters.defaclrole)
          } AND defaclnamespace = ${
            parameters.defaclnamespace === undefined
              ? sql("defaclnamespace")
              : typed.pg_catalog_oid(parameters.defaclnamespace)
          } AND defaclobjtype = ${
            parameters.defaclobjtype === undefined
              ? sql("defaclobjtype")
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
      async deleteByOid(
        parameters: PgCatalog.Tables.PgDefaultAcl.ByOid,
      ): Promise<PgCatalog.PgDefaultAcl> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_default_acl WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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

      async updateByDefaclroleDefaclnamespaceDefaclobjtype(
        parameters: PgCatalog.Tables.PgDefaultAcl.ByDefaclroleDefaclnamespaceDefaclobjtype,
        values: Partial<PgCatalog.PgDefaultAcl>,
      ): Promise<PgCatalog.PgDefaultAcl> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_default_acl SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , defaclrole = ${
          values.defaclrole === undefined
            ? sql("defaclrole")
            : typed.pg_catalog_oid(values.defaclrole)
        } , defaclnamespace = ${
          values.defaclnamespace === undefined
            ? sql("defaclnamespace")
            : typed.pg_catalog_oid(values.defaclnamespace)
        } , defaclobjtype = ${
          values.defaclobjtype === undefined
            ? sql("defaclobjtype")
            : typed.pg_catalog_char(values.defaclobjtype)
        } , defaclacl = ${
          values.defaclacl === undefined
            ? sql("defaclacl")
            : typed.pg_catalog__aclitem(values.defaclacl)
        } WHERE defaclrole = ${
          parameters.defaclrole === undefined
            ? sql("defaclrole")
            : typed.pg_catalog_oid(parameters.defaclrole)
        } AND defaclnamespace = ${
          parameters.defaclnamespace === undefined
            ? sql("defaclnamespace")
            : typed.pg_catalog_oid(parameters.defaclnamespace)
        } AND defaclobjtype = ${
          parameters.defaclobjtype === undefined
            ? sql("defaclobjtype")
            : typed.pg_catalog_char(parameters.defaclobjtype)
        } RETURNING oid,defaclrole,defaclnamespace,defaclobjtype,defaclacl`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          defaclrole: undefinedIsNull(record.defaclrole),
          defaclnamespace: undefinedIsNull(record.defaclnamespace),
          defaclobjtype: undefinedIsNull(record.defaclobjtype),
          defaclacl: undefinedIsNull(record.defaclacl),
        }));
        return results[0];
      }
      async updateByOid(
        parameters: PgCatalog.Tables.PgDefaultAcl.ByOid,
        values: Partial<PgCatalog.PgDefaultAcl>,
      ): Promise<PgCatalog.PgDefaultAcl> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_default_acl SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , defaclrole = ${
          values.defaclrole === undefined
            ? sql("defaclrole")
            : typed.pg_catalog_oid(values.defaclrole)
        } , defaclnamespace = ${
          values.defaclnamespace === undefined
            ? sql("defaclnamespace")
            : typed.pg_catalog_oid(values.defaclnamespace)
        } , defaclobjtype = ${
          values.defaclobjtype === undefined
            ? sql("defaclobjtype")
            : typed.pg_catalog_char(values.defaclobjtype)
        } , defaclacl = ${
          values.defaclacl === undefined
            ? sql("defaclacl")
            : typed.pg_catalog__aclitem(values.defaclacl)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,defaclrole,defaclnamespace,defaclobjtype,defaclacl`;

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
      ): Promise<PgCatalog.PgInitPrivs> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT objoid,classoid,objsubid,privtype,initprivs FROM pg_catalog.pg_init_privs WHERE objoid = ${
            parameters.objoid === undefined
              ? sql("objoid")
              : typed.pg_catalog_oid(parameters.objoid)
          } AND classoid = ${
            parameters.classoid === undefined
              ? sql("classoid")
              : typed.pg_catalog_oid(parameters.classoid)
          } AND objsubid = ${
            parameters.objsubid === undefined
              ? sql("objsubid")
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
      ): Promise<PgCatalog.PgInitPrivs> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_init_privs WHERE objoid = ${
            parameters.objoid === undefined
              ? sql("objoid")
              : typed.pg_catalog_oid(parameters.objoid)
          } AND classoid = ${
            parameters.classoid === undefined
              ? sql("classoid")
              : typed.pg_catalog_oid(parameters.classoid)
          } AND objsubid = ${
            parameters.objsubid === undefined
              ? sql("objsubid")
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

      async updateByObjoidClassoidObjsubid(
        parameters: PgCatalog.Tables.PgInitPrivs.ByObjoidClassoidObjsubid,
        values: Partial<PgCatalog.PgInitPrivs>,
      ): Promise<PgCatalog.PgInitPrivs> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_init_privs SET objoid = ${
            values.objoid === undefined
              ? sql("objoid")
              : typed.pg_catalog_oid(values.objoid)
          } , classoid = ${
            values.classoid === undefined
              ? sql("classoid")
              : typed.pg_catalog_oid(values.classoid)
          } , objsubid = ${
            values.objsubid === undefined
              ? sql("objsubid")
              : typed.pg_catalog_int4(values.objsubid)
          } , privtype = ${
            values.privtype === undefined
              ? sql("privtype")
              : typed.pg_catalog_char(values.privtype)
          } , initprivs = ${
            values.initprivs === undefined
              ? sql("initprivs")
              : typed.pg_catalog__aclitem(values.initprivs)
          } WHERE objoid = ${
            parameters.objoid === undefined
              ? sql("objoid")
              : typed.pg_catalog_oid(parameters.objoid)
          } AND classoid = ${
            parameters.classoid === undefined
              ? sql("classoid")
              : typed.pg_catalog_oid(parameters.classoid)
          } AND objsubid = ${
            parameters.objsubid === undefined
              ? sql("objsubid")
              : typed.pg_catalog_int4(parameters.objsubid)
          } RETURNING objoid,classoid,objsubid,privtype,initprivs`;

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
      ): Promise<PgCatalog.PgSeclabel> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT objoid,classoid,objsubid,provider,label FROM pg_catalog.pg_seclabel WHERE objoid = ${
            parameters.objoid === undefined
              ? sql("objoid")
              : typed.pg_catalog_oid(parameters.objoid)
          } AND classoid = ${
            parameters.classoid === undefined
              ? sql("classoid")
              : typed.pg_catalog_oid(parameters.classoid)
          } AND objsubid = ${
            parameters.objsubid === undefined
              ? sql("objsubid")
              : typed.pg_catalog_int4(parameters.objsubid)
          } AND provider = ${
            parameters.provider === undefined
              ? sql("provider")
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
      ): Promise<PgCatalog.PgSeclabel> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_seclabel WHERE objoid = ${
            parameters.objoid === undefined
              ? sql("objoid")
              : typed.pg_catalog_oid(parameters.objoid)
          } AND classoid = ${
            parameters.classoid === undefined
              ? sql("classoid")
              : typed.pg_catalog_oid(parameters.classoid)
          } AND objsubid = ${
            parameters.objsubid === undefined
              ? sql("objsubid")
              : typed.pg_catalog_int4(parameters.objsubid)
          } AND provider = ${
            parameters.provider === undefined
              ? sql("provider")
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

      async updateByObjoidClassoidObjsubidProvider(
        parameters: PgCatalog.Tables.PgSeclabel.ByObjoidClassoidObjsubidProvider,
        values: Partial<PgCatalog.PgSeclabel>,
      ): Promise<PgCatalog.PgSeclabel> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_seclabel SET objoid = ${
          values.objoid === undefined
            ? sql("objoid")
            : typed.pg_catalog_oid(values.objoid)
        } , classoid = ${
          values.classoid === undefined
            ? sql("classoid")
            : typed.pg_catalog_oid(values.classoid)
        } , objsubid = ${
          values.objsubid === undefined
            ? sql("objsubid")
            : typed.pg_catalog_int4(values.objsubid)
        } , provider = ${
          values.provider === undefined
            ? sql("provider")
            : typed.pg_catalog_text(values.provider)
        } , label = ${
          values.label === undefined
            ? sql("label")
            : typed.pg_catalog_text(values.label)
        } WHERE objoid = ${
          parameters.objoid === undefined
            ? sql("objoid")
            : typed.pg_catalog_oid(parameters.objoid)
        } AND classoid = ${
          parameters.classoid === undefined
            ? sql("classoid")
            : typed.pg_catalog_oid(parameters.classoid)
        } AND objsubid = ${
          parameters.objsubid === undefined
            ? sql("objsubid")
            : typed.pg_catalog_int4(parameters.objsubid)
        } AND provider = ${
          parameters.provider === undefined
            ? sql("provider")
            : typed.pg_catalog_text(parameters.provider)
        } RETURNING objoid,classoid,objsubid,provider,label`;

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
      ): Promise<PgCatalog.PgShseclabel> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT objoid,classoid,provider,label FROM pg_catalog.pg_shseclabel WHERE objoid = ${
            parameters.objoid === undefined
              ? sql("objoid")
              : typed.pg_catalog_oid(parameters.objoid)
          } AND classoid = ${
            parameters.classoid === undefined
              ? sql("classoid")
              : typed.pg_catalog_oid(parameters.classoid)
          } AND provider = ${
            parameters.provider === undefined
              ? sql("provider")
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
      ): Promise<PgCatalog.PgShseclabel> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_shseclabel WHERE objoid = ${
            parameters.objoid === undefined
              ? sql("objoid")
              : typed.pg_catalog_oid(parameters.objoid)
          } AND classoid = ${
            parameters.classoid === undefined
              ? sql("classoid")
              : typed.pg_catalog_oid(parameters.classoid)
          } AND provider = ${
            parameters.provider === undefined
              ? sql("provider")
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

      async updateByObjoidClassoidProvider(
        parameters: PgCatalog.Tables.PgShseclabel.ByObjoidClassoidProvider,
        values: Partial<PgCatalog.PgShseclabel>,
      ): Promise<PgCatalog.PgShseclabel> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_shseclabel SET objoid = ${
            values.objoid === undefined
              ? sql("objoid")
              : typed.pg_catalog_oid(values.objoid)
          } , classoid = ${
            values.classoid === undefined
              ? sql("classoid")
              : typed.pg_catalog_oid(values.classoid)
          } , provider = ${
            values.provider === undefined
              ? sql("provider")
              : typed.pg_catalog_text(values.provider)
          } , label = ${
            values.label === undefined
              ? sql("label")
              : typed.pg_catalog_text(values.label)
          } WHERE objoid = ${
            parameters.objoid === undefined
              ? sql("objoid")
              : typed.pg_catalog_oid(parameters.objoid)
          } AND classoid = ${
            parameters.classoid === undefined
              ? sql("classoid")
              : typed.pg_catalog_oid(parameters.classoid)
          } AND provider = ${
            parameters.provider === undefined
              ? sql("provider")
              : typed.pg_catalog_text(parameters.provider)
          } RETURNING objoid,classoid,provider,label`;

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
      ): Promise<PgCatalog.PgCollation> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,collname,collnamespace,collowner,collprovider,collisdeterministic,collencoding,collcollate,collctype,colliculocale,collicurules,collversion FROM pg_catalog.pg_collation WHERE collname = ${
            parameters.collname === undefined
              ? sql("collname")
              : typed.pg_catalog_cstring(parameters.collname)
          } AND collencoding = ${
            parameters.collencoding === undefined
              ? sql("collencoding")
              : typed.pg_catalog_int4(parameters.collencoding)
          } AND collnamespace = ${
            parameters.collnamespace === undefined
              ? sql("collnamespace")
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
      async byOid(
        parameters: PgCatalog.Tables.PgCollation.ByOid,
      ): Promise<PgCatalog.PgCollation> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,collname,collnamespace,collowner,collprovider,collisdeterministic,collencoding,collcollate,collctype,colliculocale,collicurules,collversion FROM pg_catalog.pg_collation WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgCollation> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_collation WHERE collname = ${
            parameters.collname === undefined
              ? sql("collname")
              : typed.pg_catalog_cstring(parameters.collname)
          } AND collencoding = ${
            parameters.collencoding === undefined
              ? sql("collencoding")
              : typed.pg_catalog_int4(parameters.collencoding)
          } AND collnamespace = ${
            parameters.collnamespace === undefined
              ? sql("collnamespace")
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
      async deleteByOid(
        parameters: PgCatalog.Tables.PgCollation.ByOid,
      ): Promise<PgCatalog.PgCollation> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_collation WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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

      async updateByCollnameCollencodingCollnamespace(
        parameters: PgCatalog.Tables.PgCollation.ByCollnameCollencodingCollnamespace,
        values: Partial<PgCatalog.PgCollation>,
      ): Promise<PgCatalog.PgCollation> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_collation SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , collname = ${
          values.collname === undefined
            ? sql("collname")
            : typed.pg_catalog_name(values.collname)
        } , collnamespace = ${
          values.collnamespace === undefined
            ? sql("collnamespace")
            : typed.pg_catalog_oid(values.collnamespace)
        } , collowner = ${
          values.collowner === undefined
            ? sql("collowner")
            : typed.pg_catalog_oid(values.collowner)
        } , collprovider = ${
          values.collprovider === undefined
            ? sql("collprovider")
            : typed.pg_catalog_char(values.collprovider)
        } , collisdeterministic = ${
          values.collisdeterministic === undefined
            ? sql("collisdeterministic")
            : typed.pg_catalog_bool(values.collisdeterministic)
        } , collencoding = ${
          values.collencoding === undefined
            ? sql("collencoding")
            : typed.pg_catalog_int4(values.collencoding)
        } , collcollate = ${
          values.collcollate === undefined
            ? sql("collcollate")
            : typed.pg_catalog_text(values.collcollate)
        } , collctype = ${
          values.collctype === undefined
            ? sql("collctype")
            : typed.pg_catalog_text(values.collctype)
        } , colliculocale = ${
          values.colliculocale === undefined
            ? sql("colliculocale")
            : typed.pg_catalog_text(values.colliculocale)
        } , collicurules = ${
          values.collicurules === undefined
            ? sql("collicurules")
            : typed.pg_catalog_text(values.collicurules)
        } , collversion = ${
          values.collversion === undefined
            ? sql("collversion")
            : typed.pg_catalog_text(values.collversion)
        } WHERE collname = ${
          parameters.collname === undefined
            ? sql("collname")
            : typed.pg_catalog_cstring(parameters.collname)
        } AND collencoding = ${
          parameters.collencoding === undefined
            ? sql("collencoding")
            : typed.pg_catalog_int4(parameters.collencoding)
        } AND collnamespace = ${
          parameters.collnamespace === undefined
            ? sql("collnamespace")
            : typed.pg_catalog_oid(parameters.collnamespace)
        } RETURNING oid,collname,collnamespace,collowner,collprovider,collisdeterministic,collencoding,collcollate,collctype,colliculocale,collicurules,collversion`;

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
      async updateByOid(
        parameters: PgCatalog.Tables.PgCollation.ByOid,
        values: Partial<PgCatalog.PgCollation>,
      ): Promise<PgCatalog.PgCollation> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_collation SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , collname = ${
          values.collname === undefined
            ? sql("collname")
            : typed.pg_catalog_name(values.collname)
        } , collnamespace = ${
          values.collnamespace === undefined
            ? sql("collnamespace")
            : typed.pg_catalog_oid(values.collnamespace)
        } , collowner = ${
          values.collowner === undefined
            ? sql("collowner")
            : typed.pg_catalog_oid(values.collowner)
        } , collprovider = ${
          values.collprovider === undefined
            ? sql("collprovider")
            : typed.pg_catalog_char(values.collprovider)
        } , collisdeterministic = ${
          values.collisdeterministic === undefined
            ? sql("collisdeterministic")
            : typed.pg_catalog_bool(values.collisdeterministic)
        } , collencoding = ${
          values.collencoding === undefined
            ? sql("collencoding")
            : typed.pg_catalog_int4(values.collencoding)
        } , collcollate = ${
          values.collcollate === undefined
            ? sql("collcollate")
            : typed.pg_catalog_text(values.collcollate)
        } , collctype = ${
          values.collctype === undefined
            ? sql("collctype")
            : typed.pg_catalog_text(values.collctype)
        } , colliculocale = ${
          values.colliculocale === undefined
            ? sql("colliculocale")
            : typed.pg_catalog_text(values.colliculocale)
        } , collicurules = ${
          values.collicurules === undefined
            ? sql("collicurules")
            : typed.pg_catalog_text(values.collicurules)
        } , collversion = ${
          values.collversion === undefined
            ? sql("collversion")
            : typed.pg_catalog_text(values.collversion)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,collname,collnamespace,collowner,collprovider,collisdeterministic,collencoding,collcollate,collctype,colliculocale,collicurules,collversion`;

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

      async byOid(
        parameters: PgCatalog.Tables.PgParameterAcl.ByOid,
      ): Promise<PgCatalog.PgParameterAcl> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,parname,paracl FROM pg_catalog.pg_parameter_acl WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(parameters.oid)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          parname: undefinedIsNull(record.parname),
          paracl: undefinedIsNull(record.paracl),
        }));
        return results[0];
      }
      async byParname(
        parameters: PgCatalog.Tables.PgParameterAcl.ByParname,
      ): Promise<PgCatalog.PgParameterAcl> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,parname,paracl FROM pg_catalog.pg_parameter_acl WHERE parname = ${
            parameters.parname === undefined
              ? sql("parname")
              : typed.pg_catalog_text(parameters.parname)
          }`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          parname: undefinedIsNull(record.parname),
          paracl: undefinedIsNull(record.paracl),
        }));
        return results[0];
      }

      async deleteByOid(
        parameters: PgCatalog.Tables.PgParameterAcl.ByOid,
      ): Promise<PgCatalog.PgParameterAcl> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_parameter_acl WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgParameterAcl> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_parameter_acl WHERE parname = ${
            parameters.parname === undefined
              ? sql("parname")
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

      async updateByOid(
        parameters: PgCatalog.Tables.PgParameterAcl.ByOid,
        values: Partial<PgCatalog.PgParameterAcl>,
      ): Promise<PgCatalog.PgParameterAcl> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_parameter_acl SET oid = ${
            values.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(values.oid)
          } , parname = ${
            values.parname === undefined
              ? sql("parname")
              : typed.pg_catalog_text(values.parname)
          } , paracl = ${
            values.paracl === undefined
              ? sql("paracl")
              : typed.pg_catalog__aclitem(values.paracl)
          } WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,parname,paracl`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          parname: undefinedIsNull(record.parname),
          paracl: undefinedIsNull(record.paracl),
        }));
        return results[0];
      }
      async updateByParname(
        parameters: PgCatalog.Tables.PgParameterAcl.ByParname,
        values: Partial<PgCatalog.PgParameterAcl>,
      ): Promise<PgCatalog.PgParameterAcl> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_parameter_acl SET oid = ${
            values.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(values.oid)
          } , parname = ${
            values.parname === undefined
              ? sql("parname")
              : typed.pg_catalog_text(values.parname)
          } , paracl = ${
            values.paracl === undefined
              ? sql("paracl")
              : typed.pg_catalog__aclitem(values.paracl)
          } WHERE parname = ${
            parameters.parname === undefined
              ? sql("parname")
              : typed.pg_catalog_text(parameters.parname)
          } RETURNING oid,parname,paracl`;

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
      ): Promise<PgCatalog.PgPartitionedTable> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT partrelid,partstrat,partnatts,partdefid,partattrs,partclass,partcollation,partexprs FROM pg_catalog.pg_partitioned_table WHERE partrelid = ${
            parameters.partrelid === undefined
              ? sql("partrelid")
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
      ): Promise<PgCatalog.PgPartitionedTable> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_partitioned_table WHERE partrelid = ${
            parameters.partrelid === undefined
              ? sql("partrelid")
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

      async updateByPartrelid(
        parameters: PgCatalog.Tables.PgPartitionedTable.ByPartrelid,
        values: Partial<PgCatalog.PgPartitionedTable>,
      ): Promise<PgCatalog.PgPartitionedTable> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_partitioned_table SET partrelid = ${
            values.partrelid === undefined
              ? sql("partrelid")
              : typed.pg_catalog_oid(values.partrelid)
          } , partstrat = ${
            values.partstrat === undefined
              ? sql("partstrat")
              : typed.pg_catalog_char(values.partstrat)
          } , partnatts = ${
            values.partnatts === undefined
              ? sql("partnatts")
              : typed.pg_catalog_int2(values.partnatts)
          } , partdefid = ${
            values.partdefid === undefined
              ? sql("partdefid")
              : typed.pg_catalog_oid(values.partdefid)
          } , partattrs = ${
            values.partattrs === undefined
              ? sql("partattrs")
              : typed.pg_catalog_int2vector(values.partattrs)
          } , partclass = ${
            values.partclass === undefined
              ? sql("partclass")
              : typed.pg_catalog_oidvector(values.partclass)
          } , partcollation = ${
            values.partcollation === undefined
              ? sql("partcollation")
              : typed.pg_catalog_oidvector(values.partcollation)
          } , partexprs = ${
            values.partexprs === undefined
              ? sql("partexprs")
              : typed.pg_catalog_pg_node_tree(values.partexprs)
          } WHERE partrelid = ${
            parameters.partrelid === undefined
              ? sql("partrelid")
              : typed.pg_catalog_oid(parameters.partrelid)
          } RETURNING partrelid,partstrat,partnatts,partdefid,partattrs,partclass,partcollation,partexprs`;

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
      ): Promise<PgCatalog.PgRange> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT rngtypid,rngsubtype,rngmultitypid,rngcollation,rngsubopc,rngcanonical,rngsubdiff FROM pg_catalog.pg_range WHERE rngmultitypid = ${
            parameters.rngmultitypid === undefined
              ? sql("rngmultitypid")
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
      async byRngtypid(
        parameters: PgCatalog.Tables.PgRange.ByRngtypid,
      ): Promise<PgCatalog.PgRange> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT rngtypid,rngsubtype,rngmultitypid,rngcollation,rngsubopc,rngcanonical,rngsubdiff FROM pg_catalog.pg_range WHERE rngtypid = ${
            parameters.rngtypid === undefined
              ? sql("rngtypid")
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
      ): Promise<PgCatalog.PgRange> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_range WHERE rngmultitypid = ${
            parameters.rngmultitypid === undefined
              ? sql("rngmultitypid")
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
      async deleteByRngtypid(
        parameters: PgCatalog.Tables.PgRange.ByRngtypid,
      ): Promise<PgCatalog.PgRange> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_range WHERE rngtypid = ${
            parameters.rngtypid === undefined
              ? sql("rngtypid")
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

      async updateByRngmultitypid(
        parameters: PgCatalog.Tables.PgRange.ByRngmultitypid,
        values: Partial<PgCatalog.PgRange>,
      ): Promise<PgCatalog.PgRange> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_range SET rngtypid = ${
          values.rngtypid === undefined
            ? sql("rngtypid")
            : typed.pg_catalog_oid(values.rngtypid)
        } , rngsubtype = ${
          values.rngsubtype === undefined
            ? sql("rngsubtype")
            : typed.pg_catalog_oid(values.rngsubtype)
        } , rngmultitypid = ${
          values.rngmultitypid === undefined
            ? sql("rngmultitypid")
            : typed.pg_catalog_oid(values.rngmultitypid)
        } , rngcollation = ${
          values.rngcollation === undefined
            ? sql("rngcollation")
            : typed.pg_catalog_oid(values.rngcollation)
        } , rngsubopc = ${
          values.rngsubopc === undefined
            ? sql("rngsubopc")
            : typed.pg_catalog_oid(values.rngsubopc)
        } , rngcanonical = ${
          values.rngcanonical === undefined
            ? sql("rngcanonical")
            : typed.pg_catalog_regproc(values.rngcanonical)
        } , rngsubdiff = ${
          values.rngsubdiff === undefined
            ? sql("rngsubdiff")
            : typed.pg_catalog_regproc(values.rngsubdiff)
        } WHERE rngmultitypid = ${
          parameters.rngmultitypid === undefined
            ? sql("rngmultitypid")
            : typed.pg_catalog_oid(parameters.rngmultitypid)
        } RETURNING rngtypid,rngsubtype,rngmultitypid,rngcollation,rngsubopc,rngcanonical,rngsubdiff`;

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
      async updateByRngtypid(
        parameters: PgCatalog.Tables.PgRange.ByRngtypid,
        values: Partial<PgCatalog.PgRange>,
      ): Promise<PgCatalog.PgRange> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_range SET rngtypid = ${
          values.rngtypid === undefined
            ? sql("rngtypid")
            : typed.pg_catalog_oid(values.rngtypid)
        } , rngsubtype = ${
          values.rngsubtype === undefined
            ? sql("rngsubtype")
            : typed.pg_catalog_oid(values.rngsubtype)
        } , rngmultitypid = ${
          values.rngmultitypid === undefined
            ? sql("rngmultitypid")
            : typed.pg_catalog_oid(values.rngmultitypid)
        } , rngcollation = ${
          values.rngcollation === undefined
            ? sql("rngcollation")
            : typed.pg_catalog_oid(values.rngcollation)
        } , rngsubopc = ${
          values.rngsubopc === undefined
            ? sql("rngsubopc")
            : typed.pg_catalog_oid(values.rngsubopc)
        } , rngcanonical = ${
          values.rngcanonical === undefined
            ? sql("rngcanonical")
            : typed.pg_catalog_regproc(values.rngcanonical)
        } , rngsubdiff = ${
          values.rngsubdiff === undefined
            ? sql("rngsubdiff")
            : typed.pg_catalog_regproc(values.rngsubdiff)
        } WHERE rngtypid = ${
          parameters.rngtypid === undefined
            ? sql("rngtypid")
            : typed.pg_catalog_oid(parameters.rngtypid)
        } RETURNING rngtypid,rngsubtype,rngmultitypid,rngcollation,rngsubopc,rngcanonical,rngsubdiff`;

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

      async byOid(
        parameters: PgCatalog.Tables.PgTransform.ByOid,
      ): Promise<PgCatalog.PgTransform> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,trftype,trflang,trffromsql,trftosql FROM pg_catalog.pg_transform WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgTransform> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,trftype,trflang,trffromsql,trftosql FROM pg_catalog.pg_transform WHERE trftype = ${
            parameters.trftype === undefined
              ? sql("trftype")
              : typed.pg_catalog_oid(parameters.trftype)
          } AND trflang = ${
            parameters.trflang === undefined
              ? sql("trflang")
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

      async deleteByOid(
        parameters: PgCatalog.Tables.PgTransform.ByOid,
      ): Promise<PgCatalog.PgTransform> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_transform WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgTransform> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_transform WHERE trftype = ${
            parameters.trftype === undefined
              ? sql("trftype")
              : typed.pg_catalog_oid(parameters.trftype)
          } AND trflang = ${
            parameters.trflang === undefined
              ? sql("trflang")
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

      async updateByOid(
        parameters: PgCatalog.Tables.PgTransform.ByOid,
        values: Partial<PgCatalog.PgTransform>,
      ): Promise<PgCatalog.PgTransform> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_transform SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , trftype = ${
          values.trftype === undefined
            ? sql("trftype")
            : typed.pg_catalog_oid(values.trftype)
        } , trflang = ${
          values.trflang === undefined
            ? sql("trflang")
            : typed.pg_catalog_oid(values.trflang)
        } , trffromsql = ${
          values.trffromsql === undefined
            ? sql("trffromsql")
            : typed.pg_catalog_regproc(values.trffromsql)
        } , trftosql = ${
          values.trftosql === undefined
            ? sql("trftosql")
            : typed.pg_catalog_regproc(values.trftosql)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,trftype,trflang,trffromsql,trftosql`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          trftype: undefinedIsNull(record.trftype),
          trflang: undefinedIsNull(record.trflang),
          trffromsql: undefinedIsNull(record.trffromsql),
          trftosql: undefinedIsNull(record.trftosql),
        }));
        return results[0];
      }
      async updateByTrftypeTrflang(
        parameters: PgCatalog.Tables.PgTransform.ByTrftypeTrflang,
        values: Partial<PgCatalog.PgTransform>,
      ): Promise<PgCatalog.PgTransform> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_transform SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , trftype = ${
          values.trftype === undefined
            ? sql("trftype")
            : typed.pg_catalog_oid(values.trftype)
        } , trflang = ${
          values.trflang === undefined
            ? sql("trflang")
            : typed.pg_catalog_oid(values.trflang)
        } , trffromsql = ${
          values.trffromsql === undefined
            ? sql("trffromsql")
            : typed.pg_catalog_regproc(values.trffromsql)
        } , trftosql = ${
          values.trftosql === undefined
            ? sql("trftosql")
            : typed.pg_catalog_regproc(values.trftosql)
        } WHERE trftype = ${
          parameters.trftype === undefined
            ? sql("trftype")
            : typed.pg_catalog_oid(parameters.trftype)
        } AND trflang = ${
          parameters.trflang === undefined
            ? sql("trflang")
            : typed.pg_catalog_oid(parameters.trflang)
        } RETURNING oid,trftype,trflang,trffromsql,trftosql`;

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
        parameters: PgCatalog.Tables.PgSequence.BySeqrelid,
      ): Promise<PgCatalog.PgSequence> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT seqrelid,seqtypid,seqstart,seqincrement,seqmax,seqmin,seqcache,seqcycle FROM pg_catalog.pg_sequence WHERE seqrelid = ${
            parameters.seqrelid === undefined
              ? sql("seqrelid")
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
      ): Promise<PgCatalog.PgSequence> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_sequence WHERE seqrelid = ${
            parameters.seqrelid === undefined
              ? sql("seqrelid")
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

      async updateBySeqrelid(
        parameters: PgCatalog.Tables.PgSequence.BySeqrelid,
        values: Partial<PgCatalog.PgSequence>,
      ): Promise<PgCatalog.PgSequence> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_sequence SET seqrelid = ${
            values.seqrelid === undefined
              ? sql("seqrelid")
              : typed.pg_catalog_oid(values.seqrelid)
          } , seqtypid = ${
            values.seqtypid === undefined
              ? sql("seqtypid")
              : typed.pg_catalog_oid(values.seqtypid)
          } , seqstart = ${
            values.seqstart === undefined
              ? sql("seqstart")
              : typed.pg_catalog_int8(values.seqstart)
          } , seqincrement = ${
            values.seqincrement === undefined
              ? sql("seqincrement")
              : typed.pg_catalog_int8(values.seqincrement)
          } , seqmax = ${
            values.seqmax === undefined
              ? sql("seqmax")
              : typed.pg_catalog_int8(values.seqmax)
          } , seqmin = ${
            values.seqmin === undefined
              ? sql("seqmin")
              : typed.pg_catalog_int8(values.seqmin)
          } , seqcache = ${
            values.seqcache === undefined
              ? sql("seqcache")
              : typed.pg_catalog_int8(values.seqcache)
          } , seqcycle = ${
            values.seqcycle === undefined
              ? sql("seqcycle")
              : typed.pg_catalog_bool(values.seqcycle)
          } WHERE seqrelid = ${
            parameters.seqrelid === undefined
              ? sql("seqrelid")
              : typed.pg_catalog_oid(parameters.seqrelid)
          } RETURNING seqrelid,seqtypid,seqstart,seqincrement,seqmax,seqmin,seqcache,seqcycle`;

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

      async byOid(
        parameters: PgCatalog.Tables.PgPublication.ByOid,
      ): Promise<PgCatalog.PgPublication> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,pubname,pubowner,puballtables,pubinsert,pubupdate,pubdelete,pubtruncate,pubviaroot FROM pg_catalog.pg_publication WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      async byPubname(
        parameters: PgCatalog.Tables.PgPublication.ByPubname,
      ): Promise<PgCatalog.PgPublication> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,pubname,pubowner,puballtables,pubinsert,pubupdate,pubdelete,pubtruncate,pubviaroot FROM pg_catalog.pg_publication WHERE pubname = ${
            parameters.pubname === undefined
              ? sql("pubname")
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

      async deleteByOid(
        parameters: PgCatalog.Tables.PgPublication.ByOid,
      ): Promise<PgCatalog.PgPublication> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_publication WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgPublication> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_publication WHERE pubname = ${
            parameters.pubname === undefined
              ? sql("pubname")
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

      async updateByOid(
        parameters: PgCatalog.Tables.PgPublication.ByOid,
        values: Partial<PgCatalog.PgPublication>,
      ): Promise<PgCatalog.PgPublication> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_publication SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , pubname = ${
          values.pubname === undefined
            ? sql("pubname")
            : typed.pg_catalog_name(values.pubname)
        } , pubowner = ${
          values.pubowner === undefined
            ? sql("pubowner")
            : typed.pg_catalog_oid(values.pubowner)
        } , puballtables = ${
          values.puballtables === undefined
            ? sql("puballtables")
            : typed.pg_catalog_bool(values.puballtables)
        } , pubinsert = ${
          values.pubinsert === undefined
            ? sql("pubinsert")
            : typed.pg_catalog_bool(values.pubinsert)
        } , pubupdate = ${
          values.pubupdate === undefined
            ? sql("pubupdate")
            : typed.pg_catalog_bool(values.pubupdate)
        } , pubdelete = ${
          values.pubdelete === undefined
            ? sql("pubdelete")
            : typed.pg_catalog_bool(values.pubdelete)
        } , pubtruncate = ${
          values.pubtruncate === undefined
            ? sql("pubtruncate")
            : typed.pg_catalog_bool(values.pubtruncate)
        } , pubviaroot = ${
          values.pubviaroot === undefined
            ? sql("pubviaroot")
            : typed.pg_catalog_bool(values.pubviaroot)
        } WHERE oid = ${
          parameters.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(parameters.oid)
        } RETURNING oid,pubname,pubowner,puballtables,pubinsert,pubupdate,pubdelete,pubtruncate,pubviaroot`;

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
      async updateByPubname(
        parameters: PgCatalog.Tables.PgPublication.ByPubname,
        values: Partial<PgCatalog.PgPublication>,
      ): Promise<PgCatalog.PgPublication> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE pg_catalog.pg_publication SET oid = ${
          values.oid === undefined
            ? sql("oid")
            : typed.pg_catalog_oid(values.oid)
        } , pubname = ${
          values.pubname === undefined
            ? sql("pubname")
            : typed.pg_catalog_name(values.pubname)
        } , pubowner = ${
          values.pubowner === undefined
            ? sql("pubowner")
            : typed.pg_catalog_oid(values.pubowner)
        } , puballtables = ${
          values.puballtables === undefined
            ? sql("puballtables")
            : typed.pg_catalog_bool(values.puballtables)
        } , pubinsert = ${
          values.pubinsert === undefined
            ? sql("pubinsert")
            : typed.pg_catalog_bool(values.pubinsert)
        } , pubupdate = ${
          values.pubupdate === undefined
            ? sql("pubupdate")
            : typed.pg_catalog_bool(values.pubupdate)
        } , pubdelete = ${
          values.pubdelete === undefined
            ? sql("pubdelete")
            : typed.pg_catalog_bool(values.pubdelete)
        } , pubtruncate = ${
          values.pubtruncate === undefined
            ? sql("pubtruncate")
            : typed.pg_catalog_bool(values.pubtruncate)
        } , pubviaroot = ${
          values.pubviaroot === undefined
            ? sql("pubviaroot")
            : typed.pg_catalog_bool(values.pubviaroot)
        } WHERE pubname = ${
          parameters.pubname === undefined
            ? sql("pubname")
            : typed.pg_catalog_cstring(parameters.pubname)
        } RETURNING oid,pubname,pubowner,puballtables,pubinsert,pubupdate,pubdelete,pubtruncate,pubviaroot`;

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
        parameters: PgCatalog.Tables.PgPublicationNamespace.ByOid,
      ): Promise<PgCatalog.PgPublicationNamespace> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,pnpubid,pnnspid FROM pg_catalog.pg_publication_namespace WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgPublicationNamespace> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,pnpubid,pnnspid FROM pg_catalog.pg_publication_namespace WHERE pnnspid = ${
            parameters.pnnspid === undefined
              ? sql("pnnspid")
              : typed.pg_catalog_oid(parameters.pnnspid)
          } AND pnpubid = ${
            parameters.pnpubid === undefined
              ? sql("pnpubid")
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
      ): Promise<PgCatalog.PgPublicationNamespace> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_publication_namespace WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgPublicationNamespace> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_publication_namespace WHERE pnnspid = ${
            parameters.pnnspid === undefined
              ? sql("pnnspid")
              : typed.pg_catalog_oid(parameters.pnnspid)
          } AND pnpubid = ${
            parameters.pnpubid === undefined
              ? sql("pnpubid")
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

      async updateByOid(
        parameters: PgCatalog.Tables.PgPublicationNamespace.ByOid,
        values: Partial<PgCatalog.PgPublicationNamespace>,
      ): Promise<PgCatalog.PgPublicationNamespace> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_publication_namespace SET oid = ${
            values.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(values.oid)
          } , pnpubid = ${
            values.pnpubid === undefined
              ? sql("pnpubid")
              : typed.pg_catalog_oid(values.pnpubid)
          } , pnnspid = ${
            values.pnnspid === undefined
              ? sql("pnnspid")
              : typed.pg_catalog_oid(values.pnnspid)
          } WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,pnpubid,pnnspid`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          pnpubid: undefinedIsNull(record.pnpubid),
          pnnspid: undefinedIsNull(record.pnnspid),
        }));
        return results[0];
      }
      async updateByPnnspidPnpubid(
        parameters: PgCatalog.Tables.PgPublicationNamespace.ByPnnspidPnpubid,
        values: Partial<PgCatalog.PgPublicationNamespace>,
      ): Promise<PgCatalog.PgPublicationNamespace> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_publication_namespace SET oid = ${
            values.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(values.oid)
          } , pnpubid = ${
            values.pnpubid === undefined
              ? sql("pnpubid")
              : typed.pg_catalog_oid(values.pnpubid)
          } , pnnspid = ${
            values.pnnspid === undefined
              ? sql("pnnspid")
              : typed.pg_catalog_oid(values.pnnspid)
          } WHERE pnnspid = ${
            parameters.pnnspid === undefined
              ? sql("pnnspid")
              : typed.pg_catalog_oid(parameters.pnnspid)
          } AND pnpubid = ${
            parameters.pnpubid === undefined
              ? sql("pnpubid")
              : typed.pg_catalog_oid(parameters.pnpubid)
          } RETURNING oid,pnpubid,pnnspid`;

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

      async byOid(
        parameters: PgCatalog.Tables.PgPublicationRel.ByOid,
      ): Promise<PgCatalog.PgPublicationRel> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,prpubid,prrelid,prqual,prattrs FROM pg_catalog.pg_publication_rel WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      async byPrpubid(
        parameters: PgCatalog.Tables.PgPublicationRel.ByPrpubid,
      ): Promise<PgCatalog.PgPublicationRel[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,prpubid,prrelid,prqual,prattrs FROM pg_catalog.pg_publication_rel WHERE prpubid = ${
            parameters.prpubid === undefined
              ? sql("prpubid")
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
      ): Promise<PgCatalog.PgPublicationRel> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT oid,prpubid,prrelid,prqual,prattrs FROM pg_catalog.pg_publication_rel WHERE prrelid = ${
            parameters.prrelid === undefined
              ? sql("prrelid")
              : typed.pg_catalog_oid(parameters.prrelid)
          } AND prpubid = ${
            parameters.prpubid === undefined
              ? sql("prpubid")
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

      async deleteByOid(
        parameters: PgCatalog.Tables.PgPublicationRel.ByOid,
      ): Promise<PgCatalog.PgPublicationRel> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_publication_rel WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
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
      ): Promise<PgCatalog.PgPublicationRel[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_publication_rel WHERE prpubid = ${
            parameters.prpubid === undefined
              ? sql("prpubid")
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
      ): Promise<PgCatalog.PgPublicationRel> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_publication_rel WHERE prrelid = ${
            parameters.prrelid === undefined
              ? sql("prrelid")
              : typed.pg_catalog_oid(parameters.prrelid)
          } AND prpubid = ${
            parameters.prpubid === undefined
              ? sql("prpubid")
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

      async updateByOid(
        parameters: PgCatalog.Tables.PgPublicationRel.ByOid,
        values: Partial<PgCatalog.PgPublicationRel>,
      ): Promise<PgCatalog.PgPublicationRel> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_publication_rel SET oid = ${
            values.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(values.oid)
          } , prpubid = ${
            values.prpubid === undefined
              ? sql("prpubid")
              : typed.pg_catalog_oid(values.prpubid)
          } , prrelid = ${
            values.prrelid === undefined
              ? sql("prrelid")
              : typed.pg_catalog_oid(values.prrelid)
          } , prqual = ${
            values.prqual === undefined
              ? sql("prqual")
              : typed.pg_catalog_pg_node_tree(values.prqual)
          } , prattrs = ${
            values.prattrs === undefined
              ? sql("prattrs")
              : typed.pg_catalog_int2vector(values.prattrs)
          } WHERE oid = ${
            parameters.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(parameters.oid)
          } RETURNING oid,prpubid,prrelid,prqual,prattrs`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          prpubid: undefinedIsNull(record.prpubid),
          prrelid: undefinedIsNull(record.prrelid),
          prqual: undefinedIsNull(record.prqual),
          prattrs: undefinedIsNull(record.prattrs),
        }));
        return results[0];
      }
      async updateByPrpubid(
        parameters: PgCatalog.Tables.PgPublicationRel.ByPrpubid,
        values: Partial<PgCatalog.PgPublicationRel>,
      ): Promise<PgCatalog.PgPublicationRel[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_publication_rel SET oid = ${
            values.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(values.oid)
          } , prpubid = ${
            values.prpubid === undefined
              ? sql("prpubid")
              : typed.pg_catalog_oid(values.prpubid)
          } , prrelid = ${
            values.prrelid === undefined
              ? sql("prrelid")
              : typed.pg_catalog_oid(values.prrelid)
          } , prqual = ${
            values.prqual === undefined
              ? sql("prqual")
              : typed.pg_catalog_pg_node_tree(values.prqual)
          } , prattrs = ${
            values.prattrs === undefined
              ? sql("prattrs")
              : typed.pg_catalog_int2vector(values.prattrs)
          } WHERE prpubid = ${
            parameters.prpubid === undefined
              ? sql("prpubid")
              : typed.pg_catalog_oid(parameters.prpubid)
          } RETURNING oid,prpubid,prrelid,prqual,prattrs`;

        const results = response.map((record) => ({
          oid: undefinedIsNull(record.oid),
          prpubid: undefinedIsNull(record.prpubid),
          prrelid: undefinedIsNull(record.prrelid),
          prqual: undefinedIsNull(record.prqual),
          prattrs: undefinedIsNull(record.prattrs),
        }));
        return results;
      }
      async updateByPrrelidPrpubid(
        parameters: PgCatalog.Tables.PgPublicationRel.ByPrrelidPrpubid,
        values: Partial<PgCatalog.PgPublicationRel>,
      ): Promise<PgCatalog.PgPublicationRel> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_publication_rel SET oid = ${
            values.oid === undefined
              ? sql("oid")
              : typed.pg_catalog_oid(values.oid)
          } , prpubid = ${
            values.prpubid === undefined
              ? sql("prpubid")
              : typed.pg_catalog_oid(values.prpubid)
          } , prrelid = ${
            values.prrelid === undefined
              ? sql("prrelid")
              : typed.pg_catalog_oid(values.prrelid)
          } , prqual = ${
            values.prqual === undefined
              ? sql("prqual")
              : typed.pg_catalog_pg_node_tree(values.prqual)
          } , prattrs = ${
            values.prattrs === undefined
              ? sql("prattrs")
              : typed.pg_catalog_int2vector(values.prattrs)
          } WHERE prrelid = ${
            parameters.prrelid === undefined
              ? sql("prrelid")
              : typed.pg_catalog_oid(parameters.prrelid)
          } AND prpubid = ${
            parameters.prpubid === undefined
              ? sql("prpubid")
              : typed.pg_catalog_oid(parameters.prpubid)
          } RETURNING oid,prpubid,prrelid,prqual,prattrs`;

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
      ): Promise<PgCatalog.PgSubscriptionRel> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT srsubid,srrelid,srsubstate,srsublsn FROM pg_catalog.pg_subscription_rel WHERE srrelid = ${
            parameters.srrelid === undefined
              ? sql("srrelid")
              : typed.pg_catalog_oid(parameters.srrelid)
          } AND srsubid = ${
            parameters.srsubid === undefined
              ? sql("srsubid")
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
      ): Promise<PgCatalog.PgSubscriptionRel> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_subscription_rel WHERE srrelid = ${
            parameters.srrelid === undefined
              ? sql("srrelid")
              : typed.pg_catalog_oid(parameters.srrelid)
          } AND srsubid = ${
            parameters.srsubid === undefined
              ? sql("srsubid")
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

      async updateBySrrelidSrsubid(
        parameters: PgCatalog.Tables.PgSubscriptionRel.BySrrelidSrsubid,
        values: Partial<PgCatalog.PgSubscriptionRel>,
      ): Promise<PgCatalog.PgSubscriptionRel> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_subscription_rel SET srsubid = ${
            values.srsubid === undefined
              ? sql("srsubid")
              : typed.pg_catalog_oid(values.srsubid)
          } , srrelid = ${
            values.srrelid === undefined
              ? sql("srrelid")
              : typed.pg_catalog_oid(values.srrelid)
          } , srsubstate = ${
            values.srsubstate === undefined
              ? sql("srsubstate")
              : typed.pg_catalog_char(values.srsubstate)
          } , srsublsn = ${
            values.srsublsn === undefined
              ? sql("srsublsn")
              : typed.pg_catalog_pg_lsn(values.srsublsn)
          } WHERE srrelid = ${
            parameters.srrelid === undefined
              ? sql("srrelid")
              : typed.pg_catalog_oid(parameters.srrelid)
          } AND srsubid = ${
            parameters.srsubid === undefined
              ? sql("srsubid")
              : typed.pg_catalog_oid(parameters.srsubid)
          } RETURNING srsubid,srrelid,srsubstate,srsublsn`;

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
      ): Promise<PgCatalog.PgLargeobject> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT loid,pageno,data FROM pg_catalog.pg_largeobject WHERE loid = ${
            parameters.loid === undefined
              ? sql("loid")
              : typed.pg_catalog_oid(parameters.loid)
          } AND pageno = ${
            parameters.pageno === undefined
              ? sql("pageno")
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
      ): Promise<PgCatalog.PgLargeobject> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM pg_catalog.pg_largeobject WHERE loid = ${
            parameters.loid === undefined
              ? sql("loid")
              : typed.pg_catalog_oid(parameters.loid)
          } AND pageno = ${
            parameters.pageno === undefined
              ? sql("pageno")
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

      async updateByLoidPageno(
        parameters: PgCatalog.Tables.PgLargeobject.ByLoidPageno,
        values: Partial<PgCatalog.PgLargeobject>,
      ): Promise<PgCatalog.PgLargeobject> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`UPDATE pg_catalog.pg_largeobject SET loid = ${
            values.loid === undefined
              ? sql("loid")
              : typed.pg_catalog_oid(values.loid)
          } , pageno = ${
            values.pageno === undefined
              ? sql("pageno")
              : typed.pg_catalog_int4(values.pageno)
          } , data = ${
            values.data === undefined
              ? sql("data")
              : typed.pg_catalog_bytea(values.data)
          } WHERE loid = ${
            parameters.loid === undefined
              ? sql("loid")
              : typed.pg_catalog_oid(parameters.loid)
          } AND pageno = ${
            parameters.pageno === undefined
              ? sql("pageno")
              : typed.pg_catalog_int4(parameters.pageno)
          } RETURNING loid,pageno,data`;

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

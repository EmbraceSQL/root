// ⚠️ generated - do not modify ⚠️

/**
 * BEGIN - shared types generated from schema.
 *
 * These types are node/browser isomorphic and are used by all other
 * EmbraceSQL generated code.
 */

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
} from "@embracesql/shared";

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

  export type Cid = string;

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

  export type Oidvector = Array<Oid>;

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

  export function includesPgAggregatePrimaryKey(
    value: Partial<PgAggregate>,
  ): value is PgAggregate {
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

  export function includesPgAmPrimaryKey(value: Partial<PgAm>): value is PgAm {
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

  export function includesPgAmopPrimaryKey(
    value: Partial<PgAmop>,
  ): value is PgAmop {
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

  export function includesPgAmprocPrimaryKey(
    value: Partial<PgAmproc>,
  ): value is PgAmproc {
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

  export function includesPgAttrdefPrimaryKey(
    value: Partial<PgAttrdef>,
  ): value is PgAttrdef {
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

  export function includesPgAttributePrimaryKey(
    value: Partial<PgAttribute>,
  ): value is PgAttribute {
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
  ): value is PgAuthMembers {
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

  export function includesPgAuthidPrimaryKey(
    value: Partial<PgAuthid>,
  ): value is PgAuthid {
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

  export type PgBrinBloomSummary = string;

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

  export function includesPgCastPrimaryKey(
    value: Partial<PgCast>,
  ): value is PgCast {
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

  export function includesPgClassPrimaryKey(
    value: Partial<PgClass>,
  ): value is PgClass {
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

  export function includesPgCollationPrimaryKey(
    value: Partial<PgCollation>,
  ): value is PgCollation {
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

  export function includesPgConstraintPrimaryKey(
    value: Partial<PgConstraint>,
  ): value is PgConstraint {
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

  export function includesPgConversionPrimaryKey(
    value: Partial<PgConversion>,
  ): value is PgConversion {
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

  export function includesPgDatabasePrimaryKey(
    value: Partial<PgDatabase>,
  ): value is PgDatabase {
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
  ): value is PgDbRoleSetting {
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

  export function includesPgDefaultAclPrimaryKey(
    value: Partial<PgDefaultAcl>,
  ): value is PgDefaultAcl {
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
  ): value is PgDescription {
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

  export function includesPgEnumPrimaryKey(
    value: Partial<PgEnum>,
  ): value is PgEnum {
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
  ): value is PgEventTrigger {
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

  export function includesPgExtensionPrimaryKey(
    value: Partial<PgExtension>,
  ): value is PgExtension {
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
  ): value is PgForeignDataWrapper {
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
  ): value is PgForeignServer {
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
  ): value is PgForeignTable {
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

  export function includesPgIndexPrimaryKey(
    value: Partial<PgIndex>,
  ): value is PgIndex {
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

  export function includesPgInheritsPrimaryKey(
    value: Partial<PgInherits>,
  ): value is PgInherits {
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

  export function includesPgInitPrivsPrimaryKey(
    value: Partial<PgInitPrivs>,
  ): value is PgInitPrivs {
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

  export function includesPgLanguagePrimaryKey(
    value: Partial<PgLanguage>,
  ): value is PgLanguage {
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
  ): value is PgLargeobject {
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
  ): value is PgLargeobjectMetadata {
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

  export type PgLsn = bigint;

  export interface PgMatviews {
    schemaname?: Nullable<Name>;
    matviewname?: Nullable<Name>;
    matviewowner?: Nullable<Name>;
    tablespace?: Nullable<Name>;
    hasindexes?: Nullable<Bool>;
    ispopulated?: Nullable<Bool>;
    definition?: Nullable<Text>;
  }

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

  export function includesPgNamespacePrimaryKey(
    value: Partial<PgNamespace>,
  ): value is PgNamespace {
    return value.oid !== undefined;
  }

  export type PgNdistinct = string;

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

  export function includesPgOpclassPrimaryKey(
    value: Partial<PgOpclass>,
  ): value is PgOpclass {
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

  export function includesPgOperatorPrimaryKey(
    value: Partial<PgOperator>,
  ): value is PgOperator {
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

  export function includesPgOpfamilyPrimaryKey(
    value: Partial<PgOpfamily>,
  ): value is PgOpfamily {
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
  ): value is PgParameterAcl {
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
  ): value is PgPartitionedTable {
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

  export function includesPgPolicyPrimaryKey(
    value: Partial<PgPolicy>,
  ): value is PgPolicy {
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

  export function includesPgProcPrimaryKey(
    value: Partial<PgProc>,
  ): value is PgProc {
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
  ): value is PgPublication {
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
  ): value is PgPublicationNamespace {
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
  ): value is PgPublicationRel {
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

  export function includesPgRangePrimaryKey(
    value: Partial<PgRange>,
  ): value is PgRange {
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
  ): value is PgReplicationOrigin {
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

  export function includesPgRewritePrimaryKey(
    value: Partial<PgRewrite>,
  ): value is PgRewrite {
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

  export function includesPgSeclabelPrimaryKey(
    value: Partial<PgSeclabel>,
  ): value is PgSeclabel {
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

  export function includesPgSequencePrimaryKey(
    value: Partial<PgSequence>,
  ): value is PgSequence {
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
  ): value is PgShdescription {
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

  export function includesPgShseclabelPrimaryKey(
    value: Partial<PgShseclabel>,
  ): value is PgShseclabel {
    return (
      value.objoid !== undefined &&
      value.classoid !== undefined &&
      value.provider !== undefined
    );
  }

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

  export function includesPgStatisticPrimaryKey(
    value: Partial<PgStatistic>,
  ): value is PgStatistic {
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
  ): value is PgStatisticExt {
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
  ): value is PgStatisticExtData {
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
  ): value is PgSubscription {
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
  ): value is PgSubscriptionRel {
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

  export function includesPgTablespacePrimaryKey(
    value: Partial<PgTablespace>,
  ): value is PgTablespace {
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

  export function includesPgTransformPrimaryKey(
    value: Partial<PgTransform>,
  ): value is PgTransform {
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

  export function includesPgTriggerPrimaryKey(
    value: Partial<PgTrigger>,
  ): value is PgTrigger {
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

  export function includesPgTsConfigPrimaryKey(
    value: Partial<PgTsConfig>,
  ): value is PgTsConfig {
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
  ): value is PgTsConfigMap {
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

  export function includesPgTsDictPrimaryKey(
    value: Partial<PgTsDict>,
  ): value is PgTsDict {
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

  export function includesPgTsParserPrimaryKey(
    value: Partial<PgTsParser>,
  ): value is PgTsParser {
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

  export function includesPgTsTemplatePrimaryKey(
    value: Partial<PgTsTemplate>,
  ): value is PgTsTemplate {
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

  export function includesPgTypePrimaryKey(
    value: Partial<PgType>,
  ): value is PgType {
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
  ): value is PgUserMapping {
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

  export type Polygon = string;

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

  export type Tsvector = string;

  export type TxidSnapshot = string;

  export type Unknown = void;

  export type Uuid = UUID;

  export type Varbit = boolean;

  export type Varchar = string;

  export type Void = void;

  export type Xid = string;

  export type Xid8 = string;

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

export namespace Public {
  export type CubeArray = Array<Cube>;

  export type SlugArray = Array<Slug>;

  export type Cube = Float32Array;

  export interface Slug {
    slugId?: PgCatalog.Int4;
  }

  export interface SlugNotPrimaryKey {}

  export function includesSlugPrimaryKey(value: Partial<Slug>): value is Slug {
    return value.slugId !== undefined;
  }

  export interface CubeInArguments {
    _0: Nullable<PgCatalog.Cstring>;
  }

  export type CubeInSingleResultsetRecord = Cube;

  export type CubeInResultset = CubeInSingleResultsetRecord[];

  export interface Cube9c45Arguments {
    _0: Nullable<PgCatalog.Float8Array>;
    _1: Nullable<PgCatalog.Float8Array>;
  }

  export type Cube9c45SingleResultsetRecord = Cube;

  export type Cube9c45Resultset = Cube9c45SingleResultsetRecord[];

  export interface Cube2e6dArguments {
    _0: Nullable<PgCatalog.Float8Array>;
  }

  export type Cube2e6dSingleResultsetRecord = Cube;

  export type Cube2e6dResultset = Cube2e6dSingleResultsetRecord[];

  export interface CubeOutArguments {
    _0: Nullable<Cube>;
  }

  export type CubeOutSingleResultsetRecord = PgCatalog.Cstring;

  export type CubeOutResultset = CubeOutSingleResultsetRecord[];

  export interface CubeEqArguments {
    _0: Nullable<Cube>;
    _1: Nullable<Cube>;
  }

  export type CubeEqSingleResultsetRecord = PgCatalog.Bool;

  export type CubeEqResultset = CubeEqSingleResultsetRecord[];

  export interface CubeNeArguments {
    _0: Nullable<Cube>;
    _1: Nullable<Cube>;
  }

  export type CubeNeSingleResultsetRecord = PgCatalog.Bool;

  export type CubeNeResultset = CubeNeSingleResultsetRecord[];

  export interface CubeLtArguments {
    _0: Nullable<Cube>;
    _1: Nullable<Cube>;
  }

  export type CubeLtSingleResultsetRecord = PgCatalog.Bool;

  export type CubeLtResultset = CubeLtSingleResultsetRecord[];

  export interface CubeGtArguments {
    _0: Nullable<Cube>;
    _1: Nullable<Cube>;
  }

  export type CubeGtSingleResultsetRecord = PgCatalog.Bool;

  export type CubeGtResultset = CubeGtSingleResultsetRecord[];

  export interface CubeLeArguments {
    _0: Nullable<Cube>;
    _1: Nullable<Cube>;
  }

  export type CubeLeSingleResultsetRecord = PgCatalog.Bool;

  export type CubeLeResultset = CubeLeSingleResultsetRecord[];

  export interface CubeGeArguments {
    _0: Nullable<Cube>;
    _1: Nullable<Cube>;
  }

  export type CubeGeSingleResultsetRecord = PgCatalog.Bool;

  export type CubeGeResultset = CubeGeSingleResultsetRecord[];

  export interface CubeCmpArguments {
    _0: Nullable<Cube>;
    _1: Nullable<Cube>;
  }

  export type CubeCmpSingleResultsetRecord = PgCatalog.Int4;

  export type CubeCmpResultset = CubeCmpSingleResultsetRecord[];

  export interface CubeContainsArguments {
    _0: Nullable<Cube>;
    _1: Nullable<Cube>;
  }

  export type CubeContainsSingleResultsetRecord = PgCatalog.Bool;

  export type CubeContainsResultset = CubeContainsSingleResultsetRecord[];

  export interface CubeContainedArguments {
    _0: Nullable<Cube>;
    _1: Nullable<Cube>;
  }

  export type CubeContainedSingleResultsetRecord = PgCatalog.Bool;

  export type CubeContainedResultset = CubeContainedSingleResultsetRecord[];

  export interface CubeOverlapArguments {
    _0: Nullable<Cube>;
    _1: Nullable<Cube>;
  }

  export type CubeOverlapSingleResultsetRecord = PgCatalog.Bool;

  export type CubeOverlapResultset = CubeOverlapSingleResultsetRecord[];

  export interface CubeUnionArguments {
    _0: Nullable<Cube>;
    _1: Nullable<Cube>;
  }

  export type CubeUnionSingleResultsetRecord = Cube;

  export type CubeUnionResultset = CubeUnionSingleResultsetRecord[];

  export interface CubeInterArguments {
    _0: Nullable<Cube>;
    _1: Nullable<Cube>;
  }

  export type CubeInterSingleResultsetRecord = Cube;

  export type CubeInterResultset = CubeInterSingleResultsetRecord[];

  export interface CubeSizeArguments {
    _0: Nullable<Cube>;
  }

  export type CubeSizeSingleResultsetRecord = PgCatalog.Float8;

  export type CubeSizeResultset = CubeSizeSingleResultsetRecord[];

  export interface CubeSubsetArguments {
    _0: Nullable<Cube>;
    _1: Nullable<PgCatalog.Int4Array>;
  }

  export type CubeSubsetSingleResultsetRecord = Cube;

  export type CubeSubsetResultset = CubeSubsetSingleResultsetRecord[];

  export interface CubeDistanceArguments {
    _0: Nullable<Cube>;
    _1: Nullable<Cube>;
  }

  export type CubeDistanceSingleResultsetRecord = PgCatalog.Float8;

  export type CubeDistanceResultset = CubeDistanceSingleResultsetRecord[];

  export interface DistanceChebyshevArguments {
    _0: Nullable<Cube>;
    _1: Nullable<Cube>;
  }

  export type DistanceChebyshevSingleResultsetRecord = PgCatalog.Float8;

  export type DistanceChebyshevResultset =
    DistanceChebyshevSingleResultsetRecord[];

  export interface DistanceTaxicabArguments {
    _0: Nullable<Cube>;
    _1: Nullable<Cube>;
  }

  export type DistanceTaxicabSingleResultsetRecord = PgCatalog.Float8;

  export type DistanceTaxicabResultset = DistanceTaxicabSingleResultsetRecord[];

  export interface CubeDimArguments {
    _0: Nullable<Cube>;
  }

  export type CubeDimSingleResultsetRecord = PgCatalog.Int4;

  export type CubeDimResultset = CubeDimSingleResultsetRecord[];

  export interface CubeLlCoordArguments {
    _0: Nullable<Cube>;
    _1: Nullable<PgCatalog.Int4>;
  }

  export type CubeLlCoordSingleResultsetRecord = PgCatalog.Float8;

  export type CubeLlCoordResultset = CubeLlCoordSingleResultsetRecord[];

  export interface CubeUrCoordArguments {
    _0: Nullable<Cube>;
    _1: Nullable<PgCatalog.Int4>;
  }

  export type CubeUrCoordSingleResultsetRecord = PgCatalog.Float8;

  export type CubeUrCoordResultset = CubeUrCoordSingleResultsetRecord[];

  export interface CubeCoordArguments {
    _0: Nullable<Cube>;
    _1: Nullable<PgCatalog.Int4>;
  }

  export type CubeCoordSingleResultsetRecord = PgCatalog.Float8;

  export type CubeCoordResultset = CubeCoordSingleResultsetRecord[];

  export interface CubeCoordLlurArguments {
    _0: Nullable<Cube>;
    _1: Nullable<PgCatalog.Int4>;
  }

  export type CubeCoordLlurSingleResultsetRecord = PgCatalog.Float8;

  export type CubeCoordLlurResultset = CubeCoordLlurSingleResultsetRecord[];

  export interface Cubea5b3Arguments {
    _0: Nullable<PgCatalog.Float8>;
  }

  export type Cubea5b3SingleResultsetRecord = Cube;

  export type Cubea5b3Resultset = Cubea5b3SingleResultsetRecord[];

  export interface Cube0aecArguments {
    _0: Nullable<PgCatalog.Float8>;
    _1: Nullable<PgCatalog.Float8>;
  }

  export type Cube0aecSingleResultsetRecord = Cube;

  export type Cube0aecResultset = Cube0aecSingleResultsetRecord[];

  export interface Cube39d2Arguments {
    _0: Nullable<Cube>;
    _1: Nullable<PgCatalog.Float8>;
  }

  export type Cube39d2SingleResultsetRecord = Cube;

  export type Cube39d2Resultset = Cube39d2SingleResultsetRecord[];

  export interface Cubea7ebArguments {
    _0: Nullable<Cube>;
    _1: Nullable<PgCatalog.Float8>;
    _2?: Nullable<PgCatalog.Float8>;
  }

  export type Cubea7ebSingleResultsetRecord = Cube;

  export type Cubea7ebResultset = Cubea7ebSingleResultsetRecord[];

  export interface CubeIsPointArguments {
    _0: Nullable<Cube>;
  }

  export type CubeIsPointSingleResultsetRecord = PgCatalog.Bool;

  export type CubeIsPointResultset = CubeIsPointSingleResultsetRecord[];

  export interface CubeEnlargeArguments {
    _0: Nullable<Cube>;
    _1: Nullable<PgCatalog.Float8>;
    _2?: Nullable<PgCatalog.Int4>;
  }

  export type CubeEnlargeSingleResultsetRecord = Cube;

  export type CubeEnlargeResultset = CubeEnlargeSingleResultsetRecord[];

  export interface GCubeConsistentArguments {
    _0: Nullable<PgCatalog.Internal>;
    _1: Nullable<Cube>;
    _2?: Nullable<PgCatalog.Int2>;
    _3?: Nullable<PgCatalog.Oid>;
    _4?: Nullable<PgCatalog.Internal>;
  }

  export type GCubeConsistentSingleResultsetRecord = PgCatalog.Bool;

  export type GCubeConsistentResultset = GCubeConsistentSingleResultsetRecord[];

  export interface GCubePenaltyArguments {
    _0: Nullable<PgCatalog.Internal>;
    _1: Nullable<PgCatalog.Internal>;
    _2?: Nullable<PgCatalog.Internal>;
  }

  export type GCubePenaltySingleResultsetRecord = PgCatalog.Internal;

  export type GCubePenaltyResultset = GCubePenaltySingleResultsetRecord[];

  export interface GCubePicksplitArguments {
    _0: Nullable<PgCatalog.Internal>;
    _1: Nullable<PgCatalog.Internal>;
  }

  export type GCubePicksplitSingleResultsetRecord = PgCatalog.Internal;

  export type GCubePicksplitResultset = GCubePicksplitSingleResultsetRecord[];

  export interface GCubeUnionArguments {
    _0: Nullable<PgCatalog.Internal>;
    _1: Nullable<PgCatalog.Internal>;
  }

  export type GCubeUnionSingleResultsetRecord = Cube;

  export type GCubeUnionResultset = GCubeUnionSingleResultsetRecord[];

  export interface GCubeSameArguments {
    _0: Nullable<Cube>;
    _1: Nullable<Cube>;
    _2?: Nullable<PgCatalog.Internal>;
  }

  export type GCubeSameSingleResultsetRecord = PgCatalog.Internal;

  export type GCubeSameResultset = GCubeSameSingleResultsetRecord[];

  export interface GCubeDistanceArguments {
    _0: Nullable<PgCatalog.Internal>;
    _1: Nullable<Cube>;
    _2?: Nullable<PgCatalog.Int2>;
    _3?: Nullable<PgCatalog.Oid>;
    _4?: Nullable<PgCatalog.Internal>;
  }

  export type GCubeDistanceSingleResultsetRecord = PgCatalog.Float8;

  export type GCubeDistanceResultset = GCubeDistanceSingleResultsetRecord[];

  export interface CubeRecvArguments {
    _0: Nullable<PgCatalog.Internal>;
  }

  export type CubeRecvSingleResultsetRecord = Cube;

  export type CubeRecvResultset = CubeRecvSingleResultsetRecord[];

  export interface CubeSendArguments {
    _0: Nullable<Cube>;
  }

  export type CubeSendSingleResultsetRecord = PgCatalog.Bytea;

  export type CubeSendResultset = CubeSendSingleResultsetRecord[];

  export namespace Tables {
    export namespace Slug {
      export interface BySlugId {
        slugId: Nullable<PgCatalog.Int4>;
      }
    }
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
  public__cube: Typecast;
  public__slug: Typecast;
  public_cube: Typecast;
  public_slug: Typecast;
  api__echo_type: Typecast;
  api__echo_type_nested: Typecast;
  api_echo_type: Typecast;
  api_echo_type_nested: Typecast;
}

// begin string parsers
export namespace PgCatalog {
  export namespace Types {
    export namespace AclitemArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Aclitem.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace BitArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Bit.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace BoolArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Bool.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace BoxArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Box.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace BpcharArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Bpchar.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ByteaArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Bytea.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CharArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Char.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CidArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Cid.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CidrArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Cidr.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CircleArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Circle.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CstringArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Cstring.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace DateArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Date.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace DatemultirangeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Datemultirange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace DaterangeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Daterange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Float4Array {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Float4.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Float8Array {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Float8.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace GtsvectorArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Gtsvector.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace InetArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Inet.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Int2Array {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Int2.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Int2vectorArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Int2vector.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Int4Array {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Int4.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Int4multirangeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Int4multirange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Int4rangeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Int4range.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Int8Array {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Int8.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Int8multirangeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Int8multirange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Int8rangeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Int8range.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace IntervalArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Interval.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace JsonArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Json.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace JsonbArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Jsonb.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace JsonpathArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Jsonpath.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace LineArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Line.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace LsegArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Lseg.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace MacaddrArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Macaddr.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Macaddr8Array {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Macaddr8.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace MoneyArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Money.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace NameArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Name.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace NumericArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Numeric.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace NummultirangeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Nummultirange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace NumrangeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Numrange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace OidArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Oid.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace OidvectorArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Oidvector.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PathArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Path.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAggregateArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgAggregate.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAmArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgAm.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAmopArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgAmop.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAmprocArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgAmproc.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAttrdefArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgAttrdef.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAttributeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgAttribute.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAuthMembersArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgAuthMembers.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAuthidArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgAuthid.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAvailableExtensionVersionsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgAvailableExtensionVersions.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAvailableExtensionsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgAvailableExtensions.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgBackendMemoryContextsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgBackendMemoryContexts.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgCastArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgCast.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgClassArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgClass.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgCollationArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgCollation.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgConfigArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgConfig.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgConstraintArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgConstraint.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgConversionArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgConversion.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgCursorsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgCursors.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgDatabaseArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgDatabase.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgDbRoleSettingArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgDbRoleSetting.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgDefaultAclArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgDefaultAcl.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgDependArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgDepend.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgDescriptionArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgDescription.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgEnumArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgEnum.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgEventTriggerArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgEventTrigger.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgExtensionArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgExtension.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgFileSettingsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgFileSettings.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgForeignDataWrapperArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgForeignDataWrapper.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgForeignServerArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgForeignServer.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgForeignTableArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgForeignTable.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgGroupArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgGroup.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgHbaFileRulesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgHbaFileRules.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgIdentFileMappingsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgIdentFileMappings.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgIndexArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgIndex.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgIndexesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgIndexes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgInheritsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgInherits.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgInitPrivsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgInitPrivs.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgLanguageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgLanguage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgLargeobjectArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgLargeobject.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgLargeobjectMetadataArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgLargeobjectMetadata.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgLocksArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgLocks.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgLsnArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgLsn.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgMatviewsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgMatviews.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgNamespaceArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgNamespace.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgOpclassArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgOpclass.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgOperatorArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgOperator.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgOpfamilyArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgOpfamily.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgParameterAclArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgParameterAcl.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgPartitionedTableArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgPartitionedTable.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgPoliciesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgPolicies.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgPolicyArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgPolicy.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgPreparedStatementsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgPreparedStatements.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgPreparedXactsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgPreparedXacts.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgProcArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgProc.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgPublicationArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgPublication.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgPublicationNamespaceArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgPublicationNamespace.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgPublicationRelArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgPublicationRel.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgPublicationTablesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgPublicationTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgRangeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgRange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgReplicationOriginArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgReplicationOrigin.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgReplicationOriginStatusArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgReplicationOriginStatus.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgReplicationSlotsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgReplicationSlots.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgRewriteArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgRewrite.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgRolesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgRoles.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgRulesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgRules.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgSeclabelArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgSeclabel.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgSeclabelsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgSeclabels.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgSequenceArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgSequence.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgSequencesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgSequences.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgSettingsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgSettings.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgShadowArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgShadow.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgShdependArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgShdepend.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgShdescriptionArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgShdescription.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgShmemAllocationsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgShmemAllocations.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgShseclabelArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgShseclabel.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgSnapshotArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgSnapshot.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatActivityArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatActivity.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatAllIndexesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatAllIndexes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatAllTablesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatAllTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatArchiverArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatArchiver.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatBgwriterArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatBgwriter.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatDatabaseArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatDatabase.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatDatabaseConflictsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatDatabaseConflicts.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatGssapiArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatGssapi.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatIoArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatIo.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatProgressAnalyzeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatProgressAnalyze.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatProgressBasebackupArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatProgressBasebackup.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatProgressClusterArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatProgressCluster.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatProgressCopyArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatProgressCopy.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatProgressCreateIndexArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatProgressCreateIndex.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatProgressVacuumArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatProgressVacuum.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatRecoveryPrefetchArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatRecoveryPrefetch.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatReplicationArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatReplication.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatReplicationSlotsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatReplicationSlots.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatSlruArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatSlru.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatSslArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatSsl.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatSubscriptionArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatSubscription.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatSubscriptionStatsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatSubscriptionStats.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatSysIndexesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatSysIndexes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatSysTablesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatSysTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatUserFunctionsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatUserFunctions.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatUserIndexesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatUserIndexes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatUserTablesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatUserTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatWalArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatWal.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatWalReceiverArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatWalReceiver.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatXactAllTablesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatXactAllTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatXactSysTablesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatXactSysTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatXactUserFunctionsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatXactUserFunctions.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatXactUserTablesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatXactUserTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatioAllIndexesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatioAllIndexes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatioAllSequencesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatioAllSequences.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatioAllTablesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatioAllTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatioSysIndexesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatioSysIndexes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatioSysSequencesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatioSysSequences.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatioSysTablesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatioSysTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatioUserIndexesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatioUserIndexes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatioUserSequencesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatioUserSequences.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatioUserTablesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatioUserTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatisticArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatistic.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatisticExtArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatisticExt.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatisticExtDataArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatisticExtData.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStats.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatsExtArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatsExt.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatsExtExprsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgStatsExtExprs.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgSubscriptionArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgSubscription.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgSubscriptionRelArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgSubscriptionRel.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTablesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTablespaceArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgTablespace.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTimezoneAbbrevsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgTimezoneAbbrevs.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTimezoneNamesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgTimezoneNames.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTransformArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgTransform.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTriggerArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgTrigger.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTsConfigArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgTsConfig.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTsConfigMapArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgTsConfigMap.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTsDictArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgTsDict.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTsParserArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgTsParser.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTsTemplateArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgTsTemplate.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTypeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgType.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgUserArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgUser.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgUserMappingArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgUserMapping.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgUserMappingsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgUserMappings.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgViewsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.PgViews.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PointArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Point.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PolygonArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Polygon.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RecordArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Record.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RefcursorArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Refcursor.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegclassArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Regclass.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegcollationArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Regcollation.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegconfigArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Regconfig.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegdictionaryArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Regdictionary.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegnamespaceArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Regnamespace.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegoperArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Regoper.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegoperatorArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Regoperator.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegprocArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Regproc.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegprocedureArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Regprocedure.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegroleArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Regrole.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegtypeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Regtype.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TextArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Text.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TidArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Tid.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TimeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Time.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TimestampArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Timestamp.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TimestamptzArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Timestamptz.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TimetzArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Timetz.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TsmultirangeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Tsmultirange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TsqueryArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Tsquery.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TsrangeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Tsrange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TstzmultirangeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Tstzmultirange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TstzrangeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Tstzrange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TsvectorArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Tsvector.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TxidSnapshotArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.TxidSnapshot.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace UuidArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Uuid.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace VarbitArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Varbit.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace VarcharArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Varchar.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace XidArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Xid.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Xid8Array {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Xid8.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace XmlArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Xml.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Aclitem {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Any {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Anyarray {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Anycompatible {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Anycompatiblearray {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Anycompatiblemultirange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Anycompatiblenonarray {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Anycompatiblerange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Anyelement {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Anyenum {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Anymultirange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Anynonarray {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Anyrange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Bit {
      export function parse(from: string | null) {
        if (from === null) return null;
        if (["t", "T", "true", "True"].includes(from)) return true;
        try {
          if (Number.parseFloat(from) > 0) return true;
        } catch (e) {
          // eat
        }
        return false;
      }
    }
    export namespace Bool {
      export function parse(from: string | null) {
        if (from === null) return null;
        if (["t", "T", "true", "True"].includes(from)) return true;
        try {
          if (Number.parseFloat(from) > 0) return true;
        } catch (e) {
          // eat
        }
        return false;
      }
    }
    export namespace Box {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Bpchar {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Bytea {
      export function parse(from: string | null) {
        return from ? new Uint8Array(JSON.parse(from)) : null;
      }
    }
    export namespace Char {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Cid {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Cidr {
      export function parse(from: string | null) {
        return from ? new Uint8Array(JSON.parse(from)) : null;
      }
    }
    export namespace Circle {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Cstring {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Date {
      export function parse(from: string | null) {
        if (from === null) return null;
        if ((from as unknown) instanceof global.Date) return from;
        return new global.Date(from);
      }
    }
    export namespace Datemultirange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Daterange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace EventTrigger {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace FdwHandler {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Float4 {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Float8 {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Gtsvector {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace IndexAmHandler {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Inet {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Int2 {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Int2vector {
      export function parse(from: string | null) {
        if (from === null) return null;
        const source = Array.isArray(from)
          ? new Uint16Array(from)
          : JSON.parse(from);
        return new Uint16Array(source);
      }
    }
    export namespace Int4 {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Int4multirange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Int4range {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Int8 {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Int8multirange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Int8range {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Internal {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Interval {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Json {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Jsonb {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Jsonpath {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace LanguageHandler {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Line {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Lseg {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Macaddr {
      export function parse(from: string | null) {
        return from ? new Uint8Array(JSON.parse(from)) : null;
      }
    }
    export namespace Macaddr8 {
      export function parse(from: string | null) {
        return from ? new Uint8Array(JSON.parse(from)) : null;
      }
    }
    export namespace Money {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Name {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Numeric {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Nummultirange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Numrange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Oid {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Oidvector {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCatalog.Types.Oid.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Path {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgAggregate {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgAm {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgAmop {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgAmproc {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgAttrdef {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgAttribute {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgAuthMembers {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgAuthid {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgAvailableExtensionVersions {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgAvailableExtensions {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgBackendMemoryContexts {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgBrinBloomSummary {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgBrinMinmaxMultiSummary {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgCast {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgClass {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgCollation {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgConfig {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgConstraint {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgConversion {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgCursors {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgDatabase {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgDbRoleSetting {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgDdlCommand {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgDefaultAcl {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgDepend {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgDependencies {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgDescription {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgEnum {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgEventTrigger {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgExtension {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgFileSettings {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgForeignDataWrapper {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgForeignServer {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgForeignTable {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgGroup {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgHbaFileRules {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgIdentFileMappings {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgIndex {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgIndexes {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgInherits {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgInitPrivs {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgLanguage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgLargeobject {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgLargeobjectMetadata {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgLocks {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgLsn {
      export function parse(from: string | null) {
        if (from === null) return null;
        if (from === "") return null;
        return BigInt(from);
      }
    }
    export namespace PgMatviews {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgMcvList {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgNamespace {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgNdistinct {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgNodeTree {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgOpclass {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgOperator {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgOpfamily {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgParameterAcl {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgPartitionedTable {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgPolicies {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgPolicy {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgPreparedStatements {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgPreparedXacts {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgProc {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgPublication {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgPublicationNamespace {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgPublicationRel {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgPublicationTables {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgRange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgReplicationOrigin {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgReplicationOriginStatus {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgReplicationSlots {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgRewrite {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgRoles {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgRules {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgSeclabel {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgSeclabels {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgSequence {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgSequences {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgSettings {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgShadow {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgShdepend {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgShdescription {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgShmemAllocations {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgShseclabel {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgSnapshot {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatActivity {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatAllIndexes {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatAllTables {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatArchiver {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatBgwriter {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatDatabase {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatDatabaseConflicts {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatGssapi {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatIo {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatProgressAnalyze {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatProgressBasebackup {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatProgressCluster {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatProgressCopy {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatProgressCreateIndex {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatProgressVacuum {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatRecoveryPrefetch {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatReplication {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatReplicationSlots {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatSlru {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatSsl {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatSubscription {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatSubscriptionStats {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatSysIndexes {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatSysTables {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatUserFunctions {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatUserIndexes {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatUserTables {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatWal {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatWalReceiver {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatXactAllTables {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatXactSysTables {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatXactUserFunctions {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatXactUserTables {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatioAllIndexes {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatioAllSequences {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatioAllTables {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatioSysIndexes {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatioSysSequences {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatioSysTables {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatioUserIndexes {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatioUserSequences {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatioUserTables {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatistic {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatisticExt {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatisticExtData {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStats {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatsExt {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatsExtExprs {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgSubscription {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgSubscriptionRel {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgTables {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgTablespace {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgTimezoneAbbrevs {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgTimezoneNames {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgTransform {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgTrigger {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgTsConfig {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgTsConfigMap {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgTsDict {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgTsParser {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgTsTemplate {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgType {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgUser {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgUserMapping {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgUserMappings {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgViews {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Point {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Polygon {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Record {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Refcursor {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Regclass {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regcollation {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regconfig {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regdictionary {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regnamespace {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regoper {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regoperator {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regproc {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regprocedure {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regrole {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regtype {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace TableAmHandler {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Text {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Tid {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Time {
      export function parse(from: string | null) {
        if (from === null) return null;
        if ((from as unknown) instanceof global.Date) return from;
        return new global.Date(from);
      }
    }
    export namespace Timestamp {
      export function parse(from: string | null) {
        if (from === null) return null;
        if ((from as unknown) instanceof global.Date) return from;
        return new global.Date(from);
      }
    }
    export namespace Timestamptz {
      export function parse(from: string | null) {
        if (from === null) return null;
        if ((from as unknown) instanceof global.Date) return from;
        return new global.Date(from);
      }
    }
    export namespace Timetz {
      export function parse(from: string | null) {
        if (from === null) return null;
        if ((from as unknown) instanceof global.Date) return from;
        return new global.Date(from);
      }
    }
    export namespace Trigger {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace TsmHandler {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Tsmultirange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Tsquery {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Tsrange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Tstzmultirange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Tstzrange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Tsvector {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace TxidSnapshot {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Unknown {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Uuid {
      export function parse(from: string | null) {
        return from ? new UUID(from) : null;
      }
    }
    export namespace Varbit {
      export function parse(from: string | null) {
        if (from === null) return null;
        if (["t", "T", "true", "True"].includes(from)) return true;
        try {
          if (Number.parseFloat(from) > 0) return true;
        } catch (e) {
          // eat
        }
        return false;
      }
    }
    export namespace Varchar {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Void {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Xid {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Xid8 {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Xml {
      export function parse(from: string | null) {
        return from;
      }
    }
  }
}
export namespace InformationSchema {
  export namespace Types {
    export namespace AdministrableRoleAuthorizationsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.AdministrableRoleAuthorizations.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ApplicableRolesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.ApplicableRoles.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace AttributesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.Attributes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CardinalNumberArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.CardinalNumber.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CharacterDataArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.CharacterData.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CharacterSetsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.CharacterSets.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CheckConstraintRoutineUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.CheckConstraintRoutineUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CheckConstraintsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.CheckConstraints.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CollationCharacterSetApplicabilityArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.CollationCharacterSetApplicability.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CollationsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.Collations.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ColumnColumnUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.ColumnColumnUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ColumnDomainUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.ColumnDomainUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ColumnOptionsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.ColumnOptions.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ColumnPrivilegesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.ColumnPrivileges.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ColumnUdtUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.ColumnUdtUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ColumnsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.Columns.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ConstraintColumnUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.ConstraintColumnUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ConstraintTableUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.ConstraintTableUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace DataTypePrivilegesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.DataTypePrivileges.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace DomainConstraintsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.DomainConstraints.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace DomainUdtUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.DomainUdtUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace DomainsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.Domains.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ElementTypesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.ElementTypes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace EnabledRolesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.EnabledRoles.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ForeignDataWrapperOptionsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.ForeignDataWrapperOptions.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ForeignDataWrappersArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.ForeignDataWrappers.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ForeignServerOptionsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.ForeignServerOptions.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ForeignServersArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.ForeignServers.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ForeignTableOptionsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.ForeignTableOptions.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ForeignTablesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.ForeignTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace InformationSchemaCatalogNameArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.InformationSchemaCatalogName.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace KeyColumnUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.KeyColumnUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ParametersArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.Parameters.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgForeignDataWrappers {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgForeignServers {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgForeignTableColumns {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgForeignTables {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgUserMappings {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ReferentialConstraintsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.ReferentialConstraints.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoleColumnGrantsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.RoleColumnGrants.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoleRoutineGrantsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.RoleRoutineGrants.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoleTableGrantsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.RoleTableGrants.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoleUdtGrantsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.RoleUdtGrants.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoleUsageGrantsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.RoleUsageGrants.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoutineColumnUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.RoutineColumnUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoutinePrivilegesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.RoutinePrivileges.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoutineRoutineUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.RoutineRoutineUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoutineSequenceUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.RoutineSequenceUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoutineTableUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.RoutineTableUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoutinesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.Routines.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace SchemataArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.Schemata.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace SequencesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.Sequences.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace SqlFeaturesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.SqlFeatures.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace SqlIdentifierArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.SqlIdentifier.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace SqlImplementationInfoArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.SqlImplementationInfo.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace SqlPartsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.SqlParts.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace SqlSizingArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.SqlSizing.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TableConstraintsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.TableConstraints.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TablePrivilegesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.TablePrivileges.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TablesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.Tables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TimeStampArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.TimeStamp.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TransformsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.Transforms.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TriggeredUpdateColumnsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.TriggeredUpdateColumns.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TriggersArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.Triggers.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace UdtPrivilegesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.UdtPrivileges.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace UsagePrivilegesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.UsagePrivileges.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace UserDefinedTypesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.UserDefinedTypes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace UserMappingOptionsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.UserMappingOptions.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace UserMappingsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.UserMappings.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ViewColumnUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.ViewColumnUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ViewRoutineUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.ViewRoutineUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ViewTableUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.ViewTableUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ViewsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.Views.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace YesOrNoArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchema.Types.YesOrNo.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace AdministrableRoleAuthorizations {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ApplicableRoles {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Attributes {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace CardinalNumber {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace CharacterData {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace CharacterSets {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace CheckConstraintRoutineUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace CheckConstraints {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace CollationCharacterSetApplicability {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Collations {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ColumnColumnUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ColumnDomainUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ColumnOptions {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ColumnPrivileges {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ColumnUdtUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Columns {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ConstraintColumnUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ConstraintTableUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace DataTypePrivileges {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace DomainConstraints {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace DomainUdtUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Domains {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ElementTypes {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace EnabledRoles {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ForeignDataWrapperOptions {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ForeignDataWrappers {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ForeignServerOptions {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ForeignServers {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ForeignTableOptions {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ForeignTables {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace InformationSchemaCatalogName {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace KeyColumnUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Parameters {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ReferentialConstraints {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace RoleColumnGrants {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace RoleRoutineGrants {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace RoleTableGrants {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace RoleUdtGrants {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace RoleUsageGrants {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace RoutineColumnUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace RoutinePrivileges {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace RoutineRoutineUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace RoutineSequenceUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace RoutineTableUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Routines {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Schemata {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Sequences {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace SqlFeatures {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace SqlIdentifier {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace SqlImplementationInfo {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace SqlParts {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace SqlSizing {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace TableConstraints {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace TablePrivileges {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Tables {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace TimeStamp {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Transforms {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace TriggeredUpdateColumns {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Triggers {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace UdtPrivileges {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace UsagePrivileges {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace UserDefinedTypes {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace UserMappingOptions {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace UserMappings {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ViewColumnUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ViewRoutineUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ViewTableUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Views {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace YesOrNo {
      export function parse(from: string | null) {
        return from;
      }
    }
  }
}
export namespace Public {
  export namespace Types {
    export namespace CubeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Public.Types.Cube.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace SlugArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Public.Types.Slug.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Cube {
      export function parse(from: string | null) {
        if (from === null) return null;
        const source = Array.isArray(from)
          ? new Float32Array(from)
          : JSON.parse(from);
        return new Float32Array(source);
      }
    }
    export namespace Slug {
      export function parse(from: string | null) {
        return from;
      }
    }
  }
}
export namespace Api {
  export namespace Types {
    export namespace EchoTypeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Api.Types.EchoType.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace EchoTypeNestedArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Api.Types.EchoTypeNested.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace EchoType {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace EchoTypeNested {
      export function parse(from: string | null) {
        return from;
      }
    }
  }
}
// end string parsers

// begin primary key pickers
export namespace Public {
  export namespace Slug {
    export function primaryKeyFrom(value: Slug): string {
      return JSON.stringify({
        slugId: value.slugId,
      });
    }
  }
}
export namespace Api {}
// end primary key pickers

// BEGIN - Node side database connectivity layer
import { Context, initializeContext } from "@embracesql/postgres";
import postgres from "postgres";

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

  public Public = new (class implements HasDatabase {
    constructor(public database: Database) {}

    async CubeIn(parameters: Public.CubeInArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube_in( ${typed.pg_catalog_cstring(
                    undefinedIsNull(parameters._0),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube_in as unknown as Public.CubeInSingleResultsetRecord;
      return responseBody;
    }
    async Cube9c45(parameters: Public.Cube9c45Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube( ${typed.pg_catalog__float8(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.pg_catalog__float8(
                    undefinedIsNull(parameters._1),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube as unknown as Public.Cube9c45SingleResultsetRecord;
      return responseBody;
    }
    async Cube2e6d(parameters: Public.Cube2e6dArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube( ${typed.pg_catalog__float8(
                    undefinedIsNull(parameters._0),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube as unknown as Public.Cube2e6dSingleResultsetRecord;
      return responseBody;
    }
    async CubeOut(parameters: Public.CubeOutArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube_out( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube_out as unknown as Public.CubeOutSingleResultsetRecord;
      return responseBody;
    }
    async CubeEq(parameters: Public.CubeEqArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube_eq( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.public_cube(undefinedIsNull(parameters._1))});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube_eq as unknown as Public.CubeEqSingleResultsetRecord;
      return responseBody;
    }
    async CubeNe(parameters: Public.CubeNeArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube_ne( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.public_cube(undefinedIsNull(parameters._1))});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube_ne as unknown as Public.CubeNeSingleResultsetRecord;
      return responseBody;
    }
    async CubeLt(parameters: Public.CubeLtArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube_lt( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.public_cube(undefinedIsNull(parameters._1))});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube_lt as unknown as Public.CubeLtSingleResultsetRecord;
      return responseBody;
    }
    async CubeGt(parameters: Public.CubeGtArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube_gt( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.public_cube(undefinedIsNull(parameters._1))});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube_gt as unknown as Public.CubeGtSingleResultsetRecord;
      return responseBody;
    }
    async CubeLe(parameters: Public.CubeLeArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube_le( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.public_cube(undefinedIsNull(parameters._1))});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube_le as unknown as Public.CubeLeSingleResultsetRecord;
      return responseBody;
    }
    async CubeGe(parameters: Public.CubeGeArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube_ge( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.public_cube(undefinedIsNull(parameters._1))});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube_ge as unknown as Public.CubeGeSingleResultsetRecord;
      return responseBody;
    }
    async CubeCmp(parameters: Public.CubeCmpArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube_cmp( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.public_cube(undefinedIsNull(parameters._1))});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube_cmp as unknown as Public.CubeCmpSingleResultsetRecord;
      return responseBody;
    }
    async CubeContains(parameters: Public.CubeContainsArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube_contains( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.public_cube(undefinedIsNull(parameters._1))});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube_contains as unknown as Public.CubeContainsSingleResultsetRecord;
      return responseBody;
    }
    async CubeContained(parameters: Public.CubeContainedArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube_contained( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.public_cube(undefinedIsNull(parameters._1))});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube_contained as unknown as Public.CubeContainedSingleResultsetRecord;
      return responseBody;
    }
    async CubeOverlap(parameters: Public.CubeOverlapArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube_overlap( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.public_cube(undefinedIsNull(parameters._1))});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube_overlap as unknown as Public.CubeOverlapSingleResultsetRecord;
      return responseBody;
    }
    async CubeUnion(parameters: Public.CubeUnionArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube_union( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.public_cube(undefinedIsNull(parameters._1))});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube_union as unknown as Public.CubeUnionSingleResultsetRecord;
      return responseBody;
    }
    async CubeInter(parameters: Public.CubeInterArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube_inter( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.public_cube(undefinedIsNull(parameters._1))});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube_inter as unknown as Public.CubeInterSingleResultsetRecord;
      return responseBody;
    }
    async CubeSize(parameters: Public.CubeSizeArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube_size( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube_size as unknown as Public.CubeSizeSingleResultsetRecord;
      return responseBody;
    }
    async CubeSubset(parameters: Public.CubeSubsetArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube_subset( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.pg_catalog__int4(
                    undefinedIsNull(parameters._1),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube_subset as unknown as Public.CubeSubsetSingleResultsetRecord;
      return responseBody;
    }
    async CubeDistance(parameters: Public.CubeDistanceArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube_distance( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.public_cube(undefinedIsNull(parameters._1))});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube_distance as unknown as Public.CubeDistanceSingleResultsetRecord;
      return responseBody;
    }
    async DistanceChebyshev(parameters: Public.DistanceChebyshevArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.distance_chebyshev( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.public_cube(undefinedIsNull(parameters._1))});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .distance_chebyshev as unknown as Public.DistanceChebyshevSingleResultsetRecord;
      return responseBody;
    }
    async DistanceTaxicab(parameters: Public.DistanceTaxicabArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.distance_taxicab( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.public_cube(undefinedIsNull(parameters._1))});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .distance_taxicab as unknown as Public.DistanceTaxicabSingleResultsetRecord;
      return responseBody;
    }
    async CubeDim(parameters: Public.CubeDimArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube_dim( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube_dim as unknown as Public.CubeDimSingleResultsetRecord;
      return responseBody;
    }
    async CubeLlCoord(parameters: Public.CubeLlCoordArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube_ll_coord( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.pg_catalog_int4(undefinedIsNull(parameters._1))});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube_ll_coord as unknown as Public.CubeLlCoordSingleResultsetRecord;
      return responseBody;
    }
    async CubeUrCoord(parameters: Public.CubeUrCoordArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube_ur_coord( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.pg_catalog_int4(undefinedIsNull(parameters._1))});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube_ur_coord as unknown as Public.CubeUrCoordSingleResultsetRecord;
      return responseBody;
    }
    async CubeCoord(parameters: Public.CubeCoordArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube_coord( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.pg_catalog_int4(undefinedIsNull(parameters._1))});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube_coord as unknown as Public.CubeCoordSingleResultsetRecord;
      return responseBody;
    }
    async CubeCoordLlur(parameters: Public.CubeCoordLlurArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube_coord_llur( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.pg_catalog_int4(undefinedIsNull(parameters._1))});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube_coord_llur as unknown as Public.CubeCoordLlurSingleResultsetRecord;
      return responseBody;
    }
    async Cubea5b3(parameters: Public.Cubea5b3Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube( ${typed.pg_catalog_float8(
                    undefinedIsNull(parameters._0),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube as unknown as Public.Cubea5b3SingleResultsetRecord;
      return responseBody;
    }
    async Cube0aec(parameters: Public.Cube0aecArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube( ${typed.pg_catalog_float8(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.pg_catalog_float8(
                    undefinedIsNull(parameters._1),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube as unknown as Public.Cube0aecSingleResultsetRecord;
      return responseBody;
    }
    async Cube39d2(parameters: Public.Cube39d2Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.pg_catalog_float8(
                    undefinedIsNull(parameters._1),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube as unknown as Public.Cube39d2SingleResultsetRecord;
      return responseBody;
    }
    async Cubea7eb(parameters: Public.Cubea7ebArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.pg_catalog_float8(
                    undefinedIsNull(parameters._1),
                  )}, ${typed.pg_catalog_float8(
                    undefinedIsNull(parameters._2),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube as unknown as Public.Cubea7ebSingleResultsetRecord;
      return responseBody;
    }
    async CubeIsPoint(parameters: Public.CubeIsPointArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube_is_point( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube_is_point as unknown as Public.CubeIsPointSingleResultsetRecord;
      return responseBody;
    }
    async CubeEnlarge(parameters: Public.CubeEnlargeArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube_enlarge( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.pg_catalog_float8(
                    undefinedIsNull(parameters._1),
                  )}, ${typed.pg_catalog_int4(undefinedIsNull(parameters._2))});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube_enlarge as unknown as Public.CubeEnlargeSingleResultsetRecord;
      return responseBody;
    }
    async GCubeConsistent(parameters: Public.GCubeConsistentArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.g_cube_consistent( ${typed.pg_catalog_internal(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.public_cube(
                    undefinedIsNull(parameters._1),
                  )}, ${typed.pg_catalog_int2(
                    undefinedIsNull(parameters._2),
                  )}, ${typed.pg_catalog_oid(
                    undefinedIsNull(parameters._3),
                  )}, ${typed.pg_catalog_internal(
                    undefinedIsNull(parameters._4),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .g_cube_consistent as unknown as Public.GCubeConsistentSingleResultsetRecord;
      return responseBody;
    }
    async GCubePenalty(parameters: Public.GCubePenaltyArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.g_cube_penalty( ${typed.pg_catalog_internal(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.pg_catalog_internal(
                    undefinedIsNull(parameters._1),
                  )}, ${typed.pg_catalog_internal(
                    undefinedIsNull(parameters._2),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .g_cube_penalty as unknown as Public.GCubePenaltySingleResultsetRecord;
      return responseBody;
    }
    async GCubePicksplit(parameters: Public.GCubePicksplitArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.g_cube_picksplit( ${typed.pg_catalog_internal(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.pg_catalog_internal(
                    undefinedIsNull(parameters._1),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .g_cube_picksplit as unknown as Public.GCubePicksplitSingleResultsetRecord;
      return responseBody;
    }
    async GCubeUnion(parameters: Public.GCubeUnionArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.g_cube_union( ${typed.pg_catalog_internal(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.pg_catalog_internal(
                    undefinedIsNull(parameters._1),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .g_cube_union as unknown as Public.GCubeUnionSingleResultsetRecord;
      return responseBody;
    }
    async GCubeSame(parameters: Public.GCubeSameArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.g_cube_same( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.public_cube(
                    undefinedIsNull(parameters._1),
                  )}, ${typed.pg_catalog_internal(
                    undefinedIsNull(parameters._2),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .g_cube_same as unknown as Public.GCubeSameSingleResultsetRecord;
      return responseBody;
    }
    async GCubeDistance(parameters: Public.GCubeDistanceArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.g_cube_distance( ${typed.pg_catalog_internal(
                    undefinedIsNull(parameters._0),
                  )}, ${typed.public_cube(
                    undefinedIsNull(parameters._1),
                  )}, ${typed.pg_catalog_int2(
                    undefinedIsNull(parameters._2),
                  )}, ${typed.pg_catalog_oid(
                    undefinedIsNull(parameters._3),
                  )}, ${typed.pg_catalog_internal(
                    undefinedIsNull(parameters._4),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .g_cube_distance as unknown as Public.GCubeDistanceSingleResultsetRecord;
      return responseBody;
    }
    async CubeRecv(parameters: Public.CubeRecvArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube_recv( ${typed.pg_catalog_internal(
                    undefinedIsNull(parameters._0),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube_recv as unknown as Public.CubeRecvSingleResultsetRecord;
      return responseBody;
    }
    async CubeSend(parameters: Public.CubeSendArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql.begin(async (sql: postgres.Sql) => {
        return await sql`
                  SELECT
                  public.cube_send( ${typed.public_cube(
                    undefinedIsNull(parameters._0),
                  )});
                  `;
      });
      const results = response;
      const responseBody = results?.[0]
        .cube_send as unknown as Public.CubeSendSingleResultsetRecord;
      return responseBody;
    }

    public Slug = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async bySlugId(
        parameters: Public.Tables.Slug.BySlugId,
      ): Promise<Public.Slug> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT slug_id FROM public.slug WHERE slug_id = ${
            parameters.slugId === undefined
              ? sql("slug_id")
              : typed.pg_catalog_int4(parameters.slugId)
          }`;

        const results = response.map((record) => ({
          slugId: undefinedIsNull(record.slug_id),
        }));
        return results[0];
      }

      async deleteBySlugId(
        parameters: Public.Tables.Slug.BySlugId,
      ): Promise<Public.Slug> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`DELETE FROM public.slug WHERE slug_id = ${
          parameters.slugId === undefined
            ? sql("slug_id")
            : typed.pg_catalog_int4(parameters.slugId)
        } RETURNING slug_id
      `;

        const results = response.map((record) => ({
          slugId: undefinedIsNull(record.slug_id),
        }));
        return results[0];
      }

      async updateBySlugId(
        parameters: Public.Tables.Slug.BySlugId,
        values: Partial<Public.Slug>,
      ): Promise<Public.Slug> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.slug SET slug_id = ${
          values.slugId === undefined
            ? sql("slug_id")
            : typed.pg_catalog_int4(values.slugId)
        } WHERE slug_id = ${
          parameters.slugId === undefined
            ? sql("slug_id")
            : typed.pg_catalog_int4(parameters.slugId)
        } RETURNING slug_id`;

        const results = response.map((record) => ({
          slugId: undefinedIsNull(record.slug_id),
        }));
        return results[0];
      }

      async create(
        values: Public.Slug | Public.SlugNotPrimaryKey,
      ): Promise<Public.Slug> {
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        if (Public.includesSlugPrimaryKey(values)) {
          const response = await sql`INSERT INTO public.slug (slug_id)
    VALUES (${
      values.slugId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int4(values.slugId)
    })
    ON CONFLICT (slug_id) DO UPDATE
    SET 
    RETURNING slug_id
    `;

          const results = response.map((record) => ({
            slugId: undefinedIsNull(record.slug_id),
          }));
          return results[0];
        }
        const response = await sql`INSERT INTO public.slug ()
    VALUES ()
    RETURNING slug_id
    `;

        const results = response.map((record) => ({
          slugId: undefinedIsNull(record.slug_id),
        }));
        return results[0];
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

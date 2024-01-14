// ⚠️ generated - do not modify ⚠️

/**
 * These types are node/browser isomorphic and are used by all other
 * EmbraceSQL generated code.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* @typescript-eslint/no-redundant-type-constituents */
import {
  UUID,
  JsDate,
  JSONValue,
  JSONObject,
  Empty,
  Nullable,
  NullableMembers,
  undefinedIsNull,
  nullIsUndefined,
  NEVER,
} from "@embracesql/shared";
import type { PartiallyOptional } from "@embracesql/shared";

// begin type definitions
export namespace PgCatalog {
  export namespace Types {
    export type AclitemArray = Array<PgCatalog.Types.Aclitem>;

    export type BitArray = Array<PgCatalog.Types.Bit>;

    export type BoolArray = Array<PgCatalog.Types.Bool>;

    export type BoxArray = Array<PgCatalog.Types.Box>;

    export type BpcharArray = Array<PgCatalog.Types.Bpchar>;

    export type ByteaArray = Array<PgCatalog.Types.Bytea>;

    export type CharArray = Array<PgCatalog.Types.Char>;

    export type CidArray = Array<PgCatalog.Types.Cid>;

    export type CidrArray = Array<PgCatalog.Types.Cidr>;

    export type CircleArray = Array<PgCatalog.Types.Circle>;

    export type CstringArray = Array<PgCatalog.Types.Cstring>;

    export type DateArray = Array<PgCatalog.Types.Date>;

    export type DatemultirangeArray = Array<PgCatalog.Types.Datemultirange>;

    export type DaterangeArray = Array<PgCatalog.Types.Daterange>;

    export type Float4Array = Array<PgCatalog.Types.Float4>;

    export type Float8Array = Array<PgCatalog.Types.Float8>;

    export type GtsvectorArray = Array<PgCatalog.Types.Gtsvector>;

    export type InetArray = Array<PgCatalog.Types.Inet>;

    export type Int2Array = Array<PgCatalog.Types.Int2>;

    export type Int2vectorArray = Array<PgCatalog.Types.Int2vector>;

    export type Int4Array = Array<PgCatalog.Types.Int4>;

    export type Int4multirangeArray = Array<PgCatalog.Types.Int4multirange>;

    export type Int4rangeArray = Array<PgCatalog.Types.Int4range>;

    export type Int8Array = Array<PgCatalog.Types.Int8>;

    export type Int8multirangeArray = Array<PgCatalog.Types.Int8multirange>;

    export type Int8rangeArray = Array<PgCatalog.Types.Int8range>;

    export type IntervalArray = Array<PgCatalog.Types.Interval>;

    export type JsonArray = Array<PgCatalog.Types.Json>;

    export type JsonbArray = Array<PgCatalog.Types.Jsonb>;

    export type JsonpathArray = Array<PgCatalog.Types.Jsonpath>;

    export type LineArray = Array<PgCatalog.Types.Line>;

    export type LsegArray = Array<PgCatalog.Types.Lseg>;

    export type MacaddrArray = Array<PgCatalog.Types.Macaddr>;

    export type Macaddr8Array = Array<PgCatalog.Types.Macaddr8>;

    export type MoneyArray = Array<PgCatalog.Types.Money>;

    export type NameArray = Array<PgCatalog.Types.Name>;

    export type NumericArray = Array<PgCatalog.Types.Numeric>;

    export type NummultirangeArray = Array<PgCatalog.Types.Nummultirange>;

    export type NumrangeArray = Array<PgCatalog.Types.Numrange>;

    export type OidArray = Array<PgCatalog.Types.Oid>;

    export type OidvectorArray = Array<PgCatalog.Types.Oidvector>;

    export type PathArray = Array<PgCatalog.Types.Path>;

    export type PgAggregateArray = Array<PgCatalog.Types.PgAggregate>;

    export type PgAmArray = Array<PgCatalog.Types.PgAm>;

    export type PgAmopArray = Array<PgCatalog.Types.PgAmop>;

    export type PgAmprocArray = Array<PgCatalog.Types.PgAmproc>;

    export type PgAttrdefArray = Array<PgCatalog.Types.PgAttrdef>;

    export type PgAttributeArray = Array<PgCatalog.Types.PgAttribute>;

    export type PgAuthMembersArray = Array<PgCatalog.Types.PgAuthMembers>;

    export type PgAuthidArray = Array<PgCatalog.Types.PgAuthid>;

    export type PgAvailableExtensionVersionsArray =
      Array<PgCatalog.Types.PgAvailableExtensionVersions>;

    export type PgAvailableExtensionsArray =
      Array<PgCatalog.Types.PgAvailableExtensions>;

    export type PgBackendMemoryContextsArray =
      Array<PgCatalog.Types.PgBackendMemoryContexts>;

    export type PgCastArray = Array<PgCatalog.Types.PgCast>;

    export type PgClassArray = Array<PgCatalog.Types.PgClass>;

    export type PgCollationArray = Array<PgCatalog.Types.PgCollation>;

    export type PgConfigArray = Array<PgCatalog.Types.PgConfig>;

    export type PgConstraintArray = Array<PgCatalog.Types.PgConstraint>;

    export type PgConversionArray = Array<PgCatalog.Types.PgConversion>;

    export type PgCursorsArray = Array<PgCatalog.Types.PgCursors>;

    export type PgDatabaseArray = Array<PgCatalog.Types.PgDatabase>;

    export type PgDbRoleSettingArray = Array<PgCatalog.Types.PgDbRoleSetting>;

    export type PgDefaultAclArray = Array<PgCatalog.Types.PgDefaultAcl>;

    export type PgDependArray = Array<PgCatalog.Types.PgDepend>;

    export type PgDescriptionArray = Array<PgCatalog.Types.PgDescription>;

    export type PgEnumArray = Array<PgCatalog.Types.PgEnum>;

    export type PgEventTriggerArray = Array<PgCatalog.Types.PgEventTrigger>;

    export type PgExtensionArray = Array<PgCatalog.Types.PgExtension>;

    export type PgFileSettingsArray = Array<PgCatalog.Types.PgFileSettings>;

    export type PgForeignDataWrapperArray =
      Array<PgCatalog.Types.PgForeignDataWrapper>;

    export type PgForeignServerArray = Array<PgCatalog.Types.PgForeignServer>;

    export type PgForeignTableArray = Array<PgCatalog.Types.PgForeignTable>;

    export type PgGroupArray = Array<PgCatalog.Types.PgGroup>;

    export type PgHbaFileRulesArray = Array<PgCatalog.Types.PgHbaFileRules>;

    export type PgIdentFileMappingsArray =
      Array<PgCatalog.Types.PgIdentFileMappings>;

    export type PgIndexArray = Array<PgCatalog.Types.PgIndex>;

    export type PgIndexesArray = Array<PgCatalog.Types.PgIndexes>;

    export type PgInheritsArray = Array<PgCatalog.Types.PgInherits>;

    export type PgInitPrivsArray = Array<PgCatalog.Types.PgInitPrivs>;

    export type PgLanguageArray = Array<PgCatalog.Types.PgLanguage>;

    export type PgLargeobjectArray = Array<PgCatalog.Types.PgLargeobject>;

    export type PgLargeobjectMetadataArray =
      Array<PgCatalog.Types.PgLargeobjectMetadata>;

    export type PgLocksArray = Array<PgCatalog.Types.PgLocks>;

    export type PgLsnArray = Array<PgCatalog.Types.PgLsn>;

    export type PgMatviewsArray = Array<PgCatalog.Types.PgMatviews>;

    export type PgNamespaceArray = Array<PgCatalog.Types.PgNamespace>;

    export type PgOpclassArray = Array<PgCatalog.Types.PgOpclass>;

    export type PgOperatorArray = Array<PgCatalog.Types.PgOperator>;

    export type PgOpfamilyArray = Array<PgCatalog.Types.PgOpfamily>;

    export type PgParameterAclArray = Array<PgCatalog.Types.PgParameterAcl>;

    export type PgPartitionedTableArray =
      Array<PgCatalog.Types.PgPartitionedTable>;

    export type PgPoliciesArray = Array<PgCatalog.Types.PgPolicies>;

    export type PgPolicyArray = Array<PgCatalog.Types.PgPolicy>;

    export type PgPreparedStatementsArray =
      Array<PgCatalog.Types.PgPreparedStatements>;

    export type PgPreparedXactsArray = Array<PgCatalog.Types.PgPreparedXacts>;

    export type PgProcArray = Array<PgCatalog.Types.PgProc>;

    export type PgPublicationArray = Array<PgCatalog.Types.PgPublication>;

    export type PgPublicationNamespaceArray =
      Array<PgCatalog.Types.PgPublicationNamespace>;

    export type PgPublicationRelArray = Array<PgCatalog.Types.PgPublicationRel>;

    export type PgPublicationTablesArray =
      Array<PgCatalog.Types.PgPublicationTables>;

    export type PgRangeArray = Array<PgCatalog.Types.PgRange>;

    export type PgReplicationOriginArray =
      Array<PgCatalog.Types.PgReplicationOrigin>;

    export type PgReplicationOriginStatusArray =
      Array<PgCatalog.Types.PgReplicationOriginStatus>;

    export type PgReplicationSlotsArray =
      Array<PgCatalog.Types.PgReplicationSlots>;

    export type PgRewriteArray = Array<PgCatalog.Types.PgRewrite>;

    export type PgRolesArray = Array<PgCatalog.Types.PgRoles>;

    export type PgRulesArray = Array<PgCatalog.Types.PgRules>;

    export type PgSeclabelArray = Array<PgCatalog.Types.PgSeclabel>;

    export type PgSeclabelsArray = Array<PgCatalog.Types.PgSeclabels>;

    export type PgSequenceArray = Array<PgCatalog.Types.PgSequence>;

    export type PgSequencesArray = Array<PgCatalog.Types.PgSequences>;

    export type PgSettingsArray = Array<PgCatalog.Types.PgSettings>;

    export type PgShadowArray = Array<PgCatalog.Types.PgShadow>;

    export type PgShdependArray = Array<PgCatalog.Types.PgShdepend>;

    export type PgShdescriptionArray = Array<PgCatalog.Types.PgShdescription>;

    export type PgShmemAllocationsArray =
      Array<PgCatalog.Types.PgShmemAllocations>;

    export type PgShseclabelArray = Array<PgCatalog.Types.PgShseclabel>;

    export type PgSnapshotArray = Array<PgCatalog.Types.PgSnapshot>;

    export type PgStatActivityArray = Array<PgCatalog.Types.PgStatActivity>;

    export type PgStatAllIndexesArray = Array<PgCatalog.Types.PgStatAllIndexes>;

    export type PgStatAllTablesArray = Array<PgCatalog.Types.PgStatAllTables>;

    export type PgStatArchiverArray = Array<PgCatalog.Types.PgStatArchiver>;

    export type PgStatBgwriterArray = Array<PgCatalog.Types.PgStatBgwriter>;

    export type PgStatDatabaseArray = Array<PgCatalog.Types.PgStatDatabase>;

    export type PgStatDatabaseConflictsArray =
      Array<PgCatalog.Types.PgStatDatabaseConflicts>;

    export type PgStatGssapiArray = Array<PgCatalog.Types.PgStatGssapi>;

    export type PgStatIoArray = Array<PgCatalog.Types.PgStatIo>;

    export type PgStatProgressAnalyzeArray =
      Array<PgCatalog.Types.PgStatProgressAnalyze>;

    export type PgStatProgressBasebackupArray =
      Array<PgCatalog.Types.PgStatProgressBasebackup>;

    export type PgStatProgressClusterArray =
      Array<PgCatalog.Types.PgStatProgressCluster>;

    export type PgStatProgressCopyArray =
      Array<PgCatalog.Types.PgStatProgressCopy>;

    export type PgStatProgressCreateIndexArray =
      Array<PgCatalog.Types.PgStatProgressCreateIndex>;

    export type PgStatProgressVacuumArray =
      Array<PgCatalog.Types.PgStatProgressVacuum>;

    export type PgStatRecoveryPrefetchArray =
      Array<PgCatalog.Types.PgStatRecoveryPrefetch>;

    export type PgStatReplicationArray =
      Array<PgCatalog.Types.PgStatReplication>;

    export type PgStatReplicationSlotsArray =
      Array<PgCatalog.Types.PgStatReplicationSlots>;

    export type PgStatSlruArray = Array<PgCatalog.Types.PgStatSlru>;

    export type PgStatSslArray = Array<PgCatalog.Types.PgStatSsl>;

    export type PgStatSubscriptionArray =
      Array<PgCatalog.Types.PgStatSubscription>;

    export type PgStatSubscriptionStatsArray =
      Array<PgCatalog.Types.PgStatSubscriptionStats>;

    export type PgStatSysIndexesArray = Array<PgCatalog.Types.PgStatSysIndexes>;

    export type PgStatSysTablesArray = Array<PgCatalog.Types.PgStatSysTables>;

    export type PgStatUserFunctionsArray =
      Array<PgCatalog.Types.PgStatUserFunctions>;

    export type PgStatUserIndexesArray =
      Array<PgCatalog.Types.PgStatUserIndexes>;

    export type PgStatUserTablesArray = Array<PgCatalog.Types.PgStatUserTables>;

    export type PgStatWalArray = Array<PgCatalog.Types.PgStatWal>;

    export type PgStatWalReceiverArray =
      Array<PgCatalog.Types.PgStatWalReceiver>;

    export type PgStatXactAllTablesArray =
      Array<PgCatalog.Types.PgStatXactAllTables>;

    export type PgStatXactSysTablesArray =
      Array<PgCatalog.Types.PgStatXactSysTables>;

    export type PgStatXactUserFunctionsArray =
      Array<PgCatalog.Types.PgStatXactUserFunctions>;

    export type PgStatXactUserTablesArray =
      Array<PgCatalog.Types.PgStatXactUserTables>;

    export type PgStatioAllIndexesArray =
      Array<PgCatalog.Types.PgStatioAllIndexes>;

    export type PgStatioAllSequencesArray =
      Array<PgCatalog.Types.PgStatioAllSequences>;

    export type PgStatioAllTablesArray =
      Array<PgCatalog.Types.PgStatioAllTables>;

    export type PgStatioSysIndexesArray =
      Array<PgCatalog.Types.PgStatioSysIndexes>;

    export type PgStatioSysSequencesArray =
      Array<PgCatalog.Types.PgStatioSysSequences>;

    export type PgStatioSysTablesArray =
      Array<PgCatalog.Types.PgStatioSysTables>;

    export type PgStatioUserIndexesArray =
      Array<PgCatalog.Types.PgStatioUserIndexes>;

    export type PgStatioUserSequencesArray =
      Array<PgCatalog.Types.PgStatioUserSequences>;

    export type PgStatioUserTablesArray =
      Array<PgCatalog.Types.PgStatioUserTables>;

    export type PgStatisticArray = Array<PgCatalog.Types.PgStatistic>;

    export type PgStatisticExtArray = Array<PgCatalog.Types.PgStatisticExt>;

    export type PgStatisticExtDataArray =
      Array<PgCatalog.Types.PgStatisticExtData>;

    export type PgStatsArray = Array<PgCatalog.Types.PgStats>;

    export type PgStatsExtArray = Array<PgCatalog.Types.PgStatsExt>;

    export type PgStatsExtExprsArray = Array<PgCatalog.Types.PgStatsExtExprs>;

    export type PgSubscriptionArray = Array<PgCatalog.Types.PgSubscription>;

    export type PgSubscriptionRelArray =
      Array<PgCatalog.Types.PgSubscriptionRel>;

    export type PgTablesArray = Array<PgCatalog.Types.PgTables>;

    export type PgTablespaceArray = Array<PgCatalog.Types.PgTablespace>;

    export type PgTimezoneAbbrevsArray =
      Array<PgCatalog.Types.PgTimezoneAbbrevs>;

    export type PgTimezoneNamesArray = Array<PgCatalog.Types.PgTimezoneNames>;

    export type PgTransformArray = Array<PgCatalog.Types.PgTransform>;

    export type PgTriggerArray = Array<PgCatalog.Types.PgTrigger>;

    export type PgTsConfigArray = Array<PgCatalog.Types.PgTsConfig>;

    export type PgTsConfigMapArray = Array<PgCatalog.Types.PgTsConfigMap>;

    export type PgTsDictArray = Array<PgCatalog.Types.PgTsDict>;

    export type PgTsParserArray = Array<PgCatalog.Types.PgTsParser>;

    export type PgTsTemplateArray = Array<PgCatalog.Types.PgTsTemplate>;

    export type PgTypeArray = Array<PgCatalog.Types.PgType>;

    export type PgUserArray = Array<PgCatalog.Types.PgUser>;

    export type PgUserMappingArray = Array<PgCatalog.Types.PgUserMapping>;

    export type PgUserMappingsArray = Array<PgCatalog.Types.PgUserMappings>;

    export type PgViewsArray = Array<PgCatalog.Types.PgViews>;

    export type PointArray = Array<PgCatalog.Types.Point>;

    export type PolygonArray = Array<PgCatalog.Types.Polygon>;

    export type RecordArray = Array<PgCatalog.Types.Record>;

    export type RefcursorArray = Array<PgCatalog.Types.Refcursor>;

    export type RegclassArray = Array<PgCatalog.Types.Regclass>;

    export type RegcollationArray = Array<PgCatalog.Types.Regcollation>;

    export type RegconfigArray = Array<PgCatalog.Types.Regconfig>;

    export type RegdictionaryArray = Array<PgCatalog.Types.Regdictionary>;

    export type RegnamespaceArray = Array<PgCatalog.Types.Regnamespace>;

    export type RegoperArray = Array<PgCatalog.Types.Regoper>;

    export type RegoperatorArray = Array<PgCatalog.Types.Regoperator>;

    export type RegprocArray = Array<PgCatalog.Types.Regproc>;

    export type RegprocedureArray = Array<PgCatalog.Types.Regprocedure>;

    export type RegroleArray = Array<PgCatalog.Types.Regrole>;

    export type RegtypeArray = Array<PgCatalog.Types.Regtype>;

    export type TextArray = Array<PgCatalog.Types.Text>;

    export type TidArray = Array<PgCatalog.Types.Tid>;

    export type TimeArray = Array<PgCatalog.Types.Time>;

    export type TimestampArray = Array<PgCatalog.Types.Timestamp>;

    export type TimestamptzArray = Array<PgCatalog.Types.Timestamptz>;

    export type TimetzArray = Array<PgCatalog.Types.Timetz>;

    export type TsmultirangeArray = Array<PgCatalog.Types.Tsmultirange>;

    export type TsqueryArray = Array<PgCatalog.Types.Tsquery>;

    export type TsrangeArray = Array<PgCatalog.Types.Tsrange>;

    export type TstzmultirangeArray = Array<PgCatalog.Types.Tstzmultirange>;

    export type TstzrangeArray = Array<PgCatalog.Types.Tstzrange>;

    export type TsvectorArray = Array<PgCatalog.Types.Tsvector>;

    export type TxidSnapshotArray = Array<PgCatalog.Types.TxidSnapshot>;

    export type UuidArray = Array<PgCatalog.Types.Uuid>;

    export type VarbitArray = Array<PgCatalog.Types.Varbit>;

    export type VarcharArray = Array<PgCatalog.Types.Varchar>;

    export type XidArray = Array<PgCatalog.Types.Xid>;

    export type Xid8Array = Array<PgCatalog.Types.Xid8>;

    export type XmlArray = Array<PgCatalog.Types.Xml>;

    export type Aclitem = string;

    export type Any = unknown;

    export type Anyarray = unknown;

    export type Anycompatible = unknown;

    export type Anycompatiblearray = unknown;

    export type Anycompatiblemultirange = unknown;

    export type Anycompatiblenonarray = unknown;

    export type Anycompatiblerange = unknown;

    export type Anyelement = unknown;

    export type Anyenum = unknown;

    export type Anymultirange = unknown;

    export type Anynonarray = unknown;

    export type Anyrange = unknown;

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

    export type Cstring = unknown;

    export type Date = JsDate;

    export type Datemultirange = unknown;

    export type Daterange = [PgCatalog.Types.Date, PgCatalog.Types.Date];

    export type EventTrigger = unknown;

    export type FdwHandler = unknown;

    export type Float4 = number;

    export type Float8 = number;

    export type Gtsvector = Array<string>;

    export type IndexAmHandler = unknown;

    export type Inet = string;

    export type Int2 = number;

    export type Int2vector = Uint16Array;

    export type Int4 = number;

    export type Int4multirange = unknown;

    export type Int4range = [PgCatalog.Types.Int4, PgCatalog.Types.Int4];

    export type Int8 = number;

    export type Int8multirange = unknown;

    export type Int8range = [PgCatalog.Types.Int8, PgCatalog.Types.Int8];

    export type Internal = unknown;

    export type Interval = number;

    export type Json = JSONObject;

    export type Jsonb = JSONObject;

    export type Jsonpath = string;

    export type LanguageHandler = unknown;

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

    export type Nummultirange = unknown;

    export type Numrange = [PgCatalog.Types.Numeric, PgCatalog.Types.Numeric];

    export type Oid = number;

    export type Oidvector = Array<PgCatalog.Types.Oid>;

    export type Path = Array<Point>;

    export type PgAggregate = {
      aggfnoid: PgCatalog.Types.Regproc;
      aggkind: PgCatalog.Types.Char;
      aggnumdirectargs: PgCatalog.Types.Int2;
      aggtransfn: PgCatalog.Types.Regproc;
      aggfinalfn: PgCatalog.Types.Regproc;
      aggcombinefn: PgCatalog.Types.Regproc;
      aggserialfn: PgCatalog.Types.Regproc;
      aggdeserialfn: PgCatalog.Types.Regproc;
      aggmtransfn: PgCatalog.Types.Regproc;
      aggminvtransfn: PgCatalog.Types.Regproc;
      aggmfinalfn: PgCatalog.Types.Regproc;
      aggfinalextra: PgCatalog.Types.Bool;
      aggmfinalextra: PgCatalog.Types.Bool;
      aggfinalmodify: PgCatalog.Types.Char;
      aggmfinalmodify: PgCatalog.Types.Char;
      aggsortop: PgCatalog.Types.Oid;
      aggtranstype: PgCatalog.Types.Oid;
      aggtransspace: PgCatalog.Types.Int4;
      aggmtranstype: PgCatalog.Types.Oid;
      aggmtransspace: PgCatalog.Types.Int4;
      agginitval: Nullable<PgCatalog.Types.Text>;
      aggminitval: Nullable<PgCatalog.Types.Text>;
    };

    export type PgAm = {
      oid: PgCatalog.Types.Oid;
      amname: PgCatalog.Types.Name;
      amhandler: PgCatalog.Types.Regproc;
      amtype: PgCatalog.Types.Char;
    };

    export type PgAmop = {
      oid: PgCatalog.Types.Oid;
      amopfamily: PgCatalog.Types.Oid;
      amoplefttype: PgCatalog.Types.Oid;
      amoprighttype: PgCatalog.Types.Oid;
      amopstrategy: PgCatalog.Types.Int2;
      amoppurpose: PgCatalog.Types.Char;
      amopopr: PgCatalog.Types.Oid;
      amopmethod: PgCatalog.Types.Oid;
      amopsortfamily: PgCatalog.Types.Oid;
    };

    export type PgAmproc = {
      oid: PgCatalog.Types.Oid;
      amprocfamily: PgCatalog.Types.Oid;
      amproclefttype: PgCatalog.Types.Oid;
      amprocrighttype: PgCatalog.Types.Oid;
      amprocnum: PgCatalog.Types.Int2;
      amproc: PgCatalog.Types.Regproc;
    };

    export type PgAttrdef = {
      oid: PgCatalog.Types.Oid;
      adrelid: PgCatalog.Types.Oid;
      adnum: PgCatalog.Types.Int2;
      adbin: PgCatalog.Types.PgNodeTree;
    };

    export type PgAttribute = {
      attrelid: PgCatalog.Types.Oid;
      attname: PgCatalog.Types.Name;
      atttypid: PgCatalog.Types.Oid;
      attlen: PgCatalog.Types.Int2;
      attnum: PgCatalog.Types.Int2;
      attcacheoff: PgCatalog.Types.Int4;
      atttypmod: PgCatalog.Types.Int4;
      attndims: PgCatalog.Types.Int2;
      attbyval: PgCatalog.Types.Bool;
      attalign: PgCatalog.Types.Char;
      attstorage: PgCatalog.Types.Char;
      attcompression: PgCatalog.Types.Char;
      attnotnull: PgCatalog.Types.Bool;
      atthasdef: PgCatalog.Types.Bool;
      atthasmissing: PgCatalog.Types.Bool;
      attidentity: PgCatalog.Types.Char;
      attgenerated: PgCatalog.Types.Char;
      attisdropped: PgCatalog.Types.Bool;
      attislocal: PgCatalog.Types.Bool;
      attinhcount: PgCatalog.Types.Int2;
      attstattarget: PgCatalog.Types.Int2;
      attcollation: PgCatalog.Types.Oid;
      attacl: PgCatalog.Types.AclitemArray;
      attoptions: PgCatalog.Types.TextArray;
      attfdwoptions: PgCatalog.Types.TextArray;
      attmissingval: Nullable<PgCatalog.Types.Anyarray>;
    };

    export type PgAuthMembers = {
      oid: PgCatalog.Types.Oid;
      roleid: PgCatalog.Types.Oid;
      member: PgCatalog.Types.Oid;
      grantor: PgCatalog.Types.Oid;
      adminOption: PgCatalog.Types.Bool;
      inheritOption: PgCatalog.Types.Bool;
      setOption: PgCatalog.Types.Bool;
    };

    export type PgAuthid = {
      oid: PgCatalog.Types.Oid;
      rolname: PgCatalog.Types.Name;
      rolsuper: PgCatalog.Types.Bool;
      rolinherit: PgCatalog.Types.Bool;
      rolcreaterole: PgCatalog.Types.Bool;
      rolcreatedb: PgCatalog.Types.Bool;
      rolcanlogin: PgCatalog.Types.Bool;
      rolreplication: PgCatalog.Types.Bool;
      rolbypassrls: PgCatalog.Types.Bool;
      rolconnlimit: PgCatalog.Types.Int4;
      rolpassword: Nullable<PgCatalog.Types.Text>;
      rolvaliduntil: Nullable<PgCatalog.Types.Timestamptz>;
    };

    export type PgAvailableExtensionVersions = {
      name: Nullable<PgCatalog.Types.Name>;
      version: Nullable<PgCatalog.Types.Text>;
      installed: Nullable<PgCatalog.Types.Bool>;
      superuser: Nullable<PgCatalog.Types.Bool>;
      trusted: Nullable<PgCatalog.Types.Bool>;
      relocatable: Nullable<PgCatalog.Types.Bool>;
      schema: Nullable<PgCatalog.Types.Name>;
      requires: PgCatalog.Types.NameArray;
      comment: Nullable<PgCatalog.Types.Text>;
    };

    export type PgAvailableExtensions = {
      name: Nullable<PgCatalog.Types.Name>;
      defaultVersion: Nullable<PgCatalog.Types.Text>;
      installedVersion: Nullable<PgCatalog.Types.Text>;
      comment: Nullable<PgCatalog.Types.Text>;
    };

    export type PgBackendMemoryContexts = {
      name: Nullable<PgCatalog.Types.Text>;
      ident: Nullable<PgCatalog.Types.Text>;
      parent: Nullable<PgCatalog.Types.Text>;
      level: Nullable<PgCatalog.Types.Int4>;
      totalBytes: Nullable<PgCatalog.Types.Int8>;
      totalNblocks: Nullable<PgCatalog.Types.Int8>;
      freeBytes: Nullable<PgCatalog.Types.Int8>;
      freeChunks: Nullable<PgCatalog.Types.Int8>;
      usedBytes: Nullable<PgCatalog.Types.Int8>;
    };

    /**
     * FIXME: pg_brin_bloom_summary did not resolve to a base type
     */
    export type PgBrinBloomSummary = string;

    /**
     * FIXME: pg_brin_minmax_multi_summary did not resolve to a base type
     */
    export type PgBrinMinmaxMultiSummary = string;

    export type PgCast = {
      oid: PgCatalog.Types.Oid;
      castsource: PgCatalog.Types.Oid;
      casttarget: PgCatalog.Types.Oid;
      castfunc: PgCatalog.Types.Oid;
      castcontext: PgCatalog.Types.Char;
      castmethod: PgCatalog.Types.Char;
    };

    export type PgClass = {
      oid: PgCatalog.Types.Oid;
      relname: PgCatalog.Types.Name;
      relnamespace: PgCatalog.Types.Oid;
      reltype: PgCatalog.Types.Oid;
      reloftype: PgCatalog.Types.Oid;
      relowner: PgCatalog.Types.Oid;
      relam: PgCatalog.Types.Oid;
      relfilenode: PgCatalog.Types.Oid;
      reltablespace: PgCatalog.Types.Oid;
      relpages: PgCatalog.Types.Int4;
      reltuples: PgCatalog.Types.Float4;
      relallvisible: PgCatalog.Types.Int4;
      reltoastrelid: PgCatalog.Types.Oid;
      relhasindex: PgCatalog.Types.Bool;
      relisshared: PgCatalog.Types.Bool;
      relpersistence: PgCatalog.Types.Char;
      relkind: PgCatalog.Types.Char;
      relnatts: PgCatalog.Types.Int2;
      relchecks: PgCatalog.Types.Int2;
      relhasrules: PgCatalog.Types.Bool;
      relhastriggers: PgCatalog.Types.Bool;
      relhassubclass: PgCatalog.Types.Bool;
      relrowsecurity: PgCatalog.Types.Bool;
      relforcerowsecurity: PgCatalog.Types.Bool;
      relispopulated: PgCatalog.Types.Bool;
      relreplident: PgCatalog.Types.Char;
      relispartition: PgCatalog.Types.Bool;
      relrewrite: PgCatalog.Types.Oid;
      relfrozenxid: PgCatalog.Types.Xid;
      relminmxid: PgCatalog.Types.Xid;
      relacl: PgCatalog.Types.AclitemArray;
      reloptions: PgCatalog.Types.TextArray;
      relpartbound: Nullable<PgCatalog.Types.PgNodeTree>;
    };

    export type PgCollation = {
      oid: PgCatalog.Types.Oid;
      collname: PgCatalog.Types.Name;
      collnamespace: PgCatalog.Types.Oid;
      collowner: PgCatalog.Types.Oid;
      collprovider: PgCatalog.Types.Char;
      collisdeterministic: PgCatalog.Types.Bool;
      collencoding: PgCatalog.Types.Int4;
      collcollate: Nullable<PgCatalog.Types.Text>;
      collctype: Nullable<PgCatalog.Types.Text>;
      colliculocale: Nullable<PgCatalog.Types.Text>;
      collicurules: Nullable<PgCatalog.Types.Text>;
      collversion: Nullable<PgCatalog.Types.Text>;
    };

    export type PgConfig = {
      name: Nullable<PgCatalog.Types.Text>;
      setting: Nullable<PgCatalog.Types.Text>;
    };

    export type PgConstraint = {
      oid: PgCatalog.Types.Oid;
      conname: PgCatalog.Types.Name;
      connamespace: PgCatalog.Types.Oid;
      contype: PgCatalog.Types.Char;
      condeferrable: PgCatalog.Types.Bool;
      condeferred: PgCatalog.Types.Bool;
      convalidated: PgCatalog.Types.Bool;
      conrelid: PgCatalog.Types.Oid;
      contypid: PgCatalog.Types.Oid;
      conindid: PgCatalog.Types.Oid;
      conparentid: PgCatalog.Types.Oid;
      confrelid: PgCatalog.Types.Oid;
      confupdtype: PgCatalog.Types.Char;
      confdeltype: PgCatalog.Types.Char;
      confmatchtype: PgCatalog.Types.Char;
      conislocal: PgCatalog.Types.Bool;
      coninhcount: PgCatalog.Types.Int2;
      connoinherit: PgCatalog.Types.Bool;
      conkey: PgCatalog.Types.Int2Array;
      confkey: PgCatalog.Types.Int2Array;
      conpfeqop: PgCatalog.Types.OidArray;
      conppeqop: PgCatalog.Types.OidArray;
      conffeqop: PgCatalog.Types.OidArray;
      confdelsetcols: PgCatalog.Types.Int2Array;
      conexclop: PgCatalog.Types.OidArray;
      conbin: Nullable<PgCatalog.Types.PgNodeTree>;
    };

    export type PgConversion = {
      oid: PgCatalog.Types.Oid;
      conname: PgCatalog.Types.Name;
      connamespace: PgCatalog.Types.Oid;
      conowner: PgCatalog.Types.Oid;
      conforencoding: PgCatalog.Types.Int4;
      contoencoding: PgCatalog.Types.Int4;
      conproc: PgCatalog.Types.Regproc;
      condefault: PgCatalog.Types.Bool;
    };

    export type PgCursors = {
      name: Nullable<PgCatalog.Types.Text>;
      statement: Nullable<PgCatalog.Types.Text>;
      isHoldable: Nullable<PgCatalog.Types.Bool>;
      isBinary: Nullable<PgCatalog.Types.Bool>;
      isScrollable: Nullable<PgCatalog.Types.Bool>;
      creationTime: Nullable<PgCatalog.Types.Timestamptz>;
    };

    export type PgDatabase = {
      oid: PgCatalog.Types.Oid;
      datname: PgCatalog.Types.Name;
      datdba: PgCatalog.Types.Oid;
      encoding: PgCatalog.Types.Int4;
      datlocprovider: PgCatalog.Types.Char;
      datistemplate: PgCatalog.Types.Bool;
      datallowconn: PgCatalog.Types.Bool;
      datconnlimit: PgCatalog.Types.Int4;
      datfrozenxid: PgCatalog.Types.Xid;
      datminmxid: PgCatalog.Types.Xid;
      dattablespace: PgCatalog.Types.Oid;
      datcollate: PgCatalog.Types.Text;
      datctype: PgCatalog.Types.Text;
      daticulocale: Nullable<PgCatalog.Types.Text>;
      daticurules: Nullable<PgCatalog.Types.Text>;
      datcollversion: Nullable<PgCatalog.Types.Text>;
      datacl: PgCatalog.Types.AclitemArray;
    };

    export type PgDbRoleSetting = {
      setdatabase: PgCatalog.Types.Oid;
      setrole: PgCatalog.Types.Oid;
      setconfig: PgCatalog.Types.TextArray;
    };

    export type PgDdlCommand = unknown;

    export type PgDefaultAcl = {
      oid: PgCatalog.Types.Oid;
      defaclrole: PgCatalog.Types.Oid;
      defaclnamespace: PgCatalog.Types.Oid;
      defaclobjtype: PgCatalog.Types.Char;
      defaclacl: PgCatalog.Types.AclitemArray;
    };

    export type PgDepend = {
      classid: PgCatalog.Types.Oid;
      objid: PgCatalog.Types.Oid;
      objsubid: PgCatalog.Types.Int4;
      refclassid: PgCatalog.Types.Oid;
      refobjid: PgCatalog.Types.Oid;
      refobjsubid: PgCatalog.Types.Int4;
      deptype: PgCatalog.Types.Char;
    };

    /**
     * FIXME: pg_dependencies did not resolve to a base type
     */
    export type PgDependencies = string;

    export type PgDescription = {
      objoid: PgCatalog.Types.Oid;
      classoid: PgCatalog.Types.Oid;
      objsubid: PgCatalog.Types.Int4;
      description: PgCatalog.Types.Text;
    };

    export type PgEnum = {
      oid: PgCatalog.Types.Oid;
      enumtypid: PgCatalog.Types.Oid;
      enumsortorder: PgCatalog.Types.Float4;
      enumlabel: PgCatalog.Types.Name;
    };

    export type PgEventTrigger = {
      oid: PgCatalog.Types.Oid;
      evtname: PgCatalog.Types.Name;
      evtevent: PgCatalog.Types.Name;
      evtowner: PgCatalog.Types.Oid;
      evtfoid: PgCatalog.Types.Oid;
      evtenabled: PgCatalog.Types.Char;
      evttags: PgCatalog.Types.TextArray;
    };

    export type PgExtension = {
      oid: PgCatalog.Types.Oid;
      extname: PgCatalog.Types.Name;
      extowner: PgCatalog.Types.Oid;
      extnamespace: PgCatalog.Types.Oid;
      extrelocatable: PgCatalog.Types.Bool;
      extversion: PgCatalog.Types.Text;
      extconfig: PgCatalog.Types.OidArray;
      extcondition: PgCatalog.Types.TextArray;
    };

    export type PgFileSettings = {
      sourcefile: Nullable<PgCatalog.Types.Text>;
      sourceline: Nullable<PgCatalog.Types.Int4>;
      seqno: Nullable<PgCatalog.Types.Int4>;
      name: Nullable<PgCatalog.Types.Text>;
      setting: Nullable<PgCatalog.Types.Text>;
      applied: Nullable<PgCatalog.Types.Bool>;
      error: Nullable<PgCatalog.Types.Text>;
    };

    export type PgForeignDataWrapper = {
      oid: PgCatalog.Types.Oid;
      fdwname: PgCatalog.Types.Name;
      fdwowner: PgCatalog.Types.Oid;
      fdwhandler: PgCatalog.Types.Oid;
      fdwvalidator: PgCatalog.Types.Oid;
      fdwacl: PgCatalog.Types.AclitemArray;
      fdwoptions: PgCatalog.Types.TextArray;
    };

    export type PgForeignServer = {
      oid: PgCatalog.Types.Oid;
      srvname: PgCatalog.Types.Name;
      srvowner: PgCatalog.Types.Oid;
      srvfdw: PgCatalog.Types.Oid;
      srvtype: Nullable<PgCatalog.Types.Text>;
      srvversion: Nullable<PgCatalog.Types.Text>;
      srvacl: PgCatalog.Types.AclitemArray;
      srvoptions: PgCatalog.Types.TextArray;
    };

    export type PgForeignTable = {
      ftrelid: PgCatalog.Types.Oid;
      ftserver: PgCatalog.Types.Oid;
      ftoptions: PgCatalog.Types.TextArray;
    };

    export type PgGroup = {
      groname: Nullable<PgCatalog.Types.Name>;
      grosysid: Nullable<PgCatalog.Types.Oid>;
      grolist: PgCatalog.Types.OidArray;
    };

    export type PgHbaFileRules = {
      ruleNumber: Nullable<PgCatalog.Types.Int4>;
      fileName: Nullable<PgCatalog.Types.Text>;
      lineNumber: Nullable<PgCatalog.Types.Int4>;
      type: Nullable<PgCatalog.Types.Text>;
      database: PgCatalog.Types.TextArray;
      userName: PgCatalog.Types.TextArray;
      address: Nullable<PgCatalog.Types.Text>;
      netmask: Nullable<PgCatalog.Types.Text>;
      authMethod: Nullable<PgCatalog.Types.Text>;
      options: PgCatalog.Types.TextArray;
      error: Nullable<PgCatalog.Types.Text>;
    };

    export type PgIdentFileMappings = {
      mapNumber: Nullable<PgCatalog.Types.Int4>;
      fileName: Nullable<PgCatalog.Types.Text>;
      lineNumber: Nullable<PgCatalog.Types.Int4>;
      mapName: Nullable<PgCatalog.Types.Text>;
      sysName: Nullable<PgCatalog.Types.Text>;
      pgUsername: Nullable<PgCatalog.Types.Text>;
      error: Nullable<PgCatalog.Types.Text>;
    };

    export type PgIndex = {
      indexrelid: PgCatalog.Types.Oid;
      indrelid: PgCatalog.Types.Oid;
      indnatts: PgCatalog.Types.Int2;
      indnkeyatts: PgCatalog.Types.Int2;
      indisunique: PgCatalog.Types.Bool;
      indnullsnotdistinct: PgCatalog.Types.Bool;
      indisprimary: PgCatalog.Types.Bool;
      indisexclusion: PgCatalog.Types.Bool;
      indimmediate: PgCatalog.Types.Bool;
      indisclustered: PgCatalog.Types.Bool;
      indisvalid: PgCatalog.Types.Bool;
      indcheckxmin: PgCatalog.Types.Bool;
      indisready: PgCatalog.Types.Bool;
      indislive: PgCatalog.Types.Bool;
      indisreplident: PgCatalog.Types.Bool;
      indkey: PgCatalog.Types.Int2vector;
      indcollation: PgCatalog.Types.Oidvector;
      indclass: PgCatalog.Types.Oidvector;
      indoption: PgCatalog.Types.Int2vector;
      indexprs: Nullable<PgCatalog.Types.PgNodeTree>;
      indpred: Nullable<PgCatalog.Types.PgNodeTree>;
    };

    export type PgIndexes = {
      schemaname: Nullable<PgCatalog.Types.Name>;
      tablename: Nullable<PgCatalog.Types.Name>;
      indexname: Nullable<PgCatalog.Types.Name>;
      tablespace: Nullable<PgCatalog.Types.Name>;
      indexdef: Nullable<PgCatalog.Types.Text>;
    };

    export type PgInherits = {
      inhrelid: PgCatalog.Types.Oid;
      inhparent: PgCatalog.Types.Oid;
      inhseqno: PgCatalog.Types.Int4;
      inhdetachpending: PgCatalog.Types.Bool;
    };

    export type PgInitPrivs = {
      objoid: PgCatalog.Types.Oid;
      classoid: PgCatalog.Types.Oid;
      objsubid: PgCatalog.Types.Int4;
      privtype: PgCatalog.Types.Char;
      initprivs: PgCatalog.Types.AclitemArray;
    };

    export type PgLanguage = {
      oid: PgCatalog.Types.Oid;
      lanname: PgCatalog.Types.Name;
      lanowner: PgCatalog.Types.Oid;
      lanispl: PgCatalog.Types.Bool;
      lanpltrusted: PgCatalog.Types.Bool;
      lanplcallfoid: PgCatalog.Types.Oid;
      laninline: PgCatalog.Types.Oid;
      lanvalidator: PgCatalog.Types.Oid;
      lanacl: PgCatalog.Types.AclitemArray;
    };

    export type PgLargeobject = {
      loid: PgCatalog.Types.Oid;
      pageno: PgCatalog.Types.Int4;
      data: PgCatalog.Types.Bytea;
    };

    export type PgLargeobjectMetadata = {
      oid: PgCatalog.Types.Oid;
      lomowner: PgCatalog.Types.Oid;
      lomacl: PgCatalog.Types.AclitemArray;
    };

    export type PgLocks = {
      locktype: Nullable<PgCatalog.Types.Text>;
      database: Nullable<PgCatalog.Types.Oid>;
      relation: Nullable<PgCatalog.Types.Oid>;
      page: Nullable<PgCatalog.Types.Int4>;
      tuple: Nullable<PgCatalog.Types.Int2>;
      virtualxid: Nullable<PgCatalog.Types.Text>;
      transactionid: Nullable<PgCatalog.Types.Xid>;
      classid: Nullable<PgCatalog.Types.Oid>;
      objid: Nullable<PgCatalog.Types.Oid>;
      objsubid: Nullable<PgCatalog.Types.Int2>;
      virtualtransaction: Nullable<PgCatalog.Types.Text>;
      pid: Nullable<PgCatalog.Types.Int4>;
      mode: Nullable<PgCatalog.Types.Text>;
      granted: Nullable<PgCatalog.Types.Bool>;
      fastpath: Nullable<PgCatalog.Types.Bool>;
      waitstart: Nullable<PgCatalog.Types.Timestamptz>;
    };

    export type PgLsn = bigint;

    export type PgMatviews = {
      schemaname: Nullable<PgCatalog.Types.Name>;
      matviewname: Nullable<PgCatalog.Types.Name>;
      matviewowner: Nullable<PgCatalog.Types.Name>;
      tablespace: Nullable<PgCatalog.Types.Name>;
      hasindexes: Nullable<PgCatalog.Types.Bool>;
      ispopulated: Nullable<PgCatalog.Types.Bool>;
      definition: Nullable<PgCatalog.Types.Text>;
    };

    /**
     * FIXME: pg_mcv_list did not resolve to a base type
     */
    export type PgMcvList = string;

    export type PgNamespace = {
      oid: PgCatalog.Types.Oid;
      nspname: PgCatalog.Types.Name;
      nspowner: PgCatalog.Types.Oid;
      nspacl: PgCatalog.Types.AclitemArray;
    };

    /**
     * FIXME: pg_ndistinct did not resolve to a base type
     */
    export type PgNdistinct = string;

    /**
     * FIXME: pg_node_tree did not resolve to a base type
     */
    export type PgNodeTree = string;

    export type PgOpclass = {
      oid: PgCatalog.Types.Oid;
      opcmethod: PgCatalog.Types.Oid;
      opcname: PgCatalog.Types.Name;
      opcnamespace: PgCatalog.Types.Oid;
      opcowner: PgCatalog.Types.Oid;
      opcfamily: PgCatalog.Types.Oid;
      opcintype: PgCatalog.Types.Oid;
      opcdefault: PgCatalog.Types.Bool;
      opckeytype: PgCatalog.Types.Oid;
    };

    export type PgOperator = {
      oid: PgCatalog.Types.Oid;
      oprname: PgCatalog.Types.Name;
      oprnamespace: PgCatalog.Types.Oid;
      oprowner: PgCatalog.Types.Oid;
      oprkind: PgCatalog.Types.Char;
      oprcanmerge: PgCatalog.Types.Bool;
      oprcanhash: PgCatalog.Types.Bool;
      oprleft: PgCatalog.Types.Oid;
      oprright: PgCatalog.Types.Oid;
      oprresult: PgCatalog.Types.Oid;
      oprcom: PgCatalog.Types.Oid;
      oprnegate: PgCatalog.Types.Oid;
      oprcode: PgCatalog.Types.Regproc;
      oprrest: PgCatalog.Types.Regproc;
      oprjoin: PgCatalog.Types.Regproc;
    };

    export type PgOpfamily = {
      oid: PgCatalog.Types.Oid;
      opfmethod: PgCatalog.Types.Oid;
      opfname: PgCatalog.Types.Name;
      opfnamespace: PgCatalog.Types.Oid;
      opfowner: PgCatalog.Types.Oid;
    };

    export type PgParameterAcl = {
      oid: PgCatalog.Types.Oid;
      parname: PgCatalog.Types.Text;
      paracl: PgCatalog.Types.AclitemArray;
    };

    export type PgPartitionedTable = {
      partrelid: PgCatalog.Types.Oid;
      partstrat: PgCatalog.Types.Char;
      partnatts: PgCatalog.Types.Int2;
      partdefid: PgCatalog.Types.Oid;
      partattrs: PgCatalog.Types.Int2vector;
      partclass: PgCatalog.Types.Oidvector;
      partcollation: PgCatalog.Types.Oidvector;
      partexprs: Nullable<PgCatalog.Types.PgNodeTree>;
    };

    export type PgPolicies = {
      schemaname: Nullable<PgCatalog.Types.Name>;
      tablename: Nullable<PgCatalog.Types.Name>;
      policyname: Nullable<PgCatalog.Types.Name>;
      permissive: Nullable<PgCatalog.Types.Text>;
      roles: PgCatalog.Types.NameArray;
      cmd: Nullable<PgCatalog.Types.Text>;
      qual: Nullable<PgCatalog.Types.Text>;
      withCheck: Nullable<PgCatalog.Types.Text>;
    };

    export type PgPolicy = {
      oid: PgCatalog.Types.Oid;
      polname: PgCatalog.Types.Name;
      polrelid: PgCatalog.Types.Oid;
      polcmd: PgCatalog.Types.Char;
      polpermissive: PgCatalog.Types.Bool;
      polroles: PgCatalog.Types.OidArray;
      polqual: Nullable<PgCatalog.Types.PgNodeTree>;
      polwithcheck: Nullable<PgCatalog.Types.PgNodeTree>;
    };

    export type PgPreparedStatements = {
      name: Nullable<PgCatalog.Types.Text>;
      statement: Nullable<PgCatalog.Types.Text>;
      prepareTime: Nullable<PgCatalog.Types.Timestamptz>;
      parameterTypes: PgCatalog.Types.RegtypeArray;
      resultTypes: PgCatalog.Types.RegtypeArray;
      fromSql: Nullable<PgCatalog.Types.Bool>;
      genericPlans: Nullable<PgCatalog.Types.Int8>;
      customPlans: Nullable<PgCatalog.Types.Int8>;
    };

    export type PgPreparedXacts = {
      transaction: Nullable<PgCatalog.Types.Xid>;
      gid: Nullable<PgCatalog.Types.Text>;
      prepared: Nullable<PgCatalog.Types.Timestamptz>;
      owner: Nullable<PgCatalog.Types.Name>;
      database: Nullable<PgCatalog.Types.Name>;
    };

    export type PgProc = {
      oid: PgCatalog.Types.Oid;
      proname: PgCatalog.Types.Name;
      pronamespace: PgCatalog.Types.Oid;
      proowner: PgCatalog.Types.Oid;
      prolang: PgCatalog.Types.Oid;
      procost: PgCatalog.Types.Float4;
      prorows: PgCatalog.Types.Float4;
      provariadic: PgCatalog.Types.Oid;
      prosupport: PgCatalog.Types.Regproc;
      prokind: PgCatalog.Types.Char;
      prosecdef: PgCatalog.Types.Bool;
      proleakproof: PgCatalog.Types.Bool;
      proisstrict: PgCatalog.Types.Bool;
      proretset: PgCatalog.Types.Bool;
      provolatile: PgCatalog.Types.Char;
      proparallel: PgCatalog.Types.Char;
      pronargs: PgCatalog.Types.Int2;
      pronargdefaults: PgCatalog.Types.Int2;
      prorettype: PgCatalog.Types.Oid;
      proargtypes: PgCatalog.Types.Oidvector;
      proallargtypes: PgCatalog.Types.OidArray;
      proargmodes: PgCatalog.Types.CharArray;
      proargnames: PgCatalog.Types.TextArray;
      proargdefaults: Nullable<PgCatalog.Types.PgNodeTree>;
      protrftypes: PgCatalog.Types.OidArray;
      prosrc: PgCatalog.Types.Text;
      probin: Nullable<PgCatalog.Types.Text>;
      prosqlbody: Nullable<PgCatalog.Types.PgNodeTree>;
      proconfig: PgCatalog.Types.TextArray;
      proacl: PgCatalog.Types.AclitemArray;
    };

    export type PgPublication = {
      oid: PgCatalog.Types.Oid;
      pubname: PgCatalog.Types.Name;
      pubowner: PgCatalog.Types.Oid;
      puballtables: PgCatalog.Types.Bool;
      pubinsert: PgCatalog.Types.Bool;
      pubupdate: PgCatalog.Types.Bool;
      pubdelete: PgCatalog.Types.Bool;
      pubtruncate: PgCatalog.Types.Bool;
      pubviaroot: PgCatalog.Types.Bool;
    };

    export type PgPublicationNamespace = {
      oid: PgCatalog.Types.Oid;
      pnpubid: PgCatalog.Types.Oid;
      pnnspid: PgCatalog.Types.Oid;
    };

    export type PgPublicationRel = {
      oid: PgCatalog.Types.Oid;
      prpubid: PgCatalog.Types.Oid;
      prrelid: PgCatalog.Types.Oid;
      prqual: Nullable<PgCatalog.Types.PgNodeTree>;
      prattrs: Nullable<PgCatalog.Types.Int2vector>;
    };

    export type PgPublicationTables = {
      pubname: Nullable<PgCatalog.Types.Name>;
      schemaname: Nullable<PgCatalog.Types.Name>;
      tablename: Nullable<PgCatalog.Types.Name>;
      attnames: PgCatalog.Types.NameArray;
      rowfilter: Nullable<PgCatalog.Types.Text>;
    };

    export type PgRange = {
      rngtypid: PgCatalog.Types.Oid;
      rngsubtype: PgCatalog.Types.Oid;
      rngmultitypid: PgCatalog.Types.Oid;
      rngcollation: PgCatalog.Types.Oid;
      rngsubopc: PgCatalog.Types.Oid;
      rngcanonical: PgCatalog.Types.Regproc;
      rngsubdiff: PgCatalog.Types.Regproc;
    };

    export type PgReplicationOrigin = {
      roident: PgCatalog.Types.Oid;
      roname: PgCatalog.Types.Text;
    };

    export type PgReplicationOriginStatus = {
      localId: Nullable<PgCatalog.Types.Oid>;
      externalId: Nullable<PgCatalog.Types.Text>;
      remoteLsn: Nullable<PgCatalog.Types.PgLsn>;
      localLsn: Nullable<PgCatalog.Types.PgLsn>;
    };

    export type PgReplicationSlots = {
      slotName: Nullable<PgCatalog.Types.Name>;
      plugin: Nullable<PgCatalog.Types.Name>;
      slotType: Nullable<PgCatalog.Types.Text>;
      datoid: Nullable<PgCatalog.Types.Oid>;
      database: Nullable<PgCatalog.Types.Name>;
      temporary: Nullable<PgCatalog.Types.Bool>;
      active: Nullable<PgCatalog.Types.Bool>;
      activePid: Nullable<PgCatalog.Types.Int4>;
      xmin: Nullable<PgCatalog.Types.Xid>;
      catalogXmin: Nullable<PgCatalog.Types.Xid>;
      restartLsn: Nullable<PgCatalog.Types.PgLsn>;
      confirmedFlushLsn: Nullable<PgCatalog.Types.PgLsn>;
      walStatus: Nullable<PgCatalog.Types.Text>;
      safeWalSize: Nullable<PgCatalog.Types.Int8>;
      twoPhase: Nullable<PgCatalog.Types.Bool>;
      conflicting: Nullable<PgCatalog.Types.Bool>;
    };

    export type PgRewrite = {
      oid: PgCatalog.Types.Oid;
      rulename: PgCatalog.Types.Name;
      evClass: PgCatalog.Types.Oid;
      evType: PgCatalog.Types.Char;
      evEnabled: PgCatalog.Types.Char;
      isInstead: PgCatalog.Types.Bool;
      evQual: PgCatalog.Types.PgNodeTree;
      evAction: PgCatalog.Types.PgNodeTree;
    };

    export type PgRoles = {
      rolname: Nullable<PgCatalog.Types.Name>;
      rolsuper: Nullable<PgCatalog.Types.Bool>;
      rolinherit: Nullable<PgCatalog.Types.Bool>;
      rolcreaterole: Nullable<PgCatalog.Types.Bool>;
      rolcreatedb: Nullable<PgCatalog.Types.Bool>;
      rolcanlogin: Nullable<PgCatalog.Types.Bool>;
      rolreplication: Nullable<PgCatalog.Types.Bool>;
      rolconnlimit: Nullable<PgCatalog.Types.Int4>;
      rolpassword: Nullable<PgCatalog.Types.Text>;
      rolvaliduntil: Nullable<PgCatalog.Types.Timestamptz>;
      rolbypassrls: Nullable<PgCatalog.Types.Bool>;
      rolconfig: PgCatalog.Types.TextArray;
      oid: Nullable<PgCatalog.Types.Oid>;
    };

    export type PgRules = {
      schemaname: Nullable<PgCatalog.Types.Name>;
      tablename: Nullable<PgCatalog.Types.Name>;
      rulename: Nullable<PgCatalog.Types.Name>;
      definition: Nullable<PgCatalog.Types.Text>;
    };

    export type PgSeclabel = {
      objoid: PgCatalog.Types.Oid;
      classoid: PgCatalog.Types.Oid;
      objsubid: PgCatalog.Types.Int4;
      provider: PgCatalog.Types.Text;
      label: PgCatalog.Types.Text;
    };

    export type PgSeclabels = {
      objoid: Nullable<PgCatalog.Types.Oid>;
      classoid: Nullable<PgCatalog.Types.Oid>;
      objsubid: Nullable<PgCatalog.Types.Int4>;
      objtype: Nullable<PgCatalog.Types.Text>;
      objnamespace: Nullable<PgCatalog.Types.Oid>;
      objname: Nullable<PgCatalog.Types.Text>;
      provider: Nullable<PgCatalog.Types.Text>;
      label: Nullable<PgCatalog.Types.Text>;
    };

    export type PgSequence = {
      seqrelid: PgCatalog.Types.Oid;
      seqtypid: PgCatalog.Types.Oid;
      seqstart: PgCatalog.Types.Int8;
      seqincrement: PgCatalog.Types.Int8;
      seqmax: PgCatalog.Types.Int8;
      seqmin: PgCatalog.Types.Int8;
      seqcache: PgCatalog.Types.Int8;
      seqcycle: PgCatalog.Types.Bool;
    };

    export type PgSequences = {
      schemaname: Nullable<PgCatalog.Types.Name>;
      sequencename: Nullable<PgCatalog.Types.Name>;
      sequenceowner: Nullable<PgCatalog.Types.Name>;
      dataType: Nullable<PgCatalog.Types.Regtype>;
      startValue: Nullable<PgCatalog.Types.Int8>;
      minValue: Nullable<PgCatalog.Types.Int8>;
      maxValue: Nullable<PgCatalog.Types.Int8>;
      incrementBy: Nullable<PgCatalog.Types.Int8>;
      cycle: Nullable<PgCatalog.Types.Bool>;
      cacheSize: Nullable<PgCatalog.Types.Int8>;
      lastValue: Nullable<PgCatalog.Types.Int8>;
    };

    export type PgSettings = {
      name: Nullable<PgCatalog.Types.Text>;
      setting: Nullable<PgCatalog.Types.Text>;
      unit: Nullable<PgCatalog.Types.Text>;
      category: Nullable<PgCatalog.Types.Text>;
      shortDesc: Nullable<PgCatalog.Types.Text>;
      extraDesc: Nullable<PgCatalog.Types.Text>;
      context: Nullable<PgCatalog.Types.Text>;
      vartype: Nullable<PgCatalog.Types.Text>;
      source: Nullable<PgCatalog.Types.Text>;
      minVal: Nullable<PgCatalog.Types.Text>;
      maxVal: Nullable<PgCatalog.Types.Text>;
      enumvals: PgCatalog.Types.TextArray;
      bootVal: Nullable<PgCatalog.Types.Text>;
      resetVal: Nullable<PgCatalog.Types.Text>;
      sourcefile: Nullable<PgCatalog.Types.Text>;
      sourceline: Nullable<PgCatalog.Types.Int4>;
      pendingRestart: Nullable<PgCatalog.Types.Bool>;
    };

    export type PgShadow = {
      usename: Nullable<PgCatalog.Types.Name>;
      usesysid: Nullable<PgCatalog.Types.Oid>;
      usecreatedb: Nullable<PgCatalog.Types.Bool>;
      usesuper: Nullable<PgCatalog.Types.Bool>;
      userepl: Nullable<PgCatalog.Types.Bool>;
      usebypassrls: Nullable<PgCatalog.Types.Bool>;
      passwd: Nullable<PgCatalog.Types.Text>;
      valuntil: Nullable<PgCatalog.Types.Timestamptz>;
      useconfig: PgCatalog.Types.TextArray;
    };

    export type PgShdepend = {
      dbid: PgCatalog.Types.Oid;
      classid: PgCatalog.Types.Oid;
      objid: PgCatalog.Types.Oid;
      objsubid: PgCatalog.Types.Int4;
      refclassid: PgCatalog.Types.Oid;
      refobjid: PgCatalog.Types.Oid;
      deptype: PgCatalog.Types.Char;
    };

    export type PgShdescription = {
      objoid: PgCatalog.Types.Oid;
      classoid: PgCatalog.Types.Oid;
      description: PgCatalog.Types.Text;
    };

    export type PgShmemAllocations = {
      name: Nullable<PgCatalog.Types.Text>;
      off: Nullable<PgCatalog.Types.Int8>;
      size: Nullable<PgCatalog.Types.Int8>;
      allocatedSize: Nullable<PgCatalog.Types.Int8>;
    };

    export type PgShseclabel = {
      objoid: PgCatalog.Types.Oid;
      classoid: PgCatalog.Types.Oid;
      provider: PgCatalog.Types.Text;
      label: PgCatalog.Types.Text;
    };

    /**
     * FIXME: pg_snapshot did not resolve to a base type
     */
    export type PgSnapshot = string;

    export type PgStatActivity = {
      datid: Nullable<PgCatalog.Types.Oid>;
      datname: Nullable<PgCatalog.Types.Name>;
      pid: Nullable<PgCatalog.Types.Int4>;
      leaderPid: Nullable<PgCatalog.Types.Int4>;
      usesysid: Nullable<PgCatalog.Types.Oid>;
      usename: Nullable<PgCatalog.Types.Name>;
      applicationName: Nullable<PgCatalog.Types.Text>;
      clientAddr: Nullable<PgCatalog.Types.Inet>;
      clientHostname: Nullable<PgCatalog.Types.Text>;
      clientPort: Nullable<PgCatalog.Types.Int4>;
      backendStart: Nullable<PgCatalog.Types.Timestamptz>;
      xactStart: Nullable<PgCatalog.Types.Timestamptz>;
      queryStart: Nullable<PgCatalog.Types.Timestamptz>;
      stateChange: Nullable<PgCatalog.Types.Timestamptz>;
      waitEventType: Nullable<PgCatalog.Types.Text>;
      waitEvent: Nullable<PgCatalog.Types.Text>;
      state: Nullable<PgCatalog.Types.Text>;
      backendXid: Nullable<PgCatalog.Types.Xid>;
      backendXmin: Nullable<PgCatalog.Types.Xid>;
      queryId: Nullable<PgCatalog.Types.Int8>;
      query: Nullable<PgCatalog.Types.Text>;
      backendType: Nullable<PgCatalog.Types.Text>;
    };

    export type PgStatAllIndexes = {
      relid: Nullable<PgCatalog.Types.Oid>;
      indexrelid: Nullable<PgCatalog.Types.Oid>;
      schemaname: Nullable<PgCatalog.Types.Name>;
      relname: Nullable<PgCatalog.Types.Name>;
      indexrelname: Nullable<PgCatalog.Types.Name>;
      idxScan: Nullable<PgCatalog.Types.Int8>;
      lastIdxScan: Nullable<PgCatalog.Types.Timestamptz>;
      idxTupRead: Nullable<PgCatalog.Types.Int8>;
      idxTupFetch: Nullable<PgCatalog.Types.Int8>;
    };

    export type PgStatAllTables = {
      relid: Nullable<PgCatalog.Types.Oid>;
      schemaname: Nullable<PgCatalog.Types.Name>;
      relname: Nullable<PgCatalog.Types.Name>;
      seqScan: Nullable<PgCatalog.Types.Int8>;
      lastSeqScan: Nullable<PgCatalog.Types.Timestamptz>;
      seqTupRead: Nullable<PgCatalog.Types.Int8>;
      idxScan: Nullable<PgCatalog.Types.Int8>;
      lastIdxScan: Nullable<PgCatalog.Types.Timestamptz>;
      idxTupFetch: Nullable<PgCatalog.Types.Int8>;
      nTupIns: Nullable<PgCatalog.Types.Int8>;
      nTupUpd: Nullable<PgCatalog.Types.Int8>;
      nTupDel: Nullable<PgCatalog.Types.Int8>;
      nTupHotUpd: Nullable<PgCatalog.Types.Int8>;
      nTupNewpageUpd: Nullable<PgCatalog.Types.Int8>;
      nLiveTup: Nullable<PgCatalog.Types.Int8>;
      nDeadTup: Nullable<PgCatalog.Types.Int8>;
      nModSinceAnalyze: Nullable<PgCatalog.Types.Int8>;
      nInsSinceVacuum: Nullable<PgCatalog.Types.Int8>;
      lastVacuum: Nullable<PgCatalog.Types.Timestamptz>;
      lastAutovacuum: Nullable<PgCatalog.Types.Timestamptz>;
      lastAnalyze: Nullable<PgCatalog.Types.Timestamptz>;
      lastAutoanalyze: Nullable<PgCatalog.Types.Timestamptz>;
      vacuumCount: Nullable<PgCatalog.Types.Int8>;
      autovacuumCount: Nullable<PgCatalog.Types.Int8>;
      analyzeCount: Nullable<PgCatalog.Types.Int8>;
      autoanalyzeCount: Nullable<PgCatalog.Types.Int8>;
    };

    export type PgStatArchiver = {
      archivedCount: Nullable<PgCatalog.Types.Int8>;
      lastArchivedWal: Nullable<PgCatalog.Types.Text>;
      lastArchivedTime: Nullable<PgCatalog.Types.Timestamptz>;
      failedCount: Nullable<PgCatalog.Types.Int8>;
      lastFailedWal: Nullable<PgCatalog.Types.Text>;
      lastFailedTime: Nullable<PgCatalog.Types.Timestamptz>;
      statsReset: Nullable<PgCatalog.Types.Timestamptz>;
    };

    export type PgStatBgwriter = {
      checkpointsTimed: Nullable<PgCatalog.Types.Int8>;
      checkpointsReq: Nullable<PgCatalog.Types.Int8>;
      checkpointWriteTime: Nullable<PgCatalog.Types.Float8>;
      checkpointSyncTime: Nullable<PgCatalog.Types.Float8>;
      buffersCheckpoint: Nullable<PgCatalog.Types.Int8>;
      buffersClean: Nullable<PgCatalog.Types.Int8>;
      maxwrittenClean: Nullable<PgCatalog.Types.Int8>;
      buffersBackend: Nullable<PgCatalog.Types.Int8>;
      buffersBackendFsync: Nullable<PgCatalog.Types.Int8>;
      buffersAlloc: Nullable<PgCatalog.Types.Int8>;
      statsReset: Nullable<PgCatalog.Types.Timestamptz>;
    };

    export type PgStatDatabase = {
      datid: Nullable<PgCatalog.Types.Oid>;
      datname: Nullable<PgCatalog.Types.Name>;
      numbackends: Nullable<PgCatalog.Types.Int4>;
      xactCommit: Nullable<PgCatalog.Types.Int8>;
      xactRollback: Nullable<PgCatalog.Types.Int8>;
      blksRead: Nullable<PgCatalog.Types.Int8>;
      blksHit: Nullable<PgCatalog.Types.Int8>;
      tupReturned: Nullable<PgCatalog.Types.Int8>;
      tupFetched: Nullable<PgCatalog.Types.Int8>;
      tupInserted: Nullable<PgCatalog.Types.Int8>;
      tupUpdated: Nullable<PgCatalog.Types.Int8>;
      tupDeleted: Nullable<PgCatalog.Types.Int8>;
      conflicts: Nullable<PgCatalog.Types.Int8>;
      tempFiles: Nullable<PgCatalog.Types.Int8>;
      tempBytes: Nullable<PgCatalog.Types.Int8>;
      deadlocks: Nullable<PgCatalog.Types.Int8>;
      checksumFailures: Nullable<PgCatalog.Types.Int8>;
      checksumLastFailure: Nullable<PgCatalog.Types.Timestamptz>;
      blkReadTime: Nullable<PgCatalog.Types.Float8>;
      blkWriteTime: Nullable<PgCatalog.Types.Float8>;
      sessionTime: Nullable<PgCatalog.Types.Float8>;
      activeTime: Nullable<PgCatalog.Types.Float8>;
      idleInTransactionTime: Nullable<PgCatalog.Types.Float8>;
      sessions: Nullable<PgCatalog.Types.Int8>;
      sessionsAbandoned: Nullable<PgCatalog.Types.Int8>;
      sessionsFatal: Nullable<PgCatalog.Types.Int8>;
      sessionsKilled: Nullable<PgCatalog.Types.Int8>;
      statsReset: Nullable<PgCatalog.Types.Timestamptz>;
    };

    export type PgStatDatabaseConflicts = {
      datid: Nullable<PgCatalog.Types.Oid>;
      datname: Nullable<PgCatalog.Types.Name>;
      conflTablespace: Nullable<PgCatalog.Types.Int8>;
      conflLock: Nullable<PgCatalog.Types.Int8>;
      conflSnapshot: Nullable<PgCatalog.Types.Int8>;
      conflBufferpin: Nullable<PgCatalog.Types.Int8>;
      conflDeadlock: Nullable<PgCatalog.Types.Int8>;
      conflActiveLogicalslot: Nullable<PgCatalog.Types.Int8>;
    };

    export type PgStatGssapi = {
      pid: Nullable<PgCatalog.Types.Int4>;
      gssAuthenticated: Nullable<PgCatalog.Types.Bool>;
      principal: Nullable<PgCatalog.Types.Text>;
      encrypted: Nullable<PgCatalog.Types.Bool>;
      credentialsDelegated: Nullable<PgCatalog.Types.Bool>;
    };

    export type PgStatIo = {
      backendType: Nullable<PgCatalog.Types.Text>;
      object: Nullable<PgCatalog.Types.Text>;
      context: Nullable<PgCatalog.Types.Text>;
      reads: Nullable<PgCatalog.Types.Int8>;
      readTime: Nullable<PgCatalog.Types.Float8>;
      writes: Nullable<PgCatalog.Types.Int8>;
      writeTime: Nullable<PgCatalog.Types.Float8>;
      writebacks: Nullable<PgCatalog.Types.Int8>;
      writebackTime: Nullable<PgCatalog.Types.Float8>;
      extends: Nullable<PgCatalog.Types.Int8>;
      extendTime: Nullable<PgCatalog.Types.Float8>;
      opBytes: Nullable<PgCatalog.Types.Int8>;
      hits: Nullable<PgCatalog.Types.Int8>;
      evictions: Nullable<PgCatalog.Types.Int8>;
      reuses: Nullable<PgCatalog.Types.Int8>;
      fsyncs: Nullable<PgCatalog.Types.Int8>;
      fsyncTime: Nullable<PgCatalog.Types.Float8>;
      statsReset: Nullable<PgCatalog.Types.Timestamptz>;
    };

    export type PgStatProgressAnalyze = {
      pid: Nullable<PgCatalog.Types.Int4>;
      datid: Nullable<PgCatalog.Types.Oid>;
      datname: Nullable<PgCatalog.Types.Name>;
      relid: Nullable<PgCatalog.Types.Oid>;
      phase: Nullable<PgCatalog.Types.Text>;
      sampleBlksTotal: Nullable<PgCatalog.Types.Int8>;
      sampleBlksScanned: Nullable<PgCatalog.Types.Int8>;
      extStatsTotal: Nullable<PgCatalog.Types.Int8>;
      extStatsComputed: Nullable<PgCatalog.Types.Int8>;
      childTablesTotal: Nullable<PgCatalog.Types.Int8>;
      childTablesDone: Nullable<PgCatalog.Types.Int8>;
      currentChildTableRelid: Nullable<PgCatalog.Types.Oid>;
    };

    export type PgStatProgressBasebackup = {
      pid: Nullable<PgCatalog.Types.Int4>;
      phase: Nullable<PgCatalog.Types.Text>;
      backupTotal: Nullable<PgCatalog.Types.Int8>;
      backupStreamed: Nullable<PgCatalog.Types.Int8>;
      tablespacesTotal: Nullable<PgCatalog.Types.Int8>;
      tablespacesStreamed: Nullable<PgCatalog.Types.Int8>;
    };

    export type PgStatProgressCluster = {
      pid: Nullable<PgCatalog.Types.Int4>;
      datid: Nullable<PgCatalog.Types.Oid>;
      datname: Nullable<PgCatalog.Types.Name>;
      relid: Nullable<PgCatalog.Types.Oid>;
      command: Nullable<PgCatalog.Types.Text>;
      phase: Nullable<PgCatalog.Types.Text>;
      clusterIndexRelid: Nullable<PgCatalog.Types.Oid>;
      heapTuplesScanned: Nullable<PgCatalog.Types.Int8>;
      heapTuplesWritten: Nullable<PgCatalog.Types.Int8>;
      heapBlksTotal: Nullable<PgCatalog.Types.Int8>;
      heapBlksScanned: Nullable<PgCatalog.Types.Int8>;
      indexRebuildCount: Nullable<PgCatalog.Types.Int8>;
    };

    export type PgStatProgressCopy = {
      pid: Nullable<PgCatalog.Types.Int4>;
      datid: Nullable<PgCatalog.Types.Oid>;
      datname: Nullable<PgCatalog.Types.Name>;
      relid: Nullable<PgCatalog.Types.Oid>;
      command: Nullable<PgCatalog.Types.Text>;
      type: Nullable<PgCatalog.Types.Text>;
      bytesProcessed: Nullable<PgCatalog.Types.Int8>;
      bytesTotal: Nullable<PgCatalog.Types.Int8>;
      tuplesProcessed: Nullable<PgCatalog.Types.Int8>;
      tuplesExcluded: Nullable<PgCatalog.Types.Int8>;
    };

    export type PgStatProgressCreateIndex = {
      pid: Nullable<PgCatalog.Types.Int4>;
      datid: Nullable<PgCatalog.Types.Oid>;
      datname: Nullable<PgCatalog.Types.Name>;
      relid: Nullable<PgCatalog.Types.Oid>;
      indexRelid: Nullable<PgCatalog.Types.Oid>;
      command: Nullable<PgCatalog.Types.Text>;
      phase: Nullable<PgCatalog.Types.Text>;
      lockersTotal: Nullable<PgCatalog.Types.Int8>;
      lockersDone: Nullable<PgCatalog.Types.Int8>;
      currentLockerPid: Nullable<PgCatalog.Types.Int8>;
      blocksTotal: Nullable<PgCatalog.Types.Int8>;
      blocksDone: Nullable<PgCatalog.Types.Int8>;
      tuplesTotal: Nullable<PgCatalog.Types.Int8>;
      tuplesDone: Nullable<PgCatalog.Types.Int8>;
      partitionsTotal: Nullable<PgCatalog.Types.Int8>;
      partitionsDone: Nullable<PgCatalog.Types.Int8>;
    };

    export type PgStatProgressVacuum = {
      pid: Nullable<PgCatalog.Types.Int4>;
      datid: Nullable<PgCatalog.Types.Oid>;
      datname: Nullable<PgCatalog.Types.Name>;
      relid: Nullable<PgCatalog.Types.Oid>;
      phase: Nullable<PgCatalog.Types.Text>;
      heapBlksTotal: Nullable<PgCatalog.Types.Int8>;
      heapBlksScanned: Nullable<PgCatalog.Types.Int8>;
      heapBlksVacuumed: Nullable<PgCatalog.Types.Int8>;
      indexVacuumCount: Nullable<PgCatalog.Types.Int8>;
      maxDeadTuples: Nullable<PgCatalog.Types.Int8>;
      numDeadTuples: Nullable<PgCatalog.Types.Int8>;
    };

    export type PgStatRecoveryPrefetch = {
      statsReset: Nullable<PgCatalog.Types.Timestamptz>;
      prefetch: Nullable<PgCatalog.Types.Int8>;
      hit: Nullable<PgCatalog.Types.Int8>;
      skipInit: Nullable<PgCatalog.Types.Int8>;
      skipNew: Nullable<PgCatalog.Types.Int8>;
      skipFpw: Nullable<PgCatalog.Types.Int8>;
      skipRep: Nullable<PgCatalog.Types.Int8>;
      walDistance: Nullable<PgCatalog.Types.Int4>;
      blockDistance: Nullable<PgCatalog.Types.Int4>;
      ioDepth: Nullable<PgCatalog.Types.Int4>;
    };

    export type PgStatReplication = {
      pid: Nullable<PgCatalog.Types.Int4>;
      usesysid: Nullable<PgCatalog.Types.Oid>;
      usename: Nullable<PgCatalog.Types.Name>;
      applicationName: Nullable<PgCatalog.Types.Text>;
      clientAddr: Nullable<PgCatalog.Types.Inet>;
      clientHostname: Nullable<PgCatalog.Types.Text>;
      clientPort: Nullable<PgCatalog.Types.Int4>;
      backendStart: Nullable<PgCatalog.Types.Timestamptz>;
      backendXmin: Nullable<PgCatalog.Types.Xid>;
      state: Nullable<PgCatalog.Types.Text>;
      sentLsn: Nullable<PgCatalog.Types.PgLsn>;
      writeLsn: Nullable<PgCatalog.Types.PgLsn>;
      flushLsn: Nullable<PgCatalog.Types.PgLsn>;
      replayLsn: Nullable<PgCatalog.Types.PgLsn>;
      writeLag: Nullable<PgCatalog.Types.Interval>;
      flushLag: Nullable<PgCatalog.Types.Interval>;
      replayLag: Nullable<PgCatalog.Types.Interval>;
      syncPriority: Nullable<PgCatalog.Types.Int4>;
      syncState: Nullable<PgCatalog.Types.Text>;
      replyTime: Nullable<PgCatalog.Types.Timestamptz>;
    };

    export type PgStatReplicationSlots = {
      slotName: Nullable<PgCatalog.Types.Text>;
      spillTxns: Nullable<PgCatalog.Types.Int8>;
      spillCount: Nullable<PgCatalog.Types.Int8>;
      spillBytes: Nullable<PgCatalog.Types.Int8>;
      streamTxns: Nullable<PgCatalog.Types.Int8>;
      streamCount: Nullable<PgCatalog.Types.Int8>;
      streamBytes: Nullable<PgCatalog.Types.Int8>;
      totalTxns: Nullable<PgCatalog.Types.Int8>;
      totalBytes: Nullable<PgCatalog.Types.Int8>;
      statsReset: Nullable<PgCatalog.Types.Timestamptz>;
    };

    export type PgStatSlru = {
      name: Nullable<PgCatalog.Types.Text>;
      blksZeroed: Nullable<PgCatalog.Types.Int8>;
      blksHit: Nullable<PgCatalog.Types.Int8>;
      blksRead: Nullable<PgCatalog.Types.Int8>;
      blksWritten: Nullable<PgCatalog.Types.Int8>;
      blksExists: Nullable<PgCatalog.Types.Int8>;
      flushes: Nullable<PgCatalog.Types.Int8>;
      truncates: Nullable<PgCatalog.Types.Int8>;
      statsReset: Nullable<PgCatalog.Types.Timestamptz>;
    };

    export type PgStatSsl = {
      pid: Nullable<PgCatalog.Types.Int4>;
      ssl: Nullable<PgCatalog.Types.Bool>;
      version: Nullable<PgCatalog.Types.Text>;
      cipher: Nullable<PgCatalog.Types.Text>;
      bits: Nullable<PgCatalog.Types.Int4>;
      clientDn: Nullable<PgCatalog.Types.Text>;
      clientSerial: Nullable<PgCatalog.Types.Numeric>;
      issuerDn: Nullable<PgCatalog.Types.Text>;
    };

    export type PgStatSubscription = {
      subid: Nullable<PgCatalog.Types.Oid>;
      subname: Nullable<PgCatalog.Types.Name>;
      pid: Nullable<PgCatalog.Types.Int4>;
      leaderPid: Nullable<PgCatalog.Types.Int4>;
      relid: Nullable<PgCatalog.Types.Oid>;
      receivedLsn: Nullable<PgCatalog.Types.PgLsn>;
      lastMsgSendTime: Nullable<PgCatalog.Types.Timestamptz>;
      lastMsgReceiptTime: Nullable<PgCatalog.Types.Timestamptz>;
      latestEndLsn: Nullable<PgCatalog.Types.PgLsn>;
      latestEndTime: Nullable<PgCatalog.Types.Timestamptz>;
    };

    export type PgStatSubscriptionStats = {
      subid: Nullable<PgCatalog.Types.Oid>;
      subname: Nullable<PgCatalog.Types.Name>;
      applyErrorCount: Nullable<PgCatalog.Types.Int8>;
      syncErrorCount: Nullable<PgCatalog.Types.Int8>;
      statsReset: Nullable<PgCatalog.Types.Timestamptz>;
    };

    export type PgStatSysIndexes = {
      relid: Nullable<PgCatalog.Types.Oid>;
      indexrelid: Nullable<PgCatalog.Types.Oid>;
      schemaname: Nullable<PgCatalog.Types.Name>;
      relname: Nullable<PgCatalog.Types.Name>;
      indexrelname: Nullable<PgCatalog.Types.Name>;
      idxScan: Nullable<PgCatalog.Types.Int8>;
      lastIdxScan: Nullable<PgCatalog.Types.Timestamptz>;
      idxTupRead: Nullable<PgCatalog.Types.Int8>;
      idxTupFetch: Nullable<PgCatalog.Types.Int8>;
    };

    export type PgStatSysTables = {
      relid: Nullable<PgCatalog.Types.Oid>;
      schemaname: Nullable<PgCatalog.Types.Name>;
      relname: Nullable<PgCatalog.Types.Name>;
      seqScan: Nullable<PgCatalog.Types.Int8>;
      lastSeqScan: Nullable<PgCatalog.Types.Timestamptz>;
      seqTupRead: Nullable<PgCatalog.Types.Int8>;
      idxScan: Nullable<PgCatalog.Types.Int8>;
      lastIdxScan: Nullable<PgCatalog.Types.Timestamptz>;
      idxTupFetch: Nullable<PgCatalog.Types.Int8>;
      nTupIns: Nullable<PgCatalog.Types.Int8>;
      nTupUpd: Nullable<PgCatalog.Types.Int8>;
      nTupDel: Nullable<PgCatalog.Types.Int8>;
      nTupHotUpd: Nullable<PgCatalog.Types.Int8>;
      nTupNewpageUpd: Nullable<PgCatalog.Types.Int8>;
      nLiveTup: Nullable<PgCatalog.Types.Int8>;
      nDeadTup: Nullable<PgCatalog.Types.Int8>;
      nModSinceAnalyze: Nullable<PgCatalog.Types.Int8>;
      nInsSinceVacuum: Nullable<PgCatalog.Types.Int8>;
      lastVacuum: Nullable<PgCatalog.Types.Timestamptz>;
      lastAutovacuum: Nullable<PgCatalog.Types.Timestamptz>;
      lastAnalyze: Nullable<PgCatalog.Types.Timestamptz>;
      lastAutoanalyze: Nullable<PgCatalog.Types.Timestamptz>;
      vacuumCount: Nullable<PgCatalog.Types.Int8>;
      autovacuumCount: Nullable<PgCatalog.Types.Int8>;
      analyzeCount: Nullable<PgCatalog.Types.Int8>;
      autoanalyzeCount: Nullable<PgCatalog.Types.Int8>;
    };

    export type PgStatUserFunctions = {
      funcid: Nullable<PgCatalog.Types.Oid>;
      schemaname: Nullable<PgCatalog.Types.Name>;
      funcname: Nullable<PgCatalog.Types.Name>;
      calls: Nullable<PgCatalog.Types.Int8>;
      totalTime: Nullable<PgCatalog.Types.Float8>;
      selfTime: Nullable<PgCatalog.Types.Float8>;
    };

    export type PgStatUserIndexes = {
      relid: Nullable<PgCatalog.Types.Oid>;
      indexrelid: Nullable<PgCatalog.Types.Oid>;
      schemaname: Nullable<PgCatalog.Types.Name>;
      relname: Nullable<PgCatalog.Types.Name>;
      indexrelname: Nullable<PgCatalog.Types.Name>;
      idxScan: Nullable<PgCatalog.Types.Int8>;
      lastIdxScan: Nullable<PgCatalog.Types.Timestamptz>;
      idxTupRead: Nullable<PgCatalog.Types.Int8>;
      idxTupFetch: Nullable<PgCatalog.Types.Int8>;
    };

    export type PgStatUserTables = {
      relid: Nullable<PgCatalog.Types.Oid>;
      schemaname: Nullable<PgCatalog.Types.Name>;
      relname: Nullable<PgCatalog.Types.Name>;
      seqScan: Nullable<PgCatalog.Types.Int8>;
      lastSeqScan: Nullable<PgCatalog.Types.Timestamptz>;
      seqTupRead: Nullable<PgCatalog.Types.Int8>;
      idxScan: Nullable<PgCatalog.Types.Int8>;
      lastIdxScan: Nullable<PgCatalog.Types.Timestamptz>;
      idxTupFetch: Nullable<PgCatalog.Types.Int8>;
      nTupIns: Nullable<PgCatalog.Types.Int8>;
      nTupUpd: Nullable<PgCatalog.Types.Int8>;
      nTupDel: Nullable<PgCatalog.Types.Int8>;
      nTupHotUpd: Nullable<PgCatalog.Types.Int8>;
      nTupNewpageUpd: Nullable<PgCatalog.Types.Int8>;
      nLiveTup: Nullable<PgCatalog.Types.Int8>;
      nDeadTup: Nullable<PgCatalog.Types.Int8>;
      nModSinceAnalyze: Nullable<PgCatalog.Types.Int8>;
      nInsSinceVacuum: Nullable<PgCatalog.Types.Int8>;
      lastVacuum: Nullable<PgCatalog.Types.Timestamptz>;
      lastAutovacuum: Nullable<PgCatalog.Types.Timestamptz>;
      lastAnalyze: Nullable<PgCatalog.Types.Timestamptz>;
      lastAutoanalyze: Nullable<PgCatalog.Types.Timestamptz>;
      vacuumCount: Nullable<PgCatalog.Types.Int8>;
      autovacuumCount: Nullable<PgCatalog.Types.Int8>;
      analyzeCount: Nullable<PgCatalog.Types.Int8>;
      autoanalyzeCount: Nullable<PgCatalog.Types.Int8>;
    };

    export type PgStatWal = {
      walRecords: Nullable<PgCatalog.Types.Int8>;
      walFpi: Nullable<PgCatalog.Types.Int8>;
      walBytes: Nullable<PgCatalog.Types.Numeric>;
      walBuffersFull: Nullable<PgCatalog.Types.Int8>;
      walWrite: Nullable<PgCatalog.Types.Int8>;
      walSync: Nullable<PgCatalog.Types.Int8>;
      walWriteTime: Nullable<PgCatalog.Types.Float8>;
      walSyncTime: Nullable<PgCatalog.Types.Float8>;
      statsReset: Nullable<PgCatalog.Types.Timestamptz>;
    };

    export type PgStatWalReceiver = {
      pid: Nullable<PgCatalog.Types.Int4>;
      status: Nullable<PgCatalog.Types.Text>;
      receiveStartLsn: Nullable<PgCatalog.Types.PgLsn>;
      receiveStartTli: Nullable<PgCatalog.Types.Int4>;
      writtenLsn: Nullable<PgCatalog.Types.PgLsn>;
      flushedLsn: Nullable<PgCatalog.Types.PgLsn>;
      receivedTli: Nullable<PgCatalog.Types.Int4>;
      lastMsgSendTime: Nullable<PgCatalog.Types.Timestamptz>;
      lastMsgReceiptTime: Nullable<PgCatalog.Types.Timestamptz>;
      latestEndLsn: Nullable<PgCatalog.Types.PgLsn>;
      latestEndTime: Nullable<PgCatalog.Types.Timestamptz>;
      slotName: Nullable<PgCatalog.Types.Text>;
      senderHost: Nullable<PgCatalog.Types.Text>;
      senderPort: Nullable<PgCatalog.Types.Int4>;
      conninfo: Nullable<PgCatalog.Types.Text>;
    };

    export type PgStatXactAllTables = {
      relid: Nullable<PgCatalog.Types.Oid>;
      schemaname: Nullable<PgCatalog.Types.Name>;
      relname: Nullable<PgCatalog.Types.Name>;
      seqScan: Nullable<PgCatalog.Types.Int8>;
      seqTupRead: Nullable<PgCatalog.Types.Int8>;
      idxScan: Nullable<PgCatalog.Types.Int8>;
      idxTupFetch: Nullable<PgCatalog.Types.Int8>;
      nTupIns: Nullable<PgCatalog.Types.Int8>;
      nTupUpd: Nullable<PgCatalog.Types.Int8>;
      nTupDel: Nullable<PgCatalog.Types.Int8>;
      nTupHotUpd: Nullable<PgCatalog.Types.Int8>;
      nTupNewpageUpd: Nullable<PgCatalog.Types.Int8>;
    };

    export type PgStatXactSysTables = {
      relid: Nullable<PgCatalog.Types.Oid>;
      schemaname: Nullable<PgCatalog.Types.Name>;
      relname: Nullable<PgCatalog.Types.Name>;
      seqScan: Nullable<PgCatalog.Types.Int8>;
      seqTupRead: Nullable<PgCatalog.Types.Int8>;
      idxScan: Nullable<PgCatalog.Types.Int8>;
      idxTupFetch: Nullable<PgCatalog.Types.Int8>;
      nTupIns: Nullable<PgCatalog.Types.Int8>;
      nTupUpd: Nullable<PgCatalog.Types.Int8>;
      nTupDel: Nullable<PgCatalog.Types.Int8>;
      nTupHotUpd: Nullable<PgCatalog.Types.Int8>;
      nTupNewpageUpd: Nullable<PgCatalog.Types.Int8>;
    };

    export type PgStatXactUserFunctions = {
      funcid: Nullable<PgCatalog.Types.Oid>;
      schemaname: Nullable<PgCatalog.Types.Name>;
      funcname: Nullable<PgCatalog.Types.Name>;
      calls: Nullable<PgCatalog.Types.Int8>;
      totalTime: Nullable<PgCatalog.Types.Float8>;
      selfTime: Nullable<PgCatalog.Types.Float8>;
    };

    export type PgStatXactUserTables = {
      relid: Nullable<PgCatalog.Types.Oid>;
      schemaname: Nullable<PgCatalog.Types.Name>;
      relname: Nullable<PgCatalog.Types.Name>;
      seqScan: Nullable<PgCatalog.Types.Int8>;
      seqTupRead: Nullable<PgCatalog.Types.Int8>;
      idxScan: Nullable<PgCatalog.Types.Int8>;
      idxTupFetch: Nullable<PgCatalog.Types.Int8>;
      nTupIns: Nullable<PgCatalog.Types.Int8>;
      nTupUpd: Nullable<PgCatalog.Types.Int8>;
      nTupDel: Nullable<PgCatalog.Types.Int8>;
      nTupHotUpd: Nullable<PgCatalog.Types.Int8>;
      nTupNewpageUpd: Nullable<PgCatalog.Types.Int8>;
    };

    export type PgStatioAllIndexes = {
      relid: Nullable<PgCatalog.Types.Oid>;
      indexrelid: Nullable<PgCatalog.Types.Oid>;
      schemaname: Nullable<PgCatalog.Types.Name>;
      relname: Nullable<PgCatalog.Types.Name>;
      indexrelname: Nullable<PgCatalog.Types.Name>;
      idxBlksRead: Nullable<PgCatalog.Types.Int8>;
      idxBlksHit: Nullable<PgCatalog.Types.Int8>;
    };

    export type PgStatioAllSequences = {
      relid: Nullable<PgCatalog.Types.Oid>;
      schemaname: Nullable<PgCatalog.Types.Name>;
      relname: Nullable<PgCatalog.Types.Name>;
      blksRead: Nullable<PgCatalog.Types.Int8>;
      blksHit: Nullable<PgCatalog.Types.Int8>;
    };

    export type PgStatioAllTables = {
      relid: Nullable<PgCatalog.Types.Oid>;
      schemaname: Nullable<PgCatalog.Types.Name>;
      relname: Nullable<PgCatalog.Types.Name>;
      heapBlksRead: Nullable<PgCatalog.Types.Int8>;
      heapBlksHit: Nullable<PgCatalog.Types.Int8>;
      idxBlksRead: Nullable<PgCatalog.Types.Int8>;
      idxBlksHit: Nullable<PgCatalog.Types.Int8>;
      toastBlksRead: Nullable<PgCatalog.Types.Int8>;
      toastBlksHit: Nullable<PgCatalog.Types.Int8>;
      tidxBlksRead: Nullable<PgCatalog.Types.Int8>;
      tidxBlksHit: Nullable<PgCatalog.Types.Int8>;
    };

    export type PgStatioSysIndexes = {
      relid: Nullable<PgCatalog.Types.Oid>;
      indexrelid: Nullable<PgCatalog.Types.Oid>;
      schemaname: Nullable<PgCatalog.Types.Name>;
      relname: Nullable<PgCatalog.Types.Name>;
      indexrelname: Nullable<PgCatalog.Types.Name>;
      idxBlksRead: Nullable<PgCatalog.Types.Int8>;
      idxBlksHit: Nullable<PgCatalog.Types.Int8>;
    };

    export type PgStatioSysSequences = {
      relid: Nullable<PgCatalog.Types.Oid>;
      schemaname: Nullable<PgCatalog.Types.Name>;
      relname: Nullable<PgCatalog.Types.Name>;
      blksRead: Nullable<PgCatalog.Types.Int8>;
      blksHit: Nullable<PgCatalog.Types.Int8>;
    };

    export type PgStatioSysTables = {
      relid: Nullable<PgCatalog.Types.Oid>;
      schemaname: Nullable<PgCatalog.Types.Name>;
      relname: Nullable<PgCatalog.Types.Name>;
      heapBlksRead: Nullable<PgCatalog.Types.Int8>;
      heapBlksHit: Nullable<PgCatalog.Types.Int8>;
      idxBlksRead: Nullable<PgCatalog.Types.Int8>;
      idxBlksHit: Nullable<PgCatalog.Types.Int8>;
      toastBlksRead: Nullable<PgCatalog.Types.Int8>;
      toastBlksHit: Nullable<PgCatalog.Types.Int8>;
      tidxBlksRead: Nullable<PgCatalog.Types.Int8>;
      tidxBlksHit: Nullable<PgCatalog.Types.Int8>;
    };

    export type PgStatioUserIndexes = {
      relid: Nullable<PgCatalog.Types.Oid>;
      indexrelid: Nullable<PgCatalog.Types.Oid>;
      schemaname: Nullable<PgCatalog.Types.Name>;
      relname: Nullable<PgCatalog.Types.Name>;
      indexrelname: Nullable<PgCatalog.Types.Name>;
      idxBlksRead: Nullable<PgCatalog.Types.Int8>;
      idxBlksHit: Nullable<PgCatalog.Types.Int8>;
    };

    export type PgStatioUserSequences = {
      relid: Nullable<PgCatalog.Types.Oid>;
      schemaname: Nullable<PgCatalog.Types.Name>;
      relname: Nullable<PgCatalog.Types.Name>;
      blksRead: Nullable<PgCatalog.Types.Int8>;
      blksHit: Nullable<PgCatalog.Types.Int8>;
    };

    export type PgStatioUserTables = {
      relid: Nullable<PgCatalog.Types.Oid>;
      schemaname: Nullable<PgCatalog.Types.Name>;
      relname: Nullable<PgCatalog.Types.Name>;
      heapBlksRead: Nullable<PgCatalog.Types.Int8>;
      heapBlksHit: Nullable<PgCatalog.Types.Int8>;
      idxBlksRead: Nullable<PgCatalog.Types.Int8>;
      idxBlksHit: Nullable<PgCatalog.Types.Int8>;
      toastBlksRead: Nullable<PgCatalog.Types.Int8>;
      toastBlksHit: Nullable<PgCatalog.Types.Int8>;
      tidxBlksRead: Nullable<PgCatalog.Types.Int8>;
      tidxBlksHit: Nullable<PgCatalog.Types.Int8>;
    };

    export type PgStatistic = {
      starelid: PgCatalog.Types.Oid;
      staattnum: PgCatalog.Types.Int2;
      stainherit: PgCatalog.Types.Bool;
      stanullfrac: PgCatalog.Types.Float4;
      stawidth: PgCatalog.Types.Int4;
      stadistinct: PgCatalog.Types.Float4;
      stakind1: PgCatalog.Types.Int2;
      stakind2: PgCatalog.Types.Int2;
      stakind3: PgCatalog.Types.Int2;
      stakind4: PgCatalog.Types.Int2;
      stakind5: PgCatalog.Types.Int2;
      staop1: PgCatalog.Types.Oid;
      staop2: PgCatalog.Types.Oid;
      staop3: PgCatalog.Types.Oid;
      staop4: PgCatalog.Types.Oid;
      staop5: PgCatalog.Types.Oid;
      stacoll1: PgCatalog.Types.Oid;
      stacoll2: PgCatalog.Types.Oid;
      stacoll3: PgCatalog.Types.Oid;
      stacoll4: PgCatalog.Types.Oid;
      stacoll5: PgCatalog.Types.Oid;
      stanumbers1: PgCatalog.Types.Float4Array;
      stanumbers2: PgCatalog.Types.Float4Array;
      stanumbers3: PgCatalog.Types.Float4Array;
      stanumbers4: PgCatalog.Types.Float4Array;
      stanumbers5: PgCatalog.Types.Float4Array;
      stavalues1: Nullable<PgCatalog.Types.Anyarray>;
      stavalues2: Nullable<PgCatalog.Types.Anyarray>;
      stavalues3: Nullable<PgCatalog.Types.Anyarray>;
      stavalues4: Nullable<PgCatalog.Types.Anyarray>;
      stavalues5: Nullable<PgCatalog.Types.Anyarray>;
    };

    export type PgStatisticExt = {
      oid: PgCatalog.Types.Oid;
      stxrelid: PgCatalog.Types.Oid;
      stxname: PgCatalog.Types.Name;
      stxnamespace: PgCatalog.Types.Oid;
      stxowner: PgCatalog.Types.Oid;
      stxstattarget: PgCatalog.Types.Int4;
      stxkeys: PgCatalog.Types.Int2vector;
      stxkind: PgCatalog.Types.CharArray;
      stxexprs: Nullable<PgCatalog.Types.PgNodeTree>;
    };

    export type PgStatisticExtData = {
      stxoid: PgCatalog.Types.Oid;
      stxdinherit: PgCatalog.Types.Bool;
      stxdndistinct: Nullable<PgCatalog.Types.PgNdistinct>;
      stxddependencies: Nullable<PgCatalog.Types.PgDependencies>;
      stxdmcv: Nullable<PgCatalog.Types.PgMcvList>;
      stxdexpr: PgCatalog.Types.PgStatisticArray;
    };

    export type PgStats = {
      schemaname: Nullable<PgCatalog.Types.Name>;
      tablename: Nullable<PgCatalog.Types.Name>;
      attname: Nullable<PgCatalog.Types.Name>;
      inherited: Nullable<PgCatalog.Types.Bool>;
      nullFrac: Nullable<PgCatalog.Types.Float4>;
      avgWidth: Nullable<PgCatalog.Types.Int4>;
      nDistinct: Nullable<PgCatalog.Types.Float4>;
      mostCommonVals: Nullable<PgCatalog.Types.Anyarray>;
      mostCommonFreqs: PgCatalog.Types.Float4Array;
      histogramBounds: Nullable<PgCatalog.Types.Anyarray>;
      correlation: Nullable<PgCatalog.Types.Float4>;
      mostCommonElems: Nullable<PgCatalog.Types.Anyarray>;
      mostCommonElemFreqs: PgCatalog.Types.Float4Array;
      elemCountHistogram: PgCatalog.Types.Float4Array;
    };

    export type PgStatsExt = {
      schemaname: Nullable<PgCatalog.Types.Name>;
      tablename: Nullable<PgCatalog.Types.Name>;
      statisticsSchemaname: Nullable<PgCatalog.Types.Name>;
      statisticsName: Nullable<PgCatalog.Types.Name>;
      statisticsOwner: Nullable<PgCatalog.Types.Name>;
      attnames: PgCatalog.Types.NameArray;
      exprs: PgCatalog.Types.TextArray;
      kinds: PgCatalog.Types.CharArray;
      inherited: Nullable<PgCatalog.Types.Bool>;
      nDistinct: Nullable<PgCatalog.Types.PgNdistinct>;
      dependencies: Nullable<PgCatalog.Types.PgDependencies>;
      mostCommonVals: PgCatalog.Types.TextArray;
      mostCommonValNulls: PgCatalog.Types.BoolArray;
      mostCommonFreqs: PgCatalog.Types.Float8Array;
      mostCommonBaseFreqs: PgCatalog.Types.Float8Array;
    };

    export type PgStatsExtExprs = {
      schemaname: Nullable<PgCatalog.Types.Name>;
      tablename: Nullable<PgCatalog.Types.Name>;
      statisticsSchemaname: Nullable<PgCatalog.Types.Name>;
      statisticsName: Nullable<PgCatalog.Types.Name>;
      statisticsOwner: Nullable<PgCatalog.Types.Name>;
      expr: Nullable<PgCatalog.Types.Text>;
      inherited: Nullable<PgCatalog.Types.Bool>;
      nullFrac: Nullable<PgCatalog.Types.Float4>;
      avgWidth: Nullable<PgCatalog.Types.Int4>;
      nDistinct: Nullable<PgCatalog.Types.Float4>;
      mostCommonVals: Nullable<PgCatalog.Types.Anyarray>;
      mostCommonFreqs: PgCatalog.Types.Float4Array;
      histogramBounds: Nullable<PgCatalog.Types.Anyarray>;
      correlation: Nullable<PgCatalog.Types.Float4>;
      mostCommonElems: Nullable<PgCatalog.Types.Anyarray>;
      mostCommonElemFreqs: PgCatalog.Types.Float4Array;
      elemCountHistogram: PgCatalog.Types.Float4Array;
    };

    export type PgSubscription = {
      oid: PgCatalog.Types.Oid;
      subdbid: PgCatalog.Types.Oid;
      subskiplsn: PgCatalog.Types.PgLsn;
      subname: PgCatalog.Types.Name;
      subowner: PgCatalog.Types.Oid;
      subenabled: PgCatalog.Types.Bool;
      subbinary: PgCatalog.Types.Bool;
      substream: PgCatalog.Types.Char;
      subtwophasestate: PgCatalog.Types.Char;
      subdisableonerr: PgCatalog.Types.Bool;
      subpasswordrequired: PgCatalog.Types.Bool;
      subrunasowner: PgCatalog.Types.Bool;
      subconninfo: PgCatalog.Types.Text;
      subslotname: Nullable<PgCatalog.Types.Name>;
      subsynccommit: PgCatalog.Types.Text;
      subpublications: PgCatalog.Types.TextArray;
      suborigin: Nullable<PgCatalog.Types.Text>;
    };

    export type PgSubscriptionRel = {
      srsubid: PgCatalog.Types.Oid;
      srrelid: PgCatalog.Types.Oid;
      srsubstate: PgCatalog.Types.Char;
      srsublsn: Nullable<PgCatalog.Types.PgLsn>;
    };

    export type PgTables = {
      schemaname: Nullable<PgCatalog.Types.Name>;
      tablename: Nullable<PgCatalog.Types.Name>;
      tableowner: Nullable<PgCatalog.Types.Name>;
      tablespace: Nullable<PgCatalog.Types.Name>;
      hasindexes: Nullable<PgCatalog.Types.Bool>;
      hasrules: Nullable<PgCatalog.Types.Bool>;
      hastriggers: Nullable<PgCatalog.Types.Bool>;
      rowsecurity: Nullable<PgCatalog.Types.Bool>;
    };

    export type PgTablespace = {
      oid: PgCatalog.Types.Oid;
      spcname: PgCatalog.Types.Name;
      spcowner: PgCatalog.Types.Oid;
      spcacl: PgCatalog.Types.AclitemArray;
      spcoptions: PgCatalog.Types.TextArray;
    };

    export type PgTimezoneAbbrevs = {
      abbrev: Nullable<PgCatalog.Types.Text>;
      utcOffset: Nullable<PgCatalog.Types.Interval>;
      isDst: Nullable<PgCatalog.Types.Bool>;
    };

    export type PgTimezoneNames = {
      name: Nullable<PgCatalog.Types.Text>;
      abbrev: Nullable<PgCatalog.Types.Text>;
      utcOffset: Nullable<PgCatalog.Types.Interval>;
      isDst: Nullable<PgCatalog.Types.Bool>;
    };

    export type PgTransform = {
      oid: PgCatalog.Types.Oid;
      trftype: PgCatalog.Types.Oid;
      trflang: PgCatalog.Types.Oid;
      trffromsql: PgCatalog.Types.Regproc;
      trftosql: PgCatalog.Types.Regproc;
    };

    export type PgTrigger = {
      oid: PgCatalog.Types.Oid;
      tgrelid: PgCatalog.Types.Oid;
      tgparentid: PgCatalog.Types.Oid;
      tgname: PgCatalog.Types.Name;
      tgfoid: PgCatalog.Types.Oid;
      tgtype: PgCatalog.Types.Int2;
      tgenabled: PgCatalog.Types.Char;
      tgisinternal: PgCatalog.Types.Bool;
      tgconstrrelid: PgCatalog.Types.Oid;
      tgconstrindid: PgCatalog.Types.Oid;
      tgconstraint: PgCatalog.Types.Oid;
      tgdeferrable: PgCatalog.Types.Bool;
      tginitdeferred: PgCatalog.Types.Bool;
      tgnargs: PgCatalog.Types.Int2;
      tgattr: PgCatalog.Types.Int2vector;
      tgargs: PgCatalog.Types.Bytea;
      tgqual: Nullable<PgCatalog.Types.PgNodeTree>;
      tgoldtable: Nullable<PgCatalog.Types.Name>;
      tgnewtable: Nullable<PgCatalog.Types.Name>;
    };

    export type PgTsConfig = {
      oid: PgCatalog.Types.Oid;
      cfgname: PgCatalog.Types.Name;
      cfgnamespace: PgCatalog.Types.Oid;
      cfgowner: PgCatalog.Types.Oid;
      cfgparser: PgCatalog.Types.Oid;
    };

    export type PgTsConfigMap = {
      mapcfg: PgCatalog.Types.Oid;
      maptokentype: PgCatalog.Types.Int4;
      mapseqno: PgCatalog.Types.Int4;
      mapdict: PgCatalog.Types.Oid;
    };

    export type PgTsDict = {
      oid: PgCatalog.Types.Oid;
      dictname: PgCatalog.Types.Name;
      dictnamespace: PgCatalog.Types.Oid;
      dictowner: PgCatalog.Types.Oid;
      dicttemplate: PgCatalog.Types.Oid;
      dictinitoption: Nullable<PgCatalog.Types.Text>;
    };

    export type PgTsParser = {
      oid: PgCatalog.Types.Oid;
      prsname: PgCatalog.Types.Name;
      prsnamespace: PgCatalog.Types.Oid;
      prsstart: PgCatalog.Types.Regproc;
      prstoken: PgCatalog.Types.Regproc;
      prsend: PgCatalog.Types.Regproc;
      prsheadline: PgCatalog.Types.Regproc;
      prslextype: PgCatalog.Types.Regproc;
    };

    export type PgTsTemplate = {
      oid: PgCatalog.Types.Oid;
      tmplname: PgCatalog.Types.Name;
      tmplnamespace: PgCatalog.Types.Oid;
      tmplinit: PgCatalog.Types.Regproc;
      tmpllexize: PgCatalog.Types.Regproc;
    };

    export type PgType = {
      oid: PgCatalog.Types.Oid;
      typname: PgCatalog.Types.Name;
      typnamespace: PgCatalog.Types.Oid;
      typowner: PgCatalog.Types.Oid;
      typlen: PgCatalog.Types.Int2;
      typbyval: PgCatalog.Types.Bool;
      typtype: PgCatalog.Types.Char;
      typcategory: PgCatalog.Types.Char;
      typispreferred: PgCatalog.Types.Bool;
      typisdefined: PgCatalog.Types.Bool;
      typdelim: PgCatalog.Types.Char;
      typrelid: PgCatalog.Types.Oid;
      typsubscript: PgCatalog.Types.Regproc;
      typelem: PgCatalog.Types.Oid;
      typarray: PgCatalog.Types.Oid;
      typinput: PgCatalog.Types.Regproc;
      typoutput: PgCatalog.Types.Regproc;
      typreceive: PgCatalog.Types.Regproc;
      typsend: PgCatalog.Types.Regproc;
      typmodin: PgCatalog.Types.Regproc;
      typmodout: PgCatalog.Types.Regproc;
      typanalyze: PgCatalog.Types.Regproc;
      typalign: PgCatalog.Types.Char;
      typstorage: PgCatalog.Types.Char;
      typnotnull: PgCatalog.Types.Bool;
      typbasetype: PgCatalog.Types.Oid;
      typtypmod: PgCatalog.Types.Int4;
      typndims: PgCatalog.Types.Int4;
      typcollation: PgCatalog.Types.Oid;
      typdefaultbin: Nullable<PgCatalog.Types.PgNodeTree>;
      typdefault: Nullable<PgCatalog.Types.Text>;
      typacl: PgCatalog.Types.AclitemArray;
    };

    export type PgUser = {
      usename: Nullable<PgCatalog.Types.Name>;
      usesysid: Nullable<PgCatalog.Types.Oid>;
      usecreatedb: Nullable<PgCatalog.Types.Bool>;
      usesuper: Nullable<PgCatalog.Types.Bool>;
      userepl: Nullable<PgCatalog.Types.Bool>;
      usebypassrls: Nullable<PgCatalog.Types.Bool>;
      passwd: Nullable<PgCatalog.Types.Text>;
      valuntil: Nullable<PgCatalog.Types.Timestamptz>;
      useconfig: PgCatalog.Types.TextArray;
    };

    export type PgUserMapping = {
      oid: PgCatalog.Types.Oid;
      umuser: PgCatalog.Types.Oid;
      umserver: PgCatalog.Types.Oid;
      umoptions: PgCatalog.Types.TextArray;
    };

    export type PgUserMappings = {
      umid: Nullable<PgCatalog.Types.Oid>;
      srvid: Nullable<PgCatalog.Types.Oid>;
      srvname: Nullable<PgCatalog.Types.Name>;
      umuser: Nullable<PgCatalog.Types.Oid>;
      usename: Nullable<PgCatalog.Types.Name>;
      umoptions: PgCatalog.Types.TextArray;
    };

    export type PgViews = {
      schemaname: Nullable<PgCatalog.Types.Name>;
      viewname: Nullable<PgCatalog.Types.Name>;
      viewowner: Nullable<PgCatalog.Types.Name>;
      definition: Nullable<PgCatalog.Types.Text>;
    };

    export type Point = {
      x: number;
      y: number;
    };

    export type Polygon = Array<Point>;

    export type Record = unknown;

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

    export type TableAmHandler = unknown;

    export type Text = string;

    export type Tid = {
      blockNumber: number;
      tupleIndex: number;
    };

    export type Time = JsDate;

    export type Timestamp = JsDate;

    export type Timestamptz = JsDate;

    export type Timetz = JsDate;

    export type Trigger = unknown;

    export type TsmHandler = unknown;

    export type Tsmultirange = unknown;

    export type Tsquery = string;

    export type Tsrange = [
      PgCatalog.Types.Timestamp,
      PgCatalog.Types.Timestamp,
    ];

    export type Tstzmultirange = unknown;

    export type Tstzrange = [
      PgCatalog.Types.Timestamptz,
      PgCatalog.Types.Timestamptz,
    ];

    export type Tsvector = string;

    /**
     * FIXME: txid_snapshot did not resolve to a base type
     */
    export type TxidSnapshot = string;

    export type Unknown = unknown;

    export type Uuid = UUID;

    export type Varbit = boolean;

    export type Varchar = string;

    export type Void = unknown;

    export type Xid = number;

    export type Xid8 = number;

    export type Xml = string;
  }
  export namespace Procedures {}
  export namespace Tables {
    export namespace PgStatistic {
      export type Record = {
        starelid: PgCatalog.Types.PgStatistic["starelid"];
        staattnum: PgCatalog.Types.PgStatistic["staattnum"];
        stainherit: PgCatalog.Types.PgStatistic["stainherit"];
        stanullfrac: PgCatalog.Types.PgStatistic["stanullfrac"];
        stawidth: PgCatalog.Types.PgStatistic["stawidth"];
        stadistinct: PgCatalog.Types.PgStatistic["stadistinct"];
        stakind1: PgCatalog.Types.PgStatistic["stakind1"];
        stakind2: PgCatalog.Types.PgStatistic["stakind2"];
        stakind3: PgCatalog.Types.PgStatistic["stakind3"];
        stakind4: PgCatalog.Types.PgStatistic["stakind4"];
        stakind5: PgCatalog.Types.PgStatistic["stakind5"];
        staop1: PgCatalog.Types.PgStatistic["staop1"];
        staop2: PgCatalog.Types.PgStatistic["staop2"];
        staop3: PgCatalog.Types.PgStatistic["staop3"];
        staop4: PgCatalog.Types.PgStatistic["staop4"];
        staop5: PgCatalog.Types.PgStatistic["staop5"];
        stacoll1: PgCatalog.Types.PgStatistic["stacoll1"];
        stacoll2: PgCatalog.Types.PgStatistic["stacoll2"];
        stacoll3: PgCatalog.Types.PgStatistic["stacoll3"];
        stacoll4: PgCatalog.Types.PgStatistic["stacoll4"];
        stacoll5: PgCatalog.Types.PgStatistic["stacoll5"];
        stanumbers1: PgCatalog.Types.PgStatistic["stanumbers1"] | null;
        stanumbers2: PgCatalog.Types.PgStatistic["stanumbers2"] | null;
        stanumbers3: PgCatalog.Types.PgStatistic["stanumbers3"] | null;
        stanumbers4: PgCatalog.Types.PgStatistic["stanumbers4"] | null;
        stanumbers5: PgCatalog.Types.PgStatistic["stanumbers5"] | null;
        stavalues1: PgCatalog.Types.PgStatistic["stavalues1"] | null;
        stavalues2: PgCatalog.Types.PgStatistic["stavalues2"] | null;
        stavalues3: PgCatalog.Types.PgStatistic["stavalues3"] | null;
        stavalues4: PgCatalog.Types.PgStatistic["stavalues4"] | null;
        stavalues5: PgCatalog.Types.PgStatistic["stavalues5"] | null;
      };
      export function emptyRecord() {
        return {
          starelid: undefined,
          staattnum: undefined,
          stainherit: undefined,
          stanullfrac: undefined,
          stawidth: undefined,
          stadistinct: undefined,
          stakind1: undefined,
          stakind2: undefined,
          stakind3: undefined,
          stakind4: undefined,
          stakind5: undefined,
          staop1: undefined,
          staop2: undefined,
          staop3: undefined,
          staop4: undefined,
          staop5: undefined,
          stacoll1: undefined,
          stacoll2: undefined,
          stacoll3: undefined,
          stacoll4: undefined,
          stacoll5: undefined,
          stanumbers1: undefined,
          stanumbers2: undefined,
          stanumbers3: undefined,
          stanumbers4: undefined,
          stanumbers5: undefined,
          stavalues1: undefined,
          stavalues2: undefined,
          stavalues3: undefined,
          stavalues4: undefined,
          stavalues5: undefined,
        };
      }
      export type ByStarelidStaattnumStainherit = {
        starelid: PgCatalog.Types.Oid;
        staattnum: PgCatalog.Types.Int2;
        stainherit: PgCatalog.Types.Bool;
      };
      export type ByPrimaryKey = ByStarelidStaattnumStainherit;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgType {
      export type Record = {
        oid: PgCatalog.Types.PgType["oid"];
        typname: PgCatalog.Types.PgType["typname"];
        typnamespace: PgCatalog.Types.PgType["typnamespace"];
        typowner: PgCatalog.Types.PgType["typowner"];
        typlen: PgCatalog.Types.PgType["typlen"];
        typbyval: PgCatalog.Types.PgType["typbyval"];
        typtype: PgCatalog.Types.PgType["typtype"];
        typcategory: PgCatalog.Types.PgType["typcategory"];
        typispreferred: PgCatalog.Types.PgType["typispreferred"];
        typisdefined: PgCatalog.Types.PgType["typisdefined"];
        typdelim: PgCatalog.Types.PgType["typdelim"];
        typrelid: PgCatalog.Types.PgType["typrelid"];
        typsubscript: PgCatalog.Types.PgType["typsubscript"];
        typelem: PgCatalog.Types.PgType["typelem"];
        typarray: PgCatalog.Types.PgType["typarray"];
        typinput: PgCatalog.Types.PgType["typinput"];
        typoutput: PgCatalog.Types.PgType["typoutput"];
        typreceive: PgCatalog.Types.PgType["typreceive"];
        typsend: PgCatalog.Types.PgType["typsend"];
        typmodin: PgCatalog.Types.PgType["typmodin"];
        typmodout: PgCatalog.Types.PgType["typmodout"];
        typanalyze: PgCatalog.Types.PgType["typanalyze"];
        typalign: PgCatalog.Types.PgType["typalign"];
        typstorage: PgCatalog.Types.PgType["typstorage"];
        typnotnull: PgCatalog.Types.PgType["typnotnull"];
        typbasetype: PgCatalog.Types.PgType["typbasetype"];
        typtypmod: PgCatalog.Types.PgType["typtypmod"];
        typndims: PgCatalog.Types.PgType["typndims"];
        typcollation: PgCatalog.Types.PgType["typcollation"];
        typdefaultbin: PgCatalog.Types.PgType["typdefaultbin"] | null;
        typdefault: PgCatalog.Types.PgType["typdefault"] | null;
        typacl: PgCatalog.Types.PgType["typacl"] | null;
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          typname: undefined,
          typnamespace: undefined,
          typowner: undefined,
          typlen: undefined,
          typbyval: undefined,
          typtype: undefined,
          typcategory: undefined,
          typispreferred: undefined,
          typisdefined: undefined,
          typdelim: undefined,
          typrelid: undefined,
          typsubscript: undefined,
          typelem: undefined,
          typarray: undefined,
          typinput: undefined,
          typoutput: undefined,
          typreceive: undefined,
          typsend: undefined,
          typmodin: undefined,
          typmodout: undefined,
          typanalyze: undefined,
          typalign: undefined,
          typstorage: undefined,
          typnotnull: undefined,
          typbasetype: undefined,
          typtypmod: undefined,
          typndims: undefined,
          typcollation: undefined,
          typdefaultbin: undefined,
          typdefault: undefined,
          typacl: undefined,
        };
      }
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;
      export type ByTypnameTypnamespace = {
        typname: PgCatalog.Types.Cstring;
        typnamespace: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgForeignTable {
      export type Record = {
        ftrelid: PgCatalog.Types.PgForeignTable["ftrelid"];
        ftserver: PgCatalog.Types.PgForeignTable["ftserver"];
        ftoptions: PgCatalog.Types.PgForeignTable["ftoptions"] | null;
      };
      export function emptyRecord() {
        return {
          ftrelid: undefined,
          ftserver: undefined,
          ftoptions: undefined,
        };
      }
      export type ByFtrelid = {
        ftrelid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByFtrelid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgAuthid {
      export type Record = {
        oid: PgCatalog.Types.PgAuthid["oid"];
        rolname: PgCatalog.Types.PgAuthid["rolname"];
        rolsuper: PgCatalog.Types.PgAuthid["rolsuper"];
        rolinherit: PgCatalog.Types.PgAuthid["rolinherit"];
        rolcreaterole: PgCatalog.Types.PgAuthid["rolcreaterole"];
        rolcreatedb: PgCatalog.Types.PgAuthid["rolcreatedb"];
        rolcanlogin: PgCatalog.Types.PgAuthid["rolcanlogin"];
        rolreplication: PgCatalog.Types.PgAuthid["rolreplication"];
        rolbypassrls: PgCatalog.Types.PgAuthid["rolbypassrls"];
        rolconnlimit: PgCatalog.Types.PgAuthid["rolconnlimit"];
        rolpassword: PgCatalog.Types.PgAuthid["rolpassword"] | null;
        rolvaliduntil: PgCatalog.Types.PgAuthid["rolvaliduntil"] | null;
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          rolname: undefined,
          rolsuper: undefined,
          rolinherit: undefined,
          rolcreaterole: undefined,
          rolcreatedb: undefined,
          rolcanlogin: undefined,
          rolreplication: undefined,
          rolbypassrls: undefined,
          rolconnlimit: undefined,
          rolpassword: undefined,
          rolvaliduntil: undefined,
        };
      }
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;
      export type ByRolname = {
        rolname: PgCatalog.Types.Cstring;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgStatisticExtData {
      export type Record = {
        stxoid: PgCatalog.Types.PgStatisticExtData["stxoid"];
        stxdinherit: PgCatalog.Types.PgStatisticExtData["stxdinherit"];
        stxdndistinct:
          | PgCatalog.Types.PgStatisticExtData["stxdndistinct"]
          | null;
        stxddependencies:
          | PgCatalog.Types.PgStatisticExtData["stxddependencies"]
          | null;
        stxdmcv: PgCatalog.Types.PgStatisticExtData["stxdmcv"] | null;
        stxdexpr: PgCatalog.Types.PgStatisticExtData["stxdexpr"] | null;
      };
      export function emptyRecord() {
        return {
          stxoid: undefined,
          stxdinherit: undefined,
          stxdndistinct: undefined,
          stxddependencies: undefined,
          stxdmcv: undefined,
          stxdexpr: undefined,
        };
      }
      export type ByStxoidStxdinherit = {
        stxoid: PgCatalog.Types.Oid;
        stxdinherit: PgCatalog.Types.Bool;
      };
      export type ByPrimaryKey = ByStxoidStxdinherit;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgUserMapping {
      export type Record = {
        oid: PgCatalog.Types.PgUserMapping["oid"];
        umuser: PgCatalog.Types.PgUserMapping["umuser"];
        umserver: PgCatalog.Types.PgUserMapping["umserver"];
        umoptions: PgCatalog.Types.PgUserMapping["umoptions"] | null;
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          umuser: undefined,
          umserver: undefined,
          umoptions: undefined,
        };
      }
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;
      export type ByUmuserUmserver = {
        umuser: PgCatalog.Types.Oid;
        umserver: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgSubscription {
      export type Record = {
        oid: PgCatalog.Types.PgSubscription["oid"];
        subdbid: PgCatalog.Types.PgSubscription["subdbid"];
        subskiplsn: PgCatalog.Types.PgSubscription["subskiplsn"];
        subname: PgCatalog.Types.PgSubscription["subname"];
        subowner: PgCatalog.Types.PgSubscription["subowner"];
        subenabled: PgCatalog.Types.PgSubscription["subenabled"];
        subbinary: PgCatalog.Types.PgSubscription["subbinary"];
        substream: PgCatalog.Types.PgSubscription["substream"];
        subtwophasestate: PgCatalog.Types.PgSubscription["subtwophasestate"];
        subdisableonerr: PgCatalog.Types.PgSubscription["subdisableonerr"];
        subpasswordrequired: PgCatalog.Types.PgSubscription["subpasswordrequired"];
        subrunasowner: PgCatalog.Types.PgSubscription["subrunasowner"];
        subconninfo: PgCatalog.Types.PgSubscription["subconninfo"];
        subslotname: PgCatalog.Types.PgSubscription["subslotname"] | null;
        subsynccommit: PgCatalog.Types.PgSubscription["subsynccommit"];
        subpublications: PgCatalog.Types.PgSubscription["subpublications"];
        suborigin: PgCatalog.Types.PgSubscription["suborigin"] | null;
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          subdbid: undefined,
          subskiplsn: undefined,
          subname: undefined,
          subowner: undefined,
          subenabled: undefined,
          subbinary: undefined,
          substream: undefined,
          subtwophasestate: undefined,
          subdisableonerr: undefined,
          subpasswordrequired: undefined,
          subrunasowner: undefined,
          subconninfo: undefined,
          subslotname: undefined,
          subsynccommit: undefined,
          subpublications: undefined,
          suborigin: undefined,
        };
      }
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;
      export type BySubdbidSubname = {
        subdbid: PgCatalog.Types.Oid;
        subname: PgCatalog.Types.Cstring;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgAttribute {
      export type Record = {
        attrelid: PgCatalog.Types.PgAttribute["attrelid"];
        attname: PgCatalog.Types.PgAttribute["attname"];
        atttypid: PgCatalog.Types.PgAttribute["atttypid"];
        attlen: PgCatalog.Types.PgAttribute["attlen"];
        attnum: PgCatalog.Types.PgAttribute["attnum"];
        attcacheoff: PgCatalog.Types.PgAttribute["attcacheoff"];
        atttypmod: PgCatalog.Types.PgAttribute["atttypmod"];
        attndims: PgCatalog.Types.PgAttribute["attndims"];
        attbyval: PgCatalog.Types.PgAttribute["attbyval"];
        attalign: PgCatalog.Types.PgAttribute["attalign"];
        attstorage: PgCatalog.Types.PgAttribute["attstorage"];
        attcompression: PgCatalog.Types.PgAttribute["attcompression"];
        attnotnull: PgCatalog.Types.PgAttribute["attnotnull"];
        atthasdef: PgCatalog.Types.PgAttribute["atthasdef"];
        atthasmissing: PgCatalog.Types.PgAttribute["atthasmissing"];
        attidentity: PgCatalog.Types.PgAttribute["attidentity"];
        attgenerated: PgCatalog.Types.PgAttribute["attgenerated"];
        attisdropped: PgCatalog.Types.PgAttribute["attisdropped"];
        attislocal: PgCatalog.Types.PgAttribute["attislocal"];
        attinhcount: PgCatalog.Types.PgAttribute["attinhcount"];
        attstattarget: PgCatalog.Types.PgAttribute["attstattarget"];
        attcollation: PgCatalog.Types.PgAttribute["attcollation"];
        attacl: PgCatalog.Types.PgAttribute["attacl"] | null;
        attoptions: PgCatalog.Types.PgAttribute["attoptions"] | null;
        attfdwoptions: PgCatalog.Types.PgAttribute["attfdwoptions"] | null;
        attmissingval: PgCatalog.Types.PgAttribute["attmissingval"] | null;
      };
      export function emptyRecord() {
        return {
          attrelid: undefined,
          attname: undefined,
          atttypid: undefined,
          attlen: undefined,
          attnum: undefined,
          attcacheoff: undefined,
          atttypmod: undefined,
          attndims: undefined,
          attbyval: undefined,
          attalign: undefined,
          attstorage: undefined,
          attcompression: undefined,
          attnotnull: undefined,
          atthasdef: undefined,
          atthasmissing: undefined,
          attidentity: undefined,
          attgenerated: undefined,
          attisdropped: undefined,
          attislocal: undefined,
          attinhcount: undefined,
          attstattarget: undefined,
          attcollation: undefined,
          attacl: undefined,
          attoptions: undefined,
          attfdwoptions: undefined,
          attmissingval: undefined,
        };
      }
      export type ByAttrelidAttname = {
        attrelid: PgCatalog.Types.Oid;
        attname: PgCatalog.Types.Cstring;
      };

      export type ByAttrelidAttnum = {
        attrelid: PgCatalog.Types.Oid;
        attnum: PgCatalog.Types.Int2;
      };
      export type ByPrimaryKey = ByAttrelidAttnum;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgProc {
      export type Record = {
        oid: PgCatalog.Types.PgProc["oid"];
        proname: PgCatalog.Types.PgProc["proname"];
        pronamespace: PgCatalog.Types.PgProc["pronamespace"];
        proowner: PgCatalog.Types.PgProc["proowner"];
        prolang: PgCatalog.Types.PgProc["prolang"];
        procost: PgCatalog.Types.PgProc["procost"];
        prorows: PgCatalog.Types.PgProc["prorows"];
        provariadic: PgCatalog.Types.PgProc["provariadic"];
        prosupport: PgCatalog.Types.PgProc["prosupport"];
        prokind: PgCatalog.Types.PgProc["prokind"];
        prosecdef: PgCatalog.Types.PgProc["prosecdef"];
        proleakproof: PgCatalog.Types.PgProc["proleakproof"];
        proisstrict: PgCatalog.Types.PgProc["proisstrict"];
        proretset: PgCatalog.Types.PgProc["proretset"];
        provolatile: PgCatalog.Types.PgProc["provolatile"];
        proparallel: PgCatalog.Types.PgProc["proparallel"];
        pronargs: PgCatalog.Types.PgProc["pronargs"];
        pronargdefaults: PgCatalog.Types.PgProc["pronargdefaults"];
        prorettype: PgCatalog.Types.PgProc["prorettype"];
        proargtypes: PgCatalog.Types.PgProc["proargtypes"];
        proallargtypes: PgCatalog.Types.PgProc["proallargtypes"] | null;
        proargmodes: PgCatalog.Types.PgProc["proargmodes"] | null;
        proargnames: PgCatalog.Types.PgProc["proargnames"] | null;
        proargdefaults: PgCatalog.Types.PgProc["proargdefaults"] | null;
        protrftypes: PgCatalog.Types.PgProc["protrftypes"] | null;
        prosrc: PgCatalog.Types.PgProc["prosrc"];
        probin: PgCatalog.Types.PgProc["probin"] | null;
        prosqlbody: PgCatalog.Types.PgProc["prosqlbody"] | null;
        proconfig: PgCatalog.Types.PgProc["proconfig"] | null;
        proacl: PgCatalog.Types.PgProc["proacl"] | null;
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          proname: undefined,
          pronamespace: undefined,
          proowner: undefined,
          prolang: undefined,
          procost: undefined,
          prorows: undefined,
          provariadic: undefined,
          prosupport: undefined,
          prokind: undefined,
          prosecdef: undefined,
          proleakproof: undefined,
          proisstrict: undefined,
          proretset: undefined,
          provolatile: undefined,
          proparallel: undefined,
          pronargs: undefined,
          pronargdefaults: undefined,
          prorettype: undefined,
          proargtypes: undefined,
          proallargtypes: undefined,
          proargmodes: undefined,
          proargnames: undefined,
          proargdefaults: undefined,
          protrftypes: undefined,
          prosrc: undefined,
          probin: undefined,
          prosqlbody: undefined,
          proconfig: undefined,
          proacl: undefined,
        };
      }
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;
      export type ByPronameProargtypesPronamespace = {
        proname: PgCatalog.Types.Cstring;
        proargtypes: PgCatalog.Types.Oidvector;
        pronamespace: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgClass {
      export type Record = {
        oid: PgCatalog.Types.PgClass["oid"];
        relname: PgCatalog.Types.PgClass["relname"];
        relnamespace: PgCatalog.Types.PgClass["relnamespace"];
        reltype: PgCatalog.Types.PgClass["reltype"];
        reloftype: PgCatalog.Types.PgClass["reloftype"];
        relowner: PgCatalog.Types.PgClass["relowner"];
        relam: PgCatalog.Types.PgClass["relam"];
        relfilenode: PgCatalog.Types.PgClass["relfilenode"];
        reltablespace: PgCatalog.Types.PgClass["reltablespace"];
        relpages: PgCatalog.Types.PgClass["relpages"];
        reltuples: PgCatalog.Types.PgClass["reltuples"];
        relallvisible: PgCatalog.Types.PgClass["relallvisible"];
        reltoastrelid: PgCatalog.Types.PgClass["reltoastrelid"];
        relhasindex: PgCatalog.Types.PgClass["relhasindex"];
        relisshared: PgCatalog.Types.PgClass["relisshared"];
        relpersistence: PgCatalog.Types.PgClass["relpersistence"];
        relkind: PgCatalog.Types.PgClass["relkind"];
        relnatts: PgCatalog.Types.PgClass["relnatts"];
        relchecks: PgCatalog.Types.PgClass["relchecks"];
        relhasrules: PgCatalog.Types.PgClass["relhasrules"];
        relhastriggers: PgCatalog.Types.PgClass["relhastriggers"];
        relhassubclass: PgCatalog.Types.PgClass["relhassubclass"];
        relrowsecurity: PgCatalog.Types.PgClass["relrowsecurity"];
        relforcerowsecurity: PgCatalog.Types.PgClass["relforcerowsecurity"];
        relispopulated: PgCatalog.Types.PgClass["relispopulated"];
        relreplident: PgCatalog.Types.PgClass["relreplident"];
        relispartition: PgCatalog.Types.PgClass["relispartition"];
        relrewrite: PgCatalog.Types.PgClass["relrewrite"];
        relfrozenxid: PgCatalog.Types.PgClass["relfrozenxid"];
        relminmxid: PgCatalog.Types.PgClass["relminmxid"];
        relacl: PgCatalog.Types.PgClass["relacl"] | null;
        reloptions: PgCatalog.Types.PgClass["reloptions"] | null;
        relpartbound: PgCatalog.Types.PgClass["relpartbound"] | null;
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          relname: undefined,
          relnamespace: undefined,
          reltype: undefined,
          reloftype: undefined,
          relowner: undefined,
          relam: undefined,
          relfilenode: undefined,
          reltablespace: undefined,
          relpages: undefined,
          reltuples: undefined,
          relallvisible: undefined,
          reltoastrelid: undefined,
          relhasindex: undefined,
          relisshared: undefined,
          relpersistence: undefined,
          relkind: undefined,
          relnatts: undefined,
          relchecks: undefined,
          relhasrules: undefined,
          relhastriggers: undefined,
          relhassubclass: undefined,
          relrowsecurity: undefined,
          relforcerowsecurity: undefined,
          relispopulated: undefined,
          relreplident: undefined,
          relispartition: undefined,
          relrewrite: undefined,
          relfrozenxid: undefined,
          relminmxid: undefined,
          relacl: undefined,
          reloptions: undefined,
          relpartbound: undefined,
        };
      }
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;
      export type ByRelnameRelnamespace = {
        relname: PgCatalog.Types.Cstring;
        relnamespace: PgCatalog.Types.Oid;
      };

      export type ByReltablespaceRelfilenode = {
        reltablespace: PgCatalog.Types.Oid;
        relfilenode: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgAttrdef {
      export type Record = {
        oid: PgCatalog.Types.PgAttrdef["oid"];
        adrelid: PgCatalog.Types.PgAttrdef["adrelid"];
        adnum: PgCatalog.Types.PgAttrdef["adnum"];
        adbin: PgCatalog.Types.PgAttrdef["adbin"];
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          adrelid: undefined,
          adnum: undefined,
          adbin: undefined,
        };
      }
      export type ByAdrelidAdnum = {
        adrelid: PgCatalog.Types.Oid;
        adnum: PgCatalog.Types.Int2;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgConstraint {
      export type Record = {
        oid: PgCatalog.Types.PgConstraint["oid"];
        conname: PgCatalog.Types.PgConstraint["conname"];
        connamespace: PgCatalog.Types.PgConstraint["connamespace"];
        contype: PgCatalog.Types.PgConstraint["contype"];
        condeferrable: PgCatalog.Types.PgConstraint["condeferrable"];
        condeferred: PgCatalog.Types.PgConstraint["condeferred"];
        convalidated: PgCatalog.Types.PgConstraint["convalidated"];
        conrelid: PgCatalog.Types.PgConstraint["conrelid"];
        contypid: PgCatalog.Types.PgConstraint["contypid"];
        conindid: PgCatalog.Types.PgConstraint["conindid"];
        conparentid: PgCatalog.Types.PgConstraint["conparentid"];
        confrelid: PgCatalog.Types.PgConstraint["confrelid"];
        confupdtype: PgCatalog.Types.PgConstraint["confupdtype"];
        confdeltype: PgCatalog.Types.PgConstraint["confdeltype"];
        confmatchtype: PgCatalog.Types.PgConstraint["confmatchtype"];
        conislocal: PgCatalog.Types.PgConstraint["conislocal"];
        coninhcount: PgCatalog.Types.PgConstraint["coninhcount"];
        connoinherit: PgCatalog.Types.PgConstraint["connoinherit"];
        conkey: PgCatalog.Types.PgConstraint["conkey"] | null;
        confkey: PgCatalog.Types.PgConstraint["confkey"] | null;
        conpfeqop: PgCatalog.Types.PgConstraint["conpfeqop"] | null;
        conppeqop: PgCatalog.Types.PgConstraint["conppeqop"] | null;
        conffeqop: PgCatalog.Types.PgConstraint["conffeqop"] | null;
        confdelsetcols: PgCatalog.Types.PgConstraint["confdelsetcols"] | null;
        conexclop: PgCatalog.Types.PgConstraint["conexclop"] | null;
        conbin: PgCatalog.Types.PgConstraint["conbin"] | null;
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          conname: undefined,
          connamespace: undefined,
          contype: undefined,
          condeferrable: undefined,
          condeferred: undefined,
          convalidated: undefined,
          conrelid: undefined,
          contypid: undefined,
          conindid: undefined,
          conparentid: undefined,
          confrelid: undefined,
          confupdtype: undefined,
          confdeltype: undefined,
          confmatchtype: undefined,
          conislocal: undefined,
          coninhcount: undefined,
          connoinherit: undefined,
          conkey: undefined,
          confkey: undefined,
          conpfeqop: undefined,
          conppeqop: undefined,
          conffeqop: undefined,
          confdelsetcols: undefined,
          conexclop: undefined,
          conbin: undefined,
        };
      }
      export type ByConnameConnamespace = {
        conname: PgCatalog.Types.Cstring;
        connamespace: PgCatalog.Types.Oid;
      };

      export type ByConparentid = {
        conparentid: PgCatalog.Types.Oid;
      };

      export type ByConrelidContypidConname = {
        conrelid: PgCatalog.Types.Oid;
        contypid: PgCatalog.Types.Oid;
        conname: PgCatalog.Types.Cstring;
      };

      export type ByContypid = {
        contypid: PgCatalog.Types.Oid;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgInherits {
      export type Record = {
        inhrelid: PgCatalog.Types.PgInherits["inhrelid"];
        inhparent: PgCatalog.Types.PgInherits["inhparent"];
        inhseqno: PgCatalog.Types.PgInherits["inhseqno"];
        inhdetachpending: PgCatalog.Types.PgInherits["inhdetachpending"];
      };
      export function emptyRecord() {
        return {
          inhrelid: undefined,
          inhparent: undefined,
          inhseqno: undefined,
          inhdetachpending: undefined,
        };
      }
      export type ByInhparent = {
        inhparent: PgCatalog.Types.Oid;
      };

      export type ByInhrelidInhseqno = {
        inhrelid: PgCatalog.Types.Oid;
        inhseqno: PgCatalog.Types.Int4;
      };
      export type ByPrimaryKey = ByInhrelidInhseqno;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgIndex {
      export type Record = {
        indexrelid: PgCatalog.Types.PgIndex["indexrelid"];
        indrelid: PgCatalog.Types.PgIndex["indrelid"];
        indnatts: PgCatalog.Types.PgIndex["indnatts"];
        indnkeyatts: PgCatalog.Types.PgIndex["indnkeyatts"];
        indisunique: PgCatalog.Types.PgIndex["indisunique"];
        indnullsnotdistinct: PgCatalog.Types.PgIndex["indnullsnotdistinct"];
        indisprimary: PgCatalog.Types.PgIndex["indisprimary"];
        indisexclusion: PgCatalog.Types.PgIndex["indisexclusion"];
        indimmediate: PgCatalog.Types.PgIndex["indimmediate"];
        indisclustered: PgCatalog.Types.PgIndex["indisclustered"];
        indisvalid: PgCatalog.Types.PgIndex["indisvalid"];
        indcheckxmin: PgCatalog.Types.PgIndex["indcheckxmin"];
        indisready: PgCatalog.Types.PgIndex["indisready"];
        indislive: PgCatalog.Types.PgIndex["indislive"];
        indisreplident: PgCatalog.Types.PgIndex["indisreplident"];
        indkey: PgCatalog.Types.PgIndex["indkey"];
        indcollation: PgCatalog.Types.PgIndex["indcollation"];
        indclass: PgCatalog.Types.PgIndex["indclass"];
        indoption: PgCatalog.Types.PgIndex["indoption"];
        indexprs: PgCatalog.Types.PgIndex["indexprs"] | null;
        indpred: PgCatalog.Types.PgIndex["indpred"] | null;
      };
      export function emptyRecord() {
        return {
          indexrelid: undefined,
          indrelid: undefined,
          indnatts: undefined,
          indnkeyatts: undefined,
          indisunique: undefined,
          indnullsnotdistinct: undefined,
          indisprimary: undefined,
          indisexclusion: undefined,
          indimmediate: undefined,
          indisclustered: undefined,
          indisvalid: undefined,
          indcheckxmin: undefined,
          indisready: undefined,
          indislive: undefined,
          indisreplident: undefined,
          indkey: undefined,
          indcollation: undefined,
          indclass: undefined,
          indoption: undefined,
          indexprs: undefined,
          indpred: undefined,
        };
      }
      export type ByIndexrelid = {
        indexrelid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByIndexrelid;
      export type ByIndrelid = {
        indrelid: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgOperator {
      export type Record = {
        oid: PgCatalog.Types.PgOperator["oid"];
        oprname: PgCatalog.Types.PgOperator["oprname"];
        oprnamespace: PgCatalog.Types.PgOperator["oprnamespace"];
        oprowner: PgCatalog.Types.PgOperator["oprowner"];
        oprkind: PgCatalog.Types.PgOperator["oprkind"];
        oprcanmerge: PgCatalog.Types.PgOperator["oprcanmerge"];
        oprcanhash: PgCatalog.Types.PgOperator["oprcanhash"];
        oprleft: PgCatalog.Types.PgOperator["oprleft"];
        oprright: PgCatalog.Types.PgOperator["oprright"];
        oprresult: PgCatalog.Types.PgOperator["oprresult"];
        oprcom: PgCatalog.Types.PgOperator["oprcom"];
        oprnegate: PgCatalog.Types.PgOperator["oprnegate"];
        oprcode: PgCatalog.Types.PgOperator["oprcode"];
        oprrest: PgCatalog.Types.PgOperator["oprrest"];
        oprjoin: PgCatalog.Types.PgOperator["oprjoin"];
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          oprname: undefined,
          oprnamespace: undefined,
          oprowner: undefined,
          oprkind: undefined,
          oprcanmerge: undefined,
          oprcanhash: undefined,
          oprleft: undefined,
          oprright: undefined,
          oprresult: undefined,
          oprcom: undefined,
          oprnegate: undefined,
          oprcode: undefined,
          oprrest: undefined,
          oprjoin: undefined,
        };
      }
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;
      export type ByOprnameOprleftOprrightOprnamespace = {
        oprname: PgCatalog.Types.Cstring;
        oprleft: PgCatalog.Types.Oid;
        oprright: PgCatalog.Types.Oid;
        oprnamespace: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgOpfamily {
      export type Record = {
        oid: PgCatalog.Types.PgOpfamily["oid"];
        opfmethod: PgCatalog.Types.PgOpfamily["opfmethod"];
        opfname: PgCatalog.Types.PgOpfamily["opfname"];
        opfnamespace: PgCatalog.Types.PgOpfamily["opfnamespace"];
        opfowner: PgCatalog.Types.PgOpfamily["opfowner"];
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          opfmethod: undefined,
          opfname: undefined,
          opfnamespace: undefined,
          opfowner: undefined,
        };
      }
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;
      export type ByOpfmethodOpfnameOpfnamespace = {
        opfmethod: PgCatalog.Types.Oid;
        opfname: PgCatalog.Types.Cstring;
        opfnamespace: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgOpclass {
      export type Record = {
        oid: PgCatalog.Types.PgOpclass["oid"];
        opcmethod: PgCatalog.Types.PgOpclass["opcmethod"];
        opcname: PgCatalog.Types.PgOpclass["opcname"];
        opcnamespace: PgCatalog.Types.PgOpclass["opcnamespace"];
        opcowner: PgCatalog.Types.PgOpclass["opcowner"];
        opcfamily: PgCatalog.Types.PgOpclass["opcfamily"];
        opcintype: PgCatalog.Types.PgOpclass["opcintype"];
        opcdefault: PgCatalog.Types.PgOpclass["opcdefault"];
        opckeytype: PgCatalog.Types.PgOpclass["opckeytype"];
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          opcmethod: undefined,
          opcname: undefined,
          opcnamespace: undefined,
          opcowner: undefined,
          opcfamily: undefined,
          opcintype: undefined,
          opcdefault: undefined,
          opckeytype: undefined,
        };
      }
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;
      export type ByOpcmethodOpcnameOpcnamespace = {
        opcmethod: PgCatalog.Types.Oid;
        opcname: PgCatalog.Types.Cstring;
        opcnamespace: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgAm {
      export type Record = {
        oid: PgCatalog.Types.PgAm["oid"];
        amname: PgCatalog.Types.PgAm["amname"];
        amhandler: PgCatalog.Types.PgAm["amhandler"];
        amtype: PgCatalog.Types.PgAm["amtype"];
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          amname: undefined,
          amhandler: undefined,
          amtype: undefined,
        };
      }
      export type ByAmname = {
        amname: PgCatalog.Types.Cstring;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgAmop {
      export type Record = {
        oid: PgCatalog.Types.PgAmop["oid"];
        amopfamily: PgCatalog.Types.PgAmop["amopfamily"];
        amoplefttype: PgCatalog.Types.PgAmop["amoplefttype"];
        amoprighttype: PgCatalog.Types.PgAmop["amoprighttype"];
        amopstrategy: PgCatalog.Types.PgAmop["amopstrategy"];
        amoppurpose: PgCatalog.Types.PgAmop["amoppurpose"];
        amopopr: PgCatalog.Types.PgAmop["amopopr"];
        amopmethod: PgCatalog.Types.PgAmop["amopmethod"];
        amopsortfamily: PgCatalog.Types.PgAmop["amopsortfamily"];
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          amopfamily: undefined,
          amoplefttype: undefined,
          amoprighttype: undefined,
          amopstrategy: undefined,
          amoppurpose: undefined,
          amopopr: undefined,
          amopmethod: undefined,
          amopsortfamily: undefined,
        };
      }
      export type ByAmopfamilyAmoplefttypeAmoprighttypeAmopstrategy = {
        amopfamily: PgCatalog.Types.Oid;
        amoplefttype: PgCatalog.Types.Oid;
        amoprighttype: PgCatalog.Types.Oid;
        amopstrategy: PgCatalog.Types.Int2;
      };

      export type ByAmopoprAmoppurposeAmopfamily = {
        amopopr: PgCatalog.Types.Oid;
        amoppurpose: PgCatalog.Types.Char;
        amopfamily: PgCatalog.Types.Oid;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgAmproc {
      export type Record = {
        oid: PgCatalog.Types.PgAmproc["oid"];
        amprocfamily: PgCatalog.Types.PgAmproc["amprocfamily"];
        amproclefttype: PgCatalog.Types.PgAmproc["amproclefttype"];
        amprocrighttype: PgCatalog.Types.PgAmproc["amprocrighttype"];
        amprocnum: PgCatalog.Types.PgAmproc["amprocnum"];
        amproc: PgCatalog.Types.PgAmproc["amproc"];
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          amprocfamily: undefined,
          amproclefttype: undefined,
          amprocrighttype: undefined,
          amprocnum: undefined,
          amproc: undefined,
        };
      }
      export type ByAmprocfamilyAmproclefttypeAmprocrighttypeAmprocnum = {
        amprocfamily: PgCatalog.Types.Oid;
        amproclefttype: PgCatalog.Types.Oid;
        amprocrighttype: PgCatalog.Types.Oid;
        amprocnum: PgCatalog.Types.Int2;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgLanguage {
      export type Record = {
        oid: PgCatalog.Types.PgLanguage["oid"];
        lanname: PgCatalog.Types.PgLanguage["lanname"];
        lanowner: PgCatalog.Types.PgLanguage["lanowner"];
        lanispl: PgCatalog.Types.PgLanguage["lanispl"];
        lanpltrusted: PgCatalog.Types.PgLanguage["lanpltrusted"];
        lanplcallfoid: PgCatalog.Types.PgLanguage["lanplcallfoid"];
        laninline: PgCatalog.Types.PgLanguage["laninline"];
        lanvalidator: PgCatalog.Types.PgLanguage["lanvalidator"];
        lanacl: PgCatalog.Types.PgLanguage["lanacl"] | null;
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          lanname: undefined,
          lanowner: undefined,
          lanispl: undefined,
          lanpltrusted: undefined,
          lanplcallfoid: undefined,
          laninline: undefined,
          lanvalidator: undefined,
          lanacl: undefined,
        };
      }
      export type ByLanname = {
        lanname: PgCatalog.Types.Cstring;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgLargeobjectMetadata {
      export type Record = {
        oid: PgCatalog.Types.PgLargeobjectMetadata["oid"];
        lomowner: PgCatalog.Types.PgLargeobjectMetadata["lomowner"];
        lomacl: PgCatalog.Types.PgLargeobjectMetadata["lomacl"] | null;
      };
      export function emptyRecord() {
        return { oid: undefined, lomowner: undefined, lomacl: undefined };
      }
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgAggregate {
      export type Record = {
        aggfnoid: PgCatalog.Types.PgAggregate["aggfnoid"];
        aggkind: PgCatalog.Types.PgAggregate["aggkind"];
        aggnumdirectargs: PgCatalog.Types.PgAggregate["aggnumdirectargs"];
        aggtransfn: PgCatalog.Types.PgAggregate["aggtransfn"];
        aggfinalfn: PgCatalog.Types.PgAggregate["aggfinalfn"];
        aggcombinefn: PgCatalog.Types.PgAggregate["aggcombinefn"];
        aggserialfn: PgCatalog.Types.PgAggregate["aggserialfn"];
        aggdeserialfn: PgCatalog.Types.PgAggregate["aggdeserialfn"];
        aggmtransfn: PgCatalog.Types.PgAggregate["aggmtransfn"];
        aggminvtransfn: PgCatalog.Types.PgAggregate["aggminvtransfn"];
        aggmfinalfn: PgCatalog.Types.PgAggregate["aggmfinalfn"];
        aggfinalextra: PgCatalog.Types.PgAggregate["aggfinalextra"];
        aggmfinalextra: PgCatalog.Types.PgAggregate["aggmfinalextra"];
        aggfinalmodify: PgCatalog.Types.PgAggregate["aggfinalmodify"];
        aggmfinalmodify: PgCatalog.Types.PgAggregate["aggmfinalmodify"];
        aggsortop: PgCatalog.Types.PgAggregate["aggsortop"];
        aggtranstype: PgCatalog.Types.PgAggregate["aggtranstype"];
        aggtransspace: PgCatalog.Types.PgAggregate["aggtransspace"];
        aggmtranstype: PgCatalog.Types.PgAggregate["aggmtranstype"];
        aggmtransspace: PgCatalog.Types.PgAggregate["aggmtransspace"];
        agginitval: PgCatalog.Types.PgAggregate["agginitval"] | null;
        aggminitval: PgCatalog.Types.PgAggregate["aggminitval"] | null;
      };
      export function emptyRecord() {
        return {
          aggfnoid: undefined,
          aggkind: undefined,
          aggnumdirectargs: undefined,
          aggtransfn: undefined,
          aggfinalfn: undefined,
          aggcombinefn: undefined,
          aggserialfn: undefined,
          aggdeserialfn: undefined,
          aggmtransfn: undefined,
          aggminvtransfn: undefined,
          aggmfinalfn: undefined,
          aggfinalextra: undefined,
          aggmfinalextra: undefined,
          aggfinalmodify: undefined,
          aggmfinalmodify: undefined,
          aggsortop: undefined,
          aggtranstype: undefined,
          aggtransspace: undefined,
          aggmtranstype: undefined,
          aggmtransspace: undefined,
          agginitval: undefined,
          aggminitval: undefined,
        };
      }
      export type ByAggfnoid = {
        aggfnoid: PgCatalog.Types.Regproc;
      };
      export type ByPrimaryKey = ByAggfnoid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgStatisticExt {
      export type Record = {
        oid: PgCatalog.Types.PgStatisticExt["oid"];
        stxrelid: PgCatalog.Types.PgStatisticExt["stxrelid"];
        stxname: PgCatalog.Types.PgStatisticExt["stxname"];
        stxnamespace: PgCatalog.Types.PgStatisticExt["stxnamespace"];
        stxowner: PgCatalog.Types.PgStatisticExt["stxowner"];
        stxstattarget: PgCatalog.Types.PgStatisticExt["stxstattarget"];
        stxkeys: PgCatalog.Types.PgStatisticExt["stxkeys"];
        stxkind: PgCatalog.Types.PgStatisticExt["stxkind"];
        stxexprs: PgCatalog.Types.PgStatisticExt["stxexprs"] | null;
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          stxrelid: undefined,
          stxname: undefined,
          stxnamespace: undefined,
          stxowner: undefined,
          stxstattarget: undefined,
          stxkeys: undefined,
          stxkind: undefined,
          stxexprs: undefined,
        };
      }
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;
      export type ByStxnameStxnamespace = {
        stxname: PgCatalog.Types.Cstring;
        stxnamespace: PgCatalog.Types.Oid;
      };

      export type ByStxrelid = {
        stxrelid: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgRewrite {
      export type Record = {
        oid: PgCatalog.Types.PgRewrite["oid"];
        rulename: PgCatalog.Types.PgRewrite["rulename"];
        evClass: PgCatalog.Types.PgRewrite["evClass"];
        evType: PgCatalog.Types.PgRewrite["evType"];
        evEnabled: PgCatalog.Types.PgRewrite["evEnabled"];
        isInstead: PgCatalog.Types.PgRewrite["isInstead"];
        evQual: PgCatalog.Types.PgRewrite["evQual"];
        evAction: PgCatalog.Types.PgRewrite["evAction"];
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          rulename: undefined,
          evClass: undefined,
          evType: undefined,
          evEnabled: undefined,
          isInstead: undefined,
          evQual: undefined,
          evAction: undefined,
        };
      }
      export type ByEvClassRulename = {
        evClass: PgCatalog.Types.Oid;
        rulename: PgCatalog.Types.Cstring;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgTrigger {
      export type Record = {
        oid: PgCatalog.Types.PgTrigger["oid"];
        tgrelid: PgCatalog.Types.PgTrigger["tgrelid"];
        tgparentid: PgCatalog.Types.PgTrigger["tgparentid"];
        tgname: PgCatalog.Types.PgTrigger["tgname"];
        tgfoid: PgCatalog.Types.PgTrigger["tgfoid"];
        tgtype: PgCatalog.Types.PgTrigger["tgtype"];
        tgenabled: PgCatalog.Types.PgTrigger["tgenabled"];
        tgisinternal: PgCatalog.Types.PgTrigger["tgisinternal"];
        tgconstrrelid: PgCatalog.Types.PgTrigger["tgconstrrelid"];
        tgconstrindid: PgCatalog.Types.PgTrigger["tgconstrindid"];
        tgconstraint: PgCatalog.Types.PgTrigger["tgconstraint"];
        tgdeferrable: PgCatalog.Types.PgTrigger["tgdeferrable"];
        tginitdeferred: PgCatalog.Types.PgTrigger["tginitdeferred"];
        tgnargs: PgCatalog.Types.PgTrigger["tgnargs"];
        tgattr: PgCatalog.Types.PgTrigger["tgattr"];
        tgargs: PgCatalog.Types.PgTrigger["tgargs"];
        tgqual: PgCatalog.Types.PgTrigger["tgqual"] | null;
        tgoldtable: PgCatalog.Types.PgTrigger["tgoldtable"] | null;
        tgnewtable: PgCatalog.Types.PgTrigger["tgnewtable"] | null;
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          tgrelid: undefined,
          tgparentid: undefined,
          tgname: undefined,
          tgfoid: undefined,
          tgtype: undefined,
          tgenabled: undefined,
          tgisinternal: undefined,
          tgconstrrelid: undefined,
          tgconstrindid: undefined,
          tgconstraint: undefined,
          tgdeferrable: undefined,
          tginitdeferred: undefined,
          tgnargs: undefined,
          tgattr: undefined,
          tgargs: undefined,
          tgqual: undefined,
          tgoldtable: undefined,
          tgnewtable: undefined,
        };
      }
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;
      export type ByTgconstraint = {
        tgconstraint: PgCatalog.Types.Oid;
      };

      export type ByTgrelidTgname = {
        tgrelid: PgCatalog.Types.Oid;
        tgname: PgCatalog.Types.Cstring;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgEventTrigger {
      export type Record = {
        oid: PgCatalog.Types.PgEventTrigger["oid"];
        evtname: PgCatalog.Types.PgEventTrigger["evtname"];
        evtevent: PgCatalog.Types.PgEventTrigger["evtevent"];
        evtowner: PgCatalog.Types.PgEventTrigger["evtowner"];
        evtfoid: PgCatalog.Types.PgEventTrigger["evtfoid"];
        evtenabled: PgCatalog.Types.PgEventTrigger["evtenabled"];
        evttags: PgCatalog.Types.PgEventTrigger["evttags"] | null;
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          evtname: undefined,
          evtevent: undefined,
          evtowner: undefined,
          evtfoid: undefined,
          evtenabled: undefined,
          evttags: undefined,
        };
      }
      export type ByEvtname = {
        evtname: PgCatalog.Types.Cstring;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgDescription {
      export type Record = {
        objoid: PgCatalog.Types.PgDescription["objoid"];
        classoid: PgCatalog.Types.PgDescription["classoid"];
        objsubid: PgCatalog.Types.PgDescription["objsubid"];
        description: PgCatalog.Types.PgDescription["description"];
      };
      export function emptyRecord() {
        return {
          objoid: undefined,
          classoid: undefined,
          objsubid: undefined,
          description: undefined,
        };
      }
      export type ByObjoidClassoidObjsubid = {
        objoid: PgCatalog.Types.Oid;
        classoid: PgCatalog.Types.Oid;
        objsubid: PgCatalog.Types.Int4;
      };
      export type ByPrimaryKey = ByObjoidClassoidObjsubid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgCast {
      export type Record = {
        oid: PgCatalog.Types.PgCast["oid"];
        castsource: PgCatalog.Types.PgCast["castsource"];
        casttarget: PgCatalog.Types.PgCast["casttarget"];
        castfunc: PgCatalog.Types.PgCast["castfunc"];
        castcontext: PgCatalog.Types.PgCast["castcontext"];
        castmethod: PgCatalog.Types.PgCast["castmethod"];
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          castsource: undefined,
          casttarget: undefined,
          castfunc: undefined,
          castcontext: undefined,
          castmethod: undefined,
        };
      }
      export type ByCastsourceCasttarget = {
        castsource: PgCatalog.Types.Oid;
        casttarget: PgCatalog.Types.Oid;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgEnum {
      export type Record = {
        oid: PgCatalog.Types.PgEnum["oid"];
        enumtypid: PgCatalog.Types.PgEnum["enumtypid"];
        enumsortorder: PgCatalog.Types.PgEnum["enumsortorder"];
        enumlabel: PgCatalog.Types.PgEnum["enumlabel"];
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          enumtypid: undefined,
          enumsortorder: undefined,
          enumlabel: undefined,
        };
      }
      export type ByEnumtypidEnumlabel = {
        enumtypid: PgCatalog.Types.Oid;
        enumlabel: PgCatalog.Types.Cstring;
      };

      export type ByEnumtypidEnumsortorder = {
        enumtypid: PgCatalog.Types.Oid;
        enumsortorder: PgCatalog.Types.Float4;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgNamespace {
      export type Record = {
        oid: PgCatalog.Types.PgNamespace["oid"];
        nspname: PgCatalog.Types.PgNamespace["nspname"];
        nspowner: PgCatalog.Types.PgNamespace["nspowner"];
        nspacl: PgCatalog.Types.PgNamespace["nspacl"] | null;
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          nspname: undefined,
          nspowner: undefined,
          nspacl: undefined,
        };
      }
      export type ByNspname = {
        nspname: PgCatalog.Types.Cstring;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgConversion {
      export type Record = {
        oid: PgCatalog.Types.PgConversion["oid"];
        conname: PgCatalog.Types.PgConversion["conname"];
        connamespace: PgCatalog.Types.PgConversion["connamespace"];
        conowner: PgCatalog.Types.PgConversion["conowner"];
        conforencoding: PgCatalog.Types.PgConversion["conforencoding"];
        contoencoding: PgCatalog.Types.PgConversion["contoencoding"];
        conproc: PgCatalog.Types.PgConversion["conproc"];
        condefault: PgCatalog.Types.PgConversion["condefault"];
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          conname: undefined,
          connamespace: undefined,
          conowner: undefined,
          conforencoding: undefined,
          contoencoding: undefined,
          conproc: undefined,
          condefault: undefined,
        };
      }
      export type ByConnameConnamespace = {
        conname: PgCatalog.Types.Cstring;
        connamespace: PgCatalog.Types.Oid;
      };

      export type ByConnamespaceConforencodingContoencodingOid = {
        connamespace: PgCatalog.Types.Oid;
        conforencoding: PgCatalog.Types.Int4;
        contoencoding: PgCatalog.Types.Int4;
        oid: PgCatalog.Types.Oid;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgDepend {
      export type Record = {
        classid: PgCatalog.Types.PgDepend["classid"];
        objid: PgCatalog.Types.PgDepend["objid"];
        objsubid: PgCatalog.Types.PgDepend["objsubid"];
        refclassid: PgCatalog.Types.PgDepend["refclassid"];
        refobjid: PgCatalog.Types.PgDepend["refobjid"];
        refobjsubid: PgCatalog.Types.PgDepend["refobjsubid"];
        deptype: PgCatalog.Types.PgDepend["deptype"];
      };
      export function emptyRecord() {
        return {
          classid: undefined,
          objid: undefined,
          objsubid: undefined,
          refclassid: undefined,
          refobjid: undefined,
          refobjsubid: undefined,
          deptype: undefined,
        };
      }
      export type ByClassidObjidObjsubid = {
        classid: PgCatalog.Types.Oid;
        objid: PgCatalog.Types.Oid;
        objsubid: PgCatalog.Types.Int4;
      };

      export type ByRefclassidRefobjidRefobjsubid = {
        refclassid: PgCatalog.Types.Oid;
        refobjid: PgCatalog.Types.Oid;
        refobjsubid: PgCatalog.Types.Int4;
      };

      export type ByPrimaryKey = never;
      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgDatabase {
      export type Record = {
        oid: PgCatalog.Types.PgDatabase["oid"];
        datname: PgCatalog.Types.PgDatabase["datname"];
        datdba: PgCatalog.Types.PgDatabase["datdba"];
        encoding: PgCatalog.Types.PgDatabase["encoding"];
        datlocprovider: PgCatalog.Types.PgDatabase["datlocprovider"];
        datistemplate: PgCatalog.Types.PgDatabase["datistemplate"];
        datallowconn: PgCatalog.Types.PgDatabase["datallowconn"];
        datconnlimit: PgCatalog.Types.PgDatabase["datconnlimit"];
        datfrozenxid: PgCatalog.Types.PgDatabase["datfrozenxid"];
        datminmxid: PgCatalog.Types.PgDatabase["datminmxid"];
        dattablespace: PgCatalog.Types.PgDatabase["dattablespace"];
        datcollate: PgCatalog.Types.PgDatabase["datcollate"];
        datctype: PgCatalog.Types.PgDatabase["datctype"];
        daticulocale: PgCatalog.Types.PgDatabase["daticulocale"] | null;
        daticurules: PgCatalog.Types.PgDatabase["daticurules"] | null;
        datcollversion: PgCatalog.Types.PgDatabase["datcollversion"] | null;
        datacl: PgCatalog.Types.PgDatabase["datacl"] | null;
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          datname: undefined,
          datdba: undefined,
          encoding: undefined,
          datlocprovider: undefined,
          datistemplate: undefined,
          datallowconn: undefined,
          datconnlimit: undefined,
          datfrozenxid: undefined,
          datminmxid: undefined,
          dattablespace: undefined,
          datcollate: undefined,
          datctype: undefined,
          daticulocale: undefined,
          daticurules: undefined,
          datcollversion: undefined,
          datacl: undefined,
        };
      }
      export type ByDatname = {
        datname: PgCatalog.Types.Cstring;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgDbRoleSetting {
      export type Record = {
        setdatabase: PgCatalog.Types.PgDbRoleSetting["setdatabase"];
        setrole: PgCatalog.Types.PgDbRoleSetting["setrole"];
        setconfig: PgCatalog.Types.PgDbRoleSetting["setconfig"] | null;
      };
      export function emptyRecord() {
        return {
          setdatabase: undefined,
          setrole: undefined,
          setconfig: undefined,
        };
      }
      export type BySetdatabaseSetrole = {
        setdatabase: PgCatalog.Types.Oid;
        setrole: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = BySetdatabaseSetrole;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgTablespace {
      export type Record = {
        oid: PgCatalog.Types.PgTablespace["oid"];
        spcname: PgCatalog.Types.PgTablespace["spcname"];
        spcowner: PgCatalog.Types.PgTablespace["spcowner"];
        spcacl: PgCatalog.Types.PgTablespace["spcacl"] | null;
        spcoptions: PgCatalog.Types.PgTablespace["spcoptions"] | null;
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          spcname: undefined,
          spcowner: undefined,
          spcacl: undefined,
          spcoptions: undefined,
        };
      }
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;
      export type BySpcname = {
        spcname: PgCatalog.Types.Cstring;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgAuthMembers {
      export type Record = {
        oid: PgCatalog.Types.PgAuthMembers["oid"];
        roleid: PgCatalog.Types.PgAuthMembers["roleid"];
        member: PgCatalog.Types.PgAuthMembers["member"];
        grantor: PgCatalog.Types.PgAuthMembers["grantor"];
        adminOption: PgCatalog.Types.PgAuthMembers["adminOption"];
        inheritOption: PgCatalog.Types.PgAuthMembers["inheritOption"];
        setOption: PgCatalog.Types.PgAuthMembers["setOption"];
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          roleid: undefined,
          member: undefined,
          grantor: undefined,
          adminOption: undefined,
          inheritOption: undefined,
          setOption: undefined,
        };
      }
      export type ByGrantor = {
        grantor: PgCatalog.Types.Oid;
      };

      export type ByMemberRoleidGrantor = {
        member: PgCatalog.Types.Oid;
        roleid: PgCatalog.Types.Oid;
        grantor: PgCatalog.Types.Oid;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;
      export type ByRoleidMemberGrantor = {
        roleid: PgCatalog.Types.Oid;
        member: PgCatalog.Types.Oid;
        grantor: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgShdepend {
      export type Record = {
        dbid: PgCatalog.Types.PgShdepend["dbid"];
        classid: PgCatalog.Types.PgShdepend["classid"];
        objid: PgCatalog.Types.PgShdepend["objid"];
        objsubid: PgCatalog.Types.PgShdepend["objsubid"];
        refclassid: PgCatalog.Types.PgShdepend["refclassid"];
        refobjid: PgCatalog.Types.PgShdepend["refobjid"];
        deptype: PgCatalog.Types.PgShdepend["deptype"];
      };
      export function emptyRecord() {
        return {
          dbid: undefined,
          classid: undefined,
          objid: undefined,
          objsubid: undefined,
          refclassid: undefined,
          refobjid: undefined,
          deptype: undefined,
        };
      }
      export type ByDbidClassidObjidObjsubid = {
        dbid: PgCatalog.Types.Oid;
        classid: PgCatalog.Types.Oid;
        objid: PgCatalog.Types.Oid;
        objsubid: PgCatalog.Types.Int4;
      };

      export type ByRefclassidRefobjid = {
        refclassid: PgCatalog.Types.Oid;
        refobjid: PgCatalog.Types.Oid;
      };

      export type ByPrimaryKey = never;
      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgShdescription {
      export type Record = {
        objoid: PgCatalog.Types.PgShdescription["objoid"];
        classoid: PgCatalog.Types.PgShdescription["classoid"];
        description: PgCatalog.Types.PgShdescription["description"];
      };
      export function emptyRecord() {
        return {
          objoid: undefined,
          classoid: undefined,
          description: undefined,
        };
      }
      export type ByObjoidClassoid = {
        objoid: PgCatalog.Types.Oid;
        classoid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByObjoidClassoid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgTsConfig {
      export type Record = {
        oid: PgCatalog.Types.PgTsConfig["oid"];
        cfgname: PgCatalog.Types.PgTsConfig["cfgname"];
        cfgnamespace: PgCatalog.Types.PgTsConfig["cfgnamespace"];
        cfgowner: PgCatalog.Types.PgTsConfig["cfgowner"];
        cfgparser: PgCatalog.Types.PgTsConfig["cfgparser"];
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          cfgname: undefined,
          cfgnamespace: undefined,
          cfgowner: undefined,
          cfgparser: undefined,
        };
      }
      export type ByCfgnameCfgnamespace = {
        cfgname: PgCatalog.Types.Cstring;
        cfgnamespace: PgCatalog.Types.Oid;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgTsConfigMap {
      export type Record = {
        mapcfg: PgCatalog.Types.PgTsConfigMap["mapcfg"];
        maptokentype: PgCatalog.Types.PgTsConfigMap["maptokentype"];
        mapseqno: PgCatalog.Types.PgTsConfigMap["mapseqno"];
        mapdict: PgCatalog.Types.PgTsConfigMap["mapdict"];
      };
      export function emptyRecord() {
        return {
          mapcfg: undefined,
          maptokentype: undefined,
          mapseqno: undefined,
          mapdict: undefined,
        };
      }
      export type ByMapcfgMaptokentypeMapseqno = {
        mapcfg: PgCatalog.Types.Oid;
        maptokentype: PgCatalog.Types.Int4;
        mapseqno: PgCatalog.Types.Int4;
      };
      export type ByPrimaryKey = ByMapcfgMaptokentypeMapseqno;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgTsDict {
      export type Record = {
        oid: PgCatalog.Types.PgTsDict["oid"];
        dictname: PgCatalog.Types.PgTsDict["dictname"];
        dictnamespace: PgCatalog.Types.PgTsDict["dictnamespace"];
        dictowner: PgCatalog.Types.PgTsDict["dictowner"];
        dicttemplate: PgCatalog.Types.PgTsDict["dicttemplate"];
        dictinitoption: PgCatalog.Types.PgTsDict["dictinitoption"] | null;
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          dictname: undefined,
          dictnamespace: undefined,
          dictowner: undefined,
          dicttemplate: undefined,
          dictinitoption: undefined,
        };
      }
      export type ByDictnameDictnamespace = {
        dictname: PgCatalog.Types.Cstring;
        dictnamespace: PgCatalog.Types.Oid;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgTsParser {
      export type Record = {
        oid: PgCatalog.Types.PgTsParser["oid"];
        prsname: PgCatalog.Types.PgTsParser["prsname"];
        prsnamespace: PgCatalog.Types.PgTsParser["prsnamespace"];
        prsstart: PgCatalog.Types.PgTsParser["prsstart"];
        prstoken: PgCatalog.Types.PgTsParser["prstoken"];
        prsend: PgCatalog.Types.PgTsParser["prsend"];
        prsheadline: PgCatalog.Types.PgTsParser["prsheadline"];
        prslextype: PgCatalog.Types.PgTsParser["prslextype"];
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          prsname: undefined,
          prsnamespace: undefined,
          prsstart: undefined,
          prstoken: undefined,
          prsend: undefined,
          prsheadline: undefined,
          prslextype: undefined,
        };
      }
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;
      export type ByPrsnamePrsnamespace = {
        prsname: PgCatalog.Types.Cstring;
        prsnamespace: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgTsTemplate {
      export type Record = {
        oid: PgCatalog.Types.PgTsTemplate["oid"];
        tmplname: PgCatalog.Types.PgTsTemplate["tmplname"];
        tmplnamespace: PgCatalog.Types.PgTsTemplate["tmplnamespace"];
        tmplinit: PgCatalog.Types.PgTsTemplate["tmplinit"];
        tmpllexize: PgCatalog.Types.PgTsTemplate["tmpllexize"];
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          tmplname: undefined,
          tmplnamespace: undefined,
          tmplinit: undefined,
          tmpllexize: undefined,
        };
      }
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;
      export type ByTmplnameTmplnamespace = {
        tmplname: PgCatalog.Types.Cstring;
        tmplnamespace: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgExtension {
      export type Record = {
        oid: PgCatalog.Types.PgExtension["oid"];
        extname: PgCatalog.Types.PgExtension["extname"];
        extowner: PgCatalog.Types.PgExtension["extowner"];
        extnamespace: PgCatalog.Types.PgExtension["extnamespace"];
        extrelocatable: PgCatalog.Types.PgExtension["extrelocatable"];
        extversion: PgCatalog.Types.PgExtension["extversion"];
        extconfig: PgCatalog.Types.PgExtension["extconfig"] | null;
        extcondition: PgCatalog.Types.PgExtension["extcondition"] | null;
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          extname: undefined,
          extowner: undefined,
          extnamespace: undefined,
          extrelocatable: undefined,
          extversion: undefined,
          extconfig: undefined,
          extcondition: undefined,
        };
      }
      export type ByExtname = {
        extname: PgCatalog.Types.Cstring;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgForeignDataWrapper {
      export type Record = {
        oid: PgCatalog.Types.PgForeignDataWrapper["oid"];
        fdwname: PgCatalog.Types.PgForeignDataWrapper["fdwname"];
        fdwowner: PgCatalog.Types.PgForeignDataWrapper["fdwowner"];
        fdwhandler: PgCatalog.Types.PgForeignDataWrapper["fdwhandler"];
        fdwvalidator: PgCatalog.Types.PgForeignDataWrapper["fdwvalidator"];
        fdwacl: PgCatalog.Types.PgForeignDataWrapper["fdwacl"] | null;
        fdwoptions: PgCatalog.Types.PgForeignDataWrapper["fdwoptions"] | null;
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          fdwname: undefined,
          fdwowner: undefined,
          fdwhandler: undefined,
          fdwvalidator: undefined,
          fdwacl: undefined,
          fdwoptions: undefined,
        };
      }
      export type ByFdwname = {
        fdwname: PgCatalog.Types.Cstring;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgForeignServer {
      export type Record = {
        oid: PgCatalog.Types.PgForeignServer["oid"];
        srvname: PgCatalog.Types.PgForeignServer["srvname"];
        srvowner: PgCatalog.Types.PgForeignServer["srvowner"];
        srvfdw: PgCatalog.Types.PgForeignServer["srvfdw"];
        srvtype: PgCatalog.Types.PgForeignServer["srvtype"] | null;
        srvversion: PgCatalog.Types.PgForeignServer["srvversion"] | null;
        srvacl: PgCatalog.Types.PgForeignServer["srvacl"] | null;
        srvoptions: PgCatalog.Types.PgForeignServer["srvoptions"] | null;
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          srvname: undefined,
          srvowner: undefined,
          srvfdw: undefined,
          srvtype: undefined,
          srvversion: undefined,
          srvacl: undefined,
          srvoptions: undefined,
        };
      }
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;
      export type BySrvname = {
        srvname: PgCatalog.Types.Cstring;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgPolicy {
      export type Record = {
        oid: PgCatalog.Types.PgPolicy["oid"];
        polname: PgCatalog.Types.PgPolicy["polname"];
        polrelid: PgCatalog.Types.PgPolicy["polrelid"];
        polcmd: PgCatalog.Types.PgPolicy["polcmd"];
        polpermissive: PgCatalog.Types.PgPolicy["polpermissive"];
        polroles: PgCatalog.Types.PgPolicy["polroles"];
        polqual: PgCatalog.Types.PgPolicy["polqual"] | null;
        polwithcheck: PgCatalog.Types.PgPolicy["polwithcheck"] | null;
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          polname: undefined,
          polrelid: undefined,
          polcmd: undefined,
          polpermissive: undefined,
          polroles: undefined,
          polqual: undefined,
          polwithcheck: undefined,
        };
      }
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;
      export type ByPolrelidPolname = {
        polrelid: PgCatalog.Types.Oid;
        polname: PgCatalog.Types.Cstring;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgReplicationOrigin {
      export type Record = {
        roident: PgCatalog.Types.PgReplicationOrigin["roident"];
        roname: PgCatalog.Types.PgReplicationOrigin["roname"];
      };
      export function emptyRecord() {
        return { roident: undefined, roname: undefined };
      }
      export type ByRoident = {
        roident: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByRoident;
      export type ByRoname = {
        roname: PgCatalog.Types.Text;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgDefaultAcl {
      export type Record = {
        oid: PgCatalog.Types.PgDefaultAcl["oid"];
        defaclrole: PgCatalog.Types.PgDefaultAcl["defaclrole"];
        defaclnamespace: PgCatalog.Types.PgDefaultAcl["defaclnamespace"];
        defaclobjtype: PgCatalog.Types.PgDefaultAcl["defaclobjtype"];
        defaclacl: PgCatalog.Types.PgDefaultAcl["defaclacl"];
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          defaclrole: undefined,
          defaclnamespace: undefined,
          defaclobjtype: undefined,
          defaclacl: undefined,
        };
      }
      export type ByDefaclroleDefaclnamespaceDefaclobjtype = {
        defaclrole: PgCatalog.Types.Oid;
        defaclnamespace: PgCatalog.Types.Oid;
        defaclobjtype: PgCatalog.Types.Char;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgInitPrivs {
      export type Record = {
        objoid: PgCatalog.Types.PgInitPrivs["objoid"];
        classoid: PgCatalog.Types.PgInitPrivs["classoid"];
        objsubid: PgCatalog.Types.PgInitPrivs["objsubid"];
        privtype: PgCatalog.Types.PgInitPrivs["privtype"];
        initprivs: PgCatalog.Types.PgInitPrivs["initprivs"];
      };
      export function emptyRecord() {
        return {
          objoid: undefined,
          classoid: undefined,
          objsubid: undefined,
          privtype: undefined,
          initprivs: undefined,
        };
      }
      export type ByObjoidClassoidObjsubid = {
        objoid: PgCatalog.Types.Oid;
        classoid: PgCatalog.Types.Oid;
        objsubid: PgCatalog.Types.Int4;
      };
      export type ByPrimaryKey = ByObjoidClassoidObjsubid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgSeclabel {
      export type Record = {
        objoid: PgCatalog.Types.PgSeclabel["objoid"];
        classoid: PgCatalog.Types.PgSeclabel["classoid"];
        objsubid: PgCatalog.Types.PgSeclabel["objsubid"];
        provider: PgCatalog.Types.PgSeclabel["provider"];
        label: PgCatalog.Types.PgSeclabel["label"];
      };
      export function emptyRecord() {
        return {
          objoid: undefined,
          classoid: undefined,
          objsubid: undefined,
          provider: undefined,
          label: undefined,
        };
      }
      export type ByObjoidClassoidObjsubidProvider = {
        objoid: PgCatalog.Types.Oid;
        classoid: PgCatalog.Types.Oid;
        objsubid: PgCatalog.Types.Int4;
        provider: PgCatalog.Types.Text;
      };
      export type ByPrimaryKey = ByObjoidClassoidObjsubidProvider;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgShseclabel {
      export type Record = {
        objoid: PgCatalog.Types.PgShseclabel["objoid"];
        classoid: PgCatalog.Types.PgShseclabel["classoid"];
        provider: PgCatalog.Types.PgShseclabel["provider"];
        label: PgCatalog.Types.PgShseclabel["label"];
      };
      export function emptyRecord() {
        return {
          objoid: undefined,
          classoid: undefined,
          provider: undefined,
          label: undefined,
        };
      }
      export type ByObjoidClassoidProvider = {
        objoid: PgCatalog.Types.Oid;
        classoid: PgCatalog.Types.Oid;
        provider: PgCatalog.Types.Text;
      };
      export type ByPrimaryKey = ByObjoidClassoidProvider;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgCollation {
      export type Record = {
        oid: PgCatalog.Types.PgCollation["oid"];
        collname: PgCatalog.Types.PgCollation["collname"];
        collnamespace: PgCatalog.Types.PgCollation["collnamespace"];
        collowner: PgCatalog.Types.PgCollation["collowner"];
        collprovider: PgCatalog.Types.PgCollation["collprovider"];
        collisdeterministic: PgCatalog.Types.PgCollation["collisdeterministic"];
        collencoding: PgCatalog.Types.PgCollation["collencoding"];
        collcollate: PgCatalog.Types.PgCollation["collcollate"] | null;
        collctype: PgCatalog.Types.PgCollation["collctype"] | null;
        colliculocale: PgCatalog.Types.PgCollation["colliculocale"] | null;
        collicurules: PgCatalog.Types.PgCollation["collicurules"] | null;
        collversion: PgCatalog.Types.PgCollation["collversion"] | null;
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          collname: undefined,
          collnamespace: undefined,
          collowner: undefined,
          collprovider: undefined,
          collisdeterministic: undefined,
          collencoding: undefined,
          collcollate: undefined,
          collctype: undefined,
          colliculocale: undefined,
          collicurules: undefined,
          collversion: undefined,
        };
      }
      export type ByCollnameCollencodingCollnamespace = {
        collname: PgCatalog.Types.Cstring;
        collencoding: PgCatalog.Types.Int4;
        collnamespace: PgCatalog.Types.Oid;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgParameterAcl {
      export type Record = {
        oid: PgCatalog.Types.PgParameterAcl["oid"];
        parname: PgCatalog.Types.PgParameterAcl["parname"];
        paracl: PgCatalog.Types.PgParameterAcl["paracl"] | null;
      };
      export function emptyRecord() {
        return { oid: undefined, parname: undefined, paracl: undefined };
      }
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;
      export type ByParname = {
        parname: PgCatalog.Types.Text;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgPartitionedTable {
      export type Record = {
        partrelid: PgCatalog.Types.PgPartitionedTable["partrelid"];
        partstrat: PgCatalog.Types.PgPartitionedTable["partstrat"];
        partnatts: PgCatalog.Types.PgPartitionedTable["partnatts"];
        partdefid: PgCatalog.Types.PgPartitionedTable["partdefid"];
        partattrs: PgCatalog.Types.PgPartitionedTable["partattrs"];
        partclass: PgCatalog.Types.PgPartitionedTable["partclass"];
        partcollation: PgCatalog.Types.PgPartitionedTable["partcollation"];
        partexprs: PgCatalog.Types.PgPartitionedTable["partexprs"] | null;
      };
      export function emptyRecord() {
        return {
          partrelid: undefined,
          partstrat: undefined,
          partnatts: undefined,
          partdefid: undefined,
          partattrs: undefined,
          partclass: undefined,
          partcollation: undefined,
          partexprs: undefined,
        };
      }
      export type ByPartrelid = {
        partrelid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByPartrelid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgRange {
      export type Record = {
        rngtypid: PgCatalog.Types.PgRange["rngtypid"];
        rngsubtype: PgCatalog.Types.PgRange["rngsubtype"];
        rngmultitypid: PgCatalog.Types.PgRange["rngmultitypid"];
        rngcollation: PgCatalog.Types.PgRange["rngcollation"];
        rngsubopc: PgCatalog.Types.PgRange["rngsubopc"];
        rngcanonical: PgCatalog.Types.PgRange["rngcanonical"];
        rngsubdiff: PgCatalog.Types.PgRange["rngsubdiff"];
      };
      export function emptyRecord() {
        return {
          rngtypid: undefined,
          rngsubtype: undefined,
          rngmultitypid: undefined,
          rngcollation: undefined,
          rngsubopc: undefined,
          rngcanonical: undefined,
          rngsubdiff: undefined,
        };
      }
      export type ByRngmultitypid = {
        rngmultitypid: PgCatalog.Types.Oid;
      };

      export type ByRngtypid = {
        rngtypid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByRngtypid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgTransform {
      export type Record = {
        oid: PgCatalog.Types.PgTransform["oid"];
        trftype: PgCatalog.Types.PgTransform["trftype"];
        trflang: PgCatalog.Types.PgTransform["trflang"];
        trffromsql: PgCatalog.Types.PgTransform["trffromsql"];
        trftosql: PgCatalog.Types.PgTransform["trftosql"];
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          trftype: undefined,
          trflang: undefined,
          trffromsql: undefined,
          trftosql: undefined,
        };
      }
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;
      export type ByTrftypeTrflang = {
        trftype: PgCatalog.Types.Oid;
        trflang: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgSequence {
      export type Record = {
        seqrelid: PgCatalog.Types.PgSequence["seqrelid"];
        seqtypid: PgCatalog.Types.PgSequence["seqtypid"];
        seqstart: PgCatalog.Types.PgSequence["seqstart"];
        seqincrement: PgCatalog.Types.PgSequence["seqincrement"];
        seqmax: PgCatalog.Types.PgSequence["seqmax"];
        seqmin: PgCatalog.Types.PgSequence["seqmin"];
        seqcache: PgCatalog.Types.PgSequence["seqcache"];
        seqcycle: PgCatalog.Types.PgSequence["seqcycle"];
      };
      export function emptyRecord() {
        return {
          seqrelid: undefined,
          seqtypid: undefined,
          seqstart: undefined,
          seqincrement: undefined,
          seqmax: undefined,
          seqmin: undefined,
          seqcache: undefined,
          seqcycle: undefined,
        };
      }
      export type BySeqrelid = {
        seqrelid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = BySeqrelid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgPublication {
      export type Record = {
        oid: PgCatalog.Types.PgPublication["oid"];
        pubname: PgCatalog.Types.PgPublication["pubname"];
        pubowner: PgCatalog.Types.PgPublication["pubowner"];
        puballtables: PgCatalog.Types.PgPublication["puballtables"];
        pubinsert: PgCatalog.Types.PgPublication["pubinsert"];
        pubupdate: PgCatalog.Types.PgPublication["pubupdate"];
        pubdelete: PgCatalog.Types.PgPublication["pubdelete"];
        pubtruncate: PgCatalog.Types.PgPublication["pubtruncate"];
        pubviaroot: PgCatalog.Types.PgPublication["pubviaroot"];
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          pubname: undefined,
          pubowner: undefined,
          puballtables: undefined,
          pubinsert: undefined,
          pubupdate: undefined,
          pubdelete: undefined,
          pubtruncate: undefined,
          pubviaroot: undefined,
        };
      }
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;
      export type ByPubname = {
        pubname: PgCatalog.Types.Cstring;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgPublicationNamespace {
      export type Record = {
        oid: PgCatalog.Types.PgPublicationNamespace["oid"];
        pnpubid: PgCatalog.Types.PgPublicationNamespace["pnpubid"];
        pnnspid: PgCatalog.Types.PgPublicationNamespace["pnnspid"];
      };
      export function emptyRecord() {
        return { oid: undefined, pnpubid: undefined, pnnspid: undefined };
      }
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;
      export type ByPnnspidPnpubid = {
        pnnspid: PgCatalog.Types.Oid;
        pnpubid: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgPublicationRel {
      export type Record = {
        oid: PgCatalog.Types.PgPublicationRel["oid"];
        prpubid: PgCatalog.Types.PgPublicationRel["prpubid"];
        prrelid: PgCatalog.Types.PgPublicationRel["prrelid"];
        prqual: PgCatalog.Types.PgPublicationRel["prqual"] | null;
        prattrs: PgCatalog.Types.PgPublicationRel["prattrs"] | null;
      };
      export function emptyRecord() {
        return {
          oid: undefined,
          prpubid: undefined,
          prrelid: undefined,
          prqual: undefined,
          prattrs: undefined,
        };
      }
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = ByOid;
      export type ByPrpubid = {
        prpubid: PgCatalog.Types.Oid;
      };

      export type ByPrrelidPrpubid = {
        prrelid: PgCatalog.Types.Oid;
        prpubid: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgSubscriptionRel {
      export type Record = {
        srsubid: PgCatalog.Types.PgSubscriptionRel["srsubid"];
        srrelid: PgCatalog.Types.PgSubscriptionRel["srrelid"];
        srsubstate: PgCatalog.Types.PgSubscriptionRel["srsubstate"];
        srsublsn: PgCatalog.Types.PgSubscriptionRel["srsublsn"] | null;
      };
      export function emptyRecord() {
        return {
          srsubid: undefined,
          srrelid: undefined,
          srsubstate: undefined,
          srsublsn: undefined,
        };
      }
      export type BySrrelidSrsubid = {
        srrelid: PgCatalog.Types.Oid;
        srsubid: PgCatalog.Types.Oid;
      };
      export type ByPrimaryKey = BySrrelidSrsubid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace PgLargeobject {
      export type Record = {
        loid: PgCatalog.Types.PgLargeobject["loid"];
        pageno: PgCatalog.Types.PgLargeobject["pageno"];
        data: PgCatalog.Types.PgLargeobject["data"];
      };
      export function emptyRecord() {
        return { loid: undefined, pageno: undefined, data: undefined };
      }
      export type ByLoidPageno = {
        loid: PgCatalog.Types.Oid;
        pageno: PgCatalog.Types.Int4;
      };
      export type ByPrimaryKey = ByLoidPageno;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
  }
}
export namespace InformationSchema {
  export namespace Types {
    export type AdministrableRoleAuthorizationsArray =
      Array<InformationSchema.Types.AdministrableRoleAuthorizations>;

    export type ApplicableRolesArray =
      Array<InformationSchema.Types.ApplicableRoles>;

    export type AttributesArray = Array<InformationSchema.Types.Attributes>;

    export type CardinalNumberArray =
      Array<InformationSchema.Types.CardinalNumber>;

    export type CharacterDataArray =
      Array<InformationSchema.Types.CharacterData>;

    export type CharacterSetsArray =
      Array<InformationSchema.Types.CharacterSets>;

    export type CheckConstraintRoutineUsageArray =
      Array<InformationSchema.Types.CheckConstraintRoutineUsage>;

    export type CheckConstraintsArray =
      Array<InformationSchema.Types.CheckConstraints>;

    export type CollationCharacterSetApplicabilityArray =
      Array<InformationSchema.Types.CollationCharacterSetApplicability>;

    export type CollationsArray = Array<InformationSchema.Types.Collations>;

    export type ColumnColumnUsageArray =
      Array<InformationSchema.Types.ColumnColumnUsage>;

    export type ColumnDomainUsageArray =
      Array<InformationSchema.Types.ColumnDomainUsage>;

    export type ColumnOptionsArray =
      Array<InformationSchema.Types.ColumnOptions>;

    export type ColumnPrivilegesArray =
      Array<InformationSchema.Types.ColumnPrivileges>;

    export type ColumnUdtUsageArray =
      Array<InformationSchema.Types.ColumnUdtUsage>;

    export type ColumnsArray = Array<InformationSchema.Types.Columns>;

    export type ConstraintColumnUsageArray =
      Array<InformationSchema.Types.ConstraintColumnUsage>;

    export type ConstraintTableUsageArray =
      Array<InformationSchema.Types.ConstraintTableUsage>;

    export type DataTypePrivilegesArray =
      Array<InformationSchema.Types.DataTypePrivileges>;

    export type DomainConstraintsArray =
      Array<InformationSchema.Types.DomainConstraints>;

    export type DomainUdtUsageArray =
      Array<InformationSchema.Types.DomainUdtUsage>;

    export type DomainsArray = Array<InformationSchema.Types.Domains>;

    export type ElementTypesArray = Array<InformationSchema.Types.ElementTypes>;

    export type EnabledRolesArray = Array<InformationSchema.Types.EnabledRoles>;

    export type ForeignDataWrapperOptionsArray =
      Array<InformationSchema.Types.ForeignDataWrapperOptions>;

    export type ForeignDataWrappersArray =
      Array<InformationSchema.Types.ForeignDataWrappers>;

    export type ForeignServerOptionsArray =
      Array<InformationSchema.Types.ForeignServerOptions>;

    export type ForeignServersArray =
      Array<InformationSchema.Types.ForeignServers>;

    export type ForeignTableOptionsArray =
      Array<InformationSchema.Types.ForeignTableOptions>;

    export type ForeignTablesArray =
      Array<InformationSchema.Types.ForeignTables>;

    export type InformationSchemaCatalogNameArray =
      Array<InformationSchema.Types.InformationSchemaCatalogName>;

    export type KeyColumnUsageArray =
      Array<InformationSchema.Types.KeyColumnUsage>;

    export type ParametersArray = Array<InformationSchema.Types.Parameters>;

    export type PgForeignDataWrappers = {
      oid: Nullable<PgCatalog.Types.Oid>;
      fdwowner: Nullable<PgCatalog.Types.Oid>;
      fdwoptions: PgCatalog.Types.TextArray;
      foreignDataWrapperCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignDataWrapperName: Nullable<InformationSchema.Types.SqlIdentifier>;
      authorizationIdentifier: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignDataWrapperLanguage: Nullable<InformationSchema.Types.CharacterData>;
    };

    export type PgForeignServers = {
      oid: Nullable<PgCatalog.Types.Oid>;
      srvoptions: PgCatalog.Types.TextArray;
      foreignServerCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignServerName: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignDataWrapperCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignDataWrapperName: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignServerType: Nullable<InformationSchema.Types.CharacterData>;
      foreignServerVersion: Nullable<InformationSchema.Types.CharacterData>;
      authorizationIdentifier: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type PgForeignTableColumns = {
      nspname: Nullable<PgCatalog.Types.Name>;
      relname: Nullable<PgCatalog.Types.Name>;
      attname: Nullable<PgCatalog.Types.Name>;
      attfdwoptions: PgCatalog.Types.TextArray;
    };

    export type PgForeignTables = {
      foreignTableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignTableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignTableName: Nullable<InformationSchema.Types.SqlIdentifier>;
      ftoptions: PgCatalog.Types.TextArray;
      foreignServerCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignServerName: Nullable<InformationSchema.Types.SqlIdentifier>;
      authorizationIdentifier: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type PgUserMappings = {
      oid: Nullable<PgCatalog.Types.Oid>;
      umoptions: PgCatalog.Types.TextArray;
      umuser: Nullable<PgCatalog.Types.Oid>;
      authorizationIdentifier: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignServerCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignServerName: Nullable<InformationSchema.Types.SqlIdentifier>;
      srvowner: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type ReferentialConstraintsArray =
      Array<InformationSchema.Types.ReferentialConstraints>;

    export type RoleColumnGrantsArray =
      Array<InformationSchema.Types.RoleColumnGrants>;

    export type RoleRoutineGrantsArray =
      Array<InformationSchema.Types.RoleRoutineGrants>;

    export type RoleTableGrantsArray =
      Array<InformationSchema.Types.RoleTableGrants>;

    export type RoleUdtGrantsArray =
      Array<InformationSchema.Types.RoleUdtGrants>;

    export type RoleUsageGrantsArray =
      Array<InformationSchema.Types.RoleUsageGrants>;

    export type RoutineColumnUsageArray =
      Array<InformationSchema.Types.RoutineColumnUsage>;

    export type RoutinePrivilegesArray =
      Array<InformationSchema.Types.RoutinePrivileges>;

    export type RoutineRoutineUsageArray =
      Array<InformationSchema.Types.RoutineRoutineUsage>;

    export type RoutineSequenceUsageArray =
      Array<InformationSchema.Types.RoutineSequenceUsage>;

    export type RoutineTableUsageArray =
      Array<InformationSchema.Types.RoutineTableUsage>;

    export type RoutinesArray = Array<InformationSchema.Types.Routines>;

    export type SchemataArray = Array<InformationSchema.Types.Schemata>;

    export type SequencesArray = Array<InformationSchema.Types.Sequences>;

    export type SqlFeaturesArray = Array<InformationSchema.Types.SqlFeatures>;

    export type SqlIdentifierArray =
      Array<InformationSchema.Types.SqlIdentifier>;

    export type SqlImplementationInfoArray =
      Array<InformationSchema.Types.SqlImplementationInfo>;

    export type SqlPartsArray = Array<InformationSchema.Types.SqlParts>;

    export type SqlSizingArray = Array<InformationSchema.Types.SqlSizing>;

    export type TableConstraintsArray =
      Array<InformationSchema.Types.TableConstraints>;

    export type TablePrivilegesArray =
      Array<InformationSchema.Types.TablePrivileges>;

    export type TablesArray = Array<InformationSchema.Types.Tables>;

    export type TimeStampArray = Array<InformationSchema.Types.TimeStamp>;

    export type TransformsArray = Array<InformationSchema.Types.Transforms>;

    export type TriggeredUpdateColumnsArray =
      Array<InformationSchema.Types.TriggeredUpdateColumns>;

    export type TriggersArray = Array<InformationSchema.Types.Triggers>;

    export type UdtPrivilegesArray =
      Array<InformationSchema.Types.UdtPrivileges>;

    export type UsagePrivilegesArray =
      Array<InformationSchema.Types.UsagePrivileges>;

    export type UserDefinedTypesArray =
      Array<InformationSchema.Types.UserDefinedTypes>;

    export type UserMappingOptionsArray =
      Array<InformationSchema.Types.UserMappingOptions>;

    export type UserMappingsArray = Array<InformationSchema.Types.UserMappings>;

    export type ViewColumnUsageArray =
      Array<InformationSchema.Types.ViewColumnUsage>;

    export type ViewRoutineUsageArray =
      Array<InformationSchema.Types.ViewRoutineUsage>;

    export type ViewTableUsageArray =
      Array<InformationSchema.Types.ViewTableUsage>;

    export type ViewsArray = Array<InformationSchema.Types.Views>;

    export type YesOrNoArray = Array<InformationSchema.Types.YesOrNo>;

    export type AdministrableRoleAuthorizations = {
      grantee: Nullable<InformationSchema.Types.SqlIdentifier>;
      roleName: Nullable<InformationSchema.Types.SqlIdentifier>;
      isGrantable: Nullable<InformationSchema.Types.YesOrNo>;
    };

    export type ApplicableRoles = {
      grantee: Nullable<InformationSchema.Types.SqlIdentifier>;
      roleName: Nullable<InformationSchema.Types.SqlIdentifier>;
      isGrantable: Nullable<InformationSchema.Types.YesOrNo>;
    };

    export type Attributes = {
      udtCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtName: Nullable<InformationSchema.Types.SqlIdentifier>;
      attributeName: Nullable<InformationSchema.Types.SqlIdentifier>;
      ordinalPosition: Nullable<InformationSchema.Types.CardinalNumber>;
      attributeDefault: Nullable<InformationSchema.Types.CharacterData>;
      isNullable: Nullable<InformationSchema.Types.YesOrNo>;
      dataType: Nullable<InformationSchema.Types.CharacterData>;
      characterMaximumLength: Nullable<InformationSchema.Types.CardinalNumber>;
      characterOctetLength: Nullable<InformationSchema.Types.CardinalNumber>;
      characterSetCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetName: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationName: Nullable<InformationSchema.Types.SqlIdentifier>;
      numericPrecision: Nullable<InformationSchema.Types.CardinalNumber>;
      numericPrecisionRadix: Nullable<InformationSchema.Types.CardinalNumber>;
      numericScale: Nullable<InformationSchema.Types.CardinalNumber>;
      datetimePrecision: Nullable<InformationSchema.Types.CardinalNumber>;
      intervalType: Nullable<InformationSchema.Types.CharacterData>;
      intervalPrecision: Nullable<InformationSchema.Types.CardinalNumber>;
      attributeUdtCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      attributeUdtSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      attributeUdtName: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeName: Nullable<InformationSchema.Types.SqlIdentifier>;
      maximumCardinality: Nullable<InformationSchema.Types.CardinalNumber>;
      dtdIdentifier: Nullable<InformationSchema.Types.SqlIdentifier>;
      isDerivedReferenceAttribute: Nullable<InformationSchema.Types.YesOrNo>;
    };

    export type CardinalNumber = PgCatalog.Types.Int4;

    export type CharacterData = PgCatalog.Types.Varchar;

    export type CharacterSets = {
      characterSetCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetName: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterRepertoire: Nullable<InformationSchema.Types.SqlIdentifier>;
      formOfUse: Nullable<InformationSchema.Types.SqlIdentifier>;
      defaultCollateCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      defaultCollateSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      defaultCollateName: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type CheckConstraintRoutineUsage = {
      constraintCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintName: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificName: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type CheckConstraints = {
      constraintCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintName: Nullable<InformationSchema.Types.SqlIdentifier>;
      checkClause: Nullable<InformationSchema.Types.CharacterData>;
    };

    export type CollationCharacterSetApplicability = {
      collationCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationName: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetName: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type Collations = {
      collationCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationName: Nullable<InformationSchema.Types.SqlIdentifier>;
      padAttribute: Nullable<InformationSchema.Types.CharacterData>;
    };

    export type ColumnColumnUsage = {
      tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
      columnName: Nullable<InformationSchema.Types.SqlIdentifier>;
      dependentColumn: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type ColumnDomainUsage = {
      domainCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      domainSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      domainName: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
      columnName: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type ColumnOptions = {
      tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
      columnName: Nullable<InformationSchema.Types.SqlIdentifier>;
      optionName: Nullable<InformationSchema.Types.SqlIdentifier>;
      optionValue: Nullable<InformationSchema.Types.CharacterData>;
    };

    export type ColumnPrivileges = {
      grantor: Nullable<InformationSchema.Types.SqlIdentifier>;
      grantee: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
      columnName: Nullable<InformationSchema.Types.SqlIdentifier>;
      privilegeType: Nullable<InformationSchema.Types.CharacterData>;
      isGrantable: Nullable<InformationSchema.Types.YesOrNo>;
    };

    export type ColumnUdtUsage = {
      udtCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtName: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
      columnName: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type Columns = {
      tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
      columnName: Nullable<InformationSchema.Types.SqlIdentifier>;
      ordinalPosition: Nullable<InformationSchema.Types.CardinalNumber>;
      columnDefault: Nullable<InformationSchema.Types.CharacterData>;
      isNullable: Nullable<InformationSchema.Types.YesOrNo>;
      dataType: Nullable<InformationSchema.Types.CharacterData>;
      characterMaximumLength: Nullable<InformationSchema.Types.CardinalNumber>;
      characterOctetLength: Nullable<InformationSchema.Types.CardinalNumber>;
      numericPrecision: Nullable<InformationSchema.Types.CardinalNumber>;
      numericPrecisionRadix: Nullable<InformationSchema.Types.CardinalNumber>;
      numericScale: Nullable<InformationSchema.Types.CardinalNumber>;
      datetimePrecision: Nullable<InformationSchema.Types.CardinalNumber>;
      intervalType: Nullable<InformationSchema.Types.CharacterData>;
      intervalPrecision: Nullable<InformationSchema.Types.CardinalNumber>;
      characterSetCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetName: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationName: Nullable<InformationSchema.Types.SqlIdentifier>;
      domainCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      domainSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      domainName: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtName: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeName: Nullable<InformationSchema.Types.SqlIdentifier>;
      maximumCardinality: Nullable<InformationSchema.Types.CardinalNumber>;
      dtdIdentifier: Nullable<InformationSchema.Types.SqlIdentifier>;
      isSelfReferencing: Nullable<InformationSchema.Types.YesOrNo>;
      isIdentity: Nullable<InformationSchema.Types.YesOrNo>;
      identityGeneration: Nullable<InformationSchema.Types.CharacterData>;
      identityStart: Nullable<InformationSchema.Types.CharacterData>;
      identityIncrement: Nullable<InformationSchema.Types.CharacterData>;
      identityMaximum: Nullable<InformationSchema.Types.CharacterData>;
      identityMinimum: Nullable<InformationSchema.Types.CharacterData>;
      identityCycle: Nullable<InformationSchema.Types.YesOrNo>;
      isGenerated: Nullable<InformationSchema.Types.CharacterData>;
      generationExpression: Nullable<InformationSchema.Types.CharacterData>;
      isUpdatable: Nullable<InformationSchema.Types.YesOrNo>;
    };

    export type ConstraintColumnUsage = {
      tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
      columnName: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintName: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type ConstraintTableUsage = {
      tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintName: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type DataTypePrivileges = {
      objectCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      objectSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      objectName: Nullable<InformationSchema.Types.SqlIdentifier>;
      objectType: Nullable<InformationSchema.Types.CharacterData>;
      dtdIdentifier: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type DomainConstraints = {
      constraintCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintName: Nullable<InformationSchema.Types.SqlIdentifier>;
      domainCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      domainSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      domainName: Nullable<InformationSchema.Types.SqlIdentifier>;
      isDeferrable: Nullable<InformationSchema.Types.YesOrNo>;
      initiallyDeferred: Nullable<InformationSchema.Types.YesOrNo>;
    };

    export type DomainUdtUsage = {
      udtCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtName: Nullable<InformationSchema.Types.SqlIdentifier>;
      domainCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      domainSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      domainName: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type Domains = {
      domainCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      domainSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      domainName: Nullable<InformationSchema.Types.SqlIdentifier>;
      dataType: Nullable<InformationSchema.Types.CharacterData>;
      characterMaximumLength: Nullable<InformationSchema.Types.CardinalNumber>;
      characterOctetLength: Nullable<InformationSchema.Types.CardinalNumber>;
      characterSetCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetName: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationName: Nullable<InformationSchema.Types.SqlIdentifier>;
      numericPrecision: Nullable<InformationSchema.Types.CardinalNumber>;
      numericPrecisionRadix: Nullable<InformationSchema.Types.CardinalNumber>;
      numericScale: Nullable<InformationSchema.Types.CardinalNumber>;
      datetimePrecision: Nullable<InformationSchema.Types.CardinalNumber>;
      intervalType: Nullable<InformationSchema.Types.CharacterData>;
      intervalPrecision: Nullable<InformationSchema.Types.CardinalNumber>;
      domainDefault: Nullable<InformationSchema.Types.CharacterData>;
      udtCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtName: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeName: Nullable<InformationSchema.Types.SqlIdentifier>;
      maximumCardinality: Nullable<InformationSchema.Types.CardinalNumber>;
      dtdIdentifier: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type ElementTypes = {
      objectCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      objectSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      objectName: Nullable<InformationSchema.Types.SqlIdentifier>;
      objectType: Nullable<InformationSchema.Types.CharacterData>;
      collectionTypeIdentifier: Nullable<InformationSchema.Types.SqlIdentifier>;
      dataType: Nullable<InformationSchema.Types.CharacterData>;
      characterMaximumLength: Nullable<InformationSchema.Types.CardinalNumber>;
      characterOctetLength: Nullable<InformationSchema.Types.CardinalNumber>;
      characterSetCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetName: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationName: Nullable<InformationSchema.Types.SqlIdentifier>;
      numericPrecision: Nullable<InformationSchema.Types.CardinalNumber>;
      numericPrecisionRadix: Nullable<InformationSchema.Types.CardinalNumber>;
      numericScale: Nullable<InformationSchema.Types.CardinalNumber>;
      datetimePrecision: Nullable<InformationSchema.Types.CardinalNumber>;
      intervalType: Nullable<InformationSchema.Types.CharacterData>;
      intervalPrecision: Nullable<InformationSchema.Types.CardinalNumber>;
      domainDefault: Nullable<InformationSchema.Types.CharacterData>;
      udtCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtName: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeName: Nullable<InformationSchema.Types.SqlIdentifier>;
      maximumCardinality: Nullable<InformationSchema.Types.CardinalNumber>;
      dtdIdentifier: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type EnabledRoles = {
      roleName: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type ForeignDataWrapperOptions = {
      foreignDataWrapperCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignDataWrapperName: Nullable<InformationSchema.Types.SqlIdentifier>;
      optionName: Nullable<InformationSchema.Types.SqlIdentifier>;
      optionValue: Nullable<InformationSchema.Types.CharacterData>;
    };

    export type ForeignDataWrappers = {
      foreignDataWrapperCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignDataWrapperName: Nullable<InformationSchema.Types.SqlIdentifier>;
      authorizationIdentifier: Nullable<InformationSchema.Types.SqlIdentifier>;
      libraryName: Nullable<InformationSchema.Types.CharacterData>;
      foreignDataWrapperLanguage: Nullable<InformationSchema.Types.CharacterData>;
    };

    export type ForeignServerOptions = {
      foreignServerCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignServerName: Nullable<InformationSchema.Types.SqlIdentifier>;
      optionName: Nullable<InformationSchema.Types.SqlIdentifier>;
      optionValue: Nullable<InformationSchema.Types.CharacterData>;
    };

    export type ForeignServers = {
      foreignServerCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignServerName: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignDataWrapperCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignDataWrapperName: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignServerType: Nullable<InformationSchema.Types.CharacterData>;
      foreignServerVersion: Nullable<InformationSchema.Types.CharacterData>;
      authorizationIdentifier: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type ForeignTableOptions = {
      foreignTableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignTableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignTableName: Nullable<InformationSchema.Types.SqlIdentifier>;
      optionName: Nullable<InformationSchema.Types.SqlIdentifier>;
      optionValue: Nullable<InformationSchema.Types.CharacterData>;
    };

    export type ForeignTables = {
      foreignTableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignTableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignTableName: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignServerCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignServerName: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type InformationSchemaCatalogName = {
      catalogName: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type KeyColumnUsage = {
      constraintCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintName: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
      columnName: Nullable<InformationSchema.Types.SqlIdentifier>;
      ordinalPosition: Nullable<InformationSchema.Types.CardinalNumber>;
      positionInUniqueConstraint: Nullable<InformationSchema.Types.CardinalNumber>;
    };

    export type Parameters = {
      specificCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificName: Nullable<InformationSchema.Types.SqlIdentifier>;
      ordinalPosition: Nullable<InformationSchema.Types.CardinalNumber>;
      parameterMode: Nullable<InformationSchema.Types.CharacterData>;
      isResult: Nullable<InformationSchema.Types.YesOrNo>;
      asLocator: Nullable<InformationSchema.Types.YesOrNo>;
      parameterName: Nullable<InformationSchema.Types.SqlIdentifier>;
      dataType: Nullable<InformationSchema.Types.CharacterData>;
      characterMaximumLength: Nullable<InformationSchema.Types.CardinalNumber>;
      characterOctetLength: Nullable<InformationSchema.Types.CardinalNumber>;
      characterSetCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetName: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationName: Nullable<InformationSchema.Types.SqlIdentifier>;
      numericPrecision: Nullable<InformationSchema.Types.CardinalNumber>;
      numericPrecisionRadix: Nullable<InformationSchema.Types.CardinalNumber>;
      numericScale: Nullable<InformationSchema.Types.CardinalNumber>;
      datetimePrecision: Nullable<InformationSchema.Types.CardinalNumber>;
      intervalType: Nullable<InformationSchema.Types.CharacterData>;
      intervalPrecision: Nullable<InformationSchema.Types.CardinalNumber>;
      udtCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtName: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeName: Nullable<InformationSchema.Types.SqlIdentifier>;
      maximumCardinality: Nullable<InformationSchema.Types.CardinalNumber>;
      dtdIdentifier: Nullable<InformationSchema.Types.SqlIdentifier>;
      parameterDefault: Nullable<InformationSchema.Types.CharacterData>;
    };

    export type ReferentialConstraints = {
      constraintCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintName: Nullable<InformationSchema.Types.SqlIdentifier>;
      uniqueConstraintCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      uniqueConstraintSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      uniqueConstraintName: Nullable<InformationSchema.Types.SqlIdentifier>;
      matchOption: Nullable<InformationSchema.Types.CharacterData>;
      updateRule: Nullable<InformationSchema.Types.CharacterData>;
      deleteRule: Nullable<InformationSchema.Types.CharacterData>;
    };

    export type RoleColumnGrants = {
      grantor: Nullable<InformationSchema.Types.SqlIdentifier>;
      grantee: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
      columnName: Nullable<InformationSchema.Types.SqlIdentifier>;
      privilegeType: Nullable<InformationSchema.Types.CharacterData>;
      isGrantable: Nullable<InformationSchema.Types.YesOrNo>;
    };

    export type RoleRoutineGrants = {
      grantor: Nullable<InformationSchema.Types.SqlIdentifier>;
      grantee: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificName: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineName: Nullable<InformationSchema.Types.SqlIdentifier>;
      privilegeType: Nullable<InformationSchema.Types.CharacterData>;
      isGrantable: Nullable<InformationSchema.Types.YesOrNo>;
    };

    export type RoleTableGrants = {
      grantor: Nullable<InformationSchema.Types.SqlIdentifier>;
      grantee: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
      privilegeType: Nullable<InformationSchema.Types.CharacterData>;
      isGrantable: Nullable<InformationSchema.Types.YesOrNo>;
      withHierarchy: Nullable<InformationSchema.Types.YesOrNo>;
    };

    export type RoleUdtGrants = {
      grantor: Nullable<InformationSchema.Types.SqlIdentifier>;
      grantee: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtName: Nullable<InformationSchema.Types.SqlIdentifier>;
      privilegeType: Nullable<InformationSchema.Types.CharacterData>;
      isGrantable: Nullable<InformationSchema.Types.YesOrNo>;
    };

    export type RoleUsageGrants = {
      grantor: Nullable<InformationSchema.Types.SqlIdentifier>;
      grantee: Nullable<InformationSchema.Types.SqlIdentifier>;
      objectCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      objectSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      objectName: Nullable<InformationSchema.Types.SqlIdentifier>;
      objectType: Nullable<InformationSchema.Types.CharacterData>;
      privilegeType: Nullable<InformationSchema.Types.CharacterData>;
      isGrantable: Nullable<InformationSchema.Types.YesOrNo>;
    };

    export type RoutineColumnUsage = {
      specificCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificName: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineName: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
      columnName: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type RoutinePrivileges = {
      grantor: Nullable<InformationSchema.Types.SqlIdentifier>;
      grantee: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificName: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineName: Nullable<InformationSchema.Types.SqlIdentifier>;
      privilegeType: Nullable<InformationSchema.Types.CharacterData>;
      isGrantable: Nullable<InformationSchema.Types.YesOrNo>;
    };

    export type RoutineRoutineUsage = {
      specificCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificName: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineName: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type RoutineSequenceUsage = {
      specificCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificName: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineName: Nullable<InformationSchema.Types.SqlIdentifier>;
      sequenceCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      sequenceSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      sequenceName: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type RoutineTableUsage = {
      specificCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificName: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineName: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type Routines = {
      specificCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificName: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineName: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineType: Nullable<InformationSchema.Types.CharacterData>;
      moduleCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      moduleSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      moduleName: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtName: Nullable<InformationSchema.Types.SqlIdentifier>;
      dataType: Nullable<InformationSchema.Types.CharacterData>;
      characterMaximumLength: Nullable<InformationSchema.Types.CardinalNumber>;
      characterOctetLength: Nullable<InformationSchema.Types.CardinalNumber>;
      characterSetCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetName: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationName: Nullable<InformationSchema.Types.SqlIdentifier>;
      numericPrecision: Nullable<InformationSchema.Types.CardinalNumber>;
      numericPrecisionRadix: Nullable<InformationSchema.Types.CardinalNumber>;
      numericScale: Nullable<InformationSchema.Types.CardinalNumber>;
      datetimePrecision: Nullable<InformationSchema.Types.CardinalNumber>;
      intervalType: Nullable<InformationSchema.Types.CharacterData>;
      intervalPrecision: Nullable<InformationSchema.Types.CardinalNumber>;
      typeUdtCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      typeUdtSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      typeUdtName: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeName: Nullable<InformationSchema.Types.SqlIdentifier>;
      maximumCardinality: Nullable<InformationSchema.Types.CardinalNumber>;
      dtdIdentifier: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineBody: Nullable<InformationSchema.Types.CharacterData>;
      routineDefinition: Nullable<InformationSchema.Types.CharacterData>;
      externalName: Nullable<InformationSchema.Types.CharacterData>;
      externalLanguage: Nullable<InformationSchema.Types.CharacterData>;
      parameterStyle: Nullable<InformationSchema.Types.CharacterData>;
      isDeterministic: Nullable<InformationSchema.Types.YesOrNo>;
      sqlDataAccess: Nullable<InformationSchema.Types.CharacterData>;
      isNullCall: Nullable<InformationSchema.Types.YesOrNo>;
      sqlPath: Nullable<InformationSchema.Types.CharacterData>;
      schemaLevelRoutine: Nullable<InformationSchema.Types.YesOrNo>;
      maxDynamicResultSets: Nullable<InformationSchema.Types.CardinalNumber>;
      isUserDefinedCast: Nullable<InformationSchema.Types.YesOrNo>;
      isImplicitlyInvocable: Nullable<InformationSchema.Types.YesOrNo>;
      securityType: Nullable<InformationSchema.Types.CharacterData>;
      toSqlSpecificCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      toSqlSpecificSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      toSqlSpecificName: Nullable<InformationSchema.Types.SqlIdentifier>;
      asLocator: Nullable<InformationSchema.Types.YesOrNo>;
      created: Nullable<InformationSchema.Types.TimeStamp>;
      lastAltered: Nullable<InformationSchema.Types.TimeStamp>;
      newSavepointLevel: Nullable<InformationSchema.Types.YesOrNo>;
      isUdtDependent: Nullable<InformationSchema.Types.YesOrNo>;
      resultCastFromDataType: Nullable<InformationSchema.Types.CharacterData>;
      resultCastAsLocator: Nullable<InformationSchema.Types.YesOrNo>;
      resultCastCharMaxLength: Nullable<InformationSchema.Types.CardinalNumber>;
      resultCastCharOctetLength: Nullable<InformationSchema.Types.CardinalNumber>;
      resultCastCharSetCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      resultCastCharSetSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      resultCastCharSetName: Nullable<InformationSchema.Types.SqlIdentifier>;
      resultCastCollationCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      resultCastCollationSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      resultCastCollationName: Nullable<InformationSchema.Types.SqlIdentifier>;
      resultCastNumericPrecision: Nullable<InformationSchema.Types.CardinalNumber>;
      resultCastNumericPrecisionRadix: Nullable<InformationSchema.Types.CardinalNumber>;
      resultCastNumericScale: Nullable<InformationSchema.Types.CardinalNumber>;
      resultCastDatetimePrecision: Nullable<InformationSchema.Types.CardinalNumber>;
      resultCastIntervalType: Nullable<InformationSchema.Types.CharacterData>;
      resultCastIntervalPrecision: Nullable<InformationSchema.Types.CardinalNumber>;
      resultCastTypeUdtCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      resultCastTypeUdtSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      resultCastTypeUdtName: Nullable<InformationSchema.Types.SqlIdentifier>;
      resultCastScopeCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      resultCastScopeSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      resultCastScopeName: Nullable<InformationSchema.Types.SqlIdentifier>;
      resultCastMaximumCardinality: Nullable<InformationSchema.Types.CardinalNumber>;
      resultCastDtdIdentifier: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type Schemata = {
      catalogName: Nullable<InformationSchema.Types.SqlIdentifier>;
      schemaName: Nullable<InformationSchema.Types.SqlIdentifier>;
      schemaOwner: Nullable<InformationSchema.Types.SqlIdentifier>;
      defaultCharacterSetCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      defaultCharacterSetSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      defaultCharacterSetName: Nullable<InformationSchema.Types.SqlIdentifier>;
      sqlPath: Nullable<InformationSchema.Types.CharacterData>;
    };

    export type Sequences = {
      sequenceCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      sequenceSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      sequenceName: Nullable<InformationSchema.Types.SqlIdentifier>;
      dataType: Nullable<InformationSchema.Types.CharacterData>;
      numericPrecision: Nullable<InformationSchema.Types.CardinalNumber>;
      numericPrecisionRadix: Nullable<InformationSchema.Types.CardinalNumber>;
      numericScale: Nullable<InformationSchema.Types.CardinalNumber>;
      startValue: Nullable<InformationSchema.Types.CharacterData>;
      minimumValue: Nullable<InformationSchema.Types.CharacterData>;
      maximumValue: Nullable<InformationSchema.Types.CharacterData>;
      increment: Nullable<InformationSchema.Types.CharacterData>;
      cycleOption: Nullable<InformationSchema.Types.YesOrNo>;
    };

    export type SqlFeatures = {
      featureId: Nullable<InformationSchema.Types.CharacterData>;
      featureName: Nullable<InformationSchema.Types.CharacterData>;
      subFeatureId: Nullable<InformationSchema.Types.CharacterData>;
      subFeatureName: Nullable<InformationSchema.Types.CharacterData>;
      isSupported: Nullable<InformationSchema.Types.YesOrNo>;
      isVerifiedBy: Nullable<InformationSchema.Types.CharacterData>;
      comments: Nullable<InformationSchema.Types.CharacterData>;
    };

    export type SqlIdentifier = PgCatalog.Types.Name;

    export type SqlImplementationInfo = {
      implementationInfoId: Nullable<InformationSchema.Types.CharacterData>;
      implementationInfoName: Nullable<InformationSchema.Types.CharacterData>;
      integerValue: Nullable<InformationSchema.Types.CardinalNumber>;
      characterValue: Nullable<InformationSchema.Types.CharacterData>;
      comments: Nullable<InformationSchema.Types.CharacterData>;
    };

    export type SqlParts = {
      featureId: Nullable<InformationSchema.Types.CharacterData>;
      featureName: Nullable<InformationSchema.Types.CharacterData>;
      isSupported: Nullable<InformationSchema.Types.YesOrNo>;
      isVerifiedBy: Nullable<InformationSchema.Types.CharacterData>;
      comments: Nullable<InformationSchema.Types.CharacterData>;
    };

    export type SqlSizing = {
      sizingId: Nullable<InformationSchema.Types.CardinalNumber>;
      sizingName: Nullable<InformationSchema.Types.CharacterData>;
      supportedValue: Nullable<InformationSchema.Types.CardinalNumber>;
      comments: Nullable<InformationSchema.Types.CharacterData>;
    };

    export type TableConstraints = {
      constraintCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintName: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintType: Nullable<InformationSchema.Types.CharacterData>;
      isDeferrable: Nullable<InformationSchema.Types.YesOrNo>;
      initiallyDeferred: Nullable<InformationSchema.Types.YesOrNo>;
      enforced: Nullable<InformationSchema.Types.YesOrNo>;
      nullsDistinct: Nullable<InformationSchema.Types.YesOrNo>;
    };

    export type TablePrivileges = {
      grantor: Nullable<InformationSchema.Types.SqlIdentifier>;
      grantee: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
      privilegeType: Nullable<InformationSchema.Types.CharacterData>;
      isGrantable: Nullable<InformationSchema.Types.YesOrNo>;
      withHierarchy: Nullable<InformationSchema.Types.YesOrNo>;
    };

    export type Tables = {
      tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableType: Nullable<InformationSchema.Types.CharacterData>;
      selfReferencingColumnName: Nullable<InformationSchema.Types.SqlIdentifier>;
      referenceGeneration: Nullable<InformationSchema.Types.CharacterData>;
      userDefinedTypeCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      userDefinedTypeSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      userDefinedTypeName: Nullable<InformationSchema.Types.SqlIdentifier>;
      isInsertableInto: Nullable<InformationSchema.Types.YesOrNo>;
      isTyped: Nullable<InformationSchema.Types.YesOrNo>;
      commitAction: Nullable<InformationSchema.Types.CharacterData>;
    };

    export type TimeStamp = PgCatalog.Types.Timestamptz;

    export type Transforms = {
      udtCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtName: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificName: Nullable<InformationSchema.Types.SqlIdentifier>;
      groupName: Nullable<InformationSchema.Types.SqlIdentifier>;
      transformType: Nullable<InformationSchema.Types.CharacterData>;
    };

    export type TriggeredUpdateColumns = {
      triggerCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      triggerSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      triggerName: Nullable<InformationSchema.Types.SqlIdentifier>;
      eventObjectCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      eventObjectSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      eventObjectTable: Nullable<InformationSchema.Types.SqlIdentifier>;
      eventObjectColumn: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type Triggers = {
      triggerCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      triggerSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      triggerName: Nullable<InformationSchema.Types.SqlIdentifier>;
      eventManipulation: Nullable<InformationSchema.Types.CharacterData>;
      eventObjectCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      eventObjectSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      eventObjectTable: Nullable<InformationSchema.Types.SqlIdentifier>;
      actionOrder: Nullable<InformationSchema.Types.CardinalNumber>;
      actionCondition: Nullable<InformationSchema.Types.CharacterData>;
      actionStatement: Nullable<InformationSchema.Types.CharacterData>;
      actionOrientation: Nullable<InformationSchema.Types.CharacterData>;
      actionTiming: Nullable<InformationSchema.Types.CharacterData>;
      actionReferenceOldTable: Nullable<InformationSchema.Types.SqlIdentifier>;
      actionReferenceNewTable: Nullable<InformationSchema.Types.SqlIdentifier>;
      actionReferenceOldRow: Nullable<InformationSchema.Types.SqlIdentifier>;
      actionReferenceNewRow: Nullable<InformationSchema.Types.SqlIdentifier>;
      created: Nullable<InformationSchema.Types.TimeStamp>;
    };

    export type UdtPrivileges = {
      grantor: Nullable<InformationSchema.Types.SqlIdentifier>;
      grantee: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtName: Nullable<InformationSchema.Types.SqlIdentifier>;
      privilegeType: Nullable<InformationSchema.Types.CharacterData>;
      isGrantable: Nullable<InformationSchema.Types.YesOrNo>;
    };

    export type UsagePrivileges = {
      grantor: Nullable<InformationSchema.Types.SqlIdentifier>;
      grantee: Nullable<InformationSchema.Types.SqlIdentifier>;
      objectCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      objectSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      objectName: Nullable<InformationSchema.Types.SqlIdentifier>;
      objectType: Nullable<InformationSchema.Types.CharacterData>;
      privilegeType: Nullable<InformationSchema.Types.CharacterData>;
      isGrantable: Nullable<InformationSchema.Types.YesOrNo>;
    };

    export type UserDefinedTypes = {
      userDefinedTypeCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      userDefinedTypeSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      userDefinedTypeName: Nullable<InformationSchema.Types.SqlIdentifier>;
      userDefinedTypeCategory: Nullable<InformationSchema.Types.CharacterData>;
      isInstantiable: Nullable<InformationSchema.Types.YesOrNo>;
      isFinal: Nullable<InformationSchema.Types.YesOrNo>;
      orderingForm: Nullable<InformationSchema.Types.CharacterData>;
      orderingCategory: Nullable<InformationSchema.Types.CharacterData>;
      orderingRoutineCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      orderingRoutineSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      orderingRoutineName: Nullable<InformationSchema.Types.SqlIdentifier>;
      referenceType: Nullable<InformationSchema.Types.CharacterData>;
      dataType: Nullable<InformationSchema.Types.CharacterData>;
      characterMaximumLength: Nullable<InformationSchema.Types.CardinalNumber>;
      characterOctetLength: Nullable<InformationSchema.Types.CardinalNumber>;
      characterSetCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetName: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationName: Nullable<InformationSchema.Types.SqlIdentifier>;
      numericPrecision: Nullable<InformationSchema.Types.CardinalNumber>;
      numericPrecisionRadix: Nullable<InformationSchema.Types.CardinalNumber>;
      numericScale: Nullable<InformationSchema.Types.CardinalNumber>;
      datetimePrecision: Nullable<InformationSchema.Types.CardinalNumber>;
      intervalType: Nullable<InformationSchema.Types.CharacterData>;
      intervalPrecision: Nullable<InformationSchema.Types.CardinalNumber>;
      sourceDtdIdentifier: Nullable<InformationSchema.Types.SqlIdentifier>;
      refDtdIdentifier: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type UserMappingOptions = {
      authorizationIdentifier: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignServerCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignServerName: Nullable<InformationSchema.Types.SqlIdentifier>;
      optionName: Nullable<InformationSchema.Types.SqlIdentifier>;
      optionValue: Nullable<InformationSchema.Types.CharacterData>;
    };

    export type UserMappings = {
      authorizationIdentifier: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignServerCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignServerName: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type ViewColumnUsage = {
      viewCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      viewSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      viewName: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
      columnName: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type ViewRoutineUsage = {
      tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificName: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type ViewTableUsage = {
      viewCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      viewSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      viewName: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
    };

    export type Views = {
      tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
      viewDefinition: Nullable<InformationSchema.Types.CharacterData>;
      checkOption: Nullable<InformationSchema.Types.CharacterData>;
      isUpdatable: Nullable<InformationSchema.Types.YesOrNo>;
      isInsertableInto: Nullable<InformationSchema.Types.YesOrNo>;
      isTriggerUpdatable: Nullable<InformationSchema.Types.YesOrNo>;
      isTriggerDeletable: Nullable<InformationSchema.Types.YesOrNo>;
      isTriggerInsertableInto: Nullable<InformationSchema.Types.YesOrNo>;
    };

    export type YesOrNo = PgCatalog.Types.Varchar;
  }
  export namespace Procedures {}
  export namespace Tables {
    export namespace SqlFeatures {
      export type Record = {
        featureId: InformationSchema.Types.SqlFeatures["featureId"] | null;
        featureName: InformationSchema.Types.SqlFeatures["featureName"] | null;
        subFeatureId:
          | InformationSchema.Types.SqlFeatures["subFeatureId"]
          | null;
        subFeatureName:
          | InformationSchema.Types.SqlFeatures["subFeatureName"]
          | null;
        isSupported: InformationSchema.Types.SqlFeatures["isSupported"] | null;
        isVerifiedBy:
          | InformationSchema.Types.SqlFeatures["isVerifiedBy"]
          | null;
        comments: InformationSchema.Types.SqlFeatures["comments"] | null;
      };
      export function emptyRecord() {
        return {
          featureId: undefined,
          featureName: undefined,
          subFeatureId: undefined,
          subFeatureName: undefined,
          isSupported: undefined,
          isVerifiedBy: undefined,
          comments: undefined,
        };
      }
      export type ByPrimaryKey = never;
      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace SqlImplementationInfo {
      export type Record = {
        implementationInfoId:
          | InformationSchema.Types.SqlImplementationInfo["implementationInfoId"]
          | null;
        implementationInfoName:
          | InformationSchema.Types.SqlImplementationInfo["implementationInfoName"]
          | null;
        integerValue:
          | InformationSchema.Types.SqlImplementationInfo["integerValue"]
          | null;
        characterValue:
          | InformationSchema.Types.SqlImplementationInfo["characterValue"]
          | null;
        comments:
          | InformationSchema.Types.SqlImplementationInfo["comments"]
          | null;
      };
      export function emptyRecord() {
        return {
          implementationInfoId: undefined,
          implementationInfoName: undefined,
          integerValue: undefined,
          characterValue: undefined,
          comments: undefined,
        };
      }
      export type ByPrimaryKey = never;
      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace SqlParts {
      export type Record = {
        featureId: InformationSchema.Types.SqlParts["featureId"] | null;
        featureName: InformationSchema.Types.SqlParts["featureName"] | null;
        isSupported: InformationSchema.Types.SqlParts["isSupported"] | null;
        isVerifiedBy: InformationSchema.Types.SqlParts["isVerifiedBy"] | null;
        comments: InformationSchema.Types.SqlParts["comments"] | null;
      };
      export function emptyRecord() {
        return {
          featureId: undefined,
          featureName: undefined,
          isSupported: undefined,
          isVerifiedBy: undefined,
          comments: undefined,
        };
      }
      export type ByPrimaryKey = never;
      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace SqlSizing {
      export type Record = {
        sizingId: InformationSchema.Types.SqlSizing["sizingId"] | null;
        sizingName: InformationSchema.Types.SqlSizing["sizingName"] | null;
        supportedValue:
          | InformationSchema.Types.SqlSizing["supportedValue"]
          | null;
        comments: InformationSchema.Types.SqlSizing["comments"] | null;
      };
      export function emptyRecord() {
        return {
          sizingId: undefined,
          sizingName: undefined,
          supportedValue: undefined,
          comments: undefined,
        };
      }
      export type ByPrimaryKey = never;
      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
  }
}
export namespace Public {
  export namespace Types {
    export type ChecklistArray = Array<Public.Types.Checklist>;

    export type ChecklistItemArray = Array<Public.Types.ChecklistItem>;

    export type Checklist = {
      id: PgCatalog.Types.Uuid;
      name: PgCatalog.Types.Text;
      createdAt: PgCatalog.Types.Timestamp;
    };

    export type ChecklistItem = {
      id: PgCatalog.Types.Uuid;
      checklistId: PgCatalog.Types.Uuid;
      title: PgCatalog.Types.Text;
      checked: PgCatalog.Types.Bool;
      createdAt: PgCatalog.Types.Timestamp;
    };
  }
  export namespace Procedures {}
  export namespace Tables {
    export namespace Checklist {
      export type Record = {
        id: Public.Types.Checklist["id"];
        name: Public.Types.Checklist["name"];
        createdAt: Public.Types.Checklist["createdAt"];
      };
      export function emptyRecord() {
        return { id: undefined, name: undefined, createdAt: undefined };
      }
      export type ById = {
        id: PgCatalog.Types.Uuid;
      };
      export type ByPrimaryKey = ById;

      export type Optional = Pick<Record, "id" | "createdAt">;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
    export namespace ChecklistItem {
      export type Record = {
        id: Public.Types.ChecklistItem["id"];
        checklistId: Public.Types.ChecklistItem["checklistId"];
        title: Public.Types.ChecklistItem["title"];
        checked: Public.Types.ChecklistItem["checked"];
        createdAt: Public.Types.ChecklistItem["createdAt"];
      };
      export function emptyRecord() {
        return {
          id: undefined,
          checklistId: undefined,
          title: undefined,
          checked: undefined,
          createdAt: undefined,
        };
      }
      export type ByChecklistId = {
        checklistId: PgCatalog.Types.Uuid;
      };

      export type ById = {
        id: PgCatalog.Types.Uuid;
      };
      export type ByPrimaryKey = ById;

      export type Optional = Pick<Record, "id" | "checked" | "createdAt">;
      export type Values = PartiallyOptional<Record, Optional & ByPrimaryKey>;
    }
  }
}

// begin string parsers
export namespace PgCatalog {
  export namespace Types {
    export namespace AclitemArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Aclitem.parse(e));
      }
    }
    export namespace BitArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Bit.parse(e));
      }
    }
    export namespace BoolArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Bool.parse(e));
      }
    }
    export namespace BoxArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Box.parse(e));
      }
    }
    export namespace BpcharArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Bpchar.parse(e));
      }
    }
    export namespace ByteaArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Bytea.parse(e));
      }
    }
    export namespace CharArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Char.parse(e));
      }
    }
    export namespace CidArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Cid.parse(e));
      }
    }
    export namespace CidrArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Cidr.parse(e));
      }
    }
    export namespace CircleArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Circle.parse(e));
      }
    }
    export namespace CstringArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Cstring.parse(e));
      }
    }
    export namespace DateArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Date.parse(e));
      }
    }
    export namespace DatemultirangeArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Datemultirange.parse(e));
      }
    }
    export namespace DaterangeArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Daterange.parse(e));
      }
    }
    export namespace Float4Array {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Float4.parse(e));
      }
    }
    export namespace Float8Array {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Float8.parse(e));
      }
    }
    export namespace GtsvectorArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Gtsvector.parse(e));
      }
    }
    export namespace InetArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Inet.parse(e));
      }
    }
    export namespace Int2Array {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Int2.parse(e));
      }
    }
    export namespace Int2vectorArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Int2vector.parse(e));
      }
    }
    export namespace Int4Array {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Int4.parse(e));
      }
    }
    export namespace Int4multirangeArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Int4multirange.parse(e));
      }
    }
    export namespace Int4rangeArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Int4range.parse(e));
      }
    }
    export namespace Int8Array {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Int8.parse(e));
      }
    }
    export namespace Int8multirangeArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Int8multirange.parse(e));
      }
    }
    export namespace Int8rangeArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Int8range.parse(e));
      }
    }
    export namespace IntervalArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Interval.parse(e));
      }
    }
    export namespace JsonArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Json.parse(e));
      }
    }
    export namespace JsonbArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Jsonb.parse(e));
      }
    }
    export namespace JsonpathArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Jsonpath.parse(e));
      }
    }
    export namespace LineArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Line.parse(e));
      }
    }
    export namespace LsegArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Lseg.parse(e));
      }
    }
    export namespace MacaddrArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Macaddr.parse(e));
      }
    }
    export namespace Macaddr8Array {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Macaddr8.parse(e));
      }
    }
    export namespace MoneyArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Money.parse(e));
      }
    }
    export namespace NameArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Name.parse(e));
      }
    }
    export namespace NumericArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Numeric.parse(e));
      }
    }
    export namespace NummultirangeArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Nummultirange.parse(e));
      }
    }
    export namespace NumrangeArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Numrange.parse(e));
      }
    }
    export namespace OidArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Oid.parse(e));
      }
    }
    export namespace OidvectorArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Oidvector.parse(e));
      }
    }
    export namespace PathArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Path.parse(e));
      }
    }
    export namespace PgAggregateArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgAggregate.parse(e));
      }
    }
    export namespace PgAmArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgAm.parse(e));
      }
    }
    export namespace PgAmopArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgAmop.parse(e));
      }
    }
    export namespace PgAmprocArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgAmproc.parse(e));
      }
    }
    export namespace PgAttrdefArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgAttrdef.parse(e));
      }
    }
    export namespace PgAttributeArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgAttribute.parse(e));
      }
    }
    export namespace PgAuthMembersArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgAuthMembers.parse(e));
      }
    }
    export namespace PgAuthidArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgAuthid.parse(e));
      }
    }
    export namespace PgAvailableExtensionVersionsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) =>
          PgAvailableExtensionVersions.parse(e),
        );
      }
    }
    export namespace PgAvailableExtensionsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgAvailableExtensions.parse(e));
      }
    }
    export namespace PgBackendMemoryContextsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgBackendMemoryContexts.parse(e));
      }
    }
    export namespace PgCastArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgCast.parse(e));
      }
    }
    export namespace PgClassArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgClass.parse(e));
      }
    }
    export namespace PgCollationArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgCollation.parse(e));
      }
    }
    export namespace PgConfigArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgConfig.parse(e));
      }
    }
    export namespace PgConstraintArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgConstraint.parse(e));
      }
    }
    export namespace PgConversionArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgConversion.parse(e));
      }
    }
    export namespace PgCursorsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgCursors.parse(e));
      }
    }
    export namespace PgDatabaseArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgDatabase.parse(e));
      }
    }
    export namespace PgDbRoleSettingArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgDbRoleSetting.parse(e));
      }
    }
    export namespace PgDefaultAclArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgDefaultAcl.parse(e));
      }
    }
    export namespace PgDependArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgDepend.parse(e));
      }
    }
    export namespace PgDescriptionArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgDescription.parse(e));
      }
    }
    export namespace PgEnumArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgEnum.parse(e));
      }
    }
    export namespace PgEventTriggerArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgEventTrigger.parse(e));
      }
    }
    export namespace PgExtensionArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgExtension.parse(e));
      }
    }
    export namespace PgFileSettingsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgFileSettings.parse(e));
      }
    }
    export namespace PgForeignDataWrapperArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgForeignDataWrapper.parse(e));
      }
    }
    export namespace PgForeignServerArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgForeignServer.parse(e));
      }
    }
    export namespace PgForeignTableArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgForeignTable.parse(e));
      }
    }
    export namespace PgGroupArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgGroup.parse(e));
      }
    }
    export namespace PgHbaFileRulesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgHbaFileRules.parse(e));
      }
    }
    export namespace PgIdentFileMappingsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgIdentFileMappings.parse(e));
      }
    }
    export namespace PgIndexArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgIndex.parse(e));
      }
    }
    export namespace PgIndexesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgIndexes.parse(e));
      }
    }
    export namespace PgInheritsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgInherits.parse(e));
      }
    }
    export namespace PgInitPrivsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgInitPrivs.parse(e));
      }
    }
    export namespace PgLanguageArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgLanguage.parse(e));
      }
    }
    export namespace PgLargeobjectArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgLargeobject.parse(e));
      }
    }
    export namespace PgLargeobjectMetadataArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgLargeobjectMetadata.parse(e));
      }
    }
    export namespace PgLocksArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgLocks.parse(e));
      }
    }
    export namespace PgLsnArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgLsn.parse(e));
      }
    }
    export namespace PgMatviewsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgMatviews.parse(e));
      }
    }
    export namespace PgNamespaceArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgNamespace.parse(e));
      }
    }
    export namespace PgOpclassArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgOpclass.parse(e));
      }
    }
    export namespace PgOperatorArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgOperator.parse(e));
      }
    }
    export namespace PgOpfamilyArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgOpfamily.parse(e));
      }
    }
    export namespace PgParameterAclArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgParameterAcl.parse(e));
      }
    }
    export namespace PgPartitionedTableArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgPartitionedTable.parse(e));
      }
    }
    export namespace PgPoliciesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgPolicies.parse(e));
      }
    }
    export namespace PgPolicyArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgPolicy.parse(e));
      }
    }
    export namespace PgPreparedStatementsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgPreparedStatements.parse(e));
      }
    }
    export namespace PgPreparedXactsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgPreparedXacts.parse(e));
      }
    }
    export namespace PgProcArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgProc.parse(e));
      }
    }
    export namespace PgPublicationArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgPublication.parse(e));
      }
    }
    export namespace PgPublicationNamespaceArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgPublicationNamespace.parse(e));
      }
    }
    export namespace PgPublicationRelArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgPublicationRel.parse(e));
      }
    }
    export namespace PgPublicationTablesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgPublicationTables.parse(e));
      }
    }
    export namespace PgRangeArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgRange.parse(e));
      }
    }
    export namespace PgReplicationOriginArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgReplicationOrigin.parse(e));
      }
    }
    export namespace PgReplicationOriginStatusArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgReplicationOriginStatus.parse(e));
      }
    }
    export namespace PgReplicationSlotsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgReplicationSlots.parse(e));
      }
    }
    export namespace PgRewriteArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgRewrite.parse(e));
      }
    }
    export namespace PgRolesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgRoles.parse(e));
      }
    }
    export namespace PgRulesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgRules.parse(e));
      }
    }
    export namespace PgSeclabelArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgSeclabel.parse(e));
      }
    }
    export namespace PgSeclabelsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgSeclabels.parse(e));
      }
    }
    export namespace PgSequenceArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgSequence.parse(e));
      }
    }
    export namespace PgSequencesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgSequences.parse(e));
      }
    }
    export namespace PgSettingsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgSettings.parse(e));
      }
    }
    export namespace PgShadowArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgShadow.parse(e));
      }
    }
    export namespace PgShdependArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgShdepend.parse(e));
      }
    }
    export namespace PgShdescriptionArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgShdescription.parse(e));
      }
    }
    export namespace PgShmemAllocationsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgShmemAllocations.parse(e));
      }
    }
    export namespace PgShseclabelArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgShseclabel.parse(e));
      }
    }
    export namespace PgSnapshotArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgSnapshot.parse(e));
      }
    }
    export namespace PgStatActivityArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatActivity.parse(e));
      }
    }
    export namespace PgStatAllIndexesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatAllIndexes.parse(e));
      }
    }
    export namespace PgStatAllTablesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatAllTables.parse(e));
      }
    }
    export namespace PgStatArchiverArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatArchiver.parse(e));
      }
    }
    export namespace PgStatBgwriterArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatBgwriter.parse(e));
      }
    }
    export namespace PgStatDatabaseArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatDatabase.parse(e));
      }
    }
    export namespace PgStatDatabaseConflictsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatDatabaseConflicts.parse(e));
      }
    }
    export namespace PgStatGssapiArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatGssapi.parse(e));
      }
    }
    export namespace PgStatIoArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatIo.parse(e));
      }
    }
    export namespace PgStatProgressAnalyzeArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatProgressAnalyze.parse(e));
      }
    }
    export namespace PgStatProgressBasebackupArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatProgressBasebackup.parse(e));
      }
    }
    export namespace PgStatProgressClusterArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatProgressCluster.parse(e));
      }
    }
    export namespace PgStatProgressCopyArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatProgressCopy.parse(e));
      }
    }
    export namespace PgStatProgressCreateIndexArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatProgressCreateIndex.parse(e));
      }
    }
    export namespace PgStatProgressVacuumArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatProgressVacuum.parse(e));
      }
    }
    export namespace PgStatRecoveryPrefetchArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatRecoveryPrefetch.parse(e));
      }
    }
    export namespace PgStatReplicationArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatReplication.parse(e));
      }
    }
    export namespace PgStatReplicationSlotsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatReplicationSlots.parse(e));
      }
    }
    export namespace PgStatSlruArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatSlru.parse(e));
      }
    }
    export namespace PgStatSslArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatSsl.parse(e));
      }
    }
    export namespace PgStatSubscriptionArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatSubscription.parse(e));
      }
    }
    export namespace PgStatSubscriptionStatsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatSubscriptionStats.parse(e));
      }
    }
    export namespace PgStatSysIndexesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatSysIndexes.parse(e));
      }
    }
    export namespace PgStatSysTablesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatSysTables.parse(e));
      }
    }
    export namespace PgStatUserFunctionsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatUserFunctions.parse(e));
      }
    }
    export namespace PgStatUserIndexesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatUserIndexes.parse(e));
      }
    }
    export namespace PgStatUserTablesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatUserTables.parse(e));
      }
    }
    export namespace PgStatWalArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatWal.parse(e));
      }
    }
    export namespace PgStatWalReceiverArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatWalReceiver.parse(e));
      }
    }
    export namespace PgStatXactAllTablesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatXactAllTables.parse(e));
      }
    }
    export namespace PgStatXactSysTablesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatXactSysTables.parse(e));
      }
    }
    export namespace PgStatXactUserFunctionsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatXactUserFunctions.parse(e));
      }
    }
    export namespace PgStatXactUserTablesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatXactUserTables.parse(e));
      }
    }
    export namespace PgStatioAllIndexesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatioAllIndexes.parse(e));
      }
    }
    export namespace PgStatioAllSequencesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatioAllSequences.parse(e));
      }
    }
    export namespace PgStatioAllTablesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatioAllTables.parse(e));
      }
    }
    export namespace PgStatioSysIndexesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatioSysIndexes.parse(e));
      }
    }
    export namespace PgStatioSysSequencesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatioSysSequences.parse(e));
      }
    }
    export namespace PgStatioSysTablesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatioSysTables.parse(e));
      }
    }
    export namespace PgStatioUserIndexesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatioUserIndexes.parse(e));
      }
    }
    export namespace PgStatioUserSequencesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatioUserSequences.parse(e));
      }
    }
    export namespace PgStatioUserTablesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatioUserTables.parse(e));
      }
    }
    export namespace PgStatisticArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatistic.parse(e));
      }
    }
    export namespace PgStatisticExtArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatisticExt.parse(e));
      }
    }
    export namespace PgStatisticExtDataArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatisticExtData.parse(e));
      }
    }
    export namespace PgStatsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStats.parse(e));
      }
    }
    export namespace PgStatsExtArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatsExt.parse(e));
      }
    }
    export namespace PgStatsExtExprsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgStatsExtExprs.parse(e));
      }
    }
    export namespace PgSubscriptionArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgSubscription.parse(e));
      }
    }
    export namespace PgSubscriptionRelArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgSubscriptionRel.parse(e));
      }
    }
    export namespace PgTablesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgTables.parse(e));
      }
    }
    export namespace PgTablespaceArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgTablespace.parse(e));
      }
    }
    export namespace PgTimezoneAbbrevsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgTimezoneAbbrevs.parse(e));
      }
    }
    export namespace PgTimezoneNamesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgTimezoneNames.parse(e));
      }
    }
    export namespace PgTransformArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgTransform.parse(e));
      }
    }
    export namespace PgTriggerArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgTrigger.parse(e));
      }
    }
    export namespace PgTsConfigArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgTsConfig.parse(e));
      }
    }
    export namespace PgTsConfigMapArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgTsConfigMap.parse(e));
      }
    }
    export namespace PgTsDictArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgTsDict.parse(e));
      }
    }
    export namespace PgTsParserArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgTsParser.parse(e));
      }
    }
    export namespace PgTsTemplateArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgTsTemplate.parse(e));
      }
    }
    export namespace PgTypeArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgType.parse(e));
      }
    }
    export namespace PgUserArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgUser.parse(e));
      }
    }
    export namespace PgUserMappingArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgUserMapping.parse(e));
      }
    }
    export namespace PgUserMappingsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgUserMappings.parse(e));
      }
    }
    export namespace PgViewsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => PgViews.parse(e));
      }
    }
    export namespace PointArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Point.parse(e));
      }
    }
    export namespace PolygonArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Polygon.parse(e));
      }
    }
    export namespace RecordArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Record.parse(e));
      }
    }
    export namespace RefcursorArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Refcursor.parse(e));
      }
    }
    export namespace RegclassArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Regclass.parse(e));
      }
    }
    export namespace RegcollationArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Regcollation.parse(e));
      }
    }
    export namespace RegconfigArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Regconfig.parse(e));
      }
    }
    export namespace RegdictionaryArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Regdictionary.parse(e));
      }
    }
    export namespace RegnamespaceArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Regnamespace.parse(e));
      }
    }
    export namespace RegoperArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Regoper.parse(e));
      }
    }
    export namespace RegoperatorArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Regoperator.parse(e));
      }
    }
    export namespace RegprocArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Regproc.parse(e));
      }
    }
    export namespace RegprocedureArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Regprocedure.parse(e));
      }
    }
    export namespace RegroleArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Regrole.parse(e));
      }
    }
    export namespace RegtypeArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Regtype.parse(e));
      }
    }
    export namespace TextArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Text.parse(e));
      }
    }
    export namespace TidArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Tid.parse(e));
      }
    }
    export namespace TimeArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Time.parse(e));
      }
    }
    export namespace TimestampArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Timestamp.parse(e));
      }
    }
    export namespace TimestamptzArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Timestamptz.parse(e));
      }
    }
    export namespace TimetzArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Timetz.parse(e));
      }
    }
    export namespace TsmultirangeArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Tsmultirange.parse(e));
      }
    }
    export namespace TsqueryArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Tsquery.parse(e));
      }
    }
    export namespace TsrangeArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Tsrange.parse(e));
      }
    }
    export namespace TstzmultirangeArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Tstzmultirange.parse(e));
      }
    }
    export namespace TstzrangeArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Tstzrange.parse(e));
      }
    }
    export namespace TsvectorArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Tsvector.parse(e));
      }
    }
    export namespace TxidSnapshotArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => TxidSnapshot.parse(e));
      }
    }
    export namespace UuidArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Uuid.parse(e));
      }
    }
    export namespace VarbitArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Varbit.parse(e));
      }
    }
    export namespace VarcharArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Varchar.parse(e));
      }
    }
    export namespace XidArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Xid.parse(e));
      }
    }
    export namespace Xid8Array {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Xid8.parse(e));
      }
    }
    export namespace XmlArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Xml.parse(e));
      }
    }
    export namespace Aclitem {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return from;
        }
        throw new Error(`from is not a string`, { cause: from });
      }
    }
    export namespace Any {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Anyarray {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Anycompatible {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Anycompatiblearray {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Anycompatiblemultirange {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Anycompatiblenonarray {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Anycompatiblerange {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Anyelement {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Anyenum {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Anymultirange {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Anynonarray {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Anyrange {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Bit {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "boolean") {
          return from;
        }
        if (typeof from === "string") {
          if (["t", "true", "on", "yes"].includes(from.toLowerCase()))
            return true;
          try {
            if (Number.parseFloat(from) > 0) return true;
          } catch (e) {
            // eat
          }
        }
        if (typeof from === "number") {
          return from !== 0;
        }
        return false;
      }
    }
    export namespace Bool {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "boolean") {
          return from;
        }
        if (typeof from === "string") {
          if (["t", "true", "on", "yes"].includes(from.toLowerCase()))
            return true;
          try {
            if (Number.parseFloat(from) > 0) return true;
          } catch (e) {
            // eat
          }
        }
        if (typeof from === "number") {
          return from !== 0;
        }
        return false;
      }
    }
    export namespace Box {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Bpchar {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return from;
        }
        throw new Error(`from is not a string`, { cause: from });
      }
    }
    export namespace Bytea {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return new Uint8Array(JSON.parse(from));
        }
        if (Array.isArray(from)) {
          return new Uint8Array(from);
        }
        return [];
      }
    }
    export namespace Char {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return from;
        }
        throw new Error(`from is not a string`, { cause: from });
      }
    }
    export namespace Cid {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return Number.parseFloat(from);
        }
        if (typeof from === "number") {
          return from;
        }
        return null;
      }
    }
    export namespace Cidr {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return new Uint8Array(JSON.parse(from));
        }
        if (Array.isArray(from)) {
          return new Uint8Array(from);
        }
        return [];
      }
    }
    export namespace Circle {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Cstring {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Date {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if ((from as unknown) instanceof JsDate) return from as Date;
        return new JsDate(from as string);
      }
    }
    export namespace Datemultirange {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Daterange {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace EventTrigger {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace FdwHandler {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Float4 {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return Number.parseFloat(from);
        }
        if (typeof from === "number") {
          return from;
        }
        return null;
      }
    }
    export namespace Float8 {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return Number.parseFloat(from);
        }
        if (typeof from === "number") {
          return from;
        }
        return null;
      }
    }
    export namespace Gtsvector {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace IndexAmHandler {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Inet {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Int2 {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return Number.parseFloat(from);
        }
        if (typeof from === "number") {
          return from;
        }
        return null;
      }
    }
    export namespace Int2vector {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return new Uint16Array(JSON.parse(from));
        }
        if (Array.isArray(from)) {
          return new Uint16Array(from);
        }
        return [];
      }
    }
    export namespace Int4 {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return Number.parseFloat(from);
        }
        if (typeof from === "number") {
          return from;
        }
        return null;
      }
    }
    export namespace Int4multirange {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Int4range {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Int8 {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return Number.parseFloat(from);
        }
        if (typeof from === "number") {
          return from;
        }
        return null;
      }
    }
    export namespace Int8multirange {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Int8range {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Internal {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Interval {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return Number.parseFloat(from);
        }
        if (typeof from === "number") {
          return from;
        }
        return null;
      }
    }
    export namespace Json {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Jsonb {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Jsonpath {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return from;
        }
        throw new Error(`from is not a string`, { cause: from });
      }
    }
    export namespace LanguageHandler {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Line {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Lseg {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Macaddr {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return new Uint8Array(JSON.parse(from));
        }
        if (Array.isArray(from)) {
          return new Uint8Array(from);
        }
        return [];
      }
    }
    export namespace Macaddr8 {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return new Uint8Array(JSON.parse(from));
        }
        if (Array.isArray(from)) {
          return new Uint8Array(from);
        }
        return [];
      }
    }
    export namespace Money {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return Number.parseFloat(from);
        }
        if (typeof from === "number") {
          return from;
        }
        return null;
      }
    }
    export namespace Name {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return from;
        }
        throw new Error(`from is not a string`, { cause: from });
      }
    }
    export namespace Numeric {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return Number.parseFloat(from);
        }
        if (typeof from === "number") {
          return from;
        }
        return null;
      }
    }
    export namespace Nummultirange {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Numrange {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Oid {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return Number.parseFloat(from);
        }
        if (typeof from === "number") {
          return from;
        }
        return null;
      }
    }
    export namespace Oidvector {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Oid.parse(e));
      }
    }
    export namespace Path {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace PgAggregate {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgAggregate.is(from)) {
          return {
            aggfnoid: PgCatalog.Types.Regproc.parse(from.aggfnoid),
            aggkind: PgCatalog.Types.Char.parse(from.aggkind),
            aggnumdirectargs: PgCatalog.Types.Int2.parse(from.aggnumdirectargs),
            aggtransfn: PgCatalog.Types.Regproc.parse(from.aggtransfn),
            aggfinalfn: PgCatalog.Types.Regproc.parse(from.aggfinalfn),
            aggcombinefn: PgCatalog.Types.Regproc.parse(from.aggcombinefn),
            aggserialfn: PgCatalog.Types.Regproc.parse(from.aggserialfn),
            aggdeserialfn: PgCatalog.Types.Regproc.parse(from.aggdeserialfn),
            aggmtransfn: PgCatalog.Types.Regproc.parse(from.aggmtransfn),
            aggminvtransfn: PgCatalog.Types.Regproc.parse(from.aggminvtransfn),
            aggmfinalfn: PgCatalog.Types.Regproc.parse(from.aggmfinalfn),
            aggfinalextra: PgCatalog.Types.Bool.parse(from.aggfinalextra),
            aggmfinalextra: PgCatalog.Types.Bool.parse(from.aggmfinalextra),
            aggfinalmodify: PgCatalog.Types.Char.parse(from.aggfinalmodify),
            aggmfinalmodify: PgCatalog.Types.Char.parse(from.aggmfinalmodify),
            aggsortop: PgCatalog.Types.Oid.parse(from.aggsortop),
            aggtranstype: PgCatalog.Types.Oid.parse(from.aggtranstype),
            aggtransspace: PgCatalog.Types.Int4.parse(from.aggtransspace),
            aggmtranstype: PgCatalog.Types.Oid.parse(from.aggmtranstype),
            aggmtransspace: PgCatalog.Types.Int4.parse(from.aggmtransspace),
            agginitval: PgCatalog.Types.Text.parse(from.agginitval),
            aggminitval: PgCatalog.Types.Text.parse(from.aggminitval),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgAm {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgAm.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            amname: PgCatalog.Types.Name.parse(from.amname),
            amhandler: PgCatalog.Types.Regproc.parse(from.amhandler),
            amtype: PgCatalog.Types.Char.parse(from.amtype),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgAmop {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgAmop.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            amopfamily: PgCatalog.Types.Oid.parse(from.amopfamily),
            amoplefttype: PgCatalog.Types.Oid.parse(from.amoplefttype),
            amoprighttype: PgCatalog.Types.Oid.parse(from.amoprighttype),
            amopstrategy: PgCatalog.Types.Int2.parse(from.amopstrategy),
            amoppurpose: PgCatalog.Types.Char.parse(from.amoppurpose),
            amopopr: PgCatalog.Types.Oid.parse(from.amopopr),
            amopmethod: PgCatalog.Types.Oid.parse(from.amopmethod),
            amopsortfamily: PgCatalog.Types.Oid.parse(from.amopsortfamily),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgAmproc {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgAmproc.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            amprocfamily: PgCatalog.Types.Oid.parse(from.amprocfamily),
            amproclefttype: PgCatalog.Types.Oid.parse(from.amproclefttype),
            amprocrighttype: PgCatalog.Types.Oid.parse(from.amprocrighttype),
            amprocnum: PgCatalog.Types.Int2.parse(from.amprocnum),
            amproc: PgCatalog.Types.Regproc.parse(from.amproc),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgAttrdef {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgAttrdef.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            adrelid: PgCatalog.Types.Oid.parse(from.adrelid),
            adnum: PgCatalog.Types.Int2.parse(from.adnum),
            adbin: PgCatalog.Types.PgNodeTree.parse(from.adbin),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgAttribute {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgAttribute.is(from)) {
          return {
            attrelid: PgCatalog.Types.Oid.parse(from.attrelid),
            attname: PgCatalog.Types.Name.parse(from.attname),
            atttypid: PgCatalog.Types.Oid.parse(from.atttypid),
            attlen: PgCatalog.Types.Int2.parse(from.attlen),
            attnum: PgCatalog.Types.Int2.parse(from.attnum),
            attcacheoff: PgCatalog.Types.Int4.parse(from.attcacheoff),
            atttypmod: PgCatalog.Types.Int4.parse(from.atttypmod),
            attndims: PgCatalog.Types.Int2.parse(from.attndims),
            attbyval: PgCatalog.Types.Bool.parse(from.attbyval),
            attalign: PgCatalog.Types.Char.parse(from.attalign),
            attstorage: PgCatalog.Types.Char.parse(from.attstorage),
            attcompression: PgCatalog.Types.Char.parse(from.attcompression),
            attnotnull: PgCatalog.Types.Bool.parse(from.attnotnull),
            atthasdef: PgCatalog.Types.Bool.parse(from.atthasdef),
            atthasmissing: PgCatalog.Types.Bool.parse(from.atthasmissing),
            attidentity: PgCatalog.Types.Char.parse(from.attidentity),
            attgenerated: PgCatalog.Types.Char.parse(from.attgenerated),
            attisdropped: PgCatalog.Types.Bool.parse(from.attisdropped),
            attislocal: PgCatalog.Types.Bool.parse(from.attislocal),
            attinhcount: PgCatalog.Types.Int2.parse(from.attinhcount),
            attstattarget: PgCatalog.Types.Int2.parse(from.attstattarget),
            attcollation: PgCatalog.Types.Oid.parse(from.attcollation),
            attacl: PgCatalog.Types.AclitemArray.parse(from.attacl),
            attoptions: PgCatalog.Types.TextArray.parse(from.attoptions),
            attfdwoptions: PgCatalog.Types.TextArray.parse(from.attfdwoptions),
            attmissingval: PgCatalog.Types.Anyarray.parse(from.attmissingval),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgAuthMembers {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgAuthMembers.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            roleid: PgCatalog.Types.Oid.parse(from.roleid),
            member: PgCatalog.Types.Oid.parse(from.member),
            grantor: PgCatalog.Types.Oid.parse(from.grantor),
            adminOption: PgCatalog.Types.Bool.parse(from.adminOption),
            inheritOption: PgCatalog.Types.Bool.parse(from.inheritOption),
            setOption: PgCatalog.Types.Bool.parse(from.setOption),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgAuthid {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgAuthid.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            rolname: PgCatalog.Types.Name.parse(from.rolname),
            rolsuper: PgCatalog.Types.Bool.parse(from.rolsuper),
            rolinherit: PgCatalog.Types.Bool.parse(from.rolinherit),
            rolcreaterole: PgCatalog.Types.Bool.parse(from.rolcreaterole),
            rolcreatedb: PgCatalog.Types.Bool.parse(from.rolcreatedb),
            rolcanlogin: PgCatalog.Types.Bool.parse(from.rolcanlogin),
            rolreplication: PgCatalog.Types.Bool.parse(from.rolreplication),
            rolbypassrls: PgCatalog.Types.Bool.parse(from.rolbypassrls),
            rolconnlimit: PgCatalog.Types.Int4.parse(from.rolconnlimit),
            rolpassword: PgCatalog.Types.Text.parse(from.rolpassword),
            rolvaliduntil: PgCatalog.Types.Timestamptz.parse(
              from.rolvaliduntil,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgAvailableExtensionVersions {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgAvailableExtensionVersions.is(from)) {
          return {
            name: PgCatalog.Types.Name.parse(from.name),
            version: PgCatalog.Types.Text.parse(from.version),
            installed: PgCatalog.Types.Bool.parse(from.installed),
            superuser: PgCatalog.Types.Bool.parse(from.superuser),
            trusted: PgCatalog.Types.Bool.parse(from.trusted),
            relocatable: PgCatalog.Types.Bool.parse(from.relocatable),
            schema: PgCatalog.Types.Name.parse(from.schema),
            requires: PgCatalog.Types.NameArray.parse(from.requires),
            comment: PgCatalog.Types.Text.parse(from.comment),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgAvailableExtensions {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgAvailableExtensions.is(from)) {
          return {
            name: PgCatalog.Types.Name.parse(from.name),
            defaultVersion: PgCatalog.Types.Text.parse(from.defaultVersion),
            installedVersion: PgCatalog.Types.Text.parse(from.installedVersion),
            comment: PgCatalog.Types.Text.parse(from.comment),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgBackendMemoryContexts {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgBackendMemoryContexts.is(from)) {
          return {
            name: PgCatalog.Types.Text.parse(from.name),
            ident: PgCatalog.Types.Text.parse(from.ident),
            parent: PgCatalog.Types.Text.parse(from.parent),
            level: PgCatalog.Types.Int4.parse(from.level),
            totalBytes: PgCatalog.Types.Int8.parse(from.totalBytes),
            totalNblocks: PgCatalog.Types.Int8.parse(from.totalNblocks),
            freeBytes: PgCatalog.Types.Int8.parse(from.freeBytes),
            freeChunks: PgCatalog.Types.Int8.parse(from.freeChunks),
            usedBytes: PgCatalog.Types.Int8.parse(from.usedBytes),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgBrinBloomSummary {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return from;
        }
        throw new Error(`from is not a string`, { cause: from });
      }
    }
    export namespace PgBrinMinmaxMultiSummary {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return from;
        }
        throw new Error(`from is not a string`, { cause: from });
      }
    }
    export namespace PgCast {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgCast.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            castsource: PgCatalog.Types.Oid.parse(from.castsource),
            casttarget: PgCatalog.Types.Oid.parse(from.casttarget),
            castfunc: PgCatalog.Types.Oid.parse(from.castfunc),
            castcontext: PgCatalog.Types.Char.parse(from.castcontext),
            castmethod: PgCatalog.Types.Char.parse(from.castmethod),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgClass {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgClass.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            relname: PgCatalog.Types.Name.parse(from.relname),
            relnamespace: PgCatalog.Types.Oid.parse(from.relnamespace),
            reltype: PgCatalog.Types.Oid.parse(from.reltype),
            reloftype: PgCatalog.Types.Oid.parse(from.reloftype),
            relowner: PgCatalog.Types.Oid.parse(from.relowner),
            relam: PgCatalog.Types.Oid.parse(from.relam),
            relfilenode: PgCatalog.Types.Oid.parse(from.relfilenode),
            reltablespace: PgCatalog.Types.Oid.parse(from.reltablespace),
            relpages: PgCatalog.Types.Int4.parse(from.relpages),
            reltuples: PgCatalog.Types.Float4.parse(from.reltuples),
            relallvisible: PgCatalog.Types.Int4.parse(from.relallvisible),
            reltoastrelid: PgCatalog.Types.Oid.parse(from.reltoastrelid),
            relhasindex: PgCatalog.Types.Bool.parse(from.relhasindex),
            relisshared: PgCatalog.Types.Bool.parse(from.relisshared),
            relpersistence: PgCatalog.Types.Char.parse(from.relpersistence),
            relkind: PgCatalog.Types.Char.parse(from.relkind),
            relnatts: PgCatalog.Types.Int2.parse(from.relnatts),
            relchecks: PgCatalog.Types.Int2.parse(from.relchecks),
            relhasrules: PgCatalog.Types.Bool.parse(from.relhasrules),
            relhastriggers: PgCatalog.Types.Bool.parse(from.relhastriggers),
            relhassubclass: PgCatalog.Types.Bool.parse(from.relhassubclass),
            relrowsecurity: PgCatalog.Types.Bool.parse(from.relrowsecurity),
            relforcerowsecurity: PgCatalog.Types.Bool.parse(
              from.relforcerowsecurity,
            ),
            relispopulated: PgCatalog.Types.Bool.parse(from.relispopulated),
            relreplident: PgCatalog.Types.Char.parse(from.relreplident),
            relispartition: PgCatalog.Types.Bool.parse(from.relispartition),
            relrewrite: PgCatalog.Types.Oid.parse(from.relrewrite),
            relfrozenxid: PgCatalog.Types.Xid.parse(from.relfrozenxid),
            relminmxid: PgCatalog.Types.Xid.parse(from.relminmxid),
            relacl: PgCatalog.Types.AclitemArray.parse(from.relacl),
            reloptions: PgCatalog.Types.TextArray.parse(from.reloptions),
            relpartbound: PgCatalog.Types.PgNodeTree.parse(from.relpartbound),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgCollation {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgCollation.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            collname: PgCatalog.Types.Name.parse(from.collname),
            collnamespace: PgCatalog.Types.Oid.parse(from.collnamespace),
            collowner: PgCatalog.Types.Oid.parse(from.collowner),
            collprovider: PgCatalog.Types.Char.parse(from.collprovider),
            collisdeterministic: PgCatalog.Types.Bool.parse(
              from.collisdeterministic,
            ),
            collencoding: PgCatalog.Types.Int4.parse(from.collencoding),
            collcollate: PgCatalog.Types.Text.parse(from.collcollate),
            collctype: PgCatalog.Types.Text.parse(from.collctype),
            colliculocale: PgCatalog.Types.Text.parse(from.colliculocale),
            collicurules: PgCatalog.Types.Text.parse(from.collicurules),
            collversion: PgCatalog.Types.Text.parse(from.collversion),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgConfig {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgConfig.is(from)) {
          return {
            name: PgCatalog.Types.Text.parse(from.name),
            setting: PgCatalog.Types.Text.parse(from.setting),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgConstraint {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgConstraint.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            conname: PgCatalog.Types.Name.parse(from.conname),
            connamespace: PgCatalog.Types.Oid.parse(from.connamespace),
            contype: PgCatalog.Types.Char.parse(from.contype),
            condeferrable: PgCatalog.Types.Bool.parse(from.condeferrable),
            condeferred: PgCatalog.Types.Bool.parse(from.condeferred),
            convalidated: PgCatalog.Types.Bool.parse(from.convalidated),
            conrelid: PgCatalog.Types.Oid.parse(from.conrelid),
            contypid: PgCatalog.Types.Oid.parse(from.contypid),
            conindid: PgCatalog.Types.Oid.parse(from.conindid),
            conparentid: PgCatalog.Types.Oid.parse(from.conparentid),
            confrelid: PgCatalog.Types.Oid.parse(from.confrelid),
            confupdtype: PgCatalog.Types.Char.parse(from.confupdtype),
            confdeltype: PgCatalog.Types.Char.parse(from.confdeltype),
            confmatchtype: PgCatalog.Types.Char.parse(from.confmatchtype),
            conislocal: PgCatalog.Types.Bool.parse(from.conislocal),
            coninhcount: PgCatalog.Types.Int2.parse(from.coninhcount),
            connoinherit: PgCatalog.Types.Bool.parse(from.connoinherit),
            conkey: PgCatalog.Types.Int2Array.parse(from.conkey),
            confkey: PgCatalog.Types.Int2Array.parse(from.confkey),
            conpfeqop: PgCatalog.Types.OidArray.parse(from.conpfeqop),
            conppeqop: PgCatalog.Types.OidArray.parse(from.conppeqop),
            conffeqop: PgCatalog.Types.OidArray.parse(from.conffeqop),
            confdelsetcols: PgCatalog.Types.Int2Array.parse(
              from.confdelsetcols,
            ),
            conexclop: PgCatalog.Types.OidArray.parse(from.conexclop),
            conbin: PgCatalog.Types.PgNodeTree.parse(from.conbin),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgConversion {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgConversion.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            conname: PgCatalog.Types.Name.parse(from.conname),
            connamespace: PgCatalog.Types.Oid.parse(from.connamespace),
            conowner: PgCatalog.Types.Oid.parse(from.conowner),
            conforencoding: PgCatalog.Types.Int4.parse(from.conforencoding),
            contoencoding: PgCatalog.Types.Int4.parse(from.contoencoding),
            conproc: PgCatalog.Types.Regproc.parse(from.conproc),
            condefault: PgCatalog.Types.Bool.parse(from.condefault),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgCursors {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgCursors.is(from)) {
          return {
            name: PgCatalog.Types.Text.parse(from.name),
            statement: PgCatalog.Types.Text.parse(from.statement),
            isHoldable: PgCatalog.Types.Bool.parse(from.isHoldable),
            isBinary: PgCatalog.Types.Bool.parse(from.isBinary),
            isScrollable: PgCatalog.Types.Bool.parse(from.isScrollable),
            creationTime: PgCatalog.Types.Timestamptz.parse(from.creationTime),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgDatabase {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgDatabase.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            datname: PgCatalog.Types.Name.parse(from.datname),
            datdba: PgCatalog.Types.Oid.parse(from.datdba),
            encoding: PgCatalog.Types.Int4.parse(from.encoding),
            datlocprovider: PgCatalog.Types.Char.parse(from.datlocprovider),
            datistemplate: PgCatalog.Types.Bool.parse(from.datistemplate),
            datallowconn: PgCatalog.Types.Bool.parse(from.datallowconn),
            datconnlimit: PgCatalog.Types.Int4.parse(from.datconnlimit),
            datfrozenxid: PgCatalog.Types.Xid.parse(from.datfrozenxid),
            datminmxid: PgCatalog.Types.Xid.parse(from.datminmxid),
            dattablespace: PgCatalog.Types.Oid.parse(from.dattablespace),
            datcollate: PgCatalog.Types.Text.parse(from.datcollate),
            datctype: PgCatalog.Types.Text.parse(from.datctype),
            daticulocale: PgCatalog.Types.Text.parse(from.daticulocale),
            daticurules: PgCatalog.Types.Text.parse(from.daticurules),
            datcollversion: PgCatalog.Types.Text.parse(from.datcollversion),
            datacl: PgCatalog.Types.AclitemArray.parse(from.datacl),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgDbRoleSetting {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgDbRoleSetting.is(from)) {
          return {
            setdatabase: PgCatalog.Types.Oid.parse(from.setdatabase),
            setrole: PgCatalog.Types.Oid.parse(from.setrole),
            setconfig: PgCatalog.Types.TextArray.parse(from.setconfig),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgDdlCommand {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace PgDefaultAcl {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgDefaultAcl.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            defaclrole: PgCatalog.Types.Oid.parse(from.defaclrole),
            defaclnamespace: PgCatalog.Types.Oid.parse(from.defaclnamespace),
            defaclobjtype: PgCatalog.Types.Char.parse(from.defaclobjtype),
            defaclacl: PgCatalog.Types.AclitemArray.parse(from.defaclacl),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgDepend {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgDepend.is(from)) {
          return {
            classid: PgCatalog.Types.Oid.parse(from.classid),
            objid: PgCatalog.Types.Oid.parse(from.objid),
            objsubid: PgCatalog.Types.Int4.parse(from.objsubid),
            refclassid: PgCatalog.Types.Oid.parse(from.refclassid),
            refobjid: PgCatalog.Types.Oid.parse(from.refobjid),
            refobjsubid: PgCatalog.Types.Int4.parse(from.refobjsubid),
            deptype: PgCatalog.Types.Char.parse(from.deptype),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgDependencies {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return from;
        }
        throw new Error(`from is not a string`, { cause: from });
      }
    }
    export namespace PgDescription {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgDescription.is(from)) {
          return {
            objoid: PgCatalog.Types.Oid.parse(from.objoid),
            classoid: PgCatalog.Types.Oid.parse(from.classoid),
            objsubid: PgCatalog.Types.Int4.parse(from.objsubid),
            description: PgCatalog.Types.Text.parse(from.description),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgEnum {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgEnum.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            enumtypid: PgCatalog.Types.Oid.parse(from.enumtypid),
            enumsortorder: PgCatalog.Types.Float4.parse(from.enumsortorder),
            enumlabel: PgCatalog.Types.Name.parse(from.enumlabel),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgEventTrigger {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgEventTrigger.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            evtname: PgCatalog.Types.Name.parse(from.evtname),
            evtevent: PgCatalog.Types.Name.parse(from.evtevent),
            evtowner: PgCatalog.Types.Oid.parse(from.evtowner),
            evtfoid: PgCatalog.Types.Oid.parse(from.evtfoid),
            evtenabled: PgCatalog.Types.Char.parse(from.evtenabled),
            evttags: PgCatalog.Types.TextArray.parse(from.evttags),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgExtension {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgExtension.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            extname: PgCatalog.Types.Name.parse(from.extname),
            extowner: PgCatalog.Types.Oid.parse(from.extowner),
            extnamespace: PgCatalog.Types.Oid.parse(from.extnamespace),
            extrelocatable: PgCatalog.Types.Bool.parse(from.extrelocatable),
            extversion: PgCatalog.Types.Text.parse(from.extversion),
            extconfig: PgCatalog.Types.OidArray.parse(from.extconfig),
            extcondition: PgCatalog.Types.TextArray.parse(from.extcondition),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgFileSettings {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgFileSettings.is(from)) {
          return {
            sourcefile: PgCatalog.Types.Text.parse(from.sourcefile),
            sourceline: PgCatalog.Types.Int4.parse(from.sourceline),
            seqno: PgCatalog.Types.Int4.parse(from.seqno),
            name: PgCatalog.Types.Text.parse(from.name),
            setting: PgCatalog.Types.Text.parse(from.setting),
            applied: PgCatalog.Types.Bool.parse(from.applied),
            error: PgCatalog.Types.Text.parse(from.error),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgForeignDataWrapper {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgForeignDataWrapper.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            fdwname: PgCatalog.Types.Name.parse(from.fdwname),
            fdwowner: PgCatalog.Types.Oid.parse(from.fdwowner),
            fdwhandler: PgCatalog.Types.Oid.parse(from.fdwhandler),
            fdwvalidator: PgCatalog.Types.Oid.parse(from.fdwvalidator),
            fdwacl: PgCatalog.Types.AclitemArray.parse(from.fdwacl),
            fdwoptions: PgCatalog.Types.TextArray.parse(from.fdwoptions),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgForeignServer {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgForeignServer.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            srvname: PgCatalog.Types.Name.parse(from.srvname),
            srvowner: PgCatalog.Types.Oid.parse(from.srvowner),
            srvfdw: PgCatalog.Types.Oid.parse(from.srvfdw),
            srvtype: PgCatalog.Types.Text.parse(from.srvtype),
            srvversion: PgCatalog.Types.Text.parse(from.srvversion),
            srvacl: PgCatalog.Types.AclitemArray.parse(from.srvacl),
            srvoptions: PgCatalog.Types.TextArray.parse(from.srvoptions),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgForeignTable {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgForeignTable.is(from)) {
          return {
            ftrelid: PgCatalog.Types.Oid.parse(from.ftrelid),
            ftserver: PgCatalog.Types.Oid.parse(from.ftserver),
            ftoptions: PgCatalog.Types.TextArray.parse(from.ftoptions),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgGroup {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgGroup.is(from)) {
          return {
            groname: PgCatalog.Types.Name.parse(from.groname),
            grosysid: PgCatalog.Types.Oid.parse(from.grosysid),
            grolist: PgCatalog.Types.OidArray.parse(from.grolist),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgHbaFileRules {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgHbaFileRules.is(from)) {
          return {
            ruleNumber: PgCatalog.Types.Int4.parse(from.ruleNumber),
            fileName: PgCatalog.Types.Text.parse(from.fileName),
            lineNumber: PgCatalog.Types.Int4.parse(from.lineNumber),
            type: PgCatalog.Types.Text.parse(from.type),
            database: PgCatalog.Types.TextArray.parse(from.database),
            userName: PgCatalog.Types.TextArray.parse(from.userName),
            address: PgCatalog.Types.Text.parse(from.address),
            netmask: PgCatalog.Types.Text.parse(from.netmask),
            authMethod: PgCatalog.Types.Text.parse(from.authMethod),
            options: PgCatalog.Types.TextArray.parse(from.options),
            error: PgCatalog.Types.Text.parse(from.error),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgIdentFileMappings {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgIdentFileMappings.is(from)) {
          return {
            mapNumber: PgCatalog.Types.Int4.parse(from.mapNumber),
            fileName: PgCatalog.Types.Text.parse(from.fileName),
            lineNumber: PgCatalog.Types.Int4.parse(from.lineNumber),
            mapName: PgCatalog.Types.Text.parse(from.mapName),
            sysName: PgCatalog.Types.Text.parse(from.sysName),
            pgUsername: PgCatalog.Types.Text.parse(from.pgUsername),
            error: PgCatalog.Types.Text.parse(from.error),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgIndex {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgIndex.is(from)) {
          return {
            indexrelid: PgCatalog.Types.Oid.parse(from.indexrelid),
            indrelid: PgCatalog.Types.Oid.parse(from.indrelid),
            indnatts: PgCatalog.Types.Int2.parse(from.indnatts),
            indnkeyatts: PgCatalog.Types.Int2.parse(from.indnkeyatts),
            indisunique: PgCatalog.Types.Bool.parse(from.indisunique),
            indnullsnotdistinct: PgCatalog.Types.Bool.parse(
              from.indnullsnotdistinct,
            ),
            indisprimary: PgCatalog.Types.Bool.parse(from.indisprimary),
            indisexclusion: PgCatalog.Types.Bool.parse(from.indisexclusion),
            indimmediate: PgCatalog.Types.Bool.parse(from.indimmediate),
            indisclustered: PgCatalog.Types.Bool.parse(from.indisclustered),
            indisvalid: PgCatalog.Types.Bool.parse(from.indisvalid),
            indcheckxmin: PgCatalog.Types.Bool.parse(from.indcheckxmin),
            indisready: PgCatalog.Types.Bool.parse(from.indisready),
            indislive: PgCatalog.Types.Bool.parse(from.indislive),
            indisreplident: PgCatalog.Types.Bool.parse(from.indisreplident),
            indkey: PgCatalog.Types.Int2vector.parse(from.indkey),
            indcollation: PgCatalog.Types.Oidvector.parse(from.indcollation),
            indclass: PgCatalog.Types.Oidvector.parse(from.indclass),
            indoption: PgCatalog.Types.Int2vector.parse(from.indoption),
            indexprs: PgCatalog.Types.PgNodeTree.parse(from.indexprs),
            indpred: PgCatalog.Types.PgNodeTree.parse(from.indpred),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgIndexes {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgIndexes.is(from)) {
          return {
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            tablename: PgCatalog.Types.Name.parse(from.tablename),
            indexname: PgCatalog.Types.Name.parse(from.indexname),
            tablespace: PgCatalog.Types.Name.parse(from.tablespace),
            indexdef: PgCatalog.Types.Text.parse(from.indexdef),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgInherits {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgInherits.is(from)) {
          return {
            inhrelid: PgCatalog.Types.Oid.parse(from.inhrelid),
            inhparent: PgCatalog.Types.Oid.parse(from.inhparent),
            inhseqno: PgCatalog.Types.Int4.parse(from.inhseqno),
            inhdetachpending: PgCatalog.Types.Bool.parse(from.inhdetachpending),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgInitPrivs {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgInitPrivs.is(from)) {
          return {
            objoid: PgCatalog.Types.Oid.parse(from.objoid),
            classoid: PgCatalog.Types.Oid.parse(from.classoid),
            objsubid: PgCatalog.Types.Int4.parse(from.objsubid),
            privtype: PgCatalog.Types.Char.parse(from.privtype),
            initprivs: PgCatalog.Types.AclitemArray.parse(from.initprivs),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgLanguage {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgLanguage.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            lanname: PgCatalog.Types.Name.parse(from.lanname),
            lanowner: PgCatalog.Types.Oid.parse(from.lanowner),
            lanispl: PgCatalog.Types.Bool.parse(from.lanispl),
            lanpltrusted: PgCatalog.Types.Bool.parse(from.lanpltrusted),
            lanplcallfoid: PgCatalog.Types.Oid.parse(from.lanplcallfoid),
            laninline: PgCatalog.Types.Oid.parse(from.laninline),
            lanvalidator: PgCatalog.Types.Oid.parse(from.lanvalidator),
            lanacl: PgCatalog.Types.AclitemArray.parse(from.lanacl),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgLargeobject {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgLargeobject.is(from)) {
          return {
            loid: PgCatalog.Types.Oid.parse(from.loid),
            pageno: PgCatalog.Types.Int4.parse(from.pageno),
            data: PgCatalog.Types.Bytea.parse(from.data),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgLargeobjectMetadata {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgLargeobjectMetadata.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            lomowner: PgCatalog.Types.Oid.parse(from.lomowner),
            lomacl: PgCatalog.Types.AclitemArray.parse(from.lomacl),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgLocks {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgLocks.is(from)) {
          return {
            locktype: PgCatalog.Types.Text.parse(from.locktype),
            database: PgCatalog.Types.Oid.parse(from.database),
            relation: PgCatalog.Types.Oid.parse(from.relation),
            page: PgCatalog.Types.Int4.parse(from.page),
            tuple: PgCatalog.Types.Int2.parse(from.tuple),
            virtualxid: PgCatalog.Types.Text.parse(from.virtualxid),
            transactionid: PgCatalog.Types.Xid.parse(from.transactionid),
            classid: PgCatalog.Types.Oid.parse(from.classid),
            objid: PgCatalog.Types.Oid.parse(from.objid),
            objsubid: PgCatalog.Types.Int2.parse(from.objsubid),
            virtualtransaction: PgCatalog.Types.Text.parse(
              from.virtualtransaction,
            ),
            pid: PgCatalog.Types.Int4.parse(from.pid),
            mode: PgCatalog.Types.Text.parse(from.mode),
            granted: PgCatalog.Types.Bool.parse(from.granted),
            fastpath: PgCatalog.Types.Bool.parse(from.fastpath),
            waitstart: PgCatalog.Types.Timestamptz.parse(from.waitstart),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgLsn {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "bigint") {
          return from;
        }
        if (typeof from === "number") {
          return BigInt(from);
        }
        if (typeof from === "string") {
          if (from === "") return null;
          return BigInt(from);
        }
        return null;
      }
    }
    export namespace PgMatviews {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgMatviews.is(from)) {
          return {
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            matviewname: PgCatalog.Types.Name.parse(from.matviewname),
            matviewowner: PgCatalog.Types.Name.parse(from.matviewowner),
            tablespace: PgCatalog.Types.Name.parse(from.tablespace),
            hasindexes: PgCatalog.Types.Bool.parse(from.hasindexes),
            ispopulated: PgCatalog.Types.Bool.parse(from.ispopulated),
            definition: PgCatalog.Types.Text.parse(from.definition),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgMcvList {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return from;
        }
        throw new Error(`from is not a string`, { cause: from });
      }
    }
    export namespace PgNamespace {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgNamespace.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            nspname: PgCatalog.Types.Name.parse(from.nspname),
            nspowner: PgCatalog.Types.Oid.parse(from.nspowner),
            nspacl: PgCatalog.Types.AclitemArray.parse(from.nspacl),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgNdistinct {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return from;
        }
        throw new Error(`from is not a string`, { cause: from });
      }
    }
    export namespace PgNodeTree {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return from;
        }
        throw new Error(`from is not a string`, { cause: from });
      }
    }
    export namespace PgOpclass {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgOpclass.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            opcmethod: PgCatalog.Types.Oid.parse(from.opcmethod),
            opcname: PgCatalog.Types.Name.parse(from.opcname),
            opcnamespace: PgCatalog.Types.Oid.parse(from.opcnamespace),
            opcowner: PgCatalog.Types.Oid.parse(from.opcowner),
            opcfamily: PgCatalog.Types.Oid.parse(from.opcfamily),
            opcintype: PgCatalog.Types.Oid.parse(from.opcintype),
            opcdefault: PgCatalog.Types.Bool.parse(from.opcdefault),
            opckeytype: PgCatalog.Types.Oid.parse(from.opckeytype),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgOperator {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgOperator.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            oprname: PgCatalog.Types.Name.parse(from.oprname),
            oprnamespace: PgCatalog.Types.Oid.parse(from.oprnamespace),
            oprowner: PgCatalog.Types.Oid.parse(from.oprowner),
            oprkind: PgCatalog.Types.Char.parse(from.oprkind),
            oprcanmerge: PgCatalog.Types.Bool.parse(from.oprcanmerge),
            oprcanhash: PgCatalog.Types.Bool.parse(from.oprcanhash),
            oprleft: PgCatalog.Types.Oid.parse(from.oprleft),
            oprright: PgCatalog.Types.Oid.parse(from.oprright),
            oprresult: PgCatalog.Types.Oid.parse(from.oprresult),
            oprcom: PgCatalog.Types.Oid.parse(from.oprcom),
            oprnegate: PgCatalog.Types.Oid.parse(from.oprnegate),
            oprcode: PgCatalog.Types.Regproc.parse(from.oprcode),
            oprrest: PgCatalog.Types.Regproc.parse(from.oprrest),
            oprjoin: PgCatalog.Types.Regproc.parse(from.oprjoin),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgOpfamily {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgOpfamily.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            opfmethod: PgCatalog.Types.Oid.parse(from.opfmethod),
            opfname: PgCatalog.Types.Name.parse(from.opfname),
            opfnamespace: PgCatalog.Types.Oid.parse(from.opfnamespace),
            opfowner: PgCatalog.Types.Oid.parse(from.opfowner),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgParameterAcl {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgParameterAcl.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            parname: PgCatalog.Types.Text.parse(from.parname),
            paracl: PgCatalog.Types.AclitemArray.parse(from.paracl),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgPartitionedTable {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgPartitionedTable.is(from)) {
          return {
            partrelid: PgCatalog.Types.Oid.parse(from.partrelid),
            partstrat: PgCatalog.Types.Char.parse(from.partstrat),
            partnatts: PgCatalog.Types.Int2.parse(from.partnatts),
            partdefid: PgCatalog.Types.Oid.parse(from.partdefid),
            partattrs: PgCatalog.Types.Int2vector.parse(from.partattrs),
            partclass: PgCatalog.Types.Oidvector.parse(from.partclass),
            partcollation: PgCatalog.Types.Oidvector.parse(from.partcollation),
            partexprs: PgCatalog.Types.PgNodeTree.parse(from.partexprs),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgPolicies {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgPolicies.is(from)) {
          return {
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            tablename: PgCatalog.Types.Name.parse(from.tablename),
            policyname: PgCatalog.Types.Name.parse(from.policyname),
            permissive: PgCatalog.Types.Text.parse(from.permissive),
            roles: PgCatalog.Types.NameArray.parse(from.roles),
            cmd: PgCatalog.Types.Text.parse(from.cmd),
            qual: PgCatalog.Types.Text.parse(from.qual),
            withCheck: PgCatalog.Types.Text.parse(from.withCheck),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgPolicy {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgPolicy.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            polname: PgCatalog.Types.Name.parse(from.polname),
            polrelid: PgCatalog.Types.Oid.parse(from.polrelid),
            polcmd: PgCatalog.Types.Char.parse(from.polcmd),
            polpermissive: PgCatalog.Types.Bool.parse(from.polpermissive),
            polroles: PgCatalog.Types.OidArray.parse(from.polroles),
            polqual: PgCatalog.Types.PgNodeTree.parse(from.polqual),
            polwithcheck: PgCatalog.Types.PgNodeTree.parse(from.polwithcheck),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgPreparedStatements {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgPreparedStatements.is(from)) {
          return {
            name: PgCatalog.Types.Text.parse(from.name),
            statement: PgCatalog.Types.Text.parse(from.statement),
            prepareTime: PgCatalog.Types.Timestamptz.parse(from.prepareTime),
            parameterTypes: PgCatalog.Types.RegtypeArray.parse(
              from.parameterTypes,
            ),
            resultTypes: PgCatalog.Types.RegtypeArray.parse(from.resultTypes),
            fromSql: PgCatalog.Types.Bool.parse(from.fromSql),
            genericPlans: PgCatalog.Types.Int8.parse(from.genericPlans),
            customPlans: PgCatalog.Types.Int8.parse(from.customPlans),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgPreparedXacts {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgPreparedXacts.is(from)) {
          return {
            transaction: PgCatalog.Types.Xid.parse(from.transaction),
            gid: PgCatalog.Types.Text.parse(from.gid),
            prepared: PgCatalog.Types.Timestamptz.parse(from.prepared),
            owner: PgCatalog.Types.Name.parse(from.owner),
            database: PgCatalog.Types.Name.parse(from.database),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgProc {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgProc.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            proname: PgCatalog.Types.Name.parse(from.proname),
            pronamespace: PgCatalog.Types.Oid.parse(from.pronamespace),
            proowner: PgCatalog.Types.Oid.parse(from.proowner),
            prolang: PgCatalog.Types.Oid.parse(from.prolang),
            procost: PgCatalog.Types.Float4.parse(from.procost),
            prorows: PgCatalog.Types.Float4.parse(from.prorows),
            provariadic: PgCatalog.Types.Oid.parse(from.provariadic),
            prosupport: PgCatalog.Types.Regproc.parse(from.prosupport),
            prokind: PgCatalog.Types.Char.parse(from.prokind),
            prosecdef: PgCatalog.Types.Bool.parse(from.prosecdef),
            proleakproof: PgCatalog.Types.Bool.parse(from.proleakproof),
            proisstrict: PgCatalog.Types.Bool.parse(from.proisstrict),
            proretset: PgCatalog.Types.Bool.parse(from.proretset),
            provolatile: PgCatalog.Types.Char.parse(from.provolatile),
            proparallel: PgCatalog.Types.Char.parse(from.proparallel),
            pronargs: PgCatalog.Types.Int2.parse(from.pronargs),
            pronargdefaults: PgCatalog.Types.Int2.parse(from.pronargdefaults),
            prorettype: PgCatalog.Types.Oid.parse(from.prorettype),
            proargtypes: PgCatalog.Types.Oidvector.parse(from.proargtypes),
            proallargtypes: PgCatalog.Types.OidArray.parse(from.proallargtypes),
            proargmodes: PgCatalog.Types.CharArray.parse(from.proargmodes),
            proargnames: PgCatalog.Types.TextArray.parse(from.proargnames),
            proargdefaults: PgCatalog.Types.PgNodeTree.parse(
              from.proargdefaults,
            ),
            protrftypes: PgCatalog.Types.OidArray.parse(from.protrftypes),
            prosrc: PgCatalog.Types.Text.parse(from.prosrc),
            probin: PgCatalog.Types.Text.parse(from.probin),
            prosqlbody: PgCatalog.Types.PgNodeTree.parse(from.prosqlbody),
            proconfig: PgCatalog.Types.TextArray.parse(from.proconfig),
            proacl: PgCatalog.Types.AclitemArray.parse(from.proacl),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgPublication {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgPublication.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            pubname: PgCatalog.Types.Name.parse(from.pubname),
            pubowner: PgCatalog.Types.Oid.parse(from.pubowner),
            puballtables: PgCatalog.Types.Bool.parse(from.puballtables),
            pubinsert: PgCatalog.Types.Bool.parse(from.pubinsert),
            pubupdate: PgCatalog.Types.Bool.parse(from.pubupdate),
            pubdelete: PgCatalog.Types.Bool.parse(from.pubdelete),
            pubtruncate: PgCatalog.Types.Bool.parse(from.pubtruncate),
            pubviaroot: PgCatalog.Types.Bool.parse(from.pubviaroot),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgPublicationNamespace {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgPublicationNamespace.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            pnpubid: PgCatalog.Types.Oid.parse(from.pnpubid),
            pnnspid: PgCatalog.Types.Oid.parse(from.pnnspid),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgPublicationRel {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgPublicationRel.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            prpubid: PgCatalog.Types.Oid.parse(from.prpubid),
            prrelid: PgCatalog.Types.Oid.parse(from.prrelid),
            prqual: PgCatalog.Types.PgNodeTree.parse(from.prqual),
            prattrs: PgCatalog.Types.Int2vector.parse(from.prattrs),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgPublicationTables {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgPublicationTables.is(from)) {
          return {
            pubname: PgCatalog.Types.Name.parse(from.pubname),
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            tablename: PgCatalog.Types.Name.parse(from.tablename),
            attnames: PgCatalog.Types.NameArray.parse(from.attnames),
            rowfilter: PgCatalog.Types.Text.parse(from.rowfilter),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgRange {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgRange.is(from)) {
          return {
            rngtypid: PgCatalog.Types.Oid.parse(from.rngtypid),
            rngsubtype: PgCatalog.Types.Oid.parse(from.rngsubtype),
            rngmultitypid: PgCatalog.Types.Oid.parse(from.rngmultitypid),
            rngcollation: PgCatalog.Types.Oid.parse(from.rngcollation),
            rngsubopc: PgCatalog.Types.Oid.parse(from.rngsubopc),
            rngcanonical: PgCatalog.Types.Regproc.parse(from.rngcanonical),
            rngsubdiff: PgCatalog.Types.Regproc.parse(from.rngsubdiff),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgReplicationOrigin {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgReplicationOrigin.is(from)) {
          return {
            roident: PgCatalog.Types.Oid.parse(from.roident),
            roname: PgCatalog.Types.Text.parse(from.roname),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgReplicationOriginStatus {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgReplicationOriginStatus.is(from)) {
          return {
            localId: PgCatalog.Types.Oid.parse(from.localId),
            externalId: PgCatalog.Types.Text.parse(from.externalId),
            remoteLsn: PgCatalog.Types.PgLsn.parse(from.remoteLsn),
            localLsn: PgCatalog.Types.PgLsn.parse(from.localLsn),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgReplicationSlots {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgReplicationSlots.is(from)) {
          return {
            slotName: PgCatalog.Types.Name.parse(from.slotName),
            plugin: PgCatalog.Types.Name.parse(from.plugin),
            slotType: PgCatalog.Types.Text.parse(from.slotType),
            datoid: PgCatalog.Types.Oid.parse(from.datoid),
            database: PgCatalog.Types.Name.parse(from.database),
            temporary: PgCatalog.Types.Bool.parse(from.temporary),
            active: PgCatalog.Types.Bool.parse(from.active),
            activePid: PgCatalog.Types.Int4.parse(from.activePid),
            xmin: PgCatalog.Types.Xid.parse(from.xmin),
            catalogXmin: PgCatalog.Types.Xid.parse(from.catalogXmin),
            restartLsn: PgCatalog.Types.PgLsn.parse(from.restartLsn),
            confirmedFlushLsn: PgCatalog.Types.PgLsn.parse(
              from.confirmedFlushLsn,
            ),
            walStatus: PgCatalog.Types.Text.parse(from.walStatus),
            safeWalSize: PgCatalog.Types.Int8.parse(from.safeWalSize),
            twoPhase: PgCatalog.Types.Bool.parse(from.twoPhase),
            conflicting: PgCatalog.Types.Bool.parse(from.conflicting),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgRewrite {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgRewrite.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            rulename: PgCatalog.Types.Name.parse(from.rulename),
            evClass: PgCatalog.Types.Oid.parse(from.evClass),
            evType: PgCatalog.Types.Char.parse(from.evType),
            evEnabled: PgCatalog.Types.Char.parse(from.evEnabled),
            isInstead: PgCatalog.Types.Bool.parse(from.isInstead),
            evQual: PgCatalog.Types.PgNodeTree.parse(from.evQual),
            evAction: PgCatalog.Types.PgNodeTree.parse(from.evAction),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgRoles {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgRoles.is(from)) {
          return {
            rolname: PgCatalog.Types.Name.parse(from.rolname),
            rolsuper: PgCatalog.Types.Bool.parse(from.rolsuper),
            rolinherit: PgCatalog.Types.Bool.parse(from.rolinherit),
            rolcreaterole: PgCatalog.Types.Bool.parse(from.rolcreaterole),
            rolcreatedb: PgCatalog.Types.Bool.parse(from.rolcreatedb),
            rolcanlogin: PgCatalog.Types.Bool.parse(from.rolcanlogin),
            rolreplication: PgCatalog.Types.Bool.parse(from.rolreplication),
            rolconnlimit: PgCatalog.Types.Int4.parse(from.rolconnlimit),
            rolpassword: PgCatalog.Types.Text.parse(from.rolpassword),
            rolvaliduntil: PgCatalog.Types.Timestamptz.parse(
              from.rolvaliduntil,
            ),
            rolbypassrls: PgCatalog.Types.Bool.parse(from.rolbypassrls),
            rolconfig: PgCatalog.Types.TextArray.parse(from.rolconfig),
            oid: PgCatalog.Types.Oid.parse(from.oid),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgRules {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgRules.is(from)) {
          return {
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            tablename: PgCatalog.Types.Name.parse(from.tablename),
            rulename: PgCatalog.Types.Name.parse(from.rulename),
            definition: PgCatalog.Types.Text.parse(from.definition),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgSeclabel {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgSeclabel.is(from)) {
          return {
            objoid: PgCatalog.Types.Oid.parse(from.objoid),
            classoid: PgCatalog.Types.Oid.parse(from.classoid),
            objsubid: PgCatalog.Types.Int4.parse(from.objsubid),
            provider: PgCatalog.Types.Text.parse(from.provider),
            label: PgCatalog.Types.Text.parse(from.label),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgSeclabels {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgSeclabels.is(from)) {
          return {
            objoid: PgCatalog.Types.Oid.parse(from.objoid),
            classoid: PgCatalog.Types.Oid.parse(from.classoid),
            objsubid: PgCatalog.Types.Int4.parse(from.objsubid),
            objtype: PgCatalog.Types.Text.parse(from.objtype),
            objnamespace: PgCatalog.Types.Oid.parse(from.objnamespace),
            objname: PgCatalog.Types.Text.parse(from.objname),
            provider: PgCatalog.Types.Text.parse(from.provider),
            label: PgCatalog.Types.Text.parse(from.label),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgSequence {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgSequence.is(from)) {
          return {
            seqrelid: PgCatalog.Types.Oid.parse(from.seqrelid),
            seqtypid: PgCatalog.Types.Oid.parse(from.seqtypid),
            seqstart: PgCatalog.Types.Int8.parse(from.seqstart),
            seqincrement: PgCatalog.Types.Int8.parse(from.seqincrement),
            seqmax: PgCatalog.Types.Int8.parse(from.seqmax),
            seqmin: PgCatalog.Types.Int8.parse(from.seqmin),
            seqcache: PgCatalog.Types.Int8.parse(from.seqcache),
            seqcycle: PgCatalog.Types.Bool.parse(from.seqcycle),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgSequences {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgSequences.is(from)) {
          return {
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            sequencename: PgCatalog.Types.Name.parse(from.sequencename),
            sequenceowner: PgCatalog.Types.Name.parse(from.sequenceowner),
            dataType: PgCatalog.Types.Regtype.parse(from.dataType),
            startValue: PgCatalog.Types.Int8.parse(from.startValue),
            minValue: PgCatalog.Types.Int8.parse(from.minValue),
            maxValue: PgCatalog.Types.Int8.parse(from.maxValue),
            incrementBy: PgCatalog.Types.Int8.parse(from.incrementBy),
            cycle: PgCatalog.Types.Bool.parse(from.cycle),
            cacheSize: PgCatalog.Types.Int8.parse(from.cacheSize),
            lastValue: PgCatalog.Types.Int8.parse(from.lastValue),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgSettings {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgSettings.is(from)) {
          return {
            name: PgCatalog.Types.Text.parse(from.name),
            setting: PgCatalog.Types.Text.parse(from.setting),
            unit: PgCatalog.Types.Text.parse(from.unit),
            category: PgCatalog.Types.Text.parse(from.category),
            shortDesc: PgCatalog.Types.Text.parse(from.shortDesc),
            extraDesc: PgCatalog.Types.Text.parse(from.extraDesc),
            context: PgCatalog.Types.Text.parse(from.context),
            vartype: PgCatalog.Types.Text.parse(from.vartype),
            source: PgCatalog.Types.Text.parse(from.source),
            minVal: PgCatalog.Types.Text.parse(from.minVal),
            maxVal: PgCatalog.Types.Text.parse(from.maxVal),
            enumvals: PgCatalog.Types.TextArray.parse(from.enumvals),
            bootVal: PgCatalog.Types.Text.parse(from.bootVal),
            resetVal: PgCatalog.Types.Text.parse(from.resetVal),
            sourcefile: PgCatalog.Types.Text.parse(from.sourcefile),
            sourceline: PgCatalog.Types.Int4.parse(from.sourceline),
            pendingRestart: PgCatalog.Types.Bool.parse(from.pendingRestart),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgShadow {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgShadow.is(from)) {
          return {
            usename: PgCatalog.Types.Name.parse(from.usename),
            usesysid: PgCatalog.Types.Oid.parse(from.usesysid),
            usecreatedb: PgCatalog.Types.Bool.parse(from.usecreatedb),
            usesuper: PgCatalog.Types.Bool.parse(from.usesuper),
            userepl: PgCatalog.Types.Bool.parse(from.userepl),
            usebypassrls: PgCatalog.Types.Bool.parse(from.usebypassrls),
            passwd: PgCatalog.Types.Text.parse(from.passwd),
            valuntil: PgCatalog.Types.Timestamptz.parse(from.valuntil),
            useconfig: PgCatalog.Types.TextArray.parse(from.useconfig),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgShdepend {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgShdepend.is(from)) {
          return {
            dbid: PgCatalog.Types.Oid.parse(from.dbid),
            classid: PgCatalog.Types.Oid.parse(from.classid),
            objid: PgCatalog.Types.Oid.parse(from.objid),
            objsubid: PgCatalog.Types.Int4.parse(from.objsubid),
            refclassid: PgCatalog.Types.Oid.parse(from.refclassid),
            refobjid: PgCatalog.Types.Oid.parse(from.refobjid),
            deptype: PgCatalog.Types.Char.parse(from.deptype),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgShdescription {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgShdescription.is(from)) {
          return {
            objoid: PgCatalog.Types.Oid.parse(from.objoid),
            classoid: PgCatalog.Types.Oid.parse(from.classoid),
            description: PgCatalog.Types.Text.parse(from.description),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgShmemAllocations {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgShmemAllocations.is(from)) {
          return {
            name: PgCatalog.Types.Text.parse(from.name),
            off: PgCatalog.Types.Int8.parse(from.off),
            size: PgCatalog.Types.Int8.parse(from.size),
            allocatedSize: PgCatalog.Types.Int8.parse(from.allocatedSize),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgShseclabel {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgShseclabel.is(from)) {
          return {
            objoid: PgCatalog.Types.Oid.parse(from.objoid),
            classoid: PgCatalog.Types.Oid.parse(from.classoid),
            provider: PgCatalog.Types.Text.parse(from.provider),
            label: PgCatalog.Types.Text.parse(from.label),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgSnapshot {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return from;
        }
        throw new Error(`from is not a string`, { cause: from });
      }
    }
    export namespace PgStatActivity {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatActivity.is(from)) {
          return {
            datid: PgCatalog.Types.Oid.parse(from.datid),
            datname: PgCatalog.Types.Name.parse(from.datname),
            pid: PgCatalog.Types.Int4.parse(from.pid),
            leaderPid: PgCatalog.Types.Int4.parse(from.leaderPid),
            usesysid: PgCatalog.Types.Oid.parse(from.usesysid),
            usename: PgCatalog.Types.Name.parse(from.usename),
            applicationName: PgCatalog.Types.Text.parse(from.applicationName),
            clientAddr: PgCatalog.Types.Inet.parse(from.clientAddr),
            clientHostname: PgCatalog.Types.Text.parse(from.clientHostname),
            clientPort: PgCatalog.Types.Int4.parse(from.clientPort),
            backendStart: PgCatalog.Types.Timestamptz.parse(from.backendStart),
            xactStart: PgCatalog.Types.Timestamptz.parse(from.xactStart),
            queryStart: PgCatalog.Types.Timestamptz.parse(from.queryStart),
            stateChange: PgCatalog.Types.Timestamptz.parse(from.stateChange),
            waitEventType: PgCatalog.Types.Text.parse(from.waitEventType),
            waitEvent: PgCatalog.Types.Text.parse(from.waitEvent),
            state: PgCatalog.Types.Text.parse(from.state),
            backendXid: PgCatalog.Types.Xid.parse(from.backendXid),
            backendXmin: PgCatalog.Types.Xid.parse(from.backendXmin),
            queryId: PgCatalog.Types.Int8.parse(from.queryId),
            query: PgCatalog.Types.Text.parse(from.query),
            backendType: PgCatalog.Types.Text.parse(from.backendType),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatAllIndexes {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatAllIndexes.is(from)) {
          return {
            relid: PgCatalog.Types.Oid.parse(from.relid),
            indexrelid: PgCatalog.Types.Oid.parse(from.indexrelid),
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            relname: PgCatalog.Types.Name.parse(from.relname),
            indexrelname: PgCatalog.Types.Name.parse(from.indexrelname),
            idxScan: PgCatalog.Types.Int8.parse(from.idxScan),
            lastIdxScan: PgCatalog.Types.Timestamptz.parse(from.lastIdxScan),
            idxTupRead: PgCatalog.Types.Int8.parse(from.idxTupRead),
            idxTupFetch: PgCatalog.Types.Int8.parse(from.idxTupFetch),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatAllTables {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatAllTables.is(from)) {
          return {
            relid: PgCatalog.Types.Oid.parse(from.relid),
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            relname: PgCatalog.Types.Name.parse(from.relname),
            seqScan: PgCatalog.Types.Int8.parse(from.seqScan),
            lastSeqScan: PgCatalog.Types.Timestamptz.parse(from.lastSeqScan),
            seqTupRead: PgCatalog.Types.Int8.parse(from.seqTupRead),
            idxScan: PgCatalog.Types.Int8.parse(from.idxScan),
            lastIdxScan: PgCatalog.Types.Timestamptz.parse(from.lastIdxScan),
            idxTupFetch: PgCatalog.Types.Int8.parse(from.idxTupFetch),
            nTupIns: PgCatalog.Types.Int8.parse(from.nTupIns),
            nTupUpd: PgCatalog.Types.Int8.parse(from.nTupUpd),
            nTupDel: PgCatalog.Types.Int8.parse(from.nTupDel),
            nTupHotUpd: PgCatalog.Types.Int8.parse(from.nTupHotUpd),
            nTupNewpageUpd: PgCatalog.Types.Int8.parse(from.nTupNewpageUpd),
            nLiveTup: PgCatalog.Types.Int8.parse(from.nLiveTup),
            nDeadTup: PgCatalog.Types.Int8.parse(from.nDeadTup),
            nModSinceAnalyze: PgCatalog.Types.Int8.parse(from.nModSinceAnalyze),
            nInsSinceVacuum: PgCatalog.Types.Int8.parse(from.nInsSinceVacuum),
            lastVacuum: PgCatalog.Types.Timestamptz.parse(from.lastVacuum),
            lastAutovacuum: PgCatalog.Types.Timestamptz.parse(
              from.lastAutovacuum,
            ),
            lastAnalyze: PgCatalog.Types.Timestamptz.parse(from.lastAnalyze),
            lastAutoanalyze: PgCatalog.Types.Timestamptz.parse(
              from.lastAutoanalyze,
            ),
            vacuumCount: PgCatalog.Types.Int8.parse(from.vacuumCount),
            autovacuumCount: PgCatalog.Types.Int8.parse(from.autovacuumCount),
            analyzeCount: PgCatalog.Types.Int8.parse(from.analyzeCount),
            autoanalyzeCount: PgCatalog.Types.Int8.parse(from.autoanalyzeCount),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatArchiver {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatArchiver.is(from)) {
          return {
            archivedCount: PgCatalog.Types.Int8.parse(from.archivedCount),
            lastArchivedWal: PgCatalog.Types.Text.parse(from.lastArchivedWal),
            lastArchivedTime: PgCatalog.Types.Timestamptz.parse(
              from.lastArchivedTime,
            ),
            failedCount: PgCatalog.Types.Int8.parse(from.failedCount),
            lastFailedWal: PgCatalog.Types.Text.parse(from.lastFailedWal),
            lastFailedTime: PgCatalog.Types.Timestamptz.parse(
              from.lastFailedTime,
            ),
            statsReset: PgCatalog.Types.Timestamptz.parse(from.statsReset),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatBgwriter {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatBgwriter.is(from)) {
          return {
            checkpointsTimed: PgCatalog.Types.Int8.parse(from.checkpointsTimed),
            checkpointsReq: PgCatalog.Types.Int8.parse(from.checkpointsReq),
            checkpointWriteTime: PgCatalog.Types.Float8.parse(
              from.checkpointWriteTime,
            ),
            checkpointSyncTime: PgCatalog.Types.Float8.parse(
              from.checkpointSyncTime,
            ),
            buffersCheckpoint: PgCatalog.Types.Int8.parse(
              from.buffersCheckpoint,
            ),
            buffersClean: PgCatalog.Types.Int8.parse(from.buffersClean),
            maxwrittenClean: PgCatalog.Types.Int8.parse(from.maxwrittenClean),
            buffersBackend: PgCatalog.Types.Int8.parse(from.buffersBackend),
            buffersBackendFsync: PgCatalog.Types.Int8.parse(
              from.buffersBackendFsync,
            ),
            buffersAlloc: PgCatalog.Types.Int8.parse(from.buffersAlloc),
            statsReset: PgCatalog.Types.Timestamptz.parse(from.statsReset),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatDatabase {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatDatabase.is(from)) {
          return {
            datid: PgCatalog.Types.Oid.parse(from.datid),
            datname: PgCatalog.Types.Name.parse(from.datname),
            numbackends: PgCatalog.Types.Int4.parse(from.numbackends),
            xactCommit: PgCatalog.Types.Int8.parse(from.xactCommit),
            xactRollback: PgCatalog.Types.Int8.parse(from.xactRollback),
            blksRead: PgCatalog.Types.Int8.parse(from.blksRead),
            blksHit: PgCatalog.Types.Int8.parse(from.blksHit),
            tupReturned: PgCatalog.Types.Int8.parse(from.tupReturned),
            tupFetched: PgCatalog.Types.Int8.parse(from.tupFetched),
            tupInserted: PgCatalog.Types.Int8.parse(from.tupInserted),
            tupUpdated: PgCatalog.Types.Int8.parse(from.tupUpdated),
            tupDeleted: PgCatalog.Types.Int8.parse(from.tupDeleted),
            conflicts: PgCatalog.Types.Int8.parse(from.conflicts),
            tempFiles: PgCatalog.Types.Int8.parse(from.tempFiles),
            tempBytes: PgCatalog.Types.Int8.parse(from.tempBytes),
            deadlocks: PgCatalog.Types.Int8.parse(from.deadlocks),
            checksumFailures: PgCatalog.Types.Int8.parse(from.checksumFailures),
            checksumLastFailure: PgCatalog.Types.Timestamptz.parse(
              from.checksumLastFailure,
            ),
            blkReadTime: PgCatalog.Types.Float8.parse(from.blkReadTime),
            blkWriteTime: PgCatalog.Types.Float8.parse(from.blkWriteTime),
            sessionTime: PgCatalog.Types.Float8.parse(from.sessionTime),
            activeTime: PgCatalog.Types.Float8.parse(from.activeTime),
            idleInTransactionTime: PgCatalog.Types.Float8.parse(
              from.idleInTransactionTime,
            ),
            sessions: PgCatalog.Types.Int8.parse(from.sessions),
            sessionsAbandoned: PgCatalog.Types.Int8.parse(
              from.sessionsAbandoned,
            ),
            sessionsFatal: PgCatalog.Types.Int8.parse(from.sessionsFatal),
            sessionsKilled: PgCatalog.Types.Int8.parse(from.sessionsKilled),
            statsReset: PgCatalog.Types.Timestamptz.parse(from.statsReset),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatDatabaseConflicts {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatDatabaseConflicts.is(from)) {
          return {
            datid: PgCatalog.Types.Oid.parse(from.datid),
            datname: PgCatalog.Types.Name.parse(from.datname),
            conflTablespace: PgCatalog.Types.Int8.parse(from.conflTablespace),
            conflLock: PgCatalog.Types.Int8.parse(from.conflLock),
            conflSnapshot: PgCatalog.Types.Int8.parse(from.conflSnapshot),
            conflBufferpin: PgCatalog.Types.Int8.parse(from.conflBufferpin),
            conflDeadlock: PgCatalog.Types.Int8.parse(from.conflDeadlock),
            conflActiveLogicalslot: PgCatalog.Types.Int8.parse(
              from.conflActiveLogicalslot,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatGssapi {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatGssapi.is(from)) {
          return {
            pid: PgCatalog.Types.Int4.parse(from.pid),
            gssAuthenticated: PgCatalog.Types.Bool.parse(from.gssAuthenticated),
            principal: PgCatalog.Types.Text.parse(from.principal),
            encrypted: PgCatalog.Types.Bool.parse(from.encrypted),
            credentialsDelegated: PgCatalog.Types.Bool.parse(
              from.credentialsDelegated,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatIo {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatIo.is(from)) {
          return {
            backendType: PgCatalog.Types.Text.parse(from.backendType),
            object: PgCatalog.Types.Text.parse(from.object),
            context: PgCatalog.Types.Text.parse(from.context),
            reads: PgCatalog.Types.Int8.parse(from.reads),
            readTime: PgCatalog.Types.Float8.parse(from.readTime),
            writes: PgCatalog.Types.Int8.parse(from.writes),
            writeTime: PgCatalog.Types.Float8.parse(from.writeTime),
            writebacks: PgCatalog.Types.Int8.parse(from.writebacks),
            writebackTime: PgCatalog.Types.Float8.parse(from.writebackTime),
            extends: PgCatalog.Types.Int8.parse(from.extends),
            extendTime: PgCatalog.Types.Float8.parse(from.extendTime),
            opBytes: PgCatalog.Types.Int8.parse(from.opBytes),
            hits: PgCatalog.Types.Int8.parse(from.hits),
            evictions: PgCatalog.Types.Int8.parse(from.evictions),
            reuses: PgCatalog.Types.Int8.parse(from.reuses),
            fsyncs: PgCatalog.Types.Int8.parse(from.fsyncs),
            fsyncTime: PgCatalog.Types.Float8.parse(from.fsyncTime),
            statsReset: PgCatalog.Types.Timestamptz.parse(from.statsReset),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatProgressAnalyze {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatProgressAnalyze.is(from)) {
          return {
            pid: PgCatalog.Types.Int4.parse(from.pid),
            datid: PgCatalog.Types.Oid.parse(from.datid),
            datname: PgCatalog.Types.Name.parse(from.datname),
            relid: PgCatalog.Types.Oid.parse(from.relid),
            phase: PgCatalog.Types.Text.parse(from.phase),
            sampleBlksTotal: PgCatalog.Types.Int8.parse(from.sampleBlksTotal),
            sampleBlksScanned: PgCatalog.Types.Int8.parse(
              from.sampleBlksScanned,
            ),
            extStatsTotal: PgCatalog.Types.Int8.parse(from.extStatsTotal),
            extStatsComputed: PgCatalog.Types.Int8.parse(from.extStatsComputed),
            childTablesTotal: PgCatalog.Types.Int8.parse(from.childTablesTotal),
            childTablesDone: PgCatalog.Types.Int8.parse(from.childTablesDone),
            currentChildTableRelid: PgCatalog.Types.Oid.parse(
              from.currentChildTableRelid,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatProgressBasebackup {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatProgressBasebackup.is(from)) {
          return {
            pid: PgCatalog.Types.Int4.parse(from.pid),
            phase: PgCatalog.Types.Text.parse(from.phase),
            backupTotal: PgCatalog.Types.Int8.parse(from.backupTotal),
            backupStreamed: PgCatalog.Types.Int8.parse(from.backupStreamed),
            tablespacesTotal: PgCatalog.Types.Int8.parse(from.tablespacesTotal),
            tablespacesStreamed: PgCatalog.Types.Int8.parse(
              from.tablespacesStreamed,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatProgressCluster {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatProgressCluster.is(from)) {
          return {
            pid: PgCatalog.Types.Int4.parse(from.pid),
            datid: PgCatalog.Types.Oid.parse(from.datid),
            datname: PgCatalog.Types.Name.parse(from.datname),
            relid: PgCatalog.Types.Oid.parse(from.relid),
            command: PgCatalog.Types.Text.parse(from.command),
            phase: PgCatalog.Types.Text.parse(from.phase),
            clusterIndexRelid: PgCatalog.Types.Oid.parse(
              from.clusterIndexRelid,
            ),
            heapTuplesScanned: PgCatalog.Types.Int8.parse(
              from.heapTuplesScanned,
            ),
            heapTuplesWritten: PgCatalog.Types.Int8.parse(
              from.heapTuplesWritten,
            ),
            heapBlksTotal: PgCatalog.Types.Int8.parse(from.heapBlksTotal),
            heapBlksScanned: PgCatalog.Types.Int8.parse(from.heapBlksScanned),
            indexRebuildCount: PgCatalog.Types.Int8.parse(
              from.indexRebuildCount,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatProgressCopy {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatProgressCopy.is(from)) {
          return {
            pid: PgCatalog.Types.Int4.parse(from.pid),
            datid: PgCatalog.Types.Oid.parse(from.datid),
            datname: PgCatalog.Types.Name.parse(from.datname),
            relid: PgCatalog.Types.Oid.parse(from.relid),
            command: PgCatalog.Types.Text.parse(from.command),
            type: PgCatalog.Types.Text.parse(from.type),
            bytesProcessed: PgCatalog.Types.Int8.parse(from.bytesProcessed),
            bytesTotal: PgCatalog.Types.Int8.parse(from.bytesTotal),
            tuplesProcessed: PgCatalog.Types.Int8.parse(from.tuplesProcessed),
            tuplesExcluded: PgCatalog.Types.Int8.parse(from.tuplesExcluded),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatProgressCreateIndex {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatProgressCreateIndex.is(from)) {
          return {
            pid: PgCatalog.Types.Int4.parse(from.pid),
            datid: PgCatalog.Types.Oid.parse(from.datid),
            datname: PgCatalog.Types.Name.parse(from.datname),
            relid: PgCatalog.Types.Oid.parse(from.relid),
            indexRelid: PgCatalog.Types.Oid.parse(from.indexRelid),
            command: PgCatalog.Types.Text.parse(from.command),
            phase: PgCatalog.Types.Text.parse(from.phase),
            lockersTotal: PgCatalog.Types.Int8.parse(from.lockersTotal),
            lockersDone: PgCatalog.Types.Int8.parse(from.lockersDone),
            currentLockerPid: PgCatalog.Types.Int8.parse(from.currentLockerPid),
            blocksTotal: PgCatalog.Types.Int8.parse(from.blocksTotal),
            blocksDone: PgCatalog.Types.Int8.parse(from.blocksDone),
            tuplesTotal: PgCatalog.Types.Int8.parse(from.tuplesTotal),
            tuplesDone: PgCatalog.Types.Int8.parse(from.tuplesDone),
            partitionsTotal: PgCatalog.Types.Int8.parse(from.partitionsTotal),
            partitionsDone: PgCatalog.Types.Int8.parse(from.partitionsDone),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatProgressVacuum {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatProgressVacuum.is(from)) {
          return {
            pid: PgCatalog.Types.Int4.parse(from.pid),
            datid: PgCatalog.Types.Oid.parse(from.datid),
            datname: PgCatalog.Types.Name.parse(from.datname),
            relid: PgCatalog.Types.Oid.parse(from.relid),
            phase: PgCatalog.Types.Text.parse(from.phase),
            heapBlksTotal: PgCatalog.Types.Int8.parse(from.heapBlksTotal),
            heapBlksScanned: PgCatalog.Types.Int8.parse(from.heapBlksScanned),
            heapBlksVacuumed: PgCatalog.Types.Int8.parse(from.heapBlksVacuumed),
            indexVacuumCount: PgCatalog.Types.Int8.parse(from.indexVacuumCount),
            maxDeadTuples: PgCatalog.Types.Int8.parse(from.maxDeadTuples),
            numDeadTuples: PgCatalog.Types.Int8.parse(from.numDeadTuples),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatRecoveryPrefetch {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatRecoveryPrefetch.is(from)) {
          return {
            statsReset: PgCatalog.Types.Timestamptz.parse(from.statsReset),
            prefetch: PgCatalog.Types.Int8.parse(from.prefetch),
            hit: PgCatalog.Types.Int8.parse(from.hit),
            skipInit: PgCatalog.Types.Int8.parse(from.skipInit),
            skipNew: PgCatalog.Types.Int8.parse(from.skipNew),
            skipFpw: PgCatalog.Types.Int8.parse(from.skipFpw),
            skipRep: PgCatalog.Types.Int8.parse(from.skipRep),
            walDistance: PgCatalog.Types.Int4.parse(from.walDistance),
            blockDistance: PgCatalog.Types.Int4.parse(from.blockDistance),
            ioDepth: PgCatalog.Types.Int4.parse(from.ioDepth),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatReplication {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatReplication.is(from)) {
          return {
            pid: PgCatalog.Types.Int4.parse(from.pid),
            usesysid: PgCatalog.Types.Oid.parse(from.usesysid),
            usename: PgCatalog.Types.Name.parse(from.usename),
            applicationName: PgCatalog.Types.Text.parse(from.applicationName),
            clientAddr: PgCatalog.Types.Inet.parse(from.clientAddr),
            clientHostname: PgCatalog.Types.Text.parse(from.clientHostname),
            clientPort: PgCatalog.Types.Int4.parse(from.clientPort),
            backendStart: PgCatalog.Types.Timestamptz.parse(from.backendStart),
            backendXmin: PgCatalog.Types.Xid.parse(from.backendXmin),
            state: PgCatalog.Types.Text.parse(from.state),
            sentLsn: PgCatalog.Types.PgLsn.parse(from.sentLsn),
            writeLsn: PgCatalog.Types.PgLsn.parse(from.writeLsn),
            flushLsn: PgCatalog.Types.PgLsn.parse(from.flushLsn),
            replayLsn: PgCatalog.Types.PgLsn.parse(from.replayLsn),
            writeLag: PgCatalog.Types.Interval.parse(from.writeLag),
            flushLag: PgCatalog.Types.Interval.parse(from.flushLag),
            replayLag: PgCatalog.Types.Interval.parse(from.replayLag),
            syncPriority: PgCatalog.Types.Int4.parse(from.syncPriority),
            syncState: PgCatalog.Types.Text.parse(from.syncState),
            replyTime: PgCatalog.Types.Timestamptz.parse(from.replyTime),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatReplicationSlots {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatReplicationSlots.is(from)) {
          return {
            slotName: PgCatalog.Types.Text.parse(from.slotName),
            spillTxns: PgCatalog.Types.Int8.parse(from.spillTxns),
            spillCount: PgCatalog.Types.Int8.parse(from.spillCount),
            spillBytes: PgCatalog.Types.Int8.parse(from.spillBytes),
            streamTxns: PgCatalog.Types.Int8.parse(from.streamTxns),
            streamCount: PgCatalog.Types.Int8.parse(from.streamCount),
            streamBytes: PgCatalog.Types.Int8.parse(from.streamBytes),
            totalTxns: PgCatalog.Types.Int8.parse(from.totalTxns),
            totalBytes: PgCatalog.Types.Int8.parse(from.totalBytes),
            statsReset: PgCatalog.Types.Timestamptz.parse(from.statsReset),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatSlru {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatSlru.is(from)) {
          return {
            name: PgCatalog.Types.Text.parse(from.name),
            blksZeroed: PgCatalog.Types.Int8.parse(from.blksZeroed),
            blksHit: PgCatalog.Types.Int8.parse(from.blksHit),
            blksRead: PgCatalog.Types.Int8.parse(from.blksRead),
            blksWritten: PgCatalog.Types.Int8.parse(from.blksWritten),
            blksExists: PgCatalog.Types.Int8.parse(from.blksExists),
            flushes: PgCatalog.Types.Int8.parse(from.flushes),
            truncates: PgCatalog.Types.Int8.parse(from.truncates),
            statsReset: PgCatalog.Types.Timestamptz.parse(from.statsReset),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatSsl {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatSsl.is(from)) {
          return {
            pid: PgCatalog.Types.Int4.parse(from.pid),
            ssl: PgCatalog.Types.Bool.parse(from.ssl),
            version: PgCatalog.Types.Text.parse(from.version),
            cipher: PgCatalog.Types.Text.parse(from.cipher),
            bits: PgCatalog.Types.Int4.parse(from.bits),
            clientDn: PgCatalog.Types.Text.parse(from.clientDn),
            clientSerial: PgCatalog.Types.Numeric.parse(from.clientSerial),
            issuerDn: PgCatalog.Types.Text.parse(from.issuerDn),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatSubscription {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatSubscription.is(from)) {
          return {
            subid: PgCatalog.Types.Oid.parse(from.subid),
            subname: PgCatalog.Types.Name.parse(from.subname),
            pid: PgCatalog.Types.Int4.parse(from.pid),
            leaderPid: PgCatalog.Types.Int4.parse(from.leaderPid),
            relid: PgCatalog.Types.Oid.parse(from.relid),
            receivedLsn: PgCatalog.Types.PgLsn.parse(from.receivedLsn),
            lastMsgSendTime: PgCatalog.Types.Timestamptz.parse(
              from.lastMsgSendTime,
            ),
            lastMsgReceiptTime: PgCatalog.Types.Timestamptz.parse(
              from.lastMsgReceiptTime,
            ),
            latestEndLsn: PgCatalog.Types.PgLsn.parse(from.latestEndLsn),
            latestEndTime: PgCatalog.Types.Timestamptz.parse(
              from.latestEndTime,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatSubscriptionStats {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatSubscriptionStats.is(from)) {
          return {
            subid: PgCatalog.Types.Oid.parse(from.subid),
            subname: PgCatalog.Types.Name.parse(from.subname),
            applyErrorCount: PgCatalog.Types.Int8.parse(from.applyErrorCount),
            syncErrorCount: PgCatalog.Types.Int8.parse(from.syncErrorCount),
            statsReset: PgCatalog.Types.Timestamptz.parse(from.statsReset),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatSysIndexes {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatSysIndexes.is(from)) {
          return {
            relid: PgCatalog.Types.Oid.parse(from.relid),
            indexrelid: PgCatalog.Types.Oid.parse(from.indexrelid),
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            relname: PgCatalog.Types.Name.parse(from.relname),
            indexrelname: PgCatalog.Types.Name.parse(from.indexrelname),
            idxScan: PgCatalog.Types.Int8.parse(from.idxScan),
            lastIdxScan: PgCatalog.Types.Timestamptz.parse(from.lastIdxScan),
            idxTupRead: PgCatalog.Types.Int8.parse(from.idxTupRead),
            idxTupFetch: PgCatalog.Types.Int8.parse(from.idxTupFetch),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatSysTables {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatSysTables.is(from)) {
          return {
            relid: PgCatalog.Types.Oid.parse(from.relid),
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            relname: PgCatalog.Types.Name.parse(from.relname),
            seqScan: PgCatalog.Types.Int8.parse(from.seqScan),
            lastSeqScan: PgCatalog.Types.Timestamptz.parse(from.lastSeqScan),
            seqTupRead: PgCatalog.Types.Int8.parse(from.seqTupRead),
            idxScan: PgCatalog.Types.Int8.parse(from.idxScan),
            lastIdxScan: PgCatalog.Types.Timestamptz.parse(from.lastIdxScan),
            idxTupFetch: PgCatalog.Types.Int8.parse(from.idxTupFetch),
            nTupIns: PgCatalog.Types.Int8.parse(from.nTupIns),
            nTupUpd: PgCatalog.Types.Int8.parse(from.nTupUpd),
            nTupDel: PgCatalog.Types.Int8.parse(from.nTupDel),
            nTupHotUpd: PgCatalog.Types.Int8.parse(from.nTupHotUpd),
            nTupNewpageUpd: PgCatalog.Types.Int8.parse(from.nTupNewpageUpd),
            nLiveTup: PgCatalog.Types.Int8.parse(from.nLiveTup),
            nDeadTup: PgCatalog.Types.Int8.parse(from.nDeadTup),
            nModSinceAnalyze: PgCatalog.Types.Int8.parse(from.nModSinceAnalyze),
            nInsSinceVacuum: PgCatalog.Types.Int8.parse(from.nInsSinceVacuum),
            lastVacuum: PgCatalog.Types.Timestamptz.parse(from.lastVacuum),
            lastAutovacuum: PgCatalog.Types.Timestamptz.parse(
              from.lastAutovacuum,
            ),
            lastAnalyze: PgCatalog.Types.Timestamptz.parse(from.lastAnalyze),
            lastAutoanalyze: PgCatalog.Types.Timestamptz.parse(
              from.lastAutoanalyze,
            ),
            vacuumCount: PgCatalog.Types.Int8.parse(from.vacuumCount),
            autovacuumCount: PgCatalog.Types.Int8.parse(from.autovacuumCount),
            analyzeCount: PgCatalog.Types.Int8.parse(from.analyzeCount),
            autoanalyzeCount: PgCatalog.Types.Int8.parse(from.autoanalyzeCount),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatUserFunctions {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatUserFunctions.is(from)) {
          return {
            funcid: PgCatalog.Types.Oid.parse(from.funcid),
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            funcname: PgCatalog.Types.Name.parse(from.funcname),
            calls: PgCatalog.Types.Int8.parse(from.calls),
            totalTime: PgCatalog.Types.Float8.parse(from.totalTime),
            selfTime: PgCatalog.Types.Float8.parse(from.selfTime),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatUserIndexes {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatUserIndexes.is(from)) {
          return {
            relid: PgCatalog.Types.Oid.parse(from.relid),
            indexrelid: PgCatalog.Types.Oid.parse(from.indexrelid),
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            relname: PgCatalog.Types.Name.parse(from.relname),
            indexrelname: PgCatalog.Types.Name.parse(from.indexrelname),
            idxScan: PgCatalog.Types.Int8.parse(from.idxScan),
            lastIdxScan: PgCatalog.Types.Timestamptz.parse(from.lastIdxScan),
            idxTupRead: PgCatalog.Types.Int8.parse(from.idxTupRead),
            idxTupFetch: PgCatalog.Types.Int8.parse(from.idxTupFetch),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatUserTables {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatUserTables.is(from)) {
          return {
            relid: PgCatalog.Types.Oid.parse(from.relid),
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            relname: PgCatalog.Types.Name.parse(from.relname),
            seqScan: PgCatalog.Types.Int8.parse(from.seqScan),
            lastSeqScan: PgCatalog.Types.Timestamptz.parse(from.lastSeqScan),
            seqTupRead: PgCatalog.Types.Int8.parse(from.seqTupRead),
            idxScan: PgCatalog.Types.Int8.parse(from.idxScan),
            lastIdxScan: PgCatalog.Types.Timestamptz.parse(from.lastIdxScan),
            idxTupFetch: PgCatalog.Types.Int8.parse(from.idxTupFetch),
            nTupIns: PgCatalog.Types.Int8.parse(from.nTupIns),
            nTupUpd: PgCatalog.Types.Int8.parse(from.nTupUpd),
            nTupDel: PgCatalog.Types.Int8.parse(from.nTupDel),
            nTupHotUpd: PgCatalog.Types.Int8.parse(from.nTupHotUpd),
            nTupNewpageUpd: PgCatalog.Types.Int8.parse(from.nTupNewpageUpd),
            nLiveTup: PgCatalog.Types.Int8.parse(from.nLiveTup),
            nDeadTup: PgCatalog.Types.Int8.parse(from.nDeadTup),
            nModSinceAnalyze: PgCatalog.Types.Int8.parse(from.nModSinceAnalyze),
            nInsSinceVacuum: PgCatalog.Types.Int8.parse(from.nInsSinceVacuum),
            lastVacuum: PgCatalog.Types.Timestamptz.parse(from.lastVacuum),
            lastAutovacuum: PgCatalog.Types.Timestamptz.parse(
              from.lastAutovacuum,
            ),
            lastAnalyze: PgCatalog.Types.Timestamptz.parse(from.lastAnalyze),
            lastAutoanalyze: PgCatalog.Types.Timestamptz.parse(
              from.lastAutoanalyze,
            ),
            vacuumCount: PgCatalog.Types.Int8.parse(from.vacuumCount),
            autovacuumCount: PgCatalog.Types.Int8.parse(from.autovacuumCount),
            analyzeCount: PgCatalog.Types.Int8.parse(from.analyzeCount),
            autoanalyzeCount: PgCatalog.Types.Int8.parse(from.autoanalyzeCount),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatWal {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatWal.is(from)) {
          return {
            walRecords: PgCatalog.Types.Int8.parse(from.walRecords),
            walFpi: PgCatalog.Types.Int8.parse(from.walFpi),
            walBytes: PgCatalog.Types.Numeric.parse(from.walBytes),
            walBuffersFull: PgCatalog.Types.Int8.parse(from.walBuffersFull),
            walWrite: PgCatalog.Types.Int8.parse(from.walWrite),
            walSync: PgCatalog.Types.Int8.parse(from.walSync),
            walWriteTime: PgCatalog.Types.Float8.parse(from.walWriteTime),
            walSyncTime: PgCatalog.Types.Float8.parse(from.walSyncTime),
            statsReset: PgCatalog.Types.Timestamptz.parse(from.statsReset),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatWalReceiver {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatWalReceiver.is(from)) {
          return {
            pid: PgCatalog.Types.Int4.parse(from.pid),
            status: PgCatalog.Types.Text.parse(from.status),
            receiveStartLsn: PgCatalog.Types.PgLsn.parse(from.receiveStartLsn),
            receiveStartTli: PgCatalog.Types.Int4.parse(from.receiveStartTli),
            writtenLsn: PgCatalog.Types.PgLsn.parse(from.writtenLsn),
            flushedLsn: PgCatalog.Types.PgLsn.parse(from.flushedLsn),
            receivedTli: PgCatalog.Types.Int4.parse(from.receivedTli),
            lastMsgSendTime: PgCatalog.Types.Timestamptz.parse(
              from.lastMsgSendTime,
            ),
            lastMsgReceiptTime: PgCatalog.Types.Timestamptz.parse(
              from.lastMsgReceiptTime,
            ),
            latestEndLsn: PgCatalog.Types.PgLsn.parse(from.latestEndLsn),
            latestEndTime: PgCatalog.Types.Timestamptz.parse(
              from.latestEndTime,
            ),
            slotName: PgCatalog.Types.Text.parse(from.slotName),
            senderHost: PgCatalog.Types.Text.parse(from.senderHost),
            senderPort: PgCatalog.Types.Int4.parse(from.senderPort),
            conninfo: PgCatalog.Types.Text.parse(from.conninfo),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatXactAllTables {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatXactAllTables.is(from)) {
          return {
            relid: PgCatalog.Types.Oid.parse(from.relid),
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            relname: PgCatalog.Types.Name.parse(from.relname),
            seqScan: PgCatalog.Types.Int8.parse(from.seqScan),
            seqTupRead: PgCatalog.Types.Int8.parse(from.seqTupRead),
            idxScan: PgCatalog.Types.Int8.parse(from.idxScan),
            idxTupFetch: PgCatalog.Types.Int8.parse(from.idxTupFetch),
            nTupIns: PgCatalog.Types.Int8.parse(from.nTupIns),
            nTupUpd: PgCatalog.Types.Int8.parse(from.nTupUpd),
            nTupDel: PgCatalog.Types.Int8.parse(from.nTupDel),
            nTupHotUpd: PgCatalog.Types.Int8.parse(from.nTupHotUpd),
            nTupNewpageUpd: PgCatalog.Types.Int8.parse(from.nTupNewpageUpd),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatXactSysTables {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatXactSysTables.is(from)) {
          return {
            relid: PgCatalog.Types.Oid.parse(from.relid),
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            relname: PgCatalog.Types.Name.parse(from.relname),
            seqScan: PgCatalog.Types.Int8.parse(from.seqScan),
            seqTupRead: PgCatalog.Types.Int8.parse(from.seqTupRead),
            idxScan: PgCatalog.Types.Int8.parse(from.idxScan),
            idxTupFetch: PgCatalog.Types.Int8.parse(from.idxTupFetch),
            nTupIns: PgCatalog.Types.Int8.parse(from.nTupIns),
            nTupUpd: PgCatalog.Types.Int8.parse(from.nTupUpd),
            nTupDel: PgCatalog.Types.Int8.parse(from.nTupDel),
            nTupHotUpd: PgCatalog.Types.Int8.parse(from.nTupHotUpd),
            nTupNewpageUpd: PgCatalog.Types.Int8.parse(from.nTupNewpageUpd),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatXactUserFunctions {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatXactUserFunctions.is(from)) {
          return {
            funcid: PgCatalog.Types.Oid.parse(from.funcid),
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            funcname: PgCatalog.Types.Name.parse(from.funcname),
            calls: PgCatalog.Types.Int8.parse(from.calls),
            totalTime: PgCatalog.Types.Float8.parse(from.totalTime),
            selfTime: PgCatalog.Types.Float8.parse(from.selfTime),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatXactUserTables {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatXactUserTables.is(from)) {
          return {
            relid: PgCatalog.Types.Oid.parse(from.relid),
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            relname: PgCatalog.Types.Name.parse(from.relname),
            seqScan: PgCatalog.Types.Int8.parse(from.seqScan),
            seqTupRead: PgCatalog.Types.Int8.parse(from.seqTupRead),
            idxScan: PgCatalog.Types.Int8.parse(from.idxScan),
            idxTupFetch: PgCatalog.Types.Int8.parse(from.idxTupFetch),
            nTupIns: PgCatalog.Types.Int8.parse(from.nTupIns),
            nTupUpd: PgCatalog.Types.Int8.parse(from.nTupUpd),
            nTupDel: PgCatalog.Types.Int8.parse(from.nTupDel),
            nTupHotUpd: PgCatalog.Types.Int8.parse(from.nTupHotUpd),
            nTupNewpageUpd: PgCatalog.Types.Int8.parse(from.nTupNewpageUpd),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatioAllIndexes {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatioAllIndexes.is(from)) {
          return {
            relid: PgCatalog.Types.Oid.parse(from.relid),
            indexrelid: PgCatalog.Types.Oid.parse(from.indexrelid),
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            relname: PgCatalog.Types.Name.parse(from.relname),
            indexrelname: PgCatalog.Types.Name.parse(from.indexrelname),
            idxBlksRead: PgCatalog.Types.Int8.parse(from.idxBlksRead),
            idxBlksHit: PgCatalog.Types.Int8.parse(from.idxBlksHit),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatioAllSequences {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatioAllSequences.is(from)) {
          return {
            relid: PgCatalog.Types.Oid.parse(from.relid),
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            relname: PgCatalog.Types.Name.parse(from.relname),
            blksRead: PgCatalog.Types.Int8.parse(from.blksRead),
            blksHit: PgCatalog.Types.Int8.parse(from.blksHit),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatioAllTables {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatioAllTables.is(from)) {
          return {
            relid: PgCatalog.Types.Oid.parse(from.relid),
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            relname: PgCatalog.Types.Name.parse(from.relname),
            heapBlksRead: PgCatalog.Types.Int8.parse(from.heapBlksRead),
            heapBlksHit: PgCatalog.Types.Int8.parse(from.heapBlksHit),
            idxBlksRead: PgCatalog.Types.Int8.parse(from.idxBlksRead),
            idxBlksHit: PgCatalog.Types.Int8.parse(from.idxBlksHit),
            toastBlksRead: PgCatalog.Types.Int8.parse(from.toastBlksRead),
            toastBlksHit: PgCatalog.Types.Int8.parse(from.toastBlksHit),
            tidxBlksRead: PgCatalog.Types.Int8.parse(from.tidxBlksRead),
            tidxBlksHit: PgCatalog.Types.Int8.parse(from.tidxBlksHit),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatioSysIndexes {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatioSysIndexes.is(from)) {
          return {
            relid: PgCatalog.Types.Oid.parse(from.relid),
            indexrelid: PgCatalog.Types.Oid.parse(from.indexrelid),
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            relname: PgCatalog.Types.Name.parse(from.relname),
            indexrelname: PgCatalog.Types.Name.parse(from.indexrelname),
            idxBlksRead: PgCatalog.Types.Int8.parse(from.idxBlksRead),
            idxBlksHit: PgCatalog.Types.Int8.parse(from.idxBlksHit),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatioSysSequences {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatioSysSequences.is(from)) {
          return {
            relid: PgCatalog.Types.Oid.parse(from.relid),
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            relname: PgCatalog.Types.Name.parse(from.relname),
            blksRead: PgCatalog.Types.Int8.parse(from.blksRead),
            blksHit: PgCatalog.Types.Int8.parse(from.blksHit),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatioSysTables {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatioSysTables.is(from)) {
          return {
            relid: PgCatalog.Types.Oid.parse(from.relid),
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            relname: PgCatalog.Types.Name.parse(from.relname),
            heapBlksRead: PgCatalog.Types.Int8.parse(from.heapBlksRead),
            heapBlksHit: PgCatalog.Types.Int8.parse(from.heapBlksHit),
            idxBlksRead: PgCatalog.Types.Int8.parse(from.idxBlksRead),
            idxBlksHit: PgCatalog.Types.Int8.parse(from.idxBlksHit),
            toastBlksRead: PgCatalog.Types.Int8.parse(from.toastBlksRead),
            toastBlksHit: PgCatalog.Types.Int8.parse(from.toastBlksHit),
            tidxBlksRead: PgCatalog.Types.Int8.parse(from.tidxBlksRead),
            tidxBlksHit: PgCatalog.Types.Int8.parse(from.tidxBlksHit),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatioUserIndexes {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatioUserIndexes.is(from)) {
          return {
            relid: PgCatalog.Types.Oid.parse(from.relid),
            indexrelid: PgCatalog.Types.Oid.parse(from.indexrelid),
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            relname: PgCatalog.Types.Name.parse(from.relname),
            indexrelname: PgCatalog.Types.Name.parse(from.indexrelname),
            idxBlksRead: PgCatalog.Types.Int8.parse(from.idxBlksRead),
            idxBlksHit: PgCatalog.Types.Int8.parse(from.idxBlksHit),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatioUserSequences {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatioUserSequences.is(from)) {
          return {
            relid: PgCatalog.Types.Oid.parse(from.relid),
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            relname: PgCatalog.Types.Name.parse(from.relname),
            blksRead: PgCatalog.Types.Int8.parse(from.blksRead),
            blksHit: PgCatalog.Types.Int8.parse(from.blksHit),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatioUserTables {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatioUserTables.is(from)) {
          return {
            relid: PgCatalog.Types.Oid.parse(from.relid),
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            relname: PgCatalog.Types.Name.parse(from.relname),
            heapBlksRead: PgCatalog.Types.Int8.parse(from.heapBlksRead),
            heapBlksHit: PgCatalog.Types.Int8.parse(from.heapBlksHit),
            idxBlksRead: PgCatalog.Types.Int8.parse(from.idxBlksRead),
            idxBlksHit: PgCatalog.Types.Int8.parse(from.idxBlksHit),
            toastBlksRead: PgCatalog.Types.Int8.parse(from.toastBlksRead),
            toastBlksHit: PgCatalog.Types.Int8.parse(from.toastBlksHit),
            tidxBlksRead: PgCatalog.Types.Int8.parse(from.tidxBlksRead),
            tidxBlksHit: PgCatalog.Types.Int8.parse(from.tidxBlksHit),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatistic {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatistic.is(from)) {
          return {
            starelid: PgCatalog.Types.Oid.parse(from.starelid),
            staattnum: PgCatalog.Types.Int2.parse(from.staattnum),
            stainherit: PgCatalog.Types.Bool.parse(from.stainherit),
            stanullfrac: PgCatalog.Types.Float4.parse(from.stanullfrac),
            stawidth: PgCatalog.Types.Int4.parse(from.stawidth),
            stadistinct: PgCatalog.Types.Float4.parse(from.stadistinct),
            stakind1: PgCatalog.Types.Int2.parse(from.stakind1),
            stakind2: PgCatalog.Types.Int2.parse(from.stakind2),
            stakind3: PgCatalog.Types.Int2.parse(from.stakind3),
            stakind4: PgCatalog.Types.Int2.parse(from.stakind4),
            stakind5: PgCatalog.Types.Int2.parse(from.stakind5),
            staop1: PgCatalog.Types.Oid.parse(from.staop1),
            staop2: PgCatalog.Types.Oid.parse(from.staop2),
            staop3: PgCatalog.Types.Oid.parse(from.staop3),
            staop4: PgCatalog.Types.Oid.parse(from.staop4),
            staop5: PgCatalog.Types.Oid.parse(from.staop5),
            stacoll1: PgCatalog.Types.Oid.parse(from.stacoll1),
            stacoll2: PgCatalog.Types.Oid.parse(from.stacoll2),
            stacoll3: PgCatalog.Types.Oid.parse(from.stacoll3),
            stacoll4: PgCatalog.Types.Oid.parse(from.stacoll4),
            stacoll5: PgCatalog.Types.Oid.parse(from.stacoll5),
            stanumbers1: PgCatalog.Types.Float4Array.parse(from.stanumbers1),
            stanumbers2: PgCatalog.Types.Float4Array.parse(from.stanumbers2),
            stanumbers3: PgCatalog.Types.Float4Array.parse(from.stanumbers3),
            stanumbers4: PgCatalog.Types.Float4Array.parse(from.stanumbers4),
            stanumbers5: PgCatalog.Types.Float4Array.parse(from.stanumbers5),
            stavalues1: PgCatalog.Types.Anyarray.parse(from.stavalues1),
            stavalues2: PgCatalog.Types.Anyarray.parse(from.stavalues2),
            stavalues3: PgCatalog.Types.Anyarray.parse(from.stavalues3),
            stavalues4: PgCatalog.Types.Anyarray.parse(from.stavalues4),
            stavalues5: PgCatalog.Types.Anyarray.parse(from.stavalues5),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatisticExt {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatisticExt.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            stxrelid: PgCatalog.Types.Oid.parse(from.stxrelid),
            stxname: PgCatalog.Types.Name.parse(from.stxname),
            stxnamespace: PgCatalog.Types.Oid.parse(from.stxnamespace),
            stxowner: PgCatalog.Types.Oid.parse(from.stxowner),
            stxstattarget: PgCatalog.Types.Int4.parse(from.stxstattarget),
            stxkeys: PgCatalog.Types.Int2vector.parse(from.stxkeys),
            stxkind: PgCatalog.Types.CharArray.parse(from.stxkind),
            stxexprs: PgCatalog.Types.PgNodeTree.parse(from.stxexprs),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatisticExtData {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatisticExtData.is(from)) {
          return {
            stxoid: PgCatalog.Types.Oid.parse(from.stxoid),
            stxdinherit: PgCatalog.Types.Bool.parse(from.stxdinherit),
            stxdndistinct: PgCatalog.Types.PgNdistinct.parse(
              from.stxdndistinct,
            ),
            stxddependencies: PgCatalog.Types.PgDependencies.parse(
              from.stxddependencies,
            ),
            stxdmcv: PgCatalog.Types.PgMcvList.parse(from.stxdmcv),
            stxdexpr: PgCatalog.Types.PgStatisticArray.parse(from.stxdexpr),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStats {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStats.is(from)) {
          return {
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            tablename: PgCatalog.Types.Name.parse(from.tablename),
            attname: PgCatalog.Types.Name.parse(from.attname),
            inherited: PgCatalog.Types.Bool.parse(from.inherited),
            nullFrac: PgCatalog.Types.Float4.parse(from.nullFrac),
            avgWidth: PgCatalog.Types.Int4.parse(from.avgWidth),
            nDistinct: PgCatalog.Types.Float4.parse(from.nDistinct),
            mostCommonVals: PgCatalog.Types.Anyarray.parse(from.mostCommonVals),
            mostCommonFreqs: PgCatalog.Types.Float4Array.parse(
              from.mostCommonFreqs,
            ),
            histogramBounds: PgCatalog.Types.Anyarray.parse(
              from.histogramBounds,
            ),
            correlation: PgCatalog.Types.Float4.parse(from.correlation),
            mostCommonElems: PgCatalog.Types.Anyarray.parse(
              from.mostCommonElems,
            ),
            mostCommonElemFreqs: PgCatalog.Types.Float4Array.parse(
              from.mostCommonElemFreqs,
            ),
            elemCountHistogram: PgCatalog.Types.Float4Array.parse(
              from.elemCountHistogram,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatsExt {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatsExt.is(from)) {
          return {
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            tablename: PgCatalog.Types.Name.parse(from.tablename),
            statisticsSchemaname: PgCatalog.Types.Name.parse(
              from.statisticsSchemaname,
            ),
            statisticsName: PgCatalog.Types.Name.parse(from.statisticsName),
            statisticsOwner: PgCatalog.Types.Name.parse(from.statisticsOwner),
            attnames: PgCatalog.Types.NameArray.parse(from.attnames),
            exprs: PgCatalog.Types.TextArray.parse(from.exprs),
            kinds: PgCatalog.Types.CharArray.parse(from.kinds),
            inherited: PgCatalog.Types.Bool.parse(from.inherited),
            nDistinct: PgCatalog.Types.PgNdistinct.parse(from.nDistinct),
            dependencies: PgCatalog.Types.PgDependencies.parse(
              from.dependencies,
            ),
            mostCommonVals: PgCatalog.Types.TextArray.parse(
              from.mostCommonVals,
            ),
            mostCommonValNulls: PgCatalog.Types.BoolArray.parse(
              from.mostCommonValNulls,
            ),
            mostCommonFreqs: PgCatalog.Types.Float8Array.parse(
              from.mostCommonFreqs,
            ),
            mostCommonBaseFreqs: PgCatalog.Types.Float8Array.parse(
              from.mostCommonBaseFreqs,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatsExtExprs {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgStatsExtExprs.is(from)) {
          return {
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            tablename: PgCatalog.Types.Name.parse(from.tablename),
            statisticsSchemaname: PgCatalog.Types.Name.parse(
              from.statisticsSchemaname,
            ),
            statisticsName: PgCatalog.Types.Name.parse(from.statisticsName),
            statisticsOwner: PgCatalog.Types.Name.parse(from.statisticsOwner),
            expr: PgCatalog.Types.Text.parse(from.expr),
            inherited: PgCatalog.Types.Bool.parse(from.inherited),
            nullFrac: PgCatalog.Types.Float4.parse(from.nullFrac),
            avgWidth: PgCatalog.Types.Int4.parse(from.avgWidth),
            nDistinct: PgCatalog.Types.Float4.parse(from.nDistinct),
            mostCommonVals: PgCatalog.Types.Anyarray.parse(from.mostCommonVals),
            mostCommonFreqs: PgCatalog.Types.Float4Array.parse(
              from.mostCommonFreqs,
            ),
            histogramBounds: PgCatalog.Types.Anyarray.parse(
              from.histogramBounds,
            ),
            correlation: PgCatalog.Types.Float4.parse(from.correlation),
            mostCommonElems: PgCatalog.Types.Anyarray.parse(
              from.mostCommonElems,
            ),
            mostCommonElemFreqs: PgCatalog.Types.Float4Array.parse(
              from.mostCommonElemFreqs,
            ),
            elemCountHistogram: PgCatalog.Types.Float4Array.parse(
              from.elemCountHistogram,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgSubscription {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgSubscription.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            subdbid: PgCatalog.Types.Oid.parse(from.subdbid),
            subskiplsn: PgCatalog.Types.PgLsn.parse(from.subskiplsn),
            subname: PgCatalog.Types.Name.parse(from.subname),
            subowner: PgCatalog.Types.Oid.parse(from.subowner),
            subenabled: PgCatalog.Types.Bool.parse(from.subenabled),
            subbinary: PgCatalog.Types.Bool.parse(from.subbinary),
            substream: PgCatalog.Types.Char.parse(from.substream),
            subtwophasestate: PgCatalog.Types.Char.parse(from.subtwophasestate),
            subdisableonerr: PgCatalog.Types.Bool.parse(from.subdisableonerr),
            subpasswordrequired: PgCatalog.Types.Bool.parse(
              from.subpasswordrequired,
            ),
            subrunasowner: PgCatalog.Types.Bool.parse(from.subrunasowner),
            subconninfo: PgCatalog.Types.Text.parse(from.subconninfo),
            subslotname: PgCatalog.Types.Name.parse(from.subslotname),
            subsynccommit: PgCatalog.Types.Text.parse(from.subsynccommit),
            subpublications: PgCatalog.Types.TextArray.parse(
              from.subpublications,
            ),
            suborigin: PgCatalog.Types.Text.parse(from.suborigin),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgSubscriptionRel {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgSubscriptionRel.is(from)) {
          return {
            srsubid: PgCatalog.Types.Oid.parse(from.srsubid),
            srrelid: PgCatalog.Types.Oid.parse(from.srrelid),
            srsubstate: PgCatalog.Types.Char.parse(from.srsubstate),
            srsublsn: PgCatalog.Types.PgLsn.parse(from.srsublsn),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgTables {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgTables.is(from)) {
          return {
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            tablename: PgCatalog.Types.Name.parse(from.tablename),
            tableowner: PgCatalog.Types.Name.parse(from.tableowner),
            tablespace: PgCatalog.Types.Name.parse(from.tablespace),
            hasindexes: PgCatalog.Types.Bool.parse(from.hasindexes),
            hasrules: PgCatalog.Types.Bool.parse(from.hasrules),
            hastriggers: PgCatalog.Types.Bool.parse(from.hastriggers),
            rowsecurity: PgCatalog.Types.Bool.parse(from.rowsecurity),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgTablespace {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgTablespace.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            spcname: PgCatalog.Types.Name.parse(from.spcname),
            spcowner: PgCatalog.Types.Oid.parse(from.spcowner),
            spcacl: PgCatalog.Types.AclitemArray.parse(from.spcacl),
            spcoptions: PgCatalog.Types.TextArray.parse(from.spcoptions),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgTimezoneAbbrevs {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgTimezoneAbbrevs.is(from)) {
          return {
            abbrev: PgCatalog.Types.Text.parse(from.abbrev),
            utcOffset: PgCatalog.Types.Interval.parse(from.utcOffset),
            isDst: PgCatalog.Types.Bool.parse(from.isDst),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgTimezoneNames {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgTimezoneNames.is(from)) {
          return {
            name: PgCatalog.Types.Text.parse(from.name),
            abbrev: PgCatalog.Types.Text.parse(from.abbrev),
            utcOffset: PgCatalog.Types.Interval.parse(from.utcOffset),
            isDst: PgCatalog.Types.Bool.parse(from.isDst),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgTransform {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgTransform.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            trftype: PgCatalog.Types.Oid.parse(from.trftype),
            trflang: PgCatalog.Types.Oid.parse(from.trflang),
            trffromsql: PgCatalog.Types.Regproc.parse(from.trffromsql),
            trftosql: PgCatalog.Types.Regproc.parse(from.trftosql),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgTrigger {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgTrigger.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            tgrelid: PgCatalog.Types.Oid.parse(from.tgrelid),
            tgparentid: PgCatalog.Types.Oid.parse(from.tgparentid),
            tgname: PgCatalog.Types.Name.parse(from.tgname),
            tgfoid: PgCatalog.Types.Oid.parse(from.tgfoid),
            tgtype: PgCatalog.Types.Int2.parse(from.tgtype),
            tgenabled: PgCatalog.Types.Char.parse(from.tgenabled),
            tgisinternal: PgCatalog.Types.Bool.parse(from.tgisinternal),
            tgconstrrelid: PgCatalog.Types.Oid.parse(from.tgconstrrelid),
            tgconstrindid: PgCatalog.Types.Oid.parse(from.tgconstrindid),
            tgconstraint: PgCatalog.Types.Oid.parse(from.tgconstraint),
            tgdeferrable: PgCatalog.Types.Bool.parse(from.tgdeferrable),
            tginitdeferred: PgCatalog.Types.Bool.parse(from.tginitdeferred),
            tgnargs: PgCatalog.Types.Int2.parse(from.tgnargs),
            tgattr: PgCatalog.Types.Int2vector.parse(from.tgattr),
            tgargs: PgCatalog.Types.Bytea.parse(from.tgargs),
            tgqual: PgCatalog.Types.PgNodeTree.parse(from.tgqual),
            tgoldtable: PgCatalog.Types.Name.parse(from.tgoldtable),
            tgnewtable: PgCatalog.Types.Name.parse(from.tgnewtable),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgTsConfig {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgTsConfig.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            cfgname: PgCatalog.Types.Name.parse(from.cfgname),
            cfgnamespace: PgCatalog.Types.Oid.parse(from.cfgnamespace),
            cfgowner: PgCatalog.Types.Oid.parse(from.cfgowner),
            cfgparser: PgCatalog.Types.Oid.parse(from.cfgparser),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgTsConfigMap {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgTsConfigMap.is(from)) {
          return {
            mapcfg: PgCatalog.Types.Oid.parse(from.mapcfg),
            maptokentype: PgCatalog.Types.Int4.parse(from.maptokentype),
            mapseqno: PgCatalog.Types.Int4.parse(from.mapseqno),
            mapdict: PgCatalog.Types.Oid.parse(from.mapdict),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgTsDict {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgTsDict.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            dictname: PgCatalog.Types.Name.parse(from.dictname),
            dictnamespace: PgCatalog.Types.Oid.parse(from.dictnamespace),
            dictowner: PgCatalog.Types.Oid.parse(from.dictowner),
            dicttemplate: PgCatalog.Types.Oid.parse(from.dicttemplate),
            dictinitoption: PgCatalog.Types.Text.parse(from.dictinitoption),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgTsParser {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgTsParser.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            prsname: PgCatalog.Types.Name.parse(from.prsname),
            prsnamespace: PgCatalog.Types.Oid.parse(from.prsnamespace),
            prsstart: PgCatalog.Types.Regproc.parse(from.prsstart),
            prstoken: PgCatalog.Types.Regproc.parse(from.prstoken),
            prsend: PgCatalog.Types.Regproc.parse(from.prsend),
            prsheadline: PgCatalog.Types.Regproc.parse(from.prsheadline),
            prslextype: PgCatalog.Types.Regproc.parse(from.prslextype),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgTsTemplate {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgTsTemplate.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            tmplname: PgCatalog.Types.Name.parse(from.tmplname),
            tmplnamespace: PgCatalog.Types.Oid.parse(from.tmplnamespace),
            tmplinit: PgCatalog.Types.Regproc.parse(from.tmplinit),
            tmpllexize: PgCatalog.Types.Regproc.parse(from.tmpllexize),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgType {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgType.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            typname: PgCatalog.Types.Name.parse(from.typname),
            typnamespace: PgCatalog.Types.Oid.parse(from.typnamespace),
            typowner: PgCatalog.Types.Oid.parse(from.typowner),
            typlen: PgCatalog.Types.Int2.parse(from.typlen),
            typbyval: PgCatalog.Types.Bool.parse(from.typbyval),
            typtype: PgCatalog.Types.Char.parse(from.typtype),
            typcategory: PgCatalog.Types.Char.parse(from.typcategory),
            typispreferred: PgCatalog.Types.Bool.parse(from.typispreferred),
            typisdefined: PgCatalog.Types.Bool.parse(from.typisdefined),
            typdelim: PgCatalog.Types.Char.parse(from.typdelim),
            typrelid: PgCatalog.Types.Oid.parse(from.typrelid),
            typsubscript: PgCatalog.Types.Regproc.parse(from.typsubscript),
            typelem: PgCatalog.Types.Oid.parse(from.typelem),
            typarray: PgCatalog.Types.Oid.parse(from.typarray),
            typinput: PgCatalog.Types.Regproc.parse(from.typinput),
            typoutput: PgCatalog.Types.Regproc.parse(from.typoutput),
            typreceive: PgCatalog.Types.Regproc.parse(from.typreceive),
            typsend: PgCatalog.Types.Regproc.parse(from.typsend),
            typmodin: PgCatalog.Types.Regproc.parse(from.typmodin),
            typmodout: PgCatalog.Types.Regproc.parse(from.typmodout),
            typanalyze: PgCatalog.Types.Regproc.parse(from.typanalyze),
            typalign: PgCatalog.Types.Char.parse(from.typalign),
            typstorage: PgCatalog.Types.Char.parse(from.typstorage),
            typnotnull: PgCatalog.Types.Bool.parse(from.typnotnull),
            typbasetype: PgCatalog.Types.Oid.parse(from.typbasetype),
            typtypmod: PgCatalog.Types.Int4.parse(from.typtypmod),
            typndims: PgCatalog.Types.Int4.parse(from.typndims),
            typcollation: PgCatalog.Types.Oid.parse(from.typcollation),
            typdefaultbin: PgCatalog.Types.PgNodeTree.parse(from.typdefaultbin),
            typdefault: PgCatalog.Types.Text.parse(from.typdefault),
            typacl: PgCatalog.Types.AclitemArray.parse(from.typacl),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgUser {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgUser.is(from)) {
          return {
            usename: PgCatalog.Types.Name.parse(from.usename),
            usesysid: PgCatalog.Types.Oid.parse(from.usesysid),
            usecreatedb: PgCatalog.Types.Bool.parse(from.usecreatedb),
            usesuper: PgCatalog.Types.Bool.parse(from.usesuper),
            userepl: PgCatalog.Types.Bool.parse(from.userepl),
            usebypassrls: PgCatalog.Types.Bool.parse(from.usebypassrls),
            passwd: PgCatalog.Types.Text.parse(from.passwd),
            valuntil: PgCatalog.Types.Timestamptz.parse(from.valuntil),
            useconfig: PgCatalog.Types.TextArray.parse(from.useconfig),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgUserMapping {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgUserMapping.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            umuser: PgCatalog.Types.Oid.parse(from.umuser),
            umserver: PgCatalog.Types.Oid.parse(from.umserver),
            umoptions: PgCatalog.Types.TextArray.parse(from.umoptions),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgUserMappings {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgUserMappings.is(from)) {
          return {
            umid: PgCatalog.Types.Oid.parse(from.umid),
            srvid: PgCatalog.Types.Oid.parse(from.srvid),
            srvname: PgCatalog.Types.Name.parse(from.srvname),
            umuser: PgCatalog.Types.Oid.parse(from.umuser),
            usename: PgCatalog.Types.Name.parse(from.usename),
            umoptions: PgCatalog.Types.TextArray.parse(from.umoptions),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgViews {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (PgCatalog.Types.PgViews.is(from)) {
          return {
            schemaname: PgCatalog.Types.Name.parse(from.schemaname),
            viewname: PgCatalog.Types.Name.parse(from.viewname),
            viewowner: PgCatalog.Types.Name.parse(from.viewowner),
            definition: PgCatalog.Types.Text.parse(from.definition),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Point {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Polygon {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Record {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Refcursor {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return from;
        }
        throw new Error(`from is not a string`, { cause: from });
      }
    }
    export namespace Regclass {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return Number.parseFloat(from);
        }
        if (typeof from === "number") {
          return from;
        }
        return null;
      }
    }
    export namespace Regcollation {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return Number.parseFloat(from);
        }
        if (typeof from === "number") {
          return from;
        }
        return null;
      }
    }
    export namespace Regconfig {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return Number.parseFloat(from);
        }
        if (typeof from === "number") {
          return from;
        }
        return null;
      }
    }
    export namespace Regdictionary {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return Number.parseFloat(from);
        }
        if (typeof from === "number") {
          return from;
        }
        return null;
      }
    }
    export namespace Regnamespace {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return Number.parseFloat(from);
        }
        if (typeof from === "number") {
          return from;
        }
        return null;
      }
    }
    export namespace Regoper {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return Number.parseFloat(from);
        }
        if (typeof from === "number") {
          return from;
        }
        return null;
      }
    }
    export namespace Regoperator {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return Number.parseFloat(from);
        }
        if (typeof from === "number") {
          return from;
        }
        return null;
      }
    }
    export namespace Regproc {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return Number.parseFloat(from);
        }
        if (typeof from === "number") {
          return from;
        }
        return null;
      }
    }
    export namespace Regprocedure {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return Number.parseFloat(from);
        }
        if (typeof from === "number") {
          return from;
        }
        return null;
      }
    }
    export namespace Regrole {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return Number.parseFloat(from);
        }
        if (typeof from === "number") {
          return from;
        }
        return null;
      }
    }
    export namespace Regtype {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return Number.parseFloat(from);
        }
        if (typeof from === "number") {
          return from;
        }
        return null;
      }
    }
    export namespace TableAmHandler {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Text {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return from;
        }
        throw new Error(`from is not a string`, { cause: from });
      }
    }
    export namespace Tid {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Time {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if ((from as unknown) instanceof JsDate) return from as Date;
        return new JsDate(from as string);
      }
    }
    export namespace Timestamp {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if ((from as unknown) instanceof JsDate) return from as Date;
        return new JsDate(from as string);
      }
    }
    export namespace Timestamptz {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if ((from as unknown) instanceof JsDate) return from as Date;
        return new JsDate(from as string);
      }
    }
    export namespace Timetz {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if ((from as unknown) instanceof JsDate) return from as Date;
        return new JsDate(from as string);
      }
    }
    export namespace Trigger {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace TsmHandler {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Tsmultirange {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Tsquery {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return from;
        }
        throw new Error(`from is not a string`, { cause: from });
      }
    }
    export namespace Tsrange {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Tstzmultirange {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Tstzrange {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Tsvector {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return from;
        }
        throw new Error(`from is not a string`, { cause: from });
      }
    }
    export namespace TxidSnapshot {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return from;
        }
        throw new Error(`from is not a string`, { cause: from });
      }
    }
    export namespace Unknown {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Uuid {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return new UUID(from as string);
      }
    }
    export namespace Varbit {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "boolean") {
          return from;
        }
        if (typeof from === "string") {
          if (["t", "true", "on", "yes"].includes(from.toLowerCase()))
            return true;
          try {
            if (Number.parseFloat(from) > 0) return true;
          } catch (e) {
            // eat
          }
        }
        if (typeof from === "number") {
          return from !== 0;
        }
        return false;
      }
    }
    export namespace Varchar {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return from;
        }
        throw new Error(`from is not a string`, { cause: from });
      }
    }
    export namespace Void {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        return from;
      }
    }
    export namespace Xid {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return Number.parseFloat(from);
        }
        if (typeof from === "number") {
          return from;
        }
        return null;
      }
    }
    export namespace Xid8 {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return Number.parseFloat(from);
        }
        if (typeof from === "number") {
          return from;
        }
        return null;
      }
    }
    export namespace Xml {
      export function parse(from: unknown) {
        // Type
        if (from === null || from === undefined) return null;

        if (typeof from === "string") {
          return from;
        }
        throw new Error(`from is not a string`, { cause: from });
      }
    }
  }
  export namespace Procedures {}
  export namespace Tables {
    export namespace PgStatistic {
      export namespace Create {}
    }
    export namespace PgType {
      export namespace Create {}
    }
    export namespace PgForeignTable {
      export namespace Create {}
    }
    export namespace PgAuthid {
      export namespace Create {}
    }
    export namespace PgStatisticExtData {
      export namespace Create {}
    }
    export namespace PgUserMapping {
      export namespace Create {}
    }
    export namespace PgSubscription {
      export namespace Create {}
    }
    export namespace PgAttribute {
      export namespace Create {}
    }
    export namespace PgProc {
      export namespace Create {}
    }
    export namespace PgClass {
      export namespace Create {}
    }
    export namespace PgAttrdef {
      export namespace Create {}
    }
    export namespace PgConstraint {
      export namespace Create {}
    }
    export namespace PgInherits {
      export namespace Create {}
    }
    export namespace PgIndex {
      export namespace Create {}
    }
    export namespace PgOperator {
      export namespace Create {}
    }
    export namespace PgOpfamily {
      export namespace Create {}
    }
    export namespace PgOpclass {
      export namespace Create {}
    }
    export namespace PgAm {
      export namespace Create {}
    }
    export namespace PgAmop {
      export namespace Create {}
    }
    export namespace PgAmproc {
      export namespace Create {}
    }
    export namespace PgLanguage {
      export namespace Create {}
    }
    export namespace PgLargeobjectMetadata {
      export namespace Create {}
    }
    export namespace PgAggregate {
      export namespace Create {}
    }
    export namespace PgStatisticExt {
      export namespace Create {}
    }
    export namespace PgRewrite {
      export namespace Create {}
    }
    export namespace PgTrigger {
      export namespace Create {}
    }
    export namespace PgEventTrigger {
      export namespace Create {}
    }
    export namespace PgDescription {
      export namespace Create {}
    }
    export namespace PgCast {
      export namespace Create {}
    }
    export namespace PgEnum {
      export namespace Create {}
    }
    export namespace PgNamespace {
      export namespace Create {}
    }
    export namespace PgConversion {
      export namespace Create {}
    }
    export namespace PgDepend {
      export namespace Create {}
    }
    export namespace PgDatabase {
      export namespace Create {}
    }
    export namespace PgDbRoleSetting {
      export namespace Create {}
    }
    export namespace PgTablespace {
      export namespace Create {}
    }
    export namespace PgAuthMembers {
      export namespace Create {}
    }
    export namespace PgShdepend {
      export namespace Create {}
    }
    export namespace PgShdescription {
      export namespace Create {}
    }
    export namespace PgTsConfig {
      export namespace Create {}
    }
    export namespace PgTsConfigMap {
      export namespace Create {}
    }
    export namespace PgTsDict {
      export namespace Create {}
    }
    export namespace PgTsParser {
      export namespace Create {}
    }
    export namespace PgTsTemplate {
      export namespace Create {}
    }
    export namespace PgExtension {
      export namespace Create {}
    }
    export namespace PgForeignDataWrapper {
      export namespace Create {}
    }
    export namespace PgForeignServer {
      export namespace Create {}
    }
    export namespace PgPolicy {
      export namespace Create {}
    }
    export namespace PgReplicationOrigin {
      export namespace Create {}
    }
    export namespace PgDefaultAcl {
      export namespace Create {}
    }
    export namespace PgInitPrivs {
      export namespace Create {}
    }
    export namespace PgSeclabel {
      export namespace Create {}
    }
    export namespace PgShseclabel {
      export namespace Create {}
    }
    export namespace PgCollation {
      export namespace Create {}
    }
    export namespace PgParameterAcl {
      export namespace Create {}
    }
    export namespace PgPartitionedTable {
      export namespace Create {}
    }
    export namespace PgRange {
      export namespace Create {}
    }
    export namespace PgTransform {
      export namespace Create {}
    }
    export namespace PgSequence {
      export namespace Create {}
    }
    export namespace PgPublication {
      export namespace Create {}
    }
    export namespace PgPublicationNamespace {
      export namespace Create {}
    }
    export namespace PgPublicationRel {
      export namespace Create {}
    }
    export namespace PgSubscriptionRel {
      export namespace Create {}
    }
    export namespace PgLargeobject {
      export namespace Create {}
    }
  }
}
export namespace InformationSchema {
  export namespace Types {
    export namespace AdministrableRoleAuthorizationsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) =>
          AdministrableRoleAuthorizations.parse(e),
        );
      }
    }
    export namespace ApplicableRolesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => ApplicableRoles.parse(e));
      }
    }
    export namespace AttributesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Attributes.parse(e));
      }
    }
    export namespace CardinalNumberArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => CardinalNumber.parse(e));
      }
    }
    export namespace CharacterDataArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => CharacterData.parse(e));
      }
    }
    export namespace CharacterSetsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => CharacterSets.parse(e));
      }
    }
    export namespace CheckConstraintRoutineUsageArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) =>
          CheckConstraintRoutineUsage.parse(e),
        );
      }
    }
    export namespace CheckConstraintsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => CheckConstraints.parse(e));
      }
    }
    export namespace CollationCharacterSetApplicabilityArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) =>
          CollationCharacterSetApplicability.parse(e),
        );
      }
    }
    export namespace CollationsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Collations.parse(e));
      }
    }
    export namespace ColumnColumnUsageArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => ColumnColumnUsage.parse(e));
      }
    }
    export namespace ColumnDomainUsageArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => ColumnDomainUsage.parse(e));
      }
    }
    export namespace ColumnOptionsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => ColumnOptions.parse(e));
      }
    }
    export namespace ColumnPrivilegesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => ColumnPrivileges.parse(e));
      }
    }
    export namespace ColumnUdtUsageArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => ColumnUdtUsage.parse(e));
      }
    }
    export namespace ColumnsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Columns.parse(e));
      }
    }
    export namespace ConstraintColumnUsageArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => ConstraintColumnUsage.parse(e));
      }
    }
    export namespace ConstraintTableUsageArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => ConstraintTableUsage.parse(e));
      }
    }
    export namespace DataTypePrivilegesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => DataTypePrivileges.parse(e));
      }
    }
    export namespace DomainConstraintsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => DomainConstraints.parse(e));
      }
    }
    export namespace DomainUdtUsageArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => DomainUdtUsage.parse(e));
      }
    }
    export namespace DomainsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Domains.parse(e));
      }
    }
    export namespace ElementTypesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => ElementTypes.parse(e));
      }
    }
    export namespace EnabledRolesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => EnabledRoles.parse(e));
      }
    }
    export namespace ForeignDataWrapperOptionsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => ForeignDataWrapperOptions.parse(e));
      }
    }
    export namespace ForeignDataWrappersArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => ForeignDataWrappers.parse(e));
      }
    }
    export namespace ForeignServerOptionsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => ForeignServerOptions.parse(e));
      }
    }
    export namespace ForeignServersArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => ForeignServers.parse(e));
      }
    }
    export namespace ForeignTableOptionsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => ForeignTableOptions.parse(e));
      }
    }
    export namespace ForeignTablesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => ForeignTables.parse(e));
      }
    }
    export namespace InformationSchemaCatalogNameArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) =>
          InformationSchemaCatalogName.parse(e),
        );
      }
    }
    export namespace KeyColumnUsageArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => KeyColumnUsage.parse(e));
      }
    }
    export namespace ParametersArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Parameters.parse(e));
      }
    }
    export namespace PgForeignDataWrappers {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.PgForeignDataWrappers.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            fdwowner: PgCatalog.Types.Oid.parse(from.fdwowner),
            fdwoptions: PgCatalog.Types.TextArray.parse(from.fdwoptions),
            foreignDataWrapperCatalog:
              InformationSchema.Types.SqlIdentifier.parse(
                from.foreignDataWrapperCatalog,
              ),
            foreignDataWrapperName: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignDataWrapperName,
            ),
            authorizationIdentifier:
              InformationSchema.Types.SqlIdentifier.parse(
                from.authorizationIdentifier,
              ),
            foreignDataWrapperLanguage:
              InformationSchema.Types.CharacterData.parse(
                from.foreignDataWrapperLanguage,
              ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgForeignServers {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.PgForeignServers.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            srvoptions: PgCatalog.Types.TextArray.parse(from.srvoptions),
            foreignServerCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignServerCatalog,
            ),
            foreignServerName: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignServerName,
            ),
            foreignDataWrapperCatalog:
              InformationSchema.Types.SqlIdentifier.parse(
                from.foreignDataWrapperCatalog,
              ),
            foreignDataWrapperName: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignDataWrapperName,
            ),
            foreignServerType: InformationSchema.Types.CharacterData.parse(
              from.foreignServerType,
            ),
            foreignServerVersion: InformationSchema.Types.CharacterData.parse(
              from.foreignServerVersion,
            ),
            authorizationIdentifier:
              InformationSchema.Types.SqlIdentifier.parse(
                from.authorizationIdentifier,
              ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgForeignTableColumns {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.PgForeignTableColumns.is(from)) {
          return {
            nspname: PgCatalog.Types.Name.parse(from.nspname),
            relname: PgCatalog.Types.Name.parse(from.relname),
            attname: PgCatalog.Types.Name.parse(from.attname),
            attfdwoptions: PgCatalog.Types.TextArray.parse(from.attfdwoptions),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgForeignTables {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.PgForeignTables.is(from)) {
          return {
            foreignTableCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignTableCatalog,
            ),
            foreignTableSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignTableSchema,
            ),
            foreignTableName: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignTableName,
            ),
            ftoptions: PgCatalog.Types.TextArray.parse(from.ftoptions),
            foreignServerCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignServerCatalog,
            ),
            foreignServerName: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignServerName,
            ),
            authorizationIdentifier:
              InformationSchema.Types.SqlIdentifier.parse(
                from.authorizationIdentifier,
              ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgUserMappings {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.PgUserMappings.is(from)) {
          return {
            oid: PgCatalog.Types.Oid.parse(from.oid),
            umoptions: PgCatalog.Types.TextArray.parse(from.umoptions),
            umuser: PgCatalog.Types.Oid.parse(from.umuser),
            authorizationIdentifier:
              InformationSchema.Types.SqlIdentifier.parse(
                from.authorizationIdentifier,
              ),
            foreignServerCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignServerCatalog,
            ),
            foreignServerName: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignServerName,
            ),
            srvowner: InformationSchema.Types.SqlIdentifier.parse(
              from.srvowner,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ReferentialConstraintsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => ReferentialConstraints.parse(e));
      }
    }
    export namespace RoleColumnGrantsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => RoleColumnGrants.parse(e));
      }
    }
    export namespace RoleRoutineGrantsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => RoleRoutineGrants.parse(e));
      }
    }
    export namespace RoleTableGrantsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => RoleTableGrants.parse(e));
      }
    }
    export namespace RoleUdtGrantsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => RoleUdtGrants.parse(e));
      }
    }
    export namespace RoleUsageGrantsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => RoleUsageGrants.parse(e));
      }
    }
    export namespace RoutineColumnUsageArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => RoutineColumnUsage.parse(e));
      }
    }
    export namespace RoutinePrivilegesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => RoutinePrivileges.parse(e));
      }
    }
    export namespace RoutineRoutineUsageArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => RoutineRoutineUsage.parse(e));
      }
    }
    export namespace RoutineSequenceUsageArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => RoutineSequenceUsage.parse(e));
      }
    }
    export namespace RoutineTableUsageArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => RoutineTableUsage.parse(e));
      }
    }
    export namespace RoutinesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Routines.parse(e));
      }
    }
    export namespace SchemataArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Schemata.parse(e));
      }
    }
    export namespace SequencesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Sequences.parse(e));
      }
    }
    export namespace SqlFeaturesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => SqlFeatures.parse(e));
      }
    }
    export namespace SqlIdentifierArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => SqlIdentifier.parse(e));
      }
    }
    export namespace SqlImplementationInfoArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => SqlImplementationInfo.parse(e));
      }
    }
    export namespace SqlPartsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => SqlParts.parse(e));
      }
    }
    export namespace SqlSizingArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => SqlSizing.parse(e));
      }
    }
    export namespace TableConstraintsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => TableConstraints.parse(e));
      }
    }
    export namespace TablePrivilegesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => TablePrivileges.parse(e));
      }
    }
    export namespace TablesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Tables.parse(e));
      }
    }
    export namespace TimeStampArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => TimeStamp.parse(e));
      }
    }
    export namespace TransformsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Transforms.parse(e));
      }
    }
    export namespace TriggeredUpdateColumnsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => TriggeredUpdateColumns.parse(e));
      }
    }
    export namespace TriggersArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Triggers.parse(e));
      }
    }
    export namespace UdtPrivilegesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => UdtPrivileges.parse(e));
      }
    }
    export namespace UsagePrivilegesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => UsagePrivileges.parse(e));
      }
    }
    export namespace UserDefinedTypesArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => UserDefinedTypes.parse(e));
      }
    }
    export namespace UserMappingOptionsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => UserMappingOptions.parse(e));
      }
    }
    export namespace UserMappingsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => UserMappings.parse(e));
      }
    }
    export namespace ViewColumnUsageArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => ViewColumnUsage.parse(e));
      }
    }
    export namespace ViewRoutineUsageArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => ViewRoutineUsage.parse(e));
      }
    }
    export namespace ViewTableUsageArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => ViewTableUsage.parse(e));
      }
    }
    export namespace ViewsArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Views.parse(e));
      }
    }
    export namespace YesOrNoArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => YesOrNo.parse(e));
      }
    }
    export namespace AdministrableRoleAuthorizations {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.AdministrableRoleAuthorizations.is(from)) {
          return {
            grantee: InformationSchema.Types.SqlIdentifier.parse(from.grantee),
            roleName: InformationSchema.Types.SqlIdentifier.parse(
              from.roleName,
            ),
            isGrantable: InformationSchema.Types.YesOrNo.parse(
              from.isGrantable,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ApplicableRoles {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.ApplicableRoles.is(from)) {
          return {
            grantee: InformationSchema.Types.SqlIdentifier.parse(from.grantee),
            roleName: InformationSchema.Types.SqlIdentifier.parse(
              from.roleName,
            ),
            isGrantable: InformationSchema.Types.YesOrNo.parse(
              from.isGrantable,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Attributes {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.Attributes.is(from)) {
          return {
            udtCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.udtCatalog,
            ),
            udtSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.udtSchema,
            ),
            udtName: InformationSchema.Types.SqlIdentifier.parse(from.udtName),
            attributeName: InformationSchema.Types.SqlIdentifier.parse(
              from.attributeName,
            ),
            ordinalPosition: InformationSchema.Types.CardinalNumber.parse(
              from.ordinalPosition,
            ),
            attributeDefault: InformationSchema.Types.CharacterData.parse(
              from.attributeDefault,
            ),
            isNullable: InformationSchema.Types.YesOrNo.parse(from.isNullable),
            dataType: InformationSchema.Types.CharacterData.parse(
              from.dataType,
            ),
            characterMaximumLength:
              InformationSchema.Types.CardinalNumber.parse(
                from.characterMaximumLength,
              ),
            characterOctetLength: InformationSchema.Types.CardinalNumber.parse(
              from.characterOctetLength,
            ),
            characterSetCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.characterSetCatalog,
            ),
            characterSetSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.characterSetSchema,
            ),
            characterSetName: InformationSchema.Types.SqlIdentifier.parse(
              from.characterSetName,
            ),
            collationCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.collationCatalog,
            ),
            collationSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.collationSchema,
            ),
            collationName: InformationSchema.Types.SqlIdentifier.parse(
              from.collationName,
            ),
            numericPrecision: InformationSchema.Types.CardinalNumber.parse(
              from.numericPrecision,
            ),
            numericPrecisionRadix: InformationSchema.Types.CardinalNumber.parse(
              from.numericPrecisionRadix,
            ),
            numericScale: InformationSchema.Types.CardinalNumber.parse(
              from.numericScale,
            ),
            datetimePrecision: InformationSchema.Types.CardinalNumber.parse(
              from.datetimePrecision,
            ),
            intervalType: InformationSchema.Types.CharacterData.parse(
              from.intervalType,
            ),
            intervalPrecision: InformationSchema.Types.CardinalNumber.parse(
              from.intervalPrecision,
            ),
            attributeUdtCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.attributeUdtCatalog,
            ),
            attributeUdtSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.attributeUdtSchema,
            ),
            attributeUdtName: InformationSchema.Types.SqlIdentifier.parse(
              from.attributeUdtName,
            ),
            scopeCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.scopeCatalog,
            ),
            scopeSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.scopeSchema,
            ),
            scopeName: InformationSchema.Types.SqlIdentifier.parse(
              from.scopeName,
            ),
            maximumCardinality: InformationSchema.Types.CardinalNumber.parse(
              from.maximumCardinality,
            ),
            dtdIdentifier: InformationSchema.Types.SqlIdentifier.parse(
              from.dtdIdentifier,
            ),
            isDerivedReferenceAttribute: InformationSchema.Types.YesOrNo.parse(
              from.isDerivedReferenceAttribute,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace CardinalNumber {
      export function parse(from: unknown) {
        // DomainType
        if (from === null || from === undefined) return null;
        return PgCatalog.Types.Int4.parse(from);
      }
    }
    export namespace CharacterData {
      export function parse(from: unknown) {
        // DomainType
        if (from === null || from === undefined) return null;
        return PgCatalog.Types.Varchar.parse(from);
      }
    }
    export namespace CharacterSets {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.CharacterSets.is(from)) {
          return {
            characterSetCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.characterSetCatalog,
            ),
            characterSetSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.characterSetSchema,
            ),
            characterSetName: InformationSchema.Types.SqlIdentifier.parse(
              from.characterSetName,
            ),
            characterRepertoire: InformationSchema.Types.SqlIdentifier.parse(
              from.characterRepertoire,
            ),
            formOfUse: InformationSchema.Types.SqlIdentifier.parse(
              from.formOfUse,
            ),
            defaultCollateCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.defaultCollateCatalog,
            ),
            defaultCollateSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.defaultCollateSchema,
            ),
            defaultCollateName: InformationSchema.Types.SqlIdentifier.parse(
              from.defaultCollateName,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace CheckConstraintRoutineUsage {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.CheckConstraintRoutineUsage.is(from)) {
          return {
            constraintCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.constraintCatalog,
            ),
            constraintSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.constraintSchema,
            ),
            constraintName: InformationSchema.Types.SqlIdentifier.parse(
              from.constraintName,
            ),
            specificCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.specificCatalog,
            ),
            specificSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.specificSchema,
            ),
            specificName: InformationSchema.Types.SqlIdentifier.parse(
              from.specificName,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace CheckConstraints {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.CheckConstraints.is(from)) {
          return {
            constraintCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.constraintCatalog,
            ),
            constraintSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.constraintSchema,
            ),
            constraintName: InformationSchema.Types.SqlIdentifier.parse(
              from.constraintName,
            ),
            checkClause: InformationSchema.Types.CharacterData.parse(
              from.checkClause,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace CollationCharacterSetApplicability {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (
          InformationSchema.Types.CollationCharacterSetApplicability.is(from)
        ) {
          return {
            collationCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.collationCatalog,
            ),
            collationSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.collationSchema,
            ),
            collationName: InformationSchema.Types.SqlIdentifier.parse(
              from.collationName,
            ),
            characterSetCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.characterSetCatalog,
            ),
            characterSetSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.characterSetSchema,
            ),
            characterSetName: InformationSchema.Types.SqlIdentifier.parse(
              from.characterSetName,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Collations {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.Collations.is(from)) {
          return {
            collationCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.collationCatalog,
            ),
            collationSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.collationSchema,
            ),
            collationName: InformationSchema.Types.SqlIdentifier.parse(
              from.collationName,
            ),
            padAttribute: InformationSchema.Types.CharacterData.parse(
              from.padAttribute,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ColumnColumnUsage {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.ColumnColumnUsage.is(from)) {
          return {
            tableCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.tableCatalog,
            ),
            tableSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.tableSchema,
            ),
            tableName: InformationSchema.Types.SqlIdentifier.parse(
              from.tableName,
            ),
            columnName: InformationSchema.Types.SqlIdentifier.parse(
              from.columnName,
            ),
            dependentColumn: InformationSchema.Types.SqlIdentifier.parse(
              from.dependentColumn,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ColumnDomainUsage {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.ColumnDomainUsage.is(from)) {
          return {
            domainCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.domainCatalog,
            ),
            domainSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.domainSchema,
            ),
            domainName: InformationSchema.Types.SqlIdentifier.parse(
              from.domainName,
            ),
            tableCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.tableCatalog,
            ),
            tableSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.tableSchema,
            ),
            tableName: InformationSchema.Types.SqlIdentifier.parse(
              from.tableName,
            ),
            columnName: InformationSchema.Types.SqlIdentifier.parse(
              from.columnName,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ColumnOptions {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.ColumnOptions.is(from)) {
          return {
            tableCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.tableCatalog,
            ),
            tableSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.tableSchema,
            ),
            tableName: InformationSchema.Types.SqlIdentifier.parse(
              from.tableName,
            ),
            columnName: InformationSchema.Types.SqlIdentifier.parse(
              from.columnName,
            ),
            optionName: InformationSchema.Types.SqlIdentifier.parse(
              from.optionName,
            ),
            optionValue: InformationSchema.Types.CharacterData.parse(
              from.optionValue,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ColumnPrivileges {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.ColumnPrivileges.is(from)) {
          return {
            grantor: InformationSchema.Types.SqlIdentifier.parse(from.grantor),
            grantee: InformationSchema.Types.SqlIdentifier.parse(from.grantee),
            tableCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.tableCatalog,
            ),
            tableSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.tableSchema,
            ),
            tableName: InformationSchema.Types.SqlIdentifier.parse(
              from.tableName,
            ),
            columnName: InformationSchema.Types.SqlIdentifier.parse(
              from.columnName,
            ),
            privilegeType: InformationSchema.Types.CharacterData.parse(
              from.privilegeType,
            ),
            isGrantable: InformationSchema.Types.YesOrNo.parse(
              from.isGrantable,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ColumnUdtUsage {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.ColumnUdtUsage.is(from)) {
          return {
            udtCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.udtCatalog,
            ),
            udtSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.udtSchema,
            ),
            udtName: InformationSchema.Types.SqlIdentifier.parse(from.udtName),
            tableCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.tableCatalog,
            ),
            tableSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.tableSchema,
            ),
            tableName: InformationSchema.Types.SqlIdentifier.parse(
              from.tableName,
            ),
            columnName: InformationSchema.Types.SqlIdentifier.parse(
              from.columnName,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Columns {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.Columns.is(from)) {
          return {
            tableCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.tableCatalog,
            ),
            tableSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.tableSchema,
            ),
            tableName: InformationSchema.Types.SqlIdentifier.parse(
              from.tableName,
            ),
            columnName: InformationSchema.Types.SqlIdentifier.parse(
              from.columnName,
            ),
            ordinalPosition: InformationSchema.Types.CardinalNumber.parse(
              from.ordinalPosition,
            ),
            columnDefault: InformationSchema.Types.CharacterData.parse(
              from.columnDefault,
            ),
            isNullable: InformationSchema.Types.YesOrNo.parse(from.isNullable),
            dataType: InformationSchema.Types.CharacterData.parse(
              from.dataType,
            ),
            characterMaximumLength:
              InformationSchema.Types.CardinalNumber.parse(
                from.characterMaximumLength,
              ),
            characterOctetLength: InformationSchema.Types.CardinalNumber.parse(
              from.characterOctetLength,
            ),
            numericPrecision: InformationSchema.Types.CardinalNumber.parse(
              from.numericPrecision,
            ),
            numericPrecisionRadix: InformationSchema.Types.CardinalNumber.parse(
              from.numericPrecisionRadix,
            ),
            numericScale: InformationSchema.Types.CardinalNumber.parse(
              from.numericScale,
            ),
            datetimePrecision: InformationSchema.Types.CardinalNumber.parse(
              from.datetimePrecision,
            ),
            intervalType: InformationSchema.Types.CharacterData.parse(
              from.intervalType,
            ),
            intervalPrecision: InformationSchema.Types.CardinalNumber.parse(
              from.intervalPrecision,
            ),
            characterSetCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.characterSetCatalog,
            ),
            characterSetSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.characterSetSchema,
            ),
            characterSetName: InformationSchema.Types.SqlIdentifier.parse(
              from.characterSetName,
            ),
            collationCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.collationCatalog,
            ),
            collationSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.collationSchema,
            ),
            collationName: InformationSchema.Types.SqlIdentifier.parse(
              from.collationName,
            ),
            domainCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.domainCatalog,
            ),
            domainSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.domainSchema,
            ),
            domainName: InformationSchema.Types.SqlIdentifier.parse(
              from.domainName,
            ),
            udtCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.udtCatalog,
            ),
            udtSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.udtSchema,
            ),
            udtName: InformationSchema.Types.SqlIdentifier.parse(from.udtName),
            scopeCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.scopeCatalog,
            ),
            scopeSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.scopeSchema,
            ),
            scopeName: InformationSchema.Types.SqlIdentifier.parse(
              from.scopeName,
            ),
            maximumCardinality: InformationSchema.Types.CardinalNumber.parse(
              from.maximumCardinality,
            ),
            dtdIdentifier: InformationSchema.Types.SqlIdentifier.parse(
              from.dtdIdentifier,
            ),
            isSelfReferencing: InformationSchema.Types.YesOrNo.parse(
              from.isSelfReferencing,
            ),
            isIdentity: InformationSchema.Types.YesOrNo.parse(from.isIdentity),
            identityGeneration: InformationSchema.Types.CharacterData.parse(
              from.identityGeneration,
            ),
            identityStart: InformationSchema.Types.CharacterData.parse(
              from.identityStart,
            ),
            identityIncrement: InformationSchema.Types.CharacterData.parse(
              from.identityIncrement,
            ),
            identityMaximum: InformationSchema.Types.CharacterData.parse(
              from.identityMaximum,
            ),
            identityMinimum: InformationSchema.Types.CharacterData.parse(
              from.identityMinimum,
            ),
            identityCycle: InformationSchema.Types.YesOrNo.parse(
              from.identityCycle,
            ),
            isGenerated: InformationSchema.Types.CharacterData.parse(
              from.isGenerated,
            ),
            generationExpression: InformationSchema.Types.CharacterData.parse(
              from.generationExpression,
            ),
            isUpdatable: InformationSchema.Types.YesOrNo.parse(
              from.isUpdatable,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ConstraintColumnUsage {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.ConstraintColumnUsage.is(from)) {
          return {
            tableCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.tableCatalog,
            ),
            tableSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.tableSchema,
            ),
            tableName: InformationSchema.Types.SqlIdentifier.parse(
              from.tableName,
            ),
            columnName: InformationSchema.Types.SqlIdentifier.parse(
              from.columnName,
            ),
            constraintCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.constraintCatalog,
            ),
            constraintSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.constraintSchema,
            ),
            constraintName: InformationSchema.Types.SqlIdentifier.parse(
              from.constraintName,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ConstraintTableUsage {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.ConstraintTableUsage.is(from)) {
          return {
            tableCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.tableCatalog,
            ),
            tableSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.tableSchema,
            ),
            tableName: InformationSchema.Types.SqlIdentifier.parse(
              from.tableName,
            ),
            constraintCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.constraintCatalog,
            ),
            constraintSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.constraintSchema,
            ),
            constraintName: InformationSchema.Types.SqlIdentifier.parse(
              from.constraintName,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace DataTypePrivileges {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.DataTypePrivileges.is(from)) {
          return {
            objectCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.objectCatalog,
            ),
            objectSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.objectSchema,
            ),
            objectName: InformationSchema.Types.SqlIdentifier.parse(
              from.objectName,
            ),
            objectType: InformationSchema.Types.CharacterData.parse(
              from.objectType,
            ),
            dtdIdentifier: InformationSchema.Types.SqlIdentifier.parse(
              from.dtdIdentifier,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace DomainConstraints {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.DomainConstraints.is(from)) {
          return {
            constraintCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.constraintCatalog,
            ),
            constraintSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.constraintSchema,
            ),
            constraintName: InformationSchema.Types.SqlIdentifier.parse(
              from.constraintName,
            ),
            domainCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.domainCatalog,
            ),
            domainSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.domainSchema,
            ),
            domainName: InformationSchema.Types.SqlIdentifier.parse(
              from.domainName,
            ),
            isDeferrable: InformationSchema.Types.YesOrNo.parse(
              from.isDeferrable,
            ),
            initiallyDeferred: InformationSchema.Types.YesOrNo.parse(
              from.initiallyDeferred,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace DomainUdtUsage {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.DomainUdtUsage.is(from)) {
          return {
            udtCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.udtCatalog,
            ),
            udtSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.udtSchema,
            ),
            udtName: InformationSchema.Types.SqlIdentifier.parse(from.udtName),
            domainCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.domainCatalog,
            ),
            domainSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.domainSchema,
            ),
            domainName: InformationSchema.Types.SqlIdentifier.parse(
              from.domainName,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Domains {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.Domains.is(from)) {
          return {
            domainCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.domainCatalog,
            ),
            domainSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.domainSchema,
            ),
            domainName: InformationSchema.Types.SqlIdentifier.parse(
              from.domainName,
            ),
            dataType: InformationSchema.Types.CharacterData.parse(
              from.dataType,
            ),
            characterMaximumLength:
              InformationSchema.Types.CardinalNumber.parse(
                from.characterMaximumLength,
              ),
            characterOctetLength: InformationSchema.Types.CardinalNumber.parse(
              from.characterOctetLength,
            ),
            characterSetCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.characterSetCatalog,
            ),
            characterSetSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.characterSetSchema,
            ),
            characterSetName: InformationSchema.Types.SqlIdentifier.parse(
              from.characterSetName,
            ),
            collationCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.collationCatalog,
            ),
            collationSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.collationSchema,
            ),
            collationName: InformationSchema.Types.SqlIdentifier.parse(
              from.collationName,
            ),
            numericPrecision: InformationSchema.Types.CardinalNumber.parse(
              from.numericPrecision,
            ),
            numericPrecisionRadix: InformationSchema.Types.CardinalNumber.parse(
              from.numericPrecisionRadix,
            ),
            numericScale: InformationSchema.Types.CardinalNumber.parse(
              from.numericScale,
            ),
            datetimePrecision: InformationSchema.Types.CardinalNumber.parse(
              from.datetimePrecision,
            ),
            intervalType: InformationSchema.Types.CharacterData.parse(
              from.intervalType,
            ),
            intervalPrecision: InformationSchema.Types.CardinalNumber.parse(
              from.intervalPrecision,
            ),
            domainDefault: InformationSchema.Types.CharacterData.parse(
              from.domainDefault,
            ),
            udtCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.udtCatalog,
            ),
            udtSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.udtSchema,
            ),
            udtName: InformationSchema.Types.SqlIdentifier.parse(from.udtName),
            scopeCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.scopeCatalog,
            ),
            scopeSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.scopeSchema,
            ),
            scopeName: InformationSchema.Types.SqlIdentifier.parse(
              from.scopeName,
            ),
            maximumCardinality: InformationSchema.Types.CardinalNumber.parse(
              from.maximumCardinality,
            ),
            dtdIdentifier: InformationSchema.Types.SqlIdentifier.parse(
              from.dtdIdentifier,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ElementTypes {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.ElementTypes.is(from)) {
          return {
            objectCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.objectCatalog,
            ),
            objectSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.objectSchema,
            ),
            objectName: InformationSchema.Types.SqlIdentifier.parse(
              from.objectName,
            ),
            objectType: InformationSchema.Types.CharacterData.parse(
              from.objectType,
            ),
            collectionTypeIdentifier:
              InformationSchema.Types.SqlIdentifier.parse(
                from.collectionTypeIdentifier,
              ),
            dataType: InformationSchema.Types.CharacterData.parse(
              from.dataType,
            ),
            characterMaximumLength:
              InformationSchema.Types.CardinalNumber.parse(
                from.characterMaximumLength,
              ),
            characterOctetLength: InformationSchema.Types.CardinalNumber.parse(
              from.characterOctetLength,
            ),
            characterSetCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.characterSetCatalog,
            ),
            characterSetSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.characterSetSchema,
            ),
            characterSetName: InformationSchema.Types.SqlIdentifier.parse(
              from.characterSetName,
            ),
            collationCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.collationCatalog,
            ),
            collationSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.collationSchema,
            ),
            collationName: InformationSchema.Types.SqlIdentifier.parse(
              from.collationName,
            ),
            numericPrecision: InformationSchema.Types.CardinalNumber.parse(
              from.numericPrecision,
            ),
            numericPrecisionRadix: InformationSchema.Types.CardinalNumber.parse(
              from.numericPrecisionRadix,
            ),
            numericScale: InformationSchema.Types.CardinalNumber.parse(
              from.numericScale,
            ),
            datetimePrecision: InformationSchema.Types.CardinalNumber.parse(
              from.datetimePrecision,
            ),
            intervalType: InformationSchema.Types.CharacterData.parse(
              from.intervalType,
            ),
            intervalPrecision: InformationSchema.Types.CardinalNumber.parse(
              from.intervalPrecision,
            ),
            domainDefault: InformationSchema.Types.CharacterData.parse(
              from.domainDefault,
            ),
            udtCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.udtCatalog,
            ),
            udtSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.udtSchema,
            ),
            udtName: InformationSchema.Types.SqlIdentifier.parse(from.udtName),
            scopeCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.scopeCatalog,
            ),
            scopeSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.scopeSchema,
            ),
            scopeName: InformationSchema.Types.SqlIdentifier.parse(
              from.scopeName,
            ),
            maximumCardinality: InformationSchema.Types.CardinalNumber.parse(
              from.maximumCardinality,
            ),
            dtdIdentifier: InformationSchema.Types.SqlIdentifier.parse(
              from.dtdIdentifier,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace EnabledRoles {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.EnabledRoles.is(from)) {
          return {
            roleName: InformationSchema.Types.SqlIdentifier.parse(
              from.roleName,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ForeignDataWrapperOptions {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.ForeignDataWrapperOptions.is(from)) {
          return {
            foreignDataWrapperCatalog:
              InformationSchema.Types.SqlIdentifier.parse(
                from.foreignDataWrapperCatalog,
              ),
            foreignDataWrapperName: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignDataWrapperName,
            ),
            optionName: InformationSchema.Types.SqlIdentifier.parse(
              from.optionName,
            ),
            optionValue: InformationSchema.Types.CharacterData.parse(
              from.optionValue,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ForeignDataWrappers {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.ForeignDataWrappers.is(from)) {
          return {
            foreignDataWrapperCatalog:
              InformationSchema.Types.SqlIdentifier.parse(
                from.foreignDataWrapperCatalog,
              ),
            foreignDataWrapperName: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignDataWrapperName,
            ),
            authorizationIdentifier:
              InformationSchema.Types.SqlIdentifier.parse(
                from.authorizationIdentifier,
              ),
            libraryName: InformationSchema.Types.CharacterData.parse(
              from.libraryName,
            ),
            foreignDataWrapperLanguage:
              InformationSchema.Types.CharacterData.parse(
                from.foreignDataWrapperLanguage,
              ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ForeignServerOptions {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.ForeignServerOptions.is(from)) {
          return {
            foreignServerCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignServerCatalog,
            ),
            foreignServerName: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignServerName,
            ),
            optionName: InformationSchema.Types.SqlIdentifier.parse(
              from.optionName,
            ),
            optionValue: InformationSchema.Types.CharacterData.parse(
              from.optionValue,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ForeignServers {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.ForeignServers.is(from)) {
          return {
            foreignServerCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignServerCatalog,
            ),
            foreignServerName: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignServerName,
            ),
            foreignDataWrapperCatalog:
              InformationSchema.Types.SqlIdentifier.parse(
                from.foreignDataWrapperCatalog,
              ),
            foreignDataWrapperName: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignDataWrapperName,
            ),
            foreignServerType: InformationSchema.Types.CharacterData.parse(
              from.foreignServerType,
            ),
            foreignServerVersion: InformationSchema.Types.CharacterData.parse(
              from.foreignServerVersion,
            ),
            authorizationIdentifier:
              InformationSchema.Types.SqlIdentifier.parse(
                from.authorizationIdentifier,
              ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ForeignTableOptions {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.ForeignTableOptions.is(from)) {
          return {
            foreignTableCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignTableCatalog,
            ),
            foreignTableSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignTableSchema,
            ),
            foreignTableName: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignTableName,
            ),
            optionName: InformationSchema.Types.SqlIdentifier.parse(
              from.optionName,
            ),
            optionValue: InformationSchema.Types.CharacterData.parse(
              from.optionValue,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ForeignTables {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.ForeignTables.is(from)) {
          return {
            foreignTableCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignTableCatalog,
            ),
            foreignTableSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignTableSchema,
            ),
            foreignTableName: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignTableName,
            ),
            foreignServerCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignServerCatalog,
            ),
            foreignServerName: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignServerName,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace InformationSchemaCatalogName {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.InformationSchemaCatalogName.is(from)) {
          return {
            catalogName: InformationSchema.Types.SqlIdentifier.parse(
              from.catalogName,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace KeyColumnUsage {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.KeyColumnUsage.is(from)) {
          return {
            constraintCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.constraintCatalog,
            ),
            constraintSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.constraintSchema,
            ),
            constraintName: InformationSchema.Types.SqlIdentifier.parse(
              from.constraintName,
            ),
            tableCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.tableCatalog,
            ),
            tableSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.tableSchema,
            ),
            tableName: InformationSchema.Types.SqlIdentifier.parse(
              from.tableName,
            ),
            columnName: InformationSchema.Types.SqlIdentifier.parse(
              from.columnName,
            ),
            ordinalPosition: InformationSchema.Types.CardinalNumber.parse(
              from.ordinalPosition,
            ),
            positionInUniqueConstraint:
              InformationSchema.Types.CardinalNumber.parse(
                from.positionInUniqueConstraint,
              ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Parameters {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.Parameters.is(from)) {
          return {
            specificCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.specificCatalog,
            ),
            specificSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.specificSchema,
            ),
            specificName: InformationSchema.Types.SqlIdentifier.parse(
              from.specificName,
            ),
            ordinalPosition: InformationSchema.Types.CardinalNumber.parse(
              from.ordinalPosition,
            ),
            parameterMode: InformationSchema.Types.CharacterData.parse(
              from.parameterMode,
            ),
            isResult: InformationSchema.Types.YesOrNo.parse(from.isResult),
            asLocator: InformationSchema.Types.YesOrNo.parse(from.asLocator),
            parameterName: InformationSchema.Types.SqlIdentifier.parse(
              from.parameterName,
            ),
            dataType: InformationSchema.Types.CharacterData.parse(
              from.dataType,
            ),
            characterMaximumLength:
              InformationSchema.Types.CardinalNumber.parse(
                from.characterMaximumLength,
              ),
            characterOctetLength: InformationSchema.Types.CardinalNumber.parse(
              from.characterOctetLength,
            ),
            characterSetCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.characterSetCatalog,
            ),
            characterSetSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.characterSetSchema,
            ),
            characterSetName: InformationSchema.Types.SqlIdentifier.parse(
              from.characterSetName,
            ),
            collationCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.collationCatalog,
            ),
            collationSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.collationSchema,
            ),
            collationName: InformationSchema.Types.SqlIdentifier.parse(
              from.collationName,
            ),
            numericPrecision: InformationSchema.Types.CardinalNumber.parse(
              from.numericPrecision,
            ),
            numericPrecisionRadix: InformationSchema.Types.CardinalNumber.parse(
              from.numericPrecisionRadix,
            ),
            numericScale: InformationSchema.Types.CardinalNumber.parse(
              from.numericScale,
            ),
            datetimePrecision: InformationSchema.Types.CardinalNumber.parse(
              from.datetimePrecision,
            ),
            intervalType: InformationSchema.Types.CharacterData.parse(
              from.intervalType,
            ),
            intervalPrecision: InformationSchema.Types.CardinalNumber.parse(
              from.intervalPrecision,
            ),
            udtCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.udtCatalog,
            ),
            udtSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.udtSchema,
            ),
            udtName: InformationSchema.Types.SqlIdentifier.parse(from.udtName),
            scopeCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.scopeCatalog,
            ),
            scopeSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.scopeSchema,
            ),
            scopeName: InformationSchema.Types.SqlIdentifier.parse(
              from.scopeName,
            ),
            maximumCardinality: InformationSchema.Types.CardinalNumber.parse(
              from.maximumCardinality,
            ),
            dtdIdentifier: InformationSchema.Types.SqlIdentifier.parse(
              from.dtdIdentifier,
            ),
            parameterDefault: InformationSchema.Types.CharacterData.parse(
              from.parameterDefault,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ReferentialConstraints {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.ReferentialConstraints.is(from)) {
          return {
            constraintCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.constraintCatalog,
            ),
            constraintSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.constraintSchema,
            ),
            constraintName: InformationSchema.Types.SqlIdentifier.parse(
              from.constraintName,
            ),
            uniqueConstraintCatalog:
              InformationSchema.Types.SqlIdentifier.parse(
                from.uniqueConstraintCatalog,
              ),
            uniqueConstraintSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.uniqueConstraintSchema,
            ),
            uniqueConstraintName: InformationSchema.Types.SqlIdentifier.parse(
              from.uniqueConstraintName,
            ),
            matchOption: InformationSchema.Types.CharacterData.parse(
              from.matchOption,
            ),
            updateRule: InformationSchema.Types.CharacterData.parse(
              from.updateRule,
            ),
            deleteRule: InformationSchema.Types.CharacterData.parse(
              from.deleteRule,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace RoleColumnGrants {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.RoleColumnGrants.is(from)) {
          return {
            grantor: InformationSchema.Types.SqlIdentifier.parse(from.grantor),
            grantee: InformationSchema.Types.SqlIdentifier.parse(from.grantee),
            tableCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.tableCatalog,
            ),
            tableSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.tableSchema,
            ),
            tableName: InformationSchema.Types.SqlIdentifier.parse(
              from.tableName,
            ),
            columnName: InformationSchema.Types.SqlIdentifier.parse(
              from.columnName,
            ),
            privilegeType: InformationSchema.Types.CharacterData.parse(
              from.privilegeType,
            ),
            isGrantable: InformationSchema.Types.YesOrNo.parse(
              from.isGrantable,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace RoleRoutineGrants {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.RoleRoutineGrants.is(from)) {
          return {
            grantor: InformationSchema.Types.SqlIdentifier.parse(from.grantor),
            grantee: InformationSchema.Types.SqlIdentifier.parse(from.grantee),
            specificCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.specificCatalog,
            ),
            specificSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.specificSchema,
            ),
            specificName: InformationSchema.Types.SqlIdentifier.parse(
              from.specificName,
            ),
            routineCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.routineCatalog,
            ),
            routineSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.routineSchema,
            ),
            routineName: InformationSchema.Types.SqlIdentifier.parse(
              from.routineName,
            ),
            privilegeType: InformationSchema.Types.CharacterData.parse(
              from.privilegeType,
            ),
            isGrantable: InformationSchema.Types.YesOrNo.parse(
              from.isGrantable,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace RoleTableGrants {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.RoleTableGrants.is(from)) {
          return {
            grantor: InformationSchema.Types.SqlIdentifier.parse(from.grantor),
            grantee: InformationSchema.Types.SqlIdentifier.parse(from.grantee),
            tableCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.tableCatalog,
            ),
            tableSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.tableSchema,
            ),
            tableName: InformationSchema.Types.SqlIdentifier.parse(
              from.tableName,
            ),
            privilegeType: InformationSchema.Types.CharacterData.parse(
              from.privilegeType,
            ),
            isGrantable: InformationSchema.Types.YesOrNo.parse(
              from.isGrantable,
            ),
            withHierarchy: InformationSchema.Types.YesOrNo.parse(
              from.withHierarchy,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace RoleUdtGrants {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.RoleUdtGrants.is(from)) {
          return {
            grantor: InformationSchema.Types.SqlIdentifier.parse(from.grantor),
            grantee: InformationSchema.Types.SqlIdentifier.parse(from.grantee),
            udtCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.udtCatalog,
            ),
            udtSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.udtSchema,
            ),
            udtName: InformationSchema.Types.SqlIdentifier.parse(from.udtName),
            privilegeType: InformationSchema.Types.CharacterData.parse(
              from.privilegeType,
            ),
            isGrantable: InformationSchema.Types.YesOrNo.parse(
              from.isGrantable,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace RoleUsageGrants {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.RoleUsageGrants.is(from)) {
          return {
            grantor: InformationSchema.Types.SqlIdentifier.parse(from.grantor),
            grantee: InformationSchema.Types.SqlIdentifier.parse(from.grantee),
            objectCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.objectCatalog,
            ),
            objectSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.objectSchema,
            ),
            objectName: InformationSchema.Types.SqlIdentifier.parse(
              from.objectName,
            ),
            objectType: InformationSchema.Types.CharacterData.parse(
              from.objectType,
            ),
            privilegeType: InformationSchema.Types.CharacterData.parse(
              from.privilegeType,
            ),
            isGrantable: InformationSchema.Types.YesOrNo.parse(
              from.isGrantable,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace RoutineColumnUsage {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.RoutineColumnUsage.is(from)) {
          return {
            specificCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.specificCatalog,
            ),
            specificSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.specificSchema,
            ),
            specificName: InformationSchema.Types.SqlIdentifier.parse(
              from.specificName,
            ),
            routineCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.routineCatalog,
            ),
            routineSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.routineSchema,
            ),
            routineName: InformationSchema.Types.SqlIdentifier.parse(
              from.routineName,
            ),
            tableCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.tableCatalog,
            ),
            tableSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.tableSchema,
            ),
            tableName: InformationSchema.Types.SqlIdentifier.parse(
              from.tableName,
            ),
            columnName: InformationSchema.Types.SqlIdentifier.parse(
              from.columnName,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace RoutinePrivileges {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.RoutinePrivileges.is(from)) {
          return {
            grantor: InformationSchema.Types.SqlIdentifier.parse(from.grantor),
            grantee: InformationSchema.Types.SqlIdentifier.parse(from.grantee),
            specificCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.specificCatalog,
            ),
            specificSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.specificSchema,
            ),
            specificName: InformationSchema.Types.SqlIdentifier.parse(
              from.specificName,
            ),
            routineCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.routineCatalog,
            ),
            routineSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.routineSchema,
            ),
            routineName: InformationSchema.Types.SqlIdentifier.parse(
              from.routineName,
            ),
            privilegeType: InformationSchema.Types.CharacterData.parse(
              from.privilegeType,
            ),
            isGrantable: InformationSchema.Types.YesOrNo.parse(
              from.isGrantable,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace RoutineRoutineUsage {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.RoutineRoutineUsage.is(from)) {
          return {
            specificCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.specificCatalog,
            ),
            specificSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.specificSchema,
            ),
            specificName: InformationSchema.Types.SqlIdentifier.parse(
              from.specificName,
            ),
            routineCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.routineCatalog,
            ),
            routineSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.routineSchema,
            ),
            routineName: InformationSchema.Types.SqlIdentifier.parse(
              from.routineName,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace RoutineSequenceUsage {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.RoutineSequenceUsage.is(from)) {
          return {
            specificCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.specificCatalog,
            ),
            specificSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.specificSchema,
            ),
            specificName: InformationSchema.Types.SqlIdentifier.parse(
              from.specificName,
            ),
            routineCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.routineCatalog,
            ),
            routineSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.routineSchema,
            ),
            routineName: InformationSchema.Types.SqlIdentifier.parse(
              from.routineName,
            ),
            sequenceCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.sequenceCatalog,
            ),
            sequenceSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.sequenceSchema,
            ),
            sequenceName: InformationSchema.Types.SqlIdentifier.parse(
              from.sequenceName,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace RoutineTableUsage {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.RoutineTableUsage.is(from)) {
          return {
            specificCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.specificCatalog,
            ),
            specificSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.specificSchema,
            ),
            specificName: InformationSchema.Types.SqlIdentifier.parse(
              from.specificName,
            ),
            routineCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.routineCatalog,
            ),
            routineSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.routineSchema,
            ),
            routineName: InformationSchema.Types.SqlIdentifier.parse(
              from.routineName,
            ),
            tableCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.tableCatalog,
            ),
            tableSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.tableSchema,
            ),
            tableName: InformationSchema.Types.SqlIdentifier.parse(
              from.tableName,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Routines {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.Routines.is(from)) {
          return {
            specificCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.specificCatalog,
            ),
            specificSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.specificSchema,
            ),
            specificName: InformationSchema.Types.SqlIdentifier.parse(
              from.specificName,
            ),
            routineCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.routineCatalog,
            ),
            routineSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.routineSchema,
            ),
            routineName: InformationSchema.Types.SqlIdentifier.parse(
              from.routineName,
            ),
            routineType: InformationSchema.Types.CharacterData.parse(
              from.routineType,
            ),
            moduleCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.moduleCatalog,
            ),
            moduleSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.moduleSchema,
            ),
            moduleName: InformationSchema.Types.SqlIdentifier.parse(
              from.moduleName,
            ),
            udtCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.udtCatalog,
            ),
            udtSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.udtSchema,
            ),
            udtName: InformationSchema.Types.SqlIdentifier.parse(from.udtName),
            dataType: InformationSchema.Types.CharacterData.parse(
              from.dataType,
            ),
            characterMaximumLength:
              InformationSchema.Types.CardinalNumber.parse(
                from.characterMaximumLength,
              ),
            characterOctetLength: InformationSchema.Types.CardinalNumber.parse(
              from.characterOctetLength,
            ),
            characterSetCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.characterSetCatalog,
            ),
            characterSetSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.characterSetSchema,
            ),
            characterSetName: InformationSchema.Types.SqlIdentifier.parse(
              from.characterSetName,
            ),
            collationCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.collationCatalog,
            ),
            collationSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.collationSchema,
            ),
            collationName: InformationSchema.Types.SqlIdentifier.parse(
              from.collationName,
            ),
            numericPrecision: InformationSchema.Types.CardinalNumber.parse(
              from.numericPrecision,
            ),
            numericPrecisionRadix: InformationSchema.Types.CardinalNumber.parse(
              from.numericPrecisionRadix,
            ),
            numericScale: InformationSchema.Types.CardinalNumber.parse(
              from.numericScale,
            ),
            datetimePrecision: InformationSchema.Types.CardinalNumber.parse(
              from.datetimePrecision,
            ),
            intervalType: InformationSchema.Types.CharacterData.parse(
              from.intervalType,
            ),
            intervalPrecision: InformationSchema.Types.CardinalNumber.parse(
              from.intervalPrecision,
            ),
            typeUdtCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.typeUdtCatalog,
            ),
            typeUdtSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.typeUdtSchema,
            ),
            typeUdtName: InformationSchema.Types.SqlIdentifier.parse(
              from.typeUdtName,
            ),
            scopeCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.scopeCatalog,
            ),
            scopeSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.scopeSchema,
            ),
            scopeName: InformationSchema.Types.SqlIdentifier.parse(
              from.scopeName,
            ),
            maximumCardinality: InformationSchema.Types.CardinalNumber.parse(
              from.maximumCardinality,
            ),
            dtdIdentifier: InformationSchema.Types.SqlIdentifier.parse(
              from.dtdIdentifier,
            ),
            routineBody: InformationSchema.Types.CharacterData.parse(
              from.routineBody,
            ),
            routineDefinition: InformationSchema.Types.CharacterData.parse(
              from.routineDefinition,
            ),
            externalName: InformationSchema.Types.CharacterData.parse(
              from.externalName,
            ),
            externalLanguage: InformationSchema.Types.CharacterData.parse(
              from.externalLanguage,
            ),
            parameterStyle: InformationSchema.Types.CharacterData.parse(
              from.parameterStyle,
            ),
            isDeterministic: InformationSchema.Types.YesOrNo.parse(
              from.isDeterministic,
            ),
            sqlDataAccess: InformationSchema.Types.CharacterData.parse(
              from.sqlDataAccess,
            ),
            isNullCall: InformationSchema.Types.YesOrNo.parse(from.isNullCall),
            sqlPath: InformationSchema.Types.CharacterData.parse(from.sqlPath),
            schemaLevelRoutine: InformationSchema.Types.YesOrNo.parse(
              from.schemaLevelRoutine,
            ),
            maxDynamicResultSets: InformationSchema.Types.CardinalNumber.parse(
              from.maxDynamicResultSets,
            ),
            isUserDefinedCast: InformationSchema.Types.YesOrNo.parse(
              from.isUserDefinedCast,
            ),
            isImplicitlyInvocable: InformationSchema.Types.YesOrNo.parse(
              from.isImplicitlyInvocable,
            ),
            securityType: InformationSchema.Types.CharacterData.parse(
              from.securityType,
            ),
            toSqlSpecificCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.toSqlSpecificCatalog,
            ),
            toSqlSpecificSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.toSqlSpecificSchema,
            ),
            toSqlSpecificName: InformationSchema.Types.SqlIdentifier.parse(
              from.toSqlSpecificName,
            ),
            asLocator: InformationSchema.Types.YesOrNo.parse(from.asLocator),
            created: InformationSchema.Types.TimeStamp.parse(from.created),
            lastAltered: InformationSchema.Types.TimeStamp.parse(
              from.lastAltered,
            ),
            newSavepointLevel: InformationSchema.Types.YesOrNo.parse(
              from.newSavepointLevel,
            ),
            isUdtDependent: InformationSchema.Types.YesOrNo.parse(
              from.isUdtDependent,
            ),
            resultCastFromDataType: InformationSchema.Types.CharacterData.parse(
              from.resultCastFromDataType,
            ),
            resultCastAsLocator: InformationSchema.Types.YesOrNo.parse(
              from.resultCastAsLocator,
            ),
            resultCastCharMaxLength:
              InformationSchema.Types.CardinalNumber.parse(
                from.resultCastCharMaxLength,
              ),
            resultCastCharOctetLength:
              InformationSchema.Types.CardinalNumber.parse(
                from.resultCastCharOctetLength,
              ),
            resultCastCharSetCatalog:
              InformationSchema.Types.SqlIdentifier.parse(
                from.resultCastCharSetCatalog,
              ),
            resultCastCharSetSchema:
              InformationSchema.Types.SqlIdentifier.parse(
                from.resultCastCharSetSchema,
              ),
            resultCastCharSetName: InformationSchema.Types.SqlIdentifier.parse(
              from.resultCastCharSetName,
            ),
            resultCastCollationCatalog:
              InformationSchema.Types.SqlIdentifier.parse(
                from.resultCastCollationCatalog,
              ),
            resultCastCollationSchema:
              InformationSchema.Types.SqlIdentifier.parse(
                from.resultCastCollationSchema,
              ),
            resultCastCollationName:
              InformationSchema.Types.SqlIdentifier.parse(
                from.resultCastCollationName,
              ),
            resultCastNumericPrecision:
              InformationSchema.Types.CardinalNumber.parse(
                from.resultCastNumericPrecision,
              ),
            resultCastNumericPrecisionRadix:
              InformationSchema.Types.CardinalNumber.parse(
                from.resultCastNumericPrecisionRadix,
              ),
            resultCastNumericScale:
              InformationSchema.Types.CardinalNumber.parse(
                from.resultCastNumericScale,
              ),
            resultCastDatetimePrecision:
              InformationSchema.Types.CardinalNumber.parse(
                from.resultCastDatetimePrecision,
              ),
            resultCastIntervalType: InformationSchema.Types.CharacterData.parse(
              from.resultCastIntervalType,
            ),
            resultCastIntervalPrecision:
              InformationSchema.Types.CardinalNumber.parse(
                from.resultCastIntervalPrecision,
              ),
            resultCastTypeUdtCatalog:
              InformationSchema.Types.SqlIdentifier.parse(
                from.resultCastTypeUdtCatalog,
              ),
            resultCastTypeUdtSchema:
              InformationSchema.Types.SqlIdentifier.parse(
                from.resultCastTypeUdtSchema,
              ),
            resultCastTypeUdtName: InformationSchema.Types.SqlIdentifier.parse(
              from.resultCastTypeUdtName,
            ),
            resultCastScopeCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.resultCastScopeCatalog,
            ),
            resultCastScopeSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.resultCastScopeSchema,
            ),
            resultCastScopeName: InformationSchema.Types.SqlIdentifier.parse(
              from.resultCastScopeName,
            ),
            resultCastMaximumCardinality:
              InformationSchema.Types.CardinalNumber.parse(
                from.resultCastMaximumCardinality,
              ),
            resultCastDtdIdentifier:
              InformationSchema.Types.SqlIdentifier.parse(
                from.resultCastDtdIdentifier,
              ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Schemata {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.Schemata.is(from)) {
          return {
            catalogName: InformationSchema.Types.SqlIdentifier.parse(
              from.catalogName,
            ),
            schemaName: InformationSchema.Types.SqlIdentifier.parse(
              from.schemaName,
            ),
            schemaOwner: InformationSchema.Types.SqlIdentifier.parse(
              from.schemaOwner,
            ),
            defaultCharacterSetCatalog:
              InformationSchema.Types.SqlIdentifier.parse(
                from.defaultCharacterSetCatalog,
              ),
            defaultCharacterSetSchema:
              InformationSchema.Types.SqlIdentifier.parse(
                from.defaultCharacterSetSchema,
              ),
            defaultCharacterSetName:
              InformationSchema.Types.SqlIdentifier.parse(
                from.defaultCharacterSetName,
              ),
            sqlPath: InformationSchema.Types.CharacterData.parse(from.sqlPath),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Sequences {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.Sequences.is(from)) {
          return {
            sequenceCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.sequenceCatalog,
            ),
            sequenceSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.sequenceSchema,
            ),
            sequenceName: InformationSchema.Types.SqlIdentifier.parse(
              from.sequenceName,
            ),
            dataType: InformationSchema.Types.CharacterData.parse(
              from.dataType,
            ),
            numericPrecision: InformationSchema.Types.CardinalNumber.parse(
              from.numericPrecision,
            ),
            numericPrecisionRadix: InformationSchema.Types.CardinalNumber.parse(
              from.numericPrecisionRadix,
            ),
            numericScale: InformationSchema.Types.CardinalNumber.parse(
              from.numericScale,
            ),
            startValue: InformationSchema.Types.CharacterData.parse(
              from.startValue,
            ),
            minimumValue: InformationSchema.Types.CharacterData.parse(
              from.minimumValue,
            ),
            maximumValue: InformationSchema.Types.CharacterData.parse(
              from.maximumValue,
            ),
            increment: InformationSchema.Types.CharacterData.parse(
              from.increment,
            ),
            cycleOption: InformationSchema.Types.YesOrNo.parse(
              from.cycleOption,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace SqlFeatures {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.SqlFeatures.is(from)) {
          return {
            featureId: InformationSchema.Types.CharacterData.parse(
              from.featureId,
            ),
            featureName: InformationSchema.Types.CharacterData.parse(
              from.featureName,
            ),
            subFeatureId: InformationSchema.Types.CharacterData.parse(
              from.subFeatureId,
            ),
            subFeatureName: InformationSchema.Types.CharacterData.parse(
              from.subFeatureName,
            ),
            isSupported: InformationSchema.Types.YesOrNo.parse(
              from.isSupported,
            ),
            isVerifiedBy: InformationSchema.Types.CharacterData.parse(
              from.isVerifiedBy,
            ),
            comments: InformationSchema.Types.CharacterData.parse(
              from.comments,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace SqlIdentifier {
      export function parse(from: unknown) {
        // DomainType
        if (from === null || from === undefined) return null;
        return PgCatalog.Types.Name.parse(from);
      }
    }
    export namespace SqlImplementationInfo {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.SqlImplementationInfo.is(from)) {
          return {
            implementationInfoId: InformationSchema.Types.CharacterData.parse(
              from.implementationInfoId,
            ),
            implementationInfoName: InformationSchema.Types.CharacterData.parse(
              from.implementationInfoName,
            ),
            integerValue: InformationSchema.Types.CardinalNumber.parse(
              from.integerValue,
            ),
            characterValue: InformationSchema.Types.CharacterData.parse(
              from.characterValue,
            ),
            comments: InformationSchema.Types.CharacterData.parse(
              from.comments,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace SqlParts {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.SqlParts.is(from)) {
          return {
            featureId: InformationSchema.Types.CharacterData.parse(
              from.featureId,
            ),
            featureName: InformationSchema.Types.CharacterData.parse(
              from.featureName,
            ),
            isSupported: InformationSchema.Types.YesOrNo.parse(
              from.isSupported,
            ),
            isVerifiedBy: InformationSchema.Types.CharacterData.parse(
              from.isVerifiedBy,
            ),
            comments: InformationSchema.Types.CharacterData.parse(
              from.comments,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace SqlSizing {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.SqlSizing.is(from)) {
          return {
            sizingId: InformationSchema.Types.CardinalNumber.parse(
              from.sizingId,
            ),
            sizingName: InformationSchema.Types.CharacterData.parse(
              from.sizingName,
            ),
            supportedValue: InformationSchema.Types.CardinalNumber.parse(
              from.supportedValue,
            ),
            comments: InformationSchema.Types.CharacterData.parse(
              from.comments,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace TableConstraints {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.TableConstraints.is(from)) {
          return {
            constraintCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.constraintCatalog,
            ),
            constraintSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.constraintSchema,
            ),
            constraintName: InformationSchema.Types.SqlIdentifier.parse(
              from.constraintName,
            ),
            tableCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.tableCatalog,
            ),
            tableSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.tableSchema,
            ),
            tableName: InformationSchema.Types.SqlIdentifier.parse(
              from.tableName,
            ),
            constraintType: InformationSchema.Types.CharacterData.parse(
              from.constraintType,
            ),
            isDeferrable: InformationSchema.Types.YesOrNo.parse(
              from.isDeferrable,
            ),
            initiallyDeferred: InformationSchema.Types.YesOrNo.parse(
              from.initiallyDeferred,
            ),
            enforced: InformationSchema.Types.YesOrNo.parse(from.enforced),
            nullsDistinct: InformationSchema.Types.YesOrNo.parse(
              from.nullsDistinct,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace TablePrivileges {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.TablePrivileges.is(from)) {
          return {
            grantor: InformationSchema.Types.SqlIdentifier.parse(from.grantor),
            grantee: InformationSchema.Types.SqlIdentifier.parse(from.grantee),
            tableCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.tableCatalog,
            ),
            tableSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.tableSchema,
            ),
            tableName: InformationSchema.Types.SqlIdentifier.parse(
              from.tableName,
            ),
            privilegeType: InformationSchema.Types.CharacterData.parse(
              from.privilegeType,
            ),
            isGrantable: InformationSchema.Types.YesOrNo.parse(
              from.isGrantable,
            ),
            withHierarchy: InformationSchema.Types.YesOrNo.parse(
              from.withHierarchy,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Tables {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.Tables.is(from)) {
          return {
            tableCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.tableCatalog,
            ),
            tableSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.tableSchema,
            ),
            tableName: InformationSchema.Types.SqlIdentifier.parse(
              from.tableName,
            ),
            tableType: InformationSchema.Types.CharacterData.parse(
              from.tableType,
            ),
            selfReferencingColumnName:
              InformationSchema.Types.SqlIdentifier.parse(
                from.selfReferencingColumnName,
              ),
            referenceGeneration: InformationSchema.Types.CharacterData.parse(
              from.referenceGeneration,
            ),
            userDefinedTypeCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.userDefinedTypeCatalog,
            ),
            userDefinedTypeSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.userDefinedTypeSchema,
            ),
            userDefinedTypeName: InformationSchema.Types.SqlIdentifier.parse(
              from.userDefinedTypeName,
            ),
            isInsertableInto: InformationSchema.Types.YesOrNo.parse(
              from.isInsertableInto,
            ),
            isTyped: InformationSchema.Types.YesOrNo.parse(from.isTyped),
            commitAction: InformationSchema.Types.CharacterData.parse(
              from.commitAction,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace TimeStamp {
      export function parse(from: unknown) {
        // DomainType
        if (from === null || from === undefined) return null;
        return PgCatalog.Types.Timestamptz.parse(from);
      }
    }
    export namespace Transforms {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.Transforms.is(from)) {
          return {
            udtCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.udtCatalog,
            ),
            udtSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.udtSchema,
            ),
            udtName: InformationSchema.Types.SqlIdentifier.parse(from.udtName),
            specificCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.specificCatalog,
            ),
            specificSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.specificSchema,
            ),
            specificName: InformationSchema.Types.SqlIdentifier.parse(
              from.specificName,
            ),
            groupName: InformationSchema.Types.SqlIdentifier.parse(
              from.groupName,
            ),
            transformType: InformationSchema.Types.CharacterData.parse(
              from.transformType,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace TriggeredUpdateColumns {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.TriggeredUpdateColumns.is(from)) {
          return {
            triggerCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.triggerCatalog,
            ),
            triggerSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.triggerSchema,
            ),
            triggerName: InformationSchema.Types.SqlIdentifier.parse(
              from.triggerName,
            ),
            eventObjectCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.eventObjectCatalog,
            ),
            eventObjectSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.eventObjectSchema,
            ),
            eventObjectTable: InformationSchema.Types.SqlIdentifier.parse(
              from.eventObjectTable,
            ),
            eventObjectColumn: InformationSchema.Types.SqlIdentifier.parse(
              from.eventObjectColumn,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Triggers {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.Triggers.is(from)) {
          return {
            triggerCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.triggerCatalog,
            ),
            triggerSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.triggerSchema,
            ),
            triggerName: InformationSchema.Types.SqlIdentifier.parse(
              from.triggerName,
            ),
            eventManipulation: InformationSchema.Types.CharacterData.parse(
              from.eventManipulation,
            ),
            eventObjectCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.eventObjectCatalog,
            ),
            eventObjectSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.eventObjectSchema,
            ),
            eventObjectTable: InformationSchema.Types.SqlIdentifier.parse(
              from.eventObjectTable,
            ),
            actionOrder: InformationSchema.Types.CardinalNumber.parse(
              from.actionOrder,
            ),
            actionCondition: InformationSchema.Types.CharacterData.parse(
              from.actionCondition,
            ),
            actionStatement: InformationSchema.Types.CharacterData.parse(
              from.actionStatement,
            ),
            actionOrientation: InformationSchema.Types.CharacterData.parse(
              from.actionOrientation,
            ),
            actionTiming: InformationSchema.Types.CharacterData.parse(
              from.actionTiming,
            ),
            actionReferenceOldTable:
              InformationSchema.Types.SqlIdentifier.parse(
                from.actionReferenceOldTable,
              ),
            actionReferenceNewTable:
              InformationSchema.Types.SqlIdentifier.parse(
                from.actionReferenceNewTable,
              ),
            actionReferenceOldRow: InformationSchema.Types.SqlIdentifier.parse(
              from.actionReferenceOldRow,
            ),
            actionReferenceNewRow: InformationSchema.Types.SqlIdentifier.parse(
              from.actionReferenceNewRow,
            ),
            created: InformationSchema.Types.TimeStamp.parse(from.created),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace UdtPrivileges {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.UdtPrivileges.is(from)) {
          return {
            grantor: InformationSchema.Types.SqlIdentifier.parse(from.grantor),
            grantee: InformationSchema.Types.SqlIdentifier.parse(from.grantee),
            udtCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.udtCatalog,
            ),
            udtSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.udtSchema,
            ),
            udtName: InformationSchema.Types.SqlIdentifier.parse(from.udtName),
            privilegeType: InformationSchema.Types.CharacterData.parse(
              from.privilegeType,
            ),
            isGrantable: InformationSchema.Types.YesOrNo.parse(
              from.isGrantable,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace UsagePrivileges {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.UsagePrivileges.is(from)) {
          return {
            grantor: InformationSchema.Types.SqlIdentifier.parse(from.grantor),
            grantee: InformationSchema.Types.SqlIdentifier.parse(from.grantee),
            objectCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.objectCatalog,
            ),
            objectSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.objectSchema,
            ),
            objectName: InformationSchema.Types.SqlIdentifier.parse(
              from.objectName,
            ),
            objectType: InformationSchema.Types.CharacterData.parse(
              from.objectType,
            ),
            privilegeType: InformationSchema.Types.CharacterData.parse(
              from.privilegeType,
            ),
            isGrantable: InformationSchema.Types.YesOrNo.parse(
              from.isGrantable,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace UserDefinedTypes {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.UserDefinedTypes.is(from)) {
          return {
            userDefinedTypeCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.userDefinedTypeCatalog,
            ),
            userDefinedTypeSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.userDefinedTypeSchema,
            ),
            userDefinedTypeName: InformationSchema.Types.SqlIdentifier.parse(
              from.userDefinedTypeName,
            ),
            userDefinedTypeCategory:
              InformationSchema.Types.CharacterData.parse(
                from.userDefinedTypeCategory,
              ),
            isInstantiable: InformationSchema.Types.YesOrNo.parse(
              from.isInstantiable,
            ),
            isFinal: InformationSchema.Types.YesOrNo.parse(from.isFinal),
            orderingForm: InformationSchema.Types.CharacterData.parse(
              from.orderingForm,
            ),
            orderingCategory: InformationSchema.Types.CharacterData.parse(
              from.orderingCategory,
            ),
            orderingRoutineCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.orderingRoutineCatalog,
            ),
            orderingRoutineSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.orderingRoutineSchema,
            ),
            orderingRoutineName: InformationSchema.Types.SqlIdentifier.parse(
              from.orderingRoutineName,
            ),
            referenceType: InformationSchema.Types.CharacterData.parse(
              from.referenceType,
            ),
            dataType: InformationSchema.Types.CharacterData.parse(
              from.dataType,
            ),
            characterMaximumLength:
              InformationSchema.Types.CardinalNumber.parse(
                from.characterMaximumLength,
              ),
            characterOctetLength: InformationSchema.Types.CardinalNumber.parse(
              from.characterOctetLength,
            ),
            characterSetCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.characterSetCatalog,
            ),
            characterSetSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.characterSetSchema,
            ),
            characterSetName: InformationSchema.Types.SqlIdentifier.parse(
              from.characterSetName,
            ),
            collationCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.collationCatalog,
            ),
            collationSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.collationSchema,
            ),
            collationName: InformationSchema.Types.SqlIdentifier.parse(
              from.collationName,
            ),
            numericPrecision: InformationSchema.Types.CardinalNumber.parse(
              from.numericPrecision,
            ),
            numericPrecisionRadix: InformationSchema.Types.CardinalNumber.parse(
              from.numericPrecisionRadix,
            ),
            numericScale: InformationSchema.Types.CardinalNumber.parse(
              from.numericScale,
            ),
            datetimePrecision: InformationSchema.Types.CardinalNumber.parse(
              from.datetimePrecision,
            ),
            intervalType: InformationSchema.Types.CharacterData.parse(
              from.intervalType,
            ),
            intervalPrecision: InformationSchema.Types.CardinalNumber.parse(
              from.intervalPrecision,
            ),
            sourceDtdIdentifier: InformationSchema.Types.SqlIdentifier.parse(
              from.sourceDtdIdentifier,
            ),
            refDtdIdentifier: InformationSchema.Types.SqlIdentifier.parse(
              from.refDtdIdentifier,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace UserMappingOptions {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.UserMappingOptions.is(from)) {
          return {
            authorizationIdentifier:
              InformationSchema.Types.SqlIdentifier.parse(
                from.authorizationIdentifier,
              ),
            foreignServerCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignServerCatalog,
            ),
            foreignServerName: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignServerName,
            ),
            optionName: InformationSchema.Types.SqlIdentifier.parse(
              from.optionName,
            ),
            optionValue: InformationSchema.Types.CharacterData.parse(
              from.optionValue,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace UserMappings {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.UserMappings.is(from)) {
          return {
            authorizationIdentifier:
              InformationSchema.Types.SqlIdentifier.parse(
                from.authorizationIdentifier,
              ),
            foreignServerCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignServerCatalog,
            ),
            foreignServerName: InformationSchema.Types.SqlIdentifier.parse(
              from.foreignServerName,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ViewColumnUsage {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.ViewColumnUsage.is(from)) {
          return {
            viewCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.viewCatalog,
            ),
            viewSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.viewSchema,
            ),
            viewName: InformationSchema.Types.SqlIdentifier.parse(
              from.viewName,
            ),
            tableCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.tableCatalog,
            ),
            tableSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.tableSchema,
            ),
            tableName: InformationSchema.Types.SqlIdentifier.parse(
              from.tableName,
            ),
            columnName: InformationSchema.Types.SqlIdentifier.parse(
              from.columnName,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ViewRoutineUsage {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.ViewRoutineUsage.is(from)) {
          return {
            tableCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.tableCatalog,
            ),
            tableSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.tableSchema,
            ),
            tableName: InformationSchema.Types.SqlIdentifier.parse(
              from.tableName,
            ),
            specificCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.specificCatalog,
            ),
            specificSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.specificSchema,
            ),
            specificName: InformationSchema.Types.SqlIdentifier.parse(
              from.specificName,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ViewTableUsage {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.ViewTableUsage.is(from)) {
          return {
            viewCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.viewCatalog,
            ),
            viewSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.viewSchema,
            ),
            viewName: InformationSchema.Types.SqlIdentifier.parse(
              from.viewName,
            ),
            tableCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.tableCatalog,
            ),
            tableSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.tableSchema,
            ),
            tableName: InformationSchema.Types.SqlIdentifier.parse(
              from.tableName,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Views {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (InformationSchema.Types.Views.is(from)) {
          return {
            tableCatalog: InformationSchema.Types.SqlIdentifier.parse(
              from.tableCatalog,
            ),
            tableSchema: InformationSchema.Types.SqlIdentifier.parse(
              from.tableSchema,
            ),
            tableName: InformationSchema.Types.SqlIdentifier.parse(
              from.tableName,
            ),
            viewDefinition: InformationSchema.Types.CharacterData.parse(
              from.viewDefinition,
            ),
            checkOption: InformationSchema.Types.CharacterData.parse(
              from.checkOption,
            ),
            isUpdatable: InformationSchema.Types.YesOrNo.parse(
              from.isUpdatable,
            ),
            isInsertableInto: InformationSchema.Types.YesOrNo.parse(
              from.isInsertableInto,
            ),
            isTriggerUpdatable: InformationSchema.Types.YesOrNo.parse(
              from.isTriggerUpdatable,
            ),
            isTriggerDeletable: InformationSchema.Types.YesOrNo.parse(
              from.isTriggerDeletable,
            ),
            isTriggerInsertableInto: InformationSchema.Types.YesOrNo.parse(
              from.isTriggerInsertableInto,
            ),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace YesOrNo {
      export function parse(from: unknown) {
        // DomainType
        if (from === null || from === undefined) return null;
        return PgCatalog.Types.Varchar.parse(from);
      }
    }
  }
  export namespace Procedures {}
  export namespace Tables {
    export namespace SqlFeatures {
      export namespace Create {}
    }
    export namespace SqlImplementationInfo {
      export namespace Create {}
    }
    export namespace SqlParts {
      export namespace Create {}
    }
    export namespace SqlSizing {
      export namespace Create {}
    }
  }
}
export namespace Public {
  export namespace Types {
    export namespace ChecklistArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => Checklist.parse(e));
      }
    }
    export namespace ChecklistItemArray {
      export function parse(from: unknown) {
        // ArrayType
        if (from === null || from === undefined) return [];

        const rawArray = Array.isArray(from)
          ? from
          : (JSON.parse(from as string) as unknown[]);
        return rawArray.map((e: unknown) => ChecklistItem.parse(e));
      }
    }
    export namespace Checklist {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (Public.Types.Checklist.is(from)) {
          return {
            id: PgCatalog.Types.Uuid.parse(from.id),
            name: PgCatalog.Types.Text.parse(from.name),
            createdAt: PgCatalog.Types.Timestamp.parse(from.createdAt),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ChecklistItem {
      export function parse(from: unknown) {
        // CompositeType
        if (from === null || from === undefined) return null;
        if (Public.Types.ChecklistItem.is(from)) {
          return {
            id: PgCatalog.Types.Uuid.parse(from.id),
            checklistId: PgCatalog.Types.Uuid.parse(from.checklistId),
            title: PgCatalog.Types.Text.parse(from.title),
            checked: PgCatalog.Types.Bool.parse(from.checked),
            createdAt: PgCatalog.Types.Timestamp.parse(from.createdAt),
          };
        }
        throw new Error(JSON.stringify(from));
      }
    }
  }
  export namespace Procedures {}
  export namespace Tables {
    export namespace Checklist {
      export namespace Create {}
    }
    export namespace ChecklistItem {
      export namespace Create {}
    }
  }
}
// begin table column parser mapping
export namespace PgCatalog {
  export namespace Tables {
    export namespace PgStatistic {
      export namespace Starelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Staattnum {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Stainherit {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Stanullfrac {
        export const parse = PgCatalog.Types.Float4.parse;
      }
      export namespace Stawidth {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Stadistinct {
        export const parse = PgCatalog.Types.Float4.parse;
      }
      export namespace Stakind1 {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Stakind2 {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Stakind3 {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Stakind4 {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Stakind5 {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Staop1 {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Staop2 {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Staop3 {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Staop4 {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Staop5 {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Stacoll1 {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Stacoll2 {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Stacoll3 {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Stacoll4 {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Stacoll5 {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Stanumbers1 {
        export const parse = PgCatalog.Types.Float4Array.parse;
      }
      export namespace Stanumbers2 {
        export const parse = PgCatalog.Types.Float4Array.parse;
      }
      export namespace Stanumbers3 {
        export const parse = PgCatalog.Types.Float4Array.parse;
      }
      export namespace Stanumbers4 {
        export const parse = PgCatalog.Types.Float4Array.parse;
      }
      export namespace Stanumbers5 {
        export const parse = PgCatalog.Types.Float4Array.parse;
      }
      export namespace Stavalues1 {
        export const parse = PgCatalog.Types.Anyarray.parse;
      }
      export namespace Stavalues2 {
        export const parse = PgCatalog.Types.Anyarray.parse;
      }
      export namespace Stavalues3 {
        export const parse = PgCatalog.Types.Anyarray.parse;
      }
      export namespace Stavalues4 {
        export const parse = PgCatalog.Types.Anyarray.parse;
      }
      export namespace Stavalues5 {
        export const parse = PgCatalog.Types.Anyarray.parse;
      }
    }
    export namespace PgType {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Typname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Typnamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Typowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Typlen {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Typbyval {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Typtype {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Typcategory {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Typispreferred {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Typisdefined {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Typdelim {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Typrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Typsubscript {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Typelem {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Typarray {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Typinput {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Typoutput {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Typreceive {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Typsend {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Typmodin {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Typmodout {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Typanalyze {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Typalign {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Typstorage {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Typnotnull {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Typbasetype {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Typtypmod {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Typndims {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Typcollation {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Typdefaultbin {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
      export namespace Typdefault {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Typacl {
        export const parse = PgCatalog.Types.AclitemArray.parse;
      }
    }
    export namespace PgForeignTable {
      export namespace Ftrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Ftserver {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Ftoptions {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
    }
    export namespace PgAuthid {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Rolname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Rolsuper {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Rolinherit {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Rolcreaterole {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Rolcreatedb {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Rolcanlogin {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Rolreplication {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Rolbypassrls {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Rolconnlimit {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Rolpassword {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Rolvaliduntil {
        export const parse = PgCatalog.Types.Timestamptz.parse;
      }
    }
    export namespace PgStatisticExtData {
      export namespace Stxoid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Stxdinherit {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Stxdndistinct {
        export const parse = PgCatalog.Types.PgNdistinct.parse;
      }
      export namespace Stxddependencies {
        export const parse = PgCatalog.Types.PgDependencies.parse;
      }
      export namespace Stxdmcv {
        export const parse = PgCatalog.Types.PgMcvList.parse;
      }
      export namespace Stxdexpr {
        export const parse = PgCatalog.Types.PgStatisticArray.parse;
      }
    }
    export namespace PgUserMapping {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Umuser {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Umserver {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Umoptions {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
    }
    export namespace PgSubscription {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Subdbid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Subskiplsn {
        export const parse = PgCatalog.Types.PgLsn.parse;
      }
      export namespace Subname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Subowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Subenabled {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Subbinary {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Substream {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Subtwophasestate {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Subdisableonerr {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Subpasswordrequired {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Subrunasowner {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Subconninfo {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Subslotname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Subsynccommit {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Subpublications {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
      export namespace Suborigin {
        export const parse = PgCatalog.Types.Text.parse;
      }
    }
    export namespace PgAttribute {
      export namespace Attrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Attname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Atttypid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Attlen {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Attnum {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Attcacheoff {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Atttypmod {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Attndims {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Attbyval {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Attalign {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Attstorage {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Attcompression {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Attnotnull {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Atthasdef {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Atthasmissing {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Attidentity {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Attgenerated {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Attisdropped {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Attislocal {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Attinhcount {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Attstattarget {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Attcollation {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Attacl {
        export const parse = PgCatalog.Types.AclitemArray.parse;
      }
      export namespace Attoptions {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
      export namespace Attfdwoptions {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
      export namespace Attmissingval {
        export const parse = PgCatalog.Types.Anyarray.parse;
      }
    }
    export namespace PgProc {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Proname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Pronamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Proowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Prolang {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Procost {
        export const parse = PgCatalog.Types.Float4.parse;
      }
      export namespace Prorows {
        export const parse = PgCatalog.Types.Float4.parse;
      }
      export namespace Provariadic {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Prosupport {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Prokind {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Prosecdef {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Proleakproof {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Proisstrict {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Proretset {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Provolatile {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Proparallel {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Pronargs {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Pronargdefaults {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Prorettype {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Proargtypes {
        export const parse = PgCatalog.Types.Oidvector.parse;
      }
      export namespace Proallargtypes {
        export const parse = PgCatalog.Types.OidArray.parse;
      }
      export namespace Proargmodes {
        export const parse = PgCatalog.Types.CharArray.parse;
      }
      export namespace Proargnames {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
      export namespace Proargdefaults {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
      export namespace Protrftypes {
        export const parse = PgCatalog.Types.OidArray.parse;
      }
      export namespace Prosrc {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Probin {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Prosqlbody {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
      export namespace Proconfig {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
      export namespace Proacl {
        export const parse = PgCatalog.Types.AclitemArray.parse;
      }
    }
    export namespace PgClass {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Relname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Relnamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Reltype {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Reloftype {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Relowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Relam {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Relfilenode {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Reltablespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Relpages {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Reltuples {
        export const parse = PgCatalog.Types.Float4.parse;
      }
      export namespace Relallvisible {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Reltoastrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Relhasindex {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Relisshared {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Relpersistence {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Relkind {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Relnatts {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Relchecks {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Relhasrules {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Relhastriggers {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Relhassubclass {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Relrowsecurity {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Relforcerowsecurity {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Relispopulated {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Relreplident {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Relispartition {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Relrewrite {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Relfrozenxid {
        export const parse = PgCatalog.Types.Xid.parse;
      }
      export namespace Relminmxid {
        export const parse = PgCatalog.Types.Xid.parse;
      }
      export namespace Relacl {
        export const parse = PgCatalog.Types.AclitemArray.parse;
      }
      export namespace Reloptions {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
      export namespace Relpartbound {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
    }
    export namespace PgAttrdef {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Adrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Adnum {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Adbin {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
    }
    export namespace PgConstraint {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Conname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Connamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Contype {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Condeferrable {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Condeferred {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Convalidated {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Conrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Contypid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Conindid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Conparentid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Confrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Confupdtype {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Confdeltype {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Confmatchtype {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Conislocal {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Coninhcount {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Connoinherit {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Conkey {
        export const parse = PgCatalog.Types.Int2Array.parse;
      }
      export namespace Confkey {
        export const parse = PgCatalog.Types.Int2Array.parse;
      }
      export namespace Conpfeqop {
        export const parse = PgCatalog.Types.OidArray.parse;
      }
      export namespace Conppeqop {
        export const parse = PgCatalog.Types.OidArray.parse;
      }
      export namespace Conffeqop {
        export const parse = PgCatalog.Types.OidArray.parse;
      }
      export namespace Confdelsetcols {
        export const parse = PgCatalog.Types.Int2Array.parse;
      }
      export namespace Conexclop {
        export const parse = PgCatalog.Types.OidArray.parse;
      }
      export namespace Conbin {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
    }
    export namespace PgInherits {
      export namespace Inhrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Inhparent {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Inhseqno {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Inhdetachpending {
        export const parse = PgCatalog.Types.Bool.parse;
      }
    }
    export namespace PgIndex {
      export namespace Indexrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Indrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Indnatts {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Indnkeyatts {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Indisunique {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Indnullsnotdistinct {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Indisprimary {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Indisexclusion {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Indimmediate {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Indisclustered {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Indisvalid {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Indcheckxmin {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Indisready {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Indislive {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Indisreplident {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Indkey {
        export const parse = PgCatalog.Types.Int2vector.parse;
      }
      export namespace Indcollation {
        export const parse = PgCatalog.Types.Oidvector.parse;
      }
      export namespace Indclass {
        export const parse = PgCatalog.Types.Oidvector.parse;
      }
      export namespace Indoption {
        export const parse = PgCatalog.Types.Int2vector.parse;
      }
      export namespace Indexprs {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
      export namespace Indpred {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
    }
    export namespace PgOperator {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Oprname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Oprnamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Oprowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Oprkind {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Oprcanmerge {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Oprcanhash {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Oprleft {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Oprright {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Oprresult {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Oprcom {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Oprnegate {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Oprcode {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Oprrest {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Oprjoin {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
    }
    export namespace PgOpfamily {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Opfmethod {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Opfname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Opfnamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Opfowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
    }
    export namespace PgOpclass {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Opcmethod {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Opcname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Opcnamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Opcowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Opcfamily {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Opcintype {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Opcdefault {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Opckeytype {
        export const parse = PgCatalog.Types.Oid.parse;
      }
    }
    export namespace PgAm {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Amname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Amhandler {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Amtype {
        export const parse = PgCatalog.Types.Char.parse;
      }
    }
    export namespace PgAmop {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Amopfamily {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Amoplefttype {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Amoprighttype {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Amopstrategy {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Amoppurpose {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Amopopr {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Amopmethod {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Amopsortfamily {
        export const parse = PgCatalog.Types.Oid.parse;
      }
    }
    export namespace PgAmproc {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Amprocfamily {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Amproclefttype {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Amprocrighttype {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Amprocnum {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Amproc {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
    }
    export namespace PgLanguage {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Lanname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Lanowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Lanispl {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Lanpltrusted {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Lanplcallfoid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Laninline {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Lanvalidator {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Lanacl {
        export const parse = PgCatalog.Types.AclitemArray.parse;
      }
    }
    export namespace PgLargeobjectMetadata {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Lomowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Lomacl {
        export const parse = PgCatalog.Types.AclitemArray.parse;
      }
    }
    export namespace PgAggregate {
      export namespace Aggfnoid {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Aggkind {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Aggnumdirectargs {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Aggtransfn {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Aggfinalfn {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Aggcombinefn {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Aggserialfn {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Aggdeserialfn {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Aggmtransfn {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Aggminvtransfn {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Aggmfinalfn {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Aggfinalextra {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Aggmfinalextra {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Aggfinalmodify {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Aggmfinalmodify {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Aggsortop {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Aggtranstype {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Aggtransspace {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Aggmtranstype {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Aggmtransspace {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Agginitval {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Aggminitval {
        export const parse = PgCatalog.Types.Text.parse;
      }
    }
    export namespace PgStatisticExt {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Stxrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Stxname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Stxnamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Stxowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Stxstattarget {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Stxkeys {
        export const parse = PgCatalog.Types.Int2vector.parse;
      }
      export namespace Stxkind {
        export const parse = PgCatalog.Types.CharArray.parse;
      }
      export namespace Stxexprs {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
    }
    export namespace PgRewrite {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Rulename {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace EvClass {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace EvType {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace EvEnabled {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace IsInstead {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace EvQual {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
      export namespace EvAction {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
    }
    export namespace PgTrigger {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Tgrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Tgparentid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Tgname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Tgfoid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Tgtype {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Tgenabled {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Tgisinternal {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Tgconstrrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Tgconstrindid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Tgconstraint {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Tgdeferrable {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Tginitdeferred {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Tgnargs {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Tgattr {
        export const parse = PgCatalog.Types.Int2vector.parse;
      }
      export namespace Tgargs {
        export const parse = PgCatalog.Types.Bytea.parse;
      }
      export namespace Tgqual {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
      export namespace Tgoldtable {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Tgnewtable {
        export const parse = PgCatalog.Types.Name.parse;
      }
    }
    export namespace PgEventTrigger {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Evtname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Evtevent {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Evtowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Evtfoid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Evtenabled {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Evttags {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
    }
    export namespace PgDescription {
      export namespace Objoid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Classoid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Objsubid {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Description {
        export const parse = PgCatalog.Types.Text.parse;
      }
    }
    export namespace PgCast {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Castsource {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Casttarget {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Castfunc {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Castcontext {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Castmethod {
        export const parse = PgCatalog.Types.Char.parse;
      }
    }
    export namespace PgEnum {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Enumtypid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Enumsortorder {
        export const parse = PgCatalog.Types.Float4.parse;
      }
      export namespace Enumlabel {
        export const parse = PgCatalog.Types.Name.parse;
      }
    }
    export namespace PgNamespace {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Nspname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Nspowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Nspacl {
        export const parse = PgCatalog.Types.AclitemArray.parse;
      }
    }
    export namespace PgConversion {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Conname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Connamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Conowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Conforencoding {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Contoencoding {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Conproc {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Condefault {
        export const parse = PgCatalog.Types.Bool.parse;
      }
    }
    export namespace PgDepend {
      export namespace Classid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Objid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Objsubid {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Refclassid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Refobjid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Refobjsubid {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Deptype {
        export const parse = PgCatalog.Types.Char.parse;
      }
    }
    export namespace PgDatabase {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Datname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Datdba {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Encoding {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Datlocprovider {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Datistemplate {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Datallowconn {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Datconnlimit {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Datfrozenxid {
        export const parse = PgCatalog.Types.Xid.parse;
      }
      export namespace Datminmxid {
        export const parse = PgCatalog.Types.Xid.parse;
      }
      export namespace Dattablespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Datcollate {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Datctype {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Daticulocale {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Daticurules {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Datcollversion {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Datacl {
        export const parse = PgCatalog.Types.AclitemArray.parse;
      }
    }
    export namespace PgDbRoleSetting {
      export namespace Setdatabase {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Setrole {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Setconfig {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
    }
    export namespace PgTablespace {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Spcname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Spcowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Spcacl {
        export const parse = PgCatalog.Types.AclitemArray.parse;
      }
      export namespace Spcoptions {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
    }
    export namespace PgAuthMembers {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Roleid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Member {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Grantor {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace AdminOption {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace InheritOption {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace SetOption {
        export const parse = PgCatalog.Types.Bool.parse;
      }
    }
    export namespace PgShdepend {
      export namespace Dbid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Classid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Objid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Objsubid {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Refclassid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Refobjid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Deptype {
        export const parse = PgCatalog.Types.Char.parse;
      }
    }
    export namespace PgShdescription {
      export namespace Objoid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Classoid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Description {
        export const parse = PgCatalog.Types.Text.parse;
      }
    }
    export namespace PgTsConfig {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Cfgname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Cfgnamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Cfgowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Cfgparser {
        export const parse = PgCatalog.Types.Oid.parse;
      }
    }
    export namespace PgTsConfigMap {
      export namespace Mapcfg {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Maptokentype {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Mapseqno {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Mapdict {
        export const parse = PgCatalog.Types.Oid.parse;
      }
    }
    export namespace PgTsDict {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Dictname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Dictnamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Dictowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Dicttemplate {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Dictinitoption {
        export const parse = PgCatalog.Types.Text.parse;
      }
    }
    export namespace PgTsParser {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Prsname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Prsnamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Prsstart {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Prstoken {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Prsend {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Prsheadline {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Prslextype {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
    }
    export namespace PgTsTemplate {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Tmplname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Tmplnamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Tmplinit {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Tmpllexize {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
    }
    export namespace PgExtension {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Extname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Extowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Extnamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Extrelocatable {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Extversion {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Extconfig {
        export const parse = PgCatalog.Types.OidArray.parse;
      }
      export namespace Extcondition {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
    }
    export namespace PgForeignDataWrapper {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Fdwname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Fdwowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Fdwhandler {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Fdwvalidator {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Fdwacl {
        export const parse = PgCatalog.Types.AclitemArray.parse;
      }
      export namespace Fdwoptions {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
    }
    export namespace PgForeignServer {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Srvname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Srvowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Srvfdw {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Srvtype {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Srvversion {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Srvacl {
        export const parse = PgCatalog.Types.AclitemArray.parse;
      }
      export namespace Srvoptions {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
    }
    export namespace PgPolicy {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Polname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Polrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Polcmd {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Polpermissive {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Polroles {
        export const parse = PgCatalog.Types.OidArray.parse;
      }
      export namespace Polqual {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
      export namespace Polwithcheck {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
    }
    export namespace PgReplicationOrigin {
      export namespace Roident {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Roname {
        export const parse = PgCatalog.Types.Text.parse;
      }
    }
    export namespace PgDefaultAcl {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Defaclrole {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Defaclnamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Defaclobjtype {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Defaclacl {
        export const parse = PgCatalog.Types.AclitemArray.parse;
      }
    }
    export namespace PgInitPrivs {
      export namespace Objoid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Classoid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Objsubid {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Privtype {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Initprivs {
        export const parse = PgCatalog.Types.AclitemArray.parse;
      }
    }
    export namespace PgSeclabel {
      export namespace Objoid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Classoid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Objsubid {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Provider {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Label {
        export const parse = PgCatalog.Types.Text.parse;
      }
    }
    export namespace PgShseclabel {
      export namespace Objoid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Classoid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Provider {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Label {
        export const parse = PgCatalog.Types.Text.parse;
      }
    }
    export namespace PgCollation {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Collname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Collnamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Collowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Collprovider {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Collisdeterministic {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Collencoding {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Collcollate {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Collctype {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Colliculocale {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Collicurules {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Collversion {
        export const parse = PgCatalog.Types.Text.parse;
      }
    }
    export namespace PgParameterAcl {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Parname {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Paracl {
        export const parse = PgCatalog.Types.AclitemArray.parse;
      }
    }
    export namespace PgPartitionedTable {
      export namespace Partrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Partstrat {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Partnatts {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Partdefid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Partattrs {
        export const parse = PgCatalog.Types.Int2vector.parse;
      }
      export namespace Partclass {
        export const parse = PgCatalog.Types.Oidvector.parse;
      }
      export namespace Partcollation {
        export const parse = PgCatalog.Types.Oidvector.parse;
      }
      export namespace Partexprs {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
    }
    export namespace PgRange {
      export namespace Rngtypid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Rngsubtype {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Rngmultitypid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Rngcollation {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Rngsubopc {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Rngcanonical {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Rngsubdiff {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
    }
    export namespace PgTransform {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Trftype {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Trflang {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Trffromsql {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Trftosql {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
    }
    export namespace PgSequence {
      export namespace Seqrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Seqtypid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Seqstart {
        export const parse = PgCatalog.Types.Int8.parse;
      }
      export namespace Seqincrement {
        export const parse = PgCatalog.Types.Int8.parse;
      }
      export namespace Seqmax {
        export const parse = PgCatalog.Types.Int8.parse;
      }
      export namespace Seqmin {
        export const parse = PgCatalog.Types.Int8.parse;
      }
      export namespace Seqcache {
        export const parse = PgCatalog.Types.Int8.parse;
      }
      export namespace Seqcycle {
        export const parse = PgCatalog.Types.Bool.parse;
      }
    }
    export namespace PgPublication {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Pubname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Pubowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Puballtables {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Pubinsert {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Pubupdate {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Pubdelete {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Pubtruncate {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Pubviaroot {
        export const parse = PgCatalog.Types.Bool.parse;
      }
    }
    export namespace PgPublicationNamespace {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Pnpubid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Pnnspid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
    }
    export namespace PgPublicationRel {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Prpubid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Prrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Prqual {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
      export namespace Prattrs {
        export const parse = PgCatalog.Types.Int2vector.parse;
      }
    }
    export namespace PgSubscriptionRel {
      export namespace Srsubid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Srrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Srsubstate {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Srsublsn {
        export const parse = PgCatalog.Types.PgLsn.parse;
      }
    }
    export namespace PgLargeobject {
      export namespace Loid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Pageno {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Data {
        export const parse = PgCatalog.Types.Bytea.parse;
      }
    }
  }
}
export namespace InformationSchema {
  export namespace Tables {
    export namespace SqlFeatures {
      export namespace FeatureId {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
      export namespace FeatureName {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
      export namespace SubFeatureId {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
      export namespace SubFeatureName {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
      export namespace IsSupported {
        export const parse = InformationSchema.Types.YesOrNo.parse;
      }
      export namespace IsVerifiedBy {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
      export namespace Comments {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
    }
    export namespace SqlImplementationInfo {
      export namespace ImplementationInfoId {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
      export namespace ImplementationInfoName {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
      export namespace IntegerValue {
        export const parse = InformationSchema.Types.CardinalNumber.parse;
      }
      export namespace CharacterValue {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
      export namespace Comments {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
    }
    export namespace SqlParts {
      export namespace FeatureId {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
      export namespace FeatureName {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
      export namespace IsSupported {
        export const parse = InformationSchema.Types.YesOrNo.parse;
      }
      export namespace IsVerifiedBy {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
      export namespace Comments {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
    }
    export namespace SqlSizing {
      export namespace SizingId {
        export const parse = InformationSchema.Types.CardinalNumber.parse;
      }
      export namespace SizingName {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
      export namespace SupportedValue {
        export const parse = InformationSchema.Types.CardinalNumber.parse;
      }
      export namespace Comments {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
    }
  }
}
export namespace Public {
  export namespace Tables {
    export namespace Checklist {
      export namespace Id {
        export const parse = PgCatalog.Types.Uuid.parse;
      }
      export namespace Name {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace CreatedAt {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
    }
    export namespace ChecklistItem {
      export namespace Id {
        export const parse = PgCatalog.Types.Uuid.parse;
      }
      export namespace ChecklistId {
        export const parse = PgCatalog.Types.Uuid.parse;
      }
      export namespace Title {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Checked {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace CreatedAt {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
    }
  }
}

// begin primary key pickers
export namespace Public {
  export namespace Tables {
    export namespace Checklist {
      export function primaryKeyFrom(
        value: Public.Tables.Checklist.Record,
      ): string {
        return JSON.stringify({
          id: value.id,
        });
      }

      export function includesPrimaryKey(value: Partial<Record>) {
        return value.id !== undefined;
      }
    }
    export namespace ChecklistItem {
      export function primaryKeyFrom(
        value: Public.Tables.ChecklistItem.Record,
      ): string {
        return JSON.stringify({
          id: value.id,
        });
      }

      export function includesPrimaryKey(value: Partial<Record>) {
        return value.id !== undefined;
      }
    }
  }
}

// begin type guards
export namespace PgCatalog {
  export namespace Types {
    export namespace PgAggregate {
      export function is(value: any): value is PgCatalog.Types.PgAggregate {
        if (
          value.aggfnoid !== undefined &&
          value.aggkind !== undefined &&
          value.aggnumdirectargs !== undefined &&
          value.aggtransfn !== undefined &&
          value.aggfinalfn !== undefined &&
          value.aggcombinefn !== undefined &&
          value.aggserialfn !== undefined &&
          value.aggdeserialfn !== undefined &&
          value.aggmtransfn !== undefined &&
          value.aggminvtransfn !== undefined &&
          value.aggmfinalfn !== undefined &&
          value.aggfinalextra !== undefined &&
          value.aggmfinalextra !== undefined &&
          value.aggfinalmodify !== undefined &&
          value.aggmfinalmodify !== undefined &&
          value.aggsortop !== undefined &&
          value.aggtranstype !== undefined &&
          value.aggtransspace !== undefined &&
          value.aggmtranstype !== undefined &&
          value.aggmtransspace !== undefined &&
          value.agginitval !== undefined &&
          value.aggminitval !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgAm {
      export function is(value: any): value is PgCatalog.Types.PgAm {
        if (
          value.oid !== undefined &&
          value.amname !== undefined &&
          value.amhandler !== undefined &&
          value.amtype !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgAmop {
      export function is(value: any): value is PgCatalog.Types.PgAmop {
        if (
          value.oid !== undefined &&
          value.amopfamily !== undefined &&
          value.amoplefttype !== undefined &&
          value.amoprighttype !== undefined &&
          value.amopstrategy !== undefined &&
          value.amoppurpose !== undefined &&
          value.amopopr !== undefined &&
          value.amopmethod !== undefined &&
          value.amopsortfamily !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgAmproc {
      export function is(value: any): value is PgCatalog.Types.PgAmproc {
        if (
          value.oid !== undefined &&
          value.amprocfamily !== undefined &&
          value.amproclefttype !== undefined &&
          value.amprocrighttype !== undefined &&
          value.amprocnum !== undefined &&
          value.amproc !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgAttrdef {
      export function is(value: any): value is PgCatalog.Types.PgAttrdef {
        if (
          value.oid !== undefined &&
          value.adrelid !== undefined &&
          value.adnum !== undefined &&
          value.adbin !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgAttribute {
      export function is(value: any): value is PgCatalog.Types.PgAttribute {
        if (
          value.attrelid !== undefined &&
          value.attname !== undefined &&
          value.atttypid !== undefined &&
          value.attlen !== undefined &&
          value.attnum !== undefined &&
          value.attcacheoff !== undefined &&
          value.atttypmod !== undefined &&
          value.attndims !== undefined &&
          value.attbyval !== undefined &&
          value.attalign !== undefined &&
          value.attstorage !== undefined &&
          value.attcompression !== undefined &&
          value.attnotnull !== undefined &&
          value.atthasdef !== undefined &&
          value.atthasmissing !== undefined &&
          value.attidentity !== undefined &&
          value.attgenerated !== undefined &&
          value.attisdropped !== undefined &&
          value.attislocal !== undefined &&
          value.attinhcount !== undefined &&
          value.attstattarget !== undefined &&
          value.attcollation !== undefined &&
          value.attacl !== undefined &&
          value.attoptions !== undefined &&
          value.attfdwoptions !== undefined &&
          value.attmissingval !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgAuthMembers {
      export function is(value: any): value is PgCatalog.Types.PgAuthMembers {
        if (
          value.oid !== undefined &&
          value.roleid !== undefined &&
          value.member !== undefined &&
          value.grantor !== undefined &&
          value.adminOption !== undefined &&
          value.inheritOption !== undefined &&
          value.setOption !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgAuthid {
      export function is(value: any): value is PgCatalog.Types.PgAuthid {
        if (
          value.oid !== undefined &&
          value.rolname !== undefined &&
          value.rolsuper !== undefined &&
          value.rolinherit !== undefined &&
          value.rolcreaterole !== undefined &&
          value.rolcreatedb !== undefined &&
          value.rolcanlogin !== undefined &&
          value.rolreplication !== undefined &&
          value.rolbypassrls !== undefined &&
          value.rolconnlimit !== undefined &&
          value.rolpassword !== undefined &&
          value.rolvaliduntil !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgAvailableExtensionVersions {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgAvailableExtensionVersions {
        if (
          value.name !== undefined &&
          value.version !== undefined &&
          value.installed !== undefined &&
          value.superuser !== undefined &&
          value.trusted !== undefined &&
          value.relocatable !== undefined &&
          value.schema !== undefined &&
          value.requires !== undefined &&
          value.comment !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgAvailableExtensions {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgAvailableExtensions {
        if (
          value.name !== undefined &&
          value.defaultVersion !== undefined &&
          value.installedVersion !== undefined &&
          value.comment !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgBackendMemoryContexts {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgBackendMemoryContexts {
        if (
          value.name !== undefined &&
          value.ident !== undefined &&
          value.parent !== undefined &&
          value.level !== undefined &&
          value.totalBytes !== undefined &&
          value.totalNblocks !== undefined &&
          value.freeBytes !== undefined &&
          value.freeChunks !== undefined &&
          value.usedBytes !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgCast {
      export function is(value: any): value is PgCatalog.Types.PgCast {
        if (
          value.oid !== undefined &&
          value.castsource !== undefined &&
          value.casttarget !== undefined &&
          value.castfunc !== undefined &&
          value.castcontext !== undefined &&
          value.castmethod !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgClass {
      export function is(value: any): value is PgCatalog.Types.PgClass {
        if (
          value.oid !== undefined &&
          value.relname !== undefined &&
          value.relnamespace !== undefined &&
          value.reltype !== undefined &&
          value.reloftype !== undefined &&
          value.relowner !== undefined &&
          value.relam !== undefined &&
          value.relfilenode !== undefined &&
          value.reltablespace !== undefined &&
          value.relpages !== undefined &&
          value.reltuples !== undefined &&
          value.relallvisible !== undefined &&
          value.reltoastrelid !== undefined &&
          value.relhasindex !== undefined &&
          value.relisshared !== undefined &&
          value.relpersistence !== undefined &&
          value.relkind !== undefined &&
          value.relnatts !== undefined &&
          value.relchecks !== undefined &&
          value.relhasrules !== undefined &&
          value.relhastriggers !== undefined &&
          value.relhassubclass !== undefined &&
          value.relrowsecurity !== undefined &&
          value.relforcerowsecurity !== undefined &&
          value.relispopulated !== undefined &&
          value.relreplident !== undefined &&
          value.relispartition !== undefined &&
          value.relrewrite !== undefined &&
          value.relfrozenxid !== undefined &&
          value.relminmxid !== undefined &&
          value.relacl !== undefined &&
          value.reloptions !== undefined &&
          value.relpartbound !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgCollation {
      export function is(value: any): value is PgCatalog.Types.PgCollation {
        if (
          value.oid !== undefined &&
          value.collname !== undefined &&
          value.collnamespace !== undefined &&
          value.collowner !== undefined &&
          value.collprovider !== undefined &&
          value.collisdeterministic !== undefined &&
          value.collencoding !== undefined &&
          value.collcollate !== undefined &&
          value.collctype !== undefined &&
          value.colliculocale !== undefined &&
          value.collicurules !== undefined &&
          value.collversion !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgConfig {
      export function is(value: any): value is PgCatalog.Types.PgConfig {
        if (value.name !== undefined && value.setting !== undefined)
          return true;
        return false;
      }
    }
    export namespace PgConstraint {
      export function is(value: any): value is PgCatalog.Types.PgConstraint {
        if (
          value.oid !== undefined &&
          value.conname !== undefined &&
          value.connamespace !== undefined &&
          value.contype !== undefined &&
          value.condeferrable !== undefined &&
          value.condeferred !== undefined &&
          value.convalidated !== undefined &&
          value.conrelid !== undefined &&
          value.contypid !== undefined &&
          value.conindid !== undefined &&
          value.conparentid !== undefined &&
          value.confrelid !== undefined &&
          value.confupdtype !== undefined &&
          value.confdeltype !== undefined &&
          value.confmatchtype !== undefined &&
          value.conislocal !== undefined &&
          value.coninhcount !== undefined &&
          value.connoinherit !== undefined &&
          value.conkey !== undefined &&
          value.confkey !== undefined &&
          value.conpfeqop !== undefined &&
          value.conppeqop !== undefined &&
          value.conffeqop !== undefined &&
          value.confdelsetcols !== undefined &&
          value.conexclop !== undefined &&
          value.conbin !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgConversion {
      export function is(value: any): value is PgCatalog.Types.PgConversion {
        if (
          value.oid !== undefined &&
          value.conname !== undefined &&
          value.connamespace !== undefined &&
          value.conowner !== undefined &&
          value.conforencoding !== undefined &&
          value.contoencoding !== undefined &&
          value.conproc !== undefined &&
          value.condefault !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgCursors {
      export function is(value: any): value is PgCatalog.Types.PgCursors {
        if (
          value.name !== undefined &&
          value.statement !== undefined &&
          value.isHoldable !== undefined &&
          value.isBinary !== undefined &&
          value.isScrollable !== undefined &&
          value.creationTime !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgDatabase {
      export function is(value: any): value is PgCatalog.Types.PgDatabase {
        if (
          value.oid !== undefined &&
          value.datname !== undefined &&
          value.datdba !== undefined &&
          value.encoding !== undefined &&
          value.datlocprovider !== undefined &&
          value.datistemplate !== undefined &&
          value.datallowconn !== undefined &&
          value.datconnlimit !== undefined &&
          value.datfrozenxid !== undefined &&
          value.datminmxid !== undefined &&
          value.dattablespace !== undefined &&
          value.datcollate !== undefined &&
          value.datctype !== undefined &&
          value.daticulocale !== undefined &&
          value.daticurules !== undefined &&
          value.datcollversion !== undefined &&
          value.datacl !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgDbRoleSetting {
      export function is(value: any): value is PgCatalog.Types.PgDbRoleSetting {
        if (
          value.setdatabase !== undefined &&
          value.setrole !== undefined &&
          value.setconfig !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgDefaultAcl {
      export function is(value: any): value is PgCatalog.Types.PgDefaultAcl {
        if (
          value.oid !== undefined &&
          value.defaclrole !== undefined &&
          value.defaclnamespace !== undefined &&
          value.defaclobjtype !== undefined &&
          value.defaclacl !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgDepend {
      export function is(value: any): value is PgCatalog.Types.PgDepend {
        if (
          value.classid !== undefined &&
          value.objid !== undefined &&
          value.objsubid !== undefined &&
          value.refclassid !== undefined &&
          value.refobjid !== undefined &&
          value.refobjsubid !== undefined &&
          value.deptype !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgDescription {
      export function is(value: any): value is PgCatalog.Types.PgDescription {
        if (
          value.objoid !== undefined &&
          value.classoid !== undefined &&
          value.objsubid !== undefined &&
          value.description !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgEnum {
      export function is(value: any): value is PgCatalog.Types.PgEnum {
        if (
          value.oid !== undefined &&
          value.enumtypid !== undefined &&
          value.enumsortorder !== undefined &&
          value.enumlabel !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgEventTrigger {
      export function is(value: any): value is PgCatalog.Types.PgEventTrigger {
        if (
          value.oid !== undefined &&
          value.evtname !== undefined &&
          value.evtevent !== undefined &&
          value.evtowner !== undefined &&
          value.evtfoid !== undefined &&
          value.evtenabled !== undefined &&
          value.evttags !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgExtension {
      export function is(value: any): value is PgCatalog.Types.PgExtension {
        if (
          value.oid !== undefined &&
          value.extname !== undefined &&
          value.extowner !== undefined &&
          value.extnamespace !== undefined &&
          value.extrelocatable !== undefined &&
          value.extversion !== undefined &&
          value.extconfig !== undefined &&
          value.extcondition !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgFileSettings {
      export function is(value: any): value is PgCatalog.Types.PgFileSettings {
        if (
          value.sourcefile !== undefined &&
          value.sourceline !== undefined &&
          value.seqno !== undefined &&
          value.name !== undefined &&
          value.setting !== undefined &&
          value.applied !== undefined &&
          value.error !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgForeignDataWrapper {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgForeignDataWrapper {
        if (
          value.oid !== undefined &&
          value.fdwname !== undefined &&
          value.fdwowner !== undefined &&
          value.fdwhandler !== undefined &&
          value.fdwvalidator !== undefined &&
          value.fdwacl !== undefined &&
          value.fdwoptions !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgForeignServer {
      export function is(value: any): value is PgCatalog.Types.PgForeignServer {
        if (
          value.oid !== undefined &&
          value.srvname !== undefined &&
          value.srvowner !== undefined &&
          value.srvfdw !== undefined &&
          value.srvtype !== undefined &&
          value.srvversion !== undefined &&
          value.srvacl !== undefined &&
          value.srvoptions !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgForeignTable {
      export function is(value: any): value is PgCatalog.Types.PgForeignTable {
        if (
          value.ftrelid !== undefined &&
          value.ftserver !== undefined &&
          value.ftoptions !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgGroup {
      export function is(value: any): value is PgCatalog.Types.PgGroup {
        if (
          value.groname !== undefined &&
          value.grosysid !== undefined &&
          value.grolist !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgHbaFileRules {
      export function is(value: any): value is PgCatalog.Types.PgHbaFileRules {
        if (
          value.ruleNumber !== undefined &&
          value.fileName !== undefined &&
          value.lineNumber !== undefined &&
          value.type !== undefined &&
          value.database !== undefined &&
          value.userName !== undefined &&
          value.address !== undefined &&
          value.netmask !== undefined &&
          value.authMethod !== undefined &&
          value.options !== undefined &&
          value.error !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgIdentFileMappings {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgIdentFileMappings {
        if (
          value.mapNumber !== undefined &&
          value.fileName !== undefined &&
          value.lineNumber !== undefined &&
          value.mapName !== undefined &&
          value.sysName !== undefined &&
          value.pgUsername !== undefined &&
          value.error !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgIndex {
      export function is(value: any): value is PgCatalog.Types.PgIndex {
        if (
          value.indexrelid !== undefined &&
          value.indrelid !== undefined &&
          value.indnatts !== undefined &&
          value.indnkeyatts !== undefined &&
          value.indisunique !== undefined &&
          value.indnullsnotdistinct !== undefined &&
          value.indisprimary !== undefined &&
          value.indisexclusion !== undefined &&
          value.indimmediate !== undefined &&
          value.indisclustered !== undefined &&
          value.indisvalid !== undefined &&
          value.indcheckxmin !== undefined &&
          value.indisready !== undefined &&
          value.indislive !== undefined &&
          value.indisreplident !== undefined &&
          value.indkey !== undefined &&
          value.indcollation !== undefined &&
          value.indclass !== undefined &&
          value.indoption !== undefined &&
          value.indexprs !== undefined &&
          value.indpred !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgIndexes {
      export function is(value: any): value is PgCatalog.Types.PgIndexes {
        if (
          value.schemaname !== undefined &&
          value.tablename !== undefined &&
          value.indexname !== undefined &&
          value.tablespace !== undefined &&
          value.indexdef !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgInherits {
      export function is(value: any): value is PgCatalog.Types.PgInherits {
        if (
          value.inhrelid !== undefined &&
          value.inhparent !== undefined &&
          value.inhseqno !== undefined &&
          value.inhdetachpending !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgInitPrivs {
      export function is(value: any): value is PgCatalog.Types.PgInitPrivs {
        if (
          value.objoid !== undefined &&
          value.classoid !== undefined &&
          value.objsubid !== undefined &&
          value.privtype !== undefined &&
          value.initprivs !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgLanguage {
      export function is(value: any): value is PgCatalog.Types.PgLanguage {
        if (
          value.oid !== undefined &&
          value.lanname !== undefined &&
          value.lanowner !== undefined &&
          value.lanispl !== undefined &&
          value.lanpltrusted !== undefined &&
          value.lanplcallfoid !== undefined &&
          value.laninline !== undefined &&
          value.lanvalidator !== undefined &&
          value.lanacl !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgLargeobject {
      export function is(value: any): value is PgCatalog.Types.PgLargeobject {
        if (
          value.loid !== undefined &&
          value.pageno !== undefined &&
          value.data !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgLargeobjectMetadata {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgLargeobjectMetadata {
        if (
          value.oid !== undefined &&
          value.lomowner !== undefined &&
          value.lomacl !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgLocks {
      export function is(value: any): value is PgCatalog.Types.PgLocks {
        if (
          value.locktype !== undefined &&
          value.database !== undefined &&
          value.relation !== undefined &&
          value.page !== undefined &&
          value.tuple !== undefined &&
          value.virtualxid !== undefined &&
          value.transactionid !== undefined &&
          value.classid !== undefined &&
          value.objid !== undefined &&
          value.objsubid !== undefined &&
          value.virtualtransaction !== undefined &&
          value.pid !== undefined &&
          value.mode !== undefined &&
          value.granted !== undefined &&
          value.fastpath !== undefined &&
          value.waitstart !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgMatviews {
      export function is(value: any): value is PgCatalog.Types.PgMatviews {
        if (
          value.schemaname !== undefined &&
          value.matviewname !== undefined &&
          value.matviewowner !== undefined &&
          value.tablespace !== undefined &&
          value.hasindexes !== undefined &&
          value.ispopulated !== undefined &&
          value.definition !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgNamespace {
      export function is(value: any): value is PgCatalog.Types.PgNamespace {
        if (
          value.oid !== undefined &&
          value.nspname !== undefined &&
          value.nspowner !== undefined &&
          value.nspacl !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgOpclass {
      export function is(value: any): value is PgCatalog.Types.PgOpclass {
        if (
          value.oid !== undefined &&
          value.opcmethod !== undefined &&
          value.opcname !== undefined &&
          value.opcnamespace !== undefined &&
          value.opcowner !== undefined &&
          value.opcfamily !== undefined &&
          value.opcintype !== undefined &&
          value.opcdefault !== undefined &&
          value.opckeytype !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgOperator {
      export function is(value: any): value is PgCatalog.Types.PgOperator {
        if (
          value.oid !== undefined &&
          value.oprname !== undefined &&
          value.oprnamespace !== undefined &&
          value.oprowner !== undefined &&
          value.oprkind !== undefined &&
          value.oprcanmerge !== undefined &&
          value.oprcanhash !== undefined &&
          value.oprleft !== undefined &&
          value.oprright !== undefined &&
          value.oprresult !== undefined &&
          value.oprcom !== undefined &&
          value.oprnegate !== undefined &&
          value.oprcode !== undefined &&
          value.oprrest !== undefined &&
          value.oprjoin !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgOpfamily {
      export function is(value: any): value is PgCatalog.Types.PgOpfamily {
        if (
          value.oid !== undefined &&
          value.opfmethod !== undefined &&
          value.opfname !== undefined &&
          value.opfnamespace !== undefined &&
          value.opfowner !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgParameterAcl {
      export function is(value: any): value is PgCatalog.Types.PgParameterAcl {
        if (
          value.oid !== undefined &&
          value.parname !== undefined &&
          value.paracl !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgPartitionedTable {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgPartitionedTable {
        if (
          value.partrelid !== undefined &&
          value.partstrat !== undefined &&
          value.partnatts !== undefined &&
          value.partdefid !== undefined &&
          value.partattrs !== undefined &&
          value.partclass !== undefined &&
          value.partcollation !== undefined &&
          value.partexprs !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgPolicies {
      export function is(value: any): value is PgCatalog.Types.PgPolicies {
        if (
          value.schemaname !== undefined &&
          value.tablename !== undefined &&
          value.policyname !== undefined &&
          value.permissive !== undefined &&
          value.roles !== undefined &&
          value.cmd !== undefined &&
          value.qual !== undefined &&
          value.withCheck !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgPolicy {
      export function is(value: any): value is PgCatalog.Types.PgPolicy {
        if (
          value.oid !== undefined &&
          value.polname !== undefined &&
          value.polrelid !== undefined &&
          value.polcmd !== undefined &&
          value.polpermissive !== undefined &&
          value.polroles !== undefined &&
          value.polqual !== undefined &&
          value.polwithcheck !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgPreparedStatements {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgPreparedStatements {
        if (
          value.name !== undefined &&
          value.statement !== undefined &&
          value.prepareTime !== undefined &&
          value.parameterTypes !== undefined &&
          value.resultTypes !== undefined &&
          value.fromSql !== undefined &&
          value.genericPlans !== undefined &&
          value.customPlans !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgPreparedXacts {
      export function is(value: any): value is PgCatalog.Types.PgPreparedXacts {
        if (
          value.transaction !== undefined &&
          value.gid !== undefined &&
          value.prepared !== undefined &&
          value.owner !== undefined &&
          value.database !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgProc {
      export function is(value: any): value is PgCatalog.Types.PgProc {
        if (
          value.oid !== undefined &&
          value.proname !== undefined &&
          value.pronamespace !== undefined &&
          value.proowner !== undefined &&
          value.prolang !== undefined &&
          value.procost !== undefined &&
          value.prorows !== undefined &&
          value.provariadic !== undefined &&
          value.prosupport !== undefined &&
          value.prokind !== undefined &&
          value.prosecdef !== undefined &&
          value.proleakproof !== undefined &&
          value.proisstrict !== undefined &&
          value.proretset !== undefined &&
          value.provolatile !== undefined &&
          value.proparallel !== undefined &&
          value.pronargs !== undefined &&
          value.pronargdefaults !== undefined &&
          value.prorettype !== undefined &&
          value.proargtypes !== undefined &&
          value.proallargtypes !== undefined &&
          value.proargmodes !== undefined &&
          value.proargnames !== undefined &&
          value.proargdefaults !== undefined &&
          value.protrftypes !== undefined &&
          value.prosrc !== undefined &&
          value.probin !== undefined &&
          value.prosqlbody !== undefined &&
          value.proconfig !== undefined &&
          value.proacl !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgPublication {
      export function is(value: any): value is PgCatalog.Types.PgPublication {
        if (
          value.oid !== undefined &&
          value.pubname !== undefined &&
          value.pubowner !== undefined &&
          value.puballtables !== undefined &&
          value.pubinsert !== undefined &&
          value.pubupdate !== undefined &&
          value.pubdelete !== undefined &&
          value.pubtruncate !== undefined &&
          value.pubviaroot !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgPublicationNamespace {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgPublicationNamespace {
        if (
          value.oid !== undefined &&
          value.pnpubid !== undefined &&
          value.pnnspid !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgPublicationRel {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgPublicationRel {
        if (
          value.oid !== undefined &&
          value.prpubid !== undefined &&
          value.prrelid !== undefined &&
          value.prqual !== undefined &&
          value.prattrs !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgPublicationTables {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgPublicationTables {
        if (
          value.pubname !== undefined &&
          value.schemaname !== undefined &&
          value.tablename !== undefined &&
          value.attnames !== undefined &&
          value.rowfilter !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgRange {
      export function is(value: any): value is PgCatalog.Types.PgRange {
        if (
          value.rngtypid !== undefined &&
          value.rngsubtype !== undefined &&
          value.rngmultitypid !== undefined &&
          value.rngcollation !== undefined &&
          value.rngsubopc !== undefined &&
          value.rngcanonical !== undefined &&
          value.rngsubdiff !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgReplicationOrigin {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgReplicationOrigin {
        if (value.roident !== undefined && value.roname !== undefined)
          return true;
        return false;
      }
    }
    export namespace PgReplicationOriginStatus {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgReplicationOriginStatus {
        if (
          value.localId !== undefined &&
          value.externalId !== undefined &&
          value.remoteLsn !== undefined &&
          value.localLsn !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgReplicationSlots {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgReplicationSlots {
        if (
          value.slotName !== undefined &&
          value.plugin !== undefined &&
          value.slotType !== undefined &&
          value.datoid !== undefined &&
          value.database !== undefined &&
          value.temporary !== undefined &&
          value.active !== undefined &&
          value.activePid !== undefined &&
          value.xmin !== undefined &&
          value.catalogXmin !== undefined &&
          value.restartLsn !== undefined &&
          value.confirmedFlushLsn !== undefined &&
          value.walStatus !== undefined &&
          value.safeWalSize !== undefined &&
          value.twoPhase !== undefined &&
          value.conflicting !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgRewrite {
      export function is(value: any): value is PgCatalog.Types.PgRewrite {
        if (
          value.oid !== undefined &&
          value.rulename !== undefined &&
          value.evClass !== undefined &&
          value.evType !== undefined &&
          value.evEnabled !== undefined &&
          value.isInstead !== undefined &&
          value.evQual !== undefined &&
          value.evAction !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgRoles {
      export function is(value: any): value is PgCatalog.Types.PgRoles {
        if (
          value.rolname !== undefined &&
          value.rolsuper !== undefined &&
          value.rolinherit !== undefined &&
          value.rolcreaterole !== undefined &&
          value.rolcreatedb !== undefined &&
          value.rolcanlogin !== undefined &&
          value.rolreplication !== undefined &&
          value.rolconnlimit !== undefined &&
          value.rolpassword !== undefined &&
          value.rolvaliduntil !== undefined &&
          value.rolbypassrls !== undefined &&
          value.rolconfig !== undefined &&
          value.oid !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgRules {
      export function is(value: any): value is PgCatalog.Types.PgRules {
        if (
          value.schemaname !== undefined &&
          value.tablename !== undefined &&
          value.rulename !== undefined &&
          value.definition !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgSeclabel {
      export function is(value: any): value is PgCatalog.Types.PgSeclabel {
        if (
          value.objoid !== undefined &&
          value.classoid !== undefined &&
          value.objsubid !== undefined &&
          value.provider !== undefined &&
          value.label !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgSeclabels {
      export function is(value: any): value is PgCatalog.Types.PgSeclabels {
        if (
          value.objoid !== undefined &&
          value.classoid !== undefined &&
          value.objsubid !== undefined &&
          value.objtype !== undefined &&
          value.objnamespace !== undefined &&
          value.objname !== undefined &&
          value.provider !== undefined &&
          value.label !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgSequence {
      export function is(value: any): value is PgCatalog.Types.PgSequence {
        if (
          value.seqrelid !== undefined &&
          value.seqtypid !== undefined &&
          value.seqstart !== undefined &&
          value.seqincrement !== undefined &&
          value.seqmax !== undefined &&
          value.seqmin !== undefined &&
          value.seqcache !== undefined &&
          value.seqcycle !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgSequences {
      export function is(value: any): value is PgCatalog.Types.PgSequences {
        if (
          value.schemaname !== undefined &&
          value.sequencename !== undefined &&
          value.sequenceowner !== undefined &&
          value.dataType !== undefined &&
          value.startValue !== undefined &&
          value.minValue !== undefined &&
          value.maxValue !== undefined &&
          value.incrementBy !== undefined &&
          value.cycle !== undefined &&
          value.cacheSize !== undefined &&
          value.lastValue !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgSettings {
      export function is(value: any): value is PgCatalog.Types.PgSettings {
        if (
          value.name !== undefined &&
          value.setting !== undefined &&
          value.unit !== undefined &&
          value.category !== undefined &&
          value.shortDesc !== undefined &&
          value.extraDesc !== undefined &&
          value.context !== undefined &&
          value.vartype !== undefined &&
          value.source !== undefined &&
          value.minVal !== undefined &&
          value.maxVal !== undefined &&
          value.enumvals !== undefined &&
          value.bootVal !== undefined &&
          value.resetVal !== undefined &&
          value.sourcefile !== undefined &&
          value.sourceline !== undefined &&
          value.pendingRestart !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgShadow {
      export function is(value: any): value is PgCatalog.Types.PgShadow {
        if (
          value.usename !== undefined &&
          value.usesysid !== undefined &&
          value.usecreatedb !== undefined &&
          value.usesuper !== undefined &&
          value.userepl !== undefined &&
          value.usebypassrls !== undefined &&
          value.passwd !== undefined &&
          value.valuntil !== undefined &&
          value.useconfig !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgShdepend {
      export function is(value: any): value is PgCatalog.Types.PgShdepend {
        if (
          value.dbid !== undefined &&
          value.classid !== undefined &&
          value.objid !== undefined &&
          value.objsubid !== undefined &&
          value.refclassid !== undefined &&
          value.refobjid !== undefined &&
          value.deptype !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgShdescription {
      export function is(value: any): value is PgCatalog.Types.PgShdescription {
        if (
          value.objoid !== undefined &&
          value.classoid !== undefined &&
          value.description !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgShmemAllocations {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgShmemAllocations {
        if (
          value.name !== undefined &&
          value.off !== undefined &&
          value.size !== undefined &&
          value.allocatedSize !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgShseclabel {
      export function is(value: any): value is PgCatalog.Types.PgShseclabel {
        if (
          value.objoid !== undefined &&
          value.classoid !== undefined &&
          value.provider !== undefined &&
          value.label !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatActivity {
      export function is(value: any): value is PgCatalog.Types.PgStatActivity {
        if (
          value.datid !== undefined &&
          value.datname !== undefined &&
          value.pid !== undefined &&
          value.leaderPid !== undefined &&
          value.usesysid !== undefined &&
          value.usename !== undefined &&
          value.applicationName !== undefined &&
          value.clientAddr !== undefined &&
          value.clientHostname !== undefined &&
          value.clientPort !== undefined &&
          value.backendStart !== undefined &&
          value.xactStart !== undefined &&
          value.queryStart !== undefined &&
          value.stateChange !== undefined &&
          value.waitEventType !== undefined &&
          value.waitEvent !== undefined &&
          value.state !== undefined &&
          value.backendXid !== undefined &&
          value.backendXmin !== undefined &&
          value.queryId !== undefined &&
          value.query !== undefined &&
          value.backendType !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatAllIndexes {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatAllIndexes {
        if (
          value.relid !== undefined &&
          value.indexrelid !== undefined &&
          value.schemaname !== undefined &&
          value.relname !== undefined &&
          value.indexrelname !== undefined &&
          value.idxScan !== undefined &&
          value.lastIdxScan !== undefined &&
          value.idxTupRead !== undefined &&
          value.idxTupFetch !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatAllTables {
      export function is(value: any): value is PgCatalog.Types.PgStatAllTables {
        if (
          value.relid !== undefined &&
          value.schemaname !== undefined &&
          value.relname !== undefined &&
          value.seqScan !== undefined &&
          value.lastSeqScan !== undefined &&
          value.seqTupRead !== undefined &&
          value.idxScan !== undefined &&
          value.lastIdxScan !== undefined &&
          value.idxTupFetch !== undefined &&
          value.nTupIns !== undefined &&
          value.nTupUpd !== undefined &&
          value.nTupDel !== undefined &&
          value.nTupHotUpd !== undefined &&
          value.nTupNewpageUpd !== undefined &&
          value.nLiveTup !== undefined &&
          value.nDeadTup !== undefined &&
          value.nModSinceAnalyze !== undefined &&
          value.nInsSinceVacuum !== undefined &&
          value.lastVacuum !== undefined &&
          value.lastAutovacuum !== undefined &&
          value.lastAnalyze !== undefined &&
          value.lastAutoanalyze !== undefined &&
          value.vacuumCount !== undefined &&
          value.autovacuumCount !== undefined &&
          value.analyzeCount !== undefined &&
          value.autoanalyzeCount !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatArchiver {
      export function is(value: any): value is PgCatalog.Types.PgStatArchiver {
        if (
          value.archivedCount !== undefined &&
          value.lastArchivedWal !== undefined &&
          value.lastArchivedTime !== undefined &&
          value.failedCount !== undefined &&
          value.lastFailedWal !== undefined &&
          value.lastFailedTime !== undefined &&
          value.statsReset !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatBgwriter {
      export function is(value: any): value is PgCatalog.Types.PgStatBgwriter {
        if (
          value.checkpointsTimed !== undefined &&
          value.checkpointsReq !== undefined &&
          value.checkpointWriteTime !== undefined &&
          value.checkpointSyncTime !== undefined &&
          value.buffersCheckpoint !== undefined &&
          value.buffersClean !== undefined &&
          value.maxwrittenClean !== undefined &&
          value.buffersBackend !== undefined &&
          value.buffersBackendFsync !== undefined &&
          value.buffersAlloc !== undefined &&
          value.statsReset !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatDatabase {
      export function is(value: any): value is PgCatalog.Types.PgStatDatabase {
        if (
          value.datid !== undefined &&
          value.datname !== undefined &&
          value.numbackends !== undefined &&
          value.xactCommit !== undefined &&
          value.xactRollback !== undefined &&
          value.blksRead !== undefined &&
          value.blksHit !== undefined &&
          value.tupReturned !== undefined &&
          value.tupFetched !== undefined &&
          value.tupInserted !== undefined &&
          value.tupUpdated !== undefined &&
          value.tupDeleted !== undefined &&
          value.conflicts !== undefined &&
          value.tempFiles !== undefined &&
          value.tempBytes !== undefined &&
          value.deadlocks !== undefined &&
          value.checksumFailures !== undefined &&
          value.checksumLastFailure !== undefined &&
          value.blkReadTime !== undefined &&
          value.blkWriteTime !== undefined &&
          value.sessionTime !== undefined &&
          value.activeTime !== undefined &&
          value.idleInTransactionTime !== undefined &&
          value.sessions !== undefined &&
          value.sessionsAbandoned !== undefined &&
          value.sessionsFatal !== undefined &&
          value.sessionsKilled !== undefined &&
          value.statsReset !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatDatabaseConflicts {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatDatabaseConflicts {
        if (
          value.datid !== undefined &&
          value.datname !== undefined &&
          value.conflTablespace !== undefined &&
          value.conflLock !== undefined &&
          value.conflSnapshot !== undefined &&
          value.conflBufferpin !== undefined &&
          value.conflDeadlock !== undefined &&
          value.conflActiveLogicalslot !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatGssapi {
      export function is(value: any): value is PgCatalog.Types.PgStatGssapi {
        if (
          value.pid !== undefined &&
          value.gssAuthenticated !== undefined &&
          value.principal !== undefined &&
          value.encrypted !== undefined &&
          value.credentialsDelegated !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatIo {
      export function is(value: any): value is PgCatalog.Types.PgStatIo {
        if (
          value.backendType !== undefined &&
          value.object !== undefined &&
          value.context !== undefined &&
          value.reads !== undefined &&
          value.readTime !== undefined &&
          value.writes !== undefined &&
          value.writeTime !== undefined &&
          value.writebacks !== undefined &&
          value.writebackTime !== undefined &&
          value.extends !== undefined &&
          value.extendTime !== undefined &&
          value.opBytes !== undefined &&
          value.hits !== undefined &&
          value.evictions !== undefined &&
          value.reuses !== undefined &&
          value.fsyncs !== undefined &&
          value.fsyncTime !== undefined &&
          value.statsReset !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatProgressAnalyze {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatProgressAnalyze {
        if (
          value.pid !== undefined &&
          value.datid !== undefined &&
          value.datname !== undefined &&
          value.relid !== undefined &&
          value.phase !== undefined &&
          value.sampleBlksTotal !== undefined &&
          value.sampleBlksScanned !== undefined &&
          value.extStatsTotal !== undefined &&
          value.extStatsComputed !== undefined &&
          value.childTablesTotal !== undefined &&
          value.childTablesDone !== undefined &&
          value.currentChildTableRelid !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatProgressBasebackup {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatProgressBasebackup {
        if (
          value.pid !== undefined &&
          value.phase !== undefined &&
          value.backupTotal !== undefined &&
          value.backupStreamed !== undefined &&
          value.tablespacesTotal !== undefined &&
          value.tablespacesStreamed !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatProgressCluster {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatProgressCluster {
        if (
          value.pid !== undefined &&
          value.datid !== undefined &&
          value.datname !== undefined &&
          value.relid !== undefined &&
          value.command !== undefined &&
          value.phase !== undefined &&
          value.clusterIndexRelid !== undefined &&
          value.heapTuplesScanned !== undefined &&
          value.heapTuplesWritten !== undefined &&
          value.heapBlksTotal !== undefined &&
          value.heapBlksScanned !== undefined &&
          value.indexRebuildCount !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatProgressCopy {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatProgressCopy {
        if (
          value.pid !== undefined &&
          value.datid !== undefined &&
          value.datname !== undefined &&
          value.relid !== undefined &&
          value.command !== undefined &&
          value.type !== undefined &&
          value.bytesProcessed !== undefined &&
          value.bytesTotal !== undefined &&
          value.tuplesProcessed !== undefined &&
          value.tuplesExcluded !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatProgressCreateIndex {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatProgressCreateIndex {
        if (
          value.pid !== undefined &&
          value.datid !== undefined &&
          value.datname !== undefined &&
          value.relid !== undefined &&
          value.indexRelid !== undefined &&
          value.command !== undefined &&
          value.phase !== undefined &&
          value.lockersTotal !== undefined &&
          value.lockersDone !== undefined &&
          value.currentLockerPid !== undefined &&
          value.blocksTotal !== undefined &&
          value.blocksDone !== undefined &&
          value.tuplesTotal !== undefined &&
          value.tuplesDone !== undefined &&
          value.partitionsTotal !== undefined &&
          value.partitionsDone !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatProgressVacuum {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatProgressVacuum {
        if (
          value.pid !== undefined &&
          value.datid !== undefined &&
          value.datname !== undefined &&
          value.relid !== undefined &&
          value.phase !== undefined &&
          value.heapBlksTotal !== undefined &&
          value.heapBlksScanned !== undefined &&
          value.heapBlksVacuumed !== undefined &&
          value.indexVacuumCount !== undefined &&
          value.maxDeadTuples !== undefined &&
          value.numDeadTuples !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatRecoveryPrefetch {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatRecoveryPrefetch {
        if (
          value.statsReset !== undefined &&
          value.prefetch !== undefined &&
          value.hit !== undefined &&
          value.skipInit !== undefined &&
          value.skipNew !== undefined &&
          value.skipFpw !== undefined &&
          value.skipRep !== undefined &&
          value.walDistance !== undefined &&
          value.blockDistance !== undefined &&
          value.ioDepth !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatReplication {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatReplication {
        if (
          value.pid !== undefined &&
          value.usesysid !== undefined &&
          value.usename !== undefined &&
          value.applicationName !== undefined &&
          value.clientAddr !== undefined &&
          value.clientHostname !== undefined &&
          value.clientPort !== undefined &&
          value.backendStart !== undefined &&
          value.backendXmin !== undefined &&
          value.state !== undefined &&
          value.sentLsn !== undefined &&
          value.writeLsn !== undefined &&
          value.flushLsn !== undefined &&
          value.replayLsn !== undefined &&
          value.writeLag !== undefined &&
          value.flushLag !== undefined &&
          value.replayLag !== undefined &&
          value.syncPriority !== undefined &&
          value.syncState !== undefined &&
          value.replyTime !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatReplicationSlots {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatReplicationSlots {
        if (
          value.slotName !== undefined &&
          value.spillTxns !== undefined &&
          value.spillCount !== undefined &&
          value.spillBytes !== undefined &&
          value.streamTxns !== undefined &&
          value.streamCount !== undefined &&
          value.streamBytes !== undefined &&
          value.totalTxns !== undefined &&
          value.totalBytes !== undefined &&
          value.statsReset !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatSlru {
      export function is(value: any): value is PgCatalog.Types.PgStatSlru {
        if (
          value.name !== undefined &&
          value.blksZeroed !== undefined &&
          value.blksHit !== undefined &&
          value.blksRead !== undefined &&
          value.blksWritten !== undefined &&
          value.blksExists !== undefined &&
          value.flushes !== undefined &&
          value.truncates !== undefined &&
          value.statsReset !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatSsl {
      export function is(value: any): value is PgCatalog.Types.PgStatSsl {
        if (
          value.pid !== undefined &&
          value.ssl !== undefined &&
          value.version !== undefined &&
          value.cipher !== undefined &&
          value.bits !== undefined &&
          value.clientDn !== undefined &&
          value.clientSerial !== undefined &&
          value.issuerDn !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatSubscription {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatSubscription {
        if (
          value.subid !== undefined &&
          value.subname !== undefined &&
          value.pid !== undefined &&
          value.leaderPid !== undefined &&
          value.relid !== undefined &&
          value.receivedLsn !== undefined &&
          value.lastMsgSendTime !== undefined &&
          value.lastMsgReceiptTime !== undefined &&
          value.latestEndLsn !== undefined &&
          value.latestEndTime !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatSubscriptionStats {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatSubscriptionStats {
        if (
          value.subid !== undefined &&
          value.subname !== undefined &&
          value.applyErrorCount !== undefined &&
          value.syncErrorCount !== undefined &&
          value.statsReset !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatSysIndexes {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatSysIndexes {
        if (
          value.relid !== undefined &&
          value.indexrelid !== undefined &&
          value.schemaname !== undefined &&
          value.relname !== undefined &&
          value.indexrelname !== undefined &&
          value.idxScan !== undefined &&
          value.lastIdxScan !== undefined &&
          value.idxTupRead !== undefined &&
          value.idxTupFetch !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatSysTables {
      export function is(value: any): value is PgCatalog.Types.PgStatSysTables {
        if (
          value.relid !== undefined &&
          value.schemaname !== undefined &&
          value.relname !== undefined &&
          value.seqScan !== undefined &&
          value.lastSeqScan !== undefined &&
          value.seqTupRead !== undefined &&
          value.idxScan !== undefined &&
          value.lastIdxScan !== undefined &&
          value.idxTupFetch !== undefined &&
          value.nTupIns !== undefined &&
          value.nTupUpd !== undefined &&
          value.nTupDel !== undefined &&
          value.nTupHotUpd !== undefined &&
          value.nTupNewpageUpd !== undefined &&
          value.nLiveTup !== undefined &&
          value.nDeadTup !== undefined &&
          value.nModSinceAnalyze !== undefined &&
          value.nInsSinceVacuum !== undefined &&
          value.lastVacuum !== undefined &&
          value.lastAutovacuum !== undefined &&
          value.lastAnalyze !== undefined &&
          value.lastAutoanalyze !== undefined &&
          value.vacuumCount !== undefined &&
          value.autovacuumCount !== undefined &&
          value.analyzeCount !== undefined &&
          value.autoanalyzeCount !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatUserFunctions {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatUserFunctions {
        if (
          value.funcid !== undefined &&
          value.schemaname !== undefined &&
          value.funcname !== undefined &&
          value.calls !== undefined &&
          value.totalTime !== undefined &&
          value.selfTime !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatUserIndexes {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatUserIndexes {
        if (
          value.relid !== undefined &&
          value.indexrelid !== undefined &&
          value.schemaname !== undefined &&
          value.relname !== undefined &&
          value.indexrelname !== undefined &&
          value.idxScan !== undefined &&
          value.lastIdxScan !== undefined &&
          value.idxTupRead !== undefined &&
          value.idxTupFetch !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatUserTables {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatUserTables {
        if (
          value.relid !== undefined &&
          value.schemaname !== undefined &&
          value.relname !== undefined &&
          value.seqScan !== undefined &&
          value.lastSeqScan !== undefined &&
          value.seqTupRead !== undefined &&
          value.idxScan !== undefined &&
          value.lastIdxScan !== undefined &&
          value.idxTupFetch !== undefined &&
          value.nTupIns !== undefined &&
          value.nTupUpd !== undefined &&
          value.nTupDel !== undefined &&
          value.nTupHotUpd !== undefined &&
          value.nTupNewpageUpd !== undefined &&
          value.nLiveTup !== undefined &&
          value.nDeadTup !== undefined &&
          value.nModSinceAnalyze !== undefined &&
          value.nInsSinceVacuum !== undefined &&
          value.lastVacuum !== undefined &&
          value.lastAutovacuum !== undefined &&
          value.lastAnalyze !== undefined &&
          value.lastAutoanalyze !== undefined &&
          value.vacuumCount !== undefined &&
          value.autovacuumCount !== undefined &&
          value.analyzeCount !== undefined &&
          value.autoanalyzeCount !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatWal {
      export function is(value: any): value is PgCatalog.Types.PgStatWal {
        if (
          value.walRecords !== undefined &&
          value.walFpi !== undefined &&
          value.walBytes !== undefined &&
          value.walBuffersFull !== undefined &&
          value.walWrite !== undefined &&
          value.walSync !== undefined &&
          value.walWriteTime !== undefined &&
          value.walSyncTime !== undefined &&
          value.statsReset !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatWalReceiver {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatWalReceiver {
        if (
          value.pid !== undefined &&
          value.status !== undefined &&
          value.receiveStartLsn !== undefined &&
          value.receiveStartTli !== undefined &&
          value.writtenLsn !== undefined &&
          value.flushedLsn !== undefined &&
          value.receivedTli !== undefined &&
          value.lastMsgSendTime !== undefined &&
          value.lastMsgReceiptTime !== undefined &&
          value.latestEndLsn !== undefined &&
          value.latestEndTime !== undefined &&
          value.slotName !== undefined &&
          value.senderHost !== undefined &&
          value.senderPort !== undefined &&
          value.conninfo !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatXactAllTables {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatXactAllTables {
        if (
          value.relid !== undefined &&
          value.schemaname !== undefined &&
          value.relname !== undefined &&
          value.seqScan !== undefined &&
          value.seqTupRead !== undefined &&
          value.idxScan !== undefined &&
          value.idxTupFetch !== undefined &&
          value.nTupIns !== undefined &&
          value.nTupUpd !== undefined &&
          value.nTupDel !== undefined &&
          value.nTupHotUpd !== undefined &&
          value.nTupNewpageUpd !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatXactSysTables {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatXactSysTables {
        if (
          value.relid !== undefined &&
          value.schemaname !== undefined &&
          value.relname !== undefined &&
          value.seqScan !== undefined &&
          value.seqTupRead !== undefined &&
          value.idxScan !== undefined &&
          value.idxTupFetch !== undefined &&
          value.nTupIns !== undefined &&
          value.nTupUpd !== undefined &&
          value.nTupDel !== undefined &&
          value.nTupHotUpd !== undefined &&
          value.nTupNewpageUpd !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatXactUserFunctions {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatXactUserFunctions {
        if (
          value.funcid !== undefined &&
          value.schemaname !== undefined &&
          value.funcname !== undefined &&
          value.calls !== undefined &&
          value.totalTime !== undefined &&
          value.selfTime !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatXactUserTables {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatXactUserTables {
        if (
          value.relid !== undefined &&
          value.schemaname !== undefined &&
          value.relname !== undefined &&
          value.seqScan !== undefined &&
          value.seqTupRead !== undefined &&
          value.idxScan !== undefined &&
          value.idxTupFetch !== undefined &&
          value.nTupIns !== undefined &&
          value.nTupUpd !== undefined &&
          value.nTupDel !== undefined &&
          value.nTupHotUpd !== undefined &&
          value.nTupNewpageUpd !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatioAllIndexes {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatioAllIndexes {
        if (
          value.relid !== undefined &&
          value.indexrelid !== undefined &&
          value.schemaname !== undefined &&
          value.relname !== undefined &&
          value.indexrelname !== undefined &&
          value.idxBlksRead !== undefined &&
          value.idxBlksHit !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatioAllSequences {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatioAllSequences {
        if (
          value.relid !== undefined &&
          value.schemaname !== undefined &&
          value.relname !== undefined &&
          value.blksRead !== undefined &&
          value.blksHit !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatioAllTables {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatioAllTables {
        if (
          value.relid !== undefined &&
          value.schemaname !== undefined &&
          value.relname !== undefined &&
          value.heapBlksRead !== undefined &&
          value.heapBlksHit !== undefined &&
          value.idxBlksRead !== undefined &&
          value.idxBlksHit !== undefined &&
          value.toastBlksRead !== undefined &&
          value.toastBlksHit !== undefined &&
          value.tidxBlksRead !== undefined &&
          value.tidxBlksHit !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatioSysIndexes {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatioSysIndexes {
        if (
          value.relid !== undefined &&
          value.indexrelid !== undefined &&
          value.schemaname !== undefined &&
          value.relname !== undefined &&
          value.indexrelname !== undefined &&
          value.idxBlksRead !== undefined &&
          value.idxBlksHit !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatioSysSequences {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatioSysSequences {
        if (
          value.relid !== undefined &&
          value.schemaname !== undefined &&
          value.relname !== undefined &&
          value.blksRead !== undefined &&
          value.blksHit !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatioSysTables {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatioSysTables {
        if (
          value.relid !== undefined &&
          value.schemaname !== undefined &&
          value.relname !== undefined &&
          value.heapBlksRead !== undefined &&
          value.heapBlksHit !== undefined &&
          value.idxBlksRead !== undefined &&
          value.idxBlksHit !== undefined &&
          value.toastBlksRead !== undefined &&
          value.toastBlksHit !== undefined &&
          value.tidxBlksRead !== undefined &&
          value.tidxBlksHit !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatioUserIndexes {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatioUserIndexes {
        if (
          value.relid !== undefined &&
          value.indexrelid !== undefined &&
          value.schemaname !== undefined &&
          value.relname !== undefined &&
          value.indexrelname !== undefined &&
          value.idxBlksRead !== undefined &&
          value.idxBlksHit !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatioUserSequences {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatioUserSequences {
        if (
          value.relid !== undefined &&
          value.schemaname !== undefined &&
          value.relname !== undefined &&
          value.blksRead !== undefined &&
          value.blksHit !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatioUserTables {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatioUserTables {
        if (
          value.relid !== undefined &&
          value.schemaname !== undefined &&
          value.relname !== undefined &&
          value.heapBlksRead !== undefined &&
          value.heapBlksHit !== undefined &&
          value.idxBlksRead !== undefined &&
          value.idxBlksHit !== undefined &&
          value.toastBlksRead !== undefined &&
          value.toastBlksHit !== undefined &&
          value.tidxBlksRead !== undefined &&
          value.tidxBlksHit !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatistic {
      export function is(value: any): value is PgCatalog.Types.PgStatistic {
        if (
          value.starelid !== undefined &&
          value.staattnum !== undefined &&
          value.stainherit !== undefined &&
          value.stanullfrac !== undefined &&
          value.stawidth !== undefined &&
          value.stadistinct !== undefined &&
          value.stakind1 !== undefined &&
          value.stakind2 !== undefined &&
          value.stakind3 !== undefined &&
          value.stakind4 !== undefined &&
          value.stakind5 !== undefined &&
          value.staop1 !== undefined &&
          value.staop2 !== undefined &&
          value.staop3 !== undefined &&
          value.staop4 !== undefined &&
          value.staop5 !== undefined &&
          value.stacoll1 !== undefined &&
          value.stacoll2 !== undefined &&
          value.stacoll3 !== undefined &&
          value.stacoll4 !== undefined &&
          value.stacoll5 !== undefined &&
          value.stanumbers1 !== undefined &&
          value.stanumbers2 !== undefined &&
          value.stanumbers3 !== undefined &&
          value.stanumbers4 !== undefined &&
          value.stanumbers5 !== undefined &&
          value.stavalues1 !== undefined &&
          value.stavalues2 !== undefined &&
          value.stavalues3 !== undefined &&
          value.stavalues4 !== undefined &&
          value.stavalues5 !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatisticExt {
      export function is(value: any): value is PgCatalog.Types.PgStatisticExt {
        if (
          value.oid !== undefined &&
          value.stxrelid !== undefined &&
          value.stxname !== undefined &&
          value.stxnamespace !== undefined &&
          value.stxowner !== undefined &&
          value.stxstattarget !== undefined &&
          value.stxkeys !== undefined &&
          value.stxkind !== undefined &&
          value.stxexprs !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatisticExtData {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgStatisticExtData {
        if (
          value.stxoid !== undefined &&
          value.stxdinherit !== undefined &&
          value.stxdndistinct !== undefined &&
          value.stxddependencies !== undefined &&
          value.stxdmcv !== undefined &&
          value.stxdexpr !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStats {
      export function is(value: any): value is PgCatalog.Types.PgStats {
        if (
          value.schemaname !== undefined &&
          value.tablename !== undefined &&
          value.attname !== undefined &&
          value.inherited !== undefined &&
          value.nullFrac !== undefined &&
          value.avgWidth !== undefined &&
          value.nDistinct !== undefined &&
          value.mostCommonVals !== undefined &&
          value.mostCommonFreqs !== undefined &&
          value.histogramBounds !== undefined &&
          value.correlation !== undefined &&
          value.mostCommonElems !== undefined &&
          value.mostCommonElemFreqs !== undefined &&
          value.elemCountHistogram !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatsExt {
      export function is(value: any): value is PgCatalog.Types.PgStatsExt {
        if (
          value.schemaname !== undefined &&
          value.tablename !== undefined &&
          value.statisticsSchemaname !== undefined &&
          value.statisticsName !== undefined &&
          value.statisticsOwner !== undefined &&
          value.attnames !== undefined &&
          value.exprs !== undefined &&
          value.kinds !== undefined &&
          value.inherited !== undefined &&
          value.nDistinct !== undefined &&
          value.dependencies !== undefined &&
          value.mostCommonVals !== undefined &&
          value.mostCommonValNulls !== undefined &&
          value.mostCommonFreqs !== undefined &&
          value.mostCommonBaseFreqs !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgStatsExtExprs {
      export function is(value: any): value is PgCatalog.Types.PgStatsExtExprs {
        if (
          value.schemaname !== undefined &&
          value.tablename !== undefined &&
          value.statisticsSchemaname !== undefined &&
          value.statisticsName !== undefined &&
          value.statisticsOwner !== undefined &&
          value.expr !== undefined &&
          value.inherited !== undefined &&
          value.nullFrac !== undefined &&
          value.avgWidth !== undefined &&
          value.nDistinct !== undefined &&
          value.mostCommonVals !== undefined &&
          value.mostCommonFreqs !== undefined &&
          value.histogramBounds !== undefined &&
          value.correlation !== undefined &&
          value.mostCommonElems !== undefined &&
          value.mostCommonElemFreqs !== undefined &&
          value.elemCountHistogram !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgSubscription {
      export function is(value: any): value is PgCatalog.Types.PgSubscription {
        if (
          value.oid !== undefined &&
          value.subdbid !== undefined &&
          value.subskiplsn !== undefined &&
          value.subname !== undefined &&
          value.subowner !== undefined &&
          value.subenabled !== undefined &&
          value.subbinary !== undefined &&
          value.substream !== undefined &&
          value.subtwophasestate !== undefined &&
          value.subdisableonerr !== undefined &&
          value.subpasswordrequired !== undefined &&
          value.subrunasowner !== undefined &&
          value.subconninfo !== undefined &&
          value.subslotname !== undefined &&
          value.subsynccommit !== undefined &&
          value.subpublications !== undefined &&
          value.suborigin !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgSubscriptionRel {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgSubscriptionRel {
        if (
          value.srsubid !== undefined &&
          value.srrelid !== undefined &&
          value.srsubstate !== undefined &&
          value.srsublsn !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgTables {
      export function is(value: any): value is PgCatalog.Types.PgTables {
        if (
          value.schemaname !== undefined &&
          value.tablename !== undefined &&
          value.tableowner !== undefined &&
          value.tablespace !== undefined &&
          value.hasindexes !== undefined &&
          value.hasrules !== undefined &&
          value.hastriggers !== undefined &&
          value.rowsecurity !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgTablespace {
      export function is(value: any): value is PgCatalog.Types.PgTablespace {
        if (
          value.oid !== undefined &&
          value.spcname !== undefined &&
          value.spcowner !== undefined &&
          value.spcacl !== undefined &&
          value.spcoptions !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgTimezoneAbbrevs {
      export function is(
        value: any,
      ): value is PgCatalog.Types.PgTimezoneAbbrevs {
        if (
          value.abbrev !== undefined &&
          value.utcOffset !== undefined &&
          value.isDst !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgTimezoneNames {
      export function is(value: any): value is PgCatalog.Types.PgTimezoneNames {
        if (
          value.name !== undefined &&
          value.abbrev !== undefined &&
          value.utcOffset !== undefined &&
          value.isDst !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgTransform {
      export function is(value: any): value is PgCatalog.Types.PgTransform {
        if (
          value.oid !== undefined &&
          value.trftype !== undefined &&
          value.trflang !== undefined &&
          value.trffromsql !== undefined &&
          value.trftosql !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgTrigger {
      export function is(value: any): value is PgCatalog.Types.PgTrigger {
        if (
          value.oid !== undefined &&
          value.tgrelid !== undefined &&
          value.tgparentid !== undefined &&
          value.tgname !== undefined &&
          value.tgfoid !== undefined &&
          value.tgtype !== undefined &&
          value.tgenabled !== undefined &&
          value.tgisinternal !== undefined &&
          value.tgconstrrelid !== undefined &&
          value.tgconstrindid !== undefined &&
          value.tgconstraint !== undefined &&
          value.tgdeferrable !== undefined &&
          value.tginitdeferred !== undefined &&
          value.tgnargs !== undefined &&
          value.tgattr !== undefined &&
          value.tgargs !== undefined &&
          value.tgqual !== undefined &&
          value.tgoldtable !== undefined &&
          value.tgnewtable !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgTsConfig {
      export function is(value: any): value is PgCatalog.Types.PgTsConfig {
        if (
          value.oid !== undefined &&
          value.cfgname !== undefined &&
          value.cfgnamespace !== undefined &&
          value.cfgowner !== undefined &&
          value.cfgparser !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgTsConfigMap {
      export function is(value: any): value is PgCatalog.Types.PgTsConfigMap {
        if (
          value.mapcfg !== undefined &&
          value.maptokentype !== undefined &&
          value.mapseqno !== undefined &&
          value.mapdict !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgTsDict {
      export function is(value: any): value is PgCatalog.Types.PgTsDict {
        if (
          value.oid !== undefined &&
          value.dictname !== undefined &&
          value.dictnamespace !== undefined &&
          value.dictowner !== undefined &&
          value.dicttemplate !== undefined &&
          value.dictinitoption !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgTsParser {
      export function is(value: any): value is PgCatalog.Types.PgTsParser {
        if (
          value.oid !== undefined &&
          value.prsname !== undefined &&
          value.prsnamespace !== undefined &&
          value.prsstart !== undefined &&
          value.prstoken !== undefined &&
          value.prsend !== undefined &&
          value.prsheadline !== undefined &&
          value.prslextype !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgTsTemplate {
      export function is(value: any): value is PgCatalog.Types.PgTsTemplate {
        if (
          value.oid !== undefined &&
          value.tmplname !== undefined &&
          value.tmplnamespace !== undefined &&
          value.tmplinit !== undefined &&
          value.tmpllexize !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgType {
      export function is(value: any): value is PgCatalog.Types.PgType {
        if (
          value.oid !== undefined &&
          value.typname !== undefined &&
          value.typnamespace !== undefined &&
          value.typowner !== undefined &&
          value.typlen !== undefined &&
          value.typbyval !== undefined &&
          value.typtype !== undefined &&
          value.typcategory !== undefined &&
          value.typispreferred !== undefined &&
          value.typisdefined !== undefined &&
          value.typdelim !== undefined &&
          value.typrelid !== undefined &&
          value.typsubscript !== undefined &&
          value.typelem !== undefined &&
          value.typarray !== undefined &&
          value.typinput !== undefined &&
          value.typoutput !== undefined &&
          value.typreceive !== undefined &&
          value.typsend !== undefined &&
          value.typmodin !== undefined &&
          value.typmodout !== undefined &&
          value.typanalyze !== undefined &&
          value.typalign !== undefined &&
          value.typstorage !== undefined &&
          value.typnotnull !== undefined &&
          value.typbasetype !== undefined &&
          value.typtypmod !== undefined &&
          value.typndims !== undefined &&
          value.typcollation !== undefined &&
          value.typdefaultbin !== undefined &&
          value.typdefault !== undefined &&
          value.typacl !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgUser {
      export function is(value: any): value is PgCatalog.Types.PgUser {
        if (
          value.usename !== undefined &&
          value.usesysid !== undefined &&
          value.usecreatedb !== undefined &&
          value.usesuper !== undefined &&
          value.userepl !== undefined &&
          value.usebypassrls !== undefined &&
          value.passwd !== undefined &&
          value.valuntil !== undefined &&
          value.useconfig !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgUserMapping {
      export function is(value: any): value is PgCatalog.Types.PgUserMapping {
        if (
          value.oid !== undefined &&
          value.umuser !== undefined &&
          value.umserver !== undefined &&
          value.umoptions !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgUserMappings {
      export function is(value: any): value is PgCatalog.Types.PgUserMappings {
        if (
          value.umid !== undefined &&
          value.srvid !== undefined &&
          value.srvname !== undefined &&
          value.umuser !== undefined &&
          value.usename !== undefined &&
          value.umoptions !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgViews {
      export function is(value: any): value is PgCatalog.Types.PgViews {
        if (
          value.schemaname !== undefined &&
          value.viewname !== undefined &&
          value.viewowner !== undefined &&
          value.definition !== undefined
        )
          return true;
        return false;
      }
    }
  }
  export namespace Procedures {}
  export namespace Tables {
    export namespace PgStatistic {}
    export namespace PgType {}
    export namespace PgForeignTable {}
    export namespace PgAuthid {}
    export namespace PgStatisticExtData {}
    export namespace PgUserMapping {}
    export namespace PgSubscription {}
    export namespace PgAttribute {}
    export namespace PgProc {}
    export namespace PgClass {}
    export namespace PgAttrdef {}
    export namespace PgConstraint {}
    export namespace PgInherits {}
    export namespace PgIndex {}
    export namespace PgOperator {}
    export namespace PgOpfamily {}
    export namespace PgOpclass {}
    export namespace PgAm {}
    export namespace PgAmop {}
    export namespace PgAmproc {}
    export namespace PgLanguage {}
    export namespace PgLargeobjectMetadata {}
    export namespace PgAggregate {}
    export namespace PgStatisticExt {}
    export namespace PgRewrite {}
    export namespace PgTrigger {}
    export namespace PgEventTrigger {}
    export namespace PgDescription {}
    export namespace PgCast {}
    export namespace PgEnum {}
    export namespace PgNamespace {}
    export namespace PgConversion {}
    export namespace PgDepend {}
    export namespace PgDatabase {}
    export namespace PgDbRoleSetting {}
    export namespace PgTablespace {}
    export namespace PgAuthMembers {}
    export namespace PgShdepend {}
    export namespace PgShdescription {}
    export namespace PgTsConfig {}
    export namespace PgTsConfigMap {}
    export namespace PgTsDict {}
    export namespace PgTsParser {}
    export namespace PgTsTemplate {}
    export namespace PgExtension {}
    export namespace PgForeignDataWrapper {}
    export namespace PgForeignServer {}
    export namespace PgPolicy {}
    export namespace PgReplicationOrigin {}
    export namespace PgDefaultAcl {}
    export namespace PgInitPrivs {}
    export namespace PgSeclabel {}
    export namespace PgShseclabel {}
    export namespace PgCollation {}
    export namespace PgParameterAcl {}
    export namespace PgPartitionedTable {}
    export namespace PgRange {}
    export namespace PgTransform {}
    export namespace PgSequence {}
    export namespace PgPublication {}
    export namespace PgPublicationNamespace {}
    export namespace PgPublicationRel {}
    export namespace PgSubscriptionRel {}
    export namespace PgLargeobject {}
  }
}
export namespace InformationSchema {
  export namespace Types {
    export namespace PgForeignDataWrappers {
      export function is(
        value: any,
      ): value is InformationSchema.Types.PgForeignDataWrappers {
        if (
          value.oid !== undefined &&
          value.fdwowner !== undefined &&
          value.fdwoptions !== undefined &&
          value.foreignDataWrapperCatalog !== undefined &&
          value.foreignDataWrapperName !== undefined &&
          value.authorizationIdentifier !== undefined &&
          value.foreignDataWrapperLanguage !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgForeignServers {
      export function is(
        value: any,
      ): value is InformationSchema.Types.PgForeignServers {
        if (
          value.oid !== undefined &&
          value.srvoptions !== undefined &&
          value.foreignServerCatalog !== undefined &&
          value.foreignServerName !== undefined &&
          value.foreignDataWrapperCatalog !== undefined &&
          value.foreignDataWrapperName !== undefined &&
          value.foreignServerType !== undefined &&
          value.foreignServerVersion !== undefined &&
          value.authorizationIdentifier !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgForeignTableColumns {
      export function is(
        value: any,
      ): value is InformationSchema.Types.PgForeignTableColumns {
        if (
          value.nspname !== undefined &&
          value.relname !== undefined &&
          value.attname !== undefined &&
          value.attfdwoptions !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgForeignTables {
      export function is(
        value: any,
      ): value is InformationSchema.Types.PgForeignTables {
        if (
          value.foreignTableCatalog !== undefined &&
          value.foreignTableSchema !== undefined &&
          value.foreignTableName !== undefined &&
          value.ftoptions !== undefined &&
          value.foreignServerCatalog !== undefined &&
          value.foreignServerName !== undefined &&
          value.authorizationIdentifier !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace PgUserMappings {
      export function is(
        value: any,
      ): value is InformationSchema.Types.PgUserMappings {
        if (
          value.oid !== undefined &&
          value.umoptions !== undefined &&
          value.umuser !== undefined &&
          value.authorizationIdentifier !== undefined &&
          value.foreignServerCatalog !== undefined &&
          value.foreignServerName !== undefined &&
          value.srvowner !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace AdministrableRoleAuthorizations {
      export function is(
        value: any,
      ): value is InformationSchema.Types.AdministrableRoleAuthorizations {
        if (
          value.grantee !== undefined &&
          value.roleName !== undefined &&
          value.isGrantable !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace ApplicableRoles {
      export function is(
        value: any,
      ): value is InformationSchema.Types.ApplicableRoles {
        if (
          value.grantee !== undefined &&
          value.roleName !== undefined &&
          value.isGrantable !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace Attributes {
      export function is(
        value: any,
      ): value is InformationSchema.Types.Attributes {
        if (
          value.udtCatalog !== undefined &&
          value.udtSchema !== undefined &&
          value.udtName !== undefined &&
          value.attributeName !== undefined &&
          value.ordinalPosition !== undefined &&
          value.attributeDefault !== undefined &&
          value.isNullable !== undefined &&
          value.dataType !== undefined &&
          value.characterMaximumLength !== undefined &&
          value.characterOctetLength !== undefined &&
          value.characterSetCatalog !== undefined &&
          value.characterSetSchema !== undefined &&
          value.characterSetName !== undefined &&
          value.collationCatalog !== undefined &&
          value.collationSchema !== undefined &&
          value.collationName !== undefined &&
          value.numericPrecision !== undefined &&
          value.numericPrecisionRadix !== undefined &&
          value.numericScale !== undefined &&
          value.datetimePrecision !== undefined &&
          value.intervalType !== undefined &&
          value.intervalPrecision !== undefined &&
          value.attributeUdtCatalog !== undefined &&
          value.attributeUdtSchema !== undefined &&
          value.attributeUdtName !== undefined &&
          value.scopeCatalog !== undefined &&
          value.scopeSchema !== undefined &&
          value.scopeName !== undefined &&
          value.maximumCardinality !== undefined &&
          value.dtdIdentifier !== undefined &&
          value.isDerivedReferenceAttribute !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace CharacterSets {
      export function is(
        value: any,
      ): value is InformationSchema.Types.CharacterSets {
        if (
          value.characterSetCatalog !== undefined &&
          value.characterSetSchema !== undefined &&
          value.characterSetName !== undefined &&
          value.characterRepertoire !== undefined &&
          value.formOfUse !== undefined &&
          value.defaultCollateCatalog !== undefined &&
          value.defaultCollateSchema !== undefined &&
          value.defaultCollateName !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace CheckConstraintRoutineUsage {
      export function is(
        value: any,
      ): value is InformationSchema.Types.CheckConstraintRoutineUsage {
        if (
          value.constraintCatalog !== undefined &&
          value.constraintSchema !== undefined &&
          value.constraintName !== undefined &&
          value.specificCatalog !== undefined &&
          value.specificSchema !== undefined &&
          value.specificName !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace CheckConstraints {
      export function is(
        value: any,
      ): value is InformationSchema.Types.CheckConstraints {
        if (
          value.constraintCatalog !== undefined &&
          value.constraintSchema !== undefined &&
          value.constraintName !== undefined &&
          value.checkClause !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace CollationCharacterSetApplicability {
      export function is(
        value: any,
      ): value is InformationSchema.Types.CollationCharacterSetApplicability {
        if (
          value.collationCatalog !== undefined &&
          value.collationSchema !== undefined &&
          value.collationName !== undefined &&
          value.characterSetCatalog !== undefined &&
          value.characterSetSchema !== undefined &&
          value.characterSetName !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace Collations {
      export function is(
        value: any,
      ): value is InformationSchema.Types.Collations {
        if (
          value.collationCatalog !== undefined &&
          value.collationSchema !== undefined &&
          value.collationName !== undefined &&
          value.padAttribute !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace ColumnColumnUsage {
      export function is(
        value: any,
      ): value is InformationSchema.Types.ColumnColumnUsage {
        if (
          value.tableCatalog !== undefined &&
          value.tableSchema !== undefined &&
          value.tableName !== undefined &&
          value.columnName !== undefined &&
          value.dependentColumn !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace ColumnDomainUsage {
      export function is(
        value: any,
      ): value is InformationSchema.Types.ColumnDomainUsage {
        if (
          value.domainCatalog !== undefined &&
          value.domainSchema !== undefined &&
          value.domainName !== undefined &&
          value.tableCatalog !== undefined &&
          value.tableSchema !== undefined &&
          value.tableName !== undefined &&
          value.columnName !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace ColumnOptions {
      export function is(
        value: any,
      ): value is InformationSchema.Types.ColumnOptions {
        if (
          value.tableCatalog !== undefined &&
          value.tableSchema !== undefined &&
          value.tableName !== undefined &&
          value.columnName !== undefined &&
          value.optionName !== undefined &&
          value.optionValue !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace ColumnPrivileges {
      export function is(
        value: any,
      ): value is InformationSchema.Types.ColumnPrivileges {
        if (
          value.grantor !== undefined &&
          value.grantee !== undefined &&
          value.tableCatalog !== undefined &&
          value.tableSchema !== undefined &&
          value.tableName !== undefined &&
          value.columnName !== undefined &&
          value.privilegeType !== undefined &&
          value.isGrantable !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace ColumnUdtUsage {
      export function is(
        value: any,
      ): value is InformationSchema.Types.ColumnUdtUsage {
        if (
          value.udtCatalog !== undefined &&
          value.udtSchema !== undefined &&
          value.udtName !== undefined &&
          value.tableCatalog !== undefined &&
          value.tableSchema !== undefined &&
          value.tableName !== undefined &&
          value.columnName !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace Columns {
      export function is(value: any): value is InformationSchema.Types.Columns {
        if (
          value.tableCatalog !== undefined &&
          value.tableSchema !== undefined &&
          value.tableName !== undefined &&
          value.columnName !== undefined &&
          value.ordinalPosition !== undefined &&
          value.columnDefault !== undefined &&
          value.isNullable !== undefined &&
          value.dataType !== undefined &&
          value.characterMaximumLength !== undefined &&
          value.characterOctetLength !== undefined &&
          value.numericPrecision !== undefined &&
          value.numericPrecisionRadix !== undefined &&
          value.numericScale !== undefined &&
          value.datetimePrecision !== undefined &&
          value.intervalType !== undefined &&
          value.intervalPrecision !== undefined &&
          value.characterSetCatalog !== undefined &&
          value.characterSetSchema !== undefined &&
          value.characterSetName !== undefined &&
          value.collationCatalog !== undefined &&
          value.collationSchema !== undefined &&
          value.collationName !== undefined &&
          value.domainCatalog !== undefined &&
          value.domainSchema !== undefined &&
          value.domainName !== undefined &&
          value.udtCatalog !== undefined &&
          value.udtSchema !== undefined &&
          value.udtName !== undefined &&
          value.scopeCatalog !== undefined &&
          value.scopeSchema !== undefined &&
          value.scopeName !== undefined &&
          value.maximumCardinality !== undefined &&
          value.dtdIdentifier !== undefined &&
          value.isSelfReferencing !== undefined &&
          value.isIdentity !== undefined &&
          value.identityGeneration !== undefined &&
          value.identityStart !== undefined &&
          value.identityIncrement !== undefined &&
          value.identityMaximum !== undefined &&
          value.identityMinimum !== undefined &&
          value.identityCycle !== undefined &&
          value.isGenerated !== undefined &&
          value.generationExpression !== undefined &&
          value.isUpdatable !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace ConstraintColumnUsage {
      export function is(
        value: any,
      ): value is InformationSchema.Types.ConstraintColumnUsage {
        if (
          value.tableCatalog !== undefined &&
          value.tableSchema !== undefined &&
          value.tableName !== undefined &&
          value.columnName !== undefined &&
          value.constraintCatalog !== undefined &&
          value.constraintSchema !== undefined &&
          value.constraintName !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace ConstraintTableUsage {
      export function is(
        value: any,
      ): value is InformationSchema.Types.ConstraintTableUsage {
        if (
          value.tableCatalog !== undefined &&
          value.tableSchema !== undefined &&
          value.tableName !== undefined &&
          value.constraintCatalog !== undefined &&
          value.constraintSchema !== undefined &&
          value.constraintName !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace DataTypePrivileges {
      export function is(
        value: any,
      ): value is InformationSchema.Types.DataTypePrivileges {
        if (
          value.objectCatalog !== undefined &&
          value.objectSchema !== undefined &&
          value.objectName !== undefined &&
          value.objectType !== undefined &&
          value.dtdIdentifier !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace DomainConstraints {
      export function is(
        value: any,
      ): value is InformationSchema.Types.DomainConstraints {
        if (
          value.constraintCatalog !== undefined &&
          value.constraintSchema !== undefined &&
          value.constraintName !== undefined &&
          value.domainCatalog !== undefined &&
          value.domainSchema !== undefined &&
          value.domainName !== undefined &&
          value.isDeferrable !== undefined &&
          value.initiallyDeferred !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace DomainUdtUsage {
      export function is(
        value: any,
      ): value is InformationSchema.Types.DomainUdtUsage {
        if (
          value.udtCatalog !== undefined &&
          value.udtSchema !== undefined &&
          value.udtName !== undefined &&
          value.domainCatalog !== undefined &&
          value.domainSchema !== undefined &&
          value.domainName !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace Domains {
      export function is(value: any): value is InformationSchema.Types.Domains {
        if (
          value.domainCatalog !== undefined &&
          value.domainSchema !== undefined &&
          value.domainName !== undefined &&
          value.dataType !== undefined &&
          value.characterMaximumLength !== undefined &&
          value.characterOctetLength !== undefined &&
          value.characterSetCatalog !== undefined &&
          value.characterSetSchema !== undefined &&
          value.characterSetName !== undefined &&
          value.collationCatalog !== undefined &&
          value.collationSchema !== undefined &&
          value.collationName !== undefined &&
          value.numericPrecision !== undefined &&
          value.numericPrecisionRadix !== undefined &&
          value.numericScale !== undefined &&
          value.datetimePrecision !== undefined &&
          value.intervalType !== undefined &&
          value.intervalPrecision !== undefined &&
          value.domainDefault !== undefined &&
          value.udtCatalog !== undefined &&
          value.udtSchema !== undefined &&
          value.udtName !== undefined &&
          value.scopeCatalog !== undefined &&
          value.scopeSchema !== undefined &&
          value.scopeName !== undefined &&
          value.maximumCardinality !== undefined &&
          value.dtdIdentifier !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace ElementTypes {
      export function is(
        value: any,
      ): value is InformationSchema.Types.ElementTypes {
        if (
          value.objectCatalog !== undefined &&
          value.objectSchema !== undefined &&
          value.objectName !== undefined &&
          value.objectType !== undefined &&
          value.collectionTypeIdentifier !== undefined &&
          value.dataType !== undefined &&
          value.characterMaximumLength !== undefined &&
          value.characterOctetLength !== undefined &&
          value.characterSetCatalog !== undefined &&
          value.characterSetSchema !== undefined &&
          value.characterSetName !== undefined &&
          value.collationCatalog !== undefined &&
          value.collationSchema !== undefined &&
          value.collationName !== undefined &&
          value.numericPrecision !== undefined &&
          value.numericPrecisionRadix !== undefined &&
          value.numericScale !== undefined &&
          value.datetimePrecision !== undefined &&
          value.intervalType !== undefined &&
          value.intervalPrecision !== undefined &&
          value.domainDefault !== undefined &&
          value.udtCatalog !== undefined &&
          value.udtSchema !== undefined &&
          value.udtName !== undefined &&
          value.scopeCatalog !== undefined &&
          value.scopeSchema !== undefined &&
          value.scopeName !== undefined &&
          value.maximumCardinality !== undefined &&
          value.dtdIdentifier !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace EnabledRoles {
      export function is(
        value: any,
      ): value is InformationSchema.Types.EnabledRoles {
        if (value.roleName !== undefined) return true;
        return false;
      }
    }
    export namespace ForeignDataWrapperOptions {
      export function is(
        value: any,
      ): value is InformationSchema.Types.ForeignDataWrapperOptions {
        if (
          value.foreignDataWrapperCatalog !== undefined &&
          value.foreignDataWrapperName !== undefined &&
          value.optionName !== undefined &&
          value.optionValue !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace ForeignDataWrappers {
      export function is(
        value: any,
      ): value is InformationSchema.Types.ForeignDataWrappers {
        if (
          value.foreignDataWrapperCatalog !== undefined &&
          value.foreignDataWrapperName !== undefined &&
          value.authorizationIdentifier !== undefined &&
          value.libraryName !== undefined &&
          value.foreignDataWrapperLanguage !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace ForeignServerOptions {
      export function is(
        value: any,
      ): value is InformationSchema.Types.ForeignServerOptions {
        if (
          value.foreignServerCatalog !== undefined &&
          value.foreignServerName !== undefined &&
          value.optionName !== undefined &&
          value.optionValue !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace ForeignServers {
      export function is(
        value: any,
      ): value is InformationSchema.Types.ForeignServers {
        if (
          value.foreignServerCatalog !== undefined &&
          value.foreignServerName !== undefined &&
          value.foreignDataWrapperCatalog !== undefined &&
          value.foreignDataWrapperName !== undefined &&
          value.foreignServerType !== undefined &&
          value.foreignServerVersion !== undefined &&
          value.authorizationIdentifier !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace ForeignTableOptions {
      export function is(
        value: any,
      ): value is InformationSchema.Types.ForeignTableOptions {
        if (
          value.foreignTableCatalog !== undefined &&
          value.foreignTableSchema !== undefined &&
          value.foreignTableName !== undefined &&
          value.optionName !== undefined &&
          value.optionValue !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace ForeignTables {
      export function is(
        value: any,
      ): value is InformationSchema.Types.ForeignTables {
        if (
          value.foreignTableCatalog !== undefined &&
          value.foreignTableSchema !== undefined &&
          value.foreignTableName !== undefined &&
          value.foreignServerCatalog !== undefined &&
          value.foreignServerName !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace InformationSchemaCatalogName {
      export function is(
        value: any,
      ): value is InformationSchema.Types.InformationSchemaCatalogName {
        if (value.catalogName !== undefined) return true;
        return false;
      }
    }
    export namespace KeyColumnUsage {
      export function is(
        value: any,
      ): value is InformationSchema.Types.KeyColumnUsage {
        if (
          value.constraintCatalog !== undefined &&
          value.constraintSchema !== undefined &&
          value.constraintName !== undefined &&
          value.tableCatalog !== undefined &&
          value.tableSchema !== undefined &&
          value.tableName !== undefined &&
          value.columnName !== undefined &&
          value.ordinalPosition !== undefined &&
          value.positionInUniqueConstraint !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace Parameters {
      export function is(
        value: any,
      ): value is InformationSchema.Types.Parameters {
        if (
          value.specificCatalog !== undefined &&
          value.specificSchema !== undefined &&
          value.specificName !== undefined &&
          value.ordinalPosition !== undefined &&
          value.parameterMode !== undefined &&
          value.isResult !== undefined &&
          value.asLocator !== undefined &&
          value.parameterName !== undefined &&
          value.dataType !== undefined &&
          value.characterMaximumLength !== undefined &&
          value.characterOctetLength !== undefined &&
          value.characterSetCatalog !== undefined &&
          value.characterSetSchema !== undefined &&
          value.characterSetName !== undefined &&
          value.collationCatalog !== undefined &&
          value.collationSchema !== undefined &&
          value.collationName !== undefined &&
          value.numericPrecision !== undefined &&
          value.numericPrecisionRadix !== undefined &&
          value.numericScale !== undefined &&
          value.datetimePrecision !== undefined &&
          value.intervalType !== undefined &&
          value.intervalPrecision !== undefined &&
          value.udtCatalog !== undefined &&
          value.udtSchema !== undefined &&
          value.udtName !== undefined &&
          value.scopeCatalog !== undefined &&
          value.scopeSchema !== undefined &&
          value.scopeName !== undefined &&
          value.maximumCardinality !== undefined &&
          value.dtdIdentifier !== undefined &&
          value.parameterDefault !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace ReferentialConstraints {
      export function is(
        value: any,
      ): value is InformationSchema.Types.ReferentialConstraints {
        if (
          value.constraintCatalog !== undefined &&
          value.constraintSchema !== undefined &&
          value.constraintName !== undefined &&
          value.uniqueConstraintCatalog !== undefined &&
          value.uniqueConstraintSchema !== undefined &&
          value.uniqueConstraintName !== undefined &&
          value.matchOption !== undefined &&
          value.updateRule !== undefined &&
          value.deleteRule !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace RoleColumnGrants {
      export function is(
        value: any,
      ): value is InformationSchema.Types.RoleColumnGrants {
        if (
          value.grantor !== undefined &&
          value.grantee !== undefined &&
          value.tableCatalog !== undefined &&
          value.tableSchema !== undefined &&
          value.tableName !== undefined &&
          value.columnName !== undefined &&
          value.privilegeType !== undefined &&
          value.isGrantable !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace RoleRoutineGrants {
      export function is(
        value: any,
      ): value is InformationSchema.Types.RoleRoutineGrants {
        if (
          value.grantor !== undefined &&
          value.grantee !== undefined &&
          value.specificCatalog !== undefined &&
          value.specificSchema !== undefined &&
          value.specificName !== undefined &&
          value.routineCatalog !== undefined &&
          value.routineSchema !== undefined &&
          value.routineName !== undefined &&
          value.privilegeType !== undefined &&
          value.isGrantable !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace RoleTableGrants {
      export function is(
        value: any,
      ): value is InformationSchema.Types.RoleTableGrants {
        if (
          value.grantor !== undefined &&
          value.grantee !== undefined &&
          value.tableCatalog !== undefined &&
          value.tableSchema !== undefined &&
          value.tableName !== undefined &&
          value.privilegeType !== undefined &&
          value.isGrantable !== undefined &&
          value.withHierarchy !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace RoleUdtGrants {
      export function is(
        value: any,
      ): value is InformationSchema.Types.RoleUdtGrants {
        if (
          value.grantor !== undefined &&
          value.grantee !== undefined &&
          value.udtCatalog !== undefined &&
          value.udtSchema !== undefined &&
          value.udtName !== undefined &&
          value.privilegeType !== undefined &&
          value.isGrantable !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace RoleUsageGrants {
      export function is(
        value: any,
      ): value is InformationSchema.Types.RoleUsageGrants {
        if (
          value.grantor !== undefined &&
          value.grantee !== undefined &&
          value.objectCatalog !== undefined &&
          value.objectSchema !== undefined &&
          value.objectName !== undefined &&
          value.objectType !== undefined &&
          value.privilegeType !== undefined &&
          value.isGrantable !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace RoutineColumnUsage {
      export function is(
        value: any,
      ): value is InformationSchema.Types.RoutineColumnUsage {
        if (
          value.specificCatalog !== undefined &&
          value.specificSchema !== undefined &&
          value.specificName !== undefined &&
          value.routineCatalog !== undefined &&
          value.routineSchema !== undefined &&
          value.routineName !== undefined &&
          value.tableCatalog !== undefined &&
          value.tableSchema !== undefined &&
          value.tableName !== undefined &&
          value.columnName !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace RoutinePrivileges {
      export function is(
        value: any,
      ): value is InformationSchema.Types.RoutinePrivileges {
        if (
          value.grantor !== undefined &&
          value.grantee !== undefined &&
          value.specificCatalog !== undefined &&
          value.specificSchema !== undefined &&
          value.specificName !== undefined &&
          value.routineCatalog !== undefined &&
          value.routineSchema !== undefined &&
          value.routineName !== undefined &&
          value.privilegeType !== undefined &&
          value.isGrantable !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace RoutineRoutineUsage {
      export function is(
        value: any,
      ): value is InformationSchema.Types.RoutineRoutineUsage {
        if (
          value.specificCatalog !== undefined &&
          value.specificSchema !== undefined &&
          value.specificName !== undefined &&
          value.routineCatalog !== undefined &&
          value.routineSchema !== undefined &&
          value.routineName !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace RoutineSequenceUsage {
      export function is(
        value: any,
      ): value is InformationSchema.Types.RoutineSequenceUsage {
        if (
          value.specificCatalog !== undefined &&
          value.specificSchema !== undefined &&
          value.specificName !== undefined &&
          value.routineCatalog !== undefined &&
          value.routineSchema !== undefined &&
          value.routineName !== undefined &&
          value.sequenceCatalog !== undefined &&
          value.sequenceSchema !== undefined &&
          value.sequenceName !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace RoutineTableUsage {
      export function is(
        value: any,
      ): value is InformationSchema.Types.RoutineTableUsage {
        if (
          value.specificCatalog !== undefined &&
          value.specificSchema !== undefined &&
          value.specificName !== undefined &&
          value.routineCatalog !== undefined &&
          value.routineSchema !== undefined &&
          value.routineName !== undefined &&
          value.tableCatalog !== undefined &&
          value.tableSchema !== undefined &&
          value.tableName !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace Routines {
      export function is(
        value: any,
      ): value is InformationSchema.Types.Routines {
        if (
          value.specificCatalog !== undefined &&
          value.specificSchema !== undefined &&
          value.specificName !== undefined &&
          value.routineCatalog !== undefined &&
          value.routineSchema !== undefined &&
          value.routineName !== undefined &&
          value.routineType !== undefined &&
          value.moduleCatalog !== undefined &&
          value.moduleSchema !== undefined &&
          value.moduleName !== undefined &&
          value.udtCatalog !== undefined &&
          value.udtSchema !== undefined &&
          value.udtName !== undefined &&
          value.dataType !== undefined &&
          value.characterMaximumLength !== undefined &&
          value.characterOctetLength !== undefined &&
          value.characterSetCatalog !== undefined &&
          value.characterSetSchema !== undefined &&
          value.characterSetName !== undefined &&
          value.collationCatalog !== undefined &&
          value.collationSchema !== undefined &&
          value.collationName !== undefined &&
          value.numericPrecision !== undefined &&
          value.numericPrecisionRadix !== undefined &&
          value.numericScale !== undefined &&
          value.datetimePrecision !== undefined &&
          value.intervalType !== undefined &&
          value.intervalPrecision !== undefined &&
          value.typeUdtCatalog !== undefined &&
          value.typeUdtSchema !== undefined &&
          value.typeUdtName !== undefined &&
          value.scopeCatalog !== undefined &&
          value.scopeSchema !== undefined &&
          value.scopeName !== undefined &&
          value.maximumCardinality !== undefined &&
          value.dtdIdentifier !== undefined &&
          value.routineBody !== undefined &&
          value.routineDefinition !== undefined &&
          value.externalName !== undefined &&
          value.externalLanguage !== undefined &&
          value.parameterStyle !== undefined &&
          value.isDeterministic !== undefined &&
          value.sqlDataAccess !== undefined &&
          value.isNullCall !== undefined &&
          value.sqlPath !== undefined &&
          value.schemaLevelRoutine !== undefined &&
          value.maxDynamicResultSets !== undefined &&
          value.isUserDefinedCast !== undefined &&
          value.isImplicitlyInvocable !== undefined &&
          value.securityType !== undefined &&
          value.toSqlSpecificCatalog !== undefined &&
          value.toSqlSpecificSchema !== undefined &&
          value.toSqlSpecificName !== undefined &&
          value.asLocator !== undefined &&
          value.created !== undefined &&
          value.lastAltered !== undefined &&
          value.newSavepointLevel !== undefined &&
          value.isUdtDependent !== undefined &&
          value.resultCastFromDataType !== undefined &&
          value.resultCastAsLocator !== undefined &&
          value.resultCastCharMaxLength !== undefined &&
          value.resultCastCharOctetLength !== undefined &&
          value.resultCastCharSetCatalog !== undefined &&
          value.resultCastCharSetSchema !== undefined &&
          value.resultCastCharSetName !== undefined &&
          value.resultCastCollationCatalog !== undefined &&
          value.resultCastCollationSchema !== undefined &&
          value.resultCastCollationName !== undefined &&
          value.resultCastNumericPrecision !== undefined &&
          value.resultCastNumericPrecisionRadix !== undefined &&
          value.resultCastNumericScale !== undefined &&
          value.resultCastDatetimePrecision !== undefined &&
          value.resultCastIntervalType !== undefined &&
          value.resultCastIntervalPrecision !== undefined &&
          value.resultCastTypeUdtCatalog !== undefined &&
          value.resultCastTypeUdtSchema !== undefined &&
          value.resultCastTypeUdtName !== undefined &&
          value.resultCastScopeCatalog !== undefined &&
          value.resultCastScopeSchema !== undefined &&
          value.resultCastScopeName !== undefined &&
          value.resultCastMaximumCardinality !== undefined &&
          value.resultCastDtdIdentifier !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace Schemata {
      export function is(
        value: any,
      ): value is InformationSchema.Types.Schemata {
        if (
          value.catalogName !== undefined &&
          value.schemaName !== undefined &&
          value.schemaOwner !== undefined &&
          value.defaultCharacterSetCatalog !== undefined &&
          value.defaultCharacterSetSchema !== undefined &&
          value.defaultCharacterSetName !== undefined &&
          value.sqlPath !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace Sequences {
      export function is(
        value: any,
      ): value is InformationSchema.Types.Sequences {
        if (
          value.sequenceCatalog !== undefined &&
          value.sequenceSchema !== undefined &&
          value.sequenceName !== undefined &&
          value.dataType !== undefined &&
          value.numericPrecision !== undefined &&
          value.numericPrecisionRadix !== undefined &&
          value.numericScale !== undefined &&
          value.startValue !== undefined &&
          value.minimumValue !== undefined &&
          value.maximumValue !== undefined &&
          value.increment !== undefined &&
          value.cycleOption !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace SqlFeatures {
      export function is(
        value: any,
      ): value is InformationSchema.Types.SqlFeatures {
        if (
          value.featureId !== undefined &&
          value.featureName !== undefined &&
          value.subFeatureId !== undefined &&
          value.subFeatureName !== undefined &&
          value.isSupported !== undefined &&
          value.isVerifiedBy !== undefined &&
          value.comments !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace SqlImplementationInfo {
      export function is(
        value: any,
      ): value is InformationSchema.Types.SqlImplementationInfo {
        if (
          value.implementationInfoId !== undefined &&
          value.implementationInfoName !== undefined &&
          value.integerValue !== undefined &&
          value.characterValue !== undefined &&
          value.comments !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace SqlParts {
      export function is(
        value: any,
      ): value is InformationSchema.Types.SqlParts {
        if (
          value.featureId !== undefined &&
          value.featureName !== undefined &&
          value.isSupported !== undefined &&
          value.isVerifiedBy !== undefined &&
          value.comments !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace SqlSizing {
      export function is(
        value: any,
      ): value is InformationSchema.Types.SqlSizing {
        if (
          value.sizingId !== undefined &&
          value.sizingName !== undefined &&
          value.supportedValue !== undefined &&
          value.comments !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace TableConstraints {
      export function is(
        value: any,
      ): value is InformationSchema.Types.TableConstraints {
        if (
          value.constraintCatalog !== undefined &&
          value.constraintSchema !== undefined &&
          value.constraintName !== undefined &&
          value.tableCatalog !== undefined &&
          value.tableSchema !== undefined &&
          value.tableName !== undefined &&
          value.constraintType !== undefined &&
          value.isDeferrable !== undefined &&
          value.initiallyDeferred !== undefined &&
          value.enforced !== undefined &&
          value.nullsDistinct !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace TablePrivileges {
      export function is(
        value: any,
      ): value is InformationSchema.Types.TablePrivileges {
        if (
          value.grantor !== undefined &&
          value.grantee !== undefined &&
          value.tableCatalog !== undefined &&
          value.tableSchema !== undefined &&
          value.tableName !== undefined &&
          value.privilegeType !== undefined &&
          value.isGrantable !== undefined &&
          value.withHierarchy !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace Tables {
      export function is(value: any): value is InformationSchema.Types.Tables {
        if (
          value.tableCatalog !== undefined &&
          value.tableSchema !== undefined &&
          value.tableName !== undefined &&
          value.tableType !== undefined &&
          value.selfReferencingColumnName !== undefined &&
          value.referenceGeneration !== undefined &&
          value.userDefinedTypeCatalog !== undefined &&
          value.userDefinedTypeSchema !== undefined &&
          value.userDefinedTypeName !== undefined &&
          value.isInsertableInto !== undefined &&
          value.isTyped !== undefined &&
          value.commitAction !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace Transforms {
      export function is(
        value: any,
      ): value is InformationSchema.Types.Transforms {
        if (
          value.udtCatalog !== undefined &&
          value.udtSchema !== undefined &&
          value.udtName !== undefined &&
          value.specificCatalog !== undefined &&
          value.specificSchema !== undefined &&
          value.specificName !== undefined &&
          value.groupName !== undefined &&
          value.transformType !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace TriggeredUpdateColumns {
      export function is(
        value: any,
      ): value is InformationSchema.Types.TriggeredUpdateColumns {
        if (
          value.triggerCatalog !== undefined &&
          value.triggerSchema !== undefined &&
          value.triggerName !== undefined &&
          value.eventObjectCatalog !== undefined &&
          value.eventObjectSchema !== undefined &&
          value.eventObjectTable !== undefined &&
          value.eventObjectColumn !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace Triggers {
      export function is(
        value: any,
      ): value is InformationSchema.Types.Triggers {
        if (
          value.triggerCatalog !== undefined &&
          value.triggerSchema !== undefined &&
          value.triggerName !== undefined &&
          value.eventManipulation !== undefined &&
          value.eventObjectCatalog !== undefined &&
          value.eventObjectSchema !== undefined &&
          value.eventObjectTable !== undefined &&
          value.actionOrder !== undefined &&
          value.actionCondition !== undefined &&
          value.actionStatement !== undefined &&
          value.actionOrientation !== undefined &&
          value.actionTiming !== undefined &&
          value.actionReferenceOldTable !== undefined &&
          value.actionReferenceNewTable !== undefined &&
          value.actionReferenceOldRow !== undefined &&
          value.actionReferenceNewRow !== undefined &&
          value.created !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace UdtPrivileges {
      export function is(
        value: any,
      ): value is InformationSchema.Types.UdtPrivileges {
        if (
          value.grantor !== undefined &&
          value.grantee !== undefined &&
          value.udtCatalog !== undefined &&
          value.udtSchema !== undefined &&
          value.udtName !== undefined &&
          value.privilegeType !== undefined &&
          value.isGrantable !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace UsagePrivileges {
      export function is(
        value: any,
      ): value is InformationSchema.Types.UsagePrivileges {
        if (
          value.grantor !== undefined &&
          value.grantee !== undefined &&
          value.objectCatalog !== undefined &&
          value.objectSchema !== undefined &&
          value.objectName !== undefined &&
          value.objectType !== undefined &&
          value.privilegeType !== undefined &&
          value.isGrantable !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace UserDefinedTypes {
      export function is(
        value: any,
      ): value is InformationSchema.Types.UserDefinedTypes {
        if (
          value.userDefinedTypeCatalog !== undefined &&
          value.userDefinedTypeSchema !== undefined &&
          value.userDefinedTypeName !== undefined &&
          value.userDefinedTypeCategory !== undefined &&
          value.isInstantiable !== undefined &&
          value.isFinal !== undefined &&
          value.orderingForm !== undefined &&
          value.orderingCategory !== undefined &&
          value.orderingRoutineCatalog !== undefined &&
          value.orderingRoutineSchema !== undefined &&
          value.orderingRoutineName !== undefined &&
          value.referenceType !== undefined &&
          value.dataType !== undefined &&
          value.characterMaximumLength !== undefined &&
          value.characterOctetLength !== undefined &&
          value.characterSetCatalog !== undefined &&
          value.characterSetSchema !== undefined &&
          value.characterSetName !== undefined &&
          value.collationCatalog !== undefined &&
          value.collationSchema !== undefined &&
          value.collationName !== undefined &&
          value.numericPrecision !== undefined &&
          value.numericPrecisionRadix !== undefined &&
          value.numericScale !== undefined &&
          value.datetimePrecision !== undefined &&
          value.intervalType !== undefined &&
          value.intervalPrecision !== undefined &&
          value.sourceDtdIdentifier !== undefined &&
          value.refDtdIdentifier !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace UserMappingOptions {
      export function is(
        value: any,
      ): value is InformationSchema.Types.UserMappingOptions {
        if (
          value.authorizationIdentifier !== undefined &&
          value.foreignServerCatalog !== undefined &&
          value.foreignServerName !== undefined &&
          value.optionName !== undefined &&
          value.optionValue !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace UserMappings {
      export function is(
        value: any,
      ): value is InformationSchema.Types.UserMappings {
        if (
          value.authorizationIdentifier !== undefined &&
          value.foreignServerCatalog !== undefined &&
          value.foreignServerName !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace ViewColumnUsage {
      export function is(
        value: any,
      ): value is InformationSchema.Types.ViewColumnUsage {
        if (
          value.viewCatalog !== undefined &&
          value.viewSchema !== undefined &&
          value.viewName !== undefined &&
          value.tableCatalog !== undefined &&
          value.tableSchema !== undefined &&
          value.tableName !== undefined &&
          value.columnName !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace ViewRoutineUsage {
      export function is(
        value: any,
      ): value is InformationSchema.Types.ViewRoutineUsage {
        if (
          value.tableCatalog !== undefined &&
          value.tableSchema !== undefined &&
          value.tableName !== undefined &&
          value.specificCatalog !== undefined &&
          value.specificSchema !== undefined &&
          value.specificName !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace ViewTableUsage {
      export function is(
        value: any,
      ): value is InformationSchema.Types.ViewTableUsage {
        if (
          value.viewCatalog !== undefined &&
          value.viewSchema !== undefined &&
          value.viewName !== undefined &&
          value.tableCatalog !== undefined &&
          value.tableSchema !== undefined &&
          value.tableName !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace Views {
      export function is(value: any): value is InformationSchema.Types.Views {
        if (
          value.tableCatalog !== undefined &&
          value.tableSchema !== undefined &&
          value.tableName !== undefined &&
          value.viewDefinition !== undefined &&
          value.checkOption !== undefined &&
          value.isUpdatable !== undefined &&
          value.isInsertableInto !== undefined &&
          value.isTriggerUpdatable !== undefined &&
          value.isTriggerDeletable !== undefined &&
          value.isTriggerInsertableInto !== undefined
        )
          return true;
        return false;
      }
    }
  }
  export namespace Procedures {}
  export namespace Tables {
    export namespace SqlFeatures {}
    export namespace SqlImplementationInfo {}
    export namespace SqlParts {}
    export namespace SqlSizing {}
  }
}
export namespace Public {
  export namespace Types {
    export namespace Checklist {
      export function is(value: any): value is Public.Types.Checklist {
        if (
          value.id !== undefined &&
          value.name !== undefined &&
          value.createdAt !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace ChecklistItem {
      export function is(value: any): value is Public.Types.ChecklistItem {
        if (
          value.id !== undefined &&
          value.checklistId !== undefined &&
          value.title !== undefined &&
          value.checked !== undefined &&
          value.createdAt !== undefined
        )
          return true;
        return false;
      }
    }
  }
  export namespace Procedures {}
  export namespace Tables {
    export namespace Checklist {}
    export namespace ChecklistItem {}
  }
}

import {
  Context,
  initializeContext,
  PostgresDatabase,
} from "@embracesql/postgres";
import postgres from "postgres";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ArgumentToPostgres = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ArgumentFromPostgres = any;
type Typecast = (x: ArgumentToPostgres) => ArgumentFromPostgres;
export interface PostgresTypecasts {
  [1034]: Typecast;
  ["PgCatalog.Types.AclitemArray"]: Typecast;
  [1561]: Typecast;
  ["PgCatalog.Types.BitArray"]: Typecast;
  [1000]: Typecast;
  ["PgCatalog.Types.BoolArray"]: Typecast;
  [1020]: Typecast;
  ["PgCatalog.Types.BoxArray"]: Typecast;
  [1014]: Typecast;
  ["PgCatalog.Types.BpcharArray"]: Typecast;
  [1001]: Typecast;
  ["PgCatalog.Types.ByteaArray"]: Typecast;
  [1002]: Typecast;
  ["PgCatalog.Types.CharArray"]: Typecast;
  [1012]: Typecast;
  ["PgCatalog.Types.CidArray"]: Typecast;
  [651]: Typecast;
  ["PgCatalog.Types.CidrArray"]: Typecast;
  [719]: Typecast;
  ["PgCatalog.Types.CircleArray"]: Typecast;
  [1263]: Typecast;
  ["PgCatalog.Types.CstringArray"]: Typecast;
  [1182]: Typecast;
  ["PgCatalog.Types.DateArray"]: Typecast;
  [6155]: Typecast;
  ["PgCatalog.Types.DatemultirangeArray"]: Typecast;
  [3913]: Typecast;
  ["PgCatalog.Types.DaterangeArray"]: Typecast;
  [1021]: Typecast;
  ["PgCatalog.Types.Float4Array"]: Typecast;
  [1022]: Typecast;
  ["PgCatalog.Types.Float8Array"]: Typecast;
  [3644]: Typecast;
  ["PgCatalog.Types.GtsvectorArray"]: Typecast;
  [1041]: Typecast;
  ["PgCatalog.Types.InetArray"]: Typecast;
  [1005]: Typecast;
  ["PgCatalog.Types.Int2Array"]: Typecast;
  [1006]: Typecast;
  ["PgCatalog.Types.Int2vectorArray"]: Typecast;
  [1007]: Typecast;
  ["PgCatalog.Types.Int4Array"]: Typecast;
  [6150]: Typecast;
  ["PgCatalog.Types.Int4multirangeArray"]: Typecast;
  [3905]: Typecast;
  ["PgCatalog.Types.Int4rangeArray"]: Typecast;
  [1016]: Typecast;
  ["PgCatalog.Types.Int8Array"]: Typecast;
  [6157]: Typecast;
  ["PgCatalog.Types.Int8multirangeArray"]: Typecast;
  [3927]: Typecast;
  ["PgCatalog.Types.Int8rangeArray"]: Typecast;
  [1187]: Typecast;
  ["PgCatalog.Types.IntervalArray"]: Typecast;
  [199]: Typecast;
  ["PgCatalog.Types.JsonArray"]: Typecast;
  [3807]: Typecast;
  ["PgCatalog.Types.JsonbArray"]: Typecast;
  [4073]: Typecast;
  ["PgCatalog.Types.JsonpathArray"]: Typecast;
  [629]: Typecast;
  ["PgCatalog.Types.LineArray"]: Typecast;
  [1018]: Typecast;
  ["PgCatalog.Types.LsegArray"]: Typecast;
  [1040]: Typecast;
  ["PgCatalog.Types.MacaddrArray"]: Typecast;
  [775]: Typecast;
  ["PgCatalog.Types.Macaddr8Array"]: Typecast;
  [791]: Typecast;
  ["PgCatalog.Types.MoneyArray"]: Typecast;
  [1003]: Typecast;
  ["PgCatalog.Types.NameArray"]: Typecast;
  [1231]: Typecast;
  ["PgCatalog.Types.NumericArray"]: Typecast;
  [6151]: Typecast;
  ["PgCatalog.Types.NummultirangeArray"]: Typecast;
  [3907]: Typecast;
  ["PgCatalog.Types.NumrangeArray"]: Typecast;
  [1028]: Typecast;
  ["PgCatalog.Types.OidArray"]: Typecast;
  [1013]: Typecast;
  ["PgCatalog.Types.OidvectorArray"]: Typecast;
  [1019]: Typecast;
  ["PgCatalog.Types.PathArray"]: Typecast;
  [10026]: Typecast;
  ["PgCatalog.Types.PgAggregateArray"]: Typecast;
  [10014]: Typecast;
  ["PgCatalog.Types.PgAmArray"]: Typecast;
  [10016]: Typecast;
  ["PgCatalog.Types.PgAmopArray"]: Typecast;
  [10018]: Typecast;
  ["PgCatalog.Types.PgAmprocArray"]: Typecast;
  [10000]: Typecast;
  ["PgCatalog.Types.PgAttrdefArray"]: Typecast;
  [270]: Typecast;
  ["PgCatalog.Types.PgAttributeArray"]: Typecast;
  [10058]: Typecast;
  ["PgCatalog.Types.PgAuthMembersArray"]: Typecast;
  [10057]: Typecast;
  ["PgCatalog.Types.PgAuthidArray"]: Typecast;
  [12086]: Typecast;
  ["PgCatalog.Types.PgAvailableExtensionVersionsArray"]: Typecast;
  [12082]: Typecast;
  ["PgCatalog.Types.PgAvailableExtensionsArray"]: Typecast;
  [12139]: Typecast;
  ["PgCatalog.Types.PgBackendMemoryContextsArray"]: Typecast;
  [10042]: Typecast;
  ["PgCatalog.Types.PgCastArray"]: Typecast;
  [273]: Typecast;
  ["PgCatalog.Types.PgClassArray"]: Typecast;
  [10094]: Typecast;
  ["PgCatalog.Types.PgCollationArray"]: Typecast;
  [12131]: Typecast;
  ["PgCatalog.Types.PgConfigArray"]: Typecast;
  [10002]: Typecast;
  ["PgCatalog.Types.PgConstraintArray"]: Typecast;
  [10048]: Typecast;
  ["PgCatalog.Types.PgConversionArray"]: Typecast;
  [12078]: Typecast;
  ["PgCatalog.Types.PgCursorsArray"]: Typecast;
  [10052]: Typecast;
  ["PgCatalog.Types.PgDatabaseArray"]: Typecast;
  [10053]: Typecast;
  ["PgCatalog.Types.PgDbRoleSettingArray"]: Typecast;
  [10087]: Typecast;
  ["PgCatalog.Types.PgDefaultAclArray"]: Typecast;
  [10050]: Typecast;
  ["PgCatalog.Types.PgDependArray"]: Typecast;
  [10040]: Typecast;
  ["PgCatalog.Types.PgDescriptionArray"]: Typecast;
  [10044]: Typecast;
  ["PgCatalog.Types.PgEnumArray"]: Typecast;
  [10038]: Typecast;
  ["PgCatalog.Types.PgEventTriggerArray"]: Typecast;
  [10073]: Typecast;
  ["PgCatalog.Types.PgExtensionArray"]: Typecast;
  [12111]: Typecast;
  ["PgCatalog.Types.PgFileSettingsArray"]: Typecast;
  [10075]: Typecast;
  ["PgCatalog.Types.PgForeignDataWrapperArray"]: Typecast;
  [10077]: Typecast;
  ["PgCatalog.Types.PgForeignServerArray"]: Typecast;
  [10081]: Typecast;
  ["PgCatalog.Types.PgForeignTableArray"]: Typecast;
  [12011]: Typecast;
  ["PgCatalog.Types.PgGroupArray"]: Typecast;
  [12115]: Typecast;
  ["PgCatalog.Types.PgHbaFileRulesArray"]: Typecast;
  [12119]: Typecast;
  ["PgCatalog.Types.PgIdentFileMappingsArray"]: Typecast;
  [10006]: Typecast;
  ["PgCatalog.Types.PgIndexArray"]: Typecast;
  [12044]: Typecast;
  ["PgCatalog.Types.PgIndexesArray"]: Typecast;
  [10004]: Typecast;
  ["PgCatalog.Types.PgInheritsArray"]: Typecast;
  [10089]: Typecast;
  ["PgCatalog.Types.PgInitPrivsArray"]: Typecast;
  [10020]: Typecast;
  ["PgCatalog.Types.PgLanguageArray"]: Typecast;
  [10024]: Typecast;
  ["PgCatalog.Types.PgLargeobjectArray"]: Typecast;
  [10022]: Typecast;
  ["PgCatalog.Types.PgLargeobjectMetadataArray"]: Typecast;
  [12074]: Typecast;
  ["PgCatalog.Types.PgLocksArray"]: Typecast;
  [3221]: Typecast;
  ["PgCatalog.Types.PgLsnArray"]: Typecast;
  [12039]: Typecast;
  ["PgCatalog.Types.PgMatviewsArray"]: Typecast;
  [10046]: Typecast;
  ["PgCatalog.Types.PgNamespaceArray"]: Typecast;
  [10012]: Typecast;
  ["PgCatalog.Types.PgOpclassArray"]: Typecast;
  [10008]: Typecast;
  ["PgCatalog.Types.PgOperatorArray"]: Typecast;
  [10010]: Typecast;
  ["PgCatalog.Types.PgOpfamilyArray"]: Typecast;
  [10096]: Typecast;
  ["PgCatalog.Types.PgParameterAclArray"]: Typecast;
  [10098]: Typecast;
  ["PgCatalog.Types.PgPartitionedTableArray"]: Typecast;
  [12019]: Typecast;
  ["PgCatalog.Types.PgPoliciesArray"]: Typecast;
  [10083]: Typecast;
  ["PgCatalog.Types.PgPolicyArray"]: Typecast;
  [12096]: Typecast;
  ["PgCatalog.Types.PgPreparedStatementsArray"]: Typecast;
  [12091]: Typecast;
  ["PgCatalog.Types.PgPreparedXactsArray"]: Typecast;
  [272]: Typecast;
  ["PgCatalog.Types.PgProcArray"]: Typecast;
  [10106]: Typecast;
  ["PgCatalog.Types.PgPublicationArray"]: Typecast;
  [10108]: Typecast;
  ["PgCatalog.Types.PgPublicationNamespaceArray"]: Typecast;
  [10110]: Typecast;
  ["PgCatalog.Types.PgPublicationRelArray"]: Typecast;
  [12069]: Typecast;
  ["PgCatalog.Types.PgPublicationTablesArray"]: Typecast;
  [10100]: Typecast;
  ["PgCatalog.Types.PgRangeArray"]: Typecast;
  [10085]: Typecast;
  ["PgCatalog.Types.PgReplicationOriginArray"]: Typecast;
  [12337]: Typecast;
  ["PgCatalog.Types.PgReplicationOriginStatusArray"]: Typecast;
  [12258]: Typecast;
  ["PgCatalog.Types.PgReplicationSlotsArray"]: Typecast;
  [10034]: Typecast;
  ["PgCatalog.Types.PgRewriteArray"]: Typecast;
  [12001]: Typecast;
  ["PgCatalog.Types.PgRolesArray"]: Typecast;
  [12024]: Typecast;
  ["PgCatalog.Types.PgRulesArray"]: Typecast;
  [10091]: Typecast;
  ["PgCatalog.Types.PgSeclabelArray"]: Typecast;
  [12100]: Typecast;
  ["PgCatalog.Types.PgSeclabelsArray"]: Typecast;
  [10104]: Typecast;
  ["PgCatalog.Types.PgSequenceArray"]: Typecast;
  [12049]: Typecast;
  ["PgCatalog.Types.PgSequencesArray"]: Typecast;
  [12105]: Typecast;
  ["PgCatalog.Types.PgSettingsArray"]: Typecast;
  [12006]: Typecast;
  ["PgCatalog.Types.PgShadowArray"]: Typecast;
  [10059]: Typecast;
  ["PgCatalog.Types.PgShdependArray"]: Typecast;
  [10061]: Typecast;
  ["PgCatalog.Types.PgShdescriptionArray"]: Typecast;
  [12135]: Typecast;
  ["PgCatalog.Types.PgShmemAllocationsArray"]: Typecast;
  [10093]: Typecast;
  ["PgCatalog.Types.PgShseclabelArray"]: Typecast;
  [5039]: Typecast;
  ["PgCatalog.Types.PgSnapshotArray"]: Typecast;
  [12223]: Typecast;
  ["PgCatalog.Types.PgStatActivityArray"]: Typecast;
  [12184]: Typecast;
  ["PgCatalog.Types.PgStatAllIndexesArray"]: Typecast;
  [12143]: Typecast;
  ["PgCatalog.Types.PgStatAllTablesArray"]: Typecast;
  [12286]: Typecast;
  ["PgCatalog.Types.PgStatArchiverArray"]: Typecast;
  [12290]: Typecast;
  ["PgCatalog.Types.PgStatBgwriterArray"]: Typecast;
  [12267]: Typecast;
  ["PgCatalog.Types.PgStatDatabaseArray"]: Typecast;
  [12272]: Typecast;
  ["PgCatalog.Types.PgStatDatabaseConflictsArray"]: Typecast;
  [12254]: Typecast;
  ["PgCatalog.Types.PgStatGssapiArray"]: Typecast;
  [12294]: Typecast;
  ["PgCatalog.Types.PgStatIoArray"]: Typecast;
  [12302]: Typecast;
  ["PgCatalog.Types.PgStatProgressAnalyzeArray"]: Typecast;
  [12322]: Typecast;
  ["PgCatalog.Types.PgStatProgressBasebackupArray"]: Typecast;
  [12312]: Typecast;
  ["PgCatalog.Types.PgStatProgressClusterArray"]: Typecast;
  [12327]: Typecast;
  ["PgCatalog.Types.PgStatProgressCopyArray"]: Typecast;
  [12317]: Typecast;
  ["PgCatalog.Types.PgStatProgressCreateIndexArray"]: Typecast;
  [12307]: Typecast;
  ["PgCatalog.Types.PgStatProgressVacuumArray"]: Typecast;
  [12241]: Typecast;
  ["PgCatalog.Types.PgStatRecoveryPrefetchArray"]: Typecast;
  [12228]: Typecast;
  ["PgCatalog.Types.PgStatReplicationArray"]: Typecast;
  [12263]: Typecast;
  ["PgCatalog.Types.PgStatReplicationSlotsArray"]: Typecast;
  [12233]: Typecast;
  ["PgCatalog.Types.PgStatSlruArray"]: Typecast;
  [12250]: Typecast;
  ["PgCatalog.Types.PgStatSslArray"]: Typecast;
  [12245]: Typecast;
  ["PgCatalog.Types.PgStatSubscriptionArray"]: Typecast;
  [12341]: Typecast;
  ["PgCatalog.Types.PgStatSubscriptionStatsArray"]: Typecast;
  [12189]: Typecast;
  ["PgCatalog.Types.PgStatSysIndexesArray"]: Typecast;
  [12153]: Typecast;
  ["PgCatalog.Types.PgStatSysTablesArray"]: Typecast;
  [12276]: Typecast;
  ["PgCatalog.Types.PgStatUserFunctionsArray"]: Typecast;
  [12193]: Typecast;
  ["PgCatalog.Types.PgStatUserIndexesArray"]: Typecast;
  [12162]: Typecast;
  ["PgCatalog.Types.PgStatUserTablesArray"]: Typecast;
  [12298]: Typecast;
  ["PgCatalog.Types.PgStatWalArray"]: Typecast;
  [12237]: Typecast;
  ["PgCatalog.Types.PgStatWalReceiverArray"]: Typecast;
  [12148]: Typecast;
  ["PgCatalog.Types.PgStatXactAllTablesArray"]: Typecast;
  [12158]: Typecast;
  ["PgCatalog.Types.PgStatXactSysTablesArray"]: Typecast;
  [12281]: Typecast;
  ["PgCatalog.Types.PgStatXactUserFunctionsArray"]: Typecast;
  [12167]: Typecast;
  ["PgCatalog.Types.PgStatXactUserTablesArray"]: Typecast;
  [12197]: Typecast;
  ["PgCatalog.Types.PgStatioAllIndexesArray"]: Typecast;
  [12210]: Typecast;
  ["PgCatalog.Types.PgStatioAllSequencesArray"]: Typecast;
  [12171]: Typecast;
  ["PgCatalog.Types.PgStatioAllTablesArray"]: Typecast;
  [12202]: Typecast;
  ["PgCatalog.Types.PgStatioSysIndexesArray"]: Typecast;
  [12215]: Typecast;
  ["PgCatalog.Types.PgStatioSysSequencesArray"]: Typecast;
  [12176]: Typecast;
  ["PgCatalog.Types.PgStatioSysTablesArray"]: Typecast;
  [12206]: Typecast;
  ["PgCatalog.Types.PgStatioUserIndexesArray"]: Typecast;
  [12219]: Typecast;
  ["PgCatalog.Types.PgStatioUserSequencesArray"]: Typecast;
  [12180]: Typecast;
  ["PgCatalog.Types.PgStatioUserTablesArray"]: Typecast;
  [10028]: Typecast;
  ["PgCatalog.Types.PgStatisticArray"]: Typecast;
  [10030]: Typecast;
  ["PgCatalog.Types.PgStatisticExtArray"]: Typecast;
  [10032]: Typecast;
  ["PgCatalog.Types.PgStatisticExtDataArray"]: Typecast;
  [12054]: Typecast;
  ["PgCatalog.Types.PgStatsArray"]: Typecast;
  [12059]: Typecast;
  ["PgCatalog.Types.PgStatsExtArray"]: Typecast;
  [12064]: Typecast;
  ["PgCatalog.Types.PgStatsExtExprsArray"]: Typecast;
  [10112]: Typecast;
  ["PgCatalog.Types.PgSubscriptionArray"]: Typecast;
  [10113]: Typecast;
  ["PgCatalog.Types.PgSubscriptionRelArray"]: Typecast;
  [12034]: Typecast;
  ["PgCatalog.Types.PgTablesArray"]: Typecast;
  [10055]: Typecast;
  ["PgCatalog.Types.PgTablespaceArray"]: Typecast;
  [12123]: Typecast;
  ["PgCatalog.Types.PgTimezoneAbbrevsArray"]: Typecast;
  [12127]: Typecast;
  ["PgCatalog.Types.PgTimezoneNamesArray"]: Typecast;
  [10102]: Typecast;
  ["PgCatalog.Types.PgTransformArray"]: Typecast;
  [10036]: Typecast;
  ["PgCatalog.Types.PgTriggerArray"]: Typecast;
  [10063]: Typecast;
  ["PgCatalog.Types.PgTsConfigArray"]: Typecast;
  [10065]: Typecast;
  ["PgCatalog.Types.PgTsConfigMapArray"]: Typecast;
  [10067]: Typecast;
  ["PgCatalog.Types.PgTsDictArray"]: Typecast;
  [10069]: Typecast;
  ["PgCatalog.Types.PgTsParserArray"]: Typecast;
  [10071]: Typecast;
  ["PgCatalog.Types.PgTsTemplateArray"]: Typecast;
  [210]: Typecast;
  ["PgCatalog.Types.PgTypeArray"]: Typecast;
  [12015]: Typecast;
  ["PgCatalog.Types.PgUserArray"]: Typecast;
  [10079]: Typecast;
  ["PgCatalog.Types.PgUserMappingArray"]: Typecast;
  [12332]: Typecast;
  ["PgCatalog.Types.PgUserMappingsArray"]: Typecast;
  [12029]: Typecast;
  ["PgCatalog.Types.PgViewsArray"]: Typecast;
  [1017]: Typecast;
  ["PgCatalog.Types.PointArray"]: Typecast;
  [1027]: Typecast;
  ["PgCatalog.Types.PolygonArray"]: Typecast;
  [2287]: Typecast;
  ["PgCatalog.Types.RecordArray"]: Typecast;
  [2201]: Typecast;
  ["PgCatalog.Types.RefcursorArray"]: Typecast;
  [2210]: Typecast;
  ["PgCatalog.Types.RegclassArray"]: Typecast;
  [4192]: Typecast;
  ["PgCatalog.Types.RegcollationArray"]: Typecast;
  [3735]: Typecast;
  ["PgCatalog.Types.RegconfigArray"]: Typecast;
  [3770]: Typecast;
  ["PgCatalog.Types.RegdictionaryArray"]: Typecast;
  [4090]: Typecast;
  ["PgCatalog.Types.RegnamespaceArray"]: Typecast;
  [2208]: Typecast;
  ["PgCatalog.Types.RegoperArray"]: Typecast;
  [2209]: Typecast;
  ["PgCatalog.Types.RegoperatorArray"]: Typecast;
  [1008]: Typecast;
  ["PgCatalog.Types.RegprocArray"]: Typecast;
  [2207]: Typecast;
  ["PgCatalog.Types.RegprocedureArray"]: Typecast;
  [4097]: Typecast;
  ["PgCatalog.Types.RegroleArray"]: Typecast;
  [2211]: Typecast;
  ["PgCatalog.Types.RegtypeArray"]: Typecast;
  [1009]: Typecast;
  ["PgCatalog.Types.TextArray"]: Typecast;
  [1010]: Typecast;
  ["PgCatalog.Types.TidArray"]: Typecast;
  [1183]: Typecast;
  ["PgCatalog.Types.TimeArray"]: Typecast;
  [1115]: Typecast;
  ["PgCatalog.Types.TimestampArray"]: Typecast;
  [1185]: Typecast;
  ["PgCatalog.Types.TimestamptzArray"]: Typecast;
  [1270]: Typecast;
  ["PgCatalog.Types.TimetzArray"]: Typecast;
  [6152]: Typecast;
  ["PgCatalog.Types.TsmultirangeArray"]: Typecast;
  [3645]: Typecast;
  ["PgCatalog.Types.TsqueryArray"]: Typecast;
  [3909]: Typecast;
  ["PgCatalog.Types.TsrangeArray"]: Typecast;
  [6153]: Typecast;
  ["PgCatalog.Types.TstzmultirangeArray"]: Typecast;
  [3911]: Typecast;
  ["PgCatalog.Types.TstzrangeArray"]: Typecast;
  [3643]: Typecast;
  ["PgCatalog.Types.TsvectorArray"]: Typecast;
  [2949]: Typecast;
  ["PgCatalog.Types.TxidSnapshotArray"]: Typecast;
  [2951]: Typecast;
  ["PgCatalog.Types.UuidArray"]: Typecast;
  [1563]: Typecast;
  ["PgCatalog.Types.VarbitArray"]: Typecast;
  [1015]: Typecast;
  ["PgCatalog.Types.VarcharArray"]: Typecast;
  [1011]: Typecast;
  ["PgCatalog.Types.XidArray"]: Typecast;
  [271]: Typecast;
  ["PgCatalog.Types.Xid8Array"]: Typecast;
  [143]: Typecast;
  ["PgCatalog.Types.XmlArray"]: Typecast;
  [1033]: Typecast;
  ["PgCatalog.Types.Aclitem"]: Typecast;
  [2276]: Typecast;
  ["PgCatalog.Types.Any"]: Typecast;
  [2277]: Typecast;
  ["PgCatalog.Types.Anyarray"]: Typecast;
  [5077]: Typecast;
  ["PgCatalog.Types.Anycompatible"]: Typecast;
  [5078]: Typecast;
  ["PgCatalog.Types.Anycompatiblearray"]: Typecast;
  [4538]: Typecast;
  ["PgCatalog.Types.Anycompatiblemultirange"]: Typecast;
  [5079]: Typecast;
  ["PgCatalog.Types.Anycompatiblenonarray"]: Typecast;
  [5080]: Typecast;
  ["PgCatalog.Types.Anycompatiblerange"]: Typecast;
  [2283]: Typecast;
  ["PgCatalog.Types.Anyelement"]: Typecast;
  [3500]: Typecast;
  ["PgCatalog.Types.Anyenum"]: Typecast;
  [4537]: Typecast;
  ["PgCatalog.Types.Anymultirange"]: Typecast;
  [2776]: Typecast;
  ["PgCatalog.Types.Anynonarray"]: Typecast;
  [3831]: Typecast;
  ["PgCatalog.Types.Anyrange"]: Typecast;
  [1560]: Typecast;
  ["PgCatalog.Types.Bit"]: Typecast;
  [16]: Typecast;
  ["PgCatalog.Types.Bool"]: Typecast;
  [603]: Typecast;
  ["PgCatalog.Types.Box"]: Typecast;
  [1042]: Typecast;
  ["PgCatalog.Types.Bpchar"]: Typecast;
  [17]: Typecast;
  ["PgCatalog.Types.Bytea"]: Typecast;
  [18]: Typecast;
  ["PgCatalog.Types.Char"]: Typecast;
  [29]: Typecast;
  ["PgCatalog.Types.Cid"]: Typecast;
  [650]: Typecast;
  ["PgCatalog.Types.Cidr"]: Typecast;
  [718]: Typecast;
  ["PgCatalog.Types.Circle"]: Typecast;
  [2275]: Typecast;
  ["PgCatalog.Types.Cstring"]: Typecast;
  [1082]: Typecast;
  ["PgCatalog.Types.Date"]: Typecast;
  [4535]: Typecast;
  ["PgCatalog.Types.Datemultirange"]: Typecast;
  [3912]: Typecast;
  ["PgCatalog.Types.Daterange"]: Typecast;
  [3838]: Typecast;
  ["PgCatalog.Types.EventTrigger"]: Typecast;
  [3115]: Typecast;
  ["PgCatalog.Types.FdwHandler"]: Typecast;
  [700]: Typecast;
  ["PgCatalog.Types.Float4"]: Typecast;
  [701]: Typecast;
  ["PgCatalog.Types.Float8"]: Typecast;
  [3642]: Typecast;
  ["PgCatalog.Types.Gtsvector"]: Typecast;
  [325]: Typecast;
  ["PgCatalog.Types.IndexAmHandler"]: Typecast;
  [869]: Typecast;
  ["PgCatalog.Types.Inet"]: Typecast;
  [21]: Typecast;
  ["PgCatalog.Types.Int2"]: Typecast;
  [22]: Typecast;
  ["PgCatalog.Types.Int2vector"]: Typecast;
  [23]: Typecast;
  ["PgCatalog.Types.Int4"]: Typecast;
  [4451]: Typecast;
  ["PgCatalog.Types.Int4multirange"]: Typecast;
  [3904]: Typecast;
  ["PgCatalog.Types.Int4range"]: Typecast;
  [20]: Typecast;
  ["PgCatalog.Types.Int8"]: Typecast;
  [4536]: Typecast;
  ["PgCatalog.Types.Int8multirange"]: Typecast;
  [3926]: Typecast;
  ["PgCatalog.Types.Int8range"]: Typecast;
  [2281]: Typecast;
  ["PgCatalog.Types.Internal"]: Typecast;
  [1186]: Typecast;
  ["PgCatalog.Types.Interval"]: Typecast;
  [114]: Typecast;
  ["PgCatalog.Types.Json"]: Typecast;
  [3802]: Typecast;
  ["PgCatalog.Types.Jsonb"]: Typecast;
  [4072]: Typecast;
  ["PgCatalog.Types.Jsonpath"]: Typecast;
  [2280]: Typecast;
  ["PgCatalog.Types.LanguageHandler"]: Typecast;
  [628]: Typecast;
  ["PgCatalog.Types.Line"]: Typecast;
  [601]: Typecast;
  ["PgCatalog.Types.Lseg"]: Typecast;
  [829]: Typecast;
  ["PgCatalog.Types.Macaddr"]: Typecast;
  [774]: Typecast;
  ["PgCatalog.Types.Macaddr8"]: Typecast;
  [790]: Typecast;
  ["PgCatalog.Types.Money"]: Typecast;
  [19]: Typecast;
  ["PgCatalog.Types.Name"]: Typecast;
  [1700]: Typecast;
  ["PgCatalog.Types.Numeric"]: Typecast;
  [4532]: Typecast;
  ["PgCatalog.Types.Nummultirange"]: Typecast;
  [3906]: Typecast;
  ["PgCatalog.Types.Numrange"]: Typecast;
  [26]: Typecast;
  ["PgCatalog.Types.Oid"]: Typecast;
  [30]: Typecast;
  ["PgCatalog.Types.Oidvector"]: Typecast;
  [602]: Typecast;
  ["PgCatalog.Types.Path"]: Typecast;
  [10027]: Typecast;
  ["PgCatalog.Types.PgAggregate"]: Typecast;
  [10015]: Typecast;
  ["PgCatalog.Types.PgAm"]: Typecast;
  [10017]: Typecast;
  ["PgCatalog.Types.PgAmop"]: Typecast;
  [10019]: Typecast;
  ["PgCatalog.Types.PgAmproc"]: Typecast;
  [10001]: Typecast;
  ["PgCatalog.Types.PgAttrdef"]: Typecast;
  [75]: Typecast;
  ["PgCatalog.Types.PgAttribute"]: Typecast;
  [2843]: Typecast;
  ["PgCatalog.Types.PgAuthMembers"]: Typecast;
  [2842]: Typecast;
  ["PgCatalog.Types.PgAuthid"]: Typecast;
  [12087]: Typecast;
  ["PgCatalog.Types.PgAvailableExtensionVersions"]: Typecast;
  [12083]: Typecast;
  ["PgCatalog.Types.PgAvailableExtensions"]: Typecast;
  [12140]: Typecast;
  ["PgCatalog.Types.PgBackendMemoryContexts"]: Typecast;
  [4600]: Typecast;
  ["PgCatalog.Types.PgBrinBloomSummary"]: Typecast;
  [4601]: Typecast;
  ["PgCatalog.Types.PgBrinMinmaxMultiSummary"]: Typecast;
  [10043]: Typecast;
  ["PgCatalog.Types.PgCast"]: Typecast;
  [83]: Typecast;
  ["PgCatalog.Types.PgClass"]: Typecast;
  [10095]: Typecast;
  ["PgCatalog.Types.PgCollation"]: Typecast;
  [12132]: Typecast;
  ["PgCatalog.Types.PgConfig"]: Typecast;
  [10003]: Typecast;
  ["PgCatalog.Types.PgConstraint"]: Typecast;
  [10049]: Typecast;
  ["PgCatalog.Types.PgConversion"]: Typecast;
  [12079]: Typecast;
  ["PgCatalog.Types.PgCursors"]: Typecast;
  [1248]: Typecast;
  ["PgCatalog.Types.PgDatabase"]: Typecast;
  [10054]: Typecast;
  ["PgCatalog.Types.PgDbRoleSetting"]: Typecast;
  [32]: Typecast;
  ["PgCatalog.Types.PgDdlCommand"]: Typecast;
  [10088]: Typecast;
  ["PgCatalog.Types.PgDefaultAcl"]: Typecast;
  [10051]: Typecast;
  ["PgCatalog.Types.PgDepend"]: Typecast;
  [3402]: Typecast;
  ["PgCatalog.Types.PgDependencies"]: Typecast;
  [10041]: Typecast;
  ["PgCatalog.Types.PgDescription"]: Typecast;
  [10045]: Typecast;
  ["PgCatalog.Types.PgEnum"]: Typecast;
  [10039]: Typecast;
  ["PgCatalog.Types.PgEventTrigger"]: Typecast;
  [10074]: Typecast;
  ["PgCatalog.Types.PgExtension"]: Typecast;
  [12112]: Typecast;
  ["PgCatalog.Types.PgFileSettings"]: Typecast;
  [10076]: Typecast;
  ["PgCatalog.Types.PgForeignDataWrapper"]: Typecast;
  [10078]: Typecast;
  ["PgCatalog.Types.PgForeignServer"]: Typecast;
  [10082]: Typecast;
  ["PgCatalog.Types.PgForeignTable"]: Typecast;
  [12012]: Typecast;
  ["PgCatalog.Types.PgGroup"]: Typecast;
  [12116]: Typecast;
  ["PgCatalog.Types.PgHbaFileRules"]: Typecast;
  [12120]: Typecast;
  ["PgCatalog.Types.PgIdentFileMappings"]: Typecast;
  [10007]: Typecast;
  ["PgCatalog.Types.PgIndex"]: Typecast;
  [12045]: Typecast;
  ["PgCatalog.Types.PgIndexes"]: Typecast;
  [10005]: Typecast;
  ["PgCatalog.Types.PgInherits"]: Typecast;
  [10090]: Typecast;
  ["PgCatalog.Types.PgInitPrivs"]: Typecast;
  [10021]: Typecast;
  ["PgCatalog.Types.PgLanguage"]: Typecast;
  [10025]: Typecast;
  ["PgCatalog.Types.PgLargeobject"]: Typecast;
  [10023]: Typecast;
  ["PgCatalog.Types.PgLargeobjectMetadata"]: Typecast;
  [12075]: Typecast;
  ["PgCatalog.Types.PgLocks"]: Typecast;
  [3220]: Typecast;
  ["PgCatalog.Types.PgLsn"]: Typecast;
  [12040]: Typecast;
  ["PgCatalog.Types.PgMatviews"]: Typecast;
  [5017]: Typecast;
  ["PgCatalog.Types.PgMcvList"]: Typecast;
  [10047]: Typecast;
  ["PgCatalog.Types.PgNamespace"]: Typecast;
  [3361]: Typecast;
  ["PgCatalog.Types.PgNdistinct"]: Typecast;
  [194]: Typecast;
  ["PgCatalog.Types.PgNodeTree"]: Typecast;
  [10013]: Typecast;
  ["PgCatalog.Types.PgOpclass"]: Typecast;
  [10009]: Typecast;
  ["PgCatalog.Types.PgOperator"]: Typecast;
  [10011]: Typecast;
  ["PgCatalog.Types.PgOpfamily"]: Typecast;
  [10097]: Typecast;
  ["PgCatalog.Types.PgParameterAcl"]: Typecast;
  [10099]: Typecast;
  ["PgCatalog.Types.PgPartitionedTable"]: Typecast;
  [12020]: Typecast;
  ["PgCatalog.Types.PgPolicies"]: Typecast;
  [10084]: Typecast;
  ["PgCatalog.Types.PgPolicy"]: Typecast;
  [12097]: Typecast;
  ["PgCatalog.Types.PgPreparedStatements"]: Typecast;
  [12092]: Typecast;
  ["PgCatalog.Types.PgPreparedXacts"]: Typecast;
  [81]: Typecast;
  ["PgCatalog.Types.PgProc"]: Typecast;
  [10107]: Typecast;
  ["PgCatalog.Types.PgPublication"]: Typecast;
  [10109]: Typecast;
  ["PgCatalog.Types.PgPublicationNamespace"]: Typecast;
  [10111]: Typecast;
  ["PgCatalog.Types.PgPublicationRel"]: Typecast;
  [12070]: Typecast;
  ["PgCatalog.Types.PgPublicationTables"]: Typecast;
  [10101]: Typecast;
  ["PgCatalog.Types.PgRange"]: Typecast;
  [10086]: Typecast;
  ["PgCatalog.Types.PgReplicationOrigin"]: Typecast;
  [12338]: Typecast;
  ["PgCatalog.Types.PgReplicationOriginStatus"]: Typecast;
  [12259]: Typecast;
  ["PgCatalog.Types.PgReplicationSlots"]: Typecast;
  [10035]: Typecast;
  ["PgCatalog.Types.PgRewrite"]: Typecast;
  [12002]: Typecast;
  ["PgCatalog.Types.PgRoles"]: Typecast;
  [12025]: Typecast;
  ["PgCatalog.Types.PgRules"]: Typecast;
  [10092]: Typecast;
  ["PgCatalog.Types.PgSeclabel"]: Typecast;
  [12101]: Typecast;
  ["PgCatalog.Types.PgSeclabels"]: Typecast;
  [10105]: Typecast;
  ["PgCatalog.Types.PgSequence"]: Typecast;
  [12050]: Typecast;
  ["PgCatalog.Types.PgSequences"]: Typecast;
  [12106]: Typecast;
  ["PgCatalog.Types.PgSettings"]: Typecast;
  [12007]: Typecast;
  ["PgCatalog.Types.PgShadow"]: Typecast;
  [10060]: Typecast;
  ["PgCatalog.Types.PgShdepend"]: Typecast;
  [10062]: Typecast;
  ["PgCatalog.Types.PgShdescription"]: Typecast;
  [12136]: Typecast;
  ["PgCatalog.Types.PgShmemAllocations"]: Typecast;
  [4066]: Typecast;
  ["PgCatalog.Types.PgShseclabel"]: Typecast;
  [5038]: Typecast;
  ["PgCatalog.Types.PgSnapshot"]: Typecast;
  [12224]: Typecast;
  ["PgCatalog.Types.PgStatActivity"]: Typecast;
  [12185]: Typecast;
  ["PgCatalog.Types.PgStatAllIndexes"]: Typecast;
  [12144]: Typecast;
  ["PgCatalog.Types.PgStatAllTables"]: Typecast;
  [12287]: Typecast;
  ["PgCatalog.Types.PgStatArchiver"]: Typecast;
  [12291]: Typecast;
  ["PgCatalog.Types.PgStatBgwriter"]: Typecast;
  [12268]: Typecast;
  ["PgCatalog.Types.PgStatDatabase"]: Typecast;
  [12273]: Typecast;
  ["PgCatalog.Types.PgStatDatabaseConflicts"]: Typecast;
  [12255]: Typecast;
  ["PgCatalog.Types.PgStatGssapi"]: Typecast;
  [12295]: Typecast;
  ["PgCatalog.Types.PgStatIo"]: Typecast;
  [12303]: Typecast;
  ["PgCatalog.Types.PgStatProgressAnalyze"]: Typecast;
  [12323]: Typecast;
  ["PgCatalog.Types.PgStatProgressBasebackup"]: Typecast;
  [12313]: Typecast;
  ["PgCatalog.Types.PgStatProgressCluster"]: Typecast;
  [12328]: Typecast;
  ["PgCatalog.Types.PgStatProgressCopy"]: Typecast;
  [12318]: Typecast;
  ["PgCatalog.Types.PgStatProgressCreateIndex"]: Typecast;
  [12308]: Typecast;
  ["PgCatalog.Types.PgStatProgressVacuum"]: Typecast;
  [12242]: Typecast;
  ["PgCatalog.Types.PgStatRecoveryPrefetch"]: Typecast;
  [12229]: Typecast;
  ["PgCatalog.Types.PgStatReplication"]: Typecast;
  [12264]: Typecast;
  ["PgCatalog.Types.PgStatReplicationSlots"]: Typecast;
  [12234]: Typecast;
  ["PgCatalog.Types.PgStatSlru"]: Typecast;
  [12251]: Typecast;
  ["PgCatalog.Types.PgStatSsl"]: Typecast;
  [12246]: Typecast;
  ["PgCatalog.Types.PgStatSubscription"]: Typecast;
  [12342]: Typecast;
  ["PgCatalog.Types.PgStatSubscriptionStats"]: Typecast;
  [12190]: Typecast;
  ["PgCatalog.Types.PgStatSysIndexes"]: Typecast;
  [12154]: Typecast;
  ["PgCatalog.Types.PgStatSysTables"]: Typecast;
  [12277]: Typecast;
  ["PgCatalog.Types.PgStatUserFunctions"]: Typecast;
  [12194]: Typecast;
  ["PgCatalog.Types.PgStatUserIndexes"]: Typecast;
  [12163]: Typecast;
  ["PgCatalog.Types.PgStatUserTables"]: Typecast;
  [12299]: Typecast;
  ["PgCatalog.Types.PgStatWal"]: Typecast;
  [12238]: Typecast;
  ["PgCatalog.Types.PgStatWalReceiver"]: Typecast;
  [12149]: Typecast;
  ["PgCatalog.Types.PgStatXactAllTables"]: Typecast;
  [12159]: Typecast;
  ["PgCatalog.Types.PgStatXactSysTables"]: Typecast;
  [12282]: Typecast;
  ["PgCatalog.Types.PgStatXactUserFunctions"]: Typecast;
  [12168]: Typecast;
  ["PgCatalog.Types.PgStatXactUserTables"]: Typecast;
  [12198]: Typecast;
  ["PgCatalog.Types.PgStatioAllIndexes"]: Typecast;
  [12211]: Typecast;
  ["PgCatalog.Types.PgStatioAllSequences"]: Typecast;
  [12172]: Typecast;
  ["PgCatalog.Types.PgStatioAllTables"]: Typecast;
  [12203]: Typecast;
  ["PgCatalog.Types.PgStatioSysIndexes"]: Typecast;
  [12216]: Typecast;
  ["PgCatalog.Types.PgStatioSysSequences"]: Typecast;
  [12177]: Typecast;
  ["PgCatalog.Types.PgStatioSysTables"]: Typecast;
  [12207]: Typecast;
  ["PgCatalog.Types.PgStatioUserIndexes"]: Typecast;
  [12220]: Typecast;
  ["PgCatalog.Types.PgStatioUserSequences"]: Typecast;
  [12181]: Typecast;
  ["PgCatalog.Types.PgStatioUserTables"]: Typecast;
  [10029]: Typecast;
  ["PgCatalog.Types.PgStatistic"]: Typecast;
  [10031]: Typecast;
  ["PgCatalog.Types.PgStatisticExt"]: Typecast;
  [10033]: Typecast;
  ["PgCatalog.Types.PgStatisticExtData"]: Typecast;
  [12055]: Typecast;
  ["PgCatalog.Types.PgStats"]: Typecast;
  [12060]: Typecast;
  ["PgCatalog.Types.PgStatsExt"]: Typecast;
  [12065]: Typecast;
  ["PgCatalog.Types.PgStatsExtExprs"]: Typecast;
  [6101]: Typecast;
  ["PgCatalog.Types.PgSubscription"]: Typecast;
  [10114]: Typecast;
  ["PgCatalog.Types.PgSubscriptionRel"]: Typecast;
  [12035]: Typecast;
  ["PgCatalog.Types.PgTables"]: Typecast;
  [10056]: Typecast;
  ["PgCatalog.Types.PgTablespace"]: Typecast;
  [12124]: Typecast;
  ["PgCatalog.Types.PgTimezoneAbbrevs"]: Typecast;
  [12128]: Typecast;
  ["PgCatalog.Types.PgTimezoneNames"]: Typecast;
  [10103]: Typecast;
  ["PgCatalog.Types.PgTransform"]: Typecast;
  [10037]: Typecast;
  ["PgCatalog.Types.PgTrigger"]: Typecast;
  [10064]: Typecast;
  ["PgCatalog.Types.PgTsConfig"]: Typecast;
  [10066]: Typecast;
  ["PgCatalog.Types.PgTsConfigMap"]: Typecast;
  [10068]: Typecast;
  ["PgCatalog.Types.PgTsDict"]: Typecast;
  [10070]: Typecast;
  ["PgCatalog.Types.PgTsParser"]: Typecast;
  [10072]: Typecast;
  ["PgCatalog.Types.PgTsTemplate"]: Typecast;
  [71]: Typecast;
  ["PgCatalog.Types.PgType"]: Typecast;
  [12016]: Typecast;
  ["PgCatalog.Types.PgUser"]: Typecast;
  [10080]: Typecast;
  ["PgCatalog.Types.PgUserMapping"]: Typecast;
  [12333]: Typecast;
  ["PgCatalog.Types.PgUserMappings"]: Typecast;
  [12030]: Typecast;
  ["PgCatalog.Types.PgViews"]: Typecast;
  [600]: Typecast;
  ["PgCatalog.Types.Point"]: Typecast;
  [604]: Typecast;
  ["PgCatalog.Types.Polygon"]: Typecast;
  [2249]: Typecast;
  ["PgCatalog.Types.Record"]: Typecast;
  [1790]: Typecast;
  ["PgCatalog.Types.Refcursor"]: Typecast;
  [2205]: Typecast;
  ["PgCatalog.Types.Regclass"]: Typecast;
  [4191]: Typecast;
  ["PgCatalog.Types.Regcollation"]: Typecast;
  [3734]: Typecast;
  ["PgCatalog.Types.Regconfig"]: Typecast;
  [3769]: Typecast;
  ["PgCatalog.Types.Regdictionary"]: Typecast;
  [4089]: Typecast;
  ["PgCatalog.Types.Regnamespace"]: Typecast;
  [2203]: Typecast;
  ["PgCatalog.Types.Regoper"]: Typecast;
  [2204]: Typecast;
  ["PgCatalog.Types.Regoperator"]: Typecast;
  [24]: Typecast;
  ["PgCatalog.Types.Regproc"]: Typecast;
  [2202]: Typecast;
  ["PgCatalog.Types.Regprocedure"]: Typecast;
  [4096]: Typecast;
  ["PgCatalog.Types.Regrole"]: Typecast;
  [2206]: Typecast;
  ["PgCatalog.Types.Regtype"]: Typecast;
  [269]: Typecast;
  ["PgCatalog.Types.TableAmHandler"]: Typecast;
  [25]: Typecast;
  ["PgCatalog.Types.Text"]: Typecast;
  [27]: Typecast;
  ["PgCatalog.Types.Tid"]: Typecast;
  [1083]: Typecast;
  ["PgCatalog.Types.Time"]: Typecast;
  [1114]: Typecast;
  ["PgCatalog.Types.Timestamp"]: Typecast;
  [1184]: Typecast;
  ["PgCatalog.Types.Timestamptz"]: Typecast;
  [1266]: Typecast;
  ["PgCatalog.Types.Timetz"]: Typecast;
  [2279]: Typecast;
  ["PgCatalog.Types.Trigger"]: Typecast;
  [3310]: Typecast;
  ["PgCatalog.Types.TsmHandler"]: Typecast;
  [4533]: Typecast;
  ["PgCatalog.Types.Tsmultirange"]: Typecast;
  [3615]: Typecast;
  ["PgCatalog.Types.Tsquery"]: Typecast;
  [3908]: Typecast;
  ["PgCatalog.Types.Tsrange"]: Typecast;
  [4534]: Typecast;
  ["PgCatalog.Types.Tstzmultirange"]: Typecast;
  [3910]: Typecast;
  ["PgCatalog.Types.Tstzrange"]: Typecast;
  [3614]: Typecast;
  ["PgCatalog.Types.Tsvector"]: Typecast;
  [2970]: Typecast;
  ["PgCatalog.Types.TxidSnapshot"]: Typecast;
  [705]: Typecast;
  ["PgCatalog.Types.Unknown"]: Typecast;
  [2950]: Typecast;
  ["PgCatalog.Types.Uuid"]: Typecast;
  [1562]: Typecast;
  ["PgCatalog.Types.Varbit"]: Typecast;
  [1043]: Typecast;
  ["PgCatalog.Types.Varchar"]: Typecast;
  [2278]: Typecast;
  ["PgCatalog.Types.Void"]: Typecast;
  [28]: Typecast;
  ["PgCatalog.Types.Xid"]: Typecast;
  [5069]: Typecast;
  ["PgCatalog.Types.Xid8"]: Typecast;
  [142]: Typecast;
  ["PgCatalog.Types.Xml"]: Typecast;
  [13509]: Typecast;
  ["InformationSchema.Types.AdministrableRoleAuthorizationsArray"]: Typecast;
  [13504]: Typecast;
  ["InformationSchema.Types.ApplicableRolesArray"]: Typecast;
  [13513]: Typecast;
  ["InformationSchema.Types.AttributesArray"]: Typecast;
  [13487]: Typecast;
  ["InformationSchema.Types.CardinalNumberArray"]: Typecast;
  [13490]: Typecast;
  ["InformationSchema.Types.CharacterDataArray"]: Typecast;
  [13518]: Typecast;
  ["InformationSchema.Types.CharacterSetsArray"]: Typecast;
  [13523]: Typecast;
  ["InformationSchema.Types.CheckConstraintRoutineUsageArray"]: Typecast;
  [13528]: Typecast;
  ["InformationSchema.Types.CheckConstraintsArray"]: Typecast;
  [13538]: Typecast;
  ["InformationSchema.Types.CollationCharacterSetApplicabilityArray"]: Typecast;
  [13533]: Typecast;
  ["InformationSchema.Types.CollationsArray"]: Typecast;
  [13543]: Typecast;
  ["InformationSchema.Types.ColumnColumnUsageArray"]: Typecast;
  [13548]: Typecast;
  ["InformationSchema.Types.ColumnDomainUsageArray"]: Typecast;
  [13771]: Typecast;
  ["InformationSchema.Types.ColumnOptionsArray"]: Typecast;
  [13553]: Typecast;
  ["InformationSchema.Types.ColumnPrivilegesArray"]: Typecast;
  [13558]: Typecast;
  ["InformationSchema.Types.ColumnUdtUsageArray"]: Typecast;
  [13563]: Typecast;
  ["InformationSchema.Types.ColumnsArray"]: Typecast;
  [13568]: Typecast;
  ["InformationSchema.Types.ConstraintColumnUsageArray"]: Typecast;
  [13573]: Typecast;
  ["InformationSchema.Types.ConstraintTableUsageArray"]: Typecast;
  [13756]: Typecast;
  ["InformationSchema.Types.DataTypePrivilegesArray"]: Typecast;
  [13578]: Typecast;
  ["InformationSchema.Types.DomainConstraintsArray"]: Typecast;
  [13583]: Typecast;
  ["InformationSchema.Types.DomainUdtUsageArray"]: Typecast;
  [13588]: Typecast;
  ["InformationSchema.Types.DomainsArray"]: Typecast;
  [13761]: Typecast;
  ["InformationSchema.Types.ElementTypesArray"]: Typecast;
  [13593]: Typecast;
  ["InformationSchema.Types.EnabledRolesArray"]: Typecast;
  [13779]: Typecast;
  ["InformationSchema.Types.ForeignDataWrapperOptionsArray"]: Typecast;
  [13783]: Typecast;
  ["InformationSchema.Types.ForeignDataWrappersArray"]: Typecast;
  [13792]: Typecast;
  ["InformationSchema.Types.ForeignServerOptionsArray"]: Typecast;
  [13796]: Typecast;
  ["InformationSchema.Types.ForeignServersArray"]: Typecast;
  [13805]: Typecast;
  ["InformationSchema.Types.ForeignTableOptionsArray"]: Typecast;
  [13809]: Typecast;
  ["InformationSchema.Types.ForeignTablesArray"]: Typecast;
  [13495]: Typecast;
  ["InformationSchema.Types.InformationSchemaCatalogNameArray"]: Typecast;
  [13597]: Typecast;
  ["InformationSchema.Types.KeyColumnUsageArray"]: Typecast;
  [13602]: Typecast;
  ["InformationSchema.Types.ParametersArray"]: Typecast;
  [13776]: Typecast;
  ["InformationSchema.Types.PgForeignDataWrappers"]: Typecast;
  [13788]: Typecast;
  ["InformationSchema.Types.PgForeignServers"]: Typecast;
  [13767]: Typecast;
  ["InformationSchema.Types.PgForeignTableColumns"]: Typecast;
  [13801]: Typecast;
  ["InformationSchema.Types.PgForeignTables"]: Typecast;
  [13814]: Typecast;
  ["InformationSchema.Types.PgUserMappings"]: Typecast;
  [13607]: Typecast;
  ["InformationSchema.Types.ReferentialConstraintsArray"]: Typecast;
  [13612]: Typecast;
  ["InformationSchema.Types.RoleColumnGrantsArray"]: Typecast;
  [13626]: Typecast;
  ["InformationSchema.Types.RoleRoutineGrantsArray"]: Typecast;
  [13689]: Typecast;
  ["InformationSchema.Types.RoleTableGrantsArray"]: Typecast;
  [13718]: Typecast;
  ["InformationSchema.Types.RoleUdtGrantsArray"]: Typecast;
  [13727]: Typecast;
  ["InformationSchema.Types.RoleUsageGrantsArray"]: Typecast;
  [13616]: Typecast;
  ["InformationSchema.Types.RoutineColumnUsageArray"]: Typecast;
  [13621]: Typecast;
  ["InformationSchema.Types.RoutinePrivilegesArray"]: Typecast;
  [13630]: Typecast;
  ["InformationSchema.Types.RoutineRoutineUsageArray"]: Typecast;
  [13635]: Typecast;
  ["InformationSchema.Types.RoutineSequenceUsageArray"]: Typecast;
  [13640]: Typecast;
  ["InformationSchema.Types.RoutineTableUsageArray"]: Typecast;
  [13645]: Typecast;
  ["InformationSchema.Types.RoutinesArray"]: Typecast;
  [13650]: Typecast;
  ["InformationSchema.Types.SchemataArray"]: Typecast;
  [13654]: Typecast;
  ["InformationSchema.Types.SequencesArray"]: Typecast;
  [13659]: Typecast;
  ["InformationSchema.Types.SqlFeaturesArray"]: Typecast;
  [13492]: Typecast;
  ["InformationSchema.Types.SqlIdentifierArray"]: Typecast;
  [13664]: Typecast;
  ["InformationSchema.Types.SqlImplementationInfoArray"]: Typecast;
  [13669]: Typecast;
  ["InformationSchema.Types.SqlPartsArray"]: Typecast;
  [13674]: Typecast;
  ["InformationSchema.Types.SqlSizingArray"]: Typecast;
  [13679]: Typecast;
  ["InformationSchema.Types.TableConstraintsArray"]: Typecast;
  [13684]: Typecast;
  ["InformationSchema.Types.TablePrivilegesArray"]: Typecast;
  [13693]: Typecast;
  ["InformationSchema.Types.TablesArray"]: Typecast;
  [13498]: Typecast;
  ["InformationSchema.Types.TimeStampArray"]: Typecast;
  [13698]: Typecast;
  ["InformationSchema.Types.TransformsArray"]: Typecast;
  [13703]: Typecast;
  ["InformationSchema.Types.TriggeredUpdateColumnsArray"]: Typecast;
  [13708]: Typecast;
  ["InformationSchema.Types.TriggersArray"]: Typecast;
  [13713]: Typecast;
  ["InformationSchema.Types.UdtPrivilegesArray"]: Typecast;
  [13722]: Typecast;
  ["InformationSchema.Types.UsagePrivilegesArray"]: Typecast;
  [13731]: Typecast;
  ["InformationSchema.Types.UserDefinedTypesArray"]: Typecast;
  [13818]: Typecast;
  ["InformationSchema.Types.UserMappingOptionsArray"]: Typecast;
  [13823]: Typecast;
  ["InformationSchema.Types.UserMappingsArray"]: Typecast;
  [13736]: Typecast;
  ["InformationSchema.Types.ViewColumnUsageArray"]: Typecast;
  [13741]: Typecast;
  ["InformationSchema.Types.ViewRoutineUsageArray"]: Typecast;
  [13746]: Typecast;
  ["InformationSchema.Types.ViewTableUsageArray"]: Typecast;
  [13751]: Typecast;
  ["InformationSchema.Types.ViewsArray"]: Typecast;
  [13500]: Typecast;
  ["InformationSchema.Types.YesOrNoArray"]: Typecast;
  [13510]: Typecast;
  ["InformationSchema.Types.AdministrableRoleAuthorizations"]: Typecast;
  [13505]: Typecast;
  ["InformationSchema.Types.ApplicableRoles"]: Typecast;
  [13514]: Typecast;
  ["InformationSchema.Types.Attributes"]: Typecast;
  [13488]: Typecast;
  ["InformationSchema.Types.CardinalNumber"]: Typecast;
  [13491]: Typecast;
  ["InformationSchema.Types.CharacterData"]: Typecast;
  [13519]: Typecast;
  ["InformationSchema.Types.CharacterSets"]: Typecast;
  [13524]: Typecast;
  ["InformationSchema.Types.CheckConstraintRoutineUsage"]: Typecast;
  [13529]: Typecast;
  ["InformationSchema.Types.CheckConstraints"]: Typecast;
  [13539]: Typecast;
  ["InformationSchema.Types.CollationCharacterSetApplicability"]: Typecast;
  [13534]: Typecast;
  ["InformationSchema.Types.Collations"]: Typecast;
  [13544]: Typecast;
  ["InformationSchema.Types.ColumnColumnUsage"]: Typecast;
  [13549]: Typecast;
  ["InformationSchema.Types.ColumnDomainUsage"]: Typecast;
  [13772]: Typecast;
  ["InformationSchema.Types.ColumnOptions"]: Typecast;
  [13554]: Typecast;
  ["InformationSchema.Types.ColumnPrivileges"]: Typecast;
  [13559]: Typecast;
  ["InformationSchema.Types.ColumnUdtUsage"]: Typecast;
  [13564]: Typecast;
  ["InformationSchema.Types.Columns"]: Typecast;
  [13569]: Typecast;
  ["InformationSchema.Types.ConstraintColumnUsage"]: Typecast;
  [13574]: Typecast;
  ["InformationSchema.Types.ConstraintTableUsage"]: Typecast;
  [13757]: Typecast;
  ["InformationSchema.Types.DataTypePrivileges"]: Typecast;
  [13579]: Typecast;
  ["InformationSchema.Types.DomainConstraints"]: Typecast;
  [13584]: Typecast;
  ["InformationSchema.Types.DomainUdtUsage"]: Typecast;
  [13589]: Typecast;
  ["InformationSchema.Types.Domains"]: Typecast;
  [13762]: Typecast;
  ["InformationSchema.Types.ElementTypes"]: Typecast;
  [13594]: Typecast;
  ["InformationSchema.Types.EnabledRoles"]: Typecast;
  [13780]: Typecast;
  ["InformationSchema.Types.ForeignDataWrapperOptions"]: Typecast;
  [13784]: Typecast;
  ["InformationSchema.Types.ForeignDataWrappers"]: Typecast;
  [13793]: Typecast;
  ["InformationSchema.Types.ForeignServerOptions"]: Typecast;
  [13797]: Typecast;
  ["InformationSchema.Types.ForeignServers"]: Typecast;
  [13806]: Typecast;
  ["InformationSchema.Types.ForeignTableOptions"]: Typecast;
  [13810]: Typecast;
  ["InformationSchema.Types.ForeignTables"]: Typecast;
  [13496]: Typecast;
  ["InformationSchema.Types.InformationSchemaCatalogName"]: Typecast;
  [13598]: Typecast;
  ["InformationSchema.Types.KeyColumnUsage"]: Typecast;
  [13603]: Typecast;
  ["InformationSchema.Types.Parameters"]: Typecast;
  [13608]: Typecast;
  ["InformationSchema.Types.ReferentialConstraints"]: Typecast;
  [13613]: Typecast;
  ["InformationSchema.Types.RoleColumnGrants"]: Typecast;
  [13627]: Typecast;
  ["InformationSchema.Types.RoleRoutineGrants"]: Typecast;
  [13690]: Typecast;
  ["InformationSchema.Types.RoleTableGrants"]: Typecast;
  [13719]: Typecast;
  ["InformationSchema.Types.RoleUdtGrants"]: Typecast;
  [13728]: Typecast;
  ["InformationSchema.Types.RoleUsageGrants"]: Typecast;
  [13617]: Typecast;
  ["InformationSchema.Types.RoutineColumnUsage"]: Typecast;
  [13622]: Typecast;
  ["InformationSchema.Types.RoutinePrivileges"]: Typecast;
  [13631]: Typecast;
  ["InformationSchema.Types.RoutineRoutineUsage"]: Typecast;
  [13636]: Typecast;
  ["InformationSchema.Types.RoutineSequenceUsage"]: Typecast;
  [13641]: Typecast;
  ["InformationSchema.Types.RoutineTableUsage"]: Typecast;
  [13646]: Typecast;
  ["InformationSchema.Types.Routines"]: Typecast;
  [13651]: Typecast;
  ["InformationSchema.Types.Schemata"]: Typecast;
  [13655]: Typecast;
  ["InformationSchema.Types.Sequences"]: Typecast;
  [13660]: Typecast;
  ["InformationSchema.Types.SqlFeatures"]: Typecast;
  [13493]: Typecast;
  ["InformationSchema.Types.SqlIdentifier"]: Typecast;
  [13665]: Typecast;
  ["InformationSchema.Types.SqlImplementationInfo"]: Typecast;
  [13670]: Typecast;
  ["InformationSchema.Types.SqlParts"]: Typecast;
  [13675]: Typecast;
  ["InformationSchema.Types.SqlSizing"]: Typecast;
  [13680]: Typecast;
  ["InformationSchema.Types.TableConstraints"]: Typecast;
  [13685]: Typecast;
  ["InformationSchema.Types.TablePrivileges"]: Typecast;
  [13694]: Typecast;
  ["InformationSchema.Types.Tables"]: Typecast;
  [13499]: Typecast;
  ["InformationSchema.Types.TimeStamp"]: Typecast;
  [13699]: Typecast;
  ["InformationSchema.Types.Transforms"]: Typecast;
  [13704]: Typecast;
  ["InformationSchema.Types.TriggeredUpdateColumns"]: Typecast;
  [13709]: Typecast;
  ["InformationSchema.Types.Triggers"]: Typecast;
  [13714]: Typecast;
  ["InformationSchema.Types.UdtPrivileges"]: Typecast;
  [13723]: Typecast;
  ["InformationSchema.Types.UsagePrivileges"]: Typecast;
  [13732]: Typecast;
  ["InformationSchema.Types.UserDefinedTypes"]: Typecast;
  [13819]: Typecast;
  ["InformationSchema.Types.UserMappingOptions"]: Typecast;
  [13824]: Typecast;
  ["InformationSchema.Types.UserMappings"]: Typecast;
  [13737]: Typecast;
  ["InformationSchema.Types.ViewColumnUsage"]: Typecast;
  [13742]: Typecast;
  ["InformationSchema.Types.ViewRoutineUsage"]: Typecast;
  [13747]: Typecast;
  ["InformationSchema.Types.ViewTableUsage"]: Typecast;
  [13752]: Typecast;
  ["InformationSchema.Types.Views"]: Typecast;
  [13501]: Typecast;
  ["InformationSchema.Types.YesOrNo"]: Typecast;
  [33354]: Typecast;
  ["Public.Types.ChecklistArray"]: Typecast;
  [33363]: Typecast;
  ["Public.Types.ChecklistItemArray"]: Typecast;
  [33355]: Typecast;
  ["Public.Types.Checklist"]: Typecast;
  [33364]: Typecast;
  ["Public.Types.ChecklistItem"]: Typecast;
}

interface HasDatabase {
  database: Database;
}

export class Database extends PostgresDatabase implements HasDatabase {
  get database() {
    return this;
  }

  /**
   * Connect to your database server via URL, and return
   * a fully typed database you can use to access it.
   */
  static async connect(postgresUrl: string, props?: postgres.Options<never>) {
    return new Database(await initializeContext(postgresUrl, props));
  }

  public Public = new (class implements HasDatabase {
    constructor(private hasDatabase: HasDatabase) {}

    get database() {
      return this.hasDatabase.database;
    }

    public Procedures = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }
    })(this);

    public Tables = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      public Checklist = new (class implements HasDatabase {
        constructor(private hasDatabase: HasDatabase) {}

        get database() {
          return this.hasDatabase.database;
        }

        async create(
          values: Public.Tables.Checklist.Values,
        ): Promise<Public.Tables.Checklist.Record> {
          const sql = this.database.context.sql;
          const typed = sql.typed as unknown as PostgresTypecasts;

          if (!Public.Tables.Checklist.includesPrimaryKey(values)) {
            const response = await sql`
      --
      INSERT INTO
        public.checklist (name,created_at)
      VALUES (${
        values.name === undefined ? sql`DEFAULT` : typed[25](values.name)
      },${
        values.createdAt === undefined
          ? sql`DEFAULT`
          : typed[1114](values.createdAt)
      })
      RETURNING
        id,name,created_at
    `;
            return response.map((record) => ({
              id: undefinedIsNull(record.id),
              name: undefinedIsNull(record.name),
              createdAt: undefinedIsNull(record.created_at),
            }))[0];
          }
          const response = await sql`
    INSERT INTO
      public.checklist (id,name,created_at)
    VALUES (${
      values.id === undefined ? sql`DEFAULT` : typed[2950](values.id)
    },${values.name === undefined ? sql`DEFAULT` : typed[25](values.name)},${
      values.createdAt === undefined
        ? sql`DEFAULT`
        : typed[1114](values.createdAt)
    })
    ON CONFLICT (id) DO UPDATE
    SET
      name = EXCLUDED.name,created_at = EXCLUDED.created_at
    RETURNING
      id,name,created_at
    `;
          return response.map((record) => ({
            id: undefinedIsNull(record.id),
            name: undefinedIsNull(record.name),
            createdAt: undefinedIsNull(record.created_at),
          }))[0];
        }
        async all(): Promise<Public.Tables.Checklist.Record[]> {
          const sql = this.database.context.sql;
          const typed = sql.typed as unknown as PostgresTypecasts;

          const response = await sql`
    -- 
    SELECT 
      id,name,created_at 
    FROM
      public.checklist 
    `;
          return response.map((record) => ({
            id: undefinedIsNull(record.id),
            name: undefinedIsNull(record.name),
            createdAt: undefinedIsNull(record.created_at),
          }));
        }

        public ById = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.Checklist.ById,
          ): Promise<Public.Tables.Checklist.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      id,name,created_at 
    FROM
      public.checklist 
    WHERE
      id = ${
        parameters.id === undefined ? sql`DEFAULT` : typed[2950](parameters.id)
      }
    `;
            return response.map((record) => ({
              id: undefinedIsNull(record.id),
              name: undefinedIsNull(record.name),
              createdAt: undefinedIsNull(record.created_at),
            }))[0];
          }

          async update(
            parameters: Public.Tables.Checklist.ById,
            values: Partial<Public.Tables.Checklist.Values>,
          ): Promise<Public.Tables.Checklist.Record> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.checklist 
    SET
      id = ${
        values.id === undefined ? sql`id` : typed[2950](values.id)
      } , name = ${
        values.name === undefined ? sql`name` : typed[25](values.name)
      } , created_at = ${
        values.createdAt === undefined
          ? sql`created_at`
          : typed[1114](values.createdAt)
      } 
    WHERE
      id = ${
        parameters.id === undefined ? sql`DEFAULT` : typed[2950](parameters.id)
      }
    RETURNING id,name,created_at`;
            return response.map((record) => ({
              id: undefinedIsNull(record.id),
              name: undefinedIsNull(record.name),
              createdAt: undefinedIsNull(record.created_at),
            }))[0];
          }
          async delete(parameters: Public.Tables.Checklist.ById) {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;
            const response = await sql`
    --
    DELETE FROM 
      public.checklist 
    WHERE
      id = ${
        parameters.id === undefined ? sql`DEFAULT` : typed[2950](parameters.id)
      }
    RETURNING id,name,created_at`;
            return response.map((record) => ({
              id: undefinedIsNull(record.id),
              name: undefinedIsNull(record.name),
              createdAt: undefinedIsNull(record.created_at),
            }))[0];
          }
        })(this);
        public get ByPrimaryKey() {
          return this.ById;
        }
      })(this);

      public ChecklistItem = new (class implements HasDatabase {
        constructor(private hasDatabase: HasDatabase) {}

        get database() {
          return this.hasDatabase.database;
        }

        async create(
          values: Public.Tables.ChecklistItem.Values,
        ): Promise<Public.Tables.ChecklistItem.Record> {
          const sql = this.database.context.sql;
          const typed = sql.typed as unknown as PostgresTypecasts;

          if (!Public.Tables.ChecklistItem.includesPrimaryKey(values)) {
            const response = await sql`
      --
      INSERT INTO
        public.checklist_item (checklist_id,title,checked,created_at)
      VALUES (${
        values.checklistId === undefined
          ? sql`DEFAULT`
          : typed[2950](values.checklistId)
      },${
        values.title === undefined ? sql`DEFAULT` : typed[25](values.title)
      },${
        values.checked === undefined ? sql`DEFAULT` : typed[16](values.checked)
      },${
        values.createdAt === undefined
          ? sql`DEFAULT`
          : typed[1114](values.createdAt)
      })
      RETURNING
        id,checklist_id,title,checked,created_at
    `;
            return response.map((record) => ({
              id: undefinedIsNull(record.id),
              checklistId: undefinedIsNull(record.checklist_id),
              title: undefinedIsNull(record.title),
              checked: undefinedIsNull(record.checked),
              createdAt: undefinedIsNull(record.created_at),
            }))[0];
          }
          const response = await sql`
    INSERT INTO
      public.checklist_item (id,checklist_id,title,checked,created_at)
    VALUES (${
      values.id === undefined ? sql`DEFAULT` : typed[2950](values.id)
    },${
      values.checklistId === undefined
        ? sql`DEFAULT`
        : typed[2950](values.checklistId)
    },${values.title === undefined ? sql`DEFAULT` : typed[25](values.title)},${
      values.checked === undefined ? sql`DEFAULT` : typed[16](values.checked)
    },${
      values.createdAt === undefined
        ? sql`DEFAULT`
        : typed[1114](values.createdAt)
    })
    ON CONFLICT (id) DO UPDATE
    SET
      checklist_id = EXCLUDED.checklist_id,title = EXCLUDED.title,checked = EXCLUDED.checked,created_at = EXCLUDED.created_at
    RETURNING
      id,checklist_id,title,checked,created_at
    `;
          return response.map((record) => ({
            id: undefinedIsNull(record.id),
            checklistId: undefinedIsNull(record.checklist_id),
            title: undefinedIsNull(record.title),
            checked: undefinedIsNull(record.checked),
            createdAt: undefinedIsNull(record.created_at),
          }))[0];
        }
        async all(): Promise<Public.Tables.ChecklistItem.Record[]> {
          const sql = this.database.context.sql;
          const typed = sql.typed as unknown as PostgresTypecasts;

          const response = await sql`
    -- 
    SELECT 
      id,checklist_id,title,checked,created_at 
    FROM
      public.checklist_item 
    `;
          return response.map((record) => ({
            id: undefinedIsNull(record.id),
            checklistId: undefinedIsNull(record.checklist_id),
            title: undefinedIsNull(record.title),
            checked: undefinedIsNull(record.checked),
            createdAt: undefinedIsNull(record.created_at),
          }));
        }

        public ByChecklistId = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.ChecklistItem.ByChecklistId,
          ): Promise<Public.Tables.ChecklistItem.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      id,checklist_id,title,checked,created_at 
    FROM
      public.checklist_item 
    WHERE
      checklist_id = ${
        parameters.checklistId === undefined
          ? sql`DEFAULT`
          : typed[2950](parameters.checklistId)
      }
    `;
            return response.map((record) => ({
              id: undefinedIsNull(record.id),
              checklistId: undefinedIsNull(record.checklist_id),
              title: undefinedIsNull(record.title),
              checked: undefinedIsNull(record.checked),
              createdAt: undefinedIsNull(record.created_at),
            }));
          }

          async update(
            parameters: Public.Tables.ChecklistItem.ByChecklistId,
            values: Partial<Public.Tables.ChecklistItem.Values>,
          ): Promise<Public.Tables.ChecklistItem.Record[]> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.checklist_item 
    SET
      id = ${
        values.id === undefined ? sql`id` : typed[2950](values.id)
      } , checklist_id = ${
        values.checklistId === undefined
          ? sql`checklist_id`
          : typed[2950](values.checklistId)
      } , title = ${
        values.title === undefined ? sql`title` : typed[25](values.title)
      } , checked = ${
        values.checked === undefined ? sql`checked` : typed[16](values.checked)
      } , created_at = ${
        values.createdAt === undefined
          ? sql`created_at`
          : typed[1114](values.createdAt)
      } 
    WHERE
      checklist_id = ${
        parameters.checklistId === undefined
          ? sql`DEFAULT`
          : typed[2950](parameters.checklistId)
      }
    RETURNING id,checklist_id,title,checked,created_at`;
            return response.map((record) => ({
              id: undefinedIsNull(record.id),
              checklistId: undefinedIsNull(record.checklist_id),
              title: undefinedIsNull(record.title),
              checked: undefinedIsNull(record.checked),
              createdAt: undefinedIsNull(record.created_at),
            }));
          }
          async delete(parameters: Public.Tables.ChecklistItem.ByChecklistId) {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;
            const response = await sql`
    --
    DELETE FROM 
      public.checklist_item 
    WHERE
      checklist_id = ${
        parameters.checklistId === undefined
          ? sql`DEFAULT`
          : typed[2950](parameters.checklistId)
      }
    RETURNING id,checklist_id,title,checked,created_at`;
            return response.map((record) => ({
              id: undefinedIsNull(record.id),
              checklistId: undefinedIsNull(record.checklist_id),
              title: undefinedIsNull(record.title),
              checked: undefinedIsNull(record.checked),
              createdAt: undefinedIsNull(record.created_at),
            }));
          }
        })(this);

        public ById = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.ChecklistItem.ById,
          ): Promise<Public.Tables.ChecklistItem.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      id,checklist_id,title,checked,created_at 
    FROM
      public.checklist_item 
    WHERE
      id = ${
        parameters.id === undefined ? sql`DEFAULT` : typed[2950](parameters.id)
      }
    `;
            return response.map((record) => ({
              id: undefinedIsNull(record.id),
              checklistId: undefinedIsNull(record.checklist_id),
              title: undefinedIsNull(record.title),
              checked: undefinedIsNull(record.checked),
              createdAt: undefinedIsNull(record.created_at),
            }))[0];
          }

          async update(
            parameters: Public.Tables.ChecklistItem.ById,
            values: Partial<Public.Tables.ChecklistItem.Values>,
          ): Promise<Public.Tables.ChecklistItem.Record> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.checklist_item 
    SET
      id = ${
        values.id === undefined ? sql`id` : typed[2950](values.id)
      } , checklist_id = ${
        values.checklistId === undefined
          ? sql`checklist_id`
          : typed[2950](values.checklistId)
      } , title = ${
        values.title === undefined ? sql`title` : typed[25](values.title)
      } , checked = ${
        values.checked === undefined ? sql`checked` : typed[16](values.checked)
      } , created_at = ${
        values.createdAt === undefined
          ? sql`created_at`
          : typed[1114](values.createdAt)
      } 
    WHERE
      id = ${
        parameters.id === undefined ? sql`DEFAULT` : typed[2950](parameters.id)
      }
    RETURNING id,checklist_id,title,checked,created_at`;
            return response.map((record) => ({
              id: undefinedIsNull(record.id),
              checklistId: undefinedIsNull(record.checklist_id),
              title: undefinedIsNull(record.title),
              checked: undefinedIsNull(record.checked),
              createdAt: undefinedIsNull(record.created_at),
            }))[0];
          }
          async delete(parameters: Public.Tables.ChecklistItem.ById) {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;
            const response = await sql`
    --
    DELETE FROM 
      public.checklist_item 
    WHERE
      id = ${
        parameters.id === undefined ? sql`DEFAULT` : typed[2950](parameters.id)
      }
    RETURNING id,checklist_id,title,checked,created_at`;
            return response.map((record) => ({
              id: undefinedIsNull(record.id),
              checklistId: undefinedIsNull(record.checklist_id),
              title: undefinedIsNull(record.title),
              checked: undefinedIsNull(record.checked),
              createdAt: undefinedIsNull(record.created_at),
            }))[0];
          }
        })(this);
        public get ByPrimaryKey() {
          return this.ById;
        }
      })(this);
    })(this);
  })(this);
}

// begin - operation dispatch map
import { EmbraceSQLRequest, OperationDispatchMethod } from "@embracesql/shared";
export class OperationDispatcher {
  private dispatchMap: Record<string, OperationDispatchMethod>;
  constructor(private database: Database) {
    this.dispatchMap = {
      "Public.Tables.Checklist.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Checklist.create(
          request.values as Public.Tables.Checklist.Values,
        ),

      "Public.Tables.Checklist.all": async (
        request: EmbraceSQLRequest<object, object>,
      ) => database.Public.Tables.Checklist.all(),

      "Public.Tables.Checklist.ById.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Checklist.ById.read(
          request.parameters as Public.Tables.Checklist.ById,
        ),
      "Public.Tables.Checklist.ById.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Checklist.ById.update(
          request.parameters as Public.Tables.Checklist.ById,
          request.values as Partial<Public.Tables.Checklist.Values>,
        ),
      "Public.Tables.Checklist.ById.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Checklist.ById.delete(
          request.parameters as Public.Tables.Checklist.ById,
        ),
      "Public.Tables.ChecklistItem.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.ChecklistItem.create(
          request.values as Public.Tables.ChecklistItem.Values,
        ),

      "Public.Tables.ChecklistItem.all": async (
        request: EmbraceSQLRequest<object, object>,
      ) => database.Public.Tables.ChecklistItem.all(),

      "Public.Tables.ChecklistItem.ByChecklistId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.ChecklistItem.ByChecklistId.read(
          request.parameters as Public.Tables.ChecklistItem.ByChecklistId,
        ),
      "Public.Tables.ChecklistItem.ByChecklistId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.ChecklistItem.ByChecklistId.update(
          request.parameters as Public.Tables.ChecklistItem.ByChecklistId,
          request.values as Partial<Public.Tables.ChecklistItem.Values>,
        ),
      "Public.Tables.ChecklistItem.ByChecklistId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.ChecklistItem.ByChecklistId.delete(
          request.parameters as Public.Tables.ChecklistItem.ByChecklistId,
        ),
      "Public.Tables.ChecklistItem.ById.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.ChecklistItem.ById.read(
          request.parameters as Public.Tables.ChecklistItem.ById,
        ),
      "Public.Tables.ChecklistItem.ById.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.ChecklistItem.ById.update(
          request.parameters as Public.Tables.ChecklistItem.ById,
          request.values as Partial<Public.Tables.ChecklistItem.Values>,
        ),
      "Public.Tables.ChecklistItem.ById.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.ChecklistItem.ById.delete(
          request.parameters as Public.Tables.ChecklistItem.ById,
        ),
    };
  }

  async dispatch(request: EmbraceSQLRequest<object, object>) {
    if (!this.dispatchMap[request.operation]) {
      throw new Error(`${request.operation} not available`);
    }
    return this.dispatchMap[request.operation](request);
  }
}
// Begin Express generated section
import { EmbraceSQLExpress } from "@embracesql/express";

export const EmbraceSQLExpressApp = async (
  postgresUrl: string,
  database?: Database,
) => {
  const dispatchToDatabase = database ?? (await Database.connect(postgresUrl));
  const dispatcher = new OperationDispatcher(dispatchToDatabase);
  return EmbraceSQLExpress(dispatcher);
};

// End Express generated section

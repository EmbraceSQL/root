// ⚠️ generated - do not modify ⚠️

/**
 * BEGIN - shared types generated from schema.
 *
 * These types are node/browser isomorphic and are used by all other
 * EmbraceSQL generated code.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
// eslint-disable @typescript-eslint/no-redundant-type-constituents
import {
  UUID,
  JsDate,
  JSONValue,
  JSONObject,
  Empty,
  Nullable,
  undefinedIsNull,
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
    export type Any = any;
    export type Anyarray = any;
    export type Anycompatible = any;
    export type Anycompatiblearray = any;
    export type Anycompatiblemultirange = any;
    export type Anycompatiblenonarray = any;
    export type Anycompatiblerange = any;
    export type Anyelement = any;
    export type Anyenum = any;
    export type Anymultirange = any;
    export type Anynonarray = any;
    export type Anyrange = any;
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
    export type Cstring = any;
    export type Date = JsDate;
    export type Datemultirange = any;
    export type Daterange = [PgCatalog.Types.Date, PgCatalog.Types.Date];
    export type EventTrigger = any;
    export type FdwHandler = any;
    export type Float4 = number;
    export type Float8 = number;
    export type Gtsvector = Array<string>;
    export type IndexAmHandler = any;
    export type Inet = string;
    export type Int2 = number;
    export type Int2vector = Uint16Array;
    export type Int4 = number;
    export type Int4multirange = any;
    export type Int4range = [PgCatalog.Types.Int4, PgCatalog.Types.Int4];
    export type Int8 = number;
    export type Int8multirange = any;
    export type Int8range = [PgCatalog.Types.Int8, PgCatalog.Types.Int8];
    export type Internal = any;
    export type Interval = number;
    export type Json = JSONObject;
    export type Jsonb = JSONObject;
    export type Jsonpath = string;
    export type LanguageHandler = any;
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
    export type Nummultirange = any;
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
      agginitval: PgCatalog.Types.Text;
      aggminitval: PgCatalog.Types.Text;
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
      attmissingval: PgCatalog.Types.Anyarray;
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
      rolpassword: PgCatalog.Types.Text;
      rolvaliduntil: PgCatalog.Types.Timestamptz;
    };
    export type PgAvailableExtensionVersions = {
      name: PgCatalog.Types.Name;
      version: PgCatalog.Types.Text;
      installed: PgCatalog.Types.Bool;
      superuser: PgCatalog.Types.Bool;
      trusted: PgCatalog.Types.Bool;
      relocatable: PgCatalog.Types.Bool;
      schema: PgCatalog.Types.Name;
      requires: PgCatalog.Types.NameArray;
      comment: PgCatalog.Types.Text;
    };
    export type PgAvailableExtensions = {
      name: PgCatalog.Types.Name;
      defaultVersion: PgCatalog.Types.Text;
      installedVersion: PgCatalog.Types.Text;
      comment: PgCatalog.Types.Text;
    };
    export type PgBackendMemoryContexts = {
      name: PgCatalog.Types.Text;
      ident: PgCatalog.Types.Text;
      parent: PgCatalog.Types.Text;
      level: PgCatalog.Types.Int4;
      totalBytes: PgCatalog.Types.Int8;
      totalNblocks: PgCatalog.Types.Int8;
      freeBytes: PgCatalog.Types.Int8;
      freeChunks: PgCatalog.Types.Int8;
      usedBytes: PgCatalog.Types.Int8;
    };
    export type PgBrinBloomSummary = string;
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
      relpartbound: PgCatalog.Types.PgNodeTree;
    };
    export type PgCollation = {
      oid: PgCatalog.Types.Oid;
      collname: PgCatalog.Types.Name;
      collnamespace: PgCatalog.Types.Oid;
      collowner: PgCatalog.Types.Oid;
      collprovider: PgCatalog.Types.Char;
      collisdeterministic: PgCatalog.Types.Bool;
      collencoding: PgCatalog.Types.Int4;
      collcollate: PgCatalog.Types.Text;
      collctype: PgCatalog.Types.Text;
      colliculocale: PgCatalog.Types.Text;
      collicurules: PgCatalog.Types.Text;
      collversion: PgCatalog.Types.Text;
    };
    export type PgConfig = {
      name: PgCatalog.Types.Text;
      setting: PgCatalog.Types.Text;
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
      conbin: PgCatalog.Types.PgNodeTree;
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
      name: PgCatalog.Types.Text;
      statement: PgCatalog.Types.Text;
      isHoldable: PgCatalog.Types.Bool;
      isBinary: PgCatalog.Types.Bool;
      isScrollable: PgCatalog.Types.Bool;
      creationTime: PgCatalog.Types.Timestamptz;
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
      daticulocale: PgCatalog.Types.Text;
      daticurules: PgCatalog.Types.Text;
      datcollversion: PgCatalog.Types.Text;
      datacl: PgCatalog.Types.AclitemArray;
    };
    export type PgDbRoleSetting = {
      setdatabase: PgCatalog.Types.Oid;
      setrole: PgCatalog.Types.Oid;
      setconfig: PgCatalog.Types.TextArray;
    };
    export type PgDdlCommand = any;
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
      sourcefile: PgCatalog.Types.Text;
      sourceline: PgCatalog.Types.Int4;
      seqno: PgCatalog.Types.Int4;
      name: PgCatalog.Types.Text;
      setting: PgCatalog.Types.Text;
      applied: PgCatalog.Types.Bool;
      error: PgCatalog.Types.Text;
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
      srvtype: PgCatalog.Types.Text;
      srvversion: PgCatalog.Types.Text;
      srvacl: PgCatalog.Types.AclitemArray;
      srvoptions: PgCatalog.Types.TextArray;
    };
    export type PgForeignTable = {
      ftrelid: PgCatalog.Types.Oid;
      ftserver: PgCatalog.Types.Oid;
      ftoptions: PgCatalog.Types.TextArray;
    };
    export type PgGroup = {
      groname: PgCatalog.Types.Name;
      grosysid: PgCatalog.Types.Oid;
      grolist: PgCatalog.Types.OidArray;
    };
    export type PgHbaFileRules = {
      ruleNumber: PgCatalog.Types.Int4;
      fileName: PgCatalog.Types.Text;
      lineNumber: PgCatalog.Types.Int4;
      type: PgCatalog.Types.Text;
      database: PgCatalog.Types.TextArray;
      userName: PgCatalog.Types.TextArray;
      address: PgCatalog.Types.Text;
      netmask: PgCatalog.Types.Text;
      authMethod: PgCatalog.Types.Text;
      options: PgCatalog.Types.TextArray;
      error: PgCatalog.Types.Text;
    };
    export type PgIdentFileMappings = {
      mapNumber: PgCatalog.Types.Int4;
      fileName: PgCatalog.Types.Text;
      lineNumber: PgCatalog.Types.Int4;
      mapName: PgCatalog.Types.Text;
      sysName: PgCatalog.Types.Text;
      pgUsername: PgCatalog.Types.Text;
      error: PgCatalog.Types.Text;
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
      indexprs: PgCatalog.Types.PgNodeTree;
      indpred: PgCatalog.Types.PgNodeTree;
    };
    export type PgIndexes = {
      schemaname: PgCatalog.Types.Name;
      tablename: PgCatalog.Types.Name;
      indexname: PgCatalog.Types.Name;
      tablespace: PgCatalog.Types.Name;
      indexdef: PgCatalog.Types.Text;
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
      locktype: PgCatalog.Types.Text;
      database: PgCatalog.Types.Oid;
      relation: PgCatalog.Types.Oid;
      page: PgCatalog.Types.Int4;
      tuple: PgCatalog.Types.Int2;
      virtualxid: PgCatalog.Types.Text;
      transactionid: PgCatalog.Types.Xid;
      classid: PgCatalog.Types.Oid;
      objid: PgCatalog.Types.Oid;
      objsubid: PgCatalog.Types.Int2;
      virtualtransaction: PgCatalog.Types.Text;
      pid: PgCatalog.Types.Int4;
      mode: PgCatalog.Types.Text;
      granted: PgCatalog.Types.Bool;
      fastpath: PgCatalog.Types.Bool;
      waitstart: PgCatalog.Types.Timestamptz;
    };
    export type PgLsn = bigint;
    export type PgMatviews = {
      schemaname: PgCatalog.Types.Name;
      matviewname: PgCatalog.Types.Name;
      matviewowner: PgCatalog.Types.Name;
      tablespace: PgCatalog.Types.Name;
      hasindexes: PgCatalog.Types.Bool;
      ispopulated: PgCatalog.Types.Bool;
      definition: PgCatalog.Types.Text;
    };
    export type PgMcvList = string;
    export type PgNamespace = {
      oid: PgCatalog.Types.Oid;
      nspname: PgCatalog.Types.Name;
      nspowner: PgCatalog.Types.Oid;
      nspacl: PgCatalog.Types.AclitemArray;
    };
    export type PgNdistinct = string;
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
      partexprs: PgCatalog.Types.PgNodeTree;
    };
    export type PgPolicies = {
      schemaname: PgCatalog.Types.Name;
      tablename: PgCatalog.Types.Name;
      policyname: PgCatalog.Types.Name;
      permissive: PgCatalog.Types.Text;
      roles: PgCatalog.Types.NameArray;
      cmd: PgCatalog.Types.Text;
      qual: PgCatalog.Types.Text;
      withCheck: PgCatalog.Types.Text;
    };
    export type PgPolicy = {
      oid: PgCatalog.Types.Oid;
      polname: PgCatalog.Types.Name;
      polrelid: PgCatalog.Types.Oid;
      polcmd: PgCatalog.Types.Char;
      polpermissive: PgCatalog.Types.Bool;
      polroles: PgCatalog.Types.OidArray;
      polqual: PgCatalog.Types.PgNodeTree;
      polwithcheck: PgCatalog.Types.PgNodeTree;
    };
    export type PgPreparedStatements = {
      name: PgCatalog.Types.Text;
      statement: PgCatalog.Types.Text;
      prepareTime: PgCatalog.Types.Timestamptz;
      parameterTypes: PgCatalog.Types.RegtypeArray;
      resultTypes: PgCatalog.Types.RegtypeArray;
      fromSql: PgCatalog.Types.Bool;
      genericPlans: PgCatalog.Types.Int8;
      customPlans: PgCatalog.Types.Int8;
    };
    export type PgPreparedXacts = {
      transaction: PgCatalog.Types.Xid;
      gid: PgCatalog.Types.Text;
      prepared: PgCatalog.Types.Timestamptz;
      owner: PgCatalog.Types.Name;
      database: PgCatalog.Types.Name;
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
      proargdefaults: PgCatalog.Types.PgNodeTree;
      protrftypes: PgCatalog.Types.OidArray;
      prosrc: PgCatalog.Types.Text;
      probin: PgCatalog.Types.Text;
      prosqlbody: PgCatalog.Types.PgNodeTree;
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
      prqual: PgCatalog.Types.PgNodeTree;
      prattrs: PgCatalog.Types.Int2vector;
    };
    export type PgPublicationTables = {
      pubname: PgCatalog.Types.Name;
      schemaname: PgCatalog.Types.Name;
      tablename: PgCatalog.Types.Name;
      attnames: PgCatalog.Types.NameArray;
      rowfilter: PgCatalog.Types.Text;
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
      localId: PgCatalog.Types.Oid;
      externalId: PgCatalog.Types.Text;
      remoteLsn: PgCatalog.Types.PgLsn;
      localLsn: PgCatalog.Types.PgLsn;
    };
    export type PgReplicationSlots = {
      slotName: PgCatalog.Types.Name;
      plugin: PgCatalog.Types.Name;
      slotType: PgCatalog.Types.Text;
      datoid: PgCatalog.Types.Oid;
      database: PgCatalog.Types.Name;
      temporary: PgCatalog.Types.Bool;
      active: PgCatalog.Types.Bool;
      activePid: PgCatalog.Types.Int4;
      xmin: PgCatalog.Types.Xid;
      catalogXmin: PgCatalog.Types.Xid;
      restartLsn: PgCatalog.Types.PgLsn;
      confirmedFlushLsn: PgCatalog.Types.PgLsn;
      walStatus: PgCatalog.Types.Text;
      safeWalSize: PgCatalog.Types.Int8;
      twoPhase: PgCatalog.Types.Bool;
      conflicting: PgCatalog.Types.Bool;
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
      rolname: PgCatalog.Types.Name;
      rolsuper: PgCatalog.Types.Bool;
      rolinherit: PgCatalog.Types.Bool;
      rolcreaterole: PgCatalog.Types.Bool;
      rolcreatedb: PgCatalog.Types.Bool;
      rolcanlogin: PgCatalog.Types.Bool;
      rolreplication: PgCatalog.Types.Bool;
      rolconnlimit: PgCatalog.Types.Int4;
      rolpassword: PgCatalog.Types.Text;
      rolvaliduntil: PgCatalog.Types.Timestamptz;
      rolbypassrls: PgCatalog.Types.Bool;
      rolconfig: PgCatalog.Types.TextArray;
      oid: PgCatalog.Types.Oid;
    };
    export type PgRules = {
      schemaname: PgCatalog.Types.Name;
      tablename: PgCatalog.Types.Name;
      rulename: PgCatalog.Types.Name;
      definition: PgCatalog.Types.Text;
    };
    export type PgSeclabel = {
      objoid: PgCatalog.Types.Oid;
      classoid: PgCatalog.Types.Oid;
      objsubid: PgCatalog.Types.Int4;
      provider: PgCatalog.Types.Text;
      label: PgCatalog.Types.Text;
    };
    export type PgSeclabels = {
      objoid: PgCatalog.Types.Oid;
      classoid: PgCatalog.Types.Oid;
      objsubid: PgCatalog.Types.Int4;
      objtype: PgCatalog.Types.Text;
      objnamespace: PgCatalog.Types.Oid;
      objname: PgCatalog.Types.Text;
      provider: PgCatalog.Types.Text;
      label: PgCatalog.Types.Text;
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
      schemaname: PgCatalog.Types.Name;
      sequencename: PgCatalog.Types.Name;
      sequenceowner: PgCatalog.Types.Name;
      dataType: PgCatalog.Types.Regtype;
      startValue: PgCatalog.Types.Int8;
      minValue: PgCatalog.Types.Int8;
      maxValue: PgCatalog.Types.Int8;
      incrementBy: PgCatalog.Types.Int8;
      cycle: PgCatalog.Types.Bool;
      cacheSize: PgCatalog.Types.Int8;
      lastValue: PgCatalog.Types.Int8;
    };
    export type PgSettings = {
      name: PgCatalog.Types.Text;
      setting: PgCatalog.Types.Text;
      unit: PgCatalog.Types.Text;
      category: PgCatalog.Types.Text;
      shortDesc: PgCatalog.Types.Text;
      extraDesc: PgCatalog.Types.Text;
      context: PgCatalog.Types.Text;
      vartype: PgCatalog.Types.Text;
      source: PgCatalog.Types.Text;
      minVal: PgCatalog.Types.Text;
      maxVal: PgCatalog.Types.Text;
      enumvals: PgCatalog.Types.TextArray;
      bootVal: PgCatalog.Types.Text;
      resetVal: PgCatalog.Types.Text;
      sourcefile: PgCatalog.Types.Text;
      sourceline: PgCatalog.Types.Int4;
      pendingRestart: PgCatalog.Types.Bool;
    };
    export type PgShadow = {
      usename: PgCatalog.Types.Name;
      usesysid: PgCatalog.Types.Oid;
      usecreatedb: PgCatalog.Types.Bool;
      usesuper: PgCatalog.Types.Bool;
      userepl: PgCatalog.Types.Bool;
      usebypassrls: PgCatalog.Types.Bool;
      passwd: PgCatalog.Types.Text;
      valuntil: PgCatalog.Types.Timestamptz;
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
      name: PgCatalog.Types.Text;
      off: PgCatalog.Types.Int8;
      size: PgCatalog.Types.Int8;
      allocatedSize: PgCatalog.Types.Int8;
    };
    export type PgShseclabel = {
      objoid: PgCatalog.Types.Oid;
      classoid: PgCatalog.Types.Oid;
      provider: PgCatalog.Types.Text;
      label: PgCatalog.Types.Text;
    };
    export type PgSnapshot = string;
    export type PgStatActivity = {
      datid: PgCatalog.Types.Oid;
      datname: PgCatalog.Types.Name;
      pid: PgCatalog.Types.Int4;
      leaderPid: PgCatalog.Types.Int4;
      usesysid: PgCatalog.Types.Oid;
      usename: PgCatalog.Types.Name;
      applicationName: PgCatalog.Types.Text;
      clientAddr: PgCatalog.Types.Inet;
      clientHostname: PgCatalog.Types.Text;
      clientPort: PgCatalog.Types.Int4;
      backendStart: PgCatalog.Types.Timestamptz;
      xactStart: PgCatalog.Types.Timestamptz;
      queryStart: PgCatalog.Types.Timestamptz;
      stateChange: PgCatalog.Types.Timestamptz;
      waitEventType: PgCatalog.Types.Text;
      waitEvent: PgCatalog.Types.Text;
      state: PgCatalog.Types.Text;
      backendXid: PgCatalog.Types.Xid;
      backendXmin: PgCatalog.Types.Xid;
      queryId: PgCatalog.Types.Int8;
      query: PgCatalog.Types.Text;
      backendType: PgCatalog.Types.Text;
    };
    export type PgStatAllIndexes = {
      relid: PgCatalog.Types.Oid;
      indexrelid: PgCatalog.Types.Oid;
      schemaname: PgCatalog.Types.Name;
      relname: PgCatalog.Types.Name;
      indexrelname: PgCatalog.Types.Name;
      idxScan: PgCatalog.Types.Int8;
      lastIdxScan: PgCatalog.Types.Timestamptz;
      idxTupRead: PgCatalog.Types.Int8;
      idxTupFetch: PgCatalog.Types.Int8;
    };
    export type PgStatAllTables = {
      relid: PgCatalog.Types.Oid;
      schemaname: PgCatalog.Types.Name;
      relname: PgCatalog.Types.Name;
      seqScan: PgCatalog.Types.Int8;
      lastSeqScan: PgCatalog.Types.Timestamptz;
      seqTupRead: PgCatalog.Types.Int8;
      idxScan: PgCatalog.Types.Int8;
      lastIdxScan: PgCatalog.Types.Timestamptz;
      idxTupFetch: PgCatalog.Types.Int8;
      nTupIns: PgCatalog.Types.Int8;
      nTupUpd: PgCatalog.Types.Int8;
      nTupDel: PgCatalog.Types.Int8;
      nTupHotUpd: PgCatalog.Types.Int8;
      nTupNewpageUpd: PgCatalog.Types.Int8;
      nLiveTup: PgCatalog.Types.Int8;
      nDeadTup: PgCatalog.Types.Int8;
      nModSinceAnalyze: PgCatalog.Types.Int8;
      nInsSinceVacuum: PgCatalog.Types.Int8;
      lastVacuum: PgCatalog.Types.Timestamptz;
      lastAutovacuum: PgCatalog.Types.Timestamptz;
      lastAnalyze: PgCatalog.Types.Timestamptz;
      lastAutoanalyze: PgCatalog.Types.Timestamptz;
      vacuumCount: PgCatalog.Types.Int8;
      autovacuumCount: PgCatalog.Types.Int8;
      analyzeCount: PgCatalog.Types.Int8;
      autoanalyzeCount: PgCatalog.Types.Int8;
    };
    export type PgStatArchiver = {
      archivedCount: PgCatalog.Types.Int8;
      lastArchivedWal: PgCatalog.Types.Text;
      lastArchivedTime: PgCatalog.Types.Timestamptz;
      failedCount: PgCatalog.Types.Int8;
      lastFailedWal: PgCatalog.Types.Text;
      lastFailedTime: PgCatalog.Types.Timestamptz;
      statsReset: PgCatalog.Types.Timestamptz;
    };
    export type PgStatBgwriter = {
      checkpointsTimed: PgCatalog.Types.Int8;
      checkpointsReq: PgCatalog.Types.Int8;
      checkpointWriteTime: PgCatalog.Types.Float8;
      checkpointSyncTime: PgCatalog.Types.Float8;
      buffersCheckpoint: PgCatalog.Types.Int8;
      buffersClean: PgCatalog.Types.Int8;
      maxwrittenClean: PgCatalog.Types.Int8;
      buffersBackend: PgCatalog.Types.Int8;
      buffersBackendFsync: PgCatalog.Types.Int8;
      buffersAlloc: PgCatalog.Types.Int8;
      statsReset: PgCatalog.Types.Timestamptz;
    };
    export type PgStatDatabase = {
      datid: PgCatalog.Types.Oid;
      datname: PgCatalog.Types.Name;
      numbackends: PgCatalog.Types.Int4;
      xactCommit: PgCatalog.Types.Int8;
      xactRollback: PgCatalog.Types.Int8;
      blksRead: PgCatalog.Types.Int8;
      blksHit: PgCatalog.Types.Int8;
      tupReturned: PgCatalog.Types.Int8;
      tupFetched: PgCatalog.Types.Int8;
      tupInserted: PgCatalog.Types.Int8;
      tupUpdated: PgCatalog.Types.Int8;
      tupDeleted: PgCatalog.Types.Int8;
      conflicts: PgCatalog.Types.Int8;
      tempFiles: PgCatalog.Types.Int8;
      tempBytes: PgCatalog.Types.Int8;
      deadlocks: PgCatalog.Types.Int8;
      checksumFailures: PgCatalog.Types.Int8;
      checksumLastFailure: PgCatalog.Types.Timestamptz;
      blkReadTime: PgCatalog.Types.Float8;
      blkWriteTime: PgCatalog.Types.Float8;
      sessionTime: PgCatalog.Types.Float8;
      activeTime: PgCatalog.Types.Float8;
      idleInTransactionTime: PgCatalog.Types.Float8;
      sessions: PgCatalog.Types.Int8;
      sessionsAbandoned: PgCatalog.Types.Int8;
      sessionsFatal: PgCatalog.Types.Int8;
      sessionsKilled: PgCatalog.Types.Int8;
      statsReset: PgCatalog.Types.Timestamptz;
    };
    export type PgStatDatabaseConflicts = {
      datid: PgCatalog.Types.Oid;
      datname: PgCatalog.Types.Name;
      conflTablespace: PgCatalog.Types.Int8;
      conflLock: PgCatalog.Types.Int8;
      conflSnapshot: PgCatalog.Types.Int8;
      conflBufferpin: PgCatalog.Types.Int8;
      conflDeadlock: PgCatalog.Types.Int8;
      conflActiveLogicalslot: PgCatalog.Types.Int8;
    };
    export type PgStatGssapi = {
      pid: PgCatalog.Types.Int4;
      gssAuthenticated: PgCatalog.Types.Bool;
      principal: PgCatalog.Types.Text;
      encrypted: PgCatalog.Types.Bool;
      credentialsDelegated: PgCatalog.Types.Bool;
    };
    export type PgStatIo = {
      backendType: PgCatalog.Types.Text;
      object: PgCatalog.Types.Text;
      context: PgCatalog.Types.Text;
      reads: PgCatalog.Types.Int8;
      readTime: PgCatalog.Types.Float8;
      writes: PgCatalog.Types.Int8;
      writeTime: PgCatalog.Types.Float8;
      writebacks: PgCatalog.Types.Int8;
      writebackTime: PgCatalog.Types.Float8;
      extends: PgCatalog.Types.Int8;
      extendTime: PgCatalog.Types.Float8;
      opBytes: PgCatalog.Types.Int8;
      hits: PgCatalog.Types.Int8;
      evictions: PgCatalog.Types.Int8;
      reuses: PgCatalog.Types.Int8;
      fsyncs: PgCatalog.Types.Int8;
      fsyncTime: PgCatalog.Types.Float8;
      statsReset: PgCatalog.Types.Timestamptz;
    };
    export type PgStatProgressAnalyze = {
      pid: PgCatalog.Types.Int4;
      datid: PgCatalog.Types.Oid;
      datname: PgCatalog.Types.Name;
      relid: PgCatalog.Types.Oid;
      phase: PgCatalog.Types.Text;
      sampleBlksTotal: PgCatalog.Types.Int8;
      sampleBlksScanned: PgCatalog.Types.Int8;
      extStatsTotal: PgCatalog.Types.Int8;
      extStatsComputed: PgCatalog.Types.Int8;
      childTablesTotal: PgCatalog.Types.Int8;
      childTablesDone: PgCatalog.Types.Int8;
      currentChildTableRelid: PgCatalog.Types.Oid;
    };
    export type PgStatProgressBasebackup = {
      pid: PgCatalog.Types.Int4;
      phase: PgCatalog.Types.Text;
      backupTotal: PgCatalog.Types.Int8;
      backupStreamed: PgCatalog.Types.Int8;
      tablespacesTotal: PgCatalog.Types.Int8;
      tablespacesStreamed: PgCatalog.Types.Int8;
    };
    export type PgStatProgressCluster = {
      pid: PgCatalog.Types.Int4;
      datid: PgCatalog.Types.Oid;
      datname: PgCatalog.Types.Name;
      relid: PgCatalog.Types.Oid;
      command: PgCatalog.Types.Text;
      phase: PgCatalog.Types.Text;
      clusterIndexRelid: PgCatalog.Types.Oid;
      heapTuplesScanned: PgCatalog.Types.Int8;
      heapTuplesWritten: PgCatalog.Types.Int8;
      heapBlksTotal: PgCatalog.Types.Int8;
      heapBlksScanned: PgCatalog.Types.Int8;
      indexRebuildCount: PgCatalog.Types.Int8;
    };
    export type PgStatProgressCopy = {
      pid: PgCatalog.Types.Int4;
      datid: PgCatalog.Types.Oid;
      datname: PgCatalog.Types.Name;
      relid: PgCatalog.Types.Oid;
      command: PgCatalog.Types.Text;
      type: PgCatalog.Types.Text;
      bytesProcessed: PgCatalog.Types.Int8;
      bytesTotal: PgCatalog.Types.Int8;
      tuplesProcessed: PgCatalog.Types.Int8;
      tuplesExcluded: PgCatalog.Types.Int8;
    };
    export type PgStatProgressCreateIndex = {
      pid: PgCatalog.Types.Int4;
      datid: PgCatalog.Types.Oid;
      datname: PgCatalog.Types.Name;
      relid: PgCatalog.Types.Oid;
      indexRelid: PgCatalog.Types.Oid;
      command: PgCatalog.Types.Text;
      phase: PgCatalog.Types.Text;
      lockersTotal: PgCatalog.Types.Int8;
      lockersDone: PgCatalog.Types.Int8;
      currentLockerPid: PgCatalog.Types.Int8;
      blocksTotal: PgCatalog.Types.Int8;
      blocksDone: PgCatalog.Types.Int8;
      tuplesTotal: PgCatalog.Types.Int8;
      tuplesDone: PgCatalog.Types.Int8;
      partitionsTotal: PgCatalog.Types.Int8;
      partitionsDone: PgCatalog.Types.Int8;
    };
    export type PgStatProgressVacuum = {
      pid: PgCatalog.Types.Int4;
      datid: PgCatalog.Types.Oid;
      datname: PgCatalog.Types.Name;
      relid: PgCatalog.Types.Oid;
      phase: PgCatalog.Types.Text;
      heapBlksTotal: PgCatalog.Types.Int8;
      heapBlksScanned: PgCatalog.Types.Int8;
      heapBlksVacuumed: PgCatalog.Types.Int8;
      indexVacuumCount: PgCatalog.Types.Int8;
      maxDeadTuples: PgCatalog.Types.Int8;
      numDeadTuples: PgCatalog.Types.Int8;
    };
    export type PgStatRecoveryPrefetch = {
      statsReset: PgCatalog.Types.Timestamptz;
      prefetch: PgCatalog.Types.Int8;
      hit: PgCatalog.Types.Int8;
      skipInit: PgCatalog.Types.Int8;
      skipNew: PgCatalog.Types.Int8;
      skipFpw: PgCatalog.Types.Int8;
      skipRep: PgCatalog.Types.Int8;
      walDistance: PgCatalog.Types.Int4;
      blockDistance: PgCatalog.Types.Int4;
      ioDepth: PgCatalog.Types.Int4;
    };
    export type PgStatReplication = {
      pid: PgCatalog.Types.Int4;
      usesysid: PgCatalog.Types.Oid;
      usename: PgCatalog.Types.Name;
      applicationName: PgCatalog.Types.Text;
      clientAddr: PgCatalog.Types.Inet;
      clientHostname: PgCatalog.Types.Text;
      clientPort: PgCatalog.Types.Int4;
      backendStart: PgCatalog.Types.Timestamptz;
      backendXmin: PgCatalog.Types.Xid;
      state: PgCatalog.Types.Text;
      sentLsn: PgCatalog.Types.PgLsn;
      writeLsn: PgCatalog.Types.PgLsn;
      flushLsn: PgCatalog.Types.PgLsn;
      replayLsn: PgCatalog.Types.PgLsn;
      writeLag: PgCatalog.Types.Interval;
      flushLag: PgCatalog.Types.Interval;
      replayLag: PgCatalog.Types.Interval;
      syncPriority: PgCatalog.Types.Int4;
      syncState: PgCatalog.Types.Text;
      replyTime: PgCatalog.Types.Timestamptz;
    };
    export type PgStatReplicationSlots = {
      slotName: PgCatalog.Types.Text;
      spillTxns: PgCatalog.Types.Int8;
      spillCount: PgCatalog.Types.Int8;
      spillBytes: PgCatalog.Types.Int8;
      streamTxns: PgCatalog.Types.Int8;
      streamCount: PgCatalog.Types.Int8;
      streamBytes: PgCatalog.Types.Int8;
      totalTxns: PgCatalog.Types.Int8;
      totalBytes: PgCatalog.Types.Int8;
      statsReset: PgCatalog.Types.Timestamptz;
    };
    export type PgStatSlru = {
      name: PgCatalog.Types.Text;
      blksZeroed: PgCatalog.Types.Int8;
      blksHit: PgCatalog.Types.Int8;
      blksRead: PgCatalog.Types.Int8;
      blksWritten: PgCatalog.Types.Int8;
      blksExists: PgCatalog.Types.Int8;
      flushes: PgCatalog.Types.Int8;
      truncates: PgCatalog.Types.Int8;
      statsReset: PgCatalog.Types.Timestamptz;
    };
    export type PgStatSsl = {
      pid: PgCatalog.Types.Int4;
      ssl: PgCatalog.Types.Bool;
      version: PgCatalog.Types.Text;
      cipher: PgCatalog.Types.Text;
      bits: PgCatalog.Types.Int4;
      clientDn: PgCatalog.Types.Text;
      clientSerial: PgCatalog.Types.Numeric;
      issuerDn: PgCatalog.Types.Text;
    };
    export type PgStatSubscription = {
      subid: PgCatalog.Types.Oid;
      subname: PgCatalog.Types.Name;
      pid: PgCatalog.Types.Int4;
      leaderPid: PgCatalog.Types.Int4;
      relid: PgCatalog.Types.Oid;
      receivedLsn: PgCatalog.Types.PgLsn;
      lastMsgSendTime: PgCatalog.Types.Timestamptz;
      lastMsgReceiptTime: PgCatalog.Types.Timestamptz;
      latestEndLsn: PgCatalog.Types.PgLsn;
      latestEndTime: PgCatalog.Types.Timestamptz;
    };
    export type PgStatSubscriptionStats = {
      subid: PgCatalog.Types.Oid;
      subname: PgCatalog.Types.Name;
      applyErrorCount: PgCatalog.Types.Int8;
      syncErrorCount: PgCatalog.Types.Int8;
      statsReset: PgCatalog.Types.Timestamptz;
    };
    export type PgStatSysIndexes = {
      relid: PgCatalog.Types.Oid;
      indexrelid: PgCatalog.Types.Oid;
      schemaname: PgCatalog.Types.Name;
      relname: PgCatalog.Types.Name;
      indexrelname: PgCatalog.Types.Name;
      idxScan: PgCatalog.Types.Int8;
      lastIdxScan: PgCatalog.Types.Timestamptz;
      idxTupRead: PgCatalog.Types.Int8;
      idxTupFetch: PgCatalog.Types.Int8;
    };
    export type PgStatSysTables = {
      relid: PgCatalog.Types.Oid;
      schemaname: PgCatalog.Types.Name;
      relname: PgCatalog.Types.Name;
      seqScan: PgCatalog.Types.Int8;
      lastSeqScan: PgCatalog.Types.Timestamptz;
      seqTupRead: PgCatalog.Types.Int8;
      idxScan: PgCatalog.Types.Int8;
      lastIdxScan: PgCatalog.Types.Timestamptz;
      idxTupFetch: PgCatalog.Types.Int8;
      nTupIns: PgCatalog.Types.Int8;
      nTupUpd: PgCatalog.Types.Int8;
      nTupDel: PgCatalog.Types.Int8;
      nTupHotUpd: PgCatalog.Types.Int8;
      nTupNewpageUpd: PgCatalog.Types.Int8;
      nLiveTup: PgCatalog.Types.Int8;
      nDeadTup: PgCatalog.Types.Int8;
      nModSinceAnalyze: PgCatalog.Types.Int8;
      nInsSinceVacuum: PgCatalog.Types.Int8;
      lastVacuum: PgCatalog.Types.Timestamptz;
      lastAutovacuum: PgCatalog.Types.Timestamptz;
      lastAnalyze: PgCatalog.Types.Timestamptz;
      lastAutoanalyze: PgCatalog.Types.Timestamptz;
      vacuumCount: PgCatalog.Types.Int8;
      autovacuumCount: PgCatalog.Types.Int8;
      analyzeCount: PgCatalog.Types.Int8;
      autoanalyzeCount: PgCatalog.Types.Int8;
    };
    export type PgStatUserFunctions = {
      funcid: PgCatalog.Types.Oid;
      schemaname: PgCatalog.Types.Name;
      funcname: PgCatalog.Types.Name;
      calls: PgCatalog.Types.Int8;
      totalTime: PgCatalog.Types.Float8;
      selfTime: PgCatalog.Types.Float8;
    };
    export type PgStatUserIndexes = {
      relid: PgCatalog.Types.Oid;
      indexrelid: PgCatalog.Types.Oid;
      schemaname: PgCatalog.Types.Name;
      relname: PgCatalog.Types.Name;
      indexrelname: PgCatalog.Types.Name;
      idxScan: PgCatalog.Types.Int8;
      lastIdxScan: PgCatalog.Types.Timestamptz;
      idxTupRead: PgCatalog.Types.Int8;
      idxTupFetch: PgCatalog.Types.Int8;
    };
    export type PgStatUserTables = {
      relid: PgCatalog.Types.Oid;
      schemaname: PgCatalog.Types.Name;
      relname: PgCatalog.Types.Name;
      seqScan: PgCatalog.Types.Int8;
      lastSeqScan: PgCatalog.Types.Timestamptz;
      seqTupRead: PgCatalog.Types.Int8;
      idxScan: PgCatalog.Types.Int8;
      lastIdxScan: PgCatalog.Types.Timestamptz;
      idxTupFetch: PgCatalog.Types.Int8;
      nTupIns: PgCatalog.Types.Int8;
      nTupUpd: PgCatalog.Types.Int8;
      nTupDel: PgCatalog.Types.Int8;
      nTupHotUpd: PgCatalog.Types.Int8;
      nTupNewpageUpd: PgCatalog.Types.Int8;
      nLiveTup: PgCatalog.Types.Int8;
      nDeadTup: PgCatalog.Types.Int8;
      nModSinceAnalyze: PgCatalog.Types.Int8;
      nInsSinceVacuum: PgCatalog.Types.Int8;
      lastVacuum: PgCatalog.Types.Timestamptz;
      lastAutovacuum: PgCatalog.Types.Timestamptz;
      lastAnalyze: PgCatalog.Types.Timestamptz;
      lastAutoanalyze: PgCatalog.Types.Timestamptz;
      vacuumCount: PgCatalog.Types.Int8;
      autovacuumCount: PgCatalog.Types.Int8;
      analyzeCount: PgCatalog.Types.Int8;
      autoanalyzeCount: PgCatalog.Types.Int8;
    };
    export type PgStatWal = {
      walRecords: PgCatalog.Types.Int8;
      walFpi: PgCatalog.Types.Int8;
      walBytes: PgCatalog.Types.Numeric;
      walBuffersFull: PgCatalog.Types.Int8;
      walWrite: PgCatalog.Types.Int8;
      walSync: PgCatalog.Types.Int8;
      walWriteTime: PgCatalog.Types.Float8;
      walSyncTime: PgCatalog.Types.Float8;
      statsReset: PgCatalog.Types.Timestamptz;
    };
    export type PgStatWalReceiver = {
      pid: PgCatalog.Types.Int4;
      status: PgCatalog.Types.Text;
      receiveStartLsn: PgCatalog.Types.PgLsn;
      receiveStartTli: PgCatalog.Types.Int4;
      writtenLsn: PgCatalog.Types.PgLsn;
      flushedLsn: PgCatalog.Types.PgLsn;
      receivedTli: PgCatalog.Types.Int4;
      lastMsgSendTime: PgCatalog.Types.Timestamptz;
      lastMsgReceiptTime: PgCatalog.Types.Timestamptz;
      latestEndLsn: PgCatalog.Types.PgLsn;
      latestEndTime: PgCatalog.Types.Timestamptz;
      slotName: PgCatalog.Types.Text;
      senderHost: PgCatalog.Types.Text;
      senderPort: PgCatalog.Types.Int4;
      conninfo: PgCatalog.Types.Text;
    };
    export type PgStatXactAllTables = {
      relid: PgCatalog.Types.Oid;
      schemaname: PgCatalog.Types.Name;
      relname: PgCatalog.Types.Name;
      seqScan: PgCatalog.Types.Int8;
      seqTupRead: PgCatalog.Types.Int8;
      idxScan: PgCatalog.Types.Int8;
      idxTupFetch: PgCatalog.Types.Int8;
      nTupIns: PgCatalog.Types.Int8;
      nTupUpd: PgCatalog.Types.Int8;
      nTupDel: PgCatalog.Types.Int8;
      nTupHotUpd: PgCatalog.Types.Int8;
      nTupNewpageUpd: PgCatalog.Types.Int8;
    };
    export type PgStatXactSysTables = {
      relid: PgCatalog.Types.Oid;
      schemaname: PgCatalog.Types.Name;
      relname: PgCatalog.Types.Name;
      seqScan: PgCatalog.Types.Int8;
      seqTupRead: PgCatalog.Types.Int8;
      idxScan: PgCatalog.Types.Int8;
      idxTupFetch: PgCatalog.Types.Int8;
      nTupIns: PgCatalog.Types.Int8;
      nTupUpd: PgCatalog.Types.Int8;
      nTupDel: PgCatalog.Types.Int8;
      nTupHotUpd: PgCatalog.Types.Int8;
      nTupNewpageUpd: PgCatalog.Types.Int8;
    };
    export type PgStatXactUserFunctions = {
      funcid: PgCatalog.Types.Oid;
      schemaname: PgCatalog.Types.Name;
      funcname: PgCatalog.Types.Name;
      calls: PgCatalog.Types.Int8;
      totalTime: PgCatalog.Types.Float8;
      selfTime: PgCatalog.Types.Float8;
    };
    export type PgStatXactUserTables = {
      relid: PgCatalog.Types.Oid;
      schemaname: PgCatalog.Types.Name;
      relname: PgCatalog.Types.Name;
      seqScan: PgCatalog.Types.Int8;
      seqTupRead: PgCatalog.Types.Int8;
      idxScan: PgCatalog.Types.Int8;
      idxTupFetch: PgCatalog.Types.Int8;
      nTupIns: PgCatalog.Types.Int8;
      nTupUpd: PgCatalog.Types.Int8;
      nTupDel: PgCatalog.Types.Int8;
      nTupHotUpd: PgCatalog.Types.Int8;
      nTupNewpageUpd: PgCatalog.Types.Int8;
    };
    export type PgStatioAllIndexes = {
      relid: PgCatalog.Types.Oid;
      indexrelid: PgCatalog.Types.Oid;
      schemaname: PgCatalog.Types.Name;
      relname: PgCatalog.Types.Name;
      indexrelname: PgCatalog.Types.Name;
      idxBlksRead: PgCatalog.Types.Int8;
      idxBlksHit: PgCatalog.Types.Int8;
    };
    export type PgStatioAllSequences = {
      relid: PgCatalog.Types.Oid;
      schemaname: PgCatalog.Types.Name;
      relname: PgCatalog.Types.Name;
      blksRead: PgCatalog.Types.Int8;
      blksHit: PgCatalog.Types.Int8;
    };
    export type PgStatioAllTables = {
      relid: PgCatalog.Types.Oid;
      schemaname: PgCatalog.Types.Name;
      relname: PgCatalog.Types.Name;
      heapBlksRead: PgCatalog.Types.Int8;
      heapBlksHit: PgCatalog.Types.Int8;
      idxBlksRead: PgCatalog.Types.Int8;
      idxBlksHit: PgCatalog.Types.Int8;
      toastBlksRead: PgCatalog.Types.Int8;
      toastBlksHit: PgCatalog.Types.Int8;
      tidxBlksRead: PgCatalog.Types.Int8;
      tidxBlksHit: PgCatalog.Types.Int8;
    };
    export type PgStatioSysIndexes = {
      relid: PgCatalog.Types.Oid;
      indexrelid: PgCatalog.Types.Oid;
      schemaname: PgCatalog.Types.Name;
      relname: PgCatalog.Types.Name;
      indexrelname: PgCatalog.Types.Name;
      idxBlksRead: PgCatalog.Types.Int8;
      idxBlksHit: PgCatalog.Types.Int8;
    };
    export type PgStatioSysSequences = {
      relid: PgCatalog.Types.Oid;
      schemaname: PgCatalog.Types.Name;
      relname: PgCatalog.Types.Name;
      blksRead: PgCatalog.Types.Int8;
      blksHit: PgCatalog.Types.Int8;
    };
    export type PgStatioSysTables = {
      relid: PgCatalog.Types.Oid;
      schemaname: PgCatalog.Types.Name;
      relname: PgCatalog.Types.Name;
      heapBlksRead: PgCatalog.Types.Int8;
      heapBlksHit: PgCatalog.Types.Int8;
      idxBlksRead: PgCatalog.Types.Int8;
      idxBlksHit: PgCatalog.Types.Int8;
      toastBlksRead: PgCatalog.Types.Int8;
      toastBlksHit: PgCatalog.Types.Int8;
      tidxBlksRead: PgCatalog.Types.Int8;
      tidxBlksHit: PgCatalog.Types.Int8;
    };
    export type PgStatioUserIndexes = {
      relid: PgCatalog.Types.Oid;
      indexrelid: PgCatalog.Types.Oid;
      schemaname: PgCatalog.Types.Name;
      relname: PgCatalog.Types.Name;
      indexrelname: PgCatalog.Types.Name;
      idxBlksRead: PgCatalog.Types.Int8;
      idxBlksHit: PgCatalog.Types.Int8;
    };
    export type PgStatioUserSequences = {
      relid: PgCatalog.Types.Oid;
      schemaname: PgCatalog.Types.Name;
      relname: PgCatalog.Types.Name;
      blksRead: PgCatalog.Types.Int8;
      blksHit: PgCatalog.Types.Int8;
    };
    export type PgStatioUserTables = {
      relid: PgCatalog.Types.Oid;
      schemaname: PgCatalog.Types.Name;
      relname: PgCatalog.Types.Name;
      heapBlksRead: PgCatalog.Types.Int8;
      heapBlksHit: PgCatalog.Types.Int8;
      idxBlksRead: PgCatalog.Types.Int8;
      idxBlksHit: PgCatalog.Types.Int8;
      toastBlksRead: PgCatalog.Types.Int8;
      toastBlksHit: PgCatalog.Types.Int8;
      tidxBlksRead: PgCatalog.Types.Int8;
      tidxBlksHit: PgCatalog.Types.Int8;
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
      stavalues1: PgCatalog.Types.Anyarray;
      stavalues2: PgCatalog.Types.Anyarray;
      stavalues3: PgCatalog.Types.Anyarray;
      stavalues4: PgCatalog.Types.Anyarray;
      stavalues5: PgCatalog.Types.Anyarray;
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
      stxexprs: PgCatalog.Types.PgNodeTree;
    };
    export type PgStatisticExtData = {
      stxoid: PgCatalog.Types.Oid;
      stxdinherit: PgCatalog.Types.Bool;
      stxdndistinct: PgCatalog.Types.PgNdistinct;
      stxddependencies: PgCatalog.Types.PgDependencies;
      stxdmcv: PgCatalog.Types.PgMcvList;
      stxdexpr: PgCatalog.Types.PgStatisticArray;
    };
    export type PgStats = {
      schemaname: PgCatalog.Types.Name;
      tablename: PgCatalog.Types.Name;
      attname: PgCatalog.Types.Name;
      inherited: PgCatalog.Types.Bool;
      nullFrac: PgCatalog.Types.Float4;
      avgWidth: PgCatalog.Types.Int4;
      nDistinct: PgCatalog.Types.Float4;
      mostCommonVals: PgCatalog.Types.Anyarray;
      mostCommonFreqs: PgCatalog.Types.Float4Array;
      histogramBounds: PgCatalog.Types.Anyarray;
      correlation: PgCatalog.Types.Float4;
      mostCommonElems: PgCatalog.Types.Anyarray;
      mostCommonElemFreqs: PgCatalog.Types.Float4Array;
      elemCountHistogram: PgCatalog.Types.Float4Array;
    };
    export type PgStatsExt = {
      schemaname: PgCatalog.Types.Name;
      tablename: PgCatalog.Types.Name;
      statisticsSchemaname: PgCatalog.Types.Name;
      statisticsName: PgCatalog.Types.Name;
      statisticsOwner: PgCatalog.Types.Name;
      attnames: PgCatalog.Types.NameArray;
      exprs: PgCatalog.Types.TextArray;
      kinds: PgCatalog.Types.CharArray;
      inherited: PgCatalog.Types.Bool;
      nDistinct: PgCatalog.Types.PgNdistinct;
      dependencies: PgCatalog.Types.PgDependencies;
      mostCommonVals: PgCatalog.Types.TextArray;
      mostCommonValNulls: PgCatalog.Types.BoolArray;
      mostCommonFreqs: PgCatalog.Types.Float8Array;
      mostCommonBaseFreqs: PgCatalog.Types.Float8Array;
    };
    export type PgStatsExtExprs = {
      schemaname: PgCatalog.Types.Name;
      tablename: PgCatalog.Types.Name;
      statisticsSchemaname: PgCatalog.Types.Name;
      statisticsName: PgCatalog.Types.Name;
      statisticsOwner: PgCatalog.Types.Name;
      expr: PgCatalog.Types.Text;
      inherited: PgCatalog.Types.Bool;
      nullFrac: PgCatalog.Types.Float4;
      avgWidth: PgCatalog.Types.Int4;
      nDistinct: PgCatalog.Types.Float4;
      mostCommonVals: PgCatalog.Types.Anyarray;
      mostCommonFreqs: PgCatalog.Types.Float4Array;
      histogramBounds: PgCatalog.Types.Anyarray;
      correlation: PgCatalog.Types.Float4;
      mostCommonElems: PgCatalog.Types.Anyarray;
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
      subslotname: PgCatalog.Types.Name;
      subsynccommit: PgCatalog.Types.Text;
      subpublications: PgCatalog.Types.TextArray;
      suborigin: PgCatalog.Types.Text;
    };
    export type PgSubscriptionRel = {
      srsubid: PgCatalog.Types.Oid;
      srrelid: PgCatalog.Types.Oid;
      srsubstate: PgCatalog.Types.Char;
      srsublsn: PgCatalog.Types.PgLsn;
    };
    export type PgTables = {
      schemaname: PgCatalog.Types.Name;
      tablename: PgCatalog.Types.Name;
      tableowner: PgCatalog.Types.Name;
      tablespace: PgCatalog.Types.Name;
      hasindexes: PgCatalog.Types.Bool;
      hasrules: PgCatalog.Types.Bool;
      hastriggers: PgCatalog.Types.Bool;
      rowsecurity: PgCatalog.Types.Bool;
    };
    export type PgTablespace = {
      oid: PgCatalog.Types.Oid;
      spcname: PgCatalog.Types.Name;
      spcowner: PgCatalog.Types.Oid;
      spcacl: PgCatalog.Types.AclitemArray;
      spcoptions: PgCatalog.Types.TextArray;
    };
    export type PgTimezoneAbbrevs = {
      abbrev: PgCatalog.Types.Text;
      utcOffset: PgCatalog.Types.Interval;
      isDst: PgCatalog.Types.Bool;
    };
    export type PgTimezoneNames = {
      name: PgCatalog.Types.Text;
      abbrev: PgCatalog.Types.Text;
      utcOffset: PgCatalog.Types.Interval;
      isDst: PgCatalog.Types.Bool;
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
      tgqual: PgCatalog.Types.PgNodeTree;
      tgoldtable: PgCatalog.Types.Name;
      tgnewtable: PgCatalog.Types.Name;
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
      dictinitoption: PgCatalog.Types.Text;
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
      typdefaultbin: PgCatalog.Types.PgNodeTree;
      typdefault: PgCatalog.Types.Text;
      typacl: PgCatalog.Types.AclitemArray;
    };
    export type PgUser = {
      usename: PgCatalog.Types.Name;
      usesysid: PgCatalog.Types.Oid;
      usecreatedb: PgCatalog.Types.Bool;
      usesuper: PgCatalog.Types.Bool;
      userepl: PgCatalog.Types.Bool;
      usebypassrls: PgCatalog.Types.Bool;
      passwd: PgCatalog.Types.Text;
      valuntil: PgCatalog.Types.Timestamptz;
      useconfig: PgCatalog.Types.TextArray;
    };
    export type PgUserMapping = {
      oid: PgCatalog.Types.Oid;
      umuser: PgCatalog.Types.Oid;
      umserver: PgCatalog.Types.Oid;
      umoptions: PgCatalog.Types.TextArray;
    };
    export type PgUserMappings = {
      umid: PgCatalog.Types.Oid;
      srvid: PgCatalog.Types.Oid;
      srvname: PgCatalog.Types.Name;
      umuser: PgCatalog.Types.Oid;
      usename: PgCatalog.Types.Name;
      umoptions: PgCatalog.Types.TextArray;
    };
    export type PgViews = {
      schemaname: PgCatalog.Types.Name;
      viewname: PgCatalog.Types.Name;
      viewowner: PgCatalog.Types.Name;
      definition: PgCatalog.Types.Text;
    };
    export type Point = {
      x: number;
      y: number;
    };
    export type Polygon = string;
    export type Record = any;
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
    export type TableAmHandler = any;
    export type Text = string;
    export type Tid = {
      blockNumber: number;
      tupleIndex: number;
    };
    export type Time = JsDate;
    export type Timestamp = JsDate;
    export type Timestamptz = JsDate;
    export type Timetz = JsDate;
    export type Trigger = any;
    export type TsmHandler = any;
    export type Tsmultirange = any;
    export type Tsquery = string;
    export type Tsrange = [
      PgCatalog.Types.Timestamp,
      PgCatalog.Types.Timestamp,
    ];
    export type Tstzmultirange = any;
    export type Tstzrange = [
      PgCatalog.Types.Timestamptz,
      PgCatalog.Types.Timestamptz,
    ];
    export type Tsvector = string;
    export type TxidSnapshot = string;
    export type Unknown = any;
    export type Uuid = UUID;
    export type Varbit = boolean;
    export type Varchar = string;
    export type Void = any;
    export type Xid = string;
    export type Xid8 = string;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByStarelidStaattnumStainherit = {
        starelid: PgCatalog.Types.Oid;
        staattnum: PgCatalog.Types.Int2;
        stainherit: PgCatalog.Types.Bool;
      };
      export type PrimaryKey = ByStarelidStaattnumStainherit;

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type ByTypnameTypnamespace = {
        typname: PgCatalog.Types.Cstring;
        typnamespace: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
    }
    export namespace PgForeignTable {
      export type Record = {
        ftrelid: PgCatalog.Types.PgForeignTable["ftrelid"];
        ftserver: PgCatalog.Types.PgForeignTable["ftserver"];
        ftoptions: PgCatalog.Types.PgForeignTable["ftoptions"] | null;
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByFtrelid = {
        ftrelid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByFtrelid;

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type ByRolname = {
        rolname: PgCatalog.Types.Cstring;
      };

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByStxoidStxdinherit = {
        stxoid: PgCatalog.Types.Oid;
        stxdinherit: PgCatalog.Types.Bool;
      };
      export type PrimaryKey = ByStxoidStxdinherit;

      export type Optional = Pick<Record, never>;
    }
    export namespace PgUserMapping {
      export type Record = {
        oid: PgCatalog.Types.PgUserMapping["oid"];
        umuser: PgCatalog.Types.PgUserMapping["umuser"];
        umserver: PgCatalog.Types.PgUserMapping["umserver"];
        umoptions: PgCatalog.Types.PgUserMapping["umoptions"] | null;
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type ByUmuserUmserver = {
        umuser: PgCatalog.Types.Oid;
        umserver: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type BySubdbidSubname = {
        subdbid: PgCatalog.Types.Oid;
        subname: PgCatalog.Types.Cstring;
      };

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByAttrelidAttname = {
        attrelid: PgCatalog.Types.Oid;
        attname: PgCatalog.Types.Cstring;
      };

      export type ByAttrelidAttnum = {
        attrelid: PgCatalog.Types.Oid;
        attnum: PgCatalog.Types.Int2;
      };
      export type PrimaryKey = ByAttrelidAttnum;

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type ByPronameProargtypesPronamespace = {
        proname: PgCatalog.Types.Cstring;
        proargtypes: PgCatalog.Types.Oidvector;
        pronamespace: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type ByRelnameRelnamespace = {
        relname: PgCatalog.Types.Cstring;
        relnamespace: PgCatalog.Types.Oid;
      };

      export type ByReltablespaceRelfilenode = {
        reltablespace: PgCatalog.Types.Oid;
        relfilenode: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
    }
    export namespace PgAttrdef {
      export type Record = {
        oid: PgCatalog.Types.PgAttrdef["oid"];
        adrelid: PgCatalog.Types.PgAttrdef["adrelid"];
        adnum: PgCatalog.Types.PgAttrdef["adnum"];
        adbin: PgCatalog.Types.PgAttrdef["adbin"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByAdrelidAdnum = {
        adrelid: PgCatalog.Types.Oid;
        adnum: PgCatalog.Types.Int2;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

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
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
    }
    export namespace PgInherits {
      export type Record = {
        inhrelid: PgCatalog.Types.PgInherits["inhrelid"];
        inhparent: PgCatalog.Types.PgInherits["inhparent"];
        inhseqno: PgCatalog.Types.PgInherits["inhseqno"];
        inhdetachpending: PgCatalog.Types.PgInherits["inhdetachpending"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByInhparent = {
        inhparent: PgCatalog.Types.Oid;
      };

      export type ByInhrelidInhseqno = {
        inhrelid: PgCatalog.Types.Oid;
        inhseqno: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByInhrelidInhseqno;

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByIndexrelid = {
        indexrelid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByIndexrelid;
      export type ByIndrelid = {
        indrelid: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type ByOprnameOprleftOprrightOprnamespace = {
        oprname: PgCatalog.Types.Cstring;
        oprleft: PgCatalog.Types.Oid;
        oprright: PgCatalog.Types.Oid;
        oprnamespace: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
    }
    export namespace PgOpfamily {
      export type Record = {
        oid: PgCatalog.Types.PgOpfamily["oid"];
        opfmethod: PgCatalog.Types.PgOpfamily["opfmethod"];
        opfname: PgCatalog.Types.PgOpfamily["opfname"];
        opfnamespace: PgCatalog.Types.PgOpfamily["opfnamespace"];
        opfowner: PgCatalog.Types.PgOpfamily["opfowner"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type ByOpfmethodOpfnameOpfnamespace = {
        opfmethod: PgCatalog.Types.Oid;
        opfname: PgCatalog.Types.Cstring;
        opfnamespace: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type ByOpcmethodOpcnameOpcnamespace = {
        opcmethod: PgCatalog.Types.Oid;
        opcname: PgCatalog.Types.Cstring;
        opcnamespace: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
    }
    export namespace PgAm {
      export type Record = {
        oid: PgCatalog.Types.PgAm["oid"];
        amname: PgCatalog.Types.PgAm["amname"];
        amhandler: PgCatalog.Types.PgAm["amhandler"];
        amtype: PgCatalog.Types.PgAm["amtype"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByAmname = {
        amname: PgCatalog.Types.Cstring;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

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
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByAmprocfamilyAmproclefttypeAmprocrighttypeAmprocnum = {
        amprocfamily: PgCatalog.Types.Oid;
        amproclefttype: PgCatalog.Types.Oid;
        amprocrighttype: PgCatalog.Types.Oid;
        amprocnum: PgCatalog.Types.Int2;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByLanname = {
        lanname: PgCatalog.Types.Cstring;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
    }
    export namespace PgLargeobjectMetadata {
      export type Record = {
        oid: PgCatalog.Types.PgLargeobjectMetadata["oid"];
        lomowner: PgCatalog.Types.PgLargeobjectMetadata["lomowner"];
        lomacl: PgCatalog.Types.PgLargeobjectMetadata["lomacl"] | null;
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByAggfnoid = {
        aggfnoid: PgCatalog.Types.Regproc;
      };
      export type PrimaryKey = ByAggfnoid;

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type ByStxnameStxnamespace = {
        stxname: PgCatalog.Types.Cstring;
        stxnamespace: PgCatalog.Types.Oid;
      };

      export type ByStxrelid = {
        stxrelid: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByEvClassRulename = {
        evClass: PgCatalog.Types.Oid;
        rulename: PgCatalog.Types.Cstring;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type ByTgconstraint = {
        tgconstraint: PgCatalog.Types.Oid;
      };

      export type ByTgrelidTgname = {
        tgrelid: PgCatalog.Types.Oid;
        tgname: PgCatalog.Types.Cstring;
      };

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByEvtname = {
        evtname: PgCatalog.Types.Cstring;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
    }
    export namespace PgDescription {
      export type Record = {
        objoid: PgCatalog.Types.PgDescription["objoid"];
        classoid: PgCatalog.Types.PgDescription["classoid"];
        objsubid: PgCatalog.Types.PgDescription["objsubid"];
        description: PgCatalog.Types.PgDescription["description"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByObjoidClassoidObjsubid = {
        objoid: PgCatalog.Types.Oid;
        classoid: PgCatalog.Types.Oid;
        objsubid: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByObjoidClassoidObjsubid;

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByCastsourceCasttarget = {
        castsource: PgCatalog.Types.Oid;
        casttarget: PgCatalog.Types.Oid;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
    }
    export namespace PgEnum {
      export type Record = {
        oid: PgCatalog.Types.PgEnum["oid"];
        enumtypid: PgCatalog.Types.PgEnum["enumtypid"];
        enumsortorder: PgCatalog.Types.PgEnum["enumsortorder"];
        enumlabel: PgCatalog.Types.PgEnum["enumlabel"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

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
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
    }
    export namespace PgNamespace {
      export type Record = {
        oid: PgCatalog.Types.PgNamespace["oid"];
        nspname: PgCatalog.Types.PgNamespace["nspname"];
        nspowner: PgCatalog.Types.PgNamespace["nspowner"];
        nspacl: PgCatalog.Types.PgNamespace["nspacl"] | null;
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByNspname = {
        nspname: PgCatalog.Types.Cstring;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

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
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

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

      export type PrimaryKey = never;
      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByDatname = {
        datname: PgCatalog.Types.Cstring;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
    }
    export namespace PgDbRoleSetting {
      export type Record = {
        setdatabase: PgCatalog.Types.PgDbRoleSetting["setdatabase"];
        setrole: PgCatalog.Types.PgDbRoleSetting["setrole"];
        setconfig: PgCatalog.Types.PgDbRoleSetting["setconfig"] | null;
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type BySetdatabaseSetrole = {
        setdatabase: PgCatalog.Types.Oid;
        setrole: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = BySetdatabaseSetrole;

      export type Optional = Pick<Record, never>;
    }
    export namespace PgTablespace {
      export type Record = {
        oid: PgCatalog.Types.PgTablespace["oid"];
        spcname: PgCatalog.Types.PgTablespace["spcname"];
        spcowner: PgCatalog.Types.PgTablespace["spcowner"];
        spcacl: PgCatalog.Types.PgTablespace["spcacl"] | null;
        spcoptions: PgCatalog.Types.PgTablespace["spcoptions"] | null;
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type BySpcname = {
        spcname: PgCatalog.Types.Cstring;
      };

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

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
      export type PrimaryKey = ByOid;
      export type ByRoleidMemberGrantor = {
        roleid: PgCatalog.Types.Oid;
        member: PgCatalog.Types.Oid;
        grantor: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

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

      export type PrimaryKey = never;
      export type Optional = Pick<Record, never>;
    }
    export namespace PgShdescription {
      export type Record = {
        objoid: PgCatalog.Types.PgShdescription["objoid"];
        classoid: PgCatalog.Types.PgShdescription["classoid"];
        description: PgCatalog.Types.PgShdescription["description"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByObjoidClassoid = {
        objoid: PgCatalog.Types.Oid;
        classoid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByObjoidClassoid;

      export type Optional = Pick<Record, never>;
    }
    export namespace PgTsConfig {
      export type Record = {
        oid: PgCatalog.Types.PgTsConfig["oid"];
        cfgname: PgCatalog.Types.PgTsConfig["cfgname"];
        cfgnamespace: PgCatalog.Types.PgTsConfig["cfgnamespace"];
        cfgowner: PgCatalog.Types.PgTsConfig["cfgowner"];
        cfgparser: PgCatalog.Types.PgTsConfig["cfgparser"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByCfgnameCfgnamespace = {
        cfgname: PgCatalog.Types.Cstring;
        cfgnamespace: PgCatalog.Types.Oid;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
    }
    export namespace PgTsConfigMap {
      export type Record = {
        mapcfg: PgCatalog.Types.PgTsConfigMap["mapcfg"];
        maptokentype: PgCatalog.Types.PgTsConfigMap["maptokentype"];
        mapseqno: PgCatalog.Types.PgTsConfigMap["mapseqno"];
        mapdict: PgCatalog.Types.PgTsConfigMap["mapdict"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByMapcfgMaptokentypeMapseqno = {
        mapcfg: PgCatalog.Types.Oid;
        maptokentype: PgCatalog.Types.Int4;
        mapseqno: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByMapcfgMaptokentypeMapseqno;

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByDictnameDictnamespace = {
        dictname: PgCatalog.Types.Cstring;
        dictnamespace: PgCatalog.Types.Oid;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type ByPrsnamePrsnamespace = {
        prsname: PgCatalog.Types.Cstring;
        prsnamespace: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
    }
    export namespace PgTsTemplate {
      export type Record = {
        oid: PgCatalog.Types.PgTsTemplate["oid"];
        tmplname: PgCatalog.Types.PgTsTemplate["tmplname"];
        tmplnamespace: PgCatalog.Types.PgTsTemplate["tmplnamespace"];
        tmplinit: PgCatalog.Types.PgTsTemplate["tmplinit"];
        tmpllexize: PgCatalog.Types.PgTsTemplate["tmpllexize"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type ByTmplnameTmplnamespace = {
        tmplname: PgCatalog.Types.Cstring;
        tmplnamespace: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByExtname = {
        extname: PgCatalog.Types.Cstring;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByFdwname = {
        fdwname: PgCatalog.Types.Cstring;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type BySrvname = {
        srvname: PgCatalog.Types.Cstring;
      };

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type ByPolrelidPolname = {
        polrelid: PgCatalog.Types.Oid;
        polname: PgCatalog.Types.Cstring;
      };

      export type Optional = Pick<Record, never>;
    }
    export namespace PgReplicationOrigin {
      export type Record = {
        roident: PgCatalog.Types.PgReplicationOrigin["roident"];
        roname: PgCatalog.Types.PgReplicationOrigin["roname"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByRoident = {
        roident: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByRoident;
      export type ByRoname = {
        roname: PgCatalog.Types.Text;
      };

      export type Optional = Pick<Record, never>;
    }
    export namespace PgDefaultAcl {
      export type Record = {
        oid: PgCatalog.Types.PgDefaultAcl["oid"];
        defaclrole: PgCatalog.Types.PgDefaultAcl["defaclrole"];
        defaclnamespace: PgCatalog.Types.PgDefaultAcl["defaclnamespace"];
        defaclobjtype: PgCatalog.Types.PgDefaultAcl["defaclobjtype"];
        defaclacl: PgCatalog.Types.PgDefaultAcl["defaclacl"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByDefaclroleDefaclnamespaceDefaclobjtype = {
        defaclrole: PgCatalog.Types.Oid;
        defaclnamespace: PgCatalog.Types.Oid;
        defaclobjtype: PgCatalog.Types.Char;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
    }
    export namespace PgInitPrivs {
      export type Record = {
        objoid: PgCatalog.Types.PgInitPrivs["objoid"];
        classoid: PgCatalog.Types.PgInitPrivs["classoid"];
        objsubid: PgCatalog.Types.PgInitPrivs["objsubid"];
        privtype: PgCatalog.Types.PgInitPrivs["privtype"];
        initprivs: PgCatalog.Types.PgInitPrivs["initprivs"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByObjoidClassoidObjsubid = {
        objoid: PgCatalog.Types.Oid;
        classoid: PgCatalog.Types.Oid;
        objsubid: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByObjoidClassoidObjsubid;

      export type Optional = Pick<Record, never>;
    }
    export namespace PgSeclabel {
      export type Record = {
        objoid: PgCatalog.Types.PgSeclabel["objoid"];
        classoid: PgCatalog.Types.PgSeclabel["classoid"];
        objsubid: PgCatalog.Types.PgSeclabel["objsubid"];
        provider: PgCatalog.Types.PgSeclabel["provider"];
        label: PgCatalog.Types.PgSeclabel["label"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByObjoidClassoidObjsubidProvider = {
        objoid: PgCatalog.Types.Oid;
        classoid: PgCatalog.Types.Oid;
        objsubid: PgCatalog.Types.Int4;
        provider: PgCatalog.Types.Text;
      };
      export type PrimaryKey = ByObjoidClassoidObjsubidProvider;

      export type Optional = Pick<Record, never>;
    }
    export namespace PgShseclabel {
      export type Record = {
        objoid: PgCatalog.Types.PgShseclabel["objoid"];
        classoid: PgCatalog.Types.PgShseclabel["classoid"];
        provider: PgCatalog.Types.PgShseclabel["provider"];
        label: PgCatalog.Types.PgShseclabel["label"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByObjoidClassoidProvider = {
        objoid: PgCatalog.Types.Oid;
        classoid: PgCatalog.Types.Oid;
        provider: PgCatalog.Types.Text;
      };
      export type PrimaryKey = ByObjoidClassoidProvider;

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByCollnameCollencodingCollnamespace = {
        collname: PgCatalog.Types.Cstring;
        collencoding: PgCatalog.Types.Int4;
        collnamespace: PgCatalog.Types.Oid;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
    }
    export namespace PgParameterAcl {
      export type Record = {
        oid: PgCatalog.Types.PgParameterAcl["oid"];
        parname: PgCatalog.Types.PgParameterAcl["parname"];
        paracl: PgCatalog.Types.PgParameterAcl["paracl"] | null;
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type ByParname = {
        parname: PgCatalog.Types.Text;
      };

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByPartrelid = {
        partrelid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByPartrelid;

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByRngmultitypid = {
        rngmultitypid: PgCatalog.Types.Oid;
      };

      export type ByRngtypid = {
        rngtypid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByRngtypid;

      export type Optional = Pick<Record, never>;
    }
    export namespace PgTransform {
      export type Record = {
        oid: PgCatalog.Types.PgTransform["oid"];
        trftype: PgCatalog.Types.PgTransform["trftype"];
        trflang: PgCatalog.Types.PgTransform["trflang"];
        trffromsql: PgCatalog.Types.PgTransform["trffromsql"];
        trftosql: PgCatalog.Types.PgTransform["trftosql"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type ByTrftypeTrflang = {
        trftype: PgCatalog.Types.Oid;
        trflang: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type BySeqrelid = {
        seqrelid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = BySeqrelid;

      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type ByPubname = {
        pubname: PgCatalog.Types.Cstring;
      };

      export type Optional = Pick<Record, never>;
    }
    export namespace PgPublicationNamespace {
      export type Record = {
        oid: PgCatalog.Types.PgPublicationNamespace["oid"];
        pnpubid: PgCatalog.Types.PgPublicationNamespace["pnpubid"];
        pnnspid: PgCatalog.Types.PgPublicationNamespace["pnnspid"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type ByPnnspidPnpubid = {
        pnnspid: PgCatalog.Types.Oid;
        pnpubid: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
    }
    export namespace PgPublicationRel {
      export type Record = {
        oid: PgCatalog.Types.PgPublicationRel["oid"];
        prpubid: PgCatalog.Types.PgPublicationRel["prpubid"];
        prrelid: PgCatalog.Types.PgPublicationRel["prrelid"];
        prqual: PgCatalog.Types.PgPublicationRel["prqual"] | null;
        prattrs: PgCatalog.Types.PgPublicationRel["prattrs"] | null;
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type ByPrpubid = {
        prpubid: PgCatalog.Types.Oid;
      };

      export type ByPrrelidPrpubid = {
        prrelid: PgCatalog.Types.Oid;
        prpubid: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
    }
    export namespace PgSubscriptionRel {
      export type Record = {
        srsubid: PgCatalog.Types.PgSubscriptionRel["srsubid"];
        srrelid: PgCatalog.Types.PgSubscriptionRel["srrelid"];
        srsubstate: PgCatalog.Types.PgSubscriptionRel["srsubstate"];
        srsublsn: PgCatalog.Types.PgSubscriptionRel["srsublsn"] | null;
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type BySrrelidSrsubid = {
        srrelid: PgCatalog.Types.Oid;
        srsubid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = BySrrelidSrsubid;

      export type Optional = Pick<Record, never>;
    }
    export namespace PgLargeobject {
      export type Record = {
        loid: PgCatalog.Types.PgLargeobject["loid"];
        pageno: PgCatalog.Types.PgLargeobject["pageno"];
        data: PgCatalog.Types.PgLargeobject["data"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByLoidPageno = {
        loid: PgCatalog.Types.Oid;
        pageno: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByLoidPageno;

      export type Optional = Pick<Record, never>;
    }
  }
}
export namespace Public {
  export namespace Types {
    export type ActorArray = Array<Public.Types.Actor>;
    export type ActorInfoArray = Array<Public.Types.ActorInfo>;
    export type AddressArray = Array<Public.Types.Address>;
    export type CategoryArray = Array<Public.Types.Category>;
    export type CityArray = Array<Public.Types.City>;
    export type CountryArray = Array<Public.Types.Country>;
    export type CustomerArray = Array<Public.Types.Customer>;
    export type CustomerListArray = Array<Public.Types.CustomerList>;
    export type FilmArray = Array<Public.Types.Film>;
    export type FilmActorArray = Array<Public.Types.FilmActor>;
    export type FilmCategoryArray = Array<Public.Types.FilmCategory>;
    export type FilmListArray = Array<Public.Types.FilmList>;
    export type InventoryArray = Array<Public.Types.Inventory>;
    export type LanguageArray = Array<Public.Types.Language>;
    export type MpaaRatingArray = Array<Public.Types.MpaaRating>;
    export type NicerButSlowerFilmListArray =
      Array<Public.Types.NicerButSlowerFilmList>;
    export type PaymentArray = Array<Public.Types.Payment>;
    export type RentalArray = Array<Public.Types.Rental>;
    export type SalesByFilmCategoryArray =
      Array<Public.Types.SalesByFilmCategory>;
    export type SalesByStoreArray = Array<Public.Types.SalesByStore>;
    export type StaffArray = Array<Public.Types.Staff>;
    export type StaffListArray = Array<Public.Types.StaffList>;
    export type StoreArray = Array<Public.Types.Store>;
    export type YearArray = Array<Public.Types.Year>;
    export type Actor = {
      actorId: PgCatalog.Types.Int4;
      firstName: PgCatalog.Types.Varchar;
      lastName: PgCatalog.Types.Varchar;
      lastUpdate: PgCatalog.Types.Timestamp;
    };
    export type ActorInfo = {
      actorId: PgCatalog.Types.Int4;
      firstName: PgCatalog.Types.Varchar;
      lastName: PgCatalog.Types.Varchar;
      filmInfo: PgCatalog.Types.Text;
    };
    export type Address = {
      addressId: PgCatalog.Types.Int4;
      address: PgCatalog.Types.Varchar;
      address2: PgCatalog.Types.Varchar;
      district: PgCatalog.Types.Varchar;
      cityId: PgCatalog.Types.Int2;
      postalCode: PgCatalog.Types.Varchar;
      phone: PgCatalog.Types.Varchar;
      lastUpdate: PgCatalog.Types.Timestamp;
    };
    export type Category = {
      categoryId: PgCatalog.Types.Int4;
      name: PgCatalog.Types.Varchar;
      lastUpdate: PgCatalog.Types.Timestamp;
    };
    export type City = {
      cityId: PgCatalog.Types.Int4;
      city: PgCatalog.Types.Varchar;
      countryId: PgCatalog.Types.Int2;
      lastUpdate: PgCatalog.Types.Timestamp;
    };
    export type Country = {
      countryId: PgCatalog.Types.Int4;
      country: PgCatalog.Types.Varchar;
      lastUpdate: PgCatalog.Types.Timestamp;
    };
    export type Customer = {
      customerId: PgCatalog.Types.Int4;
      storeId: PgCatalog.Types.Int2;
      firstName: PgCatalog.Types.Varchar;
      lastName: PgCatalog.Types.Varchar;
      email: PgCatalog.Types.Varchar;
      addressId: PgCatalog.Types.Int2;
      activebool: PgCatalog.Types.Bool;
      createDate: PgCatalog.Types.Date;
      lastUpdate: PgCatalog.Types.Timestamp;
      active: PgCatalog.Types.Int4;
    };
    export type CustomerList = {
      id: PgCatalog.Types.Int4;
      name: PgCatalog.Types.Text;
      address: PgCatalog.Types.Varchar;
      zipCode: PgCatalog.Types.Varchar;
      phone: PgCatalog.Types.Varchar;
      city: PgCatalog.Types.Varchar;
      country: PgCatalog.Types.Varchar;
      notes: PgCatalog.Types.Text;
      sid: PgCatalog.Types.Int2;
    };
    export type Film = {
      filmId: PgCatalog.Types.Int4;
      title: PgCatalog.Types.Varchar;
      description: PgCatalog.Types.Text;
      releaseYear: Public.Types.Year;
      languageId: PgCatalog.Types.Int2;
      rentalDuration: PgCatalog.Types.Int2;
      rentalRate: PgCatalog.Types.Numeric;
      length: PgCatalog.Types.Int2;
      replacementCost: PgCatalog.Types.Numeric;
      rating: Public.Types.MpaaRating;
      lastUpdate: PgCatalog.Types.Timestamp;
      specialFeatures: PgCatalog.Types.TextArray;
      fulltext: PgCatalog.Types.Tsvector;
    };
    export type FilmActor = {
      actorId: PgCatalog.Types.Int2;
      filmId: PgCatalog.Types.Int2;
      lastUpdate: PgCatalog.Types.Timestamp;
    };
    export type FilmCategory = {
      filmId: PgCatalog.Types.Int2;
      categoryId: PgCatalog.Types.Int2;
      lastUpdate: PgCatalog.Types.Timestamp;
    };
    export type FilmList = {
      fid: PgCatalog.Types.Int4;
      title: PgCatalog.Types.Varchar;
      description: PgCatalog.Types.Text;
      category: PgCatalog.Types.Varchar;
      price: PgCatalog.Types.Numeric;
      length: PgCatalog.Types.Int2;
      rating: Public.Types.MpaaRating;
      actors: PgCatalog.Types.Text;
    };
    export type Inventory = {
      inventoryId: PgCatalog.Types.Int4;
      filmId: PgCatalog.Types.Int2;
      storeId: PgCatalog.Types.Int2;
      lastUpdate: PgCatalog.Types.Timestamp;
    };
    export type Language = {
      languageId: PgCatalog.Types.Int4;
      name: PgCatalog.Types.Bpchar;
      lastUpdate: PgCatalog.Types.Timestamp;
    };

    export enum MpaaRating {
      G = "G",
      PG = "PG",
      PG_13 = "PG-13",
      R = "R",
      NC_17 = "NC-17",
    }

    export type NicerButSlowerFilmList = {
      fid: PgCatalog.Types.Int4;
      title: PgCatalog.Types.Varchar;
      description: PgCatalog.Types.Text;
      category: PgCatalog.Types.Varchar;
      price: PgCatalog.Types.Numeric;
      length: PgCatalog.Types.Int2;
      rating: Public.Types.MpaaRating;
      actors: PgCatalog.Types.Text;
    };
    export type Payment = {
      paymentId: PgCatalog.Types.Int4;
      customerId: PgCatalog.Types.Int2;
      staffId: PgCatalog.Types.Int2;
      rentalId: PgCatalog.Types.Int4;
      amount: PgCatalog.Types.Numeric;
      paymentDate: PgCatalog.Types.Timestamp;
    };
    export type Rental = {
      rentalId: PgCatalog.Types.Int4;
      rentalDate: PgCatalog.Types.Timestamp;
      inventoryId: PgCatalog.Types.Int4;
      customerId: PgCatalog.Types.Int2;
      returnDate: PgCatalog.Types.Timestamp;
      staffId: PgCatalog.Types.Int2;
      lastUpdate: PgCatalog.Types.Timestamp;
    };
    export type SalesByFilmCategory = {
      category: PgCatalog.Types.Varchar;
      totalSales: PgCatalog.Types.Numeric;
    };
    export type SalesByStore = {
      store: PgCatalog.Types.Text;
      manager: PgCatalog.Types.Text;
      totalSales: PgCatalog.Types.Numeric;
    };
    export type Staff = {
      staffId: PgCatalog.Types.Int4;
      firstName: PgCatalog.Types.Varchar;
      lastName: PgCatalog.Types.Varchar;
      addressId: PgCatalog.Types.Int2;
      email: PgCatalog.Types.Varchar;
      storeId: PgCatalog.Types.Int2;
      active: PgCatalog.Types.Bool;
      username: PgCatalog.Types.Varchar;
      password: PgCatalog.Types.Varchar;
      lastUpdate: PgCatalog.Types.Timestamp;
      picture: PgCatalog.Types.Bytea;
    };
    export type StaffList = {
      id: PgCatalog.Types.Int4;
      name: PgCatalog.Types.Text;
      address: PgCatalog.Types.Varchar;
      zipCode: PgCatalog.Types.Varchar;
      phone: PgCatalog.Types.Varchar;
      city: PgCatalog.Types.Varchar;
      country: PgCatalog.Types.Varchar;
      sid: PgCatalog.Types.Int2;
    };
    export type Store = {
      storeId: PgCatalog.Types.Int4;
      managerStaffId: PgCatalog.Types.Int2;
      addressId: PgCatalog.Types.Int2;
      lastUpdate: PgCatalog.Types.Timestamp;
    };
    export type Year = PgCatalog.Types.Int4;
    export type FilmInStockResults = { pFilmCount: PgCatalog.Types.Int4 };
    export type FilmNotInStockResults = { pFilmCount: PgCatalog.Types.Int4 };
  }
  export namespace Procedures {
    export namespace FilmInStock {
      export type Parameters = {
        pFilmId: PgCatalog.Types.Int4;
        pStoreId: PgCatalog.Types.Int4;
      };
      export type Results = Public.Types.FilmInStockResults;
    }
    export namespace FilmNotInStock {
      export type Parameters = {
        pFilmId: PgCatalog.Types.Int4;
        pStoreId: PgCatalog.Types.Int4;
      };
      export type Results = Public.Types.FilmNotInStockResults;
    }
    export namespace GetCustomerBalance {
      export type Parameters = {
        pCustomerId: PgCatalog.Types.Int4;
        pEffectiveDate: PgCatalog.Types.Timestamp;
      };
      export type Results = PgCatalog.Types.Numeric;
    }
    export namespace InventoryHeldByCustomer {
      export type Parameters = { pInventoryId: PgCatalog.Types.Int4 };
      export type Results = PgCatalog.Types.Int4;
    }
    export namespace InventoryInStock {
      export type Parameters = { pInventoryId: PgCatalog.Types.Int4 };
      export type Results = PgCatalog.Types.Bool;
    }
    export namespace LastDay {
      export type Parameters = { argument_0: PgCatalog.Types.Timestamp };
      export type Results = PgCatalog.Types.Date;
    }
    export namespace RewardsReport {
      export type Parameters = {
        minMonthlyPurchases: PgCatalog.Types.Int4;
        minDollarAmountPurchased: PgCatalog.Types.Numeric;
      };
      export type Results = Public.Types.Customer;
    }
  }
  export namespace Tables {
    export namespace FilmActor {
      export type Record = {
        actorId: Public.Types.FilmActor["actorId"];
        filmId: Public.Types.FilmActor["filmId"];
        lastUpdate: Public.Types.FilmActor["lastUpdate"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByActorIdFilmId = {
        actorId: PgCatalog.Types.Int2;
        filmId: PgCatalog.Types.Int2;
      };
      export type PrimaryKey = ByActorIdFilmId;
      export type ByFilmId = {
        filmId: PgCatalog.Types.Int2;
      };

      export type Optional = Pick<Record, "lastUpdate">;
    }
    export namespace Address {
      export type Record = {
        addressId: Public.Types.Address["addressId"];
        address: Public.Types.Address["address"];
        address2: Public.Types.Address["address2"] | null;
        district: Public.Types.Address["district"];
        cityId: Public.Types.Address["cityId"];
        postalCode: Public.Types.Address["postalCode"] | null;
        phone: Public.Types.Address["phone"];
        lastUpdate: Public.Types.Address["lastUpdate"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByAddressId = {
        addressId: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByAddressId;
      export type ByCityId = {
        cityId: PgCatalog.Types.Int2;
      };

      export type Optional = Pick<Record, "addressId" | "lastUpdate">;
    }
    export namespace City {
      export type Record = {
        cityId: Public.Types.City["cityId"];
        city: Public.Types.City["city"];
        countryId: Public.Types.City["countryId"];
        lastUpdate: Public.Types.City["lastUpdate"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByCityId = {
        cityId: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByCityId;
      export type ByCountryId = {
        countryId: PgCatalog.Types.Int2;
      };

      export type Optional = Pick<Record, "cityId" | "lastUpdate">;
    }
    export namespace Customer {
      export type Record = {
        customerId: Public.Types.Customer["customerId"];
        storeId: Public.Types.Customer["storeId"];
        firstName: Public.Types.Customer["firstName"];
        lastName: Public.Types.Customer["lastName"];
        email: Public.Types.Customer["email"] | null;
        addressId: Public.Types.Customer["addressId"];
        activebool: Public.Types.Customer["activebool"];
        createDate: Public.Types.Customer["createDate"];
        lastUpdate: Public.Types.Customer["lastUpdate"] | null;
        active: Public.Types.Customer["active"] | null;
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByAddressId = {
        addressId: PgCatalog.Types.Int2;
      };

      export type ByCustomerId = {
        customerId: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByCustomerId;
      export type ByLastName = {
        lastName: PgCatalog.Types.Varchar;
      };

      export type ByStoreId = {
        storeId: PgCatalog.Types.Int2;
      };

      export type Optional = Pick<
        Record,
        "customerId" | "activebool" | "createDate" | "lastUpdate"
      >;
    }
    export namespace Actor {
      export type Record = {
        actorId: Public.Types.Actor["actorId"];
        firstName: Public.Types.Actor["firstName"];
        lastName: Public.Types.Actor["lastName"];
        lastUpdate: Public.Types.Actor["lastUpdate"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByActorId = {
        actorId: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByActorId;
      export type ByLastName = {
        lastName: PgCatalog.Types.Varchar;
      };

      export type Optional = Pick<Record, "actorId" | "lastUpdate">;
    }
    export namespace FilmCategory {
      export type Record = {
        filmId: Public.Types.FilmCategory["filmId"];
        categoryId: Public.Types.FilmCategory["categoryId"];
        lastUpdate: Public.Types.FilmCategory["lastUpdate"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByFilmIdCategoryId = {
        filmId: PgCatalog.Types.Int2;
        categoryId: PgCatalog.Types.Int2;
      };
      export type PrimaryKey = ByFilmIdCategoryId;

      export type Optional = Pick<Record, "lastUpdate">;
    }
    export namespace Inventory {
      export type Record = {
        inventoryId: Public.Types.Inventory["inventoryId"];
        filmId: Public.Types.Inventory["filmId"];
        storeId: Public.Types.Inventory["storeId"];
        lastUpdate: Public.Types.Inventory["lastUpdate"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByInventoryId = {
        inventoryId: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByInventoryId;
      export type ByStoreIdFilmId = {
        storeId: PgCatalog.Types.Int2;
        filmId: PgCatalog.Types.Int2;
      };

      export type Optional = Pick<Record, "inventoryId" | "lastUpdate">;
    }
    export namespace Category {
      export type Record = {
        categoryId: Public.Types.Category["categoryId"];
        name: Public.Types.Category["name"];
        lastUpdate: Public.Types.Category["lastUpdate"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByCategoryId = {
        categoryId: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByCategoryId;

      export type Optional = Pick<Record, "categoryId" | "lastUpdate">;
    }
    export namespace Country {
      export type Record = {
        countryId: Public.Types.Country["countryId"];
        country: Public.Types.Country["country"];
        lastUpdate: Public.Types.Country["lastUpdate"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByCountryId = {
        countryId: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByCountryId;

      export type Optional = Pick<Record, "countryId" | "lastUpdate">;
    }
    export namespace Language {
      export type Record = {
        languageId: Public.Types.Language["languageId"];
        name: Public.Types.Language["name"];
        lastUpdate: Public.Types.Language["lastUpdate"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByLanguageId = {
        languageId: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByLanguageId;

      export type Optional = Pick<Record, "languageId" | "lastUpdate">;
    }
    export namespace Rental {
      export type Record = {
        rentalId: Public.Types.Rental["rentalId"];
        rentalDate: Public.Types.Rental["rentalDate"];
        inventoryId: Public.Types.Rental["inventoryId"];
        customerId: Public.Types.Rental["customerId"];
        returnDate: Public.Types.Rental["returnDate"] | null;
        staffId: Public.Types.Rental["staffId"];
        lastUpdate: Public.Types.Rental["lastUpdate"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByInventoryId = {
        inventoryId: PgCatalog.Types.Int4;
      };

      export type ByRentalDateInventoryIdCustomerId = {
        rentalDate: PgCatalog.Types.Timestamp;
        inventoryId: PgCatalog.Types.Int4;
        customerId: PgCatalog.Types.Int2;
      };

      export type ByRentalId = {
        rentalId: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByRentalId;

      export type Optional = Pick<Record, "rentalId" | "lastUpdate">;
    }
    export namespace Staff {
      export type Record = {
        staffId: Public.Types.Staff["staffId"];
        firstName: Public.Types.Staff["firstName"];
        lastName: Public.Types.Staff["lastName"];
        addressId: Public.Types.Staff["addressId"];
        email: Public.Types.Staff["email"] | null;
        storeId: Public.Types.Staff["storeId"];
        active: Public.Types.Staff["active"];
        username: Public.Types.Staff["username"];
        password: Public.Types.Staff["password"] | null;
        lastUpdate: Public.Types.Staff["lastUpdate"];
        picture: Public.Types.Staff["picture"] | null;
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByStaffId = {
        staffId: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByStaffId;

      export type Optional = Pick<Record, "staffId" | "active" | "lastUpdate">;
    }
    export namespace Store {
      export type Record = {
        storeId: Public.Types.Store["storeId"];
        managerStaffId: Public.Types.Store["managerStaffId"];
        addressId: Public.Types.Store["addressId"];
        lastUpdate: Public.Types.Store["lastUpdate"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByManagerStaffId = {
        managerStaffId: PgCatalog.Types.Int2;
      };

      export type ByStoreId = {
        storeId: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByStoreId;

      export type Optional = Pick<Record, "storeId" | "lastUpdate">;
    }
    export namespace Payment {
      export type Record = {
        paymentId: Public.Types.Payment["paymentId"];
        customerId: Public.Types.Payment["customerId"];
        staffId: Public.Types.Payment["staffId"];
        rentalId: Public.Types.Payment["rentalId"];
        amount: Public.Types.Payment["amount"];
        paymentDate: Public.Types.Payment["paymentDate"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByCustomerId = {
        customerId: PgCatalog.Types.Int2;
      };

      export type ByPaymentId = {
        paymentId: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByPaymentId;
      export type ByRentalId = {
        rentalId: PgCatalog.Types.Int4;
      };

      export type ByStaffId = {
        staffId: PgCatalog.Types.Int2;
      };

      export type Optional = Pick<Record, "paymentId">;
    }
    export namespace Film {
      export type Record = {
        filmId: Public.Types.Film["filmId"];
        title: Public.Types.Film["title"];
        description: Public.Types.Film["description"] | null;
        releaseYear: Public.Types.Film["releaseYear"] | null;
        languageId: Public.Types.Film["languageId"];
        rentalDuration: Public.Types.Film["rentalDuration"];
        rentalRate: Public.Types.Film["rentalRate"];
        length: Public.Types.Film["length"] | null;
        replacementCost: Public.Types.Film["replacementCost"];
        rating: Public.Types.Film["rating"] | null;
        lastUpdate: Public.Types.Film["lastUpdate"];
        specialFeatures: Public.Types.Film["specialFeatures"] | null;
        fulltext: Public.Types.Film["fulltext"];
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type ByFilmId = {
        filmId: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByFilmId;
      export type ByFulltext = {
        fulltext: PgCatalog.Types.Gtsvector;
      };

      export type ByLanguageId = {
        languageId: PgCatalog.Types.Int2;
      };

      export type ByTitle = {
        title: PgCatalog.Types.Varchar;
      };

      export type Optional = Pick<
        Record,
        | "filmId"
        | "rentalDuration"
        | "rentalRate"
        | "replacementCost"
        | "rating"
        | "lastUpdate"
      >;
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
      oid: PgCatalog.Types.Oid;
      fdwowner: PgCatalog.Types.Oid;
      fdwoptions: PgCatalog.Types.TextArray;
      foreignDataWrapperCatalog: InformationSchema.Types.SqlIdentifier;
      foreignDataWrapperName: InformationSchema.Types.SqlIdentifier;
      authorizationIdentifier: InformationSchema.Types.SqlIdentifier;
      foreignDataWrapperLanguage: InformationSchema.Types.CharacterData;
    };
    export type PgForeignServers = {
      oid: PgCatalog.Types.Oid;
      srvoptions: PgCatalog.Types.TextArray;
      foreignServerCatalog: InformationSchema.Types.SqlIdentifier;
      foreignServerName: InformationSchema.Types.SqlIdentifier;
      foreignDataWrapperCatalog: InformationSchema.Types.SqlIdentifier;
      foreignDataWrapperName: InformationSchema.Types.SqlIdentifier;
      foreignServerType: InformationSchema.Types.CharacterData;
      foreignServerVersion: InformationSchema.Types.CharacterData;
      authorizationIdentifier: InformationSchema.Types.SqlIdentifier;
    };
    export type PgForeignTableColumns = {
      nspname: PgCatalog.Types.Name;
      relname: PgCatalog.Types.Name;
      attname: PgCatalog.Types.Name;
      attfdwoptions: PgCatalog.Types.TextArray;
    };
    export type PgForeignTables = {
      foreignTableCatalog: InformationSchema.Types.SqlIdentifier;
      foreignTableSchema: InformationSchema.Types.SqlIdentifier;
      foreignTableName: InformationSchema.Types.SqlIdentifier;
      ftoptions: PgCatalog.Types.TextArray;
      foreignServerCatalog: InformationSchema.Types.SqlIdentifier;
      foreignServerName: InformationSchema.Types.SqlIdentifier;
      authorizationIdentifier: InformationSchema.Types.SqlIdentifier;
    };
    export type PgUserMappings = {
      oid: PgCatalog.Types.Oid;
      umoptions: PgCatalog.Types.TextArray;
      umuser: PgCatalog.Types.Oid;
      authorizationIdentifier: InformationSchema.Types.SqlIdentifier;
      foreignServerCatalog: InformationSchema.Types.SqlIdentifier;
      foreignServerName: InformationSchema.Types.SqlIdentifier;
      srvowner: InformationSchema.Types.SqlIdentifier;
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
      grantee: InformationSchema.Types.SqlIdentifier;
      roleName: InformationSchema.Types.SqlIdentifier;
      isGrantable: InformationSchema.Types.YesOrNo;
    };
    export type ApplicableRoles = {
      grantee: InformationSchema.Types.SqlIdentifier;
      roleName: InformationSchema.Types.SqlIdentifier;
      isGrantable: InformationSchema.Types.YesOrNo;
    };
    export type Attributes = {
      udtCatalog: InformationSchema.Types.SqlIdentifier;
      udtSchema: InformationSchema.Types.SqlIdentifier;
      udtName: InformationSchema.Types.SqlIdentifier;
      attributeName: InformationSchema.Types.SqlIdentifier;
      ordinalPosition: InformationSchema.Types.CardinalNumber;
      attributeDefault: InformationSchema.Types.CharacterData;
      isNullable: InformationSchema.Types.YesOrNo;
      dataType: InformationSchema.Types.CharacterData;
      characterMaximumLength: InformationSchema.Types.CardinalNumber;
      characterOctetLength: InformationSchema.Types.CardinalNumber;
      characterSetCatalog: InformationSchema.Types.SqlIdentifier;
      characterSetSchema: InformationSchema.Types.SqlIdentifier;
      characterSetName: InformationSchema.Types.SqlIdentifier;
      collationCatalog: InformationSchema.Types.SqlIdentifier;
      collationSchema: InformationSchema.Types.SqlIdentifier;
      collationName: InformationSchema.Types.SqlIdentifier;
      numericPrecision: InformationSchema.Types.CardinalNumber;
      numericPrecisionRadix: InformationSchema.Types.CardinalNumber;
      numericScale: InformationSchema.Types.CardinalNumber;
      datetimePrecision: InformationSchema.Types.CardinalNumber;
      intervalType: InformationSchema.Types.CharacterData;
      intervalPrecision: InformationSchema.Types.CardinalNumber;
      attributeUdtCatalog: InformationSchema.Types.SqlIdentifier;
      attributeUdtSchema: InformationSchema.Types.SqlIdentifier;
      attributeUdtName: InformationSchema.Types.SqlIdentifier;
      scopeCatalog: InformationSchema.Types.SqlIdentifier;
      scopeSchema: InformationSchema.Types.SqlIdentifier;
      scopeName: InformationSchema.Types.SqlIdentifier;
      maximumCardinality: InformationSchema.Types.CardinalNumber;
      dtdIdentifier: InformationSchema.Types.SqlIdentifier;
      isDerivedReferenceAttribute: InformationSchema.Types.YesOrNo;
    };
    export type CardinalNumber = PgCatalog.Types.Int4;
    export type CharacterData = PgCatalog.Types.Varchar;
    export type CharacterSets = {
      characterSetCatalog: InformationSchema.Types.SqlIdentifier;
      characterSetSchema: InformationSchema.Types.SqlIdentifier;
      characterSetName: InformationSchema.Types.SqlIdentifier;
      characterRepertoire: InformationSchema.Types.SqlIdentifier;
      formOfUse: InformationSchema.Types.SqlIdentifier;
      defaultCollateCatalog: InformationSchema.Types.SqlIdentifier;
      defaultCollateSchema: InformationSchema.Types.SqlIdentifier;
      defaultCollateName: InformationSchema.Types.SqlIdentifier;
    };
    export type CheckConstraintRoutineUsage = {
      constraintCatalog: InformationSchema.Types.SqlIdentifier;
      constraintSchema: InformationSchema.Types.SqlIdentifier;
      constraintName: InformationSchema.Types.SqlIdentifier;
      specificCatalog: InformationSchema.Types.SqlIdentifier;
      specificSchema: InformationSchema.Types.SqlIdentifier;
      specificName: InformationSchema.Types.SqlIdentifier;
    };
    export type CheckConstraints = {
      constraintCatalog: InformationSchema.Types.SqlIdentifier;
      constraintSchema: InformationSchema.Types.SqlIdentifier;
      constraintName: InformationSchema.Types.SqlIdentifier;
      checkClause: InformationSchema.Types.CharacterData;
    };
    export type CollationCharacterSetApplicability = {
      collationCatalog: InformationSchema.Types.SqlIdentifier;
      collationSchema: InformationSchema.Types.SqlIdentifier;
      collationName: InformationSchema.Types.SqlIdentifier;
      characterSetCatalog: InformationSchema.Types.SqlIdentifier;
      characterSetSchema: InformationSchema.Types.SqlIdentifier;
      characterSetName: InformationSchema.Types.SqlIdentifier;
    };
    export type Collations = {
      collationCatalog: InformationSchema.Types.SqlIdentifier;
      collationSchema: InformationSchema.Types.SqlIdentifier;
      collationName: InformationSchema.Types.SqlIdentifier;
      padAttribute: InformationSchema.Types.CharacterData;
    };
    export type ColumnColumnUsage = {
      tableCatalog: InformationSchema.Types.SqlIdentifier;
      tableSchema: InformationSchema.Types.SqlIdentifier;
      tableName: InformationSchema.Types.SqlIdentifier;
      columnName: InformationSchema.Types.SqlIdentifier;
      dependentColumn: InformationSchema.Types.SqlIdentifier;
    };
    export type ColumnDomainUsage = {
      domainCatalog: InformationSchema.Types.SqlIdentifier;
      domainSchema: InformationSchema.Types.SqlIdentifier;
      domainName: InformationSchema.Types.SqlIdentifier;
      tableCatalog: InformationSchema.Types.SqlIdentifier;
      tableSchema: InformationSchema.Types.SqlIdentifier;
      tableName: InformationSchema.Types.SqlIdentifier;
      columnName: InformationSchema.Types.SqlIdentifier;
    };
    export type ColumnOptions = {
      tableCatalog: InformationSchema.Types.SqlIdentifier;
      tableSchema: InformationSchema.Types.SqlIdentifier;
      tableName: InformationSchema.Types.SqlIdentifier;
      columnName: InformationSchema.Types.SqlIdentifier;
      optionName: InformationSchema.Types.SqlIdentifier;
      optionValue: InformationSchema.Types.CharacterData;
    };
    export type ColumnPrivileges = {
      grantor: InformationSchema.Types.SqlIdentifier;
      grantee: InformationSchema.Types.SqlIdentifier;
      tableCatalog: InformationSchema.Types.SqlIdentifier;
      tableSchema: InformationSchema.Types.SqlIdentifier;
      tableName: InformationSchema.Types.SqlIdentifier;
      columnName: InformationSchema.Types.SqlIdentifier;
      privilegeType: InformationSchema.Types.CharacterData;
      isGrantable: InformationSchema.Types.YesOrNo;
    };
    export type ColumnUdtUsage = {
      udtCatalog: InformationSchema.Types.SqlIdentifier;
      udtSchema: InformationSchema.Types.SqlIdentifier;
      udtName: InformationSchema.Types.SqlIdentifier;
      tableCatalog: InformationSchema.Types.SqlIdentifier;
      tableSchema: InformationSchema.Types.SqlIdentifier;
      tableName: InformationSchema.Types.SqlIdentifier;
      columnName: InformationSchema.Types.SqlIdentifier;
    };
    export type Columns = {
      tableCatalog: InformationSchema.Types.SqlIdentifier;
      tableSchema: InformationSchema.Types.SqlIdentifier;
      tableName: InformationSchema.Types.SqlIdentifier;
      columnName: InformationSchema.Types.SqlIdentifier;
      ordinalPosition: InformationSchema.Types.CardinalNumber;
      columnDefault: InformationSchema.Types.CharacterData;
      isNullable: InformationSchema.Types.YesOrNo;
      dataType: InformationSchema.Types.CharacterData;
      characterMaximumLength: InformationSchema.Types.CardinalNumber;
      characterOctetLength: InformationSchema.Types.CardinalNumber;
      numericPrecision: InformationSchema.Types.CardinalNumber;
      numericPrecisionRadix: InformationSchema.Types.CardinalNumber;
      numericScale: InformationSchema.Types.CardinalNumber;
      datetimePrecision: InformationSchema.Types.CardinalNumber;
      intervalType: InformationSchema.Types.CharacterData;
      intervalPrecision: InformationSchema.Types.CardinalNumber;
      characterSetCatalog: InformationSchema.Types.SqlIdentifier;
      characterSetSchema: InformationSchema.Types.SqlIdentifier;
      characterSetName: InformationSchema.Types.SqlIdentifier;
      collationCatalog: InformationSchema.Types.SqlIdentifier;
      collationSchema: InformationSchema.Types.SqlIdentifier;
      collationName: InformationSchema.Types.SqlIdentifier;
      domainCatalog: InformationSchema.Types.SqlIdentifier;
      domainSchema: InformationSchema.Types.SqlIdentifier;
      domainName: InformationSchema.Types.SqlIdentifier;
      udtCatalog: InformationSchema.Types.SqlIdentifier;
      udtSchema: InformationSchema.Types.SqlIdentifier;
      udtName: InformationSchema.Types.SqlIdentifier;
      scopeCatalog: InformationSchema.Types.SqlIdentifier;
      scopeSchema: InformationSchema.Types.SqlIdentifier;
      scopeName: InformationSchema.Types.SqlIdentifier;
      maximumCardinality: InformationSchema.Types.CardinalNumber;
      dtdIdentifier: InformationSchema.Types.SqlIdentifier;
      isSelfReferencing: InformationSchema.Types.YesOrNo;
      isIdentity: InformationSchema.Types.YesOrNo;
      identityGeneration: InformationSchema.Types.CharacterData;
      identityStart: InformationSchema.Types.CharacterData;
      identityIncrement: InformationSchema.Types.CharacterData;
      identityMaximum: InformationSchema.Types.CharacterData;
      identityMinimum: InformationSchema.Types.CharacterData;
      identityCycle: InformationSchema.Types.YesOrNo;
      isGenerated: InformationSchema.Types.CharacterData;
      generationExpression: InformationSchema.Types.CharacterData;
      isUpdatable: InformationSchema.Types.YesOrNo;
    };
    export type ConstraintColumnUsage = {
      tableCatalog: InformationSchema.Types.SqlIdentifier;
      tableSchema: InformationSchema.Types.SqlIdentifier;
      tableName: InformationSchema.Types.SqlIdentifier;
      columnName: InformationSchema.Types.SqlIdentifier;
      constraintCatalog: InformationSchema.Types.SqlIdentifier;
      constraintSchema: InformationSchema.Types.SqlIdentifier;
      constraintName: InformationSchema.Types.SqlIdentifier;
    };
    export type ConstraintTableUsage = {
      tableCatalog: InformationSchema.Types.SqlIdentifier;
      tableSchema: InformationSchema.Types.SqlIdentifier;
      tableName: InformationSchema.Types.SqlIdentifier;
      constraintCatalog: InformationSchema.Types.SqlIdentifier;
      constraintSchema: InformationSchema.Types.SqlIdentifier;
      constraintName: InformationSchema.Types.SqlIdentifier;
    };
    export type DataTypePrivileges = {
      objectCatalog: InformationSchema.Types.SqlIdentifier;
      objectSchema: InformationSchema.Types.SqlIdentifier;
      objectName: InformationSchema.Types.SqlIdentifier;
      objectType: InformationSchema.Types.CharacterData;
      dtdIdentifier: InformationSchema.Types.SqlIdentifier;
    };
    export type DomainConstraints = {
      constraintCatalog: InformationSchema.Types.SqlIdentifier;
      constraintSchema: InformationSchema.Types.SqlIdentifier;
      constraintName: InformationSchema.Types.SqlIdentifier;
      domainCatalog: InformationSchema.Types.SqlIdentifier;
      domainSchema: InformationSchema.Types.SqlIdentifier;
      domainName: InformationSchema.Types.SqlIdentifier;
      isDeferrable: InformationSchema.Types.YesOrNo;
      initiallyDeferred: InformationSchema.Types.YesOrNo;
    };
    export type DomainUdtUsage = {
      udtCatalog: InformationSchema.Types.SqlIdentifier;
      udtSchema: InformationSchema.Types.SqlIdentifier;
      udtName: InformationSchema.Types.SqlIdentifier;
      domainCatalog: InformationSchema.Types.SqlIdentifier;
      domainSchema: InformationSchema.Types.SqlIdentifier;
      domainName: InformationSchema.Types.SqlIdentifier;
    };
    export type Domains = {
      domainCatalog: InformationSchema.Types.SqlIdentifier;
      domainSchema: InformationSchema.Types.SqlIdentifier;
      domainName: InformationSchema.Types.SqlIdentifier;
      dataType: InformationSchema.Types.CharacterData;
      characterMaximumLength: InformationSchema.Types.CardinalNumber;
      characterOctetLength: InformationSchema.Types.CardinalNumber;
      characterSetCatalog: InformationSchema.Types.SqlIdentifier;
      characterSetSchema: InformationSchema.Types.SqlIdentifier;
      characterSetName: InformationSchema.Types.SqlIdentifier;
      collationCatalog: InformationSchema.Types.SqlIdentifier;
      collationSchema: InformationSchema.Types.SqlIdentifier;
      collationName: InformationSchema.Types.SqlIdentifier;
      numericPrecision: InformationSchema.Types.CardinalNumber;
      numericPrecisionRadix: InformationSchema.Types.CardinalNumber;
      numericScale: InformationSchema.Types.CardinalNumber;
      datetimePrecision: InformationSchema.Types.CardinalNumber;
      intervalType: InformationSchema.Types.CharacterData;
      intervalPrecision: InformationSchema.Types.CardinalNumber;
      domainDefault: InformationSchema.Types.CharacterData;
      udtCatalog: InformationSchema.Types.SqlIdentifier;
      udtSchema: InformationSchema.Types.SqlIdentifier;
      udtName: InformationSchema.Types.SqlIdentifier;
      scopeCatalog: InformationSchema.Types.SqlIdentifier;
      scopeSchema: InformationSchema.Types.SqlIdentifier;
      scopeName: InformationSchema.Types.SqlIdentifier;
      maximumCardinality: InformationSchema.Types.CardinalNumber;
      dtdIdentifier: InformationSchema.Types.SqlIdentifier;
    };
    export type ElementTypes = {
      objectCatalog: InformationSchema.Types.SqlIdentifier;
      objectSchema: InformationSchema.Types.SqlIdentifier;
      objectName: InformationSchema.Types.SqlIdentifier;
      objectType: InformationSchema.Types.CharacterData;
      collectionTypeIdentifier: InformationSchema.Types.SqlIdentifier;
      dataType: InformationSchema.Types.CharacterData;
      characterMaximumLength: InformationSchema.Types.CardinalNumber;
      characterOctetLength: InformationSchema.Types.CardinalNumber;
      characterSetCatalog: InformationSchema.Types.SqlIdentifier;
      characterSetSchema: InformationSchema.Types.SqlIdentifier;
      characterSetName: InformationSchema.Types.SqlIdentifier;
      collationCatalog: InformationSchema.Types.SqlIdentifier;
      collationSchema: InformationSchema.Types.SqlIdentifier;
      collationName: InformationSchema.Types.SqlIdentifier;
      numericPrecision: InformationSchema.Types.CardinalNumber;
      numericPrecisionRadix: InformationSchema.Types.CardinalNumber;
      numericScale: InformationSchema.Types.CardinalNumber;
      datetimePrecision: InformationSchema.Types.CardinalNumber;
      intervalType: InformationSchema.Types.CharacterData;
      intervalPrecision: InformationSchema.Types.CardinalNumber;
      domainDefault: InformationSchema.Types.CharacterData;
      udtCatalog: InformationSchema.Types.SqlIdentifier;
      udtSchema: InformationSchema.Types.SqlIdentifier;
      udtName: InformationSchema.Types.SqlIdentifier;
      scopeCatalog: InformationSchema.Types.SqlIdentifier;
      scopeSchema: InformationSchema.Types.SqlIdentifier;
      scopeName: InformationSchema.Types.SqlIdentifier;
      maximumCardinality: InformationSchema.Types.CardinalNumber;
      dtdIdentifier: InformationSchema.Types.SqlIdentifier;
    };
    export type EnabledRoles = {
      roleName: InformationSchema.Types.SqlIdentifier;
    };
    export type ForeignDataWrapperOptions = {
      foreignDataWrapperCatalog: InformationSchema.Types.SqlIdentifier;
      foreignDataWrapperName: InformationSchema.Types.SqlIdentifier;
      optionName: InformationSchema.Types.SqlIdentifier;
      optionValue: InformationSchema.Types.CharacterData;
    };
    export type ForeignDataWrappers = {
      foreignDataWrapperCatalog: InformationSchema.Types.SqlIdentifier;
      foreignDataWrapperName: InformationSchema.Types.SqlIdentifier;
      authorizationIdentifier: InformationSchema.Types.SqlIdentifier;
      libraryName: InformationSchema.Types.CharacterData;
      foreignDataWrapperLanguage: InformationSchema.Types.CharacterData;
    };
    export type ForeignServerOptions = {
      foreignServerCatalog: InformationSchema.Types.SqlIdentifier;
      foreignServerName: InformationSchema.Types.SqlIdentifier;
      optionName: InformationSchema.Types.SqlIdentifier;
      optionValue: InformationSchema.Types.CharacterData;
    };
    export type ForeignServers = {
      foreignServerCatalog: InformationSchema.Types.SqlIdentifier;
      foreignServerName: InformationSchema.Types.SqlIdentifier;
      foreignDataWrapperCatalog: InformationSchema.Types.SqlIdentifier;
      foreignDataWrapperName: InformationSchema.Types.SqlIdentifier;
      foreignServerType: InformationSchema.Types.CharacterData;
      foreignServerVersion: InformationSchema.Types.CharacterData;
      authorizationIdentifier: InformationSchema.Types.SqlIdentifier;
    };
    export type ForeignTableOptions = {
      foreignTableCatalog: InformationSchema.Types.SqlIdentifier;
      foreignTableSchema: InformationSchema.Types.SqlIdentifier;
      foreignTableName: InformationSchema.Types.SqlIdentifier;
      optionName: InformationSchema.Types.SqlIdentifier;
      optionValue: InformationSchema.Types.CharacterData;
    };
    export type ForeignTables = {
      foreignTableCatalog: InformationSchema.Types.SqlIdentifier;
      foreignTableSchema: InformationSchema.Types.SqlIdentifier;
      foreignTableName: InformationSchema.Types.SqlIdentifier;
      foreignServerCatalog: InformationSchema.Types.SqlIdentifier;
      foreignServerName: InformationSchema.Types.SqlIdentifier;
    };
    export type InformationSchemaCatalogName = {
      catalogName: InformationSchema.Types.SqlIdentifier;
    };
    export type KeyColumnUsage = {
      constraintCatalog: InformationSchema.Types.SqlIdentifier;
      constraintSchema: InformationSchema.Types.SqlIdentifier;
      constraintName: InformationSchema.Types.SqlIdentifier;
      tableCatalog: InformationSchema.Types.SqlIdentifier;
      tableSchema: InformationSchema.Types.SqlIdentifier;
      tableName: InformationSchema.Types.SqlIdentifier;
      columnName: InformationSchema.Types.SqlIdentifier;
      ordinalPosition: InformationSchema.Types.CardinalNumber;
      positionInUniqueConstraint: InformationSchema.Types.CardinalNumber;
    };
    export type Parameters = {
      specificCatalog: InformationSchema.Types.SqlIdentifier;
      specificSchema: InformationSchema.Types.SqlIdentifier;
      specificName: InformationSchema.Types.SqlIdentifier;
      ordinalPosition: InformationSchema.Types.CardinalNumber;
      parameterMode: InformationSchema.Types.CharacterData;
      isResult: InformationSchema.Types.YesOrNo;
      asLocator: InformationSchema.Types.YesOrNo;
      parameterName: InformationSchema.Types.SqlIdentifier;
      dataType: InformationSchema.Types.CharacterData;
      characterMaximumLength: InformationSchema.Types.CardinalNumber;
      characterOctetLength: InformationSchema.Types.CardinalNumber;
      characterSetCatalog: InformationSchema.Types.SqlIdentifier;
      characterSetSchema: InformationSchema.Types.SqlIdentifier;
      characterSetName: InformationSchema.Types.SqlIdentifier;
      collationCatalog: InformationSchema.Types.SqlIdentifier;
      collationSchema: InformationSchema.Types.SqlIdentifier;
      collationName: InformationSchema.Types.SqlIdentifier;
      numericPrecision: InformationSchema.Types.CardinalNumber;
      numericPrecisionRadix: InformationSchema.Types.CardinalNumber;
      numericScale: InformationSchema.Types.CardinalNumber;
      datetimePrecision: InformationSchema.Types.CardinalNumber;
      intervalType: InformationSchema.Types.CharacterData;
      intervalPrecision: InformationSchema.Types.CardinalNumber;
      udtCatalog: InformationSchema.Types.SqlIdentifier;
      udtSchema: InformationSchema.Types.SqlIdentifier;
      udtName: InformationSchema.Types.SqlIdentifier;
      scopeCatalog: InformationSchema.Types.SqlIdentifier;
      scopeSchema: InformationSchema.Types.SqlIdentifier;
      scopeName: InformationSchema.Types.SqlIdentifier;
      maximumCardinality: InformationSchema.Types.CardinalNumber;
      dtdIdentifier: InformationSchema.Types.SqlIdentifier;
      parameterDefault: InformationSchema.Types.CharacterData;
    };
    export type ReferentialConstraints = {
      constraintCatalog: InformationSchema.Types.SqlIdentifier;
      constraintSchema: InformationSchema.Types.SqlIdentifier;
      constraintName: InformationSchema.Types.SqlIdentifier;
      uniqueConstraintCatalog: InformationSchema.Types.SqlIdentifier;
      uniqueConstraintSchema: InformationSchema.Types.SqlIdentifier;
      uniqueConstraintName: InformationSchema.Types.SqlIdentifier;
      matchOption: InformationSchema.Types.CharacterData;
      updateRule: InformationSchema.Types.CharacterData;
      deleteRule: InformationSchema.Types.CharacterData;
    };
    export type RoleColumnGrants = {
      grantor: InformationSchema.Types.SqlIdentifier;
      grantee: InformationSchema.Types.SqlIdentifier;
      tableCatalog: InformationSchema.Types.SqlIdentifier;
      tableSchema: InformationSchema.Types.SqlIdentifier;
      tableName: InformationSchema.Types.SqlIdentifier;
      columnName: InformationSchema.Types.SqlIdentifier;
      privilegeType: InformationSchema.Types.CharacterData;
      isGrantable: InformationSchema.Types.YesOrNo;
    };
    export type RoleRoutineGrants = {
      grantor: InformationSchema.Types.SqlIdentifier;
      grantee: InformationSchema.Types.SqlIdentifier;
      specificCatalog: InformationSchema.Types.SqlIdentifier;
      specificSchema: InformationSchema.Types.SqlIdentifier;
      specificName: InformationSchema.Types.SqlIdentifier;
      routineCatalog: InformationSchema.Types.SqlIdentifier;
      routineSchema: InformationSchema.Types.SqlIdentifier;
      routineName: InformationSchema.Types.SqlIdentifier;
      privilegeType: InformationSchema.Types.CharacterData;
      isGrantable: InformationSchema.Types.YesOrNo;
    };
    export type RoleTableGrants = {
      grantor: InformationSchema.Types.SqlIdentifier;
      grantee: InformationSchema.Types.SqlIdentifier;
      tableCatalog: InformationSchema.Types.SqlIdentifier;
      tableSchema: InformationSchema.Types.SqlIdentifier;
      tableName: InformationSchema.Types.SqlIdentifier;
      privilegeType: InformationSchema.Types.CharacterData;
      isGrantable: InformationSchema.Types.YesOrNo;
      withHierarchy: InformationSchema.Types.YesOrNo;
    };
    export type RoleUdtGrants = {
      grantor: InformationSchema.Types.SqlIdentifier;
      grantee: InformationSchema.Types.SqlIdentifier;
      udtCatalog: InformationSchema.Types.SqlIdentifier;
      udtSchema: InformationSchema.Types.SqlIdentifier;
      udtName: InformationSchema.Types.SqlIdentifier;
      privilegeType: InformationSchema.Types.CharacterData;
      isGrantable: InformationSchema.Types.YesOrNo;
    };
    export type RoleUsageGrants = {
      grantor: InformationSchema.Types.SqlIdentifier;
      grantee: InformationSchema.Types.SqlIdentifier;
      objectCatalog: InformationSchema.Types.SqlIdentifier;
      objectSchema: InformationSchema.Types.SqlIdentifier;
      objectName: InformationSchema.Types.SqlIdentifier;
      objectType: InformationSchema.Types.CharacterData;
      privilegeType: InformationSchema.Types.CharacterData;
      isGrantable: InformationSchema.Types.YesOrNo;
    };
    export type RoutineColumnUsage = {
      specificCatalog: InformationSchema.Types.SqlIdentifier;
      specificSchema: InformationSchema.Types.SqlIdentifier;
      specificName: InformationSchema.Types.SqlIdentifier;
      routineCatalog: InformationSchema.Types.SqlIdentifier;
      routineSchema: InformationSchema.Types.SqlIdentifier;
      routineName: InformationSchema.Types.SqlIdentifier;
      tableCatalog: InformationSchema.Types.SqlIdentifier;
      tableSchema: InformationSchema.Types.SqlIdentifier;
      tableName: InformationSchema.Types.SqlIdentifier;
      columnName: InformationSchema.Types.SqlIdentifier;
    };
    export type RoutinePrivileges = {
      grantor: InformationSchema.Types.SqlIdentifier;
      grantee: InformationSchema.Types.SqlIdentifier;
      specificCatalog: InformationSchema.Types.SqlIdentifier;
      specificSchema: InformationSchema.Types.SqlIdentifier;
      specificName: InformationSchema.Types.SqlIdentifier;
      routineCatalog: InformationSchema.Types.SqlIdentifier;
      routineSchema: InformationSchema.Types.SqlIdentifier;
      routineName: InformationSchema.Types.SqlIdentifier;
      privilegeType: InformationSchema.Types.CharacterData;
      isGrantable: InformationSchema.Types.YesOrNo;
    };
    export type RoutineRoutineUsage = {
      specificCatalog: InformationSchema.Types.SqlIdentifier;
      specificSchema: InformationSchema.Types.SqlIdentifier;
      specificName: InformationSchema.Types.SqlIdentifier;
      routineCatalog: InformationSchema.Types.SqlIdentifier;
      routineSchema: InformationSchema.Types.SqlIdentifier;
      routineName: InformationSchema.Types.SqlIdentifier;
    };
    export type RoutineSequenceUsage = {
      specificCatalog: InformationSchema.Types.SqlIdentifier;
      specificSchema: InformationSchema.Types.SqlIdentifier;
      specificName: InformationSchema.Types.SqlIdentifier;
      routineCatalog: InformationSchema.Types.SqlIdentifier;
      routineSchema: InformationSchema.Types.SqlIdentifier;
      routineName: InformationSchema.Types.SqlIdentifier;
      sequenceCatalog: InformationSchema.Types.SqlIdentifier;
      sequenceSchema: InformationSchema.Types.SqlIdentifier;
      sequenceName: InformationSchema.Types.SqlIdentifier;
    };
    export type RoutineTableUsage = {
      specificCatalog: InformationSchema.Types.SqlIdentifier;
      specificSchema: InformationSchema.Types.SqlIdentifier;
      specificName: InformationSchema.Types.SqlIdentifier;
      routineCatalog: InformationSchema.Types.SqlIdentifier;
      routineSchema: InformationSchema.Types.SqlIdentifier;
      routineName: InformationSchema.Types.SqlIdentifier;
      tableCatalog: InformationSchema.Types.SqlIdentifier;
      tableSchema: InformationSchema.Types.SqlIdentifier;
      tableName: InformationSchema.Types.SqlIdentifier;
    };
    export type Routines = {
      specificCatalog: InformationSchema.Types.SqlIdentifier;
      specificSchema: InformationSchema.Types.SqlIdentifier;
      specificName: InformationSchema.Types.SqlIdentifier;
      routineCatalog: InformationSchema.Types.SqlIdentifier;
      routineSchema: InformationSchema.Types.SqlIdentifier;
      routineName: InformationSchema.Types.SqlIdentifier;
      routineType: InformationSchema.Types.CharacterData;
      moduleCatalog: InformationSchema.Types.SqlIdentifier;
      moduleSchema: InformationSchema.Types.SqlIdentifier;
      moduleName: InformationSchema.Types.SqlIdentifier;
      udtCatalog: InformationSchema.Types.SqlIdentifier;
      udtSchema: InformationSchema.Types.SqlIdentifier;
      udtName: InformationSchema.Types.SqlIdentifier;
      dataType: InformationSchema.Types.CharacterData;
      characterMaximumLength: InformationSchema.Types.CardinalNumber;
      characterOctetLength: InformationSchema.Types.CardinalNumber;
      characterSetCatalog: InformationSchema.Types.SqlIdentifier;
      characterSetSchema: InformationSchema.Types.SqlIdentifier;
      characterSetName: InformationSchema.Types.SqlIdentifier;
      collationCatalog: InformationSchema.Types.SqlIdentifier;
      collationSchema: InformationSchema.Types.SqlIdentifier;
      collationName: InformationSchema.Types.SqlIdentifier;
      numericPrecision: InformationSchema.Types.CardinalNumber;
      numericPrecisionRadix: InformationSchema.Types.CardinalNumber;
      numericScale: InformationSchema.Types.CardinalNumber;
      datetimePrecision: InformationSchema.Types.CardinalNumber;
      intervalType: InformationSchema.Types.CharacterData;
      intervalPrecision: InformationSchema.Types.CardinalNumber;
      typeUdtCatalog: InformationSchema.Types.SqlIdentifier;
      typeUdtSchema: InformationSchema.Types.SqlIdentifier;
      typeUdtName: InformationSchema.Types.SqlIdentifier;
      scopeCatalog: InformationSchema.Types.SqlIdentifier;
      scopeSchema: InformationSchema.Types.SqlIdentifier;
      scopeName: InformationSchema.Types.SqlIdentifier;
      maximumCardinality: InformationSchema.Types.CardinalNumber;
      dtdIdentifier: InformationSchema.Types.SqlIdentifier;
      routineBody: InformationSchema.Types.CharacterData;
      routineDefinition: InformationSchema.Types.CharacterData;
      externalName: InformationSchema.Types.CharacterData;
      externalLanguage: InformationSchema.Types.CharacterData;
      parameterStyle: InformationSchema.Types.CharacterData;
      isDeterministic: InformationSchema.Types.YesOrNo;
      sqlDataAccess: InformationSchema.Types.CharacterData;
      isNullCall: InformationSchema.Types.YesOrNo;
      sqlPath: InformationSchema.Types.CharacterData;
      schemaLevelRoutine: InformationSchema.Types.YesOrNo;
      maxDynamicResultSets: InformationSchema.Types.CardinalNumber;
      isUserDefinedCast: InformationSchema.Types.YesOrNo;
      isImplicitlyInvocable: InformationSchema.Types.YesOrNo;
      securityType: InformationSchema.Types.CharacterData;
      toSqlSpecificCatalog: InformationSchema.Types.SqlIdentifier;
      toSqlSpecificSchema: InformationSchema.Types.SqlIdentifier;
      toSqlSpecificName: InformationSchema.Types.SqlIdentifier;
      asLocator: InformationSchema.Types.YesOrNo;
      created: InformationSchema.Types.TimeStamp;
      lastAltered: InformationSchema.Types.TimeStamp;
      newSavepointLevel: InformationSchema.Types.YesOrNo;
      isUdtDependent: InformationSchema.Types.YesOrNo;
      resultCastFromDataType: InformationSchema.Types.CharacterData;
      resultCastAsLocator: InformationSchema.Types.YesOrNo;
      resultCastCharMaxLength: InformationSchema.Types.CardinalNumber;
      resultCastCharOctetLength: InformationSchema.Types.CardinalNumber;
      resultCastCharSetCatalog: InformationSchema.Types.SqlIdentifier;
      resultCastCharSetSchema: InformationSchema.Types.SqlIdentifier;
      resultCastCharSetName: InformationSchema.Types.SqlIdentifier;
      resultCastCollationCatalog: InformationSchema.Types.SqlIdentifier;
      resultCastCollationSchema: InformationSchema.Types.SqlIdentifier;
      resultCastCollationName: InformationSchema.Types.SqlIdentifier;
      resultCastNumericPrecision: InformationSchema.Types.CardinalNumber;
      resultCastNumericPrecisionRadix: InformationSchema.Types.CardinalNumber;
      resultCastNumericScale: InformationSchema.Types.CardinalNumber;
      resultCastDatetimePrecision: InformationSchema.Types.CardinalNumber;
      resultCastIntervalType: InformationSchema.Types.CharacterData;
      resultCastIntervalPrecision: InformationSchema.Types.CardinalNumber;
      resultCastTypeUdtCatalog: InformationSchema.Types.SqlIdentifier;
      resultCastTypeUdtSchema: InformationSchema.Types.SqlIdentifier;
      resultCastTypeUdtName: InformationSchema.Types.SqlIdentifier;
      resultCastScopeCatalog: InformationSchema.Types.SqlIdentifier;
      resultCastScopeSchema: InformationSchema.Types.SqlIdentifier;
      resultCastScopeName: InformationSchema.Types.SqlIdentifier;
      resultCastMaximumCardinality: InformationSchema.Types.CardinalNumber;
      resultCastDtdIdentifier: InformationSchema.Types.SqlIdentifier;
    };
    export type Schemata = {
      catalogName: InformationSchema.Types.SqlIdentifier;
      schemaName: InformationSchema.Types.SqlIdentifier;
      schemaOwner: InformationSchema.Types.SqlIdentifier;
      defaultCharacterSetCatalog: InformationSchema.Types.SqlIdentifier;
      defaultCharacterSetSchema: InformationSchema.Types.SqlIdentifier;
      defaultCharacterSetName: InformationSchema.Types.SqlIdentifier;
      sqlPath: InformationSchema.Types.CharacterData;
    };
    export type Sequences = {
      sequenceCatalog: InformationSchema.Types.SqlIdentifier;
      sequenceSchema: InformationSchema.Types.SqlIdentifier;
      sequenceName: InformationSchema.Types.SqlIdentifier;
      dataType: InformationSchema.Types.CharacterData;
      numericPrecision: InformationSchema.Types.CardinalNumber;
      numericPrecisionRadix: InformationSchema.Types.CardinalNumber;
      numericScale: InformationSchema.Types.CardinalNumber;
      startValue: InformationSchema.Types.CharacterData;
      minimumValue: InformationSchema.Types.CharacterData;
      maximumValue: InformationSchema.Types.CharacterData;
      increment: InformationSchema.Types.CharacterData;
      cycleOption: InformationSchema.Types.YesOrNo;
    };
    export type SqlFeatures = {
      featureId: InformationSchema.Types.CharacterData;
      featureName: InformationSchema.Types.CharacterData;
      subFeatureId: InformationSchema.Types.CharacterData;
      subFeatureName: InformationSchema.Types.CharacterData;
      isSupported: InformationSchema.Types.YesOrNo;
      isVerifiedBy: InformationSchema.Types.CharacterData;
      comments: InformationSchema.Types.CharacterData;
    };
    export type SqlIdentifier = PgCatalog.Types.Name;
    export type SqlImplementationInfo = {
      implementationInfoId: InformationSchema.Types.CharacterData;
      implementationInfoName: InformationSchema.Types.CharacterData;
      integerValue: InformationSchema.Types.CardinalNumber;
      characterValue: InformationSchema.Types.CharacterData;
      comments: InformationSchema.Types.CharacterData;
    };
    export type SqlParts = {
      featureId: InformationSchema.Types.CharacterData;
      featureName: InformationSchema.Types.CharacterData;
      isSupported: InformationSchema.Types.YesOrNo;
      isVerifiedBy: InformationSchema.Types.CharacterData;
      comments: InformationSchema.Types.CharacterData;
    };
    export type SqlSizing = {
      sizingId: InformationSchema.Types.CardinalNumber;
      sizingName: InformationSchema.Types.CharacterData;
      supportedValue: InformationSchema.Types.CardinalNumber;
      comments: InformationSchema.Types.CharacterData;
    };
    export type TableConstraints = {
      constraintCatalog: InformationSchema.Types.SqlIdentifier;
      constraintSchema: InformationSchema.Types.SqlIdentifier;
      constraintName: InformationSchema.Types.SqlIdentifier;
      tableCatalog: InformationSchema.Types.SqlIdentifier;
      tableSchema: InformationSchema.Types.SqlIdentifier;
      tableName: InformationSchema.Types.SqlIdentifier;
      constraintType: InformationSchema.Types.CharacterData;
      isDeferrable: InformationSchema.Types.YesOrNo;
      initiallyDeferred: InformationSchema.Types.YesOrNo;
      enforced: InformationSchema.Types.YesOrNo;
      nullsDistinct: InformationSchema.Types.YesOrNo;
    };
    export type TablePrivileges = {
      grantor: InformationSchema.Types.SqlIdentifier;
      grantee: InformationSchema.Types.SqlIdentifier;
      tableCatalog: InformationSchema.Types.SqlIdentifier;
      tableSchema: InformationSchema.Types.SqlIdentifier;
      tableName: InformationSchema.Types.SqlIdentifier;
      privilegeType: InformationSchema.Types.CharacterData;
      isGrantable: InformationSchema.Types.YesOrNo;
      withHierarchy: InformationSchema.Types.YesOrNo;
    };
    export type Tables = {
      tableCatalog: InformationSchema.Types.SqlIdentifier;
      tableSchema: InformationSchema.Types.SqlIdentifier;
      tableName: InformationSchema.Types.SqlIdentifier;
      tableType: InformationSchema.Types.CharacterData;
      selfReferencingColumnName: InformationSchema.Types.SqlIdentifier;
      referenceGeneration: InformationSchema.Types.CharacterData;
      userDefinedTypeCatalog: InformationSchema.Types.SqlIdentifier;
      userDefinedTypeSchema: InformationSchema.Types.SqlIdentifier;
      userDefinedTypeName: InformationSchema.Types.SqlIdentifier;
      isInsertableInto: InformationSchema.Types.YesOrNo;
      isTyped: InformationSchema.Types.YesOrNo;
      commitAction: InformationSchema.Types.CharacterData;
    };
    export type TimeStamp = PgCatalog.Types.Timestamptz;
    export type Transforms = {
      udtCatalog: InformationSchema.Types.SqlIdentifier;
      udtSchema: InformationSchema.Types.SqlIdentifier;
      udtName: InformationSchema.Types.SqlIdentifier;
      specificCatalog: InformationSchema.Types.SqlIdentifier;
      specificSchema: InformationSchema.Types.SqlIdentifier;
      specificName: InformationSchema.Types.SqlIdentifier;
      groupName: InformationSchema.Types.SqlIdentifier;
      transformType: InformationSchema.Types.CharacterData;
    };
    export type TriggeredUpdateColumns = {
      triggerCatalog: InformationSchema.Types.SqlIdentifier;
      triggerSchema: InformationSchema.Types.SqlIdentifier;
      triggerName: InformationSchema.Types.SqlIdentifier;
      eventObjectCatalog: InformationSchema.Types.SqlIdentifier;
      eventObjectSchema: InformationSchema.Types.SqlIdentifier;
      eventObjectTable: InformationSchema.Types.SqlIdentifier;
      eventObjectColumn: InformationSchema.Types.SqlIdentifier;
    };
    export type Triggers = {
      triggerCatalog: InformationSchema.Types.SqlIdentifier;
      triggerSchema: InformationSchema.Types.SqlIdentifier;
      triggerName: InformationSchema.Types.SqlIdentifier;
      eventManipulation: InformationSchema.Types.CharacterData;
      eventObjectCatalog: InformationSchema.Types.SqlIdentifier;
      eventObjectSchema: InformationSchema.Types.SqlIdentifier;
      eventObjectTable: InformationSchema.Types.SqlIdentifier;
      actionOrder: InformationSchema.Types.CardinalNumber;
      actionCondition: InformationSchema.Types.CharacterData;
      actionStatement: InformationSchema.Types.CharacterData;
      actionOrientation: InformationSchema.Types.CharacterData;
      actionTiming: InformationSchema.Types.CharacterData;
      actionReferenceOldTable: InformationSchema.Types.SqlIdentifier;
      actionReferenceNewTable: InformationSchema.Types.SqlIdentifier;
      actionReferenceOldRow: InformationSchema.Types.SqlIdentifier;
      actionReferenceNewRow: InformationSchema.Types.SqlIdentifier;
      created: InformationSchema.Types.TimeStamp;
    };
    export type UdtPrivileges = {
      grantor: InformationSchema.Types.SqlIdentifier;
      grantee: InformationSchema.Types.SqlIdentifier;
      udtCatalog: InformationSchema.Types.SqlIdentifier;
      udtSchema: InformationSchema.Types.SqlIdentifier;
      udtName: InformationSchema.Types.SqlIdentifier;
      privilegeType: InformationSchema.Types.CharacterData;
      isGrantable: InformationSchema.Types.YesOrNo;
    };
    export type UsagePrivileges = {
      grantor: InformationSchema.Types.SqlIdentifier;
      grantee: InformationSchema.Types.SqlIdentifier;
      objectCatalog: InformationSchema.Types.SqlIdentifier;
      objectSchema: InformationSchema.Types.SqlIdentifier;
      objectName: InformationSchema.Types.SqlIdentifier;
      objectType: InformationSchema.Types.CharacterData;
      privilegeType: InformationSchema.Types.CharacterData;
      isGrantable: InformationSchema.Types.YesOrNo;
    };
    export type UserDefinedTypes = {
      userDefinedTypeCatalog: InformationSchema.Types.SqlIdentifier;
      userDefinedTypeSchema: InformationSchema.Types.SqlIdentifier;
      userDefinedTypeName: InformationSchema.Types.SqlIdentifier;
      userDefinedTypeCategory: InformationSchema.Types.CharacterData;
      isInstantiable: InformationSchema.Types.YesOrNo;
      isFinal: InformationSchema.Types.YesOrNo;
      orderingForm: InformationSchema.Types.CharacterData;
      orderingCategory: InformationSchema.Types.CharacterData;
      orderingRoutineCatalog: InformationSchema.Types.SqlIdentifier;
      orderingRoutineSchema: InformationSchema.Types.SqlIdentifier;
      orderingRoutineName: InformationSchema.Types.SqlIdentifier;
      referenceType: InformationSchema.Types.CharacterData;
      dataType: InformationSchema.Types.CharacterData;
      characterMaximumLength: InformationSchema.Types.CardinalNumber;
      characterOctetLength: InformationSchema.Types.CardinalNumber;
      characterSetCatalog: InformationSchema.Types.SqlIdentifier;
      characterSetSchema: InformationSchema.Types.SqlIdentifier;
      characterSetName: InformationSchema.Types.SqlIdentifier;
      collationCatalog: InformationSchema.Types.SqlIdentifier;
      collationSchema: InformationSchema.Types.SqlIdentifier;
      collationName: InformationSchema.Types.SqlIdentifier;
      numericPrecision: InformationSchema.Types.CardinalNumber;
      numericPrecisionRadix: InformationSchema.Types.CardinalNumber;
      numericScale: InformationSchema.Types.CardinalNumber;
      datetimePrecision: InformationSchema.Types.CardinalNumber;
      intervalType: InformationSchema.Types.CharacterData;
      intervalPrecision: InformationSchema.Types.CardinalNumber;
      sourceDtdIdentifier: InformationSchema.Types.SqlIdentifier;
      refDtdIdentifier: InformationSchema.Types.SqlIdentifier;
    };
    export type UserMappingOptions = {
      authorizationIdentifier: InformationSchema.Types.SqlIdentifier;
      foreignServerCatalog: InformationSchema.Types.SqlIdentifier;
      foreignServerName: InformationSchema.Types.SqlIdentifier;
      optionName: InformationSchema.Types.SqlIdentifier;
      optionValue: InformationSchema.Types.CharacterData;
    };
    export type UserMappings = {
      authorizationIdentifier: InformationSchema.Types.SqlIdentifier;
      foreignServerCatalog: InformationSchema.Types.SqlIdentifier;
      foreignServerName: InformationSchema.Types.SqlIdentifier;
    };
    export type ViewColumnUsage = {
      viewCatalog: InformationSchema.Types.SqlIdentifier;
      viewSchema: InformationSchema.Types.SqlIdentifier;
      viewName: InformationSchema.Types.SqlIdentifier;
      tableCatalog: InformationSchema.Types.SqlIdentifier;
      tableSchema: InformationSchema.Types.SqlIdentifier;
      tableName: InformationSchema.Types.SqlIdentifier;
      columnName: InformationSchema.Types.SqlIdentifier;
    };
    export type ViewRoutineUsage = {
      tableCatalog: InformationSchema.Types.SqlIdentifier;
      tableSchema: InformationSchema.Types.SqlIdentifier;
      tableName: InformationSchema.Types.SqlIdentifier;
      specificCatalog: InformationSchema.Types.SqlIdentifier;
      specificSchema: InformationSchema.Types.SqlIdentifier;
      specificName: InformationSchema.Types.SqlIdentifier;
    };
    export type ViewTableUsage = {
      viewCatalog: InformationSchema.Types.SqlIdentifier;
      viewSchema: InformationSchema.Types.SqlIdentifier;
      viewName: InformationSchema.Types.SqlIdentifier;
      tableCatalog: InformationSchema.Types.SqlIdentifier;
      tableSchema: InformationSchema.Types.SqlIdentifier;
      tableName: InformationSchema.Types.SqlIdentifier;
    };
    export type Views = {
      tableCatalog: InformationSchema.Types.SqlIdentifier;
      tableSchema: InformationSchema.Types.SqlIdentifier;
      tableName: InformationSchema.Types.SqlIdentifier;
      viewDefinition: InformationSchema.Types.CharacterData;
      checkOption: InformationSchema.Types.CharacterData;
      isUpdatable: InformationSchema.Types.YesOrNo;
      isInsertableInto: InformationSchema.Types.YesOrNo;
      isTriggerUpdatable: InformationSchema.Types.YesOrNo;
      isTriggerDeletable: InformationSchema.Types.YesOrNo;
      isTriggerInsertableInto: InformationSchema.Types.YesOrNo;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type PrimaryKey = never;
      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type PrimaryKey = never;
      export type Optional = Pick<Record, never>;
    }
    export namespace SqlParts {
      export type Record = {
        featureId: InformationSchema.Types.SqlParts["featureId"] | null;
        featureName: InformationSchema.Types.SqlParts["featureName"] | null;
        isSupported: InformationSchema.Types.SqlParts["isSupported"] | null;
        isVerifiedBy: InformationSchema.Types.SqlParts["isVerifiedBy"] | null;
        comments: InformationSchema.Types.SqlParts["comments"] | null;
      };

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type PrimaryKey = never;
      export type Optional = Pick<Record, never>;
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

      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;

      export type PrimaryKey = never;
      export type Optional = Pick<Record, never>;
    }
  }
}
export namespace Scripts {
  export namespace Sample {
    export namespace Film {
      export namespace Tally {
        export type Results = { count: PgCatalog.Types.Int8 };
      }
    }
    export namespace Pick {
      export type Results = {
        filmId: PgCatalog.Types.Int4;
        title: PgCatalog.Types.Varchar;
        description: PgCatalog.Types.Text;
        releaseYear: PgCatalog.Types.Int4;
        languageId: PgCatalog.Types.Int2;
        rentalDuration: PgCatalog.Types.Int2;
        rentalRate: PgCatalog.Types.Numeric;
        length: PgCatalog.Types.Int2;
        replacementCost: PgCatalog.Types.Numeric;
        rating: Public.Types.MpaaRating;
        lastUpdate: PgCatalog.Types.Timestamp;
        specialFeatures: PgCatalog.Types.TextArray;
        fulltext: PgCatalog.Types.Tsvector;
      };
      export type Parameters = { argument_1: PgCatalog.Types.Text };
    }
  }
  export namespace Tally {
    export type Results = { count: PgCatalog.Types.Int8 };
  }
}

// begin string parsers
export namespace PgCatalog {
  export namespace Types {
    export namespace AclitemArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.AclitemArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Aclitem.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace BitArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.BitArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Bit.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace BoolArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.BoolArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Bool.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace BoxArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.BoxArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Box.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace BpcharArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.BpcharArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Bpchar.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ByteaArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.ByteaArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Bytea.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CharArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.CharArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Char.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CidArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.CidArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Cid.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CidrArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.CidrArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Cidr.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CircleArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.CircleArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Circle.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CstringArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.CstringArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Cstring.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace DateArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.DateArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Date.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace DatemultirangeArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.DatemultirangeArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Datemultirange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace DaterangeArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.DaterangeArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Daterange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Float4Array {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Float4Array

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Float4.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Float8Array {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Float8Array

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Float8.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace GtsvectorArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.GtsvectorArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Gtsvector.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace InetArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.InetArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Inet.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Int2Array {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Int2Array

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Int2.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Int2vectorArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Int2vectorArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Int2vector.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Int4Array {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Int4Array

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Int4.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Int4multirangeArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Int4multirangeArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Int4multirange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Int4rangeArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Int4rangeArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Int4range.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Int8Array {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Int8Array

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Int8.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Int8multirangeArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Int8multirangeArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Int8multirange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Int8rangeArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Int8rangeArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Int8range.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace IntervalArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.IntervalArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Interval.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace JsonArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.JsonArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Json.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace JsonbArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.JsonbArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Jsonb.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace JsonpathArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.JsonpathArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Jsonpath.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace LineArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.LineArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Line.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace LsegArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.LsegArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Lseg.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace MacaddrArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.MacaddrArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Macaddr.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Macaddr8Array {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Macaddr8Array

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Macaddr8.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace MoneyArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.MoneyArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Money.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace NameArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.NameArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Name.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace NumericArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.NumericArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Numeric.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace NummultirangeArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.NummultirangeArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Nummultirange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace NumrangeArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.NumrangeArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Numrange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace OidArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.OidArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Oid.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace OidvectorArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.OidvectorArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Oidvector.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PathArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PathArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Path.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAggregateArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgAggregateArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgAggregate.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAmArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgAmArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgAm.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAmopArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgAmopArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgAmop.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAmprocArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgAmprocArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgAmproc.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAttrdefArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgAttrdefArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgAttrdef.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAttributeArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgAttributeArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgAttribute.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAuthMembersArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgAuthMembersArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgAuthMembers.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAuthidArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgAuthidArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgAuthid.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAvailableExtensionVersionsArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgAvailableExtensionVersionsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgAvailableExtensionVersions.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAvailableExtensionsArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgAvailableExtensionsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgAvailableExtensions.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgBackendMemoryContextsArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgBackendMemoryContextsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgBackendMemoryContexts.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgCastArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgCastArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCast.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgClassArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgClassArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgClass.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgCollationArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgCollationArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCollation.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgConfigArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgConfigArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgConfig.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgConstraintArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgConstraintArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgConstraint.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgConversionArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgConversionArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgConversion.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgCursorsArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgCursorsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCursors.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgDatabaseArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgDatabaseArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgDatabase.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgDbRoleSettingArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgDbRoleSettingArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgDbRoleSetting.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgDefaultAclArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgDefaultAclArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgDefaultAcl.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgDependArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgDependArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgDepend.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgDescriptionArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgDescriptionArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgDescription.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgEnumArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgEnumArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgEnum.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgEventTriggerArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgEventTriggerArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgEventTrigger.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgExtensionArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgExtensionArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgExtension.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgFileSettingsArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgFileSettingsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgFileSettings.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgForeignDataWrapperArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgForeignDataWrapperArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgForeignDataWrapper.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgForeignServerArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgForeignServerArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgForeignServer.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgForeignTableArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgForeignTableArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgForeignTable.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgGroupArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgGroupArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgGroup.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgHbaFileRulesArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgHbaFileRulesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgHbaFileRules.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgIdentFileMappingsArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgIdentFileMappingsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgIdentFileMappings.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgIndexArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgIndexArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgIndex.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgIndexesArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgIndexesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgIndexes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgInheritsArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgInheritsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgInherits.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgInitPrivsArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgInitPrivsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgInitPrivs.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgLanguageArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgLanguageArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgLanguage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgLargeobjectArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgLargeobjectArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgLargeobject.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgLargeobjectMetadataArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgLargeobjectMetadataArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgLargeobjectMetadata.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgLocksArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgLocksArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgLocks.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgLsnArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgLsnArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgLsn.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgMatviewsArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgMatviewsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgMatviews.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgNamespaceArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgNamespaceArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgNamespace.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgOpclassArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgOpclassArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgOpclass.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgOperatorArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgOperatorArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgOperator.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgOpfamilyArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgOpfamilyArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgOpfamily.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgParameterAclArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgParameterAclArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgParameterAcl.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgPartitionedTableArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgPartitionedTableArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgPartitionedTable.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgPoliciesArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgPoliciesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgPolicies.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgPolicyArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgPolicyArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgPolicy.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgPreparedStatementsArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgPreparedStatementsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgPreparedStatements.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgPreparedXactsArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgPreparedXactsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgPreparedXacts.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgProcArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgProcArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgProc.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgPublicationArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgPublicationArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgPublication.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgPublicationNamespaceArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgPublicationNamespaceArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgPublicationNamespace.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgPublicationRelArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgPublicationRelArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgPublicationRel.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgPublicationTablesArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgPublicationTablesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgPublicationTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgRangeArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgRangeArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgRange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgReplicationOriginArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgReplicationOriginArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgReplicationOrigin.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgReplicationOriginStatusArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgReplicationOriginStatusArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgReplicationOriginStatus.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgReplicationSlotsArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgReplicationSlotsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgReplicationSlots.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgRewriteArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgRewriteArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgRewrite.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgRolesArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgRolesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgRoles.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgRulesArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgRulesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgRules.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgSeclabelArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgSeclabelArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgSeclabel.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgSeclabelsArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgSeclabelsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgSeclabels.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgSequenceArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgSequenceArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgSequence.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgSequencesArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgSequencesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgSequences.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgSettingsArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgSettingsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgSettings.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgShadowArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgShadowArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgShadow.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgShdependArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgShdependArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgShdepend.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgShdescriptionArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgShdescriptionArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgShdescription.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgShmemAllocationsArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgShmemAllocationsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgShmemAllocations.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgShseclabelArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgShseclabelArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgShseclabel.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgSnapshotArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgSnapshotArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgSnapshot.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatActivityArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatActivityArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatActivity.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatAllIndexesArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatAllIndexesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatAllIndexes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatAllTablesArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatAllTablesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatAllTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatArchiverArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatArchiverArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatArchiver.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatBgwriterArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatBgwriterArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatBgwriter.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatDatabaseArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatDatabaseArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatDatabase.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatDatabaseConflictsArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatDatabaseConflictsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatDatabaseConflicts.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatGssapiArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatGssapiArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatGssapi.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatIoArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatIoArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatIo.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatProgressAnalyzeArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatProgressAnalyzeArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatProgressAnalyze.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatProgressBasebackupArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatProgressBasebackupArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatProgressBasebackup.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatProgressClusterArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatProgressClusterArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatProgressCluster.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatProgressCopyArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatProgressCopyArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatProgressCopy.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatProgressCreateIndexArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatProgressCreateIndexArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatProgressCreateIndex.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatProgressVacuumArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatProgressVacuumArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatProgressVacuum.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatRecoveryPrefetchArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatRecoveryPrefetchArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatRecoveryPrefetch.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatReplicationArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatReplicationArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatReplication.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatReplicationSlotsArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatReplicationSlotsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatReplicationSlots.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatSlruArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatSlruArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatSlru.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatSslArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatSslArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatSsl.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatSubscriptionArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatSubscriptionArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatSubscription.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatSubscriptionStatsArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatSubscriptionStatsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatSubscriptionStats.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatSysIndexesArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatSysIndexesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatSysIndexes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatSysTablesArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatSysTablesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatSysTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatUserFunctionsArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatUserFunctionsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatUserFunctions.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatUserIndexesArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatUserIndexesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatUserIndexes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatUserTablesArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatUserTablesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatUserTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatWalArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatWalArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatWal.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatWalReceiverArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatWalReceiverArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatWalReceiver.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatXactAllTablesArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatXactAllTablesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatXactAllTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatXactSysTablesArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatXactSysTablesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatXactSysTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatXactUserFunctionsArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatXactUserFunctionsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatXactUserFunctions.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatXactUserTablesArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatXactUserTablesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatXactUserTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatioAllIndexesArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatioAllIndexesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatioAllIndexes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatioAllSequencesArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatioAllSequencesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatioAllSequences.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatioAllTablesArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatioAllTablesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatioAllTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatioSysIndexesArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatioSysIndexesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatioSysIndexes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatioSysSequencesArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatioSysSequencesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatioSysSequences.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatioSysTablesArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatioSysTablesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatioSysTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatioUserIndexesArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatioUserIndexesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatioUserIndexes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatioUserSequencesArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatioUserSequencesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatioUserSequences.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatioUserTablesArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatioUserTablesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatioUserTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatisticArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatisticArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatistic.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatisticExtArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatisticExtArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatisticExt.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatisticExtDataArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatisticExtDataArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatisticExtData.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatsArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStats.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatsExtArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatsExtArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatsExt.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatsExtExprsArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgStatsExtExprsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatsExtExprs.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgSubscriptionArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgSubscriptionArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgSubscription.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgSubscriptionRelArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgSubscriptionRelArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgSubscriptionRel.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTablesArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgTablesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTablespaceArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgTablespaceArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgTablespace.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTimezoneAbbrevsArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgTimezoneAbbrevsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgTimezoneAbbrevs.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTimezoneNamesArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgTimezoneNamesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgTimezoneNames.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTransformArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgTransformArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgTransform.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTriggerArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgTriggerArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgTrigger.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTsConfigArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgTsConfigArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgTsConfig.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTsConfigMapArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgTsConfigMapArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgTsConfigMap.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTsDictArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgTsDictArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgTsDict.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTsParserArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgTsParserArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgTsParser.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTsTemplateArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgTsTemplateArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgTsTemplate.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTypeArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgTypeArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgType.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgUserArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgUserArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgUser.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgUserMappingArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgUserMappingArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgUserMapping.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgUserMappingsArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgUserMappingsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgUserMappings.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgViewsArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgViewsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgViews.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PointArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PointArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Point.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PolygonArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PolygonArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Polygon.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RecordArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.RecordArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Record.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RefcursorArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.RefcursorArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Refcursor.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegclassArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.RegclassArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Regclass.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegcollationArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.RegcollationArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Regcollation.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegconfigArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.RegconfigArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Regconfig.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegdictionaryArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.RegdictionaryArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Regdictionary.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegnamespaceArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.RegnamespaceArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Regnamespace.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegoperArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.RegoperArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Regoper.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegoperatorArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.RegoperatorArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Regoperator.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegprocArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.RegprocArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Regproc.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegprocedureArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.RegprocedureArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Regprocedure.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegroleArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.RegroleArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Regrole.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegtypeArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.RegtypeArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Regtype.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TextArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.TextArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Text.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TidArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.TidArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Tid.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TimeArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.TimeArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Time.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TimestampArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.TimestampArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Timestamp.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TimestamptzArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.TimestamptzArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Timestamptz.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TimetzArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.TimetzArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Timetz.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TsmultirangeArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.TsmultirangeArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Tsmultirange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TsqueryArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.TsqueryArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Tsquery.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TsrangeArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.TsrangeArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Tsrange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TstzmultirangeArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.TstzmultirangeArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Tstzmultirange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TstzrangeArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.TstzrangeArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Tstzrange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TsvectorArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.TsvectorArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Tsvector.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TxidSnapshotArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.TxidSnapshotArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return TxidSnapshot.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace UuidArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.UuidArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Uuid.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace VarbitArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.VarbitArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Varbit.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace VarcharArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.VarcharArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Varchar.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace XidArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.XidArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Xid.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Xid8Array {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Xid8Array

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Xid8.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace XmlArray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.XmlArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Xml.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Aclitem {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Aclitem

        return from;
      }
    }
    export namespace Any {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Any

        return from;
      }
    }
    export namespace Anyarray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Anyarray

        return from;
      }
    }
    export namespace Anycompatible {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Anycompatible

        return from;
      }
    }
    export namespace Anycompatiblearray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Anycompatiblearray

        return from;
      }
    }
    export namespace Anycompatiblemultirange {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Anycompatiblemultirange

        return from;
      }
    }
    export namespace Anycompatiblenonarray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Anycompatiblenonarray

        return from;
      }
    }
    export namespace Anycompatiblerange {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Anycompatiblerange

        return from;
      }
    }
    export namespace Anyelement {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Anyelement

        return from;
      }
    }
    export namespace Anyenum {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Anyenum

        return from;
      }
    }
    export namespace Anymultirange {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Anymultirange

        return from;
      }
    }
    export namespace Anynonarray {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Anynonarray

        return from;
      }
    }
    export namespace Anyrange {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Anyrange

        return from;
      }
    }
    export namespace Bit {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Bit

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
        // Type PgCatalog.Types.Bool

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
        // Type PgCatalog.Types.Box

        return from;
      }
    }
    export namespace Bpchar {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Bpchar

        return from;
      }
    }
    export namespace Bytea {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Bytea

        return from ? new Uint8Array(JSON.parse(from)) : null;
      }
    }
    export namespace Char {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Char

        return from;
      }
    }
    export namespace Cid {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Cid

        return from;
      }
    }
    export namespace Cidr {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Cidr

        return from ? new Uint8Array(JSON.parse(from)) : null;
      }
    }
    export namespace Circle {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Circle

        return from;
      }
    }
    export namespace Cstring {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Cstring

        return from;
      }
    }
    export namespace Date {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Date

        if (from === null) return null;
        if ((from as unknown) instanceof global.Date) return from;
        return new global.Date(from);
      }
    }
    export namespace Datemultirange {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Datemultirange

        return from;
      }
    }
    export namespace Daterange {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Daterange

        return from;
      }
    }
    export namespace EventTrigger {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.EventTrigger

        return from;
      }
    }
    export namespace FdwHandler {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.FdwHandler

        return from;
      }
    }
    export namespace Float4 {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Float4

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Float8 {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Float8

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Gtsvector {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Gtsvector

        return from;
      }
    }
    export namespace IndexAmHandler {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.IndexAmHandler

        return from;
      }
    }
    export namespace Inet {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Inet

        return from;
      }
    }
    export namespace Int2 {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Int2

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Int2vector {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Int2vector

        if (from === null) return null;
        const source = Array.isArray(from)
          ? new Uint16Array(from)
          : JSON.parse(from);
        return new Uint16Array(source);
      }
    }
    export namespace Int4 {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Int4

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Int4multirange {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Int4multirange

        return from;
      }
    }
    export namespace Int4range {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Int4range

        return from;
      }
    }
    export namespace Int8 {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Int8

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Int8multirange {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Int8multirange

        return from;
      }
    }
    export namespace Int8range {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Int8range

        return from;
      }
    }
    export namespace Internal {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Internal

        return from;
      }
    }
    export namespace Interval {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Interval

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Json {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Json

        return from;
      }
    }
    export namespace Jsonb {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Jsonb

        return from;
      }
    }
    export namespace Jsonpath {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Jsonpath

        return from;
      }
    }
    export namespace LanguageHandler {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.LanguageHandler

        return from;
      }
    }
    export namespace Line {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Line

        return from;
      }
    }
    export namespace Lseg {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Lseg

        return from;
      }
    }
    export namespace Macaddr {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Macaddr

        return from ? new Uint8Array(JSON.parse(from)) : null;
      }
    }
    export namespace Macaddr8 {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Macaddr8

        return from ? new Uint8Array(JSON.parse(from)) : null;
      }
    }
    export namespace Money {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Money

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Name {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Name

        return from;
      }
    }
    export namespace Numeric {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Numeric

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Nummultirange {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Nummultirange

        return from;
      }
    }
    export namespace Numrange {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Numrange

        return from;
      }
    }
    export namespace Oid {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Oid

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Oidvector {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Oidvector

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Oid.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Path {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Path

        return from;
      }
    }
    export namespace PgAggregate {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgAggregate
        return from;
      }
    }
    export namespace PgAm {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgAm
        return from;
      }
    }
    export namespace PgAmop {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgAmop
        return from;
      }
    }
    export namespace PgAmproc {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgAmproc
        return from;
      }
    }
    export namespace PgAttrdef {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgAttrdef
        return from;
      }
    }
    export namespace PgAttribute {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgAttribute
        return from;
      }
    }
    export namespace PgAuthMembers {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgAuthMembers
        return from;
      }
    }
    export namespace PgAuthid {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgAuthid
        return from;
      }
    }
    export namespace PgAvailableExtensionVersions {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgAvailableExtensionVersions
        return from;
      }
    }
    export namespace PgAvailableExtensions {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgAvailableExtensions
        return from;
      }
    }
    export namespace PgBackendMemoryContexts {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgBackendMemoryContexts
        return from;
      }
    }
    export namespace PgBrinBloomSummary {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgBrinBloomSummary

        return from;
      }
    }
    export namespace PgBrinMinmaxMultiSummary {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgBrinMinmaxMultiSummary

        return from;
      }
    }
    export namespace PgCast {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgCast
        return from;
      }
    }
    export namespace PgClass {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgClass
        return from;
      }
    }
    export namespace PgCollation {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgCollation
        return from;
      }
    }
    export namespace PgConfig {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgConfig
        return from;
      }
    }
    export namespace PgConstraint {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgConstraint
        return from;
      }
    }
    export namespace PgConversion {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgConversion
        return from;
      }
    }
    export namespace PgCursors {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgCursors
        return from;
      }
    }
    export namespace PgDatabase {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgDatabase
        return from;
      }
    }
    export namespace PgDbRoleSetting {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgDbRoleSetting
        return from;
      }
    }
    export namespace PgDdlCommand {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgDdlCommand

        return from;
      }
    }
    export namespace PgDefaultAcl {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgDefaultAcl
        return from;
      }
    }
    export namespace PgDepend {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgDepend
        return from;
      }
    }
    export namespace PgDependencies {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgDependencies

        return from;
      }
    }
    export namespace PgDescription {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgDescription
        return from;
      }
    }
    export namespace PgEnum {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgEnum
        return from;
      }
    }
    export namespace PgEventTrigger {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgEventTrigger
        return from;
      }
    }
    export namespace PgExtension {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgExtension
        return from;
      }
    }
    export namespace PgFileSettings {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgFileSettings
        return from;
      }
    }
    export namespace PgForeignDataWrapper {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgForeignDataWrapper
        return from;
      }
    }
    export namespace PgForeignServer {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgForeignServer
        return from;
      }
    }
    export namespace PgForeignTable {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgForeignTable
        return from;
      }
    }
    export namespace PgGroup {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgGroup
        return from;
      }
    }
    export namespace PgHbaFileRules {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgHbaFileRules
        return from;
      }
    }
    export namespace PgIdentFileMappings {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgIdentFileMappings
        return from;
      }
    }
    export namespace PgIndex {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgIndex
        return from;
      }
    }
    export namespace PgIndexes {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgIndexes
        return from;
      }
    }
    export namespace PgInherits {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgInherits
        return from;
      }
    }
    export namespace PgInitPrivs {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgInitPrivs
        return from;
      }
    }
    export namespace PgLanguage {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgLanguage
        return from;
      }
    }
    export namespace PgLargeobject {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgLargeobject
        return from;
      }
    }
    export namespace PgLargeobjectMetadata {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgLargeobjectMetadata
        return from;
      }
    }
    export namespace PgLocks {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgLocks
        return from;
      }
    }
    export namespace PgLsn {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgLsn

        if (from === null) return null;
        if (from === "") return null;
        return BigInt(from);
      }
    }
    export namespace PgMatviews {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgMatviews
        return from;
      }
    }
    export namespace PgMcvList {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgMcvList

        return from;
      }
    }
    export namespace PgNamespace {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgNamespace
        return from;
      }
    }
    export namespace PgNdistinct {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgNdistinct

        return from;
      }
    }
    export namespace PgNodeTree {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgNodeTree

        return from;
      }
    }
    export namespace PgOpclass {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgOpclass
        return from;
      }
    }
    export namespace PgOperator {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgOperator
        return from;
      }
    }
    export namespace PgOpfamily {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgOpfamily
        return from;
      }
    }
    export namespace PgParameterAcl {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgParameterAcl
        return from;
      }
    }
    export namespace PgPartitionedTable {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgPartitionedTable
        return from;
      }
    }
    export namespace PgPolicies {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgPolicies
        return from;
      }
    }
    export namespace PgPolicy {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgPolicy
        return from;
      }
    }
    export namespace PgPreparedStatements {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgPreparedStatements
        return from;
      }
    }
    export namespace PgPreparedXacts {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgPreparedXacts
        return from;
      }
    }
    export namespace PgProc {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgProc
        return from;
      }
    }
    export namespace PgPublication {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgPublication
        return from;
      }
    }
    export namespace PgPublicationNamespace {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgPublicationNamespace
        return from;
      }
    }
    export namespace PgPublicationRel {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgPublicationRel
        return from;
      }
    }
    export namespace PgPublicationTables {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgPublicationTables
        return from;
      }
    }
    export namespace PgRange {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgRange
        return from;
      }
    }
    export namespace PgReplicationOrigin {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgReplicationOrigin
        return from;
      }
    }
    export namespace PgReplicationOriginStatus {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgReplicationOriginStatus
        return from;
      }
    }
    export namespace PgReplicationSlots {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgReplicationSlots
        return from;
      }
    }
    export namespace PgRewrite {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgRewrite
        return from;
      }
    }
    export namespace PgRoles {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgRoles
        return from;
      }
    }
    export namespace PgRules {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgRules
        return from;
      }
    }
    export namespace PgSeclabel {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgSeclabel
        return from;
      }
    }
    export namespace PgSeclabels {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgSeclabels
        return from;
      }
    }
    export namespace PgSequence {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgSequence
        return from;
      }
    }
    export namespace PgSequences {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgSequences
        return from;
      }
    }
    export namespace PgSettings {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgSettings
        return from;
      }
    }
    export namespace PgShadow {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgShadow
        return from;
      }
    }
    export namespace PgShdepend {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgShdepend
        return from;
      }
    }
    export namespace PgShdescription {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgShdescription
        return from;
      }
    }
    export namespace PgShmemAllocations {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgShmemAllocations
        return from;
      }
    }
    export namespace PgShseclabel {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgShseclabel
        return from;
      }
    }
    export namespace PgSnapshot {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.PgSnapshot

        return from;
      }
    }
    export namespace PgStatActivity {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatActivity
        return from;
      }
    }
    export namespace PgStatAllIndexes {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatAllIndexes
        return from;
      }
    }
    export namespace PgStatAllTables {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatAllTables
        return from;
      }
    }
    export namespace PgStatArchiver {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatArchiver
        return from;
      }
    }
    export namespace PgStatBgwriter {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatBgwriter
        return from;
      }
    }
    export namespace PgStatDatabase {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatDatabase
        return from;
      }
    }
    export namespace PgStatDatabaseConflicts {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatDatabaseConflicts
        return from;
      }
    }
    export namespace PgStatGssapi {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatGssapi
        return from;
      }
    }
    export namespace PgStatIo {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatIo
        return from;
      }
    }
    export namespace PgStatProgressAnalyze {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatProgressAnalyze
        return from;
      }
    }
    export namespace PgStatProgressBasebackup {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatProgressBasebackup
        return from;
      }
    }
    export namespace PgStatProgressCluster {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatProgressCluster
        return from;
      }
    }
    export namespace PgStatProgressCopy {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatProgressCopy
        return from;
      }
    }
    export namespace PgStatProgressCreateIndex {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatProgressCreateIndex
        return from;
      }
    }
    export namespace PgStatProgressVacuum {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatProgressVacuum
        return from;
      }
    }
    export namespace PgStatRecoveryPrefetch {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatRecoveryPrefetch
        return from;
      }
    }
    export namespace PgStatReplication {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatReplication
        return from;
      }
    }
    export namespace PgStatReplicationSlots {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatReplicationSlots
        return from;
      }
    }
    export namespace PgStatSlru {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatSlru
        return from;
      }
    }
    export namespace PgStatSsl {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatSsl
        return from;
      }
    }
    export namespace PgStatSubscription {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatSubscription
        return from;
      }
    }
    export namespace PgStatSubscriptionStats {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatSubscriptionStats
        return from;
      }
    }
    export namespace PgStatSysIndexes {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatSysIndexes
        return from;
      }
    }
    export namespace PgStatSysTables {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatSysTables
        return from;
      }
    }
    export namespace PgStatUserFunctions {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatUserFunctions
        return from;
      }
    }
    export namespace PgStatUserIndexes {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatUserIndexes
        return from;
      }
    }
    export namespace PgStatUserTables {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatUserTables
        return from;
      }
    }
    export namespace PgStatWal {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatWal
        return from;
      }
    }
    export namespace PgStatWalReceiver {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatWalReceiver
        return from;
      }
    }
    export namespace PgStatXactAllTables {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatXactAllTables
        return from;
      }
    }
    export namespace PgStatXactSysTables {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatXactSysTables
        return from;
      }
    }
    export namespace PgStatXactUserFunctions {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatXactUserFunctions
        return from;
      }
    }
    export namespace PgStatXactUserTables {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatXactUserTables
        return from;
      }
    }
    export namespace PgStatioAllIndexes {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatioAllIndexes
        return from;
      }
    }
    export namespace PgStatioAllSequences {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatioAllSequences
        return from;
      }
    }
    export namespace PgStatioAllTables {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatioAllTables
        return from;
      }
    }
    export namespace PgStatioSysIndexes {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatioSysIndexes
        return from;
      }
    }
    export namespace PgStatioSysSequences {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatioSysSequences
        return from;
      }
    }
    export namespace PgStatioSysTables {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatioSysTables
        return from;
      }
    }
    export namespace PgStatioUserIndexes {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatioUserIndexes
        return from;
      }
    }
    export namespace PgStatioUserSequences {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatioUserSequences
        return from;
      }
    }
    export namespace PgStatioUserTables {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatioUserTables
        return from;
      }
    }
    export namespace PgStatistic {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatistic
        return from;
      }
    }
    export namespace PgStatisticExt {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatisticExt
        return from;
      }
    }
    export namespace PgStatisticExtData {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatisticExtData
        return from;
      }
    }
    export namespace PgStats {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStats
        return from;
      }
    }
    export namespace PgStatsExt {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatsExt
        return from;
      }
    }
    export namespace PgStatsExtExprs {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgStatsExtExprs
        return from;
      }
    }
    export namespace PgSubscription {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgSubscription
        return from;
      }
    }
    export namespace PgSubscriptionRel {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgSubscriptionRel
        return from;
      }
    }
    export namespace PgTables {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgTables
        return from;
      }
    }
    export namespace PgTablespace {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgTablespace
        return from;
      }
    }
    export namespace PgTimezoneAbbrevs {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgTimezoneAbbrevs
        return from;
      }
    }
    export namespace PgTimezoneNames {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgTimezoneNames
        return from;
      }
    }
    export namespace PgTransform {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgTransform
        return from;
      }
    }
    export namespace PgTrigger {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgTrigger
        return from;
      }
    }
    export namespace PgTsConfig {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgTsConfig
        return from;
      }
    }
    export namespace PgTsConfigMap {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgTsConfigMap
        return from;
      }
    }
    export namespace PgTsDict {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgTsDict
        return from;
      }
    }
    export namespace PgTsParser {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgTsParser
        return from;
      }
    }
    export namespace PgTsTemplate {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgTsTemplate
        return from;
      }
    }
    export namespace PgType {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgType
        return from;
      }
    }
    export namespace PgUser {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgUser
        return from;
      }
    }
    export namespace PgUserMapping {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgUserMapping
        return from;
      }
    }
    export namespace PgUserMappings {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgUserMappings
        return from;
      }
    }
    export namespace PgViews {
      export function parse(from: string | null) {
        // CompositeType PgCatalog.Types.PgViews
        return from;
      }
    }
    export namespace Point {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Point

        return from;
      }
    }
    export namespace Polygon {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Polygon

        return from;
      }
    }
    export namespace Record {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Record

        return from;
      }
    }
    export namespace Refcursor {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Refcursor

        return from;
      }
    }
    export namespace Regclass {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Regclass

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regcollation {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Regcollation

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regconfig {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Regconfig

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regdictionary {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Regdictionary

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regnamespace {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Regnamespace

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regoper {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Regoper

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regoperator {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Regoperator

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regproc {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Regproc

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regprocedure {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Regprocedure

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regrole {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Regrole

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regtype {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Regtype

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace TableAmHandler {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.TableAmHandler

        return from;
      }
    }
    export namespace Text {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Text

        return from;
      }
    }
    export namespace Tid {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Tid

        return from;
      }
    }
    export namespace Time {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Time

        if (from === null) return null;
        if ((from as unknown) instanceof global.Date) return from;
        return new global.Date(from);
      }
    }
    export namespace Timestamp {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Timestamp

        if (from === null) return null;
        if ((from as unknown) instanceof global.Date) return from;
        return new global.Date(from);
      }
    }
    export namespace Timestamptz {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Timestamptz

        if (from === null) return null;
        if ((from as unknown) instanceof global.Date) return from;
        return new global.Date(from);
      }
    }
    export namespace Timetz {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Timetz

        if (from === null) return null;
        if ((from as unknown) instanceof global.Date) return from;
        return new global.Date(from);
      }
    }
    export namespace Trigger {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Trigger

        return from;
      }
    }
    export namespace TsmHandler {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.TsmHandler

        return from;
      }
    }
    export namespace Tsmultirange {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Tsmultirange

        return from;
      }
    }
    export namespace Tsquery {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Tsquery

        return from;
      }
    }
    export namespace Tsrange {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Tsrange

        return from;
      }
    }
    export namespace Tstzmultirange {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Tstzmultirange

        return from;
      }
    }
    export namespace Tstzrange {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Tstzrange

        return from;
      }
    }
    export namespace Tsvector {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Tsvector

        return from;
      }
    }
    export namespace TxidSnapshot {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.TxidSnapshot

        return from;
      }
    }
    export namespace Unknown {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Unknown

        return from;
      }
    }
    export namespace Uuid {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Uuid

        return from ? new UUID(from) : null;
      }
    }
    export namespace Varbit {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Varbit

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
        // Type PgCatalog.Types.Varchar

        return from;
      }
    }
    export namespace Void {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Void

        return from;
      }
    }
    export namespace Xid {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Xid

        return from;
      }
    }
    export namespace Xid8 {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Xid8

        return from;
      }
    }
    export namespace Xml {
      export function parse(from: string | null) {
        // Type PgCatalog.Types.Xml

        return from;
      }
    }
  }
  export namespace Procedures {}
  export namespace Tables {
    export namespace PgStatistic {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgStatistic.Create.Values
            PgCatalog.Types.PgStatistic.parse(from);
          }
        }
      }
    }
    export namespace PgType {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgType.Create.Values
            PgCatalog.Types.PgType.parse(from);
          }
        }
      }
    }
    export namespace PgForeignTable {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgForeignTable.Create.Values
            PgCatalog.Types.PgForeignTable.parse(from);
          }
        }
      }
    }
    export namespace PgAuthid {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgAuthid.Create.Values
            PgCatalog.Types.PgAuthid.parse(from);
          }
        }
      }
    }
    export namespace PgStatisticExtData {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgStatisticExtData.Create.Values
            PgCatalog.Types.PgStatisticExtData.parse(from);
          }
        }
      }
    }
    export namespace PgUserMapping {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgUserMapping.Create.Values
            PgCatalog.Types.PgUserMapping.parse(from);
          }
        }
      }
    }
    export namespace PgSubscription {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgSubscription.Create.Values
            PgCatalog.Types.PgSubscription.parse(from);
          }
        }
      }
    }
    export namespace PgAttribute {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgAttribute.Create.Values
            PgCatalog.Types.PgAttribute.parse(from);
          }
        }
      }
    }
    export namespace PgProc {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgProc.Create.Values
            PgCatalog.Types.PgProc.parse(from);
          }
        }
      }
    }
    export namespace PgClass {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgClass.Create.Values
            PgCatalog.Types.PgClass.parse(from);
          }
        }
      }
    }
    export namespace PgAttrdef {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgAttrdef.Create.Values
            PgCatalog.Types.PgAttrdef.parse(from);
          }
        }
      }
    }
    export namespace PgConstraint {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgConstraint.Create.Values
            PgCatalog.Types.PgConstraint.parse(from);
          }
        }
      }
    }
    export namespace PgInherits {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgInherits.Create.Values
            PgCatalog.Types.PgInherits.parse(from);
          }
        }
      }
    }
    export namespace PgIndex {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgIndex.Create.Values
            PgCatalog.Types.PgIndex.parse(from);
          }
        }
      }
    }
    export namespace PgOperator {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgOperator.Create.Values
            PgCatalog.Types.PgOperator.parse(from);
          }
        }
      }
    }
    export namespace PgOpfamily {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgOpfamily.Create.Values
            PgCatalog.Types.PgOpfamily.parse(from);
          }
        }
      }
    }
    export namespace PgOpclass {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgOpclass.Create.Values
            PgCatalog.Types.PgOpclass.parse(from);
          }
        }
      }
    }
    export namespace PgAm {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgAm.Create.Values
            PgCatalog.Types.PgAm.parse(from);
          }
        }
      }
    }
    export namespace PgAmop {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgAmop.Create.Values
            PgCatalog.Types.PgAmop.parse(from);
          }
        }
      }
    }
    export namespace PgAmproc {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgAmproc.Create.Values
            PgCatalog.Types.PgAmproc.parse(from);
          }
        }
      }
    }
    export namespace PgLanguage {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgLanguage.Create.Values
            PgCatalog.Types.PgLanguage.parse(from);
          }
        }
      }
    }
    export namespace PgLargeobjectMetadata {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgLargeobjectMetadata.Create.Values
            PgCatalog.Types.PgLargeobjectMetadata.parse(from);
          }
        }
      }
    }
    export namespace PgAggregate {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgAggregate.Create.Values
            PgCatalog.Types.PgAggregate.parse(from);
          }
        }
      }
    }
    export namespace PgStatisticExt {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgStatisticExt.Create.Values
            PgCatalog.Types.PgStatisticExt.parse(from);
          }
        }
      }
    }
    export namespace PgRewrite {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgRewrite.Create.Values
            PgCatalog.Types.PgRewrite.parse(from);
          }
        }
      }
    }
    export namespace PgTrigger {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgTrigger.Create.Values
            PgCatalog.Types.PgTrigger.parse(from);
          }
        }
      }
    }
    export namespace PgEventTrigger {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgEventTrigger.Create.Values
            PgCatalog.Types.PgEventTrigger.parse(from);
          }
        }
      }
    }
    export namespace PgDescription {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgDescription.Create.Values
            PgCatalog.Types.PgDescription.parse(from);
          }
        }
      }
    }
    export namespace PgCast {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgCast.Create.Values
            PgCatalog.Types.PgCast.parse(from);
          }
        }
      }
    }
    export namespace PgEnum {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgEnum.Create.Values
            PgCatalog.Types.PgEnum.parse(from);
          }
        }
      }
    }
    export namespace PgNamespace {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgNamespace.Create.Values
            PgCatalog.Types.PgNamespace.parse(from);
          }
        }
      }
    }
    export namespace PgConversion {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgConversion.Create.Values
            PgCatalog.Types.PgConversion.parse(from);
          }
        }
      }
    }
    export namespace PgDepend {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgDepend.Create.Values
            PgCatalog.Types.PgDepend.parse(from);
          }
        }
      }
    }
    export namespace PgDatabase {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgDatabase.Create.Values
            PgCatalog.Types.PgDatabase.parse(from);
          }
        }
      }
    }
    export namespace PgDbRoleSetting {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgDbRoleSetting.Create.Values
            PgCatalog.Types.PgDbRoleSetting.parse(from);
          }
        }
      }
    }
    export namespace PgTablespace {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgTablespace.Create.Values
            PgCatalog.Types.PgTablespace.parse(from);
          }
        }
      }
    }
    export namespace PgAuthMembers {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgAuthMembers.Create.Values
            PgCatalog.Types.PgAuthMembers.parse(from);
          }
        }
      }
    }
    export namespace PgShdepend {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgShdepend.Create.Values
            PgCatalog.Types.PgShdepend.parse(from);
          }
        }
      }
    }
    export namespace PgShdescription {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgShdescription.Create.Values
            PgCatalog.Types.PgShdescription.parse(from);
          }
        }
      }
    }
    export namespace PgTsConfig {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgTsConfig.Create.Values
            PgCatalog.Types.PgTsConfig.parse(from);
          }
        }
      }
    }
    export namespace PgTsConfigMap {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgTsConfigMap.Create.Values
            PgCatalog.Types.PgTsConfigMap.parse(from);
          }
        }
      }
    }
    export namespace PgTsDict {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgTsDict.Create.Values
            PgCatalog.Types.PgTsDict.parse(from);
          }
        }
      }
    }
    export namespace PgTsParser {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgTsParser.Create.Values
            PgCatalog.Types.PgTsParser.parse(from);
          }
        }
      }
    }
    export namespace PgTsTemplate {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgTsTemplate.Create.Values
            PgCatalog.Types.PgTsTemplate.parse(from);
          }
        }
      }
    }
    export namespace PgExtension {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgExtension.Create.Values
            PgCatalog.Types.PgExtension.parse(from);
          }
        }
      }
    }
    export namespace PgForeignDataWrapper {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgForeignDataWrapper.Create.Values
            PgCatalog.Types.PgForeignDataWrapper.parse(from);
          }
        }
      }
    }
    export namespace PgForeignServer {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgForeignServer.Create.Values
            PgCatalog.Types.PgForeignServer.parse(from);
          }
        }
      }
    }
    export namespace PgPolicy {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgPolicy.Create.Values
            PgCatalog.Types.PgPolicy.parse(from);
          }
        }
      }
    }
    export namespace PgReplicationOrigin {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgReplicationOrigin.Create.Values
            PgCatalog.Types.PgReplicationOrigin.parse(from);
          }
        }
      }
    }
    export namespace PgDefaultAcl {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgDefaultAcl.Create.Values
            PgCatalog.Types.PgDefaultAcl.parse(from);
          }
        }
      }
    }
    export namespace PgInitPrivs {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgInitPrivs.Create.Values
            PgCatalog.Types.PgInitPrivs.parse(from);
          }
        }
      }
    }
    export namespace PgSeclabel {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgSeclabel.Create.Values
            PgCatalog.Types.PgSeclabel.parse(from);
          }
        }
      }
    }
    export namespace PgShseclabel {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgShseclabel.Create.Values
            PgCatalog.Types.PgShseclabel.parse(from);
          }
        }
      }
    }
    export namespace PgCollation {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgCollation.Create.Values
            PgCatalog.Types.PgCollation.parse(from);
          }
        }
      }
    }
    export namespace PgParameterAcl {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgParameterAcl.Create.Values
            PgCatalog.Types.PgParameterAcl.parse(from);
          }
        }
      }
    }
    export namespace PgPartitionedTable {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgPartitionedTable.Create.Values
            PgCatalog.Types.PgPartitionedTable.parse(from);
          }
        }
      }
    }
    export namespace PgRange {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgRange.Create.Values
            PgCatalog.Types.PgRange.parse(from);
          }
        }
      }
    }
    export namespace PgTransform {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgTransform.Create.Values
            PgCatalog.Types.PgTransform.parse(from);
          }
        }
      }
    }
    export namespace PgSequence {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgSequence.Create.Values
            PgCatalog.Types.PgSequence.parse(from);
          }
        }
      }
    }
    export namespace PgPublication {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgPublication.Create.Values
            PgCatalog.Types.PgPublication.parse(from);
          }
        }
      }
    }
    export namespace PgPublicationNamespace {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgPublicationNamespace.Create.Values
            PgCatalog.Types.PgPublicationNamespace.parse(from);
          }
        }
      }
    }
    export namespace PgPublicationRel {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgPublicationRel.Create.Values
            PgCatalog.Types.PgPublicationRel.parse(from);
          }
        }
      }
    }
    export namespace PgSubscriptionRel {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgSubscriptionRel.Create.Values
            PgCatalog.Types.PgSubscriptionRel.parse(from);
          }
        }
      }
    }
    export namespace PgLargeobject {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType PgCatalog.Tables.PgLargeobject.Create.Values
            PgCatalog.Types.PgLargeobject.parse(from);
          }
        }
      }
    }
  }
}
export namespace Public {
  export namespace Types {
    export namespace ActorArray {
      export function parse(from: string | null) {
        // Type Public.Types.ActorArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Actor.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ActorInfoArray {
      export function parse(from: string | null) {
        // Type Public.Types.ActorInfoArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ActorInfo.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace AddressArray {
      export function parse(from: string | null) {
        // Type Public.Types.AddressArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Address.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CategoryArray {
      export function parse(from: string | null) {
        // Type Public.Types.CategoryArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Category.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CityArray {
      export function parse(from: string | null) {
        // Type Public.Types.CityArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return City.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CountryArray {
      export function parse(from: string | null) {
        // Type Public.Types.CountryArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Country.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CustomerArray {
      export function parse(from: string | null) {
        // Type Public.Types.CustomerArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Customer.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CustomerListArray {
      export function parse(from: string | null) {
        // Type Public.Types.CustomerListArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return CustomerList.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace FilmArray {
      export function parse(from: string | null) {
        // Type Public.Types.FilmArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Film.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace FilmActorArray {
      export function parse(from: string | null) {
        // Type Public.Types.FilmActorArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return FilmActor.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace FilmCategoryArray {
      export function parse(from: string | null) {
        // Type Public.Types.FilmCategoryArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return FilmCategory.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace FilmListArray {
      export function parse(from: string | null) {
        // Type Public.Types.FilmListArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return FilmList.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace InventoryArray {
      export function parse(from: string | null) {
        // Type Public.Types.InventoryArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Inventory.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace LanguageArray {
      export function parse(from: string | null) {
        // Type Public.Types.LanguageArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Language.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace MpaaRatingArray {
      export function parse(from: string | null) {
        // Type Public.Types.MpaaRatingArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return MpaaRating.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace NicerButSlowerFilmListArray {
      export function parse(from: string | null) {
        // Type Public.Types.NicerButSlowerFilmListArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return NicerButSlowerFilmList.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PaymentArray {
      export function parse(from: string | null) {
        // Type Public.Types.PaymentArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Payment.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RentalArray {
      export function parse(from: string | null) {
        // Type Public.Types.RentalArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Rental.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace SalesByFilmCategoryArray {
      export function parse(from: string | null) {
        // Type Public.Types.SalesByFilmCategoryArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return SalesByFilmCategory.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace SalesByStoreArray {
      export function parse(from: string | null) {
        // Type Public.Types.SalesByStoreArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return SalesByStore.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace StaffArray {
      export function parse(from: string | null) {
        // Type Public.Types.StaffArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Staff.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace StaffListArray {
      export function parse(from: string | null) {
        // Type Public.Types.StaffListArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return StaffList.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace StoreArray {
      export function parse(from: string | null) {
        // Type Public.Types.StoreArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Store.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace YearArray {
      export function parse(from: string | null) {
        // Type Public.Types.YearArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Year.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Actor {
      export function parse(from: string | null) {
        // CompositeType Public.Types.Actor
        return from;
      }
    }
    export namespace ActorInfo {
      export function parse(from: string | null) {
        // CompositeType Public.Types.ActorInfo
        return from;
      }
    }
    export namespace Address {
      export function parse(from: string | null) {
        // CompositeType Public.Types.Address
        return from;
      }
    }
    export namespace Category {
      export function parse(from: string | null) {
        // CompositeType Public.Types.Category
        return from;
      }
    }
    export namespace City {
      export function parse(from: string | null) {
        // CompositeType Public.Types.City
        return from;
      }
    }
    export namespace Country {
      export function parse(from: string | null) {
        // CompositeType Public.Types.Country
        return from;
      }
    }
    export namespace Customer {
      export function parse(from: string | null) {
        // CompositeType Public.Types.Customer
        return from;
      }
    }
    export namespace CustomerList {
      export function parse(from: string | null) {
        // CompositeType Public.Types.CustomerList
        return from;
      }
    }
    export namespace Film {
      export function parse(from: string | null) {
        // CompositeType Public.Types.Film
        return from;
      }
    }
    export namespace FilmActor {
      export function parse(from: string | null) {
        // CompositeType Public.Types.FilmActor
        return from;
      }
    }
    export namespace FilmCategory {
      export function parse(from: string | null) {
        // CompositeType Public.Types.FilmCategory
        return from;
      }
    }
    export namespace FilmList {
      export function parse(from: string | null) {
        // CompositeType Public.Types.FilmList
        return from;
      }
    }
    export namespace Inventory {
      export function parse(from: string | null) {
        // CompositeType Public.Types.Inventory
        return from;
      }
    }
    export namespace Language {
      export function parse(from: string | null) {
        // CompositeType Public.Types.Language
        return from;
      }
    }
    export namespace MpaaRating {
      export function parse(from: string | null) {
        // Enum Public.Types.MpaaRating

        return from;
      }
    }
    export namespace NicerButSlowerFilmList {
      export function parse(from: string | null) {
        // CompositeType Public.Types.NicerButSlowerFilmList
        return from;
      }
    }
    export namespace Payment {
      export function parse(from: string | null) {
        // CompositeType Public.Types.Payment
        return from;
      }
    }
    export namespace Rental {
      export function parse(from: string | null) {
        // CompositeType Public.Types.Rental
        return from;
      }
    }
    export namespace SalesByFilmCategory {
      export function parse(from: string | null) {
        // CompositeType Public.Types.SalesByFilmCategory
        return from;
      }
    }
    export namespace SalesByStore {
      export function parse(from: string | null) {
        // CompositeType Public.Types.SalesByStore
        return from;
      }
    }
    export namespace Staff {
      export function parse(from: string | null) {
        // CompositeType Public.Types.Staff
        return from;
      }
    }
    export namespace StaffList {
      export function parse(from: string | null) {
        // CompositeType Public.Types.StaffList
        return from;
      }
    }
    export namespace Store {
      export function parse(from: string | null) {
        // CompositeType Public.Types.Store
        return from;
      }
    }
    export namespace Year {
      export function parse(from: string | null) {
        // DomainType Public.Types.Year
        return PgCatalog.Types.Int4.parse(from);
      }
    }
    export namespace FilmInStockResults {
      export function parse(from: string | null) {
        // CompositeType Public.Types.FilmInStockResults
        return from;
      }
    }
    export namespace FilmNotInStockResults {
      export function parse(from: string | null) {
        // CompositeType Public.Types.FilmNotInStockResults
        return from;
      }
    }
  }
  export namespace Procedures {
    export namespace FilmInStock {
      export namespace Parameters {
        export function parse(from: string | null) {
          // CompositeType Public.Procedures.FilmInStock.Parameters
          return from;
        }
      }
      export namespace Results {
        export function parse(from: string | null) {
          // AliasType Public.Procedures.FilmInStock.Results
          Public.Types.FilmInStockResults.parse(from);
        }
      }
    }
    export namespace FilmNotInStock {
      export namespace Parameters {
        export function parse(from: string | null) {
          // CompositeType Public.Procedures.FilmNotInStock.Parameters
          return from;
        }
      }
      export namespace Results {
        export function parse(from: string | null) {
          // AliasType Public.Procedures.FilmNotInStock.Results
          Public.Types.FilmNotInStockResults.parse(from);
        }
      }
    }
    export namespace GetCustomerBalance {
      export namespace Parameters {
        export function parse(from: string | null) {
          // CompositeType Public.Procedures.GetCustomerBalance.Parameters
          return from;
        }
      }
      export namespace Results {
        export function parse(from: string | null) {
          // AliasType Public.Procedures.GetCustomerBalance.Results
          PgCatalog.Types.Numeric.parse(from);
        }
      }
    }
    export namespace InventoryHeldByCustomer {
      export namespace Parameters {
        export function parse(from: string | null) {
          // CompositeType Public.Procedures.InventoryHeldByCustomer.Parameters
          return from;
        }
      }
      export namespace Results {
        export function parse(from: string | null) {
          // AliasType Public.Procedures.InventoryHeldByCustomer.Results
          PgCatalog.Types.Int4.parse(from);
        }
      }
    }
    export namespace InventoryInStock {
      export namespace Parameters {
        export function parse(from: string | null) {
          // CompositeType Public.Procedures.InventoryInStock.Parameters
          return from;
        }
      }
      export namespace Results {
        export function parse(from: string | null) {
          // AliasType Public.Procedures.InventoryInStock.Results
          PgCatalog.Types.Bool.parse(from);
        }
      }
    }
    export namespace LastDay {
      export namespace Parameters {
        export function parse(from: string | null) {
          // CompositeType Public.Procedures.LastDay.Parameters
          return from;
        }
      }
      export namespace Results {
        export function parse(from: string | null) {
          // AliasType Public.Procedures.LastDay.Results
          PgCatalog.Types.Date.parse(from);
        }
      }
    }
    export namespace RewardsReport {
      export namespace Parameters {
        export function parse(from: string | null) {
          // CompositeType Public.Procedures.RewardsReport.Parameters
          return from;
        }
      }
      export namespace Results {
        export function parse(from: string | null) {
          // AliasType Public.Procedures.RewardsReport.Results
          Public.Types.Customer.parse(from);
        }
      }
    }
  }
  export namespace Tables {
    export namespace FilmActor {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType Public.Tables.FilmActor.Create.Values
            Public.Types.FilmActor.parse(from);
          }
        }
      }
    }
    export namespace Address {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType Public.Tables.Address.Create.Values
            Public.Types.Address.parse(from);
          }
        }
      }
    }
    export namespace City {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType Public.Tables.City.Create.Values
            Public.Types.City.parse(from);
          }
        }
      }
    }
    export namespace Customer {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType Public.Tables.Customer.Create.Values
            Public.Types.Customer.parse(from);
          }
        }
      }
    }
    export namespace Actor {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType Public.Tables.Actor.Create.Values
            Public.Types.Actor.parse(from);
          }
        }
      }
    }
    export namespace FilmCategory {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType Public.Tables.FilmCategory.Create.Values
            Public.Types.FilmCategory.parse(from);
          }
        }
      }
    }
    export namespace Inventory {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType Public.Tables.Inventory.Create.Values
            Public.Types.Inventory.parse(from);
          }
        }
      }
    }
    export namespace Category {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType Public.Tables.Category.Create.Values
            Public.Types.Category.parse(from);
          }
        }
      }
    }
    export namespace Country {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType Public.Tables.Country.Create.Values
            Public.Types.Country.parse(from);
          }
        }
      }
    }
    export namespace Language {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType Public.Tables.Language.Create.Values
            Public.Types.Language.parse(from);
          }
        }
      }
    }
    export namespace Rental {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType Public.Tables.Rental.Create.Values
            Public.Types.Rental.parse(from);
          }
        }
      }
    }
    export namespace Staff {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType Public.Tables.Staff.Create.Values
            Public.Types.Staff.parse(from);
          }
        }
      }
    }
    export namespace Store {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType Public.Tables.Store.Create.Values
            Public.Types.Store.parse(from);
          }
        }
      }
    }
    export namespace Payment {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType Public.Tables.Payment.Create.Values
            Public.Types.Payment.parse(from);
          }
        }
      }
    }
    export namespace Film {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType Public.Tables.Film.Create.Values
            Public.Types.Film.parse(from);
          }
        }
      }
    }
  }
}
export namespace InformationSchema {
  export namespace Types {
    export namespace AdministrableRoleAuthorizationsArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.AdministrableRoleAuthorizationsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return AdministrableRoleAuthorizations.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ApplicableRolesArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.ApplicableRolesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ApplicableRoles.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace AttributesArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.AttributesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Attributes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CardinalNumberArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.CardinalNumberArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return CardinalNumber.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CharacterDataArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.CharacterDataArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return CharacterData.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CharacterSetsArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.CharacterSetsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return CharacterSets.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CheckConstraintRoutineUsageArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.CheckConstraintRoutineUsageArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return CheckConstraintRoutineUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CheckConstraintsArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.CheckConstraintsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return CheckConstraints.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CollationCharacterSetApplicabilityArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.CollationCharacterSetApplicabilityArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return CollationCharacterSetApplicability.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CollationsArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.CollationsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Collations.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ColumnColumnUsageArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.ColumnColumnUsageArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ColumnColumnUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ColumnDomainUsageArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.ColumnDomainUsageArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ColumnDomainUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ColumnOptionsArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.ColumnOptionsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ColumnOptions.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ColumnPrivilegesArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.ColumnPrivilegesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ColumnPrivileges.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ColumnUdtUsageArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.ColumnUdtUsageArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ColumnUdtUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ColumnsArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.ColumnsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Columns.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ConstraintColumnUsageArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.ConstraintColumnUsageArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ConstraintColumnUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ConstraintTableUsageArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.ConstraintTableUsageArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ConstraintTableUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace DataTypePrivilegesArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.DataTypePrivilegesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return DataTypePrivileges.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace DomainConstraintsArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.DomainConstraintsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return DomainConstraints.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace DomainUdtUsageArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.DomainUdtUsageArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return DomainUdtUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace DomainsArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.DomainsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Domains.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ElementTypesArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.ElementTypesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ElementTypes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace EnabledRolesArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.EnabledRolesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return EnabledRoles.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ForeignDataWrapperOptionsArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.ForeignDataWrapperOptionsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ForeignDataWrapperOptions.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ForeignDataWrappersArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.ForeignDataWrappersArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ForeignDataWrappers.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ForeignServerOptionsArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.ForeignServerOptionsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ForeignServerOptions.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ForeignServersArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.ForeignServersArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ForeignServers.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ForeignTableOptionsArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.ForeignTableOptionsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ForeignTableOptions.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ForeignTablesArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.ForeignTablesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ForeignTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace InformationSchemaCatalogNameArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.InformationSchemaCatalogNameArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchemaCatalogName.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace KeyColumnUsageArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.KeyColumnUsageArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return KeyColumnUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ParametersArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.ParametersArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Parameters.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgForeignDataWrappers {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.PgForeignDataWrappers
        return from;
      }
    }
    export namespace PgForeignServers {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.PgForeignServers
        return from;
      }
    }
    export namespace PgForeignTableColumns {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.PgForeignTableColumns
        return from;
      }
    }
    export namespace PgForeignTables {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.PgForeignTables
        return from;
      }
    }
    export namespace PgUserMappings {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.PgUserMappings
        return from;
      }
    }
    export namespace ReferentialConstraintsArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.ReferentialConstraintsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ReferentialConstraints.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoleColumnGrantsArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.RoleColumnGrantsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return RoleColumnGrants.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoleRoutineGrantsArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.RoleRoutineGrantsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return RoleRoutineGrants.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoleTableGrantsArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.RoleTableGrantsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return RoleTableGrants.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoleUdtGrantsArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.RoleUdtGrantsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return RoleUdtGrants.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoleUsageGrantsArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.RoleUsageGrantsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return RoleUsageGrants.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoutineColumnUsageArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.RoutineColumnUsageArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return RoutineColumnUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoutinePrivilegesArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.RoutinePrivilegesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return RoutinePrivileges.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoutineRoutineUsageArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.RoutineRoutineUsageArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return RoutineRoutineUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoutineSequenceUsageArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.RoutineSequenceUsageArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return RoutineSequenceUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoutineTableUsageArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.RoutineTableUsageArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return RoutineTableUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoutinesArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.RoutinesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Routines.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace SchemataArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.SchemataArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Schemata.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace SequencesArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.SequencesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Sequences.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace SqlFeaturesArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.SqlFeaturesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return SqlFeatures.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace SqlIdentifierArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.SqlIdentifierArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return SqlIdentifier.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace SqlImplementationInfoArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.SqlImplementationInfoArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return SqlImplementationInfo.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace SqlPartsArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.SqlPartsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return SqlParts.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace SqlSizingArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.SqlSizingArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return SqlSizing.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TableConstraintsArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.TableConstraintsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return TableConstraints.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TablePrivilegesArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.TablePrivilegesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return TablePrivileges.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TablesArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.TablesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Tables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TimeStampArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.TimeStampArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return TimeStamp.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TransformsArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.TransformsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Transforms.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TriggeredUpdateColumnsArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.TriggeredUpdateColumnsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return TriggeredUpdateColumns.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TriggersArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.TriggersArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Triggers.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace UdtPrivilegesArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.UdtPrivilegesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return UdtPrivileges.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace UsagePrivilegesArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.UsagePrivilegesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return UsagePrivileges.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace UserDefinedTypesArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.UserDefinedTypesArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return UserDefinedTypes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace UserMappingOptionsArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.UserMappingOptionsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return UserMappingOptions.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace UserMappingsArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.UserMappingsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return UserMappings.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ViewColumnUsageArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.ViewColumnUsageArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ViewColumnUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ViewRoutineUsageArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.ViewRoutineUsageArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ViewRoutineUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ViewTableUsageArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.ViewTableUsageArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ViewTableUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ViewsArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.ViewsArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Views.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace YesOrNoArray {
      export function parse(from: string | null) {
        // Type InformationSchema.Types.YesOrNoArray

        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return YesOrNo.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace AdministrableRoleAuthorizations {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.AdministrableRoleAuthorizations
        return from;
      }
    }
    export namespace ApplicableRoles {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.ApplicableRoles
        return from;
      }
    }
    export namespace Attributes {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.Attributes
        return from;
      }
    }
    export namespace CardinalNumber {
      export function parse(from: string | null) {
        // DomainType InformationSchema.Types.CardinalNumber
        return PgCatalog.Types.Int4.parse(from);
      }
    }
    export namespace CharacterData {
      export function parse(from: string | null) {
        // DomainType InformationSchema.Types.CharacterData
        return PgCatalog.Types.Varchar.parse(from);
      }
    }
    export namespace CharacterSets {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.CharacterSets
        return from;
      }
    }
    export namespace CheckConstraintRoutineUsage {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.CheckConstraintRoutineUsage
        return from;
      }
    }
    export namespace CheckConstraints {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.CheckConstraints
        return from;
      }
    }
    export namespace CollationCharacterSetApplicability {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.CollationCharacterSetApplicability
        return from;
      }
    }
    export namespace Collations {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.Collations
        return from;
      }
    }
    export namespace ColumnColumnUsage {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.ColumnColumnUsage
        return from;
      }
    }
    export namespace ColumnDomainUsage {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.ColumnDomainUsage
        return from;
      }
    }
    export namespace ColumnOptions {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.ColumnOptions
        return from;
      }
    }
    export namespace ColumnPrivileges {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.ColumnPrivileges
        return from;
      }
    }
    export namespace ColumnUdtUsage {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.ColumnUdtUsage
        return from;
      }
    }
    export namespace Columns {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.Columns
        return from;
      }
    }
    export namespace ConstraintColumnUsage {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.ConstraintColumnUsage
        return from;
      }
    }
    export namespace ConstraintTableUsage {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.ConstraintTableUsage
        return from;
      }
    }
    export namespace DataTypePrivileges {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.DataTypePrivileges
        return from;
      }
    }
    export namespace DomainConstraints {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.DomainConstraints
        return from;
      }
    }
    export namespace DomainUdtUsage {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.DomainUdtUsage
        return from;
      }
    }
    export namespace Domains {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.Domains
        return from;
      }
    }
    export namespace ElementTypes {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.ElementTypes
        return from;
      }
    }
    export namespace EnabledRoles {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.EnabledRoles
        return from;
      }
    }
    export namespace ForeignDataWrapperOptions {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.ForeignDataWrapperOptions
        return from;
      }
    }
    export namespace ForeignDataWrappers {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.ForeignDataWrappers
        return from;
      }
    }
    export namespace ForeignServerOptions {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.ForeignServerOptions
        return from;
      }
    }
    export namespace ForeignServers {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.ForeignServers
        return from;
      }
    }
    export namespace ForeignTableOptions {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.ForeignTableOptions
        return from;
      }
    }
    export namespace ForeignTables {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.ForeignTables
        return from;
      }
    }
    export namespace InformationSchemaCatalogName {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.InformationSchemaCatalogName
        return from;
      }
    }
    export namespace KeyColumnUsage {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.KeyColumnUsage
        return from;
      }
    }
    export namespace Parameters {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.Parameters
        return from;
      }
    }
    export namespace ReferentialConstraints {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.ReferentialConstraints
        return from;
      }
    }
    export namespace RoleColumnGrants {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.RoleColumnGrants
        return from;
      }
    }
    export namespace RoleRoutineGrants {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.RoleRoutineGrants
        return from;
      }
    }
    export namespace RoleTableGrants {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.RoleTableGrants
        return from;
      }
    }
    export namespace RoleUdtGrants {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.RoleUdtGrants
        return from;
      }
    }
    export namespace RoleUsageGrants {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.RoleUsageGrants
        return from;
      }
    }
    export namespace RoutineColumnUsage {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.RoutineColumnUsage
        return from;
      }
    }
    export namespace RoutinePrivileges {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.RoutinePrivileges
        return from;
      }
    }
    export namespace RoutineRoutineUsage {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.RoutineRoutineUsage
        return from;
      }
    }
    export namespace RoutineSequenceUsage {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.RoutineSequenceUsage
        return from;
      }
    }
    export namespace RoutineTableUsage {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.RoutineTableUsage
        return from;
      }
    }
    export namespace Routines {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.Routines
        return from;
      }
    }
    export namespace Schemata {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.Schemata
        return from;
      }
    }
    export namespace Sequences {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.Sequences
        return from;
      }
    }
    export namespace SqlFeatures {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.SqlFeatures
        return from;
      }
    }
    export namespace SqlIdentifier {
      export function parse(from: string | null) {
        // DomainType InformationSchema.Types.SqlIdentifier
        return PgCatalog.Types.Name.parse(from);
      }
    }
    export namespace SqlImplementationInfo {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.SqlImplementationInfo
        return from;
      }
    }
    export namespace SqlParts {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.SqlParts
        return from;
      }
    }
    export namespace SqlSizing {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.SqlSizing
        return from;
      }
    }
    export namespace TableConstraints {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.TableConstraints
        return from;
      }
    }
    export namespace TablePrivileges {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.TablePrivileges
        return from;
      }
    }
    export namespace Tables {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.Tables
        return from;
      }
    }
    export namespace TimeStamp {
      export function parse(from: string | null) {
        // DomainType InformationSchema.Types.TimeStamp
        return PgCatalog.Types.Timestamptz.parse(from);
      }
    }
    export namespace Transforms {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.Transforms
        return from;
      }
    }
    export namespace TriggeredUpdateColumns {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.TriggeredUpdateColumns
        return from;
      }
    }
    export namespace Triggers {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.Triggers
        return from;
      }
    }
    export namespace UdtPrivileges {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.UdtPrivileges
        return from;
      }
    }
    export namespace UsagePrivileges {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.UsagePrivileges
        return from;
      }
    }
    export namespace UserDefinedTypes {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.UserDefinedTypes
        return from;
      }
    }
    export namespace UserMappingOptions {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.UserMappingOptions
        return from;
      }
    }
    export namespace UserMappings {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.UserMappings
        return from;
      }
    }
    export namespace ViewColumnUsage {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.ViewColumnUsage
        return from;
      }
    }
    export namespace ViewRoutineUsage {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.ViewRoutineUsage
        return from;
      }
    }
    export namespace ViewTableUsage {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.ViewTableUsage
        return from;
      }
    }
    export namespace Views {
      export function parse(from: string | null) {
        // CompositeType InformationSchema.Types.Views
        return from;
      }
    }
    export namespace YesOrNo {
      export function parse(from: string | null) {
        // DomainType InformationSchema.Types.YesOrNo
        return PgCatalog.Types.Varchar.parse(from);
      }
    }
  }
  export namespace Procedures {}
  export namespace Tables {
    export namespace SqlFeatures {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType InformationSchema.Tables.SqlFeatures.Create.Values
            InformationSchema.Types.SqlFeatures.parse(from);
          }
        }
      }
    }
    export namespace SqlImplementationInfo {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType InformationSchema.Tables.SqlImplementationInfo.Create.Values
            InformationSchema.Types.SqlImplementationInfo.parse(from);
          }
        }
      }
    }
    export namespace SqlParts {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType InformationSchema.Tables.SqlParts.Create.Values
            InformationSchema.Types.SqlParts.parse(from);
          }
        }
      }
    }
    export namespace SqlSizing {
      export namespace Create {
        export namespace Values {
          export function parse(from: string | null) {
            // AliasType InformationSchema.Tables.SqlSizing.Create.Values
            InformationSchema.Types.SqlSizing.parse(from);
          }
        }
      }
    }
  }
}
export namespace Scripts {
  export namespace Sample {
    export namespace Film {
      export namespace Tally {
        export namespace Results {
          export function parse(from: string | null) {
            // CompositeType Scripts.Sample.Film.Tally.Results
            return from;
          }
        }
      }
    }
    export namespace Pick {
      export namespace Results {
        export function parse(from: string | null) {
          // CompositeType Scripts.Sample.Pick.Results
          return from;
        }
      }
      export namespace Parameters {
        export function parse(from: string | null) {
          // CompositeType Scripts.Sample.Pick.Parameters
          return from;
        }
      }
    }
  }
  export namespace Tally {
    export namespace Results {
      export function parse(from: string | null) {
        // CompositeType Scripts.Tally.Results
        return from;
      }
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
export namespace Public {
  export namespace Tables {
    export namespace FilmActor {
      export namespace ActorId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace FilmId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace LastUpdate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
    }
    export namespace Address {
      export namespace AddressId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Address {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace Address2 {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace District {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace CityId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace PostalCode {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace Phone {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace LastUpdate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
    }
    export namespace City {
      export namespace CityId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace City {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace CountryId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace LastUpdate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
    }
    export namespace Customer {
      export namespace CustomerId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace StoreId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace FirstName {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace LastName {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace Email {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace AddressId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Activebool {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace CreateDate {
        export const parse = PgCatalog.Types.Date.parse;
      }
      export namespace LastUpdate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
      export namespace Active {
        export const parse = PgCatalog.Types.Int4.parse;
      }
    }
    export namespace Actor {
      export namespace ActorId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace FirstName {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace LastName {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace LastUpdate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
    }
    export namespace FilmCategory {
      export namespace FilmId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace CategoryId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace LastUpdate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
    }
    export namespace Inventory {
      export namespace InventoryId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace FilmId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace StoreId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace LastUpdate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
    }
    export namespace Category {
      export namespace CategoryId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Name {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace LastUpdate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
    }
    export namespace Country {
      export namespace CountryId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Country {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace LastUpdate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
    }
    export namespace Language {
      export namespace LanguageId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Name {
        export const parse = PgCatalog.Types.Bpchar.parse;
      }
      export namespace LastUpdate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
    }
    export namespace Rental {
      export namespace RentalId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace RentalDate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
      export namespace InventoryId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace CustomerId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace ReturnDate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
      export namespace StaffId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace LastUpdate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
    }
    export namespace Staff {
      export namespace StaffId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace FirstName {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace LastName {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace AddressId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Email {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace StoreId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Active {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Username {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace Password {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace LastUpdate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
      export namespace Picture {
        export const parse = PgCatalog.Types.Bytea.parse;
      }
    }
    export namespace Store {
      export namespace StoreId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace ManagerStaffId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace AddressId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace LastUpdate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
    }
    export namespace Payment {
      export namespace PaymentId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace CustomerId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace StaffId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace RentalId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Amount {
        export const parse = PgCatalog.Types.Numeric.parse;
      }
      export namespace PaymentDate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
    }
    export namespace Film {
      export namespace FilmId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Title {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace Description {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace ReleaseYear {
        export const parse = Public.Types.Year.parse;
      }
      export namespace LanguageId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace RentalDuration {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace RentalRate {
        export const parse = PgCatalog.Types.Numeric.parse;
      }
      export namespace Length {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace ReplacementCost {
        export const parse = PgCatalog.Types.Numeric.parse;
      }
      export namespace Rating {
        export const parse = Public.Types.MpaaRating.parse;
      }
      export namespace LastUpdate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
      export namespace SpecialFeatures {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
      export namespace Fulltext {
        export const parse = PgCatalog.Types.Tsvector.parse;
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

// begin primary key pickers
export namespace Public {
  export namespace Tables {
    export namespace FilmActor {
      export function primaryKeyFrom(
        value: Public.Tables.FilmActor.Record,
      ): string {
        return JSON.stringify({
          actorId: value.actorId,
          filmId: value.filmId,
        });
      }

      export function includesPrimaryKey(value: Partial<Record>) {
        return value.actorId !== undefined && value.filmId !== undefined;
      }
    }
    export namespace Address {
      export function primaryKeyFrom(
        value: Public.Tables.Address.Record,
      ): string {
        return JSON.stringify({
          addressId: value.addressId,
        });
      }

      export function includesPrimaryKey(value: Partial<Record>) {
        return value.addressId !== undefined;
      }
    }
    export namespace City {
      export function primaryKeyFrom(value: Public.Tables.City.Record): string {
        return JSON.stringify({
          cityId: value.cityId,
        });
      }

      export function includesPrimaryKey(value: Partial<Record>) {
        return value.cityId !== undefined;
      }
    }
    export namespace Customer {
      export function primaryKeyFrom(
        value: Public.Tables.Customer.Record,
      ): string {
        return JSON.stringify({
          customerId: value.customerId,
        });
      }

      export function includesPrimaryKey(value: Partial<Record>) {
        return value.customerId !== undefined;
      }
    }
    export namespace Actor {
      export function primaryKeyFrom(
        value: Public.Tables.Actor.Record,
      ): string {
        return JSON.stringify({
          actorId: value.actorId,
        });
      }

      export function includesPrimaryKey(value: Partial<Record>) {
        return value.actorId !== undefined;
      }
    }
    export namespace FilmCategory {
      export function primaryKeyFrom(
        value: Public.Tables.FilmCategory.Record,
      ): string {
        return JSON.stringify({
          filmId: value.filmId,
          categoryId: value.categoryId,
        });
      }

      export function includesPrimaryKey(value: Partial<Record>) {
        return value.filmId !== undefined && value.categoryId !== undefined;
      }
    }
    export namespace Inventory {
      export function primaryKeyFrom(
        value: Public.Tables.Inventory.Record,
      ): string {
        return JSON.stringify({
          inventoryId: value.inventoryId,
        });
      }

      export function includesPrimaryKey(value: Partial<Record>) {
        return value.inventoryId !== undefined;
      }
    }
    export namespace Category {
      export function primaryKeyFrom(
        value: Public.Tables.Category.Record,
      ): string {
        return JSON.stringify({
          categoryId: value.categoryId,
        });
      }

      export function includesPrimaryKey(value: Partial<Record>) {
        return value.categoryId !== undefined;
      }
    }
    export namespace Country {
      export function primaryKeyFrom(
        value: Public.Tables.Country.Record,
      ): string {
        return JSON.stringify({
          countryId: value.countryId,
        });
      }

      export function includesPrimaryKey(value: Partial<Record>) {
        return value.countryId !== undefined;
      }
    }
    export namespace Language {
      export function primaryKeyFrom(
        value: Public.Tables.Language.Record,
      ): string {
        return JSON.stringify({
          languageId: value.languageId,
        });
      }

      export function includesPrimaryKey(value: Partial<Record>) {
        return value.languageId !== undefined;
      }
    }
    export namespace Rental {
      export function primaryKeyFrom(
        value: Public.Tables.Rental.Record,
      ): string {
        return JSON.stringify({
          rentalId: value.rentalId,
        });
      }

      export function includesPrimaryKey(value: Partial<Record>) {
        return value.rentalId !== undefined;
      }
    }
    export namespace Staff {
      export function primaryKeyFrom(
        value: Public.Tables.Staff.Record,
      ): string {
        return JSON.stringify({
          staffId: value.staffId,
        });
      }

      export function includesPrimaryKey(value: Partial<Record>) {
        return value.staffId !== undefined;
      }
    }
    export namespace Store {
      export function primaryKeyFrom(
        value: Public.Tables.Store.Record,
      ): string {
        return JSON.stringify({
          storeId: value.storeId,
        });
      }

      export function includesPrimaryKey(value: Partial<Record>) {
        return value.storeId !== undefined;
      }
    }
    export namespace Payment {
      export function primaryKeyFrom(
        value: Public.Tables.Payment.Record,
      ): string {
        return JSON.stringify({
          paymentId: value.paymentId,
        });
      }

      export function includesPrimaryKey(value: Partial<Record>) {
        return value.paymentId !== undefined;
      }
    }
    export namespace Film {
      export function primaryKeyFrom(value: Public.Tables.Film.Record): string {
        return JSON.stringify({
          filmId: value.filmId,
        });
      }

      export function includesPrimaryKey(value: Partial<Record>) {
        return value.filmId !== undefined;
      }
    }
  }
}
// begin fetch client
import {
  EmbraceSQLClient as BaseClient,
  EmbraceSQLClientProps,
  HasClient,
} from "@embracesql/client";

export class EmbraceSQLClient extends BaseClient {
  constructor(props: EmbraceSQLClientProps) {
    super(props);
  }

  public Public = new (class extends HasClient {
    public Tables = new (class extends HasClient {
      public FilmActor = new (class extends HasClient {
        public async create(
          values: Public.Tables.FilmActor.Values,
        ): Promise<Public.Tables.FilmActor.Record | undefined> {
          const response = await this.client.invoke<
            never,
            Public.Tables.FilmActor.Values,
            Public.Tables.FilmActor.Record
          >({
            operation: "Public.Tables.FilmActor.Create",
            values,
          });
          return response.results;
        }

        public ByActorIdFilmId = new (class extends HasClient {
          public async read(
            parameters: Public.Tables.FilmActor.ByActorIdFilmId,
          ) {
            const response = await this.client.invoke<
              Public.Tables.FilmActor.ByActorIdFilmId,
              never,
              Public.Tables.FilmActor.Record | undefined
            >({
              operation: "Public.Tables.FilmActor.Read",
              parameters,
            });

            return response.results ? response.results : undefined;
          }

          public async update(
            parameters: Public.Tables.FilmActor.ByActorIdFilmId,
            values: Partial<Public.Types.FilmActor>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.FilmActor.ByActorIdFilmId,
              Partial<Public.Types.FilmActor>,
              Public.Tables.FilmActor.Record | undefined
            >({
              operation: "Public.Tables.FilmActor.Update",
              parameters,
              values,
            });

            return response.results ? response.results : undefined;
          }

          public async delete(
            parameters: Public.Tables.FilmActor.ByActorIdFilmId,
          ) {
            const response = await this.client.invoke<
              Public.Tables.FilmActor.ByActorIdFilmId,
              never,
              Public.Tables.FilmActor.Record | undefined
            >({
              operation: "Public.Tables.FilmActor.Delete",
              parameters,
            });

            return response.results ? response.results : undefined;
          }
        })(this);

        public ByFilmId = new (class extends HasClient {
          public async read(parameters: Public.Tables.FilmActor.ByFilmId) {
            const response = await this.client.invoke<
              Public.Tables.FilmActor.ByFilmId,
              never,
              Public.Tables.FilmActor.Record[] | undefined
            >({
              operation: "Public.Tables.FilmActor.Read",
              parameters,
            });

            return response.results ? response.results : [];
          }

          public async update(
            parameters: Public.Tables.FilmActor.ByFilmId,
            values: Partial<Public.Types.FilmActor>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.FilmActor.ByFilmId,
              Partial<Public.Types.FilmActor>,
              Public.Tables.FilmActor.Record[] | undefined
            >({
              operation: "Public.Tables.FilmActor.Update",
              parameters,
              values,
            });

            return response.results ? response.results : [];
          }

          public async delete(parameters: Public.Tables.FilmActor.ByFilmId) {
            const response = await this.client.invoke<
              Public.Tables.FilmActor.ByFilmId,
              never,
              Public.Tables.FilmActor.Record[] | undefined
            >({
              operation: "Public.Tables.FilmActor.Delete",
              parameters,
            });

            return response.results ? response.results : [];
          }
        })(this);
      })(this);

      public Address = new (class extends HasClient {
        public async create(
          values: Public.Tables.Address.Values,
        ): Promise<Public.Tables.Address.Record | undefined> {
          const response = await this.client.invoke<
            never,
            Public.Tables.Address.Values,
            Public.Tables.Address.Record
          >({
            operation: "Public.Tables.Address.Create",
            values,
          });
          return response.results;
        }

        public ByAddressId = new (class extends HasClient {
          public async read(parameters: Public.Tables.Address.ByAddressId) {
            const response = await this.client.invoke<
              Public.Tables.Address.ByAddressId,
              never,
              Public.Tables.Address.Record | undefined
            >({
              operation: "Public.Tables.Address.Read",
              parameters,
            });

            return response.results ? response.results : undefined;
          }

          public async update(
            parameters: Public.Tables.Address.ByAddressId,
            values: Partial<Public.Types.Address>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Address.ByAddressId,
              Partial<Public.Types.Address>,
              Public.Tables.Address.Record | undefined
            >({
              operation: "Public.Tables.Address.Update",
              parameters,
              values,
            });

            return response.results ? response.results : undefined;
          }

          public async delete(parameters: Public.Tables.Address.ByAddressId) {
            const response = await this.client.invoke<
              Public.Tables.Address.ByAddressId,
              never,
              Public.Tables.Address.Record | undefined
            >({
              operation: "Public.Tables.Address.Delete",
              parameters,
            });

            return response.results ? response.results : undefined;
          }
        })(this);

        public ByCityId = new (class extends HasClient {
          public async read(parameters: Public.Tables.Address.ByCityId) {
            const response = await this.client.invoke<
              Public.Tables.Address.ByCityId,
              never,
              Public.Tables.Address.Record[] | undefined
            >({
              operation: "Public.Tables.Address.Read",
              parameters,
            });

            return response.results ? response.results : [];
          }

          public async update(
            parameters: Public.Tables.Address.ByCityId,
            values: Partial<Public.Types.Address>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Address.ByCityId,
              Partial<Public.Types.Address>,
              Public.Tables.Address.Record[] | undefined
            >({
              operation: "Public.Tables.Address.Update",
              parameters,
              values,
            });

            return response.results ? response.results : [];
          }

          public async delete(parameters: Public.Tables.Address.ByCityId) {
            const response = await this.client.invoke<
              Public.Tables.Address.ByCityId,
              never,
              Public.Tables.Address.Record[] | undefined
            >({
              operation: "Public.Tables.Address.Delete",
              parameters,
            });

            return response.results ? response.results : [];
          }
        })(this);
      })(this);

      public City = new (class extends HasClient {
        public async create(
          values: Public.Tables.City.Values,
        ): Promise<Public.Tables.City.Record | undefined> {
          const response = await this.client.invoke<
            never,
            Public.Tables.City.Values,
            Public.Tables.City.Record
          >({
            operation: "Public.Tables.City.Create",
            values,
          });
          return response.results;
        }

        public ByCityId = new (class extends HasClient {
          public async read(parameters: Public.Tables.City.ByCityId) {
            const response = await this.client.invoke<
              Public.Tables.City.ByCityId,
              never,
              Public.Tables.City.Record | undefined
            >({
              operation: "Public.Tables.City.Read",
              parameters,
            });

            return response.results ? response.results : undefined;
          }

          public async update(
            parameters: Public.Tables.City.ByCityId,
            values: Partial<Public.Types.City>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.City.ByCityId,
              Partial<Public.Types.City>,
              Public.Tables.City.Record | undefined
            >({
              operation: "Public.Tables.City.Update",
              parameters,
              values,
            });

            return response.results ? response.results : undefined;
          }

          public async delete(parameters: Public.Tables.City.ByCityId) {
            const response = await this.client.invoke<
              Public.Tables.City.ByCityId,
              never,
              Public.Tables.City.Record | undefined
            >({
              operation: "Public.Tables.City.Delete",
              parameters,
            });

            return response.results ? response.results : undefined;
          }
        })(this);

        public ByCountryId = new (class extends HasClient {
          public async read(parameters: Public.Tables.City.ByCountryId) {
            const response = await this.client.invoke<
              Public.Tables.City.ByCountryId,
              never,
              Public.Tables.City.Record[] | undefined
            >({
              operation: "Public.Tables.City.Read",
              parameters,
            });

            return response.results ? response.results : [];
          }

          public async update(
            parameters: Public.Tables.City.ByCountryId,
            values: Partial<Public.Types.City>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.City.ByCountryId,
              Partial<Public.Types.City>,
              Public.Tables.City.Record[] | undefined
            >({
              operation: "Public.Tables.City.Update",
              parameters,
              values,
            });

            return response.results ? response.results : [];
          }

          public async delete(parameters: Public.Tables.City.ByCountryId) {
            const response = await this.client.invoke<
              Public.Tables.City.ByCountryId,
              never,
              Public.Tables.City.Record[] | undefined
            >({
              operation: "Public.Tables.City.Delete",
              parameters,
            });

            return response.results ? response.results : [];
          }
        })(this);
      })(this);

      public Customer = new (class extends HasClient {
        public async create(
          values: Public.Tables.Customer.Values,
        ): Promise<Public.Tables.Customer.Record | undefined> {
          const response = await this.client.invoke<
            never,
            Public.Tables.Customer.Values,
            Public.Tables.Customer.Record
          >({
            operation: "Public.Tables.Customer.Create",
            values,
          });
          return response.results;
        }

        public ByAddressId = new (class extends HasClient {
          public async read(parameters: Public.Tables.Customer.ByAddressId) {
            const response = await this.client.invoke<
              Public.Tables.Customer.ByAddressId,
              never,
              Public.Tables.Customer.Record[] | undefined
            >({
              operation: "Public.Tables.Customer.Read",
              parameters,
            });

            return response.results ? response.results : [];
          }

          public async update(
            parameters: Public.Tables.Customer.ByAddressId,
            values: Partial<Public.Types.Customer>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Customer.ByAddressId,
              Partial<Public.Types.Customer>,
              Public.Tables.Customer.Record[] | undefined
            >({
              operation: "Public.Tables.Customer.Update",
              parameters,
              values,
            });

            return response.results ? response.results : [];
          }

          public async delete(parameters: Public.Tables.Customer.ByAddressId) {
            const response = await this.client.invoke<
              Public.Tables.Customer.ByAddressId,
              never,
              Public.Tables.Customer.Record[] | undefined
            >({
              operation: "Public.Tables.Customer.Delete",
              parameters,
            });

            return response.results ? response.results : [];
          }
        })(this);

        public ByCustomerId = new (class extends HasClient {
          public async read(parameters: Public.Tables.Customer.ByCustomerId) {
            const response = await this.client.invoke<
              Public.Tables.Customer.ByCustomerId,
              never,
              Public.Tables.Customer.Record | undefined
            >({
              operation: "Public.Tables.Customer.Read",
              parameters,
            });

            return response.results ? response.results : undefined;
          }

          public async update(
            parameters: Public.Tables.Customer.ByCustomerId,
            values: Partial<Public.Types.Customer>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Customer.ByCustomerId,
              Partial<Public.Types.Customer>,
              Public.Tables.Customer.Record | undefined
            >({
              operation: "Public.Tables.Customer.Update",
              parameters,
              values,
            });

            return response.results ? response.results : undefined;
          }

          public async delete(parameters: Public.Tables.Customer.ByCustomerId) {
            const response = await this.client.invoke<
              Public.Tables.Customer.ByCustomerId,
              never,
              Public.Tables.Customer.Record | undefined
            >({
              operation: "Public.Tables.Customer.Delete",
              parameters,
            });

            return response.results ? response.results : undefined;
          }
        })(this);

        public ByLastName = new (class extends HasClient {
          public async read(parameters: Public.Tables.Customer.ByLastName) {
            const response = await this.client.invoke<
              Public.Tables.Customer.ByLastName,
              never,
              Public.Tables.Customer.Record[] | undefined
            >({
              operation: "Public.Tables.Customer.Read",
              parameters,
            });

            return response.results ? response.results : [];
          }

          public async update(
            parameters: Public.Tables.Customer.ByLastName,
            values: Partial<Public.Types.Customer>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Customer.ByLastName,
              Partial<Public.Types.Customer>,
              Public.Tables.Customer.Record[] | undefined
            >({
              operation: "Public.Tables.Customer.Update",
              parameters,
              values,
            });

            return response.results ? response.results : [];
          }

          public async delete(parameters: Public.Tables.Customer.ByLastName) {
            const response = await this.client.invoke<
              Public.Tables.Customer.ByLastName,
              never,
              Public.Tables.Customer.Record[] | undefined
            >({
              operation: "Public.Tables.Customer.Delete",
              parameters,
            });

            return response.results ? response.results : [];
          }
        })(this);

        public ByStoreId = new (class extends HasClient {
          public async read(parameters: Public.Tables.Customer.ByStoreId) {
            const response = await this.client.invoke<
              Public.Tables.Customer.ByStoreId,
              never,
              Public.Tables.Customer.Record[] | undefined
            >({
              operation: "Public.Tables.Customer.Read",
              parameters,
            });

            return response.results ? response.results : [];
          }

          public async update(
            parameters: Public.Tables.Customer.ByStoreId,
            values: Partial<Public.Types.Customer>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Customer.ByStoreId,
              Partial<Public.Types.Customer>,
              Public.Tables.Customer.Record[] | undefined
            >({
              operation: "Public.Tables.Customer.Update",
              parameters,
              values,
            });

            return response.results ? response.results : [];
          }

          public async delete(parameters: Public.Tables.Customer.ByStoreId) {
            const response = await this.client.invoke<
              Public.Tables.Customer.ByStoreId,
              never,
              Public.Tables.Customer.Record[] | undefined
            >({
              operation: "Public.Tables.Customer.Delete",
              parameters,
            });

            return response.results ? response.results : [];
          }
        })(this);
      })(this);

      public Actor = new (class extends HasClient {
        public async create(
          values: Public.Tables.Actor.Values,
        ): Promise<Public.Tables.Actor.Record | undefined> {
          const response = await this.client.invoke<
            never,
            Public.Tables.Actor.Values,
            Public.Tables.Actor.Record
          >({
            operation: "Public.Tables.Actor.Create",
            values,
          });
          return response.results;
        }

        public ByActorId = new (class extends HasClient {
          public async read(parameters: Public.Tables.Actor.ByActorId) {
            const response = await this.client.invoke<
              Public.Tables.Actor.ByActorId,
              never,
              Public.Tables.Actor.Record | undefined
            >({
              operation: "Public.Tables.Actor.Read",
              parameters,
            });

            return response.results ? response.results : undefined;
          }

          public async update(
            parameters: Public.Tables.Actor.ByActorId,
            values: Partial<Public.Types.Actor>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Actor.ByActorId,
              Partial<Public.Types.Actor>,
              Public.Tables.Actor.Record | undefined
            >({
              operation: "Public.Tables.Actor.Update",
              parameters,
              values,
            });

            return response.results ? response.results : undefined;
          }

          public async delete(parameters: Public.Tables.Actor.ByActorId) {
            const response = await this.client.invoke<
              Public.Tables.Actor.ByActorId,
              never,
              Public.Tables.Actor.Record | undefined
            >({
              operation: "Public.Tables.Actor.Delete",
              parameters,
            });

            return response.results ? response.results : undefined;
          }
        })(this);

        public ByLastName = new (class extends HasClient {
          public async read(parameters: Public.Tables.Actor.ByLastName) {
            const response = await this.client.invoke<
              Public.Tables.Actor.ByLastName,
              never,
              Public.Tables.Actor.Record[] | undefined
            >({
              operation: "Public.Tables.Actor.Read",
              parameters,
            });

            return response.results ? response.results : [];
          }

          public async update(
            parameters: Public.Tables.Actor.ByLastName,
            values: Partial<Public.Types.Actor>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Actor.ByLastName,
              Partial<Public.Types.Actor>,
              Public.Tables.Actor.Record[] | undefined
            >({
              operation: "Public.Tables.Actor.Update",
              parameters,
              values,
            });

            return response.results ? response.results : [];
          }

          public async delete(parameters: Public.Tables.Actor.ByLastName) {
            const response = await this.client.invoke<
              Public.Tables.Actor.ByLastName,
              never,
              Public.Tables.Actor.Record[] | undefined
            >({
              operation: "Public.Tables.Actor.Delete",
              parameters,
            });

            return response.results ? response.results : [];
          }
        })(this);
      })(this);

      public FilmCategory = new (class extends HasClient {
        public async create(
          values: Public.Tables.FilmCategory.Values,
        ): Promise<Public.Tables.FilmCategory.Record | undefined> {
          const response = await this.client.invoke<
            never,
            Public.Tables.FilmCategory.Values,
            Public.Tables.FilmCategory.Record
          >({
            operation: "Public.Tables.FilmCategory.Create",
            values,
          });
          return response.results;
        }

        public ByFilmIdCategoryId = new (class extends HasClient {
          public async read(
            parameters: Public.Tables.FilmCategory.ByFilmIdCategoryId,
          ) {
            const response = await this.client.invoke<
              Public.Tables.FilmCategory.ByFilmIdCategoryId,
              never,
              Public.Tables.FilmCategory.Record | undefined
            >({
              operation: "Public.Tables.FilmCategory.Read",
              parameters,
            });

            return response.results ? response.results : undefined;
          }

          public async update(
            parameters: Public.Tables.FilmCategory.ByFilmIdCategoryId,
            values: Partial<Public.Types.FilmCategory>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.FilmCategory.ByFilmIdCategoryId,
              Partial<Public.Types.FilmCategory>,
              Public.Tables.FilmCategory.Record | undefined
            >({
              operation: "Public.Tables.FilmCategory.Update",
              parameters,
              values,
            });

            return response.results ? response.results : undefined;
          }

          public async delete(
            parameters: Public.Tables.FilmCategory.ByFilmIdCategoryId,
          ) {
            const response = await this.client.invoke<
              Public.Tables.FilmCategory.ByFilmIdCategoryId,
              never,
              Public.Tables.FilmCategory.Record | undefined
            >({
              operation: "Public.Tables.FilmCategory.Delete",
              parameters,
            });

            return response.results ? response.results : undefined;
          }
        })(this);
      })(this);

      public Inventory = new (class extends HasClient {
        public async create(
          values: Public.Tables.Inventory.Values,
        ): Promise<Public.Tables.Inventory.Record | undefined> {
          const response = await this.client.invoke<
            never,
            Public.Tables.Inventory.Values,
            Public.Tables.Inventory.Record
          >({
            operation: "Public.Tables.Inventory.Create",
            values,
          });
          return response.results;
        }

        public ByInventoryId = new (class extends HasClient {
          public async read(parameters: Public.Tables.Inventory.ByInventoryId) {
            const response = await this.client.invoke<
              Public.Tables.Inventory.ByInventoryId,
              never,
              Public.Tables.Inventory.Record | undefined
            >({
              operation: "Public.Tables.Inventory.Read",
              parameters,
            });

            return response.results ? response.results : undefined;
          }

          public async update(
            parameters: Public.Tables.Inventory.ByInventoryId,
            values: Partial<Public.Types.Inventory>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Inventory.ByInventoryId,
              Partial<Public.Types.Inventory>,
              Public.Tables.Inventory.Record | undefined
            >({
              operation: "Public.Tables.Inventory.Update",
              parameters,
              values,
            });

            return response.results ? response.results : undefined;
          }

          public async delete(
            parameters: Public.Tables.Inventory.ByInventoryId,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Inventory.ByInventoryId,
              never,
              Public.Tables.Inventory.Record | undefined
            >({
              operation: "Public.Tables.Inventory.Delete",
              parameters,
            });

            return response.results ? response.results : undefined;
          }
        })(this);

        public ByStoreIdFilmId = new (class extends HasClient {
          public async read(
            parameters: Public.Tables.Inventory.ByStoreIdFilmId,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Inventory.ByStoreIdFilmId,
              never,
              Public.Tables.Inventory.Record[] | undefined
            >({
              operation: "Public.Tables.Inventory.Read",
              parameters,
            });

            return response.results ? response.results : [];
          }

          public async update(
            parameters: Public.Tables.Inventory.ByStoreIdFilmId,
            values: Partial<Public.Types.Inventory>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Inventory.ByStoreIdFilmId,
              Partial<Public.Types.Inventory>,
              Public.Tables.Inventory.Record[] | undefined
            >({
              operation: "Public.Tables.Inventory.Update",
              parameters,
              values,
            });

            return response.results ? response.results : [];
          }

          public async delete(
            parameters: Public.Tables.Inventory.ByStoreIdFilmId,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Inventory.ByStoreIdFilmId,
              never,
              Public.Tables.Inventory.Record[] | undefined
            >({
              operation: "Public.Tables.Inventory.Delete",
              parameters,
            });

            return response.results ? response.results : [];
          }
        })(this);
      })(this);

      public Category = new (class extends HasClient {
        public async create(
          values: Public.Tables.Category.Values,
        ): Promise<Public.Tables.Category.Record | undefined> {
          const response = await this.client.invoke<
            never,
            Public.Tables.Category.Values,
            Public.Tables.Category.Record
          >({
            operation: "Public.Tables.Category.Create",
            values,
          });
          return response.results;
        }

        public ByCategoryId = new (class extends HasClient {
          public async read(parameters: Public.Tables.Category.ByCategoryId) {
            const response = await this.client.invoke<
              Public.Tables.Category.ByCategoryId,
              never,
              Public.Tables.Category.Record | undefined
            >({
              operation: "Public.Tables.Category.Read",
              parameters,
            });

            return response.results ? response.results : undefined;
          }

          public async update(
            parameters: Public.Tables.Category.ByCategoryId,
            values: Partial<Public.Types.Category>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Category.ByCategoryId,
              Partial<Public.Types.Category>,
              Public.Tables.Category.Record | undefined
            >({
              operation: "Public.Tables.Category.Update",
              parameters,
              values,
            });

            return response.results ? response.results : undefined;
          }

          public async delete(parameters: Public.Tables.Category.ByCategoryId) {
            const response = await this.client.invoke<
              Public.Tables.Category.ByCategoryId,
              never,
              Public.Tables.Category.Record | undefined
            >({
              operation: "Public.Tables.Category.Delete",
              parameters,
            });

            return response.results ? response.results : undefined;
          }
        })(this);
      })(this);

      public Country = new (class extends HasClient {
        public async create(
          values: Public.Tables.Country.Values,
        ): Promise<Public.Tables.Country.Record | undefined> {
          const response = await this.client.invoke<
            never,
            Public.Tables.Country.Values,
            Public.Tables.Country.Record
          >({
            operation: "Public.Tables.Country.Create",
            values,
          });
          return response.results;
        }

        public ByCountryId = new (class extends HasClient {
          public async read(parameters: Public.Tables.Country.ByCountryId) {
            const response = await this.client.invoke<
              Public.Tables.Country.ByCountryId,
              never,
              Public.Tables.Country.Record | undefined
            >({
              operation: "Public.Tables.Country.Read",
              parameters,
            });

            return response.results ? response.results : undefined;
          }

          public async update(
            parameters: Public.Tables.Country.ByCountryId,
            values: Partial<Public.Types.Country>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Country.ByCountryId,
              Partial<Public.Types.Country>,
              Public.Tables.Country.Record | undefined
            >({
              operation: "Public.Tables.Country.Update",
              parameters,
              values,
            });

            return response.results ? response.results : undefined;
          }

          public async delete(parameters: Public.Tables.Country.ByCountryId) {
            const response = await this.client.invoke<
              Public.Tables.Country.ByCountryId,
              never,
              Public.Tables.Country.Record | undefined
            >({
              operation: "Public.Tables.Country.Delete",
              parameters,
            });

            return response.results ? response.results : undefined;
          }
        })(this);
      })(this);

      public Language = new (class extends HasClient {
        public async create(
          values: Public.Tables.Language.Values,
        ): Promise<Public.Tables.Language.Record | undefined> {
          const response = await this.client.invoke<
            never,
            Public.Tables.Language.Values,
            Public.Tables.Language.Record
          >({
            operation: "Public.Tables.Language.Create",
            values,
          });
          return response.results;
        }

        public ByLanguageId = new (class extends HasClient {
          public async read(parameters: Public.Tables.Language.ByLanguageId) {
            const response = await this.client.invoke<
              Public.Tables.Language.ByLanguageId,
              never,
              Public.Tables.Language.Record | undefined
            >({
              operation: "Public.Tables.Language.Read",
              parameters,
            });

            return response.results ? response.results : undefined;
          }

          public async update(
            parameters: Public.Tables.Language.ByLanguageId,
            values: Partial<Public.Types.Language>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Language.ByLanguageId,
              Partial<Public.Types.Language>,
              Public.Tables.Language.Record | undefined
            >({
              operation: "Public.Tables.Language.Update",
              parameters,
              values,
            });

            return response.results ? response.results : undefined;
          }

          public async delete(parameters: Public.Tables.Language.ByLanguageId) {
            const response = await this.client.invoke<
              Public.Tables.Language.ByLanguageId,
              never,
              Public.Tables.Language.Record | undefined
            >({
              operation: "Public.Tables.Language.Delete",
              parameters,
            });

            return response.results ? response.results : undefined;
          }
        })(this);
      })(this);

      public Rental = new (class extends HasClient {
        public async create(
          values: Public.Tables.Rental.Values,
        ): Promise<Public.Tables.Rental.Record | undefined> {
          const response = await this.client.invoke<
            never,
            Public.Tables.Rental.Values,
            Public.Tables.Rental.Record
          >({
            operation: "Public.Tables.Rental.Create",
            values,
          });
          return response.results;
        }

        public ByInventoryId = new (class extends HasClient {
          public async read(parameters: Public.Tables.Rental.ByInventoryId) {
            const response = await this.client.invoke<
              Public.Tables.Rental.ByInventoryId,
              never,
              Public.Tables.Rental.Record[] | undefined
            >({
              operation: "Public.Tables.Rental.Read",
              parameters,
            });

            return response.results ? response.results : [];
          }

          public async update(
            parameters: Public.Tables.Rental.ByInventoryId,
            values: Partial<Public.Types.Rental>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Rental.ByInventoryId,
              Partial<Public.Types.Rental>,
              Public.Tables.Rental.Record[] | undefined
            >({
              operation: "Public.Tables.Rental.Update",
              parameters,
              values,
            });

            return response.results ? response.results : [];
          }

          public async delete(parameters: Public.Tables.Rental.ByInventoryId) {
            const response = await this.client.invoke<
              Public.Tables.Rental.ByInventoryId,
              never,
              Public.Tables.Rental.Record[] | undefined
            >({
              operation: "Public.Tables.Rental.Delete",
              parameters,
            });

            return response.results ? response.results : [];
          }
        })(this);

        public ByRentalDateInventoryIdCustomerId =
          new (class extends HasClient {
            public async read(
              parameters: Public.Tables.Rental.ByRentalDateInventoryIdCustomerId,
            ) {
              const response = await this.client.invoke<
                Public.Tables.Rental.ByRentalDateInventoryIdCustomerId,
                never,
                Public.Tables.Rental.Record | undefined
              >({
                operation: "Public.Tables.Rental.Read",
                parameters,
              });

              return response.results ? response.results : undefined;
            }

            public async update(
              parameters: Public.Tables.Rental.ByRentalDateInventoryIdCustomerId,
              values: Partial<Public.Types.Rental>,
            ) {
              const response = await this.client.invoke<
                Public.Tables.Rental.ByRentalDateInventoryIdCustomerId,
                Partial<Public.Types.Rental>,
                Public.Tables.Rental.Record | undefined
              >({
                operation: "Public.Tables.Rental.Update",
                parameters,
                values,
              });

              return response.results ? response.results : undefined;
            }

            public async delete(
              parameters: Public.Tables.Rental.ByRentalDateInventoryIdCustomerId,
            ) {
              const response = await this.client.invoke<
                Public.Tables.Rental.ByRentalDateInventoryIdCustomerId,
                never,
                Public.Tables.Rental.Record | undefined
              >({
                operation: "Public.Tables.Rental.Delete",
                parameters,
              });

              return response.results ? response.results : undefined;
            }
          })(this);

        public ByRentalId = new (class extends HasClient {
          public async read(parameters: Public.Tables.Rental.ByRentalId) {
            const response = await this.client.invoke<
              Public.Tables.Rental.ByRentalId,
              never,
              Public.Tables.Rental.Record | undefined
            >({
              operation: "Public.Tables.Rental.Read",
              parameters,
            });

            return response.results ? response.results : undefined;
          }

          public async update(
            parameters: Public.Tables.Rental.ByRentalId,
            values: Partial<Public.Types.Rental>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Rental.ByRentalId,
              Partial<Public.Types.Rental>,
              Public.Tables.Rental.Record | undefined
            >({
              operation: "Public.Tables.Rental.Update",
              parameters,
              values,
            });

            return response.results ? response.results : undefined;
          }

          public async delete(parameters: Public.Tables.Rental.ByRentalId) {
            const response = await this.client.invoke<
              Public.Tables.Rental.ByRentalId,
              never,
              Public.Tables.Rental.Record | undefined
            >({
              operation: "Public.Tables.Rental.Delete",
              parameters,
            });

            return response.results ? response.results : undefined;
          }
        })(this);
      })(this);

      public Staff = new (class extends HasClient {
        public async create(
          values: Public.Tables.Staff.Values,
        ): Promise<Public.Tables.Staff.Record | undefined> {
          const response = await this.client.invoke<
            never,
            Public.Tables.Staff.Values,
            Public.Tables.Staff.Record
          >({
            operation: "Public.Tables.Staff.Create",
            values,
          });
          return response.results;
        }

        public ByStaffId = new (class extends HasClient {
          public async read(parameters: Public.Tables.Staff.ByStaffId) {
            const response = await this.client.invoke<
              Public.Tables.Staff.ByStaffId,
              never,
              Public.Tables.Staff.Record | undefined
            >({
              operation: "Public.Tables.Staff.Read",
              parameters,
            });

            return response.results ? response.results : undefined;
          }

          public async update(
            parameters: Public.Tables.Staff.ByStaffId,
            values: Partial<Public.Types.Staff>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Staff.ByStaffId,
              Partial<Public.Types.Staff>,
              Public.Tables.Staff.Record | undefined
            >({
              operation: "Public.Tables.Staff.Update",
              parameters,
              values,
            });

            return response.results ? response.results : undefined;
          }

          public async delete(parameters: Public.Tables.Staff.ByStaffId) {
            const response = await this.client.invoke<
              Public.Tables.Staff.ByStaffId,
              never,
              Public.Tables.Staff.Record | undefined
            >({
              operation: "Public.Tables.Staff.Delete",
              parameters,
            });

            return response.results ? response.results : undefined;
          }
        })(this);
      })(this);

      public Store = new (class extends HasClient {
        public async create(
          values: Public.Tables.Store.Values,
        ): Promise<Public.Tables.Store.Record | undefined> {
          const response = await this.client.invoke<
            never,
            Public.Tables.Store.Values,
            Public.Tables.Store.Record
          >({
            operation: "Public.Tables.Store.Create",
            values,
          });
          return response.results;
        }

        public ByManagerStaffId = new (class extends HasClient {
          public async read(parameters: Public.Tables.Store.ByManagerStaffId) {
            const response = await this.client.invoke<
              Public.Tables.Store.ByManagerStaffId,
              never,
              Public.Tables.Store.Record | undefined
            >({
              operation: "Public.Tables.Store.Read",
              parameters,
            });

            return response.results ? response.results : undefined;
          }

          public async update(
            parameters: Public.Tables.Store.ByManagerStaffId,
            values: Partial<Public.Types.Store>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Store.ByManagerStaffId,
              Partial<Public.Types.Store>,
              Public.Tables.Store.Record | undefined
            >({
              operation: "Public.Tables.Store.Update",
              parameters,
              values,
            });

            return response.results ? response.results : undefined;
          }

          public async delete(
            parameters: Public.Tables.Store.ByManagerStaffId,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Store.ByManagerStaffId,
              never,
              Public.Tables.Store.Record | undefined
            >({
              operation: "Public.Tables.Store.Delete",
              parameters,
            });

            return response.results ? response.results : undefined;
          }
        })(this);

        public ByStoreId = new (class extends HasClient {
          public async read(parameters: Public.Tables.Store.ByStoreId) {
            const response = await this.client.invoke<
              Public.Tables.Store.ByStoreId,
              never,
              Public.Tables.Store.Record | undefined
            >({
              operation: "Public.Tables.Store.Read",
              parameters,
            });

            return response.results ? response.results : undefined;
          }

          public async update(
            parameters: Public.Tables.Store.ByStoreId,
            values: Partial<Public.Types.Store>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Store.ByStoreId,
              Partial<Public.Types.Store>,
              Public.Tables.Store.Record | undefined
            >({
              operation: "Public.Tables.Store.Update",
              parameters,
              values,
            });

            return response.results ? response.results : undefined;
          }

          public async delete(parameters: Public.Tables.Store.ByStoreId) {
            const response = await this.client.invoke<
              Public.Tables.Store.ByStoreId,
              never,
              Public.Tables.Store.Record | undefined
            >({
              operation: "Public.Tables.Store.Delete",
              parameters,
            });

            return response.results ? response.results : undefined;
          }
        })(this);
      })(this);

      public Payment = new (class extends HasClient {
        public async create(
          values: Public.Tables.Payment.Values,
        ): Promise<Public.Tables.Payment.Record | undefined> {
          const response = await this.client.invoke<
            never,
            Public.Tables.Payment.Values,
            Public.Tables.Payment.Record
          >({
            operation: "Public.Tables.Payment.Create",
            values,
          });
          return response.results;
        }

        public ByCustomerId = new (class extends HasClient {
          public async read(parameters: Public.Tables.Payment.ByCustomerId) {
            const response = await this.client.invoke<
              Public.Tables.Payment.ByCustomerId,
              never,
              Public.Tables.Payment.Record[] | undefined
            >({
              operation: "Public.Tables.Payment.Read",
              parameters,
            });

            return response.results ? response.results : [];
          }

          public async update(
            parameters: Public.Tables.Payment.ByCustomerId,
            values: Partial<Public.Types.Payment>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Payment.ByCustomerId,
              Partial<Public.Types.Payment>,
              Public.Tables.Payment.Record[] | undefined
            >({
              operation: "Public.Tables.Payment.Update",
              parameters,
              values,
            });

            return response.results ? response.results : [];
          }

          public async delete(parameters: Public.Tables.Payment.ByCustomerId) {
            const response = await this.client.invoke<
              Public.Tables.Payment.ByCustomerId,
              never,
              Public.Tables.Payment.Record[] | undefined
            >({
              operation: "Public.Tables.Payment.Delete",
              parameters,
            });

            return response.results ? response.results : [];
          }
        })(this);

        public ByPaymentId = new (class extends HasClient {
          public async read(parameters: Public.Tables.Payment.ByPaymentId) {
            const response = await this.client.invoke<
              Public.Tables.Payment.ByPaymentId,
              never,
              Public.Tables.Payment.Record | undefined
            >({
              operation: "Public.Tables.Payment.Read",
              parameters,
            });

            return response.results ? response.results : undefined;
          }

          public async update(
            parameters: Public.Tables.Payment.ByPaymentId,
            values: Partial<Public.Types.Payment>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Payment.ByPaymentId,
              Partial<Public.Types.Payment>,
              Public.Tables.Payment.Record | undefined
            >({
              operation: "Public.Tables.Payment.Update",
              parameters,
              values,
            });

            return response.results ? response.results : undefined;
          }

          public async delete(parameters: Public.Tables.Payment.ByPaymentId) {
            const response = await this.client.invoke<
              Public.Tables.Payment.ByPaymentId,
              never,
              Public.Tables.Payment.Record | undefined
            >({
              operation: "Public.Tables.Payment.Delete",
              parameters,
            });

            return response.results ? response.results : undefined;
          }
        })(this);

        public ByRentalId = new (class extends HasClient {
          public async read(parameters: Public.Tables.Payment.ByRentalId) {
            const response = await this.client.invoke<
              Public.Tables.Payment.ByRentalId,
              never,
              Public.Tables.Payment.Record[] | undefined
            >({
              operation: "Public.Tables.Payment.Read",
              parameters,
            });

            return response.results ? response.results : [];
          }

          public async update(
            parameters: Public.Tables.Payment.ByRentalId,
            values: Partial<Public.Types.Payment>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Payment.ByRentalId,
              Partial<Public.Types.Payment>,
              Public.Tables.Payment.Record[] | undefined
            >({
              operation: "Public.Tables.Payment.Update",
              parameters,
              values,
            });

            return response.results ? response.results : [];
          }

          public async delete(parameters: Public.Tables.Payment.ByRentalId) {
            const response = await this.client.invoke<
              Public.Tables.Payment.ByRentalId,
              never,
              Public.Tables.Payment.Record[] | undefined
            >({
              operation: "Public.Tables.Payment.Delete",
              parameters,
            });

            return response.results ? response.results : [];
          }
        })(this);

        public ByStaffId = new (class extends HasClient {
          public async read(parameters: Public.Tables.Payment.ByStaffId) {
            const response = await this.client.invoke<
              Public.Tables.Payment.ByStaffId,
              never,
              Public.Tables.Payment.Record[] | undefined
            >({
              operation: "Public.Tables.Payment.Read",
              parameters,
            });

            return response.results ? response.results : [];
          }

          public async update(
            parameters: Public.Tables.Payment.ByStaffId,
            values: Partial<Public.Types.Payment>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Payment.ByStaffId,
              Partial<Public.Types.Payment>,
              Public.Tables.Payment.Record[] | undefined
            >({
              operation: "Public.Tables.Payment.Update",
              parameters,
              values,
            });

            return response.results ? response.results : [];
          }

          public async delete(parameters: Public.Tables.Payment.ByStaffId) {
            const response = await this.client.invoke<
              Public.Tables.Payment.ByStaffId,
              never,
              Public.Tables.Payment.Record[] | undefined
            >({
              operation: "Public.Tables.Payment.Delete",
              parameters,
            });

            return response.results ? response.results : [];
          }
        })(this);
      })(this);

      public Film = new (class extends HasClient {
        public async create(
          values: Public.Tables.Film.Values,
        ): Promise<Public.Tables.Film.Record | undefined> {
          const response = await this.client.invoke<
            never,
            Public.Tables.Film.Values,
            Public.Tables.Film.Record
          >({
            operation: "Public.Tables.Film.Create",
            values,
          });
          return response.results;
        }

        public ByFilmId = new (class extends HasClient {
          public async read(parameters: Public.Tables.Film.ByFilmId) {
            const response = await this.client.invoke<
              Public.Tables.Film.ByFilmId,
              never,
              Public.Tables.Film.Record | undefined
            >({
              operation: "Public.Tables.Film.Read",
              parameters,
            });

            return response.results ? response.results : undefined;
          }

          public async update(
            parameters: Public.Tables.Film.ByFilmId,
            values: Partial<Public.Types.Film>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Film.ByFilmId,
              Partial<Public.Types.Film>,
              Public.Tables.Film.Record | undefined
            >({
              operation: "Public.Tables.Film.Update",
              parameters,
              values,
            });

            return response.results ? response.results : undefined;
          }

          public async delete(parameters: Public.Tables.Film.ByFilmId) {
            const response = await this.client.invoke<
              Public.Tables.Film.ByFilmId,
              never,
              Public.Tables.Film.Record | undefined
            >({
              operation: "Public.Tables.Film.Delete",
              parameters,
            });

            return response.results ? response.results : undefined;
          }
        })(this);

        public ByFulltext = new (class extends HasClient {
          public async read(parameters: Public.Tables.Film.ByFulltext) {
            const response = await this.client.invoke<
              Public.Tables.Film.ByFulltext,
              never,
              Public.Tables.Film.Record[] | undefined
            >({
              operation: "Public.Tables.Film.Read",
              parameters,
            });

            return response.results ? response.results : [];
          }

          public async update(
            parameters: Public.Tables.Film.ByFulltext,
            values: Partial<Public.Types.Film>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Film.ByFulltext,
              Partial<Public.Types.Film>,
              Public.Tables.Film.Record[] | undefined
            >({
              operation: "Public.Tables.Film.Update",
              parameters,
              values,
            });

            return response.results ? response.results : [];
          }

          public async delete(parameters: Public.Tables.Film.ByFulltext) {
            const response = await this.client.invoke<
              Public.Tables.Film.ByFulltext,
              never,
              Public.Tables.Film.Record[] | undefined
            >({
              operation: "Public.Tables.Film.Delete",
              parameters,
            });

            return response.results ? response.results : [];
          }
        })(this);

        public ByLanguageId = new (class extends HasClient {
          public async read(parameters: Public.Tables.Film.ByLanguageId) {
            const response = await this.client.invoke<
              Public.Tables.Film.ByLanguageId,
              never,
              Public.Tables.Film.Record[] | undefined
            >({
              operation: "Public.Tables.Film.Read",
              parameters,
            });

            return response.results ? response.results : [];
          }

          public async update(
            parameters: Public.Tables.Film.ByLanguageId,
            values: Partial<Public.Types.Film>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Film.ByLanguageId,
              Partial<Public.Types.Film>,
              Public.Tables.Film.Record[] | undefined
            >({
              operation: "Public.Tables.Film.Update",
              parameters,
              values,
            });

            return response.results ? response.results : [];
          }

          public async delete(parameters: Public.Tables.Film.ByLanguageId) {
            const response = await this.client.invoke<
              Public.Tables.Film.ByLanguageId,
              never,
              Public.Tables.Film.Record[] | undefined
            >({
              operation: "Public.Tables.Film.Delete",
              parameters,
            });

            return response.results ? response.results : [];
          }
        })(this);

        public ByTitle = new (class extends HasClient {
          public async read(parameters: Public.Tables.Film.ByTitle) {
            const response = await this.client.invoke<
              Public.Tables.Film.ByTitle,
              never,
              Public.Tables.Film.Record[] | undefined
            >({
              operation: "Public.Tables.Film.Read",
              parameters,
            });

            return response.results ? response.results : [];
          }

          public async update(
            parameters: Public.Tables.Film.ByTitle,
            values: Partial<Public.Types.Film>,
          ) {
            const response = await this.client.invoke<
              Public.Tables.Film.ByTitle,
              Partial<Public.Types.Film>,
              Public.Tables.Film.Record[] | undefined
            >({
              operation: "Public.Tables.Film.Update",
              parameters,
              values,
            });

            return response.results ? response.results : [];
          }

          public async delete(parameters: Public.Tables.Film.ByTitle) {
            const response = await this.client.invoke<
              Public.Tables.Film.ByTitle,
              never,
              Public.Tables.Film.Record[] | undefined
            >({
              operation: "Public.Tables.Film.Delete",
              parameters,
            });

            return response.results ? response.results : [];
          }
        })(this);
      })(this);
    })(this);
  })(this);
}

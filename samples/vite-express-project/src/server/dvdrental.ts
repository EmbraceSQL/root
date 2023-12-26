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
      export type ByStarelidStaattnumStainherit = {
        starelid: PgCatalog.Types.Oid;
        staattnum: PgCatalog.Types.Int2;
        stainherit: PgCatalog.Types.Bool;
      };
      export type PrimaryKey = ByStarelidStaattnumStainherit;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type ByTypnameTypnamespace = {
        typname: PgCatalog.Types.Cstring;
        typnamespace: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace PgForeignTable {
      export type Record = {
        ftrelid: PgCatalog.Types.PgForeignTable["ftrelid"];
        ftserver: PgCatalog.Types.PgForeignTable["ftserver"];
        ftoptions: PgCatalog.Types.PgForeignTable["ftoptions"] | null;
      };
      export type ByFtrelid = {
        ftrelid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByFtrelid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type ByRolname = {
        rolname: PgCatalog.Types.Cstring;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type ByStxoidStxdinherit = {
        stxoid: PgCatalog.Types.Oid;
        stxdinherit: PgCatalog.Types.Bool;
      };
      export type PrimaryKey = ByStxoidStxdinherit;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace PgUserMapping {
      export type Record = {
        oid: PgCatalog.Types.PgUserMapping["oid"];
        umuser: PgCatalog.Types.PgUserMapping["umuser"];
        umserver: PgCatalog.Types.PgUserMapping["umserver"];
        umoptions: PgCatalog.Types.PgUserMapping["umoptions"] | null;
      };
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type ByUmuserUmserver = {
        umuser: PgCatalog.Types.Oid;
        umserver: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type BySubdbidSubname = {
        subdbid: PgCatalog.Types.Oid;
        subname: PgCatalog.Types.Cstring;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace PgAttrdef {
      export type Record = {
        oid: PgCatalog.Types.PgAttrdef["oid"];
        adrelid: PgCatalog.Types.PgAttrdef["adrelid"];
        adnum: PgCatalog.Types.PgAttrdef["adnum"];
        adbin: PgCatalog.Types.PgAttrdef["adbin"];
      };
      export type ByAdrelidAdnum = {
        adrelid: PgCatalog.Types.Oid;
        adnum: PgCatalog.Types.Int2;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace PgInherits {
      export type Record = {
        inhrelid: PgCatalog.Types.PgInherits["inhrelid"];
        inhparent: PgCatalog.Types.PgInherits["inhparent"];
        inhseqno: PgCatalog.Types.PgInherits["inhseqno"];
        inhdetachpending: PgCatalog.Types.PgInherits["inhdetachpending"];
      };
      export type ByInhparent = {
        inhparent: PgCatalog.Types.Oid;
      };

      export type ByInhrelidInhseqno = {
        inhrelid: PgCatalog.Types.Oid;
        inhseqno: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByInhrelidInhseqno;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type ByIndexrelid = {
        indexrelid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByIndexrelid;
      export type ByIndrelid = {
        indrelid: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace PgOpfamily {
      export type Record = {
        oid: PgCatalog.Types.PgOpfamily["oid"];
        opfmethod: PgCatalog.Types.PgOpfamily["opfmethod"];
        opfname: PgCatalog.Types.PgOpfamily["opfname"];
        opfnamespace: PgCatalog.Types.PgOpfamily["opfnamespace"];
        opfowner: PgCatalog.Types.PgOpfamily["opfowner"];
      };
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
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace PgAm {
      export type Record = {
        oid: PgCatalog.Types.PgAm["oid"];
        amname: PgCatalog.Types.PgAm["amname"];
        amhandler: PgCatalog.Types.PgAm["amhandler"];
        amtype: PgCatalog.Types.PgAm["amtype"];
      };
      export type ByAmname = {
        amname: PgCatalog.Types.Cstring;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type ByLanname = {
        lanname: PgCatalog.Types.Cstring;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace PgLargeobjectMetadata {
      export type Record = {
        oid: PgCatalog.Types.PgLargeobjectMetadata["oid"];
        lomowner: PgCatalog.Types.PgLargeobjectMetadata["lomowner"];
        lomacl: PgCatalog.Types.PgLargeobjectMetadata["lomacl"] | null;
      };
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type ByAggfnoid = {
        aggfnoid: PgCatalog.Types.Regproc;
      };
      export type PrimaryKey = ByAggfnoid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type ByEvClassRulename = {
        evClass: PgCatalog.Types.Oid;
        rulename: PgCatalog.Types.Cstring;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type ByEvtname = {
        evtname: PgCatalog.Types.Cstring;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace PgDescription {
      export type Record = {
        objoid: PgCatalog.Types.PgDescription["objoid"];
        classoid: PgCatalog.Types.PgDescription["classoid"];
        objsubid: PgCatalog.Types.PgDescription["objsubid"];
        description: PgCatalog.Types.PgDescription["description"];
      };
      export type ByObjoidClassoidObjsubid = {
        objoid: PgCatalog.Types.Oid;
        classoid: PgCatalog.Types.Oid;
        objsubid: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByObjoidClassoidObjsubid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type ByCastsourceCasttarget = {
        castsource: PgCatalog.Types.Oid;
        casttarget: PgCatalog.Types.Oid;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace PgEnum {
      export type Record = {
        oid: PgCatalog.Types.PgEnum["oid"];
        enumtypid: PgCatalog.Types.PgEnum["enumtypid"];
        enumsortorder: PgCatalog.Types.PgEnum["enumsortorder"];
        enumlabel: PgCatalog.Types.PgEnum["enumlabel"];
      };
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
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace PgNamespace {
      export type Record = {
        oid: PgCatalog.Types.PgNamespace["oid"];
        nspname: PgCatalog.Types.PgNamespace["nspname"];
        nspowner: PgCatalog.Types.PgNamespace["nspowner"];
        nspacl: PgCatalog.Types.PgNamespace["nspacl"] | null;
      };
      export type ByNspname = {
        nspname: PgCatalog.Types.Cstring;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type ByDatname = {
        datname: PgCatalog.Types.Cstring;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace PgDbRoleSetting {
      export type Record = {
        setdatabase: PgCatalog.Types.PgDbRoleSetting["setdatabase"];
        setrole: PgCatalog.Types.PgDbRoleSetting["setrole"];
        setconfig: PgCatalog.Types.PgDbRoleSetting["setconfig"] | null;
      };
      export type BySetdatabaseSetrole = {
        setdatabase: PgCatalog.Types.Oid;
        setrole: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = BySetdatabaseSetrole;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace PgTablespace {
      export type Record = {
        oid: PgCatalog.Types.PgTablespace["oid"];
        spcname: PgCatalog.Types.PgTablespace["spcname"];
        spcowner: PgCatalog.Types.PgTablespace["spcowner"];
        spcacl: PgCatalog.Types.PgTablespace["spcacl"] | null;
        spcoptions: PgCatalog.Types.PgTablespace["spcoptions"] | null;
      };
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type BySpcname = {
        spcname: PgCatalog.Types.Cstring;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace PgShdescription {
      export type Record = {
        objoid: PgCatalog.Types.PgShdescription["objoid"];
        classoid: PgCatalog.Types.PgShdescription["classoid"];
        description: PgCatalog.Types.PgShdescription["description"];
      };
      export type ByObjoidClassoid = {
        objoid: PgCatalog.Types.Oid;
        classoid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByObjoidClassoid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace PgTsConfig {
      export type Record = {
        oid: PgCatalog.Types.PgTsConfig["oid"];
        cfgname: PgCatalog.Types.PgTsConfig["cfgname"];
        cfgnamespace: PgCatalog.Types.PgTsConfig["cfgnamespace"];
        cfgowner: PgCatalog.Types.PgTsConfig["cfgowner"];
        cfgparser: PgCatalog.Types.PgTsConfig["cfgparser"];
      };
      export type ByCfgnameCfgnamespace = {
        cfgname: PgCatalog.Types.Cstring;
        cfgnamespace: PgCatalog.Types.Oid;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace PgTsConfigMap {
      export type Record = {
        mapcfg: PgCatalog.Types.PgTsConfigMap["mapcfg"];
        maptokentype: PgCatalog.Types.PgTsConfigMap["maptokentype"];
        mapseqno: PgCatalog.Types.PgTsConfigMap["mapseqno"];
        mapdict: PgCatalog.Types.PgTsConfigMap["mapdict"];
      };
      export type ByMapcfgMaptokentypeMapseqno = {
        mapcfg: PgCatalog.Types.Oid;
        maptokentype: PgCatalog.Types.Int4;
        mapseqno: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByMapcfgMaptokentypeMapseqno;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type ByDictnameDictnamespace = {
        dictname: PgCatalog.Types.Cstring;
        dictnamespace: PgCatalog.Types.Oid;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type ByPrsnamePrsnamespace = {
        prsname: PgCatalog.Types.Cstring;
        prsnamespace: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace PgTsTemplate {
      export type Record = {
        oid: PgCatalog.Types.PgTsTemplate["oid"];
        tmplname: PgCatalog.Types.PgTsTemplate["tmplname"];
        tmplnamespace: PgCatalog.Types.PgTsTemplate["tmplnamespace"];
        tmplinit: PgCatalog.Types.PgTsTemplate["tmplinit"];
        tmpllexize: PgCatalog.Types.PgTsTemplate["tmpllexize"];
      };
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type ByTmplnameTmplnamespace = {
        tmplname: PgCatalog.Types.Cstring;
        tmplnamespace: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type ByExtname = {
        extname: PgCatalog.Types.Cstring;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type ByFdwname = {
        fdwname: PgCatalog.Types.Cstring;
      };

      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type BySrvname = {
        srvname: PgCatalog.Types.Cstring;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type ByPolrelidPolname = {
        polrelid: PgCatalog.Types.Oid;
        polname: PgCatalog.Types.Cstring;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace PgReplicationOrigin {
      export type Record = {
        roident: PgCatalog.Types.PgReplicationOrigin["roident"];
        roname: PgCatalog.Types.PgReplicationOrigin["roname"];
      };
      export type ByRoident = {
        roident: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByRoident;
      export type ByRoname = {
        roname: PgCatalog.Types.Text;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace PgDefaultAcl {
      export type Record = {
        oid: PgCatalog.Types.PgDefaultAcl["oid"];
        defaclrole: PgCatalog.Types.PgDefaultAcl["defaclrole"];
        defaclnamespace: PgCatalog.Types.PgDefaultAcl["defaclnamespace"];
        defaclobjtype: PgCatalog.Types.PgDefaultAcl["defaclobjtype"];
        defaclacl: PgCatalog.Types.PgDefaultAcl["defaclacl"];
      };
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
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace PgInitPrivs {
      export type Record = {
        objoid: PgCatalog.Types.PgInitPrivs["objoid"];
        classoid: PgCatalog.Types.PgInitPrivs["classoid"];
        objsubid: PgCatalog.Types.PgInitPrivs["objsubid"];
        privtype: PgCatalog.Types.PgInitPrivs["privtype"];
        initprivs: PgCatalog.Types.PgInitPrivs["initprivs"];
      };
      export type ByObjoidClassoidObjsubid = {
        objoid: PgCatalog.Types.Oid;
        classoid: PgCatalog.Types.Oid;
        objsubid: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByObjoidClassoidObjsubid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace PgSeclabel {
      export type Record = {
        objoid: PgCatalog.Types.PgSeclabel["objoid"];
        classoid: PgCatalog.Types.PgSeclabel["classoid"];
        objsubid: PgCatalog.Types.PgSeclabel["objsubid"];
        provider: PgCatalog.Types.PgSeclabel["provider"];
        label: PgCatalog.Types.PgSeclabel["label"];
      };
      export type ByObjoidClassoidObjsubidProvider = {
        objoid: PgCatalog.Types.Oid;
        classoid: PgCatalog.Types.Oid;
        objsubid: PgCatalog.Types.Int4;
        provider: PgCatalog.Types.Text;
      };
      export type PrimaryKey = ByObjoidClassoidObjsubidProvider;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace PgShseclabel {
      export type Record = {
        objoid: PgCatalog.Types.PgShseclabel["objoid"];
        classoid: PgCatalog.Types.PgShseclabel["classoid"];
        provider: PgCatalog.Types.PgShseclabel["provider"];
        label: PgCatalog.Types.PgShseclabel["label"];
      };
      export type ByObjoidClassoidProvider = {
        objoid: PgCatalog.Types.Oid;
        classoid: PgCatalog.Types.Oid;
        provider: PgCatalog.Types.Text;
      };
      export type PrimaryKey = ByObjoidClassoidProvider;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace PgParameterAcl {
      export type Record = {
        oid: PgCatalog.Types.PgParameterAcl["oid"];
        parname: PgCatalog.Types.PgParameterAcl["parname"];
        paracl: PgCatalog.Types.PgParameterAcl["paracl"] | null;
      };
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type ByParname = {
        parname: PgCatalog.Types.Text;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type ByPartrelid = {
        partrelid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByPartrelid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type ByRngmultitypid = {
        rngmultitypid: PgCatalog.Types.Oid;
      };

      export type ByRngtypid = {
        rngtypid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByRngtypid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace PgTransform {
      export type Record = {
        oid: PgCatalog.Types.PgTransform["oid"];
        trftype: PgCatalog.Types.PgTransform["trftype"];
        trflang: PgCatalog.Types.PgTransform["trflang"];
        trffromsql: PgCatalog.Types.PgTransform["trffromsql"];
        trftosql: PgCatalog.Types.PgTransform["trftosql"];
      };
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type ByTrftypeTrflang = {
        trftype: PgCatalog.Types.Oid;
        trflang: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type BySeqrelid = {
        seqrelid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = BySeqrelid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type ByPubname = {
        pubname: PgCatalog.Types.Cstring;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace PgPublicationNamespace {
      export type Record = {
        oid: PgCatalog.Types.PgPublicationNamespace["oid"];
        pnpubid: PgCatalog.Types.PgPublicationNamespace["pnpubid"];
        pnnspid: PgCatalog.Types.PgPublicationNamespace["pnnspid"];
      };
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = ByOid;
      export type ByPnnspidPnpubid = {
        pnnspid: PgCatalog.Types.Oid;
        pnpubid: PgCatalog.Types.Oid;
      };

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace PgPublicationRel {
      export type Record = {
        oid: PgCatalog.Types.PgPublicationRel["oid"];
        prpubid: PgCatalog.Types.PgPublicationRel["prpubid"];
        prrelid: PgCatalog.Types.PgPublicationRel["prrelid"];
        prqual: PgCatalog.Types.PgPublicationRel["prqual"] | null;
        prattrs: PgCatalog.Types.PgPublicationRel["prattrs"] | null;
      };
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
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace PgSubscriptionRel {
      export type Record = {
        srsubid: PgCatalog.Types.PgSubscriptionRel["srsubid"];
        srrelid: PgCatalog.Types.PgSubscriptionRel["srrelid"];
        srsubstate: PgCatalog.Types.PgSubscriptionRel["srsubstate"];
        srsublsn: PgCatalog.Types.PgSubscriptionRel["srsublsn"] | null;
      };
      export type BySrrelidSrsubid = {
        srrelid: PgCatalog.Types.Oid;
        srsubid: PgCatalog.Types.Oid;
      };
      export type PrimaryKey = BySrrelidSrsubid;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace PgLargeobject {
      export type Record = {
        loid: PgCatalog.Types.PgLargeobject["loid"];
        pageno: PgCatalog.Types.PgLargeobject["pageno"];
        data: PgCatalog.Types.PgLargeobject["data"];
      };
      export type ByLoidPageno = {
        loid: PgCatalog.Types.Oid;
        pageno: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByLoidPageno;

      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type ByActorIdFilmId = {
        actorId: PgCatalog.Types.Int2;
        filmId: PgCatalog.Types.Int2;
      };
      export type PrimaryKey = ByActorIdFilmId;
      export type ByFilmId = {
        filmId: PgCatalog.Types.Int2;
      };

      export type Optional = Pick<Record, "lastUpdate">;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type ByAddressId = {
        addressId: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByAddressId;
      export type ByCityId = {
        cityId: PgCatalog.Types.Int2;
      };

      export type Optional = Pick<Record, "addressId" | "lastUpdate">;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace City {
      export type Record = {
        cityId: Public.Types.City["cityId"];
        city: Public.Types.City["city"];
        countryId: Public.Types.City["countryId"];
        lastUpdate: Public.Types.City["lastUpdate"];
      };
      export type ByCityId = {
        cityId: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByCityId;
      export type ByCountryId = {
        countryId: PgCatalog.Types.Int2;
      };

      export type Optional = Pick<Record, "cityId" | "lastUpdate">;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace Actor {
      export type Record = {
        actorId: Public.Types.Actor["actorId"];
        firstName: Public.Types.Actor["firstName"];
        lastName: Public.Types.Actor["lastName"];
        lastUpdate: Public.Types.Actor["lastUpdate"];
      };
      export type ByActorId = {
        actorId: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByActorId;
      export type ByLastName = {
        lastName: PgCatalog.Types.Varchar;
      };

      export type Optional = Pick<Record, "actorId" | "lastUpdate">;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace FilmCategory {
      export type Record = {
        filmId: Public.Types.FilmCategory["filmId"];
        categoryId: Public.Types.FilmCategory["categoryId"];
        lastUpdate: Public.Types.FilmCategory["lastUpdate"];
      };
      export type ByFilmIdCategoryId = {
        filmId: PgCatalog.Types.Int2;
        categoryId: PgCatalog.Types.Int2;
      };
      export type PrimaryKey = ByFilmIdCategoryId;

      export type Optional = Pick<Record, "lastUpdate">;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace Inventory {
      export type Record = {
        inventoryId: Public.Types.Inventory["inventoryId"];
        filmId: Public.Types.Inventory["filmId"];
        storeId: Public.Types.Inventory["storeId"];
        lastUpdate: Public.Types.Inventory["lastUpdate"];
      };
      export type ByInventoryId = {
        inventoryId: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByInventoryId;
      export type ByStoreIdFilmId = {
        storeId: PgCatalog.Types.Int2;
        filmId: PgCatalog.Types.Int2;
      };

      export type Optional = Pick<Record, "inventoryId" | "lastUpdate">;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace Category {
      export type Record = {
        categoryId: Public.Types.Category["categoryId"];
        name: Public.Types.Category["name"];
        lastUpdate: Public.Types.Category["lastUpdate"];
      };
      export type ByCategoryId = {
        categoryId: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByCategoryId;

      export type Optional = Pick<Record, "categoryId" | "lastUpdate">;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace Country {
      export type Record = {
        countryId: Public.Types.Country["countryId"];
        country: Public.Types.Country["country"];
        lastUpdate: Public.Types.Country["lastUpdate"];
      };
      export type ByCountryId = {
        countryId: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByCountryId;

      export type Optional = Pick<Record, "countryId" | "lastUpdate">;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace Language {
      export type Record = {
        languageId: Public.Types.Language["languageId"];
        name: Public.Types.Language["name"];
        lastUpdate: Public.Types.Language["lastUpdate"];
      };
      export type ByLanguageId = {
        languageId: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByLanguageId;

      export type Optional = Pick<Record, "languageId" | "lastUpdate">;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type ByStaffId = {
        staffId: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByStaffId;

      export type Optional = Pick<Record, "staffId" | "active" | "lastUpdate">;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace Store {
      export type Record = {
        storeId: Public.Types.Store["storeId"];
        managerStaffId: Public.Types.Store["managerStaffId"];
        addressId: Public.Types.Store["addressId"];
        lastUpdate: Public.Types.Store["lastUpdate"];
      };
      export type ByManagerStaffId = {
        managerStaffId: PgCatalog.Types.Int2;
      };

      export type ByStoreId = {
        storeId: PgCatalog.Types.Int4;
      };
      export type PrimaryKey = ByStoreId;

      export type Optional = Pick<Record, "storeId" | "lastUpdate">;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type PrimaryKey = never;
      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type PrimaryKey = never;
      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
    export namespace SqlParts {
      export type Record = {
        featureId: InformationSchema.Types.SqlParts["featureId"] | null;
        featureName: InformationSchema.Types.SqlParts["featureName"] | null;
        isSupported: InformationSchema.Types.SqlParts["isSupported"] | null;
        isVerifiedBy: InformationSchema.Types.SqlParts["isVerifiedBy"] | null;
        comments: InformationSchema.Types.SqlParts["comments"] | null;
      };
      export type PrimaryKey = never;
      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
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
      export type PrimaryKey = never;
      export type Optional = Pick<Record, never>;
      export type Values = PartiallyOptional<Record, Optional & PrimaryKey>;
    }
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
      export namespace Create {}
    }
    export namespace Address {
      export namespace Create {}
    }
    export namespace City {
      export namespace Create {}
    }
    export namespace Customer {
      export namespace Create {}
    }
    export namespace Actor {
      export namespace Create {}
    }
    export namespace FilmCategory {
      export namespace Create {}
    }
    export namespace Inventory {
      export namespace Create {}
    }
    export namespace Category {
      export namespace Create {}
    }
    export namespace Country {
      export namespace Create {}
    }
    export namespace Language {
      export namespace Create {}
    }
    export namespace Rental {
      export namespace Create {}
    }
    export namespace Staff {
      export namespace Create {}
    }
    export namespace Store {
      export namespace Create {}
    }
    export namespace Payment {
      export namespace Create {}
    }
    export namespace Film {
      export namespace Create {}
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

// BEGIN - Node side database connectivity layer
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
  [25176]: Typecast;
  ["Public.Types.ActorArray"]: Typecast;
  [25207]: Typecast;
  ["Public.Types.ActorInfoArray"]: Typecast;
  [25213]: Typecast;
  ["Public.Types.AddressArray"]: Typecast;
  [25182]: Typecast;
  ["Public.Types.CategoryArray"]: Typecast;
  [25219]: Typecast;
  ["Public.Types.CityArray"]: Typecast;
  [25225]: Typecast;
  ["Public.Types.CountryArray"]: Typecast;
  [25166]: Typecast;
  ["Public.Types.CustomerArray"]: Typecast;
  [25230]: Typecast;
  ["Public.Types.CustomerListArray"]: Typecast;
  [25188]: Typecast;
  ["Public.Types.FilmArray"]: Typecast;
  [25199]: Typecast;
  ["Public.Types.FilmActorArray"]: Typecast;
  [25203]: Typecast;
  ["Public.Types.FilmCategoryArray"]: Typecast;
  [25235]: Typecast;
  ["Public.Types.FilmListArray"]: Typecast;
  [25241]: Typecast;
  ["Public.Types.InventoryArray"]: Typecast;
  [25247]: Typecast;
  ["Public.Types.LanguageArray"]: Typecast;
  [25142]: Typecast;
  ["Public.Types.MpaaRatingArray"]: Typecast;
  [25252]: Typecast;
  ["Public.Types.NicerButSlowerFilmListArray"]: Typecast;
  [25258]: Typecast;
  ["Public.Types.PaymentArray"]: Typecast;
  [25263]: Typecast;
  ["Public.Types.RentalArray"]: Typecast;
  [25268]: Typecast;
  ["Public.Types.SalesByFilmCategoryArray"]: Typecast;
  [25288]: Typecast;
  ["Public.Types.SalesByStoreArray"]: Typecast;
  [25274]: Typecast;
  ["Public.Types.StaffArray"]: Typecast;
  [25293]: Typecast;
  ["Public.Types.StaffListArray"]: Typecast;
  [25283]: Typecast;
  ["Public.Types.StoreArray"]: Typecast;
  [25153]: Typecast;
  ["Public.Types.YearArray"]: Typecast;
  [25177]: Typecast;
  ["Public.Types.Actor"]: Typecast;
  [25208]: Typecast;
  ["Public.Types.ActorInfo"]: Typecast;
  [25214]: Typecast;
  ["Public.Types.Address"]: Typecast;
  [25183]: Typecast;
  ["Public.Types.Category"]: Typecast;
  [25220]: Typecast;
  ["Public.Types.City"]: Typecast;
  [25226]: Typecast;
  ["Public.Types.Country"]: Typecast;
  [25167]: Typecast;
  ["Public.Types.Customer"]: Typecast;
  [25231]: Typecast;
  ["Public.Types.CustomerList"]: Typecast;
  [25189]: Typecast;
  ["Public.Types.Film"]: Typecast;
  [25200]: Typecast;
  ["Public.Types.FilmActor"]: Typecast;
  [25204]: Typecast;
  ["Public.Types.FilmCategory"]: Typecast;
  [25236]: Typecast;
  ["Public.Types.FilmList"]: Typecast;
  [25242]: Typecast;
  ["Public.Types.Inventory"]: Typecast;
  [25248]: Typecast;
  ["Public.Types.Language"]: Typecast;
  [25143]: Typecast;
  ["Public.Types.MpaaRating"]: Typecast;
  [25253]: Typecast;
  ["Public.Types.NicerButSlowerFilmList"]: Typecast;
  [25259]: Typecast;
  ["Public.Types.Payment"]: Typecast;
  [25264]: Typecast;
  ["Public.Types.Rental"]: Typecast;
  [25269]: Typecast;
  ["Public.Types.SalesByFilmCategory"]: Typecast;
  [25289]: Typecast;
  ["Public.Types.SalesByStore"]: Typecast;
  [25275]: Typecast;
  ["Public.Types.Staff"]: Typecast;
  [25294]: Typecast;
  ["Public.Types.StaffList"]: Typecast;
  [25284]: Typecast;
  ["Public.Types.Store"]: Typecast;
  [25154]: Typecast;
  ["Public.Types.Year"]: Typecast;
  [25157]: Typecast;
  ["Public.Types.FilmInStockResults"]: Typecast;
  [25158]: Typecast;
  ["Public.Types.FilmNotInStockResults"]: Typecast;

  ["Public.Procedures.FilmInStock.Parameters"]: Typecast;

  ["Public.Procedures.FilmNotInStock.Parameters"]: Typecast;

  ["Public.Procedures.GetCustomerBalance.Parameters"]: Typecast;

  ["Public.Procedures.InventoryHeldByCustomer.Parameters"]: Typecast;

  ["Public.Procedures.InventoryInStock.Parameters"]: Typecast;

  ["Public.Procedures.LastDay.Parameters"]: Typecast;

  ["Public.Procedures.RewardsReport.Parameters"]: Typecast;
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

      async filmInStock(parameters: Public.Procedures.FilmInStock.Parameters) {
        const parseResult = (
          context: Context,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          result: any,
        ) => {
          return context.procTypes[25157].parseFromPostgresIfRecord(
            context,
            result,
          ) as unknown as Public.Types.FilmInStockResults;
        };

        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;
        const response = await sql`
                  SELECT
                  public.film_in_stock(p_film_id => ${typed[23](
                    undefinedIsNull(parameters.pFilmId),
                  )},p_store_id => ${typed[23](
                    undefinedIsNull(parameters.pStoreId),
                  )})`;
        const results = response;
        const responseBody = results.map((x) =>
          parseResult(this.database.context, x.film_in_stock),
        ) as unknown as Public.Types.FilmInStockResults[];
        return responseBody;
      }
      async filmNotInStock(
        parameters: Public.Procedures.FilmNotInStock.Parameters,
      ) {
        const parseResult = (
          context: Context,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          result: any,
        ) => {
          return context.procTypes[25158].parseFromPostgresIfRecord(
            context,
            result,
          ) as unknown as Public.Types.FilmNotInStockResults;
        };

        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;
        const response = await sql`
                  SELECT
                  public.film_not_in_stock(p_film_id => ${typed[23](
                    undefinedIsNull(parameters.pFilmId),
                  )},p_store_id => ${typed[23](
                    undefinedIsNull(parameters.pStoreId),
                  )})`;
        const results = response;
        const responseBody = results.map((x) =>
          parseResult(this.database.context, x.film_not_in_stock),
        ) as unknown as Public.Types.FilmNotInStockResults[];
        return responseBody;
      }
      async getCustomerBalance(
        parameters: Public.Procedures.GetCustomerBalance.Parameters,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;
        const response = await sql`
                  SELECT
                  public.get_customer_balance(p_customer_id => ${typed[23](
                    undefinedIsNull(parameters.pCustomerId),
                  )},p_effective_date => ${typed[1114](
                    undefinedIsNull(parameters.pEffectiveDate),
                  )})`;
        const results = response;
        const responseBody = results?.[0]
          .get_customer_balance as unknown as PgCatalog.Types.Numeric;
        return responseBody;
      }
      async inventoryHeldByCustomer(
        parameters: Public.Procedures.InventoryHeldByCustomer.Parameters,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;
        const response = await sql`
                  SELECT
                  public.inventory_held_by_customer(p_inventory_id => ${typed[23](
                    undefinedIsNull(parameters.pInventoryId),
                  )})`;
        const results = response;
        const responseBody = results?.[0]
          .inventory_held_by_customer as unknown as PgCatalog.Types.Int4;
        return responseBody;
      }
      async inventoryInStock(
        parameters: Public.Procedures.InventoryInStock.Parameters,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;
        const response = await sql`
                  SELECT
                  public.inventory_in_stock(p_inventory_id => ${typed[23](
                    undefinedIsNull(parameters.pInventoryId),
                  )})`;
        const results = response;
        const responseBody = results?.[0]
          .inventory_in_stock as unknown as PgCatalog.Types.Bool;
        return responseBody;
      }
      async lastDay(parameters: Public.Procedures.LastDay.Parameters) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;
        const response = await sql`
                  SELECT
                  public.last_day( ${typed[1114](
                    undefinedIsNull(parameters.argument_0),
                  )})`;
        const results = response;
        const responseBody = results?.[0]
          .last_day as unknown as PgCatalog.Types.Date;
        return responseBody;
      }
      async rewardsReport(
        parameters: Public.Procedures.RewardsReport.Parameters,
      ) {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;
        const response = await sql`
                  SELECT
                  public.rewards_report(min_monthly_purchases => ${typed[23](
                    undefinedIsNull(parameters.minMonthlyPurchases),
                  )},min_dollar_amount_purchased => ${typed[1700](
                    undefinedIsNull(parameters.minDollarAmountPurchased),
                  )})`;
        const results = response;
        const responseBody = results.map(
          (x) => x.rewards_report,
        ) as unknown as Public.Types.Customer[];
        return responseBody;
      }
    })(this);

    public Tables = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      public FilmActor = new (class implements HasDatabase {
        constructor(private hasDatabase: HasDatabase) {}

        get database() {
          return this.hasDatabase.database;
        }

        async create(
          values: Public.Tables.FilmActor.Values,
        ): Promise<Public.Tables.FilmActor.Record> {
          const sql = this.database.context.sql;
          const typed = sql.typed as unknown as PostgresTypecasts;

          const response = await sql`
    INSERT INTO
      public.film_actor (actor_id,film_id,last_update)
    VALUES (${
      values.actorId === undefined ? sql`DEFAULT` : typed[21](values.actorId)
    },${
      values.filmId === undefined ? sql`DEFAULT` : typed[21](values.filmId)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed[1114](values.lastUpdate)
    })
    ON CONFLICT (actor_id,film_id) DO UPDATE
    SET
      last_update = EXCLUDED.last_update
    RETURNING
      actor_id,film_id,last_update
    `;
          return response.map((record) => ({
            actorId: undefinedIsNull(record.actor_id),
            filmId: undefinedIsNull(record.film_id),
            lastUpdate: undefinedIsNull(record.last_update),
          }))[0];
        }

        public ByActorIdFilmId = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.FilmActor.ByActorIdFilmId,
          ): Promise<Public.Tables.FilmActor.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      actor_id,film_id,last_update 
    FROM
      public.film_actor 
    WHERE
      actor_id = ${
        parameters.actorId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.actorId)
      } AND film_id = ${
        parameters.filmId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.filmId)
      }
    `;
            return response.map((record) => ({
              actorId: undefinedIsNull(record.actor_id),
              filmId: undefinedIsNull(record.film_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }

          async update(
            parameters: Public.Tables.FilmActor.ByActorIdFilmId,
            values: Partial<Public.Tables.FilmActor.Values>,
          ): Promise<Public.Tables.FilmActor.Record> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.film_actor 
    SET
      actor_id = ${
        values.actorId === undefined ? sql`actor_id` : typed[21](values.actorId)
      } , film_id = ${
        values.filmId === undefined ? sql`film_id` : typed[21](values.filmId)
      } , last_update = ${
        values.lastUpdate === undefined
          ? sql`last_update`
          : typed[1114](values.lastUpdate)
      } 
    WHERE
      actor_id = ${
        parameters.actorId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.actorId)
      } AND film_id = ${
        parameters.filmId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.filmId)
      }
    RETURNING actor_id,film_id,last_update`;
            return response.map((record) => ({
              actorId: undefinedIsNull(record.actor_id),
              filmId: undefinedIsNull(record.film_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }

          async delete(
            parameters: Public.Tables.FilmActor.ByActorIdFilmId,
          ): Promise<Public.Tables.FilmActor.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.film_actor 
    WHERE
      actor_id = ${
        parameters.actorId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.actorId)
      } AND film_id = ${
        parameters.filmId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.filmId)
      }
    RETURNING actor_id,film_id,last_update`;
            return response.map((record) => ({
              actorId: undefinedIsNull(record.actor_id),
              filmId: undefinedIsNull(record.film_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }
        })(this);

        public ByFilmId = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.FilmActor.ByFilmId,
          ): Promise<Public.Tables.FilmActor.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      actor_id,film_id,last_update 
    FROM
      public.film_actor 
    WHERE
      film_id = ${
        parameters.filmId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.filmId)
      }
    `;
            return response.map((record) => ({
              actorId: undefinedIsNull(record.actor_id),
              filmId: undefinedIsNull(record.film_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }));
          }

          async update(
            parameters: Public.Tables.FilmActor.ByFilmId,
            values: Partial<Public.Tables.FilmActor.Values>,
          ): Promise<Public.Tables.FilmActor.Record[]> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.film_actor 
    SET
      actor_id = ${
        values.actorId === undefined ? sql`actor_id` : typed[21](values.actorId)
      } , film_id = ${
        values.filmId === undefined ? sql`film_id` : typed[21](values.filmId)
      } , last_update = ${
        values.lastUpdate === undefined
          ? sql`last_update`
          : typed[1114](values.lastUpdate)
      } 
    WHERE
      film_id = ${
        parameters.filmId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.filmId)
      }
    RETURNING actor_id,film_id,last_update`;
            return response.map((record) => ({
              actorId: undefinedIsNull(record.actor_id),
              filmId: undefinedIsNull(record.film_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }));
          }

          async delete(
            parameters: Public.Tables.FilmActor.ByFilmId,
          ): Promise<Public.Tables.FilmActor.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.film_actor 
    WHERE
      film_id = ${
        parameters.filmId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.filmId)
      }
    RETURNING actor_id,film_id,last_update`;
            return response.map((record) => ({
              actorId: undefinedIsNull(record.actor_id),
              filmId: undefinedIsNull(record.film_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }));
          }
        })(this);
      })(this);

      public Address = new (class implements HasDatabase {
        constructor(private hasDatabase: HasDatabase) {}

        get database() {
          return this.hasDatabase.database;
        }

        async create(
          values: Public.Tables.Address.Values,
        ): Promise<Public.Tables.Address.Record> {
          const sql = this.database.context.sql;
          const typed = sql.typed as unknown as PostgresTypecasts;

          if (!Public.Tables.Address.includesPrimaryKey(values)) {
            const response = await sql`
      --
      INSERT INTO
        public.address (address,address2,district,city_id,postal_code,phone,last_update)
      VALUES (${
        values.address === undefined
          ? sql`DEFAULT`
          : typed[1043](values.address)
      },${
        values.address2 === undefined
          ? sql`DEFAULT`
          : typed[1043](values.address2)
      },${
        values.district === undefined
          ? sql`DEFAULT`
          : typed[1043](values.district)
      },${
        values.cityId === undefined ? sql`DEFAULT` : typed[21](values.cityId)
      },${
        values.postalCode === undefined
          ? sql`DEFAULT`
          : typed[1043](values.postalCode)
      },${
        values.phone === undefined ? sql`DEFAULT` : typed[1043](values.phone)
      },${
        values.lastUpdate === undefined
          ? sql`DEFAULT`
          : typed[1114](values.lastUpdate)
      })
      RETURNING
        address_id,address,address2,district,city_id,postal_code,phone,last_update
    `;
            return response.map((record) => ({
              addressId: undefinedIsNull(record.address_id),
              address: undefinedIsNull(record.address),
              address2: undefinedIsNull(record.address2),
              district: undefinedIsNull(record.district),
              cityId: undefinedIsNull(record.city_id),
              postalCode: undefinedIsNull(record.postal_code),
              phone: undefinedIsNull(record.phone),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }
          const response = await sql`
    INSERT INTO
      public.address (address_id,address,address2,district,city_id,postal_code,phone,last_update)
    VALUES (${
      values.addressId === undefined
        ? sql`DEFAULT`
        : typed[23](values.addressId)
    },${
      values.address === undefined ? sql`DEFAULT` : typed[1043](values.address)
    },${
      values.address2 === undefined
        ? sql`DEFAULT`
        : typed[1043](values.address2)
    },${
      values.district === undefined
        ? sql`DEFAULT`
        : typed[1043](values.district)
    },${
      values.cityId === undefined ? sql`DEFAULT` : typed[21](values.cityId)
    },${
      values.postalCode === undefined
        ? sql`DEFAULT`
        : typed[1043](values.postalCode)
    },${
      values.phone === undefined ? sql`DEFAULT` : typed[1043](values.phone)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed[1114](values.lastUpdate)
    })
    ON CONFLICT (address_id) DO UPDATE
    SET
      address = EXCLUDED.address,address2 = EXCLUDED.address2,district = EXCLUDED.district,city_id = EXCLUDED.city_id,postal_code = EXCLUDED.postal_code,phone = EXCLUDED.phone,last_update = EXCLUDED.last_update
    RETURNING
      address_id,address,address2,district,city_id,postal_code,phone,last_update
    `;
          return response.map((record) => ({
            addressId: undefinedIsNull(record.address_id),
            address: undefinedIsNull(record.address),
            address2: undefinedIsNull(record.address2),
            district: undefinedIsNull(record.district),
            cityId: undefinedIsNull(record.city_id),
            postalCode: undefinedIsNull(record.postal_code),
            phone: undefinedIsNull(record.phone),
            lastUpdate: undefinedIsNull(record.last_update),
          }))[0];
        }

        public ByAddressId = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.Address.ByAddressId,
          ): Promise<Public.Tables.Address.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      address_id,address,address2,district,city_id,postal_code,phone,last_update 
    FROM
      public.address 
    WHERE
      address_id = ${
        parameters.addressId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.addressId)
      }
    `;
            return response.map((record) => ({
              addressId: undefinedIsNull(record.address_id),
              address: undefinedIsNull(record.address),
              address2: undefinedIsNull(record.address2),
              district: undefinedIsNull(record.district),
              cityId: undefinedIsNull(record.city_id),
              postalCode: undefinedIsNull(record.postal_code),
              phone: undefinedIsNull(record.phone),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }

          async update(
            parameters: Public.Tables.Address.ByAddressId,
            values: Partial<Public.Tables.Address.Values>,
          ): Promise<Public.Tables.Address.Record> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.address 
    SET
      address_id = ${
        values.addressId === undefined
          ? sql`address_id`
          : typed[23](values.addressId)
      } , address = ${
        values.address === undefined
          ? sql`address`
          : typed[1043](values.address)
      } , address2 = ${
        values.address2 === undefined
          ? sql`address2`
          : typed[1043](values.address2)
      } , district = ${
        values.district === undefined
          ? sql`district`
          : typed[1043](values.district)
      } , city_id = ${
        values.cityId === undefined ? sql`city_id` : typed[21](values.cityId)
      } , postal_code = ${
        values.postalCode === undefined
          ? sql`postal_code`
          : typed[1043](values.postalCode)
      } , phone = ${
        values.phone === undefined ? sql`phone` : typed[1043](values.phone)
      } , last_update = ${
        values.lastUpdate === undefined
          ? sql`last_update`
          : typed[1114](values.lastUpdate)
      } 
    WHERE
      address_id = ${
        parameters.addressId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.addressId)
      }
    RETURNING address_id,address,address2,district,city_id,postal_code,phone,last_update`;
            return response.map((record) => ({
              addressId: undefinedIsNull(record.address_id),
              address: undefinedIsNull(record.address),
              address2: undefinedIsNull(record.address2),
              district: undefinedIsNull(record.district),
              cityId: undefinedIsNull(record.city_id),
              postalCode: undefinedIsNull(record.postal_code),
              phone: undefinedIsNull(record.phone),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }

          async delete(
            parameters: Public.Tables.Address.ByAddressId,
          ): Promise<Public.Tables.Address.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.address 
    WHERE
      address_id = ${
        parameters.addressId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.addressId)
      }
    RETURNING address_id,address,address2,district,city_id,postal_code,phone,last_update`;
            return response.map((record) => ({
              addressId: undefinedIsNull(record.address_id),
              address: undefinedIsNull(record.address),
              address2: undefinedIsNull(record.address2),
              district: undefinedIsNull(record.district),
              cityId: undefinedIsNull(record.city_id),
              postalCode: undefinedIsNull(record.postal_code),
              phone: undefinedIsNull(record.phone),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }
        })(this);

        public ByCityId = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.Address.ByCityId,
          ): Promise<Public.Tables.Address.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      address_id,address,address2,district,city_id,postal_code,phone,last_update 
    FROM
      public.address 
    WHERE
      city_id = ${
        parameters.cityId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.cityId)
      }
    `;
            return response.map((record) => ({
              addressId: undefinedIsNull(record.address_id),
              address: undefinedIsNull(record.address),
              address2: undefinedIsNull(record.address2),
              district: undefinedIsNull(record.district),
              cityId: undefinedIsNull(record.city_id),
              postalCode: undefinedIsNull(record.postal_code),
              phone: undefinedIsNull(record.phone),
              lastUpdate: undefinedIsNull(record.last_update),
            }));
          }

          async update(
            parameters: Public.Tables.Address.ByCityId,
            values: Partial<Public.Tables.Address.Values>,
          ): Promise<Public.Tables.Address.Record[]> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.address 
    SET
      address_id = ${
        values.addressId === undefined
          ? sql`address_id`
          : typed[23](values.addressId)
      } , address = ${
        values.address === undefined
          ? sql`address`
          : typed[1043](values.address)
      } , address2 = ${
        values.address2 === undefined
          ? sql`address2`
          : typed[1043](values.address2)
      } , district = ${
        values.district === undefined
          ? sql`district`
          : typed[1043](values.district)
      } , city_id = ${
        values.cityId === undefined ? sql`city_id` : typed[21](values.cityId)
      } , postal_code = ${
        values.postalCode === undefined
          ? sql`postal_code`
          : typed[1043](values.postalCode)
      } , phone = ${
        values.phone === undefined ? sql`phone` : typed[1043](values.phone)
      } , last_update = ${
        values.lastUpdate === undefined
          ? sql`last_update`
          : typed[1114](values.lastUpdate)
      } 
    WHERE
      city_id = ${
        parameters.cityId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.cityId)
      }
    RETURNING address_id,address,address2,district,city_id,postal_code,phone,last_update`;
            return response.map((record) => ({
              addressId: undefinedIsNull(record.address_id),
              address: undefinedIsNull(record.address),
              address2: undefinedIsNull(record.address2),
              district: undefinedIsNull(record.district),
              cityId: undefinedIsNull(record.city_id),
              postalCode: undefinedIsNull(record.postal_code),
              phone: undefinedIsNull(record.phone),
              lastUpdate: undefinedIsNull(record.last_update),
            }));
          }

          async delete(
            parameters: Public.Tables.Address.ByCityId,
          ): Promise<Public.Tables.Address.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.address 
    WHERE
      city_id = ${
        parameters.cityId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.cityId)
      }
    RETURNING address_id,address,address2,district,city_id,postal_code,phone,last_update`;
            return response.map((record) => ({
              addressId: undefinedIsNull(record.address_id),
              address: undefinedIsNull(record.address),
              address2: undefinedIsNull(record.address2),
              district: undefinedIsNull(record.district),
              cityId: undefinedIsNull(record.city_id),
              postalCode: undefinedIsNull(record.postal_code),
              phone: undefinedIsNull(record.phone),
              lastUpdate: undefinedIsNull(record.last_update),
            }));
          }
        })(this);
      })(this);

      public City = new (class implements HasDatabase {
        constructor(private hasDatabase: HasDatabase) {}

        get database() {
          return this.hasDatabase.database;
        }

        async create(
          values: Public.Tables.City.Values,
        ): Promise<Public.Tables.City.Record> {
          const sql = this.database.context.sql;
          const typed = sql.typed as unknown as PostgresTypecasts;

          if (!Public.Tables.City.includesPrimaryKey(values)) {
            const response = await sql`
      --
      INSERT INTO
        public.city (city,country_id,last_update)
      VALUES (${
        values.city === undefined ? sql`DEFAULT` : typed[1043](values.city)
      },${
        values.countryId === undefined
          ? sql`DEFAULT`
          : typed[21](values.countryId)
      },${
        values.lastUpdate === undefined
          ? sql`DEFAULT`
          : typed[1114](values.lastUpdate)
      })
      RETURNING
        city_id,city,country_id,last_update
    `;
            return response.map((record) => ({
              cityId: undefinedIsNull(record.city_id),
              city: undefinedIsNull(record.city),
              countryId: undefinedIsNull(record.country_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }
          const response = await sql`
    INSERT INTO
      public.city (city_id,city,country_id,last_update)
    VALUES (${
      values.cityId === undefined ? sql`DEFAULT` : typed[23](values.cityId)
    },${values.city === undefined ? sql`DEFAULT` : typed[1043](values.city)},${
      values.countryId === undefined
        ? sql`DEFAULT`
        : typed[21](values.countryId)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed[1114](values.lastUpdate)
    })
    ON CONFLICT (city_id) DO UPDATE
    SET
      city = EXCLUDED.city,country_id = EXCLUDED.country_id,last_update = EXCLUDED.last_update
    RETURNING
      city_id,city,country_id,last_update
    `;
          return response.map((record) => ({
            cityId: undefinedIsNull(record.city_id),
            city: undefinedIsNull(record.city),
            countryId: undefinedIsNull(record.country_id),
            lastUpdate: undefinedIsNull(record.last_update),
          }))[0];
        }

        public ByCityId = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.City.ByCityId,
          ): Promise<Public.Tables.City.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      city_id,city,country_id,last_update 
    FROM
      public.city 
    WHERE
      city_id = ${
        parameters.cityId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.cityId)
      }
    `;
            return response.map((record) => ({
              cityId: undefinedIsNull(record.city_id),
              city: undefinedIsNull(record.city),
              countryId: undefinedIsNull(record.country_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }

          async update(
            parameters: Public.Tables.City.ByCityId,
            values: Partial<Public.Tables.City.Values>,
          ): Promise<Public.Tables.City.Record> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.city 
    SET
      city_id = ${
        values.cityId === undefined ? sql`city_id` : typed[23](values.cityId)
      } , city = ${
        values.city === undefined ? sql`city` : typed[1043](values.city)
      } , country_id = ${
        values.countryId === undefined
          ? sql`country_id`
          : typed[21](values.countryId)
      } , last_update = ${
        values.lastUpdate === undefined
          ? sql`last_update`
          : typed[1114](values.lastUpdate)
      } 
    WHERE
      city_id = ${
        parameters.cityId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.cityId)
      }
    RETURNING city_id,city,country_id,last_update`;
            return response.map((record) => ({
              cityId: undefinedIsNull(record.city_id),
              city: undefinedIsNull(record.city),
              countryId: undefinedIsNull(record.country_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }

          async delete(
            parameters: Public.Tables.City.ByCityId,
          ): Promise<Public.Tables.City.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.city 
    WHERE
      city_id = ${
        parameters.cityId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.cityId)
      }
    RETURNING city_id,city,country_id,last_update`;
            return response.map((record) => ({
              cityId: undefinedIsNull(record.city_id),
              city: undefinedIsNull(record.city),
              countryId: undefinedIsNull(record.country_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }
        })(this);

        public ByCountryId = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.City.ByCountryId,
          ): Promise<Public.Tables.City.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      city_id,city,country_id,last_update 
    FROM
      public.city 
    WHERE
      country_id = ${
        parameters.countryId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.countryId)
      }
    `;
            return response.map((record) => ({
              cityId: undefinedIsNull(record.city_id),
              city: undefinedIsNull(record.city),
              countryId: undefinedIsNull(record.country_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }));
          }

          async update(
            parameters: Public.Tables.City.ByCountryId,
            values: Partial<Public.Tables.City.Values>,
          ): Promise<Public.Tables.City.Record[]> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.city 
    SET
      city_id = ${
        values.cityId === undefined ? sql`city_id` : typed[23](values.cityId)
      } , city = ${
        values.city === undefined ? sql`city` : typed[1043](values.city)
      } , country_id = ${
        values.countryId === undefined
          ? sql`country_id`
          : typed[21](values.countryId)
      } , last_update = ${
        values.lastUpdate === undefined
          ? sql`last_update`
          : typed[1114](values.lastUpdate)
      } 
    WHERE
      country_id = ${
        parameters.countryId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.countryId)
      }
    RETURNING city_id,city,country_id,last_update`;
            return response.map((record) => ({
              cityId: undefinedIsNull(record.city_id),
              city: undefinedIsNull(record.city),
              countryId: undefinedIsNull(record.country_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }));
          }

          async delete(
            parameters: Public.Tables.City.ByCountryId,
          ): Promise<Public.Tables.City.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.city 
    WHERE
      country_id = ${
        parameters.countryId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.countryId)
      }
    RETURNING city_id,city,country_id,last_update`;
            return response.map((record) => ({
              cityId: undefinedIsNull(record.city_id),
              city: undefinedIsNull(record.city),
              countryId: undefinedIsNull(record.country_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }));
          }
        })(this);
      })(this);

      public Customer = new (class implements HasDatabase {
        constructor(private hasDatabase: HasDatabase) {}

        get database() {
          return this.hasDatabase.database;
        }

        async create(
          values: Public.Tables.Customer.Values,
        ): Promise<Public.Tables.Customer.Record> {
          const sql = this.database.context.sql;
          const typed = sql.typed as unknown as PostgresTypecasts;

          if (!Public.Tables.Customer.includesPrimaryKey(values)) {
            const response = await sql`
      --
      INSERT INTO
        public.customer (store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active)
      VALUES (${
        values.storeId === undefined ? sql`DEFAULT` : typed[21](values.storeId)
      },${
        values.firstName === undefined
          ? sql`DEFAULT`
          : typed[1043](values.firstName)
      },${
        values.lastName === undefined
          ? sql`DEFAULT`
          : typed[1043](values.lastName)
      },${
        values.email === undefined ? sql`DEFAULT` : typed[1043](values.email)
      },${
        values.addressId === undefined
          ? sql`DEFAULT`
          : typed[21](values.addressId)
      },${
        values.activebool === undefined
          ? sql`DEFAULT`
          : typed[16](values.activebool)
      },${
        values.createDate === undefined
          ? sql`DEFAULT`
          : typed[1082](values.createDate)
      },${
        values.lastUpdate === undefined
          ? sql`DEFAULT`
          : typed[1114](values.lastUpdate)
      },${
        values.active === undefined ? sql`DEFAULT` : typed[23](values.active)
      })
      RETURNING
        customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active
    `;
            return response.map((record) => ({
              customerId: undefinedIsNull(record.customer_id),
              storeId: undefinedIsNull(record.store_id),
              firstName: undefinedIsNull(record.first_name),
              lastName: undefinedIsNull(record.last_name),
              email: undefinedIsNull(record.email),
              addressId: undefinedIsNull(record.address_id),
              activebool: undefinedIsNull(record.activebool),
              createDate: undefinedIsNull(record.create_date),
              lastUpdate: undefinedIsNull(record.last_update),
              active: undefinedIsNull(record.active),
            }))[0];
          }
          const response = await sql`
    INSERT INTO
      public.customer (customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active)
    VALUES (${
      values.customerId === undefined
        ? sql`DEFAULT`
        : typed[23](values.customerId)
    },${
      values.storeId === undefined ? sql`DEFAULT` : typed[21](values.storeId)
    },${
      values.firstName === undefined
        ? sql`DEFAULT`
        : typed[1043](values.firstName)
    },${
      values.lastName === undefined
        ? sql`DEFAULT`
        : typed[1043](values.lastName)
    },${
      values.email === undefined ? sql`DEFAULT` : typed[1043](values.email)
    },${
      values.addressId === undefined
        ? sql`DEFAULT`
        : typed[21](values.addressId)
    },${
      values.activebool === undefined
        ? sql`DEFAULT`
        : typed[16](values.activebool)
    },${
      values.createDate === undefined
        ? sql`DEFAULT`
        : typed[1082](values.createDate)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed[1114](values.lastUpdate)
    },${values.active === undefined ? sql`DEFAULT` : typed[23](values.active)})
    ON CONFLICT (customer_id) DO UPDATE
    SET
      store_id = EXCLUDED.store_id,first_name = EXCLUDED.first_name,last_name = EXCLUDED.last_name,email = EXCLUDED.email,address_id = EXCLUDED.address_id,activebool = EXCLUDED.activebool,create_date = EXCLUDED.create_date,last_update = EXCLUDED.last_update,active = EXCLUDED.active
    RETURNING
      customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active
    `;
          return response.map((record) => ({
            customerId: undefinedIsNull(record.customer_id),
            storeId: undefinedIsNull(record.store_id),
            firstName: undefinedIsNull(record.first_name),
            lastName: undefinedIsNull(record.last_name),
            email: undefinedIsNull(record.email),
            addressId: undefinedIsNull(record.address_id),
            activebool: undefinedIsNull(record.activebool),
            createDate: undefinedIsNull(record.create_date),
            lastUpdate: undefinedIsNull(record.last_update),
            active: undefinedIsNull(record.active),
          }))[0];
        }

        public ByAddressId = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.Customer.ByAddressId,
          ): Promise<Public.Tables.Customer.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active 
    FROM
      public.customer 
    WHERE
      address_id = ${
        parameters.addressId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.addressId)
      }
    `;
            return response.map((record) => ({
              customerId: undefinedIsNull(record.customer_id),
              storeId: undefinedIsNull(record.store_id),
              firstName: undefinedIsNull(record.first_name),
              lastName: undefinedIsNull(record.last_name),
              email: undefinedIsNull(record.email),
              addressId: undefinedIsNull(record.address_id),
              activebool: undefinedIsNull(record.activebool),
              createDate: undefinedIsNull(record.create_date),
              lastUpdate: undefinedIsNull(record.last_update),
              active: undefinedIsNull(record.active),
            }));
          }

          async update(
            parameters: Public.Tables.Customer.ByAddressId,
            values: Partial<Public.Tables.Customer.Values>,
          ): Promise<Public.Tables.Customer.Record[]> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.customer 
    SET
      customer_id = ${
        values.customerId === undefined
          ? sql`customer_id`
          : typed[23](values.customerId)
      } , store_id = ${
        values.storeId === undefined ? sql`store_id` : typed[21](values.storeId)
      } , first_name = ${
        values.firstName === undefined
          ? sql`first_name`
          : typed[1043](values.firstName)
      } , last_name = ${
        values.lastName === undefined
          ? sql`last_name`
          : typed[1043](values.lastName)
      } , email = ${
        values.email === undefined ? sql`email` : typed[1043](values.email)
      } , address_id = ${
        values.addressId === undefined
          ? sql`address_id`
          : typed[21](values.addressId)
      } , activebool = ${
        values.activebool === undefined
          ? sql`activebool`
          : typed[16](values.activebool)
      } , create_date = ${
        values.createDate === undefined
          ? sql`create_date`
          : typed[1082](values.createDate)
      } , last_update = ${
        values.lastUpdate === undefined
          ? sql`last_update`
          : typed[1114](values.lastUpdate)
      } , active = ${
        values.active === undefined ? sql`active` : typed[23](values.active)
      } 
    WHERE
      address_id = ${
        parameters.addressId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.addressId)
      }
    RETURNING customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active`;
            return response.map((record) => ({
              customerId: undefinedIsNull(record.customer_id),
              storeId: undefinedIsNull(record.store_id),
              firstName: undefinedIsNull(record.first_name),
              lastName: undefinedIsNull(record.last_name),
              email: undefinedIsNull(record.email),
              addressId: undefinedIsNull(record.address_id),
              activebool: undefinedIsNull(record.activebool),
              createDate: undefinedIsNull(record.create_date),
              lastUpdate: undefinedIsNull(record.last_update),
              active: undefinedIsNull(record.active),
            }));
          }

          async delete(
            parameters: Public.Tables.Customer.ByAddressId,
          ): Promise<Public.Tables.Customer.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.customer 
    WHERE
      address_id = ${
        parameters.addressId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.addressId)
      }
    RETURNING customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active`;
            return response.map((record) => ({
              customerId: undefinedIsNull(record.customer_id),
              storeId: undefinedIsNull(record.store_id),
              firstName: undefinedIsNull(record.first_name),
              lastName: undefinedIsNull(record.last_name),
              email: undefinedIsNull(record.email),
              addressId: undefinedIsNull(record.address_id),
              activebool: undefinedIsNull(record.activebool),
              createDate: undefinedIsNull(record.create_date),
              lastUpdate: undefinedIsNull(record.last_update),
              active: undefinedIsNull(record.active),
            }));
          }
        })(this);

        public ByCustomerId = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.Customer.ByCustomerId,
          ): Promise<Public.Tables.Customer.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active 
    FROM
      public.customer 
    WHERE
      customer_id = ${
        parameters.customerId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.customerId)
      }
    `;
            return response.map((record) => ({
              customerId: undefinedIsNull(record.customer_id),
              storeId: undefinedIsNull(record.store_id),
              firstName: undefinedIsNull(record.first_name),
              lastName: undefinedIsNull(record.last_name),
              email: undefinedIsNull(record.email),
              addressId: undefinedIsNull(record.address_id),
              activebool: undefinedIsNull(record.activebool),
              createDate: undefinedIsNull(record.create_date),
              lastUpdate: undefinedIsNull(record.last_update),
              active: undefinedIsNull(record.active),
            }))[0];
          }

          async update(
            parameters: Public.Tables.Customer.ByCustomerId,
            values: Partial<Public.Tables.Customer.Values>,
          ): Promise<Public.Tables.Customer.Record> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.customer 
    SET
      customer_id = ${
        values.customerId === undefined
          ? sql`customer_id`
          : typed[23](values.customerId)
      } , store_id = ${
        values.storeId === undefined ? sql`store_id` : typed[21](values.storeId)
      } , first_name = ${
        values.firstName === undefined
          ? sql`first_name`
          : typed[1043](values.firstName)
      } , last_name = ${
        values.lastName === undefined
          ? sql`last_name`
          : typed[1043](values.lastName)
      } , email = ${
        values.email === undefined ? sql`email` : typed[1043](values.email)
      } , address_id = ${
        values.addressId === undefined
          ? sql`address_id`
          : typed[21](values.addressId)
      } , activebool = ${
        values.activebool === undefined
          ? sql`activebool`
          : typed[16](values.activebool)
      } , create_date = ${
        values.createDate === undefined
          ? sql`create_date`
          : typed[1082](values.createDate)
      } , last_update = ${
        values.lastUpdate === undefined
          ? sql`last_update`
          : typed[1114](values.lastUpdate)
      } , active = ${
        values.active === undefined ? sql`active` : typed[23](values.active)
      } 
    WHERE
      customer_id = ${
        parameters.customerId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.customerId)
      }
    RETURNING customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active`;
            return response.map((record) => ({
              customerId: undefinedIsNull(record.customer_id),
              storeId: undefinedIsNull(record.store_id),
              firstName: undefinedIsNull(record.first_name),
              lastName: undefinedIsNull(record.last_name),
              email: undefinedIsNull(record.email),
              addressId: undefinedIsNull(record.address_id),
              activebool: undefinedIsNull(record.activebool),
              createDate: undefinedIsNull(record.create_date),
              lastUpdate: undefinedIsNull(record.last_update),
              active: undefinedIsNull(record.active),
            }))[0];
          }

          async delete(
            parameters: Public.Tables.Customer.ByCustomerId,
          ): Promise<Public.Tables.Customer.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.customer 
    WHERE
      customer_id = ${
        parameters.customerId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.customerId)
      }
    RETURNING customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active`;
            return response.map((record) => ({
              customerId: undefinedIsNull(record.customer_id),
              storeId: undefinedIsNull(record.store_id),
              firstName: undefinedIsNull(record.first_name),
              lastName: undefinedIsNull(record.last_name),
              email: undefinedIsNull(record.email),
              addressId: undefinedIsNull(record.address_id),
              activebool: undefinedIsNull(record.activebool),
              createDate: undefinedIsNull(record.create_date),
              lastUpdate: undefinedIsNull(record.last_update),
              active: undefinedIsNull(record.active),
            }))[0];
          }
        })(this);

        public ByLastName = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.Customer.ByLastName,
          ): Promise<Public.Tables.Customer.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active 
    FROM
      public.customer 
    WHERE
      last_name = ${
        parameters.lastName === undefined
          ? sql`DEFAULT`
          : typed[1043](parameters.lastName)
      }
    `;
            return response.map((record) => ({
              customerId: undefinedIsNull(record.customer_id),
              storeId: undefinedIsNull(record.store_id),
              firstName: undefinedIsNull(record.first_name),
              lastName: undefinedIsNull(record.last_name),
              email: undefinedIsNull(record.email),
              addressId: undefinedIsNull(record.address_id),
              activebool: undefinedIsNull(record.activebool),
              createDate: undefinedIsNull(record.create_date),
              lastUpdate: undefinedIsNull(record.last_update),
              active: undefinedIsNull(record.active),
            }));
          }

          async update(
            parameters: Public.Tables.Customer.ByLastName,
            values: Partial<Public.Tables.Customer.Values>,
          ): Promise<Public.Tables.Customer.Record[]> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.customer 
    SET
      customer_id = ${
        values.customerId === undefined
          ? sql`customer_id`
          : typed[23](values.customerId)
      } , store_id = ${
        values.storeId === undefined ? sql`store_id` : typed[21](values.storeId)
      } , first_name = ${
        values.firstName === undefined
          ? sql`first_name`
          : typed[1043](values.firstName)
      } , last_name = ${
        values.lastName === undefined
          ? sql`last_name`
          : typed[1043](values.lastName)
      } , email = ${
        values.email === undefined ? sql`email` : typed[1043](values.email)
      } , address_id = ${
        values.addressId === undefined
          ? sql`address_id`
          : typed[21](values.addressId)
      } , activebool = ${
        values.activebool === undefined
          ? sql`activebool`
          : typed[16](values.activebool)
      } , create_date = ${
        values.createDate === undefined
          ? sql`create_date`
          : typed[1082](values.createDate)
      } , last_update = ${
        values.lastUpdate === undefined
          ? sql`last_update`
          : typed[1114](values.lastUpdate)
      } , active = ${
        values.active === undefined ? sql`active` : typed[23](values.active)
      } 
    WHERE
      last_name = ${
        parameters.lastName === undefined
          ? sql`DEFAULT`
          : typed[1043](parameters.lastName)
      }
    RETURNING customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active`;
            return response.map((record) => ({
              customerId: undefinedIsNull(record.customer_id),
              storeId: undefinedIsNull(record.store_id),
              firstName: undefinedIsNull(record.first_name),
              lastName: undefinedIsNull(record.last_name),
              email: undefinedIsNull(record.email),
              addressId: undefinedIsNull(record.address_id),
              activebool: undefinedIsNull(record.activebool),
              createDate: undefinedIsNull(record.create_date),
              lastUpdate: undefinedIsNull(record.last_update),
              active: undefinedIsNull(record.active),
            }));
          }

          async delete(
            parameters: Public.Tables.Customer.ByLastName,
          ): Promise<Public.Tables.Customer.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.customer 
    WHERE
      last_name = ${
        parameters.lastName === undefined
          ? sql`DEFAULT`
          : typed[1043](parameters.lastName)
      }
    RETURNING customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active`;
            return response.map((record) => ({
              customerId: undefinedIsNull(record.customer_id),
              storeId: undefinedIsNull(record.store_id),
              firstName: undefinedIsNull(record.first_name),
              lastName: undefinedIsNull(record.last_name),
              email: undefinedIsNull(record.email),
              addressId: undefinedIsNull(record.address_id),
              activebool: undefinedIsNull(record.activebool),
              createDate: undefinedIsNull(record.create_date),
              lastUpdate: undefinedIsNull(record.last_update),
              active: undefinedIsNull(record.active),
            }));
          }
        })(this);

        public ByStoreId = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.Customer.ByStoreId,
          ): Promise<Public.Tables.Customer.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active 
    FROM
      public.customer 
    WHERE
      store_id = ${
        parameters.storeId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.storeId)
      }
    `;
            return response.map((record) => ({
              customerId: undefinedIsNull(record.customer_id),
              storeId: undefinedIsNull(record.store_id),
              firstName: undefinedIsNull(record.first_name),
              lastName: undefinedIsNull(record.last_name),
              email: undefinedIsNull(record.email),
              addressId: undefinedIsNull(record.address_id),
              activebool: undefinedIsNull(record.activebool),
              createDate: undefinedIsNull(record.create_date),
              lastUpdate: undefinedIsNull(record.last_update),
              active: undefinedIsNull(record.active),
            }));
          }

          async update(
            parameters: Public.Tables.Customer.ByStoreId,
            values: Partial<Public.Tables.Customer.Values>,
          ): Promise<Public.Tables.Customer.Record[]> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.customer 
    SET
      customer_id = ${
        values.customerId === undefined
          ? sql`customer_id`
          : typed[23](values.customerId)
      } , store_id = ${
        values.storeId === undefined ? sql`store_id` : typed[21](values.storeId)
      } , first_name = ${
        values.firstName === undefined
          ? sql`first_name`
          : typed[1043](values.firstName)
      } , last_name = ${
        values.lastName === undefined
          ? sql`last_name`
          : typed[1043](values.lastName)
      } , email = ${
        values.email === undefined ? sql`email` : typed[1043](values.email)
      } , address_id = ${
        values.addressId === undefined
          ? sql`address_id`
          : typed[21](values.addressId)
      } , activebool = ${
        values.activebool === undefined
          ? sql`activebool`
          : typed[16](values.activebool)
      } , create_date = ${
        values.createDate === undefined
          ? sql`create_date`
          : typed[1082](values.createDate)
      } , last_update = ${
        values.lastUpdate === undefined
          ? sql`last_update`
          : typed[1114](values.lastUpdate)
      } , active = ${
        values.active === undefined ? sql`active` : typed[23](values.active)
      } 
    WHERE
      store_id = ${
        parameters.storeId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.storeId)
      }
    RETURNING customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active`;
            return response.map((record) => ({
              customerId: undefinedIsNull(record.customer_id),
              storeId: undefinedIsNull(record.store_id),
              firstName: undefinedIsNull(record.first_name),
              lastName: undefinedIsNull(record.last_name),
              email: undefinedIsNull(record.email),
              addressId: undefinedIsNull(record.address_id),
              activebool: undefinedIsNull(record.activebool),
              createDate: undefinedIsNull(record.create_date),
              lastUpdate: undefinedIsNull(record.last_update),
              active: undefinedIsNull(record.active),
            }));
          }

          async delete(
            parameters: Public.Tables.Customer.ByStoreId,
          ): Promise<Public.Tables.Customer.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.customer 
    WHERE
      store_id = ${
        parameters.storeId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.storeId)
      }
    RETURNING customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active`;
            return response.map((record) => ({
              customerId: undefinedIsNull(record.customer_id),
              storeId: undefinedIsNull(record.store_id),
              firstName: undefinedIsNull(record.first_name),
              lastName: undefinedIsNull(record.last_name),
              email: undefinedIsNull(record.email),
              addressId: undefinedIsNull(record.address_id),
              activebool: undefinedIsNull(record.activebool),
              createDate: undefinedIsNull(record.create_date),
              lastUpdate: undefinedIsNull(record.last_update),
              active: undefinedIsNull(record.active),
            }));
          }
        })(this);
      })(this);

      public Actor = new (class implements HasDatabase {
        constructor(private hasDatabase: HasDatabase) {}

        get database() {
          return this.hasDatabase.database;
        }

        async create(
          values: Public.Tables.Actor.Values,
        ): Promise<Public.Tables.Actor.Record> {
          const sql = this.database.context.sql;
          const typed = sql.typed as unknown as PostgresTypecasts;

          if (!Public.Tables.Actor.includesPrimaryKey(values)) {
            const response = await sql`
      --
      INSERT INTO
        public.actor (first_name,last_name,last_update)
      VALUES (${
        values.firstName === undefined
          ? sql`DEFAULT`
          : typed[1043](values.firstName)
      },${
        values.lastName === undefined
          ? sql`DEFAULT`
          : typed[1043](values.lastName)
      },${
        values.lastUpdate === undefined
          ? sql`DEFAULT`
          : typed[1114](values.lastUpdate)
      })
      RETURNING
        actor_id,first_name,last_name,last_update
    `;
            return response.map((record) => ({
              actorId: undefinedIsNull(record.actor_id),
              firstName: undefinedIsNull(record.first_name),
              lastName: undefinedIsNull(record.last_name),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }
          const response = await sql`
    INSERT INTO
      public.actor (actor_id,first_name,last_name,last_update)
    VALUES (${
      values.actorId === undefined ? sql`DEFAULT` : typed[23](values.actorId)
    },${
      values.firstName === undefined
        ? sql`DEFAULT`
        : typed[1043](values.firstName)
    },${
      values.lastName === undefined
        ? sql`DEFAULT`
        : typed[1043](values.lastName)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed[1114](values.lastUpdate)
    })
    ON CONFLICT (actor_id) DO UPDATE
    SET
      first_name = EXCLUDED.first_name,last_name = EXCLUDED.last_name,last_update = EXCLUDED.last_update
    RETURNING
      actor_id,first_name,last_name,last_update
    `;
          return response.map((record) => ({
            actorId: undefinedIsNull(record.actor_id),
            firstName: undefinedIsNull(record.first_name),
            lastName: undefinedIsNull(record.last_name),
            lastUpdate: undefinedIsNull(record.last_update),
          }))[0];
        }

        public ByActorId = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.Actor.ByActorId,
          ): Promise<Public.Tables.Actor.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      actor_id,first_name,last_name,last_update 
    FROM
      public.actor 
    WHERE
      actor_id = ${
        parameters.actorId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.actorId)
      }
    `;
            return response.map((record) => ({
              actorId: undefinedIsNull(record.actor_id),
              firstName: undefinedIsNull(record.first_name),
              lastName: undefinedIsNull(record.last_name),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }

          async update(
            parameters: Public.Tables.Actor.ByActorId,
            values: Partial<Public.Tables.Actor.Values>,
          ): Promise<Public.Tables.Actor.Record> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.actor 
    SET
      actor_id = ${
        values.actorId === undefined ? sql`actor_id` : typed[23](values.actorId)
      } , first_name = ${
        values.firstName === undefined
          ? sql`first_name`
          : typed[1043](values.firstName)
      } , last_name = ${
        values.lastName === undefined
          ? sql`last_name`
          : typed[1043](values.lastName)
      } , last_update = ${
        values.lastUpdate === undefined
          ? sql`last_update`
          : typed[1114](values.lastUpdate)
      } 
    WHERE
      actor_id = ${
        parameters.actorId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.actorId)
      }
    RETURNING actor_id,first_name,last_name,last_update`;
            return response.map((record) => ({
              actorId: undefinedIsNull(record.actor_id),
              firstName: undefinedIsNull(record.first_name),
              lastName: undefinedIsNull(record.last_name),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }

          async delete(
            parameters: Public.Tables.Actor.ByActorId,
          ): Promise<Public.Tables.Actor.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.actor 
    WHERE
      actor_id = ${
        parameters.actorId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.actorId)
      }
    RETURNING actor_id,first_name,last_name,last_update`;
            return response.map((record) => ({
              actorId: undefinedIsNull(record.actor_id),
              firstName: undefinedIsNull(record.first_name),
              lastName: undefinedIsNull(record.last_name),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }
        })(this);

        public ByLastName = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.Actor.ByLastName,
          ): Promise<Public.Tables.Actor.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      actor_id,first_name,last_name,last_update 
    FROM
      public.actor 
    WHERE
      last_name = ${
        parameters.lastName === undefined
          ? sql`DEFAULT`
          : typed[1043](parameters.lastName)
      }
    `;
            return response.map((record) => ({
              actorId: undefinedIsNull(record.actor_id),
              firstName: undefinedIsNull(record.first_name),
              lastName: undefinedIsNull(record.last_name),
              lastUpdate: undefinedIsNull(record.last_update),
            }));
          }

          async update(
            parameters: Public.Tables.Actor.ByLastName,
            values: Partial<Public.Tables.Actor.Values>,
          ): Promise<Public.Tables.Actor.Record[]> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.actor 
    SET
      actor_id = ${
        values.actorId === undefined ? sql`actor_id` : typed[23](values.actorId)
      } , first_name = ${
        values.firstName === undefined
          ? sql`first_name`
          : typed[1043](values.firstName)
      } , last_name = ${
        values.lastName === undefined
          ? sql`last_name`
          : typed[1043](values.lastName)
      } , last_update = ${
        values.lastUpdate === undefined
          ? sql`last_update`
          : typed[1114](values.lastUpdate)
      } 
    WHERE
      last_name = ${
        parameters.lastName === undefined
          ? sql`DEFAULT`
          : typed[1043](parameters.lastName)
      }
    RETURNING actor_id,first_name,last_name,last_update`;
            return response.map((record) => ({
              actorId: undefinedIsNull(record.actor_id),
              firstName: undefinedIsNull(record.first_name),
              lastName: undefinedIsNull(record.last_name),
              lastUpdate: undefinedIsNull(record.last_update),
            }));
          }

          async delete(
            parameters: Public.Tables.Actor.ByLastName,
          ): Promise<Public.Tables.Actor.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.actor 
    WHERE
      last_name = ${
        parameters.lastName === undefined
          ? sql`DEFAULT`
          : typed[1043](parameters.lastName)
      }
    RETURNING actor_id,first_name,last_name,last_update`;
            return response.map((record) => ({
              actorId: undefinedIsNull(record.actor_id),
              firstName: undefinedIsNull(record.first_name),
              lastName: undefinedIsNull(record.last_name),
              lastUpdate: undefinedIsNull(record.last_update),
            }));
          }
        })(this);
      })(this);

      public FilmCategory = new (class implements HasDatabase {
        constructor(private hasDatabase: HasDatabase) {}

        get database() {
          return this.hasDatabase.database;
        }

        async create(
          values: Public.Tables.FilmCategory.Values,
        ): Promise<Public.Tables.FilmCategory.Record> {
          const sql = this.database.context.sql;
          const typed = sql.typed as unknown as PostgresTypecasts;

          const response = await sql`
    INSERT INTO
      public.film_category (film_id,category_id,last_update)
    VALUES (${
      values.filmId === undefined ? sql`DEFAULT` : typed[21](values.filmId)
    },${
      values.categoryId === undefined
        ? sql`DEFAULT`
        : typed[21](values.categoryId)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed[1114](values.lastUpdate)
    })
    ON CONFLICT (film_id,category_id) DO UPDATE
    SET
      last_update = EXCLUDED.last_update
    RETURNING
      film_id,category_id,last_update
    `;
          return response.map((record) => ({
            filmId: undefinedIsNull(record.film_id),
            categoryId: undefinedIsNull(record.category_id),
            lastUpdate: undefinedIsNull(record.last_update),
          }))[0];
        }

        public ByFilmIdCategoryId = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.FilmCategory.ByFilmIdCategoryId,
          ): Promise<Public.Tables.FilmCategory.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      film_id,category_id,last_update 
    FROM
      public.film_category 
    WHERE
      film_id = ${
        parameters.filmId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.filmId)
      } AND category_id = ${
        parameters.categoryId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.categoryId)
      }
    `;
            return response.map((record) => ({
              filmId: undefinedIsNull(record.film_id),
              categoryId: undefinedIsNull(record.category_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }

          async update(
            parameters: Public.Tables.FilmCategory.ByFilmIdCategoryId,
            values: Partial<Public.Tables.FilmCategory.Values>,
          ): Promise<Public.Tables.FilmCategory.Record> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.film_category 
    SET
      film_id = ${
        values.filmId === undefined ? sql`film_id` : typed[21](values.filmId)
      } , category_id = ${
        values.categoryId === undefined
          ? sql`category_id`
          : typed[21](values.categoryId)
      } , last_update = ${
        values.lastUpdate === undefined
          ? sql`last_update`
          : typed[1114](values.lastUpdate)
      } 
    WHERE
      film_id = ${
        parameters.filmId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.filmId)
      } AND category_id = ${
        parameters.categoryId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.categoryId)
      }
    RETURNING film_id,category_id,last_update`;
            return response.map((record) => ({
              filmId: undefinedIsNull(record.film_id),
              categoryId: undefinedIsNull(record.category_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }

          async delete(
            parameters: Public.Tables.FilmCategory.ByFilmIdCategoryId,
          ): Promise<Public.Tables.FilmCategory.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.film_category 
    WHERE
      film_id = ${
        parameters.filmId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.filmId)
      } AND category_id = ${
        parameters.categoryId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.categoryId)
      }
    RETURNING film_id,category_id,last_update`;
            return response.map((record) => ({
              filmId: undefinedIsNull(record.film_id),
              categoryId: undefinedIsNull(record.category_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }
        })(this);
      })(this);

      public Inventory = new (class implements HasDatabase {
        constructor(private hasDatabase: HasDatabase) {}

        get database() {
          return this.hasDatabase.database;
        }

        async create(
          values: Public.Tables.Inventory.Values,
        ): Promise<Public.Tables.Inventory.Record> {
          const sql = this.database.context.sql;
          const typed = sql.typed as unknown as PostgresTypecasts;

          if (!Public.Tables.Inventory.includesPrimaryKey(values)) {
            const response = await sql`
      --
      INSERT INTO
        public.inventory (film_id,store_id,last_update)
      VALUES (${
        values.filmId === undefined ? sql`DEFAULT` : typed[21](values.filmId)
      },${
        values.storeId === undefined ? sql`DEFAULT` : typed[21](values.storeId)
      },${
        values.lastUpdate === undefined
          ? sql`DEFAULT`
          : typed[1114](values.lastUpdate)
      })
      RETURNING
        inventory_id,film_id,store_id,last_update
    `;
            return response.map((record) => ({
              inventoryId: undefinedIsNull(record.inventory_id),
              filmId: undefinedIsNull(record.film_id),
              storeId: undefinedIsNull(record.store_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }
          const response = await sql`
    INSERT INTO
      public.inventory (inventory_id,film_id,store_id,last_update)
    VALUES (${
      values.inventoryId === undefined
        ? sql`DEFAULT`
        : typed[23](values.inventoryId)
    },${
      values.filmId === undefined ? sql`DEFAULT` : typed[21](values.filmId)
    },${
      values.storeId === undefined ? sql`DEFAULT` : typed[21](values.storeId)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed[1114](values.lastUpdate)
    })
    ON CONFLICT (inventory_id) DO UPDATE
    SET
      film_id = EXCLUDED.film_id,store_id = EXCLUDED.store_id,last_update = EXCLUDED.last_update
    RETURNING
      inventory_id,film_id,store_id,last_update
    `;
          return response.map((record) => ({
            inventoryId: undefinedIsNull(record.inventory_id),
            filmId: undefinedIsNull(record.film_id),
            storeId: undefinedIsNull(record.store_id),
            lastUpdate: undefinedIsNull(record.last_update),
          }))[0];
        }

        public ByInventoryId = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.Inventory.ByInventoryId,
          ): Promise<Public.Tables.Inventory.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      inventory_id,film_id,store_id,last_update 
    FROM
      public.inventory 
    WHERE
      inventory_id = ${
        parameters.inventoryId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.inventoryId)
      }
    `;
            return response.map((record) => ({
              inventoryId: undefinedIsNull(record.inventory_id),
              filmId: undefinedIsNull(record.film_id),
              storeId: undefinedIsNull(record.store_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }

          async update(
            parameters: Public.Tables.Inventory.ByInventoryId,
            values: Partial<Public.Tables.Inventory.Values>,
          ): Promise<Public.Tables.Inventory.Record> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.inventory 
    SET
      inventory_id = ${
        values.inventoryId === undefined
          ? sql`inventory_id`
          : typed[23](values.inventoryId)
      } , film_id = ${
        values.filmId === undefined ? sql`film_id` : typed[21](values.filmId)
      } , store_id = ${
        values.storeId === undefined ? sql`store_id` : typed[21](values.storeId)
      } , last_update = ${
        values.lastUpdate === undefined
          ? sql`last_update`
          : typed[1114](values.lastUpdate)
      } 
    WHERE
      inventory_id = ${
        parameters.inventoryId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.inventoryId)
      }
    RETURNING inventory_id,film_id,store_id,last_update`;
            return response.map((record) => ({
              inventoryId: undefinedIsNull(record.inventory_id),
              filmId: undefinedIsNull(record.film_id),
              storeId: undefinedIsNull(record.store_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }

          async delete(
            parameters: Public.Tables.Inventory.ByInventoryId,
          ): Promise<Public.Tables.Inventory.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.inventory 
    WHERE
      inventory_id = ${
        parameters.inventoryId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.inventoryId)
      }
    RETURNING inventory_id,film_id,store_id,last_update`;
            return response.map((record) => ({
              inventoryId: undefinedIsNull(record.inventory_id),
              filmId: undefinedIsNull(record.film_id),
              storeId: undefinedIsNull(record.store_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }
        })(this);

        public ByStoreIdFilmId = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.Inventory.ByStoreIdFilmId,
          ): Promise<Public.Tables.Inventory.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      inventory_id,film_id,store_id,last_update 
    FROM
      public.inventory 
    WHERE
      store_id = ${
        parameters.storeId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.storeId)
      } AND film_id = ${
        parameters.filmId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.filmId)
      }
    `;
            return response.map((record) => ({
              inventoryId: undefinedIsNull(record.inventory_id),
              filmId: undefinedIsNull(record.film_id),
              storeId: undefinedIsNull(record.store_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }));
          }

          async update(
            parameters: Public.Tables.Inventory.ByStoreIdFilmId,
            values: Partial<Public.Tables.Inventory.Values>,
          ): Promise<Public.Tables.Inventory.Record[]> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.inventory 
    SET
      inventory_id = ${
        values.inventoryId === undefined
          ? sql`inventory_id`
          : typed[23](values.inventoryId)
      } , film_id = ${
        values.filmId === undefined ? sql`film_id` : typed[21](values.filmId)
      } , store_id = ${
        values.storeId === undefined ? sql`store_id` : typed[21](values.storeId)
      } , last_update = ${
        values.lastUpdate === undefined
          ? sql`last_update`
          : typed[1114](values.lastUpdate)
      } 
    WHERE
      store_id = ${
        parameters.storeId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.storeId)
      } AND film_id = ${
        parameters.filmId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.filmId)
      }
    RETURNING inventory_id,film_id,store_id,last_update`;
            return response.map((record) => ({
              inventoryId: undefinedIsNull(record.inventory_id),
              filmId: undefinedIsNull(record.film_id),
              storeId: undefinedIsNull(record.store_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }));
          }

          async delete(
            parameters: Public.Tables.Inventory.ByStoreIdFilmId,
          ): Promise<Public.Tables.Inventory.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.inventory 
    WHERE
      store_id = ${
        parameters.storeId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.storeId)
      } AND film_id = ${
        parameters.filmId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.filmId)
      }
    RETURNING inventory_id,film_id,store_id,last_update`;
            return response.map((record) => ({
              inventoryId: undefinedIsNull(record.inventory_id),
              filmId: undefinedIsNull(record.film_id),
              storeId: undefinedIsNull(record.store_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }));
          }
        })(this);
      })(this);

      public Category = new (class implements HasDatabase {
        constructor(private hasDatabase: HasDatabase) {}

        get database() {
          return this.hasDatabase.database;
        }

        async create(
          values: Public.Tables.Category.Values,
        ): Promise<Public.Tables.Category.Record> {
          const sql = this.database.context.sql;
          const typed = sql.typed as unknown as PostgresTypecasts;

          if (!Public.Tables.Category.includesPrimaryKey(values)) {
            const response = await sql`
      --
      INSERT INTO
        public.category (name,last_update)
      VALUES (${
        values.name === undefined ? sql`DEFAULT` : typed[1043](values.name)
      },${
        values.lastUpdate === undefined
          ? sql`DEFAULT`
          : typed[1114](values.lastUpdate)
      })
      RETURNING
        category_id,name,last_update
    `;
            return response.map((record) => ({
              categoryId: undefinedIsNull(record.category_id),
              name: undefinedIsNull(record.name),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }
          const response = await sql`
    INSERT INTO
      public.category (category_id,name,last_update)
    VALUES (${
      values.categoryId === undefined
        ? sql`DEFAULT`
        : typed[23](values.categoryId)
    },${values.name === undefined ? sql`DEFAULT` : typed[1043](values.name)},${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed[1114](values.lastUpdate)
    })
    ON CONFLICT (category_id) DO UPDATE
    SET
      name = EXCLUDED.name,last_update = EXCLUDED.last_update
    RETURNING
      category_id,name,last_update
    `;
          return response.map((record) => ({
            categoryId: undefinedIsNull(record.category_id),
            name: undefinedIsNull(record.name),
            lastUpdate: undefinedIsNull(record.last_update),
          }))[0];
        }

        public ByCategoryId = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.Category.ByCategoryId,
          ): Promise<Public.Tables.Category.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      category_id,name,last_update 
    FROM
      public.category 
    WHERE
      category_id = ${
        parameters.categoryId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.categoryId)
      }
    `;
            return response.map((record) => ({
              categoryId: undefinedIsNull(record.category_id),
              name: undefinedIsNull(record.name),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }

          async update(
            parameters: Public.Tables.Category.ByCategoryId,
            values: Partial<Public.Tables.Category.Values>,
          ): Promise<Public.Tables.Category.Record> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.category 
    SET
      category_id = ${
        values.categoryId === undefined
          ? sql`category_id`
          : typed[23](values.categoryId)
      } , name = ${
        values.name === undefined ? sql`name` : typed[1043](values.name)
      } , last_update = ${
        values.lastUpdate === undefined
          ? sql`last_update`
          : typed[1114](values.lastUpdate)
      } 
    WHERE
      category_id = ${
        parameters.categoryId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.categoryId)
      }
    RETURNING category_id,name,last_update`;
            return response.map((record) => ({
              categoryId: undefinedIsNull(record.category_id),
              name: undefinedIsNull(record.name),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }

          async delete(
            parameters: Public.Tables.Category.ByCategoryId,
          ): Promise<Public.Tables.Category.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.category 
    WHERE
      category_id = ${
        parameters.categoryId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.categoryId)
      }
    RETURNING category_id,name,last_update`;
            return response.map((record) => ({
              categoryId: undefinedIsNull(record.category_id),
              name: undefinedIsNull(record.name),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }
        })(this);
      })(this);

      public Country = new (class implements HasDatabase {
        constructor(private hasDatabase: HasDatabase) {}

        get database() {
          return this.hasDatabase.database;
        }

        async create(
          values: Public.Tables.Country.Values,
        ): Promise<Public.Tables.Country.Record> {
          const sql = this.database.context.sql;
          const typed = sql.typed as unknown as PostgresTypecasts;

          if (!Public.Tables.Country.includesPrimaryKey(values)) {
            const response = await sql`
      --
      INSERT INTO
        public.country (country,last_update)
      VALUES (${
        values.country === undefined
          ? sql`DEFAULT`
          : typed[1043](values.country)
      },${
        values.lastUpdate === undefined
          ? sql`DEFAULT`
          : typed[1114](values.lastUpdate)
      })
      RETURNING
        country_id,country,last_update
    `;
            return response.map((record) => ({
              countryId: undefinedIsNull(record.country_id),
              country: undefinedIsNull(record.country),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }
          const response = await sql`
    INSERT INTO
      public.country (country_id,country,last_update)
    VALUES (${
      values.countryId === undefined
        ? sql`DEFAULT`
        : typed[23](values.countryId)
    },${
      values.country === undefined ? sql`DEFAULT` : typed[1043](values.country)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed[1114](values.lastUpdate)
    })
    ON CONFLICT (country_id) DO UPDATE
    SET
      country = EXCLUDED.country,last_update = EXCLUDED.last_update
    RETURNING
      country_id,country,last_update
    `;
          return response.map((record) => ({
            countryId: undefinedIsNull(record.country_id),
            country: undefinedIsNull(record.country),
            lastUpdate: undefinedIsNull(record.last_update),
          }))[0];
        }

        public ByCountryId = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.Country.ByCountryId,
          ): Promise<Public.Tables.Country.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      country_id,country,last_update 
    FROM
      public.country 
    WHERE
      country_id = ${
        parameters.countryId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.countryId)
      }
    `;
            return response.map((record) => ({
              countryId: undefinedIsNull(record.country_id),
              country: undefinedIsNull(record.country),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }

          async update(
            parameters: Public.Tables.Country.ByCountryId,
            values: Partial<Public.Tables.Country.Values>,
          ): Promise<Public.Tables.Country.Record> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.country 
    SET
      country_id = ${
        values.countryId === undefined
          ? sql`country_id`
          : typed[23](values.countryId)
      } , country = ${
        values.country === undefined
          ? sql`country`
          : typed[1043](values.country)
      } , last_update = ${
        values.lastUpdate === undefined
          ? sql`last_update`
          : typed[1114](values.lastUpdate)
      } 
    WHERE
      country_id = ${
        parameters.countryId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.countryId)
      }
    RETURNING country_id,country,last_update`;
            return response.map((record) => ({
              countryId: undefinedIsNull(record.country_id),
              country: undefinedIsNull(record.country),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }

          async delete(
            parameters: Public.Tables.Country.ByCountryId,
          ): Promise<Public.Tables.Country.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.country 
    WHERE
      country_id = ${
        parameters.countryId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.countryId)
      }
    RETURNING country_id,country,last_update`;
            return response.map((record) => ({
              countryId: undefinedIsNull(record.country_id),
              country: undefinedIsNull(record.country),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }
        })(this);
      })(this);

      public Language = new (class implements HasDatabase {
        constructor(private hasDatabase: HasDatabase) {}

        get database() {
          return this.hasDatabase.database;
        }

        async create(
          values: Public.Tables.Language.Values,
        ): Promise<Public.Tables.Language.Record> {
          const sql = this.database.context.sql;
          const typed = sql.typed as unknown as PostgresTypecasts;

          if (!Public.Tables.Language.includesPrimaryKey(values)) {
            const response = await sql`
      --
      INSERT INTO
        public.language (name,last_update)
      VALUES (${
        values.name === undefined ? sql`DEFAULT` : typed[1042](values.name)
      },${
        values.lastUpdate === undefined
          ? sql`DEFAULT`
          : typed[1114](values.lastUpdate)
      })
      RETURNING
        language_id,name,last_update
    `;
            return response.map((record) => ({
              languageId: undefinedIsNull(record.language_id),
              name: undefinedIsNull(record.name),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }
          const response = await sql`
    INSERT INTO
      public.language (language_id,name,last_update)
    VALUES (${
      values.languageId === undefined
        ? sql`DEFAULT`
        : typed[23](values.languageId)
    },${values.name === undefined ? sql`DEFAULT` : typed[1042](values.name)},${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed[1114](values.lastUpdate)
    })
    ON CONFLICT (language_id) DO UPDATE
    SET
      name = EXCLUDED.name,last_update = EXCLUDED.last_update
    RETURNING
      language_id,name,last_update
    `;
          return response.map((record) => ({
            languageId: undefinedIsNull(record.language_id),
            name: undefinedIsNull(record.name),
            lastUpdate: undefinedIsNull(record.last_update),
          }))[0];
        }

        public ByLanguageId = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.Language.ByLanguageId,
          ): Promise<Public.Tables.Language.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      language_id,name,last_update 
    FROM
      public.language 
    WHERE
      language_id = ${
        parameters.languageId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.languageId)
      }
    `;
            return response.map((record) => ({
              languageId: undefinedIsNull(record.language_id),
              name: undefinedIsNull(record.name),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }

          async update(
            parameters: Public.Tables.Language.ByLanguageId,
            values: Partial<Public.Tables.Language.Values>,
          ): Promise<Public.Tables.Language.Record> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.language 
    SET
      language_id = ${
        values.languageId === undefined
          ? sql`language_id`
          : typed[23](values.languageId)
      } , name = ${
        values.name === undefined ? sql`name` : typed[1042](values.name)
      } , last_update = ${
        values.lastUpdate === undefined
          ? sql`last_update`
          : typed[1114](values.lastUpdate)
      } 
    WHERE
      language_id = ${
        parameters.languageId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.languageId)
      }
    RETURNING language_id,name,last_update`;
            return response.map((record) => ({
              languageId: undefinedIsNull(record.language_id),
              name: undefinedIsNull(record.name),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }

          async delete(
            parameters: Public.Tables.Language.ByLanguageId,
          ): Promise<Public.Tables.Language.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.language 
    WHERE
      language_id = ${
        parameters.languageId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.languageId)
      }
    RETURNING language_id,name,last_update`;
            return response.map((record) => ({
              languageId: undefinedIsNull(record.language_id),
              name: undefinedIsNull(record.name),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }
        })(this);
      })(this);

      public Rental = new (class implements HasDatabase {
        constructor(private hasDatabase: HasDatabase) {}

        get database() {
          return this.hasDatabase.database;
        }

        async create(
          values: Public.Tables.Rental.Values,
        ): Promise<Public.Tables.Rental.Record> {
          const sql = this.database.context.sql;
          const typed = sql.typed as unknown as PostgresTypecasts;

          if (!Public.Tables.Rental.includesPrimaryKey(values)) {
            const response = await sql`
      --
      INSERT INTO
        public.rental (rental_date,inventory_id,customer_id,return_date,staff_id,last_update)
      VALUES (${
        values.rentalDate === undefined
          ? sql`DEFAULT`
          : typed[1114](values.rentalDate)
      },${
        values.inventoryId === undefined
          ? sql`DEFAULT`
          : typed[23](values.inventoryId)
      },${
        values.customerId === undefined
          ? sql`DEFAULT`
          : typed[21](values.customerId)
      },${
        values.returnDate === undefined
          ? sql`DEFAULT`
          : typed[1114](values.returnDate)
      },${
        values.staffId === undefined ? sql`DEFAULT` : typed[21](values.staffId)
      },${
        values.lastUpdate === undefined
          ? sql`DEFAULT`
          : typed[1114](values.lastUpdate)
      })
      RETURNING
        rental_id,rental_date,inventory_id,customer_id,return_date,staff_id,last_update
    `;
            return response.map((record) => ({
              rentalId: undefinedIsNull(record.rental_id),
              rentalDate: undefinedIsNull(record.rental_date),
              inventoryId: undefinedIsNull(record.inventory_id),
              customerId: undefinedIsNull(record.customer_id),
              returnDate: undefinedIsNull(record.return_date),
              staffId: undefinedIsNull(record.staff_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }
          const response = await sql`
    INSERT INTO
      public.rental (rental_id,rental_date,inventory_id,customer_id,return_date,staff_id,last_update)
    VALUES (${
      values.rentalId === undefined ? sql`DEFAULT` : typed[23](values.rentalId)
    },${
      values.rentalDate === undefined
        ? sql`DEFAULT`
        : typed[1114](values.rentalDate)
    },${
      values.inventoryId === undefined
        ? sql`DEFAULT`
        : typed[23](values.inventoryId)
    },${
      values.customerId === undefined
        ? sql`DEFAULT`
        : typed[21](values.customerId)
    },${
      values.returnDate === undefined
        ? sql`DEFAULT`
        : typed[1114](values.returnDate)
    },${
      values.staffId === undefined ? sql`DEFAULT` : typed[21](values.staffId)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed[1114](values.lastUpdate)
    })
    ON CONFLICT (rental_id) DO UPDATE
    SET
      rental_date = EXCLUDED.rental_date,inventory_id = EXCLUDED.inventory_id,customer_id = EXCLUDED.customer_id,return_date = EXCLUDED.return_date,staff_id = EXCLUDED.staff_id,last_update = EXCLUDED.last_update
    RETURNING
      rental_id,rental_date,inventory_id,customer_id,return_date,staff_id,last_update
    `;
          return response.map((record) => ({
            rentalId: undefinedIsNull(record.rental_id),
            rentalDate: undefinedIsNull(record.rental_date),
            inventoryId: undefinedIsNull(record.inventory_id),
            customerId: undefinedIsNull(record.customer_id),
            returnDate: undefinedIsNull(record.return_date),
            staffId: undefinedIsNull(record.staff_id),
            lastUpdate: undefinedIsNull(record.last_update),
          }))[0];
        }

        public ByInventoryId = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.Rental.ByInventoryId,
          ): Promise<Public.Tables.Rental.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      rental_id,rental_date,inventory_id,customer_id,return_date,staff_id,last_update 
    FROM
      public.rental 
    WHERE
      inventory_id = ${
        parameters.inventoryId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.inventoryId)
      }
    `;
            return response.map((record) => ({
              rentalId: undefinedIsNull(record.rental_id),
              rentalDate: undefinedIsNull(record.rental_date),
              inventoryId: undefinedIsNull(record.inventory_id),
              customerId: undefinedIsNull(record.customer_id),
              returnDate: undefinedIsNull(record.return_date),
              staffId: undefinedIsNull(record.staff_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }));
          }

          async update(
            parameters: Public.Tables.Rental.ByInventoryId,
            values: Partial<Public.Tables.Rental.Values>,
          ): Promise<Public.Tables.Rental.Record[]> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.rental 
    SET
      rental_id = ${
        values.rentalId === undefined
          ? sql`rental_id`
          : typed[23](values.rentalId)
      } , rental_date = ${
        values.rentalDate === undefined
          ? sql`rental_date`
          : typed[1114](values.rentalDate)
      } , inventory_id = ${
        values.inventoryId === undefined
          ? sql`inventory_id`
          : typed[23](values.inventoryId)
      } , customer_id = ${
        values.customerId === undefined
          ? sql`customer_id`
          : typed[21](values.customerId)
      } , return_date = ${
        values.returnDate === undefined
          ? sql`return_date`
          : typed[1114](values.returnDate)
      } , staff_id = ${
        values.staffId === undefined ? sql`staff_id` : typed[21](values.staffId)
      } , last_update = ${
        values.lastUpdate === undefined
          ? sql`last_update`
          : typed[1114](values.lastUpdate)
      } 
    WHERE
      inventory_id = ${
        parameters.inventoryId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.inventoryId)
      }
    RETURNING rental_id,rental_date,inventory_id,customer_id,return_date,staff_id,last_update`;
            return response.map((record) => ({
              rentalId: undefinedIsNull(record.rental_id),
              rentalDate: undefinedIsNull(record.rental_date),
              inventoryId: undefinedIsNull(record.inventory_id),
              customerId: undefinedIsNull(record.customer_id),
              returnDate: undefinedIsNull(record.return_date),
              staffId: undefinedIsNull(record.staff_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }));
          }

          async delete(
            parameters: Public.Tables.Rental.ByInventoryId,
          ): Promise<Public.Tables.Rental.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.rental 
    WHERE
      inventory_id = ${
        parameters.inventoryId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.inventoryId)
      }
    RETURNING rental_id,rental_date,inventory_id,customer_id,return_date,staff_id,last_update`;
            return response.map((record) => ({
              rentalId: undefinedIsNull(record.rental_id),
              rentalDate: undefinedIsNull(record.rental_date),
              inventoryId: undefinedIsNull(record.inventory_id),
              customerId: undefinedIsNull(record.customer_id),
              returnDate: undefinedIsNull(record.return_date),
              staffId: undefinedIsNull(record.staff_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }));
          }
        })(this);

        public ByRentalDateInventoryIdCustomerId = new (class
          implements HasDatabase
        {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.Rental.ByRentalDateInventoryIdCustomerId,
          ): Promise<Public.Tables.Rental.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      rental_id,rental_date,inventory_id,customer_id,return_date,staff_id,last_update 
    FROM
      public.rental 
    WHERE
      rental_date = ${
        parameters.rentalDate === undefined
          ? sql`DEFAULT`
          : typed[1114](parameters.rentalDate)
      } AND inventory_id = ${
        parameters.inventoryId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.inventoryId)
      } AND customer_id = ${
        parameters.customerId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.customerId)
      }
    `;
            return response.map((record) => ({
              rentalId: undefinedIsNull(record.rental_id),
              rentalDate: undefinedIsNull(record.rental_date),
              inventoryId: undefinedIsNull(record.inventory_id),
              customerId: undefinedIsNull(record.customer_id),
              returnDate: undefinedIsNull(record.return_date),
              staffId: undefinedIsNull(record.staff_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }

          async update(
            parameters: Public.Tables.Rental.ByRentalDateInventoryIdCustomerId,
            values: Partial<Public.Tables.Rental.Values>,
          ): Promise<Public.Tables.Rental.Record> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.rental 
    SET
      rental_id = ${
        values.rentalId === undefined
          ? sql`rental_id`
          : typed[23](values.rentalId)
      } , rental_date = ${
        values.rentalDate === undefined
          ? sql`rental_date`
          : typed[1114](values.rentalDate)
      } , inventory_id = ${
        values.inventoryId === undefined
          ? sql`inventory_id`
          : typed[23](values.inventoryId)
      } , customer_id = ${
        values.customerId === undefined
          ? sql`customer_id`
          : typed[21](values.customerId)
      } , return_date = ${
        values.returnDate === undefined
          ? sql`return_date`
          : typed[1114](values.returnDate)
      } , staff_id = ${
        values.staffId === undefined ? sql`staff_id` : typed[21](values.staffId)
      } , last_update = ${
        values.lastUpdate === undefined
          ? sql`last_update`
          : typed[1114](values.lastUpdate)
      } 
    WHERE
      rental_date = ${
        parameters.rentalDate === undefined
          ? sql`DEFAULT`
          : typed[1114](parameters.rentalDate)
      } AND inventory_id = ${
        parameters.inventoryId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.inventoryId)
      } AND customer_id = ${
        parameters.customerId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.customerId)
      }
    RETURNING rental_id,rental_date,inventory_id,customer_id,return_date,staff_id,last_update`;
            return response.map((record) => ({
              rentalId: undefinedIsNull(record.rental_id),
              rentalDate: undefinedIsNull(record.rental_date),
              inventoryId: undefinedIsNull(record.inventory_id),
              customerId: undefinedIsNull(record.customer_id),
              returnDate: undefinedIsNull(record.return_date),
              staffId: undefinedIsNull(record.staff_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }

          async delete(
            parameters: Public.Tables.Rental.ByRentalDateInventoryIdCustomerId,
          ): Promise<Public.Tables.Rental.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.rental 
    WHERE
      rental_date = ${
        parameters.rentalDate === undefined
          ? sql`DEFAULT`
          : typed[1114](parameters.rentalDate)
      } AND inventory_id = ${
        parameters.inventoryId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.inventoryId)
      } AND customer_id = ${
        parameters.customerId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.customerId)
      }
    RETURNING rental_id,rental_date,inventory_id,customer_id,return_date,staff_id,last_update`;
            return response.map((record) => ({
              rentalId: undefinedIsNull(record.rental_id),
              rentalDate: undefinedIsNull(record.rental_date),
              inventoryId: undefinedIsNull(record.inventory_id),
              customerId: undefinedIsNull(record.customer_id),
              returnDate: undefinedIsNull(record.return_date),
              staffId: undefinedIsNull(record.staff_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }
        })(this);

        public ByRentalId = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.Rental.ByRentalId,
          ): Promise<Public.Tables.Rental.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      rental_id,rental_date,inventory_id,customer_id,return_date,staff_id,last_update 
    FROM
      public.rental 
    WHERE
      rental_id = ${
        parameters.rentalId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.rentalId)
      }
    `;
            return response.map((record) => ({
              rentalId: undefinedIsNull(record.rental_id),
              rentalDate: undefinedIsNull(record.rental_date),
              inventoryId: undefinedIsNull(record.inventory_id),
              customerId: undefinedIsNull(record.customer_id),
              returnDate: undefinedIsNull(record.return_date),
              staffId: undefinedIsNull(record.staff_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }

          async update(
            parameters: Public.Tables.Rental.ByRentalId,
            values: Partial<Public.Tables.Rental.Values>,
          ): Promise<Public.Tables.Rental.Record> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.rental 
    SET
      rental_id = ${
        values.rentalId === undefined
          ? sql`rental_id`
          : typed[23](values.rentalId)
      } , rental_date = ${
        values.rentalDate === undefined
          ? sql`rental_date`
          : typed[1114](values.rentalDate)
      } , inventory_id = ${
        values.inventoryId === undefined
          ? sql`inventory_id`
          : typed[23](values.inventoryId)
      } , customer_id = ${
        values.customerId === undefined
          ? sql`customer_id`
          : typed[21](values.customerId)
      } , return_date = ${
        values.returnDate === undefined
          ? sql`return_date`
          : typed[1114](values.returnDate)
      } , staff_id = ${
        values.staffId === undefined ? sql`staff_id` : typed[21](values.staffId)
      } , last_update = ${
        values.lastUpdate === undefined
          ? sql`last_update`
          : typed[1114](values.lastUpdate)
      } 
    WHERE
      rental_id = ${
        parameters.rentalId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.rentalId)
      }
    RETURNING rental_id,rental_date,inventory_id,customer_id,return_date,staff_id,last_update`;
            return response.map((record) => ({
              rentalId: undefinedIsNull(record.rental_id),
              rentalDate: undefinedIsNull(record.rental_date),
              inventoryId: undefinedIsNull(record.inventory_id),
              customerId: undefinedIsNull(record.customer_id),
              returnDate: undefinedIsNull(record.return_date),
              staffId: undefinedIsNull(record.staff_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }

          async delete(
            parameters: Public.Tables.Rental.ByRentalId,
          ): Promise<Public.Tables.Rental.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.rental 
    WHERE
      rental_id = ${
        parameters.rentalId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.rentalId)
      }
    RETURNING rental_id,rental_date,inventory_id,customer_id,return_date,staff_id,last_update`;
            return response.map((record) => ({
              rentalId: undefinedIsNull(record.rental_id),
              rentalDate: undefinedIsNull(record.rental_date),
              inventoryId: undefinedIsNull(record.inventory_id),
              customerId: undefinedIsNull(record.customer_id),
              returnDate: undefinedIsNull(record.return_date),
              staffId: undefinedIsNull(record.staff_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }
        })(this);
      })(this);

      public Staff = new (class implements HasDatabase {
        constructor(private hasDatabase: HasDatabase) {}

        get database() {
          return this.hasDatabase.database;
        }

        async create(
          values: Public.Tables.Staff.Values,
        ): Promise<Public.Tables.Staff.Record> {
          const sql = this.database.context.sql;
          const typed = sql.typed as unknown as PostgresTypecasts;

          if (!Public.Tables.Staff.includesPrimaryKey(values)) {
            const response = await sql`
      --
      INSERT INTO
        public.staff (first_name,last_name,address_id,email,store_id,active,username,password,last_update,picture)
      VALUES (${
        values.firstName === undefined
          ? sql`DEFAULT`
          : typed[1043](values.firstName)
      },${
        values.lastName === undefined
          ? sql`DEFAULT`
          : typed[1043](values.lastName)
      },${
        values.addressId === undefined
          ? sql`DEFAULT`
          : typed[21](values.addressId)
      },${
        values.email === undefined ? sql`DEFAULT` : typed[1043](values.email)
      },${
        values.storeId === undefined ? sql`DEFAULT` : typed[21](values.storeId)
      },${
        values.active === undefined ? sql`DEFAULT` : typed[16](values.active)
      },${
        values.username === undefined
          ? sql`DEFAULT`
          : typed[1043](values.username)
      },${
        values.password === undefined
          ? sql`DEFAULT`
          : typed[1043](values.password)
      },${
        values.lastUpdate === undefined
          ? sql`DEFAULT`
          : typed[1114](values.lastUpdate)
      },${
        values.picture === undefined ? sql`DEFAULT` : typed[17](values.picture)
      })
      RETURNING
        staff_id,first_name,last_name,address_id,email,store_id,active,username,password,last_update,picture
    `;
            return response.map((record) => ({
              staffId: undefinedIsNull(record.staff_id),
              firstName: undefinedIsNull(record.first_name),
              lastName: undefinedIsNull(record.last_name),
              addressId: undefinedIsNull(record.address_id),
              email: undefinedIsNull(record.email),
              storeId: undefinedIsNull(record.store_id),
              active: undefinedIsNull(record.active),
              username: undefinedIsNull(record.username),
              password: undefinedIsNull(record.password),
              lastUpdate: undefinedIsNull(record.last_update),
              picture: undefinedIsNull(record.picture),
            }))[0];
          }
          const response = await sql`
    INSERT INTO
      public.staff (staff_id,first_name,last_name,address_id,email,store_id,active,username,password,last_update,picture)
    VALUES (${
      values.staffId === undefined ? sql`DEFAULT` : typed[23](values.staffId)
    },${
      values.firstName === undefined
        ? sql`DEFAULT`
        : typed[1043](values.firstName)
    },${
      values.lastName === undefined
        ? sql`DEFAULT`
        : typed[1043](values.lastName)
    },${
      values.addressId === undefined
        ? sql`DEFAULT`
        : typed[21](values.addressId)
    },${
      values.email === undefined ? sql`DEFAULT` : typed[1043](values.email)
    },${
      values.storeId === undefined ? sql`DEFAULT` : typed[21](values.storeId)
    },${
      values.active === undefined ? sql`DEFAULT` : typed[16](values.active)
    },${
      values.username === undefined
        ? sql`DEFAULT`
        : typed[1043](values.username)
    },${
      values.password === undefined
        ? sql`DEFAULT`
        : typed[1043](values.password)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed[1114](values.lastUpdate)
    },${
      values.picture === undefined ? sql`DEFAULT` : typed[17](values.picture)
    })
    ON CONFLICT (staff_id) DO UPDATE
    SET
      first_name = EXCLUDED.first_name,last_name = EXCLUDED.last_name,address_id = EXCLUDED.address_id,email = EXCLUDED.email,store_id = EXCLUDED.store_id,active = EXCLUDED.active,username = EXCLUDED.username,password = EXCLUDED.password,last_update = EXCLUDED.last_update,picture = EXCLUDED.picture
    RETURNING
      staff_id,first_name,last_name,address_id,email,store_id,active,username,password,last_update,picture
    `;
          return response.map((record) => ({
            staffId: undefinedIsNull(record.staff_id),
            firstName: undefinedIsNull(record.first_name),
            lastName: undefinedIsNull(record.last_name),
            addressId: undefinedIsNull(record.address_id),
            email: undefinedIsNull(record.email),
            storeId: undefinedIsNull(record.store_id),
            active: undefinedIsNull(record.active),
            username: undefinedIsNull(record.username),
            password: undefinedIsNull(record.password),
            lastUpdate: undefinedIsNull(record.last_update),
            picture: undefinedIsNull(record.picture),
          }))[0];
        }

        public ByStaffId = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.Staff.ByStaffId,
          ): Promise<Public.Tables.Staff.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      staff_id,first_name,last_name,address_id,email,store_id,active,username,password,last_update,picture 
    FROM
      public.staff 
    WHERE
      staff_id = ${
        parameters.staffId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.staffId)
      }
    `;
            return response.map((record) => ({
              staffId: undefinedIsNull(record.staff_id),
              firstName: undefinedIsNull(record.first_name),
              lastName: undefinedIsNull(record.last_name),
              addressId: undefinedIsNull(record.address_id),
              email: undefinedIsNull(record.email),
              storeId: undefinedIsNull(record.store_id),
              active: undefinedIsNull(record.active),
              username: undefinedIsNull(record.username),
              password: undefinedIsNull(record.password),
              lastUpdate: undefinedIsNull(record.last_update),
              picture: undefinedIsNull(record.picture),
            }))[0];
          }

          async update(
            parameters: Public.Tables.Staff.ByStaffId,
            values: Partial<Public.Tables.Staff.Values>,
          ): Promise<Public.Tables.Staff.Record> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.staff 
    SET
      staff_id = ${
        values.staffId === undefined ? sql`staff_id` : typed[23](values.staffId)
      } , first_name = ${
        values.firstName === undefined
          ? sql`first_name`
          : typed[1043](values.firstName)
      } , last_name = ${
        values.lastName === undefined
          ? sql`last_name`
          : typed[1043](values.lastName)
      } , address_id = ${
        values.addressId === undefined
          ? sql`address_id`
          : typed[21](values.addressId)
      } , email = ${
        values.email === undefined ? sql`email` : typed[1043](values.email)
      } , store_id = ${
        values.storeId === undefined ? sql`store_id` : typed[21](values.storeId)
      } , active = ${
        values.active === undefined ? sql`active` : typed[16](values.active)
      } , username = ${
        values.username === undefined
          ? sql`username`
          : typed[1043](values.username)
      } , password = ${
        values.password === undefined
          ? sql`password`
          : typed[1043](values.password)
      } , last_update = ${
        values.lastUpdate === undefined
          ? sql`last_update`
          : typed[1114](values.lastUpdate)
      } , picture = ${
        values.picture === undefined ? sql`picture` : typed[17](values.picture)
      } 
    WHERE
      staff_id = ${
        parameters.staffId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.staffId)
      }
    RETURNING staff_id,first_name,last_name,address_id,email,store_id,active,username,password,last_update,picture`;
            return response.map((record) => ({
              staffId: undefinedIsNull(record.staff_id),
              firstName: undefinedIsNull(record.first_name),
              lastName: undefinedIsNull(record.last_name),
              addressId: undefinedIsNull(record.address_id),
              email: undefinedIsNull(record.email),
              storeId: undefinedIsNull(record.store_id),
              active: undefinedIsNull(record.active),
              username: undefinedIsNull(record.username),
              password: undefinedIsNull(record.password),
              lastUpdate: undefinedIsNull(record.last_update),
              picture: undefinedIsNull(record.picture),
            }))[0];
          }

          async delete(
            parameters: Public.Tables.Staff.ByStaffId,
          ): Promise<Public.Tables.Staff.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.staff 
    WHERE
      staff_id = ${
        parameters.staffId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.staffId)
      }
    RETURNING staff_id,first_name,last_name,address_id,email,store_id,active,username,password,last_update,picture`;
            return response.map((record) => ({
              staffId: undefinedIsNull(record.staff_id),
              firstName: undefinedIsNull(record.first_name),
              lastName: undefinedIsNull(record.last_name),
              addressId: undefinedIsNull(record.address_id),
              email: undefinedIsNull(record.email),
              storeId: undefinedIsNull(record.store_id),
              active: undefinedIsNull(record.active),
              username: undefinedIsNull(record.username),
              password: undefinedIsNull(record.password),
              lastUpdate: undefinedIsNull(record.last_update),
              picture: undefinedIsNull(record.picture),
            }))[0];
          }
        })(this);
      })(this);

      public Store = new (class implements HasDatabase {
        constructor(private hasDatabase: HasDatabase) {}

        get database() {
          return this.hasDatabase.database;
        }

        async create(
          values: Public.Tables.Store.Values,
        ): Promise<Public.Tables.Store.Record> {
          const sql = this.database.context.sql;
          const typed = sql.typed as unknown as PostgresTypecasts;

          if (!Public.Tables.Store.includesPrimaryKey(values)) {
            const response = await sql`
      --
      INSERT INTO
        public.store (manager_staff_id,address_id,last_update)
      VALUES (${
        values.managerStaffId === undefined
          ? sql`DEFAULT`
          : typed[21](values.managerStaffId)
      },${
        values.addressId === undefined
          ? sql`DEFAULT`
          : typed[21](values.addressId)
      },${
        values.lastUpdate === undefined
          ? sql`DEFAULT`
          : typed[1114](values.lastUpdate)
      })
      RETURNING
        store_id,manager_staff_id,address_id,last_update
    `;
            return response.map((record) => ({
              storeId: undefinedIsNull(record.store_id),
              managerStaffId: undefinedIsNull(record.manager_staff_id),
              addressId: undefinedIsNull(record.address_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }
          const response = await sql`
    INSERT INTO
      public.store (store_id,manager_staff_id,address_id,last_update)
    VALUES (${
      values.storeId === undefined ? sql`DEFAULT` : typed[23](values.storeId)
    },${
      values.managerStaffId === undefined
        ? sql`DEFAULT`
        : typed[21](values.managerStaffId)
    },${
      values.addressId === undefined
        ? sql`DEFAULT`
        : typed[21](values.addressId)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed[1114](values.lastUpdate)
    })
    ON CONFLICT (store_id) DO UPDATE
    SET
      manager_staff_id = EXCLUDED.manager_staff_id,address_id = EXCLUDED.address_id,last_update = EXCLUDED.last_update
    RETURNING
      store_id,manager_staff_id,address_id,last_update
    `;
          return response.map((record) => ({
            storeId: undefinedIsNull(record.store_id),
            managerStaffId: undefinedIsNull(record.manager_staff_id),
            addressId: undefinedIsNull(record.address_id),
            lastUpdate: undefinedIsNull(record.last_update),
          }))[0];
        }

        public ByManagerStaffId = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.Store.ByManagerStaffId,
          ): Promise<Public.Tables.Store.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      store_id,manager_staff_id,address_id,last_update 
    FROM
      public.store 
    WHERE
      manager_staff_id = ${
        parameters.managerStaffId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.managerStaffId)
      }
    `;
            return response.map((record) => ({
              storeId: undefinedIsNull(record.store_id),
              managerStaffId: undefinedIsNull(record.manager_staff_id),
              addressId: undefinedIsNull(record.address_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }

          async update(
            parameters: Public.Tables.Store.ByManagerStaffId,
            values: Partial<Public.Tables.Store.Values>,
          ): Promise<Public.Tables.Store.Record> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.store 
    SET
      store_id = ${
        values.storeId === undefined ? sql`store_id` : typed[23](values.storeId)
      } , manager_staff_id = ${
        values.managerStaffId === undefined
          ? sql`manager_staff_id`
          : typed[21](values.managerStaffId)
      } , address_id = ${
        values.addressId === undefined
          ? sql`address_id`
          : typed[21](values.addressId)
      } , last_update = ${
        values.lastUpdate === undefined
          ? sql`last_update`
          : typed[1114](values.lastUpdate)
      } 
    WHERE
      manager_staff_id = ${
        parameters.managerStaffId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.managerStaffId)
      }
    RETURNING store_id,manager_staff_id,address_id,last_update`;
            return response.map((record) => ({
              storeId: undefinedIsNull(record.store_id),
              managerStaffId: undefinedIsNull(record.manager_staff_id),
              addressId: undefinedIsNull(record.address_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }

          async delete(
            parameters: Public.Tables.Store.ByManagerStaffId,
          ): Promise<Public.Tables.Store.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.store 
    WHERE
      manager_staff_id = ${
        parameters.managerStaffId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.managerStaffId)
      }
    RETURNING store_id,manager_staff_id,address_id,last_update`;
            return response.map((record) => ({
              storeId: undefinedIsNull(record.store_id),
              managerStaffId: undefinedIsNull(record.manager_staff_id),
              addressId: undefinedIsNull(record.address_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }
        })(this);

        public ByStoreId = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.Store.ByStoreId,
          ): Promise<Public.Tables.Store.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      store_id,manager_staff_id,address_id,last_update 
    FROM
      public.store 
    WHERE
      store_id = ${
        parameters.storeId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.storeId)
      }
    `;
            return response.map((record) => ({
              storeId: undefinedIsNull(record.store_id),
              managerStaffId: undefinedIsNull(record.manager_staff_id),
              addressId: undefinedIsNull(record.address_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }

          async update(
            parameters: Public.Tables.Store.ByStoreId,
            values: Partial<Public.Tables.Store.Values>,
          ): Promise<Public.Tables.Store.Record> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.store 
    SET
      store_id = ${
        values.storeId === undefined ? sql`store_id` : typed[23](values.storeId)
      } , manager_staff_id = ${
        values.managerStaffId === undefined
          ? sql`manager_staff_id`
          : typed[21](values.managerStaffId)
      } , address_id = ${
        values.addressId === undefined
          ? sql`address_id`
          : typed[21](values.addressId)
      } , last_update = ${
        values.lastUpdate === undefined
          ? sql`last_update`
          : typed[1114](values.lastUpdate)
      } 
    WHERE
      store_id = ${
        parameters.storeId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.storeId)
      }
    RETURNING store_id,manager_staff_id,address_id,last_update`;
            return response.map((record) => ({
              storeId: undefinedIsNull(record.store_id),
              managerStaffId: undefinedIsNull(record.manager_staff_id),
              addressId: undefinedIsNull(record.address_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }

          async delete(
            parameters: Public.Tables.Store.ByStoreId,
          ): Promise<Public.Tables.Store.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.store 
    WHERE
      store_id = ${
        parameters.storeId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.storeId)
      }
    RETURNING store_id,manager_staff_id,address_id,last_update`;
            return response.map((record) => ({
              storeId: undefinedIsNull(record.store_id),
              managerStaffId: undefinedIsNull(record.manager_staff_id),
              addressId: undefinedIsNull(record.address_id),
              lastUpdate: undefinedIsNull(record.last_update),
            }))[0];
          }
        })(this);
      })(this);

      public Payment = new (class implements HasDatabase {
        constructor(private hasDatabase: HasDatabase) {}

        get database() {
          return this.hasDatabase.database;
        }

        async create(
          values: Public.Tables.Payment.Values,
        ): Promise<Public.Tables.Payment.Record> {
          const sql = this.database.context.sql;
          const typed = sql.typed as unknown as PostgresTypecasts;

          if (!Public.Tables.Payment.includesPrimaryKey(values)) {
            const response = await sql`
      --
      INSERT INTO
        public.payment (customer_id,staff_id,rental_id,amount,payment_date)
      VALUES (${
        values.customerId === undefined
          ? sql`DEFAULT`
          : typed[21](values.customerId)
      },${
        values.staffId === undefined ? sql`DEFAULT` : typed[21](values.staffId)
      },${
        values.rentalId === undefined
          ? sql`DEFAULT`
          : typed[23](values.rentalId)
      },${
        values.amount === undefined ? sql`DEFAULT` : typed[1700](values.amount)
      },${
        values.paymentDate === undefined
          ? sql`DEFAULT`
          : typed[1114](values.paymentDate)
      })
      RETURNING
        payment_id,customer_id,staff_id,rental_id,amount,payment_date
    `;
            return response.map((record) => ({
              paymentId: undefinedIsNull(record.payment_id),
              customerId: undefinedIsNull(record.customer_id),
              staffId: undefinedIsNull(record.staff_id),
              rentalId: undefinedIsNull(record.rental_id),
              amount: undefinedIsNull(record.amount),
              paymentDate: undefinedIsNull(record.payment_date),
            }))[0];
          }
          const response = await sql`
    INSERT INTO
      public.payment (payment_id,customer_id,staff_id,rental_id,amount,payment_date)
    VALUES (${
      values.paymentId === undefined
        ? sql`DEFAULT`
        : typed[23](values.paymentId)
    },${
      values.customerId === undefined
        ? sql`DEFAULT`
        : typed[21](values.customerId)
    },${
      values.staffId === undefined ? sql`DEFAULT` : typed[21](values.staffId)
    },${
      values.rentalId === undefined ? sql`DEFAULT` : typed[23](values.rentalId)
    },${
      values.amount === undefined ? sql`DEFAULT` : typed[1700](values.amount)
    },${
      values.paymentDate === undefined
        ? sql`DEFAULT`
        : typed[1114](values.paymentDate)
    })
    ON CONFLICT (payment_id) DO UPDATE
    SET
      customer_id = EXCLUDED.customer_id,staff_id = EXCLUDED.staff_id,rental_id = EXCLUDED.rental_id,amount = EXCLUDED.amount,payment_date = EXCLUDED.payment_date
    RETURNING
      payment_id,customer_id,staff_id,rental_id,amount,payment_date
    `;
          return response.map((record) => ({
            paymentId: undefinedIsNull(record.payment_id),
            customerId: undefinedIsNull(record.customer_id),
            staffId: undefinedIsNull(record.staff_id),
            rentalId: undefinedIsNull(record.rental_id),
            amount: undefinedIsNull(record.amount),
            paymentDate: undefinedIsNull(record.payment_date),
          }))[0];
        }

        public ByCustomerId = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.Payment.ByCustomerId,
          ): Promise<Public.Tables.Payment.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      payment_id,customer_id,staff_id,rental_id,amount,payment_date 
    FROM
      public.payment 
    WHERE
      customer_id = ${
        parameters.customerId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.customerId)
      }
    `;
            return response.map((record) => ({
              paymentId: undefinedIsNull(record.payment_id),
              customerId: undefinedIsNull(record.customer_id),
              staffId: undefinedIsNull(record.staff_id),
              rentalId: undefinedIsNull(record.rental_id),
              amount: undefinedIsNull(record.amount),
              paymentDate: undefinedIsNull(record.payment_date),
            }));
          }

          async update(
            parameters: Public.Tables.Payment.ByCustomerId,
            values: Partial<Public.Tables.Payment.Values>,
          ): Promise<Public.Tables.Payment.Record[]> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.payment 
    SET
      payment_id = ${
        values.paymentId === undefined
          ? sql`payment_id`
          : typed[23](values.paymentId)
      } , customer_id = ${
        values.customerId === undefined
          ? sql`customer_id`
          : typed[21](values.customerId)
      } , staff_id = ${
        values.staffId === undefined ? sql`staff_id` : typed[21](values.staffId)
      } , rental_id = ${
        values.rentalId === undefined
          ? sql`rental_id`
          : typed[23](values.rentalId)
      } , amount = ${
        values.amount === undefined ? sql`amount` : typed[1700](values.amount)
      } , payment_date = ${
        values.paymentDate === undefined
          ? sql`payment_date`
          : typed[1114](values.paymentDate)
      } 
    WHERE
      customer_id = ${
        parameters.customerId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.customerId)
      }
    RETURNING payment_id,customer_id,staff_id,rental_id,amount,payment_date`;
            return response.map((record) => ({
              paymentId: undefinedIsNull(record.payment_id),
              customerId: undefinedIsNull(record.customer_id),
              staffId: undefinedIsNull(record.staff_id),
              rentalId: undefinedIsNull(record.rental_id),
              amount: undefinedIsNull(record.amount),
              paymentDate: undefinedIsNull(record.payment_date),
            }));
          }

          async delete(
            parameters: Public.Tables.Payment.ByCustomerId,
          ): Promise<Public.Tables.Payment.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.payment 
    WHERE
      customer_id = ${
        parameters.customerId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.customerId)
      }
    RETURNING payment_id,customer_id,staff_id,rental_id,amount,payment_date`;
            return response.map((record) => ({
              paymentId: undefinedIsNull(record.payment_id),
              customerId: undefinedIsNull(record.customer_id),
              staffId: undefinedIsNull(record.staff_id),
              rentalId: undefinedIsNull(record.rental_id),
              amount: undefinedIsNull(record.amount),
              paymentDate: undefinedIsNull(record.payment_date),
            }));
          }
        })(this);

        public ByPaymentId = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.Payment.ByPaymentId,
          ): Promise<Public.Tables.Payment.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      payment_id,customer_id,staff_id,rental_id,amount,payment_date 
    FROM
      public.payment 
    WHERE
      payment_id = ${
        parameters.paymentId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.paymentId)
      }
    `;
            return response.map((record) => ({
              paymentId: undefinedIsNull(record.payment_id),
              customerId: undefinedIsNull(record.customer_id),
              staffId: undefinedIsNull(record.staff_id),
              rentalId: undefinedIsNull(record.rental_id),
              amount: undefinedIsNull(record.amount),
              paymentDate: undefinedIsNull(record.payment_date),
            }))[0];
          }

          async update(
            parameters: Public.Tables.Payment.ByPaymentId,
            values: Partial<Public.Tables.Payment.Values>,
          ): Promise<Public.Tables.Payment.Record> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.payment 
    SET
      payment_id = ${
        values.paymentId === undefined
          ? sql`payment_id`
          : typed[23](values.paymentId)
      } , customer_id = ${
        values.customerId === undefined
          ? sql`customer_id`
          : typed[21](values.customerId)
      } , staff_id = ${
        values.staffId === undefined ? sql`staff_id` : typed[21](values.staffId)
      } , rental_id = ${
        values.rentalId === undefined
          ? sql`rental_id`
          : typed[23](values.rentalId)
      } , amount = ${
        values.amount === undefined ? sql`amount` : typed[1700](values.amount)
      } , payment_date = ${
        values.paymentDate === undefined
          ? sql`payment_date`
          : typed[1114](values.paymentDate)
      } 
    WHERE
      payment_id = ${
        parameters.paymentId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.paymentId)
      }
    RETURNING payment_id,customer_id,staff_id,rental_id,amount,payment_date`;
            return response.map((record) => ({
              paymentId: undefinedIsNull(record.payment_id),
              customerId: undefinedIsNull(record.customer_id),
              staffId: undefinedIsNull(record.staff_id),
              rentalId: undefinedIsNull(record.rental_id),
              amount: undefinedIsNull(record.amount),
              paymentDate: undefinedIsNull(record.payment_date),
            }))[0];
          }

          async delete(
            parameters: Public.Tables.Payment.ByPaymentId,
          ): Promise<Public.Tables.Payment.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.payment 
    WHERE
      payment_id = ${
        parameters.paymentId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.paymentId)
      }
    RETURNING payment_id,customer_id,staff_id,rental_id,amount,payment_date`;
            return response.map((record) => ({
              paymentId: undefinedIsNull(record.payment_id),
              customerId: undefinedIsNull(record.customer_id),
              staffId: undefinedIsNull(record.staff_id),
              rentalId: undefinedIsNull(record.rental_id),
              amount: undefinedIsNull(record.amount),
              paymentDate: undefinedIsNull(record.payment_date),
            }))[0];
          }
        })(this);

        public ByRentalId = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.Payment.ByRentalId,
          ): Promise<Public.Tables.Payment.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      payment_id,customer_id,staff_id,rental_id,amount,payment_date 
    FROM
      public.payment 
    WHERE
      rental_id = ${
        parameters.rentalId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.rentalId)
      }
    `;
            return response.map((record) => ({
              paymentId: undefinedIsNull(record.payment_id),
              customerId: undefinedIsNull(record.customer_id),
              staffId: undefinedIsNull(record.staff_id),
              rentalId: undefinedIsNull(record.rental_id),
              amount: undefinedIsNull(record.amount),
              paymentDate: undefinedIsNull(record.payment_date),
            }));
          }

          async update(
            parameters: Public.Tables.Payment.ByRentalId,
            values: Partial<Public.Tables.Payment.Values>,
          ): Promise<Public.Tables.Payment.Record[]> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.payment 
    SET
      payment_id = ${
        values.paymentId === undefined
          ? sql`payment_id`
          : typed[23](values.paymentId)
      } , customer_id = ${
        values.customerId === undefined
          ? sql`customer_id`
          : typed[21](values.customerId)
      } , staff_id = ${
        values.staffId === undefined ? sql`staff_id` : typed[21](values.staffId)
      } , rental_id = ${
        values.rentalId === undefined
          ? sql`rental_id`
          : typed[23](values.rentalId)
      } , amount = ${
        values.amount === undefined ? sql`amount` : typed[1700](values.amount)
      } , payment_date = ${
        values.paymentDate === undefined
          ? sql`payment_date`
          : typed[1114](values.paymentDate)
      } 
    WHERE
      rental_id = ${
        parameters.rentalId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.rentalId)
      }
    RETURNING payment_id,customer_id,staff_id,rental_id,amount,payment_date`;
            return response.map((record) => ({
              paymentId: undefinedIsNull(record.payment_id),
              customerId: undefinedIsNull(record.customer_id),
              staffId: undefinedIsNull(record.staff_id),
              rentalId: undefinedIsNull(record.rental_id),
              amount: undefinedIsNull(record.amount),
              paymentDate: undefinedIsNull(record.payment_date),
            }));
          }

          async delete(
            parameters: Public.Tables.Payment.ByRentalId,
          ): Promise<Public.Tables.Payment.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.payment 
    WHERE
      rental_id = ${
        parameters.rentalId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.rentalId)
      }
    RETURNING payment_id,customer_id,staff_id,rental_id,amount,payment_date`;
            return response.map((record) => ({
              paymentId: undefinedIsNull(record.payment_id),
              customerId: undefinedIsNull(record.customer_id),
              staffId: undefinedIsNull(record.staff_id),
              rentalId: undefinedIsNull(record.rental_id),
              amount: undefinedIsNull(record.amount),
              paymentDate: undefinedIsNull(record.payment_date),
            }));
          }
        })(this);

        public ByStaffId = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.Payment.ByStaffId,
          ): Promise<Public.Tables.Payment.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      payment_id,customer_id,staff_id,rental_id,amount,payment_date 
    FROM
      public.payment 
    WHERE
      staff_id = ${
        parameters.staffId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.staffId)
      }
    `;
            return response.map((record) => ({
              paymentId: undefinedIsNull(record.payment_id),
              customerId: undefinedIsNull(record.customer_id),
              staffId: undefinedIsNull(record.staff_id),
              rentalId: undefinedIsNull(record.rental_id),
              amount: undefinedIsNull(record.amount),
              paymentDate: undefinedIsNull(record.payment_date),
            }));
          }

          async update(
            parameters: Public.Tables.Payment.ByStaffId,
            values: Partial<Public.Tables.Payment.Values>,
          ): Promise<Public.Tables.Payment.Record[]> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.payment 
    SET
      payment_id = ${
        values.paymentId === undefined
          ? sql`payment_id`
          : typed[23](values.paymentId)
      } , customer_id = ${
        values.customerId === undefined
          ? sql`customer_id`
          : typed[21](values.customerId)
      } , staff_id = ${
        values.staffId === undefined ? sql`staff_id` : typed[21](values.staffId)
      } , rental_id = ${
        values.rentalId === undefined
          ? sql`rental_id`
          : typed[23](values.rentalId)
      } , amount = ${
        values.amount === undefined ? sql`amount` : typed[1700](values.amount)
      } , payment_date = ${
        values.paymentDate === undefined
          ? sql`payment_date`
          : typed[1114](values.paymentDate)
      } 
    WHERE
      staff_id = ${
        parameters.staffId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.staffId)
      }
    RETURNING payment_id,customer_id,staff_id,rental_id,amount,payment_date`;
            return response.map((record) => ({
              paymentId: undefinedIsNull(record.payment_id),
              customerId: undefinedIsNull(record.customer_id),
              staffId: undefinedIsNull(record.staff_id),
              rentalId: undefinedIsNull(record.rental_id),
              amount: undefinedIsNull(record.amount),
              paymentDate: undefinedIsNull(record.payment_date),
            }));
          }

          async delete(
            parameters: Public.Tables.Payment.ByStaffId,
          ): Promise<Public.Tables.Payment.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.payment 
    WHERE
      staff_id = ${
        parameters.staffId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.staffId)
      }
    RETURNING payment_id,customer_id,staff_id,rental_id,amount,payment_date`;
            return response.map((record) => ({
              paymentId: undefinedIsNull(record.payment_id),
              customerId: undefinedIsNull(record.customer_id),
              staffId: undefinedIsNull(record.staff_id),
              rentalId: undefinedIsNull(record.rental_id),
              amount: undefinedIsNull(record.amount),
              paymentDate: undefinedIsNull(record.payment_date),
            }));
          }
        })(this);
      })(this);

      public Film = new (class implements HasDatabase {
        constructor(private hasDatabase: HasDatabase) {}

        get database() {
          return this.hasDatabase.database;
        }

        async create(
          values: Public.Tables.Film.Values,
        ): Promise<Public.Tables.Film.Record> {
          const sql = this.database.context.sql;
          const typed = sql.typed as unknown as PostgresTypecasts;

          if (!Public.Tables.Film.includesPrimaryKey(values)) {
            const response = await sql`
      --
      INSERT INTO
        public.film (title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext)
      VALUES (${
        values.title === undefined ? sql`DEFAULT` : typed[1043](values.title)
      },${
        values.description === undefined
          ? sql`DEFAULT`
          : typed[25](values.description)
      },${
        values.releaseYear === undefined
          ? sql`DEFAULT`
          : typed[25154](values.releaseYear)
      },${
        values.languageId === undefined
          ? sql`DEFAULT`
          : typed[21](values.languageId)
      },${
        values.rentalDuration === undefined
          ? sql`DEFAULT`
          : typed[21](values.rentalDuration)
      },${
        values.rentalRate === undefined
          ? sql`DEFAULT`
          : typed[1700](values.rentalRate)
      },${
        values.length === undefined ? sql`DEFAULT` : typed[21](values.length)
      },${
        values.replacementCost === undefined
          ? sql`DEFAULT`
          : typed[1700](values.replacementCost)
      },${
        values.rating === undefined ? sql`DEFAULT` : typed[25143](values.rating)
      },${
        values.lastUpdate === undefined
          ? sql`DEFAULT`
          : typed[1114](values.lastUpdate)
      },${
        values.specialFeatures === undefined
          ? sql`DEFAULT`
          : typed[1009](values.specialFeatures)
      },${
        values.fulltext === undefined
          ? sql`DEFAULT`
          : typed[3614](values.fulltext)
      })
      RETURNING
        film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext
    `;
            return response.map((record) => ({
              filmId: undefinedIsNull(record.film_id),
              title: undefinedIsNull(record.title),
              description: undefinedIsNull(record.description),
              releaseYear: undefinedIsNull(record.release_year),
              languageId: undefinedIsNull(record.language_id),
              rentalDuration: undefinedIsNull(record.rental_duration),
              rentalRate: undefinedIsNull(record.rental_rate),
              length: undefinedIsNull(record.length),
              replacementCost: undefinedIsNull(record.replacement_cost),
              rating: undefinedIsNull(record.rating),
              lastUpdate: undefinedIsNull(record.last_update),
              specialFeatures: undefinedIsNull(record.special_features),
              fulltext: undefinedIsNull(record.fulltext),
            }))[0];
          }
          const response = await sql`
    INSERT INTO
      public.film (film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext)
    VALUES (${
      values.filmId === undefined ? sql`DEFAULT` : typed[23](values.filmId)
    },${
      values.title === undefined ? sql`DEFAULT` : typed[1043](values.title)
    },${
      values.description === undefined
        ? sql`DEFAULT`
        : typed[25](values.description)
    },${
      values.releaseYear === undefined
        ? sql`DEFAULT`
        : typed[25154](values.releaseYear)
    },${
      values.languageId === undefined
        ? sql`DEFAULT`
        : typed[21](values.languageId)
    },${
      values.rentalDuration === undefined
        ? sql`DEFAULT`
        : typed[21](values.rentalDuration)
    },${
      values.rentalRate === undefined
        ? sql`DEFAULT`
        : typed[1700](values.rentalRate)
    },${
      values.length === undefined ? sql`DEFAULT` : typed[21](values.length)
    },${
      values.replacementCost === undefined
        ? sql`DEFAULT`
        : typed[1700](values.replacementCost)
    },${
      values.rating === undefined ? sql`DEFAULT` : typed[25143](values.rating)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed[1114](values.lastUpdate)
    },${
      values.specialFeatures === undefined
        ? sql`DEFAULT`
        : typed[1009](values.specialFeatures)
    },${
      values.fulltext === undefined
        ? sql`DEFAULT`
        : typed[3614](values.fulltext)
    })
    ON CONFLICT (film_id) DO UPDATE
    SET
      title = EXCLUDED.title,description = EXCLUDED.description,release_year = EXCLUDED.release_year,language_id = EXCLUDED.language_id,rental_duration = EXCLUDED.rental_duration,rental_rate = EXCLUDED.rental_rate,length = EXCLUDED.length,replacement_cost = EXCLUDED.replacement_cost,rating = EXCLUDED.rating,last_update = EXCLUDED.last_update,special_features = EXCLUDED.special_features,fulltext = EXCLUDED.fulltext
    RETURNING
      film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext
    `;
          return response.map((record) => ({
            filmId: undefinedIsNull(record.film_id),
            title: undefinedIsNull(record.title),
            description: undefinedIsNull(record.description),
            releaseYear: undefinedIsNull(record.release_year),
            languageId: undefinedIsNull(record.language_id),
            rentalDuration: undefinedIsNull(record.rental_duration),
            rentalRate: undefinedIsNull(record.rental_rate),
            length: undefinedIsNull(record.length),
            replacementCost: undefinedIsNull(record.replacement_cost),
            rating: undefinedIsNull(record.rating),
            lastUpdate: undefinedIsNull(record.last_update),
            specialFeatures: undefinedIsNull(record.special_features),
            fulltext: undefinedIsNull(record.fulltext),
          }))[0];
        }

        public ByFilmId = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.Film.ByFilmId,
          ): Promise<Public.Tables.Film.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext 
    FROM
      public.film 
    WHERE
      film_id = ${
        parameters.filmId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.filmId)
      }
    `;
            return response.map((record) => ({
              filmId: undefinedIsNull(record.film_id),
              title: undefinedIsNull(record.title),
              description: undefinedIsNull(record.description),
              releaseYear: undefinedIsNull(record.release_year),
              languageId: undefinedIsNull(record.language_id),
              rentalDuration: undefinedIsNull(record.rental_duration),
              rentalRate: undefinedIsNull(record.rental_rate),
              length: undefinedIsNull(record.length),
              replacementCost: undefinedIsNull(record.replacement_cost),
              rating: undefinedIsNull(record.rating),
              lastUpdate: undefinedIsNull(record.last_update),
              specialFeatures: undefinedIsNull(record.special_features),
              fulltext: undefinedIsNull(record.fulltext),
            }))[0];
          }

          async update(
            parameters: Public.Tables.Film.ByFilmId,
            values: Partial<Public.Tables.Film.Values>,
          ): Promise<Public.Tables.Film.Record> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.film 
    SET
      film_id = ${
        values.filmId === undefined ? sql`film_id` : typed[23](values.filmId)
      } , title = ${
        values.title === undefined ? sql`title` : typed[1043](values.title)
      } , description = ${
        values.description === undefined
          ? sql`description`
          : typed[25](values.description)
      } , release_year = ${
        values.releaseYear === undefined
          ? sql`release_year`
          : typed[25154](values.releaseYear)
      } , language_id = ${
        values.languageId === undefined
          ? sql`language_id`
          : typed[21](values.languageId)
      } , rental_duration = ${
        values.rentalDuration === undefined
          ? sql`rental_duration`
          : typed[21](values.rentalDuration)
      } , rental_rate = ${
        values.rentalRate === undefined
          ? sql`rental_rate`
          : typed[1700](values.rentalRate)
      } , length = ${
        values.length === undefined ? sql`length` : typed[21](values.length)
      } , replacement_cost = ${
        values.replacementCost === undefined
          ? sql`replacement_cost`
          : typed[1700](values.replacementCost)
      } , rating = ${
        values.rating === undefined ? sql`rating` : typed[25143](values.rating)
      } , last_update = ${
        values.lastUpdate === undefined
          ? sql`last_update`
          : typed[1114](values.lastUpdate)
      } , special_features = ${
        values.specialFeatures === undefined
          ? sql`special_features`
          : typed[1009](values.specialFeatures)
      } , fulltext = ${
        values.fulltext === undefined
          ? sql`fulltext`
          : typed[3614](values.fulltext)
      } 
    WHERE
      film_id = ${
        parameters.filmId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.filmId)
      }
    RETURNING film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext`;
            return response.map((record) => ({
              filmId: undefinedIsNull(record.film_id),
              title: undefinedIsNull(record.title),
              description: undefinedIsNull(record.description),
              releaseYear: undefinedIsNull(record.release_year),
              languageId: undefinedIsNull(record.language_id),
              rentalDuration: undefinedIsNull(record.rental_duration),
              rentalRate: undefinedIsNull(record.rental_rate),
              length: undefinedIsNull(record.length),
              replacementCost: undefinedIsNull(record.replacement_cost),
              rating: undefinedIsNull(record.rating),
              lastUpdate: undefinedIsNull(record.last_update),
              specialFeatures: undefinedIsNull(record.special_features),
              fulltext: undefinedIsNull(record.fulltext),
            }))[0];
          }

          async delete(
            parameters: Public.Tables.Film.ByFilmId,
          ): Promise<Public.Tables.Film.Record> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.film 
    WHERE
      film_id = ${
        parameters.filmId === undefined
          ? sql`DEFAULT`
          : typed[23](parameters.filmId)
      }
    RETURNING film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext`;
            return response.map((record) => ({
              filmId: undefinedIsNull(record.film_id),
              title: undefinedIsNull(record.title),
              description: undefinedIsNull(record.description),
              releaseYear: undefinedIsNull(record.release_year),
              languageId: undefinedIsNull(record.language_id),
              rentalDuration: undefinedIsNull(record.rental_duration),
              rentalRate: undefinedIsNull(record.rental_rate),
              length: undefinedIsNull(record.length),
              replacementCost: undefinedIsNull(record.replacement_cost),
              rating: undefinedIsNull(record.rating),
              lastUpdate: undefinedIsNull(record.last_update),
              specialFeatures: undefinedIsNull(record.special_features),
              fulltext: undefinedIsNull(record.fulltext),
            }))[0];
          }
        })(this);

        public ByFulltext = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.Film.ByFulltext,
          ): Promise<Public.Tables.Film.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext 
    FROM
      public.film 
    WHERE
      fulltext = ${
        parameters.fulltext === undefined
          ? sql`DEFAULT`
          : typed[3642](parameters.fulltext)
      }
    `;
            return response.map((record) => ({
              filmId: undefinedIsNull(record.film_id),
              title: undefinedIsNull(record.title),
              description: undefinedIsNull(record.description),
              releaseYear: undefinedIsNull(record.release_year),
              languageId: undefinedIsNull(record.language_id),
              rentalDuration: undefinedIsNull(record.rental_duration),
              rentalRate: undefinedIsNull(record.rental_rate),
              length: undefinedIsNull(record.length),
              replacementCost: undefinedIsNull(record.replacement_cost),
              rating: undefinedIsNull(record.rating),
              lastUpdate: undefinedIsNull(record.last_update),
              specialFeatures: undefinedIsNull(record.special_features),
              fulltext: undefinedIsNull(record.fulltext),
            }));
          }

          async update(
            parameters: Public.Tables.Film.ByFulltext,
            values: Partial<Public.Tables.Film.Values>,
          ): Promise<Public.Tables.Film.Record[]> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.film 
    SET
      film_id = ${
        values.filmId === undefined ? sql`film_id` : typed[23](values.filmId)
      } , title = ${
        values.title === undefined ? sql`title` : typed[1043](values.title)
      } , description = ${
        values.description === undefined
          ? sql`description`
          : typed[25](values.description)
      } , release_year = ${
        values.releaseYear === undefined
          ? sql`release_year`
          : typed[25154](values.releaseYear)
      } , language_id = ${
        values.languageId === undefined
          ? sql`language_id`
          : typed[21](values.languageId)
      } , rental_duration = ${
        values.rentalDuration === undefined
          ? sql`rental_duration`
          : typed[21](values.rentalDuration)
      } , rental_rate = ${
        values.rentalRate === undefined
          ? sql`rental_rate`
          : typed[1700](values.rentalRate)
      } , length = ${
        values.length === undefined ? sql`length` : typed[21](values.length)
      } , replacement_cost = ${
        values.replacementCost === undefined
          ? sql`replacement_cost`
          : typed[1700](values.replacementCost)
      } , rating = ${
        values.rating === undefined ? sql`rating` : typed[25143](values.rating)
      } , last_update = ${
        values.lastUpdate === undefined
          ? sql`last_update`
          : typed[1114](values.lastUpdate)
      } , special_features = ${
        values.specialFeatures === undefined
          ? sql`special_features`
          : typed[1009](values.specialFeatures)
      } , fulltext = ${
        values.fulltext === undefined
          ? sql`fulltext`
          : typed[3614](values.fulltext)
      } 
    WHERE
      fulltext = ${
        parameters.fulltext === undefined
          ? sql`DEFAULT`
          : typed[3642](parameters.fulltext)
      }
    RETURNING film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext`;
            return response.map((record) => ({
              filmId: undefinedIsNull(record.film_id),
              title: undefinedIsNull(record.title),
              description: undefinedIsNull(record.description),
              releaseYear: undefinedIsNull(record.release_year),
              languageId: undefinedIsNull(record.language_id),
              rentalDuration: undefinedIsNull(record.rental_duration),
              rentalRate: undefinedIsNull(record.rental_rate),
              length: undefinedIsNull(record.length),
              replacementCost: undefinedIsNull(record.replacement_cost),
              rating: undefinedIsNull(record.rating),
              lastUpdate: undefinedIsNull(record.last_update),
              specialFeatures: undefinedIsNull(record.special_features),
              fulltext: undefinedIsNull(record.fulltext),
            }));
          }

          async delete(
            parameters: Public.Tables.Film.ByFulltext,
          ): Promise<Public.Tables.Film.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.film 
    WHERE
      fulltext = ${
        parameters.fulltext === undefined
          ? sql`DEFAULT`
          : typed[3642](parameters.fulltext)
      }
    RETURNING film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext`;
            return response.map((record) => ({
              filmId: undefinedIsNull(record.film_id),
              title: undefinedIsNull(record.title),
              description: undefinedIsNull(record.description),
              releaseYear: undefinedIsNull(record.release_year),
              languageId: undefinedIsNull(record.language_id),
              rentalDuration: undefinedIsNull(record.rental_duration),
              rentalRate: undefinedIsNull(record.rental_rate),
              length: undefinedIsNull(record.length),
              replacementCost: undefinedIsNull(record.replacement_cost),
              rating: undefinedIsNull(record.rating),
              lastUpdate: undefinedIsNull(record.last_update),
              specialFeatures: undefinedIsNull(record.special_features),
              fulltext: undefinedIsNull(record.fulltext),
            }));
          }
        })(this);

        public ByLanguageId = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.Film.ByLanguageId,
          ): Promise<Public.Tables.Film.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext 
    FROM
      public.film 
    WHERE
      language_id = ${
        parameters.languageId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.languageId)
      }
    `;
            return response.map((record) => ({
              filmId: undefinedIsNull(record.film_id),
              title: undefinedIsNull(record.title),
              description: undefinedIsNull(record.description),
              releaseYear: undefinedIsNull(record.release_year),
              languageId: undefinedIsNull(record.language_id),
              rentalDuration: undefinedIsNull(record.rental_duration),
              rentalRate: undefinedIsNull(record.rental_rate),
              length: undefinedIsNull(record.length),
              replacementCost: undefinedIsNull(record.replacement_cost),
              rating: undefinedIsNull(record.rating),
              lastUpdate: undefinedIsNull(record.last_update),
              specialFeatures: undefinedIsNull(record.special_features),
              fulltext: undefinedIsNull(record.fulltext),
            }));
          }

          async update(
            parameters: Public.Tables.Film.ByLanguageId,
            values: Partial<Public.Tables.Film.Values>,
          ): Promise<Public.Tables.Film.Record[]> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.film 
    SET
      film_id = ${
        values.filmId === undefined ? sql`film_id` : typed[23](values.filmId)
      } , title = ${
        values.title === undefined ? sql`title` : typed[1043](values.title)
      } , description = ${
        values.description === undefined
          ? sql`description`
          : typed[25](values.description)
      } , release_year = ${
        values.releaseYear === undefined
          ? sql`release_year`
          : typed[25154](values.releaseYear)
      } , language_id = ${
        values.languageId === undefined
          ? sql`language_id`
          : typed[21](values.languageId)
      } , rental_duration = ${
        values.rentalDuration === undefined
          ? sql`rental_duration`
          : typed[21](values.rentalDuration)
      } , rental_rate = ${
        values.rentalRate === undefined
          ? sql`rental_rate`
          : typed[1700](values.rentalRate)
      } , length = ${
        values.length === undefined ? sql`length` : typed[21](values.length)
      } , replacement_cost = ${
        values.replacementCost === undefined
          ? sql`replacement_cost`
          : typed[1700](values.replacementCost)
      } , rating = ${
        values.rating === undefined ? sql`rating` : typed[25143](values.rating)
      } , last_update = ${
        values.lastUpdate === undefined
          ? sql`last_update`
          : typed[1114](values.lastUpdate)
      } , special_features = ${
        values.specialFeatures === undefined
          ? sql`special_features`
          : typed[1009](values.specialFeatures)
      } , fulltext = ${
        values.fulltext === undefined
          ? sql`fulltext`
          : typed[3614](values.fulltext)
      } 
    WHERE
      language_id = ${
        parameters.languageId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.languageId)
      }
    RETURNING film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext`;
            return response.map((record) => ({
              filmId: undefinedIsNull(record.film_id),
              title: undefinedIsNull(record.title),
              description: undefinedIsNull(record.description),
              releaseYear: undefinedIsNull(record.release_year),
              languageId: undefinedIsNull(record.language_id),
              rentalDuration: undefinedIsNull(record.rental_duration),
              rentalRate: undefinedIsNull(record.rental_rate),
              length: undefinedIsNull(record.length),
              replacementCost: undefinedIsNull(record.replacement_cost),
              rating: undefinedIsNull(record.rating),
              lastUpdate: undefinedIsNull(record.last_update),
              specialFeatures: undefinedIsNull(record.special_features),
              fulltext: undefinedIsNull(record.fulltext),
            }));
          }

          async delete(
            parameters: Public.Tables.Film.ByLanguageId,
          ): Promise<Public.Tables.Film.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.film 
    WHERE
      language_id = ${
        parameters.languageId === undefined
          ? sql`DEFAULT`
          : typed[21](parameters.languageId)
      }
    RETURNING film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext`;
            return response.map((record) => ({
              filmId: undefinedIsNull(record.film_id),
              title: undefinedIsNull(record.title),
              description: undefinedIsNull(record.description),
              releaseYear: undefinedIsNull(record.release_year),
              languageId: undefinedIsNull(record.language_id),
              rentalDuration: undefinedIsNull(record.rental_duration),
              rentalRate: undefinedIsNull(record.rental_rate),
              length: undefinedIsNull(record.length),
              replacementCost: undefinedIsNull(record.replacement_cost),
              rating: undefinedIsNull(record.rating),
              lastUpdate: undefinedIsNull(record.last_update),
              specialFeatures: undefinedIsNull(record.special_features),
              fulltext: undefinedIsNull(record.fulltext),
            }));
          }
        })(this);

        public ByTitle = new (class implements HasDatabase {
          constructor(private hasDatabase: HasDatabase) {}

          get database() {
            return this.hasDatabase.database;
          }

          async read(
            parameters: Public.Tables.Film.ByTitle,
          ): Promise<Public.Tables.Film.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    -- 
    SELECT 
      film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext 
    FROM
      public.film 
    WHERE
      title = ${
        parameters.title === undefined
          ? sql`DEFAULT`
          : typed[1043](parameters.title)
      }
    `;
            return response.map((record) => ({
              filmId: undefinedIsNull(record.film_id),
              title: undefinedIsNull(record.title),
              description: undefinedIsNull(record.description),
              releaseYear: undefinedIsNull(record.release_year),
              languageId: undefinedIsNull(record.language_id),
              rentalDuration: undefinedIsNull(record.rental_duration),
              rentalRate: undefinedIsNull(record.rental_rate),
              length: undefinedIsNull(record.length),
              replacementCost: undefinedIsNull(record.replacement_cost),
              rating: undefinedIsNull(record.rating),
              lastUpdate: undefinedIsNull(record.last_update),
              specialFeatures: undefinedIsNull(record.special_features),
              fulltext: undefinedIsNull(record.fulltext),
            }));
          }

          async update(
            parameters: Public.Tables.Film.ByTitle,
            values: Partial<Public.Tables.Film.Values>,
          ): Promise<Public.Tables.Film.Record[]> {
            console.assert(parameters);
            console.assert(values);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    UPDATE 
      public.film 
    SET
      film_id = ${
        values.filmId === undefined ? sql`film_id` : typed[23](values.filmId)
      } , title = ${
        values.title === undefined ? sql`title` : typed[1043](values.title)
      } , description = ${
        values.description === undefined
          ? sql`description`
          : typed[25](values.description)
      } , release_year = ${
        values.releaseYear === undefined
          ? sql`release_year`
          : typed[25154](values.releaseYear)
      } , language_id = ${
        values.languageId === undefined
          ? sql`language_id`
          : typed[21](values.languageId)
      } , rental_duration = ${
        values.rentalDuration === undefined
          ? sql`rental_duration`
          : typed[21](values.rentalDuration)
      } , rental_rate = ${
        values.rentalRate === undefined
          ? sql`rental_rate`
          : typed[1700](values.rentalRate)
      } , length = ${
        values.length === undefined ? sql`length` : typed[21](values.length)
      } , replacement_cost = ${
        values.replacementCost === undefined
          ? sql`replacement_cost`
          : typed[1700](values.replacementCost)
      } , rating = ${
        values.rating === undefined ? sql`rating` : typed[25143](values.rating)
      } , last_update = ${
        values.lastUpdate === undefined
          ? sql`last_update`
          : typed[1114](values.lastUpdate)
      } , special_features = ${
        values.specialFeatures === undefined
          ? sql`special_features`
          : typed[1009](values.specialFeatures)
      } , fulltext = ${
        values.fulltext === undefined
          ? sql`fulltext`
          : typed[3614](values.fulltext)
      } 
    WHERE
      title = ${
        parameters.title === undefined
          ? sql`DEFAULT`
          : typed[1043](parameters.title)
      }
    RETURNING film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext`;
            return response.map((record) => ({
              filmId: undefinedIsNull(record.film_id),
              title: undefinedIsNull(record.title),
              description: undefinedIsNull(record.description),
              releaseYear: undefinedIsNull(record.release_year),
              languageId: undefinedIsNull(record.language_id),
              rentalDuration: undefinedIsNull(record.rental_duration),
              rentalRate: undefinedIsNull(record.rental_rate),
              length: undefinedIsNull(record.length),
              replacementCost: undefinedIsNull(record.replacement_cost),
              rating: undefinedIsNull(record.rating),
              lastUpdate: undefinedIsNull(record.last_update),
              specialFeatures: undefinedIsNull(record.special_features),
              fulltext: undefinedIsNull(record.fulltext),
            }));
          }

          async delete(
            parameters: Public.Tables.Film.ByTitle,
          ): Promise<Public.Tables.Film.Record[]> {
            console.assert(parameters);
            const sql = this.database.context.sql;
            const typed = sql.typed as unknown as PostgresTypecasts;

            const response = await sql`
    --
    DELETE FROM 
      public.film 
    WHERE
      title = ${
        parameters.title === undefined
          ? sql`DEFAULT`
          : typed[1043](parameters.title)
      }
    RETURNING film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext`;
            return response.map((record) => ({
              filmId: undefinedIsNull(record.film_id),
              title: undefinedIsNull(record.title),
              description: undefinedIsNull(record.description),
              releaseYear: undefinedIsNull(record.release_year),
              languageId: undefinedIsNull(record.language_id),
              rentalDuration: undefinedIsNull(record.rental_duration),
              rentalRate: undefinedIsNull(record.rental_rate),
              length: undefinedIsNull(record.length),
              replacementCost: undefinedIsNull(record.replacement_cost),
              rating: undefinedIsNull(record.rating),
              lastUpdate: undefinedIsNull(record.last_update),
              specialFeatures: undefinedIsNull(record.special_features),
              fulltext: undefinedIsNull(record.fulltext),
            }));
          }
        })(this);
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
      "Public.Procedures.filmInStock": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Procedures.filmInStock(
          request.parameters as Public.Procedures.FilmInStock.Parameters,
        ),
      "Public.Procedures.filmNotInStock": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Procedures.filmNotInStock(
          request.parameters as Public.Procedures.FilmNotInStock.Parameters,
        ),
      "Public.Procedures.getCustomerBalance": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Procedures.getCustomerBalance(
          request.parameters as Public.Procedures.GetCustomerBalance.Parameters,
        ),
      "Public.Procedures.inventoryHeldByCustomer": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Procedures.inventoryHeldByCustomer(
          request.parameters as Public.Procedures.InventoryHeldByCustomer.Parameters,
        ),
      "Public.Procedures.inventoryInStock": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Procedures.inventoryInStock(
          request.parameters as Public.Procedures.InventoryInStock.Parameters,
        ),
      "Public.Procedures.lastDay": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Procedures.lastDay(
          request.parameters as Public.Procedures.LastDay.Parameters,
        ),
      "Public.Procedures.rewardsReport": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Procedures.rewardsReport(
          request.parameters as Public.Procedures.RewardsReport.Parameters,
        ),
      "Public.Tables.FilmActor.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.FilmActor.create(
          request.values as Public.Tables.FilmActor.Values,
        ),
      "Public.Tables.FilmActor.ByActorIdFilmId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.FilmActor.ByActorIdFilmId.read(
          request.parameters as Public.Tables.FilmActor.ByActorIdFilmId,
        ),
      "Public.Tables.FilmActor.ByActorIdFilmId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.FilmActor.ByActorIdFilmId.update(
          request.parameters as Public.Tables.FilmActor.ByActorIdFilmId,
          request.values as Partial<Public.Tables.FilmActor.Values>,
        ),
      "Public.Tables.FilmActor.ByActorIdFilmId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.FilmActor.ByActorIdFilmId.delete(
          request.parameters as Public.Tables.FilmActor.ByActorIdFilmId,
        ),
      "Public.Tables.FilmActor.ByFilmId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.FilmActor.ByFilmId.read(
          request.parameters as Public.Tables.FilmActor.ByFilmId,
        ),
      "Public.Tables.FilmActor.ByFilmId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.FilmActor.ByFilmId.update(
          request.parameters as Public.Tables.FilmActor.ByFilmId,
          request.values as Partial<Public.Tables.FilmActor.Values>,
        ),
      "Public.Tables.FilmActor.ByFilmId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.FilmActor.ByFilmId.delete(
          request.parameters as Public.Tables.FilmActor.ByFilmId,
        ),
      "Public.Tables.Address.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Address.create(
          request.values as Public.Tables.Address.Values,
        ),
      "Public.Tables.Address.ByAddressId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Address.ByAddressId.read(
          request.parameters as Public.Tables.Address.ByAddressId,
        ),
      "Public.Tables.Address.ByAddressId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Address.ByAddressId.update(
          request.parameters as Public.Tables.Address.ByAddressId,
          request.values as Partial<Public.Tables.Address.Values>,
        ),
      "Public.Tables.Address.ByAddressId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Address.ByAddressId.delete(
          request.parameters as Public.Tables.Address.ByAddressId,
        ),
      "Public.Tables.Address.ByCityId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Address.ByCityId.read(
          request.parameters as Public.Tables.Address.ByCityId,
        ),
      "Public.Tables.Address.ByCityId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Address.ByCityId.update(
          request.parameters as Public.Tables.Address.ByCityId,
          request.values as Partial<Public.Tables.Address.Values>,
        ),
      "Public.Tables.Address.ByCityId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Address.ByCityId.delete(
          request.parameters as Public.Tables.Address.ByCityId,
        ),
      "Public.Tables.City.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.City.create(
          request.values as Public.Tables.City.Values,
        ),
      "Public.Tables.City.ByCityId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.City.ByCityId.read(
          request.parameters as Public.Tables.City.ByCityId,
        ),
      "Public.Tables.City.ByCityId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.City.ByCityId.update(
          request.parameters as Public.Tables.City.ByCityId,
          request.values as Partial<Public.Tables.City.Values>,
        ),
      "Public.Tables.City.ByCityId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.City.ByCityId.delete(
          request.parameters as Public.Tables.City.ByCityId,
        ),
      "Public.Tables.City.ByCountryId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.City.ByCountryId.read(
          request.parameters as Public.Tables.City.ByCountryId,
        ),
      "Public.Tables.City.ByCountryId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.City.ByCountryId.update(
          request.parameters as Public.Tables.City.ByCountryId,
          request.values as Partial<Public.Tables.City.Values>,
        ),
      "Public.Tables.City.ByCountryId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.City.ByCountryId.delete(
          request.parameters as Public.Tables.City.ByCountryId,
        ),
      "Public.Tables.Customer.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Customer.create(
          request.values as Public.Tables.Customer.Values,
        ),
      "Public.Tables.Customer.ByAddressId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Customer.ByAddressId.read(
          request.parameters as Public.Tables.Customer.ByAddressId,
        ),
      "Public.Tables.Customer.ByAddressId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Customer.ByAddressId.update(
          request.parameters as Public.Tables.Customer.ByAddressId,
          request.values as Partial<Public.Tables.Customer.Values>,
        ),
      "Public.Tables.Customer.ByAddressId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Customer.ByAddressId.delete(
          request.parameters as Public.Tables.Customer.ByAddressId,
        ),
      "Public.Tables.Customer.ByCustomerId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Customer.ByCustomerId.read(
          request.parameters as Public.Tables.Customer.ByCustomerId,
        ),
      "Public.Tables.Customer.ByCustomerId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Customer.ByCustomerId.update(
          request.parameters as Public.Tables.Customer.ByCustomerId,
          request.values as Partial<Public.Tables.Customer.Values>,
        ),
      "Public.Tables.Customer.ByCustomerId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Customer.ByCustomerId.delete(
          request.parameters as Public.Tables.Customer.ByCustomerId,
        ),
      "Public.Tables.Customer.ByLastName.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Customer.ByLastName.read(
          request.parameters as Public.Tables.Customer.ByLastName,
        ),
      "Public.Tables.Customer.ByLastName.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Customer.ByLastName.update(
          request.parameters as Public.Tables.Customer.ByLastName,
          request.values as Partial<Public.Tables.Customer.Values>,
        ),
      "Public.Tables.Customer.ByLastName.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Customer.ByLastName.delete(
          request.parameters as Public.Tables.Customer.ByLastName,
        ),
      "Public.Tables.Customer.ByStoreId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Customer.ByStoreId.read(
          request.parameters as Public.Tables.Customer.ByStoreId,
        ),
      "Public.Tables.Customer.ByStoreId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Customer.ByStoreId.update(
          request.parameters as Public.Tables.Customer.ByStoreId,
          request.values as Partial<Public.Tables.Customer.Values>,
        ),
      "Public.Tables.Customer.ByStoreId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Customer.ByStoreId.delete(
          request.parameters as Public.Tables.Customer.ByStoreId,
        ),
      "Public.Tables.Actor.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Actor.create(
          request.values as Public.Tables.Actor.Values,
        ),
      "Public.Tables.Actor.ByActorId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Actor.ByActorId.read(
          request.parameters as Public.Tables.Actor.ByActorId,
        ),
      "Public.Tables.Actor.ByActorId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Actor.ByActorId.update(
          request.parameters as Public.Tables.Actor.ByActorId,
          request.values as Partial<Public.Tables.Actor.Values>,
        ),
      "Public.Tables.Actor.ByActorId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Actor.ByActorId.delete(
          request.parameters as Public.Tables.Actor.ByActorId,
        ),
      "Public.Tables.Actor.ByLastName.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Actor.ByLastName.read(
          request.parameters as Public.Tables.Actor.ByLastName,
        ),
      "Public.Tables.Actor.ByLastName.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Actor.ByLastName.update(
          request.parameters as Public.Tables.Actor.ByLastName,
          request.values as Partial<Public.Tables.Actor.Values>,
        ),
      "Public.Tables.Actor.ByLastName.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Actor.ByLastName.delete(
          request.parameters as Public.Tables.Actor.ByLastName,
        ),
      "Public.Tables.FilmCategory.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.FilmCategory.create(
          request.values as Public.Tables.FilmCategory.Values,
        ),
      "Public.Tables.FilmCategory.ByFilmIdCategoryId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.FilmCategory.ByFilmIdCategoryId.read(
          request.parameters as Public.Tables.FilmCategory.ByFilmIdCategoryId,
        ),
      "Public.Tables.FilmCategory.ByFilmIdCategoryId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.FilmCategory.ByFilmIdCategoryId.update(
          request.parameters as Public.Tables.FilmCategory.ByFilmIdCategoryId,
          request.values as Partial<Public.Tables.FilmCategory.Values>,
        ),
      "Public.Tables.FilmCategory.ByFilmIdCategoryId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.FilmCategory.ByFilmIdCategoryId.delete(
          request.parameters as Public.Tables.FilmCategory.ByFilmIdCategoryId,
        ),
      "Public.Tables.Inventory.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Inventory.create(
          request.values as Public.Tables.Inventory.Values,
        ),
      "Public.Tables.Inventory.ByInventoryId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Inventory.ByInventoryId.read(
          request.parameters as Public.Tables.Inventory.ByInventoryId,
        ),
      "Public.Tables.Inventory.ByInventoryId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Inventory.ByInventoryId.update(
          request.parameters as Public.Tables.Inventory.ByInventoryId,
          request.values as Partial<Public.Tables.Inventory.Values>,
        ),
      "Public.Tables.Inventory.ByInventoryId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Inventory.ByInventoryId.delete(
          request.parameters as Public.Tables.Inventory.ByInventoryId,
        ),
      "Public.Tables.Inventory.ByStoreIdFilmId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Inventory.ByStoreIdFilmId.read(
          request.parameters as Public.Tables.Inventory.ByStoreIdFilmId,
        ),
      "Public.Tables.Inventory.ByStoreIdFilmId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Inventory.ByStoreIdFilmId.update(
          request.parameters as Public.Tables.Inventory.ByStoreIdFilmId,
          request.values as Partial<Public.Tables.Inventory.Values>,
        ),
      "Public.Tables.Inventory.ByStoreIdFilmId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Inventory.ByStoreIdFilmId.delete(
          request.parameters as Public.Tables.Inventory.ByStoreIdFilmId,
        ),
      "Public.Tables.Category.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Category.create(
          request.values as Public.Tables.Category.Values,
        ),
      "Public.Tables.Category.ByCategoryId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Category.ByCategoryId.read(
          request.parameters as Public.Tables.Category.ByCategoryId,
        ),
      "Public.Tables.Category.ByCategoryId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Category.ByCategoryId.update(
          request.parameters as Public.Tables.Category.ByCategoryId,
          request.values as Partial<Public.Tables.Category.Values>,
        ),
      "Public.Tables.Category.ByCategoryId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Category.ByCategoryId.delete(
          request.parameters as Public.Tables.Category.ByCategoryId,
        ),
      "Public.Tables.Country.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Country.create(
          request.values as Public.Tables.Country.Values,
        ),
      "Public.Tables.Country.ByCountryId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Country.ByCountryId.read(
          request.parameters as Public.Tables.Country.ByCountryId,
        ),
      "Public.Tables.Country.ByCountryId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Country.ByCountryId.update(
          request.parameters as Public.Tables.Country.ByCountryId,
          request.values as Partial<Public.Tables.Country.Values>,
        ),
      "Public.Tables.Country.ByCountryId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Country.ByCountryId.delete(
          request.parameters as Public.Tables.Country.ByCountryId,
        ),
      "Public.Tables.Language.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Language.create(
          request.values as Public.Tables.Language.Values,
        ),
      "Public.Tables.Language.ByLanguageId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Language.ByLanguageId.read(
          request.parameters as Public.Tables.Language.ByLanguageId,
        ),
      "Public.Tables.Language.ByLanguageId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Language.ByLanguageId.update(
          request.parameters as Public.Tables.Language.ByLanguageId,
          request.values as Partial<Public.Tables.Language.Values>,
        ),
      "Public.Tables.Language.ByLanguageId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Language.ByLanguageId.delete(
          request.parameters as Public.Tables.Language.ByLanguageId,
        ),
      "Public.Tables.Rental.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Rental.create(
          request.values as Public.Tables.Rental.Values,
        ),
      "Public.Tables.Rental.ByInventoryId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Rental.ByInventoryId.read(
          request.parameters as Public.Tables.Rental.ByInventoryId,
        ),
      "Public.Tables.Rental.ByInventoryId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Rental.ByInventoryId.update(
          request.parameters as Public.Tables.Rental.ByInventoryId,
          request.values as Partial<Public.Tables.Rental.Values>,
        ),
      "Public.Tables.Rental.ByInventoryId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Rental.ByInventoryId.delete(
          request.parameters as Public.Tables.Rental.ByInventoryId,
        ),
      "Public.Tables.Rental.ByRentalDateInventoryIdCustomerId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Rental.ByRentalDateInventoryIdCustomerId.read(
          request.parameters as Public.Tables.Rental.ByRentalDateInventoryIdCustomerId,
        ),
      "Public.Tables.Rental.ByRentalDateInventoryIdCustomerId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Rental.ByRentalDateInventoryIdCustomerId.update(
          request.parameters as Public.Tables.Rental.ByRentalDateInventoryIdCustomerId,
          request.values as Partial<Public.Tables.Rental.Values>,
        ),
      "Public.Tables.Rental.ByRentalDateInventoryIdCustomerId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Rental.ByRentalDateInventoryIdCustomerId.delete(
          request.parameters as Public.Tables.Rental.ByRentalDateInventoryIdCustomerId,
        ),
      "Public.Tables.Rental.ByRentalId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Rental.ByRentalId.read(
          request.parameters as Public.Tables.Rental.ByRentalId,
        ),
      "Public.Tables.Rental.ByRentalId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Rental.ByRentalId.update(
          request.parameters as Public.Tables.Rental.ByRentalId,
          request.values as Partial<Public.Tables.Rental.Values>,
        ),
      "Public.Tables.Rental.ByRentalId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Rental.ByRentalId.delete(
          request.parameters as Public.Tables.Rental.ByRentalId,
        ),
      "Public.Tables.Staff.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Staff.create(
          request.values as Public.Tables.Staff.Values,
        ),
      "Public.Tables.Staff.ByStaffId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Staff.ByStaffId.read(
          request.parameters as Public.Tables.Staff.ByStaffId,
        ),
      "Public.Tables.Staff.ByStaffId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Staff.ByStaffId.update(
          request.parameters as Public.Tables.Staff.ByStaffId,
          request.values as Partial<Public.Tables.Staff.Values>,
        ),
      "Public.Tables.Staff.ByStaffId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Staff.ByStaffId.delete(
          request.parameters as Public.Tables.Staff.ByStaffId,
        ),
      "Public.Tables.Store.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Store.create(
          request.values as Public.Tables.Store.Values,
        ),
      "Public.Tables.Store.ByManagerStaffId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Store.ByManagerStaffId.read(
          request.parameters as Public.Tables.Store.ByManagerStaffId,
        ),
      "Public.Tables.Store.ByManagerStaffId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Store.ByManagerStaffId.update(
          request.parameters as Public.Tables.Store.ByManagerStaffId,
          request.values as Partial<Public.Tables.Store.Values>,
        ),
      "Public.Tables.Store.ByManagerStaffId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Store.ByManagerStaffId.delete(
          request.parameters as Public.Tables.Store.ByManagerStaffId,
        ),
      "Public.Tables.Store.ByStoreId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Store.ByStoreId.read(
          request.parameters as Public.Tables.Store.ByStoreId,
        ),
      "Public.Tables.Store.ByStoreId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Store.ByStoreId.update(
          request.parameters as Public.Tables.Store.ByStoreId,
          request.values as Partial<Public.Tables.Store.Values>,
        ),
      "Public.Tables.Store.ByStoreId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Store.ByStoreId.delete(
          request.parameters as Public.Tables.Store.ByStoreId,
        ),
      "Public.Tables.Payment.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Payment.create(
          request.values as Public.Tables.Payment.Values,
        ),
      "Public.Tables.Payment.ByCustomerId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Payment.ByCustomerId.read(
          request.parameters as Public.Tables.Payment.ByCustomerId,
        ),
      "Public.Tables.Payment.ByCustomerId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Payment.ByCustomerId.update(
          request.parameters as Public.Tables.Payment.ByCustomerId,
          request.values as Partial<Public.Tables.Payment.Values>,
        ),
      "Public.Tables.Payment.ByCustomerId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Payment.ByCustomerId.delete(
          request.parameters as Public.Tables.Payment.ByCustomerId,
        ),
      "Public.Tables.Payment.ByPaymentId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Payment.ByPaymentId.read(
          request.parameters as Public.Tables.Payment.ByPaymentId,
        ),
      "Public.Tables.Payment.ByPaymentId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Payment.ByPaymentId.update(
          request.parameters as Public.Tables.Payment.ByPaymentId,
          request.values as Partial<Public.Tables.Payment.Values>,
        ),
      "Public.Tables.Payment.ByPaymentId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Payment.ByPaymentId.delete(
          request.parameters as Public.Tables.Payment.ByPaymentId,
        ),
      "Public.Tables.Payment.ByRentalId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Payment.ByRentalId.read(
          request.parameters as Public.Tables.Payment.ByRentalId,
        ),
      "Public.Tables.Payment.ByRentalId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Payment.ByRentalId.update(
          request.parameters as Public.Tables.Payment.ByRentalId,
          request.values as Partial<Public.Tables.Payment.Values>,
        ),
      "Public.Tables.Payment.ByRentalId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Payment.ByRentalId.delete(
          request.parameters as Public.Tables.Payment.ByRentalId,
        ),
      "Public.Tables.Payment.ByStaffId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Payment.ByStaffId.read(
          request.parameters as Public.Tables.Payment.ByStaffId,
        ),
      "Public.Tables.Payment.ByStaffId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Payment.ByStaffId.update(
          request.parameters as Public.Tables.Payment.ByStaffId,
          request.values as Partial<Public.Tables.Payment.Values>,
        ),
      "Public.Tables.Payment.ByStaffId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Payment.ByStaffId.delete(
          request.parameters as Public.Tables.Payment.ByStaffId,
        ),
      "Public.Tables.Film.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Film.create(
          request.values as Public.Tables.Film.Values,
        ),
      "Public.Tables.Film.ByFilmId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Film.ByFilmId.read(
          request.parameters as Public.Tables.Film.ByFilmId,
        ),
      "Public.Tables.Film.ByFilmId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Film.ByFilmId.update(
          request.parameters as Public.Tables.Film.ByFilmId,
          request.values as Partial<Public.Tables.Film.Values>,
        ),
      "Public.Tables.Film.ByFilmId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Film.ByFilmId.delete(
          request.parameters as Public.Tables.Film.ByFilmId,
        ),
      "Public.Tables.Film.ByFulltext.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Film.ByFulltext.read(
          request.parameters as Public.Tables.Film.ByFulltext,
        ),
      "Public.Tables.Film.ByFulltext.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Film.ByFulltext.update(
          request.parameters as Public.Tables.Film.ByFulltext,
          request.values as Partial<Public.Tables.Film.Values>,
        ),
      "Public.Tables.Film.ByFulltext.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Film.ByFulltext.delete(
          request.parameters as Public.Tables.Film.ByFulltext,
        ),
      "Public.Tables.Film.ByLanguageId.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Film.ByLanguageId.read(
          request.parameters as Public.Tables.Film.ByLanguageId,
        ),
      "Public.Tables.Film.ByLanguageId.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Film.ByLanguageId.update(
          request.parameters as Public.Tables.Film.ByLanguageId,
          request.values as Partial<Public.Tables.Film.Values>,
        ),
      "Public.Tables.Film.ByLanguageId.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Film.ByLanguageId.delete(
          request.parameters as Public.Tables.Film.ByLanguageId,
        ),
      "Public.Tables.Film.ByTitle.read": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Film.ByTitle.read(
          request.parameters as Public.Tables.Film.ByTitle,
        ),
      "Public.Tables.Film.ByTitle.update": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Film.ByTitle.update(
          request.parameters as Public.Tables.Film.ByTitle,
          request.values as Partial<Public.Tables.Film.Values>,
        ),
      "Public.Tables.Film.ByTitle.delete": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Tables.Film.ByTitle.delete(
          request.parameters as Public.Tables.Film.ByTitle,
        ),
    };
  }

  async dispatch(request: EmbraceSQLRequest<object, object>) {
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

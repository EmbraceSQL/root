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
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* @typescript-eslint/no-redundant-type-constituents */
import {
  UUID,
  JsDate,
  JSONValue,
  JSONObject,
  Empty,
  Nullable,
  undefinedIsNull,
  nullIsUndefined,
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
        // Type PgCatalog.Types.Aclitem

        return from;
      }
    }
    export namespace Any {
      export function parse(from: any) {
        // Type PgCatalog.Types.Any

        return from;
      }
    }
    export namespace Anyarray {
      export function parse(from: any) {
        // Type PgCatalog.Types.Anyarray

        return from;
      }
    }
    export namespace Anycompatible {
      export function parse(from: any) {
        // Type PgCatalog.Types.Anycompatible

        return from;
      }
    }
    export namespace Anycompatiblearray {
      export function parse(from: any) {
        // Type PgCatalog.Types.Anycompatiblearray

        return from;
      }
    }
    export namespace Anycompatiblemultirange {
      export function parse(from: any) {
        // Type PgCatalog.Types.Anycompatiblemultirange

        return from;
      }
    }
    export namespace Anycompatiblenonarray {
      export function parse(from: any) {
        // Type PgCatalog.Types.Anycompatiblenonarray

        return from;
      }
    }
    export namespace Anycompatiblerange {
      export function parse(from: any) {
        // Type PgCatalog.Types.Anycompatiblerange

        return from;
      }
    }
    export namespace Anyelement {
      export function parse(from: any) {
        // Type PgCatalog.Types.Anyelement

        return from;
      }
    }
    export namespace Anyenum {
      export function parse(from: any) {
        // Type PgCatalog.Types.Anyenum

        return from;
      }
    }
    export namespace Anymultirange {
      export function parse(from: any) {
        // Type PgCatalog.Types.Anymultirange

        return from;
      }
    }
    export namespace Anynonarray {
      export function parse(from: any) {
        // Type PgCatalog.Types.Anynonarray

        return from;
      }
    }
    export namespace Anyrange {
      export function parse(from: any) {
        // Type PgCatalog.Types.Anyrange

        return from;
      }
    }
    export namespace Bit {
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
        // Type PgCatalog.Types.Box

        return from;
      }
    }
    export namespace Bpchar {
      export function parse(from: any) {
        // Type PgCatalog.Types.Bpchar

        return from;
      }
    }
    export namespace Bytea {
      export function parse(from: any) {
        // Type PgCatalog.Types.Bytea

        return from ? new Uint8Array(JSON.parse(from)) : null;
      }
    }
    export namespace Char {
      export function parse(from: any) {
        // Type PgCatalog.Types.Char

        return from;
      }
    }
    export namespace Cid {
      export function parse(from: any) {
        // Type PgCatalog.Types.Cid

        return from;
      }
    }
    export namespace Cidr {
      export function parse(from: any) {
        // Type PgCatalog.Types.Cidr

        return from ? new Uint8Array(JSON.parse(from)) : null;
      }
    }
    export namespace Circle {
      export function parse(from: any) {
        // Type PgCatalog.Types.Circle

        return from;
      }
    }
    export namespace Cstring {
      export function parse(from: any) {
        // Type PgCatalog.Types.Cstring

        return from;
      }
    }
    export namespace Date {
      export function parse(from: any) {
        // Type PgCatalog.Types.Date

        if (from === null) return null;
        if ((from as unknown) instanceof global.Date) return from;
        return new global.Date(from);
      }
    }
    export namespace Datemultirange {
      export function parse(from: any) {
        // Type PgCatalog.Types.Datemultirange

        return from;
      }
    }
    export namespace Daterange {
      export function parse(from: any) {
        // Type PgCatalog.Types.Daterange

        return from;
      }
    }
    export namespace EventTrigger {
      export function parse(from: any) {
        // Type PgCatalog.Types.EventTrigger

        return from;
      }
    }
    export namespace FdwHandler {
      export function parse(from: any) {
        // Type PgCatalog.Types.FdwHandler

        return from;
      }
    }
    export namespace Float4 {
      export function parse(from: any) {
        // Type PgCatalog.Types.Float4

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Float8 {
      export function parse(from: any) {
        // Type PgCatalog.Types.Float8

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Gtsvector {
      export function parse(from: any) {
        // Type PgCatalog.Types.Gtsvector

        return from;
      }
    }
    export namespace IndexAmHandler {
      export function parse(from: any) {
        // Type PgCatalog.Types.IndexAmHandler

        return from;
      }
    }
    export namespace Inet {
      export function parse(from: any) {
        // Type PgCatalog.Types.Inet

        return from;
      }
    }
    export namespace Int2 {
      export function parse(from: any) {
        // Type PgCatalog.Types.Int2

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Int2vector {
      export function parse(from: any) {
        // Type PgCatalog.Types.Int2vector

        if (from === null) return null;
        const source = Array.isArray(from)
          ? new Uint16Array(from)
          : JSON.parse(from);
        return new Uint16Array(source);
      }
    }
    export namespace Int4 {
      export function parse(from: any) {
        // Type PgCatalog.Types.Int4

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Int4multirange {
      export function parse(from: any) {
        // Type PgCatalog.Types.Int4multirange

        return from;
      }
    }
    export namespace Int4range {
      export function parse(from: any) {
        // Type PgCatalog.Types.Int4range

        return from;
      }
    }
    export namespace Int8 {
      export function parse(from: any) {
        // Type PgCatalog.Types.Int8

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Int8multirange {
      export function parse(from: any) {
        // Type PgCatalog.Types.Int8multirange

        return from;
      }
    }
    export namespace Int8range {
      export function parse(from: any) {
        // Type PgCatalog.Types.Int8range

        return from;
      }
    }
    export namespace Internal {
      export function parse(from: any) {
        // Type PgCatalog.Types.Internal

        return from;
      }
    }
    export namespace Interval {
      export function parse(from: any) {
        // Type PgCatalog.Types.Interval

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Json {
      export function parse(from: any) {
        // Type PgCatalog.Types.Json

        return from;
      }
    }
    export namespace Jsonb {
      export function parse(from: any) {
        // Type PgCatalog.Types.Jsonb

        return from;
      }
    }
    export namespace Jsonpath {
      export function parse(from: any) {
        // Type PgCatalog.Types.Jsonpath

        return from;
      }
    }
    export namespace LanguageHandler {
      export function parse(from: any) {
        // Type PgCatalog.Types.LanguageHandler

        return from;
      }
    }
    export namespace Line {
      export function parse(from: any) {
        // Type PgCatalog.Types.Line

        return from;
      }
    }
    export namespace Lseg {
      export function parse(from: any) {
        // Type PgCatalog.Types.Lseg

        return from;
      }
    }
    export namespace Macaddr {
      export function parse(from: any) {
        // Type PgCatalog.Types.Macaddr

        return from ? new Uint8Array(JSON.parse(from)) : null;
      }
    }
    export namespace Macaddr8 {
      export function parse(from: any) {
        // Type PgCatalog.Types.Macaddr8

        return from ? new Uint8Array(JSON.parse(from)) : null;
      }
    }
    export namespace Money {
      export function parse(from: any) {
        // Type PgCatalog.Types.Money

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Name {
      export function parse(from: any) {
        // Type PgCatalog.Types.Name

        return from;
      }
    }
    export namespace Numeric {
      export function parse(from: any) {
        // Type PgCatalog.Types.Numeric

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Nummultirange {
      export function parse(from: any) {
        // Type PgCatalog.Types.Nummultirange

        return from;
      }
    }
    export namespace Numrange {
      export function parse(from: any) {
        // Type PgCatalog.Types.Numrange

        return from;
      }
    }
    export namespace Oid {
      export function parse(from: any) {
        // Type PgCatalog.Types.Oid

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Oidvector {
      export function parse(from: any) {
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
      export function parse(from: any) {
        // Type PgCatalog.Types.Path

        return from;
      }
    }
    export namespace PgAggregate {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgAggregate
        if (PgCatalog.Types.PgAggregate.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgAm {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgAm
        if (PgCatalog.Types.PgAm.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgAmop {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgAmop
        if (PgCatalog.Types.PgAmop.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgAmproc {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgAmproc
        if (PgCatalog.Types.PgAmproc.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgAttrdef {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgAttrdef
        if (PgCatalog.Types.PgAttrdef.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgAttribute {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgAttribute
        if (PgCatalog.Types.PgAttribute.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgAuthMembers {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgAuthMembers
        if (PgCatalog.Types.PgAuthMembers.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgAuthid {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgAuthid
        if (PgCatalog.Types.PgAuthid.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgAvailableExtensionVersions {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgAvailableExtensionVersions
        if (PgCatalog.Types.PgAvailableExtensionVersions.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgAvailableExtensions {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgAvailableExtensions
        if (PgCatalog.Types.PgAvailableExtensions.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgBackendMemoryContexts {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgBackendMemoryContexts
        if (PgCatalog.Types.PgBackendMemoryContexts.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgBrinBloomSummary {
      export function parse(from: any) {
        // Type PgCatalog.Types.PgBrinBloomSummary

        return from;
      }
    }
    export namespace PgBrinMinmaxMultiSummary {
      export function parse(from: any) {
        // Type PgCatalog.Types.PgBrinMinmaxMultiSummary

        return from;
      }
    }
    export namespace PgCast {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgCast
        if (PgCatalog.Types.PgCast.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgClass {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgClass
        if (PgCatalog.Types.PgClass.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgCollation {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgCollation
        if (PgCatalog.Types.PgCollation.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgConfig {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgConfig
        if (PgCatalog.Types.PgConfig.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgConstraint {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgConstraint
        if (PgCatalog.Types.PgConstraint.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgConversion {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgConversion
        if (PgCatalog.Types.PgConversion.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgCursors {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgCursors
        if (PgCatalog.Types.PgCursors.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgDatabase {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgDatabase
        if (PgCatalog.Types.PgDatabase.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgDbRoleSetting {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgDbRoleSetting
        if (PgCatalog.Types.PgDbRoleSetting.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgDdlCommand {
      export function parse(from: any) {
        // Type PgCatalog.Types.PgDdlCommand

        return from;
      }
    }
    export namespace PgDefaultAcl {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgDefaultAcl
        if (PgCatalog.Types.PgDefaultAcl.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgDepend {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgDepend
        if (PgCatalog.Types.PgDepend.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgDependencies {
      export function parse(from: any) {
        // Type PgCatalog.Types.PgDependencies

        return from;
      }
    }
    export namespace PgDescription {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgDescription
        if (PgCatalog.Types.PgDescription.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgEnum {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgEnum
        if (PgCatalog.Types.PgEnum.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgEventTrigger {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgEventTrigger
        if (PgCatalog.Types.PgEventTrigger.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgExtension {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgExtension
        if (PgCatalog.Types.PgExtension.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgFileSettings {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgFileSettings
        if (PgCatalog.Types.PgFileSettings.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgForeignDataWrapper {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgForeignDataWrapper
        if (PgCatalog.Types.PgForeignDataWrapper.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgForeignServer {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgForeignServer
        if (PgCatalog.Types.PgForeignServer.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgForeignTable {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgForeignTable
        if (PgCatalog.Types.PgForeignTable.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgGroup {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgGroup
        if (PgCatalog.Types.PgGroup.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgHbaFileRules {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgHbaFileRules
        if (PgCatalog.Types.PgHbaFileRules.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgIdentFileMappings {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgIdentFileMappings
        if (PgCatalog.Types.PgIdentFileMappings.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgIndex {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgIndex
        if (PgCatalog.Types.PgIndex.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgIndexes {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgIndexes
        if (PgCatalog.Types.PgIndexes.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgInherits {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgInherits
        if (PgCatalog.Types.PgInherits.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgInitPrivs {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgInitPrivs
        if (PgCatalog.Types.PgInitPrivs.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgLanguage {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgLanguage
        if (PgCatalog.Types.PgLanguage.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgLargeobject {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgLargeobject
        if (PgCatalog.Types.PgLargeobject.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgLargeobjectMetadata {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgLargeobjectMetadata
        if (PgCatalog.Types.PgLargeobjectMetadata.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgLocks {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgLocks
        if (PgCatalog.Types.PgLocks.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgLsn {
      export function parse(from: any) {
        // Type PgCatalog.Types.PgLsn

        if (from === null) return null;
        if (from === "") return null;
        return BigInt(from);
      }
    }
    export namespace PgMatviews {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgMatviews
        if (PgCatalog.Types.PgMatviews.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgMcvList {
      export function parse(from: any) {
        // Type PgCatalog.Types.PgMcvList

        return from;
      }
    }
    export namespace PgNamespace {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgNamespace
        if (PgCatalog.Types.PgNamespace.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgNdistinct {
      export function parse(from: any) {
        // Type PgCatalog.Types.PgNdistinct

        return from;
      }
    }
    export namespace PgNodeTree {
      export function parse(from: any) {
        // Type PgCatalog.Types.PgNodeTree

        return from;
      }
    }
    export namespace PgOpclass {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgOpclass
        if (PgCatalog.Types.PgOpclass.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgOperator {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgOperator
        if (PgCatalog.Types.PgOperator.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgOpfamily {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgOpfamily
        if (PgCatalog.Types.PgOpfamily.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgParameterAcl {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgParameterAcl
        if (PgCatalog.Types.PgParameterAcl.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgPartitionedTable {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgPartitionedTable
        if (PgCatalog.Types.PgPartitionedTable.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgPolicies {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgPolicies
        if (PgCatalog.Types.PgPolicies.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgPolicy {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgPolicy
        if (PgCatalog.Types.PgPolicy.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgPreparedStatements {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgPreparedStatements
        if (PgCatalog.Types.PgPreparedStatements.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgPreparedXacts {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgPreparedXacts
        if (PgCatalog.Types.PgPreparedXacts.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgProc {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgProc
        if (PgCatalog.Types.PgProc.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgPublication {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgPublication
        if (PgCatalog.Types.PgPublication.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgPublicationNamespace {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgPublicationNamespace
        if (PgCatalog.Types.PgPublicationNamespace.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgPublicationRel {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgPublicationRel
        if (PgCatalog.Types.PgPublicationRel.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgPublicationTables {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgPublicationTables
        if (PgCatalog.Types.PgPublicationTables.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgRange {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgRange
        if (PgCatalog.Types.PgRange.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgReplicationOrigin {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgReplicationOrigin
        if (PgCatalog.Types.PgReplicationOrigin.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgReplicationOriginStatus {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgReplicationOriginStatus
        if (PgCatalog.Types.PgReplicationOriginStatus.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgReplicationSlots {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgReplicationSlots
        if (PgCatalog.Types.PgReplicationSlots.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgRewrite {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgRewrite
        if (PgCatalog.Types.PgRewrite.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgRoles {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgRoles
        if (PgCatalog.Types.PgRoles.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgRules {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgRules
        if (PgCatalog.Types.PgRules.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgSeclabel {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgSeclabel
        if (PgCatalog.Types.PgSeclabel.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgSeclabels {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgSeclabels
        if (PgCatalog.Types.PgSeclabels.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgSequence {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgSequence
        if (PgCatalog.Types.PgSequence.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgSequences {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgSequences
        if (PgCatalog.Types.PgSequences.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgSettings {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgSettings
        if (PgCatalog.Types.PgSettings.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgShadow {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgShadow
        if (PgCatalog.Types.PgShadow.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgShdepend {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgShdepend
        if (PgCatalog.Types.PgShdepend.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgShdescription {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgShdescription
        if (PgCatalog.Types.PgShdescription.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgShmemAllocations {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgShmemAllocations
        if (PgCatalog.Types.PgShmemAllocations.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgShseclabel {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgShseclabel
        if (PgCatalog.Types.PgShseclabel.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgSnapshot {
      export function parse(from: any) {
        // Type PgCatalog.Types.PgSnapshot

        return from;
      }
    }
    export namespace PgStatActivity {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatActivity
        if (PgCatalog.Types.PgStatActivity.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatAllIndexes {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatAllIndexes
        if (PgCatalog.Types.PgStatAllIndexes.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatAllTables {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatAllTables
        if (PgCatalog.Types.PgStatAllTables.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatArchiver {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatArchiver
        if (PgCatalog.Types.PgStatArchiver.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatBgwriter {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatBgwriter
        if (PgCatalog.Types.PgStatBgwriter.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatDatabase {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatDatabase
        if (PgCatalog.Types.PgStatDatabase.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatDatabaseConflicts {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatDatabaseConflicts
        if (PgCatalog.Types.PgStatDatabaseConflicts.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatGssapi {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatGssapi
        if (PgCatalog.Types.PgStatGssapi.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatIo {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatIo
        if (PgCatalog.Types.PgStatIo.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatProgressAnalyze {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatProgressAnalyze
        if (PgCatalog.Types.PgStatProgressAnalyze.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatProgressBasebackup {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatProgressBasebackup
        if (PgCatalog.Types.PgStatProgressBasebackup.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatProgressCluster {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatProgressCluster
        if (PgCatalog.Types.PgStatProgressCluster.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatProgressCopy {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatProgressCopy
        if (PgCatalog.Types.PgStatProgressCopy.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatProgressCreateIndex {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatProgressCreateIndex
        if (PgCatalog.Types.PgStatProgressCreateIndex.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatProgressVacuum {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatProgressVacuum
        if (PgCatalog.Types.PgStatProgressVacuum.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatRecoveryPrefetch {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatRecoveryPrefetch
        if (PgCatalog.Types.PgStatRecoveryPrefetch.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatReplication {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatReplication
        if (PgCatalog.Types.PgStatReplication.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatReplicationSlots {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatReplicationSlots
        if (PgCatalog.Types.PgStatReplicationSlots.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatSlru {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatSlru
        if (PgCatalog.Types.PgStatSlru.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatSsl {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatSsl
        if (PgCatalog.Types.PgStatSsl.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatSubscription {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatSubscription
        if (PgCatalog.Types.PgStatSubscription.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatSubscriptionStats {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatSubscriptionStats
        if (PgCatalog.Types.PgStatSubscriptionStats.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatSysIndexes {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatSysIndexes
        if (PgCatalog.Types.PgStatSysIndexes.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatSysTables {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatSysTables
        if (PgCatalog.Types.PgStatSysTables.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatUserFunctions {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatUserFunctions
        if (PgCatalog.Types.PgStatUserFunctions.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatUserIndexes {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatUserIndexes
        if (PgCatalog.Types.PgStatUserIndexes.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatUserTables {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatUserTables
        if (PgCatalog.Types.PgStatUserTables.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatWal {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatWal
        if (PgCatalog.Types.PgStatWal.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatWalReceiver {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatWalReceiver
        if (PgCatalog.Types.PgStatWalReceiver.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatXactAllTables {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatXactAllTables
        if (PgCatalog.Types.PgStatXactAllTables.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatXactSysTables {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatXactSysTables
        if (PgCatalog.Types.PgStatXactSysTables.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatXactUserFunctions {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatXactUserFunctions
        if (PgCatalog.Types.PgStatXactUserFunctions.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatXactUserTables {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatXactUserTables
        if (PgCatalog.Types.PgStatXactUserTables.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatioAllIndexes {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatioAllIndexes
        if (PgCatalog.Types.PgStatioAllIndexes.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatioAllSequences {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatioAllSequences
        if (PgCatalog.Types.PgStatioAllSequences.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatioAllTables {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatioAllTables
        if (PgCatalog.Types.PgStatioAllTables.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatioSysIndexes {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatioSysIndexes
        if (PgCatalog.Types.PgStatioSysIndexes.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatioSysSequences {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatioSysSequences
        if (PgCatalog.Types.PgStatioSysSequences.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatioSysTables {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatioSysTables
        if (PgCatalog.Types.PgStatioSysTables.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatioUserIndexes {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatioUserIndexes
        if (PgCatalog.Types.PgStatioUserIndexes.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatioUserSequences {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatioUserSequences
        if (PgCatalog.Types.PgStatioUserSequences.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatioUserTables {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatioUserTables
        if (PgCatalog.Types.PgStatioUserTables.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatistic {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatistic
        if (PgCatalog.Types.PgStatistic.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatisticExt {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatisticExt
        if (PgCatalog.Types.PgStatisticExt.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatisticExtData {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatisticExtData
        if (PgCatalog.Types.PgStatisticExtData.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStats {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStats
        if (PgCatalog.Types.PgStats.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatsExt {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatsExt
        if (PgCatalog.Types.PgStatsExt.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgStatsExtExprs {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgStatsExtExprs
        if (PgCatalog.Types.PgStatsExtExprs.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgSubscription {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgSubscription
        if (PgCatalog.Types.PgSubscription.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgSubscriptionRel {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgSubscriptionRel
        if (PgCatalog.Types.PgSubscriptionRel.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgTables {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgTables
        if (PgCatalog.Types.PgTables.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgTablespace {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgTablespace
        if (PgCatalog.Types.PgTablespace.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgTimezoneAbbrevs {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgTimezoneAbbrevs
        if (PgCatalog.Types.PgTimezoneAbbrevs.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgTimezoneNames {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgTimezoneNames
        if (PgCatalog.Types.PgTimezoneNames.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgTransform {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgTransform
        if (PgCatalog.Types.PgTransform.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgTrigger {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgTrigger
        if (PgCatalog.Types.PgTrigger.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgTsConfig {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgTsConfig
        if (PgCatalog.Types.PgTsConfig.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgTsConfigMap {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgTsConfigMap
        if (PgCatalog.Types.PgTsConfigMap.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgTsDict {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgTsDict
        if (PgCatalog.Types.PgTsDict.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgTsParser {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgTsParser
        if (PgCatalog.Types.PgTsParser.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgTsTemplate {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgTsTemplate
        if (PgCatalog.Types.PgTsTemplate.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgType {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgType
        if (PgCatalog.Types.PgType.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgUser {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgUser
        if (PgCatalog.Types.PgUser.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgUserMapping {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgUserMapping
        if (PgCatalog.Types.PgUserMapping.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgUserMappings {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgUserMappings
        if (PgCatalog.Types.PgUserMappings.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgViews {
      export function parse(from: any) {
        // CompositeType PgCatalog.Types.PgViews
        if (PgCatalog.Types.PgViews.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Point {
      export function parse(from: any) {
        // Type PgCatalog.Types.Point

        return from;
      }
    }
    export namespace Polygon {
      export function parse(from: any) {
        // Type PgCatalog.Types.Polygon

        return from;
      }
    }
    export namespace Record {
      export function parse(from: any) {
        // Type PgCatalog.Types.Record

        return from;
      }
    }
    export namespace Refcursor {
      export function parse(from: any) {
        // Type PgCatalog.Types.Refcursor

        return from;
      }
    }
    export namespace Regclass {
      export function parse(from: any) {
        // Type PgCatalog.Types.Regclass

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regcollation {
      export function parse(from: any) {
        // Type PgCatalog.Types.Regcollation

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regconfig {
      export function parse(from: any) {
        // Type PgCatalog.Types.Regconfig

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regdictionary {
      export function parse(from: any) {
        // Type PgCatalog.Types.Regdictionary

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regnamespace {
      export function parse(from: any) {
        // Type PgCatalog.Types.Regnamespace

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regoper {
      export function parse(from: any) {
        // Type PgCatalog.Types.Regoper

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regoperator {
      export function parse(from: any) {
        // Type PgCatalog.Types.Regoperator

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regproc {
      export function parse(from: any) {
        // Type PgCatalog.Types.Regproc

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regprocedure {
      export function parse(from: any) {
        // Type PgCatalog.Types.Regprocedure

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regrole {
      export function parse(from: any) {
        // Type PgCatalog.Types.Regrole

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regtype {
      export function parse(from: any) {
        // Type PgCatalog.Types.Regtype

        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace TableAmHandler {
      export function parse(from: any) {
        // Type PgCatalog.Types.TableAmHandler

        return from;
      }
    }
    export namespace Text {
      export function parse(from: any) {
        // Type PgCatalog.Types.Text

        return from;
      }
    }
    export namespace Tid {
      export function parse(from: any) {
        // Type PgCatalog.Types.Tid

        return from;
      }
    }
    export namespace Time {
      export function parse(from: any) {
        // Type PgCatalog.Types.Time

        if (from === null) return null;
        if ((from as unknown) instanceof global.Date) return from;
        return new global.Date(from);
      }
    }
    export namespace Timestamp {
      export function parse(from: any) {
        // Type PgCatalog.Types.Timestamp

        if (from === null) return null;
        if ((from as unknown) instanceof global.Date) return from;
        return new global.Date(from);
      }
    }
    export namespace Timestamptz {
      export function parse(from: any) {
        // Type PgCatalog.Types.Timestamptz

        if (from === null) return null;
        if ((from as unknown) instanceof global.Date) return from;
        return new global.Date(from);
      }
    }
    export namespace Timetz {
      export function parse(from: any) {
        // Type PgCatalog.Types.Timetz

        if (from === null) return null;
        if ((from as unknown) instanceof global.Date) return from;
        return new global.Date(from);
      }
    }
    export namespace Trigger {
      export function parse(from: any) {
        // Type PgCatalog.Types.Trigger

        return from;
      }
    }
    export namespace TsmHandler {
      export function parse(from: any) {
        // Type PgCatalog.Types.TsmHandler

        return from;
      }
    }
    export namespace Tsmultirange {
      export function parse(from: any) {
        // Type PgCatalog.Types.Tsmultirange

        return from;
      }
    }
    export namespace Tsquery {
      export function parse(from: any) {
        // Type PgCatalog.Types.Tsquery

        return from;
      }
    }
    export namespace Tsrange {
      export function parse(from: any) {
        // Type PgCatalog.Types.Tsrange

        return from;
      }
    }
    export namespace Tstzmultirange {
      export function parse(from: any) {
        // Type PgCatalog.Types.Tstzmultirange

        return from;
      }
    }
    export namespace Tstzrange {
      export function parse(from: any) {
        // Type PgCatalog.Types.Tstzrange

        return from;
      }
    }
    export namespace Tsvector {
      export function parse(from: any) {
        // Type PgCatalog.Types.Tsvector

        return from;
      }
    }
    export namespace TxidSnapshot {
      export function parse(from: any) {
        // Type PgCatalog.Types.TxidSnapshot

        return from;
      }
    }
    export namespace Unknown {
      export function parse(from: any) {
        // Type PgCatalog.Types.Unknown

        return from;
      }
    }
    export namespace Uuid {
      export function parse(from: any) {
        // Type PgCatalog.Types.Uuid

        return from ? new UUID(from) : null;
      }
    }
    export namespace Varbit {
      export function parse(from: any) {
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
      export function parse(from: any) {
        // Type PgCatalog.Types.Varchar

        return from;
      }
    }
    export namespace Void {
      export function parse(from: any) {
        // Type PgCatalog.Types.Void

        return from;
      }
    }
    export namespace Xid {
      export function parse(from: any) {
        // Type PgCatalog.Types.Xid

        return from;
      }
    }
    export namespace Xid8 {
      export function parse(from: any) {
        // Type PgCatalog.Types.Xid8

        return from;
      }
    }
    export namespace Xml {
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
        // CompositeType Public.Types.Actor
        if (Public.Types.Actor.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ActorInfo {
      export function parse(from: any) {
        // CompositeType Public.Types.ActorInfo
        if (Public.Types.ActorInfo.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Address {
      export function parse(from: any) {
        // CompositeType Public.Types.Address
        if (Public.Types.Address.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Category {
      export function parse(from: any) {
        // CompositeType Public.Types.Category
        if (Public.Types.Category.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace City {
      export function parse(from: any) {
        // CompositeType Public.Types.City
        if (Public.Types.City.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Country {
      export function parse(from: any) {
        // CompositeType Public.Types.Country
        if (Public.Types.Country.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Customer {
      export function parse(from: any) {
        // CompositeType Public.Types.Customer
        if (Public.Types.Customer.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace CustomerList {
      export function parse(from: any) {
        // CompositeType Public.Types.CustomerList
        if (Public.Types.CustomerList.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Film {
      export function parse(from: any) {
        // CompositeType Public.Types.Film
        if (Public.Types.Film.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace FilmActor {
      export function parse(from: any) {
        // CompositeType Public.Types.FilmActor
        if (Public.Types.FilmActor.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace FilmCategory {
      export function parse(from: any) {
        // CompositeType Public.Types.FilmCategory
        if (Public.Types.FilmCategory.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace FilmList {
      export function parse(from: any) {
        // CompositeType Public.Types.FilmList
        if (Public.Types.FilmList.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Inventory {
      export function parse(from: any) {
        // CompositeType Public.Types.Inventory
        if (Public.Types.Inventory.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Language {
      export function parse(from: any) {
        // CompositeType Public.Types.Language
        if (Public.Types.Language.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace MpaaRating {
      export function parse(from: any) {
        // Enum Public.Types.MpaaRating

        return from;
      }
    }
    export namespace NicerButSlowerFilmList {
      export function parse(from: any) {
        // CompositeType Public.Types.NicerButSlowerFilmList
        if (Public.Types.NicerButSlowerFilmList.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Payment {
      export function parse(from: any) {
        // CompositeType Public.Types.Payment
        if (Public.Types.Payment.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Rental {
      export function parse(from: any) {
        // CompositeType Public.Types.Rental
        if (Public.Types.Rental.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace SalesByFilmCategory {
      export function parse(from: any) {
        // CompositeType Public.Types.SalesByFilmCategory
        if (Public.Types.SalesByFilmCategory.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace SalesByStore {
      export function parse(from: any) {
        // CompositeType Public.Types.SalesByStore
        if (Public.Types.SalesByStore.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Staff {
      export function parse(from: any) {
        // CompositeType Public.Types.Staff
        if (Public.Types.Staff.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace StaffList {
      export function parse(from: any) {
        // CompositeType Public.Types.StaffList
        if (Public.Types.StaffList.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Store {
      export function parse(from: any) {
        // CompositeType Public.Types.Store
        if (Public.Types.Store.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Year {
      export function parse(from: any) {
        // DomainType Public.Types.Year
        return PgCatalog.Types.Int4.parse(from);
      }
    }
    export namespace FilmInStockResults {
      export function parse(from: any) {
        // CompositeType Public.Types.FilmInStockResults
        if (Public.Types.FilmInStockResults.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace FilmNotInStockResults {
      export function parse(from: any) {
        // CompositeType Public.Types.FilmNotInStockResults
        if (Public.Types.FilmNotInStockResults.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
  }
  export namespace Procedures {
    export namespace FilmInStock {
      export namespace Parameters {
        export function parse(from: any) {
          // CompositeType Public.Procedures.FilmInStock.Parameters
          if (Public.Procedures.FilmInStock.Parameters.is(from)) {
            return from;
          }
          throw new Error(JSON.stringify(from));
        }
      }
      export namespace Results {
        export function parse(from: any) {
          // AliasType Public.Procedures.FilmInStock.Results
          return Public.Types.FilmInStockResults.parse(from);
        }
      }
    }
    export namespace FilmNotInStock {
      export namespace Parameters {
        export function parse(from: any) {
          // CompositeType Public.Procedures.FilmNotInStock.Parameters
          if (Public.Procedures.FilmNotInStock.Parameters.is(from)) {
            return from;
          }
          throw new Error(JSON.stringify(from));
        }
      }
      export namespace Results {
        export function parse(from: any) {
          // AliasType Public.Procedures.FilmNotInStock.Results
          return Public.Types.FilmNotInStockResults.parse(from);
        }
      }
    }
    export namespace GetCustomerBalance {
      export namespace Parameters {
        export function parse(from: any) {
          // CompositeType Public.Procedures.GetCustomerBalance.Parameters
          if (Public.Procedures.GetCustomerBalance.Parameters.is(from)) {
            return from;
          }
          throw new Error(JSON.stringify(from));
        }
      }
      export namespace Results {
        export function parse(from: any) {
          // AliasType Public.Procedures.GetCustomerBalance.Results
          return PgCatalog.Types.Numeric.parse(from);
        }
      }
    }
    export namespace InventoryHeldByCustomer {
      export namespace Parameters {
        export function parse(from: any) {
          // CompositeType Public.Procedures.InventoryHeldByCustomer.Parameters
          if (Public.Procedures.InventoryHeldByCustomer.Parameters.is(from)) {
            return from;
          }
          throw new Error(JSON.stringify(from));
        }
      }
      export namespace Results {
        export function parse(from: any) {
          // AliasType Public.Procedures.InventoryHeldByCustomer.Results
          return PgCatalog.Types.Int4.parse(from);
        }
      }
    }
    export namespace InventoryInStock {
      export namespace Parameters {
        export function parse(from: any) {
          // CompositeType Public.Procedures.InventoryInStock.Parameters
          if (Public.Procedures.InventoryInStock.Parameters.is(from)) {
            return from;
          }
          throw new Error(JSON.stringify(from));
        }
      }
      export namespace Results {
        export function parse(from: any) {
          // AliasType Public.Procedures.InventoryInStock.Results
          return PgCatalog.Types.Bool.parse(from);
        }
      }
    }
    export namespace LastDay {
      export namespace Parameters {
        export function parse(from: any) {
          // CompositeType Public.Procedures.LastDay.Parameters
          if (Public.Procedures.LastDay.Parameters.is(from)) {
            return from;
          }
          throw new Error(JSON.stringify(from));
        }
      }
      export namespace Results {
        export function parse(from: any) {
          // AliasType Public.Procedures.LastDay.Results
          return PgCatalog.Types.Date.parse(from);
        }
      }
    }
    export namespace RewardsReport {
      export namespace Parameters {
        export function parse(from: any) {
          // CompositeType Public.Procedures.RewardsReport.Parameters
          if (Public.Procedures.RewardsReport.Parameters.is(from)) {
            return from;
          }
          throw new Error(JSON.stringify(from));
        }
      }
      export namespace Results {
        export function parse(from: any) {
          // AliasType Public.Procedures.RewardsReport.Results
          return Public.Types.Customer.parse(from);
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.PgForeignDataWrappers
        if (InformationSchema.Types.PgForeignDataWrappers.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgForeignServers {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.PgForeignServers
        if (InformationSchema.Types.PgForeignServers.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgForeignTableColumns {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.PgForeignTableColumns
        if (InformationSchema.Types.PgForeignTableColumns.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgForeignTables {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.PgForeignTables
        if (InformationSchema.Types.PgForeignTables.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace PgUserMappings {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.PgUserMappings
        if (InformationSchema.Types.PgUserMappings.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ReferentialConstraintsArray {
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
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
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.AdministrableRoleAuthorizations
        if (InformationSchema.Types.AdministrableRoleAuthorizations.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ApplicableRoles {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.ApplicableRoles
        if (InformationSchema.Types.ApplicableRoles.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Attributes {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.Attributes
        if (InformationSchema.Types.Attributes.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace CardinalNumber {
      export function parse(from: any) {
        // DomainType InformationSchema.Types.CardinalNumber
        return PgCatalog.Types.Int4.parse(from);
      }
    }
    export namespace CharacterData {
      export function parse(from: any) {
        // DomainType InformationSchema.Types.CharacterData
        return PgCatalog.Types.Varchar.parse(from);
      }
    }
    export namespace CharacterSets {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.CharacterSets
        if (InformationSchema.Types.CharacterSets.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace CheckConstraintRoutineUsage {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.CheckConstraintRoutineUsage
        if (InformationSchema.Types.CheckConstraintRoutineUsage.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace CheckConstraints {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.CheckConstraints
        if (InformationSchema.Types.CheckConstraints.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace CollationCharacterSetApplicability {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.CollationCharacterSetApplicability
        if (
          InformationSchema.Types.CollationCharacterSetApplicability.is(from)
        ) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Collations {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.Collations
        if (InformationSchema.Types.Collations.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ColumnColumnUsage {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.ColumnColumnUsage
        if (InformationSchema.Types.ColumnColumnUsage.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ColumnDomainUsage {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.ColumnDomainUsage
        if (InformationSchema.Types.ColumnDomainUsage.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ColumnOptions {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.ColumnOptions
        if (InformationSchema.Types.ColumnOptions.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ColumnPrivileges {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.ColumnPrivileges
        if (InformationSchema.Types.ColumnPrivileges.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ColumnUdtUsage {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.ColumnUdtUsage
        if (InformationSchema.Types.ColumnUdtUsage.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Columns {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.Columns
        if (InformationSchema.Types.Columns.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ConstraintColumnUsage {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.ConstraintColumnUsage
        if (InformationSchema.Types.ConstraintColumnUsage.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ConstraintTableUsage {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.ConstraintTableUsage
        if (InformationSchema.Types.ConstraintTableUsage.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace DataTypePrivileges {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.DataTypePrivileges
        if (InformationSchema.Types.DataTypePrivileges.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace DomainConstraints {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.DomainConstraints
        if (InformationSchema.Types.DomainConstraints.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace DomainUdtUsage {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.DomainUdtUsage
        if (InformationSchema.Types.DomainUdtUsage.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Domains {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.Domains
        if (InformationSchema.Types.Domains.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ElementTypes {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.ElementTypes
        if (InformationSchema.Types.ElementTypes.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace EnabledRoles {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.EnabledRoles
        if (InformationSchema.Types.EnabledRoles.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ForeignDataWrapperOptions {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.ForeignDataWrapperOptions
        if (InformationSchema.Types.ForeignDataWrapperOptions.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ForeignDataWrappers {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.ForeignDataWrappers
        if (InformationSchema.Types.ForeignDataWrappers.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ForeignServerOptions {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.ForeignServerOptions
        if (InformationSchema.Types.ForeignServerOptions.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ForeignServers {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.ForeignServers
        if (InformationSchema.Types.ForeignServers.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ForeignTableOptions {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.ForeignTableOptions
        if (InformationSchema.Types.ForeignTableOptions.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ForeignTables {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.ForeignTables
        if (InformationSchema.Types.ForeignTables.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace InformationSchemaCatalogName {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.InformationSchemaCatalogName
        if (InformationSchema.Types.InformationSchemaCatalogName.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace KeyColumnUsage {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.KeyColumnUsage
        if (InformationSchema.Types.KeyColumnUsage.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Parameters {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.Parameters
        if (InformationSchema.Types.Parameters.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ReferentialConstraints {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.ReferentialConstraints
        if (InformationSchema.Types.ReferentialConstraints.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace RoleColumnGrants {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.RoleColumnGrants
        if (InformationSchema.Types.RoleColumnGrants.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace RoleRoutineGrants {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.RoleRoutineGrants
        if (InformationSchema.Types.RoleRoutineGrants.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace RoleTableGrants {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.RoleTableGrants
        if (InformationSchema.Types.RoleTableGrants.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace RoleUdtGrants {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.RoleUdtGrants
        if (InformationSchema.Types.RoleUdtGrants.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace RoleUsageGrants {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.RoleUsageGrants
        if (InformationSchema.Types.RoleUsageGrants.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace RoutineColumnUsage {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.RoutineColumnUsage
        if (InformationSchema.Types.RoutineColumnUsage.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace RoutinePrivileges {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.RoutinePrivileges
        if (InformationSchema.Types.RoutinePrivileges.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace RoutineRoutineUsage {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.RoutineRoutineUsage
        if (InformationSchema.Types.RoutineRoutineUsage.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace RoutineSequenceUsage {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.RoutineSequenceUsage
        if (InformationSchema.Types.RoutineSequenceUsage.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace RoutineTableUsage {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.RoutineTableUsage
        if (InformationSchema.Types.RoutineTableUsage.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Routines {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.Routines
        if (InformationSchema.Types.Routines.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Schemata {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.Schemata
        if (InformationSchema.Types.Schemata.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Sequences {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.Sequences
        if (InformationSchema.Types.Sequences.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace SqlFeatures {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.SqlFeatures
        if (InformationSchema.Types.SqlFeatures.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace SqlIdentifier {
      export function parse(from: any) {
        // DomainType InformationSchema.Types.SqlIdentifier
        return PgCatalog.Types.Name.parse(from);
      }
    }
    export namespace SqlImplementationInfo {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.SqlImplementationInfo
        if (InformationSchema.Types.SqlImplementationInfo.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace SqlParts {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.SqlParts
        if (InformationSchema.Types.SqlParts.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace SqlSizing {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.SqlSizing
        if (InformationSchema.Types.SqlSizing.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace TableConstraints {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.TableConstraints
        if (InformationSchema.Types.TableConstraints.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace TablePrivileges {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.TablePrivileges
        if (InformationSchema.Types.TablePrivileges.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Tables {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.Tables
        if (InformationSchema.Types.Tables.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace TimeStamp {
      export function parse(from: any) {
        // DomainType InformationSchema.Types.TimeStamp
        return PgCatalog.Types.Timestamptz.parse(from);
      }
    }
    export namespace Transforms {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.Transforms
        if (InformationSchema.Types.Transforms.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace TriggeredUpdateColumns {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.TriggeredUpdateColumns
        if (InformationSchema.Types.TriggeredUpdateColumns.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Triggers {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.Triggers
        if (InformationSchema.Types.Triggers.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace UdtPrivileges {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.UdtPrivileges
        if (InformationSchema.Types.UdtPrivileges.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace UsagePrivileges {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.UsagePrivileges
        if (InformationSchema.Types.UsagePrivileges.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace UserDefinedTypes {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.UserDefinedTypes
        if (InformationSchema.Types.UserDefinedTypes.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace UserMappingOptions {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.UserMappingOptions
        if (InformationSchema.Types.UserMappingOptions.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace UserMappings {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.UserMappings
        if (InformationSchema.Types.UserMappings.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ViewColumnUsage {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.ViewColumnUsage
        if (InformationSchema.Types.ViewColumnUsage.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ViewRoutineUsage {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.ViewRoutineUsage
        if (InformationSchema.Types.ViewRoutineUsage.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace ViewTableUsage {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.ViewTableUsage
        if (InformationSchema.Types.ViewTableUsage.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace Views {
      export function parse(from: any) {
        // CompositeType InformationSchema.Types.Views
        if (InformationSchema.Types.Views.is(from)) {
          return from;
        }
        throw new Error(JSON.stringify(from));
      }
    }
    export namespace YesOrNo {
      export function parse(from: any) {
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
export namespace Public {
  export namespace Types {
    export namespace Actor {
      export function is(value: any): value is Public.Types.Actor {
        if (
          value.actorId !== undefined &&
          value.firstName !== undefined &&
          value.lastName !== undefined &&
          value.lastUpdate !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace ActorInfo {
      export function is(value: any): value is Public.Types.ActorInfo {
        if (
          value.actorId !== undefined &&
          value.firstName !== undefined &&
          value.lastName !== undefined &&
          value.filmInfo !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace Address {
      export function is(value: any): value is Public.Types.Address {
        if (
          value.addressId !== undefined &&
          value.address !== undefined &&
          value.address2 !== undefined &&
          value.district !== undefined &&
          value.cityId !== undefined &&
          value.postalCode !== undefined &&
          value.phone !== undefined &&
          value.lastUpdate !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace Category {
      export function is(value: any): value is Public.Types.Category {
        if (
          value.categoryId !== undefined &&
          value.name !== undefined &&
          value.lastUpdate !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace City {
      export function is(value: any): value is Public.Types.City {
        if (
          value.cityId !== undefined &&
          value.city !== undefined &&
          value.countryId !== undefined &&
          value.lastUpdate !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace Country {
      export function is(value: any): value is Public.Types.Country {
        if (
          value.countryId !== undefined &&
          value.country !== undefined &&
          value.lastUpdate !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace Customer {
      export function is(value: any): value is Public.Types.Customer {
        if (
          value.customerId !== undefined &&
          value.storeId !== undefined &&
          value.firstName !== undefined &&
          value.lastName !== undefined &&
          value.email !== undefined &&
          value.addressId !== undefined &&
          value.activebool !== undefined &&
          value.createDate !== undefined &&
          value.lastUpdate !== undefined &&
          value.active !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace CustomerList {
      export function is(value: any): value is Public.Types.CustomerList {
        if (
          value.id !== undefined &&
          value.name !== undefined &&
          value.address !== undefined &&
          value.zipCode !== undefined &&
          value.phone !== undefined &&
          value.city !== undefined &&
          value.country !== undefined &&
          value.notes !== undefined &&
          value.sid !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace Film {
      export function is(value: any): value is Public.Types.Film {
        if (
          value.filmId !== undefined &&
          value.title !== undefined &&
          value.description !== undefined &&
          value.releaseYear !== undefined &&
          value.languageId !== undefined &&
          value.rentalDuration !== undefined &&
          value.rentalRate !== undefined &&
          value.length !== undefined &&
          value.replacementCost !== undefined &&
          value.rating !== undefined &&
          value.lastUpdate !== undefined &&
          value.specialFeatures !== undefined &&
          value.fulltext !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace FilmActor {
      export function is(value: any): value is Public.Types.FilmActor {
        if (
          value.actorId !== undefined &&
          value.filmId !== undefined &&
          value.lastUpdate !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace FilmCategory {
      export function is(value: any): value is Public.Types.FilmCategory {
        if (
          value.filmId !== undefined &&
          value.categoryId !== undefined &&
          value.lastUpdate !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace FilmList {
      export function is(value: any): value is Public.Types.FilmList {
        if (
          value.fid !== undefined &&
          value.title !== undefined &&
          value.description !== undefined &&
          value.category !== undefined &&
          value.price !== undefined &&
          value.length !== undefined &&
          value.rating !== undefined &&
          value.actors !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace Inventory {
      export function is(value: any): value is Public.Types.Inventory {
        if (
          value.inventoryId !== undefined &&
          value.filmId !== undefined &&
          value.storeId !== undefined &&
          value.lastUpdate !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace Language {
      export function is(value: any): value is Public.Types.Language {
        if (
          value.languageId !== undefined &&
          value.name !== undefined &&
          value.lastUpdate !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace NicerButSlowerFilmList {
      export function is(
        value: any,
      ): value is Public.Types.NicerButSlowerFilmList {
        if (
          value.fid !== undefined &&
          value.title !== undefined &&
          value.description !== undefined &&
          value.category !== undefined &&
          value.price !== undefined &&
          value.length !== undefined &&
          value.rating !== undefined &&
          value.actors !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace Payment {
      export function is(value: any): value is Public.Types.Payment {
        if (
          value.paymentId !== undefined &&
          value.customerId !== undefined &&
          value.staffId !== undefined &&
          value.rentalId !== undefined &&
          value.amount !== undefined &&
          value.paymentDate !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace Rental {
      export function is(value: any): value is Public.Types.Rental {
        if (
          value.rentalId !== undefined &&
          value.rentalDate !== undefined &&
          value.inventoryId !== undefined &&
          value.customerId !== undefined &&
          value.returnDate !== undefined &&
          value.staffId !== undefined &&
          value.lastUpdate !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace SalesByFilmCategory {
      export function is(
        value: any,
      ): value is Public.Types.SalesByFilmCategory {
        if (value.category !== undefined && value.totalSales !== undefined)
          return true;
        return false;
      }
    }
    export namespace SalesByStore {
      export function is(value: any): value is Public.Types.SalesByStore {
        if (
          value.store !== undefined &&
          value.manager !== undefined &&
          value.totalSales !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace Staff {
      export function is(value: any): value is Public.Types.Staff {
        if (
          value.staffId !== undefined &&
          value.firstName !== undefined &&
          value.lastName !== undefined &&
          value.addressId !== undefined &&
          value.email !== undefined &&
          value.storeId !== undefined &&
          value.active !== undefined &&
          value.username !== undefined &&
          value.password !== undefined &&
          value.lastUpdate !== undefined &&
          value.picture !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace StaffList {
      export function is(value: any): value is Public.Types.StaffList {
        if (
          value.id !== undefined &&
          value.name !== undefined &&
          value.address !== undefined &&
          value.zipCode !== undefined &&
          value.phone !== undefined &&
          value.city !== undefined &&
          value.country !== undefined &&
          value.sid !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace Store {
      export function is(value: any): value is Public.Types.Store {
        if (
          value.storeId !== undefined &&
          value.managerStaffId !== undefined &&
          value.addressId !== undefined &&
          value.lastUpdate !== undefined
        )
          return true;
        return false;
      }
    }
    export namespace FilmInStockResults {
      export function is(value: any): value is Public.Types.FilmInStockResults {
        if (value.pFilmCount !== undefined) return true;
        return false;
      }
    }
    export namespace FilmNotInStockResults {
      export function is(
        value: any,
      ): value is Public.Types.FilmNotInStockResults {
        if (value.pFilmCount !== undefined) return true;
        return false;
      }
    }
  }
  export namespace Procedures {
    export namespace FilmInStock {
      export namespace Parameters {
        export function is(
          value: any,
        ): value is Public.Procedures.FilmInStock.Parameters {
          if (value.pFilmId !== undefined && value.pStoreId !== undefined)
            return true;
          return false;
        }
      }
    }
    export namespace FilmNotInStock {
      export namespace Parameters {
        export function is(
          value: any,
        ): value is Public.Procedures.FilmNotInStock.Parameters {
          if (value.pFilmId !== undefined && value.pStoreId !== undefined)
            return true;
          return false;
        }
      }
    }
    export namespace GetCustomerBalance {
      export namespace Parameters {
        export function is(
          value: any,
        ): value is Public.Procedures.GetCustomerBalance.Parameters {
          if (
            value.pCustomerId !== undefined &&
            value.pEffectiveDate !== undefined
          )
            return true;
          return false;
        }
      }
    }
    export namespace InventoryHeldByCustomer {
      export namespace Parameters {
        export function is(
          value: any,
        ): value is Public.Procedures.InventoryHeldByCustomer.Parameters {
          if (value.pInventoryId !== undefined) return true;
          return false;
        }
      }
    }
    export namespace InventoryInStock {
      export namespace Parameters {
        export function is(
          value: any,
        ): value is Public.Procedures.InventoryInStock.Parameters {
          if (value.pInventoryId !== undefined) return true;
          return false;
        }
      }
    }
    export namespace LastDay {
      export namespace Parameters {
        export function is(
          value: any,
        ): value is Public.Procedures.LastDay.Parameters {
          if (value.argument_0 !== undefined) return true;
          return false;
        }
      }
    }
    export namespace RewardsReport {
      export namespace Parameters {
        export function is(
          value: any,
        ): value is Public.Procedures.RewardsReport.Parameters {
          if (
            value.minMonthlyPurchases !== undefined &&
            value.minDollarAmountPurchased !== undefined
          )
            return true;
          return false;
        }
      }
    }
  }
  export namespace Tables {
    export namespace FilmActor {}
    export namespace Address {}
    export namespace City {}
    export namespace Customer {}
    export namespace Actor {}
    export namespace FilmCategory {}
    export namespace Inventory {}
    export namespace Category {}
    export namespace Country {}
    export namespace Language {}
    export namespace Rental {}
    export namespace Staff {}
    export namespace Store {}
    export namespace Payment {}
    export namespace Film {}
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
// Begin React generated section
import React from "react";
export { EmbraceSQLClient, EmbraceSQLProvider } from "@embracesql/react";
import {
  useEmbraceSQLRequest,
  useEmbraceSQLUpdateCallback,
  InterceptorCallback,
  Intercepted,
  ChangeEvent,
} from "@embracesql/react";

export namespace Public {
  export namespace Tables {
    export namespace FilmActor {
      export function interceptor(
        uninterceptedValue: Public.Tables.FilmActor.Record,
        callback: InterceptorCallback<Public.Tables.FilmActor.Record>,
        index?: number,
      ): Intercepted<Public.Tables.FilmActor.Record> {
        const ret = {
          get actorId() {
            return uninterceptedValue.actorId;
          },
          set actorId(newValue) {
            uninterceptedValue.actorId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeActorId(event: ChangeEvent) {
            const parsedValue = Public.Tables.FilmActor.ActorId.parse(
              event.target.value,
            );
            ret.actorId =
              parsedValue as Public.Tables.FilmActor.Record["actorId"];
          },

          get filmId() {
            return uninterceptedValue.filmId;
          },
          set filmId(newValue) {
            uninterceptedValue.filmId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeFilmId(event: ChangeEvent) {
            const parsedValue = Public.Tables.FilmActor.FilmId.parse(
              event.target.value,
            );
            ret.filmId =
              parsedValue as Public.Tables.FilmActor.Record["filmId"];
          },

          get lastUpdate() {
            return uninterceptedValue.lastUpdate;
          },
          set lastUpdate(newValue) {
            uninterceptedValue.lastUpdate = newValue;
            void callback(uninterceptedValue, index);
          },
          changeLastUpdate(event: ChangeEvent) {
            const parsedValue = Public.Tables.FilmActor.LastUpdate.parse(
              event.target.value,
            );
            ret.lastUpdate =
              parsedValue as Public.Tables.FilmActor.Record["lastUpdate"];
          },
        };
        return ret;
      }
    }
    export namespace Address {
      export function interceptor(
        uninterceptedValue: Public.Tables.Address.Record,
        callback: InterceptorCallback<Public.Tables.Address.Record>,
        index?: number,
      ): Intercepted<Public.Tables.Address.Record> {
        const ret = {
          get addressId() {
            return uninterceptedValue.addressId;
          },
          set addressId(newValue) {
            uninterceptedValue.addressId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeAddressId(event: ChangeEvent) {
            const parsedValue = Public.Tables.Address.AddressId.parse(
              event.target.value,
            );
            ret.addressId =
              parsedValue as Public.Tables.Address.Record["addressId"];
          },

          get address() {
            return uninterceptedValue.address;
          },
          set address(newValue) {
            uninterceptedValue.address = newValue;
            void callback(uninterceptedValue, index);
          },
          changeAddress(event: ChangeEvent) {
            const parsedValue = Public.Tables.Address.Address.parse(
              event.target.value,
            );
            ret.address =
              parsedValue as Public.Tables.Address.Record["address"];
          },

          get address2() {
            return uninterceptedValue.address2;
          },
          set address2(newValue) {
            uninterceptedValue.address2 = newValue;
            void callback(uninterceptedValue, index);
          },
          changeAddress2(event: ChangeEvent) {
            const parsedValue = Public.Tables.Address.Address2.parse(
              event.target.value,
            );
            ret.address2 =
              parsedValue as Public.Tables.Address.Record["address2"];
          },

          get district() {
            return uninterceptedValue.district;
          },
          set district(newValue) {
            uninterceptedValue.district = newValue;
            void callback(uninterceptedValue, index);
          },
          changeDistrict(event: ChangeEvent) {
            const parsedValue = Public.Tables.Address.District.parse(
              event.target.value,
            );
            ret.district =
              parsedValue as Public.Tables.Address.Record["district"];
          },

          get cityId() {
            return uninterceptedValue.cityId;
          },
          set cityId(newValue) {
            uninterceptedValue.cityId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeCityId(event: ChangeEvent) {
            const parsedValue = Public.Tables.Address.CityId.parse(
              event.target.value,
            );
            ret.cityId = parsedValue as Public.Tables.Address.Record["cityId"];
          },

          get postalCode() {
            return uninterceptedValue.postalCode;
          },
          set postalCode(newValue) {
            uninterceptedValue.postalCode = newValue;
            void callback(uninterceptedValue, index);
          },
          changePostalCode(event: ChangeEvent) {
            const parsedValue = Public.Tables.Address.PostalCode.parse(
              event.target.value,
            );
            ret.postalCode =
              parsedValue as Public.Tables.Address.Record["postalCode"];
          },

          get phone() {
            return uninterceptedValue.phone;
          },
          set phone(newValue) {
            uninterceptedValue.phone = newValue;
            void callback(uninterceptedValue, index);
          },
          changePhone(event: ChangeEvent) {
            const parsedValue = Public.Tables.Address.Phone.parse(
              event.target.value,
            );
            ret.phone = parsedValue as Public.Tables.Address.Record["phone"];
          },

          get lastUpdate() {
            return uninterceptedValue.lastUpdate;
          },
          set lastUpdate(newValue) {
            uninterceptedValue.lastUpdate = newValue;
            void callback(uninterceptedValue, index);
          },
          changeLastUpdate(event: ChangeEvent) {
            const parsedValue = Public.Tables.Address.LastUpdate.parse(
              event.target.value,
            );
            ret.lastUpdate =
              parsedValue as Public.Tables.Address.Record["lastUpdate"];
          },
        };
        return ret;
      }
    }
    export namespace City {
      export function interceptor(
        uninterceptedValue: Public.Tables.City.Record,
        callback: InterceptorCallback<Public.Tables.City.Record>,
        index?: number,
      ): Intercepted<Public.Tables.City.Record> {
        const ret = {
          get cityId() {
            return uninterceptedValue.cityId;
          },
          set cityId(newValue) {
            uninterceptedValue.cityId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeCityId(event: ChangeEvent) {
            const parsedValue = Public.Tables.City.CityId.parse(
              event.target.value,
            );
            ret.cityId = parsedValue as Public.Tables.City.Record["cityId"];
          },

          get city() {
            return uninterceptedValue.city;
          },
          set city(newValue) {
            uninterceptedValue.city = newValue;
            void callback(uninterceptedValue, index);
          },
          changeCity(event: ChangeEvent) {
            const parsedValue = Public.Tables.City.City.parse(
              event.target.value,
            );
            ret.city = parsedValue as Public.Tables.City.Record["city"];
          },

          get countryId() {
            return uninterceptedValue.countryId;
          },
          set countryId(newValue) {
            uninterceptedValue.countryId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeCountryId(event: ChangeEvent) {
            const parsedValue = Public.Tables.City.CountryId.parse(
              event.target.value,
            );
            ret.countryId =
              parsedValue as Public.Tables.City.Record["countryId"];
          },

          get lastUpdate() {
            return uninterceptedValue.lastUpdate;
          },
          set lastUpdate(newValue) {
            uninterceptedValue.lastUpdate = newValue;
            void callback(uninterceptedValue, index);
          },
          changeLastUpdate(event: ChangeEvent) {
            const parsedValue = Public.Tables.City.LastUpdate.parse(
              event.target.value,
            );
            ret.lastUpdate =
              parsedValue as Public.Tables.City.Record["lastUpdate"];
          },
        };
        return ret;
      }
    }
    export namespace Customer {
      export function interceptor(
        uninterceptedValue: Public.Tables.Customer.Record,
        callback: InterceptorCallback<Public.Tables.Customer.Record>,
        index?: number,
      ): Intercepted<Public.Tables.Customer.Record> {
        const ret = {
          get customerId() {
            return uninterceptedValue.customerId;
          },
          set customerId(newValue) {
            uninterceptedValue.customerId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeCustomerId(event: ChangeEvent) {
            const parsedValue = Public.Tables.Customer.CustomerId.parse(
              event.target.value,
            );
            ret.customerId =
              parsedValue as Public.Tables.Customer.Record["customerId"];
          },

          get storeId() {
            return uninterceptedValue.storeId;
          },
          set storeId(newValue) {
            uninterceptedValue.storeId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeStoreId(event: ChangeEvent) {
            const parsedValue = Public.Tables.Customer.StoreId.parse(
              event.target.value,
            );
            ret.storeId =
              parsedValue as Public.Tables.Customer.Record["storeId"];
          },

          get firstName() {
            return uninterceptedValue.firstName;
          },
          set firstName(newValue) {
            uninterceptedValue.firstName = newValue;
            void callback(uninterceptedValue, index);
          },
          changeFirstName(event: ChangeEvent) {
            const parsedValue = Public.Tables.Customer.FirstName.parse(
              event.target.value,
            );
            ret.firstName =
              parsedValue as Public.Tables.Customer.Record["firstName"];
          },

          get lastName() {
            return uninterceptedValue.lastName;
          },
          set lastName(newValue) {
            uninterceptedValue.lastName = newValue;
            void callback(uninterceptedValue, index);
          },
          changeLastName(event: ChangeEvent) {
            const parsedValue = Public.Tables.Customer.LastName.parse(
              event.target.value,
            );
            ret.lastName =
              parsedValue as Public.Tables.Customer.Record["lastName"];
          },

          get email() {
            return uninterceptedValue.email;
          },
          set email(newValue) {
            uninterceptedValue.email = newValue;
            void callback(uninterceptedValue, index);
          },
          changeEmail(event: ChangeEvent) {
            const parsedValue = Public.Tables.Customer.Email.parse(
              event.target.value,
            );
            ret.email = parsedValue as Public.Tables.Customer.Record["email"];
          },

          get addressId() {
            return uninterceptedValue.addressId;
          },
          set addressId(newValue) {
            uninterceptedValue.addressId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeAddressId(event: ChangeEvent) {
            const parsedValue = Public.Tables.Customer.AddressId.parse(
              event.target.value,
            );
            ret.addressId =
              parsedValue as Public.Tables.Customer.Record["addressId"];
          },

          get activebool() {
            return uninterceptedValue.activebool;
          },
          set activebool(newValue) {
            uninterceptedValue.activebool = newValue;
            void callback(uninterceptedValue, index);
          },
          changeActivebool(event: ChangeEvent) {
            const parsedValue = Public.Tables.Customer.Activebool.parse(
              event.target.value,
            );
            ret.activebool =
              parsedValue as Public.Tables.Customer.Record["activebool"];
          },

          get createDate() {
            return uninterceptedValue.createDate;
          },
          set createDate(newValue) {
            uninterceptedValue.createDate = newValue;
            void callback(uninterceptedValue, index);
          },
          changeCreateDate(event: ChangeEvent) {
            const parsedValue = Public.Tables.Customer.CreateDate.parse(
              event.target.value,
            );
            ret.createDate =
              parsedValue as Public.Tables.Customer.Record["createDate"];
          },

          get lastUpdate() {
            return uninterceptedValue.lastUpdate;
          },
          set lastUpdate(newValue) {
            uninterceptedValue.lastUpdate = newValue;
            void callback(uninterceptedValue, index);
          },
          changeLastUpdate(event: ChangeEvent) {
            const parsedValue = Public.Tables.Customer.LastUpdate.parse(
              event.target.value,
            );
            ret.lastUpdate =
              parsedValue as Public.Tables.Customer.Record["lastUpdate"];
          },

          get active() {
            return uninterceptedValue.active;
          },
          set active(newValue) {
            uninterceptedValue.active = newValue;
            void callback(uninterceptedValue, index);
          },
          changeActive(event: ChangeEvent) {
            const parsedValue = Public.Tables.Customer.Active.parse(
              event.target.value,
            );
            ret.active = parsedValue as Public.Tables.Customer.Record["active"];
          },
        };
        return ret;
      }
    }
    export namespace Actor {
      export function interceptor(
        uninterceptedValue: Public.Tables.Actor.Record,
        callback: InterceptorCallback<Public.Tables.Actor.Record>,
        index?: number,
      ): Intercepted<Public.Tables.Actor.Record> {
        const ret = {
          get actorId() {
            return uninterceptedValue.actorId;
          },
          set actorId(newValue) {
            uninterceptedValue.actorId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeActorId(event: ChangeEvent) {
            const parsedValue = Public.Tables.Actor.ActorId.parse(
              event.target.value,
            );
            ret.actorId = parsedValue as Public.Tables.Actor.Record["actorId"];
          },

          get firstName() {
            return uninterceptedValue.firstName;
          },
          set firstName(newValue) {
            uninterceptedValue.firstName = newValue;
            void callback(uninterceptedValue, index);
          },
          changeFirstName(event: ChangeEvent) {
            const parsedValue = Public.Tables.Actor.FirstName.parse(
              event.target.value,
            );
            ret.firstName =
              parsedValue as Public.Tables.Actor.Record["firstName"];
          },

          get lastName() {
            return uninterceptedValue.lastName;
          },
          set lastName(newValue) {
            uninterceptedValue.lastName = newValue;
            void callback(uninterceptedValue, index);
          },
          changeLastName(event: ChangeEvent) {
            const parsedValue = Public.Tables.Actor.LastName.parse(
              event.target.value,
            );
            ret.lastName =
              parsedValue as Public.Tables.Actor.Record["lastName"];
          },

          get lastUpdate() {
            return uninterceptedValue.lastUpdate;
          },
          set lastUpdate(newValue) {
            uninterceptedValue.lastUpdate = newValue;
            void callback(uninterceptedValue, index);
          },
          changeLastUpdate(event: ChangeEvent) {
            const parsedValue = Public.Tables.Actor.LastUpdate.parse(
              event.target.value,
            );
            ret.lastUpdate =
              parsedValue as Public.Tables.Actor.Record["lastUpdate"];
          },
        };
        return ret;
      }
    }
    export namespace FilmCategory {
      export function interceptor(
        uninterceptedValue: Public.Tables.FilmCategory.Record,
        callback: InterceptorCallback<Public.Tables.FilmCategory.Record>,
        index?: number,
      ): Intercepted<Public.Tables.FilmCategory.Record> {
        const ret = {
          get filmId() {
            return uninterceptedValue.filmId;
          },
          set filmId(newValue) {
            uninterceptedValue.filmId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeFilmId(event: ChangeEvent) {
            const parsedValue = Public.Tables.FilmCategory.FilmId.parse(
              event.target.value,
            );
            ret.filmId =
              parsedValue as Public.Tables.FilmCategory.Record["filmId"];
          },

          get categoryId() {
            return uninterceptedValue.categoryId;
          },
          set categoryId(newValue) {
            uninterceptedValue.categoryId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeCategoryId(event: ChangeEvent) {
            const parsedValue = Public.Tables.FilmCategory.CategoryId.parse(
              event.target.value,
            );
            ret.categoryId =
              parsedValue as Public.Tables.FilmCategory.Record["categoryId"];
          },

          get lastUpdate() {
            return uninterceptedValue.lastUpdate;
          },
          set lastUpdate(newValue) {
            uninterceptedValue.lastUpdate = newValue;
            void callback(uninterceptedValue, index);
          },
          changeLastUpdate(event: ChangeEvent) {
            const parsedValue = Public.Tables.FilmCategory.LastUpdate.parse(
              event.target.value,
            );
            ret.lastUpdate =
              parsedValue as Public.Tables.FilmCategory.Record["lastUpdate"];
          },
        };
        return ret;
      }
    }
    export namespace Inventory {
      export function interceptor(
        uninterceptedValue: Public.Tables.Inventory.Record,
        callback: InterceptorCallback<Public.Tables.Inventory.Record>,
        index?: number,
      ): Intercepted<Public.Tables.Inventory.Record> {
        const ret = {
          get inventoryId() {
            return uninterceptedValue.inventoryId;
          },
          set inventoryId(newValue) {
            uninterceptedValue.inventoryId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeInventoryId(event: ChangeEvent) {
            const parsedValue = Public.Tables.Inventory.InventoryId.parse(
              event.target.value,
            );
            ret.inventoryId =
              parsedValue as Public.Tables.Inventory.Record["inventoryId"];
          },

          get filmId() {
            return uninterceptedValue.filmId;
          },
          set filmId(newValue) {
            uninterceptedValue.filmId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeFilmId(event: ChangeEvent) {
            const parsedValue = Public.Tables.Inventory.FilmId.parse(
              event.target.value,
            );
            ret.filmId =
              parsedValue as Public.Tables.Inventory.Record["filmId"];
          },

          get storeId() {
            return uninterceptedValue.storeId;
          },
          set storeId(newValue) {
            uninterceptedValue.storeId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeStoreId(event: ChangeEvent) {
            const parsedValue = Public.Tables.Inventory.StoreId.parse(
              event.target.value,
            );
            ret.storeId =
              parsedValue as Public.Tables.Inventory.Record["storeId"];
          },

          get lastUpdate() {
            return uninterceptedValue.lastUpdate;
          },
          set lastUpdate(newValue) {
            uninterceptedValue.lastUpdate = newValue;
            void callback(uninterceptedValue, index);
          },
          changeLastUpdate(event: ChangeEvent) {
            const parsedValue = Public.Tables.Inventory.LastUpdate.parse(
              event.target.value,
            );
            ret.lastUpdate =
              parsedValue as Public.Tables.Inventory.Record["lastUpdate"];
          },
        };
        return ret;
      }
    }
    export namespace Category {
      export function interceptor(
        uninterceptedValue: Public.Tables.Category.Record,
        callback: InterceptorCallback<Public.Tables.Category.Record>,
        index?: number,
      ): Intercepted<Public.Tables.Category.Record> {
        const ret = {
          get categoryId() {
            return uninterceptedValue.categoryId;
          },
          set categoryId(newValue) {
            uninterceptedValue.categoryId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeCategoryId(event: ChangeEvent) {
            const parsedValue = Public.Tables.Category.CategoryId.parse(
              event.target.value,
            );
            ret.categoryId =
              parsedValue as Public.Tables.Category.Record["categoryId"];
          },

          get name() {
            return uninterceptedValue.name;
          },
          set name(newValue) {
            uninterceptedValue.name = newValue;
            void callback(uninterceptedValue, index);
          },
          changeName(event: ChangeEvent) {
            const parsedValue = Public.Tables.Category.Name.parse(
              event.target.value,
            );
            ret.name = parsedValue as Public.Tables.Category.Record["name"];
          },

          get lastUpdate() {
            return uninterceptedValue.lastUpdate;
          },
          set lastUpdate(newValue) {
            uninterceptedValue.lastUpdate = newValue;
            void callback(uninterceptedValue, index);
          },
          changeLastUpdate(event: ChangeEvent) {
            const parsedValue = Public.Tables.Category.LastUpdate.parse(
              event.target.value,
            );
            ret.lastUpdate =
              parsedValue as Public.Tables.Category.Record["lastUpdate"];
          },
        };
        return ret;
      }
    }
    export namespace Country {
      export function interceptor(
        uninterceptedValue: Public.Tables.Country.Record,
        callback: InterceptorCallback<Public.Tables.Country.Record>,
        index?: number,
      ): Intercepted<Public.Tables.Country.Record> {
        const ret = {
          get countryId() {
            return uninterceptedValue.countryId;
          },
          set countryId(newValue) {
            uninterceptedValue.countryId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeCountryId(event: ChangeEvent) {
            const parsedValue = Public.Tables.Country.CountryId.parse(
              event.target.value,
            );
            ret.countryId =
              parsedValue as Public.Tables.Country.Record["countryId"];
          },

          get country() {
            return uninterceptedValue.country;
          },
          set country(newValue) {
            uninterceptedValue.country = newValue;
            void callback(uninterceptedValue, index);
          },
          changeCountry(event: ChangeEvent) {
            const parsedValue = Public.Tables.Country.Country.parse(
              event.target.value,
            );
            ret.country =
              parsedValue as Public.Tables.Country.Record["country"];
          },

          get lastUpdate() {
            return uninterceptedValue.lastUpdate;
          },
          set lastUpdate(newValue) {
            uninterceptedValue.lastUpdate = newValue;
            void callback(uninterceptedValue, index);
          },
          changeLastUpdate(event: ChangeEvent) {
            const parsedValue = Public.Tables.Country.LastUpdate.parse(
              event.target.value,
            );
            ret.lastUpdate =
              parsedValue as Public.Tables.Country.Record["lastUpdate"];
          },
        };
        return ret;
      }
    }
    export namespace Language {
      export function interceptor(
        uninterceptedValue: Public.Tables.Language.Record,
        callback: InterceptorCallback<Public.Tables.Language.Record>,
        index?: number,
      ): Intercepted<Public.Tables.Language.Record> {
        const ret = {
          get languageId() {
            return uninterceptedValue.languageId;
          },
          set languageId(newValue) {
            uninterceptedValue.languageId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeLanguageId(event: ChangeEvent) {
            const parsedValue = Public.Tables.Language.LanguageId.parse(
              event.target.value,
            );
            ret.languageId =
              parsedValue as Public.Tables.Language.Record["languageId"];
          },

          get name() {
            return uninterceptedValue.name;
          },
          set name(newValue) {
            uninterceptedValue.name = newValue;
            void callback(uninterceptedValue, index);
          },
          changeName(event: ChangeEvent) {
            const parsedValue = Public.Tables.Language.Name.parse(
              event.target.value,
            );
            ret.name = parsedValue as Public.Tables.Language.Record["name"];
          },

          get lastUpdate() {
            return uninterceptedValue.lastUpdate;
          },
          set lastUpdate(newValue) {
            uninterceptedValue.lastUpdate = newValue;
            void callback(uninterceptedValue, index);
          },
          changeLastUpdate(event: ChangeEvent) {
            const parsedValue = Public.Tables.Language.LastUpdate.parse(
              event.target.value,
            );
            ret.lastUpdate =
              parsedValue as Public.Tables.Language.Record["lastUpdate"];
          },
        };
        return ret;
      }
    }
    export namespace Rental {
      export function interceptor(
        uninterceptedValue: Public.Tables.Rental.Record,
        callback: InterceptorCallback<Public.Tables.Rental.Record>,
        index?: number,
      ): Intercepted<Public.Tables.Rental.Record> {
        const ret = {
          get rentalId() {
            return uninterceptedValue.rentalId;
          },
          set rentalId(newValue) {
            uninterceptedValue.rentalId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeRentalId(event: ChangeEvent) {
            const parsedValue = Public.Tables.Rental.RentalId.parse(
              event.target.value,
            );
            ret.rentalId =
              parsedValue as Public.Tables.Rental.Record["rentalId"];
          },

          get rentalDate() {
            return uninterceptedValue.rentalDate;
          },
          set rentalDate(newValue) {
            uninterceptedValue.rentalDate = newValue;
            void callback(uninterceptedValue, index);
          },
          changeRentalDate(event: ChangeEvent) {
            const parsedValue = Public.Tables.Rental.RentalDate.parse(
              event.target.value,
            );
            ret.rentalDate =
              parsedValue as Public.Tables.Rental.Record["rentalDate"];
          },

          get inventoryId() {
            return uninterceptedValue.inventoryId;
          },
          set inventoryId(newValue) {
            uninterceptedValue.inventoryId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeInventoryId(event: ChangeEvent) {
            const parsedValue = Public.Tables.Rental.InventoryId.parse(
              event.target.value,
            );
            ret.inventoryId =
              parsedValue as Public.Tables.Rental.Record["inventoryId"];
          },

          get customerId() {
            return uninterceptedValue.customerId;
          },
          set customerId(newValue) {
            uninterceptedValue.customerId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeCustomerId(event: ChangeEvent) {
            const parsedValue = Public.Tables.Rental.CustomerId.parse(
              event.target.value,
            );
            ret.customerId =
              parsedValue as Public.Tables.Rental.Record["customerId"];
          },

          get returnDate() {
            return uninterceptedValue.returnDate;
          },
          set returnDate(newValue) {
            uninterceptedValue.returnDate = newValue;
            void callback(uninterceptedValue, index);
          },
          changeReturnDate(event: ChangeEvent) {
            const parsedValue = Public.Tables.Rental.ReturnDate.parse(
              event.target.value,
            );
            ret.returnDate =
              parsedValue as Public.Tables.Rental.Record["returnDate"];
          },

          get staffId() {
            return uninterceptedValue.staffId;
          },
          set staffId(newValue) {
            uninterceptedValue.staffId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeStaffId(event: ChangeEvent) {
            const parsedValue = Public.Tables.Rental.StaffId.parse(
              event.target.value,
            );
            ret.staffId = parsedValue as Public.Tables.Rental.Record["staffId"];
          },

          get lastUpdate() {
            return uninterceptedValue.lastUpdate;
          },
          set lastUpdate(newValue) {
            uninterceptedValue.lastUpdate = newValue;
            void callback(uninterceptedValue, index);
          },
          changeLastUpdate(event: ChangeEvent) {
            const parsedValue = Public.Tables.Rental.LastUpdate.parse(
              event.target.value,
            );
            ret.lastUpdate =
              parsedValue as Public.Tables.Rental.Record["lastUpdate"];
          },
        };
        return ret;
      }
    }
    export namespace Staff {
      export function interceptor(
        uninterceptedValue: Public.Tables.Staff.Record,
        callback: InterceptorCallback<Public.Tables.Staff.Record>,
        index?: number,
      ): Intercepted<Public.Tables.Staff.Record> {
        const ret = {
          get staffId() {
            return uninterceptedValue.staffId;
          },
          set staffId(newValue) {
            uninterceptedValue.staffId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeStaffId(event: ChangeEvent) {
            const parsedValue = Public.Tables.Staff.StaffId.parse(
              event.target.value,
            );
            ret.staffId = parsedValue as Public.Tables.Staff.Record["staffId"];
          },

          get firstName() {
            return uninterceptedValue.firstName;
          },
          set firstName(newValue) {
            uninterceptedValue.firstName = newValue;
            void callback(uninterceptedValue, index);
          },
          changeFirstName(event: ChangeEvent) {
            const parsedValue = Public.Tables.Staff.FirstName.parse(
              event.target.value,
            );
            ret.firstName =
              parsedValue as Public.Tables.Staff.Record["firstName"];
          },

          get lastName() {
            return uninterceptedValue.lastName;
          },
          set lastName(newValue) {
            uninterceptedValue.lastName = newValue;
            void callback(uninterceptedValue, index);
          },
          changeLastName(event: ChangeEvent) {
            const parsedValue = Public.Tables.Staff.LastName.parse(
              event.target.value,
            );
            ret.lastName =
              parsedValue as Public.Tables.Staff.Record["lastName"];
          },

          get addressId() {
            return uninterceptedValue.addressId;
          },
          set addressId(newValue) {
            uninterceptedValue.addressId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeAddressId(event: ChangeEvent) {
            const parsedValue = Public.Tables.Staff.AddressId.parse(
              event.target.value,
            );
            ret.addressId =
              parsedValue as Public.Tables.Staff.Record["addressId"];
          },

          get email() {
            return uninterceptedValue.email;
          },
          set email(newValue) {
            uninterceptedValue.email = newValue;
            void callback(uninterceptedValue, index);
          },
          changeEmail(event: ChangeEvent) {
            const parsedValue = Public.Tables.Staff.Email.parse(
              event.target.value,
            );
            ret.email = parsedValue as Public.Tables.Staff.Record["email"];
          },

          get storeId() {
            return uninterceptedValue.storeId;
          },
          set storeId(newValue) {
            uninterceptedValue.storeId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeStoreId(event: ChangeEvent) {
            const parsedValue = Public.Tables.Staff.StoreId.parse(
              event.target.value,
            );
            ret.storeId = parsedValue as Public.Tables.Staff.Record["storeId"];
          },

          get active() {
            return uninterceptedValue.active;
          },
          set active(newValue) {
            uninterceptedValue.active = newValue;
            void callback(uninterceptedValue, index);
          },
          changeActive(event: ChangeEvent) {
            const parsedValue = Public.Tables.Staff.Active.parse(
              event.target.value,
            );
            ret.active = parsedValue as Public.Tables.Staff.Record["active"];
          },

          get username() {
            return uninterceptedValue.username;
          },
          set username(newValue) {
            uninterceptedValue.username = newValue;
            void callback(uninterceptedValue, index);
          },
          changeUsername(event: ChangeEvent) {
            const parsedValue = Public.Tables.Staff.Username.parse(
              event.target.value,
            );
            ret.username =
              parsedValue as Public.Tables.Staff.Record["username"];
          },

          get password() {
            return uninterceptedValue.password;
          },
          set password(newValue) {
            uninterceptedValue.password = newValue;
            void callback(uninterceptedValue, index);
          },
          changePassword(event: ChangeEvent) {
            const parsedValue = Public.Tables.Staff.Password.parse(
              event.target.value,
            );
            ret.password =
              parsedValue as Public.Tables.Staff.Record["password"];
          },

          get lastUpdate() {
            return uninterceptedValue.lastUpdate;
          },
          set lastUpdate(newValue) {
            uninterceptedValue.lastUpdate = newValue;
            void callback(uninterceptedValue, index);
          },
          changeLastUpdate(event: ChangeEvent) {
            const parsedValue = Public.Tables.Staff.LastUpdate.parse(
              event.target.value,
            );
            ret.lastUpdate =
              parsedValue as Public.Tables.Staff.Record["lastUpdate"];
          },

          get picture() {
            return uninterceptedValue.picture;
          },
          set picture(newValue) {
            uninterceptedValue.picture = newValue;
            void callback(uninterceptedValue, index);
          },
          changePicture(event: ChangeEvent) {
            const parsedValue = Public.Tables.Staff.Picture.parse(
              event.target.value,
            );
            ret.picture = parsedValue as Public.Tables.Staff.Record["picture"];
          },
        };
        return ret;
      }
    }
    export namespace Store {
      export function interceptor(
        uninterceptedValue: Public.Tables.Store.Record,
        callback: InterceptorCallback<Public.Tables.Store.Record>,
        index?: number,
      ): Intercepted<Public.Tables.Store.Record> {
        const ret = {
          get storeId() {
            return uninterceptedValue.storeId;
          },
          set storeId(newValue) {
            uninterceptedValue.storeId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeStoreId(event: ChangeEvent) {
            const parsedValue = Public.Tables.Store.StoreId.parse(
              event.target.value,
            );
            ret.storeId = parsedValue as Public.Tables.Store.Record["storeId"];
          },

          get managerStaffId() {
            return uninterceptedValue.managerStaffId;
          },
          set managerStaffId(newValue) {
            uninterceptedValue.managerStaffId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeManagerStaffId(event: ChangeEvent) {
            const parsedValue = Public.Tables.Store.ManagerStaffId.parse(
              event.target.value,
            );
            ret.managerStaffId =
              parsedValue as Public.Tables.Store.Record["managerStaffId"];
          },

          get addressId() {
            return uninterceptedValue.addressId;
          },
          set addressId(newValue) {
            uninterceptedValue.addressId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeAddressId(event: ChangeEvent) {
            const parsedValue = Public.Tables.Store.AddressId.parse(
              event.target.value,
            );
            ret.addressId =
              parsedValue as Public.Tables.Store.Record["addressId"];
          },

          get lastUpdate() {
            return uninterceptedValue.lastUpdate;
          },
          set lastUpdate(newValue) {
            uninterceptedValue.lastUpdate = newValue;
            void callback(uninterceptedValue, index);
          },
          changeLastUpdate(event: ChangeEvent) {
            const parsedValue = Public.Tables.Store.LastUpdate.parse(
              event.target.value,
            );
            ret.lastUpdate =
              parsedValue as Public.Tables.Store.Record["lastUpdate"];
          },
        };
        return ret;
      }
    }
    export namespace Payment {
      export function interceptor(
        uninterceptedValue: Public.Tables.Payment.Record,
        callback: InterceptorCallback<Public.Tables.Payment.Record>,
        index?: number,
      ): Intercepted<Public.Tables.Payment.Record> {
        const ret = {
          get paymentId() {
            return uninterceptedValue.paymentId;
          },
          set paymentId(newValue) {
            uninterceptedValue.paymentId = newValue;
            void callback(uninterceptedValue, index);
          },
          changePaymentId(event: ChangeEvent) {
            const parsedValue = Public.Tables.Payment.PaymentId.parse(
              event.target.value,
            );
            ret.paymentId =
              parsedValue as Public.Tables.Payment.Record["paymentId"];
          },

          get customerId() {
            return uninterceptedValue.customerId;
          },
          set customerId(newValue) {
            uninterceptedValue.customerId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeCustomerId(event: ChangeEvent) {
            const parsedValue = Public.Tables.Payment.CustomerId.parse(
              event.target.value,
            );
            ret.customerId =
              parsedValue as Public.Tables.Payment.Record["customerId"];
          },

          get staffId() {
            return uninterceptedValue.staffId;
          },
          set staffId(newValue) {
            uninterceptedValue.staffId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeStaffId(event: ChangeEvent) {
            const parsedValue = Public.Tables.Payment.StaffId.parse(
              event.target.value,
            );
            ret.staffId =
              parsedValue as Public.Tables.Payment.Record["staffId"];
          },

          get rentalId() {
            return uninterceptedValue.rentalId;
          },
          set rentalId(newValue) {
            uninterceptedValue.rentalId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeRentalId(event: ChangeEvent) {
            const parsedValue = Public.Tables.Payment.RentalId.parse(
              event.target.value,
            );
            ret.rentalId =
              parsedValue as Public.Tables.Payment.Record["rentalId"];
          },

          get amount() {
            return uninterceptedValue.amount;
          },
          set amount(newValue) {
            uninterceptedValue.amount = newValue;
            void callback(uninterceptedValue, index);
          },
          changeAmount(event: ChangeEvent) {
            const parsedValue = Public.Tables.Payment.Amount.parse(
              event.target.value,
            );
            ret.amount = parsedValue as Public.Tables.Payment.Record["amount"];
          },

          get paymentDate() {
            return uninterceptedValue.paymentDate;
          },
          set paymentDate(newValue) {
            uninterceptedValue.paymentDate = newValue;
            void callback(uninterceptedValue, index);
          },
          changePaymentDate(event: ChangeEvent) {
            const parsedValue = Public.Tables.Payment.PaymentDate.parse(
              event.target.value,
            );
            ret.paymentDate =
              parsedValue as Public.Tables.Payment.Record["paymentDate"];
          },
        };
        return ret;
      }
    }
    export namespace Film {
      export function interceptor(
        uninterceptedValue: Public.Tables.Film.Record,
        callback: InterceptorCallback<Public.Tables.Film.Record>,
        index?: number,
      ): Intercepted<Public.Tables.Film.Record> {
        const ret = {
          get filmId() {
            return uninterceptedValue.filmId;
          },
          set filmId(newValue) {
            uninterceptedValue.filmId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeFilmId(event: ChangeEvent) {
            const parsedValue = Public.Tables.Film.FilmId.parse(
              event.target.value,
            );
            ret.filmId = parsedValue as Public.Tables.Film.Record["filmId"];
          },

          get title() {
            return uninterceptedValue.title;
          },
          set title(newValue) {
            uninterceptedValue.title = newValue;
            void callback(uninterceptedValue, index);
          },
          changeTitle(event: ChangeEvent) {
            const parsedValue = Public.Tables.Film.Title.parse(
              event.target.value,
            );
            ret.title = parsedValue as Public.Tables.Film.Record["title"];
          },

          get description() {
            return uninterceptedValue.description;
          },
          set description(newValue) {
            uninterceptedValue.description = newValue;
            void callback(uninterceptedValue, index);
          },
          changeDescription(event: ChangeEvent) {
            const parsedValue = Public.Tables.Film.Description.parse(
              event.target.value,
            );
            ret.description =
              parsedValue as Public.Tables.Film.Record["description"];
          },

          get releaseYear() {
            return uninterceptedValue.releaseYear;
          },
          set releaseYear(newValue) {
            uninterceptedValue.releaseYear = newValue;
            void callback(uninterceptedValue, index);
          },
          changeReleaseYear(event: ChangeEvent) {
            const parsedValue = Public.Tables.Film.ReleaseYear.parse(
              event.target.value,
            );
            ret.releaseYear =
              parsedValue as Public.Tables.Film.Record["releaseYear"];
          },

          get languageId() {
            return uninterceptedValue.languageId;
          },
          set languageId(newValue) {
            uninterceptedValue.languageId = newValue;
            void callback(uninterceptedValue, index);
          },
          changeLanguageId(event: ChangeEvent) {
            const parsedValue = Public.Tables.Film.LanguageId.parse(
              event.target.value,
            );
            ret.languageId =
              parsedValue as Public.Tables.Film.Record["languageId"];
          },

          get rentalDuration() {
            return uninterceptedValue.rentalDuration;
          },
          set rentalDuration(newValue) {
            uninterceptedValue.rentalDuration = newValue;
            void callback(uninterceptedValue, index);
          },
          changeRentalDuration(event: ChangeEvent) {
            const parsedValue = Public.Tables.Film.RentalDuration.parse(
              event.target.value,
            );
            ret.rentalDuration =
              parsedValue as Public.Tables.Film.Record["rentalDuration"];
          },

          get rentalRate() {
            return uninterceptedValue.rentalRate;
          },
          set rentalRate(newValue) {
            uninterceptedValue.rentalRate = newValue;
            void callback(uninterceptedValue, index);
          },
          changeRentalRate(event: ChangeEvent) {
            const parsedValue = Public.Tables.Film.RentalRate.parse(
              event.target.value,
            );
            ret.rentalRate =
              parsedValue as Public.Tables.Film.Record["rentalRate"];
          },

          get length() {
            return uninterceptedValue.length;
          },
          set length(newValue) {
            uninterceptedValue.length = newValue;
            void callback(uninterceptedValue, index);
          },
          changeLength(event: ChangeEvent) {
            const parsedValue = Public.Tables.Film.Length.parse(
              event.target.value,
            );
            ret.length = parsedValue as Public.Tables.Film.Record["length"];
          },

          get replacementCost() {
            return uninterceptedValue.replacementCost;
          },
          set replacementCost(newValue) {
            uninterceptedValue.replacementCost = newValue;
            void callback(uninterceptedValue, index);
          },
          changeReplacementCost(event: ChangeEvent) {
            const parsedValue = Public.Tables.Film.ReplacementCost.parse(
              event.target.value,
            );
            ret.replacementCost =
              parsedValue as Public.Tables.Film.Record["replacementCost"];
          },

          get rating() {
            return uninterceptedValue.rating;
          },
          set rating(newValue) {
            uninterceptedValue.rating = newValue;
            void callback(uninterceptedValue, index);
          },
          changeRating(event: ChangeEvent) {
            const parsedValue = Public.Tables.Film.Rating.parse(
              event.target.value,
            );
            ret.rating = parsedValue as Public.Tables.Film.Record["rating"];
          },

          get lastUpdate() {
            return uninterceptedValue.lastUpdate;
          },
          set lastUpdate(newValue) {
            uninterceptedValue.lastUpdate = newValue;
            void callback(uninterceptedValue, index);
          },
          changeLastUpdate(event: ChangeEvent) {
            const parsedValue = Public.Tables.Film.LastUpdate.parse(
              event.target.value,
            );
            ret.lastUpdate =
              parsedValue as Public.Tables.Film.Record["lastUpdate"];
          },

          get specialFeatures() {
            return uninterceptedValue.specialFeatures;
          },
          set specialFeatures(newValue) {
            uninterceptedValue.specialFeatures = newValue;
            void callback(uninterceptedValue, index);
          },
          changeSpecialFeatures(event: ChangeEvent) {
            const parsedValue = Public.Tables.Film.SpecialFeatures.parse(
              event.target.value,
            );
            ret.specialFeatures =
              parsedValue as Public.Tables.Film.Record["specialFeatures"];
          },

          get fulltext() {
            return uninterceptedValue.fulltext;
          },
          set fulltext(newValue) {
            uninterceptedValue.fulltext = newValue;
            void callback(uninterceptedValue, index);
          },
          changeFulltext(event: ChangeEvent) {
            const parsedValue = Public.Tables.Film.Fulltext.parse(
              event.target.value,
            );
            ret.fulltext = parsedValue as Public.Tables.Film.Record["fulltext"];
          },
        };
        return ret;
      }
    }
  }
}

export namespace Public {
  export namespace Tables {
    export namespace FilmActor {
      export namespace ActorId {}
      export namespace FilmId {}
      export namespace LastUpdate {}

      export function useByActorIdFilmId(parameters: ByActorIdFilmId) {
        const request = {
          operation: "Public.Tables.FilmActor.ByActorIdFilmId",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByActorIdFilmId,
          never,
          Public.Tables.FilmActor.Record
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.FilmActor.Record>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.FilmActor.Record,
          Public.Tables.FilmActor.Record
        >({ operation: "Public.Tables.FilmActor.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.FilmActor.Record>>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              Public.Tables.FilmActor.interceptor(
                done.response.results,
                updateCallback,
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }

      export function useByFilmId(parameters: ByFilmId) {
        const request = {
          operation: "Public.Tables.FilmActor.ByFilmId",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByFilmId,
          never,
          Public.Tables.FilmActor.Record[]
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.FilmActor.Record[]>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.FilmActor.Record,
          Public.Tables.FilmActor.Record[]
        >({ operation: "Public.Tables.FilmActor.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.FilmActor.Record>[]>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              (results ?? []).map((r, i) =>
                Public.Tables.FilmActor.interceptor(r, updateCallback, i),
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }
    }
    export namespace Address {
      export namespace AddressId {}
      export namespace Address {}
      export namespace Address2 {}
      export namespace District {}
      export namespace CityId {}
      export namespace PostalCode {}
      export namespace Phone {}
      export namespace LastUpdate {}

      export function useByAddressId(parameters: ByAddressId) {
        const request = {
          operation: "Public.Tables.Address.ByAddressId",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByAddressId,
          never,
          Public.Tables.Address.Record
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.Address.Record>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.Address.Record,
          Public.Tables.Address.Record
        >({ operation: "Public.Tables.Address.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.Address.Record>>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              Public.Tables.Address.interceptor(
                done.response.results,
                updateCallback,
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }

      export function useByCityId(parameters: ByCityId) {
        const request = {
          operation: "Public.Tables.Address.ByCityId",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByCityId,
          never,
          Public.Tables.Address.Record[]
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.Address.Record[]>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.Address.Record,
          Public.Tables.Address.Record[]
        >({ operation: "Public.Tables.Address.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.Address.Record>[]>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              (results ?? []).map((r, i) =>
                Public.Tables.Address.interceptor(r, updateCallback, i),
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }
    }
    export namespace City {
      export namespace CityId {}
      export namespace City {}
      export namespace CountryId {}
      export namespace LastUpdate {}

      export function useByCityId(parameters: ByCityId) {
        const request = {
          operation: "Public.Tables.City.ByCityId",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByCityId,
          never,
          Public.Tables.City.Record
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.City.Record>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.City.Record,
          Public.Tables.City.Record
        >({ operation: "Public.Tables.City.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.City.Record>>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              Public.Tables.City.interceptor(
                done.response.results,
                updateCallback,
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }

      export function useByCountryId(parameters: ByCountryId) {
        const request = {
          operation: "Public.Tables.City.ByCountryId",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByCountryId,
          never,
          Public.Tables.City.Record[]
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.City.Record[]>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.City.Record,
          Public.Tables.City.Record[]
        >({ operation: "Public.Tables.City.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.City.Record>[]>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              (results ?? []).map((r, i) =>
                Public.Tables.City.interceptor(r, updateCallback, i),
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }
    }
    export namespace Customer {
      export namespace CustomerId {}
      export namespace StoreId {}
      export namespace FirstName {}
      export namespace LastName {}
      export namespace Email {}
      export namespace AddressId {}
      export namespace Activebool {}
      export namespace CreateDate {}
      export namespace LastUpdate {}
      export namespace Active {}

      export function useByAddressId(parameters: ByAddressId) {
        const request = {
          operation: "Public.Tables.Customer.ByAddressId",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByAddressId,
          never,
          Public.Tables.Customer.Record[]
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.Customer.Record[]>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.Customer.Record,
          Public.Tables.Customer.Record[]
        >({ operation: "Public.Tables.Customer.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.Customer.Record>[]>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              (results ?? []).map((r, i) =>
                Public.Tables.Customer.interceptor(r, updateCallback, i),
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }

      export function useByCustomerId(parameters: ByCustomerId) {
        const request = {
          operation: "Public.Tables.Customer.ByCustomerId",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByCustomerId,
          never,
          Public.Tables.Customer.Record
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.Customer.Record>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.Customer.Record,
          Public.Tables.Customer.Record
        >({ operation: "Public.Tables.Customer.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.Customer.Record>>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              Public.Tables.Customer.interceptor(
                done.response.results,
                updateCallback,
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }

      export function useByLastName(parameters: ByLastName) {
        const request = {
          operation: "Public.Tables.Customer.ByLastName",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByLastName,
          never,
          Public.Tables.Customer.Record[]
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.Customer.Record[]>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.Customer.Record,
          Public.Tables.Customer.Record[]
        >({ operation: "Public.Tables.Customer.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.Customer.Record>[]>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              (results ?? []).map((r, i) =>
                Public.Tables.Customer.interceptor(r, updateCallback, i),
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }

      export function useByStoreId(parameters: ByStoreId) {
        const request = {
          operation: "Public.Tables.Customer.ByStoreId",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByStoreId,
          never,
          Public.Tables.Customer.Record[]
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.Customer.Record[]>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.Customer.Record,
          Public.Tables.Customer.Record[]
        >({ operation: "Public.Tables.Customer.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.Customer.Record>[]>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              (results ?? []).map((r, i) =>
                Public.Tables.Customer.interceptor(r, updateCallback, i),
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }
    }
    export namespace Actor {
      export namespace ActorId {}
      export namespace FirstName {}
      export namespace LastName {}
      export namespace LastUpdate {}

      export function useByActorId(parameters: ByActorId) {
        const request = {
          operation: "Public.Tables.Actor.ByActorId",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByActorId,
          never,
          Public.Tables.Actor.Record
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.Actor.Record>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.Actor.Record,
          Public.Tables.Actor.Record
        >({ operation: "Public.Tables.Actor.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.Actor.Record>>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              Public.Tables.Actor.interceptor(
                done.response.results,
                updateCallback,
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }

      export function useByLastName(parameters: ByLastName) {
        const request = {
          operation: "Public.Tables.Actor.ByLastName",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByLastName,
          never,
          Public.Tables.Actor.Record[]
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.Actor.Record[]>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.Actor.Record,
          Public.Tables.Actor.Record[]
        >({ operation: "Public.Tables.Actor.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.Actor.Record>[]>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              (results ?? []).map((r, i) =>
                Public.Tables.Actor.interceptor(r, updateCallback, i),
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }
    }
    export namespace FilmCategory {
      export namespace FilmId {}
      export namespace CategoryId {}
      export namespace LastUpdate {}

      export function useByFilmIdCategoryId(parameters: ByFilmIdCategoryId) {
        const request = {
          operation: "Public.Tables.FilmCategory.ByFilmIdCategoryId",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByFilmIdCategoryId,
          never,
          Public.Tables.FilmCategory.Record
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.FilmCategory.Record>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.FilmCategory.Record,
          Public.Tables.FilmCategory.Record
        >({
          operation: "Public.Tables.FilmCategory.Create",
          results,
          setResults,
        });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.FilmCategory.Record>>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              Public.Tables.FilmCategory.interceptor(
                done.response.results,
                updateCallback,
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }
    }
    export namespace Inventory {
      export namespace InventoryId {}
      export namespace FilmId {}
      export namespace StoreId {}
      export namespace LastUpdate {}

      export function useByInventoryId(parameters: ByInventoryId) {
        const request = {
          operation: "Public.Tables.Inventory.ByInventoryId",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByInventoryId,
          never,
          Public.Tables.Inventory.Record
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.Inventory.Record>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.Inventory.Record,
          Public.Tables.Inventory.Record
        >({ operation: "Public.Tables.Inventory.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.Inventory.Record>>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              Public.Tables.Inventory.interceptor(
                done.response.results,
                updateCallback,
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }

      export function useByStoreIdFilmId(parameters: ByStoreIdFilmId) {
        const request = {
          operation: "Public.Tables.Inventory.ByStoreIdFilmId",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByStoreIdFilmId,
          never,
          Public.Tables.Inventory.Record[]
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.Inventory.Record[]>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.Inventory.Record,
          Public.Tables.Inventory.Record[]
        >({ operation: "Public.Tables.Inventory.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.Inventory.Record>[]>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              (results ?? []).map((r, i) =>
                Public.Tables.Inventory.interceptor(r, updateCallback, i),
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }
    }
    export namespace Category {
      export namespace CategoryId {}
      export namespace Name {}
      export namespace LastUpdate {}

      export function useByCategoryId(parameters: ByCategoryId) {
        const request = {
          operation: "Public.Tables.Category.ByCategoryId",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByCategoryId,
          never,
          Public.Tables.Category.Record
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.Category.Record>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.Category.Record,
          Public.Tables.Category.Record
        >({ operation: "Public.Tables.Category.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.Category.Record>>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              Public.Tables.Category.interceptor(
                done.response.results,
                updateCallback,
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }
    }
    export namespace Country {
      export namespace CountryId {}
      export namespace Country {}
      export namespace LastUpdate {}

      export function useByCountryId(parameters: ByCountryId) {
        const request = {
          operation: "Public.Tables.Country.ByCountryId",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByCountryId,
          never,
          Public.Tables.Country.Record
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.Country.Record>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.Country.Record,
          Public.Tables.Country.Record
        >({ operation: "Public.Tables.Country.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.Country.Record>>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              Public.Tables.Country.interceptor(
                done.response.results,
                updateCallback,
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }
    }
    export namespace Language {
      export namespace LanguageId {}
      export namespace Name {}
      export namespace LastUpdate {}

      export function useByLanguageId(parameters: ByLanguageId) {
        const request = {
          operation: "Public.Tables.Language.ByLanguageId",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByLanguageId,
          never,
          Public.Tables.Language.Record
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.Language.Record>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.Language.Record,
          Public.Tables.Language.Record
        >({ operation: "Public.Tables.Language.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.Language.Record>>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              Public.Tables.Language.interceptor(
                done.response.results,
                updateCallback,
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }
    }
    export namespace Rental {
      export namespace RentalId {}
      export namespace RentalDate {}
      export namespace InventoryId {}
      export namespace CustomerId {}
      export namespace ReturnDate {}
      export namespace StaffId {}
      export namespace LastUpdate {}

      export function useByInventoryId(parameters: ByInventoryId) {
        const request = {
          operation: "Public.Tables.Rental.ByInventoryId",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByInventoryId,
          never,
          Public.Tables.Rental.Record[]
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.Rental.Record[]>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.Rental.Record,
          Public.Tables.Rental.Record[]
        >({ operation: "Public.Tables.Rental.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.Rental.Record>[]>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              (results ?? []).map((r, i) =>
                Public.Tables.Rental.interceptor(r, updateCallback, i),
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }

      export function useByRentalDateInventoryIdCustomerId(
        parameters: ByRentalDateInventoryIdCustomerId,
      ) {
        const request = {
          operation: "Public.Tables.Rental.ByRentalDateInventoryIdCustomerId",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByRentalDateInventoryIdCustomerId,
          never,
          Public.Tables.Rental.Record
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.Rental.Record>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.Rental.Record,
          Public.Tables.Rental.Record
        >({ operation: "Public.Tables.Rental.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.Rental.Record>>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              Public.Tables.Rental.interceptor(
                done.response.results,
                updateCallback,
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }

      export function useByRentalId(parameters: ByRentalId) {
        const request = {
          operation: "Public.Tables.Rental.ByRentalId",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByRentalId,
          never,
          Public.Tables.Rental.Record
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.Rental.Record>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.Rental.Record,
          Public.Tables.Rental.Record
        >({ operation: "Public.Tables.Rental.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.Rental.Record>>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              Public.Tables.Rental.interceptor(
                done.response.results,
                updateCallback,
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }
    }
    export namespace Staff {
      export namespace StaffId {}
      export namespace FirstName {}
      export namespace LastName {}
      export namespace AddressId {}
      export namespace Email {}
      export namespace StoreId {}
      export namespace Active {}
      export namespace Username {}
      export namespace Password {}
      export namespace LastUpdate {}
      export namespace Picture {}

      export function useByStaffId(parameters: ByStaffId) {
        const request = {
          operation: "Public.Tables.Staff.ByStaffId",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByStaffId,
          never,
          Public.Tables.Staff.Record
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.Staff.Record>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.Staff.Record,
          Public.Tables.Staff.Record
        >({ operation: "Public.Tables.Staff.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.Staff.Record>>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              Public.Tables.Staff.interceptor(
                done.response.results,
                updateCallback,
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }
    }
    export namespace Store {
      export namespace StoreId {}
      export namespace ManagerStaffId {}
      export namespace AddressId {}
      export namespace LastUpdate {}

      export function useByManagerStaffId(parameters: ByManagerStaffId) {
        const request = {
          operation: "Public.Tables.Store.ByManagerStaffId",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByManagerStaffId,
          never,
          Public.Tables.Store.Record
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.Store.Record>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.Store.Record,
          Public.Tables.Store.Record
        >({ operation: "Public.Tables.Store.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.Store.Record>>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              Public.Tables.Store.interceptor(
                done.response.results,
                updateCallback,
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }

      export function useByStoreId(parameters: ByStoreId) {
        const request = {
          operation: "Public.Tables.Store.ByStoreId",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByStoreId,
          never,
          Public.Tables.Store.Record
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.Store.Record>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.Store.Record,
          Public.Tables.Store.Record
        >({ operation: "Public.Tables.Store.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.Store.Record>>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              Public.Tables.Store.interceptor(
                done.response.results,
                updateCallback,
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }
    }
    export namespace Payment {
      export namespace PaymentId {}
      export namespace CustomerId {}
      export namespace StaffId {}
      export namespace RentalId {}
      export namespace Amount {}
      export namespace PaymentDate {}

      export function useByCustomerId(parameters: ByCustomerId) {
        const request = {
          operation: "Public.Tables.Payment.ByCustomerId",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByCustomerId,
          never,
          Public.Tables.Payment.Record[]
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.Payment.Record[]>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.Payment.Record,
          Public.Tables.Payment.Record[]
        >({ operation: "Public.Tables.Payment.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.Payment.Record>[]>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              (results ?? []).map((r, i) =>
                Public.Tables.Payment.interceptor(r, updateCallback, i),
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }

      export function useByPaymentId(parameters: ByPaymentId) {
        const request = {
          operation: "Public.Tables.Payment.ByPaymentId",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByPaymentId,
          never,
          Public.Tables.Payment.Record
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.Payment.Record>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.Payment.Record,
          Public.Tables.Payment.Record
        >({ operation: "Public.Tables.Payment.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.Payment.Record>>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              Public.Tables.Payment.interceptor(
                done.response.results,
                updateCallback,
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }

      export function useByRentalId(parameters: ByRentalId) {
        const request = {
          operation: "Public.Tables.Payment.ByRentalId",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByRentalId,
          never,
          Public.Tables.Payment.Record[]
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.Payment.Record[]>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.Payment.Record,
          Public.Tables.Payment.Record[]
        >({ operation: "Public.Tables.Payment.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.Payment.Record>[]>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              (results ?? []).map((r, i) =>
                Public.Tables.Payment.interceptor(r, updateCallback, i),
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }

      export function useByStaffId(parameters: ByStaffId) {
        const request = {
          operation: "Public.Tables.Payment.ByStaffId",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByStaffId,
          never,
          Public.Tables.Payment.Record[]
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.Payment.Record[]>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.Payment.Record,
          Public.Tables.Payment.Record[]
        >({ operation: "Public.Tables.Payment.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.Payment.Record>[]>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              (results ?? []).map((r, i) =>
                Public.Tables.Payment.interceptor(r, updateCallback, i),
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }
    }
    export namespace Film {
      export namespace FilmId {}
      export namespace Title {}
      export namespace Description {}
      export namespace ReleaseYear {}
      export namespace LanguageId {}
      export namespace RentalDuration {}
      export namespace RentalRate {}
      export namespace Length {}
      export namespace ReplacementCost {}
      export namespace Rating {}
      export namespace LastUpdate {}
      export namespace SpecialFeatures {}
      export namespace Fulltext {}

      export function useByFilmId(parameters: ByFilmId) {
        const request = {
          operation: "Public.Tables.Film.ByFilmId",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByFilmId,
          never,
          Public.Tables.Film.Record
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.Film.Record>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.Film.Record,
          Public.Tables.Film.Record
        >({ operation: "Public.Tables.Film.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.Film.Record>>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              Public.Tables.Film.interceptor(
                done.response.results,
                updateCallback,
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }

      export function useByFulltext(parameters: ByFulltext) {
        const request = {
          operation: "Public.Tables.Film.ByFulltext",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByFulltext,
          never,
          Public.Tables.Film.Record[]
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.Film.Record[]>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.Film.Record,
          Public.Tables.Film.Record[]
        >({ operation: "Public.Tables.Film.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.Film.Record>[]>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              (results ?? []).map((r, i) =>
                Public.Tables.Film.interceptor(r, updateCallback, i),
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }

      export function useByLanguageId(parameters: ByLanguageId) {
        const request = {
          operation: "Public.Tables.Film.ByLanguageId",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByLanguageId,
          never,
          Public.Tables.Film.Record[]
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.Film.Record[]>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.Film.Record,
          Public.Tables.Film.Record[]
        >({ operation: "Public.Tables.Film.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.Film.Record>[]>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              (results ?? []).map((r, i) =>
                Public.Tables.Film.interceptor(r, updateCallback, i),
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }

      export function useByTitle(parameters: ByTitle) {
        const request = {
          operation: "Public.Tables.Film.ByTitle",
          parameters,
        };
        const done = useEmbraceSQLRequest<
          ByTitle,
          never,
          Public.Tables.Film.Record[]
        >(request);
        const [results, setResults] =
          React.useState<Public.Tables.Film.Record[]>();
        React.useEffect(() => {
          setResults(done?.response?.results);
        }, [done?.response]);
        const updateCallback = useEmbraceSQLUpdateCallback<
          Public.Tables.Film.Record,
          Public.Tables.Film.Record[]
        >({ operation: "Public.Tables.Film.Create", results, setResults });
        const [interceptedResults, setInterceptedResults] =
          React.useState<Intercepted<Public.Tables.Film.Record>[]>();
        React.useEffect(() => {
          if (done?.response?.results) {
            setInterceptedResults(
              (results ?? []).map((r, i) =>
                Public.Tables.Film.interceptor(r, updateCallback, i),
              ),
            );
          } else {
            setResults(undefined);
          }
        }, [results]);

        return {
          loading: done?.loading,
          error: done?.error,
          results: interceptedResults,
        };
      }
    }
  }
}
// End React generated section

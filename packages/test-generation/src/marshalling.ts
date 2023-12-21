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
import {
  UUID,
  JsDate,
  JSONValue,
  JSONObject,
  Empty,
  Nullable,
  undefinedIsNull,
} from "@embracesql/shared";

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
      agginitval?: Nullable<PgCatalog.Types.Text>;
      aggminitval?: Nullable<PgCatalog.Types.Text>;
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
      attacl?: Nullable<PgCatalog.Types.AclitemArray>;
      attoptions?: Nullable<PgCatalog.Types.TextArray>;
      attfdwoptions?: Nullable<PgCatalog.Types.TextArray>;
      attmissingval?: Nullable<PgCatalog.Types.Anyarray>;
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
      rolpassword?: Nullable<PgCatalog.Types.Text>;
      rolvaliduntil?: Nullable<PgCatalog.Types.Timestamptz>;
    };
    export type PgAvailableExtensionVersions = {
      name?: Nullable<PgCatalog.Types.Name>;
      version?: Nullable<PgCatalog.Types.Text>;
      installed?: Nullable<PgCatalog.Types.Bool>;
      superuser?: Nullable<PgCatalog.Types.Bool>;
      trusted?: Nullable<PgCatalog.Types.Bool>;
      relocatable?: Nullable<PgCatalog.Types.Bool>;
      schema?: Nullable<PgCatalog.Types.Name>;
      requires?: Nullable<PgCatalog.Types.NameArray>;
      comment?: Nullable<PgCatalog.Types.Text>;
    };
    export type PgAvailableExtensions = {
      name?: Nullable<PgCatalog.Types.Name>;
      defaultVersion?: Nullable<PgCatalog.Types.Text>;
      installedVersion?: Nullable<PgCatalog.Types.Text>;
      comment?: Nullable<PgCatalog.Types.Text>;
    };
    export type PgBackendMemoryContexts = {
      name?: Nullable<PgCatalog.Types.Text>;
      ident?: Nullable<PgCatalog.Types.Text>;
      parent?: Nullable<PgCatalog.Types.Text>;
      level?: Nullable<PgCatalog.Types.Int4>;
      totalBytes?: Nullable<PgCatalog.Types.Int8>;
      totalNblocks?: Nullable<PgCatalog.Types.Int8>;
      freeBytes?: Nullable<PgCatalog.Types.Int8>;
      freeChunks?: Nullable<PgCatalog.Types.Int8>;
      usedBytes?: Nullable<PgCatalog.Types.Int8>;
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
      relacl?: Nullable<PgCatalog.Types.AclitemArray>;
      reloptions?: Nullable<PgCatalog.Types.TextArray>;
      relpartbound?: Nullable<PgCatalog.Types.PgNodeTree>;
    };
    export type PgCollation = {
      oid: PgCatalog.Types.Oid;
      collname: PgCatalog.Types.Name;
      collnamespace: PgCatalog.Types.Oid;
      collowner: PgCatalog.Types.Oid;
      collprovider: PgCatalog.Types.Char;
      collisdeterministic: PgCatalog.Types.Bool;
      collencoding: PgCatalog.Types.Int4;
      collcollate?: Nullable<PgCatalog.Types.Text>;
      collctype?: Nullable<PgCatalog.Types.Text>;
      colliculocale?: Nullable<PgCatalog.Types.Text>;
      collicurules?: Nullable<PgCatalog.Types.Text>;
      collversion?: Nullable<PgCatalog.Types.Text>;
    };
    export type PgConfig = {
      name?: Nullable<PgCatalog.Types.Text>;
      setting?: Nullable<PgCatalog.Types.Text>;
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
      conkey?: Nullable<PgCatalog.Types.Int2Array>;
      confkey?: Nullable<PgCatalog.Types.Int2Array>;
      conpfeqop?: Nullable<PgCatalog.Types.OidArray>;
      conppeqop?: Nullable<PgCatalog.Types.OidArray>;
      conffeqop?: Nullable<PgCatalog.Types.OidArray>;
      confdelsetcols?: Nullable<PgCatalog.Types.Int2Array>;
      conexclop?: Nullable<PgCatalog.Types.OidArray>;
      conbin?: Nullable<PgCatalog.Types.PgNodeTree>;
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
      name?: Nullable<PgCatalog.Types.Text>;
      statement?: Nullable<PgCatalog.Types.Text>;
      isHoldable?: Nullable<PgCatalog.Types.Bool>;
      isBinary?: Nullable<PgCatalog.Types.Bool>;
      isScrollable?: Nullable<PgCatalog.Types.Bool>;
      creationTime?: Nullable<PgCatalog.Types.Timestamptz>;
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
      daticulocale?: Nullable<PgCatalog.Types.Text>;
      daticurules?: Nullable<PgCatalog.Types.Text>;
      datcollversion?: Nullable<PgCatalog.Types.Text>;
      datacl?: Nullable<PgCatalog.Types.AclitemArray>;
    };
    export type PgDbRoleSetting = {
      setdatabase: PgCatalog.Types.Oid;
      setrole: PgCatalog.Types.Oid;
      setconfig?: Nullable<PgCatalog.Types.TextArray>;
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
      evttags?: Nullable<PgCatalog.Types.TextArray>;
    };
    export type PgExtension = {
      oid: PgCatalog.Types.Oid;
      extname: PgCatalog.Types.Name;
      extowner: PgCatalog.Types.Oid;
      extnamespace: PgCatalog.Types.Oid;
      extrelocatable: PgCatalog.Types.Bool;
      extversion: PgCatalog.Types.Text;
      extconfig?: Nullable<PgCatalog.Types.OidArray>;
      extcondition?: Nullable<PgCatalog.Types.TextArray>;
    };
    export type PgFileSettings = {
      sourcefile?: Nullable<PgCatalog.Types.Text>;
      sourceline?: Nullable<PgCatalog.Types.Int4>;
      seqno?: Nullable<PgCatalog.Types.Int4>;
      name?: Nullable<PgCatalog.Types.Text>;
      setting?: Nullable<PgCatalog.Types.Text>;
      applied?: Nullable<PgCatalog.Types.Bool>;
      error?: Nullable<PgCatalog.Types.Text>;
    };
    export type PgForeignDataWrapper = {
      oid: PgCatalog.Types.Oid;
      fdwname: PgCatalog.Types.Name;
      fdwowner: PgCatalog.Types.Oid;
      fdwhandler: PgCatalog.Types.Oid;
      fdwvalidator: PgCatalog.Types.Oid;
      fdwacl?: Nullable<PgCatalog.Types.AclitemArray>;
      fdwoptions?: Nullable<PgCatalog.Types.TextArray>;
    };
    export type PgForeignServer = {
      oid: PgCatalog.Types.Oid;
      srvname: PgCatalog.Types.Name;
      srvowner: PgCatalog.Types.Oid;
      srvfdw: PgCatalog.Types.Oid;
      srvtype?: Nullable<PgCatalog.Types.Text>;
      srvversion?: Nullable<PgCatalog.Types.Text>;
      srvacl?: Nullable<PgCatalog.Types.AclitemArray>;
      srvoptions?: Nullable<PgCatalog.Types.TextArray>;
    };
    export type PgForeignTable = {
      ftrelid: PgCatalog.Types.Oid;
      ftserver: PgCatalog.Types.Oid;
      ftoptions?: Nullable<PgCatalog.Types.TextArray>;
    };
    export type PgGroup = {
      groname?: Nullable<PgCatalog.Types.Name>;
      grosysid?: Nullable<PgCatalog.Types.Oid>;
      grolist?: Nullable<PgCatalog.Types.OidArray>;
    };
    export type PgHbaFileRules = {
      ruleNumber?: Nullable<PgCatalog.Types.Int4>;
      fileName?: Nullable<PgCatalog.Types.Text>;
      lineNumber?: Nullable<PgCatalog.Types.Int4>;
      type?: Nullable<PgCatalog.Types.Text>;
      database?: Nullable<PgCatalog.Types.TextArray>;
      userName?: Nullable<PgCatalog.Types.TextArray>;
      address?: Nullable<PgCatalog.Types.Text>;
      netmask?: Nullable<PgCatalog.Types.Text>;
      authMethod?: Nullable<PgCatalog.Types.Text>;
      options?: Nullable<PgCatalog.Types.TextArray>;
      error?: Nullable<PgCatalog.Types.Text>;
    };
    export type PgIdentFileMappings = {
      mapNumber?: Nullable<PgCatalog.Types.Int4>;
      fileName?: Nullable<PgCatalog.Types.Text>;
      lineNumber?: Nullable<PgCatalog.Types.Int4>;
      mapName?: Nullable<PgCatalog.Types.Text>;
      sysName?: Nullable<PgCatalog.Types.Text>;
      pgUsername?: Nullable<PgCatalog.Types.Text>;
      error?: Nullable<PgCatalog.Types.Text>;
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
      indexprs?: Nullable<PgCatalog.Types.PgNodeTree>;
      indpred?: Nullable<PgCatalog.Types.PgNodeTree>;
    };
    export type PgIndexes = {
      schemaname?: Nullable<PgCatalog.Types.Name>;
      tablename?: Nullable<PgCatalog.Types.Name>;
      indexname?: Nullable<PgCatalog.Types.Name>;
      tablespace?: Nullable<PgCatalog.Types.Name>;
      indexdef?: Nullable<PgCatalog.Types.Text>;
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
      lanacl?: Nullable<PgCatalog.Types.AclitemArray>;
    };
    export type PgLargeobject = {
      loid: PgCatalog.Types.Oid;
      pageno: PgCatalog.Types.Int4;
      data: PgCatalog.Types.Bytea;
    };
    export type PgLargeobjectMetadata = {
      oid: PgCatalog.Types.Oid;
      lomowner: PgCatalog.Types.Oid;
      lomacl?: Nullable<PgCatalog.Types.AclitemArray>;
    };
    export type PgLocks = {
      locktype?: Nullable<PgCatalog.Types.Text>;
      database?: Nullable<PgCatalog.Types.Oid>;
      relation?: Nullable<PgCatalog.Types.Oid>;
      page?: Nullable<PgCatalog.Types.Int4>;
      tuple?: Nullable<PgCatalog.Types.Int2>;
      virtualxid?: Nullable<PgCatalog.Types.Text>;
      transactionid?: Nullable<PgCatalog.Types.Xid>;
      classid?: Nullable<PgCatalog.Types.Oid>;
      objid?: Nullable<PgCatalog.Types.Oid>;
      objsubid?: Nullable<PgCatalog.Types.Int2>;
      virtualtransaction?: Nullable<PgCatalog.Types.Text>;
      pid?: Nullable<PgCatalog.Types.Int4>;
      mode?: Nullable<PgCatalog.Types.Text>;
      granted?: Nullable<PgCatalog.Types.Bool>;
      fastpath?: Nullable<PgCatalog.Types.Bool>;
      waitstart?: Nullable<PgCatalog.Types.Timestamptz>;
    };
    export type PgLsn = bigint;
    export type PgMatviews = {
      schemaname?: Nullable<PgCatalog.Types.Name>;
      matviewname?: Nullable<PgCatalog.Types.Name>;
      matviewowner?: Nullable<PgCatalog.Types.Name>;
      tablespace?: Nullable<PgCatalog.Types.Name>;
      hasindexes?: Nullable<PgCatalog.Types.Bool>;
      ispopulated?: Nullable<PgCatalog.Types.Bool>;
      definition?: Nullable<PgCatalog.Types.Text>;
    };
    export type PgMcvList = string;
    export type PgNamespace = {
      oid: PgCatalog.Types.Oid;
      nspname: PgCatalog.Types.Name;
      nspowner: PgCatalog.Types.Oid;
      nspacl?: Nullable<PgCatalog.Types.AclitemArray>;
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
      paracl?: Nullable<PgCatalog.Types.AclitemArray>;
    };
    export type PgPartitionedTable = {
      partrelid: PgCatalog.Types.Oid;
      partstrat: PgCatalog.Types.Char;
      partnatts: PgCatalog.Types.Int2;
      partdefid: PgCatalog.Types.Oid;
      partattrs: PgCatalog.Types.Int2vector;
      partclass: PgCatalog.Types.Oidvector;
      partcollation: PgCatalog.Types.Oidvector;
      partexprs?: Nullable<PgCatalog.Types.PgNodeTree>;
    };
    export type PgPolicies = {
      schemaname?: Nullable<PgCatalog.Types.Name>;
      tablename?: Nullable<PgCatalog.Types.Name>;
      policyname?: Nullable<PgCatalog.Types.Name>;
      permissive?: Nullable<PgCatalog.Types.Text>;
      roles?: Nullable<PgCatalog.Types.NameArray>;
      cmd?: Nullable<PgCatalog.Types.Text>;
      qual?: Nullable<PgCatalog.Types.Text>;
      withCheck?: Nullable<PgCatalog.Types.Text>;
    };
    export type PgPolicy = {
      oid: PgCatalog.Types.Oid;
      polname: PgCatalog.Types.Name;
      polrelid: PgCatalog.Types.Oid;
      polcmd: PgCatalog.Types.Char;
      polpermissive: PgCatalog.Types.Bool;
      polroles: PgCatalog.Types.OidArray;
      polqual?: Nullable<PgCatalog.Types.PgNodeTree>;
      polwithcheck?: Nullable<PgCatalog.Types.PgNodeTree>;
    };
    export type PgPreparedStatements = {
      name?: Nullable<PgCatalog.Types.Text>;
      statement?: Nullable<PgCatalog.Types.Text>;
      prepareTime?: Nullable<PgCatalog.Types.Timestamptz>;
      parameterTypes?: Nullable<PgCatalog.Types.RegtypeArray>;
      resultTypes?: Nullable<PgCatalog.Types.RegtypeArray>;
      fromSql?: Nullable<PgCatalog.Types.Bool>;
      genericPlans?: Nullable<PgCatalog.Types.Int8>;
      customPlans?: Nullable<PgCatalog.Types.Int8>;
    };
    export type PgPreparedXacts = {
      transaction?: Nullable<PgCatalog.Types.Xid>;
      gid?: Nullable<PgCatalog.Types.Text>;
      prepared?: Nullable<PgCatalog.Types.Timestamptz>;
      owner?: Nullable<PgCatalog.Types.Name>;
      database?: Nullable<PgCatalog.Types.Name>;
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
      proallargtypes?: Nullable<PgCatalog.Types.OidArray>;
      proargmodes?: Nullable<PgCatalog.Types.CharArray>;
      proargnames?: Nullable<PgCatalog.Types.TextArray>;
      proargdefaults?: Nullable<PgCatalog.Types.PgNodeTree>;
      protrftypes?: Nullable<PgCatalog.Types.OidArray>;
      prosrc: PgCatalog.Types.Text;
      probin?: Nullable<PgCatalog.Types.Text>;
      prosqlbody?: Nullable<PgCatalog.Types.PgNodeTree>;
      proconfig?: Nullable<PgCatalog.Types.TextArray>;
      proacl?: Nullable<PgCatalog.Types.AclitemArray>;
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
      prqual?: Nullable<PgCatalog.Types.PgNodeTree>;
      prattrs?: Nullable<PgCatalog.Types.Int2vector>;
    };
    export type PgPublicationTables = {
      pubname?: Nullable<PgCatalog.Types.Name>;
      schemaname?: Nullable<PgCatalog.Types.Name>;
      tablename?: Nullable<PgCatalog.Types.Name>;
      attnames?: Nullable<PgCatalog.Types.NameArray>;
      rowfilter?: Nullable<PgCatalog.Types.Text>;
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
      localId?: Nullable<PgCatalog.Types.Oid>;
      externalId?: Nullable<PgCatalog.Types.Text>;
      remoteLsn?: Nullable<PgCatalog.Types.PgLsn>;
      localLsn?: Nullable<PgCatalog.Types.PgLsn>;
    };
    export type PgReplicationSlots = {
      slotName?: Nullable<PgCatalog.Types.Name>;
      plugin?: Nullable<PgCatalog.Types.Name>;
      slotType?: Nullable<PgCatalog.Types.Text>;
      datoid?: Nullable<PgCatalog.Types.Oid>;
      database?: Nullable<PgCatalog.Types.Name>;
      temporary?: Nullable<PgCatalog.Types.Bool>;
      active?: Nullable<PgCatalog.Types.Bool>;
      activePid?: Nullable<PgCatalog.Types.Int4>;
      xmin?: Nullable<PgCatalog.Types.Xid>;
      catalogXmin?: Nullable<PgCatalog.Types.Xid>;
      restartLsn?: Nullable<PgCatalog.Types.PgLsn>;
      confirmedFlushLsn?: Nullable<PgCatalog.Types.PgLsn>;
      walStatus?: Nullable<PgCatalog.Types.Text>;
      safeWalSize?: Nullable<PgCatalog.Types.Int8>;
      twoPhase?: Nullable<PgCatalog.Types.Bool>;
      conflicting?: Nullable<PgCatalog.Types.Bool>;
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
      rolname?: Nullable<PgCatalog.Types.Name>;
      rolsuper?: Nullable<PgCatalog.Types.Bool>;
      rolinherit?: Nullable<PgCatalog.Types.Bool>;
      rolcreaterole?: Nullable<PgCatalog.Types.Bool>;
      rolcreatedb?: Nullable<PgCatalog.Types.Bool>;
      rolcanlogin?: Nullable<PgCatalog.Types.Bool>;
      rolreplication?: Nullable<PgCatalog.Types.Bool>;
      rolconnlimit?: Nullable<PgCatalog.Types.Int4>;
      rolpassword?: Nullable<PgCatalog.Types.Text>;
      rolvaliduntil?: Nullable<PgCatalog.Types.Timestamptz>;
      rolbypassrls?: Nullable<PgCatalog.Types.Bool>;
      rolconfig?: Nullable<PgCatalog.Types.TextArray>;
      oid?: Nullable<PgCatalog.Types.Oid>;
    };
    export type PgRules = {
      schemaname?: Nullable<PgCatalog.Types.Name>;
      tablename?: Nullable<PgCatalog.Types.Name>;
      rulename?: Nullable<PgCatalog.Types.Name>;
      definition?: Nullable<PgCatalog.Types.Text>;
    };
    export type PgSeclabel = {
      objoid: PgCatalog.Types.Oid;
      classoid: PgCatalog.Types.Oid;
      objsubid: PgCatalog.Types.Int4;
      provider: PgCatalog.Types.Text;
      label: PgCatalog.Types.Text;
    };
    export type PgSeclabels = {
      objoid?: Nullable<PgCatalog.Types.Oid>;
      classoid?: Nullable<PgCatalog.Types.Oid>;
      objsubid?: Nullable<PgCatalog.Types.Int4>;
      objtype?: Nullable<PgCatalog.Types.Text>;
      objnamespace?: Nullable<PgCatalog.Types.Oid>;
      objname?: Nullable<PgCatalog.Types.Text>;
      provider?: Nullable<PgCatalog.Types.Text>;
      label?: Nullable<PgCatalog.Types.Text>;
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
      schemaname?: Nullable<PgCatalog.Types.Name>;
      sequencename?: Nullable<PgCatalog.Types.Name>;
      sequenceowner?: Nullable<PgCatalog.Types.Name>;
      dataType?: Nullable<PgCatalog.Types.Regtype>;
      startValue?: Nullable<PgCatalog.Types.Int8>;
      minValue?: Nullable<PgCatalog.Types.Int8>;
      maxValue?: Nullable<PgCatalog.Types.Int8>;
      incrementBy?: Nullable<PgCatalog.Types.Int8>;
      cycle?: Nullable<PgCatalog.Types.Bool>;
      cacheSize?: Nullable<PgCatalog.Types.Int8>;
      lastValue?: Nullable<PgCatalog.Types.Int8>;
    };
    export type PgSettings = {
      name?: Nullable<PgCatalog.Types.Text>;
      setting?: Nullable<PgCatalog.Types.Text>;
      unit?: Nullable<PgCatalog.Types.Text>;
      category?: Nullable<PgCatalog.Types.Text>;
      shortDesc?: Nullable<PgCatalog.Types.Text>;
      extraDesc?: Nullable<PgCatalog.Types.Text>;
      context?: Nullable<PgCatalog.Types.Text>;
      vartype?: Nullable<PgCatalog.Types.Text>;
      source?: Nullable<PgCatalog.Types.Text>;
      minVal?: Nullable<PgCatalog.Types.Text>;
      maxVal?: Nullable<PgCatalog.Types.Text>;
      enumvals?: Nullable<PgCatalog.Types.TextArray>;
      bootVal?: Nullable<PgCatalog.Types.Text>;
      resetVal?: Nullable<PgCatalog.Types.Text>;
      sourcefile?: Nullable<PgCatalog.Types.Text>;
      sourceline?: Nullable<PgCatalog.Types.Int4>;
      pendingRestart?: Nullable<PgCatalog.Types.Bool>;
    };
    export type PgShadow = {
      usename?: Nullable<PgCatalog.Types.Name>;
      usesysid?: Nullable<PgCatalog.Types.Oid>;
      usecreatedb?: Nullable<PgCatalog.Types.Bool>;
      usesuper?: Nullable<PgCatalog.Types.Bool>;
      userepl?: Nullable<PgCatalog.Types.Bool>;
      usebypassrls?: Nullable<PgCatalog.Types.Bool>;
      passwd?: Nullable<PgCatalog.Types.Text>;
      valuntil?: Nullable<PgCatalog.Types.Timestamptz>;
      useconfig?: Nullable<PgCatalog.Types.TextArray>;
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
      name?: Nullable<PgCatalog.Types.Text>;
      off?: Nullable<PgCatalog.Types.Int8>;
      size?: Nullable<PgCatalog.Types.Int8>;
      allocatedSize?: Nullable<PgCatalog.Types.Int8>;
    };
    export type PgShseclabel = {
      objoid: PgCatalog.Types.Oid;
      classoid: PgCatalog.Types.Oid;
      provider: PgCatalog.Types.Text;
      label: PgCatalog.Types.Text;
    };
    export type PgSnapshot = string;
    export type PgStatActivity = {
      datid?: Nullable<PgCatalog.Types.Oid>;
      datname?: Nullable<PgCatalog.Types.Name>;
      pid?: Nullable<PgCatalog.Types.Int4>;
      leaderPid?: Nullable<PgCatalog.Types.Int4>;
      usesysid?: Nullable<PgCatalog.Types.Oid>;
      usename?: Nullable<PgCatalog.Types.Name>;
      applicationName?: Nullable<PgCatalog.Types.Text>;
      clientAddr?: Nullable<PgCatalog.Types.Inet>;
      clientHostname?: Nullable<PgCatalog.Types.Text>;
      clientPort?: Nullable<PgCatalog.Types.Int4>;
      backendStart?: Nullable<PgCatalog.Types.Timestamptz>;
      xactStart?: Nullable<PgCatalog.Types.Timestamptz>;
      queryStart?: Nullable<PgCatalog.Types.Timestamptz>;
      stateChange?: Nullable<PgCatalog.Types.Timestamptz>;
      waitEventType?: Nullable<PgCatalog.Types.Text>;
      waitEvent?: Nullable<PgCatalog.Types.Text>;
      state?: Nullable<PgCatalog.Types.Text>;
      backendXid?: Nullable<PgCatalog.Types.Xid>;
      backendXmin?: Nullable<PgCatalog.Types.Xid>;
      queryId?: Nullable<PgCatalog.Types.Int8>;
      query?: Nullable<PgCatalog.Types.Text>;
      backendType?: Nullable<PgCatalog.Types.Text>;
    };
    export type PgStatAllIndexes = {
      relid?: Nullable<PgCatalog.Types.Oid>;
      indexrelid?: Nullable<PgCatalog.Types.Oid>;
      schemaname?: Nullable<PgCatalog.Types.Name>;
      relname?: Nullable<PgCatalog.Types.Name>;
      indexrelname?: Nullable<PgCatalog.Types.Name>;
      idxScan?: Nullable<PgCatalog.Types.Int8>;
      lastIdxScan?: Nullable<PgCatalog.Types.Timestamptz>;
      idxTupRead?: Nullable<PgCatalog.Types.Int8>;
      idxTupFetch?: Nullable<PgCatalog.Types.Int8>;
    };
    export type PgStatAllTables = {
      relid?: Nullable<PgCatalog.Types.Oid>;
      schemaname?: Nullable<PgCatalog.Types.Name>;
      relname?: Nullable<PgCatalog.Types.Name>;
      seqScan?: Nullable<PgCatalog.Types.Int8>;
      lastSeqScan?: Nullable<PgCatalog.Types.Timestamptz>;
      seqTupRead?: Nullable<PgCatalog.Types.Int8>;
      idxScan?: Nullable<PgCatalog.Types.Int8>;
      lastIdxScan?: Nullable<PgCatalog.Types.Timestamptz>;
      idxTupFetch?: Nullable<PgCatalog.Types.Int8>;
      nTupIns?: Nullable<PgCatalog.Types.Int8>;
      nTupUpd?: Nullable<PgCatalog.Types.Int8>;
      nTupDel?: Nullable<PgCatalog.Types.Int8>;
      nTupHotUpd?: Nullable<PgCatalog.Types.Int8>;
      nTupNewpageUpd?: Nullable<PgCatalog.Types.Int8>;
      nLiveTup?: Nullable<PgCatalog.Types.Int8>;
      nDeadTup?: Nullable<PgCatalog.Types.Int8>;
      nModSinceAnalyze?: Nullable<PgCatalog.Types.Int8>;
      nInsSinceVacuum?: Nullable<PgCatalog.Types.Int8>;
      lastVacuum?: Nullable<PgCatalog.Types.Timestamptz>;
      lastAutovacuum?: Nullable<PgCatalog.Types.Timestamptz>;
      lastAnalyze?: Nullable<PgCatalog.Types.Timestamptz>;
      lastAutoanalyze?: Nullable<PgCatalog.Types.Timestamptz>;
      vacuumCount?: Nullable<PgCatalog.Types.Int8>;
      autovacuumCount?: Nullable<PgCatalog.Types.Int8>;
      analyzeCount?: Nullable<PgCatalog.Types.Int8>;
      autoanalyzeCount?: Nullable<PgCatalog.Types.Int8>;
    };
    export type PgStatArchiver = {
      archivedCount?: Nullable<PgCatalog.Types.Int8>;
      lastArchivedWal?: Nullable<PgCatalog.Types.Text>;
      lastArchivedTime?: Nullable<PgCatalog.Types.Timestamptz>;
      failedCount?: Nullable<PgCatalog.Types.Int8>;
      lastFailedWal?: Nullable<PgCatalog.Types.Text>;
      lastFailedTime?: Nullable<PgCatalog.Types.Timestamptz>;
      statsReset?: Nullable<PgCatalog.Types.Timestamptz>;
    };
    export type PgStatBgwriter = {
      checkpointsTimed?: Nullable<PgCatalog.Types.Int8>;
      checkpointsReq?: Nullable<PgCatalog.Types.Int8>;
      checkpointWriteTime?: Nullable<PgCatalog.Types.Float8>;
      checkpointSyncTime?: Nullable<PgCatalog.Types.Float8>;
      buffersCheckpoint?: Nullable<PgCatalog.Types.Int8>;
      buffersClean?: Nullable<PgCatalog.Types.Int8>;
      maxwrittenClean?: Nullable<PgCatalog.Types.Int8>;
      buffersBackend?: Nullable<PgCatalog.Types.Int8>;
      buffersBackendFsync?: Nullable<PgCatalog.Types.Int8>;
      buffersAlloc?: Nullable<PgCatalog.Types.Int8>;
      statsReset?: Nullable<PgCatalog.Types.Timestamptz>;
    };
    export type PgStatDatabase = {
      datid?: Nullable<PgCatalog.Types.Oid>;
      datname?: Nullable<PgCatalog.Types.Name>;
      numbackends?: Nullable<PgCatalog.Types.Int4>;
      xactCommit?: Nullable<PgCatalog.Types.Int8>;
      xactRollback?: Nullable<PgCatalog.Types.Int8>;
      blksRead?: Nullable<PgCatalog.Types.Int8>;
      blksHit?: Nullable<PgCatalog.Types.Int8>;
      tupReturned?: Nullable<PgCatalog.Types.Int8>;
      tupFetched?: Nullable<PgCatalog.Types.Int8>;
      tupInserted?: Nullable<PgCatalog.Types.Int8>;
      tupUpdated?: Nullable<PgCatalog.Types.Int8>;
      tupDeleted?: Nullable<PgCatalog.Types.Int8>;
      conflicts?: Nullable<PgCatalog.Types.Int8>;
      tempFiles?: Nullable<PgCatalog.Types.Int8>;
      tempBytes?: Nullable<PgCatalog.Types.Int8>;
      deadlocks?: Nullable<PgCatalog.Types.Int8>;
      checksumFailures?: Nullable<PgCatalog.Types.Int8>;
      checksumLastFailure?: Nullable<PgCatalog.Types.Timestamptz>;
      blkReadTime?: Nullable<PgCatalog.Types.Float8>;
      blkWriteTime?: Nullable<PgCatalog.Types.Float8>;
      sessionTime?: Nullable<PgCatalog.Types.Float8>;
      activeTime?: Nullable<PgCatalog.Types.Float8>;
      idleInTransactionTime?: Nullable<PgCatalog.Types.Float8>;
      sessions?: Nullable<PgCatalog.Types.Int8>;
      sessionsAbandoned?: Nullable<PgCatalog.Types.Int8>;
      sessionsFatal?: Nullable<PgCatalog.Types.Int8>;
      sessionsKilled?: Nullable<PgCatalog.Types.Int8>;
      statsReset?: Nullable<PgCatalog.Types.Timestamptz>;
    };
    export type PgStatDatabaseConflicts = {
      datid?: Nullable<PgCatalog.Types.Oid>;
      datname?: Nullable<PgCatalog.Types.Name>;
      conflTablespace?: Nullable<PgCatalog.Types.Int8>;
      conflLock?: Nullable<PgCatalog.Types.Int8>;
      conflSnapshot?: Nullable<PgCatalog.Types.Int8>;
      conflBufferpin?: Nullable<PgCatalog.Types.Int8>;
      conflDeadlock?: Nullable<PgCatalog.Types.Int8>;
      conflActiveLogicalslot?: Nullable<PgCatalog.Types.Int8>;
    };
    export type PgStatGssapi = {
      pid?: Nullable<PgCatalog.Types.Int4>;
      gssAuthenticated?: Nullable<PgCatalog.Types.Bool>;
      principal?: Nullable<PgCatalog.Types.Text>;
      encrypted?: Nullable<PgCatalog.Types.Bool>;
      credentialsDelegated?: Nullable<PgCatalog.Types.Bool>;
    };
    export type PgStatIo = {
      backendType?: Nullable<PgCatalog.Types.Text>;
      object?: Nullable<PgCatalog.Types.Text>;
      context?: Nullable<PgCatalog.Types.Text>;
      reads?: Nullable<PgCatalog.Types.Int8>;
      readTime?: Nullable<PgCatalog.Types.Float8>;
      writes?: Nullable<PgCatalog.Types.Int8>;
      writeTime?: Nullable<PgCatalog.Types.Float8>;
      writebacks?: Nullable<PgCatalog.Types.Int8>;
      writebackTime?: Nullable<PgCatalog.Types.Float8>;
      extends?: Nullable<PgCatalog.Types.Int8>;
      extendTime?: Nullable<PgCatalog.Types.Float8>;
      opBytes?: Nullable<PgCatalog.Types.Int8>;
      hits?: Nullable<PgCatalog.Types.Int8>;
      evictions?: Nullable<PgCatalog.Types.Int8>;
      reuses?: Nullable<PgCatalog.Types.Int8>;
      fsyncs?: Nullable<PgCatalog.Types.Int8>;
      fsyncTime?: Nullable<PgCatalog.Types.Float8>;
      statsReset?: Nullable<PgCatalog.Types.Timestamptz>;
    };
    export type PgStatProgressAnalyze = {
      pid?: Nullable<PgCatalog.Types.Int4>;
      datid?: Nullable<PgCatalog.Types.Oid>;
      datname?: Nullable<PgCatalog.Types.Name>;
      relid?: Nullable<PgCatalog.Types.Oid>;
      phase?: Nullable<PgCatalog.Types.Text>;
      sampleBlksTotal?: Nullable<PgCatalog.Types.Int8>;
      sampleBlksScanned?: Nullable<PgCatalog.Types.Int8>;
      extStatsTotal?: Nullable<PgCatalog.Types.Int8>;
      extStatsComputed?: Nullable<PgCatalog.Types.Int8>;
      childTablesTotal?: Nullable<PgCatalog.Types.Int8>;
      childTablesDone?: Nullable<PgCatalog.Types.Int8>;
      currentChildTableRelid?: Nullable<PgCatalog.Types.Oid>;
    };
    export type PgStatProgressBasebackup = {
      pid?: Nullable<PgCatalog.Types.Int4>;
      phase?: Nullable<PgCatalog.Types.Text>;
      backupTotal?: Nullable<PgCatalog.Types.Int8>;
      backupStreamed?: Nullable<PgCatalog.Types.Int8>;
      tablespacesTotal?: Nullable<PgCatalog.Types.Int8>;
      tablespacesStreamed?: Nullable<PgCatalog.Types.Int8>;
    };
    export type PgStatProgressCluster = {
      pid?: Nullable<PgCatalog.Types.Int4>;
      datid?: Nullable<PgCatalog.Types.Oid>;
      datname?: Nullable<PgCatalog.Types.Name>;
      relid?: Nullable<PgCatalog.Types.Oid>;
      command?: Nullable<PgCatalog.Types.Text>;
      phase?: Nullable<PgCatalog.Types.Text>;
      clusterIndexRelid?: Nullable<PgCatalog.Types.Oid>;
      heapTuplesScanned?: Nullable<PgCatalog.Types.Int8>;
      heapTuplesWritten?: Nullable<PgCatalog.Types.Int8>;
      heapBlksTotal?: Nullable<PgCatalog.Types.Int8>;
      heapBlksScanned?: Nullable<PgCatalog.Types.Int8>;
      indexRebuildCount?: Nullable<PgCatalog.Types.Int8>;
    };
    export type PgStatProgressCopy = {
      pid?: Nullable<PgCatalog.Types.Int4>;
      datid?: Nullable<PgCatalog.Types.Oid>;
      datname?: Nullable<PgCatalog.Types.Name>;
      relid?: Nullable<PgCatalog.Types.Oid>;
      command?: Nullable<PgCatalog.Types.Text>;
      type?: Nullable<PgCatalog.Types.Text>;
      bytesProcessed?: Nullable<PgCatalog.Types.Int8>;
      bytesTotal?: Nullable<PgCatalog.Types.Int8>;
      tuplesProcessed?: Nullable<PgCatalog.Types.Int8>;
      tuplesExcluded?: Nullable<PgCatalog.Types.Int8>;
    };
    export type PgStatProgressCreateIndex = {
      pid?: Nullable<PgCatalog.Types.Int4>;
      datid?: Nullable<PgCatalog.Types.Oid>;
      datname?: Nullable<PgCatalog.Types.Name>;
      relid?: Nullable<PgCatalog.Types.Oid>;
      indexRelid?: Nullable<PgCatalog.Types.Oid>;
      command?: Nullable<PgCatalog.Types.Text>;
      phase?: Nullable<PgCatalog.Types.Text>;
      lockersTotal?: Nullable<PgCatalog.Types.Int8>;
      lockersDone?: Nullable<PgCatalog.Types.Int8>;
      currentLockerPid?: Nullable<PgCatalog.Types.Int8>;
      blocksTotal?: Nullable<PgCatalog.Types.Int8>;
      blocksDone?: Nullable<PgCatalog.Types.Int8>;
      tuplesTotal?: Nullable<PgCatalog.Types.Int8>;
      tuplesDone?: Nullable<PgCatalog.Types.Int8>;
      partitionsTotal?: Nullable<PgCatalog.Types.Int8>;
      partitionsDone?: Nullable<PgCatalog.Types.Int8>;
    };
    export type PgStatProgressVacuum = {
      pid?: Nullable<PgCatalog.Types.Int4>;
      datid?: Nullable<PgCatalog.Types.Oid>;
      datname?: Nullable<PgCatalog.Types.Name>;
      relid?: Nullable<PgCatalog.Types.Oid>;
      phase?: Nullable<PgCatalog.Types.Text>;
      heapBlksTotal?: Nullable<PgCatalog.Types.Int8>;
      heapBlksScanned?: Nullable<PgCatalog.Types.Int8>;
      heapBlksVacuumed?: Nullable<PgCatalog.Types.Int8>;
      indexVacuumCount?: Nullable<PgCatalog.Types.Int8>;
      maxDeadTuples?: Nullable<PgCatalog.Types.Int8>;
      numDeadTuples?: Nullable<PgCatalog.Types.Int8>;
    };
    export type PgStatRecoveryPrefetch = {
      statsReset?: Nullable<PgCatalog.Types.Timestamptz>;
      prefetch?: Nullable<PgCatalog.Types.Int8>;
      hit?: Nullable<PgCatalog.Types.Int8>;
      skipInit?: Nullable<PgCatalog.Types.Int8>;
      skipNew?: Nullable<PgCatalog.Types.Int8>;
      skipFpw?: Nullable<PgCatalog.Types.Int8>;
      skipRep?: Nullable<PgCatalog.Types.Int8>;
      walDistance?: Nullable<PgCatalog.Types.Int4>;
      blockDistance?: Nullable<PgCatalog.Types.Int4>;
      ioDepth?: Nullable<PgCatalog.Types.Int4>;
    };
    export type PgStatReplication = {
      pid?: Nullable<PgCatalog.Types.Int4>;
      usesysid?: Nullable<PgCatalog.Types.Oid>;
      usename?: Nullable<PgCatalog.Types.Name>;
      applicationName?: Nullable<PgCatalog.Types.Text>;
      clientAddr?: Nullable<PgCatalog.Types.Inet>;
      clientHostname?: Nullable<PgCatalog.Types.Text>;
      clientPort?: Nullable<PgCatalog.Types.Int4>;
      backendStart?: Nullable<PgCatalog.Types.Timestamptz>;
      backendXmin?: Nullable<PgCatalog.Types.Xid>;
      state?: Nullable<PgCatalog.Types.Text>;
      sentLsn?: Nullable<PgCatalog.Types.PgLsn>;
      writeLsn?: Nullable<PgCatalog.Types.PgLsn>;
      flushLsn?: Nullable<PgCatalog.Types.PgLsn>;
      replayLsn?: Nullable<PgCatalog.Types.PgLsn>;
      writeLag?: Nullable<PgCatalog.Types.Interval>;
      flushLag?: Nullable<PgCatalog.Types.Interval>;
      replayLag?: Nullable<PgCatalog.Types.Interval>;
      syncPriority?: Nullable<PgCatalog.Types.Int4>;
      syncState?: Nullable<PgCatalog.Types.Text>;
      replyTime?: Nullable<PgCatalog.Types.Timestamptz>;
    };
    export type PgStatReplicationSlots = {
      slotName?: Nullable<PgCatalog.Types.Text>;
      spillTxns?: Nullable<PgCatalog.Types.Int8>;
      spillCount?: Nullable<PgCatalog.Types.Int8>;
      spillBytes?: Nullable<PgCatalog.Types.Int8>;
      streamTxns?: Nullable<PgCatalog.Types.Int8>;
      streamCount?: Nullable<PgCatalog.Types.Int8>;
      streamBytes?: Nullable<PgCatalog.Types.Int8>;
      totalTxns?: Nullable<PgCatalog.Types.Int8>;
      totalBytes?: Nullable<PgCatalog.Types.Int8>;
      statsReset?: Nullable<PgCatalog.Types.Timestamptz>;
    };
    export type PgStatSlru = {
      name?: Nullable<PgCatalog.Types.Text>;
      blksZeroed?: Nullable<PgCatalog.Types.Int8>;
      blksHit?: Nullable<PgCatalog.Types.Int8>;
      blksRead?: Nullable<PgCatalog.Types.Int8>;
      blksWritten?: Nullable<PgCatalog.Types.Int8>;
      blksExists?: Nullable<PgCatalog.Types.Int8>;
      flushes?: Nullable<PgCatalog.Types.Int8>;
      truncates?: Nullable<PgCatalog.Types.Int8>;
      statsReset?: Nullable<PgCatalog.Types.Timestamptz>;
    };
    export type PgStatSsl = {
      pid?: Nullable<PgCatalog.Types.Int4>;
      ssl?: Nullable<PgCatalog.Types.Bool>;
      version?: Nullable<PgCatalog.Types.Text>;
      cipher?: Nullable<PgCatalog.Types.Text>;
      bits?: Nullable<PgCatalog.Types.Int4>;
      clientDn?: Nullable<PgCatalog.Types.Text>;
      clientSerial?: Nullable<PgCatalog.Types.Numeric>;
      issuerDn?: Nullable<PgCatalog.Types.Text>;
    };
    export type PgStatSubscription = {
      subid?: Nullable<PgCatalog.Types.Oid>;
      subname?: Nullable<PgCatalog.Types.Name>;
      pid?: Nullable<PgCatalog.Types.Int4>;
      leaderPid?: Nullable<PgCatalog.Types.Int4>;
      relid?: Nullable<PgCatalog.Types.Oid>;
      receivedLsn?: Nullable<PgCatalog.Types.PgLsn>;
      lastMsgSendTime?: Nullable<PgCatalog.Types.Timestamptz>;
      lastMsgReceiptTime?: Nullable<PgCatalog.Types.Timestamptz>;
      latestEndLsn?: Nullable<PgCatalog.Types.PgLsn>;
      latestEndTime?: Nullable<PgCatalog.Types.Timestamptz>;
    };
    export type PgStatSubscriptionStats = {
      subid?: Nullable<PgCatalog.Types.Oid>;
      subname?: Nullable<PgCatalog.Types.Name>;
      applyErrorCount?: Nullable<PgCatalog.Types.Int8>;
      syncErrorCount?: Nullable<PgCatalog.Types.Int8>;
      statsReset?: Nullable<PgCatalog.Types.Timestamptz>;
    };
    export type PgStatSysIndexes = {
      relid?: Nullable<PgCatalog.Types.Oid>;
      indexrelid?: Nullable<PgCatalog.Types.Oid>;
      schemaname?: Nullable<PgCatalog.Types.Name>;
      relname?: Nullable<PgCatalog.Types.Name>;
      indexrelname?: Nullable<PgCatalog.Types.Name>;
      idxScan?: Nullable<PgCatalog.Types.Int8>;
      lastIdxScan?: Nullable<PgCatalog.Types.Timestamptz>;
      idxTupRead?: Nullable<PgCatalog.Types.Int8>;
      idxTupFetch?: Nullable<PgCatalog.Types.Int8>;
    };
    export type PgStatSysTables = {
      relid?: Nullable<PgCatalog.Types.Oid>;
      schemaname?: Nullable<PgCatalog.Types.Name>;
      relname?: Nullable<PgCatalog.Types.Name>;
      seqScan?: Nullable<PgCatalog.Types.Int8>;
      lastSeqScan?: Nullable<PgCatalog.Types.Timestamptz>;
      seqTupRead?: Nullable<PgCatalog.Types.Int8>;
      idxScan?: Nullable<PgCatalog.Types.Int8>;
      lastIdxScan?: Nullable<PgCatalog.Types.Timestamptz>;
      idxTupFetch?: Nullable<PgCatalog.Types.Int8>;
      nTupIns?: Nullable<PgCatalog.Types.Int8>;
      nTupUpd?: Nullable<PgCatalog.Types.Int8>;
      nTupDel?: Nullable<PgCatalog.Types.Int8>;
      nTupHotUpd?: Nullable<PgCatalog.Types.Int8>;
      nTupNewpageUpd?: Nullable<PgCatalog.Types.Int8>;
      nLiveTup?: Nullable<PgCatalog.Types.Int8>;
      nDeadTup?: Nullable<PgCatalog.Types.Int8>;
      nModSinceAnalyze?: Nullable<PgCatalog.Types.Int8>;
      nInsSinceVacuum?: Nullable<PgCatalog.Types.Int8>;
      lastVacuum?: Nullable<PgCatalog.Types.Timestamptz>;
      lastAutovacuum?: Nullable<PgCatalog.Types.Timestamptz>;
      lastAnalyze?: Nullable<PgCatalog.Types.Timestamptz>;
      lastAutoanalyze?: Nullable<PgCatalog.Types.Timestamptz>;
      vacuumCount?: Nullable<PgCatalog.Types.Int8>;
      autovacuumCount?: Nullable<PgCatalog.Types.Int8>;
      analyzeCount?: Nullable<PgCatalog.Types.Int8>;
      autoanalyzeCount?: Nullable<PgCatalog.Types.Int8>;
    };
    export type PgStatUserFunctions = {
      funcid?: Nullable<PgCatalog.Types.Oid>;
      schemaname?: Nullable<PgCatalog.Types.Name>;
      funcname?: Nullable<PgCatalog.Types.Name>;
      calls?: Nullable<PgCatalog.Types.Int8>;
      totalTime?: Nullable<PgCatalog.Types.Float8>;
      selfTime?: Nullable<PgCatalog.Types.Float8>;
    };
    export type PgStatUserIndexes = {
      relid?: Nullable<PgCatalog.Types.Oid>;
      indexrelid?: Nullable<PgCatalog.Types.Oid>;
      schemaname?: Nullable<PgCatalog.Types.Name>;
      relname?: Nullable<PgCatalog.Types.Name>;
      indexrelname?: Nullable<PgCatalog.Types.Name>;
      idxScan?: Nullable<PgCatalog.Types.Int8>;
      lastIdxScan?: Nullable<PgCatalog.Types.Timestamptz>;
      idxTupRead?: Nullable<PgCatalog.Types.Int8>;
      idxTupFetch?: Nullable<PgCatalog.Types.Int8>;
    };
    export type PgStatUserTables = {
      relid?: Nullable<PgCatalog.Types.Oid>;
      schemaname?: Nullable<PgCatalog.Types.Name>;
      relname?: Nullable<PgCatalog.Types.Name>;
      seqScan?: Nullable<PgCatalog.Types.Int8>;
      lastSeqScan?: Nullable<PgCatalog.Types.Timestamptz>;
      seqTupRead?: Nullable<PgCatalog.Types.Int8>;
      idxScan?: Nullable<PgCatalog.Types.Int8>;
      lastIdxScan?: Nullable<PgCatalog.Types.Timestamptz>;
      idxTupFetch?: Nullable<PgCatalog.Types.Int8>;
      nTupIns?: Nullable<PgCatalog.Types.Int8>;
      nTupUpd?: Nullable<PgCatalog.Types.Int8>;
      nTupDel?: Nullable<PgCatalog.Types.Int8>;
      nTupHotUpd?: Nullable<PgCatalog.Types.Int8>;
      nTupNewpageUpd?: Nullable<PgCatalog.Types.Int8>;
      nLiveTup?: Nullable<PgCatalog.Types.Int8>;
      nDeadTup?: Nullable<PgCatalog.Types.Int8>;
      nModSinceAnalyze?: Nullable<PgCatalog.Types.Int8>;
      nInsSinceVacuum?: Nullable<PgCatalog.Types.Int8>;
      lastVacuum?: Nullable<PgCatalog.Types.Timestamptz>;
      lastAutovacuum?: Nullable<PgCatalog.Types.Timestamptz>;
      lastAnalyze?: Nullable<PgCatalog.Types.Timestamptz>;
      lastAutoanalyze?: Nullable<PgCatalog.Types.Timestamptz>;
      vacuumCount?: Nullable<PgCatalog.Types.Int8>;
      autovacuumCount?: Nullable<PgCatalog.Types.Int8>;
      analyzeCount?: Nullable<PgCatalog.Types.Int8>;
      autoanalyzeCount?: Nullable<PgCatalog.Types.Int8>;
    };
    export type PgStatWal = {
      walRecords?: Nullable<PgCatalog.Types.Int8>;
      walFpi?: Nullable<PgCatalog.Types.Int8>;
      walBytes?: Nullable<PgCatalog.Types.Numeric>;
      walBuffersFull?: Nullable<PgCatalog.Types.Int8>;
      walWrite?: Nullable<PgCatalog.Types.Int8>;
      walSync?: Nullable<PgCatalog.Types.Int8>;
      walWriteTime?: Nullable<PgCatalog.Types.Float8>;
      walSyncTime?: Nullable<PgCatalog.Types.Float8>;
      statsReset?: Nullable<PgCatalog.Types.Timestamptz>;
    };
    export type PgStatWalReceiver = {
      pid?: Nullable<PgCatalog.Types.Int4>;
      status?: Nullable<PgCatalog.Types.Text>;
      receiveStartLsn?: Nullable<PgCatalog.Types.PgLsn>;
      receiveStartTli?: Nullable<PgCatalog.Types.Int4>;
      writtenLsn?: Nullable<PgCatalog.Types.PgLsn>;
      flushedLsn?: Nullable<PgCatalog.Types.PgLsn>;
      receivedTli?: Nullable<PgCatalog.Types.Int4>;
      lastMsgSendTime?: Nullable<PgCatalog.Types.Timestamptz>;
      lastMsgReceiptTime?: Nullable<PgCatalog.Types.Timestamptz>;
      latestEndLsn?: Nullable<PgCatalog.Types.PgLsn>;
      latestEndTime?: Nullable<PgCatalog.Types.Timestamptz>;
      slotName?: Nullable<PgCatalog.Types.Text>;
      senderHost?: Nullable<PgCatalog.Types.Text>;
      senderPort?: Nullable<PgCatalog.Types.Int4>;
      conninfo?: Nullable<PgCatalog.Types.Text>;
    };
    export type PgStatXactAllTables = {
      relid?: Nullable<PgCatalog.Types.Oid>;
      schemaname?: Nullable<PgCatalog.Types.Name>;
      relname?: Nullable<PgCatalog.Types.Name>;
      seqScan?: Nullable<PgCatalog.Types.Int8>;
      seqTupRead?: Nullable<PgCatalog.Types.Int8>;
      idxScan?: Nullable<PgCatalog.Types.Int8>;
      idxTupFetch?: Nullable<PgCatalog.Types.Int8>;
      nTupIns?: Nullable<PgCatalog.Types.Int8>;
      nTupUpd?: Nullable<PgCatalog.Types.Int8>;
      nTupDel?: Nullable<PgCatalog.Types.Int8>;
      nTupHotUpd?: Nullable<PgCatalog.Types.Int8>;
      nTupNewpageUpd?: Nullable<PgCatalog.Types.Int8>;
    };
    export type PgStatXactSysTables = {
      relid?: Nullable<PgCatalog.Types.Oid>;
      schemaname?: Nullable<PgCatalog.Types.Name>;
      relname?: Nullable<PgCatalog.Types.Name>;
      seqScan?: Nullable<PgCatalog.Types.Int8>;
      seqTupRead?: Nullable<PgCatalog.Types.Int8>;
      idxScan?: Nullable<PgCatalog.Types.Int8>;
      idxTupFetch?: Nullable<PgCatalog.Types.Int8>;
      nTupIns?: Nullable<PgCatalog.Types.Int8>;
      nTupUpd?: Nullable<PgCatalog.Types.Int8>;
      nTupDel?: Nullable<PgCatalog.Types.Int8>;
      nTupHotUpd?: Nullable<PgCatalog.Types.Int8>;
      nTupNewpageUpd?: Nullable<PgCatalog.Types.Int8>;
    };
    export type PgStatXactUserFunctions = {
      funcid?: Nullable<PgCatalog.Types.Oid>;
      schemaname?: Nullable<PgCatalog.Types.Name>;
      funcname?: Nullable<PgCatalog.Types.Name>;
      calls?: Nullable<PgCatalog.Types.Int8>;
      totalTime?: Nullable<PgCatalog.Types.Float8>;
      selfTime?: Nullable<PgCatalog.Types.Float8>;
    };
    export type PgStatXactUserTables = {
      relid?: Nullable<PgCatalog.Types.Oid>;
      schemaname?: Nullable<PgCatalog.Types.Name>;
      relname?: Nullable<PgCatalog.Types.Name>;
      seqScan?: Nullable<PgCatalog.Types.Int8>;
      seqTupRead?: Nullable<PgCatalog.Types.Int8>;
      idxScan?: Nullable<PgCatalog.Types.Int8>;
      idxTupFetch?: Nullable<PgCatalog.Types.Int8>;
      nTupIns?: Nullable<PgCatalog.Types.Int8>;
      nTupUpd?: Nullable<PgCatalog.Types.Int8>;
      nTupDel?: Nullable<PgCatalog.Types.Int8>;
      nTupHotUpd?: Nullable<PgCatalog.Types.Int8>;
      nTupNewpageUpd?: Nullable<PgCatalog.Types.Int8>;
    };
    export type PgStatioAllIndexes = {
      relid?: Nullable<PgCatalog.Types.Oid>;
      indexrelid?: Nullable<PgCatalog.Types.Oid>;
      schemaname?: Nullable<PgCatalog.Types.Name>;
      relname?: Nullable<PgCatalog.Types.Name>;
      indexrelname?: Nullable<PgCatalog.Types.Name>;
      idxBlksRead?: Nullable<PgCatalog.Types.Int8>;
      idxBlksHit?: Nullable<PgCatalog.Types.Int8>;
    };
    export type PgStatioAllSequences = {
      relid?: Nullable<PgCatalog.Types.Oid>;
      schemaname?: Nullable<PgCatalog.Types.Name>;
      relname?: Nullable<PgCatalog.Types.Name>;
      blksRead?: Nullable<PgCatalog.Types.Int8>;
      blksHit?: Nullable<PgCatalog.Types.Int8>;
    };
    export type PgStatioAllTables = {
      relid?: Nullable<PgCatalog.Types.Oid>;
      schemaname?: Nullable<PgCatalog.Types.Name>;
      relname?: Nullable<PgCatalog.Types.Name>;
      heapBlksRead?: Nullable<PgCatalog.Types.Int8>;
      heapBlksHit?: Nullable<PgCatalog.Types.Int8>;
      idxBlksRead?: Nullable<PgCatalog.Types.Int8>;
      idxBlksHit?: Nullable<PgCatalog.Types.Int8>;
      toastBlksRead?: Nullable<PgCatalog.Types.Int8>;
      toastBlksHit?: Nullable<PgCatalog.Types.Int8>;
      tidxBlksRead?: Nullable<PgCatalog.Types.Int8>;
      tidxBlksHit?: Nullable<PgCatalog.Types.Int8>;
    };
    export type PgStatioSysIndexes = {
      relid?: Nullable<PgCatalog.Types.Oid>;
      indexrelid?: Nullable<PgCatalog.Types.Oid>;
      schemaname?: Nullable<PgCatalog.Types.Name>;
      relname?: Nullable<PgCatalog.Types.Name>;
      indexrelname?: Nullable<PgCatalog.Types.Name>;
      idxBlksRead?: Nullable<PgCatalog.Types.Int8>;
      idxBlksHit?: Nullable<PgCatalog.Types.Int8>;
    };
    export type PgStatioSysSequences = {
      relid?: Nullable<PgCatalog.Types.Oid>;
      schemaname?: Nullable<PgCatalog.Types.Name>;
      relname?: Nullable<PgCatalog.Types.Name>;
      blksRead?: Nullable<PgCatalog.Types.Int8>;
      blksHit?: Nullable<PgCatalog.Types.Int8>;
    };
    export type PgStatioSysTables = {
      relid?: Nullable<PgCatalog.Types.Oid>;
      schemaname?: Nullable<PgCatalog.Types.Name>;
      relname?: Nullable<PgCatalog.Types.Name>;
      heapBlksRead?: Nullable<PgCatalog.Types.Int8>;
      heapBlksHit?: Nullable<PgCatalog.Types.Int8>;
      idxBlksRead?: Nullable<PgCatalog.Types.Int8>;
      idxBlksHit?: Nullable<PgCatalog.Types.Int8>;
      toastBlksRead?: Nullable<PgCatalog.Types.Int8>;
      toastBlksHit?: Nullable<PgCatalog.Types.Int8>;
      tidxBlksRead?: Nullable<PgCatalog.Types.Int8>;
      tidxBlksHit?: Nullable<PgCatalog.Types.Int8>;
    };
    export type PgStatioUserIndexes = {
      relid?: Nullable<PgCatalog.Types.Oid>;
      indexrelid?: Nullable<PgCatalog.Types.Oid>;
      schemaname?: Nullable<PgCatalog.Types.Name>;
      relname?: Nullable<PgCatalog.Types.Name>;
      indexrelname?: Nullable<PgCatalog.Types.Name>;
      idxBlksRead?: Nullable<PgCatalog.Types.Int8>;
      idxBlksHit?: Nullable<PgCatalog.Types.Int8>;
    };
    export type PgStatioUserSequences = {
      relid?: Nullable<PgCatalog.Types.Oid>;
      schemaname?: Nullable<PgCatalog.Types.Name>;
      relname?: Nullable<PgCatalog.Types.Name>;
      blksRead?: Nullable<PgCatalog.Types.Int8>;
      blksHit?: Nullable<PgCatalog.Types.Int8>;
    };
    export type PgStatioUserTables = {
      relid?: Nullable<PgCatalog.Types.Oid>;
      schemaname?: Nullable<PgCatalog.Types.Name>;
      relname?: Nullable<PgCatalog.Types.Name>;
      heapBlksRead?: Nullable<PgCatalog.Types.Int8>;
      heapBlksHit?: Nullable<PgCatalog.Types.Int8>;
      idxBlksRead?: Nullable<PgCatalog.Types.Int8>;
      idxBlksHit?: Nullable<PgCatalog.Types.Int8>;
      toastBlksRead?: Nullable<PgCatalog.Types.Int8>;
      toastBlksHit?: Nullable<PgCatalog.Types.Int8>;
      tidxBlksRead?: Nullable<PgCatalog.Types.Int8>;
      tidxBlksHit?: Nullable<PgCatalog.Types.Int8>;
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
      stanumbers1?: Nullable<PgCatalog.Types.Float4Array>;
      stanumbers2?: Nullable<PgCatalog.Types.Float4Array>;
      stanumbers3?: Nullable<PgCatalog.Types.Float4Array>;
      stanumbers4?: Nullable<PgCatalog.Types.Float4Array>;
      stanumbers5?: Nullable<PgCatalog.Types.Float4Array>;
      stavalues1?: Nullable<PgCatalog.Types.Anyarray>;
      stavalues2?: Nullable<PgCatalog.Types.Anyarray>;
      stavalues3?: Nullable<PgCatalog.Types.Anyarray>;
      stavalues4?: Nullable<PgCatalog.Types.Anyarray>;
      stavalues5?: Nullable<PgCatalog.Types.Anyarray>;
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
      stxexprs?: Nullable<PgCatalog.Types.PgNodeTree>;
    };
    export type PgStatisticExtData = {
      stxoid: PgCatalog.Types.Oid;
      stxdinherit: PgCatalog.Types.Bool;
      stxdndistinct?: Nullable<PgCatalog.Types.PgNdistinct>;
      stxddependencies?: Nullable<PgCatalog.Types.PgDependencies>;
      stxdmcv?: Nullable<PgCatalog.Types.PgMcvList>;
      stxdexpr?: Nullable<PgCatalog.Types.PgStatisticArray>;
    };
    export type PgStats = {
      schemaname?: Nullable<PgCatalog.Types.Name>;
      tablename?: Nullable<PgCatalog.Types.Name>;
      attname?: Nullable<PgCatalog.Types.Name>;
      inherited?: Nullable<PgCatalog.Types.Bool>;
      nullFrac?: Nullable<PgCatalog.Types.Float4>;
      avgWidth?: Nullable<PgCatalog.Types.Int4>;
      nDistinct?: Nullable<PgCatalog.Types.Float4>;
      mostCommonVals?: Nullable<PgCatalog.Types.Anyarray>;
      mostCommonFreqs?: Nullable<PgCatalog.Types.Float4Array>;
      histogramBounds?: Nullable<PgCatalog.Types.Anyarray>;
      correlation?: Nullable<PgCatalog.Types.Float4>;
      mostCommonElems?: Nullable<PgCatalog.Types.Anyarray>;
      mostCommonElemFreqs?: Nullable<PgCatalog.Types.Float4Array>;
      elemCountHistogram?: Nullable<PgCatalog.Types.Float4Array>;
    };
    export type PgStatsExt = {
      schemaname?: Nullable<PgCatalog.Types.Name>;
      tablename?: Nullable<PgCatalog.Types.Name>;
      statisticsSchemaname?: Nullable<PgCatalog.Types.Name>;
      statisticsName?: Nullable<PgCatalog.Types.Name>;
      statisticsOwner?: Nullable<PgCatalog.Types.Name>;
      attnames?: Nullable<PgCatalog.Types.NameArray>;
      exprs?: Nullable<PgCatalog.Types.TextArray>;
      kinds?: Nullable<PgCatalog.Types.CharArray>;
      inherited?: Nullable<PgCatalog.Types.Bool>;
      nDistinct?: Nullable<PgCatalog.Types.PgNdistinct>;
      dependencies?: Nullable<PgCatalog.Types.PgDependencies>;
      mostCommonVals?: Nullable<PgCatalog.Types.TextArray>;
      mostCommonValNulls?: Nullable<PgCatalog.Types.BoolArray>;
      mostCommonFreqs?: Nullable<PgCatalog.Types.Float8Array>;
      mostCommonBaseFreqs?: Nullable<PgCatalog.Types.Float8Array>;
    };
    export type PgStatsExtExprs = {
      schemaname?: Nullable<PgCatalog.Types.Name>;
      tablename?: Nullable<PgCatalog.Types.Name>;
      statisticsSchemaname?: Nullable<PgCatalog.Types.Name>;
      statisticsName?: Nullable<PgCatalog.Types.Name>;
      statisticsOwner?: Nullable<PgCatalog.Types.Name>;
      expr?: Nullable<PgCatalog.Types.Text>;
      inherited?: Nullable<PgCatalog.Types.Bool>;
      nullFrac?: Nullable<PgCatalog.Types.Float4>;
      avgWidth?: Nullable<PgCatalog.Types.Int4>;
      nDistinct?: Nullable<PgCatalog.Types.Float4>;
      mostCommonVals?: Nullable<PgCatalog.Types.Anyarray>;
      mostCommonFreqs?: Nullable<PgCatalog.Types.Float4Array>;
      histogramBounds?: Nullable<PgCatalog.Types.Anyarray>;
      correlation?: Nullable<PgCatalog.Types.Float4>;
      mostCommonElems?: Nullable<PgCatalog.Types.Anyarray>;
      mostCommonElemFreqs?: Nullable<PgCatalog.Types.Float4Array>;
      elemCountHistogram?: Nullable<PgCatalog.Types.Float4Array>;
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
      subslotname?: Nullable<PgCatalog.Types.Name>;
      subsynccommit: PgCatalog.Types.Text;
      subpublications: PgCatalog.Types.TextArray;
      suborigin?: Nullable<PgCatalog.Types.Text>;
    };
    export type PgSubscriptionRel = {
      srsubid: PgCatalog.Types.Oid;
      srrelid: PgCatalog.Types.Oid;
      srsubstate: PgCatalog.Types.Char;
      srsublsn?: Nullable<PgCatalog.Types.PgLsn>;
    };
    export type PgTables = {
      schemaname?: Nullable<PgCatalog.Types.Name>;
      tablename?: Nullable<PgCatalog.Types.Name>;
      tableowner?: Nullable<PgCatalog.Types.Name>;
      tablespace?: Nullable<PgCatalog.Types.Name>;
      hasindexes?: Nullable<PgCatalog.Types.Bool>;
      hasrules?: Nullable<PgCatalog.Types.Bool>;
      hastriggers?: Nullable<PgCatalog.Types.Bool>;
      rowsecurity?: Nullable<PgCatalog.Types.Bool>;
    };
    export type PgTablespace = {
      oid: PgCatalog.Types.Oid;
      spcname: PgCatalog.Types.Name;
      spcowner: PgCatalog.Types.Oid;
      spcacl?: Nullable<PgCatalog.Types.AclitemArray>;
      spcoptions?: Nullable<PgCatalog.Types.TextArray>;
    };
    export type PgTimezoneAbbrevs = {
      abbrev?: Nullable<PgCatalog.Types.Text>;
      utcOffset?: Nullable<PgCatalog.Types.Interval>;
      isDst?: Nullable<PgCatalog.Types.Bool>;
    };
    export type PgTimezoneNames = {
      name?: Nullable<PgCatalog.Types.Text>;
      abbrev?: Nullable<PgCatalog.Types.Text>;
      utcOffset?: Nullable<PgCatalog.Types.Interval>;
      isDst?: Nullable<PgCatalog.Types.Bool>;
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
      tgqual?: Nullable<PgCatalog.Types.PgNodeTree>;
      tgoldtable?: Nullable<PgCatalog.Types.Name>;
      tgnewtable?: Nullable<PgCatalog.Types.Name>;
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
      dictinitoption?: Nullable<PgCatalog.Types.Text>;
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
      typdefaultbin?: Nullable<PgCatalog.Types.PgNodeTree>;
      typdefault?: Nullable<PgCatalog.Types.Text>;
      typacl?: Nullable<PgCatalog.Types.AclitemArray>;
    };
    export type PgUser = {
      usename?: Nullable<PgCatalog.Types.Name>;
      usesysid?: Nullable<PgCatalog.Types.Oid>;
      usecreatedb?: Nullable<PgCatalog.Types.Bool>;
      usesuper?: Nullable<PgCatalog.Types.Bool>;
      userepl?: Nullable<PgCatalog.Types.Bool>;
      usebypassrls?: Nullable<PgCatalog.Types.Bool>;
      passwd?: Nullable<PgCatalog.Types.Text>;
      valuntil?: Nullable<PgCatalog.Types.Timestamptz>;
      useconfig?: Nullable<PgCatalog.Types.TextArray>;
    };
    export type PgUserMapping = {
      oid: PgCatalog.Types.Oid;
      umuser: PgCatalog.Types.Oid;
      umserver: PgCatalog.Types.Oid;
      umoptions?: Nullable<PgCatalog.Types.TextArray>;
    };
    export type PgUserMappings = {
      umid?: Nullable<PgCatalog.Types.Oid>;
      srvid?: Nullable<PgCatalog.Types.Oid>;
      srvname?: Nullable<PgCatalog.Types.Name>;
      umuser?: Nullable<PgCatalog.Types.Oid>;
      usename?: Nullable<PgCatalog.Types.Name>;
      umoptions?: Nullable<PgCatalog.Types.TextArray>;
    };
    export type PgViews = {
      schemaname?: Nullable<PgCatalog.Types.Name>;
      viewname?: Nullable<PgCatalog.Types.Name>;
      viewowner?: Nullable<PgCatalog.Types.Name>;
      definition?: Nullable<PgCatalog.Types.Text>;
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
      export type ByStarelidStaattnumStainherit = {
        starelid: PgCatalog.Types.Oid;
        staattnum: PgCatalog.Types.Int2;
        stainherit: PgCatalog.Types.Bool;
      };
    }
    export namespace PgType {
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByTypnameTypnamespace = {
        typname: PgCatalog.Types.Cstring;
        typnamespace: PgCatalog.Types.Oid;
      };
    }
    export namespace PgForeignTable {
      export type ByFtrelid = {
        ftrelid: PgCatalog.Types.Oid;
      };
    }
    export namespace PgAuthid {
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByRolname = {
        rolname: PgCatalog.Types.Cstring;
      };
    }
    export namespace PgStatisticExtData {
      export type ByStxoidStxdinherit = {
        stxoid: PgCatalog.Types.Oid;
        stxdinherit: PgCatalog.Types.Bool;
      };
    }
    export namespace PgUserMapping {
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByUmuserUmserver = {
        umuser: PgCatalog.Types.Oid;
        umserver: PgCatalog.Types.Oid;
      };
    }
    export namespace PgSubscription {
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type BySubdbidSubname = {
        subdbid: PgCatalog.Types.Oid;
        subname: PgCatalog.Types.Cstring;
      };
    }
    export namespace PgAttribute {
      export type ByAttrelidAttname = {
        attrelid: PgCatalog.Types.Oid;
        attname: PgCatalog.Types.Cstring;
      };
      export type ByAttrelidAttnum = {
        attrelid: PgCatalog.Types.Oid;
        attnum: PgCatalog.Types.Int2;
      };
    }
    export namespace PgProc {
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPronameProargtypesPronamespace = {
        proname: PgCatalog.Types.Cstring;
        proargtypes: PgCatalog.Types.Oidvector;
        pronamespace: PgCatalog.Types.Oid;
      };
    }
    export namespace PgClass {
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByRelnameRelnamespace = {
        relname: PgCatalog.Types.Cstring;
        relnamespace: PgCatalog.Types.Oid;
      };
      export type ByReltablespaceRelfilenode = {
        reltablespace: PgCatalog.Types.Oid;
        relfilenode: PgCatalog.Types.Oid;
      };
    }
    export namespace PgAttrdef {
      export type ByAdrelidAdnum = {
        adrelid: PgCatalog.Types.Oid;
        adnum: PgCatalog.Types.Int2;
      };
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
    }
    export namespace PgConstraint {
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
    }
    export namespace PgInherits {
      export type ByInhparent = {
        inhparent: PgCatalog.Types.Oid;
      };
      export type ByInhrelidInhseqno = {
        inhrelid: PgCatalog.Types.Oid;
        inhseqno: PgCatalog.Types.Int4;
      };
    }
    export namespace PgIndex {
      export type ByIndexrelid = {
        indexrelid: PgCatalog.Types.Oid;
      };
      export type ByIndrelid = {
        indrelid: PgCatalog.Types.Oid;
      };
    }
    export namespace PgOperator {
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByOprnameOprleftOprrightOprnamespace = {
        oprname: PgCatalog.Types.Cstring;
        oprleft: PgCatalog.Types.Oid;
        oprright: PgCatalog.Types.Oid;
        oprnamespace: PgCatalog.Types.Oid;
      };
    }
    export namespace PgOpfamily {
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByOpfmethodOpfnameOpfnamespace = {
        opfmethod: PgCatalog.Types.Oid;
        opfname: PgCatalog.Types.Cstring;
        opfnamespace: PgCatalog.Types.Oid;
      };
    }
    export namespace PgOpclass {
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByOpcmethodOpcnameOpcnamespace = {
        opcmethod: PgCatalog.Types.Oid;
        opcname: PgCatalog.Types.Cstring;
        opcnamespace: PgCatalog.Types.Oid;
      };
    }
    export namespace PgAm {
      export type ByAmname = {
        amname: PgCatalog.Types.Cstring;
      };
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
    }
    export namespace PgAmop {
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
    }
    export namespace PgAmproc {
      export type ByAmprocfamilyAmproclefttypeAmprocrighttypeAmprocnum = {
        amprocfamily: PgCatalog.Types.Oid;
        amproclefttype: PgCatalog.Types.Oid;
        amprocrighttype: PgCatalog.Types.Oid;
        amprocnum: PgCatalog.Types.Int2;
      };
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
    }
    export namespace PgLanguage {
      export type ByLanname = {
        lanname: PgCatalog.Types.Cstring;
      };
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
    }
    export namespace PgLargeobjectMetadata {
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
    }
    export namespace PgAggregate {
      export type ByAggfnoid = {
        aggfnoid: PgCatalog.Types.Regproc;
      };
    }
    export namespace PgStatisticExt {
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByStxnameStxnamespace = {
        stxname: PgCatalog.Types.Cstring;
        stxnamespace: PgCatalog.Types.Oid;
      };
      export type ByStxrelid = {
        stxrelid: PgCatalog.Types.Oid;
      };
    }
    export namespace PgRewrite {
      export type ByEvClassRulename = {
        evClass: PgCatalog.Types.Oid;
        rulename: PgCatalog.Types.Cstring;
      };
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
    }
    export namespace PgTrigger {
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByTgconstraint = {
        tgconstraint: PgCatalog.Types.Oid;
      };
      export type ByTgrelidTgname = {
        tgrelid: PgCatalog.Types.Oid;
        tgname: PgCatalog.Types.Cstring;
      };
    }
    export namespace PgEventTrigger {
      export type ByEvtname = {
        evtname: PgCatalog.Types.Cstring;
      };
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
    }
    export namespace PgDescription {
      export type ByObjoidClassoidObjsubid = {
        objoid: PgCatalog.Types.Oid;
        classoid: PgCatalog.Types.Oid;
        objsubid: PgCatalog.Types.Int4;
      };
    }
    export namespace PgCast {
      export type ByCastsourceCasttarget = {
        castsource: PgCatalog.Types.Oid;
        casttarget: PgCatalog.Types.Oid;
      };
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
    }
    export namespace PgEnum {
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
    }
    export namespace PgNamespace {
      export type ByNspname = {
        nspname: PgCatalog.Types.Cstring;
      };
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
    }
    export namespace PgConversion {
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
    }
    export namespace PgDepend {
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
    }
    export namespace PgDatabase {
      export type ByDatname = {
        datname: PgCatalog.Types.Cstring;
      };
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
    }
    export namespace PgDbRoleSetting {
      export type BySetdatabaseSetrole = {
        setdatabase: PgCatalog.Types.Oid;
        setrole: PgCatalog.Types.Oid;
      };
    }
    export namespace PgTablespace {
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type BySpcname = {
        spcname: PgCatalog.Types.Cstring;
      };
    }
    export namespace PgAuthMembers {
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
      export type ByRoleidMemberGrantor = {
        roleid: PgCatalog.Types.Oid;
        member: PgCatalog.Types.Oid;
        grantor: PgCatalog.Types.Oid;
      };
    }
    export namespace PgShdepend {
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
    }
    export namespace PgShdescription {
      export type ByObjoidClassoid = {
        objoid: PgCatalog.Types.Oid;
        classoid: PgCatalog.Types.Oid;
      };
    }
    export namespace PgTsConfig {
      export type ByCfgnameCfgnamespace = {
        cfgname: PgCatalog.Types.Cstring;
        cfgnamespace: PgCatalog.Types.Oid;
      };
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
    }
    export namespace PgTsConfigMap {
      export type ByMapcfgMaptokentypeMapseqno = {
        mapcfg: PgCatalog.Types.Oid;
        maptokentype: PgCatalog.Types.Int4;
        mapseqno: PgCatalog.Types.Int4;
      };
    }
    export namespace PgTsDict {
      export type ByDictnameDictnamespace = {
        dictname: PgCatalog.Types.Cstring;
        dictnamespace: PgCatalog.Types.Oid;
      };
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
    }
    export namespace PgTsParser {
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrsnamePrsnamespace = {
        prsname: PgCatalog.Types.Cstring;
        prsnamespace: PgCatalog.Types.Oid;
      };
    }
    export namespace PgTsTemplate {
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByTmplnameTmplnamespace = {
        tmplname: PgCatalog.Types.Cstring;
        tmplnamespace: PgCatalog.Types.Oid;
      };
    }
    export namespace PgExtension {
      export type ByExtname = {
        extname: PgCatalog.Types.Cstring;
      };
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
    }
    export namespace PgForeignDataWrapper {
      export type ByFdwname = {
        fdwname: PgCatalog.Types.Cstring;
      };
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
    }
    export namespace PgForeignServer {
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type BySrvname = {
        srvname: PgCatalog.Types.Cstring;
      };
    }
    export namespace PgPolicy {
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPolrelidPolname = {
        polrelid: PgCatalog.Types.Oid;
        polname: PgCatalog.Types.Cstring;
      };
    }
    export namespace PgReplicationOrigin {
      export type ByRoident = {
        roident: PgCatalog.Types.Oid;
      };
      export type ByRoname = {
        roname: PgCatalog.Types.Text;
      };
    }
    export namespace PgDefaultAcl {
      export type ByDefaclroleDefaclnamespaceDefaclobjtype = {
        defaclrole: PgCatalog.Types.Oid;
        defaclnamespace: PgCatalog.Types.Oid;
        defaclobjtype: PgCatalog.Types.Char;
      };
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
    }
    export namespace PgInitPrivs {
      export type ByObjoidClassoidObjsubid = {
        objoid: PgCatalog.Types.Oid;
        classoid: PgCatalog.Types.Oid;
        objsubid: PgCatalog.Types.Int4;
      };
    }
    export namespace PgSeclabel {
      export type ByObjoidClassoidObjsubidProvider = {
        objoid: PgCatalog.Types.Oid;
        classoid: PgCatalog.Types.Oid;
        objsubid: PgCatalog.Types.Int4;
        provider: PgCatalog.Types.Text;
      };
    }
    export namespace PgShseclabel {
      export type ByObjoidClassoidProvider = {
        objoid: PgCatalog.Types.Oid;
        classoid: PgCatalog.Types.Oid;
        provider: PgCatalog.Types.Text;
      };
    }
    export namespace PgCollation {
      export type ByCollnameCollencodingCollnamespace = {
        collname: PgCatalog.Types.Cstring;
        collencoding: PgCatalog.Types.Int4;
        collnamespace: PgCatalog.Types.Oid;
      };
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
    }
    export namespace PgParameterAcl {
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByParname = {
        parname: PgCatalog.Types.Text;
      };
    }
    export namespace PgPartitionedTable {
      export type ByPartrelid = {
        partrelid: PgCatalog.Types.Oid;
      };
    }
    export namespace PgRange {
      export type ByRngmultitypid = {
        rngmultitypid: PgCatalog.Types.Oid;
      };
      export type ByRngtypid = {
        rngtypid: PgCatalog.Types.Oid;
      };
    }
    export namespace PgTransform {
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByTrftypeTrflang = {
        trftype: PgCatalog.Types.Oid;
        trflang: PgCatalog.Types.Oid;
      };
    }
    export namespace PgSequence {
      export type BySeqrelid = {
        seqrelid: PgCatalog.Types.Oid;
      };
    }
    export namespace PgPublication {
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPubname = {
        pubname: PgCatalog.Types.Cstring;
      };
    }
    export namespace PgPublicationNamespace {
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPnnspidPnpubid = {
        pnnspid: PgCatalog.Types.Oid;
        pnpubid: PgCatalog.Types.Oid;
      };
    }
    export namespace PgPublicationRel {
      export type ByOid = {
        oid: PgCatalog.Types.Oid;
      };
      export type ByPrpubid = {
        prpubid: PgCatalog.Types.Oid;
      };
      export type ByPrrelidPrpubid = {
        prrelid: PgCatalog.Types.Oid;
        prpubid: PgCatalog.Types.Oid;
      };
    }
    export namespace PgSubscriptionRel {
      export type BySrrelidSrsubid = {
        srrelid: PgCatalog.Types.Oid;
        srsubid: PgCatalog.Types.Oid;
      };
    }
    export namespace PgLargeobject {
      export type ByLoidPageno = {
        loid: PgCatalog.Types.Oid;
        pageno: PgCatalog.Types.Int4;
      };
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
      oid?: Nullable<PgCatalog.Types.Oid>;
      fdwowner?: Nullable<PgCatalog.Types.Oid>;
      fdwoptions?: Nullable<PgCatalog.Types.TextArray>;
      foreignDataWrapperCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignDataWrapperName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      authorizationIdentifier?: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignDataWrapperLanguage?: Nullable<InformationSchema.Types.CharacterData>;
    };
    export type PgForeignServers = {
      oid?: Nullable<PgCatalog.Types.Oid>;
      srvoptions?: Nullable<PgCatalog.Types.TextArray>;
      foreignServerCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignServerName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignDataWrapperCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignDataWrapperName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignServerType?: Nullable<InformationSchema.Types.CharacterData>;
      foreignServerVersion?: Nullable<InformationSchema.Types.CharacterData>;
      authorizationIdentifier?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type PgForeignTableColumns = {
      nspname?: Nullable<PgCatalog.Types.Name>;
      relname?: Nullable<PgCatalog.Types.Name>;
      attname?: Nullable<PgCatalog.Types.Name>;
      attfdwoptions?: Nullable<PgCatalog.Types.TextArray>;
    };
    export type PgForeignTables = {
      foreignTableCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignTableSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignTableName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      ftoptions?: Nullable<PgCatalog.Types.TextArray>;
      foreignServerCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignServerName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      authorizationIdentifier?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type PgUserMappings = {
      oid?: Nullable<PgCatalog.Types.Oid>;
      umoptions?: Nullable<PgCatalog.Types.TextArray>;
      umuser?: Nullable<PgCatalog.Types.Oid>;
      authorizationIdentifier?: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignServerCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignServerName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      srvowner?: Nullable<InformationSchema.Types.SqlIdentifier>;
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
      grantee?: Nullable<InformationSchema.Types.SqlIdentifier>;
      roleName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      isGrantable?: Nullable<InformationSchema.Types.YesOrNo>;
    };
    export type ApplicableRoles = {
      grantee?: Nullable<InformationSchema.Types.SqlIdentifier>;
      roleName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      isGrantable?: Nullable<InformationSchema.Types.YesOrNo>;
    };
    export type Attributes = {
      udtCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      attributeName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      ordinalPosition?: Nullable<InformationSchema.Types.CardinalNumber>;
      attributeDefault?: Nullable<InformationSchema.Types.CharacterData>;
      isNullable?: Nullable<InformationSchema.Types.YesOrNo>;
      dataType?: Nullable<InformationSchema.Types.CharacterData>;
      characterMaximumLength?: Nullable<InformationSchema.Types.CardinalNumber>;
      characterOctetLength?: Nullable<InformationSchema.Types.CardinalNumber>;
      characterSetCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      numericPrecision?: Nullable<InformationSchema.Types.CardinalNumber>;
      numericPrecisionRadix?: Nullable<InformationSchema.Types.CardinalNumber>;
      numericScale?: Nullable<InformationSchema.Types.CardinalNumber>;
      datetimePrecision?: Nullable<InformationSchema.Types.CardinalNumber>;
      intervalType?: Nullable<InformationSchema.Types.CharacterData>;
      intervalPrecision?: Nullable<InformationSchema.Types.CardinalNumber>;
      attributeUdtCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      attributeUdtSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      attributeUdtName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      maximumCardinality?: Nullable<InformationSchema.Types.CardinalNumber>;
      dtdIdentifier?: Nullable<InformationSchema.Types.SqlIdentifier>;
      isDerivedReferenceAttribute?: Nullable<InformationSchema.Types.YesOrNo>;
    };
    export type CardinalNumber = PgCatalog.Types.Int4;
    export type CharacterData = PgCatalog.Types.Varchar;
    export type CharacterSets = {
      characterSetCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterRepertoire?: Nullable<InformationSchema.Types.SqlIdentifier>;
      formOfUse?: Nullable<InformationSchema.Types.SqlIdentifier>;
      defaultCollateCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      defaultCollateSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      defaultCollateName?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type CheckConstraintRoutineUsage = {
      constraintCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificName?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type CheckConstraints = {
      constraintCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      checkClause?: Nullable<InformationSchema.Types.CharacterData>;
    };
    export type CollationCharacterSetApplicability = {
      collationCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetName?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type Collations = {
      collationCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      padAttribute?: Nullable<InformationSchema.Types.CharacterData>;
    };
    export type ColumnColumnUsage = {
      tableCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      columnName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      dependentColumn?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type ColumnDomainUsage = {
      domainCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      domainSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      domainName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      columnName?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type ColumnOptions = {
      tableCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      columnName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      optionName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      optionValue?: Nullable<InformationSchema.Types.CharacterData>;
    };
    export type ColumnPrivileges = {
      grantor?: Nullable<InformationSchema.Types.SqlIdentifier>;
      grantee?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      columnName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      privilegeType?: Nullable<InformationSchema.Types.CharacterData>;
      isGrantable?: Nullable<InformationSchema.Types.YesOrNo>;
    };
    export type ColumnUdtUsage = {
      udtCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      columnName?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type Columns = {
      tableCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      columnName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      ordinalPosition?: Nullable<InformationSchema.Types.CardinalNumber>;
      columnDefault?: Nullable<InformationSchema.Types.CharacterData>;
      isNullable?: Nullable<InformationSchema.Types.YesOrNo>;
      dataType?: Nullable<InformationSchema.Types.CharacterData>;
      characterMaximumLength?: Nullable<InformationSchema.Types.CardinalNumber>;
      characterOctetLength?: Nullable<InformationSchema.Types.CardinalNumber>;
      numericPrecision?: Nullable<InformationSchema.Types.CardinalNumber>;
      numericPrecisionRadix?: Nullable<InformationSchema.Types.CardinalNumber>;
      numericScale?: Nullable<InformationSchema.Types.CardinalNumber>;
      datetimePrecision?: Nullable<InformationSchema.Types.CardinalNumber>;
      intervalType?: Nullable<InformationSchema.Types.CharacterData>;
      intervalPrecision?: Nullable<InformationSchema.Types.CardinalNumber>;
      characterSetCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      domainCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      domainSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      domainName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      maximumCardinality?: Nullable<InformationSchema.Types.CardinalNumber>;
      dtdIdentifier?: Nullable<InformationSchema.Types.SqlIdentifier>;
      isSelfReferencing?: Nullable<InformationSchema.Types.YesOrNo>;
      isIdentity?: Nullable<InformationSchema.Types.YesOrNo>;
      identityGeneration?: Nullable<InformationSchema.Types.CharacterData>;
      identityStart?: Nullable<InformationSchema.Types.CharacterData>;
      identityIncrement?: Nullable<InformationSchema.Types.CharacterData>;
      identityMaximum?: Nullable<InformationSchema.Types.CharacterData>;
      identityMinimum?: Nullable<InformationSchema.Types.CharacterData>;
      identityCycle?: Nullable<InformationSchema.Types.YesOrNo>;
      isGenerated?: Nullable<InformationSchema.Types.CharacterData>;
      generationExpression?: Nullable<InformationSchema.Types.CharacterData>;
      isUpdatable?: Nullable<InformationSchema.Types.YesOrNo>;
    };
    export type ConstraintColumnUsage = {
      tableCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      columnName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintName?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type ConstraintTableUsage = {
      tableCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintName?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type DataTypePrivileges = {
      objectCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      objectSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      objectName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      objectType?: Nullable<InformationSchema.Types.CharacterData>;
      dtdIdentifier?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type DomainConstraints = {
      constraintCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      domainCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      domainSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      domainName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      isDeferrable?: Nullable<InformationSchema.Types.YesOrNo>;
      initiallyDeferred?: Nullable<InformationSchema.Types.YesOrNo>;
    };
    export type DomainUdtUsage = {
      udtCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      domainCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      domainSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      domainName?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type Domains = {
      domainCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      domainSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      domainName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      dataType?: Nullable<InformationSchema.Types.CharacterData>;
      characterMaximumLength?: Nullable<InformationSchema.Types.CardinalNumber>;
      characterOctetLength?: Nullable<InformationSchema.Types.CardinalNumber>;
      characterSetCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      numericPrecision?: Nullable<InformationSchema.Types.CardinalNumber>;
      numericPrecisionRadix?: Nullable<InformationSchema.Types.CardinalNumber>;
      numericScale?: Nullable<InformationSchema.Types.CardinalNumber>;
      datetimePrecision?: Nullable<InformationSchema.Types.CardinalNumber>;
      intervalType?: Nullable<InformationSchema.Types.CharacterData>;
      intervalPrecision?: Nullable<InformationSchema.Types.CardinalNumber>;
      domainDefault?: Nullable<InformationSchema.Types.CharacterData>;
      udtCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      maximumCardinality?: Nullable<InformationSchema.Types.CardinalNumber>;
      dtdIdentifier?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type ElementTypes = {
      objectCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      objectSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      objectName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      objectType?: Nullable<InformationSchema.Types.CharacterData>;
      collectionTypeIdentifier?: Nullable<InformationSchema.Types.SqlIdentifier>;
      dataType?: Nullable<InformationSchema.Types.CharacterData>;
      characterMaximumLength?: Nullable<InformationSchema.Types.CardinalNumber>;
      characterOctetLength?: Nullable<InformationSchema.Types.CardinalNumber>;
      characterSetCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      numericPrecision?: Nullable<InformationSchema.Types.CardinalNumber>;
      numericPrecisionRadix?: Nullable<InformationSchema.Types.CardinalNumber>;
      numericScale?: Nullable<InformationSchema.Types.CardinalNumber>;
      datetimePrecision?: Nullable<InformationSchema.Types.CardinalNumber>;
      intervalType?: Nullable<InformationSchema.Types.CharacterData>;
      intervalPrecision?: Nullable<InformationSchema.Types.CardinalNumber>;
      domainDefault?: Nullable<InformationSchema.Types.CharacterData>;
      udtCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      maximumCardinality?: Nullable<InformationSchema.Types.CardinalNumber>;
      dtdIdentifier?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type EnabledRoles = {
      roleName?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type ForeignDataWrapperOptions = {
      foreignDataWrapperCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignDataWrapperName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      optionName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      optionValue?: Nullable<InformationSchema.Types.CharacterData>;
    };
    export type ForeignDataWrappers = {
      foreignDataWrapperCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignDataWrapperName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      authorizationIdentifier?: Nullable<InformationSchema.Types.SqlIdentifier>;
      libraryName?: Nullable<InformationSchema.Types.CharacterData>;
      foreignDataWrapperLanguage?: Nullable<InformationSchema.Types.CharacterData>;
    };
    export type ForeignServerOptions = {
      foreignServerCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignServerName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      optionName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      optionValue?: Nullable<InformationSchema.Types.CharacterData>;
    };
    export type ForeignServers = {
      foreignServerCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignServerName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignDataWrapperCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignDataWrapperName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignServerType?: Nullable<InformationSchema.Types.CharacterData>;
      foreignServerVersion?: Nullable<InformationSchema.Types.CharacterData>;
      authorizationIdentifier?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type ForeignTableOptions = {
      foreignTableCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignTableSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignTableName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      optionName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      optionValue?: Nullable<InformationSchema.Types.CharacterData>;
    };
    export type ForeignTables = {
      foreignTableCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignTableSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignTableName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignServerCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignServerName?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type InformationSchemaCatalogName = {
      catalogName?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type KeyColumnUsage = {
      constraintCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      columnName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      ordinalPosition?: Nullable<InformationSchema.Types.CardinalNumber>;
      positionInUniqueConstraint?: Nullable<InformationSchema.Types.CardinalNumber>;
    };
    export type Parameters = {
      specificCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      ordinalPosition?: Nullable<InformationSchema.Types.CardinalNumber>;
      parameterMode?: Nullable<InformationSchema.Types.CharacterData>;
      isResult?: Nullable<InformationSchema.Types.YesOrNo>;
      asLocator?: Nullable<InformationSchema.Types.YesOrNo>;
      parameterName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      dataType?: Nullable<InformationSchema.Types.CharacterData>;
      characterMaximumLength?: Nullable<InformationSchema.Types.CardinalNumber>;
      characterOctetLength?: Nullable<InformationSchema.Types.CardinalNumber>;
      characterSetCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      numericPrecision?: Nullable<InformationSchema.Types.CardinalNumber>;
      numericPrecisionRadix?: Nullable<InformationSchema.Types.CardinalNumber>;
      numericScale?: Nullable<InformationSchema.Types.CardinalNumber>;
      datetimePrecision?: Nullable<InformationSchema.Types.CardinalNumber>;
      intervalType?: Nullable<InformationSchema.Types.CharacterData>;
      intervalPrecision?: Nullable<InformationSchema.Types.CardinalNumber>;
      udtCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      maximumCardinality?: Nullable<InformationSchema.Types.CardinalNumber>;
      dtdIdentifier?: Nullable<InformationSchema.Types.SqlIdentifier>;
      parameterDefault?: Nullable<InformationSchema.Types.CharacterData>;
    };
    export type ReferentialConstraints = {
      constraintCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      uniqueConstraintCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      uniqueConstraintSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      uniqueConstraintName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      matchOption?: Nullable<InformationSchema.Types.CharacterData>;
      updateRule?: Nullable<InformationSchema.Types.CharacterData>;
      deleteRule?: Nullable<InformationSchema.Types.CharacterData>;
    };
    export type RoleColumnGrants = {
      grantor?: Nullable<InformationSchema.Types.SqlIdentifier>;
      grantee?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      columnName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      privilegeType?: Nullable<InformationSchema.Types.CharacterData>;
      isGrantable?: Nullable<InformationSchema.Types.YesOrNo>;
    };
    export type RoleRoutineGrants = {
      grantor?: Nullable<InformationSchema.Types.SqlIdentifier>;
      grantee?: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      privilegeType?: Nullable<InformationSchema.Types.CharacterData>;
      isGrantable?: Nullable<InformationSchema.Types.YesOrNo>;
    };
    export type RoleTableGrants = {
      grantor?: Nullable<InformationSchema.Types.SqlIdentifier>;
      grantee?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      privilegeType?: Nullable<InformationSchema.Types.CharacterData>;
      isGrantable?: Nullable<InformationSchema.Types.YesOrNo>;
      withHierarchy?: Nullable<InformationSchema.Types.YesOrNo>;
    };
    export type RoleUdtGrants = {
      grantor?: Nullable<InformationSchema.Types.SqlIdentifier>;
      grantee?: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      privilegeType?: Nullable<InformationSchema.Types.CharacterData>;
      isGrantable?: Nullable<InformationSchema.Types.YesOrNo>;
    };
    export type RoleUsageGrants = {
      grantor?: Nullable<InformationSchema.Types.SqlIdentifier>;
      grantee?: Nullable<InformationSchema.Types.SqlIdentifier>;
      objectCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      objectSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      objectName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      objectType?: Nullable<InformationSchema.Types.CharacterData>;
      privilegeType?: Nullable<InformationSchema.Types.CharacterData>;
      isGrantable?: Nullable<InformationSchema.Types.YesOrNo>;
    };
    export type RoutineColumnUsage = {
      specificCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      columnName?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type RoutinePrivileges = {
      grantor?: Nullable<InformationSchema.Types.SqlIdentifier>;
      grantee?: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      privilegeType?: Nullable<InformationSchema.Types.CharacterData>;
      isGrantable?: Nullable<InformationSchema.Types.YesOrNo>;
    };
    export type RoutineRoutineUsage = {
      specificCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineName?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type RoutineSequenceUsage = {
      specificCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      sequenceCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      sequenceSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      sequenceName?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type RoutineTableUsage = {
      specificCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type Routines = {
      specificCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineType?: Nullable<InformationSchema.Types.CharacterData>;
      moduleCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      moduleSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      moduleName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      dataType?: Nullable<InformationSchema.Types.CharacterData>;
      characterMaximumLength?: Nullable<InformationSchema.Types.CardinalNumber>;
      characterOctetLength?: Nullable<InformationSchema.Types.CardinalNumber>;
      characterSetCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      numericPrecision?: Nullable<InformationSchema.Types.CardinalNumber>;
      numericPrecisionRadix?: Nullable<InformationSchema.Types.CardinalNumber>;
      numericScale?: Nullable<InformationSchema.Types.CardinalNumber>;
      datetimePrecision?: Nullable<InformationSchema.Types.CardinalNumber>;
      intervalType?: Nullable<InformationSchema.Types.CharacterData>;
      intervalPrecision?: Nullable<InformationSchema.Types.CardinalNumber>;
      typeUdtCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      typeUdtSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      typeUdtName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      scopeName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      maximumCardinality?: Nullable<InformationSchema.Types.CardinalNumber>;
      dtdIdentifier?: Nullable<InformationSchema.Types.SqlIdentifier>;
      routineBody?: Nullable<InformationSchema.Types.CharacterData>;
      routineDefinition?: Nullable<InformationSchema.Types.CharacterData>;
      externalName?: Nullable<InformationSchema.Types.CharacterData>;
      externalLanguage?: Nullable<InformationSchema.Types.CharacterData>;
      parameterStyle?: Nullable<InformationSchema.Types.CharacterData>;
      isDeterministic?: Nullable<InformationSchema.Types.YesOrNo>;
      sqlDataAccess?: Nullable<InformationSchema.Types.CharacterData>;
      isNullCall?: Nullable<InformationSchema.Types.YesOrNo>;
      sqlPath?: Nullable<InformationSchema.Types.CharacterData>;
      schemaLevelRoutine?: Nullable<InformationSchema.Types.YesOrNo>;
      maxDynamicResultSets?: Nullable<InformationSchema.Types.CardinalNumber>;
      isUserDefinedCast?: Nullable<InformationSchema.Types.YesOrNo>;
      isImplicitlyInvocable?: Nullable<InformationSchema.Types.YesOrNo>;
      securityType?: Nullable<InformationSchema.Types.CharacterData>;
      toSqlSpecificCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      toSqlSpecificSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      toSqlSpecificName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      asLocator?: Nullable<InformationSchema.Types.YesOrNo>;
      created?: Nullable<InformationSchema.Types.TimeStamp>;
      lastAltered?: Nullable<InformationSchema.Types.TimeStamp>;
      newSavepointLevel?: Nullable<InformationSchema.Types.YesOrNo>;
      isUdtDependent?: Nullable<InformationSchema.Types.YesOrNo>;
      resultCastFromDataType?: Nullable<InformationSchema.Types.CharacterData>;
      resultCastAsLocator?: Nullable<InformationSchema.Types.YesOrNo>;
      resultCastCharMaxLength?: Nullable<InformationSchema.Types.CardinalNumber>;
      resultCastCharOctetLength?: Nullable<InformationSchema.Types.CardinalNumber>;
      resultCastCharSetCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      resultCastCharSetSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      resultCastCharSetName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      resultCastCollationCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      resultCastCollationSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      resultCastCollationName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      resultCastNumericPrecision?: Nullable<InformationSchema.Types.CardinalNumber>;
      resultCastNumericPrecisionRadix?: Nullable<InformationSchema.Types.CardinalNumber>;
      resultCastNumericScale?: Nullable<InformationSchema.Types.CardinalNumber>;
      resultCastDatetimePrecision?: Nullable<InformationSchema.Types.CardinalNumber>;
      resultCastIntervalType?: Nullable<InformationSchema.Types.CharacterData>;
      resultCastIntervalPrecision?: Nullable<InformationSchema.Types.CardinalNumber>;
      resultCastTypeUdtCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      resultCastTypeUdtSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      resultCastTypeUdtName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      resultCastScopeCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      resultCastScopeSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      resultCastScopeName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      resultCastMaximumCardinality?: Nullable<InformationSchema.Types.CardinalNumber>;
      resultCastDtdIdentifier?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type Schemata = {
      catalogName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      schemaName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      schemaOwner?: Nullable<InformationSchema.Types.SqlIdentifier>;
      defaultCharacterSetCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      defaultCharacterSetSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      defaultCharacterSetName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      sqlPath?: Nullable<InformationSchema.Types.CharacterData>;
    };
    export type Sequences = {
      sequenceCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      sequenceSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      sequenceName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      dataType?: Nullable<InformationSchema.Types.CharacterData>;
      numericPrecision?: Nullable<InformationSchema.Types.CardinalNumber>;
      numericPrecisionRadix?: Nullable<InformationSchema.Types.CardinalNumber>;
      numericScale?: Nullable<InformationSchema.Types.CardinalNumber>;
      startValue?: Nullable<InformationSchema.Types.CharacterData>;
      minimumValue?: Nullable<InformationSchema.Types.CharacterData>;
      maximumValue?: Nullable<InformationSchema.Types.CharacterData>;
      increment?: Nullable<InformationSchema.Types.CharacterData>;
      cycleOption?: Nullable<InformationSchema.Types.YesOrNo>;
    };
    export type SqlFeatures = {
      featureId?: Nullable<InformationSchema.Types.CharacterData>;
      featureName?: Nullable<InformationSchema.Types.CharacterData>;
      subFeatureId?: Nullable<InformationSchema.Types.CharacterData>;
      subFeatureName?: Nullable<InformationSchema.Types.CharacterData>;
      isSupported?: Nullable<InformationSchema.Types.YesOrNo>;
      isVerifiedBy?: Nullable<InformationSchema.Types.CharacterData>;
      comments?: Nullable<InformationSchema.Types.CharacterData>;
    };
    export type SqlIdentifier = PgCatalog.Types.Name;
    export type SqlImplementationInfo = {
      implementationInfoId?: Nullable<InformationSchema.Types.CharacterData>;
      implementationInfoName?: Nullable<InformationSchema.Types.CharacterData>;
      integerValue?: Nullable<InformationSchema.Types.CardinalNumber>;
      characterValue?: Nullable<InformationSchema.Types.CharacterData>;
      comments?: Nullable<InformationSchema.Types.CharacterData>;
    };
    export type SqlParts = {
      featureId?: Nullable<InformationSchema.Types.CharacterData>;
      featureName?: Nullable<InformationSchema.Types.CharacterData>;
      isSupported?: Nullable<InformationSchema.Types.YesOrNo>;
      isVerifiedBy?: Nullable<InformationSchema.Types.CharacterData>;
      comments?: Nullable<InformationSchema.Types.CharacterData>;
    };
    export type SqlSizing = {
      sizingId?: Nullable<InformationSchema.Types.CardinalNumber>;
      sizingName?: Nullable<InformationSchema.Types.CharacterData>;
      supportedValue?: Nullable<InformationSchema.Types.CardinalNumber>;
      comments?: Nullable<InformationSchema.Types.CharacterData>;
    };
    export type TableConstraints = {
      constraintCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      constraintType?: Nullable<InformationSchema.Types.CharacterData>;
      isDeferrable?: Nullable<InformationSchema.Types.YesOrNo>;
      initiallyDeferred?: Nullable<InformationSchema.Types.YesOrNo>;
      enforced?: Nullable<InformationSchema.Types.YesOrNo>;
      nullsDistinct?: Nullable<InformationSchema.Types.YesOrNo>;
    };
    export type TablePrivileges = {
      grantor?: Nullable<InformationSchema.Types.SqlIdentifier>;
      grantee?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      privilegeType?: Nullable<InformationSchema.Types.CharacterData>;
      isGrantable?: Nullable<InformationSchema.Types.YesOrNo>;
      withHierarchy?: Nullable<InformationSchema.Types.YesOrNo>;
    };
    export type Tables = {
      tableCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableType?: Nullable<InformationSchema.Types.CharacterData>;
      selfReferencingColumnName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      referenceGeneration?: Nullable<InformationSchema.Types.CharacterData>;
      userDefinedTypeCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      userDefinedTypeSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      userDefinedTypeName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      isInsertableInto?: Nullable<InformationSchema.Types.YesOrNo>;
      isTyped?: Nullable<InformationSchema.Types.YesOrNo>;
      commitAction?: Nullable<InformationSchema.Types.CharacterData>;
    };
    export type TimeStamp = PgCatalog.Types.Timestamptz;
    export type Transforms = {
      udtCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      groupName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      transformType?: Nullable<InformationSchema.Types.CharacterData>;
    };
    export type TriggeredUpdateColumns = {
      triggerCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      triggerSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      triggerName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      eventObjectCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      eventObjectSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      eventObjectTable?: Nullable<InformationSchema.Types.SqlIdentifier>;
      eventObjectColumn?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type Triggers = {
      triggerCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      triggerSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      triggerName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      eventManipulation?: Nullable<InformationSchema.Types.CharacterData>;
      eventObjectCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      eventObjectSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      eventObjectTable?: Nullable<InformationSchema.Types.SqlIdentifier>;
      actionOrder?: Nullable<InformationSchema.Types.CardinalNumber>;
      actionCondition?: Nullable<InformationSchema.Types.CharacterData>;
      actionStatement?: Nullable<InformationSchema.Types.CharacterData>;
      actionOrientation?: Nullable<InformationSchema.Types.CharacterData>;
      actionTiming?: Nullable<InformationSchema.Types.CharacterData>;
      actionReferenceOldTable?: Nullable<InformationSchema.Types.SqlIdentifier>;
      actionReferenceNewTable?: Nullable<InformationSchema.Types.SqlIdentifier>;
      actionReferenceOldRow?: Nullable<InformationSchema.Types.SqlIdentifier>;
      actionReferenceNewRow?: Nullable<InformationSchema.Types.SqlIdentifier>;
      created?: Nullable<InformationSchema.Types.TimeStamp>;
    };
    export type UdtPrivileges = {
      grantor?: Nullable<InformationSchema.Types.SqlIdentifier>;
      grantee?: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      udtName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      privilegeType?: Nullable<InformationSchema.Types.CharacterData>;
      isGrantable?: Nullable<InformationSchema.Types.YesOrNo>;
    };
    export type UsagePrivileges = {
      grantor?: Nullable<InformationSchema.Types.SqlIdentifier>;
      grantee?: Nullable<InformationSchema.Types.SqlIdentifier>;
      objectCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      objectSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      objectName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      objectType?: Nullable<InformationSchema.Types.CharacterData>;
      privilegeType?: Nullable<InformationSchema.Types.CharacterData>;
      isGrantable?: Nullable<InformationSchema.Types.YesOrNo>;
    };
    export type UserDefinedTypes = {
      userDefinedTypeCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      userDefinedTypeSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      userDefinedTypeName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      userDefinedTypeCategory?: Nullable<InformationSchema.Types.CharacterData>;
      isInstantiable?: Nullable<InformationSchema.Types.YesOrNo>;
      isFinal?: Nullable<InformationSchema.Types.YesOrNo>;
      orderingForm?: Nullable<InformationSchema.Types.CharacterData>;
      orderingCategory?: Nullable<InformationSchema.Types.CharacterData>;
      orderingRoutineCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      orderingRoutineSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      orderingRoutineName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      referenceType?: Nullable<InformationSchema.Types.CharacterData>;
      dataType?: Nullable<InformationSchema.Types.CharacterData>;
      characterMaximumLength?: Nullable<InformationSchema.Types.CardinalNumber>;
      characterOctetLength?: Nullable<InformationSchema.Types.CardinalNumber>;
      characterSetCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      characterSetName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      collationName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      numericPrecision?: Nullable<InformationSchema.Types.CardinalNumber>;
      numericPrecisionRadix?: Nullable<InformationSchema.Types.CardinalNumber>;
      numericScale?: Nullable<InformationSchema.Types.CardinalNumber>;
      datetimePrecision?: Nullable<InformationSchema.Types.CardinalNumber>;
      intervalType?: Nullable<InformationSchema.Types.CharacterData>;
      intervalPrecision?: Nullable<InformationSchema.Types.CardinalNumber>;
      sourceDtdIdentifier?: Nullable<InformationSchema.Types.SqlIdentifier>;
      refDtdIdentifier?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type UserMappingOptions = {
      authorizationIdentifier?: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignServerCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignServerName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      optionName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      optionValue?: Nullable<InformationSchema.Types.CharacterData>;
    };
    export type UserMappings = {
      authorizationIdentifier?: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignServerCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      foreignServerName?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type ViewColumnUsage = {
      viewCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      viewSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      viewName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      columnName?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type ViewRoutineUsage = {
      tableCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      specificName?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type ViewTableUsage = {
      viewCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      viewSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      viewName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName?: Nullable<InformationSchema.Types.SqlIdentifier>;
    };
    export type Views = {
      tableCatalog?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableSchema?: Nullable<InformationSchema.Types.SqlIdentifier>;
      tableName?: Nullable<InformationSchema.Types.SqlIdentifier>;
      viewDefinition?: Nullable<InformationSchema.Types.CharacterData>;
      checkOption?: Nullable<InformationSchema.Types.CharacterData>;
      isUpdatable?: Nullable<InformationSchema.Types.YesOrNo>;
      isInsertableInto?: Nullable<InformationSchema.Types.YesOrNo>;
      isTriggerUpdatable?: Nullable<InformationSchema.Types.YesOrNo>;
      isTriggerDeletable?: Nullable<InformationSchema.Types.YesOrNo>;
      isTriggerInsertableInto?: Nullable<InformationSchema.Types.YesOrNo>;
    };
    export type YesOrNo = PgCatalog.Types.Varchar;
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
    export type CubeArray = Array<Public.Types.Cube>;
    export type SlugArray = Array<Public.Types.Slug>;
    export type Cube = Float32Array;
    export type Slug = { slugId?: PgCatalog.Types.Int4 };
  }
  export namespace Procedures {
    export namespace CubeIn {
      export type Arguments = {
        argument_0: PgCatalog.Types.Cstring;
      };
      export type Results = Public.Types.Cube;
    }
    export namespace Cube_9c45 {
      export type Arguments = {
        argument_0: PgCatalog.Types.Float8Array;
        argument_1: PgCatalog.Types.Float8Array;
      };
      export type Results = Public.Types.Cube;
    }
    export namespace Cube_2e6d {
      export type Arguments = {
        argument_0: PgCatalog.Types.Float8Array;
      };
      export type Results = Public.Types.Cube;
    }
    export namespace CubeOut {
      export type Arguments = {
        argument_0: Public.Types.Cube;
      };
      export type Results = PgCatalog.Types.Cstring;
    }
    export namespace CubeEq {
      export type Arguments = {
        argument_0: Public.Types.Cube;
        argument_1: Public.Types.Cube;
      };
      export type Results = PgCatalog.Types.Bool;
    }
    export namespace CubeNe {
      export type Arguments = {
        argument_0: Public.Types.Cube;
        argument_1: Public.Types.Cube;
      };
      export type Results = PgCatalog.Types.Bool;
    }
    export namespace CubeLt {
      export type Arguments = {
        argument_0: Public.Types.Cube;
        argument_1: Public.Types.Cube;
      };
      export type Results = PgCatalog.Types.Bool;
    }
    export namespace CubeGt {
      export type Arguments = {
        argument_0: Public.Types.Cube;
        argument_1: Public.Types.Cube;
      };
      export type Results = PgCatalog.Types.Bool;
    }
    export namespace CubeLe {
      export type Arguments = {
        argument_0: Public.Types.Cube;
        argument_1: Public.Types.Cube;
      };
      export type Results = PgCatalog.Types.Bool;
    }
    export namespace CubeGe {
      export type Arguments = {
        argument_0: Public.Types.Cube;
        argument_1: Public.Types.Cube;
      };
      export type Results = PgCatalog.Types.Bool;
    }
    export namespace CubeCmp {
      export type Arguments = {
        argument_0: Public.Types.Cube;
        argument_1: Public.Types.Cube;
      };
      export type Results = PgCatalog.Types.Int4;
    }
    export namespace CubeContains {
      export type Arguments = {
        argument_0: Public.Types.Cube;
        argument_1: Public.Types.Cube;
      };
      export type Results = PgCatalog.Types.Bool;
    }
    export namespace CubeContained {
      export type Arguments = {
        argument_0: Public.Types.Cube;
        argument_1: Public.Types.Cube;
      };
      export type Results = PgCatalog.Types.Bool;
    }
    export namespace CubeOverlap {
      export type Arguments = {
        argument_0: Public.Types.Cube;
        argument_1: Public.Types.Cube;
      };
      export type Results = PgCatalog.Types.Bool;
    }
    export namespace CubeUnion {
      export type Arguments = {
        argument_0: Public.Types.Cube;
        argument_1: Public.Types.Cube;
      };
      export type Results = Public.Types.Cube;
    }
    export namespace CubeInter {
      export type Arguments = {
        argument_0: Public.Types.Cube;
        argument_1: Public.Types.Cube;
      };
      export type Results = Public.Types.Cube;
    }
    export namespace CubeSize {
      export type Arguments = {
        argument_0: Public.Types.Cube;
      };
      export type Results = PgCatalog.Types.Float8;
    }
    export namespace CubeSubset {
      export type Arguments = {
        argument_0: Public.Types.Cube;
        argument_1: PgCatalog.Types.Int4Array;
      };
      export type Results = Public.Types.Cube;
    }
    export namespace CubeDistance {
      export type Arguments = {
        argument_0: Public.Types.Cube;
        argument_1: Public.Types.Cube;
      };
      export type Results = PgCatalog.Types.Float8;
    }
    export namespace DistanceChebyshev {
      export type Arguments = {
        argument_0: Public.Types.Cube;
        argument_1: Public.Types.Cube;
      };
      export type Results = PgCatalog.Types.Float8;
    }
    export namespace DistanceTaxicab {
      export type Arguments = {
        argument_0: Public.Types.Cube;
        argument_1: Public.Types.Cube;
      };
      export type Results = PgCatalog.Types.Float8;
    }
    export namespace CubeDim {
      export type Arguments = {
        argument_0: Public.Types.Cube;
      };
      export type Results = PgCatalog.Types.Int4;
    }
    export namespace CubeLlCoord {
      export type Arguments = {
        argument_0: Public.Types.Cube;
        argument_1: PgCatalog.Types.Int4;
      };
      export type Results = PgCatalog.Types.Float8;
    }
    export namespace CubeUrCoord {
      export type Arguments = {
        argument_0: Public.Types.Cube;
        argument_1: PgCatalog.Types.Int4;
      };
      export type Results = PgCatalog.Types.Float8;
    }
    export namespace CubeCoord {
      export type Arguments = {
        argument_0: Public.Types.Cube;
        argument_1: PgCatalog.Types.Int4;
      };
      export type Results = PgCatalog.Types.Float8;
    }
    export namespace CubeCoordLlur {
      export type Arguments = {
        argument_0: Public.Types.Cube;
        argument_1: PgCatalog.Types.Int4;
      };
      export type Results = PgCatalog.Types.Float8;
    }
    export namespace CubeA5b3 {
      export type Arguments = {
        argument_0: PgCatalog.Types.Float8;
      };
      export type Results = Public.Types.Cube;
    }
    export namespace Cube_0aec {
      export type Arguments = {
        argument_0: PgCatalog.Types.Float8;
        argument_1: PgCatalog.Types.Float8;
      };
      export type Results = Public.Types.Cube;
    }
    export namespace Cube_39d2 {
      export type Arguments = {
        argument_0: Public.Types.Cube;
        argument_1: PgCatalog.Types.Float8;
      };
      export type Results = Public.Types.Cube;
    }
    export namespace CubeA7eb {
      export type Arguments = {
        argument_0: Public.Types.Cube;
        argument_1: PgCatalog.Types.Float8;
        argument_2: PgCatalog.Types.Float8;
      };
      export type Results = Public.Types.Cube;
    }
    export namespace CubeIsPoint {
      export type Arguments = {
        argument_0: Public.Types.Cube;
      };
      export type Results = PgCatalog.Types.Bool;
    }
    export namespace CubeEnlarge {
      export type Arguments = {
        argument_0: Public.Types.Cube;
        argument_1: PgCatalog.Types.Float8;
        argument_2: PgCatalog.Types.Int4;
      };
      export type Results = Public.Types.Cube;
    }
    export namespace GCubeConsistent {
      export type Arguments = {
        argument_0: PgCatalog.Types.Internal;
        argument_1: Public.Types.Cube;
        argument_2: PgCatalog.Types.Int2;
        argument_3: PgCatalog.Types.Oid;
        argument_4: PgCatalog.Types.Internal;
      };
      export type Results = PgCatalog.Types.Bool;
    }
    export namespace GCubePenalty {
      export type Arguments = {
        argument_0: PgCatalog.Types.Internal;
        argument_1: PgCatalog.Types.Internal;
        argument_2: PgCatalog.Types.Internal;
      };
      export type Results = PgCatalog.Types.Internal;
    }
    export namespace GCubePicksplit {
      export type Arguments = {
        argument_0: PgCatalog.Types.Internal;
        argument_1: PgCatalog.Types.Internal;
      };
      export type Results = PgCatalog.Types.Internal;
    }
    export namespace GCubeUnion {
      export type Arguments = {
        argument_0: PgCatalog.Types.Internal;
        argument_1: PgCatalog.Types.Internal;
      };
      export type Results = Public.Types.Cube;
    }
    export namespace GCubeSame {
      export type Arguments = {
        argument_0: Public.Types.Cube;
        argument_1: Public.Types.Cube;
        argument_2: PgCatalog.Types.Internal;
      };
      export type Results = PgCatalog.Types.Internal;
    }
    export namespace GCubeDistance {
      export type Arguments = {
        argument_0: PgCatalog.Types.Internal;
        argument_1: Public.Types.Cube;
        argument_2: PgCatalog.Types.Int2;
        argument_3: PgCatalog.Types.Oid;
        argument_4: PgCatalog.Types.Internal;
      };
      export type Results = PgCatalog.Types.Float8;
    }
    export namespace CubeRecv {
      export type Arguments = {
        argument_0: PgCatalog.Types.Internal;
      };
      export type Results = Public.Types.Cube;
    }
    export namespace CubeSend {
      export type Arguments = {
        argument_0: Public.Types.Cube;
      };
      export type Results = PgCatalog.Types.Bytea;
    }
  }
  export namespace Tables {
    export namespace Slug {
      export type BySlugId = {
        slugId: PgCatalog.Types.Int4;
      };
    }
  }
}
export namespace Api {
  export namespace Types {
    export type EchoTypeArray = Array<Api.Types.EchoType>;
    export type EchoTypeNestedArray = Array<Api.Types.EchoTypeNested>;
    export type EchoType = {
      echomessage?: Nullable<PgCatalog.Types.Text>;
      at?: Nullable<PgCatalog.Types.Timestamptz>;
    };
    export type EchoTypeNested = { echoes?: Nullable<Api.Types.EchoTypeArray> };
    export type EchoTableResults = {
      echomessage: PgCatalog.Types.Text;
      at: PgCatalog.Types.Timestamptz;
    };
  }
  export namespace Procedures {
    export namespace Echo {
      export type Arguments = {
        message: PgCatalog.Types.Text;
      };
      export type Results = PgCatalog.Types.Text;
    }
    export namespace EchoSet {
      export type Arguments = {
        message: PgCatalog.Types.Text;
      };
      export type Results = PgCatalog.Types.Text;
    }
    export namespace EchoTable {
      export type Arguments = {
        message: PgCatalog.Types.Text;
      };
      export type Results = Api.Types.EchoTableResults;
    }
    export namespace EchoType {
      export type Arguments = {
        message: PgCatalog.Types.Text;
      };
      export type Results = Api.Types.EchoType;
    }
    export namespace EchoTypeArray {
      export type Arguments = {
        message: PgCatalog.Types.Text;
      };
      export type Results = Api.Types.EchoTypeArray;
    }
    export namespace EchoTypeNested {
      export type Arguments = {
        message: PgCatalog.Types.Text;
      };
      export type Results = Api.Types.EchoTypeNested;
    }
    export namespace EchoTypeSet {
      export type Arguments = {
        message: PgCatalog.Types.Text;
      };
      export type Results = Api.Types.EchoType;
    }
  }
  export namespace Tables {}
}

// begin string parsers
export namespace PgCatalog {
  export namespace Types {
    export namespace AclitemArray {
      export function parse(from: string | null) {
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
          return Oid.parse(
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
          return AdministrableRoleAuthorizations.parse(
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
          return ApplicableRoles.parse(
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
          return Attributes.parse(
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
          return CardinalNumber.parse(
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
          return CharacterData.parse(
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
          return CharacterSets.parse(
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
          return CheckConstraintRoutineUsage.parse(
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
          return CheckConstraints.parse(
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
          return CollationCharacterSetApplicability.parse(
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
          return Collations.parse(
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
          return ColumnColumnUsage.parse(
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
          return ColumnDomainUsage.parse(
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
          return ColumnOptions.parse(
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
          return ColumnPrivileges.parse(
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
          return ColumnUdtUsage.parse(
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
          return Columns.parse(
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
          return ConstraintColumnUsage.parse(
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
          return ConstraintTableUsage.parse(
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
          return DataTypePrivileges.parse(
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
          return DomainConstraints.parse(
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
          return DomainUdtUsage.parse(
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
          return Domains.parse(
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
          return ElementTypes.parse(
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
          return EnabledRoles.parse(
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
          return ForeignDataWrapperOptions.parse(
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
          return ForeignDataWrappers.parse(
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
          return ForeignServerOptions.parse(
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
          return ForeignServers.parse(
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
          return ForeignTableOptions.parse(
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
          return ForeignTables.parse(
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
          return InformationSchemaCatalogName.parse(
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
          return KeyColumnUsage.parse(
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
          return Parameters.parse(
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
          return ReferentialConstraints.parse(
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
          return RoleColumnGrants.parse(
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
          return RoleRoutineGrants.parse(
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
          return RoleTableGrants.parse(
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
          return RoleUdtGrants.parse(
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
          return RoleUsageGrants.parse(
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
          return RoutineColumnUsage.parse(
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
          return RoutinePrivileges.parse(
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
          return RoutineRoutineUsage.parse(
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
          return RoutineSequenceUsage.parse(
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
          return RoutineTableUsage.parse(
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
          return Routines.parse(
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
          return Schemata.parse(
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
          return Sequences.parse(
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
          return SqlFeatures.parse(
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
          return SqlIdentifier.parse(
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
          return SqlImplementationInfo.parse(
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
          return SqlParts.parse(
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
          return SqlSizing.parse(
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
          return TableConstraints.parse(
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
          return TablePrivileges.parse(
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
          return Tables.parse(
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
          return TimeStamp.parse(
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
          return Transforms.parse(
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
          return TriggeredUpdateColumns.parse(
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
          return Triggers.parse(
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
          return UdtPrivileges.parse(
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
          return UsagePrivileges.parse(
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
          return UserDefinedTypes.parse(
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
          return UserMappingOptions.parse(
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
          return UserMappings.parse(
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
          return ViewColumnUsage.parse(
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
          return ViewRoutineUsage.parse(
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
          return ViewTableUsage.parse(
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
          return Views.parse(
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
          return YesOrNo.parse(
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
          return Cube.parse(
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
          return Slug.parse(
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
          return EchoType.parse(
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
          return EchoTypeNested.parse(
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
    export namespace Slug {
      export namespace SlugId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
    }
  }
}
export namespace Api {
  export namespace Tables {}
}

// begin primary key pickers
export namespace Public {
  export namespace Tables {
    export namespace Slug {
      export function primaryKeyFrom(value: Public.Tables.Slug.Record): string {
        return JSON.stringify({
          slugId: value.slugId,
        });
      }

      export function includesPrimaryKey(value: Partial<Public.Types.Slug>) {
        return value.slugId !== undefined;
      }
    }
  }
}
export namespace Api {
  export namespace Tables {}
}

// begin table type aliases
export namespace PgCatalog {
  export namespace Tables {
    export namespace PgStatistic {
      export type Record = Required<PgCatalog.Types.PgStatistic>;
    }
    export namespace PgType {
      export type Record = Required<PgCatalog.Types.PgType>;
    }
    export namespace PgForeignTable {
      export type Record = Required<PgCatalog.Types.PgForeignTable>;
    }
    export namespace PgAuthid {
      export type Record = Required<PgCatalog.Types.PgAuthid>;
    }
    export namespace PgStatisticExtData {
      export type Record = Required<PgCatalog.Types.PgStatisticExtData>;
    }
    export namespace PgUserMapping {
      export type Record = Required<PgCatalog.Types.PgUserMapping>;
    }
    export namespace PgSubscription {
      export type Record = Required<PgCatalog.Types.PgSubscription>;
    }
    export namespace PgAttribute {
      export type Record = Required<PgCatalog.Types.PgAttribute>;
    }
    export namespace PgProc {
      export type Record = Required<PgCatalog.Types.PgProc>;
    }
    export namespace PgClass {
      export type Record = Required<PgCatalog.Types.PgClass>;
    }
    export namespace PgAttrdef {
      export type Record = Required<PgCatalog.Types.PgAttrdef>;
    }
    export namespace PgConstraint {
      export type Record = Required<PgCatalog.Types.PgConstraint>;
    }
    export namespace PgInherits {
      export type Record = Required<PgCatalog.Types.PgInherits>;
    }
    export namespace PgIndex {
      export type Record = Required<PgCatalog.Types.PgIndex>;
    }
    export namespace PgOperator {
      export type Record = Required<PgCatalog.Types.PgOperator>;
    }
    export namespace PgOpfamily {
      export type Record = Required<PgCatalog.Types.PgOpfamily>;
    }
    export namespace PgOpclass {
      export type Record = Required<PgCatalog.Types.PgOpclass>;
    }
    export namespace PgAm {
      export type Record = Required<PgCatalog.Types.PgAm>;
    }
    export namespace PgAmop {
      export type Record = Required<PgCatalog.Types.PgAmop>;
    }
    export namespace PgAmproc {
      export type Record = Required<PgCatalog.Types.PgAmproc>;
    }
    export namespace PgLanguage {
      export type Record = Required<PgCatalog.Types.PgLanguage>;
    }
    export namespace PgLargeobjectMetadata {
      export type Record = Required<PgCatalog.Types.PgLargeobjectMetadata>;
    }
    export namespace PgAggregate {
      export type Record = Required<PgCatalog.Types.PgAggregate>;
    }
    export namespace PgStatisticExt {
      export type Record = Required<PgCatalog.Types.PgStatisticExt>;
    }
    export namespace PgRewrite {
      export type Record = Required<PgCatalog.Types.PgRewrite>;
    }
    export namespace PgTrigger {
      export type Record = Required<PgCatalog.Types.PgTrigger>;
    }
    export namespace PgEventTrigger {
      export type Record = Required<PgCatalog.Types.PgEventTrigger>;
    }
    export namespace PgDescription {
      export type Record = Required<PgCatalog.Types.PgDescription>;
    }
    export namespace PgCast {
      export type Record = Required<PgCatalog.Types.PgCast>;
    }
    export namespace PgEnum {
      export type Record = Required<PgCatalog.Types.PgEnum>;
    }
    export namespace PgNamespace {
      export type Record = Required<PgCatalog.Types.PgNamespace>;
    }
    export namespace PgConversion {
      export type Record = Required<PgCatalog.Types.PgConversion>;
    }
    export namespace PgDepend {
      export type Record = Required<PgCatalog.Types.PgDepend>;
    }
    export namespace PgDatabase {
      export type Record = Required<PgCatalog.Types.PgDatabase>;
    }
    export namespace PgDbRoleSetting {
      export type Record = Required<PgCatalog.Types.PgDbRoleSetting>;
    }
    export namespace PgTablespace {
      export type Record = Required<PgCatalog.Types.PgTablespace>;
    }
    export namespace PgAuthMembers {
      export type Record = Required<PgCatalog.Types.PgAuthMembers>;
    }
    export namespace PgShdepend {
      export type Record = Required<PgCatalog.Types.PgShdepend>;
    }
    export namespace PgShdescription {
      export type Record = Required<PgCatalog.Types.PgShdescription>;
    }
    export namespace PgTsConfig {
      export type Record = Required<PgCatalog.Types.PgTsConfig>;
    }
    export namespace PgTsConfigMap {
      export type Record = Required<PgCatalog.Types.PgTsConfigMap>;
    }
    export namespace PgTsDict {
      export type Record = Required<PgCatalog.Types.PgTsDict>;
    }
    export namespace PgTsParser {
      export type Record = Required<PgCatalog.Types.PgTsParser>;
    }
    export namespace PgTsTemplate {
      export type Record = Required<PgCatalog.Types.PgTsTemplate>;
    }
    export namespace PgExtension {
      export type Record = Required<PgCatalog.Types.PgExtension>;
    }
    export namespace PgForeignDataWrapper {
      export type Record = Required<PgCatalog.Types.PgForeignDataWrapper>;
    }
    export namespace PgForeignServer {
      export type Record = Required<PgCatalog.Types.PgForeignServer>;
    }
    export namespace PgPolicy {
      export type Record = Required<PgCatalog.Types.PgPolicy>;
    }
    export namespace PgReplicationOrigin {
      export type Record = Required<PgCatalog.Types.PgReplicationOrigin>;
    }
    export namespace PgDefaultAcl {
      export type Record = Required<PgCatalog.Types.PgDefaultAcl>;
    }
    export namespace PgInitPrivs {
      export type Record = Required<PgCatalog.Types.PgInitPrivs>;
    }
    export namespace PgSeclabel {
      export type Record = Required<PgCatalog.Types.PgSeclabel>;
    }
    export namespace PgShseclabel {
      export type Record = Required<PgCatalog.Types.PgShseclabel>;
    }
    export namespace PgCollation {
      export type Record = Required<PgCatalog.Types.PgCollation>;
    }
    export namespace PgParameterAcl {
      export type Record = Required<PgCatalog.Types.PgParameterAcl>;
    }
    export namespace PgPartitionedTable {
      export type Record = Required<PgCatalog.Types.PgPartitionedTable>;
    }
    export namespace PgRange {
      export type Record = Required<PgCatalog.Types.PgRange>;
    }
    export namespace PgTransform {
      export type Record = Required<PgCatalog.Types.PgTransform>;
    }
    export namespace PgSequence {
      export type Record = Required<PgCatalog.Types.PgSequence>;
    }
    export namespace PgPublication {
      export type Record = Required<PgCatalog.Types.PgPublication>;
    }
    export namespace PgPublicationNamespace {
      export type Record = Required<PgCatalog.Types.PgPublicationNamespace>;
    }
    export namespace PgPublicationRel {
      export type Record = Required<PgCatalog.Types.PgPublicationRel>;
    }
    export namespace PgSubscriptionRel {
      export type Record = Required<PgCatalog.Types.PgSubscriptionRel>;
    }
    export namespace PgLargeobject {
      export type Record = Required<PgCatalog.Types.PgLargeobject>;
    }
  }
}
export namespace InformationSchema {
  export namespace Tables {
    export namespace SqlFeatures {
      export type Record = Required<InformationSchema.Types.SqlFeatures>;
    }
    export namespace SqlImplementationInfo {
      export type Record =
        Required<InformationSchema.Types.SqlImplementationInfo>;
    }
    export namespace SqlParts {
      export type Record = Required<InformationSchema.Types.SqlParts>;
    }
    export namespace SqlSizing {
      export type Record = Required<InformationSchema.Types.SqlSizing>;
    }
  }
}
export namespace Public {
  export namespace Tables {
    export namespace Slug {
      export type Record = Required<Public.Types.Slug>;
    }
  }
}
export namespace Api {
  export namespace Tables {}
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

interface HasDatabase {
  database: Database;
}

export class Database extends PostgresDatabase {
  /**
   * Connect to your database server via URL, and return
   * a fully typed database you can use to access it.
   */
  static async connect(postgresUrl: string, props?: postgres.Options<never>) {
    return new Database(await initializeContext(postgresUrl, props));
  }

  public Public = new (class implements HasDatabase {
    constructor(public database: Database) {}

    async CubeIn(parameters: Public.Procedures.CubeIn.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube_in( ${typed.pg_catalog_cstring(
                    undefinedIsNull(parameters.argument_0),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0].cube_in as unknown as Public.Types.Cube;
      return responseBody;
    }
    async Cube_9c45(parameters: Public.Procedures.Cube_9c45.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube( ${typed.pg_catalog__float8(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.pg_catalog__float8(
                    undefinedIsNull(parameters.argument_1),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0].cube as unknown as Public.Types.Cube;
      return responseBody;
    }
    async Cube_2e6d(parameters: Public.Procedures.Cube_2e6d.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube( ${typed.pg_catalog__float8(
                    undefinedIsNull(parameters.argument_0),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0].cube as unknown as Public.Types.Cube;
      return responseBody;
    }
    async CubeOut(parameters: Public.Procedures.CubeOut.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube_out( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .cube_out as unknown as PgCatalog.Types.Cstring;
      return responseBody;
    }
    async CubeEq(parameters: Public.Procedures.CubeEq.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube_eq( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.public_cube(
                    undefinedIsNull(parameters.argument_1),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .cube_eq as unknown as PgCatalog.Types.Bool;
      return responseBody;
    }
    async CubeNe(parameters: Public.Procedures.CubeNe.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube_ne( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.public_cube(
                    undefinedIsNull(parameters.argument_1),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .cube_ne as unknown as PgCatalog.Types.Bool;
      return responseBody;
    }
    async CubeLt(parameters: Public.Procedures.CubeLt.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube_lt( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.public_cube(
                    undefinedIsNull(parameters.argument_1),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .cube_lt as unknown as PgCatalog.Types.Bool;
      return responseBody;
    }
    async CubeGt(parameters: Public.Procedures.CubeGt.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube_gt( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.public_cube(
                    undefinedIsNull(parameters.argument_1),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .cube_gt as unknown as PgCatalog.Types.Bool;
      return responseBody;
    }
    async CubeLe(parameters: Public.Procedures.CubeLe.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube_le( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.public_cube(
                    undefinedIsNull(parameters.argument_1),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .cube_le as unknown as PgCatalog.Types.Bool;
      return responseBody;
    }
    async CubeGe(parameters: Public.Procedures.CubeGe.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube_ge( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.public_cube(
                    undefinedIsNull(parameters.argument_1),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .cube_ge as unknown as PgCatalog.Types.Bool;
      return responseBody;
    }
    async CubeCmp(parameters: Public.Procedures.CubeCmp.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube_cmp( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.public_cube(
                    undefinedIsNull(parameters.argument_1),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .cube_cmp as unknown as PgCatalog.Types.Int4;
      return responseBody;
    }
    async CubeContains(parameters: Public.Procedures.CubeContains.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube_contains( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.public_cube(
                    undefinedIsNull(parameters.argument_1),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .cube_contains as unknown as PgCatalog.Types.Bool;
      return responseBody;
    }
    async CubeContained(parameters: Public.Procedures.CubeContained.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube_contained( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.public_cube(
                    undefinedIsNull(parameters.argument_1),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .cube_contained as unknown as PgCatalog.Types.Bool;
      return responseBody;
    }
    async CubeOverlap(parameters: Public.Procedures.CubeOverlap.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube_overlap( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.public_cube(
                    undefinedIsNull(parameters.argument_1),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .cube_overlap as unknown as PgCatalog.Types.Bool;
      return responseBody;
    }
    async CubeUnion(parameters: Public.Procedures.CubeUnion.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube_union( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.public_cube(
                    undefinedIsNull(parameters.argument_1),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .cube_union as unknown as Public.Types.Cube;
      return responseBody;
    }
    async CubeInter(parameters: Public.Procedures.CubeInter.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube_inter( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.public_cube(
                    undefinedIsNull(parameters.argument_1),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .cube_inter as unknown as Public.Types.Cube;
      return responseBody;
    }
    async CubeSize(parameters: Public.Procedures.CubeSize.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube_size( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .cube_size as unknown as PgCatalog.Types.Float8;
      return responseBody;
    }
    async CubeSubset(parameters: Public.Procedures.CubeSubset.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube_subset( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.pg_catalog__int4(
                    undefinedIsNull(parameters.argument_1),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .cube_subset as unknown as Public.Types.Cube;
      return responseBody;
    }
    async CubeDistance(parameters: Public.Procedures.CubeDistance.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube_distance( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.public_cube(
                    undefinedIsNull(parameters.argument_1),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .cube_distance as unknown as PgCatalog.Types.Float8;
      return responseBody;
    }
    async DistanceChebyshev(
      parameters: Public.Procedures.DistanceChebyshev.Arguments,
    ) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.distance_chebyshev( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.public_cube(
                    undefinedIsNull(parameters.argument_1),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .distance_chebyshev as unknown as PgCatalog.Types.Float8;
      return responseBody;
    }
    async DistanceTaxicab(
      parameters: Public.Procedures.DistanceTaxicab.Arguments,
    ) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.distance_taxicab( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.public_cube(
                    undefinedIsNull(parameters.argument_1),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .distance_taxicab as unknown as PgCatalog.Types.Float8;
      return responseBody;
    }
    async CubeDim(parameters: Public.Procedures.CubeDim.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube_dim( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .cube_dim as unknown as PgCatalog.Types.Int4;
      return responseBody;
    }
    async CubeLlCoord(parameters: Public.Procedures.CubeLlCoord.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube_ll_coord( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.pg_catalog_int4(
                    undefinedIsNull(parameters.argument_1),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .cube_ll_coord as unknown as PgCatalog.Types.Float8;
      return responseBody;
    }
    async CubeUrCoord(parameters: Public.Procedures.CubeUrCoord.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube_ur_coord( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.pg_catalog_int4(
                    undefinedIsNull(parameters.argument_1),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .cube_ur_coord as unknown as PgCatalog.Types.Float8;
      return responseBody;
    }
    async CubeCoord(parameters: Public.Procedures.CubeCoord.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube_coord( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.pg_catalog_int4(
                    undefinedIsNull(parameters.argument_1),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .cube_coord as unknown as PgCatalog.Types.Float8;
      return responseBody;
    }
    async CubeCoordLlur(parameters: Public.Procedures.CubeCoordLlur.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube_coord_llur( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.pg_catalog_int4(
                    undefinedIsNull(parameters.argument_1),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .cube_coord_llur as unknown as PgCatalog.Types.Float8;
      return responseBody;
    }
    async CubeA5b3(parameters: Public.Procedures.CubeA5b3.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube( ${typed.pg_catalog_float8(
                    undefinedIsNull(parameters.argument_0),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0].cube as unknown as Public.Types.Cube;
      return responseBody;
    }
    async Cube_0aec(parameters: Public.Procedures.Cube_0aec.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube( ${typed.pg_catalog_float8(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.pg_catalog_float8(
                    undefinedIsNull(parameters.argument_1),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0].cube as unknown as Public.Types.Cube;
      return responseBody;
    }
    async Cube_39d2(parameters: Public.Procedures.Cube_39d2.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.pg_catalog_float8(
                    undefinedIsNull(parameters.argument_1),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0].cube as unknown as Public.Types.Cube;
      return responseBody;
    }
    async CubeA7eb(parameters: Public.Procedures.CubeA7eb.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.pg_catalog_float8(
                    undefinedIsNull(parameters.argument_1),
                  )}, ${typed.pg_catalog_float8(
                    undefinedIsNull(parameters.argument_2),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0].cube as unknown as Public.Types.Cube;
      return responseBody;
    }
    async CubeIsPoint(parameters: Public.Procedures.CubeIsPoint.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube_is_point( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .cube_is_point as unknown as PgCatalog.Types.Bool;
      return responseBody;
    }
    async CubeEnlarge(parameters: Public.Procedures.CubeEnlarge.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube_enlarge( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.pg_catalog_float8(
                    undefinedIsNull(parameters.argument_1),
                  )}, ${typed.pg_catalog_int4(
                    undefinedIsNull(parameters.argument_2),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .cube_enlarge as unknown as Public.Types.Cube;
      return responseBody;
    }
    async GCubeConsistent(
      parameters: Public.Procedures.GCubeConsistent.Arguments,
    ) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.g_cube_consistent( ${typed.pg_catalog_internal(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.public_cube(
                    undefinedIsNull(parameters.argument_1),
                  )}, ${typed.pg_catalog_int2(
                    undefinedIsNull(parameters.argument_2),
                  )}, ${typed.pg_catalog_oid(
                    undefinedIsNull(parameters.argument_3),
                  )}, ${typed.pg_catalog_internal(
                    undefinedIsNull(parameters.argument_4),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .g_cube_consistent as unknown as PgCatalog.Types.Bool;
      return responseBody;
    }
    async GCubePenalty(parameters: Public.Procedures.GCubePenalty.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.g_cube_penalty( ${typed.pg_catalog_internal(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.pg_catalog_internal(
                    undefinedIsNull(parameters.argument_1),
                  )}, ${typed.pg_catalog_internal(
                    undefinedIsNull(parameters.argument_2),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .g_cube_penalty as unknown as PgCatalog.Types.Internal;
      return responseBody;
    }
    async GCubePicksplit(
      parameters: Public.Procedures.GCubePicksplit.Arguments,
    ) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.g_cube_picksplit( ${typed.pg_catalog_internal(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.pg_catalog_internal(
                    undefinedIsNull(parameters.argument_1),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .g_cube_picksplit as unknown as PgCatalog.Types.Internal;
      return responseBody;
    }
    async GCubeUnion(parameters: Public.Procedures.GCubeUnion.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.g_cube_union( ${typed.pg_catalog_internal(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.pg_catalog_internal(
                    undefinedIsNull(parameters.argument_1),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .g_cube_union as unknown as Public.Types.Cube;
      return responseBody;
    }
    async GCubeSame(parameters: Public.Procedures.GCubeSame.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.g_cube_same( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.public_cube(
                    undefinedIsNull(parameters.argument_1),
                  )}, ${typed.pg_catalog_internal(
                    undefinedIsNull(parameters.argument_2),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .g_cube_same as unknown as PgCatalog.Types.Internal;
      return responseBody;
    }
    async GCubeDistance(parameters: Public.Procedures.GCubeDistance.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.g_cube_distance( ${typed.pg_catalog_internal(
                    undefinedIsNull(parameters.argument_0),
                  )}, ${typed.public_cube(
                    undefinedIsNull(parameters.argument_1),
                  )}, ${typed.pg_catalog_int2(
                    undefinedIsNull(parameters.argument_2),
                  )}, ${typed.pg_catalog_oid(
                    undefinedIsNull(parameters.argument_3),
                  )}, ${typed.pg_catalog_internal(
                    undefinedIsNull(parameters.argument_4),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .g_cube_distance as unknown as PgCatalog.Types.Float8;
      return responseBody;
    }
    async CubeRecv(parameters: Public.Procedures.CubeRecv.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube_recv( ${typed.pg_catalog_internal(
                    undefinedIsNull(parameters.argument_0),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .cube_recv as unknown as Public.Types.Cube;
      return responseBody;
    }
    async CubeSend(parameters: Public.Procedures.CubeSend.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.cube_send( ${typed.public_cube(
                    undefinedIsNull(parameters.argument_0),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .cube_send as unknown as PgCatalog.Types.Bytea;
      return responseBody;
    }

    public Slug = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async bySlugId(
        parameters: Public.Tables.Slug.BySlugId,
      ): Promise<Public.Tables.Slug.Record> {
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
      ): Promise<Public.Tables.Slug.Record> {
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
        values: Partial<Public.Tables.Slug.Record>,
      ): Promise<Public.Tables.Slug.Record> {
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
        values: Public.Types.Slug,
      ): Promise<Public.Tables.Slug.Record> {
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        if (Public.Tables.Slug.includesPrimaryKey(values)) {
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

    async Echo(parameters: Api.Procedures.Echo.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  api.echo(message => ${typed.pg_catalog_text(
                    undefinedIsNull(parameters.message),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0].echo as unknown as PgCatalog.Types.Text;
      return responseBody;
    }
    async EchoSet(parameters: Api.Procedures.EchoSet.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  api.echo_set(message => ${typed.pg_catalog_text(
                    undefinedIsNull(parameters.message),
                  )});
                  `;
      const results = response;
      const responseBody = results.map(
        (x) => x.echo_set,
      ) as unknown as PgCatalog.Types.Text[];
      return responseBody;
    }
    async EchoTable(parameters: Api.Procedures.EchoTable.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  api.echo_table(message => ${typed.pg_catalog_text(
                    undefinedIsNull(parameters.message),
                  )});
                  `;
      const results = response;
      const responseBody = results.map((x) =>
        this.parseEchoTableResult(this.database.context, x.echo_table),
      ) as unknown as Api.Types.EchoTableResults[];
      return responseBody;
    }

    parseEchoTableResult = (
      context: Context,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      result: any,
    ) => {
      return context.procTypes.api_echo_table.parseFromPostgresIfRecord(
        context,
        result,
      ) as unknown as Api.Types.EchoTableResults;
    };

    async EchoType(parameters: Api.Procedures.EchoType.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  api.echo_type(message => ${typed.pg_catalog_text(
                    undefinedIsNull(parameters.message),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .echo_type as unknown as Api.Types.EchoType;
      return responseBody;
    }
    async EchoTypeArray(parameters: Api.Procedures.EchoTypeArray.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  api.echo_type_array(message => ${typed.pg_catalog_text(
                    undefinedIsNull(parameters.message),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .echo_type_array as unknown as Api.Types.EchoTypeArray;
      return responseBody;
    }
    async EchoTypeNested(parameters: Api.Procedures.EchoTypeNested.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  api.echo_type_nested(message => ${typed.pg_catalog_text(
                    undefinedIsNull(parameters.message),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .echo_type_nested as unknown as Api.Types.EchoTypeNested;
      return responseBody;
    }
    async EchoTypeSet(parameters: Api.Procedures.EchoTypeSet.Arguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  api.echo_type_set(message => ${typed.pg_catalog_text(
                    undefinedIsNull(parameters.message),
                  )});
                  `;
      const results = response;
      const responseBody = results.map(
        (x) => x.echo_type_set,
      ) as unknown as Api.Types.EchoType[];
      return responseBody;
    }
  })(this);
}

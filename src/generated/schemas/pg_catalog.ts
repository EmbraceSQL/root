/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  UUID,
  JsDate,
  JSONValue,
  JSONObject,
  Empty,
  Nullable,
} from "../../types";
import { RequestMessage, ResponseMessage, JSONTypecastMap } from "../../client";

import * as pg_catalog from "./pg_catalog";
import * as public from "./public";
import * as information_schema from "./information_schema";

export type AclitemArray = Array<pg_catalog.Aclitem>;

export type BitArray = Array<pg_catalog.Bit>;

export type BoolArray = Array<pg_catalog.Bool>;

export type BoxArray = Array<pg_catalog.Box>;

export type BpcharArray = Array<pg_catalog.Bpchar>;

export type ByteaArray = Array<pg_catalog.Bytea>;

export type CharArray = Array<pg_catalog.Char>;

export type CidArray = Array<pg_catalog.Cid>;

export type CidrArray = Array<pg_catalog.Cidr>;

export type CircleArray = Array<pg_catalog.Circle>;

export type CstringArray = Array<pg_catalog.Cstring>;

export type DateArray = Array<pg_catalog.Date>;

export type DatemultirangeArray = Array<pg_catalog.Datemultirange>;

export type DaterangeArray = Array<pg_catalog.Daterange>;

export type Float4Array = Array<pg_catalog.Float4>;

export type Float8Array = Array<pg_catalog.Float8>;

export type GtsvectorArray = Array<pg_catalog.Gtsvector>;

export type InetArray = Array<pg_catalog.Inet>;

export type Int2Array = Array<pg_catalog.Int2>;

export type Int2vectorArray = Array<pg_catalog.Int2vector>;

export type Int4Array = Array<pg_catalog.Int4>;

export type Int4multirangeArray = Array<pg_catalog.Int4multirange>;

export type Int4rangeArray = Array<pg_catalog.Int4range>;

export type Int8Array = Array<pg_catalog.Int8>;

export type Int8multirangeArray = Array<pg_catalog.Int8multirange>;

export type Int8rangeArray = Array<pg_catalog.Int8range>;

export type IntervalArray = Array<pg_catalog.Interval>;

export type JsonArray = Array<pg_catalog.Json>;

export type JsonbArray = Array<pg_catalog.Jsonb>;

export type JsonpathArray = Array<pg_catalog.Jsonpath>;

export type LineArray = Array<pg_catalog.Line>;

export type LsegArray = Array<pg_catalog.Lseg>;

export type MacaddrArray = Array<pg_catalog.Macaddr>;

export type Macaddr8Array = Array<pg_catalog.Macaddr8>;

export type MoneyArray = Array<pg_catalog.Money>;

export type NameArray = Array<pg_catalog.Name>;

export type NumericArray = Array<pg_catalog.Numeric>;

export type NummultirangeArray = Array<pg_catalog.Nummultirange>;

export type NumrangeArray = Array<pg_catalog.Numrange>;

export type OidArray = Array<pg_catalog.Oid>;

export type OidvectorArray = Array<pg_catalog.Oidvector>;

export type PathArray = Array<pg_catalog.Path>;

export type PgAggregateArray = Array<void>;

export type PgAmArray = Array<void>;

export type PgAmopArray = Array<void>;

export type PgAmprocArray = Array<void>;

export type PgAttrdefArray = Array<void>;

export type PgAttributeArray = Array<void>;

export type PgAuthMembersArray = Array<void>;

export type PgAuthidArray = Array<void>;

export type PgAvailableExtensionVersionsArray = Array<void>;

export type PgAvailableExtensionsArray = Array<void>;

export type PgBackendMemoryContextsArray = Array<void>;

export type PgCastArray = Array<void>;

export type PgClassArray = Array<void>;

export type PgCollationArray = Array<void>;

export type PgConfigArray = Array<void>;

export type PgConstraintArray = Array<void>;

export type PgConversionArray = Array<void>;

export type PgCursorsArray = Array<void>;

export type PgDatabaseArray = Array<void>;

export type PgDbRoleSettingArray = Array<void>;

export type PgDefaultAclArray = Array<void>;

export type PgDependArray = Array<void>;

export type PgDescriptionArray = Array<void>;

export type PgEnumArray = Array<void>;

export type PgEventTriggerArray = Array<void>;

export type PgExtensionArray = Array<void>;

export type PgFileSettingsArray = Array<void>;

export type PgForeignDataWrapperArray = Array<void>;

export type PgForeignServerArray = Array<void>;

export type PgForeignTableArray = Array<void>;

export type PgGroupArray = Array<void>;

export type PgHbaFileRulesArray = Array<void>;

export type PgIdentFileMappingsArray = Array<void>;

export type PgIndexArray = Array<void>;

export type PgIndexesArray = Array<void>;

export type PgInheritsArray = Array<void>;

export type PgInitPrivsArray = Array<void>;

export type PgLanguageArray = Array<void>;

export type PgLargeobjectArray = Array<void>;

export type PgLargeobjectMetadataArray = Array<void>;

export type PgLocksArray = Array<void>;

export type PgLsnArray = Array<void>;

export type PgMatviewsArray = Array<void>;

export type PgNamespaceArray = Array<void>;

export type PgOpclassArray = Array<void>;

export type PgOperatorArray = Array<void>;

export type PgOpfamilyArray = Array<void>;

export type PgParameterAclArray = Array<void>;

export type PgPartitionedTableArray = Array<void>;

export type PgPoliciesArray = Array<void>;

export type PgPolicyArray = Array<void>;

export type PgPreparedStatementsArray = Array<void>;

export type PgPreparedXactsArray = Array<void>;

export type PgProcArray = Array<void>;

export type PgPublicationArray = Array<void>;

export type PgPublicationNamespaceArray = Array<void>;

export type PgPublicationRelArray = Array<void>;

export type PgPublicationTablesArray = Array<void>;

export type PgRangeArray = Array<void>;

export type PgReplicationOriginArray = Array<void>;

export type PgReplicationOriginStatusArray = Array<void>;

export type PgReplicationSlotsArray = Array<void>;

export type PgRewriteArray = Array<void>;

export type PgRolesArray = Array<void>;

export type PgRulesArray = Array<void>;

export type PgSeclabelArray = Array<void>;

export type PgSeclabelsArray = Array<void>;

export type PgSequenceArray = Array<void>;

export type PgSequencesArray = Array<void>;

export type PgSettingsArray = Array<void>;

export type PgShadowArray = Array<void>;

export type PgShdependArray = Array<void>;

export type PgShdescriptionArray = Array<void>;

export type PgShmemAllocationsArray = Array<void>;

export type PgShseclabelArray = Array<void>;

export type PgSnapshotArray = Array<void>;

export type PgStatActivityArray = Array<void>;

export type PgStatAllIndexesArray = Array<void>;

export type PgStatAllTablesArray = Array<void>;

export type PgStatArchiverArray = Array<void>;

export type PgStatBgwriterArray = Array<void>;

export type PgStatDatabaseArray = Array<void>;

export type PgStatDatabaseConflictsArray = Array<void>;

export type PgStatGssapiArray = Array<void>;

export type PgStatIoArray = Array<void>;

export type PgStatProgressAnalyzeArray = Array<void>;

export type PgStatProgressBasebackupArray = Array<void>;

export type PgStatProgressClusterArray = Array<void>;

export type PgStatProgressCopyArray = Array<void>;

export type PgStatProgressCreateIndexArray = Array<void>;

export type PgStatProgressVacuumArray = Array<void>;

export type PgStatRecoveryPrefetchArray = Array<void>;

export type PgStatReplicationArray = Array<void>;

export type PgStatReplicationSlotsArray = Array<void>;

export type PgStatSlruArray = Array<void>;

export type PgStatSslArray = Array<void>;

export type PgStatSubscriptionArray = Array<void>;

export type PgStatSubscriptionStatsArray = Array<void>;

export type PgStatSysIndexesArray = Array<void>;

export type PgStatSysTablesArray = Array<void>;

export type PgStatUserFunctionsArray = Array<void>;

export type PgStatUserIndexesArray = Array<void>;

export type PgStatUserTablesArray = Array<void>;

export type PgStatWalArray = Array<void>;

export type PgStatWalReceiverArray = Array<void>;

export type PgStatXactAllTablesArray = Array<void>;

export type PgStatXactSysTablesArray = Array<void>;

export type PgStatXactUserFunctionsArray = Array<void>;

export type PgStatXactUserTablesArray = Array<void>;

export type PgStatioAllIndexesArray = Array<void>;

export type PgStatioAllSequencesArray = Array<void>;

export type PgStatioAllTablesArray = Array<void>;

export type PgStatioSysIndexesArray = Array<void>;

export type PgStatioSysSequencesArray = Array<void>;

export type PgStatioSysTablesArray = Array<void>;

export type PgStatioUserIndexesArray = Array<void>;

export type PgStatioUserSequencesArray = Array<void>;

export type PgStatioUserTablesArray = Array<void>;

export type PgStatisticArray = Array<void>;

export type PgStatisticExtArray = Array<void>;

export type PgStatisticExtDataArray = Array<void>;

export type PgStatsArray = Array<void>;

export type PgStatsExtArray = Array<void>;

export type PgStatsExtExprsArray = Array<void>;

export type PgSubscriptionArray = Array<void>;

export type PgSubscriptionRelArray = Array<void>;

export type PgTablesArray = Array<void>;

export type PgTablespaceArray = Array<void>;

export type PgTimezoneAbbrevsArray = Array<void>;

export type PgTimezoneNamesArray = Array<void>;

export type PgTransformArray = Array<void>;

export type PgTriggerArray = Array<void>;

export type PgTsConfigArray = Array<void>;

export type PgTsConfigMapArray = Array<void>;

export type PgTsDictArray = Array<void>;

export type PgTsParserArray = Array<void>;

export type PgTsTemplateArray = Array<void>;

export type PgTypeArray = Array<void>;

export type PgUserArray = Array<void>;

export type PgUserMappingArray = Array<void>;

export type PgUserMappingsArray = Array<void>;

export type PgViewsArray = Array<void>;

export type PointArray = Array<pg_catalog.Point>;

export type PolygonArray = Array<pg_catalog.Polygon>;

export type RecordArray = Array<pg_catalog.Record>;

export type RefcursorArray = Array<pg_catalog.Refcursor>;

export type RegclassArray = Array<pg_catalog.Regclass>;

export type RegcollationArray = Array<pg_catalog.Regcollation>;

export type RegconfigArray = Array<pg_catalog.Regconfig>;

export type RegdictionaryArray = Array<pg_catalog.Regdictionary>;

export type RegnamespaceArray = Array<pg_catalog.Regnamespace>;

export type RegoperArray = Array<pg_catalog.Regoper>;

export type RegoperatorArray = Array<pg_catalog.Regoperator>;

export type RegprocArray = Array<pg_catalog.Regproc>;

export type RegprocedureArray = Array<pg_catalog.Regprocedure>;

export type RegroleArray = Array<pg_catalog.Regrole>;

export type RegtypeArray = Array<pg_catalog.Regtype>;

export type TextArray = Array<pg_catalog.Text>;

export type TidArray = Array<pg_catalog.Tid>;

export type TimeArray = Array<pg_catalog.Time>;

export type TimestampArray = Array<pg_catalog.Timestamp>;

export type TimestamptzArray = Array<pg_catalog.Timestamptz>;

export type TimetzArray = Array<pg_catalog.Timetz>;

export type TsmultirangeArray = Array<pg_catalog.Tsmultirange>;

export type TsqueryArray = Array<pg_catalog.Tsquery>;

export type TsrangeArray = Array<pg_catalog.Tsrange>;

export type TstzmultirangeArray = Array<pg_catalog.Tstzmultirange>;

export type TstzrangeArray = Array<pg_catalog.Tstzrange>;

export type TsvectorArray = Array<pg_catalog.Tsvector>;

export type TxidSnapshotArray = Array<pg_catalog.TxidSnapshot>;

export type UuidArray = Array<pg_catalog.Uuid>;

export type VarbitArray = Array<pg_catalog.Varbit>;

export type VarcharArray = Array<pg_catalog.Varchar>;

export type XidArray = Array<pg_catalog.Xid>;

export type Xid8Array = Array<pg_catalog.Xid8>;

export type XmlArray = Array<pg_catalog.Xml>;

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

export type Daterange = [pg_catalog.Date, pg_catalog.Date];

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

export type Int4range = [pg_catalog.Int4, pg_catalog.Int4];

export type Int8 = number;

export type Int8multirange = void;

export type Int8range = [pg_catalog.Int8, pg_catalog.Int8];

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

export type Numrange = [pg_catalog.Numeric, pg_catalog.Numeric];

export type Oid = number;

export type Oidvector = Array<number>;

export type Path = Array<Point>;

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

export type Tsrange = [pg_catalog.Timestamp, pg_catalog.Timestamp];

export type Tstzmultirange = void;

export type Tstzrange = [pg_catalog.Timestamptz, pg_catalog.Timestamptz];

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

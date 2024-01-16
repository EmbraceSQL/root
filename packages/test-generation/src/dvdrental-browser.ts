
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
        import {UUID, JsDate, JSONValue, JSONObject, Empty, Nullable, NullableMembers, undefinedIsNull, nullIsUndefined, NEVER} from "@embracesql/shared";
        import type { PartiallyOptional, ReadOptions, Sort } from "@embracesql/shared";

    
export namespace PgCatalog {
export namespace Types {

export type Bool = boolean;

export type Bytea = Uint8Array;

export type Char = string;

export type Name = string;

export type Int8 = number;

export type Int2 = number;

export type Int2vector = Uint16Array;

export type Int4 = number;

export type Regproc = number;

export type Text = string;

export type Oid = number;

export type Tid = 
    {
      blockNumber: number;
      tupleIndex: number;
    }
    ;

export type Xid = number;

export type Cid = number;

export type Oidvector = 
     Array<PgCatalog.Types.Oid>
    ;

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
}

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
}

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
}

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
}

export type Json = JSONObject;

export type Xml = string;

/**
 * FIXME: pg_node_tree did not resolve to a base type
 */
export type PgNodeTree = string;

/**
 * FIXME: pg_ndistinct did not resolve to a base type
 */
export type PgNdistinct = string;

/**
 * FIXME: pg_dependencies did not resolve to a base type
 */
export type PgDependencies = string;

/**
 * FIXME: pg_mcv_list did not resolve to a base type
 */
export type PgMcvList = string;

export type PgDdlCommand = unknown;

export type Xid8 = number;

export type Point = 
     {
      x: number;
      y: number;
    }
    ;

export type Lseg = 
     {
      from: Point;
      to: Point;
    }
    ;

export type Path = Array<Point>;

export type Box = 
    {
      upperRight: Point;
      lowerLeft: Point;
    }
    ;

export type Polygon = Array<Point>;

export type Line = 
    {
      a: number;
      b: number;
      c: number;
    }
    ;

export type Float4 = number;

export type Float8 = number;

export type Unknown = unknown;

export type Circle = 
    {
      center: Point;
      radius: number;
    }
    ;

export type Money = number;

export type Macaddr = Uint8Array;

export type Inet = string;

export type Cidr = Uint8Array;

export type Macaddr8 = Uint8Array;

export type Aclitem = string;

export type Bpchar = string;

export type Varchar = string;

export type Date = JsDate;

export type Time = JsDate;

export type Timestamp = JsDate;

export type Timestamptz = JsDate;

export type Interval = number;

export type Timetz = JsDate;

export type Bit = boolean;

export type Varbit = boolean;

export type Numeric = number;

export type Refcursor = string;

export type Regprocedure = number;

export type Regoper = number;

export type Regoperator = number;

export type Regclass = number;

export type Regcollation = number;

export type Regtype = number;

export type Regrole = number;

export type Regnamespace = number;

export type Uuid = UUID;

export type PgLsn = bigint;

export type Tsvector = string;

export type Gtsvector = Array<string>;

export type Tsquery = string;

export type Regconfig = number;

export type Regdictionary = number;

export type Jsonb = JSONObject;

export type Jsonpath = string;

/**
 * FIXME: txid_snapshot did not resolve to a base type
 */
export type TxidSnapshot = string;

/**
 * FIXME: pg_snapshot did not resolve to a base type
 */
export type PgSnapshot = string;

export type Int4range = [PgCatalog.Types.Int4, PgCatalog.Types.Int4];

export type Numrange = [PgCatalog.Types.Numeric, PgCatalog.Types.Numeric];

export type Tsrange = [PgCatalog.Types.Timestamp, PgCatalog.Types.Timestamp];

export type Tstzrange = [PgCatalog.Types.Timestamptz, PgCatalog.Types.Timestamptz];

export type Daterange = [PgCatalog.Types.Date, PgCatalog.Types.Date];

export type Int8range = [PgCatalog.Types.Int8, PgCatalog.Types.Int8];

export type Int4multirange = unknown;

export type Nummultirange = unknown;

export type Tsmultirange = unknown;

export type Tstzmultirange = unknown;

export type Datemultirange = unknown;

export type Int8multirange = unknown;

export type Record = unknown;

export type RecordArray = 
     Array<PgCatalog.Types.Record>
    ;

export type Cstring = unknown;

export type Any = unknown;

export type Anyarray = unknown;

export type Void = unknown;

export type Trigger = unknown;

export type EventTrigger = unknown;

export type LanguageHandler = unknown;

export type Internal = unknown;

export type Anyelement = unknown;

export type Anynonarray = unknown;

export type Anyenum = unknown;

export type FdwHandler = unknown;

export type IndexAmHandler = unknown;

export type TsmHandler = unknown;

export type TableAmHandler = unknown;

export type Anyrange = unknown;

export type Anycompatible = unknown;

export type Anycompatiblearray = unknown;

export type Anycompatiblenonarray = unknown;

export type Anycompatiblerange = unknown;

export type Anymultirange = unknown;

export type Anycompatiblemultirange = unknown;

/**
 * FIXME: pg_brin_bloom_summary did not resolve to a base type
 */
export type PgBrinBloomSummary = string;

/**
 * FIXME: pg_brin_minmax_multi_summary did not resolve to a base type
 */
export type PgBrinMinmaxMultiSummary = string;

export type BoolArray = 
     Array<PgCatalog.Types.Bool>
    ;

export type ByteaArray = 
     Array<PgCatalog.Types.Bytea>
    ;

export type CharArray = 
     Array<PgCatalog.Types.Char>
    ;

export type NameArray = 
     Array<PgCatalog.Types.Name>
    ;

export type Int8Array = 
     Array<PgCatalog.Types.Int8>
    ;

export type Int2Array = 
     Array<PgCatalog.Types.Int2>
    ;

export type Int2vectorArray = 
     Array<PgCatalog.Types.Int2vector>
    ;

export type Int4Array = 
     Array<PgCatalog.Types.Int4>
    ;

export type RegprocArray = 
     Array<PgCatalog.Types.Regproc>
    ;

export type TextArray = 
     Array<PgCatalog.Types.Text>
    ;

export type OidArray = 
     Array<PgCatalog.Types.Oid>
    ;

export type TidArray = 
     Array<PgCatalog.Types.Tid>
    ;

export type XidArray = 
     Array<PgCatalog.Types.Xid>
    ;

export type CidArray = 
     Array<PgCatalog.Types.Cid>
    ;

export type OidvectorArray = 
     Array<PgCatalog.Types.Oidvector>
    ;

export type PgTypeArray = 
     Array<PgCatalog.Types.PgType>
    ;

export type PgAttributeArray = 
     Array<PgCatalog.Types.PgAttribute>
    ;

export type PgProcArray = 
     Array<PgCatalog.Types.PgProc>
    ;

export type PgClassArray = 
     Array<PgCatalog.Types.PgClass>
    ;

export type JsonArray = 
     Array<PgCatalog.Types.Json>
    ;

export type XmlArray = 
     Array<PgCatalog.Types.Xml>
    ;

export type Xid8Array = 
     Array<PgCatalog.Types.Xid8>
    ;

export type PointArray = 
     Array<PgCatalog.Types.Point>
    ;

export type LsegArray = 
     Array<PgCatalog.Types.Lseg>
    ;

export type PathArray = 
     Array<PgCatalog.Types.Path>
    ;

export type BoxArray = 
     Array<PgCatalog.Types.Box>
    ;

export type PolygonArray = 
     Array<PgCatalog.Types.Polygon>
    ;

export type LineArray = 
     Array<PgCatalog.Types.Line>
    ;

export type Float4Array = 
     Array<PgCatalog.Types.Float4>
    ;

export type Float8Array = 
     Array<PgCatalog.Types.Float8>
    ;

export type CircleArray = 
     Array<PgCatalog.Types.Circle>
    ;

export type MoneyArray = 
     Array<PgCatalog.Types.Money>
    ;

export type MacaddrArray = 
     Array<PgCatalog.Types.Macaddr>
    ;

export type InetArray = 
     Array<PgCatalog.Types.Inet>
    ;

export type CidrArray = 
     Array<PgCatalog.Types.Cidr>
    ;

export type Macaddr8Array = 
     Array<PgCatalog.Types.Macaddr8>
    ;

export type AclitemArray = 
     Array<PgCatalog.Types.Aclitem>
    ;

export type BpcharArray = 
     Array<PgCatalog.Types.Bpchar>
    ;

export type VarcharArray = 
     Array<PgCatalog.Types.Varchar>
    ;

export type DateArray = 
     Array<PgCatalog.Types.Date>
    ;

export type TimeArray = 
     Array<PgCatalog.Types.Time>
    ;

export type TimestampArray = 
     Array<PgCatalog.Types.Timestamp>
    ;

export type TimestamptzArray = 
     Array<PgCatalog.Types.Timestamptz>
    ;

export type IntervalArray = 
     Array<PgCatalog.Types.Interval>
    ;

export type TimetzArray = 
     Array<PgCatalog.Types.Timetz>
    ;

export type BitArray = 
     Array<PgCatalog.Types.Bit>
    ;

export type VarbitArray = 
     Array<PgCatalog.Types.Varbit>
    ;

export type NumericArray = 
     Array<PgCatalog.Types.Numeric>
    ;

export type RefcursorArray = 
     Array<PgCatalog.Types.Refcursor>
    ;

export type RegprocedureArray = 
     Array<PgCatalog.Types.Regprocedure>
    ;

export type RegoperArray = 
     Array<PgCatalog.Types.Regoper>
    ;

export type RegoperatorArray = 
     Array<PgCatalog.Types.Regoperator>
    ;

export type RegclassArray = 
     Array<PgCatalog.Types.Regclass>
    ;

export type RegcollationArray = 
     Array<PgCatalog.Types.Regcollation>
    ;

export type RegtypeArray = 
     Array<PgCatalog.Types.Regtype>
    ;

export type RegroleArray = 
     Array<PgCatalog.Types.Regrole>
    ;

export type RegnamespaceArray = 
     Array<PgCatalog.Types.Regnamespace>
    ;

export type UuidArray = 
     Array<PgCatalog.Types.Uuid>
    ;

export type PgLsnArray = 
     Array<PgCatalog.Types.PgLsn>
    ;

export type TsvectorArray = 
     Array<PgCatalog.Types.Tsvector>
    ;

export type GtsvectorArray = 
     Array<PgCatalog.Types.Gtsvector>
    ;

export type TsqueryArray = 
     Array<PgCatalog.Types.Tsquery>
    ;

export type RegconfigArray = 
     Array<PgCatalog.Types.Regconfig>
    ;

export type RegdictionaryArray = 
     Array<PgCatalog.Types.Regdictionary>
    ;

export type JsonbArray = 
     Array<PgCatalog.Types.Jsonb>
    ;

export type JsonpathArray = 
     Array<PgCatalog.Types.Jsonpath>
    ;

export type TxidSnapshotArray = 
     Array<PgCatalog.Types.TxidSnapshot>
    ;

export type PgSnapshotArray = 
     Array<PgCatalog.Types.PgSnapshot>
    ;

export type Int4rangeArray = 
     Array<PgCatalog.Types.Int4range>
    ;

export type NumrangeArray = 
     Array<PgCatalog.Types.Numrange>
    ;

export type TsrangeArray = 
     Array<PgCatalog.Types.Tsrange>
    ;

export type TstzrangeArray = 
     Array<PgCatalog.Types.Tstzrange>
    ;

export type DaterangeArray = 
     Array<PgCatalog.Types.Daterange>
    ;

export type Int8rangeArray = 
     Array<PgCatalog.Types.Int8range>
    ;

export type Int4multirangeArray = 
     Array<PgCatalog.Types.Int4multirange>
    ;

export type NummultirangeArray = 
     Array<PgCatalog.Types.Nummultirange>
    ;

export type TsmultirangeArray = 
     Array<PgCatalog.Types.Tsmultirange>
    ;

export type TstzmultirangeArray = 
     Array<PgCatalog.Types.Tstzmultirange>
    ;

export type DatemultirangeArray = 
     Array<PgCatalog.Types.Datemultirange>
    ;

export type Int8multirangeArray = 
     Array<PgCatalog.Types.Int8multirange>
    ;

export type CstringArray = 
     Array<PgCatalog.Types.Cstring>
    ;

export type PgAttrdef = {
oid: PgCatalog.Types.Oid;
adrelid: PgCatalog.Types.Oid;
adnum: PgCatalog.Types.Int2;
adbin: PgCatalog.Types.PgNodeTree;
}

export type PgAttrdefArray = 
     Array<PgCatalog.Types.PgAttrdef>
    ;

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
}

export type PgConstraintArray = 
     Array<PgCatalog.Types.PgConstraint>
    ;

export type PgInherits = {
inhrelid: PgCatalog.Types.Oid;
inhparent: PgCatalog.Types.Oid;
inhseqno: PgCatalog.Types.Int4;
inhdetachpending: PgCatalog.Types.Bool;
}

export type PgInheritsArray = 
     Array<PgCatalog.Types.PgInherits>
    ;

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
}

export type PgIndexArray = 
     Array<PgCatalog.Types.PgIndex>
    ;

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
}

export type PgOperatorArray = 
     Array<PgCatalog.Types.PgOperator>
    ;

export type PgOpfamily = {
oid: PgCatalog.Types.Oid;
opfmethod: PgCatalog.Types.Oid;
opfname: PgCatalog.Types.Name;
opfnamespace: PgCatalog.Types.Oid;
opfowner: PgCatalog.Types.Oid;
}

export type PgOpfamilyArray = 
     Array<PgCatalog.Types.PgOpfamily>
    ;

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
}

export type PgOpclassArray = 
     Array<PgCatalog.Types.PgOpclass>
    ;

export type PgAm = {
oid: PgCatalog.Types.Oid;
amname: PgCatalog.Types.Name;
amhandler: PgCatalog.Types.Regproc;
amtype: PgCatalog.Types.Char;
}

export type PgAmArray = 
     Array<PgCatalog.Types.PgAm>
    ;

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
}

export type PgAmopArray = 
     Array<PgCatalog.Types.PgAmop>
    ;

export type PgAmproc = {
oid: PgCatalog.Types.Oid;
amprocfamily: PgCatalog.Types.Oid;
amproclefttype: PgCatalog.Types.Oid;
amprocrighttype: PgCatalog.Types.Oid;
amprocnum: PgCatalog.Types.Int2;
amproc: PgCatalog.Types.Regproc;
}

export type PgAmprocArray = 
     Array<PgCatalog.Types.PgAmproc>
    ;

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
}

export type PgLanguageArray = 
     Array<PgCatalog.Types.PgLanguage>
    ;

export type PgLargeobjectMetadata = {
oid: PgCatalog.Types.Oid;
lomowner: PgCatalog.Types.Oid;
lomacl: PgCatalog.Types.AclitemArray;
}

export type PgLargeobjectMetadataArray = 
     Array<PgCatalog.Types.PgLargeobjectMetadata>
    ;

export type PgLargeobject = {
loid: PgCatalog.Types.Oid;
pageno: PgCatalog.Types.Int4;
data: PgCatalog.Types.Bytea;
}

export type PgLargeobjectArray = 
     Array<PgCatalog.Types.PgLargeobject>
    ;

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
}

export type PgAggregateArray = 
     Array<PgCatalog.Types.PgAggregate>
    ;

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
}

export type PgStatisticArray = 
     Array<PgCatalog.Types.PgStatistic>
    ;

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
}

export type PgStatisticExtArray = 
     Array<PgCatalog.Types.PgStatisticExt>
    ;

export type PgStatisticExtData = {
stxoid: PgCatalog.Types.Oid;
stxdinherit: PgCatalog.Types.Bool;
stxdndistinct: Nullable<PgCatalog.Types.PgNdistinct>;
stxddependencies: Nullable<PgCatalog.Types.PgDependencies>;
stxdmcv: Nullable<PgCatalog.Types.PgMcvList>;
stxdexpr: PgCatalog.Types.PgStatisticArray;
}

export type PgStatisticExtDataArray = 
     Array<PgCatalog.Types.PgStatisticExtData>
    ;

export type PgRewrite = {
oid: PgCatalog.Types.Oid;
rulename: PgCatalog.Types.Name;
evClass: PgCatalog.Types.Oid;
evType: PgCatalog.Types.Char;
evEnabled: PgCatalog.Types.Char;
isInstead: PgCatalog.Types.Bool;
evQual: PgCatalog.Types.PgNodeTree;
evAction: PgCatalog.Types.PgNodeTree;
}

export type PgRewriteArray = 
     Array<PgCatalog.Types.PgRewrite>
    ;

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
}

export type PgTriggerArray = 
     Array<PgCatalog.Types.PgTrigger>
    ;

export type PgEventTrigger = {
oid: PgCatalog.Types.Oid;
evtname: PgCatalog.Types.Name;
evtevent: PgCatalog.Types.Name;
evtowner: PgCatalog.Types.Oid;
evtfoid: PgCatalog.Types.Oid;
evtenabled: PgCatalog.Types.Char;
evttags: PgCatalog.Types.TextArray;
}

export type PgEventTriggerArray = 
     Array<PgCatalog.Types.PgEventTrigger>
    ;

export type PgDescription = {
objoid: PgCatalog.Types.Oid;
classoid: PgCatalog.Types.Oid;
objsubid: PgCatalog.Types.Int4;
description: PgCatalog.Types.Text;
}

export type PgDescriptionArray = 
     Array<PgCatalog.Types.PgDescription>
    ;

export type PgCast = {
oid: PgCatalog.Types.Oid;
castsource: PgCatalog.Types.Oid;
casttarget: PgCatalog.Types.Oid;
castfunc: PgCatalog.Types.Oid;
castcontext: PgCatalog.Types.Char;
castmethod: PgCatalog.Types.Char;
}

export type PgCastArray = 
     Array<PgCatalog.Types.PgCast>
    ;

export type PgEnum = {
oid: PgCatalog.Types.Oid;
enumtypid: PgCatalog.Types.Oid;
enumsortorder: PgCatalog.Types.Float4;
enumlabel: PgCatalog.Types.Name;
}

export type PgEnumArray = 
     Array<PgCatalog.Types.PgEnum>
    ;

export type PgNamespace = {
oid: PgCatalog.Types.Oid;
nspname: PgCatalog.Types.Name;
nspowner: PgCatalog.Types.Oid;
nspacl: PgCatalog.Types.AclitemArray;
}

export type PgNamespaceArray = 
     Array<PgCatalog.Types.PgNamespace>
    ;

export type PgConversion = {
oid: PgCatalog.Types.Oid;
conname: PgCatalog.Types.Name;
connamespace: PgCatalog.Types.Oid;
conowner: PgCatalog.Types.Oid;
conforencoding: PgCatalog.Types.Int4;
contoencoding: PgCatalog.Types.Int4;
conproc: PgCatalog.Types.Regproc;
condefault: PgCatalog.Types.Bool;
}

export type PgConversionArray = 
     Array<PgCatalog.Types.PgConversion>
    ;

export type PgDepend = {
classid: PgCatalog.Types.Oid;
objid: PgCatalog.Types.Oid;
objsubid: PgCatalog.Types.Int4;
refclassid: PgCatalog.Types.Oid;
refobjid: PgCatalog.Types.Oid;
refobjsubid: PgCatalog.Types.Int4;
deptype: PgCatalog.Types.Char;
}

export type PgDependArray = 
     Array<PgCatalog.Types.PgDepend>
    ;

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
}

export type PgDatabaseArray = 
     Array<PgCatalog.Types.PgDatabase>
    ;

export type PgDbRoleSetting = {
setdatabase: PgCatalog.Types.Oid;
setrole: PgCatalog.Types.Oid;
setconfig: PgCatalog.Types.TextArray;
}

export type PgDbRoleSettingArray = 
     Array<PgCatalog.Types.PgDbRoleSetting>
    ;

export type PgTablespace = {
oid: PgCatalog.Types.Oid;
spcname: PgCatalog.Types.Name;
spcowner: PgCatalog.Types.Oid;
spcacl: PgCatalog.Types.AclitemArray;
spcoptions: PgCatalog.Types.TextArray;
}

export type PgTablespaceArray = 
     Array<PgCatalog.Types.PgTablespace>
    ;

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
}

export type PgAuthidArray = 
     Array<PgCatalog.Types.PgAuthid>
    ;

export type PgAuthMembers = {
oid: PgCatalog.Types.Oid;
roleid: PgCatalog.Types.Oid;
member: PgCatalog.Types.Oid;
grantor: PgCatalog.Types.Oid;
adminOption: PgCatalog.Types.Bool;
inheritOption: PgCatalog.Types.Bool;
setOption: PgCatalog.Types.Bool;
}

export type PgAuthMembersArray = 
     Array<PgCatalog.Types.PgAuthMembers>
    ;

export type PgShdepend = {
dbid: PgCatalog.Types.Oid;
classid: PgCatalog.Types.Oid;
objid: PgCatalog.Types.Oid;
objsubid: PgCatalog.Types.Int4;
refclassid: PgCatalog.Types.Oid;
refobjid: PgCatalog.Types.Oid;
deptype: PgCatalog.Types.Char;
}

export type PgShdependArray = 
     Array<PgCatalog.Types.PgShdepend>
    ;

export type PgShdescription = {
objoid: PgCatalog.Types.Oid;
classoid: PgCatalog.Types.Oid;
description: PgCatalog.Types.Text;
}

export type PgShdescriptionArray = 
     Array<PgCatalog.Types.PgShdescription>
    ;

export type PgTsConfig = {
oid: PgCatalog.Types.Oid;
cfgname: PgCatalog.Types.Name;
cfgnamespace: PgCatalog.Types.Oid;
cfgowner: PgCatalog.Types.Oid;
cfgparser: PgCatalog.Types.Oid;
}

export type PgTsConfigArray = 
     Array<PgCatalog.Types.PgTsConfig>
    ;

export type PgTsConfigMap = {
mapcfg: PgCatalog.Types.Oid;
maptokentype: PgCatalog.Types.Int4;
mapseqno: PgCatalog.Types.Int4;
mapdict: PgCatalog.Types.Oid;
}

export type PgTsConfigMapArray = 
     Array<PgCatalog.Types.PgTsConfigMap>
    ;

export type PgTsDict = {
oid: PgCatalog.Types.Oid;
dictname: PgCatalog.Types.Name;
dictnamespace: PgCatalog.Types.Oid;
dictowner: PgCatalog.Types.Oid;
dicttemplate: PgCatalog.Types.Oid;
dictinitoption: Nullable<PgCatalog.Types.Text>;
}

export type PgTsDictArray = 
     Array<PgCatalog.Types.PgTsDict>
    ;

export type PgTsParser = {
oid: PgCatalog.Types.Oid;
prsname: PgCatalog.Types.Name;
prsnamespace: PgCatalog.Types.Oid;
prsstart: PgCatalog.Types.Regproc;
prstoken: PgCatalog.Types.Regproc;
prsend: PgCatalog.Types.Regproc;
prsheadline: PgCatalog.Types.Regproc;
prslextype: PgCatalog.Types.Regproc;
}

export type PgTsParserArray = 
     Array<PgCatalog.Types.PgTsParser>
    ;

export type PgTsTemplate = {
oid: PgCatalog.Types.Oid;
tmplname: PgCatalog.Types.Name;
tmplnamespace: PgCatalog.Types.Oid;
tmplinit: PgCatalog.Types.Regproc;
tmpllexize: PgCatalog.Types.Regproc;
}

export type PgTsTemplateArray = 
     Array<PgCatalog.Types.PgTsTemplate>
    ;

export type PgExtension = {
oid: PgCatalog.Types.Oid;
extname: PgCatalog.Types.Name;
extowner: PgCatalog.Types.Oid;
extnamespace: PgCatalog.Types.Oid;
extrelocatable: PgCatalog.Types.Bool;
extversion: PgCatalog.Types.Text;
extconfig: PgCatalog.Types.OidArray;
extcondition: PgCatalog.Types.TextArray;
}

export type PgExtensionArray = 
     Array<PgCatalog.Types.PgExtension>
    ;

export type PgForeignDataWrapper = {
oid: PgCatalog.Types.Oid;
fdwname: PgCatalog.Types.Name;
fdwowner: PgCatalog.Types.Oid;
fdwhandler: PgCatalog.Types.Oid;
fdwvalidator: PgCatalog.Types.Oid;
fdwacl: PgCatalog.Types.AclitemArray;
fdwoptions: PgCatalog.Types.TextArray;
}

export type PgForeignDataWrapperArray = 
     Array<PgCatalog.Types.PgForeignDataWrapper>
    ;

export type PgForeignServer = {
oid: PgCatalog.Types.Oid;
srvname: PgCatalog.Types.Name;
srvowner: PgCatalog.Types.Oid;
srvfdw: PgCatalog.Types.Oid;
srvtype: Nullable<PgCatalog.Types.Text>;
srvversion: Nullable<PgCatalog.Types.Text>;
srvacl: PgCatalog.Types.AclitemArray;
srvoptions: PgCatalog.Types.TextArray;
}

export type PgForeignServerArray = 
     Array<PgCatalog.Types.PgForeignServer>
    ;

export type PgUserMapping = {
oid: PgCatalog.Types.Oid;
umuser: PgCatalog.Types.Oid;
umserver: PgCatalog.Types.Oid;
umoptions: PgCatalog.Types.TextArray;
}

export type PgUserMappingArray = 
     Array<PgCatalog.Types.PgUserMapping>
    ;

export type PgForeignTable = {
ftrelid: PgCatalog.Types.Oid;
ftserver: PgCatalog.Types.Oid;
ftoptions: PgCatalog.Types.TextArray;
}

export type PgForeignTableArray = 
     Array<PgCatalog.Types.PgForeignTable>
    ;

export type PgPolicy = {
oid: PgCatalog.Types.Oid;
polname: PgCatalog.Types.Name;
polrelid: PgCatalog.Types.Oid;
polcmd: PgCatalog.Types.Char;
polpermissive: PgCatalog.Types.Bool;
polroles: PgCatalog.Types.OidArray;
polqual: Nullable<PgCatalog.Types.PgNodeTree>;
polwithcheck: Nullable<PgCatalog.Types.PgNodeTree>;
}

export type PgPolicyArray = 
     Array<PgCatalog.Types.PgPolicy>
    ;

export type PgReplicationOrigin = {
roident: PgCatalog.Types.Oid;
roname: PgCatalog.Types.Text;
}

export type PgReplicationOriginArray = 
     Array<PgCatalog.Types.PgReplicationOrigin>
    ;

export type PgDefaultAcl = {
oid: PgCatalog.Types.Oid;
defaclrole: PgCatalog.Types.Oid;
defaclnamespace: PgCatalog.Types.Oid;
defaclobjtype: PgCatalog.Types.Char;
defaclacl: PgCatalog.Types.AclitemArray;
}

export type PgDefaultAclArray = 
     Array<PgCatalog.Types.PgDefaultAcl>
    ;

export type PgInitPrivs = {
objoid: PgCatalog.Types.Oid;
classoid: PgCatalog.Types.Oid;
objsubid: PgCatalog.Types.Int4;
privtype: PgCatalog.Types.Char;
initprivs: PgCatalog.Types.AclitemArray;
}

export type PgInitPrivsArray = 
     Array<PgCatalog.Types.PgInitPrivs>
    ;

export type PgSeclabel = {
objoid: PgCatalog.Types.Oid;
classoid: PgCatalog.Types.Oid;
objsubid: PgCatalog.Types.Int4;
provider: PgCatalog.Types.Text;
label: PgCatalog.Types.Text;
}

export type PgSeclabelArray = 
     Array<PgCatalog.Types.PgSeclabel>
    ;

export type PgShseclabel = {
objoid: PgCatalog.Types.Oid;
classoid: PgCatalog.Types.Oid;
provider: PgCatalog.Types.Text;
label: PgCatalog.Types.Text;
}

export type PgShseclabelArray = 
     Array<PgCatalog.Types.PgShseclabel>
    ;

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
}

export type PgCollationArray = 
     Array<PgCatalog.Types.PgCollation>
    ;

export type PgParameterAcl = {
oid: PgCatalog.Types.Oid;
parname: PgCatalog.Types.Text;
paracl: PgCatalog.Types.AclitemArray;
}

export type PgParameterAclArray = 
     Array<PgCatalog.Types.PgParameterAcl>
    ;

export type PgPartitionedTable = {
partrelid: PgCatalog.Types.Oid;
partstrat: PgCatalog.Types.Char;
partnatts: PgCatalog.Types.Int2;
partdefid: PgCatalog.Types.Oid;
partattrs: PgCatalog.Types.Int2vector;
partclass: PgCatalog.Types.Oidvector;
partcollation: PgCatalog.Types.Oidvector;
partexprs: Nullable<PgCatalog.Types.PgNodeTree>;
}

export type PgPartitionedTableArray = 
     Array<PgCatalog.Types.PgPartitionedTable>
    ;

export type PgRange = {
rngtypid: PgCatalog.Types.Oid;
rngsubtype: PgCatalog.Types.Oid;
rngmultitypid: PgCatalog.Types.Oid;
rngcollation: PgCatalog.Types.Oid;
rngsubopc: PgCatalog.Types.Oid;
rngcanonical: PgCatalog.Types.Regproc;
rngsubdiff: PgCatalog.Types.Regproc;
}

export type PgRangeArray = 
     Array<PgCatalog.Types.PgRange>
    ;

export type PgTransform = {
oid: PgCatalog.Types.Oid;
trftype: PgCatalog.Types.Oid;
trflang: PgCatalog.Types.Oid;
trffromsql: PgCatalog.Types.Regproc;
trftosql: PgCatalog.Types.Regproc;
}

export type PgTransformArray = 
     Array<PgCatalog.Types.PgTransform>
    ;

export type PgSequence = {
seqrelid: PgCatalog.Types.Oid;
seqtypid: PgCatalog.Types.Oid;
seqstart: PgCatalog.Types.Int8;
seqincrement: PgCatalog.Types.Int8;
seqmax: PgCatalog.Types.Int8;
seqmin: PgCatalog.Types.Int8;
seqcache: PgCatalog.Types.Int8;
seqcycle: PgCatalog.Types.Bool;
}

export type PgSequenceArray = 
     Array<PgCatalog.Types.PgSequence>
    ;

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
}

export type PgPublicationArray = 
     Array<PgCatalog.Types.PgPublication>
    ;

export type PgPublicationNamespace = {
oid: PgCatalog.Types.Oid;
pnpubid: PgCatalog.Types.Oid;
pnnspid: PgCatalog.Types.Oid;
}

export type PgPublicationNamespaceArray = 
     Array<PgCatalog.Types.PgPublicationNamespace>
    ;

export type PgPublicationRel = {
oid: PgCatalog.Types.Oid;
prpubid: PgCatalog.Types.Oid;
prrelid: PgCatalog.Types.Oid;
prqual: Nullable<PgCatalog.Types.PgNodeTree>;
prattrs: Nullable<PgCatalog.Types.Int2vector>;
}

export type PgPublicationRelArray = 
     Array<PgCatalog.Types.PgPublicationRel>
    ;

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
}

export type PgSubscriptionArray = 
     Array<PgCatalog.Types.PgSubscription>
    ;

export type PgSubscriptionRel = {
srsubid: PgCatalog.Types.Oid;
srrelid: PgCatalog.Types.Oid;
srsubstate: PgCatalog.Types.Char;
srsublsn: Nullable<PgCatalog.Types.PgLsn>;
}

export type PgSubscriptionRelArray = 
     Array<PgCatalog.Types.PgSubscriptionRel>
    ;

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
}

export type PgRolesArray = 
     Array<PgCatalog.Types.PgRoles>
    ;

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
}

export type PgShadowArray = 
     Array<PgCatalog.Types.PgShadow>
    ;

export type PgGroup = {
groname: Nullable<PgCatalog.Types.Name>;
grosysid: Nullable<PgCatalog.Types.Oid>;
grolist: PgCatalog.Types.OidArray;
}

export type PgGroupArray = 
     Array<PgCatalog.Types.PgGroup>
    ;

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
}

export type PgUserArray = 
     Array<PgCatalog.Types.PgUser>
    ;

export type PgPolicies = {
schemaname: Nullable<PgCatalog.Types.Name>;
tablename: Nullable<PgCatalog.Types.Name>;
policyname: Nullable<PgCatalog.Types.Name>;
permissive: Nullable<PgCatalog.Types.Text>;
roles: PgCatalog.Types.NameArray;
cmd: Nullable<PgCatalog.Types.Text>;
qual: Nullable<PgCatalog.Types.Text>;
withCheck: Nullable<PgCatalog.Types.Text>;
}

export type PgPoliciesArray = 
     Array<PgCatalog.Types.PgPolicies>
    ;

export type PgRules = {
schemaname: Nullable<PgCatalog.Types.Name>;
tablename: Nullable<PgCatalog.Types.Name>;
rulename: Nullable<PgCatalog.Types.Name>;
definition: Nullable<PgCatalog.Types.Text>;
}

export type PgRulesArray = 
     Array<PgCatalog.Types.PgRules>
    ;

export type PgViews = {
schemaname: Nullable<PgCatalog.Types.Name>;
viewname: Nullable<PgCatalog.Types.Name>;
viewowner: Nullable<PgCatalog.Types.Name>;
definition: Nullable<PgCatalog.Types.Text>;
}

export type PgViewsArray = 
     Array<PgCatalog.Types.PgViews>
    ;

export type PgTables = {
schemaname: Nullable<PgCatalog.Types.Name>;
tablename: Nullable<PgCatalog.Types.Name>;
tableowner: Nullable<PgCatalog.Types.Name>;
tablespace: Nullable<PgCatalog.Types.Name>;
hasindexes: Nullable<PgCatalog.Types.Bool>;
hasrules: Nullable<PgCatalog.Types.Bool>;
hastriggers: Nullable<PgCatalog.Types.Bool>;
rowsecurity: Nullable<PgCatalog.Types.Bool>;
}

export type PgTablesArray = 
     Array<PgCatalog.Types.PgTables>
    ;

export type PgMatviews = {
schemaname: Nullable<PgCatalog.Types.Name>;
matviewname: Nullable<PgCatalog.Types.Name>;
matviewowner: Nullable<PgCatalog.Types.Name>;
tablespace: Nullable<PgCatalog.Types.Name>;
hasindexes: Nullable<PgCatalog.Types.Bool>;
ispopulated: Nullable<PgCatalog.Types.Bool>;
definition: Nullable<PgCatalog.Types.Text>;
}

export type PgMatviewsArray = 
     Array<PgCatalog.Types.PgMatviews>
    ;

export type PgIndexes = {
schemaname: Nullable<PgCatalog.Types.Name>;
tablename: Nullable<PgCatalog.Types.Name>;
indexname: Nullable<PgCatalog.Types.Name>;
tablespace: Nullable<PgCatalog.Types.Name>;
indexdef: Nullable<PgCatalog.Types.Text>;
}

export type PgIndexesArray = 
     Array<PgCatalog.Types.PgIndexes>
    ;

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
}

export type PgSequencesArray = 
     Array<PgCatalog.Types.PgSequences>
    ;

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
}

export type PgStatsArray = 
     Array<PgCatalog.Types.PgStats>
    ;

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
}

export type PgStatsExtArray = 
     Array<PgCatalog.Types.PgStatsExt>
    ;

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
}

export type PgStatsExtExprsArray = 
     Array<PgCatalog.Types.PgStatsExtExprs>
    ;

export type PgPublicationTables = {
pubname: Nullable<PgCatalog.Types.Name>;
schemaname: Nullable<PgCatalog.Types.Name>;
tablename: Nullable<PgCatalog.Types.Name>;
attnames: PgCatalog.Types.NameArray;
rowfilter: Nullable<PgCatalog.Types.Text>;
}

export type PgPublicationTablesArray = 
     Array<PgCatalog.Types.PgPublicationTables>
    ;

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
}

export type PgLocksArray = 
     Array<PgCatalog.Types.PgLocks>
    ;

export type PgCursors = {
name: Nullable<PgCatalog.Types.Text>;
statement: Nullable<PgCatalog.Types.Text>;
isHoldable: Nullable<PgCatalog.Types.Bool>;
isBinary: Nullable<PgCatalog.Types.Bool>;
isScrollable: Nullable<PgCatalog.Types.Bool>;
creationTime: Nullable<PgCatalog.Types.Timestamptz>;
}

export type PgCursorsArray = 
     Array<PgCatalog.Types.PgCursors>
    ;

export type PgAvailableExtensions = {
name: Nullable<PgCatalog.Types.Name>;
defaultVersion: Nullable<PgCatalog.Types.Text>;
installedVersion: Nullable<PgCatalog.Types.Text>;
comment: Nullable<PgCatalog.Types.Text>;
}

export type PgAvailableExtensionsArray = 
     Array<PgCatalog.Types.PgAvailableExtensions>
    ;

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
}

export type PgAvailableExtensionVersionsArray = 
     Array<PgCatalog.Types.PgAvailableExtensionVersions>
    ;

export type PgPreparedXacts = {
transaction: Nullable<PgCatalog.Types.Xid>;
gid: Nullable<PgCatalog.Types.Text>;
prepared: Nullable<PgCatalog.Types.Timestamptz>;
owner: Nullable<PgCatalog.Types.Name>;
database: Nullable<PgCatalog.Types.Name>;
}

export type PgPreparedXactsArray = 
     Array<PgCatalog.Types.PgPreparedXacts>
    ;

export type PgPreparedStatements = {
name: Nullable<PgCatalog.Types.Text>;
statement: Nullable<PgCatalog.Types.Text>;
prepareTime: Nullable<PgCatalog.Types.Timestamptz>;
parameterTypes: PgCatalog.Types.RegtypeArray;
resultTypes: PgCatalog.Types.RegtypeArray;
fromSql: Nullable<PgCatalog.Types.Bool>;
genericPlans: Nullable<PgCatalog.Types.Int8>;
customPlans: Nullable<PgCatalog.Types.Int8>;
}

export type PgPreparedStatementsArray = 
     Array<PgCatalog.Types.PgPreparedStatements>
    ;

export type PgSeclabels = {
objoid: Nullable<PgCatalog.Types.Oid>;
classoid: Nullable<PgCatalog.Types.Oid>;
objsubid: Nullable<PgCatalog.Types.Int4>;
objtype: Nullable<PgCatalog.Types.Text>;
objnamespace: Nullable<PgCatalog.Types.Oid>;
objname: Nullable<PgCatalog.Types.Text>;
provider: Nullable<PgCatalog.Types.Text>;
label: Nullable<PgCatalog.Types.Text>;
}

export type PgSeclabelsArray = 
     Array<PgCatalog.Types.PgSeclabels>
    ;

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
}

export type PgSettingsArray = 
     Array<PgCatalog.Types.PgSettings>
    ;

export type PgFileSettings = {
sourcefile: Nullable<PgCatalog.Types.Text>;
sourceline: Nullable<PgCatalog.Types.Int4>;
seqno: Nullable<PgCatalog.Types.Int4>;
name: Nullable<PgCatalog.Types.Text>;
setting: Nullable<PgCatalog.Types.Text>;
applied: Nullable<PgCatalog.Types.Bool>;
error: Nullable<PgCatalog.Types.Text>;
}

export type PgFileSettingsArray = 
     Array<PgCatalog.Types.PgFileSettings>
    ;

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
}

export type PgHbaFileRulesArray = 
     Array<PgCatalog.Types.PgHbaFileRules>
    ;

export type PgIdentFileMappings = {
mapNumber: Nullable<PgCatalog.Types.Int4>;
fileName: Nullable<PgCatalog.Types.Text>;
lineNumber: Nullable<PgCatalog.Types.Int4>;
mapName: Nullable<PgCatalog.Types.Text>;
sysName: Nullable<PgCatalog.Types.Text>;
pgUsername: Nullable<PgCatalog.Types.Text>;
error: Nullable<PgCatalog.Types.Text>;
}

export type PgIdentFileMappingsArray = 
     Array<PgCatalog.Types.PgIdentFileMappings>
    ;

export type PgTimezoneAbbrevs = {
abbrev: Nullable<PgCatalog.Types.Text>;
utcOffset: Nullable<PgCatalog.Types.Interval>;
isDst: Nullable<PgCatalog.Types.Bool>;
}

export type PgTimezoneAbbrevsArray = 
     Array<PgCatalog.Types.PgTimezoneAbbrevs>
    ;

export type PgTimezoneNames = {
name: Nullable<PgCatalog.Types.Text>;
abbrev: Nullable<PgCatalog.Types.Text>;
utcOffset: Nullable<PgCatalog.Types.Interval>;
isDst: Nullable<PgCatalog.Types.Bool>;
}

export type PgTimezoneNamesArray = 
     Array<PgCatalog.Types.PgTimezoneNames>
    ;

export type PgConfig = {
name: Nullable<PgCatalog.Types.Text>;
setting: Nullable<PgCatalog.Types.Text>;
}

export type PgConfigArray = 
     Array<PgCatalog.Types.PgConfig>
    ;

export type PgShmemAllocations = {
name: Nullable<PgCatalog.Types.Text>;
off: Nullable<PgCatalog.Types.Int8>;
size: Nullable<PgCatalog.Types.Int8>;
allocatedSize: Nullable<PgCatalog.Types.Int8>;
}

export type PgShmemAllocationsArray = 
     Array<PgCatalog.Types.PgShmemAllocations>
    ;

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
}

export type PgBackendMemoryContextsArray = 
     Array<PgCatalog.Types.PgBackendMemoryContexts>
    ;

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
}

export type PgStatAllTablesArray = 
     Array<PgCatalog.Types.PgStatAllTables>
    ;

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
}

export type PgStatXactAllTablesArray = 
     Array<PgCatalog.Types.PgStatXactAllTables>
    ;

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
}

export type PgStatSysTablesArray = 
     Array<PgCatalog.Types.PgStatSysTables>
    ;

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
}

export type PgStatXactSysTablesArray = 
     Array<PgCatalog.Types.PgStatXactSysTables>
    ;

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
}

export type PgStatUserTablesArray = 
     Array<PgCatalog.Types.PgStatUserTables>
    ;

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
}

export type PgStatXactUserTablesArray = 
     Array<PgCatalog.Types.PgStatXactUserTables>
    ;

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
}

export type PgStatioAllTablesArray = 
     Array<PgCatalog.Types.PgStatioAllTables>
    ;

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
}

export type PgStatioSysTablesArray = 
     Array<PgCatalog.Types.PgStatioSysTables>
    ;

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
}

export type PgStatioUserTablesArray = 
     Array<PgCatalog.Types.PgStatioUserTables>
    ;

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
}

export type PgStatAllIndexesArray = 
     Array<PgCatalog.Types.PgStatAllIndexes>
    ;

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
}

export type PgStatSysIndexesArray = 
     Array<PgCatalog.Types.PgStatSysIndexes>
    ;

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
}

export type PgStatUserIndexesArray = 
     Array<PgCatalog.Types.PgStatUserIndexes>
    ;

export type PgStatioAllIndexes = {
relid: Nullable<PgCatalog.Types.Oid>;
indexrelid: Nullable<PgCatalog.Types.Oid>;
schemaname: Nullable<PgCatalog.Types.Name>;
relname: Nullable<PgCatalog.Types.Name>;
indexrelname: Nullable<PgCatalog.Types.Name>;
idxBlksRead: Nullable<PgCatalog.Types.Int8>;
idxBlksHit: Nullable<PgCatalog.Types.Int8>;
}

export type PgStatioAllIndexesArray = 
     Array<PgCatalog.Types.PgStatioAllIndexes>
    ;

export type PgStatioSysIndexes = {
relid: Nullable<PgCatalog.Types.Oid>;
indexrelid: Nullable<PgCatalog.Types.Oid>;
schemaname: Nullable<PgCatalog.Types.Name>;
relname: Nullable<PgCatalog.Types.Name>;
indexrelname: Nullable<PgCatalog.Types.Name>;
idxBlksRead: Nullable<PgCatalog.Types.Int8>;
idxBlksHit: Nullable<PgCatalog.Types.Int8>;
}

export type PgStatioSysIndexesArray = 
     Array<PgCatalog.Types.PgStatioSysIndexes>
    ;

export type PgStatioUserIndexes = {
relid: Nullable<PgCatalog.Types.Oid>;
indexrelid: Nullable<PgCatalog.Types.Oid>;
schemaname: Nullable<PgCatalog.Types.Name>;
relname: Nullable<PgCatalog.Types.Name>;
indexrelname: Nullable<PgCatalog.Types.Name>;
idxBlksRead: Nullable<PgCatalog.Types.Int8>;
idxBlksHit: Nullable<PgCatalog.Types.Int8>;
}

export type PgStatioUserIndexesArray = 
     Array<PgCatalog.Types.PgStatioUserIndexes>
    ;

export type PgStatioAllSequences = {
relid: Nullable<PgCatalog.Types.Oid>;
schemaname: Nullable<PgCatalog.Types.Name>;
relname: Nullable<PgCatalog.Types.Name>;
blksRead: Nullable<PgCatalog.Types.Int8>;
blksHit: Nullable<PgCatalog.Types.Int8>;
}

export type PgStatioAllSequencesArray = 
     Array<PgCatalog.Types.PgStatioAllSequences>
    ;

export type PgStatioSysSequences = {
relid: Nullable<PgCatalog.Types.Oid>;
schemaname: Nullable<PgCatalog.Types.Name>;
relname: Nullable<PgCatalog.Types.Name>;
blksRead: Nullable<PgCatalog.Types.Int8>;
blksHit: Nullable<PgCatalog.Types.Int8>;
}

export type PgStatioSysSequencesArray = 
     Array<PgCatalog.Types.PgStatioSysSequences>
    ;

export type PgStatioUserSequences = {
relid: Nullable<PgCatalog.Types.Oid>;
schemaname: Nullable<PgCatalog.Types.Name>;
relname: Nullable<PgCatalog.Types.Name>;
blksRead: Nullable<PgCatalog.Types.Int8>;
blksHit: Nullable<PgCatalog.Types.Int8>;
}

export type PgStatioUserSequencesArray = 
     Array<PgCatalog.Types.PgStatioUserSequences>
    ;

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
}

export type PgStatActivityArray = 
     Array<PgCatalog.Types.PgStatActivity>
    ;

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
}

export type PgStatReplicationArray = 
     Array<PgCatalog.Types.PgStatReplication>
    ;

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
}

export type PgStatSlruArray = 
     Array<PgCatalog.Types.PgStatSlru>
    ;

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
}

export type PgStatWalReceiverArray = 
     Array<PgCatalog.Types.PgStatWalReceiver>
    ;

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
}

export type PgStatRecoveryPrefetchArray = 
     Array<PgCatalog.Types.PgStatRecoveryPrefetch>
    ;

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
}

export type PgStatSubscriptionArray = 
     Array<PgCatalog.Types.PgStatSubscription>
    ;

export type PgStatSsl = {
pid: Nullable<PgCatalog.Types.Int4>;
ssl: Nullable<PgCatalog.Types.Bool>;
version: Nullable<PgCatalog.Types.Text>;
cipher: Nullable<PgCatalog.Types.Text>;
bits: Nullable<PgCatalog.Types.Int4>;
clientDn: Nullable<PgCatalog.Types.Text>;
clientSerial: Nullable<PgCatalog.Types.Numeric>;
issuerDn: Nullable<PgCatalog.Types.Text>;
}

export type PgStatSslArray = 
     Array<PgCatalog.Types.PgStatSsl>
    ;

export type PgStatGssapi = {
pid: Nullable<PgCatalog.Types.Int4>;
gssAuthenticated: Nullable<PgCatalog.Types.Bool>;
principal: Nullable<PgCatalog.Types.Text>;
encrypted: Nullable<PgCatalog.Types.Bool>;
credentialsDelegated: Nullable<PgCatalog.Types.Bool>;
}

export type PgStatGssapiArray = 
     Array<PgCatalog.Types.PgStatGssapi>
    ;

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
}

export type PgReplicationSlotsArray = 
     Array<PgCatalog.Types.PgReplicationSlots>
    ;

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
}

export type PgStatReplicationSlotsArray = 
     Array<PgCatalog.Types.PgStatReplicationSlots>
    ;

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
}

export type PgStatDatabaseArray = 
     Array<PgCatalog.Types.PgStatDatabase>
    ;

export type PgStatDatabaseConflicts = {
datid: Nullable<PgCatalog.Types.Oid>;
datname: Nullable<PgCatalog.Types.Name>;
conflTablespace: Nullable<PgCatalog.Types.Int8>;
conflLock: Nullable<PgCatalog.Types.Int8>;
conflSnapshot: Nullable<PgCatalog.Types.Int8>;
conflBufferpin: Nullable<PgCatalog.Types.Int8>;
conflDeadlock: Nullable<PgCatalog.Types.Int8>;
conflActiveLogicalslot: Nullable<PgCatalog.Types.Int8>;
}

export type PgStatDatabaseConflictsArray = 
     Array<PgCatalog.Types.PgStatDatabaseConflicts>
    ;

export type PgStatUserFunctions = {
funcid: Nullable<PgCatalog.Types.Oid>;
schemaname: Nullable<PgCatalog.Types.Name>;
funcname: Nullable<PgCatalog.Types.Name>;
calls: Nullable<PgCatalog.Types.Int8>;
totalTime: Nullable<PgCatalog.Types.Float8>;
selfTime: Nullable<PgCatalog.Types.Float8>;
}

export type PgStatUserFunctionsArray = 
     Array<PgCatalog.Types.PgStatUserFunctions>
    ;

export type PgStatXactUserFunctions = {
funcid: Nullable<PgCatalog.Types.Oid>;
schemaname: Nullable<PgCatalog.Types.Name>;
funcname: Nullable<PgCatalog.Types.Name>;
calls: Nullable<PgCatalog.Types.Int8>;
totalTime: Nullable<PgCatalog.Types.Float8>;
selfTime: Nullable<PgCatalog.Types.Float8>;
}

export type PgStatXactUserFunctionsArray = 
     Array<PgCatalog.Types.PgStatXactUserFunctions>
    ;

export type PgStatArchiver = {
archivedCount: Nullable<PgCatalog.Types.Int8>;
lastArchivedWal: Nullable<PgCatalog.Types.Text>;
lastArchivedTime: Nullable<PgCatalog.Types.Timestamptz>;
failedCount: Nullable<PgCatalog.Types.Int8>;
lastFailedWal: Nullable<PgCatalog.Types.Text>;
lastFailedTime: Nullable<PgCatalog.Types.Timestamptz>;
statsReset: Nullable<PgCatalog.Types.Timestamptz>;
}

export type PgStatArchiverArray = 
     Array<PgCatalog.Types.PgStatArchiver>
    ;

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
}

export type PgStatBgwriterArray = 
     Array<PgCatalog.Types.PgStatBgwriter>
    ;

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
}

export type PgStatIoArray = 
     Array<PgCatalog.Types.PgStatIo>
    ;

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
}

export type PgStatWalArray = 
     Array<PgCatalog.Types.PgStatWal>
    ;

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
}

export type PgStatProgressAnalyzeArray = 
     Array<PgCatalog.Types.PgStatProgressAnalyze>
    ;

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
}

export type PgStatProgressVacuumArray = 
     Array<PgCatalog.Types.PgStatProgressVacuum>
    ;

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
}

export type PgStatProgressClusterArray = 
     Array<PgCatalog.Types.PgStatProgressCluster>
    ;

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
}

export type PgStatProgressCreateIndexArray = 
     Array<PgCatalog.Types.PgStatProgressCreateIndex>
    ;

export type PgStatProgressBasebackup = {
pid: Nullable<PgCatalog.Types.Int4>;
phase: Nullable<PgCatalog.Types.Text>;
backupTotal: Nullable<PgCatalog.Types.Int8>;
backupStreamed: Nullable<PgCatalog.Types.Int8>;
tablespacesTotal: Nullable<PgCatalog.Types.Int8>;
tablespacesStreamed: Nullable<PgCatalog.Types.Int8>;
}

export type PgStatProgressBasebackupArray = 
     Array<PgCatalog.Types.PgStatProgressBasebackup>
    ;

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
}

export type PgStatProgressCopyArray = 
     Array<PgCatalog.Types.PgStatProgressCopy>
    ;

export type PgUserMappings = {
umid: Nullable<PgCatalog.Types.Oid>;
srvid: Nullable<PgCatalog.Types.Oid>;
srvname: Nullable<PgCatalog.Types.Name>;
umuser: Nullable<PgCatalog.Types.Oid>;
usename: Nullable<PgCatalog.Types.Name>;
umoptions: PgCatalog.Types.TextArray;
}

export type PgUserMappingsArray = 
     Array<PgCatalog.Types.PgUserMappings>
    ;

export type PgReplicationOriginStatus = {
localId: Nullable<PgCatalog.Types.Oid>;
externalId: Nullable<PgCatalog.Types.Text>;
remoteLsn: Nullable<PgCatalog.Types.PgLsn>;
localLsn: Nullable<PgCatalog.Types.PgLsn>;
}

export type PgReplicationOriginStatusArray = 
     Array<PgCatalog.Types.PgReplicationOriginStatus>
    ;

export type PgStatSubscriptionStats = {
subid: Nullable<PgCatalog.Types.Oid>;
subname: Nullable<PgCatalog.Types.Name>;
applyErrorCount: Nullable<PgCatalog.Types.Int8>;
syncErrorCount: Nullable<PgCatalog.Types.Int8>;
statsReset: Nullable<PgCatalog.Types.Timestamptz>;
}

export type PgStatSubscriptionStatsArray = 
     Array<PgCatalog.Types.PgStatSubscriptionStats>
    ;

export type PgProcOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgProcPronameArgsNspIndex = {
proname: Nullable<PgCatalog.Types.Name>;
proargtypes: PgCatalog.Types.Oidvector;
pronamespace: Nullable<PgCatalog.Types.Oid>;
}

export type PgTypeOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgTypeTypnameNspIndex = {
typname: Nullable<PgCatalog.Types.Name>;
typnamespace: Nullable<PgCatalog.Types.Oid>;
}

export type PgAttributeRelidAttnamIndex = {
attrelid: Nullable<PgCatalog.Types.Oid>;
attname: Nullable<PgCatalog.Types.Name>;
}

export type PgAttributeRelidAttnumIndex = {
attrelid: Nullable<PgCatalog.Types.Oid>;
attnum: Nullable<PgCatalog.Types.Int2>;
}

export type PgClassOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgClassRelnameNspIndex = {
relname: Nullable<PgCatalog.Types.Name>;
relnamespace: Nullable<PgCatalog.Types.Oid>;
}

export type PgClassTblspcRelfilenodeIndex = {
reltablespace: Nullable<PgCatalog.Types.Oid>;
relfilenode: Nullable<PgCatalog.Types.Oid>;
}

export type PgAttrdefAdrelidAdnumIndex = {
adrelid: Nullable<PgCatalog.Types.Oid>;
adnum: Nullable<PgCatalog.Types.Int2>;
}

export type PgAttrdefOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgConstraintConnameNspIndex = {
conname: Nullable<PgCatalog.Types.Name>;
connamespace: Nullable<PgCatalog.Types.Oid>;
}

export type PgConstraintConrelidContypidConnameIndex = {
conrelid: Nullable<PgCatalog.Types.Oid>;
contypid: Nullable<PgCatalog.Types.Oid>;
conname: Nullable<PgCatalog.Types.Name>;
}

export type PgConstraintContypidIndex = {
contypid: Nullable<PgCatalog.Types.Oid>;
}

export type PgConstraintOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgConstraintConparentidIndex = {
conparentid: Nullable<PgCatalog.Types.Oid>;
}

export type PgInheritsRelidSeqnoIndex = {
inhrelid: Nullable<PgCatalog.Types.Oid>;
inhseqno: Nullable<PgCatalog.Types.Int4>;
}

export type PgInheritsParentIndex = {
inhparent: Nullable<PgCatalog.Types.Oid>;
}

export type PgIndexIndrelidIndex = {
indrelid: Nullable<PgCatalog.Types.Oid>;
}

export type PgIndexIndexrelidIndex = {
indexrelid: Nullable<PgCatalog.Types.Oid>;
}

export type PgOperatorOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgOperatorOprnameLRNIndex = {
oprname: Nullable<PgCatalog.Types.Name>;
oprleft: Nullable<PgCatalog.Types.Oid>;
oprright: Nullable<PgCatalog.Types.Oid>;
oprnamespace: Nullable<PgCatalog.Types.Oid>;
}

export type PgOpfamilyAmNameNspIndex = {
opfmethod: Nullable<PgCatalog.Types.Oid>;
opfname: Nullable<PgCatalog.Types.Name>;
opfnamespace: Nullable<PgCatalog.Types.Oid>;
}

export type PgOpfamilyOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgOpclassAmNameNspIndex = {
opcmethod: Nullable<PgCatalog.Types.Oid>;
opcname: Nullable<PgCatalog.Types.Name>;
opcnamespace: Nullable<PgCatalog.Types.Oid>;
}

export type PgOpclassOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgAmNameIndex = {
amname: Nullable<PgCatalog.Types.Name>;
}

export type PgAmOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgAmopFamStratIndex = {
amopfamily: Nullable<PgCatalog.Types.Oid>;
amoplefttype: Nullable<PgCatalog.Types.Oid>;
amoprighttype: Nullable<PgCatalog.Types.Oid>;
amopstrategy: Nullable<PgCatalog.Types.Int2>;
}

export type PgAmopOprFamIndex = {
amopopr: Nullable<PgCatalog.Types.Oid>;
amoppurpose: Nullable<PgCatalog.Types.Char>;
amopfamily: Nullable<PgCatalog.Types.Oid>;
}

export type PgAmopOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgAmprocFamProcIndex = {
amprocfamily: Nullable<PgCatalog.Types.Oid>;
amproclefttype: Nullable<PgCatalog.Types.Oid>;
amprocrighttype: Nullable<PgCatalog.Types.Oid>;
amprocnum: Nullable<PgCatalog.Types.Int2>;
}

export type PgAmprocOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgLanguageNameIndex = {
lanname: Nullable<PgCatalog.Types.Name>;
}

export type PgLanguageOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgLargeobjectMetadataOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgLargeobjectLoidPnIndex = {
loid: Nullable<PgCatalog.Types.Oid>;
pageno: Nullable<PgCatalog.Types.Int4>;
}

export type PgAggregateFnoidIndex = {
aggfnoid: Nullable<PgCatalog.Types.Regproc>;
}

export type PgStatisticRelidAttInhIndex = {
starelid: Nullable<PgCatalog.Types.Oid>;
staattnum: Nullable<PgCatalog.Types.Int2>;
stainherit: Nullable<PgCatalog.Types.Bool>;
}

export type PgStatisticExtOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgStatisticExtNameIndex = {
stxname: Nullable<PgCatalog.Types.Name>;
stxnamespace: Nullable<PgCatalog.Types.Oid>;
}

export type PgStatisticExtRelidIndex = {
stxrelid: Nullable<PgCatalog.Types.Oid>;
}

export type PgStatisticExtDataStxoidInhIndex = {
stxoid: Nullable<PgCatalog.Types.Oid>;
stxdinherit: Nullable<PgCatalog.Types.Bool>;
}

export type PgRewriteOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgRewriteRelRulenameIndex = {
evClass: Nullable<PgCatalog.Types.Oid>;
rulename: Nullable<PgCatalog.Types.Name>;
}

export type PgTriggerTgconstraintIndex = {
tgconstraint: Nullable<PgCatalog.Types.Oid>;
}

export type PgTriggerTgrelidTgnameIndex = {
tgrelid: Nullable<PgCatalog.Types.Oid>;
tgname: Nullable<PgCatalog.Types.Name>;
}

export type PgTriggerOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgEventTriggerEvtnameIndex = {
evtname: Nullable<PgCatalog.Types.Name>;
}

export type PgEventTriggerOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgDescriptionOCOIndex = {
objoid: Nullable<PgCatalog.Types.Oid>;
classoid: Nullable<PgCatalog.Types.Oid>;
objsubid: Nullable<PgCatalog.Types.Int4>;
}

export type PgCastOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgCastSourceTargetIndex = {
castsource: Nullable<PgCatalog.Types.Oid>;
casttarget: Nullable<PgCatalog.Types.Oid>;
}

export type PgEnumOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgEnumTypidLabelIndex = {
enumtypid: Nullable<PgCatalog.Types.Oid>;
enumlabel: Nullable<PgCatalog.Types.Name>;
}

export type PgEnumTypidSortorderIndex = {
enumtypid: Nullable<PgCatalog.Types.Oid>;
enumsortorder: Nullable<PgCatalog.Types.Float4>;
}

export type PgNamespaceNspnameIndex = {
nspname: Nullable<PgCatalog.Types.Name>;
}

export type PgNamespaceOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgConversionDefaultIndex = {
connamespace: Nullable<PgCatalog.Types.Oid>;
conforencoding: Nullable<PgCatalog.Types.Int4>;
contoencoding: Nullable<PgCatalog.Types.Int4>;
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgConversionNameNspIndex = {
conname: Nullable<PgCatalog.Types.Name>;
connamespace: Nullable<PgCatalog.Types.Oid>;
}

export type PgConversionOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgDependDependerIndex = {
classid: Nullable<PgCatalog.Types.Oid>;
objid: Nullable<PgCatalog.Types.Oid>;
objsubid: Nullable<PgCatalog.Types.Int4>;
}

export type PgDependReferenceIndex = {
refclassid: Nullable<PgCatalog.Types.Oid>;
refobjid: Nullable<PgCatalog.Types.Oid>;
refobjsubid: Nullable<PgCatalog.Types.Int4>;
}

export type PgDatabaseDatnameIndex = {
datname: Nullable<PgCatalog.Types.Name>;
}

export type PgDatabaseOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgDbRoleSettingDatabaseidRolIndex = {
setdatabase: Nullable<PgCatalog.Types.Oid>;
setrole: Nullable<PgCatalog.Types.Oid>;
}

export type PgTablespaceOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgTablespaceSpcnameIndex = {
spcname: Nullable<PgCatalog.Types.Name>;
}

export type PgAuthidRolnameIndex = {
rolname: Nullable<PgCatalog.Types.Name>;
}

export type PgAuthidOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgAuthMembersOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgAuthMembersRoleMemberIndex = {
roleid: Nullable<PgCatalog.Types.Oid>;
member: Nullable<PgCatalog.Types.Oid>;
grantor: Nullable<PgCatalog.Types.Oid>;
}

export type PgAuthMembersMemberRoleIndex = {
member: Nullable<PgCatalog.Types.Oid>;
roleid: Nullable<PgCatalog.Types.Oid>;
grantor: Nullable<PgCatalog.Types.Oid>;
}

export type PgAuthMembersGrantorIndex = {
grantor: Nullable<PgCatalog.Types.Oid>;
}

export type PgShdependDependerIndex = {
dbid: Nullable<PgCatalog.Types.Oid>;
classid: Nullable<PgCatalog.Types.Oid>;
objid: Nullable<PgCatalog.Types.Oid>;
objsubid: Nullable<PgCatalog.Types.Int4>;
}

export type PgShdependReferenceIndex = {
refclassid: Nullable<PgCatalog.Types.Oid>;
refobjid: Nullable<PgCatalog.Types.Oid>;
}

export type PgShdescriptionOCIndex = {
objoid: Nullable<PgCatalog.Types.Oid>;
classoid: Nullable<PgCatalog.Types.Oid>;
}

export type PgTsConfigCfgnameIndex = {
cfgname: Nullable<PgCatalog.Types.Name>;
cfgnamespace: Nullable<PgCatalog.Types.Oid>;
}

export type PgTsConfigOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgTsConfigMapIndex = {
mapcfg: Nullable<PgCatalog.Types.Oid>;
maptokentype: Nullable<PgCatalog.Types.Int4>;
mapseqno: Nullable<PgCatalog.Types.Int4>;
}

export type PgTsDictDictnameIndex = {
dictname: Nullable<PgCatalog.Types.Name>;
dictnamespace: Nullable<PgCatalog.Types.Oid>;
}

export type PgTsDictOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgTsParserPrsnameIndex = {
prsname: Nullable<PgCatalog.Types.Name>;
prsnamespace: Nullable<PgCatalog.Types.Oid>;
}

export type PgTsParserOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgTsTemplateTmplnameIndex = {
tmplname: Nullable<PgCatalog.Types.Name>;
tmplnamespace: Nullable<PgCatalog.Types.Oid>;
}

export type PgTsTemplateOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgExtensionOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgExtensionNameIndex = {
extname: Nullable<PgCatalog.Types.Name>;
}

export type PgForeignDataWrapperOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgForeignDataWrapperNameIndex = {
fdwname: Nullable<PgCatalog.Types.Name>;
}

export type PgForeignServerOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgForeignServerNameIndex = {
srvname: Nullable<PgCatalog.Types.Name>;
}

export type PgUserMappingOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgUserMappingUserServerIndex = {
umuser: Nullable<PgCatalog.Types.Oid>;
umserver: Nullable<PgCatalog.Types.Oid>;
}

export type PgForeignTableRelidIndex = {
ftrelid: Nullable<PgCatalog.Types.Oid>;
}

export type PgPolicyOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgPolicyPolrelidPolnameIndex = {
polrelid: Nullable<PgCatalog.Types.Oid>;
polname: Nullable<PgCatalog.Types.Name>;
}

export type PgReplicationOriginRoiidentIndex = {
roident: Nullable<PgCatalog.Types.Oid>;
}

export type PgReplicationOriginRonameIndex = {
roname: Nullable<PgCatalog.Types.Text>;
}

export type PgDefaultAclRoleNspObjIndex = {
defaclrole: Nullable<PgCatalog.Types.Oid>;
defaclnamespace: Nullable<PgCatalog.Types.Oid>;
defaclobjtype: Nullable<PgCatalog.Types.Char>;
}

export type PgDefaultAclOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgInitPrivsOCOIndex = {
objoid: Nullable<PgCatalog.Types.Oid>;
classoid: Nullable<PgCatalog.Types.Oid>;
objsubid: Nullable<PgCatalog.Types.Int4>;
}

export type PgSeclabelObjectIndex = {
objoid: Nullable<PgCatalog.Types.Oid>;
classoid: Nullable<PgCatalog.Types.Oid>;
objsubid: Nullable<PgCatalog.Types.Int4>;
provider: Nullable<PgCatalog.Types.Text>;
}

export type PgShseclabelObjectIndex = {
objoid: Nullable<PgCatalog.Types.Oid>;
classoid: Nullable<PgCatalog.Types.Oid>;
provider: Nullable<PgCatalog.Types.Text>;
}

export type PgCollationNameEncNspIndex = {
collname: Nullable<PgCatalog.Types.Name>;
collencoding: Nullable<PgCatalog.Types.Int4>;
collnamespace: Nullable<PgCatalog.Types.Oid>;
}

export type PgCollationOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgParameterAclParnameIndex = {
parname: Nullable<PgCatalog.Types.Text>;
}

export type PgParameterAclOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgPartitionedTablePartrelidIndex = {
partrelid: Nullable<PgCatalog.Types.Oid>;
}

export type PgRangeRngtypidIndex = {
rngtypid: Nullable<PgCatalog.Types.Oid>;
}

export type PgRangeRngmultitypidIndex = {
rngmultitypid: Nullable<PgCatalog.Types.Oid>;
}

export type PgTransformOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgTransformTypeLangIndex = {
trftype: Nullable<PgCatalog.Types.Oid>;
trflang: Nullable<PgCatalog.Types.Oid>;
}

export type PgSequenceSeqrelidIndex = {
seqrelid: Nullable<PgCatalog.Types.Oid>;
}

export type PgPublicationOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgPublicationPubnameIndex = {
pubname: Nullable<PgCatalog.Types.Name>;
}

export type PgPublicationNamespaceOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgPublicationNamespacePnnspidPnpubidIndex = {
pnnspid: Nullable<PgCatalog.Types.Oid>;
pnpubid: Nullable<PgCatalog.Types.Oid>;
}

export type PgPublicationRelOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgPublicationRelPrrelidPrpubidIndex = {
prrelid: Nullable<PgCatalog.Types.Oid>;
prpubid: Nullable<PgCatalog.Types.Oid>;
}

export type PgPublicationRelPrpubidIndex = {
prpubid: Nullable<PgCatalog.Types.Oid>;
}

export type PgSubscriptionOidIndex = {
oid: Nullable<PgCatalog.Types.Oid>;
}

export type PgSubscriptionSubnameIndex = {
subdbid: Nullable<PgCatalog.Types.Oid>;
subname: Nullable<PgCatalog.Types.Name>;
}

export type PgSubscriptionRelSrrelidSrsubidIndex = {
srrelid: Nullable<PgCatalog.Types.Oid>;
srsubid: Nullable<PgCatalog.Types.Oid>;
}
}
export namespace Procedures {
}
export namespace Tables {
export namespace PgStatistic {
export function emptyRow() {
 return { starelid: undefined,staattnum: undefined,stainherit: undefined,stanullfrac: undefined,stawidth: undefined,stadistinct: undefined,stakind1: undefined,stakind2: undefined,stakind3: undefined,stakind4: undefined,stakind5: undefined,staop1: undefined,staop2: undefined,staop3: undefined,staop4: undefined,staop5: undefined,stacoll1: undefined,stacoll2: undefined,stacoll3: undefined,stacoll4: undefined,stacoll5: undefined,stanumbers1: undefined,stanumbers2: undefined,stanumbers3: undefined,stanumbers4: undefined,stanumbers5: undefined,stavalues1: undefined,stavalues2: undefined,stavalues3: undefined,stavalues4: undefined,stavalues5: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgStatisticRelidAttInhIndex;

export type Optional = Pick<PgCatalog.Types.PgStatistic,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgStatistic, Optional & PrimaryKey>
export type Options = ReadOptions & {
starelid?: Sort;
staattnum?: Sort;
stainherit?: Sort;
stanullfrac?: Sort;
stawidth?: Sort;
stadistinct?: Sort;
stakind1?: Sort;
stakind2?: Sort;
stakind3?: Sort;
stakind4?: Sort;
stakind5?: Sort;
staop1?: Sort;
staop2?: Sort;
staop3?: Sort;
staop4?: Sort;
staop5?: Sort;
stacoll1?: Sort;
stacoll2?: Sort;
stacoll3?: Sort;
stacoll4?: Sort;
stacoll5?: Sort;
stanumbers1?: Sort;
stanumbers2?: Sort;
stanumbers3?: Sort;
stanumbers4?: Sort;
stanumbers5?: Sort;
stavalues1?: Sort;
stavalues2?: Sort;
stavalues3?: Sort;
stavalues4?: Sort;
stavalues5?: Sort;
};
}
export namespace PgType {
export function emptyRow() {
 return { oid: undefined,typname: undefined,typnamespace: undefined,typowner: undefined,typlen: undefined,typbyval: undefined,typtype: undefined,typcategory: undefined,typispreferred: undefined,typisdefined: undefined,typdelim: undefined,typrelid: undefined,typsubscript: undefined,typelem: undefined,typarray: undefined,typinput: undefined,typoutput: undefined,typreceive: undefined,typsend: undefined,typmodin: undefined,typmodout: undefined,typanalyze: undefined,typalign: undefined,typstorage: undefined,typnotnull: undefined,typbasetype: undefined,typtypmod: undefined,typndims: undefined,typcollation: undefined,typdefaultbin: undefined,typdefault: undefined,typacl: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgTypeOidIndex;

export type Optional = Pick<PgCatalog.Types.PgType,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgType, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
typname?: Sort;
typnamespace?: Sort;
typowner?: Sort;
typlen?: Sort;
typbyval?: Sort;
typtype?: Sort;
typcategory?: Sort;
typispreferred?: Sort;
typisdefined?: Sort;
typdelim?: Sort;
typrelid?: Sort;
typsubscript?: Sort;
typelem?: Sort;
typarray?: Sort;
typinput?: Sort;
typoutput?: Sort;
typreceive?: Sort;
typsend?: Sort;
typmodin?: Sort;
typmodout?: Sort;
typanalyze?: Sort;
typalign?: Sort;
typstorage?: Sort;
typnotnull?: Sort;
typbasetype?: Sort;
typtypmod?: Sort;
typndims?: Sort;
typcollation?: Sort;
typdefaultbin?: Sort;
typdefault?: Sort;
typacl?: Sort;
};
}
export namespace PgForeignTable {
export function emptyRow() {
 return { ftrelid: undefined,ftserver: undefined,ftoptions: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgForeignTableRelidIndex;

export type Optional = Pick<PgCatalog.Types.PgForeignTable,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgForeignTable, Optional & PrimaryKey>
export type Options = ReadOptions & {
ftrelid?: Sort;
ftserver?: Sort;
ftoptions?: Sort;
};
}
export namespace PgAuthid {
export function emptyRow() {
 return { oid: undefined,rolname: undefined,rolsuper: undefined,rolinherit: undefined,rolcreaterole: undefined,rolcreatedb: undefined,rolcanlogin: undefined,rolreplication: undefined,rolbypassrls: undefined,rolconnlimit: undefined,rolpassword: undefined,rolvaliduntil: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgAuthidOidIndex;

export type Optional = Pick<PgCatalog.Types.PgAuthid,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgAuthid, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
rolname?: Sort;
rolsuper?: Sort;
rolinherit?: Sort;
rolcreaterole?: Sort;
rolcreatedb?: Sort;
rolcanlogin?: Sort;
rolreplication?: Sort;
rolbypassrls?: Sort;
rolconnlimit?: Sort;
rolpassword?: Sort;
rolvaliduntil?: Sort;
};
}
export namespace PgStatisticExtData {
export function emptyRow() {
 return { stxoid: undefined,stxdinherit: undefined,stxdndistinct: undefined,stxddependencies: undefined,stxdmcv: undefined,stxdexpr: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgStatisticExtDataStxoidInhIndex;

export type Optional = Pick<PgCatalog.Types.PgStatisticExtData,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgStatisticExtData, Optional & PrimaryKey>
export type Options = ReadOptions & {
stxoid?: Sort;
stxdinherit?: Sort;
stxdndistinct?: Sort;
stxddependencies?: Sort;
stxdmcv?: Sort;
stxdexpr?: Sort;
};
}
export namespace PgUserMapping {
export function emptyRow() {
 return { oid: undefined,umuser: undefined,umserver: undefined,umoptions: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgUserMappingOidIndex;

export type Optional = Pick<PgCatalog.Types.PgUserMapping,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgUserMapping, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
umuser?: Sort;
umserver?: Sort;
umoptions?: Sort;
};
}
export namespace PgSubscription {
export function emptyRow() {
 return { oid: undefined,subdbid: undefined,subskiplsn: undefined,subname: undefined,subowner: undefined,subenabled: undefined,subbinary: undefined,substream: undefined,subtwophasestate: undefined,subdisableonerr: undefined,subpasswordrequired: undefined,subrunasowner: undefined,subconninfo: undefined,subslotname: undefined,subsynccommit: undefined,subpublications: undefined,suborigin: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgSubscriptionOidIndex;

export type Optional = Pick<PgCatalog.Types.PgSubscription,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgSubscription, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
subdbid?: Sort;
subskiplsn?: Sort;
subname?: Sort;
subowner?: Sort;
subenabled?: Sort;
subbinary?: Sort;
substream?: Sort;
subtwophasestate?: Sort;
subdisableonerr?: Sort;
subpasswordrequired?: Sort;
subrunasowner?: Sort;
subconninfo?: Sort;
subslotname?: Sort;
subsynccommit?: Sort;
subpublications?: Sort;
suborigin?: Sort;
};
}
export namespace PgAttribute {
export function emptyRow() {
 return { attrelid: undefined,attname: undefined,atttypid: undefined,attlen: undefined,attnum: undefined,attcacheoff: undefined,atttypmod: undefined,attndims: undefined,attbyval: undefined,attalign: undefined,attstorage: undefined,attcompression: undefined,attnotnull: undefined,atthasdef: undefined,atthasmissing: undefined,attidentity: undefined,attgenerated: undefined,attisdropped: undefined,attislocal: undefined,attinhcount: undefined,attstattarget: undefined,attcollation: undefined,attacl: undefined,attoptions: undefined,attfdwoptions: undefined,attmissingval: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgAttributeRelidAttnumIndex;

export type Optional = Pick<PgCatalog.Types.PgAttribute,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgAttribute, Optional & PrimaryKey>
export type Options = ReadOptions & {
attrelid?: Sort;
attname?: Sort;
atttypid?: Sort;
attlen?: Sort;
attnum?: Sort;
attcacheoff?: Sort;
atttypmod?: Sort;
attndims?: Sort;
attbyval?: Sort;
attalign?: Sort;
attstorage?: Sort;
attcompression?: Sort;
attnotnull?: Sort;
atthasdef?: Sort;
atthasmissing?: Sort;
attidentity?: Sort;
attgenerated?: Sort;
attisdropped?: Sort;
attislocal?: Sort;
attinhcount?: Sort;
attstattarget?: Sort;
attcollation?: Sort;
attacl?: Sort;
attoptions?: Sort;
attfdwoptions?: Sort;
attmissingval?: Sort;
};
}
export namespace PgProc {
export function emptyRow() {
 return { oid: undefined,proname: undefined,pronamespace: undefined,proowner: undefined,prolang: undefined,procost: undefined,prorows: undefined,provariadic: undefined,prosupport: undefined,prokind: undefined,prosecdef: undefined,proleakproof: undefined,proisstrict: undefined,proretset: undefined,provolatile: undefined,proparallel: undefined,pronargs: undefined,pronargdefaults: undefined,prorettype: undefined,proargtypes: undefined,proallargtypes: undefined,proargmodes: undefined,proargnames: undefined,proargdefaults: undefined,protrftypes: undefined,prosrc: undefined,probin: undefined,prosqlbody: undefined,proconfig: undefined,proacl: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgProcOidIndex;

export type Optional = Pick<PgCatalog.Types.PgProc,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgProc, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
proname?: Sort;
pronamespace?: Sort;
proowner?: Sort;
prolang?: Sort;
procost?: Sort;
prorows?: Sort;
provariadic?: Sort;
prosupport?: Sort;
prokind?: Sort;
prosecdef?: Sort;
proleakproof?: Sort;
proisstrict?: Sort;
proretset?: Sort;
provolatile?: Sort;
proparallel?: Sort;
pronargs?: Sort;
pronargdefaults?: Sort;
prorettype?: Sort;
proargtypes?: Sort;
proallargtypes?: Sort;
proargmodes?: Sort;
proargnames?: Sort;
proargdefaults?: Sort;
protrftypes?: Sort;
prosrc?: Sort;
probin?: Sort;
prosqlbody?: Sort;
proconfig?: Sort;
proacl?: Sort;
};
}
export namespace PgClass {
export function emptyRow() {
 return { oid: undefined,relname: undefined,relnamespace: undefined,reltype: undefined,reloftype: undefined,relowner: undefined,relam: undefined,relfilenode: undefined,reltablespace: undefined,relpages: undefined,reltuples: undefined,relallvisible: undefined,reltoastrelid: undefined,relhasindex: undefined,relisshared: undefined,relpersistence: undefined,relkind: undefined,relnatts: undefined,relchecks: undefined,relhasrules: undefined,relhastriggers: undefined,relhassubclass: undefined,relrowsecurity: undefined,relforcerowsecurity: undefined,relispopulated: undefined,relreplident: undefined,relispartition: undefined,relrewrite: undefined,relfrozenxid: undefined,relminmxid: undefined,relacl: undefined,reloptions: undefined,relpartbound: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgClassOidIndex;

export type Optional = Pick<PgCatalog.Types.PgClass,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgClass, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
relname?: Sort;
relnamespace?: Sort;
reltype?: Sort;
reloftype?: Sort;
relowner?: Sort;
relam?: Sort;
relfilenode?: Sort;
reltablespace?: Sort;
relpages?: Sort;
reltuples?: Sort;
relallvisible?: Sort;
reltoastrelid?: Sort;
relhasindex?: Sort;
relisshared?: Sort;
relpersistence?: Sort;
relkind?: Sort;
relnatts?: Sort;
relchecks?: Sort;
relhasrules?: Sort;
relhastriggers?: Sort;
relhassubclass?: Sort;
relrowsecurity?: Sort;
relforcerowsecurity?: Sort;
relispopulated?: Sort;
relreplident?: Sort;
relispartition?: Sort;
relrewrite?: Sort;
relfrozenxid?: Sort;
relminmxid?: Sort;
relacl?: Sort;
reloptions?: Sort;
relpartbound?: Sort;
};
}
export namespace PgAttrdef {
export function emptyRow() {
 return { oid: undefined,adrelid: undefined,adnum: undefined,adbin: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgAttrdefOidIndex;

export type Optional = Pick<PgCatalog.Types.PgAttrdef,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgAttrdef, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
adrelid?: Sort;
adnum?: Sort;
adbin?: Sort;
};
}
export namespace PgConstraint {
export function emptyRow() {
 return { oid: undefined,conname: undefined,connamespace: undefined,contype: undefined,condeferrable: undefined,condeferred: undefined,convalidated: undefined,conrelid: undefined,contypid: undefined,conindid: undefined,conparentid: undefined,confrelid: undefined,confupdtype: undefined,confdeltype: undefined,confmatchtype: undefined,conislocal: undefined,coninhcount: undefined,connoinherit: undefined,conkey: undefined,confkey: undefined,conpfeqop: undefined,conppeqop: undefined,conffeqop: undefined,confdelsetcols: undefined,conexclop: undefined,conbin: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgConstraintOidIndex;

export type Optional = Pick<PgCatalog.Types.PgConstraint,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgConstraint, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
conname?: Sort;
connamespace?: Sort;
contype?: Sort;
condeferrable?: Sort;
condeferred?: Sort;
convalidated?: Sort;
conrelid?: Sort;
contypid?: Sort;
conindid?: Sort;
conparentid?: Sort;
confrelid?: Sort;
confupdtype?: Sort;
confdeltype?: Sort;
confmatchtype?: Sort;
conislocal?: Sort;
coninhcount?: Sort;
connoinherit?: Sort;
conkey?: Sort;
confkey?: Sort;
conpfeqop?: Sort;
conppeqop?: Sort;
conffeqop?: Sort;
confdelsetcols?: Sort;
conexclop?: Sort;
conbin?: Sort;
};
}
export namespace PgInherits {
export function emptyRow() {
 return { inhrelid: undefined,inhparent: undefined,inhseqno: undefined,inhdetachpending: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgInheritsRelidSeqnoIndex;

export type Optional = Pick<PgCatalog.Types.PgInherits,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgInherits, Optional & PrimaryKey>
export type Options = ReadOptions & {
inhrelid?: Sort;
inhparent?: Sort;
inhseqno?: Sort;
inhdetachpending?: Sort;
};
}
export namespace PgIndex {
export function emptyRow() {
 return { indexrelid: undefined,indrelid: undefined,indnatts: undefined,indnkeyatts: undefined,indisunique: undefined,indnullsnotdistinct: undefined,indisprimary: undefined,indisexclusion: undefined,indimmediate: undefined,indisclustered: undefined,indisvalid: undefined,indcheckxmin: undefined,indisready: undefined,indislive: undefined,indisreplident: undefined,indkey: undefined,indcollation: undefined,indclass: undefined,indoption: undefined,indexprs: undefined,indpred: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgIndexIndexrelidIndex;

export type Optional = Pick<PgCatalog.Types.PgIndex,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgIndex, Optional & PrimaryKey>
export type Options = ReadOptions & {
indexrelid?: Sort;
indrelid?: Sort;
indnatts?: Sort;
indnkeyatts?: Sort;
indisunique?: Sort;
indnullsnotdistinct?: Sort;
indisprimary?: Sort;
indisexclusion?: Sort;
indimmediate?: Sort;
indisclustered?: Sort;
indisvalid?: Sort;
indcheckxmin?: Sort;
indisready?: Sort;
indislive?: Sort;
indisreplident?: Sort;
indkey?: Sort;
indcollation?: Sort;
indclass?: Sort;
indoption?: Sort;
indexprs?: Sort;
indpred?: Sort;
};
}
export namespace PgOperator {
export function emptyRow() {
 return { oid: undefined,oprname: undefined,oprnamespace: undefined,oprowner: undefined,oprkind: undefined,oprcanmerge: undefined,oprcanhash: undefined,oprleft: undefined,oprright: undefined,oprresult: undefined,oprcom: undefined,oprnegate: undefined,oprcode: undefined,oprrest: undefined,oprjoin: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgOperatorOidIndex;

export type Optional = Pick<PgCatalog.Types.PgOperator,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgOperator, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
oprname?: Sort;
oprnamespace?: Sort;
oprowner?: Sort;
oprkind?: Sort;
oprcanmerge?: Sort;
oprcanhash?: Sort;
oprleft?: Sort;
oprright?: Sort;
oprresult?: Sort;
oprcom?: Sort;
oprnegate?: Sort;
oprcode?: Sort;
oprrest?: Sort;
oprjoin?: Sort;
};
}
export namespace PgOpfamily {
export function emptyRow() {
 return { oid: undefined,opfmethod: undefined,opfname: undefined,opfnamespace: undefined,opfowner: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgOpfamilyOidIndex;

export type Optional = Pick<PgCatalog.Types.PgOpfamily,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgOpfamily, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
opfmethod?: Sort;
opfname?: Sort;
opfnamespace?: Sort;
opfowner?: Sort;
};
}
export namespace PgOpclass {
export function emptyRow() {
 return { oid: undefined,opcmethod: undefined,opcname: undefined,opcnamespace: undefined,opcowner: undefined,opcfamily: undefined,opcintype: undefined,opcdefault: undefined,opckeytype: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgOpclassOidIndex;

export type Optional = Pick<PgCatalog.Types.PgOpclass,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgOpclass, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
opcmethod?: Sort;
opcname?: Sort;
opcnamespace?: Sort;
opcowner?: Sort;
opcfamily?: Sort;
opcintype?: Sort;
opcdefault?: Sort;
opckeytype?: Sort;
};
}
export namespace PgAm {
export function emptyRow() {
 return { oid: undefined,amname: undefined,amhandler: undefined,amtype: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgAmOidIndex;

export type Optional = Pick<PgCatalog.Types.PgAm,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgAm, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
amname?: Sort;
amhandler?: Sort;
amtype?: Sort;
};
}
export namespace PgAmop {
export function emptyRow() {
 return { oid: undefined,amopfamily: undefined,amoplefttype: undefined,amoprighttype: undefined,amopstrategy: undefined,amoppurpose: undefined,amopopr: undefined,amopmethod: undefined,amopsortfamily: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgAmopOidIndex;

export type Optional = Pick<PgCatalog.Types.PgAmop,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgAmop, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
amopfamily?: Sort;
amoplefttype?: Sort;
amoprighttype?: Sort;
amopstrategy?: Sort;
amoppurpose?: Sort;
amopopr?: Sort;
amopmethod?: Sort;
amopsortfamily?: Sort;
};
}
export namespace PgAmproc {
export function emptyRow() {
 return { oid: undefined,amprocfamily: undefined,amproclefttype: undefined,amprocrighttype: undefined,amprocnum: undefined,amproc: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgAmprocOidIndex;

export type Optional = Pick<PgCatalog.Types.PgAmproc,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgAmproc, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
amprocfamily?: Sort;
amproclefttype?: Sort;
amprocrighttype?: Sort;
amprocnum?: Sort;
amproc?: Sort;
};
}
export namespace PgLanguage {
export function emptyRow() {
 return { oid: undefined,lanname: undefined,lanowner: undefined,lanispl: undefined,lanpltrusted: undefined,lanplcallfoid: undefined,laninline: undefined,lanvalidator: undefined,lanacl: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgLanguageOidIndex;

export type Optional = Pick<PgCatalog.Types.PgLanguage,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgLanguage, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
lanname?: Sort;
lanowner?: Sort;
lanispl?: Sort;
lanpltrusted?: Sort;
lanplcallfoid?: Sort;
laninline?: Sort;
lanvalidator?: Sort;
lanacl?: Sort;
};
}
export namespace PgLargeobjectMetadata {
export function emptyRow() {
 return { oid: undefined,lomowner: undefined,lomacl: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgLargeobjectMetadataOidIndex;

export type Optional = Pick<PgCatalog.Types.PgLargeobjectMetadata,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgLargeobjectMetadata, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
lomowner?: Sort;
lomacl?: Sort;
};
}
export namespace PgAggregate {
export function emptyRow() {
 return { aggfnoid: undefined,aggkind: undefined,aggnumdirectargs: undefined,aggtransfn: undefined,aggfinalfn: undefined,aggcombinefn: undefined,aggserialfn: undefined,aggdeserialfn: undefined,aggmtransfn: undefined,aggminvtransfn: undefined,aggmfinalfn: undefined,aggfinalextra: undefined,aggmfinalextra: undefined,aggfinalmodify: undefined,aggmfinalmodify: undefined,aggsortop: undefined,aggtranstype: undefined,aggtransspace: undefined,aggmtranstype: undefined,aggmtransspace: undefined,agginitval: undefined,aggminitval: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgAggregateFnoidIndex;

export type Optional = Pick<PgCatalog.Types.PgAggregate,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgAggregate, Optional & PrimaryKey>
export type Options = ReadOptions & {
aggfnoid?: Sort;
aggkind?: Sort;
aggnumdirectargs?: Sort;
aggtransfn?: Sort;
aggfinalfn?: Sort;
aggcombinefn?: Sort;
aggserialfn?: Sort;
aggdeserialfn?: Sort;
aggmtransfn?: Sort;
aggminvtransfn?: Sort;
aggmfinalfn?: Sort;
aggfinalextra?: Sort;
aggmfinalextra?: Sort;
aggfinalmodify?: Sort;
aggmfinalmodify?: Sort;
aggsortop?: Sort;
aggtranstype?: Sort;
aggtransspace?: Sort;
aggmtranstype?: Sort;
aggmtransspace?: Sort;
agginitval?: Sort;
aggminitval?: Sort;
};
}
export namespace PgStatisticExt {
export function emptyRow() {
 return { oid: undefined,stxrelid: undefined,stxname: undefined,stxnamespace: undefined,stxowner: undefined,stxstattarget: undefined,stxkeys: undefined,stxkind: undefined,stxexprs: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgStatisticExtOidIndex;

export type Optional = Pick<PgCatalog.Types.PgStatisticExt,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgStatisticExt, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
stxrelid?: Sort;
stxname?: Sort;
stxnamespace?: Sort;
stxowner?: Sort;
stxstattarget?: Sort;
stxkeys?: Sort;
stxkind?: Sort;
stxexprs?: Sort;
};
}
export namespace PgRewrite {
export function emptyRow() {
 return { oid: undefined,rulename: undefined,evClass: undefined,evType: undefined,evEnabled: undefined,isInstead: undefined,evQual: undefined,evAction: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgRewriteOidIndex;

export type Optional = Pick<PgCatalog.Types.PgRewrite,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgRewrite, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
rulename?: Sort;
ev_class?: Sort;
ev_type?: Sort;
ev_enabled?: Sort;
is_instead?: Sort;
ev_qual?: Sort;
ev_action?: Sort;
};
}
export namespace PgTrigger {
export function emptyRow() {
 return { oid: undefined,tgrelid: undefined,tgparentid: undefined,tgname: undefined,tgfoid: undefined,tgtype: undefined,tgenabled: undefined,tgisinternal: undefined,tgconstrrelid: undefined,tgconstrindid: undefined,tgconstraint: undefined,tgdeferrable: undefined,tginitdeferred: undefined,tgnargs: undefined,tgattr: undefined,tgargs: undefined,tgqual: undefined,tgoldtable: undefined,tgnewtable: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgTriggerOidIndex;

export type Optional = Pick<PgCatalog.Types.PgTrigger,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgTrigger, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
tgrelid?: Sort;
tgparentid?: Sort;
tgname?: Sort;
tgfoid?: Sort;
tgtype?: Sort;
tgenabled?: Sort;
tgisinternal?: Sort;
tgconstrrelid?: Sort;
tgconstrindid?: Sort;
tgconstraint?: Sort;
tgdeferrable?: Sort;
tginitdeferred?: Sort;
tgnargs?: Sort;
tgattr?: Sort;
tgargs?: Sort;
tgqual?: Sort;
tgoldtable?: Sort;
tgnewtable?: Sort;
};
}
export namespace PgEventTrigger {
export function emptyRow() {
 return { oid: undefined,evtname: undefined,evtevent: undefined,evtowner: undefined,evtfoid: undefined,evtenabled: undefined,evttags: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgEventTriggerOidIndex;

export type Optional = Pick<PgCatalog.Types.PgEventTrigger,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgEventTrigger, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
evtname?: Sort;
evtevent?: Sort;
evtowner?: Sort;
evtfoid?: Sort;
evtenabled?: Sort;
evttags?: Sort;
};
}
export namespace PgDescription {
export function emptyRow() {
 return { objoid: undefined,classoid: undefined,objsubid: undefined,description: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgDescriptionOCOIndex;

export type Optional = Pick<PgCatalog.Types.PgDescription,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgDescription, Optional & PrimaryKey>
export type Options = ReadOptions & {
objoid?: Sort;
classoid?: Sort;
objsubid?: Sort;
description?: Sort;
};
}
export namespace PgCast {
export function emptyRow() {
 return { oid: undefined,castsource: undefined,casttarget: undefined,castfunc: undefined,castcontext: undefined,castmethod: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgCastOidIndex;

export type Optional = Pick<PgCatalog.Types.PgCast,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgCast, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
castsource?: Sort;
casttarget?: Sort;
castfunc?: Sort;
castcontext?: Sort;
castmethod?: Sort;
};
}
export namespace PgEnum {
export function emptyRow() {
 return { oid: undefined,enumtypid: undefined,enumsortorder: undefined,enumlabel: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgEnumOidIndex;

export type Optional = Pick<PgCatalog.Types.PgEnum,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgEnum, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
enumtypid?: Sort;
enumsortorder?: Sort;
enumlabel?: Sort;
};
}
export namespace PgNamespace {
export function emptyRow() {
 return { oid: undefined,nspname: undefined,nspowner: undefined,nspacl: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgNamespaceOidIndex;

export type Optional = Pick<PgCatalog.Types.PgNamespace,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgNamespace, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
nspname?: Sort;
nspowner?: Sort;
nspacl?: Sort;
};
}
export namespace PgConversion {
export function emptyRow() {
 return { oid: undefined,conname: undefined,connamespace: undefined,conowner: undefined,conforencoding: undefined,contoencoding: undefined,conproc: undefined,condefault: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgConversionOidIndex;

export type Optional = Pick<PgCatalog.Types.PgConversion,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgConversion, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
conname?: Sort;
connamespace?: Sort;
conowner?: Sort;
conforencoding?: Sort;
contoencoding?: Sort;
conproc?: Sort;
condefault?: Sort;
};
}
export namespace PgDepend {
export function emptyRow() {
 return { classid: undefined,objid: undefined,objsubid: undefined,refclassid: undefined,refobjid: undefined,refobjsubid: undefined,deptype: undefined };
}
export type PrimaryKey = never;
export type Optional = Pick<PgCatalog.Types.PgDepend,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgDepend, Optional & PrimaryKey>
export type Options = ReadOptions & {
classid?: Sort;
objid?: Sort;
objsubid?: Sort;
refclassid?: Sort;
refobjid?: Sort;
refobjsubid?: Sort;
deptype?: Sort;
};
}
export namespace PgDatabase {
export function emptyRow() {
 return { oid: undefined,datname: undefined,datdba: undefined,encoding: undefined,datlocprovider: undefined,datistemplate: undefined,datallowconn: undefined,datconnlimit: undefined,datfrozenxid: undefined,datminmxid: undefined,dattablespace: undefined,datcollate: undefined,datctype: undefined,daticulocale: undefined,daticurules: undefined,datcollversion: undefined,datacl: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgDatabaseOidIndex;

export type Optional = Pick<PgCatalog.Types.PgDatabase,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgDatabase, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
datname?: Sort;
datdba?: Sort;
encoding?: Sort;
datlocprovider?: Sort;
datistemplate?: Sort;
datallowconn?: Sort;
datconnlimit?: Sort;
datfrozenxid?: Sort;
datminmxid?: Sort;
dattablespace?: Sort;
datcollate?: Sort;
datctype?: Sort;
daticulocale?: Sort;
daticurules?: Sort;
datcollversion?: Sort;
datacl?: Sort;
};
}
export namespace PgDbRoleSetting {
export function emptyRow() {
 return { setdatabase: undefined,setrole: undefined,setconfig: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgDbRoleSettingDatabaseidRolIndex;

export type Optional = Pick<PgCatalog.Types.PgDbRoleSetting,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgDbRoleSetting, Optional & PrimaryKey>
export type Options = ReadOptions & {
setdatabase?: Sort;
setrole?: Sort;
setconfig?: Sort;
};
}
export namespace PgTablespace {
export function emptyRow() {
 return { oid: undefined,spcname: undefined,spcowner: undefined,spcacl: undefined,spcoptions: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgTablespaceOidIndex;

export type Optional = Pick<PgCatalog.Types.PgTablespace,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgTablespace, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
spcname?: Sort;
spcowner?: Sort;
spcacl?: Sort;
spcoptions?: Sort;
};
}
export namespace PgAuthMembers {
export function emptyRow() {
 return { oid: undefined,roleid: undefined,member: undefined,grantor: undefined,adminOption: undefined,inheritOption: undefined,setOption: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgAuthMembersOidIndex;

export type Optional = Pick<PgCatalog.Types.PgAuthMembers,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgAuthMembers, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
roleid?: Sort;
member?: Sort;
grantor?: Sort;
admin_option?: Sort;
inherit_option?: Sort;
set_option?: Sort;
};
}
export namespace PgShdepend {
export function emptyRow() {
 return { dbid: undefined,classid: undefined,objid: undefined,objsubid: undefined,refclassid: undefined,refobjid: undefined,deptype: undefined };
}
export type PrimaryKey = never;
export type Optional = Pick<PgCatalog.Types.PgShdepend,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgShdepend, Optional & PrimaryKey>
export type Options = ReadOptions & {
dbid?: Sort;
classid?: Sort;
objid?: Sort;
objsubid?: Sort;
refclassid?: Sort;
refobjid?: Sort;
deptype?: Sort;
};
}
export namespace PgShdescription {
export function emptyRow() {
 return { objoid: undefined,classoid: undefined,description: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgShdescriptionOCIndex;

export type Optional = Pick<PgCatalog.Types.PgShdescription,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgShdescription, Optional & PrimaryKey>
export type Options = ReadOptions & {
objoid?: Sort;
classoid?: Sort;
description?: Sort;
};
}
export namespace PgTsConfig {
export function emptyRow() {
 return { oid: undefined,cfgname: undefined,cfgnamespace: undefined,cfgowner: undefined,cfgparser: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgTsConfigOidIndex;

export type Optional = Pick<PgCatalog.Types.PgTsConfig,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgTsConfig, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
cfgname?: Sort;
cfgnamespace?: Sort;
cfgowner?: Sort;
cfgparser?: Sort;
};
}
export namespace PgTsConfigMap {
export function emptyRow() {
 return { mapcfg: undefined,maptokentype: undefined,mapseqno: undefined,mapdict: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgTsConfigMapIndex;

export type Optional = Pick<PgCatalog.Types.PgTsConfigMap,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgTsConfigMap, Optional & PrimaryKey>
export type Options = ReadOptions & {
mapcfg?: Sort;
maptokentype?: Sort;
mapseqno?: Sort;
mapdict?: Sort;
};
}
export namespace PgTsDict {
export function emptyRow() {
 return { oid: undefined,dictname: undefined,dictnamespace: undefined,dictowner: undefined,dicttemplate: undefined,dictinitoption: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgTsDictOidIndex;

export type Optional = Pick<PgCatalog.Types.PgTsDict,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgTsDict, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
dictname?: Sort;
dictnamespace?: Sort;
dictowner?: Sort;
dicttemplate?: Sort;
dictinitoption?: Sort;
};
}
export namespace PgTsParser {
export function emptyRow() {
 return { oid: undefined,prsname: undefined,prsnamespace: undefined,prsstart: undefined,prstoken: undefined,prsend: undefined,prsheadline: undefined,prslextype: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgTsParserOidIndex;

export type Optional = Pick<PgCatalog.Types.PgTsParser,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgTsParser, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
prsname?: Sort;
prsnamespace?: Sort;
prsstart?: Sort;
prstoken?: Sort;
prsend?: Sort;
prsheadline?: Sort;
prslextype?: Sort;
};
}
export namespace PgTsTemplate {
export function emptyRow() {
 return { oid: undefined,tmplname: undefined,tmplnamespace: undefined,tmplinit: undefined,tmpllexize: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgTsTemplateOidIndex;

export type Optional = Pick<PgCatalog.Types.PgTsTemplate,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgTsTemplate, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
tmplname?: Sort;
tmplnamespace?: Sort;
tmplinit?: Sort;
tmpllexize?: Sort;
};
}
export namespace PgExtension {
export function emptyRow() {
 return { oid: undefined,extname: undefined,extowner: undefined,extnamespace: undefined,extrelocatable: undefined,extversion: undefined,extconfig: undefined,extcondition: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgExtensionOidIndex;

export type Optional = Pick<PgCatalog.Types.PgExtension,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgExtension, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
extname?: Sort;
extowner?: Sort;
extnamespace?: Sort;
extrelocatable?: Sort;
extversion?: Sort;
extconfig?: Sort;
extcondition?: Sort;
};
}
export namespace PgForeignDataWrapper {
export function emptyRow() {
 return { oid: undefined,fdwname: undefined,fdwowner: undefined,fdwhandler: undefined,fdwvalidator: undefined,fdwacl: undefined,fdwoptions: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgForeignDataWrapperOidIndex;

export type Optional = Pick<PgCatalog.Types.PgForeignDataWrapper,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgForeignDataWrapper, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
fdwname?: Sort;
fdwowner?: Sort;
fdwhandler?: Sort;
fdwvalidator?: Sort;
fdwacl?: Sort;
fdwoptions?: Sort;
};
}
export namespace PgForeignServer {
export function emptyRow() {
 return { oid: undefined,srvname: undefined,srvowner: undefined,srvfdw: undefined,srvtype: undefined,srvversion: undefined,srvacl: undefined,srvoptions: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgForeignServerOidIndex;

export type Optional = Pick<PgCatalog.Types.PgForeignServer,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgForeignServer, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
srvname?: Sort;
srvowner?: Sort;
srvfdw?: Sort;
srvtype?: Sort;
srvversion?: Sort;
srvacl?: Sort;
srvoptions?: Sort;
};
}
export namespace PgPolicy {
export function emptyRow() {
 return { oid: undefined,polname: undefined,polrelid: undefined,polcmd: undefined,polpermissive: undefined,polroles: undefined,polqual: undefined,polwithcheck: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgPolicyOidIndex;

export type Optional = Pick<PgCatalog.Types.PgPolicy,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgPolicy, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
polname?: Sort;
polrelid?: Sort;
polcmd?: Sort;
polpermissive?: Sort;
polroles?: Sort;
polqual?: Sort;
polwithcheck?: Sort;
};
}
export namespace PgReplicationOrigin {
export function emptyRow() {
 return { roident: undefined,roname: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgReplicationOriginRoiidentIndex;

export type Optional = Pick<PgCatalog.Types.PgReplicationOrigin,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgReplicationOrigin, Optional & PrimaryKey>
export type Options = ReadOptions & {
roident?: Sort;
roname?: Sort;
};
}
export namespace PgDefaultAcl {
export function emptyRow() {
 return { oid: undefined,defaclrole: undefined,defaclnamespace: undefined,defaclobjtype: undefined,defaclacl: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgDefaultAclOidIndex;

export type Optional = Pick<PgCatalog.Types.PgDefaultAcl,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgDefaultAcl, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
defaclrole?: Sort;
defaclnamespace?: Sort;
defaclobjtype?: Sort;
defaclacl?: Sort;
};
}
export namespace PgInitPrivs {
export function emptyRow() {
 return { objoid: undefined,classoid: undefined,objsubid: undefined,privtype: undefined,initprivs: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgInitPrivsOCOIndex;

export type Optional = Pick<PgCatalog.Types.PgInitPrivs,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgInitPrivs, Optional & PrimaryKey>
export type Options = ReadOptions & {
objoid?: Sort;
classoid?: Sort;
objsubid?: Sort;
privtype?: Sort;
initprivs?: Sort;
};
}
export namespace PgSeclabel {
export function emptyRow() {
 return { objoid: undefined,classoid: undefined,objsubid: undefined,provider: undefined,label: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgSeclabelObjectIndex;

export type Optional = Pick<PgCatalog.Types.PgSeclabel,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgSeclabel, Optional & PrimaryKey>
export type Options = ReadOptions & {
objoid?: Sort;
classoid?: Sort;
objsubid?: Sort;
provider?: Sort;
label?: Sort;
};
}
export namespace PgShseclabel {
export function emptyRow() {
 return { objoid: undefined,classoid: undefined,provider: undefined,label: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgShseclabelObjectIndex;

export type Optional = Pick<PgCatalog.Types.PgShseclabel,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgShseclabel, Optional & PrimaryKey>
export type Options = ReadOptions & {
objoid?: Sort;
classoid?: Sort;
provider?: Sort;
label?: Sort;
};
}
export namespace PgCollation {
export function emptyRow() {
 return { oid: undefined,collname: undefined,collnamespace: undefined,collowner: undefined,collprovider: undefined,collisdeterministic: undefined,collencoding: undefined,collcollate: undefined,collctype: undefined,colliculocale: undefined,collicurules: undefined,collversion: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgCollationOidIndex;

export type Optional = Pick<PgCatalog.Types.PgCollation,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgCollation, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
collname?: Sort;
collnamespace?: Sort;
collowner?: Sort;
collprovider?: Sort;
collisdeterministic?: Sort;
collencoding?: Sort;
collcollate?: Sort;
collctype?: Sort;
colliculocale?: Sort;
collicurules?: Sort;
collversion?: Sort;
};
}
export namespace PgParameterAcl {
export function emptyRow() {
 return { oid: undefined,parname: undefined,paracl: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgParameterAclOidIndex;

export type Optional = Pick<PgCatalog.Types.PgParameterAcl,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgParameterAcl, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
parname?: Sort;
paracl?: Sort;
};
}
export namespace PgPartitionedTable {
export function emptyRow() {
 return { partrelid: undefined,partstrat: undefined,partnatts: undefined,partdefid: undefined,partattrs: undefined,partclass: undefined,partcollation: undefined,partexprs: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgPartitionedTablePartrelidIndex;

export type Optional = Pick<PgCatalog.Types.PgPartitionedTable,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgPartitionedTable, Optional & PrimaryKey>
export type Options = ReadOptions & {
partrelid?: Sort;
partstrat?: Sort;
partnatts?: Sort;
partdefid?: Sort;
partattrs?: Sort;
partclass?: Sort;
partcollation?: Sort;
partexprs?: Sort;
};
}
export namespace PgRange {
export function emptyRow() {
 return { rngtypid: undefined,rngsubtype: undefined,rngmultitypid: undefined,rngcollation: undefined,rngsubopc: undefined,rngcanonical: undefined,rngsubdiff: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgRangeRngtypidIndex;

export type Optional = Pick<PgCatalog.Types.PgRange,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgRange, Optional & PrimaryKey>
export type Options = ReadOptions & {
rngtypid?: Sort;
rngsubtype?: Sort;
rngmultitypid?: Sort;
rngcollation?: Sort;
rngsubopc?: Sort;
rngcanonical?: Sort;
rngsubdiff?: Sort;
};
}
export namespace PgTransform {
export function emptyRow() {
 return { oid: undefined,trftype: undefined,trflang: undefined,trffromsql: undefined,trftosql: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgTransformOidIndex;

export type Optional = Pick<PgCatalog.Types.PgTransform,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgTransform, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
trftype?: Sort;
trflang?: Sort;
trffromsql?: Sort;
trftosql?: Sort;
};
}
export namespace PgSequence {
export function emptyRow() {
 return { seqrelid: undefined,seqtypid: undefined,seqstart: undefined,seqincrement: undefined,seqmax: undefined,seqmin: undefined,seqcache: undefined,seqcycle: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgSequenceSeqrelidIndex;

export type Optional = Pick<PgCatalog.Types.PgSequence,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgSequence, Optional & PrimaryKey>
export type Options = ReadOptions & {
seqrelid?: Sort;
seqtypid?: Sort;
seqstart?: Sort;
seqincrement?: Sort;
seqmax?: Sort;
seqmin?: Sort;
seqcache?: Sort;
seqcycle?: Sort;
};
}
export namespace PgPublication {
export function emptyRow() {
 return { oid: undefined,pubname: undefined,pubowner: undefined,puballtables: undefined,pubinsert: undefined,pubupdate: undefined,pubdelete: undefined,pubtruncate: undefined,pubviaroot: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgPublicationOidIndex;

export type Optional = Pick<PgCatalog.Types.PgPublication,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgPublication, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
pubname?: Sort;
pubowner?: Sort;
puballtables?: Sort;
pubinsert?: Sort;
pubupdate?: Sort;
pubdelete?: Sort;
pubtruncate?: Sort;
pubviaroot?: Sort;
};
}
export namespace PgPublicationNamespace {
export function emptyRow() {
 return { oid: undefined,pnpubid: undefined,pnnspid: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgPublicationNamespaceOidIndex;

export type Optional = Pick<PgCatalog.Types.PgPublicationNamespace,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgPublicationNamespace, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
pnpubid?: Sort;
pnnspid?: Sort;
};
}
export namespace PgPublicationRel {
export function emptyRow() {
 return { oid: undefined,prpubid: undefined,prrelid: undefined,prqual: undefined,prattrs: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgPublicationRelOidIndex;

export type Optional = Pick<PgCatalog.Types.PgPublicationRel,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgPublicationRel, Optional & PrimaryKey>
export type Options = ReadOptions & {
oid?: Sort;
prpubid?: Sort;
prrelid?: Sort;
prqual?: Sort;
prattrs?: Sort;
};
}
export namespace PgSubscriptionRel {
export function emptyRow() {
 return { srsubid: undefined,srrelid: undefined,srsubstate: undefined,srsublsn: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgSubscriptionRelSrrelidSrsubidIndex;

export type Optional = Pick<PgCatalog.Types.PgSubscriptionRel,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgSubscriptionRel, Optional & PrimaryKey>
export type Options = ReadOptions & {
srsubid?: Sort;
srrelid?: Sort;
srsubstate?: Sort;
srsublsn?: Sort;
};
}
export namespace PgLargeobject {
export function emptyRow() {
 return { loid: undefined,pageno: undefined,data: undefined };
}
export type PrimaryKey = PgCatalog.Types.PgLargeobjectLoidPnIndex;

export type Optional = Pick<PgCatalog.Types.PgLargeobject,never>
export type Values = PartiallyOptional<PgCatalog.Types.PgLargeobject, Optional & PrimaryKey>
export type Options = ReadOptions & {
loid?: Sort;
pageno?: Sort;
data?: Sort;
};
}
}
}
export namespace InformationSchema {
export namespace Types {

export type CardinalNumber = PgCatalog.Types.Int4;

export type CardinalNumberArray = 
     Array<InformationSchema.Types.CardinalNumber>
    ;

export type CharacterData = PgCatalog.Types.Varchar;

export type CharacterDataArray = 
     Array<InformationSchema.Types.CharacterData>
    ;

export type SqlIdentifier = PgCatalog.Types.Name;

export type SqlIdentifierArray = 
     Array<InformationSchema.Types.SqlIdentifier>
    ;

export type InformationSchemaCatalogName = {
catalogName: Nullable<InformationSchema.Types.SqlIdentifier>;
}

export type InformationSchemaCatalogNameArray = 
     Array<InformationSchema.Types.InformationSchemaCatalogName>
    ;

export type TimeStamp = PgCatalog.Types.Timestamptz;

export type TimeStampArray = 
     Array<InformationSchema.Types.TimeStamp>
    ;

export type YesOrNo = PgCatalog.Types.Varchar;

export type YesOrNoArray = 
     Array<InformationSchema.Types.YesOrNo>
    ;

export type ApplicableRoles = {
grantee: Nullable<InformationSchema.Types.SqlIdentifier>;
roleName: Nullable<InformationSchema.Types.SqlIdentifier>;
isGrantable: Nullable<InformationSchema.Types.YesOrNo>;
}

export type ApplicableRolesArray = 
     Array<InformationSchema.Types.ApplicableRoles>
    ;

export type AdministrableRoleAuthorizations = {
grantee: Nullable<InformationSchema.Types.SqlIdentifier>;
roleName: Nullable<InformationSchema.Types.SqlIdentifier>;
isGrantable: Nullable<InformationSchema.Types.YesOrNo>;
}

export type AdministrableRoleAuthorizationsArray = 
     Array<InformationSchema.Types.AdministrableRoleAuthorizations>
    ;

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
}

export type AttributesArray = 
     Array<InformationSchema.Types.Attributes>
    ;

export type CharacterSets = {
characterSetCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
characterSetSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
characterSetName: Nullable<InformationSchema.Types.SqlIdentifier>;
characterRepertoire: Nullable<InformationSchema.Types.SqlIdentifier>;
formOfUse: Nullable<InformationSchema.Types.SqlIdentifier>;
defaultCollateCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
defaultCollateSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
defaultCollateName: Nullable<InformationSchema.Types.SqlIdentifier>;
}

export type CharacterSetsArray = 
     Array<InformationSchema.Types.CharacterSets>
    ;

export type CheckConstraintRoutineUsage = {
constraintCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
constraintSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
constraintName: Nullable<InformationSchema.Types.SqlIdentifier>;
specificCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
specificSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
specificName: Nullable<InformationSchema.Types.SqlIdentifier>;
}

export type CheckConstraintRoutineUsageArray = 
     Array<InformationSchema.Types.CheckConstraintRoutineUsage>
    ;

export type CheckConstraints = {
constraintCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
constraintSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
constraintName: Nullable<InformationSchema.Types.SqlIdentifier>;
checkClause: Nullable<InformationSchema.Types.CharacterData>;
}

export type CheckConstraintsArray = 
     Array<InformationSchema.Types.CheckConstraints>
    ;

export type Collations = {
collationCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
collationSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
collationName: Nullable<InformationSchema.Types.SqlIdentifier>;
padAttribute: Nullable<InformationSchema.Types.CharacterData>;
}

export type CollationsArray = 
     Array<InformationSchema.Types.Collations>
    ;

export type CollationCharacterSetApplicability = {
collationCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
collationSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
collationName: Nullable<InformationSchema.Types.SqlIdentifier>;
characterSetCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
characterSetSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
characterSetName: Nullable<InformationSchema.Types.SqlIdentifier>;
}

export type CollationCharacterSetApplicabilityArray = 
     Array<InformationSchema.Types.CollationCharacterSetApplicability>
    ;

export type ColumnColumnUsage = {
tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
columnName: Nullable<InformationSchema.Types.SqlIdentifier>;
dependentColumn: Nullable<InformationSchema.Types.SqlIdentifier>;
}

export type ColumnColumnUsageArray = 
     Array<InformationSchema.Types.ColumnColumnUsage>
    ;

export type ColumnDomainUsage = {
domainCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
domainSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
domainName: Nullable<InformationSchema.Types.SqlIdentifier>;
tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
columnName: Nullable<InformationSchema.Types.SqlIdentifier>;
}

export type ColumnDomainUsageArray = 
     Array<InformationSchema.Types.ColumnDomainUsage>
    ;

export type ColumnPrivileges = {
grantor: Nullable<InformationSchema.Types.SqlIdentifier>;
grantee: Nullable<InformationSchema.Types.SqlIdentifier>;
tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
columnName: Nullable<InformationSchema.Types.SqlIdentifier>;
privilegeType: Nullable<InformationSchema.Types.CharacterData>;
isGrantable: Nullable<InformationSchema.Types.YesOrNo>;
}

export type ColumnPrivilegesArray = 
     Array<InformationSchema.Types.ColumnPrivileges>
    ;

export type ColumnUdtUsage = {
udtCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
udtSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
udtName: Nullable<InformationSchema.Types.SqlIdentifier>;
tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
columnName: Nullable<InformationSchema.Types.SqlIdentifier>;
}

export type ColumnUdtUsageArray = 
     Array<InformationSchema.Types.ColumnUdtUsage>
    ;

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
}

export type ColumnsArray = 
     Array<InformationSchema.Types.Columns>
    ;

export type ConstraintColumnUsage = {
tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
columnName: Nullable<InformationSchema.Types.SqlIdentifier>;
constraintCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
constraintSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
constraintName: Nullable<InformationSchema.Types.SqlIdentifier>;
}

export type ConstraintColumnUsageArray = 
     Array<InformationSchema.Types.ConstraintColumnUsage>
    ;

export type ConstraintTableUsage = {
tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
constraintCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
constraintSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
constraintName: Nullable<InformationSchema.Types.SqlIdentifier>;
}

export type ConstraintTableUsageArray = 
     Array<InformationSchema.Types.ConstraintTableUsage>
    ;

export type DomainConstraints = {
constraintCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
constraintSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
constraintName: Nullable<InformationSchema.Types.SqlIdentifier>;
domainCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
domainSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
domainName: Nullable<InformationSchema.Types.SqlIdentifier>;
isDeferrable: Nullable<InformationSchema.Types.YesOrNo>;
initiallyDeferred: Nullable<InformationSchema.Types.YesOrNo>;
}

export type DomainConstraintsArray = 
     Array<InformationSchema.Types.DomainConstraints>
    ;

export type DomainUdtUsage = {
udtCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
udtSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
udtName: Nullable<InformationSchema.Types.SqlIdentifier>;
domainCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
domainSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
domainName: Nullable<InformationSchema.Types.SqlIdentifier>;
}

export type DomainUdtUsageArray = 
     Array<InformationSchema.Types.DomainUdtUsage>
    ;

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
}

export type DomainsArray = 
     Array<InformationSchema.Types.Domains>
    ;

export type EnabledRoles = {
roleName: Nullable<InformationSchema.Types.SqlIdentifier>;
}

export type EnabledRolesArray = 
     Array<InformationSchema.Types.EnabledRoles>
    ;

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
}

export type KeyColumnUsageArray = 
     Array<InformationSchema.Types.KeyColumnUsage>
    ;

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
}

export type ParametersArray = 
     Array<InformationSchema.Types.Parameters>
    ;

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
}

export type ReferentialConstraintsArray = 
     Array<InformationSchema.Types.ReferentialConstraints>
    ;

export type RoleColumnGrants = {
grantor: Nullable<InformationSchema.Types.SqlIdentifier>;
grantee: Nullable<InformationSchema.Types.SqlIdentifier>;
tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
columnName: Nullable<InformationSchema.Types.SqlIdentifier>;
privilegeType: Nullable<InformationSchema.Types.CharacterData>;
isGrantable: Nullable<InformationSchema.Types.YesOrNo>;
}

export type RoleColumnGrantsArray = 
     Array<InformationSchema.Types.RoleColumnGrants>
    ;

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
}

export type RoutineColumnUsageArray = 
     Array<InformationSchema.Types.RoutineColumnUsage>
    ;

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
}

export type RoutinePrivilegesArray = 
     Array<InformationSchema.Types.RoutinePrivileges>
    ;

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
}

export type RoleRoutineGrantsArray = 
     Array<InformationSchema.Types.RoleRoutineGrants>
    ;

export type RoutineRoutineUsage = {
specificCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
specificSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
specificName: Nullable<InformationSchema.Types.SqlIdentifier>;
routineCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
routineSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
routineName: Nullable<InformationSchema.Types.SqlIdentifier>;
}

export type RoutineRoutineUsageArray = 
     Array<InformationSchema.Types.RoutineRoutineUsage>
    ;

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
}

export type RoutineSequenceUsageArray = 
     Array<InformationSchema.Types.RoutineSequenceUsage>
    ;

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
}

export type RoutineTableUsageArray = 
     Array<InformationSchema.Types.RoutineTableUsage>
    ;

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
}

export type RoutinesArray = 
     Array<InformationSchema.Types.Routines>
    ;

export type Schemata = {
catalogName: Nullable<InformationSchema.Types.SqlIdentifier>;
schemaName: Nullable<InformationSchema.Types.SqlIdentifier>;
schemaOwner: Nullable<InformationSchema.Types.SqlIdentifier>;
defaultCharacterSetCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
defaultCharacterSetSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
defaultCharacterSetName: Nullable<InformationSchema.Types.SqlIdentifier>;
sqlPath: Nullable<InformationSchema.Types.CharacterData>;
}

export type SchemataArray = 
     Array<InformationSchema.Types.Schemata>
    ;

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
}

export type SequencesArray = 
     Array<InformationSchema.Types.Sequences>
    ;

export type SqlFeatures = {
featureId: Nullable<InformationSchema.Types.CharacterData>;
featureName: Nullable<InformationSchema.Types.CharacterData>;
subFeatureId: Nullable<InformationSchema.Types.CharacterData>;
subFeatureName: Nullable<InformationSchema.Types.CharacterData>;
isSupported: Nullable<InformationSchema.Types.YesOrNo>;
isVerifiedBy: Nullable<InformationSchema.Types.CharacterData>;
comments: Nullable<InformationSchema.Types.CharacterData>;
}

export type SqlFeaturesArray = 
     Array<InformationSchema.Types.SqlFeatures>
    ;

export type SqlImplementationInfo = {
implementationInfoId: Nullable<InformationSchema.Types.CharacterData>;
implementationInfoName: Nullable<InformationSchema.Types.CharacterData>;
integerValue: Nullable<InformationSchema.Types.CardinalNumber>;
characterValue: Nullable<InformationSchema.Types.CharacterData>;
comments: Nullable<InformationSchema.Types.CharacterData>;
}

export type SqlImplementationInfoArray = 
     Array<InformationSchema.Types.SqlImplementationInfo>
    ;

export type SqlParts = {
featureId: Nullable<InformationSchema.Types.CharacterData>;
featureName: Nullable<InformationSchema.Types.CharacterData>;
isSupported: Nullable<InformationSchema.Types.YesOrNo>;
isVerifiedBy: Nullable<InformationSchema.Types.CharacterData>;
comments: Nullable<InformationSchema.Types.CharacterData>;
}

export type SqlPartsArray = 
     Array<InformationSchema.Types.SqlParts>
    ;

export type SqlSizing = {
sizingId: Nullable<InformationSchema.Types.CardinalNumber>;
sizingName: Nullable<InformationSchema.Types.CharacterData>;
supportedValue: Nullable<InformationSchema.Types.CardinalNumber>;
comments: Nullable<InformationSchema.Types.CharacterData>;
}

export type SqlSizingArray = 
     Array<InformationSchema.Types.SqlSizing>
    ;

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
}

export type TableConstraintsArray = 
     Array<InformationSchema.Types.TableConstraints>
    ;

export type TablePrivileges = {
grantor: Nullable<InformationSchema.Types.SqlIdentifier>;
grantee: Nullable<InformationSchema.Types.SqlIdentifier>;
tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
privilegeType: Nullable<InformationSchema.Types.CharacterData>;
isGrantable: Nullable<InformationSchema.Types.YesOrNo>;
withHierarchy: Nullable<InformationSchema.Types.YesOrNo>;
}

export type TablePrivilegesArray = 
     Array<InformationSchema.Types.TablePrivileges>
    ;

export type RoleTableGrants = {
grantor: Nullable<InformationSchema.Types.SqlIdentifier>;
grantee: Nullable<InformationSchema.Types.SqlIdentifier>;
tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
privilegeType: Nullable<InformationSchema.Types.CharacterData>;
isGrantable: Nullable<InformationSchema.Types.YesOrNo>;
withHierarchy: Nullable<InformationSchema.Types.YesOrNo>;
}

export type RoleTableGrantsArray = 
     Array<InformationSchema.Types.RoleTableGrants>
    ;

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
}

export type TablesArray = 
     Array<InformationSchema.Types.Tables>
    ;

export type Transforms = {
udtCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
udtSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
udtName: Nullable<InformationSchema.Types.SqlIdentifier>;
specificCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
specificSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
specificName: Nullable<InformationSchema.Types.SqlIdentifier>;
groupName: Nullable<InformationSchema.Types.SqlIdentifier>;
transformType: Nullable<InformationSchema.Types.CharacterData>;
}

export type TransformsArray = 
     Array<InformationSchema.Types.Transforms>
    ;

export type TriggeredUpdateColumns = {
triggerCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
triggerSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
triggerName: Nullable<InformationSchema.Types.SqlIdentifier>;
eventObjectCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
eventObjectSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
eventObjectTable: Nullable<InformationSchema.Types.SqlIdentifier>;
eventObjectColumn: Nullable<InformationSchema.Types.SqlIdentifier>;
}

export type TriggeredUpdateColumnsArray = 
     Array<InformationSchema.Types.TriggeredUpdateColumns>
    ;

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
}

export type TriggersArray = 
     Array<InformationSchema.Types.Triggers>
    ;

export type UdtPrivileges = {
grantor: Nullable<InformationSchema.Types.SqlIdentifier>;
grantee: Nullable<InformationSchema.Types.SqlIdentifier>;
udtCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
udtSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
udtName: Nullable<InformationSchema.Types.SqlIdentifier>;
privilegeType: Nullable<InformationSchema.Types.CharacterData>;
isGrantable: Nullable<InformationSchema.Types.YesOrNo>;
}

export type UdtPrivilegesArray = 
     Array<InformationSchema.Types.UdtPrivileges>
    ;

export type RoleUdtGrants = {
grantor: Nullable<InformationSchema.Types.SqlIdentifier>;
grantee: Nullable<InformationSchema.Types.SqlIdentifier>;
udtCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
udtSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
udtName: Nullable<InformationSchema.Types.SqlIdentifier>;
privilegeType: Nullable<InformationSchema.Types.CharacterData>;
isGrantable: Nullable<InformationSchema.Types.YesOrNo>;
}

export type RoleUdtGrantsArray = 
     Array<InformationSchema.Types.RoleUdtGrants>
    ;

export type UsagePrivileges = {
grantor: Nullable<InformationSchema.Types.SqlIdentifier>;
grantee: Nullable<InformationSchema.Types.SqlIdentifier>;
objectCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
objectSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
objectName: Nullable<InformationSchema.Types.SqlIdentifier>;
objectType: Nullable<InformationSchema.Types.CharacterData>;
privilegeType: Nullable<InformationSchema.Types.CharacterData>;
isGrantable: Nullable<InformationSchema.Types.YesOrNo>;
}

export type UsagePrivilegesArray = 
     Array<InformationSchema.Types.UsagePrivileges>
    ;

export type RoleUsageGrants = {
grantor: Nullable<InformationSchema.Types.SqlIdentifier>;
grantee: Nullable<InformationSchema.Types.SqlIdentifier>;
objectCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
objectSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
objectName: Nullable<InformationSchema.Types.SqlIdentifier>;
objectType: Nullable<InformationSchema.Types.CharacterData>;
privilegeType: Nullable<InformationSchema.Types.CharacterData>;
isGrantable: Nullable<InformationSchema.Types.YesOrNo>;
}

export type RoleUsageGrantsArray = 
     Array<InformationSchema.Types.RoleUsageGrants>
    ;

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
}

export type UserDefinedTypesArray = 
     Array<InformationSchema.Types.UserDefinedTypes>
    ;

export type ViewColumnUsage = {
viewCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
viewSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
viewName: Nullable<InformationSchema.Types.SqlIdentifier>;
tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
columnName: Nullable<InformationSchema.Types.SqlIdentifier>;
}

export type ViewColumnUsageArray = 
     Array<InformationSchema.Types.ViewColumnUsage>
    ;

export type ViewRoutineUsage = {
tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
specificCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
specificSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
specificName: Nullable<InformationSchema.Types.SqlIdentifier>;
}

export type ViewRoutineUsageArray = 
     Array<InformationSchema.Types.ViewRoutineUsage>
    ;

export type ViewTableUsage = {
viewCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
viewSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
viewName: Nullable<InformationSchema.Types.SqlIdentifier>;
tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
}

export type ViewTableUsageArray = 
     Array<InformationSchema.Types.ViewTableUsage>
    ;

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
}

export type ViewsArray = 
     Array<InformationSchema.Types.Views>
    ;

export type DataTypePrivileges = {
objectCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
objectSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
objectName: Nullable<InformationSchema.Types.SqlIdentifier>;
objectType: Nullable<InformationSchema.Types.CharacterData>;
dtdIdentifier: Nullable<InformationSchema.Types.SqlIdentifier>;
}

export type DataTypePrivilegesArray = 
     Array<InformationSchema.Types.DataTypePrivileges>
    ;

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
}

export type ElementTypesArray = 
     Array<InformationSchema.Types.ElementTypes>
    ;

export type PgForeignTableColumns = {
nspname: Nullable<PgCatalog.Types.Name>;
relname: Nullable<PgCatalog.Types.Name>;
attname: Nullable<PgCatalog.Types.Name>;
attfdwoptions: PgCatalog.Types.TextArray;
}

export type ColumnOptions = {
tableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
tableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
tableName: Nullable<InformationSchema.Types.SqlIdentifier>;
columnName: Nullable<InformationSchema.Types.SqlIdentifier>;
optionName: Nullable<InformationSchema.Types.SqlIdentifier>;
optionValue: Nullable<InformationSchema.Types.CharacterData>;
}

export type ColumnOptionsArray = 
     Array<InformationSchema.Types.ColumnOptions>
    ;

export type PgForeignDataWrappers = {
oid: Nullable<PgCatalog.Types.Oid>;
fdwowner: Nullable<PgCatalog.Types.Oid>;
fdwoptions: PgCatalog.Types.TextArray;
foreignDataWrapperCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
foreignDataWrapperName: Nullable<InformationSchema.Types.SqlIdentifier>;
authorizationIdentifier: Nullable<InformationSchema.Types.SqlIdentifier>;
foreignDataWrapperLanguage: Nullable<InformationSchema.Types.CharacterData>;
}

export type ForeignDataWrapperOptions = {
foreignDataWrapperCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
foreignDataWrapperName: Nullable<InformationSchema.Types.SqlIdentifier>;
optionName: Nullable<InformationSchema.Types.SqlIdentifier>;
optionValue: Nullable<InformationSchema.Types.CharacterData>;
}

export type ForeignDataWrapperOptionsArray = 
     Array<InformationSchema.Types.ForeignDataWrapperOptions>
    ;

export type ForeignDataWrappers = {
foreignDataWrapperCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
foreignDataWrapperName: Nullable<InformationSchema.Types.SqlIdentifier>;
authorizationIdentifier: Nullable<InformationSchema.Types.SqlIdentifier>;
libraryName: Nullable<InformationSchema.Types.CharacterData>;
foreignDataWrapperLanguage: Nullable<InformationSchema.Types.CharacterData>;
}

export type ForeignDataWrappersArray = 
     Array<InformationSchema.Types.ForeignDataWrappers>
    ;

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
}

export type ForeignServerOptions = {
foreignServerCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
foreignServerName: Nullable<InformationSchema.Types.SqlIdentifier>;
optionName: Nullable<InformationSchema.Types.SqlIdentifier>;
optionValue: Nullable<InformationSchema.Types.CharacterData>;
}

export type ForeignServerOptionsArray = 
     Array<InformationSchema.Types.ForeignServerOptions>
    ;

export type ForeignServers = {
foreignServerCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
foreignServerName: Nullable<InformationSchema.Types.SqlIdentifier>;
foreignDataWrapperCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
foreignDataWrapperName: Nullable<InformationSchema.Types.SqlIdentifier>;
foreignServerType: Nullable<InformationSchema.Types.CharacterData>;
foreignServerVersion: Nullable<InformationSchema.Types.CharacterData>;
authorizationIdentifier: Nullable<InformationSchema.Types.SqlIdentifier>;
}

export type ForeignServersArray = 
     Array<InformationSchema.Types.ForeignServers>
    ;

export type PgForeignTables = {
foreignTableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
foreignTableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
foreignTableName: Nullable<InformationSchema.Types.SqlIdentifier>;
ftoptions: PgCatalog.Types.TextArray;
foreignServerCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
foreignServerName: Nullable<InformationSchema.Types.SqlIdentifier>;
authorizationIdentifier: Nullable<InformationSchema.Types.SqlIdentifier>;
}

export type ForeignTableOptions = {
foreignTableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
foreignTableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
foreignTableName: Nullable<InformationSchema.Types.SqlIdentifier>;
optionName: Nullable<InformationSchema.Types.SqlIdentifier>;
optionValue: Nullable<InformationSchema.Types.CharacterData>;
}

export type ForeignTableOptionsArray = 
     Array<InformationSchema.Types.ForeignTableOptions>
    ;

export type ForeignTables = {
foreignTableCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
foreignTableSchema: Nullable<InformationSchema.Types.SqlIdentifier>;
foreignTableName: Nullable<InformationSchema.Types.SqlIdentifier>;
foreignServerCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
foreignServerName: Nullable<InformationSchema.Types.SqlIdentifier>;
}

export type ForeignTablesArray = 
     Array<InformationSchema.Types.ForeignTables>
    ;

export type PgUserMappings = {
oid: Nullable<PgCatalog.Types.Oid>;
umoptions: PgCatalog.Types.TextArray;
umuser: Nullable<PgCatalog.Types.Oid>;
authorizationIdentifier: Nullable<InformationSchema.Types.SqlIdentifier>;
foreignServerCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
foreignServerName: Nullable<InformationSchema.Types.SqlIdentifier>;
srvowner: Nullable<InformationSchema.Types.SqlIdentifier>;
}

export type UserMappingOptions = {
authorizationIdentifier: Nullable<InformationSchema.Types.SqlIdentifier>;
foreignServerCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
foreignServerName: Nullable<InformationSchema.Types.SqlIdentifier>;
optionName: Nullable<InformationSchema.Types.SqlIdentifier>;
optionValue: Nullable<InformationSchema.Types.CharacterData>;
}

export type UserMappingOptionsArray = 
     Array<InformationSchema.Types.UserMappingOptions>
    ;

export type UserMappings = {
authorizationIdentifier: Nullable<InformationSchema.Types.SqlIdentifier>;
foreignServerCatalog: Nullable<InformationSchema.Types.SqlIdentifier>;
foreignServerName: Nullable<InformationSchema.Types.SqlIdentifier>;
}

export type UserMappingsArray = 
     Array<InformationSchema.Types.UserMappings>
    ;
}
export namespace Procedures {
}
export namespace Tables {
export namespace SqlFeatures {
export function emptyRow() {
 return { featureId: undefined,featureName: undefined,subFeatureId: undefined,subFeatureName: undefined,isSupported: undefined,isVerifiedBy: undefined,comments: undefined };
}
export type PrimaryKey = never;
export type Optional = Pick<InformationSchema.Types.SqlFeatures,never>
export type Values = PartiallyOptional<InformationSchema.Types.SqlFeatures, Optional & PrimaryKey>
export type Options = ReadOptions & {
feature_id?: Sort;
feature_name?: Sort;
sub_feature_id?: Sort;
sub_feature_name?: Sort;
is_supported?: Sort;
is_verified_by?: Sort;
comments?: Sort;
};
}
export namespace SqlImplementationInfo {
export function emptyRow() {
 return { implementationInfoId: undefined,implementationInfoName: undefined,integerValue: undefined,characterValue: undefined,comments: undefined };
}
export type PrimaryKey = never;
export type Optional = Pick<InformationSchema.Types.SqlImplementationInfo,never>
export type Values = PartiallyOptional<InformationSchema.Types.SqlImplementationInfo, Optional & PrimaryKey>
export type Options = ReadOptions & {
implementation_info_id?: Sort;
implementation_info_name?: Sort;
integer_value?: Sort;
character_value?: Sort;
comments?: Sort;
};
}
export namespace SqlParts {
export function emptyRow() {
 return { featureId: undefined,featureName: undefined,isSupported: undefined,isVerifiedBy: undefined,comments: undefined };
}
export type PrimaryKey = never;
export type Optional = Pick<InformationSchema.Types.SqlParts,never>
export type Values = PartiallyOptional<InformationSchema.Types.SqlParts, Optional & PrimaryKey>
export type Options = ReadOptions & {
feature_id?: Sort;
feature_name?: Sort;
is_supported?: Sort;
is_verified_by?: Sort;
comments?: Sort;
};
}
export namespace SqlSizing {
export function emptyRow() {
 return { sizingId: undefined,sizingName: undefined,supportedValue: undefined,comments: undefined };
}
export type PrimaryKey = never;
export type Optional = Pick<InformationSchema.Types.SqlSizing,never>
export type Values = PartiallyOptional<InformationSchema.Types.SqlSizing, Optional & PrimaryKey>
export type Options = ReadOptions & {
sizing_id?: Sort;
sizing_name?: Sort;
supported_value?: Sort;
comments?: Sort;
};
}
}
}
export namespace Public {
export namespace Types {

              export enum MpaaRating {
                G = "G",PG = "PG",PG_13 = "PG-13",R = "R",NC_17 = "NC-17"
              };
            

export type MpaaRatingArray = 
     Array<Public.Types.MpaaRating>
    ;

export type Year = PgCatalog.Types.Int4;

export type YearArray = 
     Array<Public.Types.Year>
    ;

export type Customer = {
customerId: PgCatalog.Types.Int4;
storeId: PgCatalog.Types.Int2;
firstName: PgCatalog.Types.Varchar;
lastName: PgCatalog.Types.Varchar;
email: Nullable<PgCatalog.Types.Varchar>;
addressId: PgCatalog.Types.Int2;
activebool: PgCatalog.Types.Bool;
createDate: PgCatalog.Types.Date;
lastUpdate: Nullable<PgCatalog.Types.Timestamp>;
active: Nullable<PgCatalog.Types.Int4>;
}

export type CustomerArray = 
     Array<Public.Types.Customer>
    ;

export type Actor = {
actorId: PgCatalog.Types.Int4;
firstName: PgCatalog.Types.Varchar;
lastName: PgCatalog.Types.Varchar;
lastUpdate: PgCatalog.Types.Timestamp;
}

export type ActorArray = 
     Array<Public.Types.Actor>
    ;

export type Category = {
categoryId: PgCatalog.Types.Int4;
name: PgCatalog.Types.Varchar;
lastUpdate: PgCatalog.Types.Timestamp;
}

export type CategoryArray = 
     Array<Public.Types.Category>
    ;

export type Film = {
filmId: PgCatalog.Types.Int4;
title: PgCatalog.Types.Varchar;
description: Nullable<PgCatalog.Types.Text>;
releaseYear: Nullable<Public.Types.Year>;
languageId: PgCatalog.Types.Int2;
rentalDuration: PgCatalog.Types.Int2;
rentalRate: PgCatalog.Types.Numeric;
length: Nullable<PgCatalog.Types.Int2>;
replacementCost: PgCatalog.Types.Numeric;
rating: Nullable<Public.Types.MpaaRating>;
lastUpdate: PgCatalog.Types.Timestamp;
specialFeatures: PgCatalog.Types.TextArray;
fulltext: PgCatalog.Types.Tsvector;
}

export type FilmArray = 
     Array<Public.Types.Film>
    ;

export type FilmActor = {
actorId: PgCatalog.Types.Int2;
filmId: PgCatalog.Types.Int2;
lastUpdate: PgCatalog.Types.Timestamp;
}

export type FilmActorArray = 
     Array<Public.Types.FilmActor>
    ;

export type FilmCategory = {
filmId: PgCatalog.Types.Int2;
categoryId: PgCatalog.Types.Int2;
lastUpdate: PgCatalog.Types.Timestamp;
}

export type FilmCategoryArray = 
     Array<Public.Types.FilmCategory>
    ;

export type ActorInfo = {
actorId: Nullable<PgCatalog.Types.Int4>;
firstName: Nullable<PgCatalog.Types.Varchar>;
lastName: Nullable<PgCatalog.Types.Varchar>;
filmInfo: Nullable<PgCatalog.Types.Text>;
}

export type ActorInfoArray = 
     Array<Public.Types.ActorInfo>
    ;

export type Address = {
addressId: PgCatalog.Types.Int4;
address: PgCatalog.Types.Varchar;
address2: Nullable<PgCatalog.Types.Varchar>;
district: PgCatalog.Types.Varchar;
cityId: PgCatalog.Types.Int2;
postalCode: Nullable<PgCatalog.Types.Varchar>;
phone: PgCatalog.Types.Varchar;
lastUpdate: PgCatalog.Types.Timestamp;
}

export type AddressArray = 
     Array<Public.Types.Address>
    ;

export type City = {
cityId: PgCatalog.Types.Int4;
city: PgCatalog.Types.Varchar;
countryId: PgCatalog.Types.Int2;
lastUpdate: PgCatalog.Types.Timestamp;
}

export type CityArray = 
     Array<Public.Types.City>
    ;

export type Country = {
countryId: PgCatalog.Types.Int4;
country: PgCatalog.Types.Varchar;
lastUpdate: PgCatalog.Types.Timestamp;
}

export type CountryArray = 
     Array<Public.Types.Country>
    ;

export type CustomerList = {
id: Nullable<PgCatalog.Types.Int4>;
name: Nullable<PgCatalog.Types.Text>;
address: Nullable<PgCatalog.Types.Varchar>;
zipCode: Nullable<PgCatalog.Types.Varchar>;
phone: Nullable<PgCatalog.Types.Varchar>;
city: Nullable<PgCatalog.Types.Varchar>;
country: Nullable<PgCatalog.Types.Varchar>;
notes: Nullable<PgCatalog.Types.Text>;
sid: Nullable<PgCatalog.Types.Int2>;
}

export type CustomerListArray = 
     Array<Public.Types.CustomerList>
    ;

export type FilmList = {
fid: Nullable<PgCatalog.Types.Int4>;
title: Nullable<PgCatalog.Types.Varchar>;
description: Nullable<PgCatalog.Types.Text>;
category: Nullable<PgCatalog.Types.Varchar>;
price: Nullable<PgCatalog.Types.Numeric>;
length: Nullable<PgCatalog.Types.Int2>;
rating: Nullable<Public.Types.MpaaRating>;
actors: Nullable<PgCatalog.Types.Text>;
}

export type FilmListArray = 
     Array<Public.Types.FilmList>
    ;

export type Inventory = {
inventoryId: PgCatalog.Types.Int4;
filmId: PgCatalog.Types.Int2;
storeId: PgCatalog.Types.Int2;
lastUpdate: PgCatalog.Types.Timestamp;
}

export type InventoryArray = 
     Array<Public.Types.Inventory>
    ;

export type Language = {
languageId: PgCatalog.Types.Int4;
name: PgCatalog.Types.Bpchar;
lastUpdate: PgCatalog.Types.Timestamp;
}

export type LanguageArray = 
     Array<Public.Types.Language>
    ;

export type NicerButSlowerFilmList = {
fid: Nullable<PgCatalog.Types.Int4>;
title: Nullable<PgCatalog.Types.Varchar>;
description: Nullable<PgCatalog.Types.Text>;
category: Nullable<PgCatalog.Types.Varchar>;
price: Nullable<PgCatalog.Types.Numeric>;
length: Nullable<PgCatalog.Types.Int2>;
rating: Nullable<Public.Types.MpaaRating>;
actors: Nullable<PgCatalog.Types.Text>;
}

export type NicerButSlowerFilmListArray = 
     Array<Public.Types.NicerButSlowerFilmList>
    ;

export type Payment = {
paymentId: PgCatalog.Types.Int4;
customerId: PgCatalog.Types.Int2;
staffId: PgCatalog.Types.Int2;
rentalId: PgCatalog.Types.Int4;
amount: PgCatalog.Types.Numeric;
paymentDate: PgCatalog.Types.Timestamp;
}

export type PaymentArray = 
     Array<Public.Types.Payment>
    ;

export type Rental = {
rentalId: PgCatalog.Types.Int4;
rentalDate: PgCatalog.Types.Timestamp;
inventoryId: PgCatalog.Types.Int4;
customerId: PgCatalog.Types.Int2;
returnDate: Nullable<PgCatalog.Types.Timestamp>;
staffId: PgCatalog.Types.Int2;
lastUpdate: PgCatalog.Types.Timestamp;
}

export type RentalArray = 
     Array<Public.Types.Rental>
    ;

export type SalesByFilmCategory = {
category: Nullable<PgCatalog.Types.Varchar>;
totalSales: Nullable<PgCatalog.Types.Numeric>;
}

export type SalesByFilmCategoryArray = 
     Array<Public.Types.SalesByFilmCategory>
    ;

export type Staff = {
staffId: PgCatalog.Types.Int4;
firstName: PgCatalog.Types.Varchar;
lastName: PgCatalog.Types.Varchar;
addressId: PgCatalog.Types.Int2;
email: Nullable<PgCatalog.Types.Varchar>;
storeId: PgCatalog.Types.Int2;
active: PgCatalog.Types.Bool;
username: PgCatalog.Types.Varchar;
password: Nullable<PgCatalog.Types.Varchar>;
lastUpdate: PgCatalog.Types.Timestamp;
picture: Nullable<PgCatalog.Types.Bytea>;
}

export type StaffArray = 
     Array<Public.Types.Staff>
    ;

export type Store = {
storeId: PgCatalog.Types.Int4;
managerStaffId: PgCatalog.Types.Int2;
addressId: PgCatalog.Types.Int2;
lastUpdate: PgCatalog.Types.Timestamp;
}

export type StoreArray = 
     Array<Public.Types.Store>
    ;

export type SalesByStore = {
store: Nullable<PgCatalog.Types.Text>;
manager: Nullable<PgCatalog.Types.Text>;
totalSales: Nullable<PgCatalog.Types.Numeric>;
}

export type SalesByStoreArray = 
     Array<Public.Types.SalesByStore>
    ;

export type StaffList = {
id: Nullable<PgCatalog.Types.Int4>;
name: Nullable<PgCatalog.Types.Text>;
address: Nullable<PgCatalog.Types.Varchar>;
zipCode: Nullable<PgCatalog.Types.Varchar>;
phone: Nullable<PgCatalog.Types.Varchar>;
city: Nullable<PgCatalog.Types.Varchar>;
country: Nullable<PgCatalog.Types.Varchar>;
sid: Nullable<PgCatalog.Types.Int2>;
}

export type StaffListArray = 
     Array<Public.Types.StaffList>
    ;

export type ActorPkey = {
actorId: Nullable<PgCatalog.Types.Int4>;
}

export type AddressPkey = {
addressId: Nullable<PgCatalog.Types.Int4>;
}

export type CategoryPkey = {
categoryId: Nullable<PgCatalog.Types.Int4>;
}

export type CityPkey = {
cityId: Nullable<PgCatalog.Types.Int4>;
}

export type CountryPkey = {
countryId: Nullable<PgCatalog.Types.Int4>;
}

export type CustomerPkey = {
customerId: Nullable<PgCatalog.Types.Int4>;
}

export type FilmActorPkey = {
actorId: Nullable<PgCatalog.Types.Int2>;
filmId: Nullable<PgCatalog.Types.Int2>;
}

export type FilmCategoryPkey = {
filmId: Nullable<PgCatalog.Types.Int2>;
categoryId: Nullable<PgCatalog.Types.Int2>;
}

export type FilmPkey = {
filmId: Nullable<PgCatalog.Types.Int4>;
}

export type InventoryPkey = {
inventoryId: Nullable<PgCatalog.Types.Int4>;
}

export type LanguagePkey = {
languageId: Nullable<PgCatalog.Types.Int4>;
}

export type PaymentPkey = {
paymentId: Nullable<PgCatalog.Types.Int4>;
}

export type RentalPkey = {
rentalId: Nullable<PgCatalog.Types.Int4>;
}

export type StaffPkey = {
staffId: Nullable<PgCatalog.Types.Int4>;
}

export type StorePkey = {
storeId: Nullable<PgCatalog.Types.Int4>;
}

export type FilmFulltextIdx = {
fulltext: Nullable<PgCatalog.Types.Tsvector>;
}

export type IdxActorLastName = {
lastName: Nullable<PgCatalog.Types.Varchar>;
}

export type IdxFkAddressId = {
addressId: Nullable<PgCatalog.Types.Int2>;
}

export type IdxFkCityId = {
cityId: Nullable<PgCatalog.Types.Int2>;
}

export type IdxFkCountryId = {
countryId: Nullable<PgCatalog.Types.Int2>;
}

export type IdxFkCustomerId = {
customerId: Nullable<PgCatalog.Types.Int2>;
}

export type IdxFkFilmId = {
filmId: Nullable<PgCatalog.Types.Int2>;
}

export type IdxFkInventoryId = {
inventoryId: Nullable<PgCatalog.Types.Int4>;
}

export type IdxFkLanguageId = {
languageId: Nullable<PgCatalog.Types.Int2>;
}

export type IdxFkRentalId = {
rentalId: Nullable<PgCatalog.Types.Int4>;
}

export type IdxFkStaffId = {
staffId: Nullable<PgCatalog.Types.Int2>;
}

export type IdxFkStoreId = {
storeId: Nullable<PgCatalog.Types.Int2>;
}

export type IdxLastName = {
lastName: Nullable<PgCatalog.Types.Varchar>;
}

export type IdxStoreIdFilmId = {
storeId: Nullable<PgCatalog.Types.Int2>;
filmId: Nullable<PgCatalog.Types.Int2>;
}

export type IdxTitle = {
title: Nullable<PgCatalog.Types.Varchar>;
}

export type IdxUnqManagerStaffId = {
managerStaffId: Nullable<PgCatalog.Types.Int2>;
}

export type IdxUnqRentalRentalDateInventoryIdCustomerId = {
rentalDate: Nullable<PgCatalog.Types.Timestamp>;
inventoryId: Nullable<PgCatalog.Types.Int4>;
customerId: Nullable<PgCatalog.Types.Int2>;
}
}
export namespace Procedures {
export namespace FilmInStock {

export type Parameters = {
pFilmId: Nullable<PgCatalog.Types.Int4>;
pStoreId: Nullable<PgCatalog.Types.Int4>;
}
}
export namespace FilmNotInStock {

export type Parameters = {
pFilmId: Nullable<PgCatalog.Types.Int4>;
pStoreId: Nullable<PgCatalog.Types.Int4>;
}
}
export namespace GetCustomerBalance {

export type Parameters = {
pCustomerId: Nullable<PgCatalog.Types.Int4>;
pEffectiveDate: Nullable<PgCatalog.Types.Timestamp>;
}
}
export namespace InventoryHeldByCustomer {

export type Parameters = {
pInventoryId: Nullable<PgCatalog.Types.Int4>;
}
}
export namespace InventoryInStock {

export type Parameters = {
pInventoryId: Nullable<PgCatalog.Types.Int4>;
}
}
export namespace LastDay {

export type Parameters = {
argument_0: Nullable<PgCatalog.Types.Timestamp>;
}
}
export namespace RewardsReport {

export type Parameters = {
minMonthlyPurchases: Nullable<PgCatalog.Types.Int4>;
minDollarAmountPurchased: Nullable<PgCatalog.Types.Numeric>;
}
}
}
export namespace Tables {
export namespace FilmActor {
export function emptyRow() {
 return { actorId: undefined,filmId: undefined,lastUpdate: undefined };
}
export type PrimaryKey = Public.Types.FilmActorPkey;

export type Optional = Pick<Public.Types.FilmActor,"lastUpdate">
export type Values = PartiallyOptional<Public.Types.FilmActor, Optional & PrimaryKey>
export type Options = ReadOptions & {
actor_id?: Sort;
film_id?: Sort;
last_update?: Sort;
};
}
export namespace Address {
export function emptyRow() {
 return { addressId: undefined,address: undefined,address2: undefined,district: undefined,cityId: undefined,postalCode: undefined,phone: undefined,lastUpdate: undefined };
}
export type PrimaryKey = Public.Types.AddressPkey;

export type Optional = Pick<Public.Types.Address,"addressId"|"lastUpdate">
export type Values = PartiallyOptional<Public.Types.Address, Optional & PrimaryKey>
export type Options = ReadOptions & {
address_id?: Sort;
address?: Sort;
address2?: Sort;
district?: Sort;
city_id?: Sort;
postal_code?: Sort;
phone?: Sort;
last_update?: Sort;
};
}
export namespace City {
export function emptyRow() {
 return { cityId: undefined,city: undefined,countryId: undefined,lastUpdate: undefined };
}
export type PrimaryKey = Public.Types.CityPkey;

export type Optional = Pick<Public.Types.City,"cityId"|"lastUpdate">
export type Values = PartiallyOptional<Public.Types.City, Optional & PrimaryKey>
export type Options = ReadOptions & {
city_id?: Sort;
city?: Sort;
country_id?: Sort;
last_update?: Sort;
};
}
export namespace Customer {
export function emptyRow() {
 return { customerId: undefined,storeId: undefined,firstName: undefined,lastName: undefined,email: undefined,addressId: undefined,activebool: undefined,createDate: undefined,lastUpdate: undefined,active: undefined };
}
export type PrimaryKey = Public.Types.CustomerPkey;

export type Optional = Pick<Public.Types.Customer,"customerId"|"activebool"|"createDate"|"lastUpdate">
export type Values = PartiallyOptional<Public.Types.Customer, Optional & PrimaryKey>
export type Options = ReadOptions & {
customer_id?: Sort;
store_id?: Sort;
first_name?: Sort;
last_name?: Sort;
email?: Sort;
address_id?: Sort;
activebool?: Sort;
create_date?: Sort;
last_update?: Sort;
active?: Sort;
};
}
export namespace Actor {
export function emptyRow() {
 return { actorId: undefined,firstName: undefined,lastName: undefined,lastUpdate: undefined };
}
export type PrimaryKey = Public.Types.ActorPkey;

export type Optional = Pick<Public.Types.Actor,"actorId"|"lastUpdate">
export type Values = PartiallyOptional<Public.Types.Actor, Optional & PrimaryKey>
export type Options = ReadOptions & {
actor_id?: Sort;
first_name?: Sort;
last_name?: Sort;
last_update?: Sort;
};
}
export namespace FilmCategory {
export function emptyRow() {
 return { filmId: undefined,categoryId: undefined,lastUpdate: undefined };
}
export type PrimaryKey = Public.Types.FilmCategoryPkey;

export type Optional = Pick<Public.Types.FilmCategory,"lastUpdate">
export type Values = PartiallyOptional<Public.Types.FilmCategory, Optional & PrimaryKey>
export type Options = ReadOptions & {
film_id?: Sort;
category_id?: Sort;
last_update?: Sort;
};
}
export namespace Inventory {
export function emptyRow() {
 return { inventoryId: undefined,filmId: undefined,storeId: undefined,lastUpdate: undefined };
}
export type PrimaryKey = Public.Types.InventoryPkey;

export type Optional = Pick<Public.Types.Inventory,"inventoryId"|"lastUpdate">
export type Values = PartiallyOptional<Public.Types.Inventory, Optional & PrimaryKey>
export type Options = ReadOptions & {
inventory_id?: Sort;
film_id?: Sort;
store_id?: Sort;
last_update?: Sort;
};
}
export namespace Category {
export function emptyRow() {
 return { categoryId: undefined,name: undefined,lastUpdate: undefined };
}
export type PrimaryKey = Public.Types.CategoryPkey;

export type Optional = Pick<Public.Types.Category,"categoryId"|"lastUpdate">
export type Values = PartiallyOptional<Public.Types.Category, Optional & PrimaryKey>
export type Options = ReadOptions & {
category_id?: Sort;
name?: Sort;
last_update?: Sort;
};
}
export namespace Country {
export function emptyRow() {
 return { countryId: undefined,country: undefined,lastUpdate: undefined };
}
export type PrimaryKey = Public.Types.CountryPkey;

export type Optional = Pick<Public.Types.Country,"countryId"|"lastUpdate">
export type Values = PartiallyOptional<Public.Types.Country, Optional & PrimaryKey>
export type Options = ReadOptions & {
country_id?: Sort;
country?: Sort;
last_update?: Sort;
};
}
export namespace Language {
export function emptyRow() {
 return { languageId: undefined,name: undefined,lastUpdate: undefined };
}
export type PrimaryKey = Public.Types.LanguagePkey;

export type Optional = Pick<Public.Types.Language,"languageId"|"lastUpdate">
export type Values = PartiallyOptional<Public.Types.Language, Optional & PrimaryKey>
export type Options = ReadOptions & {
language_id?: Sort;
name?: Sort;
last_update?: Sort;
};
}
export namespace Rental {
export function emptyRow() {
 return { rentalId: undefined,rentalDate: undefined,inventoryId: undefined,customerId: undefined,returnDate: undefined,staffId: undefined,lastUpdate: undefined };
}
export type PrimaryKey = Public.Types.RentalPkey;

export type Optional = Pick<Public.Types.Rental,"rentalId"|"lastUpdate">
export type Values = PartiallyOptional<Public.Types.Rental, Optional & PrimaryKey>
export type Options = ReadOptions & {
rental_id?: Sort;
rental_date?: Sort;
inventory_id?: Sort;
customer_id?: Sort;
return_date?: Sort;
staff_id?: Sort;
last_update?: Sort;
};
}
export namespace Staff {
export function emptyRow() {
 return { staffId: undefined,firstName: undefined,lastName: undefined,addressId: undefined,email: undefined,storeId: undefined,active: undefined,username: undefined,password: undefined,lastUpdate: undefined,picture: undefined };
}
export type PrimaryKey = Public.Types.StaffPkey;

export type Optional = Pick<Public.Types.Staff,"staffId"|"active"|"lastUpdate">
export type Values = PartiallyOptional<Public.Types.Staff, Optional & PrimaryKey>
export type Options = ReadOptions & {
staff_id?: Sort;
first_name?: Sort;
last_name?: Sort;
address_id?: Sort;
email?: Sort;
store_id?: Sort;
active?: Sort;
username?: Sort;
password?: Sort;
last_update?: Sort;
picture?: Sort;
};
}
export namespace Store {
export function emptyRow() {
 return { storeId: undefined,managerStaffId: undefined,addressId: undefined,lastUpdate: undefined };
}
export type PrimaryKey = Public.Types.StorePkey;

export type Optional = Pick<Public.Types.Store,"storeId"|"lastUpdate">
export type Values = PartiallyOptional<Public.Types.Store, Optional & PrimaryKey>
export type Options = ReadOptions & {
store_id?: Sort;
manager_staff_id?: Sort;
address_id?: Sort;
last_update?: Sort;
};
}
export namespace Payment {
export function emptyRow() {
 return { paymentId: undefined,customerId: undefined,staffId: undefined,rentalId: undefined,amount: undefined,paymentDate: undefined };
}
export type PrimaryKey = Public.Types.PaymentPkey;

export type Optional = Pick<Public.Types.Payment,"paymentId">
export type Values = PartiallyOptional<Public.Types.Payment, Optional & PrimaryKey>
export type Options = ReadOptions & {
payment_id?: Sort;
customer_id?: Sort;
staff_id?: Sort;
rental_id?: Sort;
amount?: Sort;
payment_date?: Sort;
};
}
export namespace Film {
export function emptyRow() {
 return { filmId: undefined,title: undefined,description: undefined,releaseYear: undefined,languageId: undefined,rentalDuration: undefined,rentalRate: undefined,length: undefined,replacementCost: undefined,rating: undefined,lastUpdate: undefined,specialFeatures: undefined,fulltext: undefined };
}
export type PrimaryKey = Public.Types.FilmPkey;

export type Optional = Pick<Public.Types.Film,"filmId"|"rentalDuration"|"rentalRate"|"replacementCost"|"rating"|"lastUpdate">
export type Values = PartiallyOptional<Public.Types.Film, Optional & PrimaryKey>
export type Options = ReadOptions & {
film_id?: Sort;
title?: Sort;
description?: Sort;
release_year?: Sort;
language_id?: Sort;
rental_duration?: Sort;
rental_rate?: Sort;
length?: Sort;
replacement_cost?: Sort;
rating?: Sort;
last_update?: Sort;
special_features?: Sort;
fulltext?: Sort;
};
}
}
}
export namespace PgToast {
export namespace Types {

export type PgToast_36081Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_36167Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_1255Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_1247Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_2604Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_2606Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_2612Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_2600Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_2619Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_3381Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_3429Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_2618Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_2620Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_3466Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_2609Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_2615Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_1262Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_2964Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_1213Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_1260Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_2396Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_3600Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_3079Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_2328Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_1417Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_1418Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_3118Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_3256Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_6000Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_826Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_3394Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_3596Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_3592Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_3456Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_6243Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_3350Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_6106Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_6100Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_13658Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_13663Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_13668Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}

export type PgToast_13673Index = {
chunkId: Nullable<PgCatalog.Types.Oid>;
chunkSeq: Nullable<PgCatalog.Types.Int4>;
}
}
export namespace Procedures {
}
export namespace Tables {
}
}
export namespace Scripts {
export namespace MovieListing {

export type Results = {
filmId: Nullable<PgCatalog.Types.Int4>;
title: Nullable<PgCatalog.Types.Varchar>;
releaseYear: Nullable<PgCatalog.Types.Int4>;
rating: Nullable<Public.Types.MpaaRating>;
actors: PgCatalog.Types.TextArray;
}
}
export namespace Sample {
export namespace Film {
export namespace Rated {

export type Results = {
filmId: Nullable<PgCatalog.Types.Int4>;
title: Nullable<PgCatalog.Types.Varchar>;
description: Nullable<PgCatalog.Types.Text>;
releaseYear: Nullable<PgCatalog.Types.Int4>;
languageId: Nullable<PgCatalog.Types.Int2>;
rentalDuration: Nullable<PgCatalog.Types.Int2>;
rentalRate: Nullable<PgCatalog.Types.Numeric>;
length: Nullable<PgCatalog.Types.Int2>;
replacementCost: Nullable<PgCatalog.Types.Numeric>;
rating: Nullable<Public.Types.MpaaRating>;
lastUpdate: Nullable<PgCatalog.Types.Timestamp>;
specialFeatures: PgCatalog.Types.TextArray;
fulltext: Nullable<PgCatalog.Types.Tsvector>;
}

export type Parameters = {
argument_1: Public.Types.MpaaRating;
}
}
export namespace Tally {

export type Results = {
count: Nullable<PgCatalog.Types.Int8>;
}
}
}
export namespace Pick {

export type Results = {
filmId: Nullable<PgCatalog.Types.Int4>;
title: Nullable<PgCatalog.Types.Varchar>;
description: Nullable<PgCatalog.Types.Text>;
releaseYear: Nullable<PgCatalog.Types.Int4>;
languageId: Nullable<PgCatalog.Types.Int2>;
rentalDuration: Nullable<PgCatalog.Types.Int2>;
rentalRate: Nullable<PgCatalog.Types.Numeric>;
length: Nullable<PgCatalog.Types.Int2>;
replacementCost: Nullable<PgCatalog.Types.Numeric>;
rating: Nullable<Public.Types.MpaaRating>;
lastUpdate: Nullable<PgCatalog.Types.Timestamp>;
specialFeatures: PgCatalog.Types.TextArray;
fulltext: Nullable<PgCatalog.Types.Tsvector>;
}

export type Parameters = {
argument_1: PgCatalog.Types.Text;
}
}
}
export namespace Tally {

export type Results = {
count: Nullable<PgCatalog.Types.Int8>;
}
}
}

export namespace PgCatalog {
export namespace Types {
export namespace Bool {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      if (typeof from === "boolean") {
        return from;
      }
      if (typeof from === "string") {
        if(['t', 'true', 'on', 'yes'].includes(from.toLowerCase())) return true;
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
export namespace Bytea {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

    if (typeof from === "string"){
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
      throw new Error(`from is not a string`, {cause: from});
    
}


}
export namespace Name {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      if (typeof from === "string") {
        return from;
      }
      throw new Error(`from is not a string`, {cause: from});
    
}


}
export namespace Int8 {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

    if (typeof from === "string"){
      return Number.parseFloat(from);
    }
    if (typeof from === "number") {
      return from;
    }
    return null;
    
}


}
export namespace Int2 {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

    if (typeof from === "string"){
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

    if (typeof from === "string"){
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

    if (typeof from === "string"){
      return Number.parseFloat(from);
    }
    if (typeof from === "number") {
      return from;
    }
    return null;
    
}


}
export namespace Text {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      if (typeof from === "string") {
        return from;
      }
      throw new Error(`from is not a string`, {cause: from});
    
}


}
export namespace Oid {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

    if (typeof from === "string"){
      return Number.parseFloat(from);
    }
    if (typeof from === "number") {
      return from;
    }
    return null;
    
}


}
export namespace Tid {
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

    if (typeof from === "string"){
      return Number.parseFloat(from);
    }
    if (typeof from === "number") {
      return from;
    }
    return null;
    
}


}
export namespace Cid {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

    if (typeof from === "string"){
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

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Oid.parse(e));
    
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
throw new Error(JSON.stringify(from))
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
throw new Error(JSON.stringify(from))
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
proargdefaults: PgCatalog.Types.PgNodeTree.parse(from.proargdefaults),
protrftypes: PgCatalog.Types.OidArray.parse(from.protrftypes),
prosrc: PgCatalog.Types.Text.parse(from.prosrc),
probin: PgCatalog.Types.Text.parse(from.probin),
prosqlbody: PgCatalog.Types.PgNodeTree.parse(from.prosqlbody),
proconfig: PgCatalog.Types.TextArray.parse(from.proconfig),
proacl: PgCatalog.Types.AclitemArray.parse(from.proacl),
};
}
throw new Error(JSON.stringify(from))
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
relforcerowsecurity: PgCatalog.Types.Bool.parse(from.relforcerowsecurity),
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
throw new Error(JSON.stringify(from))
}


}
export namespace Json {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      return from;
    
}


}
export namespace Xml {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      if (typeof from === "string") {
        return from;
      }
      throw new Error(`from is not a string`, {cause: from});
    
}


}
export namespace PgNodeTree {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      if (typeof from === "string") {
        return from;
      }
      throw new Error(`from is not a string`, {cause: from});
    
}


}
export namespace PgNdistinct {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      if (typeof from === "string") {
        return from;
      }
      throw new Error(`from is not a string`, {cause: from});
    
}


}
export namespace PgDependencies {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      if (typeof from === "string") {
        return from;
      }
      throw new Error(`from is not a string`, {cause: from});
    
}


}
export namespace PgMcvList {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      if (typeof from === "string") {
        return from;
      }
      throw new Error(`from is not a string`, {cause: from});
    
}


}
export namespace PgDdlCommand {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      return from;
    
}


}
export namespace Xid8 {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

    if (typeof from === "string"){
      return Number.parseFloat(from);
    }
    if (typeof from === "number") {
      return from;
    }
    return null;
    
}


}
export namespace Point {
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
export namespace Path {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      return from;
    
}


}
export namespace Box {
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
export namespace Line {
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

    if (typeof from === "string"){
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

    if (typeof from === "string"){
      return Number.parseFloat(from);
    }
    if (typeof from === "number") {
      return from;
    }
    return null;
    
}


}
export namespace Unknown {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      return from;
    
}


}
export namespace Circle {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      return from;
    
}


}
export namespace Money {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

    if (typeof from === "string"){
      return Number.parseFloat(from);
    }
    if (typeof from === "number") {
      return from;
    }
    return null;
    
}


}
export namespace Macaddr {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

    if (typeof from === "string"){
      return new Uint8Array(JSON.parse(from));
    }
    if (Array.isArray(from)) {
      return new Uint8Array(from);
    }
    return [];
    
}


}
export namespace Inet {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      return from;
    
}


}
export namespace Cidr {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

    if (typeof from === "string"){
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

    if (typeof from === "string"){
      return new Uint8Array(JSON.parse(from));
    }
    if (Array.isArray(from)) {
      return new Uint8Array(from);
    }
    return [];
    
}


}
export namespace Aclitem {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      if (typeof from === "string") {
        return from;
      }
      throw new Error(`from is not a string`, {cause: from});
    
}


}
export namespace Bpchar {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      if (typeof from === "string") {
        return from;
      }
      throw new Error(`from is not a string`, {cause: from});
    
}


}
export namespace Varchar {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      if (typeof from === "string") {
        return from;
      }
      throw new Error(`from is not a string`, {cause: from});
    
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
export namespace Interval {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

    if (typeof from === "string"){
      return Number.parseFloat(from);
    }
    if (typeof from === "number") {
      return from;
    }
    return null;
    
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
export namespace Bit {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      if (typeof from === "boolean") {
        return from;
      }
      if (typeof from === "string") {
        if(['t', 'true', 'on', 'yes'].includes(from.toLowerCase())) return true;
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
export namespace Varbit {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      if (typeof from === "boolean") {
        return from;
      }
      if (typeof from === "string") {
        if(['t', 'true', 'on', 'yes'].includes(from.toLowerCase())) return true;
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
export namespace Numeric {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

    if (typeof from === "string"){
      return Number.parseFloat(from);
    }
    if (typeof from === "number") {
      return from;
    }
    return null;
    
}


}
export namespace Refcursor {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      if (typeof from === "string") {
        return from;
      }
      throw new Error(`from is not a string`, {cause: from});
    
}


}
export namespace Regprocedure {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

    if (typeof from === "string"){
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

    if (typeof from === "string"){
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

    if (typeof from === "string"){
      return Number.parseFloat(from);
    }
    if (typeof from === "number") {
      return from;
    }
    return null;
    
}


}
export namespace Regclass {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

    if (typeof from === "string"){
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

    if (typeof from === "string"){
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

    if (typeof from === "string"){
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

    if (typeof from === "string"){
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

    if (typeof from === "string"){
      return Number.parseFloat(from);
    }
    if (typeof from === "number") {
      return from;
    }
    return null;
    
}


}
export namespace Uuid {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      return new UUID(from as string);
    
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
      if (from === '') return null;
      return BigInt(from);
    }
    return null;
    
}


}
export namespace Tsvector {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      if (typeof from === "string") {
        return from;
      }
      throw new Error(`from is not a string`, {cause: from});
    
}


}
export namespace Gtsvector {
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
      throw new Error(`from is not a string`, {cause: from});
    
}


}
export namespace Regconfig {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

    if (typeof from === "string"){
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

    if (typeof from === "string"){
      return Number.parseFloat(from);
    }
    if (typeof from === "number") {
      return from;
    }
    return null;
    
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
      throw new Error(`from is not a string`, {cause: from});
    
}


}
export namespace TxidSnapshot {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      if (typeof from === "string") {
        return from;
      }
      throw new Error(`from is not a string`, {cause: from});
    
}


}
export namespace PgSnapshot {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      if (typeof from === "string") {
        return from;
      }
      throw new Error(`from is not a string`, {cause: from});
    
}


}
export namespace Int4range {
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
export namespace Tsrange {
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
export namespace Daterange {
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
export namespace Int4multirange {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      return from;
    
}


}
export namespace Nummultirange {
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
export namespace Tstzmultirange {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      return from;
    
}


}
export namespace Datemultirange {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      return from;
    
}


}
export namespace Int8multirange {
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
export namespace RecordArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Record.parse(e));
    
}


}
export namespace Cstring {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      return from;
    
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
export namespace Void {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      return from;
    
}


}
export namespace Trigger {
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
export namespace LanguageHandler {
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
export namespace Anyelement {
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
export namespace Anyenum {
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
export namespace IndexAmHandler {
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
export namespace TableAmHandler {
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
export namespace Anymultirange {
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
export namespace PgBrinBloomSummary {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      if (typeof from === "string") {
        return from;
      }
      throw new Error(`from is not a string`, {cause: from});
    
}


}
export namespace PgBrinMinmaxMultiSummary {
export function parse(from: unknown) {
// Type
if (from === null || from === undefined) return null;

      if (typeof from === "string") {
        return from;
      }
      throw new Error(`from is not a string`, {cause: from});
    
}


}
export namespace BoolArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Bool.parse(e));
    
}


}
export namespace ByteaArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Bytea.parse(e));
    
}


}
export namespace CharArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Char.parse(e));
    
}


}
export namespace NameArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Name.parse(e));
    
}


}
export namespace Int8Array {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Int8.parse(e));
    
}


}
export namespace Int2Array {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Int2.parse(e));
    
}


}
export namespace Int2vectorArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Int2vector.parse(e));
    
}


}
export namespace Int4Array {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Int4.parse(e));
    
}


}
export namespace RegprocArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Regproc.parse(e));
    
}


}
export namespace TextArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Text.parse(e));
    
}


}
export namespace OidArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Oid.parse(e));
    
}


}
export namespace TidArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Tid.parse(e));
    
}


}
export namespace XidArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Xid.parse(e));
    
}


}
export namespace CidArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Cid.parse(e));
    
}


}
export namespace OidvectorArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Oidvector.parse(e));
    
}


}
export namespace PgTypeArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgType.parse(e));
    
}


}
export namespace PgAttributeArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgAttribute.parse(e));
    
}


}
export namespace PgProcArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgProc.parse(e));
    
}


}
export namespace PgClassArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgClass.parse(e));
    
}


}
export namespace JsonArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Json.parse(e));
    
}


}
export namespace XmlArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Xml.parse(e));
    
}


}
export namespace Xid8Array {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Xid8.parse(e));
    
}


}
export namespace PointArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Point.parse(e));
    
}


}
export namespace LsegArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Lseg.parse(e));
    
}


}
export namespace PathArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Path.parse(e));
    
}


}
export namespace BoxArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Box.parse(e));
    
}


}
export namespace PolygonArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Polygon.parse(e));
    
}


}
export namespace LineArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Line.parse(e));
    
}


}
export namespace Float4Array {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Float4.parse(e));
    
}


}
export namespace Float8Array {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Float8.parse(e));
    
}


}
export namespace CircleArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Circle.parse(e));
    
}


}
export namespace MoneyArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Money.parse(e));
    
}


}
export namespace MacaddrArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Macaddr.parse(e));
    
}


}
export namespace InetArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Inet.parse(e));
    
}


}
export namespace CidrArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Cidr.parse(e));
    
}


}
export namespace Macaddr8Array {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Macaddr8.parse(e));
    
}


}
export namespace AclitemArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Aclitem.parse(e));
    
}


}
export namespace BpcharArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Bpchar.parse(e));
    
}


}
export namespace VarcharArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Varchar.parse(e));
    
}


}
export namespace DateArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Date.parse(e));
    
}


}
export namespace TimeArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Time.parse(e));
    
}


}
export namespace TimestampArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Timestamp.parse(e));
    
}


}
export namespace TimestamptzArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Timestamptz.parse(e));
    
}


}
export namespace IntervalArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Interval.parse(e));
    
}


}
export namespace TimetzArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Timetz.parse(e));
    
}


}
export namespace BitArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Bit.parse(e));
    
}


}
export namespace VarbitArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Varbit.parse(e));
    
}


}
export namespace NumericArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Numeric.parse(e));
    
}


}
export namespace RefcursorArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Refcursor.parse(e));
    
}


}
export namespace RegprocedureArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Regprocedure.parse(e));
    
}


}
export namespace RegoperArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Regoper.parse(e));
    
}


}
export namespace RegoperatorArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Regoperator.parse(e));
    
}


}
export namespace RegclassArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Regclass.parse(e));
    
}


}
export namespace RegcollationArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Regcollation.parse(e));
    
}


}
export namespace RegtypeArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Regtype.parse(e));
    
}


}
export namespace RegroleArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Regrole.parse(e));
    
}


}
export namespace RegnamespaceArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Regnamespace.parse(e));
    
}


}
export namespace UuidArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Uuid.parse(e));
    
}


}
export namespace PgLsnArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgLsn.parse(e));
    
}


}
export namespace TsvectorArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Tsvector.parse(e));
    
}


}
export namespace GtsvectorArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Gtsvector.parse(e));
    
}


}
export namespace TsqueryArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Tsquery.parse(e));
    
}


}
export namespace RegconfigArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Regconfig.parse(e));
    
}


}
export namespace RegdictionaryArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Regdictionary.parse(e));
    
}


}
export namespace JsonbArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Jsonb.parse(e));
    
}


}
export namespace JsonpathArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Jsonpath.parse(e));
    
}


}
export namespace TxidSnapshotArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => TxidSnapshot.parse(e));
    
}


}
export namespace PgSnapshotArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgSnapshot.parse(e));
    
}


}
export namespace Int4rangeArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Int4range.parse(e));
    
}


}
export namespace NumrangeArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Numrange.parse(e));
    
}


}
export namespace TsrangeArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Tsrange.parse(e));
    
}


}
export namespace TstzrangeArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Tstzrange.parse(e));
    
}


}
export namespace DaterangeArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Daterange.parse(e));
    
}


}
export namespace Int8rangeArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Int8range.parse(e));
    
}


}
export namespace Int4multirangeArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Int4multirange.parse(e));
    
}


}
export namespace NummultirangeArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Nummultirange.parse(e));
    
}


}
export namespace TsmultirangeArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Tsmultirange.parse(e));
    
}


}
export namespace TstzmultirangeArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Tstzmultirange.parse(e));
    
}


}
export namespace DatemultirangeArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Datemultirange.parse(e));
    
}


}
export namespace Int8multirangeArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Int8multirange.parse(e));
    
}


}
export namespace CstringArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Cstring.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgAttrdefArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgAttrdef.parse(e));
    
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
confdelsetcols: PgCatalog.Types.Int2Array.parse(from.confdelsetcols),
conexclop: PgCatalog.Types.OidArray.parse(from.conexclop),
conbin: PgCatalog.Types.PgNodeTree.parse(from.conbin),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgConstraintArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgConstraint.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgInheritsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgInherits.parse(e));
    
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
indnullsnotdistinct: PgCatalog.Types.Bool.parse(from.indnullsnotdistinct),
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgIndexArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgIndex.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgOperatorArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgOperator.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgOpfamilyArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgOpfamily.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgOpclassArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgOpclass.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgAmArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgAm.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgAmopArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgAmop.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgAmprocArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgAmproc.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgLanguageArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgLanguage.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgLargeobjectMetadataArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgLargeobjectMetadata.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgLargeobjectArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgLargeobject.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgAggregateArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgAggregate.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatisticArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatistic.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatisticExtArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatisticExt.parse(e));
    
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
stxdndistinct: PgCatalog.Types.PgNdistinct.parse(from.stxdndistinct),
stxddependencies: PgCatalog.Types.PgDependencies.parse(from.stxddependencies),
stxdmcv: PgCatalog.Types.PgMcvList.parse(from.stxdmcv),
stxdexpr: PgCatalog.Types.PgStatisticArray.parse(from.stxdexpr),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatisticExtDataArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatisticExtData.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgRewriteArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgRewrite.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgTriggerArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgTrigger.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgEventTriggerArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgEventTrigger.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgDescriptionArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgDescription.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgCastArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgCast.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgEnumArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgEnum.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgNamespaceArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgNamespace.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgConversionArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgConversion.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgDependArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgDepend.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgDatabaseArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgDatabase.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgDbRoleSettingArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgDbRoleSetting.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgTablespaceArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgTablespace.parse(e));
    
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
rolvaliduntil: PgCatalog.Types.Timestamptz.parse(from.rolvaliduntil),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgAuthidArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgAuthid.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgAuthMembersArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgAuthMembers.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgShdependArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgShdepend.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgShdescriptionArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgShdescription.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgTsConfigArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgTsConfig.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgTsConfigMapArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgTsConfigMap.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgTsDictArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgTsDict.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgTsParserArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgTsParser.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgTsTemplateArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgTsTemplate.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgExtensionArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgExtension.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgForeignDataWrapperArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgForeignDataWrapper.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgForeignServerArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgForeignServer.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgUserMappingArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgUserMapping.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgForeignTableArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgForeignTable.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgPolicyArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgPolicy.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgReplicationOriginArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgReplicationOrigin.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgDefaultAclArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgDefaultAcl.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgInitPrivsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgInitPrivs.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgSeclabelArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgSeclabel.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgShseclabelArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgShseclabel.parse(e));
    
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
collisdeterministic: PgCatalog.Types.Bool.parse(from.collisdeterministic),
collencoding: PgCatalog.Types.Int4.parse(from.collencoding),
collcollate: PgCatalog.Types.Text.parse(from.collcollate),
collctype: PgCatalog.Types.Text.parse(from.collctype),
colliculocale: PgCatalog.Types.Text.parse(from.colliculocale),
collicurules: PgCatalog.Types.Text.parse(from.collicurules),
collversion: PgCatalog.Types.Text.parse(from.collversion),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgCollationArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgCollation.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgParameterAclArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgParameterAcl.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgPartitionedTableArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgPartitionedTable.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgRangeArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgRange.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgTransformArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgTransform.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgSequenceArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgSequence.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgPublicationArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgPublication.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgPublicationNamespaceArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgPublicationNamespace.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgPublicationRelArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgPublicationRel.parse(e));
    
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
subpasswordrequired: PgCatalog.Types.Bool.parse(from.subpasswordrequired),
subrunasowner: PgCatalog.Types.Bool.parse(from.subrunasowner),
subconninfo: PgCatalog.Types.Text.parse(from.subconninfo),
subslotname: PgCatalog.Types.Name.parse(from.subslotname),
subsynccommit: PgCatalog.Types.Text.parse(from.subsynccommit),
subpublications: PgCatalog.Types.TextArray.parse(from.subpublications),
suborigin: PgCatalog.Types.Text.parse(from.suborigin),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgSubscriptionArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgSubscription.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgSubscriptionRelArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgSubscriptionRel.parse(e));
    
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
rolvaliduntil: PgCatalog.Types.Timestamptz.parse(from.rolvaliduntil),
rolbypassrls: PgCatalog.Types.Bool.parse(from.rolbypassrls),
rolconfig: PgCatalog.Types.TextArray.parse(from.rolconfig),
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgRolesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgRoles.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgShadowArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgShadow.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgGroupArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgGroup.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgUserArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgUser.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgPoliciesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgPolicies.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgRulesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgRules.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgViewsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgViews.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgTablesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgTables.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgMatviewsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgMatviews.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgIndexesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgIndexes.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgSequencesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgSequences.parse(e));
    
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
mostCommonFreqs: PgCatalog.Types.Float4Array.parse(from.mostCommonFreqs),
histogramBounds: PgCatalog.Types.Anyarray.parse(from.histogramBounds),
correlation: PgCatalog.Types.Float4.parse(from.correlation),
mostCommonElems: PgCatalog.Types.Anyarray.parse(from.mostCommonElems),
mostCommonElemFreqs: PgCatalog.Types.Float4Array.parse(from.mostCommonElemFreqs),
elemCountHistogram: PgCatalog.Types.Float4Array.parse(from.elemCountHistogram),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStats.parse(e));
    
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
statisticsSchemaname: PgCatalog.Types.Name.parse(from.statisticsSchemaname),
statisticsName: PgCatalog.Types.Name.parse(from.statisticsName),
statisticsOwner: PgCatalog.Types.Name.parse(from.statisticsOwner),
attnames: PgCatalog.Types.NameArray.parse(from.attnames),
exprs: PgCatalog.Types.TextArray.parse(from.exprs),
kinds: PgCatalog.Types.CharArray.parse(from.kinds),
inherited: PgCatalog.Types.Bool.parse(from.inherited),
nDistinct: PgCatalog.Types.PgNdistinct.parse(from.nDistinct),
dependencies: PgCatalog.Types.PgDependencies.parse(from.dependencies),
mostCommonVals: PgCatalog.Types.TextArray.parse(from.mostCommonVals),
mostCommonValNulls: PgCatalog.Types.BoolArray.parse(from.mostCommonValNulls),
mostCommonFreqs: PgCatalog.Types.Float8Array.parse(from.mostCommonFreqs),
mostCommonBaseFreqs: PgCatalog.Types.Float8Array.parse(from.mostCommonBaseFreqs),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatsExtArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatsExt.parse(e));
    
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
statisticsSchemaname: PgCatalog.Types.Name.parse(from.statisticsSchemaname),
statisticsName: PgCatalog.Types.Name.parse(from.statisticsName),
statisticsOwner: PgCatalog.Types.Name.parse(from.statisticsOwner),
expr: PgCatalog.Types.Text.parse(from.expr),
inherited: PgCatalog.Types.Bool.parse(from.inherited),
nullFrac: PgCatalog.Types.Float4.parse(from.nullFrac),
avgWidth: PgCatalog.Types.Int4.parse(from.avgWidth),
nDistinct: PgCatalog.Types.Float4.parse(from.nDistinct),
mostCommonVals: PgCatalog.Types.Anyarray.parse(from.mostCommonVals),
mostCommonFreqs: PgCatalog.Types.Float4Array.parse(from.mostCommonFreqs),
histogramBounds: PgCatalog.Types.Anyarray.parse(from.histogramBounds),
correlation: PgCatalog.Types.Float4.parse(from.correlation),
mostCommonElems: PgCatalog.Types.Anyarray.parse(from.mostCommonElems),
mostCommonElemFreqs: PgCatalog.Types.Float4Array.parse(from.mostCommonElemFreqs),
elemCountHistogram: PgCatalog.Types.Float4Array.parse(from.elemCountHistogram),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatsExtExprsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatsExtExprs.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgPublicationTablesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgPublicationTables.parse(e));
    
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
virtualtransaction: PgCatalog.Types.Text.parse(from.virtualtransaction),
pid: PgCatalog.Types.Int4.parse(from.pid),
mode: PgCatalog.Types.Text.parse(from.mode),
granted: PgCatalog.Types.Bool.parse(from.granted),
fastpath: PgCatalog.Types.Bool.parse(from.fastpath),
waitstart: PgCatalog.Types.Timestamptz.parse(from.waitstart),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgLocksArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgLocks.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgCursorsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgCursors.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgAvailableExtensionsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgAvailableExtensions.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgAvailableExtensionVersionsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgAvailableExtensionVersions.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgPreparedXactsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgPreparedXacts.parse(e));
    
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
parameterTypes: PgCatalog.Types.RegtypeArray.parse(from.parameterTypes),
resultTypes: PgCatalog.Types.RegtypeArray.parse(from.resultTypes),
fromSql: PgCatalog.Types.Bool.parse(from.fromSql),
genericPlans: PgCatalog.Types.Int8.parse(from.genericPlans),
customPlans: PgCatalog.Types.Int8.parse(from.customPlans),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgPreparedStatementsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgPreparedStatements.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgSeclabelsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgSeclabels.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgSettingsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgSettings.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgFileSettingsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgFileSettings.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgHbaFileRulesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgHbaFileRules.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgIdentFileMappingsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgIdentFileMappings.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgTimezoneAbbrevsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgTimezoneAbbrevs.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgTimezoneNamesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgTimezoneNames.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgConfigArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgConfig.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgShmemAllocationsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgShmemAllocations.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgBackendMemoryContextsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgBackendMemoryContexts.parse(e));
    
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
lastAutovacuum: PgCatalog.Types.Timestamptz.parse(from.lastAutovacuum),
lastAnalyze: PgCatalog.Types.Timestamptz.parse(from.lastAnalyze),
lastAutoanalyze: PgCatalog.Types.Timestamptz.parse(from.lastAutoanalyze),
vacuumCount: PgCatalog.Types.Int8.parse(from.vacuumCount),
autovacuumCount: PgCatalog.Types.Int8.parse(from.autovacuumCount),
analyzeCount: PgCatalog.Types.Int8.parse(from.analyzeCount),
autoanalyzeCount: PgCatalog.Types.Int8.parse(from.autoanalyzeCount),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatAllTablesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatAllTables.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatXactAllTablesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatXactAllTables.parse(e));
    
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
lastAutovacuum: PgCatalog.Types.Timestamptz.parse(from.lastAutovacuum),
lastAnalyze: PgCatalog.Types.Timestamptz.parse(from.lastAnalyze),
lastAutoanalyze: PgCatalog.Types.Timestamptz.parse(from.lastAutoanalyze),
vacuumCount: PgCatalog.Types.Int8.parse(from.vacuumCount),
autovacuumCount: PgCatalog.Types.Int8.parse(from.autovacuumCount),
analyzeCount: PgCatalog.Types.Int8.parse(from.analyzeCount),
autoanalyzeCount: PgCatalog.Types.Int8.parse(from.autoanalyzeCount),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatSysTablesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatSysTables.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatXactSysTablesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatXactSysTables.parse(e));
    
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
lastAutovacuum: PgCatalog.Types.Timestamptz.parse(from.lastAutovacuum),
lastAnalyze: PgCatalog.Types.Timestamptz.parse(from.lastAnalyze),
lastAutoanalyze: PgCatalog.Types.Timestamptz.parse(from.lastAutoanalyze),
vacuumCount: PgCatalog.Types.Int8.parse(from.vacuumCount),
autovacuumCount: PgCatalog.Types.Int8.parse(from.autovacuumCount),
analyzeCount: PgCatalog.Types.Int8.parse(from.analyzeCount),
autoanalyzeCount: PgCatalog.Types.Int8.parse(from.autoanalyzeCount),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatUserTablesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatUserTables.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatXactUserTablesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatXactUserTables.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatioAllTablesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatioAllTables.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatioSysTablesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatioSysTables.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatioUserTablesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatioUserTables.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatAllIndexesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatAllIndexes.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatSysIndexesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatSysIndexes.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatUserIndexesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatUserIndexes.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatioAllIndexesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatioAllIndexes.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatioSysIndexesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatioSysIndexes.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatioUserIndexesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatioUserIndexes.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatioAllSequencesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatioAllSequences.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatioSysSequencesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatioSysSequences.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatioUserSequencesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatioUserSequences.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatActivityArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatActivity.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatReplicationArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatReplication.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatSlruArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatSlru.parse(e));
    
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
lastMsgSendTime: PgCatalog.Types.Timestamptz.parse(from.lastMsgSendTime),
lastMsgReceiptTime: PgCatalog.Types.Timestamptz.parse(from.lastMsgReceiptTime),
latestEndLsn: PgCatalog.Types.PgLsn.parse(from.latestEndLsn),
latestEndTime: PgCatalog.Types.Timestamptz.parse(from.latestEndTime),
slotName: PgCatalog.Types.Text.parse(from.slotName),
senderHost: PgCatalog.Types.Text.parse(from.senderHost),
senderPort: PgCatalog.Types.Int4.parse(from.senderPort),
conninfo: PgCatalog.Types.Text.parse(from.conninfo),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatWalReceiverArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatWalReceiver.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatRecoveryPrefetchArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatRecoveryPrefetch.parse(e));
    
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
lastMsgSendTime: PgCatalog.Types.Timestamptz.parse(from.lastMsgSendTime),
lastMsgReceiptTime: PgCatalog.Types.Timestamptz.parse(from.lastMsgReceiptTime),
latestEndLsn: PgCatalog.Types.PgLsn.parse(from.latestEndLsn),
latestEndTime: PgCatalog.Types.Timestamptz.parse(from.latestEndTime),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatSubscriptionArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatSubscription.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatSslArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatSsl.parse(e));
    
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
credentialsDelegated: PgCatalog.Types.Bool.parse(from.credentialsDelegated),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatGssapiArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatGssapi.parse(e));
    
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
confirmedFlushLsn: PgCatalog.Types.PgLsn.parse(from.confirmedFlushLsn),
walStatus: PgCatalog.Types.Text.parse(from.walStatus),
safeWalSize: PgCatalog.Types.Int8.parse(from.safeWalSize),
twoPhase: PgCatalog.Types.Bool.parse(from.twoPhase),
conflicting: PgCatalog.Types.Bool.parse(from.conflicting),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgReplicationSlotsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgReplicationSlots.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatReplicationSlotsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatReplicationSlots.parse(e));
    
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
checksumLastFailure: PgCatalog.Types.Timestamptz.parse(from.checksumLastFailure),
blkReadTime: PgCatalog.Types.Float8.parse(from.blkReadTime),
blkWriteTime: PgCatalog.Types.Float8.parse(from.blkWriteTime),
sessionTime: PgCatalog.Types.Float8.parse(from.sessionTime),
activeTime: PgCatalog.Types.Float8.parse(from.activeTime),
idleInTransactionTime: PgCatalog.Types.Float8.parse(from.idleInTransactionTime),
sessions: PgCatalog.Types.Int8.parse(from.sessions),
sessionsAbandoned: PgCatalog.Types.Int8.parse(from.sessionsAbandoned),
sessionsFatal: PgCatalog.Types.Int8.parse(from.sessionsFatal),
sessionsKilled: PgCatalog.Types.Int8.parse(from.sessionsKilled),
statsReset: PgCatalog.Types.Timestamptz.parse(from.statsReset),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatDatabaseArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatDatabase.parse(e));
    
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
conflActiveLogicalslot: PgCatalog.Types.Int8.parse(from.conflActiveLogicalslot),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatDatabaseConflictsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatDatabaseConflicts.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatUserFunctionsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatUserFunctions.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatXactUserFunctionsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatXactUserFunctions.parse(e));
    
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
lastArchivedTime: PgCatalog.Types.Timestamptz.parse(from.lastArchivedTime),
failedCount: PgCatalog.Types.Int8.parse(from.failedCount),
lastFailedWal: PgCatalog.Types.Text.parse(from.lastFailedWal),
lastFailedTime: PgCatalog.Types.Timestamptz.parse(from.lastFailedTime),
statsReset: PgCatalog.Types.Timestamptz.parse(from.statsReset),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatArchiverArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatArchiver.parse(e));
    
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
checkpointWriteTime: PgCatalog.Types.Float8.parse(from.checkpointWriteTime),
checkpointSyncTime: PgCatalog.Types.Float8.parse(from.checkpointSyncTime),
buffersCheckpoint: PgCatalog.Types.Int8.parse(from.buffersCheckpoint),
buffersClean: PgCatalog.Types.Int8.parse(from.buffersClean),
maxwrittenClean: PgCatalog.Types.Int8.parse(from.maxwrittenClean),
buffersBackend: PgCatalog.Types.Int8.parse(from.buffersBackend),
buffersBackendFsync: PgCatalog.Types.Int8.parse(from.buffersBackendFsync),
buffersAlloc: PgCatalog.Types.Int8.parse(from.buffersAlloc),
statsReset: PgCatalog.Types.Timestamptz.parse(from.statsReset),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatBgwriterArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatBgwriter.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatIoArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatIo.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatWalArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatWal.parse(e));
    
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
sampleBlksScanned: PgCatalog.Types.Int8.parse(from.sampleBlksScanned),
extStatsTotal: PgCatalog.Types.Int8.parse(from.extStatsTotal),
extStatsComputed: PgCatalog.Types.Int8.parse(from.extStatsComputed),
childTablesTotal: PgCatalog.Types.Int8.parse(from.childTablesTotal),
childTablesDone: PgCatalog.Types.Int8.parse(from.childTablesDone),
currentChildTableRelid: PgCatalog.Types.Oid.parse(from.currentChildTableRelid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatProgressAnalyzeArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatProgressAnalyze.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatProgressVacuumArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatProgressVacuum.parse(e));
    
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
clusterIndexRelid: PgCatalog.Types.Oid.parse(from.clusterIndexRelid),
heapTuplesScanned: PgCatalog.Types.Int8.parse(from.heapTuplesScanned),
heapTuplesWritten: PgCatalog.Types.Int8.parse(from.heapTuplesWritten),
heapBlksTotal: PgCatalog.Types.Int8.parse(from.heapBlksTotal),
heapBlksScanned: PgCatalog.Types.Int8.parse(from.heapBlksScanned),
indexRebuildCount: PgCatalog.Types.Int8.parse(from.indexRebuildCount),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatProgressClusterArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatProgressCluster.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatProgressCreateIndexArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatProgressCreateIndex.parse(e));
    
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
tablespacesStreamed: PgCatalog.Types.Int8.parse(from.tablespacesStreamed),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatProgressBasebackupArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatProgressBasebackup.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatProgressCopyArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatProgressCopy.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgUserMappingsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgUserMappings.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgReplicationOriginStatusArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgReplicationOriginStatus.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatSubscriptionStatsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => PgStatSubscriptionStats.parse(e));
    
}


}
export namespace PgProcOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgProcOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgProcPronameArgsNspIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgProcPronameArgsNspIndex.is(from)) {
  return {
proname: PgCatalog.Types.Name.parse(from.proname),
proargtypes: PgCatalog.Types.Oidvector.parse(from.proargtypes),
pronamespace: PgCatalog.Types.Oid.parse(from.pronamespace),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgTypeOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgTypeOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgTypeTypnameNspIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgTypeTypnameNspIndex.is(from)) {
  return {
typname: PgCatalog.Types.Name.parse(from.typname),
typnamespace: PgCatalog.Types.Oid.parse(from.typnamespace),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgAttributeRelidAttnamIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgAttributeRelidAttnamIndex.is(from)) {
  return {
attrelid: PgCatalog.Types.Oid.parse(from.attrelid),
attname: PgCatalog.Types.Name.parse(from.attname),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgAttributeRelidAttnumIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgAttributeRelidAttnumIndex.is(from)) {
  return {
attrelid: PgCatalog.Types.Oid.parse(from.attrelid),
attnum: PgCatalog.Types.Int2.parse(from.attnum),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgClassOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgClassOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgClassRelnameNspIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgClassRelnameNspIndex.is(from)) {
  return {
relname: PgCatalog.Types.Name.parse(from.relname),
relnamespace: PgCatalog.Types.Oid.parse(from.relnamespace),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgClassTblspcRelfilenodeIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgClassTblspcRelfilenodeIndex.is(from)) {
  return {
reltablespace: PgCatalog.Types.Oid.parse(from.reltablespace),
relfilenode: PgCatalog.Types.Oid.parse(from.relfilenode),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgAttrdefAdrelidAdnumIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgAttrdefAdrelidAdnumIndex.is(from)) {
  return {
adrelid: PgCatalog.Types.Oid.parse(from.adrelid),
adnum: PgCatalog.Types.Int2.parse(from.adnum),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgAttrdefOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgAttrdefOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgConstraintConnameNspIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgConstraintConnameNspIndex.is(from)) {
  return {
conname: PgCatalog.Types.Name.parse(from.conname),
connamespace: PgCatalog.Types.Oid.parse(from.connamespace),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgConstraintConrelidContypidConnameIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgConstraintConrelidContypidConnameIndex.is(from)) {
  return {
conrelid: PgCatalog.Types.Oid.parse(from.conrelid),
contypid: PgCatalog.Types.Oid.parse(from.contypid),
conname: PgCatalog.Types.Name.parse(from.conname),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgConstraintContypidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgConstraintContypidIndex.is(from)) {
  return {
contypid: PgCatalog.Types.Oid.parse(from.contypid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgConstraintOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgConstraintOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgConstraintConparentidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgConstraintConparentidIndex.is(from)) {
  return {
conparentid: PgCatalog.Types.Oid.parse(from.conparentid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgInheritsRelidSeqnoIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgInheritsRelidSeqnoIndex.is(from)) {
  return {
inhrelid: PgCatalog.Types.Oid.parse(from.inhrelid),
inhseqno: PgCatalog.Types.Int4.parse(from.inhseqno),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgInheritsParentIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgInheritsParentIndex.is(from)) {
  return {
inhparent: PgCatalog.Types.Oid.parse(from.inhparent),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgIndexIndrelidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgIndexIndrelidIndex.is(from)) {
  return {
indrelid: PgCatalog.Types.Oid.parse(from.indrelid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgIndexIndexrelidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgIndexIndexrelidIndex.is(from)) {
  return {
indexrelid: PgCatalog.Types.Oid.parse(from.indexrelid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgOperatorOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgOperatorOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgOperatorOprnameLRNIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgOperatorOprnameLRNIndex.is(from)) {
  return {
oprname: PgCatalog.Types.Name.parse(from.oprname),
oprleft: PgCatalog.Types.Oid.parse(from.oprleft),
oprright: PgCatalog.Types.Oid.parse(from.oprright),
oprnamespace: PgCatalog.Types.Oid.parse(from.oprnamespace),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgOpfamilyAmNameNspIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgOpfamilyAmNameNspIndex.is(from)) {
  return {
opfmethod: PgCatalog.Types.Oid.parse(from.opfmethod),
opfname: PgCatalog.Types.Name.parse(from.opfname),
opfnamespace: PgCatalog.Types.Oid.parse(from.opfnamespace),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgOpfamilyOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgOpfamilyOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgOpclassAmNameNspIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgOpclassAmNameNspIndex.is(from)) {
  return {
opcmethod: PgCatalog.Types.Oid.parse(from.opcmethod),
opcname: PgCatalog.Types.Name.parse(from.opcname),
opcnamespace: PgCatalog.Types.Oid.parse(from.opcnamespace),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgOpclassOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgOpclassOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgAmNameIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgAmNameIndex.is(from)) {
  return {
amname: PgCatalog.Types.Name.parse(from.amname),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgAmOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgAmOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgAmopFamStratIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgAmopFamStratIndex.is(from)) {
  return {
amopfamily: PgCatalog.Types.Oid.parse(from.amopfamily),
amoplefttype: PgCatalog.Types.Oid.parse(from.amoplefttype),
amoprighttype: PgCatalog.Types.Oid.parse(from.amoprighttype),
amopstrategy: PgCatalog.Types.Int2.parse(from.amopstrategy),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgAmopOprFamIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgAmopOprFamIndex.is(from)) {
  return {
amopopr: PgCatalog.Types.Oid.parse(from.amopopr),
amoppurpose: PgCatalog.Types.Char.parse(from.amoppurpose),
amopfamily: PgCatalog.Types.Oid.parse(from.amopfamily),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgAmopOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgAmopOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgAmprocFamProcIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgAmprocFamProcIndex.is(from)) {
  return {
amprocfamily: PgCatalog.Types.Oid.parse(from.amprocfamily),
amproclefttype: PgCatalog.Types.Oid.parse(from.amproclefttype),
amprocrighttype: PgCatalog.Types.Oid.parse(from.amprocrighttype),
amprocnum: PgCatalog.Types.Int2.parse(from.amprocnum),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgAmprocOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgAmprocOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgLanguageNameIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgLanguageNameIndex.is(from)) {
  return {
lanname: PgCatalog.Types.Name.parse(from.lanname),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgLanguageOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgLanguageOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgLargeobjectMetadataOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgLargeobjectMetadataOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgLargeobjectLoidPnIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgLargeobjectLoidPnIndex.is(from)) {
  return {
loid: PgCatalog.Types.Oid.parse(from.loid),
pageno: PgCatalog.Types.Int4.parse(from.pageno),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgAggregateFnoidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgAggregateFnoidIndex.is(from)) {
  return {
aggfnoid: PgCatalog.Types.Regproc.parse(from.aggfnoid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatisticRelidAttInhIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgStatisticRelidAttInhIndex.is(from)) {
  return {
starelid: PgCatalog.Types.Oid.parse(from.starelid),
staattnum: PgCatalog.Types.Int2.parse(from.staattnum),
stainherit: PgCatalog.Types.Bool.parse(from.stainherit),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatisticExtOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgStatisticExtOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatisticExtNameIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgStatisticExtNameIndex.is(from)) {
  return {
stxname: PgCatalog.Types.Name.parse(from.stxname),
stxnamespace: PgCatalog.Types.Oid.parse(from.stxnamespace),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatisticExtRelidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgStatisticExtRelidIndex.is(from)) {
  return {
stxrelid: PgCatalog.Types.Oid.parse(from.stxrelid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgStatisticExtDataStxoidInhIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgStatisticExtDataStxoidInhIndex.is(from)) {
  return {
stxoid: PgCatalog.Types.Oid.parse(from.stxoid),
stxdinherit: PgCatalog.Types.Bool.parse(from.stxdinherit),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgRewriteOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgRewriteOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgRewriteRelRulenameIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgRewriteRelRulenameIndex.is(from)) {
  return {
evClass: PgCatalog.Types.Oid.parse(from.evClass),
rulename: PgCatalog.Types.Name.parse(from.rulename),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgTriggerTgconstraintIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgTriggerTgconstraintIndex.is(from)) {
  return {
tgconstraint: PgCatalog.Types.Oid.parse(from.tgconstraint),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgTriggerTgrelidTgnameIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgTriggerTgrelidTgnameIndex.is(from)) {
  return {
tgrelid: PgCatalog.Types.Oid.parse(from.tgrelid),
tgname: PgCatalog.Types.Name.parse(from.tgname),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgTriggerOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgTriggerOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgEventTriggerEvtnameIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgEventTriggerEvtnameIndex.is(from)) {
  return {
evtname: PgCatalog.Types.Name.parse(from.evtname),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgEventTriggerOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgEventTriggerOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgDescriptionOCOIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgDescriptionOCOIndex.is(from)) {
  return {
objoid: PgCatalog.Types.Oid.parse(from.objoid),
classoid: PgCatalog.Types.Oid.parse(from.classoid),
objsubid: PgCatalog.Types.Int4.parse(from.objsubid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgCastOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgCastOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgCastSourceTargetIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgCastSourceTargetIndex.is(from)) {
  return {
castsource: PgCatalog.Types.Oid.parse(from.castsource),
casttarget: PgCatalog.Types.Oid.parse(from.casttarget),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgEnumOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgEnumOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgEnumTypidLabelIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgEnumTypidLabelIndex.is(from)) {
  return {
enumtypid: PgCatalog.Types.Oid.parse(from.enumtypid),
enumlabel: PgCatalog.Types.Name.parse(from.enumlabel),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgEnumTypidSortorderIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgEnumTypidSortorderIndex.is(from)) {
  return {
enumtypid: PgCatalog.Types.Oid.parse(from.enumtypid),
enumsortorder: PgCatalog.Types.Float4.parse(from.enumsortorder),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgNamespaceNspnameIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgNamespaceNspnameIndex.is(from)) {
  return {
nspname: PgCatalog.Types.Name.parse(from.nspname),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgNamespaceOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgNamespaceOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgConversionDefaultIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgConversionDefaultIndex.is(from)) {
  return {
connamespace: PgCatalog.Types.Oid.parse(from.connamespace),
conforencoding: PgCatalog.Types.Int4.parse(from.conforencoding),
contoencoding: PgCatalog.Types.Int4.parse(from.contoencoding),
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgConversionNameNspIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgConversionNameNspIndex.is(from)) {
  return {
conname: PgCatalog.Types.Name.parse(from.conname),
connamespace: PgCatalog.Types.Oid.parse(from.connamespace),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgConversionOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgConversionOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgDependDependerIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgDependDependerIndex.is(from)) {
  return {
classid: PgCatalog.Types.Oid.parse(from.classid),
objid: PgCatalog.Types.Oid.parse(from.objid),
objsubid: PgCatalog.Types.Int4.parse(from.objsubid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgDependReferenceIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgDependReferenceIndex.is(from)) {
  return {
refclassid: PgCatalog.Types.Oid.parse(from.refclassid),
refobjid: PgCatalog.Types.Oid.parse(from.refobjid),
refobjsubid: PgCatalog.Types.Int4.parse(from.refobjsubid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgDatabaseDatnameIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgDatabaseDatnameIndex.is(from)) {
  return {
datname: PgCatalog.Types.Name.parse(from.datname),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgDatabaseOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgDatabaseOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgDbRoleSettingDatabaseidRolIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgDbRoleSettingDatabaseidRolIndex.is(from)) {
  return {
setdatabase: PgCatalog.Types.Oid.parse(from.setdatabase),
setrole: PgCatalog.Types.Oid.parse(from.setrole),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgTablespaceOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgTablespaceOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgTablespaceSpcnameIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgTablespaceSpcnameIndex.is(from)) {
  return {
spcname: PgCatalog.Types.Name.parse(from.spcname),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgAuthidRolnameIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgAuthidRolnameIndex.is(from)) {
  return {
rolname: PgCatalog.Types.Name.parse(from.rolname),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgAuthidOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgAuthidOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgAuthMembersOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgAuthMembersOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgAuthMembersRoleMemberIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgAuthMembersRoleMemberIndex.is(from)) {
  return {
roleid: PgCatalog.Types.Oid.parse(from.roleid),
member: PgCatalog.Types.Oid.parse(from.member),
grantor: PgCatalog.Types.Oid.parse(from.grantor),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgAuthMembersMemberRoleIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgAuthMembersMemberRoleIndex.is(from)) {
  return {
member: PgCatalog.Types.Oid.parse(from.member),
roleid: PgCatalog.Types.Oid.parse(from.roleid),
grantor: PgCatalog.Types.Oid.parse(from.grantor),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgAuthMembersGrantorIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgAuthMembersGrantorIndex.is(from)) {
  return {
grantor: PgCatalog.Types.Oid.parse(from.grantor),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgShdependDependerIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgShdependDependerIndex.is(from)) {
  return {
dbid: PgCatalog.Types.Oid.parse(from.dbid),
classid: PgCatalog.Types.Oid.parse(from.classid),
objid: PgCatalog.Types.Oid.parse(from.objid),
objsubid: PgCatalog.Types.Int4.parse(from.objsubid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgShdependReferenceIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgShdependReferenceIndex.is(from)) {
  return {
refclassid: PgCatalog.Types.Oid.parse(from.refclassid),
refobjid: PgCatalog.Types.Oid.parse(from.refobjid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgShdescriptionOCIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgShdescriptionOCIndex.is(from)) {
  return {
objoid: PgCatalog.Types.Oid.parse(from.objoid),
classoid: PgCatalog.Types.Oid.parse(from.classoid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgTsConfigCfgnameIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgTsConfigCfgnameIndex.is(from)) {
  return {
cfgname: PgCatalog.Types.Name.parse(from.cfgname),
cfgnamespace: PgCatalog.Types.Oid.parse(from.cfgnamespace),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgTsConfigOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgTsConfigOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgTsConfigMapIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgTsConfigMapIndex.is(from)) {
  return {
mapcfg: PgCatalog.Types.Oid.parse(from.mapcfg),
maptokentype: PgCatalog.Types.Int4.parse(from.maptokentype),
mapseqno: PgCatalog.Types.Int4.parse(from.mapseqno),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgTsDictDictnameIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgTsDictDictnameIndex.is(from)) {
  return {
dictname: PgCatalog.Types.Name.parse(from.dictname),
dictnamespace: PgCatalog.Types.Oid.parse(from.dictnamespace),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgTsDictOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgTsDictOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgTsParserPrsnameIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgTsParserPrsnameIndex.is(from)) {
  return {
prsname: PgCatalog.Types.Name.parse(from.prsname),
prsnamespace: PgCatalog.Types.Oid.parse(from.prsnamespace),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgTsParserOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgTsParserOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgTsTemplateTmplnameIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgTsTemplateTmplnameIndex.is(from)) {
  return {
tmplname: PgCatalog.Types.Name.parse(from.tmplname),
tmplnamespace: PgCatalog.Types.Oid.parse(from.tmplnamespace),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgTsTemplateOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgTsTemplateOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgExtensionOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgExtensionOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgExtensionNameIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgExtensionNameIndex.is(from)) {
  return {
extname: PgCatalog.Types.Name.parse(from.extname),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgForeignDataWrapperOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgForeignDataWrapperOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgForeignDataWrapperNameIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgForeignDataWrapperNameIndex.is(from)) {
  return {
fdwname: PgCatalog.Types.Name.parse(from.fdwname),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgForeignServerOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgForeignServerOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgForeignServerNameIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgForeignServerNameIndex.is(from)) {
  return {
srvname: PgCatalog.Types.Name.parse(from.srvname),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgUserMappingOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgUserMappingOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgUserMappingUserServerIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgUserMappingUserServerIndex.is(from)) {
  return {
umuser: PgCatalog.Types.Oid.parse(from.umuser),
umserver: PgCatalog.Types.Oid.parse(from.umserver),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgForeignTableRelidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgForeignTableRelidIndex.is(from)) {
  return {
ftrelid: PgCatalog.Types.Oid.parse(from.ftrelid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgPolicyOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgPolicyOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgPolicyPolrelidPolnameIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgPolicyPolrelidPolnameIndex.is(from)) {
  return {
polrelid: PgCatalog.Types.Oid.parse(from.polrelid),
polname: PgCatalog.Types.Name.parse(from.polname),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgReplicationOriginRoiidentIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgReplicationOriginRoiidentIndex.is(from)) {
  return {
roident: PgCatalog.Types.Oid.parse(from.roident),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgReplicationOriginRonameIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgReplicationOriginRonameIndex.is(from)) {
  return {
roname: PgCatalog.Types.Text.parse(from.roname),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgDefaultAclRoleNspObjIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgDefaultAclRoleNspObjIndex.is(from)) {
  return {
defaclrole: PgCatalog.Types.Oid.parse(from.defaclrole),
defaclnamespace: PgCatalog.Types.Oid.parse(from.defaclnamespace),
defaclobjtype: PgCatalog.Types.Char.parse(from.defaclobjtype),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgDefaultAclOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgDefaultAclOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgInitPrivsOCOIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgInitPrivsOCOIndex.is(from)) {
  return {
objoid: PgCatalog.Types.Oid.parse(from.objoid),
classoid: PgCatalog.Types.Oid.parse(from.classoid),
objsubid: PgCatalog.Types.Int4.parse(from.objsubid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgSeclabelObjectIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgSeclabelObjectIndex.is(from)) {
  return {
objoid: PgCatalog.Types.Oid.parse(from.objoid),
classoid: PgCatalog.Types.Oid.parse(from.classoid),
objsubid: PgCatalog.Types.Int4.parse(from.objsubid),
provider: PgCatalog.Types.Text.parse(from.provider),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgShseclabelObjectIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgShseclabelObjectIndex.is(from)) {
  return {
objoid: PgCatalog.Types.Oid.parse(from.objoid),
classoid: PgCatalog.Types.Oid.parse(from.classoid),
provider: PgCatalog.Types.Text.parse(from.provider),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgCollationNameEncNspIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgCollationNameEncNspIndex.is(from)) {
  return {
collname: PgCatalog.Types.Name.parse(from.collname),
collencoding: PgCatalog.Types.Int4.parse(from.collencoding),
collnamespace: PgCatalog.Types.Oid.parse(from.collnamespace),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgCollationOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgCollationOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgParameterAclParnameIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgParameterAclParnameIndex.is(from)) {
  return {
parname: PgCatalog.Types.Text.parse(from.parname),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgParameterAclOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgParameterAclOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgPartitionedTablePartrelidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgPartitionedTablePartrelidIndex.is(from)) {
  return {
partrelid: PgCatalog.Types.Oid.parse(from.partrelid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgRangeRngtypidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgRangeRngtypidIndex.is(from)) {
  return {
rngtypid: PgCatalog.Types.Oid.parse(from.rngtypid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgRangeRngmultitypidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgRangeRngmultitypidIndex.is(from)) {
  return {
rngmultitypid: PgCatalog.Types.Oid.parse(from.rngmultitypid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgTransformOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgTransformOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgTransformTypeLangIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgTransformTypeLangIndex.is(from)) {
  return {
trftype: PgCatalog.Types.Oid.parse(from.trftype),
trflang: PgCatalog.Types.Oid.parse(from.trflang),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgSequenceSeqrelidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgSequenceSeqrelidIndex.is(from)) {
  return {
seqrelid: PgCatalog.Types.Oid.parse(from.seqrelid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgPublicationOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgPublicationOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgPublicationPubnameIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgPublicationPubnameIndex.is(from)) {
  return {
pubname: PgCatalog.Types.Name.parse(from.pubname),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgPublicationNamespaceOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgPublicationNamespaceOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgPublicationNamespacePnnspidPnpubidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgPublicationNamespacePnnspidPnpubidIndex.is(from)) {
  return {
pnnspid: PgCatalog.Types.Oid.parse(from.pnnspid),
pnpubid: PgCatalog.Types.Oid.parse(from.pnpubid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgPublicationRelOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgPublicationRelOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgPublicationRelPrrelidPrpubidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgPublicationRelPrrelidPrpubidIndex.is(from)) {
  return {
prrelid: PgCatalog.Types.Oid.parse(from.prrelid),
prpubid: PgCatalog.Types.Oid.parse(from.prpubid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgPublicationRelPrpubidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgPublicationRelPrpubidIndex.is(from)) {
  return {
prpubid: PgCatalog.Types.Oid.parse(from.prpubid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgSubscriptionOidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgSubscriptionOidIndex.is(from)) {
  return {
oid: PgCatalog.Types.Oid.parse(from.oid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgSubscriptionSubnameIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgSubscriptionSubnameIndex.is(from)) {
  return {
subdbid: PgCatalog.Types.Oid.parse(from.subdbid),
subname: PgCatalog.Types.Name.parse(from.subname),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgSubscriptionRelSrrelidSrsubidIndex {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgCatalog.Types.PgSubscriptionRelSrrelidSrsubidIndex.is(from)) {
  return {
srrelid: PgCatalog.Types.Oid.parse(from.srrelid),
srsubid: PgCatalog.Types.Oid.parse(from.srsubid),
};
}
throw new Error(JSON.stringify(from))
}


}
}
export namespace Procedures {
}
export namespace Tables {
export namespace PgStatistic {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgType {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgForeignTable {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgAuthid {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgStatisticExtData {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgUserMapping {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgSubscription {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgAttribute {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgProc {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgClass {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgAttrdef {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgConstraint {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgInherits {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgIndex {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgOperator {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgOpfamily {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgOpclass {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgAm {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgAmop {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgAmproc {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgLanguage {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgLargeobjectMetadata {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgAggregate {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgStatisticExt {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgRewrite {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgTrigger {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgEventTrigger {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgDescription {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgCast {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgEnum {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgNamespace {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgConversion {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgDepend {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgDatabase {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgDbRoleSetting {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgTablespace {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgAuthMembers {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgShdepend {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgShdescription {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgTsConfig {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgTsConfigMap {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgTsDict {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgTsParser {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgTsTemplate {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgExtension {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgForeignDataWrapper {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgForeignServer {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgPolicy {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgReplicationOrigin {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgDefaultAcl {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgInitPrivs {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgSeclabel {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgShseclabel {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgCollation {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgParameterAcl {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgPartitionedTable {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgRange {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgTransform {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgSequence {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgPublication {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgPublicationNamespace {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgPublicationRel {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgSubscriptionRel {
export namespace Results {
}
export namespace Create {
}
}
export namespace PgLargeobject {
export namespace Results {
}
export namespace Create {
}
}
}
}
export namespace InformationSchema {
export namespace Types {
export namespace CardinalNumber {
export function parse(from: unknown) {
// DomainType
if (from === null || from === undefined) return null;
return PgCatalog.Types.Int4.parse(from);
}


}
export namespace CardinalNumberArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => CardinalNumber.parse(e));
    
}


}
export namespace CharacterData {
export function parse(from: unknown) {
// DomainType
if (from === null || from === undefined) return null;
return PgCatalog.Types.Varchar.parse(from);
}


}
export namespace CharacterDataArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => CharacterData.parse(e));
    
}


}
export namespace SqlIdentifier {
export function parse(from: unknown) {
// DomainType
if (from === null || from === undefined) return null;
return PgCatalog.Types.Name.parse(from);
}


}
export namespace SqlIdentifierArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => SqlIdentifier.parse(e));
    
}


}
export namespace InformationSchemaCatalogName {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.InformationSchemaCatalogName.is(from)) {
  return {
catalogName: InformationSchema.Types.SqlIdentifier.parse(from.catalogName),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace InformationSchemaCatalogNameArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => InformationSchemaCatalogName.parse(e));
    
}


}
export namespace TimeStamp {
export function parse(from: unknown) {
// DomainType
if (from === null || from === undefined) return null;
return PgCatalog.Types.Timestamptz.parse(from);
}


}
export namespace TimeStampArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => TimeStamp.parse(e));
    
}


}
export namespace YesOrNo {
export function parse(from: unknown) {
// DomainType
if (from === null || from === undefined) return null;
return PgCatalog.Types.Varchar.parse(from);
}


}
export namespace YesOrNoArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => YesOrNo.parse(e));
    
}


}
export namespace ApplicableRoles {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.ApplicableRoles.is(from)) {
  return {
grantee: InformationSchema.Types.SqlIdentifier.parse(from.grantee),
roleName: InformationSchema.Types.SqlIdentifier.parse(from.roleName),
isGrantable: InformationSchema.Types.YesOrNo.parse(from.isGrantable),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace ApplicableRolesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => ApplicableRoles.parse(e));
    
}


}
export namespace AdministrableRoleAuthorizations {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.AdministrableRoleAuthorizations.is(from)) {
  return {
grantee: InformationSchema.Types.SqlIdentifier.parse(from.grantee),
roleName: InformationSchema.Types.SqlIdentifier.parse(from.roleName),
isGrantable: InformationSchema.Types.YesOrNo.parse(from.isGrantable),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace AdministrableRoleAuthorizationsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => AdministrableRoleAuthorizations.parse(e));
    
}


}
export namespace Attributes {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.Attributes.is(from)) {
  return {
udtCatalog: InformationSchema.Types.SqlIdentifier.parse(from.udtCatalog),
udtSchema: InformationSchema.Types.SqlIdentifier.parse(from.udtSchema),
udtName: InformationSchema.Types.SqlIdentifier.parse(from.udtName),
attributeName: InformationSchema.Types.SqlIdentifier.parse(from.attributeName),
ordinalPosition: InformationSchema.Types.CardinalNumber.parse(from.ordinalPosition),
attributeDefault: InformationSchema.Types.CharacterData.parse(from.attributeDefault),
isNullable: InformationSchema.Types.YesOrNo.parse(from.isNullable),
dataType: InformationSchema.Types.CharacterData.parse(from.dataType),
characterMaximumLength: InformationSchema.Types.CardinalNumber.parse(from.characterMaximumLength),
characterOctetLength: InformationSchema.Types.CardinalNumber.parse(from.characterOctetLength),
characterSetCatalog: InformationSchema.Types.SqlIdentifier.parse(from.characterSetCatalog),
characterSetSchema: InformationSchema.Types.SqlIdentifier.parse(from.characterSetSchema),
characterSetName: InformationSchema.Types.SqlIdentifier.parse(from.characterSetName),
collationCatalog: InformationSchema.Types.SqlIdentifier.parse(from.collationCatalog),
collationSchema: InformationSchema.Types.SqlIdentifier.parse(from.collationSchema),
collationName: InformationSchema.Types.SqlIdentifier.parse(from.collationName),
numericPrecision: InformationSchema.Types.CardinalNumber.parse(from.numericPrecision),
numericPrecisionRadix: InformationSchema.Types.CardinalNumber.parse(from.numericPrecisionRadix),
numericScale: InformationSchema.Types.CardinalNumber.parse(from.numericScale),
datetimePrecision: InformationSchema.Types.CardinalNumber.parse(from.datetimePrecision),
intervalType: InformationSchema.Types.CharacterData.parse(from.intervalType),
intervalPrecision: InformationSchema.Types.CardinalNumber.parse(from.intervalPrecision),
attributeUdtCatalog: InformationSchema.Types.SqlIdentifier.parse(from.attributeUdtCatalog),
attributeUdtSchema: InformationSchema.Types.SqlIdentifier.parse(from.attributeUdtSchema),
attributeUdtName: InformationSchema.Types.SqlIdentifier.parse(from.attributeUdtName),
scopeCatalog: InformationSchema.Types.SqlIdentifier.parse(from.scopeCatalog),
scopeSchema: InformationSchema.Types.SqlIdentifier.parse(from.scopeSchema),
scopeName: InformationSchema.Types.SqlIdentifier.parse(from.scopeName),
maximumCardinality: InformationSchema.Types.CardinalNumber.parse(from.maximumCardinality),
dtdIdentifier: InformationSchema.Types.SqlIdentifier.parse(from.dtdIdentifier),
isDerivedReferenceAttribute: InformationSchema.Types.YesOrNo.parse(from.isDerivedReferenceAttribute),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace AttributesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Attributes.parse(e));
    
}


}
export namespace CharacterSets {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.CharacterSets.is(from)) {
  return {
characterSetCatalog: InformationSchema.Types.SqlIdentifier.parse(from.characterSetCatalog),
characterSetSchema: InformationSchema.Types.SqlIdentifier.parse(from.characterSetSchema),
characterSetName: InformationSchema.Types.SqlIdentifier.parse(from.characterSetName),
characterRepertoire: InformationSchema.Types.SqlIdentifier.parse(from.characterRepertoire),
formOfUse: InformationSchema.Types.SqlIdentifier.parse(from.formOfUse),
defaultCollateCatalog: InformationSchema.Types.SqlIdentifier.parse(from.defaultCollateCatalog),
defaultCollateSchema: InformationSchema.Types.SqlIdentifier.parse(from.defaultCollateSchema),
defaultCollateName: InformationSchema.Types.SqlIdentifier.parse(from.defaultCollateName),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace CharacterSetsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => CharacterSets.parse(e));
    
}


}
export namespace CheckConstraintRoutineUsage {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.CheckConstraintRoutineUsage.is(from)) {
  return {
constraintCatalog: InformationSchema.Types.SqlIdentifier.parse(from.constraintCatalog),
constraintSchema: InformationSchema.Types.SqlIdentifier.parse(from.constraintSchema),
constraintName: InformationSchema.Types.SqlIdentifier.parse(from.constraintName),
specificCatalog: InformationSchema.Types.SqlIdentifier.parse(from.specificCatalog),
specificSchema: InformationSchema.Types.SqlIdentifier.parse(from.specificSchema),
specificName: InformationSchema.Types.SqlIdentifier.parse(from.specificName),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace CheckConstraintRoutineUsageArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => CheckConstraintRoutineUsage.parse(e));
    
}


}
export namespace CheckConstraints {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.CheckConstraints.is(from)) {
  return {
constraintCatalog: InformationSchema.Types.SqlIdentifier.parse(from.constraintCatalog),
constraintSchema: InformationSchema.Types.SqlIdentifier.parse(from.constraintSchema),
constraintName: InformationSchema.Types.SqlIdentifier.parse(from.constraintName),
checkClause: InformationSchema.Types.CharacterData.parse(from.checkClause),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace CheckConstraintsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => CheckConstraints.parse(e));
    
}


}
export namespace Collations {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.Collations.is(from)) {
  return {
collationCatalog: InformationSchema.Types.SqlIdentifier.parse(from.collationCatalog),
collationSchema: InformationSchema.Types.SqlIdentifier.parse(from.collationSchema),
collationName: InformationSchema.Types.SqlIdentifier.parse(from.collationName),
padAttribute: InformationSchema.Types.CharacterData.parse(from.padAttribute),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace CollationsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Collations.parse(e));
    
}


}
export namespace CollationCharacterSetApplicability {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.CollationCharacterSetApplicability.is(from)) {
  return {
collationCatalog: InformationSchema.Types.SqlIdentifier.parse(from.collationCatalog),
collationSchema: InformationSchema.Types.SqlIdentifier.parse(from.collationSchema),
collationName: InformationSchema.Types.SqlIdentifier.parse(from.collationName),
characterSetCatalog: InformationSchema.Types.SqlIdentifier.parse(from.characterSetCatalog),
characterSetSchema: InformationSchema.Types.SqlIdentifier.parse(from.characterSetSchema),
characterSetName: InformationSchema.Types.SqlIdentifier.parse(from.characterSetName),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace CollationCharacterSetApplicabilityArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => CollationCharacterSetApplicability.parse(e));
    
}


}
export namespace ColumnColumnUsage {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.ColumnColumnUsage.is(from)) {
  return {
tableCatalog: InformationSchema.Types.SqlIdentifier.parse(from.tableCatalog),
tableSchema: InformationSchema.Types.SqlIdentifier.parse(from.tableSchema),
tableName: InformationSchema.Types.SqlIdentifier.parse(from.tableName),
columnName: InformationSchema.Types.SqlIdentifier.parse(from.columnName),
dependentColumn: InformationSchema.Types.SqlIdentifier.parse(from.dependentColumn),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace ColumnColumnUsageArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => ColumnColumnUsage.parse(e));
    
}


}
export namespace ColumnDomainUsage {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.ColumnDomainUsage.is(from)) {
  return {
domainCatalog: InformationSchema.Types.SqlIdentifier.parse(from.domainCatalog),
domainSchema: InformationSchema.Types.SqlIdentifier.parse(from.domainSchema),
domainName: InformationSchema.Types.SqlIdentifier.parse(from.domainName),
tableCatalog: InformationSchema.Types.SqlIdentifier.parse(from.tableCatalog),
tableSchema: InformationSchema.Types.SqlIdentifier.parse(from.tableSchema),
tableName: InformationSchema.Types.SqlIdentifier.parse(from.tableName),
columnName: InformationSchema.Types.SqlIdentifier.parse(from.columnName),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace ColumnDomainUsageArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => ColumnDomainUsage.parse(e));
    
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
tableCatalog: InformationSchema.Types.SqlIdentifier.parse(from.tableCatalog),
tableSchema: InformationSchema.Types.SqlIdentifier.parse(from.tableSchema),
tableName: InformationSchema.Types.SqlIdentifier.parse(from.tableName),
columnName: InformationSchema.Types.SqlIdentifier.parse(from.columnName),
privilegeType: InformationSchema.Types.CharacterData.parse(from.privilegeType),
isGrantable: InformationSchema.Types.YesOrNo.parse(from.isGrantable),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace ColumnPrivilegesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => ColumnPrivileges.parse(e));
    
}


}
export namespace ColumnUdtUsage {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.ColumnUdtUsage.is(from)) {
  return {
udtCatalog: InformationSchema.Types.SqlIdentifier.parse(from.udtCatalog),
udtSchema: InformationSchema.Types.SqlIdentifier.parse(from.udtSchema),
udtName: InformationSchema.Types.SqlIdentifier.parse(from.udtName),
tableCatalog: InformationSchema.Types.SqlIdentifier.parse(from.tableCatalog),
tableSchema: InformationSchema.Types.SqlIdentifier.parse(from.tableSchema),
tableName: InformationSchema.Types.SqlIdentifier.parse(from.tableName),
columnName: InformationSchema.Types.SqlIdentifier.parse(from.columnName),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace ColumnUdtUsageArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => ColumnUdtUsage.parse(e));
    
}


}
export namespace Columns {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.Columns.is(from)) {
  return {
tableCatalog: InformationSchema.Types.SqlIdentifier.parse(from.tableCatalog),
tableSchema: InformationSchema.Types.SqlIdentifier.parse(from.tableSchema),
tableName: InformationSchema.Types.SqlIdentifier.parse(from.tableName),
columnName: InformationSchema.Types.SqlIdentifier.parse(from.columnName),
ordinalPosition: InformationSchema.Types.CardinalNumber.parse(from.ordinalPosition),
columnDefault: InformationSchema.Types.CharacterData.parse(from.columnDefault),
isNullable: InformationSchema.Types.YesOrNo.parse(from.isNullable),
dataType: InformationSchema.Types.CharacterData.parse(from.dataType),
characterMaximumLength: InformationSchema.Types.CardinalNumber.parse(from.characterMaximumLength),
characterOctetLength: InformationSchema.Types.CardinalNumber.parse(from.characterOctetLength),
numericPrecision: InformationSchema.Types.CardinalNumber.parse(from.numericPrecision),
numericPrecisionRadix: InformationSchema.Types.CardinalNumber.parse(from.numericPrecisionRadix),
numericScale: InformationSchema.Types.CardinalNumber.parse(from.numericScale),
datetimePrecision: InformationSchema.Types.CardinalNumber.parse(from.datetimePrecision),
intervalType: InformationSchema.Types.CharacterData.parse(from.intervalType),
intervalPrecision: InformationSchema.Types.CardinalNumber.parse(from.intervalPrecision),
characterSetCatalog: InformationSchema.Types.SqlIdentifier.parse(from.characterSetCatalog),
characterSetSchema: InformationSchema.Types.SqlIdentifier.parse(from.characterSetSchema),
characterSetName: InformationSchema.Types.SqlIdentifier.parse(from.characterSetName),
collationCatalog: InformationSchema.Types.SqlIdentifier.parse(from.collationCatalog),
collationSchema: InformationSchema.Types.SqlIdentifier.parse(from.collationSchema),
collationName: InformationSchema.Types.SqlIdentifier.parse(from.collationName),
domainCatalog: InformationSchema.Types.SqlIdentifier.parse(from.domainCatalog),
domainSchema: InformationSchema.Types.SqlIdentifier.parse(from.domainSchema),
domainName: InformationSchema.Types.SqlIdentifier.parse(from.domainName),
udtCatalog: InformationSchema.Types.SqlIdentifier.parse(from.udtCatalog),
udtSchema: InformationSchema.Types.SqlIdentifier.parse(from.udtSchema),
udtName: InformationSchema.Types.SqlIdentifier.parse(from.udtName),
scopeCatalog: InformationSchema.Types.SqlIdentifier.parse(from.scopeCatalog),
scopeSchema: InformationSchema.Types.SqlIdentifier.parse(from.scopeSchema),
scopeName: InformationSchema.Types.SqlIdentifier.parse(from.scopeName),
maximumCardinality: InformationSchema.Types.CardinalNumber.parse(from.maximumCardinality),
dtdIdentifier: InformationSchema.Types.SqlIdentifier.parse(from.dtdIdentifier),
isSelfReferencing: InformationSchema.Types.YesOrNo.parse(from.isSelfReferencing),
isIdentity: InformationSchema.Types.YesOrNo.parse(from.isIdentity),
identityGeneration: InformationSchema.Types.CharacterData.parse(from.identityGeneration),
identityStart: InformationSchema.Types.CharacterData.parse(from.identityStart),
identityIncrement: InformationSchema.Types.CharacterData.parse(from.identityIncrement),
identityMaximum: InformationSchema.Types.CharacterData.parse(from.identityMaximum),
identityMinimum: InformationSchema.Types.CharacterData.parse(from.identityMinimum),
identityCycle: InformationSchema.Types.YesOrNo.parse(from.identityCycle),
isGenerated: InformationSchema.Types.CharacterData.parse(from.isGenerated),
generationExpression: InformationSchema.Types.CharacterData.parse(from.generationExpression),
isUpdatable: InformationSchema.Types.YesOrNo.parse(from.isUpdatable),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace ColumnsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Columns.parse(e));
    
}


}
export namespace ConstraintColumnUsage {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.ConstraintColumnUsage.is(from)) {
  return {
tableCatalog: InformationSchema.Types.SqlIdentifier.parse(from.tableCatalog),
tableSchema: InformationSchema.Types.SqlIdentifier.parse(from.tableSchema),
tableName: InformationSchema.Types.SqlIdentifier.parse(from.tableName),
columnName: InformationSchema.Types.SqlIdentifier.parse(from.columnName),
constraintCatalog: InformationSchema.Types.SqlIdentifier.parse(from.constraintCatalog),
constraintSchema: InformationSchema.Types.SqlIdentifier.parse(from.constraintSchema),
constraintName: InformationSchema.Types.SqlIdentifier.parse(from.constraintName),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace ConstraintColumnUsageArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => ConstraintColumnUsage.parse(e));
    
}


}
export namespace ConstraintTableUsage {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.ConstraintTableUsage.is(from)) {
  return {
tableCatalog: InformationSchema.Types.SqlIdentifier.parse(from.tableCatalog),
tableSchema: InformationSchema.Types.SqlIdentifier.parse(from.tableSchema),
tableName: InformationSchema.Types.SqlIdentifier.parse(from.tableName),
constraintCatalog: InformationSchema.Types.SqlIdentifier.parse(from.constraintCatalog),
constraintSchema: InformationSchema.Types.SqlIdentifier.parse(from.constraintSchema),
constraintName: InformationSchema.Types.SqlIdentifier.parse(from.constraintName),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace ConstraintTableUsageArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => ConstraintTableUsage.parse(e));
    
}


}
export namespace DomainConstraints {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.DomainConstraints.is(from)) {
  return {
constraintCatalog: InformationSchema.Types.SqlIdentifier.parse(from.constraintCatalog),
constraintSchema: InformationSchema.Types.SqlIdentifier.parse(from.constraintSchema),
constraintName: InformationSchema.Types.SqlIdentifier.parse(from.constraintName),
domainCatalog: InformationSchema.Types.SqlIdentifier.parse(from.domainCatalog),
domainSchema: InformationSchema.Types.SqlIdentifier.parse(from.domainSchema),
domainName: InformationSchema.Types.SqlIdentifier.parse(from.domainName),
isDeferrable: InformationSchema.Types.YesOrNo.parse(from.isDeferrable),
initiallyDeferred: InformationSchema.Types.YesOrNo.parse(from.initiallyDeferred),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace DomainConstraintsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => DomainConstraints.parse(e));
    
}


}
export namespace DomainUdtUsage {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.DomainUdtUsage.is(from)) {
  return {
udtCatalog: InformationSchema.Types.SqlIdentifier.parse(from.udtCatalog),
udtSchema: InformationSchema.Types.SqlIdentifier.parse(from.udtSchema),
udtName: InformationSchema.Types.SqlIdentifier.parse(from.udtName),
domainCatalog: InformationSchema.Types.SqlIdentifier.parse(from.domainCatalog),
domainSchema: InformationSchema.Types.SqlIdentifier.parse(from.domainSchema),
domainName: InformationSchema.Types.SqlIdentifier.parse(from.domainName),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace DomainUdtUsageArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => DomainUdtUsage.parse(e));
    
}


}
export namespace Domains {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.Domains.is(from)) {
  return {
domainCatalog: InformationSchema.Types.SqlIdentifier.parse(from.domainCatalog),
domainSchema: InformationSchema.Types.SqlIdentifier.parse(from.domainSchema),
domainName: InformationSchema.Types.SqlIdentifier.parse(from.domainName),
dataType: InformationSchema.Types.CharacterData.parse(from.dataType),
characterMaximumLength: InformationSchema.Types.CardinalNumber.parse(from.characterMaximumLength),
characterOctetLength: InformationSchema.Types.CardinalNumber.parse(from.characterOctetLength),
characterSetCatalog: InformationSchema.Types.SqlIdentifier.parse(from.characterSetCatalog),
characterSetSchema: InformationSchema.Types.SqlIdentifier.parse(from.characterSetSchema),
characterSetName: InformationSchema.Types.SqlIdentifier.parse(from.characterSetName),
collationCatalog: InformationSchema.Types.SqlIdentifier.parse(from.collationCatalog),
collationSchema: InformationSchema.Types.SqlIdentifier.parse(from.collationSchema),
collationName: InformationSchema.Types.SqlIdentifier.parse(from.collationName),
numericPrecision: InformationSchema.Types.CardinalNumber.parse(from.numericPrecision),
numericPrecisionRadix: InformationSchema.Types.CardinalNumber.parse(from.numericPrecisionRadix),
numericScale: InformationSchema.Types.CardinalNumber.parse(from.numericScale),
datetimePrecision: InformationSchema.Types.CardinalNumber.parse(from.datetimePrecision),
intervalType: InformationSchema.Types.CharacterData.parse(from.intervalType),
intervalPrecision: InformationSchema.Types.CardinalNumber.parse(from.intervalPrecision),
domainDefault: InformationSchema.Types.CharacterData.parse(from.domainDefault),
udtCatalog: InformationSchema.Types.SqlIdentifier.parse(from.udtCatalog),
udtSchema: InformationSchema.Types.SqlIdentifier.parse(from.udtSchema),
udtName: InformationSchema.Types.SqlIdentifier.parse(from.udtName),
scopeCatalog: InformationSchema.Types.SqlIdentifier.parse(from.scopeCatalog),
scopeSchema: InformationSchema.Types.SqlIdentifier.parse(from.scopeSchema),
scopeName: InformationSchema.Types.SqlIdentifier.parse(from.scopeName),
maximumCardinality: InformationSchema.Types.CardinalNumber.parse(from.maximumCardinality),
dtdIdentifier: InformationSchema.Types.SqlIdentifier.parse(from.dtdIdentifier),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace DomainsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Domains.parse(e));
    
}


}
export namespace EnabledRoles {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.EnabledRoles.is(from)) {
  return {
roleName: InformationSchema.Types.SqlIdentifier.parse(from.roleName),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace EnabledRolesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => EnabledRoles.parse(e));
    
}


}
export namespace KeyColumnUsage {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.KeyColumnUsage.is(from)) {
  return {
constraintCatalog: InformationSchema.Types.SqlIdentifier.parse(from.constraintCatalog),
constraintSchema: InformationSchema.Types.SqlIdentifier.parse(from.constraintSchema),
constraintName: InformationSchema.Types.SqlIdentifier.parse(from.constraintName),
tableCatalog: InformationSchema.Types.SqlIdentifier.parse(from.tableCatalog),
tableSchema: InformationSchema.Types.SqlIdentifier.parse(from.tableSchema),
tableName: InformationSchema.Types.SqlIdentifier.parse(from.tableName),
columnName: InformationSchema.Types.SqlIdentifier.parse(from.columnName),
ordinalPosition: InformationSchema.Types.CardinalNumber.parse(from.ordinalPosition),
positionInUniqueConstraint: InformationSchema.Types.CardinalNumber.parse(from.positionInUniqueConstraint),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace KeyColumnUsageArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => KeyColumnUsage.parse(e));
    
}


}
export namespace Parameters {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.Parameters.is(from)) {
  return {
specificCatalog: InformationSchema.Types.SqlIdentifier.parse(from.specificCatalog),
specificSchema: InformationSchema.Types.SqlIdentifier.parse(from.specificSchema),
specificName: InformationSchema.Types.SqlIdentifier.parse(from.specificName),
ordinalPosition: InformationSchema.Types.CardinalNumber.parse(from.ordinalPosition),
parameterMode: InformationSchema.Types.CharacterData.parse(from.parameterMode),
isResult: InformationSchema.Types.YesOrNo.parse(from.isResult),
asLocator: InformationSchema.Types.YesOrNo.parse(from.asLocator),
parameterName: InformationSchema.Types.SqlIdentifier.parse(from.parameterName),
dataType: InformationSchema.Types.CharacterData.parse(from.dataType),
characterMaximumLength: InformationSchema.Types.CardinalNumber.parse(from.characterMaximumLength),
characterOctetLength: InformationSchema.Types.CardinalNumber.parse(from.characterOctetLength),
characterSetCatalog: InformationSchema.Types.SqlIdentifier.parse(from.characterSetCatalog),
characterSetSchema: InformationSchema.Types.SqlIdentifier.parse(from.characterSetSchema),
characterSetName: InformationSchema.Types.SqlIdentifier.parse(from.characterSetName),
collationCatalog: InformationSchema.Types.SqlIdentifier.parse(from.collationCatalog),
collationSchema: InformationSchema.Types.SqlIdentifier.parse(from.collationSchema),
collationName: InformationSchema.Types.SqlIdentifier.parse(from.collationName),
numericPrecision: InformationSchema.Types.CardinalNumber.parse(from.numericPrecision),
numericPrecisionRadix: InformationSchema.Types.CardinalNumber.parse(from.numericPrecisionRadix),
numericScale: InformationSchema.Types.CardinalNumber.parse(from.numericScale),
datetimePrecision: InformationSchema.Types.CardinalNumber.parse(from.datetimePrecision),
intervalType: InformationSchema.Types.CharacterData.parse(from.intervalType),
intervalPrecision: InformationSchema.Types.CardinalNumber.parse(from.intervalPrecision),
udtCatalog: InformationSchema.Types.SqlIdentifier.parse(from.udtCatalog),
udtSchema: InformationSchema.Types.SqlIdentifier.parse(from.udtSchema),
udtName: InformationSchema.Types.SqlIdentifier.parse(from.udtName),
scopeCatalog: InformationSchema.Types.SqlIdentifier.parse(from.scopeCatalog),
scopeSchema: InformationSchema.Types.SqlIdentifier.parse(from.scopeSchema),
scopeName: InformationSchema.Types.SqlIdentifier.parse(from.scopeName),
maximumCardinality: InformationSchema.Types.CardinalNumber.parse(from.maximumCardinality),
dtdIdentifier: InformationSchema.Types.SqlIdentifier.parse(from.dtdIdentifier),
parameterDefault: InformationSchema.Types.CharacterData.parse(from.parameterDefault),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace ParametersArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Parameters.parse(e));
    
}


}
export namespace ReferentialConstraints {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.ReferentialConstraints.is(from)) {
  return {
constraintCatalog: InformationSchema.Types.SqlIdentifier.parse(from.constraintCatalog),
constraintSchema: InformationSchema.Types.SqlIdentifier.parse(from.constraintSchema),
constraintName: InformationSchema.Types.SqlIdentifier.parse(from.constraintName),
uniqueConstraintCatalog: InformationSchema.Types.SqlIdentifier.parse(from.uniqueConstraintCatalog),
uniqueConstraintSchema: InformationSchema.Types.SqlIdentifier.parse(from.uniqueConstraintSchema),
uniqueConstraintName: InformationSchema.Types.SqlIdentifier.parse(from.uniqueConstraintName),
matchOption: InformationSchema.Types.CharacterData.parse(from.matchOption),
updateRule: InformationSchema.Types.CharacterData.parse(from.updateRule),
deleteRule: InformationSchema.Types.CharacterData.parse(from.deleteRule),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace ReferentialConstraintsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => ReferentialConstraints.parse(e));
    
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
tableCatalog: InformationSchema.Types.SqlIdentifier.parse(from.tableCatalog),
tableSchema: InformationSchema.Types.SqlIdentifier.parse(from.tableSchema),
tableName: InformationSchema.Types.SqlIdentifier.parse(from.tableName),
columnName: InformationSchema.Types.SqlIdentifier.parse(from.columnName),
privilegeType: InformationSchema.Types.CharacterData.parse(from.privilegeType),
isGrantable: InformationSchema.Types.YesOrNo.parse(from.isGrantable),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace RoleColumnGrantsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => RoleColumnGrants.parse(e));
    
}


}
export namespace RoutineColumnUsage {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.RoutineColumnUsage.is(from)) {
  return {
specificCatalog: InformationSchema.Types.SqlIdentifier.parse(from.specificCatalog),
specificSchema: InformationSchema.Types.SqlIdentifier.parse(from.specificSchema),
specificName: InformationSchema.Types.SqlIdentifier.parse(from.specificName),
routineCatalog: InformationSchema.Types.SqlIdentifier.parse(from.routineCatalog),
routineSchema: InformationSchema.Types.SqlIdentifier.parse(from.routineSchema),
routineName: InformationSchema.Types.SqlIdentifier.parse(from.routineName),
tableCatalog: InformationSchema.Types.SqlIdentifier.parse(from.tableCatalog),
tableSchema: InformationSchema.Types.SqlIdentifier.parse(from.tableSchema),
tableName: InformationSchema.Types.SqlIdentifier.parse(from.tableName),
columnName: InformationSchema.Types.SqlIdentifier.parse(from.columnName),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace RoutineColumnUsageArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => RoutineColumnUsage.parse(e));
    
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
specificCatalog: InformationSchema.Types.SqlIdentifier.parse(from.specificCatalog),
specificSchema: InformationSchema.Types.SqlIdentifier.parse(from.specificSchema),
specificName: InformationSchema.Types.SqlIdentifier.parse(from.specificName),
routineCatalog: InformationSchema.Types.SqlIdentifier.parse(from.routineCatalog),
routineSchema: InformationSchema.Types.SqlIdentifier.parse(from.routineSchema),
routineName: InformationSchema.Types.SqlIdentifier.parse(from.routineName),
privilegeType: InformationSchema.Types.CharacterData.parse(from.privilegeType),
isGrantable: InformationSchema.Types.YesOrNo.parse(from.isGrantable),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace RoutinePrivilegesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => RoutinePrivileges.parse(e));
    
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
specificCatalog: InformationSchema.Types.SqlIdentifier.parse(from.specificCatalog),
specificSchema: InformationSchema.Types.SqlIdentifier.parse(from.specificSchema),
specificName: InformationSchema.Types.SqlIdentifier.parse(from.specificName),
routineCatalog: InformationSchema.Types.SqlIdentifier.parse(from.routineCatalog),
routineSchema: InformationSchema.Types.SqlIdentifier.parse(from.routineSchema),
routineName: InformationSchema.Types.SqlIdentifier.parse(from.routineName),
privilegeType: InformationSchema.Types.CharacterData.parse(from.privilegeType),
isGrantable: InformationSchema.Types.YesOrNo.parse(from.isGrantable),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace RoleRoutineGrantsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => RoleRoutineGrants.parse(e));
    
}


}
export namespace RoutineRoutineUsage {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.RoutineRoutineUsage.is(from)) {
  return {
specificCatalog: InformationSchema.Types.SqlIdentifier.parse(from.specificCatalog),
specificSchema: InformationSchema.Types.SqlIdentifier.parse(from.specificSchema),
specificName: InformationSchema.Types.SqlIdentifier.parse(from.specificName),
routineCatalog: InformationSchema.Types.SqlIdentifier.parse(from.routineCatalog),
routineSchema: InformationSchema.Types.SqlIdentifier.parse(from.routineSchema),
routineName: InformationSchema.Types.SqlIdentifier.parse(from.routineName),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace RoutineRoutineUsageArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => RoutineRoutineUsage.parse(e));
    
}


}
export namespace RoutineSequenceUsage {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.RoutineSequenceUsage.is(from)) {
  return {
specificCatalog: InformationSchema.Types.SqlIdentifier.parse(from.specificCatalog),
specificSchema: InformationSchema.Types.SqlIdentifier.parse(from.specificSchema),
specificName: InformationSchema.Types.SqlIdentifier.parse(from.specificName),
routineCatalog: InformationSchema.Types.SqlIdentifier.parse(from.routineCatalog),
routineSchema: InformationSchema.Types.SqlIdentifier.parse(from.routineSchema),
routineName: InformationSchema.Types.SqlIdentifier.parse(from.routineName),
sequenceCatalog: InformationSchema.Types.SqlIdentifier.parse(from.sequenceCatalog),
sequenceSchema: InformationSchema.Types.SqlIdentifier.parse(from.sequenceSchema),
sequenceName: InformationSchema.Types.SqlIdentifier.parse(from.sequenceName),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace RoutineSequenceUsageArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => RoutineSequenceUsage.parse(e));
    
}


}
export namespace RoutineTableUsage {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.RoutineTableUsage.is(from)) {
  return {
specificCatalog: InformationSchema.Types.SqlIdentifier.parse(from.specificCatalog),
specificSchema: InformationSchema.Types.SqlIdentifier.parse(from.specificSchema),
specificName: InformationSchema.Types.SqlIdentifier.parse(from.specificName),
routineCatalog: InformationSchema.Types.SqlIdentifier.parse(from.routineCatalog),
routineSchema: InformationSchema.Types.SqlIdentifier.parse(from.routineSchema),
routineName: InformationSchema.Types.SqlIdentifier.parse(from.routineName),
tableCatalog: InformationSchema.Types.SqlIdentifier.parse(from.tableCatalog),
tableSchema: InformationSchema.Types.SqlIdentifier.parse(from.tableSchema),
tableName: InformationSchema.Types.SqlIdentifier.parse(from.tableName),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace RoutineTableUsageArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => RoutineTableUsage.parse(e));
    
}


}
export namespace Routines {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.Routines.is(from)) {
  return {
specificCatalog: InformationSchema.Types.SqlIdentifier.parse(from.specificCatalog),
specificSchema: InformationSchema.Types.SqlIdentifier.parse(from.specificSchema),
specificName: InformationSchema.Types.SqlIdentifier.parse(from.specificName),
routineCatalog: InformationSchema.Types.SqlIdentifier.parse(from.routineCatalog),
routineSchema: InformationSchema.Types.SqlIdentifier.parse(from.routineSchema),
routineName: InformationSchema.Types.SqlIdentifier.parse(from.routineName),
routineType: InformationSchema.Types.CharacterData.parse(from.routineType),
moduleCatalog: InformationSchema.Types.SqlIdentifier.parse(from.moduleCatalog),
moduleSchema: InformationSchema.Types.SqlIdentifier.parse(from.moduleSchema),
moduleName: InformationSchema.Types.SqlIdentifier.parse(from.moduleName),
udtCatalog: InformationSchema.Types.SqlIdentifier.parse(from.udtCatalog),
udtSchema: InformationSchema.Types.SqlIdentifier.parse(from.udtSchema),
udtName: InformationSchema.Types.SqlIdentifier.parse(from.udtName),
dataType: InformationSchema.Types.CharacterData.parse(from.dataType),
characterMaximumLength: InformationSchema.Types.CardinalNumber.parse(from.characterMaximumLength),
characterOctetLength: InformationSchema.Types.CardinalNumber.parse(from.characterOctetLength),
characterSetCatalog: InformationSchema.Types.SqlIdentifier.parse(from.characterSetCatalog),
characterSetSchema: InformationSchema.Types.SqlIdentifier.parse(from.characterSetSchema),
characterSetName: InformationSchema.Types.SqlIdentifier.parse(from.characterSetName),
collationCatalog: InformationSchema.Types.SqlIdentifier.parse(from.collationCatalog),
collationSchema: InformationSchema.Types.SqlIdentifier.parse(from.collationSchema),
collationName: InformationSchema.Types.SqlIdentifier.parse(from.collationName),
numericPrecision: InformationSchema.Types.CardinalNumber.parse(from.numericPrecision),
numericPrecisionRadix: InformationSchema.Types.CardinalNumber.parse(from.numericPrecisionRadix),
numericScale: InformationSchema.Types.CardinalNumber.parse(from.numericScale),
datetimePrecision: InformationSchema.Types.CardinalNumber.parse(from.datetimePrecision),
intervalType: InformationSchema.Types.CharacterData.parse(from.intervalType),
intervalPrecision: InformationSchema.Types.CardinalNumber.parse(from.intervalPrecision),
typeUdtCatalog: InformationSchema.Types.SqlIdentifier.parse(from.typeUdtCatalog),
typeUdtSchema: InformationSchema.Types.SqlIdentifier.parse(from.typeUdtSchema),
typeUdtName: InformationSchema.Types.SqlIdentifier.parse(from.typeUdtName),
scopeCatalog: InformationSchema.Types.SqlIdentifier.parse(from.scopeCatalog),
scopeSchema: InformationSchema.Types.SqlIdentifier.parse(from.scopeSchema),
scopeName: InformationSchema.Types.SqlIdentifier.parse(from.scopeName),
maximumCardinality: InformationSchema.Types.CardinalNumber.parse(from.maximumCardinality),
dtdIdentifier: InformationSchema.Types.SqlIdentifier.parse(from.dtdIdentifier),
routineBody: InformationSchema.Types.CharacterData.parse(from.routineBody),
routineDefinition: InformationSchema.Types.CharacterData.parse(from.routineDefinition),
externalName: InformationSchema.Types.CharacterData.parse(from.externalName),
externalLanguage: InformationSchema.Types.CharacterData.parse(from.externalLanguage),
parameterStyle: InformationSchema.Types.CharacterData.parse(from.parameterStyle),
isDeterministic: InformationSchema.Types.YesOrNo.parse(from.isDeterministic),
sqlDataAccess: InformationSchema.Types.CharacterData.parse(from.sqlDataAccess),
isNullCall: InformationSchema.Types.YesOrNo.parse(from.isNullCall),
sqlPath: InformationSchema.Types.CharacterData.parse(from.sqlPath),
schemaLevelRoutine: InformationSchema.Types.YesOrNo.parse(from.schemaLevelRoutine),
maxDynamicResultSets: InformationSchema.Types.CardinalNumber.parse(from.maxDynamicResultSets),
isUserDefinedCast: InformationSchema.Types.YesOrNo.parse(from.isUserDefinedCast),
isImplicitlyInvocable: InformationSchema.Types.YesOrNo.parse(from.isImplicitlyInvocable),
securityType: InformationSchema.Types.CharacterData.parse(from.securityType),
toSqlSpecificCatalog: InformationSchema.Types.SqlIdentifier.parse(from.toSqlSpecificCatalog),
toSqlSpecificSchema: InformationSchema.Types.SqlIdentifier.parse(from.toSqlSpecificSchema),
toSqlSpecificName: InformationSchema.Types.SqlIdentifier.parse(from.toSqlSpecificName),
asLocator: InformationSchema.Types.YesOrNo.parse(from.asLocator),
created: InformationSchema.Types.TimeStamp.parse(from.created),
lastAltered: InformationSchema.Types.TimeStamp.parse(from.lastAltered),
newSavepointLevel: InformationSchema.Types.YesOrNo.parse(from.newSavepointLevel),
isUdtDependent: InformationSchema.Types.YesOrNo.parse(from.isUdtDependent),
resultCastFromDataType: InformationSchema.Types.CharacterData.parse(from.resultCastFromDataType),
resultCastAsLocator: InformationSchema.Types.YesOrNo.parse(from.resultCastAsLocator),
resultCastCharMaxLength: InformationSchema.Types.CardinalNumber.parse(from.resultCastCharMaxLength),
resultCastCharOctetLength: InformationSchema.Types.CardinalNumber.parse(from.resultCastCharOctetLength),
resultCastCharSetCatalog: InformationSchema.Types.SqlIdentifier.parse(from.resultCastCharSetCatalog),
resultCastCharSetSchema: InformationSchema.Types.SqlIdentifier.parse(from.resultCastCharSetSchema),
resultCastCharSetName: InformationSchema.Types.SqlIdentifier.parse(from.resultCastCharSetName),
resultCastCollationCatalog: InformationSchema.Types.SqlIdentifier.parse(from.resultCastCollationCatalog),
resultCastCollationSchema: InformationSchema.Types.SqlIdentifier.parse(from.resultCastCollationSchema),
resultCastCollationName: InformationSchema.Types.SqlIdentifier.parse(from.resultCastCollationName),
resultCastNumericPrecision: InformationSchema.Types.CardinalNumber.parse(from.resultCastNumericPrecision),
resultCastNumericPrecisionRadix: InformationSchema.Types.CardinalNumber.parse(from.resultCastNumericPrecisionRadix),
resultCastNumericScale: InformationSchema.Types.CardinalNumber.parse(from.resultCastNumericScale),
resultCastDatetimePrecision: InformationSchema.Types.CardinalNumber.parse(from.resultCastDatetimePrecision),
resultCastIntervalType: InformationSchema.Types.CharacterData.parse(from.resultCastIntervalType),
resultCastIntervalPrecision: InformationSchema.Types.CardinalNumber.parse(from.resultCastIntervalPrecision),
resultCastTypeUdtCatalog: InformationSchema.Types.SqlIdentifier.parse(from.resultCastTypeUdtCatalog),
resultCastTypeUdtSchema: InformationSchema.Types.SqlIdentifier.parse(from.resultCastTypeUdtSchema),
resultCastTypeUdtName: InformationSchema.Types.SqlIdentifier.parse(from.resultCastTypeUdtName),
resultCastScopeCatalog: InformationSchema.Types.SqlIdentifier.parse(from.resultCastScopeCatalog),
resultCastScopeSchema: InformationSchema.Types.SqlIdentifier.parse(from.resultCastScopeSchema),
resultCastScopeName: InformationSchema.Types.SqlIdentifier.parse(from.resultCastScopeName),
resultCastMaximumCardinality: InformationSchema.Types.CardinalNumber.parse(from.resultCastMaximumCardinality),
resultCastDtdIdentifier: InformationSchema.Types.SqlIdentifier.parse(from.resultCastDtdIdentifier),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace RoutinesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Routines.parse(e));
    
}


}
export namespace Schemata {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.Schemata.is(from)) {
  return {
catalogName: InformationSchema.Types.SqlIdentifier.parse(from.catalogName),
schemaName: InformationSchema.Types.SqlIdentifier.parse(from.schemaName),
schemaOwner: InformationSchema.Types.SqlIdentifier.parse(from.schemaOwner),
defaultCharacterSetCatalog: InformationSchema.Types.SqlIdentifier.parse(from.defaultCharacterSetCatalog),
defaultCharacterSetSchema: InformationSchema.Types.SqlIdentifier.parse(from.defaultCharacterSetSchema),
defaultCharacterSetName: InformationSchema.Types.SqlIdentifier.parse(from.defaultCharacterSetName),
sqlPath: InformationSchema.Types.CharacterData.parse(from.sqlPath),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace SchemataArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Schemata.parse(e));
    
}


}
export namespace Sequences {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.Sequences.is(from)) {
  return {
sequenceCatalog: InformationSchema.Types.SqlIdentifier.parse(from.sequenceCatalog),
sequenceSchema: InformationSchema.Types.SqlIdentifier.parse(from.sequenceSchema),
sequenceName: InformationSchema.Types.SqlIdentifier.parse(from.sequenceName),
dataType: InformationSchema.Types.CharacterData.parse(from.dataType),
numericPrecision: InformationSchema.Types.CardinalNumber.parse(from.numericPrecision),
numericPrecisionRadix: InformationSchema.Types.CardinalNumber.parse(from.numericPrecisionRadix),
numericScale: InformationSchema.Types.CardinalNumber.parse(from.numericScale),
startValue: InformationSchema.Types.CharacterData.parse(from.startValue),
minimumValue: InformationSchema.Types.CharacterData.parse(from.minimumValue),
maximumValue: InformationSchema.Types.CharacterData.parse(from.maximumValue),
increment: InformationSchema.Types.CharacterData.parse(from.increment),
cycleOption: InformationSchema.Types.YesOrNo.parse(from.cycleOption),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace SequencesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Sequences.parse(e));
    
}


}
export namespace SqlFeatures {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.SqlFeatures.is(from)) {
  return {
featureId: InformationSchema.Types.CharacterData.parse(from.featureId),
featureName: InformationSchema.Types.CharacterData.parse(from.featureName),
subFeatureId: InformationSchema.Types.CharacterData.parse(from.subFeatureId),
subFeatureName: InformationSchema.Types.CharacterData.parse(from.subFeatureName),
isSupported: InformationSchema.Types.YesOrNo.parse(from.isSupported),
isVerifiedBy: InformationSchema.Types.CharacterData.parse(from.isVerifiedBy),
comments: InformationSchema.Types.CharacterData.parse(from.comments),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace SqlFeaturesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => SqlFeatures.parse(e));
    
}


}
export namespace SqlImplementationInfo {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.SqlImplementationInfo.is(from)) {
  return {
implementationInfoId: InformationSchema.Types.CharacterData.parse(from.implementationInfoId),
implementationInfoName: InformationSchema.Types.CharacterData.parse(from.implementationInfoName),
integerValue: InformationSchema.Types.CardinalNumber.parse(from.integerValue),
characterValue: InformationSchema.Types.CharacterData.parse(from.characterValue),
comments: InformationSchema.Types.CharacterData.parse(from.comments),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace SqlImplementationInfoArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => SqlImplementationInfo.parse(e));
    
}


}
export namespace SqlParts {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.SqlParts.is(from)) {
  return {
featureId: InformationSchema.Types.CharacterData.parse(from.featureId),
featureName: InformationSchema.Types.CharacterData.parse(from.featureName),
isSupported: InformationSchema.Types.YesOrNo.parse(from.isSupported),
isVerifiedBy: InformationSchema.Types.CharacterData.parse(from.isVerifiedBy),
comments: InformationSchema.Types.CharacterData.parse(from.comments),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace SqlPartsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => SqlParts.parse(e));
    
}


}
export namespace SqlSizing {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.SqlSizing.is(from)) {
  return {
sizingId: InformationSchema.Types.CardinalNumber.parse(from.sizingId),
sizingName: InformationSchema.Types.CharacterData.parse(from.sizingName),
supportedValue: InformationSchema.Types.CardinalNumber.parse(from.supportedValue),
comments: InformationSchema.Types.CharacterData.parse(from.comments),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace SqlSizingArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => SqlSizing.parse(e));
    
}


}
export namespace TableConstraints {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.TableConstraints.is(from)) {
  return {
constraintCatalog: InformationSchema.Types.SqlIdentifier.parse(from.constraintCatalog),
constraintSchema: InformationSchema.Types.SqlIdentifier.parse(from.constraintSchema),
constraintName: InformationSchema.Types.SqlIdentifier.parse(from.constraintName),
tableCatalog: InformationSchema.Types.SqlIdentifier.parse(from.tableCatalog),
tableSchema: InformationSchema.Types.SqlIdentifier.parse(from.tableSchema),
tableName: InformationSchema.Types.SqlIdentifier.parse(from.tableName),
constraintType: InformationSchema.Types.CharacterData.parse(from.constraintType),
isDeferrable: InformationSchema.Types.YesOrNo.parse(from.isDeferrable),
initiallyDeferred: InformationSchema.Types.YesOrNo.parse(from.initiallyDeferred),
enforced: InformationSchema.Types.YesOrNo.parse(from.enforced),
nullsDistinct: InformationSchema.Types.YesOrNo.parse(from.nullsDistinct),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace TableConstraintsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => TableConstraints.parse(e));
    
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
tableCatalog: InformationSchema.Types.SqlIdentifier.parse(from.tableCatalog),
tableSchema: InformationSchema.Types.SqlIdentifier.parse(from.tableSchema),
tableName: InformationSchema.Types.SqlIdentifier.parse(from.tableName),
privilegeType: InformationSchema.Types.CharacterData.parse(from.privilegeType),
isGrantable: InformationSchema.Types.YesOrNo.parse(from.isGrantable),
withHierarchy: InformationSchema.Types.YesOrNo.parse(from.withHierarchy),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace TablePrivilegesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => TablePrivileges.parse(e));
    
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
tableCatalog: InformationSchema.Types.SqlIdentifier.parse(from.tableCatalog),
tableSchema: InformationSchema.Types.SqlIdentifier.parse(from.tableSchema),
tableName: InformationSchema.Types.SqlIdentifier.parse(from.tableName),
privilegeType: InformationSchema.Types.CharacterData.parse(from.privilegeType),
isGrantable: InformationSchema.Types.YesOrNo.parse(from.isGrantable),
withHierarchy: InformationSchema.Types.YesOrNo.parse(from.withHierarchy),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace RoleTableGrantsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => RoleTableGrants.parse(e));
    
}


}
export namespace Tables {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.Tables.is(from)) {
  return {
tableCatalog: InformationSchema.Types.SqlIdentifier.parse(from.tableCatalog),
tableSchema: InformationSchema.Types.SqlIdentifier.parse(from.tableSchema),
tableName: InformationSchema.Types.SqlIdentifier.parse(from.tableName),
tableType: InformationSchema.Types.CharacterData.parse(from.tableType),
selfReferencingColumnName: InformationSchema.Types.SqlIdentifier.parse(from.selfReferencingColumnName),
referenceGeneration: InformationSchema.Types.CharacterData.parse(from.referenceGeneration),
userDefinedTypeCatalog: InformationSchema.Types.SqlIdentifier.parse(from.userDefinedTypeCatalog),
userDefinedTypeSchema: InformationSchema.Types.SqlIdentifier.parse(from.userDefinedTypeSchema),
userDefinedTypeName: InformationSchema.Types.SqlIdentifier.parse(from.userDefinedTypeName),
isInsertableInto: InformationSchema.Types.YesOrNo.parse(from.isInsertableInto),
isTyped: InformationSchema.Types.YesOrNo.parse(from.isTyped),
commitAction: InformationSchema.Types.CharacterData.parse(from.commitAction),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace TablesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Tables.parse(e));
    
}


}
export namespace Transforms {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.Transforms.is(from)) {
  return {
udtCatalog: InformationSchema.Types.SqlIdentifier.parse(from.udtCatalog),
udtSchema: InformationSchema.Types.SqlIdentifier.parse(from.udtSchema),
udtName: InformationSchema.Types.SqlIdentifier.parse(from.udtName),
specificCatalog: InformationSchema.Types.SqlIdentifier.parse(from.specificCatalog),
specificSchema: InformationSchema.Types.SqlIdentifier.parse(from.specificSchema),
specificName: InformationSchema.Types.SqlIdentifier.parse(from.specificName),
groupName: InformationSchema.Types.SqlIdentifier.parse(from.groupName),
transformType: InformationSchema.Types.CharacterData.parse(from.transformType),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace TransformsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Transforms.parse(e));
    
}


}
export namespace TriggeredUpdateColumns {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.TriggeredUpdateColumns.is(from)) {
  return {
triggerCatalog: InformationSchema.Types.SqlIdentifier.parse(from.triggerCatalog),
triggerSchema: InformationSchema.Types.SqlIdentifier.parse(from.triggerSchema),
triggerName: InformationSchema.Types.SqlIdentifier.parse(from.triggerName),
eventObjectCatalog: InformationSchema.Types.SqlIdentifier.parse(from.eventObjectCatalog),
eventObjectSchema: InformationSchema.Types.SqlIdentifier.parse(from.eventObjectSchema),
eventObjectTable: InformationSchema.Types.SqlIdentifier.parse(from.eventObjectTable),
eventObjectColumn: InformationSchema.Types.SqlIdentifier.parse(from.eventObjectColumn),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace TriggeredUpdateColumnsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => TriggeredUpdateColumns.parse(e));
    
}


}
export namespace Triggers {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.Triggers.is(from)) {
  return {
triggerCatalog: InformationSchema.Types.SqlIdentifier.parse(from.triggerCatalog),
triggerSchema: InformationSchema.Types.SqlIdentifier.parse(from.triggerSchema),
triggerName: InformationSchema.Types.SqlIdentifier.parse(from.triggerName),
eventManipulation: InformationSchema.Types.CharacterData.parse(from.eventManipulation),
eventObjectCatalog: InformationSchema.Types.SqlIdentifier.parse(from.eventObjectCatalog),
eventObjectSchema: InformationSchema.Types.SqlIdentifier.parse(from.eventObjectSchema),
eventObjectTable: InformationSchema.Types.SqlIdentifier.parse(from.eventObjectTable),
actionOrder: InformationSchema.Types.CardinalNumber.parse(from.actionOrder),
actionCondition: InformationSchema.Types.CharacterData.parse(from.actionCondition),
actionStatement: InformationSchema.Types.CharacterData.parse(from.actionStatement),
actionOrientation: InformationSchema.Types.CharacterData.parse(from.actionOrientation),
actionTiming: InformationSchema.Types.CharacterData.parse(from.actionTiming),
actionReferenceOldTable: InformationSchema.Types.SqlIdentifier.parse(from.actionReferenceOldTable),
actionReferenceNewTable: InformationSchema.Types.SqlIdentifier.parse(from.actionReferenceNewTable),
actionReferenceOldRow: InformationSchema.Types.SqlIdentifier.parse(from.actionReferenceOldRow),
actionReferenceNewRow: InformationSchema.Types.SqlIdentifier.parse(from.actionReferenceNewRow),
created: InformationSchema.Types.TimeStamp.parse(from.created),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace TriggersArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Triggers.parse(e));
    
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
udtCatalog: InformationSchema.Types.SqlIdentifier.parse(from.udtCatalog),
udtSchema: InformationSchema.Types.SqlIdentifier.parse(from.udtSchema),
udtName: InformationSchema.Types.SqlIdentifier.parse(from.udtName),
privilegeType: InformationSchema.Types.CharacterData.parse(from.privilegeType),
isGrantable: InformationSchema.Types.YesOrNo.parse(from.isGrantable),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace UdtPrivilegesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => UdtPrivileges.parse(e));
    
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
udtCatalog: InformationSchema.Types.SqlIdentifier.parse(from.udtCatalog),
udtSchema: InformationSchema.Types.SqlIdentifier.parse(from.udtSchema),
udtName: InformationSchema.Types.SqlIdentifier.parse(from.udtName),
privilegeType: InformationSchema.Types.CharacterData.parse(from.privilegeType),
isGrantable: InformationSchema.Types.YesOrNo.parse(from.isGrantable),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace RoleUdtGrantsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => RoleUdtGrants.parse(e));
    
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
objectCatalog: InformationSchema.Types.SqlIdentifier.parse(from.objectCatalog),
objectSchema: InformationSchema.Types.SqlIdentifier.parse(from.objectSchema),
objectName: InformationSchema.Types.SqlIdentifier.parse(from.objectName),
objectType: InformationSchema.Types.CharacterData.parse(from.objectType),
privilegeType: InformationSchema.Types.CharacterData.parse(from.privilegeType),
isGrantable: InformationSchema.Types.YesOrNo.parse(from.isGrantable),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace UsagePrivilegesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => UsagePrivileges.parse(e));
    
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
objectCatalog: InformationSchema.Types.SqlIdentifier.parse(from.objectCatalog),
objectSchema: InformationSchema.Types.SqlIdentifier.parse(from.objectSchema),
objectName: InformationSchema.Types.SqlIdentifier.parse(from.objectName),
objectType: InformationSchema.Types.CharacterData.parse(from.objectType),
privilegeType: InformationSchema.Types.CharacterData.parse(from.privilegeType),
isGrantable: InformationSchema.Types.YesOrNo.parse(from.isGrantable),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace RoleUsageGrantsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => RoleUsageGrants.parse(e));
    
}


}
export namespace UserDefinedTypes {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.UserDefinedTypes.is(from)) {
  return {
userDefinedTypeCatalog: InformationSchema.Types.SqlIdentifier.parse(from.userDefinedTypeCatalog),
userDefinedTypeSchema: InformationSchema.Types.SqlIdentifier.parse(from.userDefinedTypeSchema),
userDefinedTypeName: InformationSchema.Types.SqlIdentifier.parse(from.userDefinedTypeName),
userDefinedTypeCategory: InformationSchema.Types.CharacterData.parse(from.userDefinedTypeCategory),
isInstantiable: InformationSchema.Types.YesOrNo.parse(from.isInstantiable),
isFinal: InformationSchema.Types.YesOrNo.parse(from.isFinal),
orderingForm: InformationSchema.Types.CharacterData.parse(from.orderingForm),
orderingCategory: InformationSchema.Types.CharacterData.parse(from.orderingCategory),
orderingRoutineCatalog: InformationSchema.Types.SqlIdentifier.parse(from.orderingRoutineCatalog),
orderingRoutineSchema: InformationSchema.Types.SqlIdentifier.parse(from.orderingRoutineSchema),
orderingRoutineName: InformationSchema.Types.SqlIdentifier.parse(from.orderingRoutineName),
referenceType: InformationSchema.Types.CharacterData.parse(from.referenceType),
dataType: InformationSchema.Types.CharacterData.parse(from.dataType),
characterMaximumLength: InformationSchema.Types.CardinalNumber.parse(from.characterMaximumLength),
characterOctetLength: InformationSchema.Types.CardinalNumber.parse(from.characterOctetLength),
characterSetCatalog: InformationSchema.Types.SqlIdentifier.parse(from.characterSetCatalog),
characterSetSchema: InformationSchema.Types.SqlIdentifier.parse(from.characterSetSchema),
characterSetName: InformationSchema.Types.SqlIdentifier.parse(from.characterSetName),
collationCatalog: InformationSchema.Types.SqlIdentifier.parse(from.collationCatalog),
collationSchema: InformationSchema.Types.SqlIdentifier.parse(from.collationSchema),
collationName: InformationSchema.Types.SqlIdentifier.parse(from.collationName),
numericPrecision: InformationSchema.Types.CardinalNumber.parse(from.numericPrecision),
numericPrecisionRadix: InformationSchema.Types.CardinalNumber.parse(from.numericPrecisionRadix),
numericScale: InformationSchema.Types.CardinalNumber.parse(from.numericScale),
datetimePrecision: InformationSchema.Types.CardinalNumber.parse(from.datetimePrecision),
intervalType: InformationSchema.Types.CharacterData.parse(from.intervalType),
intervalPrecision: InformationSchema.Types.CardinalNumber.parse(from.intervalPrecision),
sourceDtdIdentifier: InformationSchema.Types.SqlIdentifier.parse(from.sourceDtdIdentifier),
refDtdIdentifier: InformationSchema.Types.SqlIdentifier.parse(from.refDtdIdentifier),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace UserDefinedTypesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => UserDefinedTypes.parse(e));
    
}


}
export namespace ViewColumnUsage {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.ViewColumnUsage.is(from)) {
  return {
viewCatalog: InformationSchema.Types.SqlIdentifier.parse(from.viewCatalog),
viewSchema: InformationSchema.Types.SqlIdentifier.parse(from.viewSchema),
viewName: InformationSchema.Types.SqlIdentifier.parse(from.viewName),
tableCatalog: InformationSchema.Types.SqlIdentifier.parse(from.tableCatalog),
tableSchema: InformationSchema.Types.SqlIdentifier.parse(from.tableSchema),
tableName: InformationSchema.Types.SqlIdentifier.parse(from.tableName),
columnName: InformationSchema.Types.SqlIdentifier.parse(from.columnName),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace ViewColumnUsageArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => ViewColumnUsage.parse(e));
    
}


}
export namespace ViewRoutineUsage {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.ViewRoutineUsage.is(from)) {
  return {
tableCatalog: InformationSchema.Types.SqlIdentifier.parse(from.tableCatalog),
tableSchema: InformationSchema.Types.SqlIdentifier.parse(from.tableSchema),
tableName: InformationSchema.Types.SqlIdentifier.parse(from.tableName),
specificCatalog: InformationSchema.Types.SqlIdentifier.parse(from.specificCatalog),
specificSchema: InformationSchema.Types.SqlIdentifier.parse(from.specificSchema),
specificName: InformationSchema.Types.SqlIdentifier.parse(from.specificName),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace ViewRoutineUsageArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => ViewRoutineUsage.parse(e));
    
}


}
export namespace ViewTableUsage {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.ViewTableUsage.is(from)) {
  return {
viewCatalog: InformationSchema.Types.SqlIdentifier.parse(from.viewCatalog),
viewSchema: InformationSchema.Types.SqlIdentifier.parse(from.viewSchema),
viewName: InformationSchema.Types.SqlIdentifier.parse(from.viewName),
tableCatalog: InformationSchema.Types.SqlIdentifier.parse(from.tableCatalog),
tableSchema: InformationSchema.Types.SqlIdentifier.parse(from.tableSchema),
tableName: InformationSchema.Types.SqlIdentifier.parse(from.tableName),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace ViewTableUsageArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => ViewTableUsage.parse(e));
    
}


}
export namespace Views {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.Views.is(from)) {
  return {
tableCatalog: InformationSchema.Types.SqlIdentifier.parse(from.tableCatalog),
tableSchema: InformationSchema.Types.SqlIdentifier.parse(from.tableSchema),
tableName: InformationSchema.Types.SqlIdentifier.parse(from.tableName),
viewDefinition: InformationSchema.Types.CharacterData.parse(from.viewDefinition),
checkOption: InformationSchema.Types.CharacterData.parse(from.checkOption),
isUpdatable: InformationSchema.Types.YesOrNo.parse(from.isUpdatable),
isInsertableInto: InformationSchema.Types.YesOrNo.parse(from.isInsertableInto),
isTriggerUpdatable: InformationSchema.Types.YesOrNo.parse(from.isTriggerUpdatable),
isTriggerDeletable: InformationSchema.Types.YesOrNo.parse(from.isTriggerDeletable),
isTriggerInsertableInto: InformationSchema.Types.YesOrNo.parse(from.isTriggerInsertableInto),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace ViewsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Views.parse(e));
    
}


}
export namespace DataTypePrivileges {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.DataTypePrivileges.is(from)) {
  return {
objectCatalog: InformationSchema.Types.SqlIdentifier.parse(from.objectCatalog),
objectSchema: InformationSchema.Types.SqlIdentifier.parse(from.objectSchema),
objectName: InformationSchema.Types.SqlIdentifier.parse(from.objectName),
objectType: InformationSchema.Types.CharacterData.parse(from.objectType),
dtdIdentifier: InformationSchema.Types.SqlIdentifier.parse(from.dtdIdentifier),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace DataTypePrivilegesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => DataTypePrivileges.parse(e));
    
}


}
export namespace ElementTypes {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.ElementTypes.is(from)) {
  return {
objectCatalog: InformationSchema.Types.SqlIdentifier.parse(from.objectCatalog),
objectSchema: InformationSchema.Types.SqlIdentifier.parse(from.objectSchema),
objectName: InformationSchema.Types.SqlIdentifier.parse(from.objectName),
objectType: InformationSchema.Types.CharacterData.parse(from.objectType),
collectionTypeIdentifier: InformationSchema.Types.SqlIdentifier.parse(from.collectionTypeIdentifier),
dataType: InformationSchema.Types.CharacterData.parse(from.dataType),
characterMaximumLength: InformationSchema.Types.CardinalNumber.parse(from.characterMaximumLength),
characterOctetLength: InformationSchema.Types.CardinalNumber.parse(from.characterOctetLength),
characterSetCatalog: InformationSchema.Types.SqlIdentifier.parse(from.characterSetCatalog),
characterSetSchema: InformationSchema.Types.SqlIdentifier.parse(from.characterSetSchema),
characterSetName: InformationSchema.Types.SqlIdentifier.parse(from.characterSetName),
collationCatalog: InformationSchema.Types.SqlIdentifier.parse(from.collationCatalog),
collationSchema: InformationSchema.Types.SqlIdentifier.parse(from.collationSchema),
collationName: InformationSchema.Types.SqlIdentifier.parse(from.collationName),
numericPrecision: InformationSchema.Types.CardinalNumber.parse(from.numericPrecision),
numericPrecisionRadix: InformationSchema.Types.CardinalNumber.parse(from.numericPrecisionRadix),
numericScale: InformationSchema.Types.CardinalNumber.parse(from.numericScale),
datetimePrecision: InformationSchema.Types.CardinalNumber.parse(from.datetimePrecision),
intervalType: InformationSchema.Types.CharacterData.parse(from.intervalType),
intervalPrecision: InformationSchema.Types.CardinalNumber.parse(from.intervalPrecision),
domainDefault: InformationSchema.Types.CharacterData.parse(from.domainDefault),
udtCatalog: InformationSchema.Types.SqlIdentifier.parse(from.udtCatalog),
udtSchema: InformationSchema.Types.SqlIdentifier.parse(from.udtSchema),
udtName: InformationSchema.Types.SqlIdentifier.parse(from.udtName),
scopeCatalog: InformationSchema.Types.SqlIdentifier.parse(from.scopeCatalog),
scopeSchema: InformationSchema.Types.SqlIdentifier.parse(from.scopeSchema),
scopeName: InformationSchema.Types.SqlIdentifier.parse(from.scopeName),
maximumCardinality: InformationSchema.Types.CardinalNumber.parse(from.maximumCardinality),
dtdIdentifier: InformationSchema.Types.SqlIdentifier.parse(from.dtdIdentifier),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace ElementTypesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => ElementTypes.parse(e));
    
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
throw new Error(JSON.stringify(from))
}


}
export namespace ColumnOptions {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.ColumnOptions.is(from)) {
  return {
tableCatalog: InformationSchema.Types.SqlIdentifier.parse(from.tableCatalog),
tableSchema: InformationSchema.Types.SqlIdentifier.parse(from.tableSchema),
tableName: InformationSchema.Types.SqlIdentifier.parse(from.tableName),
columnName: InformationSchema.Types.SqlIdentifier.parse(from.columnName),
optionName: InformationSchema.Types.SqlIdentifier.parse(from.optionName),
optionValue: InformationSchema.Types.CharacterData.parse(from.optionValue),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace ColumnOptionsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => ColumnOptions.parse(e));
    
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
foreignDataWrapperCatalog: InformationSchema.Types.SqlIdentifier.parse(from.foreignDataWrapperCatalog),
foreignDataWrapperName: InformationSchema.Types.SqlIdentifier.parse(from.foreignDataWrapperName),
authorizationIdentifier: InformationSchema.Types.SqlIdentifier.parse(from.authorizationIdentifier),
foreignDataWrapperLanguage: InformationSchema.Types.CharacterData.parse(from.foreignDataWrapperLanguage),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace ForeignDataWrapperOptions {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.ForeignDataWrapperOptions.is(from)) {
  return {
foreignDataWrapperCatalog: InformationSchema.Types.SqlIdentifier.parse(from.foreignDataWrapperCatalog),
foreignDataWrapperName: InformationSchema.Types.SqlIdentifier.parse(from.foreignDataWrapperName),
optionName: InformationSchema.Types.SqlIdentifier.parse(from.optionName),
optionValue: InformationSchema.Types.CharacterData.parse(from.optionValue),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace ForeignDataWrapperOptionsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => ForeignDataWrapperOptions.parse(e));
    
}


}
export namespace ForeignDataWrappers {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.ForeignDataWrappers.is(from)) {
  return {
foreignDataWrapperCatalog: InformationSchema.Types.SqlIdentifier.parse(from.foreignDataWrapperCatalog),
foreignDataWrapperName: InformationSchema.Types.SqlIdentifier.parse(from.foreignDataWrapperName),
authorizationIdentifier: InformationSchema.Types.SqlIdentifier.parse(from.authorizationIdentifier),
libraryName: InformationSchema.Types.CharacterData.parse(from.libraryName),
foreignDataWrapperLanguage: InformationSchema.Types.CharacterData.parse(from.foreignDataWrapperLanguage),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace ForeignDataWrappersArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => ForeignDataWrappers.parse(e));
    
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
foreignServerCatalog: InformationSchema.Types.SqlIdentifier.parse(from.foreignServerCatalog),
foreignServerName: InformationSchema.Types.SqlIdentifier.parse(from.foreignServerName),
foreignDataWrapperCatalog: InformationSchema.Types.SqlIdentifier.parse(from.foreignDataWrapperCatalog),
foreignDataWrapperName: InformationSchema.Types.SqlIdentifier.parse(from.foreignDataWrapperName),
foreignServerType: InformationSchema.Types.CharacterData.parse(from.foreignServerType),
foreignServerVersion: InformationSchema.Types.CharacterData.parse(from.foreignServerVersion),
authorizationIdentifier: InformationSchema.Types.SqlIdentifier.parse(from.authorizationIdentifier),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace ForeignServerOptions {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.ForeignServerOptions.is(from)) {
  return {
foreignServerCatalog: InformationSchema.Types.SqlIdentifier.parse(from.foreignServerCatalog),
foreignServerName: InformationSchema.Types.SqlIdentifier.parse(from.foreignServerName),
optionName: InformationSchema.Types.SqlIdentifier.parse(from.optionName),
optionValue: InformationSchema.Types.CharacterData.parse(from.optionValue),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace ForeignServerOptionsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => ForeignServerOptions.parse(e));
    
}


}
export namespace ForeignServers {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.ForeignServers.is(from)) {
  return {
foreignServerCatalog: InformationSchema.Types.SqlIdentifier.parse(from.foreignServerCatalog),
foreignServerName: InformationSchema.Types.SqlIdentifier.parse(from.foreignServerName),
foreignDataWrapperCatalog: InformationSchema.Types.SqlIdentifier.parse(from.foreignDataWrapperCatalog),
foreignDataWrapperName: InformationSchema.Types.SqlIdentifier.parse(from.foreignDataWrapperName),
foreignServerType: InformationSchema.Types.CharacterData.parse(from.foreignServerType),
foreignServerVersion: InformationSchema.Types.CharacterData.parse(from.foreignServerVersion),
authorizationIdentifier: InformationSchema.Types.SqlIdentifier.parse(from.authorizationIdentifier),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace ForeignServersArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => ForeignServers.parse(e));
    
}


}
export namespace PgForeignTables {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.PgForeignTables.is(from)) {
  return {
foreignTableCatalog: InformationSchema.Types.SqlIdentifier.parse(from.foreignTableCatalog),
foreignTableSchema: InformationSchema.Types.SqlIdentifier.parse(from.foreignTableSchema),
foreignTableName: InformationSchema.Types.SqlIdentifier.parse(from.foreignTableName),
ftoptions: PgCatalog.Types.TextArray.parse(from.ftoptions),
foreignServerCatalog: InformationSchema.Types.SqlIdentifier.parse(from.foreignServerCatalog),
foreignServerName: InformationSchema.Types.SqlIdentifier.parse(from.foreignServerName),
authorizationIdentifier: InformationSchema.Types.SqlIdentifier.parse(from.authorizationIdentifier),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace ForeignTableOptions {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.ForeignTableOptions.is(from)) {
  return {
foreignTableCatalog: InformationSchema.Types.SqlIdentifier.parse(from.foreignTableCatalog),
foreignTableSchema: InformationSchema.Types.SqlIdentifier.parse(from.foreignTableSchema),
foreignTableName: InformationSchema.Types.SqlIdentifier.parse(from.foreignTableName),
optionName: InformationSchema.Types.SqlIdentifier.parse(from.optionName),
optionValue: InformationSchema.Types.CharacterData.parse(from.optionValue),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace ForeignTableOptionsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => ForeignTableOptions.parse(e));
    
}


}
export namespace ForeignTables {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.ForeignTables.is(from)) {
  return {
foreignTableCatalog: InformationSchema.Types.SqlIdentifier.parse(from.foreignTableCatalog),
foreignTableSchema: InformationSchema.Types.SqlIdentifier.parse(from.foreignTableSchema),
foreignTableName: InformationSchema.Types.SqlIdentifier.parse(from.foreignTableName),
foreignServerCatalog: InformationSchema.Types.SqlIdentifier.parse(from.foreignServerCatalog),
foreignServerName: InformationSchema.Types.SqlIdentifier.parse(from.foreignServerName),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace ForeignTablesArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => ForeignTables.parse(e));
    
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
authorizationIdentifier: InformationSchema.Types.SqlIdentifier.parse(from.authorizationIdentifier),
foreignServerCatalog: InformationSchema.Types.SqlIdentifier.parse(from.foreignServerCatalog),
foreignServerName: InformationSchema.Types.SqlIdentifier.parse(from.foreignServerName),
srvowner: InformationSchema.Types.SqlIdentifier.parse(from.srvowner),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace UserMappingOptions {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.UserMappingOptions.is(from)) {
  return {
authorizationIdentifier: InformationSchema.Types.SqlIdentifier.parse(from.authorizationIdentifier),
foreignServerCatalog: InformationSchema.Types.SqlIdentifier.parse(from.foreignServerCatalog),
foreignServerName: InformationSchema.Types.SqlIdentifier.parse(from.foreignServerName),
optionName: InformationSchema.Types.SqlIdentifier.parse(from.optionName),
optionValue: InformationSchema.Types.CharacterData.parse(from.optionValue),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace UserMappingOptionsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => UserMappingOptions.parse(e));
    
}


}
export namespace UserMappings {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (InformationSchema.Types.UserMappings.is(from)) {
  return {
authorizationIdentifier: InformationSchema.Types.SqlIdentifier.parse(from.authorizationIdentifier),
foreignServerCatalog: InformationSchema.Types.SqlIdentifier.parse(from.foreignServerCatalog),
foreignServerName: InformationSchema.Types.SqlIdentifier.parse(from.foreignServerName),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace UserMappingsArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => UserMappings.parse(e));
    
}


}
}
export namespace Procedures {
}
export namespace Tables {
export namespace SqlFeatures {
export namespace Results {
}
export namespace Create {
}
}
export namespace SqlImplementationInfo {
export namespace Results {
}
export namespace Create {
}
}
export namespace SqlParts {
export namespace Results {
}
export namespace Create {
}
}
export namespace SqlSizing {
export namespace Results {
}
export namespace Create {
}
}
}
}
export namespace Public {
export namespace Types {
export namespace MpaaRating {
export function parse(from: unknown) {
// Enum
if (from === null || from === undefined) return null;
  if(Object.values(Public.Types.MpaaRating).includes(from as Public.Types.MpaaRating)) {
    return from as Public.Types.MpaaRating;
  } else {
    return undefined;
  }
}


}
export namespace MpaaRatingArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => MpaaRating.parse(e));
    
}


}
export namespace Year {
export function parse(from: unknown) {
// DomainType
if (from === null || from === undefined) return null;
return PgCatalog.Types.Int4.parse(from);
}


}
export namespace YearArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Year.parse(e));
    
}


}
export namespace Customer {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.Customer.is(from)) {
  return {
customerId: PgCatalog.Types.Int4.parse(from.customerId),
storeId: PgCatalog.Types.Int2.parse(from.storeId),
firstName: PgCatalog.Types.Varchar.parse(from.firstName),
lastName: PgCatalog.Types.Varchar.parse(from.lastName),
email: PgCatalog.Types.Varchar.parse(from.email),
addressId: PgCatalog.Types.Int2.parse(from.addressId),
activebool: PgCatalog.Types.Bool.parse(from.activebool),
createDate: PgCatalog.Types.Date.parse(from.createDate),
lastUpdate: PgCatalog.Types.Timestamp.parse(from.lastUpdate),
active: PgCatalog.Types.Int4.parse(from.active),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace CustomerArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Customer.parse(e));
    
}


}
export namespace Actor {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.Actor.is(from)) {
  return {
actorId: PgCatalog.Types.Int4.parse(from.actorId),
firstName: PgCatalog.Types.Varchar.parse(from.firstName),
lastName: PgCatalog.Types.Varchar.parse(from.lastName),
lastUpdate: PgCatalog.Types.Timestamp.parse(from.lastUpdate),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace ActorArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Actor.parse(e));
    
}


}
export namespace Category {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.Category.is(from)) {
  return {
categoryId: PgCatalog.Types.Int4.parse(from.categoryId),
name: PgCatalog.Types.Varchar.parse(from.name),
lastUpdate: PgCatalog.Types.Timestamp.parse(from.lastUpdate),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace CategoryArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Category.parse(e));
    
}


}
export namespace Film {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.Film.is(from)) {
  return {
filmId: PgCatalog.Types.Int4.parse(from.filmId),
title: PgCatalog.Types.Varchar.parse(from.title),
description: PgCatalog.Types.Text.parse(from.description),
releaseYear: Public.Types.Year.parse(from.releaseYear),
languageId: PgCatalog.Types.Int2.parse(from.languageId),
rentalDuration: PgCatalog.Types.Int2.parse(from.rentalDuration),
rentalRate: PgCatalog.Types.Numeric.parse(from.rentalRate),
length: PgCatalog.Types.Int2.parse(from.length),
replacementCost: PgCatalog.Types.Numeric.parse(from.replacementCost),
rating: Public.Types.MpaaRating.parse(from.rating),
lastUpdate: PgCatalog.Types.Timestamp.parse(from.lastUpdate),
specialFeatures: PgCatalog.Types.TextArray.parse(from.specialFeatures),
fulltext: PgCatalog.Types.Tsvector.parse(from.fulltext),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace FilmArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Film.parse(e));
    
}


}
export namespace FilmActor {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.FilmActor.is(from)) {
  return {
actorId: PgCatalog.Types.Int2.parse(from.actorId),
filmId: PgCatalog.Types.Int2.parse(from.filmId),
lastUpdate: PgCatalog.Types.Timestamp.parse(from.lastUpdate),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace FilmActorArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => FilmActor.parse(e));
    
}


}
export namespace FilmCategory {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.FilmCategory.is(from)) {
  return {
filmId: PgCatalog.Types.Int2.parse(from.filmId),
categoryId: PgCatalog.Types.Int2.parse(from.categoryId),
lastUpdate: PgCatalog.Types.Timestamp.parse(from.lastUpdate),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace FilmCategoryArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => FilmCategory.parse(e));
    
}


}
export namespace ActorInfo {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.ActorInfo.is(from)) {
  return {
actorId: PgCatalog.Types.Int4.parse(from.actorId),
firstName: PgCatalog.Types.Varchar.parse(from.firstName),
lastName: PgCatalog.Types.Varchar.parse(from.lastName),
filmInfo: PgCatalog.Types.Text.parse(from.filmInfo),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace ActorInfoArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => ActorInfo.parse(e));
    
}


}
export namespace Address {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.Address.is(from)) {
  return {
addressId: PgCatalog.Types.Int4.parse(from.addressId),
address: PgCatalog.Types.Varchar.parse(from.address),
address2: PgCatalog.Types.Varchar.parse(from.address2),
district: PgCatalog.Types.Varchar.parse(from.district),
cityId: PgCatalog.Types.Int2.parse(from.cityId),
postalCode: PgCatalog.Types.Varchar.parse(from.postalCode),
phone: PgCatalog.Types.Varchar.parse(from.phone),
lastUpdate: PgCatalog.Types.Timestamp.parse(from.lastUpdate),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace AddressArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Address.parse(e));
    
}


}
export namespace City {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.City.is(from)) {
  return {
cityId: PgCatalog.Types.Int4.parse(from.cityId),
city: PgCatalog.Types.Varchar.parse(from.city),
countryId: PgCatalog.Types.Int2.parse(from.countryId),
lastUpdate: PgCatalog.Types.Timestamp.parse(from.lastUpdate),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace CityArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => City.parse(e));
    
}


}
export namespace Country {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.Country.is(from)) {
  return {
countryId: PgCatalog.Types.Int4.parse(from.countryId),
country: PgCatalog.Types.Varchar.parse(from.country),
lastUpdate: PgCatalog.Types.Timestamp.parse(from.lastUpdate),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace CountryArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Country.parse(e));
    
}


}
export namespace CustomerList {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.CustomerList.is(from)) {
  return {
id: PgCatalog.Types.Int4.parse(from.id),
name: PgCatalog.Types.Text.parse(from.name),
address: PgCatalog.Types.Varchar.parse(from.address),
zipCode: PgCatalog.Types.Varchar.parse(from.zipCode),
phone: PgCatalog.Types.Varchar.parse(from.phone),
city: PgCatalog.Types.Varchar.parse(from.city),
country: PgCatalog.Types.Varchar.parse(from.country),
notes: PgCatalog.Types.Text.parse(from.notes),
sid: PgCatalog.Types.Int2.parse(from.sid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace CustomerListArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => CustomerList.parse(e));
    
}


}
export namespace FilmList {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.FilmList.is(from)) {
  return {
fid: PgCatalog.Types.Int4.parse(from.fid),
title: PgCatalog.Types.Varchar.parse(from.title),
description: PgCatalog.Types.Text.parse(from.description),
category: PgCatalog.Types.Varchar.parse(from.category),
price: PgCatalog.Types.Numeric.parse(from.price),
length: PgCatalog.Types.Int2.parse(from.length),
rating: Public.Types.MpaaRating.parse(from.rating),
actors: PgCatalog.Types.Text.parse(from.actors),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace FilmListArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => FilmList.parse(e));
    
}


}
export namespace Inventory {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.Inventory.is(from)) {
  return {
inventoryId: PgCatalog.Types.Int4.parse(from.inventoryId),
filmId: PgCatalog.Types.Int2.parse(from.filmId),
storeId: PgCatalog.Types.Int2.parse(from.storeId),
lastUpdate: PgCatalog.Types.Timestamp.parse(from.lastUpdate),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace InventoryArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Inventory.parse(e));
    
}


}
export namespace Language {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.Language.is(from)) {
  return {
languageId: PgCatalog.Types.Int4.parse(from.languageId),
name: PgCatalog.Types.Bpchar.parse(from.name),
lastUpdate: PgCatalog.Types.Timestamp.parse(from.lastUpdate),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace LanguageArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Language.parse(e));
    
}


}
export namespace NicerButSlowerFilmList {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.NicerButSlowerFilmList.is(from)) {
  return {
fid: PgCatalog.Types.Int4.parse(from.fid),
title: PgCatalog.Types.Varchar.parse(from.title),
description: PgCatalog.Types.Text.parse(from.description),
category: PgCatalog.Types.Varchar.parse(from.category),
price: PgCatalog.Types.Numeric.parse(from.price),
length: PgCatalog.Types.Int2.parse(from.length),
rating: Public.Types.MpaaRating.parse(from.rating),
actors: PgCatalog.Types.Text.parse(from.actors),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace NicerButSlowerFilmListArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => NicerButSlowerFilmList.parse(e));
    
}


}
export namespace Payment {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.Payment.is(from)) {
  return {
paymentId: PgCatalog.Types.Int4.parse(from.paymentId),
customerId: PgCatalog.Types.Int2.parse(from.customerId),
staffId: PgCatalog.Types.Int2.parse(from.staffId),
rentalId: PgCatalog.Types.Int4.parse(from.rentalId),
amount: PgCatalog.Types.Numeric.parse(from.amount),
paymentDate: PgCatalog.Types.Timestamp.parse(from.paymentDate),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PaymentArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Payment.parse(e));
    
}


}
export namespace Rental {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.Rental.is(from)) {
  return {
rentalId: PgCatalog.Types.Int4.parse(from.rentalId),
rentalDate: PgCatalog.Types.Timestamp.parse(from.rentalDate),
inventoryId: PgCatalog.Types.Int4.parse(from.inventoryId),
customerId: PgCatalog.Types.Int2.parse(from.customerId),
returnDate: PgCatalog.Types.Timestamp.parse(from.returnDate),
staffId: PgCatalog.Types.Int2.parse(from.staffId),
lastUpdate: PgCatalog.Types.Timestamp.parse(from.lastUpdate),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace RentalArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Rental.parse(e));
    
}


}
export namespace SalesByFilmCategory {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.SalesByFilmCategory.is(from)) {
  return {
category: PgCatalog.Types.Varchar.parse(from.category),
totalSales: PgCatalog.Types.Numeric.parse(from.totalSales),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace SalesByFilmCategoryArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => SalesByFilmCategory.parse(e));
    
}


}
export namespace Staff {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.Staff.is(from)) {
  return {
staffId: PgCatalog.Types.Int4.parse(from.staffId),
firstName: PgCatalog.Types.Varchar.parse(from.firstName),
lastName: PgCatalog.Types.Varchar.parse(from.lastName),
addressId: PgCatalog.Types.Int2.parse(from.addressId),
email: PgCatalog.Types.Varchar.parse(from.email),
storeId: PgCatalog.Types.Int2.parse(from.storeId),
active: PgCatalog.Types.Bool.parse(from.active),
username: PgCatalog.Types.Varchar.parse(from.username),
password: PgCatalog.Types.Varchar.parse(from.password),
lastUpdate: PgCatalog.Types.Timestamp.parse(from.lastUpdate),
picture: PgCatalog.Types.Bytea.parse(from.picture),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace StaffArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Staff.parse(e));
    
}


}
export namespace Store {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.Store.is(from)) {
  return {
storeId: PgCatalog.Types.Int4.parse(from.storeId),
managerStaffId: PgCatalog.Types.Int2.parse(from.managerStaffId),
addressId: PgCatalog.Types.Int2.parse(from.addressId),
lastUpdate: PgCatalog.Types.Timestamp.parse(from.lastUpdate),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace StoreArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => Store.parse(e));
    
}


}
export namespace SalesByStore {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.SalesByStore.is(from)) {
  return {
store: PgCatalog.Types.Text.parse(from.store),
manager: PgCatalog.Types.Text.parse(from.manager),
totalSales: PgCatalog.Types.Numeric.parse(from.totalSales),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace SalesByStoreArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => SalesByStore.parse(e));
    
}


}
export namespace StaffList {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.StaffList.is(from)) {
  return {
id: PgCatalog.Types.Int4.parse(from.id),
name: PgCatalog.Types.Text.parse(from.name),
address: PgCatalog.Types.Varchar.parse(from.address),
zipCode: PgCatalog.Types.Varchar.parse(from.zipCode),
phone: PgCatalog.Types.Varchar.parse(from.phone),
city: PgCatalog.Types.Varchar.parse(from.city),
country: PgCatalog.Types.Varchar.parse(from.country),
sid: PgCatalog.Types.Int2.parse(from.sid),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace StaffListArray {
export function parse(from: unknown) {
// ArrayType
if (from === null || from === undefined) return [];

      const rawArray = Array.isArray(from) ? from : JSON.parse(from as string) as unknown[];
      return rawArray.map((e:unknown) => StaffList.parse(e));
    
}


}
export namespace ActorPkey {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.ActorPkey.is(from)) {
  return {
actorId: PgCatalog.Types.Int4.parse(from.actorId),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace AddressPkey {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.AddressPkey.is(from)) {
  return {
addressId: PgCatalog.Types.Int4.parse(from.addressId),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace CategoryPkey {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.CategoryPkey.is(from)) {
  return {
categoryId: PgCatalog.Types.Int4.parse(from.categoryId),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace CityPkey {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.CityPkey.is(from)) {
  return {
cityId: PgCatalog.Types.Int4.parse(from.cityId),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace CountryPkey {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.CountryPkey.is(from)) {
  return {
countryId: PgCatalog.Types.Int4.parse(from.countryId),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace CustomerPkey {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.CustomerPkey.is(from)) {
  return {
customerId: PgCatalog.Types.Int4.parse(from.customerId),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace FilmActorPkey {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.FilmActorPkey.is(from)) {
  return {
actorId: PgCatalog.Types.Int2.parse(from.actorId),
filmId: PgCatalog.Types.Int2.parse(from.filmId),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace FilmCategoryPkey {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.FilmCategoryPkey.is(from)) {
  return {
filmId: PgCatalog.Types.Int2.parse(from.filmId),
categoryId: PgCatalog.Types.Int2.parse(from.categoryId),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace FilmPkey {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.FilmPkey.is(from)) {
  return {
filmId: PgCatalog.Types.Int4.parse(from.filmId),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace InventoryPkey {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.InventoryPkey.is(from)) {
  return {
inventoryId: PgCatalog.Types.Int4.parse(from.inventoryId),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace LanguagePkey {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.LanguagePkey.is(from)) {
  return {
languageId: PgCatalog.Types.Int4.parse(from.languageId),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PaymentPkey {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.PaymentPkey.is(from)) {
  return {
paymentId: PgCatalog.Types.Int4.parse(from.paymentId),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace RentalPkey {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.RentalPkey.is(from)) {
  return {
rentalId: PgCatalog.Types.Int4.parse(from.rentalId),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace StaffPkey {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.StaffPkey.is(from)) {
  return {
staffId: PgCatalog.Types.Int4.parse(from.staffId),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace StorePkey {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.StorePkey.is(from)) {
  return {
storeId: PgCatalog.Types.Int4.parse(from.storeId),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace FilmFulltextIdx {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.FilmFulltextIdx.is(from)) {
  return {
fulltext: PgCatalog.Types.Tsvector.parse(from.fulltext),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace IdxActorLastName {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.IdxActorLastName.is(from)) {
  return {
lastName: PgCatalog.Types.Varchar.parse(from.lastName),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace IdxFkAddressId {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.IdxFkAddressId.is(from)) {
  return {
addressId: PgCatalog.Types.Int2.parse(from.addressId),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace IdxFkCityId {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.IdxFkCityId.is(from)) {
  return {
cityId: PgCatalog.Types.Int2.parse(from.cityId),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace IdxFkCountryId {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.IdxFkCountryId.is(from)) {
  return {
countryId: PgCatalog.Types.Int2.parse(from.countryId),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace IdxFkCustomerId {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.IdxFkCustomerId.is(from)) {
  return {
customerId: PgCatalog.Types.Int2.parse(from.customerId),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace IdxFkFilmId {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.IdxFkFilmId.is(from)) {
  return {
filmId: PgCatalog.Types.Int2.parse(from.filmId),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace IdxFkInventoryId {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.IdxFkInventoryId.is(from)) {
  return {
inventoryId: PgCatalog.Types.Int4.parse(from.inventoryId),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace IdxFkLanguageId {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.IdxFkLanguageId.is(from)) {
  return {
languageId: PgCatalog.Types.Int2.parse(from.languageId),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace IdxFkRentalId {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.IdxFkRentalId.is(from)) {
  return {
rentalId: PgCatalog.Types.Int4.parse(from.rentalId),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace IdxFkStaffId {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.IdxFkStaffId.is(from)) {
  return {
staffId: PgCatalog.Types.Int2.parse(from.staffId),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace IdxFkStoreId {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.IdxFkStoreId.is(from)) {
  return {
storeId: PgCatalog.Types.Int2.parse(from.storeId),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace IdxLastName {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.IdxLastName.is(from)) {
  return {
lastName: PgCatalog.Types.Varchar.parse(from.lastName),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace IdxStoreIdFilmId {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.IdxStoreIdFilmId.is(from)) {
  return {
storeId: PgCatalog.Types.Int2.parse(from.storeId),
filmId: PgCatalog.Types.Int2.parse(from.filmId),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace IdxTitle {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.IdxTitle.is(from)) {
  return {
title: PgCatalog.Types.Varchar.parse(from.title),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace IdxUnqManagerStaffId {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.IdxUnqManagerStaffId.is(from)) {
  return {
managerStaffId: PgCatalog.Types.Int2.parse(from.managerStaffId),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace IdxUnqRentalRentalDateInventoryIdCustomerId {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Types.IdxUnqRentalRentalDateInventoryIdCustomerId.is(from)) {
  return {
rentalDate: PgCatalog.Types.Timestamp.parse(from.rentalDate),
inventoryId: PgCatalog.Types.Int4.parse(from.inventoryId),
customerId: PgCatalog.Types.Int2.parse(from.customerId),
};
}
throw new Error(JSON.stringify(from))
}


}
}
export namespace Procedures {
export namespace FilmInStock {
export namespace Results {
}
export namespace Parameters {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Procedures.FilmInStock.Parameters.is(from)) {
  return {
pFilmId: PgCatalog.Types.Int4.parse(from.pFilmId),
pStoreId: PgCatalog.Types.Int4.parse(from.pStoreId),
};
}
throw new Error(JSON.stringify(from))
}


}
}
export namespace FilmNotInStock {
export namespace Results {
}
export namespace Parameters {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Procedures.FilmNotInStock.Parameters.is(from)) {
  return {
pFilmId: PgCatalog.Types.Int4.parse(from.pFilmId),
pStoreId: PgCatalog.Types.Int4.parse(from.pStoreId),
};
}
throw new Error(JSON.stringify(from))
}


}
}
export namespace GetCustomerBalance {
export namespace Results {
}
export namespace Parameters {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Procedures.GetCustomerBalance.Parameters.is(from)) {
  return {
pCustomerId: PgCatalog.Types.Int4.parse(from.pCustomerId),
pEffectiveDate: PgCatalog.Types.Timestamp.parse(from.pEffectiveDate),
};
}
throw new Error(JSON.stringify(from))
}


}
}
export namespace InventoryHeldByCustomer {
export namespace Results {
}
export namespace Parameters {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Procedures.InventoryHeldByCustomer.Parameters.is(from)) {
  return {
pInventoryId: PgCatalog.Types.Int4.parse(from.pInventoryId),
};
}
throw new Error(JSON.stringify(from))
}


}
}
export namespace InventoryInStock {
export namespace Results {
}
export namespace Parameters {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Procedures.InventoryInStock.Parameters.is(from)) {
  return {
pInventoryId: PgCatalog.Types.Int4.parse(from.pInventoryId),
};
}
throw new Error(JSON.stringify(from))
}


}
}
export namespace LastDay {
export namespace Results {
}
export namespace Parameters {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Procedures.LastDay.Parameters.is(from)) {
  return {
argument_0: PgCatalog.Types.Timestamp.parse(from.argument_0),
};
}
throw new Error(JSON.stringify(from))
}


}
}
export namespace RewardsReport {
export namespace Results {
}
export namespace Parameters {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Public.Procedures.RewardsReport.Parameters.is(from)) {
  return {
minMonthlyPurchases: PgCatalog.Types.Int4.parse(from.minMonthlyPurchases),
minDollarAmountPurchased: PgCatalog.Types.Numeric.parse(from.minDollarAmountPurchased),
};
}
throw new Error(JSON.stringify(from))
}


}
}
}
export namespace Tables {
export namespace FilmActor {
export namespace Results {
}
export namespace Create {
}
}
export namespace Address {
export namespace Results {
}
export namespace Create {
}
}
export namespace City {
export namespace Results {
}
export namespace Create {
}
}
export namespace Customer {
export namespace Results {
}
export namespace Create {
}
}
export namespace Actor {
export namespace Results {
}
export namespace Create {
}
}
export namespace FilmCategory {
export namespace Results {
}
export namespace Create {
}
}
export namespace Inventory {
export namespace Results {
}
export namespace Create {
}
}
export namespace Category {
export namespace Results {
}
export namespace Create {
}
}
export namespace Country {
export namespace Results {
}
export namespace Create {
}
}
export namespace Language {
export namespace Results {
}
export namespace Create {
}
}
export namespace Rental {
export namespace Results {
}
export namespace Create {
}
}
export namespace Staff {
export namespace Results {
}
export namespace Create {
}
}
export namespace Store {
export namespace Results {
}
export namespace Create {
}
}
export namespace Payment {
export namespace Results {
}
export namespace Create {
}
}
export namespace Film {
export namespace Results {
}
export namespace Create {
}
}
}
}
export namespace PgToast {
export namespace Types {
export namespace PgToast_36081Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_36081Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_36167Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_36167Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_1255Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_1255Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_1247Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_1247Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_2604Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_2604Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_2606Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_2606Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_2612Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_2612Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_2600Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_2600Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_2619Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_2619Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_3381Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_3381Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_3429Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_3429Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_2618Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_2618Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_2620Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_2620Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_3466Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_3466Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_2609Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_2609Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_2615Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_2615Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_1262Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_1262Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_2964Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_2964Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_1213Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_1213Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_1260Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_1260Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_2396Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_2396Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_3600Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_3600Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_3079Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_3079Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_2328Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_2328Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_1417Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_1417Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_1418Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_1418Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_3118Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_3118Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_3256Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_3256Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_6000Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_6000Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_826Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_826Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_3394Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_3394Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_3596Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_3596Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_3592Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_3592Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_3456Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_3456Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_6243Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_6243Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_3350Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_3350Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_6106Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_6106Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_6100Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_6100Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_13658Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_13658Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_13663Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_13663Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_13668Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_13668Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace PgToast_13673Index {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (PgToast.Types.PgToast_13673Index.is(from)) {
  return {
chunkId: PgCatalog.Types.Oid.parse(from.chunkId),
chunkSeq: PgCatalog.Types.Int4.parse(from.chunkSeq),
};
}
throw new Error(JSON.stringify(from))
}


}
}
export namespace Procedures {
}
export namespace Tables {
}
}
export namespace Scripts {
export namespace MovieListing {
export namespace Results {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Scripts.MovieListing.Results.is(from)) {
  return {
filmId: PgCatalog.Types.Int4.parse(from.filmId),
title: PgCatalog.Types.Varchar.parse(from.title),
releaseYear: PgCatalog.Types.Int4.parse(from.releaseYear),
rating: Public.Types.MpaaRating.parse(from.rating),
actors: PgCatalog.Types.TextArray.parse(from.actors),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace Results {
}
}
export namespace Sample {
export namespace Film {
export namespace Rated {
export namespace Results {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Scripts.Sample.Film.Rated.Results.is(from)) {
  return {
filmId: PgCatalog.Types.Int4.parse(from.filmId),
title: PgCatalog.Types.Varchar.parse(from.title),
description: PgCatalog.Types.Text.parse(from.description),
releaseYear: PgCatalog.Types.Int4.parse(from.releaseYear),
languageId: PgCatalog.Types.Int2.parse(from.languageId),
rentalDuration: PgCatalog.Types.Int2.parse(from.rentalDuration),
rentalRate: PgCatalog.Types.Numeric.parse(from.rentalRate),
length: PgCatalog.Types.Int2.parse(from.length),
replacementCost: PgCatalog.Types.Numeric.parse(from.replacementCost),
rating: Public.Types.MpaaRating.parse(from.rating),
lastUpdate: PgCatalog.Types.Timestamp.parse(from.lastUpdate),
specialFeatures: PgCatalog.Types.TextArray.parse(from.specialFeatures),
fulltext: PgCatalog.Types.Tsvector.parse(from.fulltext),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace Results {
}
export namespace Parameters {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Scripts.Sample.Film.Rated.Parameters.is(from)) {
  return {
argument_1: Public.Types.MpaaRating.parse(from.argument_1),
};
}
throw new Error(JSON.stringify(from))
}


}
}
export namespace Tally {
export namespace Results {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Scripts.Sample.Film.Tally.Results.is(from)) {
  return {
count: PgCatalog.Types.Int8.parse(from.count),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace Results {
}
}
}
export namespace Pick {
export namespace Results {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Scripts.Sample.Pick.Results.is(from)) {
  return {
filmId: PgCatalog.Types.Int4.parse(from.filmId),
title: PgCatalog.Types.Varchar.parse(from.title),
description: PgCatalog.Types.Text.parse(from.description),
releaseYear: PgCatalog.Types.Int4.parse(from.releaseYear),
languageId: PgCatalog.Types.Int2.parse(from.languageId),
rentalDuration: PgCatalog.Types.Int2.parse(from.rentalDuration),
rentalRate: PgCatalog.Types.Numeric.parse(from.rentalRate),
length: PgCatalog.Types.Int2.parse(from.length),
replacementCost: PgCatalog.Types.Numeric.parse(from.replacementCost),
rating: Public.Types.MpaaRating.parse(from.rating),
lastUpdate: PgCatalog.Types.Timestamp.parse(from.lastUpdate),
specialFeatures: PgCatalog.Types.TextArray.parse(from.specialFeatures),
fulltext: PgCatalog.Types.Tsvector.parse(from.fulltext),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace Results {
}
export namespace Parameters {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Scripts.Sample.Pick.Parameters.is(from)) {
  return {
argument_1: PgCatalog.Types.Text.parse(from.argument_1),
};
}
throw new Error(JSON.stringify(from))
}


}
}
}
export namespace Tally {
export namespace Results {
export function parse(from: unknown) {
// CompositeType
if (from === null || from === undefined) return null;
if (Scripts.Tally.Results.is(from)) {
  return {
count: PgCatalog.Types.Int8.parse(from.count),
};
}
throw new Error(JSON.stringify(from))
}


}
export namespace Results {
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
export namespace PgToast {
export namespace Tables {
}
}

// begin primary key pickers
export namespace Public {
export namespace Tables {
export namespace FilmActor {
export function primaryKeyFrom(value: Public.Types.FilmActor) : string {
return JSON.stringify({
actorId: value.actorId,
filmId: value.filmId,
});
}

      export function includesPrimaryKey(value: Partial<Public.Types.FilmActor>){
        return value.actorId !== undefined && value.filmId !== undefined
      }
      
}
export namespace Address {
export function primaryKeyFrom(value: Public.Types.Address) : string {
return JSON.stringify({
addressId: value.addressId,
});
}

      export function includesPrimaryKey(value: Partial<Public.Types.Address>){
        return value.addressId !== undefined
      }
      
}
export namespace City {
export function primaryKeyFrom(value: Public.Types.City) : string {
return JSON.stringify({
cityId: value.cityId,
});
}

      export function includesPrimaryKey(value: Partial<Public.Types.City>){
        return value.cityId !== undefined
      }
      
}
export namespace Customer {
export function primaryKeyFrom(value: Public.Types.Customer) : string {
return JSON.stringify({
customerId: value.customerId,
});
}

      export function includesPrimaryKey(value: Partial<Public.Types.Customer>){
        return value.customerId !== undefined
      }
      
}
export namespace Actor {
export function primaryKeyFrom(value: Public.Types.Actor) : string {
return JSON.stringify({
actorId: value.actorId,
});
}

      export function includesPrimaryKey(value: Partial<Public.Types.Actor>){
        return value.actorId !== undefined
      }
      
}
export namespace FilmCategory {
export function primaryKeyFrom(value: Public.Types.FilmCategory) : string {
return JSON.stringify({
filmId: value.filmId,
categoryId: value.categoryId,
});
}

      export function includesPrimaryKey(value: Partial<Public.Types.FilmCategory>){
        return value.filmId !== undefined && value.categoryId !== undefined
      }
      
}
export namespace Inventory {
export function primaryKeyFrom(value: Public.Types.Inventory) : string {
return JSON.stringify({
inventoryId: value.inventoryId,
});
}

      export function includesPrimaryKey(value: Partial<Public.Types.Inventory>){
        return value.inventoryId !== undefined
      }
      
}
export namespace Category {
export function primaryKeyFrom(value: Public.Types.Category) : string {
return JSON.stringify({
categoryId: value.categoryId,
});
}

      export function includesPrimaryKey(value: Partial<Public.Types.Category>){
        return value.categoryId !== undefined
      }
      
}
export namespace Country {
export function primaryKeyFrom(value: Public.Types.Country) : string {
return JSON.stringify({
countryId: value.countryId,
});
}

      export function includesPrimaryKey(value: Partial<Public.Types.Country>){
        return value.countryId !== undefined
      }
      
}
export namespace Language {
export function primaryKeyFrom(value: Public.Types.Language) : string {
return JSON.stringify({
languageId: value.languageId,
});
}

      export function includesPrimaryKey(value: Partial<Public.Types.Language>){
        return value.languageId !== undefined
      }
      
}
export namespace Rental {
export function primaryKeyFrom(value: Public.Types.Rental) : string {
return JSON.stringify({
rentalId: value.rentalId,
});
}

      export function includesPrimaryKey(value: Partial<Public.Types.Rental>){
        return value.rentalId !== undefined
      }
      
}
export namespace Staff {
export function primaryKeyFrom(value: Public.Types.Staff) : string {
return JSON.stringify({
staffId: value.staffId,
});
}

      export function includesPrimaryKey(value: Partial<Public.Types.Staff>){
        return value.staffId !== undefined
      }
      
}
export namespace Store {
export function primaryKeyFrom(value: Public.Types.Store) : string {
return JSON.stringify({
storeId: value.storeId,
});
}

      export function includesPrimaryKey(value: Partial<Public.Types.Store>){
        return value.storeId !== undefined
      }
      
}
export namespace Payment {
export function primaryKeyFrom(value: Public.Types.Payment) : string {
return JSON.stringify({
paymentId: value.paymentId,
});
}

      export function includesPrimaryKey(value: Partial<Public.Types.Payment>){
        return value.paymentId !== undefined
      }
      
}
export namespace Film {
export function primaryKeyFrom(value: Public.Types.Film) : string {
return JSON.stringify({
filmId: value.filmId,
});
}

      export function includesPrimaryKey(value: Partial<Public.Types.Film>){
        return value.filmId !== undefined
      }
      
}
}
}
export namespace PgToast {
export namespace Tables {
}
}

// begin type guards
export namespace PgCatalog {
export namespace Types {
export namespace PgType {
export function is(value: any) : value is PgCatalog.Types.PgType {
if (
(value.oid !== undefined) && (value.typname !== undefined) && (value.typnamespace !== undefined) && (value.typowner !== undefined) && (value.typlen !== undefined) && (value.typbyval !== undefined) && (value.typtype !== undefined) && (value.typcategory !== undefined) && (value.typispreferred !== undefined) && (value.typisdefined !== undefined) && (value.typdelim !== undefined) && (value.typrelid !== undefined) && (value.typsubscript !== undefined) && (value.typelem !== undefined) && (value.typarray !== undefined) && (value.typinput !== undefined) && (value.typoutput !== undefined) && (value.typreceive !== undefined) && (value.typsend !== undefined) && (value.typmodin !== undefined) && (value.typmodout !== undefined) && (value.typanalyze !== undefined) && (value.typalign !== undefined) && (value.typstorage !== undefined) && (value.typnotnull !== undefined) && (value.typbasetype !== undefined) && (value.typtypmod !== undefined) && (value.typndims !== undefined) && (value.typcollation !== undefined) && (value.typdefaultbin !== undefined) && (value.typdefault !== undefined) && (value.typacl !== undefined)
) return true;
return false;
}
}
export namespace PgAttribute {
export function is(value: any) : value is PgCatalog.Types.PgAttribute {
if (
(value.attrelid !== undefined) && (value.attname !== undefined) && (value.atttypid !== undefined) && (value.attlen !== undefined) && (value.attnum !== undefined) && (value.attcacheoff !== undefined) && (value.atttypmod !== undefined) && (value.attndims !== undefined) && (value.attbyval !== undefined) && (value.attalign !== undefined) && (value.attstorage !== undefined) && (value.attcompression !== undefined) && (value.attnotnull !== undefined) && (value.atthasdef !== undefined) && (value.atthasmissing !== undefined) && (value.attidentity !== undefined) && (value.attgenerated !== undefined) && (value.attisdropped !== undefined) && (value.attislocal !== undefined) && (value.attinhcount !== undefined) && (value.attstattarget !== undefined) && (value.attcollation !== undefined) && (value.attacl !== undefined) && (value.attoptions !== undefined) && (value.attfdwoptions !== undefined) && (value.attmissingval !== undefined)
) return true;
return false;
}
}
export namespace PgProc {
export function is(value: any) : value is PgCatalog.Types.PgProc {
if (
(value.oid !== undefined) && (value.proname !== undefined) && (value.pronamespace !== undefined) && (value.proowner !== undefined) && (value.prolang !== undefined) && (value.procost !== undefined) && (value.prorows !== undefined) && (value.provariadic !== undefined) && (value.prosupport !== undefined) && (value.prokind !== undefined) && (value.prosecdef !== undefined) && (value.proleakproof !== undefined) && (value.proisstrict !== undefined) && (value.proretset !== undefined) && (value.provolatile !== undefined) && (value.proparallel !== undefined) && (value.pronargs !== undefined) && (value.pronargdefaults !== undefined) && (value.prorettype !== undefined) && (value.proargtypes !== undefined) && (value.proallargtypes !== undefined) && (value.proargmodes !== undefined) && (value.proargnames !== undefined) && (value.proargdefaults !== undefined) && (value.protrftypes !== undefined) && (value.prosrc !== undefined) && (value.probin !== undefined) && (value.prosqlbody !== undefined) && (value.proconfig !== undefined) && (value.proacl !== undefined)
) return true;
return false;
}
}
export namespace PgClass {
export function is(value: any) : value is PgCatalog.Types.PgClass {
if (
(value.oid !== undefined) && (value.relname !== undefined) && (value.relnamespace !== undefined) && (value.reltype !== undefined) && (value.reloftype !== undefined) && (value.relowner !== undefined) && (value.relam !== undefined) && (value.relfilenode !== undefined) && (value.reltablespace !== undefined) && (value.relpages !== undefined) && (value.reltuples !== undefined) && (value.relallvisible !== undefined) && (value.reltoastrelid !== undefined) && (value.relhasindex !== undefined) && (value.relisshared !== undefined) && (value.relpersistence !== undefined) && (value.relkind !== undefined) && (value.relnatts !== undefined) && (value.relchecks !== undefined) && (value.relhasrules !== undefined) && (value.relhastriggers !== undefined) && (value.relhassubclass !== undefined) && (value.relrowsecurity !== undefined) && (value.relforcerowsecurity !== undefined) && (value.relispopulated !== undefined) && (value.relreplident !== undefined) && (value.relispartition !== undefined) && (value.relrewrite !== undefined) && (value.relfrozenxid !== undefined) && (value.relminmxid !== undefined) && (value.relacl !== undefined) && (value.reloptions !== undefined) && (value.relpartbound !== undefined)
) return true;
return false;
}
}
export namespace PgAttrdef {
export function is(value: any) : value is PgCatalog.Types.PgAttrdef {
if (
(value.oid !== undefined) && (value.adrelid !== undefined) && (value.adnum !== undefined) && (value.adbin !== undefined)
) return true;
return false;
}
}
export namespace PgConstraint {
export function is(value: any) : value is PgCatalog.Types.PgConstraint {
if (
(value.oid !== undefined) && (value.conname !== undefined) && (value.connamespace !== undefined) && (value.contype !== undefined) && (value.condeferrable !== undefined) && (value.condeferred !== undefined) && (value.convalidated !== undefined) && (value.conrelid !== undefined) && (value.contypid !== undefined) && (value.conindid !== undefined) && (value.conparentid !== undefined) && (value.confrelid !== undefined) && (value.confupdtype !== undefined) && (value.confdeltype !== undefined) && (value.confmatchtype !== undefined) && (value.conislocal !== undefined) && (value.coninhcount !== undefined) && (value.connoinherit !== undefined) && (value.conkey !== undefined) && (value.confkey !== undefined) && (value.conpfeqop !== undefined) && (value.conppeqop !== undefined) && (value.conffeqop !== undefined) && (value.confdelsetcols !== undefined) && (value.conexclop !== undefined) && (value.conbin !== undefined)
) return true;
return false;
}
}
export namespace PgInherits {
export function is(value: any) : value is PgCatalog.Types.PgInherits {
if (
(value.inhrelid !== undefined) && (value.inhparent !== undefined) && (value.inhseqno !== undefined) && (value.inhdetachpending !== undefined)
) return true;
return false;
}
}
export namespace PgIndex {
export function is(value: any) : value is PgCatalog.Types.PgIndex {
if (
(value.indexrelid !== undefined) && (value.indrelid !== undefined) && (value.indnatts !== undefined) && (value.indnkeyatts !== undefined) && (value.indisunique !== undefined) && (value.indnullsnotdistinct !== undefined) && (value.indisprimary !== undefined) && (value.indisexclusion !== undefined) && (value.indimmediate !== undefined) && (value.indisclustered !== undefined) && (value.indisvalid !== undefined) && (value.indcheckxmin !== undefined) && (value.indisready !== undefined) && (value.indislive !== undefined) && (value.indisreplident !== undefined) && (value.indkey !== undefined) && (value.indcollation !== undefined) && (value.indclass !== undefined) && (value.indoption !== undefined) && (value.indexprs !== undefined) && (value.indpred !== undefined)
) return true;
return false;
}
}
export namespace PgOperator {
export function is(value: any) : value is PgCatalog.Types.PgOperator {
if (
(value.oid !== undefined) && (value.oprname !== undefined) && (value.oprnamespace !== undefined) && (value.oprowner !== undefined) && (value.oprkind !== undefined) && (value.oprcanmerge !== undefined) && (value.oprcanhash !== undefined) && (value.oprleft !== undefined) && (value.oprright !== undefined) && (value.oprresult !== undefined) && (value.oprcom !== undefined) && (value.oprnegate !== undefined) && (value.oprcode !== undefined) && (value.oprrest !== undefined) && (value.oprjoin !== undefined)
) return true;
return false;
}
}
export namespace PgOpfamily {
export function is(value: any) : value is PgCatalog.Types.PgOpfamily {
if (
(value.oid !== undefined) && (value.opfmethod !== undefined) && (value.opfname !== undefined) && (value.opfnamespace !== undefined) && (value.opfowner !== undefined)
) return true;
return false;
}
}
export namespace PgOpclass {
export function is(value: any) : value is PgCatalog.Types.PgOpclass {
if (
(value.oid !== undefined) && (value.opcmethod !== undefined) && (value.opcname !== undefined) && (value.opcnamespace !== undefined) && (value.opcowner !== undefined) && (value.opcfamily !== undefined) && (value.opcintype !== undefined) && (value.opcdefault !== undefined) && (value.opckeytype !== undefined)
) return true;
return false;
}
}
export namespace PgAm {
export function is(value: any) : value is PgCatalog.Types.PgAm {
if (
(value.oid !== undefined) && (value.amname !== undefined) && (value.amhandler !== undefined) && (value.amtype !== undefined)
) return true;
return false;
}
}
export namespace PgAmop {
export function is(value: any) : value is PgCatalog.Types.PgAmop {
if (
(value.oid !== undefined) && (value.amopfamily !== undefined) && (value.amoplefttype !== undefined) && (value.amoprighttype !== undefined) && (value.amopstrategy !== undefined) && (value.amoppurpose !== undefined) && (value.amopopr !== undefined) && (value.amopmethod !== undefined) && (value.amopsortfamily !== undefined)
) return true;
return false;
}
}
export namespace PgAmproc {
export function is(value: any) : value is PgCatalog.Types.PgAmproc {
if (
(value.oid !== undefined) && (value.amprocfamily !== undefined) && (value.amproclefttype !== undefined) && (value.amprocrighttype !== undefined) && (value.amprocnum !== undefined) && (value.amproc !== undefined)
) return true;
return false;
}
}
export namespace PgLanguage {
export function is(value: any) : value is PgCatalog.Types.PgLanguage {
if (
(value.oid !== undefined) && (value.lanname !== undefined) && (value.lanowner !== undefined) && (value.lanispl !== undefined) && (value.lanpltrusted !== undefined) && (value.lanplcallfoid !== undefined) && (value.laninline !== undefined) && (value.lanvalidator !== undefined) && (value.lanacl !== undefined)
) return true;
return false;
}
}
export namespace PgLargeobjectMetadata {
export function is(value: any) : value is PgCatalog.Types.PgLargeobjectMetadata {
if (
(value.oid !== undefined) && (value.lomowner !== undefined) && (value.lomacl !== undefined)
) return true;
return false;
}
}
export namespace PgLargeobject {
export function is(value: any) : value is PgCatalog.Types.PgLargeobject {
if (
(value.loid !== undefined) && (value.pageno !== undefined) && (value.data !== undefined)
) return true;
return false;
}
}
export namespace PgAggregate {
export function is(value: any) : value is PgCatalog.Types.PgAggregate {
if (
(value.aggfnoid !== undefined) && (value.aggkind !== undefined) && (value.aggnumdirectargs !== undefined) && (value.aggtransfn !== undefined) && (value.aggfinalfn !== undefined) && (value.aggcombinefn !== undefined) && (value.aggserialfn !== undefined) && (value.aggdeserialfn !== undefined) && (value.aggmtransfn !== undefined) && (value.aggminvtransfn !== undefined) && (value.aggmfinalfn !== undefined) && (value.aggfinalextra !== undefined) && (value.aggmfinalextra !== undefined) && (value.aggfinalmodify !== undefined) && (value.aggmfinalmodify !== undefined) && (value.aggsortop !== undefined) && (value.aggtranstype !== undefined) && (value.aggtransspace !== undefined) && (value.aggmtranstype !== undefined) && (value.aggmtransspace !== undefined) && (value.agginitval !== undefined) && (value.aggminitval !== undefined)
) return true;
return false;
}
}
export namespace PgStatistic {
export function is(value: any) : value is PgCatalog.Types.PgStatistic {
if (
(value.starelid !== undefined) && (value.staattnum !== undefined) && (value.stainherit !== undefined) && (value.stanullfrac !== undefined) && (value.stawidth !== undefined) && (value.stadistinct !== undefined) && (value.stakind1 !== undefined) && (value.stakind2 !== undefined) && (value.stakind3 !== undefined) && (value.stakind4 !== undefined) && (value.stakind5 !== undefined) && (value.staop1 !== undefined) && (value.staop2 !== undefined) && (value.staop3 !== undefined) && (value.staop4 !== undefined) && (value.staop5 !== undefined) && (value.stacoll1 !== undefined) && (value.stacoll2 !== undefined) && (value.stacoll3 !== undefined) && (value.stacoll4 !== undefined) && (value.stacoll5 !== undefined) && (value.stanumbers1 !== undefined) && (value.stanumbers2 !== undefined) && (value.stanumbers3 !== undefined) && (value.stanumbers4 !== undefined) && (value.stanumbers5 !== undefined) && (value.stavalues1 !== undefined) && (value.stavalues2 !== undefined) && (value.stavalues3 !== undefined) && (value.stavalues4 !== undefined) && (value.stavalues5 !== undefined)
) return true;
return false;
}
}
export namespace PgStatisticExt {
export function is(value: any) : value is PgCatalog.Types.PgStatisticExt {
if (
(value.oid !== undefined) && (value.stxrelid !== undefined) && (value.stxname !== undefined) && (value.stxnamespace !== undefined) && (value.stxowner !== undefined) && (value.stxstattarget !== undefined) && (value.stxkeys !== undefined) && (value.stxkind !== undefined) && (value.stxexprs !== undefined)
) return true;
return false;
}
}
export namespace PgStatisticExtData {
export function is(value: any) : value is PgCatalog.Types.PgStatisticExtData {
if (
(value.stxoid !== undefined) && (value.stxdinherit !== undefined) && (value.stxdndistinct !== undefined) && (value.stxddependencies !== undefined) && (value.stxdmcv !== undefined) && (value.stxdexpr !== undefined)
) return true;
return false;
}
}
export namespace PgRewrite {
export function is(value: any) : value is PgCatalog.Types.PgRewrite {
if (
(value.oid !== undefined) && (value.rulename !== undefined) && (value.evClass !== undefined) && (value.evType !== undefined) && (value.evEnabled !== undefined) && (value.isInstead !== undefined) && (value.evQual !== undefined) && (value.evAction !== undefined)
) return true;
return false;
}
}
export namespace PgTrigger {
export function is(value: any) : value is PgCatalog.Types.PgTrigger {
if (
(value.oid !== undefined) && (value.tgrelid !== undefined) && (value.tgparentid !== undefined) && (value.tgname !== undefined) && (value.tgfoid !== undefined) && (value.tgtype !== undefined) && (value.tgenabled !== undefined) && (value.tgisinternal !== undefined) && (value.tgconstrrelid !== undefined) && (value.tgconstrindid !== undefined) && (value.tgconstraint !== undefined) && (value.tgdeferrable !== undefined) && (value.tginitdeferred !== undefined) && (value.tgnargs !== undefined) && (value.tgattr !== undefined) && (value.tgargs !== undefined) && (value.tgqual !== undefined) && (value.tgoldtable !== undefined) && (value.tgnewtable !== undefined)
) return true;
return false;
}
}
export namespace PgEventTrigger {
export function is(value: any) : value is PgCatalog.Types.PgEventTrigger {
if (
(value.oid !== undefined) && (value.evtname !== undefined) && (value.evtevent !== undefined) && (value.evtowner !== undefined) && (value.evtfoid !== undefined) && (value.evtenabled !== undefined) && (value.evttags !== undefined)
) return true;
return false;
}
}
export namespace PgDescription {
export function is(value: any) : value is PgCatalog.Types.PgDescription {
if (
(value.objoid !== undefined) && (value.classoid !== undefined) && (value.objsubid !== undefined) && (value.description !== undefined)
) return true;
return false;
}
}
export namespace PgCast {
export function is(value: any) : value is PgCatalog.Types.PgCast {
if (
(value.oid !== undefined) && (value.castsource !== undefined) && (value.casttarget !== undefined) && (value.castfunc !== undefined) && (value.castcontext !== undefined) && (value.castmethod !== undefined)
) return true;
return false;
}
}
export namespace PgEnum {
export function is(value: any) : value is PgCatalog.Types.PgEnum {
if (
(value.oid !== undefined) && (value.enumtypid !== undefined) && (value.enumsortorder !== undefined) && (value.enumlabel !== undefined)
) return true;
return false;
}
}
export namespace PgNamespace {
export function is(value: any) : value is PgCatalog.Types.PgNamespace {
if (
(value.oid !== undefined) && (value.nspname !== undefined) && (value.nspowner !== undefined) && (value.nspacl !== undefined)
) return true;
return false;
}
}
export namespace PgConversion {
export function is(value: any) : value is PgCatalog.Types.PgConversion {
if (
(value.oid !== undefined) && (value.conname !== undefined) && (value.connamespace !== undefined) && (value.conowner !== undefined) && (value.conforencoding !== undefined) && (value.contoencoding !== undefined) && (value.conproc !== undefined) && (value.condefault !== undefined)
) return true;
return false;
}
}
export namespace PgDepend {
export function is(value: any) : value is PgCatalog.Types.PgDepend {
if (
(value.classid !== undefined) && (value.objid !== undefined) && (value.objsubid !== undefined) && (value.refclassid !== undefined) && (value.refobjid !== undefined) && (value.refobjsubid !== undefined) && (value.deptype !== undefined)
) return true;
return false;
}
}
export namespace PgDatabase {
export function is(value: any) : value is PgCatalog.Types.PgDatabase {
if (
(value.oid !== undefined) && (value.datname !== undefined) && (value.datdba !== undefined) && (value.encoding !== undefined) && (value.datlocprovider !== undefined) && (value.datistemplate !== undefined) && (value.datallowconn !== undefined) && (value.datconnlimit !== undefined) && (value.datfrozenxid !== undefined) && (value.datminmxid !== undefined) && (value.dattablespace !== undefined) && (value.datcollate !== undefined) && (value.datctype !== undefined) && (value.daticulocale !== undefined) && (value.daticurules !== undefined) && (value.datcollversion !== undefined) && (value.datacl !== undefined)
) return true;
return false;
}
}
export namespace PgDbRoleSetting {
export function is(value: any) : value is PgCatalog.Types.PgDbRoleSetting {
if (
(value.setdatabase !== undefined) && (value.setrole !== undefined) && (value.setconfig !== undefined)
) return true;
return false;
}
}
export namespace PgTablespace {
export function is(value: any) : value is PgCatalog.Types.PgTablespace {
if (
(value.oid !== undefined) && (value.spcname !== undefined) && (value.spcowner !== undefined) && (value.spcacl !== undefined) && (value.spcoptions !== undefined)
) return true;
return false;
}
}
export namespace PgAuthid {
export function is(value: any) : value is PgCatalog.Types.PgAuthid {
if (
(value.oid !== undefined) && (value.rolname !== undefined) && (value.rolsuper !== undefined) && (value.rolinherit !== undefined) && (value.rolcreaterole !== undefined) && (value.rolcreatedb !== undefined) && (value.rolcanlogin !== undefined) && (value.rolreplication !== undefined) && (value.rolbypassrls !== undefined) && (value.rolconnlimit !== undefined) && (value.rolpassword !== undefined) && (value.rolvaliduntil !== undefined)
) return true;
return false;
}
}
export namespace PgAuthMembers {
export function is(value: any) : value is PgCatalog.Types.PgAuthMembers {
if (
(value.oid !== undefined) && (value.roleid !== undefined) && (value.member !== undefined) && (value.grantor !== undefined) && (value.adminOption !== undefined) && (value.inheritOption !== undefined) && (value.setOption !== undefined)
) return true;
return false;
}
}
export namespace PgShdepend {
export function is(value: any) : value is PgCatalog.Types.PgShdepend {
if (
(value.dbid !== undefined) && (value.classid !== undefined) && (value.objid !== undefined) && (value.objsubid !== undefined) && (value.refclassid !== undefined) && (value.refobjid !== undefined) && (value.deptype !== undefined)
) return true;
return false;
}
}
export namespace PgShdescription {
export function is(value: any) : value is PgCatalog.Types.PgShdescription {
if (
(value.objoid !== undefined) && (value.classoid !== undefined) && (value.description !== undefined)
) return true;
return false;
}
}
export namespace PgTsConfig {
export function is(value: any) : value is PgCatalog.Types.PgTsConfig {
if (
(value.oid !== undefined) && (value.cfgname !== undefined) && (value.cfgnamespace !== undefined) && (value.cfgowner !== undefined) && (value.cfgparser !== undefined)
) return true;
return false;
}
}
export namespace PgTsConfigMap {
export function is(value: any) : value is PgCatalog.Types.PgTsConfigMap {
if (
(value.mapcfg !== undefined) && (value.maptokentype !== undefined) && (value.mapseqno !== undefined) && (value.mapdict !== undefined)
) return true;
return false;
}
}
export namespace PgTsDict {
export function is(value: any) : value is PgCatalog.Types.PgTsDict {
if (
(value.oid !== undefined) && (value.dictname !== undefined) && (value.dictnamespace !== undefined) && (value.dictowner !== undefined) && (value.dicttemplate !== undefined) && (value.dictinitoption !== undefined)
) return true;
return false;
}
}
export namespace PgTsParser {
export function is(value: any) : value is PgCatalog.Types.PgTsParser {
if (
(value.oid !== undefined) && (value.prsname !== undefined) && (value.prsnamespace !== undefined) && (value.prsstart !== undefined) && (value.prstoken !== undefined) && (value.prsend !== undefined) && (value.prsheadline !== undefined) && (value.prslextype !== undefined)
) return true;
return false;
}
}
export namespace PgTsTemplate {
export function is(value: any) : value is PgCatalog.Types.PgTsTemplate {
if (
(value.oid !== undefined) && (value.tmplname !== undefined) && (value.tmplnamespace !== undefined) && (value.tmplinit !== undefined) && (value.tmpllexize !== undefined)
) return true;
return false;
}
}
export namespace PgExtension {
export function is(value: any) : value is PgCatalog.Types.PgExtension {
if (
(value.oid !== undefined) && (value.extname !== undefined) && (value.extowner !== undefined) && (value.extnamespace !== undefined) && (value.extrelocatable !== undefined) && (value.extversion !== undefined) && (value.extconfig !== undefined) && (value.extcondition !== undefined)
) return true;
return false;
}
}
export namespace PgForeignDataWrapper {
export function is(value: any) : value is PgCatalog.Types.PgForeignDataWrapper {
if (
(value.oid !== undefined) && (value.fdwname !== undefined) && (value.fdwowner !== undefined) && (value.fdwhandler !== undefined) && (value.fdwvalidator !== undefined) && (value.fdwacl !== undefined) && (value.fdwoptions !== undefined)
) return true;
return false;
}
}
export namespace PgForeignServer {
export function is(value: any) : value is PgCatalog.Types.PgForeignServer {
if (
(value.oid !== undefined) && (value.srvname !== undefined) && (value.srvowner !== undefined) && (value.srvfdw !== undefined) && (value.srvtype !== undefined) && (value.srvversion !== undefined) && (value.srvacl !== undefined) && (value.srvoptions !== undefined)
) return true;
return false;
}
}
export namespace PgUserMapping {
export function is(value: any) : value is PgCatalog.Types.PgUserMapping {
if (
(value.oid !== undefined) && (value.umuser !== undefined) && (value.umserver !== undefined) && (value.umoptions !== undefined)
) return true;
return false;
}
}
export namespace PgForeignTable {
export function is(value: any) : value is PgCatalog.Types.PgForeignTable {
if (
(value.ftrelid !== undefined) && (value.ftserver !== undefined) && (value.ftoptions !== undefined)
) return true;
return false;
}
}
export namespace PgPolicy {
export function is(value: any) : value is PgCatalog.Types.PgPolicy {
if (
(value.oid !== undefined) && (value.polname !== undefined) && (value.polrelid !== undefined) && (value.polcmd !== undefined) && (value.polpermissive !== undefined) && (value.polroles !== undefined) && (value.polqual !== undefined) && (value.polwithcheck !== undefined)
) return true;
return false;
}
}
export namespace PgReplicationOrigin {
export function is(value: any) : value is PgCatalog.Types.PgReplicationOrigin {
if (
(value.roident !== undefined) && (value.roname !== undefined)
) return true;
return false;
}
}
export namespace PgDefaultAcl {
export function is(value: any) : value is PgCatalog.Types.PgDefaultAcl {
if (
(value.oid !== undefined) && (value.defaclrole !== undefined) && (value.defaclnamespace !== undefined) && (value.defaclobjtype !== undefined) && (value.defaclacl !== undefined)
) return true;
return false;
}
}
export namespace PgInitPrivs {
export function is(value: any) : value is PgCatalog.Types.PgInitPrivs {
if (
(value.objoid !== undefined) && (value.classoid !== undefined) && (value.objsubid !== undefined) && (value.privtype !== undefined) && (value.initprivs !== undefined)
) return true;
return false;
}
}
export namespace PgSeclabel {
export function is(value: any) : value is PgCatalog.Types.PgSeclabel {
if (
(value.objoid !== undefined) && (value.classoid !== undefined) && (value.objsubid !== undefined) && (value.provider !== undefined) && (value.label !== undefined)
) return true;
return false;
}
}
export namespace PgShseclabel {
export function is(value: any) : value is PgCatalog.Types.PgShseclabel {
if (
(value.objoid !== undefined) && (value.classoid !== undefined) && (value.provider !== undefined) && (value.label !== undefined)
) return true;
return false;
}
}
export namespace PgCollation {
export function is(value: any) : value is PgCatalog.Types.PgCollation {
if (
(value.oid !== undefined) && (value.collname !== undefined) && (value.collnamespace !== undefined) && (value.collowner !== undefined) && (value.collprovider !== undefined) && (value.collisdeterministic !== undefined) && (value.collencoding !== undefined) && (value.collcollate !== undefined) && (value.collctype !== undefined) && (value.colliculocale !== undefined) && (value.collicurules !== undefined) && (value.collversion !== undefined)
) return true;
return false;
}
}
export namespace PgParameterAcl {
export function is(value: any) : value is PgCatalog.Types.PgParameterAcl {
if (
(value.oid !== undefined) && (value.parname !== undefined) && (value.paracl !== undefined)
) return true;
return false;
}
}
export namespace PgPartitionedTable {
export function is(value: any) : value is PgCatalog.Types.PgPartitionedTable {
if (
(value.partrelid !== undefined) && (value.partstrat !== undefined) && (value.partnatts !== undefined) && (value.partdefid !== undefined) && (value.partattrs !== undefined) && (value.partclass !== undefined) && (value.partcollation !== undefined) && (value.partexprs !== undefined)
) return true;
return false;
}
}
export namespace PgRange {
export function is(value: any) : value is PgCatalog.Types.PgRange {
if (
(value.rngtypid !== undefined) && (value.rngsubtype !== undefined) && (value.rngmultitypid !== undefined) && (value.rngcollation !== undefined) && (value.rngsubopc !== undefined) && (value.rngcanonical !== undefined) && (value.rngsubdiff !== undefined)
) return true;
return false;
}
}
export namespace PgTransform {
export function is(value: any) : value is PgCatalog.Types.PgTransform {
if (
(value.oid !== undefined) && (value.trftype !== undefined) && (value.trflang !== undefined) && (value.trffromsql !== undefined) && (value.trftosql !== undefined)
) return true;
return false;
}
}
export namespace PgSequence {
export function is(value: any) : value is PgCatalog.Types.PgSequence {
if (
(value.seqrelid !== undefined) && (value.seqtypid !== undefined) && (value.seqstart !== undefined) && (value.seqincrement !== undefined) && (value.seqmax !== undefined) && (value.seqmin !== undefined) && (value.seqcache !== undefined) && (value.seqcycle !== undefined)
) return true;
return false;
}
}
export namespace PgPublication {
export function is(value: any) : value is PgCatalog.Types.PgPublication {
if (
(value.oid !== undefined) && (value.pubname !== undefined) && (value.pubowner !== undefined) && (value.puballtables !== undefined) && (value.pubinsert !== undefined) && (value.pubupdate !== undefined) && (value.pubdelete !== undefined) && (value.pubtruncate !== undefined) && (value.pubviaroot !== undefined)
) return true;
return false;
}
}
export namespace PgPublicationNamespace {
export function is(value: any) : value is PgCatalog.Types.PgPublicationNamespace {
if (
(value.oid !== undefined) && (value.pnpubid !== undefined) && (value.pnnspid !== undefined)
) return true;
return false;
}
}
export namespace PgPublicationRel {
export function is(value: any) : value is PgCatalog.Types.PgPublicationRel {
if (
(value.oid !== undefined) && (value.prpubid !== undefined) && (value.prrelid !== undefined) && (value.prqual !== undefined) && (value.prattrs !== undefined)
) return true;
return false;
}
}
export namespace PgSubscription {
export function is(value: any) : value is PgCatalog.Types.PgSubscription {
if (
(value.oid !== undefined) && (value.subdbid !== undefined) && (value.subskiplsn !== undefined) && (value.subname !== undefined) && (value.subowner !== undefined) && (value.subenabled !== undefined) && (value.subbinary !== undefined) && (value.substream !== undefined) && (value.subtwophasestate !== undefined) && (value.subdisableonerr !== undefined) && (value.subpasswordrequired !== undefined) && (value.subrunasowner !== undefined) && (value.subconninfo !== undefined) && (value.subslotname !== undefined) && (value.subsynccommit !== undefined) && (value.subpublications !== undefined) && (value.suborigin !== undefined)
) return true;
return false;
}
}
export namespace PgSubscriptionRel {
export function is(value: any) : value is PgCatalog.Types.PgSubscriptionRel {
if (
(value.srsubid !== undefined) && (value.srrelid !== undefined) && (value.srsubstate !== undefined) && (value.srsublsn !== undefined)
) return true;
return false;
}
}
export namespace PgRoles {
export function is(value: any) : value is PgCatalog.Types.PgRoles {
if (
(value.rolname !== undefined) && (value.rolsuper !== undefined) && (value.rolinherit !== undefined) && (value.rolcreaterole !== undefined) && (value.rolcreatedb !== undefined) && (value.rolcanlogin !== undefined) && (value.rolreplication !== undefined) && (value.rolconnlimit !== undefined) && (value.rolpassword !== undefined) && (value.rolvaliduntil !== undefined) && (value.rolbypassrls !== undefined) && (value.rolconfig !== undefined) && (value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgShadow {
export function is(value: any) : value is PgCatalog.Types.PgShadow {
if (
(value.usename !== undefined) && (value.usesysid !== undefined) && (value.usecreatedb !== undefined) && (value.usesuper !== undefined) && (value.userepl !== undefined) && (value.usebypassrls !== undefined) && (value.passwd !== undefined) && (value.valuntil !== undefined) && (value.useconfig !== undefined)
) return true;
return false;
}
}
export namespace PgGroup {
export function is(value: any) : value is PgCatalog.Types.PgGroup {
if (
(value.groname !== undefined) && (value.grosysid !== undefined) && (value.grolist !== undefined)
) return true;
return false;
}
}
export namespace PgUser {
export function is(value: any) : value is PgCatalog.Types.PgUser {
if (
(value.usename !== undefined) && (value.usesysid !== undefined) && (value.usecreatedb !== undefined) && (value.usesuper !== undefined) && (value.userepl !== undefined) && (value.usebypassrls !== undefined) && (value.passwd !== undefined) && (value.valuntil !== undefined) && (value.useconfig !== undefined)
) return true;
return false;
}
}
export namespace PgPolicies {
export function is(value: any) : value is PgCatalog.Types.PgPolicies {
if (
(value.schemaname !== undefined) && (value.tablename !== undefined) && (value.policyname !== undefined) && (value.permissive !== undefined) && (value.roles !== undefined) && (value.cmd !== undefined) && (value.qual !== undefined) && (value.withCheck !== undefined)
) return true;
return false;
}
}
export namespace PgRules {
export function is(value: any) : value is PgCatalog.Types.PgRules {
if (
(value.schemaname !== undefined) && (value.tablename !== undefined) && (value.rulename !== undefined) && (value.definition !== undefined)
) return true;
return false;
}
}
export namespace PgViews {
export function is(value: any) : value is PgCatalog.Types.PgViews {
if (
(value.schemaname !== undefined) && (value.viewname !== undefined) && (value.viewowner !== undefined) && (value.definition !== undefined)
) return true;
return false;
}
}
export namespace PgTables {
export function is(value: any) : value is PgCatalog.Types.PgTables {
if (
(value.schemaname !== undefined) && (value.tablename !== undefined) && (value.tableowner !== undefined) && (value.tablespace !== undefined) && (value.hasindexes !== undefined) && (value.hasrules !== undefined) && (value.hastriggers !== undefined) && (value.rowsecurity !== undefined)
) return true;
return false;
}
}
export namespace PgMatviews {
export function is(value: any) : value is PgCatalog.Types.PgMatviews {
if (
(value.schemaname !== undefined) && (value.matviewname !== undefined) && (value.matviewowner !== undefined) && (value.tablespace !== undefined) && (value.hasindexes !== undefined) && (value.ispopulated !== undefined) && (value.definition !== undefined)
) return true;
return false;
}
}
export namespace PgIndexes {
export function is(value: any) : value is PgCatalog.Types.PgIndexes {
if (
(value.schemaname !== undefined) && (value.tablename !== undefined) && (value.indexname !== undefined) && (value.tablespace !== undefined) && (value.indexdef !== undefined)
) return true;
return false;
}
}
export namespace PgSequences {
export function is(value: any) : value is PgCatalog.Types.PgSequences {
if (
(value.schemaname !== undefined) && (value.sequencename !== undefined) && (value.sequenceowner !== undefined) && (value.dataType !== undefined) && (value.startValue !== undefined) && (value.minValue !== undefined) && (value.maxValue !== undefined) && (value.incrementBy !== undefined) && (value.cycle !== undefined) && (value.cacheSize !== undefined) && (value.lastValue !== undefined)
) return true;
return false;
}
}
export namespace PgStats {
export function is(value: any) : value is PgCatalog.Types.PgStats {
if (
(value.schemaname !== undefined) && (value.tablename !== undefined) && (value.attname !== undefined) && (value.inherited !== undefined) && (value.nullFrac !== undefined) && (value.avgWidth !== undefined) && (value.nDistinct !== undefined) && (value.mostCommonVals !== undefined) && (value.mostCommonFreqs !== undefined) && (value.histogramBounds !== undefined) && (value.correlation !== undefined) && (value.mostCommonElems !== undefined) && (value.mostCommonElemFreqs !== undefined) && (value.elemCountHistogram !== undefined)
) return true;
return false;
}
}
export namespace PgStatsExt {
export function is(value: any) : value is PgCatalog.Types.PgStatsExt {
if (
(value.schemaname !== undefined) && (value.tablename !== undefined) && (value.statisticsSchemaname !== undefined) && (value.statisticsName !== undefined) && (value.statisticsOwner !== undefined) && (value.attnames !== undefined) && (value.exprs !== undefined) && (value.kinds !== undefined) && (value.inherited !== undefined) && (value.nDistinct !== undefined) && (value.dependencies !== undefined) && (value.mostCommonVals !== undefined) && (value.mostCommonValNulls !== undefined) && (value.mostCommonFreqs !== undefined) && (value.mostCommonBaseFreqs !== undefined)
) return true;
return false;
}
}
export namespace PgStatsExtExprs {
export function is(value: any) : value is PgCatalog.Types.PgStatsExtExprs {
if (
(value.schemaname !== undefined) && (value.tablename !== undefined) && (value.statisticsSchemaname !== undefined) && (value.statisticsName !== undefined) && (value.statisticsOwner !== undefined) && (value.expr !== undefined) && (value.inherited !== undefined) && (value.nullFrac !== undefined) && (value.avgWidth !== undefined) && (value.nDistinct !== undefined) && (value.mostCommonVals !== undefined) && (value.mostCommonFreqs !== undefined) && (value.histogramBounds !== undefined) && (value.correlation !== undefined) && (value.mostCommonElems !== undefined) && (value.mostCommonElemFreqs !== undefined) && (value.elemCountHistogram !== undefined)
) return true;
return false;
}
}
export namespace PgPublicationTables {
export function is(value: any) : value is PgCatalog.Types.PgPublicationTables {
if (
(value.pubname !== undefined) && (value.schemaname !== undefined) && (value.tablename !== undefined) && (value.attnames !== undefined) && (value.rowfilter !== undefined)
) return true;
return false;
}
}
export namespace PgLocks {
export function is(value: any) : value is PgCatalog.Types.PgLocks {
if (
(value.locktype !== undefined) && (value.database !== undefined) && (value.relation !== undefined) && (value.page !== undefined) && (value.tuple !== undefined) && (value.virtualxid !== undefined) && (value.transactionid !== undefined) && (value.classid !== undefined) && (value.objid !== undefined) && (value.objsubid !== undefined) && (value.virtualtransaction !== undefined) && (value.pid !== undefined) && (value.mode !== undefined) && (value.granted !== undefined) && (value.fastpath !== undefined) && (value.waitstart !== undefined)
) return true;
return false;
}
}
export namespace PgCursors {
export function is(value: any) : value is PgCatalog.Types.PgCursors {
if (
(value.name !== undefined) && (value.statement !== undefined) && (value.isHoldable !== undefined) && (value.isBinary !== undefined) && (value.isScrollable !== undefined) && (value.creationTime !== undefined)
) return true;
return false;
}
}
export namespace PgAvailableExtensions {
export function is(value: any) : value is PgCatalog.Types.PgAvailableExtensions {
if (
(value.name !== undefined) && (value.defaultVersion !== undefined) && (value.installedVersion !== undefined) && (value.comment !== undefined)
) return true;
return false;
}
}
export namespace PgAvailableExtensionVersions {
export function is(value: any) : value is PgCatalog.Types.PgAvailableExtensionVersions {
if (
(value.name !== undefined) && (value.version !== undefined) && (value.installed !== undefined) && (value.superuser !== undefined) && (value.trusted !== undefined) && (value.relocatable !== undefined) && (value.schema !== undefined) && (value.requires !== undefined) && (value.comment !== undefined)
) return true;
return false;
}
}
export namespace PgPreparedXacts {
export function is(value: any) : value is PgCatalog.Types.PgPreparedXacts {
if (
(value.transaction !== undefined) && (value.gid !== undefined) && (value.prepared !== undefined) && (value.owner !== undefined) && (value.database !== undefined)
) return true;
return false;
}
}
export namespace PgPreparedStatements {
export function is(value: any) : value is PgCatalog.Types.PgPreparedStatements {
if (
(value.name !== undefined) && (value.statement !== undefined) && (value.prepareTime !== undefined) && (value.parameterTypes !== undefined) && (value.resultTypes !== undefined) && (value.fromSql !== undefined) && (value.genericPlans !== undefined) && (value.customPlans !== undefined)
) return true;
return false;
}
}
export namespace PgSeclabels {
export function is(value: any) : value is PgCatalog.Types.PgSeclabels {
if (
(value.objoid !== undefined) && (value.classoid !== undefined) && (value.objsubid !== undefined) && (value.objtype !== undefined) && (value.objnamespace !== undefined) && (value.objname !== undefined) && (value.provider !== undefined) && (value.label !== undefined)
) return true;
return false;
}
}
export namespace PgSettings {
export function is(value: any) : value is PgCatalog.Types.PgSettings {
if (
(value.name !== undefined) && (value.setting !== undefined) && (value.unit !== undefined) && (value.category !== undefined) && (value.shortDesc !== undefined) && (value.extraDesc !== undefined) && (value.context !== undefined) && (value.vartype !== undefined) && (value.source !== undefined) && (value.minVal !== undefined) && (value.maxVal !== undefined) && (value.enumvals !== undefined) && (value.bootVal !== undefined) && (value.resetVal !== undefined) && (value.sourcefile !== undefined) && (value.sourceline !== undefined) && (value.pendingRestart !== undefined)
) return true;
return false;
}
}
export namespace PgFileSettings {
export function is(value: any) : value is PgCatalog.Types.PgFileSettings {
if (
(value.sourcefile !== undefined) && (value.sourceline !== undefined) && (value.seqno !== undefined) && (value.name !== undefined) && (value.setting !== undefined) && (value.applied !== undefined) && (value.error !== undefined)
) return true;
return false;
}
}
export namespace PgHbaFileRules {
export function is(value: any) : value is PgCatalog.Types.PgHbaFileRules {
if (
(value.ruleNumber !== undefined) && (value.fileName !== undefined) && (value.lineNumber !== undefined) && (value.type !== undefined) && (value.database !== undefined) && (value.userName !== undefined) && (value.address !== undefined) && (value.netmask !== undefined) && (value.authMethod !== undefined) && (value.options !== undefined) && (value.error !== undefined)
) return true;
return false;
}
}
export namespace PgIdentFileMappings {
export function is(value: any) : value is PgCatalog.Types.PgIdentFileMappings {
if (
(value.mapNumber !== undefined) && (value.fileName !== undefined) && (value.lineNumber !== undefined) && (value.mapName !== undefined) && (value.sysName !== undefined) && (value.pgUsername !== undefined) && (value.error !== undefined)
) return true;
return false;
}
}
export namespace PgTimezoneAbbrevs {
export function is(value: any) : value is PgCatalog.Types.PgTimezoneAbbrevs {
if (
(value.abbrev !== undefined) && (value.utcOffset !== undefined) && (value.isDst !== undefined)
) return true;
return false;
}
}
export namespace PgTimezoneNames {
export function is(value: any) : value is PgCatalog.Types.PgTimezoneNames {
if (
(value.name !== undefined) && (value.abbrev !== undefined) && (value.utcOffset !== undefined) && (value.isDst !== undefined)
) return true;
return false;
}
}
export namespace PgConfig {
export function is(value: any) : value is PgCatalog.Types.PgConfig {
if (
(value.name !== undefined) && (value.setting !== undefined)
) return true;
return false;
}
}
export namespace PgShmemAllocations {
export function is(value: any) : value is PgCatalog.Types.PgShmemAllocations {
if (
(value.name !== undefined) && (value.off !== undefined) && (value.size !== undefined) && (value.allocatedSize !== undefined)
) return true;
return false;
}
}
export namespace PgBackendMemoryContexts {
export function is(value: any) : value is PgCatalog.Types.PgBackendMemoryContexts {
if (
(value.name !== undefined) && (value.ident !== undefined) && (value.parent !== undefined) && (value.level !== undefined) && (value.totalBytes !== undefined) && (value.totalNblocks !== undefined) && (value.freeBytes !== undefined) && (value.freeChunks !== undefined) && (value.usedBytes !== undefined)
) return true;
return false;
}
}
export namespace PgStatAllTables {
export function is(value: any) : value is PgCatalog.Types.PgStatAllTables {
if (
(value.relid !== undefined) && (value.schemaname !== undefined) && (value.relname !== undefined) && (value.seqScan !== undefined) && (value.lastSeqScan !== undefined) && (value.seqTupRead !== undefined) && (value.idxScan !== undefined) && (value.lastIdxScan !== undefined) && (value.idxTupFetch !== undefined) && (value.nTupIns !== undefined) && (value.nTupUpd !== undefined) && (value.nTupDel !== undefined) && (value.nTupHotUpd !== undefined) && (value.nTupNewpageUpd !== undefined) && (value.nLiveTup !== undefined) && (value.nDeadTup !== undefined) && (value.nModSinceAnalyze !== undefined) && (value.nInsSinceVacuum !== undefined) && (value.lastVacuum !== undefined) && (value.lastAutovacuum !== undefined) && (value.lastAnalyze !== undefined) && (value.lastAutoanalyze !== undefined) && (value.vacuumCount !== undefined) && (value.autovacuumCount !== undefined) && (value.analyzeCount !== undefined) && (value.autoanalyzeCount !== undefined)
) return true;
return false;
}
}
export namespace PgStatXactAllTables {
export function is(value: any) : value is PgCatalog.Types.PgStatXactAllTables {
if (
(value.relid !== undefined) && (value.schemaname !== undefined) && (value.relname !== undefined) && (value.seqScan !== undefined) && (value.seqTupRead !== undefined) && (value.idxScan !== undefined) && (value.idxTupFetch !== undefined) && (value.nTupIns !== undefined) && (value.nTupUpd !== undefined) && (value.nTupDel !== undefined) && (value.nTupHotUpd !== undefined) && (value.nTupNewpageUpd !== undefined)
) return true;
return false;
}
}
export namespace PgStatSysTables {
export function is(value: any) : value is PgCatalog.Types.PgStatSysTables {
if (
(value.relid !== undefined) && (value.schemaname !== undefined) && (value.relname !== undefined) && (value.seqScan !== undefined) && (value.lastSeqScan !== undefined) && (value.seqTupRead !== undefined) && (value.idxScan !== undefined) && (value.lastIdxScan !== undefined) && (value.idxTupFetch !== undefined) && (value.nTupIns !== undefined) && (value.nTupUpd !== undefined) && (value.nTupDel !== undefined) && (value.nTupHotUpd !== undefined) && (value.nTupNewpageUpd !== undefined) && (value.nLiveTup !== undefined) && (value.nDeadTup !== undefined) && (value.nModSinceAnalyze !== undefined) && (value.nInsSinceVacuum !== undefined) && (value.lastVacuum !== undefined) && (value.lastAutovacuum !== undefined) && (value.lastAnalyze !== undefined) && (value.lastAutoanalyze !== undefined) && (value.vacuumCount !== undefined) && (value.autovacuumCount !== undefined) && (value.analyzeCount !== undefined) && (value.autoanalyzeCount !== undefined)
) return true;
return false;
}
}
export namespace PgStatXactSysTables {
export function is(value: any) : value is PgCatalog.Types.PgStatXactSysTables {
if (
(value.relid !== undefined) && (value.schemaname !== undefined) && (value.relname !== undefined) && (value.seqScan !== undefined) && (value.seqTupRead !== undefined) && (value.idxScan !== undefined) && (value.idxTupFetch !== undefined) && (value.nTupIns !== undefined) && (value.nTupUpd !== undefined) && (value.nTupDel !== undefined) && (value.nTupHotUpd !== undefined) && (value.nTupNewpageUpd !== undefined)
) return true;
return false;
}
}
export namespace PgStatUserTables {
export function is(value: any) : value is PgCatalog.Types.PgStatUserTables {
if (
(value.relid !== undefined) && (value.schemaname !== undefined) && (value.relname !== undefined) && (value.seqScan !== undefined) && (value.lastSeqScan !== undefined) && (value.seqTupRead !== undefined) && (value.idxScan !== undefined) && (value.lastIdxScan !== undefined) && (value.idxTupFetch !== undefined) && (value.nTupIns !== undefined) && (value.nTupUpd !== undefined) && (value.nTupDel !== undefined) && (value.nTupHotUpd !== undefined) && (value.nTupNewpageUpd !== undefined) && (value.nLiveTup !== undefined) && (value.nDeadTup !== undefined) && (value.nModSinceAnalyze !== undefined) && (value.nInsSinceVacuum !== undefined) && (value.lastVacuum !== undefined) && (value.lastAutovacuum !== undefined) && (value.lastAnalyze !== undefined) && (value.lastAutoanalyze !== undefined) && (value.vacuumCount !== undefined) && (value.autovacuumCount !== undefined) && (value.analyzeCount !== undefined) && (value.autoanalyzeCount !== undefined)
) return true;
return false;
}
}
export namespace PgStatXactUserTables {
export function is(value: any) : value is PgCatalog.Types.PgStatXactUserTables {
if (
(value.relid !== undefined) && (value.schemaname !== undefined) && (value.relname !== undefined) && (value.seqScan !== undefined) && (value.seqTupRead !== undefined) && (value.idxScan !== undefined) && (value.idxTupFetch !== undefined) && (value.nTupIns !== undefined) && (value.nTupUpd !== undefined) && (value.nTupDel !== undefined) && (value.nTupHotUpd !== undefined) && (value.nTupNewpageUpd !== undefined)
) return true;
return false;
}
}
export namespace PgStatioAllTables {
export function is(value: any) : value is PgCatalog.Types.PgStatioAllTables {
if (
(value.relid !== undefined) && (value.schemaname !== undefined) && (value.relname !== undefined) && (value.heapBlksRead !== undefined) && (value.heapBlksHit !== undefined) && (value.idxBlksRead !== undefined) && (value.idxBlksHit !== undefined) && (value.toastBlksRead !== undefined) && (value.toastBlksHit !== undefined) && (value.tidxBlksRead !== undefined) && (value.tidxBlksHit !== undefined)
) return true;
return false;
}
}
export namespace PgStatioSysTables {
export function is(value: any) : value is PgCatalog.Types.PgStatioSysTables {
if (
(value.relid !== undefined) && (value.schemaname !== undefined) && (value.relname !== undefined) && (value.heapBlksRead !== undefined) && (value.heapBlksHit !== undefined) && (value.idxBlksRead !== undefined) && (value.idxBlksHit !== undefined) && (value.toastBlksRead !== undefined) && (value.toastBlksHit !== undefined) && (value.tidxBlksRead !== undefined) && (value.tidxBlksHit !== undefined)
) return true;
return false;
}
}
export namespace PgStatioUserTables {
export function is(value: any) : value is PgCatalog.Types.PgStatioUserTables {
if (
(value.relid !== undefined) && (value.schemaname !== undefined) && (value.relname !== undefined) && (value.heapBlksRead !== undefined) && (value.heapBlksHit !== undefined) && (value.idxBlksRead !== undefined) && (value.idxBlksHit !== undefined) && (value.toastBlksRead !== undefined) && (value.toastBlksHit !== undefined) && (value.tidxBlksRead !== undefined) && (value.tidxBlksHit !== undefined)
) return true;
return false;
}
}
export namespace PgStatAllIndexes {
export function is(value: any) : value is PgCatalog.Types.PgStatAllIndexes {
if (
(value.relid !== undefined) && (value.indexrelid !== undefined) && (value.schemaname !== undefined) && (value.relname !== undefined) && (value.indexrelname !== undefined) && (value.idxScan !== undefined) && (value.lastIdxScan !== undefined) && (value.idxTupRead !== undefined) && (value.idxTupFetch !== undefined)
) return true;
return false;
}
}
export namespace PgStatSysIndexes {
export function is(value: any) : value is PgCatalog.Types.PgStatSysIndexes {
if (
(value.relid !== undefined) && (value.indexrelid !== undefined) && (value.schemaname !== undefined) && (value.relname !== undefined) && (value.indexrelname !== undefined) && (value.idxScan !== undefined) && (value.lastIdxScan !== undefined) && (value.idxTupRead !== undefined) && (value.idxTupFetch !== undefined)
) return true;
return false;
}
}
export namespace PgStatUserIndexes {
export function is(value: any) : value is PgCatalog.Types.PgStatUserIndexes {
if (
(value.relid !== undefined) && (value.indexrelid !== undefined) && (value.schemaname !== undefined) && (value.relname !== undefined) && (value.indexrelname !== undefined) && (value.idxScan !== undefined) && (value.lastIdxScan !== undefined) && (value.idxTupRead !== undefined) && (value.idxTupFetch !== undefined)
) return true;
return false;
}
}
export namespace PgStatioAllIndexes {
export function is(value: any) : value is PgCatalog.Types.PgStatioAllIndexes {
if (
(value.relid !== undefined) && (value.indexrelid !== undefined) && (value.schemaname !== undefined) && (value.relname !== undefined) && (value.indexrelname !== undefined) && (value.idxBlksRead !== undefined) && (value.idxBlksHit !== undefined)
) return true;
return false;
}
}
export namespace PgStatioSysIndexes {
export function is(value: any) : value is PgCatalog.Types.PgStatioSysIndexes {
if (
(value.relid !== undefined) && (value.indexrelid !== undefined) && (value.schemaname !== undefined) && (value.relname !== undefined) && (value.indexrelname !== undefined) && (value.idxBlksRead !== undefined) && (value.idxBlksHit !== undefined)
) return true;
return false;
}
}
export namespace PgStatioUserIndexes {
export function is(value: any) : value is PgCatalog.Types.PgStatioUserIndexes {
if (
(value.relid !== undefined) && (value.indexrelid !== undefined) && (value.schemaname !== undefined) && (value.relname !== undefined) && (value.indexrelname !== undefined) && (value.idxBlksRead !== undefined) && (value.idxBlksHit !== undefined)
) return true;
return false;
}
}
export namespace PgStatioAllSequences {
export function is(value: any) : value is PgCatalog.Types.PgStatioAllSequences {
if (
(value.relid !== undefined) && (value.schemaname !== undefined) && (value.relname !== undefined) && (value.blksRead !== undefined) && (value.blksHit !== undefined)
) return true;
return false;
}
}
export namespace PgStatioSysSequences {
export function is(value: any) : value is PgCatalog.Types.PgStatioSysSequences {
if (
(value.relid !== undefined) && (value.schemaname !== undefined) && (value.relname !== undefined) && (value.blksRead !== undefined) && (value.blksHit !== undefined)
) return true;
return false;
}
}
export namespace PgStatioUserSequences {
export function is(value: any) : value is PgCatalog.Types.PgStatioUserSequences {
if (
(value.relid !== undefined) && (value.schemaname !== undefined) && (value.relname !== undefined) && (value.blksRead !== undefined) && (value.blksHit !== undefined)
) return true;
return false;
}
}
export namespace PgStatActivity {
export function is(value: any) : value is PgCatalog.Types.PgStatActivity {
if (
(value.datid !== undefined) && (value.datname !== undefined) && (value.pid !== undefined) && (value.leaderPid !== undefined) && (value.usesysid !== undefined) && (value.usename !== undefined) && (value.applicationName !== undefined) && (value.clientAddr !== undefined) && (value.clientHostname !== undefined) && (value.clientPort !== undefined) && (value.backendStart !== undefined) && (value.xactStart !== undefined) && (value.queryStart !== undefined) && (value.stateChange !== undefined) && (value.waitEventType !== undefined) && (value.waitEvent !== undefined) && (value.state !== undefined) && (value.backendXid !== undefined) && (value.backendXmin !== undefined) && (value.queryId !== undefined) && (value.query !== undefined) && (value.backendType !== undefined)
) return true;
return false;
}
}
export namespace PgStatReplication {
export function is(value: any) : value is PgCatalog.Types.PgStatReplication {
if (
(value.pid !== undefined) && (value.usesysid !== undefined) && (value.usename !== undefined) && (value.applicationName !== undefined) && (value.clientAddr !== undefined) && (value.clientHostname !== undefined) && (value.clientPort !== undefined) && (value.backendStart !== undefined) && (value.backendXmin !== undefined) && (value.state !== undefined) && (value.sentLsn !== undefined) && (value.writeLsn !== undefined) && (value.flushLsn !== undefined) && (value.replayLsn !== undefined) && (value.writeLag !== undefined) && (value.flushLag !== undefined) && (value.replayLag !== undefined) && (value.syncPriority !== undefined) && (value.syncState !== undefined) && (value.replyTime !== undefined)
) return true;
return false;
}
}
export namespace PgStatSlru {
export function is(value: any) : value is PgCatalog.Types.PgStatSlru {
if (
(value.name !== undefined) && (value.blksZeroed !== undefined) && (value.blksHit !== undefined) && (value.blksRead !== undefined) && (value.blksWritten !== undefined) && (value.blksExists !== undefined) && (value.flushes !== undefined) && (value.truncates !== undefined) && (value.statsReset !== undefined)
) return true;
return false;
}
}
export namespace PgStatWalReceiver {
export function is(value: any) : value is PgCatalog.Types.PgStatWalReceiver {
if (
(value.pid !== undefined) && (value.status !== undefined) && (value.receiveStartLsn !== undefined) && (value.receiveStartTli !== undefined) && (value.writtenLsn !== undefined) && (value.flushedLsn !== undefined) && (value.receivedTli !== undefined) && (value.lastMsgSendTime !== undefined) && (value.lastMsgReceiptTime !== undefined) && (value.latestEndLsn !== undefined) && (value.latestEndTime !== undefined) && (value.slotName !== undefined) && (value.senderHost !== undefined) && (value.senderPort !== undefined) && (value.conninfo !== undefined)
) return true;
return false;
}
}
export namespace PgStatRecoveryPrefetch {
export function is(value: any) : value is PgCatalog.Types.PgStatRecoveryPrefetch {
if (
(value.statsReset !== undefined) && (value.prefetch !== undefined) && (value.hit !== undefined) && (value.skipInit !== undefined) && (value.skipNew !== undefined) && (value.skipFpw !== undefined) && (value.skipRep !== undefined) && (value.walDistance !== undefined) && (value.blockDistance !== undefined) && (value.ioDepth !== undefined)
) return true;
return false;
}
}
export namespace PgStatSubscription {
export function is(value: any) : value is PgCatalog.Types.PgStatSubscription {
if (
(value.subid !== undefined) && (value.subname !== undefined) && (value.pid !== undefined) && (value.leaderPid !== undefined) && (value.relid !== undefined) && (value.receivedLsn !== undefined) && (value.lastMsgSendTime !== undefined) && (value.lastMsgReceiptTime !== undefined) && (value.latestEndLsn !== undefined) && (value.latestEndTime !== undefined)
) return true;
return false;
}
}
export namespace PgStatSsl {
export function is(value: any) : value is PgCatalog.Types.PgStatSsl {
if (
(value.pid !== undefined) && (value.ssl !== undefined) && (value.version !== undefined) && (value.cipher !== undefined) && (value.bits !== undefined) && (value.clientDn !== undefined) && (value.clientSerial !== undefined) && (value.issuerDn !== undefined)
) return true;
return false;
}
}
export namespace PgStatGssapi {
export function is(value: any) : value is PgCatalog.Types.PgStatGssapi {
if (
(value.pid !== undefined) && (value.gssAuthenticated !== undefined) && (value.principal !== undefined) && (value.encrypted !== undefined) && (value.credentialsDelegated !== undefined)
) return true;
return false;
}
}
export namespace PgReplicationSlots {
export function is(value: any) : value is PgCatalog.Types.PgReplicationSlots {
if (
(value.slotName !== undefined) && (value.plugin !== undefined) && (value.slotType !== undefined) && (value.datoid !== undefined) && (value.database !== undefined) && (value.temporary !== undefined) && (value.active !== undefined) && (value.activePid !== undefined) && (value.xmin !== undefined) && (value.catalogXmin !== undefined) && (value.restartLsn !== undefined) && (value.confirmedFlushLsn !== undefined) && (value.walStatus !== undefined) && (value.safeWalSize !== undefined) && (value.twoPhase !== undefined) && (value.conflicting !== undefined)
) return true;
return false;
}
}
export namespace PgStatReplicationSlots {
export function is(value: any) : value is PgCatalog.Types.PgStatReplicationSlots {
if (
(value.slotName !== undefined) && (value.spillTxns !== undefined) && (value.spillCount !== undefined) && (value.spillBytes !== undefined) && (value.streamTxns !== undefined) && (value.streamCount !== undefined) && (value.streamBytes !== undefined) && (value.totalTxns !== undefined) && (value.totalBytes !== undefined) && (value.statsReset !== undefined)
) return true;
return false;
}
}
export namespace PgStatDatabase {
export function is(value: any) : value is PgCatalog.Types.PgStatDatabase {
if (
(value.datid !== undefined) && (value.datname !== undefined) && (value.numbackends !== undefined) && (value.xactCommit !== undefined) && (value.xactRollback !== undefined) && (value.blksRead !== undefined) && (value.blksHit !== undefined) && (value.tupReturned !== undefined) && (value.tupFetched !== undefined) && (value.tupInserted !== undefined) && (value.tupUpdated !== undefined) && (value.tupDeleted !== undefined) && (value.conflicts !== undefined) && (value.tempFiles !== undefined) && (value.tempBytes !== undefined) && (value.deadlocks !== undefined) && (value.checksumFailures !== undefined) && (value.checksumLastFailure !== undefined) && (value.blkReadTime !== undefined) && (value.blkWriteTime !== undefined) && (value.sessionTime !== undefined) && (value.activeTime !== undefined) && (value.idleInTransactionTime !== undefined) && (value.sessions !== undefined) && (value.sessionsAbandoned !== undefined) && (value.sessionsFatal !== undefined) && (value.sessionsKilled !== undefined) && (value.statsReset !== undefined)
) return true;
return false;
}
}
export namespace PgStatDatabaseConflicts {
export function is(value: any) : value is PgCatalog.Types.PgStatDatabaseConflicts {
if (
(value.datid !== undefined) && (value.datname !== undefined) && (value.conflTablespace !== undefined) && (value.conflLock !== undefined) && (value.conflSnapshot !== undefined) && (value.conflBufferpin !== undefined) && (value.conflDeadlock !== undefined) && (value.conflActiveLogicalslot !== undefined)
) return true;
return false;
}
}
export namespace PgStatUserFunctions {
export function is(value: any) : value is PgCatalog.Types.PgStatUserFunctions {
if (
(value.funcid !== undefined) && (value.schemaname !== undefined) && (value.funcname !== undefined) && (value.calls !== undefined) && (value.totalTime !== undefined) && (value.selfTime !== undefined)
) return true;
return false;
}
}
export namespace PgStatXactUserFunctions {
export function is(value: any) : value is PgCatalog.Types.PgStatXactUserFunctions {
if (
(value.funcid !== undefined) && (value.schemaname !== undefined) && (value.funcname !== undefined) && (value.calls !== undefined) && (value.totalTime !== undefined) && (value.selfTime !== undefined)
) return true;
return false;
}
}
export namespace PgStatArchiver {
export function is(value: any) : value is PgCatalog.Types.PgStatArchiver {
if (
(value.archivedCount !== undefined) && (value.lastArchivedWal !== undefined) && (value.lastArchivedTime !== undefined) && (value.failedCount !== undefined) && (value.lastFailedWal !== undefined) && (value.lastFailedTime !== undefined) && (value.statsReset !== undefined)
) return true;
return false;
}
}
export namespace PgStatBgwriter {
export function is(value: any) : value is PgCatalog.Types.PgStatBgwriter {
if (
(value.checkpointsTimed !== undefined) && (value.checkpointsReq !== undefined) && (value.checkpointWriteTime !== undefined) && (value.checkpointSyncTime !== undefined) && (value.buffersCheckpoint !== undefined) && (value.buffersClean !== undefined) && (value.maxwrittenClean !== undefined) && (value.buffersBackend !== undefined) && (value.buffersBackendFsync !== undefined) && (value.buffersAlloc !== undefined) && (value.statsReset !== undefined)
) return true;
return false;
}
}
export namespace PgStatIo {
export function is(value: any) : value is PgCatalog.Types.PgStatIo {
if (
(value.backendType !== undefined) && (value.object !== undefined) && (value.context !== undefined) && (value.reads !== undefined) && (value.readTime !== undefined) && (value.writes !== undefined) && (value.writeTime !== undefined) && (value.writebacks !== undefined) && (value.writebackTime !== undefined) && (value.extends !== undefined) && (value.extendTime !== undefined) && (value.opBytes !== undefined) && (value.hits !== undefined) && (value.evictions !== undefined) && (value.reuses !== undefined) && (value.fsyncs !== undefined) && (value.fsyncTime !== undefined) && (value.statsReset !== undefined)
) return true;
return false;
}
}
export namespace PgStatWal {
export function is(value: any) : value is PgCatalog.Types.PgStatWal {
if (
(value.walRecords !== undefined) && (value.walFpi !== undefined) && (value.walBytes !== undefined) && (value.walBuffersFull !== undefined) && (value.walWrite !== undefined) && (value.walSync !== undefined) && (value.walWriteTime !== undefined) && (value.walSyncTime !== undefined) && (value.statsReset !== undefined)
) return true;
return false;
}
}
export namespace PgStatProgressAnalyze {
export function is(value: any) : value is PgCatalog.Types.PgStatProgressAnalyze {
if (
(value.pid !== undefined) && (value.datid !== undefined) && (value.datname !== undefined) && (value.relid !== undefined) && (value.phase !== undefined) && (value.sampleBlksTotal !== undefined) && (value.sampleBlksScanned !== undefined) && (value.extStatsTotal !== undefined) && (value.extStatsComputed !== undefined) && (value.childTablesTotal !== undefined) && (value.childTablesDone !== undefined) && (value.currentChildTableRelid !== undefined)
) return true;
return false;
}
}
export namespace PgStatProgressVacuum {
export function is(value: any) : value is PgCatalog.Types.PgStatProgressVacuum {
if (
(value.pid !== undefined) && (value.datid !== undefined) && (value.datname !== undefined) && (value.relid !== undefined) && (value.phase !== undefined) && (value.heapBlksTotal !== undefined) && (value.heapBlksScanned !== undefined) && (value.heapBlksVacuumed !== undefined) && (value.indexVacuumCount !== undefined) && (value.maxDeadTuples !== undefined) && (value.numDeadTuples !== undefined)
) return true;
return false;
}
}
export namespace PgStatProgressCluster {
export function is(value: any) : value is PgCatalog.Types.PgStatProgressCluster {
if (
(value.pid !== undefined) && (value.datid !== undefined) && (value.datname !== undefined) && (value.relid !== undefined) && (value.command !== undefined) && (value.phase !== undefined) && (value.clusterIndexRelid !== undefined) && (value.heapTuplesScanned !== undefined) && (value.heapTuplesWritten !== undefined) && (value.heapBlksTotal !== undefined) && (value.heapBlksScanned !== undefined) && (value.indexRebuildCount !== undefined)
) return true;
return false;
}
}
export namespace PgStatProgressCreateIndex {
export function is(value: any) : value is PgCatalog.Types.PgStatProgressCreateIndex {
if (
(value.pid !== undefined) && (value.datid !== undefined) && (value.datname !== undefined) && (value.relid !== undefined) && (value.indexRelid !== undefined) && (value.command !== undefined) && (value.phase !== undefined) && (value.lockersTotal !== undefined) && (value.lockersDone !== undefined) && (value.currentLockerPid !== undefined) && (value.blocksTotal !== undefined) && (value.blocksDone !== undefined) && (value.tuplesTotal !== undefined) && (value.tuplesDone !== undefined) && (value.partitionsTotal !== undefined) && (value.partitionsDone !== undefined)
) return true;
return false;
}
}
export namespace PgStatProgressBasebackup {
export function is(value: any) : value is PgCatalog.Types.PgStatProgressBasebackup {
if (
(value.pid !== undefined) && (value.phase !== undefined) && (value.backupTotal !== undefined) && (value.backupStreamed !== undefined) && (value.tablespacesTotal !== undefined) && (value.tablespacesStreamed !== undefined)
) return true;
return false;
}
}
export namespace PgStatProgressCopy {
export function is(value: any) : value is PgCatalog.Types.PgStatProgressCopy {
if (
(value.pid !== undefined) && (value.datid !== undefined) && (value.datname !== undefined) && (value.relid !== undefined) && (value.command !== undefined) && (value.type !== undefined) && (value.bytesProcessed !== undefined) && (value.bytesTotal !== undefined) && (value.tuplesProcessed !== undefined) && (value.tuplesExcluded !== undefined)
) return true;
return false;
}
}
export namespace PgUserMappings {
export function is(value: any) : value is PgCatalog.Types.PgUserMappings {
if (
(value.umid !== undefined) && (value.srvid !== undefined) && (value.srvname !== undefined) && (value.umuser !== undefined) && (value.usename !== undefined) && (value.umoptions !== undefined)
) return true;
return false;
}
}
export namespace PgReplicationOriginStatus {
export function is(value: any) : value is PgCatalog.Types.PgReplicationOriginStatus {
if (
(value.localId !== undefined) && (value.externalId !== undefined) && (value.remoteLsn !== undefined) && (value.localLsn !== undefined)
) return true;
return false;
}
}
export namespace PgStatSubscriptionStats {
export function is(value: any) : value is PgCatalog.Types.PgStatSubscriptionStats {
if (
(value.subid !== undefined) && (value.subname !== undefined) && (value.applyErrorCount !== undefined) && (value.syncErrorCount !== undefined) && (value.statsReset !== undefined)
) return true;
return false;
}
}
export namespace PgProcOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgProcOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgProcPronameArgsNspIndex {
export function is(value: any) : value is PgCatalog.Types.PgProcPronameArgsNspIndex {
if (
(value.proname !== undefined) && (value.proargtypes !== undefined) && (value.pronamespace !== undefined)
) return true;
return false;
}
}
export namespace PgTypeOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgTypeOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgTypeTypnameNspIndex {
export function is(value: any) : value is PgCatalog.Types.PgTypeTypnameNspIndex {
if (
(value.typname !== undefined) && (value.typnamespace !== undefined)
) return true;
return false;
}
}
export namespace PgAttributeRelidAttnamIndex {
export function is(value: any) : value is PgCatalog.Types.PgAttributeRelidAttnamIndex {
if (
(value.attrelid !== undefined) && (value.attname !== undefined)
) return true;
return false;
}
}
export namespace PgAttributeRelidAttnumIndex {
export function is(value: any) : value is PgCatalog.Types.PgAttributeRelidAttnumIndex {
if (
(value.attrelid !== undefined) && (value.attnum !== undefined)
) return true;
return false;
}
}
export namespace PgClassOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgClassOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgClassRelnameNspIndex {
export function is(value: any) : value is PgCatalog.Types.PgClassRelnameNspIndex {
if (
(value.relname !== undefined) && (value.relnamespace !== undefined)
) return true;
return false;
}
}
export namespace PgClassTblspcRelfilenodeIndex {
export function is(value: any) : value is PgCatalog.Types.PgClassTblspcRelfilenodeIndex {
if (
(value.reltablespace !== undefined) && (value.relfilenode !== undefined)
) return true;
return false;
}
}
export namespace PgAttrdefAdrelidAdnumIndex {
export function is(value: any) : value is PgCatalog.Types.PgAttrdefAdrelidAdnumIndex {
if (
(value.adrelid !== undefined) && (value.adnum !== undefined)
) return true;
return false;
}
}
export namespace PgAttrdefOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgAttrdefOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgConstraintConnameNspIndex {
export function is(value: any) : value is PgCatalog.Types.PgConstraintConnameNspIndex {
if (
(value.conname !== undefined) && (value.connamespace !== undefined)
) return true;
return false;
}
}
export namespace PgConstraintConrelidContypidConnameIndex {
export function is(value: any) : value is PgCatalog.Types.PgConstraintConrelidContypidConnameIndex {
if (
(value.conrelid !== undefined) && (value.contypid !== undefined) && (value.conname !== undefined)
) return true;
return false;
}
}
export namespace PgConstraintContypidIndex {
export function is(value: any) : value is PgCatalog.Types.PgConstraintContypidIndex {
if (
(value.contypid !== undefined)
) return true;
return false;
}
}
export namespace PgConstraintOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgConstraintOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgConstraintConparentidIndex {
export function is(value: any) : value is PgCatalog.Types.PgConstraintConparentidIndex {
if (
(value.conparentid !== undefined)
) return true;
return false;
}
}
export namespace PgInheritsRelidSeqnoIndex {
export function is(value: any) : value is PgCatalog.Types.PgInheritsRelidSeqnoIndex {
if (
(value.inhrelid !== undefined) && (value.inhseqno !== undefined)
) return true;
return false;
}
}
export namespace PgInheritsParentIndex {
export function is(value: any) : value is PgCatalog.Types.PgInheritsParentIndex {
if (
(value.inhparent !== undefined)
) return true;
return false;
}
}
export namespace PgIndexIndrelidIndex {
export function is(value: any) : value is PgCatalog.Types.PgIndexIndrelidIndex {
if (
(value.indrelid !== undefined)
) return true;
return false;
}
}
export namespace PgIndexIndexrelidIndex {
export function is(value: any) : value is PgCatalog.Types.PgIndexIndexrelidIndex {
if (
(value.indexrelid !== undefined)
) return true;
return false;
}
}
export namespace PgOperatorOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgOperatorOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgOperatorOprnameLRNIndex {
export function is(value: any) : value is PgCatalog.Types.PgOperatorOprnameLRNIndex {
if (
(value.oprname !== undefined) && (value.oprleft !== undefined) && (value.oprright !== undefined) && (value.oprnamespace !== undefined)
) return true;
return false;
}
}
export namespace PgOpfamilyAmNameNspIndex {
export function is(value: any) : value is PgCatalog.Types.PgOpfamilyAmNameNspIndex {
if (
(value.opfmethod !== undefined) && (value.opfname !== undefined) && (value.opfnamespace !== undefined)
) return true;
return false;
}
}
export namespace PgOpfamilyOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgOpfamilyOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgOpclassAmNameNspIndex {
export function is(value: any) : value is PgCatalog.Types.PgOpclassAmNameNspIndex {
if (
(value.opcmethod !== undefined) && (value.opcname !== undefined) && (value.opcnamespace !== undefined)
) return true;
return false;
}
}
export namespace PgOpclassOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgOpclassOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgAmNameIndex {
export function is(value: any) : value is PgCatalog.Types.PgAmNameIndex {
if (
(value.amname !== undefined)
) return true;
return false;
}
}
export namespace PgAmOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgAmOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgAmopFamStratIndex {
export function is(value: any) : value is PgCatalog.Types.PgAmopFamStratIndex {
if (
(value.amopfamily !== undefined) && (value.amoplefttype !== undefined) && (value.amoprighttype !== undefined) && (value.amopstrategy !== undefined)
) return true;
return false;
}
}
export namespace PgAmopOprFamIndex {
export function is(value: any) : value is PgCatalog.Types.PgAmopOprFamIndex {
if (
(value.amopopr !== undefined) && (value.amoppurpose !== undefined) && (value.amopfamily !== undefined)
) return true;
return false;
}
}
export namespace PgAmopOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgAmopOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgAmprocFamProcIndex {
export function is(value: any) : value is PgCatalog.Types.PgAmprocFamProcIndex {
if (
(value.amprocfamily !== undefined) && (value.amproclefttype !== undefined) && (value.amprocrighttype !== undefined) && (value.amprocnum !== undefined)
) return true;
return false;
}
}
export namespace PgAmprocOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgAmprocOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgLanguageNameIndex {
export function is(value: any) : value is PgCatalog.Types.PgLanguageNameIndex {
if (
(value.lanname !== undefined)
) return true;
return false;
}
}
export namespace PgLanguageOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgLanguageOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgLargeobjectMetadataOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgLargeobjectMetadataOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgLargeobjectLoidPnIndex {
export function is(value: any) : value is PgCatalog.Types.PgLargeobjectLoidPnIndex {
if (
(value.loid !== undefined) && (value.pageno !== undefined)
) return true;
return false;
}
}
export namespace PgAggregateFnoidIndex {
export function is(value: any) : value is PgCatalog.Types.PgAggregateFnoidIndex {
if (
(value.aggfnoid !== undefined)
) return true;
return false;
}
}
export namespace PgStatisticRelidAttInhIndex {
export function is(value: any) : value is PgCatalog.Types.PgStatisticRelidAttInhIndex {
if (
(value.starelid !== undefined) && (value.staattnum !== undefined) && (value.stainherit !== undefined)
) return true;
return false;
}
}
export namespace PgStatisticExtOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgStatisticExtOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgStatisticExtNameIndex {
export function is(value: any) : value is PgCatalog.Types.PgStatisticExtNameIndex {
if (
(value.stxname !== undefined) && (value.stxnamespace !== undefined)
) return true;
return false;
}
}
export namespace PgStatisticExtRelidIndex {
export function is(value: any) : value is PgCatalog.Types.PgStatisticExtRelidIndex {
if (
(value.stxrelid !== undefined)
) return true;
return false;
}
}
export namespace PgStatisticExtDataStxoidInhIndex {
export function is(value: any) : value is PgCatalog.Types.PgStatisticExtDataStxoidInhIndex {
if (
(value.stxoid !== undefined) && (value.stxdinherit !== undefined)
) return true;
return false;
}
}
export namespace PgRewriteOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgRewriteOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgRewriteRelRulenameIndex {
export function is(value: any) : value is PgCatalog.Types.PgRewriteRelRulenameIndex {
if (
(value.evClass !== undefined) && (value.rulename !== undefined)
) return true;
return false;
}
}
export namespace PgTriggerTgconstraintIndex {
export function is(value: any) : value is PgCatalog.Types.PgTriggerTgconstraintIndex {
if (
(value.tgconstraint !== undefined)
) return true;
return false;
}
}
export namespace PgTriggerTgrelidTgnameIndex {
export function is(value: any) : value is PgCatalog.Types.PgTriggerTgrelidTgnameIndex {
if (
(value.tgrelid !== undefined) && (value.tgname !== undefined)
) return true;
return false;
}
}
export namespace PgTriggerOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgTriggerOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgEventTriggerEvtnameIndex {
export function is(value: any) : value is PgCatalog.Types.PgEventTriggerEvtnameIndex {
if (
(value.evtname !== undefined)
) return true;
return false;
}
}
export namespace PgEventTriggerOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgEventTriggerOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgDescriptionOCOIndex {
export function is(value: any) : value is PgCatalog.Types.PgDescriptionOCOIndex {
if (
(value.objoid !== undefined) && (value.classoid !== undefined) && (value.objsubid !== undefined)
) return true;
return false;
}
}
export namespace PgCastOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgCastOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgCastSourceTargetIndex {
export function is(value: any) : value is PgCatalog.Types.PgCastSourceTargetIndex {
if (
(value.castsource !== undefined) && (value.casttarget !== undefined)
) return true;
return false;
}
}
export namespace PgEnumOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgEnumOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgEnumTypidLabelIndex {
export function is(value: any) : value is PgCatalog.Types.PgEnumTypidLabelIndex {
if (
(value.enumtypid !== undefined) && (value.enumlabel !== undefined)
) return true;
return false;
}
}
export namespace PgEnumTypidSortorderIndex {
export function is(value: any) : value is PgCatalog.Types.PgEnumTypidSortorderIndex {
if (
(value.enumtypid !== undefined) && (value.enumsortorder !== undefined)
) return true;
return false;
}
}
export namespace PgNamespaceNspnameIndex {
export function is(value: any) : value is PgCatalog.Types.PgNamespaceNspnameIndex {
if (
(value.nspname !== undefined)
) return true;
return false;
}
}
export namespace PgNamespaceOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgNamespaceOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgConversionDefaultIndex {
export function is(value: any) : value is PgCatalog.Types.PgConversionDefaultIndex {
if (
(value.connamespace !== undefined) && (value.conforencoding !== undefined) && (value.contoencoding !== undefined) && (value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgConversionNameNspIndex {
export function is(value: any) : value is PgCatalog.Types.PgConversionNameNspIndex {
if (
(value.conname !== undefined) && (value.connamespace !== undefined)
) return true;
return false;
}
}
export namespace PgConversionOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgConversionOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgDependDependerIndex {
export function is(value: any) : value is PgCatalog.Types.PgDependDependerIndex {
if (
(value.classid !== undefined) && (value.objid !== undefined) && (value.objsubid !== undefined)
) return true;
return false;
}
}
export namespace PgDependReferenceIndex {
export function is(value: any) : value is PgCatalog.Types.PgDependReferenceIndex {
if (
(value.refclassid !== undefined) && (value.refobjid !== undefined) && (value.refobjsubid !== undefined)
) return true;
return false;
}
}
export namespace PgDatabaseDatnameIndex {
export function is(value: any) : value is PgCatalog.Types.PgDatabaseDatnameIndex {
if (
(value.datname !== undefined)
) return true;
return false;
}
}
export namespace PgDatabaseOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgDatabaseOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgDbRoleSettingDatabaseidRolIndex {
export function is(value: any) : value is PgCatalog.Types.PgDbRoleSettingDatabaseidRolIndex {
if (
(value.setdatabase !== undefined) && (value.setrole !== undefined)
) return true;
return false;
}
}
export namespace PgTablespaceOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgTablespaceOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgTablespaceSpcnameIndex {
export function is(value: any) : value is PgCatalog.Types.PgTablespaceSpcnameIndex {
if (
(value.spcname !== undefined)
) return true;
return false;
}
}
export namespace PgAuthidRolnameIndex {
export function is(value: any) : value is PgCatalog.Types.PgAuthidRolnameIndex {
if (
(value.rolname !== undefined)
) return true;
return false;
}
}
export namespace PgAuthidOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgAuthidOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgAuthMembersOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgAuthMembersOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgAuthMembersRoleMemberIndex {
export function is(value: any) : value is PgCatalog.Types.PgAuthMembersRoleMemberIndex {
if (
(value.roleid !== undefined) && (value.member !== undefined) && (value.grantor !== undefined)
) return true;
return false;
}
}
export namespace PgAuthMembersMemberRoleIndex {
export function is(value: any) : value is PgCatalog.Types.PgAuthMembersMemberRoleIndex {
if (
(value.member !== undefined) && (value.roleid !== undefined) && (value.grantor !== undefined)
) return true;
return false;
}
}
export namespace PgAuthMembersGrantorIndex {
export function is(value: any) : value is PgCatalog.Types.PgAuthMembersGrantorIndex {
if (
(value.grantor !== undefined)
) return true;
return false;
}
}
export namespace PgShdependDependerIndex {
export function is(value: any) : value is PgCatalog.Types.PgShdependDependerIndex {
if (
(value.dbid !== undefined) && (value.classid !== undefined) && (value.objid !== undefined) && (value.objsubid !== undefined)
) return true;
return false;
}
}
export namespace PgShdependReferenceIndex {
export function is(value: any) : value is PgCatalog.Types.PgShdependReferenceIndex {
if (
(value.refclassid !== undefined) && (value.refobjid !== undefined)
) return true;
return false;
}
}
export namespace PgShdescriptionOCIndex {
export function is(value: any) : value is PgCatalog.Types.PgShdescriptionOCIndex {
if (
(value.objoid !== undefined) && (value.classoid !== undefined)
) return true;
return false;
}
}
export namespace PgTsConfigCfgnameIndex {
export function is(value: any) : value is PgCatalog.Types.PgTsConfigCfgnameIndex {
if (
(value.cfgname !== undefined) && (value.cfgnamespace !== undefined)
) return true;
return false;
}
}
export namespace PgTsConfigOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgTsConfigOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgTsConfigMapIndex {
export function is(value: any) : value is PgCatalog.Types.PgTsConfigMapIndex {
if (
(value.mapcfg !== undefined) && (value.maptokentype !== undefined) && (value.mapseqno !== undefined)
) return true;
return false;
}
}
export namespace PgTsDictDictnameIndex {
export function is(value: any) : value is PgCatalog.Types.PgTsDictDictnameIndex {
if (
(value.dictname !== undefined) && (value.dictnamespace !== undefined)
) return true;
return false;
}
}
export namespace PgTsDictOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgTsDictOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgTsParserPrsnameIndex {
export function is(value: any) : value is PgCatalog.Types.PgTsParserPrsnameIndex {
if (
(value.prsname !== undefined) && (value.prsnamespace !== undefined)
) return true;
return false;
}
}
export namespace PgTsParserOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgTsParserOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgTsTemplateTmplnameIndex {
export function is(value: any) : value is PgCatalog.Types.PgTsTemplateTmplnameIndex {
if (
(value.tmplname !== undefined) && (value.tmplnamespace !== undefined)
) return true;
return false;
}
}
export namespace PgTsTemplateOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgTsTemplateOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgExtensionOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgExtensionOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgExtensionNameIndex {
export function is(value: any) : value is PgCatalog.Types.PgExtensionNameIndex {
if (
(value.extname !== undefined)
) return true;
return false;
}
}
export namespace PgForeignDataWrapperOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgForeignDataWrapperOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgForeignDataWrapperNameIndex {
export function is(value: any) : value is PgCatalog.Types.PgForeignDataWrapperNameIndex {
if (
(value.fdwname !== undefined)
) return true;
return false;
}
}
export namespace PgForeignServerOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgForeignServerOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgForeignServerNameIndex {
export function is(value: any) : value is PgCatalog.Types.PgForeignServerNameIndex {
if (
(value.srvname !== undefined)
) return true;
return false;
}
}
export namespace PgUserMappingOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgUserMappingOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgUserMappingUserServerIndex {
export function is(value: any) : value is PgCatalog.Types.PgUserMappingUserServerIndex {
if (
(value.umuser !== undefined) && (value.umserver !== undefined)
) return true;
return false;
}
}
export namespace PgForeignTableRelidIndex {
export function is(value: any) : value is PgCatalog.Types.PgForeignTableRelidIndex {
if (
(value.ftrelid !== undefined)
) return true;
return false;
}
}
export namespace PgPolicyOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgPolicyOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgPolicyPolrelidPolnameIndex {
export function is(value: any) : value is PgCatalog.Types.PgPolicyPolrelidPolnameIndex {
if (
(value.polrelid !== undefined) && (value.polname !== undefined)
) return true;
return false;
}
}
export namespace PgReplicationOriginRoiidentIndex {
export function is(value: any) : value is PgCatalog.Types.PgReplicationOriginRoiidentIndex {
if (
(value.roident !== undefined)
) return true;
return false;
}
}
export namespace PgReplicationOriginRonameIndex {
export function is(value: any) : value is PgCatalog.Types.PgReplicationOriginRonameIndex {
if (
(value.roname !== undefined)
) return true;
return false;
}
}
export namespace PgDefaultAclRoleNspObjIndex {
export function is(value: any) : value is PgCatalog.Types.PgDefaultAclRoleNspObjIndex {
if (
(value.defaclrole !== undefined) && (value.defaclnamespace !== undefined) && (value.defaclobjtype !== undefined)
) return true;
return false;
}
}
export namespace PgDefaultAclOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgDefaultAclOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgInitPrivsOCOIndex {
export function is(value: any) : value is PgCatalog.Types.PgInitPrivsOCOIndex {
if (
(value.objoid !== undefined) && (value.classoid !== undefined) && (value.objsubid !== undefined)
) return true;
return false;
}
}
export namespace PgSeclabelObjectIndex {
export function is(value: any) : value is PgCatalog.Types.PgSeclabelObjectIndex {
if (
(value.objoid !== undefined) && (value.classoid !== undefined) && (value.objsubid !== undefined) && (value.provider !== undefined)
) return true;
return false;
}
}
export namespace PgShseclabelObjectIndex {
export function is(value: any) : value is PgCatalog.Types.PgShseclabelObjectIndex {
if (
(value.objoid !== undefined) && (value.classoid !== undefined) && (value.provider !== undefined)
) return true;
return false;
}
}
export namespace PgCollationNameEncNspIndex {
export function is(value: any) : value is PgCatalog.Types.PgCollationNameEncNspIndex {
if (
(value.collname !== undefined) && (value.collencoding !== undefined) && (value.collnamespace !== undefined)
) return true;
return false;
}
}
export namespace PgCollationOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgCollationOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgParameterAclParnameIndex {
export function is(value: any) : value is PgCatalog.Types.PgParameterAclParnameIndex {
if (
(value.parname !== undefined)
) return true;
return false;
}
}
export namespace PgParameterAclOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgParameterAclOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgPartitionedTablePartrelidIndex {
export function is(value: any) : value is PgCatalog.Types.PgPartitionedTablePartrelidIndex {
if (
(value.partrelid !== undefined)
) return true;
return false;
}
}
export namespace PgRangeRngtypidIndex {
export function is(value: any) : value is PgCatalog.Types.PgRangeRngtypidIndex {
if (
(value.rngtypid !== undefined)
) return true;
return false;
}
}
export namespace PgRangeRngmultitypidIndex {
export function is(value: any) : value is PgCatalog.Types.PgRangeRngmultitypidIndex {
if (
(value.rngmultitypid !== undefined)
) return true;
return false;
}
}
export namespace PgTransformOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgTransformOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgTransformTypeLangIndex {
export function is(value: any) : value is PgCatalog.Types.PgTransformTypeLangIndex {
if (
(value.trftype !== undefined) && (value.trflang !== undefined)
) return true;
return false;
}
}
export namespace PgSequenceSeqrelidIndex {
export function is(value: any) : value is PgCatalog.Types.PgSequenceSeqrelidIndex {
if (
(value.seqrelid !== undefined)
) return true;
return false;
}
}
export namespace PgPublicationOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgPublicationOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgPublicationPubnameIndex {
export function is(value: any) : value is PgCatalog.Types.PgPublicationPubnameIndex {
if (
(value.pubname !== undefined)
) return true;
return false;
}
}
export namespace PgPublicationNamespaceOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgPublicationNamespaceOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgPublicationNamespacePnnspidPnpubidIndex {
export function is(value: any) : value is PgCatalog.Types.PgPublicationNamespacePnnspidPnpubidIndex {
if (
(value.pnnspid !== undefined) && (value.pnpubid !== undefined)
) return true;
return false;
}
}
export namespace PgPublicationRelOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgPublicationRelOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgPublicationRelPrrelidPrpubidIndex {
export function is(value: any) : value is PgCatalog.Types.PgPublicationRelPrrelidPrpubidIndex {
if (
(value.prrelid !== undefined) && (value.prpubid !== undefined)
) return true;
return false;
}
}
export namespace PgPublicationRelPrpubidIndex {
export function is(value: any) : value is PgCatalog.Types.PgPublicationRelPrpubidIndex {
if (
(value.prpubid !== undefined)
) return true;
return false;
}
}
export namespace PgSubscriptionOidIndex {
export function is(value: any) : value is PgCatalog.Types.PgSubscriptionOidIndex {
if (
(value.oid !== undefined)
) return true;
return false;
}
}
export namespace PgSubscriptionSubnameIndex {
export function is(value: any) : value is PgCatalog.Types.PgSubscriptionSubnameIndex {
if (
(value.subdbid !== undefined) && (value.subname !== undefined)
) return true;
return false;
}
}
export namespace PgSubscriptionRelSrrelidSrsubidIndex {
export function is(value: any) : value is PgCatalog.Types.PgSubscriptionRelSrrelidSrsubidIndex {
if (
(value.srrelid !== undefined) && (value.srsubid !== undefined)
) return true;
return false;
}
}
}
export namespace Procedures {
}
export namespace Tables {
export namespace PgStatistic {
}
export namespace PgType {
}
export namespace PgForeignTable {
}
export namespace PgAuthid {
}
export namespace PgStatisticExtData {
}
export namespace PgUserMapping {
}
export namespace PgSubscription {
}
export namespace PgAttribute {
}
export namespace PgProc {
}
export namespace PgClass {
}
export namespace PgAttrdef {
}
export namespace PgConstraint {
}
export namespace PgInherits {
}
export namespace PgIndex {
}
export namespace PgOperator {
}
export namespace PgOpfamily {
}
export namespace PgOpclass {
}
export namespace PgAm {
}
export namespace PgAmop {
}
export namespace PgAmproc {
}
export namespace PgLanguage {
}
export namespace PgLargeobjectMetadata {
}
export namespace PgAggregate {
}
export namespace PgStatisticExt {
}
export namespace PgRewrite {
}
export namespace PgTrigger {
}
export namespace PgEventTrigger {
}
export namespace PgDescription {
}
export namespace PgCast {
}
export namespace PgEnum {
}
export namespace PgNamespace {
}
export namespace PgConversion {
}
export namespace PgDepend {
}
export namespace PgDatabase {
}
export namespace PgDbRoleSetting {
}
export namespace PgTablespace {
}
export namespace PgAuthMembers {
}
export namespace PgShdepend {
}
export namespace PgShdescription {
}
export namespace PgTsConfig {
}
export namespace PgTsConfigMap {
}
export namespace PgTsDict {
}
export namespace PgTsParser {
}
export namespace PgTsTemplate {
}
export namespace PgExtension {
}
export namespace PgForeignDataWrapper {
}
export namespace PgForeignServer {
}
export namespace PgPolicy {
}
export namespace PgReplicationOrigin {
}
export namespace PgDefaultAcl {
}
export namespace PgInitPrivs {
}
export namespace PgSeclabel {
}
export namespace PgShseclabel {
}
export namespace PgCollation {
}
export namespace PgParameterAcl {
}
export namespace PgPartitionedTable {
}
export namespace PgRange {
}
export namespace PgTransform {
}
export namespace PgSequence {
}
export namespace PgPublication {
}
export namespace PgPublicationNamespace {
}
export namespace PgPublicationRel {
}
export namespace PgSubscriptionRel {
}
export namespace PgLargeobject {
}
}
}
export namespace InformationSchema {
export namespace Types {
export namespace InformationSchemaCatalogName {
export function is(value: any) : value is InformationSchema.Types.InformationSchemaCatalogName {
if (
(value.catalogName !== undefined)
) return true;
return false;
}
}
export namespace ApplicableRoles {
export function is(value: any) : value is InformationSchema.Types.ApplicableRoles {
if (
(value.grantee !== undefined) && (value.roleName !== undefined) && (value.isGrantable !== undefined)
) return true;
return false;
}
}
export namespace AdministrableRoleAuthorizations {
export function is(value: any) : value is InformationSchema.Types.AdministrableRoleAuthorizations {
if (
(value.grantee !== undefined) && (value.roleName !== undefined) && (value.isGrantable !== undefined)
) return true;
return false;
}
}
export namespace Attributes {
export function is(value: any) : value is InformationSchema.Types.Attributes {
if (
(value.udtCatalog !== undefined) && (value.udtSchema !== undefined) && (value.udtName !== undefined) && (value.attributeName !== undefined) && (value.ordinalPosition !== undefined) && (value.attributeDefault !== undefined) && (value.isNullable !== undefined) && (value.dataType !== undefined) && (value.characterMaximumLength !== undefined) && (value.characterOctetLength !== undefined) && (value.characterSetCatalog !== undefined) && (value.characterSetSchema !== undefined) && (value.characterSetName !== undefined) && (value.collationCatalog !== undefined) && (value.collationSchema !== undefined) && (value.collationName !== undefined) && (value.numericPrecision !== undefined) && (value.numericPrecisionRadix !== undefined) && (value.numericScale !== undefined) && (value.datetimePrecision !== undefined) && (value.intervalType !== undefined) && (value.intervalPrecision !== undefined) && (value.attributeUdtCatalog !== undefined) && (value.attributeUdtSchema !== undefined) && (value.attributeUdtName !== undefined) && (value.scopeCatalog !== undefined) && (value.scopeSchema !== undefined) && (value.scopeName !== undefined) && (value.maximumCardinality !== undefined) && (value.dtdIdentifier !== undefined) && (value.isDerivedReferenceAttribute !== undefined)
) return true;
return false;
}
}
export namespace CharacterSets {
export function is(value: any) : value is InformationSchema.Types.CharacterSets {
if (
(value.characterSetCatalog !== undefined) && (value.characterSetSchema !== undefined) && (value.characterSetName !== undefined) && (value.characterRepertoire !== undefined) && (value.formOfUse !== undefined) && (value.defaultCollateCatalog !== undefined) && (value.defaultCollateSchema !== undefined) && (value.defaultCollateName !== undefined)
) return true;
return false;
}
}
export namespace CheckConstraintRoutineUsage {
export function is(value: any) : value is InformationSchema.Types.CheckConstraintRoutineUsage {
if (
(value.constraintCatalog !== undefined) && (value.constraintSchema !== undefined) && (value.constraintName !== undefined) && (value.specificCatalog !== undefined) && (value.specificSchema !== undefined) && (value.specificName !== undefined)
) return true;
return false;
}
}
export namespace CheckConstraints {
export function is(value: any) : value is InformationSchema.Types.CheckConstraints {
if (
(value.constraintCatalog !== undefined) && (value.constraintSchema !== undefined) && (value.constraintName !== undefined) && (value.checkClause !== undefined)
) return true;
return false;
}
}
export namespace Collations {
export function is(value: any) : value is InformationSchema.Types.Collations {
if (
(value.collationCatalog !== undefined) && (value.collationSchema !== undefined) && (value.collationName !== undefined) && (value.padAttribute !== undefined)
) return true;
return false;
}
}
export namespace CollationCharacterSetApplicability {
export function is(value: any) : value is InformationSchema.Types.CollationCharacterSetApplicability {
if (
(value.collationCatalog !== undefined) && (value.collationSchema !== undefined) && (value.collationName !== undefined) && (value.characterSetCatalog !== undefined) && (value.characterSetSchema !== undefined) && (value.characterSetName !== undefined)
) return true;
return false;
}
}
export namespace ColumnColumnUsage {
export function is(value: any) : value is InformationSchema.Types.ColumnColumnUsage {
if (
(value.tableCatalog !== undefined) && (value.tableSchema !== undefined) && (value.tableName !== undefined) && (value.columnName !== undefined) && (value.dependentColumn !== undefined)
) return true;
return false;
}
}
export namespace ColumnDomainUsage {
export function is(value: any) : value is InformationSchema.Types.ColumnDomainUsage {
if (
(value.domainCatalog !== undefined) && (value.domainSchema !== undefined) && (value.domainName !== undefined) && (value.tableCatalog !== undefined) && (value.tableSchema !== undefined) && (value.tableName !== undefined) && (value.columnName !== undefined)
) return true;
return false;
}
}
export namespace ColumnPrivileges {
export function is(value: any) : value is InformationSchema.Types.ColumnPrivileges {
if (
(value.grantor !== undefined) && (value.grantee !== undefined) && (value.tableCatalog !== undefined) && (value.tableSchema !== undefined) && (value.tableName !== undefined) && (value.columnName !== undefined) && (value.privilegeType !== undefined) && (value.isGrantable !== undefined)
) return true;
return false;
}
}
export namespace ColumnUdtUsage {
export function is(value: any) : value is InformationSchema.Types.ColumnUdtUsage {
if (
(value.udtCatalog !== undefined) && (value.udtSchema !== undefined) && (value.udtName !== undefined) && (value.tableCatalog !== undefined) && (value.tableSchema !== undefined) && (value.tableName !== undefined) && (value.columnName !== undefined)
) return true;
return false;
}
}
export namespace Columns {
export function is(value: any) : value is InformationSchema.Types.Columns {
if (
(value.tableCatalog !== undefined) && (value.tableSchema !== undefined) && (value.tableName !== undefined) && (value.columnName !== undefined) && (value.ordinalPosition !== undefined) && (value.columnDefault !== undefined) && (value.isNullable !== undefined) && (value.dataType !== undefined) && (value.characterMaximumLength !== undefined) && (value.characterOctetLength !== undefined) && (value.numericPrecision !== undefined) && (value.numericPrecisionRadix !== undefined) && (value.numericScale !== undefined) && (value.datetimePrecision !== undefined) && (value.intervalType !== undefined) && (value.intervalPrecision !== undefined) && (value.characterSetCatalog !== undefined) && (value.characterSetSchema !== undefined) && (value.characterSetName !== undefined) && (value.collationCatalog !== undefined) && (value.collationSchema !== undefined) && (value.collationName !== undefined) && (value.domainCatalog !== undefined) && (value.domainSchema !== undefined) && (value.domainName !== undefined) && (value.udtCatalog !== undefined) && (value.udtSchema !== undefined) && (value.udtName !== undefined) && (value.scopeCatalog !== undefined) && (value.scopeSchema !== undefined) && (value.scopeName !== undefined) && (value.maximumCardinality !== undefined) && (value.dtdIdentifier !== undefined) && (value.isSelfReferencing !== undefined) && (value.isIdentity !== undefined) && (value.identityGeneration !== undefined) && (value.identityStart !== undefined) && (value.identityIncrement !== undefined) && (value.identityMaximum !== undefined) && (value.identityMinimum !== undefined) && (value.identityCycle !== undefined) && (value.isGenerated !== undefined) && (value.generationExpression !== undefined) && (value.isUpdatable !== undefined)
) return true;
return false;
}
}
export namespace ConstraintColumnUsage {
export function is(value: any) : value is InformationSchema.Types.ConstraintColumnUsage {
if (
(value.tableCatalog !== undefined) && (value.tableSchema !== undefined) && (value.tableName !== undefined) && (value.columnName !== undefined) && (value.constraintCatalog !== undefined) && (value.constraintSchema !== undefined) && (value.constraintName !== undefined)
) return true;
return false;
}
}
export namespace ConstraintTableUsage {
export function is(value: any) : value is InformationSchema.Types.ConstraintTableUsage {
if (
(value.tableCatalog !== undefined) && (value.tableSchema !== undefined) && (value.tableName !== undefined) && (value.constraintCatalog !== undefined) && (value.constraintSchema !== undefined) && (value.constraintName !== undefined)
) return true;
return false;
}
}
export namespace DomainConstraints {
export function is(value: any) : value is InformationSchema.Types.DomainConstraints {
if (
(value.constraintCatalog !== undefined) && (value.constraintSchema !== undefined) && (value.constraintName !== undefined) && (value.domainCatalog !== undefined) && (value.domainSchema !== undefined) && (value.domainName !== undefined) && (value.isDeferrable !== undefined) && (value.initiallyDeferred !== undefined)
) return true;
return false;
}
}
export namespace DomainUdtUsage {
export function is(value: any) : value is InformationSchema.Types.DomainUdtUsage {
if (
(value.udtCatalog !== undefined) && (value.udtSchema !== undefined) && (value.udtName !== undefined) && (value.domainCatalog !== undefined) && (value.domainSchema !== undefined) && (value.domainName !== undefined)
) return true;
return false;
}
}
export namespace Domains {
export function is(value: any) : value is InformationSchema.Types.Domains {
if (
(value.domainCatalog !== undefined) && (value.domainSchema !== undefined) && (value.domainName !== undefined) && (value.dataType !== undefined) && (value.characterMaximumLength !== undefined) && (value.characterOctetLength !== undefined) && (value.characterSetCatalog !== undefined) && (value.characterSetSchema !== undefined) && (value.characterSetName !== undefined) && (value.collationCatalog !== undefined) && (value.collationSchema !== undefined) && (value.collationName !== undefined) && (value.numericPrecision !== undefined) && (value.numericPrecisionRadix !== undefined) && (value.numericScale !== undefined) && (value.datetimePrecision !== undefined) && (value.intervalType !== undefined) && (value.intervalPrecision !== undefined) && (value.domainDefault !== undefined) && (value.udtCatalog !== undefined) && (value.udtSchema !== undefined) && (value.udtName !== undefined) && (value.scopeCatalog !== undefined) && (value.scopeSchema !== undefined) && (value.scopeName !== undefined) && (value.maximumCardinality !== undefined) && (value.dtdIdentifier !== undefined)
) return true;
return false;
}
}
export namespace EnabledRoles {
export function is(value: any) : value is InformationSchema.Types.EnabledRoles {
if (
(value.roleName !== undefined)
) return true;
return false;
}
}
export namespace KeyColumnUsage {
export function is(value: any) : value is InformationSchema.Types.KeyColumnUsage {
if (
(value.constraintCatalog !== undefined) && (value.constraintSchema !== undefined) && (value.constraintName !== undefined) && (value.tableCatalog !== undefined) && (value.tableSchema !== undefined) && (value.tableName !== undefined) && (value.columnName !== undefined) && (value.ordinalPosition !== undefined) && (value.positionInUniqueConstraint !== undefined)
) return true;
return false;
}
}
export namespace Parameters {
export function is(value: any) : value is InformationSchema.Types.Parameters {
if (
(value.specificCatalog !== undefined) && (value.specificSchema !== undefined) && (value.specificName !== undefined) && (value.ordinalPosition !== undefined) && (value.parameterMode !== undefined) && (value.isResult !== undefined) && (value.asLocator !== undefined) && (value.parameterName !== undefined) && (value.dataType !== undefined) && (value.characterMaximumLength !== undefined) && (value.characterOctetLength !== undefined) && (value.characterSetCatalog !== undefined) && (value.characterSetSchema !== undefined) && (value.characterSetName !== undefined) && (value.collationCatalog !== undefined) && (value.collationSchema !== undefined) && (value.collationName !== undefined) && (value.numericPrecision !== undefined) && (value.numericPrecisionRadix !== undefined) && (value.numericScale !== undefined) && (value.datetimePrecision !== undefined) && (value.intervalType !== undefined) && (value.intervalPrecision !== undefined) && (value.udtCatalog !== undefined) && (value.udtSchema !== undefined) && (value.udtName !== undefined) && (value.scopeCatalog !== undefined) && (value.scopeSchema !== undefined) && (value.scopeName !== undefined) && (value.maximumCardinality !== undefined) && (value.dtdIdentifier !== undefined) && (value.parameterDefault !== undefined)
) return true;
return false;
}
}
export namespace ReferentialConstraints {
export function is(value: any) : value is InformationSchema.Types.ReferentialConstraints {
if (
(value.constraintCatalog !== undefined) && (value.constraintSchema !== undefined) && (value.constraintName !== undefined) && (value.uniqueConstraintCatalog !== undefined) && (value.uniqueConstraintSchema !== undefined) && (value.uniqueConstraintName !== undefined) && (value.matchOption !== undefined) && (value.updateRule !== undefined) && (value.deleteRule !== undefined)
) return true;
return false;
}
}
export namespace RoleColumnGrants {
export function is(value: any) : value is InformationSchema.Types.RoleColumnGrants {
if (
(value.grantor !== undefined) && (value.grantee !== undefined) && (value.tableCatalog !== undefined) && (value.tableSchema !== undefined) && (value.tableName !== undefined) && (value.columnName !== undefined) && (value.privilegeType !== undefined) && (value.isGrantable !== undefined)
) return true;
return false;
}
}
export namespace RoutineColumnUsage {
export function is(value: any) : value is InformationSchema.Types.RoutineColumnUsage {
if (
(value.specificCatalog !== undefined) && (value.specificSchema !== undefined) && (value.specificName !== undefined) && (value.routineCatalog !== undefined) && (value.routineSchema !== undefined) && (value.routineName !== undefined) && (value.tableCatalog !== undefined) && (value.tableSchema !== undefined) && (value.tableName !== undefined) && (value.columnName !== undefined)
) return true;
return false;
}
}
export namespace RoutinePrivileges {
export function is(value: any) : value is InformationSchema.Types.RoutinePrivileges {
if (
(value.grantor !== undefined) && (value.grantee !== undefined) && (value.specificCatalog !== undefined) && (value.specificSchema !== undefined) && (value.specificName !== undefined) && (value.routineCatalog !== undefined) && (value.routineSchema !== undefined) && (value.routineName !== undefined) && (value.privilegeType !== undefined) && (value.isGrantable !== undefined)
) return true;
return false;
}
}
export namespace RoleRoutineGrants {
export function is(value: any) : value is InformationSchema.Types.RoleRoutineGrants {
if (
(value.grantor !== undefined) && (value.grantee !== undefined) && (value.specificCatalog !== undefined) && (value.specificSchema !== undefined) && (value.specificName !== undefined) && (value.routineCatalog !== undefined) && (value.routineSchema !== undefined) && (value.routineName !== undefined) && (value.privilegeType !== undefined) && (value.isGrantable !== undefined)
) return true;
return false;
}
}
export namespace RoutineRoutineUsage {
export function is(value: any) : value is InformationSchema.Types.RoutineRoutineUsage {
if (
(value.specificCatalog !== undefined) && (value.specificSchema !== undefined) && (value.specificName !== undefined) && (value.routineCatalog !== undefined) && (value.routineSchema !== undefined) && (value.routineName !== undefined)
) return true;
return false;
}
}
export namespace RoutineSequenceUsage {
export function is(value: any) : value is InformationSchema.Types.RoutineSequenceUsage {
if (
(value.specificCatalog !== undefined) && (value.specificSchema !== undefined) && (value.specificName !== undefined) && (value.routineCatalog !== undefined) && (value.routineSchema !== undefined) && (value.routineName !== undefined) && (value.sequenceCatalog !== undefined) && (value.sequenceSchema !== undefined) && (value.sequenceName !== undefined)
) return true;
return false;
}
}
export namespace RoutineTableUsage {
export function is(value: any) : value is InformationSchema.Types.RoutineTableUsage {
if (
(value.specificCatalog !== undefined) && (value.specificSchema !== undefined) && (value.specificName !== undefined) && (value.routineCatalog !== undefined) && (value.routineSchema !== undefined) && (value.routineName !== undefined) && (value.tableCatalog !== undefined) && (value.tableSchema !== undefined) && (value.tableName !== undefined)
) return true;
return false;
}
}
export namespace Routines {
export function is(value: any) : value is InformationSchema.Types.Routines {
if (
(value.specificCatalog !== undefined) && (value.specificSchema !== undefined) && (value.specificName !== undefined) && (value.routineCatalog !== undefined) && (value.routineSchema !== undefined) && (value.routineName !== undefined) && (value.routineType !== undefined) && (value.moduleCatalog !== undefined) && (value.moduleSchema !== undefined) && (value.moduleName !== undefined) && (value.udtCatalog !== undefined) && (value.udtSchema !== undefined) && (value.udtName !== undefined) && (value.dataType !== undefined) && (value.characterMaximumLength !== undefined) && (value.characterOctetLength !== undefined) && (value.characterSetCatalog !== undefined) && (value.characterSetSchema !== undefined) && (value.characterSetName !== undefined) && (value.collationCatalog !== undefined) && (value.collationSchema !== undefined) && (value.collationName !== undefined) && (value.numericPrecision !== undefined) && (value.numericPrecisionRadix !== undefined) && (value.numericScale !== undefined) && (value.datetimePrecision !== undefined) && (value.intervalType !== undefined) && (value.intervalPrecision !== undefined) && (value.typeUdtCatalog !== undefined) && (value.typeUdtSchema !== undefined) && (value.typeUdtName !== undefined) && (value.scopeCatalog !== undefined) && (value.scopeSchema !== undefined) && (value.scopeName !== undefined) && (value.maximumCardinality !== undefined) && (value.dtdIdentifier !== undefined) && (value.routineBody !== undefined) && (value.routineDefinition !== undefined) && (value.externalName !== undefined) && (value.externalLanguage !== undefined) && (value.parameterStyle !== undefined) && (value.isDeterministic !== undefined) && (value.sqlDataAccess !== undefined) && (value.isNullCall !== undefined) && (value.sqlPath !== undefined) && (value.schemaLevelRoutine !== undefined) && (value.maxDynamicResultSets !== undefined) && (value.isUserDefinedCast !== undefined) && (value.isImplicitlyInvocable !== undefined) && (value.securityType !== undefined) && (value.toSqlSpecificCatalog !== undefined) && (value.toSqlSpecificSchema !== undefined) && (value.toSqlSpecificName !== undefined) && (value.asLocator !== undefined) && (value.created !== undefined) && (value.lastAltered !== undefined) && (value.newSavepointLevel !== undefined) && (value.isUdtDependent !== undefined) && (value.resultCastFromDataType !== undefined) && (value.resultCastAsLocator !== undefined) && (value.resultCastCharMaxLength !== undefined) && (value.resultCastCharOctetLength !== undefined) && (value.resultCastCharSetCatalog !== undefined) && (value.resultCastCharSetSchema !== undefined) && (value.resultCastCharSetName !== undefined) && (value.resultCastCollationCatalog !== undefined) && (value.resultCastCollationSchema !== undefined) && (value.resultCastCollationName !== undefined) && (value.resultCastNumericPrecision !== undefined) && (value.resultCastNumericPrecisionRadix !== undefined) && (value.resultCastNumericScale !== undefined) && (value.resultCastDatetimePrecision !== undefined) && (value.resultCastIntervalType !== undefined) && (value.resultCastIntervalPrecision !== undefined) && (value.resultCastTypeUdtCatalog !== undefined) && (value.resultCastTypeUdtSchema !== undefined) && (value.resultCastTypeUdtName !== undefined) && (value.resultCastScopeCatalog !== undefined) && (value.resultCastScopeSchema !== undefined) && (value.resultCastScopeName !== undefined) && (value.resultCastMaximumCardinality !== undefined) && (value.resultCastDtdIdentifier !== undefined)
) return true;
return false;
}
}
export namespace Schemata {
export function is(value: any) : value is InformationSchema.Types.Schemata {
if (
(value.catalogName !== undefined) && (value.schemaName !== undefined) && (value.schemaOwner !== undefined) && (value.defaultCharacterSetCatalog !== undefined) && (value.defaultCharacterSetSchema !== undefined) && (value.defaultCharacterSetName !== undefined) && (value.sqlPath !== undefined)
) return true;
return false;
}
}
export namespace Sequences {
export function is(value: any) : value is InformationSchema.Types.Sequences {
if (
(value.sequenceCatalog !== undefined) && (value.sequenceSchema !== undefined) && (value.sequenceName !== undefined) && (value.dataType !== undefined) && (value.numericPrecision !== undefined) && (value.numericPrecisionRadix !== undefined) && (value.numericScale !== undefined) && (value.startValue !== undefined) && (value.minimumValue !== undefined) && (value.maximumValue !== undefined) && (value.increment !== undefined) && (value.cycleOption !== undefined)
) return true;
return false;
}
}
export namespace SqlFeatures {
export function is(value: any) : value is InformationSchema.Types.SqlFeatures {
if (
(value.featureId !== undefined) && (value.featureName !== undefined) && (value.subFeatureId !== undefined) && (value.subFeatureName !== undefined) && (value.isSupported !== undefined) && (value.isVerifiedBy !== undefined) && (value.comments !== undefined)
) return true;
return false;
}
}
export namespace SqlImplementationInfo {
export function is(value: any) : value is InformationSchema.Types.SqlImplementationInfo {
if (
(value.implementationInfoId !== undefined) && (value.implementationInfoName !== undefined) && (value.integerValue !== undefined) && (value.characterValue !== undefined) && (value.comments !== undefined)
) return true;
return false;
}
}
export namespace SqlParts {
export function is(value: any) : value is InformationSchema.Types.SqlParts {
if (
(value.featureId !== undefined) && (value.featureName !== undefined) && (value.isSupported !== undefined) && (value.isVerifiedBy !== undefined) && (value.comments !== undefined)
) return true;
return false;
}
}
export namespace SqlSizing {
export function is(value: any) : value is InformationSchema.Types.SqlSizing {
if (
(value.sizingId !== undefined) && (value.sizingName !== undefined) && (value.supportedValue !== undefined) && (value.comments !== undefined)
) return true;
return false;
}
}
export namespace TableConstraints {
export function is(value: any) : value is InformationSchema.Types.TableConstraints {
if (
(value.constraintCatalog !== undefined) && (value.constraintSchema !== undefined) && (value.constraintName !== undefined) && (value.tableCatalog !== undefined) && (value.tableSchema !== undefined) && (value.tableName !== undefined) && (value.constraintType !== undefined) && (value.isDeferrable !== undefined) && (value.initiallyDeferred !== undefined) && (value.enforced !== undefined) && (value.nullsDistinct !== undefined)
) return true;
return false;
}
}
export namespace TablePrivileges {
export function is(value: any) : value is InformationSchema.Types.TablePrivileges {
if (
(value.grantor !== undefined) && (value.grantee !== undefined) && (value.tableCatalog !== undefined) && (value.tableSchema !== undefined) && (value.tableName !== undefined) && (value.privilegeType !== undefined) && (value.isGrantable !== undefined) && (value.withHierarchy !== undefined)
) return true;
return false;
}
}
export namespace RoleTableGrants {
export function is(value: any) : value is InformationSchema.Types.RoleTableGrants {
if (
(value.grantor !== undefined) && (value.grantee !== undefined) && (value.tableCatalog !== undefined) && (value.tableSchema !== undefined) && (value.tableName !== undefined) && (value.privilegeType !== undefined) && (value.isGrantable !== undefined) && (value.withHierarchy !== undefined)
) return true;
return false;
}
}
export namespace Tables {
export function is(value: any) : value is InformationSchema.Types.Tables {
if (
(value.tableCatalog !== undefined) && (value.tableSchema !== undefined) && (value.tableName !== undefined) && (value.tableType !== undefined) && (value.selfReferencingColumnName !== undefined) && (value.referenceGeneration !== undefined) && (value.userDefinedTypeCatalog !== undefined) && (value.userDefinedTypeSchema !== undefined) && (value.userDefinedTypeName !== undefined) && (value.isInsertableInto !== undefined) && (value.isTyped !== undefined) && (value.commitAction !== undefined)
) return true;
return false;
}
}
export namespace Transforms {
export function is(value: any) : value is InformationSchema.Types.Transforms {
if (
(value.udtCatalog !== undefined) && (value.udtSchema !== undefined) && (value.udtName !== undefined) && (value.specificCatalog !== undefined) && (value.specificSchema !== undefined) && (value.specificName !== undefined) && (value.groupName !== undefined) && (value.transformType !== undefined)
) return true;
return false;
}
}
export namespace TriggeredUpdateColumns {
export function is(value: any) : value is InformationSchema.Types.TriggeredUpdateColumns {
if (
(value.triggerCatalog !== undefined) && (value.triggerSchema !== undefined) && (value.triggerName !== undefined) && (value.eventObjectCatalog !== undefined) && (value.eventObjectSchema !== undefined) && (value.eventObjectTable !== undefined) && (value.eventObjectColumn !== undefined)
) return true;
return false;
}
}
export namespace Triggers {
export function is(value: any) : value is InformationSchema.Types.Triggers {
if (
(value.triggerCatalog !== undefined) && (value.triggerSchema !== undefined) && (value.triggerName !== undefined) && (value.eventManipulation !== undefined) && (value.eventObjectCatalog !== undefined) && (value.eventObjectSchema !== undefined) && (value.eventObjectTable !== undefined) && (value.actionOrder !== undefined) && (value.actionCondition !== undefined) && (value.actionStatement !== undefined) && (value.actionOrientation !== undefined) && (value.actionTiming !== undefined) && (value.actionReferenceOldTable !== undefined) && (value.actionReferenceNewTable !== undefined) && (value.actionReferenceOldRow !== undefined) && (value.actionReferenceNewRow !== undefined) && (value.created !== undefined)
) return true;
return false;
}
}
export namespace UdtPrivileges {
export function is(value: any) : value is InformationSchema.Types.UdtPrivileges {
if (
(value.grantor !== undefined) && (value.grantee !== undefined) && (value.udtCatalog !== undefined) && (value.udtSchema !== undefined) && (value.udtName !== undefined) && (value.privilegeType !== undefined) && (value.isGrantable !== undefined)
) return true;
return false;
}
}
export namespace RoleUdtGrants {
export function is(value: any) : value is InformationSchema.Types.RoleUdtGrants {
if (
(value.grantor !== undefined) && (value.grantee !== undefined) && (value.udtCatalog !== undefined) && (value.udtSchema !== undefined) && (value.udtName !== undefined) && (value.privilegeType !== undefined) && (value.isGrantable !== undefined)
) return true;
return false;
}
}
export namespace UsagePrivileges {
export function is(value: any) : value is InformationSchema.Types.UsagePrivileges {
if (
(value.grantor !== undefined) && (value.grantee !== undefined) && (value.objectCatalog !== undefined) && (value.objectSchema !== undefined) && (value.objectName !== undefined) && (value.objectType !== undefined) && (value.privilegeType !== undefined) && (value.isGrantable !== undefined)
) return true;
return false;
}
}
export namespace RoleUsageGrants {
export function is(value: any) : value is InformationSchema.Types.RoleUsageGrants {
if (
(value.grantor !== undefined) && (value.grantee !== undefined) && (value.objectCatalog !== undefined) && (value.objectSchema !== undefined) && (value.objectName !== undefined) && (value.objectType !== undefined) && (value.privilegeType !== undefined) && (value.isGrantable !== undefined)
) return true;
return false;
}
}
export namespace UserDefinedTypes {
export function is(value: any) : value is InformationSchema.Types.UserDefinedTypes {
if (
(value.userDefinedTypeCatalog !== undefined) && (value.userDefinedTypeSchema !== undefined) && (value.userDefinedTypeName !== undefined) && (value.userDefinedTypeCategory !== undefined) && (value.isInstantiable !== undefined) && (value.isFinal !== undefined) && (value.orderingForm !== undefined) && (value.orderingCategory !== undefined) && (value.orderingRoutineCatalog !== undefined) && (value.orderingRoutineSchema !== undefined) && (value.orderingRoutineName !== undefined) && (value.referenceType !== undefined) && (value.dataType !== undefined) && (value.characterMaximumLength !== undefined) && (value.characterOctetLength !== undefined) && (value.characterSetCatalog !== undefined) && (value.characterSetSchema !== undefined) && (value.characterSetName !== undefined) && (value.collationCatalog !== undefined) && (value.collationSchema !== undefined) && (value.collationName !== undefined) && (value.numericPrecision !== undefined) && (value.numericPrecisionRadix !== undefined) && (value.numericScale !== undefined) && (value.datetimePrecision !== undefined) && (value.intervalType !== undefined) && (value.intervalPrecision !== undefined) && (value.sourceDtdIdentifier !== undefined) && (value.refDtdIdentifier !== undefined)
) return true;
return false;
}
}
export namespace ViewColumnUsage {
export function is(value: any) : value is InformationSchema.Types.ViewColumnUsage {
if (
(value.viewCatalog !== undefined) && (value.viewSchema !== undefined) && (value.viewName !== undefined) && (value.tableCatalog !== undefined) && (value.tableSchema !== undefined) && (value.tableName !== undefined) && (value.columnName !== undefined)
) return true;
return false;
}
}
export namespace ViewRoutineUsage {
export function is(value: any) : value is InformationSchema.Types.ViewRoutineUsage {
if (
(value.tableCatalog !== undefined) && (value.tableSchema !== undefined) && (value.tableName !== undefined) && (value.specificCatalog !== undefined) && (value.specificSchema !== undefined) && (value.specificName !== undefined)
) return true;
return false;
}
}
export namespace ViewTableUsage {
export function is(value: any) : value is InformationSchema.Types.ViewTableUsage {
if (
(value.viewCatalog !== undefined) && (value.viewSchema !== undefined) && (value.viewName !== undefined) && (value.tableCatalog !== undefined) && (value.tableSchema !== undefined) && (value.tableName !== undefined)
) return true;
return false;
}
}
export namespace Views {
export function is(value: any) : value is InformationSchema.Types.Views {
if (
(value.tableCatalog !== undefined) && (value.tableSchema !== undefined) && (value.tableName !== undefined) && (value.viewDefinition !== undefined) && (value.checkOption !== undefined) && (value.isUpdatable !== undefined) && (value.isInsertableInto !== undefined) && (value.isTriggerUpdatable !== undefined) && (value.isTriggerDeletable !== undefined) && (value.isTriggerInsertableInto !== undefined)
) return true;
return false;
}
}
export namespace DataTypePrivileges {
export function is(value: any) : value is InformationSchema.Types.DataTypePrivileges {
if (
(value.objectCatalog !== undefined) && (value.objectSchema !== undefined) && (value.objectName !== undefined) && (value.objectType !== undefined) && (value.dtdIdentifier !== undefined)
) return true;
return false;
}
}
export namespace ElementTypes {
export function is(value: any) : value is InformationSchema.Types.ElementTypes {
if (
(value.objectCatalog !== undefined) && (value.objectSchema !== undefined) && (value.objectName !== undefined) && (value.objectType !== undefined) && (value.collectionTypeIdentifier !== undefined) && (value.dataType !== undefined) && (value.characterMaximumLength !== undefined) && (value.characterOctetLength !== undefined) && (value.characterSetCatalog !== undefined) && (value.characterSetSchema !== undefined) && (value.characterSetName !== undefined) && (value.collationCatalog !== undefined) && (value.collationSchema !== undefined) && (value.collationName !== undefined) && (value.numericPrecision !== undefined) && (value.numericPrecisionRadix !== undefined) && (value.numericScale !== undefined) && (value.datetimePrecision !== undefined) && (value.intervalType !== undefined) && (value.intervalPrecision !== undefined) && (value.domainDefault !== undefined) && (value.udtCatalog !== undefined) && (value.udtSchema !== undefined) && (value.udtName !== undefined) && (value.scopeCatalog !== undefined) && (value.scopeSchema !== undefined) && (value.scopeName !== undefined) && (value.maximumCardinality !== undefined) && (value.dtdIdentifier !== undefined)
) return true;
return false;
}
}
export namespace PgForeignTableColumns {
export function is(value: any) : value is InformationSchema.Types.PgForeignTableColumns {
if (
(value.nspname !== undefined) && (value.relname !== undefined) && (value.attname !== undefined) && (value.attfdwoptions !== undefined)
) return true;
return false;
}
}
export namespace ColumnOptions {
export function is(value: any) : value is InformationSchema.Types.ColumnOptions {
if (
(value.tableCatalog !== undefined) && (value.tableSchema !== undefined) && (value.tableName !== undefined) && (value.columnName !== undefined) && (value.optionName !== undefined) && (value.optionValue !== undefined)
) return true;
return false;
}
}
export namespace PgForeignDataWrappers {
export function is(value: any) : value is InformationSchema.Types.PgForeignDataWrappers {
if (
(value.oid !== undefined) && (value.fdwowner !== undefined) && (value.fdwoptions !== undefined) && (value.foreignDataWrapperCatalog !== undefined) && (value.foreignDataWrapperName !== undefined) && (value.authorizationIdentifier !== undefined) && (value.foreignDataWrapperLanguage !== undefined)
) return true;
return false;
}
}
export namespace ForeignDataWrapperOptions {
export function is(value: any) : value is InformationSchema.Types.ForeignDataWrapperOptions {
if (
(value.foreignDataWrapperCatalog !== undefined) && (value.foreignDataWrapperName !== undefined) && (value.optionName !== undefined) && (value.optionValue !== undefined)
) return true;
return false;
}
}
export namespace ForeignDataWrappers {
export function is(value: any) : value is InformationSchema.Types.ForeignDataWrappers {
if (
(value.foreignDataWrapperCatalog !== undefined) && (value.foreignDataWrapperName !== undefined) && (value.authorizationIdentifier !== undefined) && (value.libraryName !== undefined) && (value.foreignDataWrapperLanguage !== undefined)
) return true;
return false;
}
}
export namespace PgForeignServers {
export function is(value: any) : value is InformationSchema.Types.PgForeignServers {
if (
(value.oid !== undefined) && (value.srvoptions !== undefined) && (value.foreignServerCatalog !== undefined) && (value.foreignServerName !== undefined) && (value.foreignDataWrapperCatalog !== undefined) && (value.foreignDataWrapperName !== undefined) && (value.foreignServerType !== undefined) && (value.foreignServerVersion !== undefined) && (value.authorizationIdentifier !== undefined)
) return true;
return false;
}
}
export namespace ForeignServerOptions {
export function is(value: any) : value is InformationSchema.Types.ForeignServerOptions {
if (
(value.foreignServerCatalog !== undefined) && (value.foreignServerName !== undefined) && (value.optionName !== undefined) && (value.optionValue !== undefined)
) return true;
return false;
}
}
export namespace ForeignServers {
export function is(value: any) : value is InformationSchema.Types.ForeignServers {
if (
(value.foreignServerCatalog !== undefined) && (value.foreignServerName !== undefined) && (value.foreignDataWrapperCatalog !== undefined) && (value.foreignDataWrapperName !== undefined) && (value.foreignServerType !== undefined) && (value.foreignServerVersion !== undefined) && (value.authorizationIdentifier !== undefined)
) return true;
return false;
}
}
export namespace PgForeignTables {
export function is(value: any) : value is InformationSchema.Types.PgForeignTables {
if (
(value.foreignTableCatalog !== undefined) && (value.foreignTableSchema !== undefined) && (value.foreignTableName !== undefined) && (value.ftoptions !== undefined) && (value.foreignServerCatalog !== undefined) && (value.foreignServerName !== undefined) && (value.authorizationIdentifier !== undefined)
) return true;
return false;
}
}
export namespace ForeignTableOptions {
export function is(value: any) : value is InformationSchema.Types.ForeignTableOptions {
if (
(value.foreignTableCatalog !== undefined) && (value.foreignTableSchema !== undefined) && (value.foreignTableName !== undefined) && (value.optionName !== undefined) && (value.optionValue !== undefined)
) return true;
return false;
}
}
export namespace ForeignTables {
export function is(value: any) : value is InformationSchema.Types.ForeignTables {
if (
(value.foreignTableCatalog !== undefined) && (value.foreignTableSchema !== undefined) && (value.foreignTableName !== undefined) && (value.foreignServerCatalog !== undefined) && (value.foreignServerName !== undefined)
) return true;
return false;
}
}
export namespace PgUserMappings {
export function is(value: any) : value is InformationSchema.Types.PgUserMappings {
if (
(value.oid !== undefined) && (value.umoptions !== undefined) && (value.umuser !== undefined) && (value.authorizationIdentifier !== undefined) && (value.foreignServerCatalog !== undefined) && (value.foreignServerName !== undefined) && (value.srvowner !== undefined)
) return true;
return false;
}
}
export namespace UserMappingOptions {
export function is(value: any) : value is InformationSchema.Types.UserMappingOptions {
if (
(value.authorizationIdentifier !== undefined) && (value.foreignServerCatalog !== undefined) && (value.foreignServerName !== undefined) && (value.optionName !== undefined) && (value.optionValue !== undefined)
) return true;
return false;
}
}
export namespace UserMappings {
export function is(value: any) : value is InformationSchema.Types.UserMappings {
if (
(value.authorizationIdentifier !== undefined) && (value.foreignServerCatalog !== undefined) && (value.foreignServerName !== undefined)
) return true;
return false;
}
}
}
export namespace Procedures {
}
export namespace Tables {
export namespace SqlFeatures {
}
export namespace SqlImplementationInfo {
}
export namespace SqlParts {
}
export namespace SqlSizing {
}
}
}
export namespace Public {
export namespace Types {
export namespace Customer {
export function is(value: any) : value is Public.Types.Customer {
if (
(value.customerId !== undefined) && (value.storeId !== undefined) && (value.firstName !== undefined) && (value.lastName !== undefined) && (value.email !== undefined) && (value.addressId !== undefined) && (value.activebool !== undefined) && (value.createDate !== undefined) && (value.lastUpdate !== undefined) && (value.active !== undefined)
) return true;
return false;
}
}
export namespace Actor {
export function is(value: any) : value is Public.Types.Actor {
if (
(value.actorId !== undefined) && (value.firstName !== undefined) && (value.lastName !== undefined) && (value.lastUpdate !== undefined)
) return true;
return false;
}
}
export namespace Category {
export function is(value: any) : value is Public.Types.Category {
if (
(value.categoryId !== undefined) && (value.name !== undefined) && (value.lastUpdate !== undefined)
) return true;
return false;
}
}
export namespace Film {
export function is(value: any) : value is Public.Types.Film {
if (
(value.filmId !== undefined) && (value.title !== undefined) && (value.description !== undefined) && (value.releaseYear !== undefined) && (value.languageId !== undefined) && (value.rentalDuration !== undefined) && (value.rentalRate !== undefined) && (value.length !== undefined) && (value.replacementCost !== undefined) && (value.rating !== undefined) && (value.lastUpdate !== undefined) && (value.specialFeatures !== undefined) && (value.fulltext !== undefined)
) return true;
return false;
}
}
export namespace FilmActor {
export function is(value: any) : value is Public.Types.FilmActor {
if (
(value.actorId !== undefined) && (value.filmId !== undefined) && (value.lastUpdate !== undefined)
) return true;
return false;
}
}
export namespace FilmCategory {
export function is(value: any) : value is Public.Types.FilmCategory {
if (
(value.filmId !== undefined) && (value.categoryId !== undefined) && (value.lastUpdate !== undefined)
) return true;
return false;
}
}
export namespace ActorInfo {
export function is(value: any) : value is Public.Types.ActorInfo {
if (
(value.actorId !== undefined) && (value.firstName !== undefined) && (value.lastName !== undefined) && (value.filmInfo !== undefined)
) return true;
return false;
}
}
export namespace Address {
export function is(value: any) : value is Public.Types.Address {
if (
(value.addressId !== undefined) && (value.address !== undefined) && (value.address2 !== undefined) && (value.district !== undefined) && (value.cityId !== undefined) && (value.postalCode !== undefined) && (value.phone !== undefined) && (value.lastUpdate !== undefined)
) return true;
return false;
}
}
export namespace City {
export function is(value: any) : value is Public.Types.City {
if (
(value.cityId !== undefined) && (value.city !== undefined) && (value.countryId !== undefined) && (value.lastUpdate !== undefined)
) return true;
return false;
}
}
export namespace Country {
export function is(value: any) : value is Public.Types.Country {
if (
(value.countryId !== undefined) && (value.country !== undefined) && (value.lastUpdate !== undefined)
) return true;
return false;
}
}
export namespace CustomerList {
export function is(value: any) : value is Public.Types.CustomerList {
if (
(value.id !== undefined) && (value.name !== undefined) && (value.address !== undefined) && (value.zipCode !== undefined) && (value.phone !== undefined) && (value.city !== undefined) && (value.country !== undefined) && (value.notes !== undefined) && (value.sid !== undefined)
) return true;
return false;
}
}
export namespace FilmList {
export function is(value: any) : value is Public.Types.FilmList {
if (
(value.fid !== undefined) && (value.title !== undefined) && (value.description !== undefined) && (value.category !== undefined) && (value.price !== undefined) && (value.length !== undefined) && (value.rating !== undefined) && (value.actors !== undefined)
) return true;
return false;
}
}
export namespace Inventory {
export function is(value: any) : value is Public.Types.Inventory {
if (
(value.inventoryId !== undefined) && (value.filmId !== undefined) && (value.storeId !== undefined) && (value.lastUpdate !== undefined)
) return true;
return false;
}
}
export namespace Language {
export function is(value: any) : value is Public.Types.Language {
if (
(value.languageId !== undefined) && (value.name !== undefined) && (value.lastUpdate !== undefined)
) return true;
return false;
}
}
export namespace NicerButSlowerFilmList {
export function is(value: any) : value is Public.Types.NicerButSlowerFilmList {
if (
(value.fid !== undefined) && (value.title !== undefined) && (value.description !== undefined) && (value.category !== undefined) && (value.price !== undefined) && (value.length !== undefined) && (value.rating !== undefined) && (value.actors !== undefined)
) return true;
return false;
}
}
export namespace Payment {
export function is(value: any) : value is Public.Types.Payment {
if (
(value.paymentId !== undefined) && (value.customerId !== undefined) && (value.staffId !== undefined) && (value.rentalId !== undefined) && (value.amount !== undefined) && (value.paymentDate !== undefined)
) return true;
return false;
}
}
export namespace Rental {
export function is(value: any) : value is Public.Types.Rental {
if (
(value.rentalId !== undefined) && (value.rentalDate !== undefined) && (value.inventoryId !== undefined) && (value.customerId !== undefined) && (value.returnDate !== undefined) && (value.staffId !== undefined) && (value.lastUpdate !== undefined)
) return true;
return false;
}
}
export namespace SalesByFilmCategory {
export function is(value: any) : value is Public.Types.SalesByFilmCategory {
if (
(value.category !== undefined) && (value.totalSales !== undefined)
) return true;
return false;
}
}
export namespace Staff {
export function is(value: any) : value is Public.Types.Staff {
if (
(value.staffId !== undefined) && (value.firstName !== undefined) && (value.lastName !== undefined) && (value.addressId !== undefined) && (value.email !== undefined) && (value.storeId !== undefined) && (value.active !== undefined) && (value.username !== undefined) && (value.password !== undefined) && (value.lastUpdate !== undefined) && (value.picture !== undefined)
) return true;
return false;
}
}
export namespace Store {
export function is(value: any) : value is Public.Types.Store {
if (
(value.storeId !== undefined) && (value.managerStaffId !== undefined) && (value.addressId !== undefined) && (value.lastUpdate !== undefined)
) return true;
return false;
}
}
export namespace SalesByStore {
export function is(value: any) : value is Public.Types.SalesByStore {
if (
(value.store !== undefined) && (value.manager !== undefined) && (value.totalSales !== undefined)
) return true;
return false;
}
}
export namespace StaffList {
export function is(value: any) : value is Public.Types.StaffList {
if (
(value.id !== undefined) && (value.name !== undefined) && (value.address !== undefined) && (value.zipCode !== undefined) && (value.phone !== undefined) && (value.city !== undefined) && (value.country !== undefined) && (value.sid !== undefined)
) return true;
return false;
}
}
export namespace ActorPkey {
export function is(value: any) : value is Public.Types.ActorPkey {
if (
(value.actorId !== undefined)
) return true;
return false;
}
}
export namespace AddressPkey {
export function is(value: any) : value is Public.Types.AddressPkey {
if (
(value.addressId !== undefined)
) return true;
return false;
}
}
export namespace CategoryPkey {
export function is(value: any) : value is Public.Types.CategoryPkey {
if (
(value.categoryId !== undefined)
) return true;
return false;
}
}
export namespace CityPkey {
export function is(value: any) : value is Public.Types.CityPkey {
if (
(value.cityId !== undefined)
) return true;
return false;
}
}
export namespace CountryPkey {
export function is(value: any) : value is Public.Types.CountryPkey {
if (
(value.countryId !== undefined)
) return true;
return false;
}
}
export namespace CustomerPkey {
export function is(value: any) : value is Public.Types.CustomerPkey {
if (
(value.customerId !== undefined)
) return true;
return false;
}
}
export namespace FilmActorPkey {
export function is(value: any) : value is Public.Types.FilmActorPkey {
if (
(value.actorId !== undefined) && (value.filmId !== undefined)
) return true;
return false;
}
}
export namespace FilmCategoryPkey {
export function is(value: any) : value is Public.Types.FilmCategoryPkey {
if (
(value.filmId !== undefined) && (value.categoryId !== undefined)
) return true;
return false;
}
}
export namespace FilmPkey {
export function is(value: any) : value is Public.Types.FilmPkey {
if (
(value.filmId !== undefined)
) return true;
return false;
}
}
export namespace InventoryPkey {
export function is(value: any) : value is Public.Types.InventoryPkey {
if (
(value.inventoryId !== undefined)
) return true;
return false;
}
}
export namespace LanguagePkey {
export function is(value: any) : value is Public.Types.LanguagePkey {
if (
(value.languageId !== undefined)
) return true;
return false;
}
}
export namespace PaymentPkey {
export function is(value: any) : value is Public.Types.PaymentPkey {
if (
(value.paymentId !== undefined)
) return true;
return false;
}
}
export namespace RentalPkey {
export function is(value: any) : value is Public.Types.RentalPkey {
if (
(value.rentalId !== undefined)
) return true;
return false;
}
}
export namespace StaffPkey {
export function is(value: any) : value is Public.Types.StaffPkey {
if (
(value.staffId !== undefined)
) return true;
return false;
}
}
export namespace StorePkey {
export function is(value: any) : value is Public.Types.StorePkey {
if (
(value.storeId !== undefined)
) return true;
return false;
}
}
export namespace FilmFulltextIdx {
export function is(value: any) : value is Public.Types.FilmFulltextIdx {
if (
(value.fulltext !== undefined)
) return true;
return false;
}
}
export namespace IdxActorLastName {
export function is(value: any) : value is Public.Types.IdxActorLastName {
if (
(value.lastName !== undefined)
) return true;
return false;
}
}
export namespace IdxFkAddressId {
export function is(value: any) : value is Public.Types.IdxFkAddressId {
if (
(value.addressId !== undefined)
) return true;
return false;
}
}
export namespace IdxFkCityId {
export function is(value: any) : value is Public.Types.IdxFkCityId {
if (
(value.cityId !== undefined)
) return true;
return false;
}
}
export namespace IdxFkCountryId {
export function is(value: any) : value is Public.Types.IdxFkCountryId {
if (
(value.countryId !== undefined)
) return true;
return false;
}
}
export namespace IdxFkCustomerId {
export function is(value: any) : value is Public.Types.IdxFkCustomerId {
if (
(value.customerId !== undefined)
) return true;
return false;
}
}
export namespace IdxFkFilmId {
export function is(value: any) : value is Public.Types.IdxFkFilmId {
if (
(value.filmId !== undefined)
) return true;
return false;
}
}
export namespace IdxFkInventoryId {
export function is(value: any) : value is Public.Types.IdxFkInventoryId {
if (
(value.inventoryId !== undefined)
) return true;
return false;
}
}
export namespace IdxFkLanguageId {
export function is(value: any) : value is Public.Types.IdxFkLanguageId {
if (
(value.languageId !== undefined)
) return true;
return false;
}
}
export namespace IdxFkRentalId {
export function is(value: any) : value is Public.Types.IdxFkRentalId {
if (
(value.rentalId !== undefined)
) return true;
return false;
}
}
export namespace IdxFkStaffId {
export function is(value: any) : value is Public.Types.IdxFkStaffId {
if (
(value.staffId !== undefined)
) return true;
return false;
}
}
export namespace IdxFkStoreId {
export function is(value: any) : value is Public.Types.IdxFkStoreId {
if (
(value.storeId !== undefined)
) return true;
return false;
}
}
export namespace IdxLastName {
export function is(value: any) : value is Public.Types.IdxLastName {
if (
(value.lastName !== undefined)
) return true;
return false;
}
}
export namespace IdxStoreIdFilmId {
export function is(value: any) : value is Public.Types.IdxStoreIdFilmId {
if (
(value.storeId !== undefined) && (value.filmId !== undefined)
) return true;
return false;
}
}
export namespace IdxTitle {
export function is(value: any) : value is Public.Types.IdxTitle {
if (
(value.title !== undefined)
) return true;
return false;
}
}
export namespace IdxUnqManagerStaffId {
export function is(value: any) : value is Public.Types.IdxUnqManagerStaffId {
if (
(value.managerStaffId !== undefined)
) return true;
return false;
}
}
export namespace IdxUnqRentalRentalDateInventoryIdCustomerId {
export function is(value: any) : value is Public.Types.IdxUnqRentalRentalDateInventoryIdCustomerId {
if (
(value.rentalDate !== undefined) && (value.inventoryId !== undefined) && (value.customerId !== undefined)
) return true;
return false;
}
}
}
export namespace Procedures {
export namespace FilmInStock {
export namespace Parameters {
export function is(value: any) : value is Public.Procedures.FilmInStock.Parameters {
if (
(value.pFilmId !== undefined) && (value.pStoreId !== undefined)
) return true;
return false;
}
}
}
export namespace FilmNotInStock {
export namespace Parameters {
export function is(value: any) : value is Public.Procedures.FilmNotInStock.Parameters {
if (
(value.pFilmId !== undefined) && (value.pStoreId !== undefined)
) return true;
return false;
}
}
}
export namespace GetCustomerBalance {
export namespace Parameters {
export function is(value: any) : value is Public.Procedures.GetCustomerBalance.Parameters {
if (
(value.pCustomerId !== undefined) && (value.pEffectiveDate !== undefined)
) return true;
return false;
}
}
}
export namespace InventoryHeldByCustomer {
export namespace Parameters {
export function is(value: any) : value is Public.Procedures.InventoryHeldByCustomer.Parameters {
if (
(value.pInventoryId !== undefined)
) return true;
return false;
}
}
}
export namespace InventoryInStock {
export namespace Parameters {
export function is(value: any) : value is Public.Procedures.InventoryInStock.Parameters {
if (
(value.pInventoryId !== undefined)
) return true;
return false;
}
}
}
export namespace LastDay {
export namespace Parameters {
export function is(value: any) : value is Public.Procedures.LastDay.Parameters {
if (
(value.argument_0 !== undefined)
) return true;
return false;
}
}
}
export namespace RewardsReport {
export namespace Parameters {
export function is(value: any) : value is Public.Procedures.RewardsReport.Parameters {
if (
(value.minMonthlyPurchases !== undefined) && (value.minDollarAmountPurchased !== undefined)
) return true;
return false;
}
}
}
}
export namespace Tables {
export namespace FilmActor {
}
export namespace Address {
}
export namespace City {
}
export namespace Customer {
}
export namespace Actor {
}
export namespace FilmCategory {
}
export namespace Inventory {
}
export namespace Category {
}
export namespace Country {
}
export namespace Language {
}
export namespace Rental {
}
export namespace Staff {
}
export namespace Store {
}
export namespace Payment {
}
export namespace Film {
}
}
}
export namespace PgToast {
export namespace Types {
export namespace PgToast_36081Index {
export function is(value: any) : value is PgToast.Types.PgToast_36081Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_36167Index {
export function is(value: any) : value is PgToast.Types.PgToast_36167Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_1255Index {
export function is(value: any) : value is PgToast.Types.PgToast_1255Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_1247Index {
export function is(value: any) : value is PgToast.Types.PgToast_1247Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_2604Index {
export function is(value: any) : value is PgToast.Types.PgToast_2604Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_2606Index {
export function is(value: any) : value is PgToast.Types.PgToast_2606Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_2612Index {
export function is(value: any) : value is PgToast.Types.PgToast_2612Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_2600Index {
export function is(value: any) : value is PgToast.Types.PgToast_2600Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_2619Index {
export function is(value: any) : value is PgToast.Types.PgToast_2619Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_3381Index {
export function is(value: any) : value is PgToast.Types.PgToast_3381Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_3429Index {
export function is(value: any) : value is PgToast.Types.PgToast_3429Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_2618Index {
export function is(value: any) : value is PgToast.Types.PgToast_2618Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_2620Index {
export function is(value: any) : value is PgToast.Types.PgToast_2620Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_3466Index {
export function is(value: any) : value is PgToast.Types.PgToast_3466Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_2609Index {
export function is(value: any) : value is PgToast.Types.PgToast_2609Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_2615Index {
export function is(value: any) : value is PgToast.Types.PgToast_2615Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_1262Index {
export function is(value: any) : value is PgToast.Types.PgToast_1262Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_2964Index {
export function is(value: any) : value is PgToast.Types.PgToast_2964Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_1213Index {
export function is(value: any) : value is PgToast.Types.PgToast_1213Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_1260Index {
export function is(value: any) : value is PgToast.Types.PgToast_1260Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_2396Index {
export function is(value: any) : value is PgToast.Types.PgToast_2396Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_3600Index {
export function is(value: any) : value is PgToast.Types.PgToast_3600Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_3079Index {
export function is(value: any) : value is PgToast.Types.PgToast_3079Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_2328Index {
export function is(value: any) : value is PgToast.Types.PgToast_2328Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_1417Index {
export function is(value: any) : value is PgToast.Types.PgToast_1417Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_1418Index {
export function is(value: any) : value is PgToast.Types.PgToast_1418Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_3118Index {
export function is(value: any) : value is PgToast.Types.PgToast_3118Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_3256Index {
export function is(value: any) : value is PgToast.Types.PgToast_3256Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_6000Index {
export function is(value: any) : value is PgToast.Types.PgToast_6000Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_826Index {
export function is(value: any) : value is PgToast.Types.PgToast_826Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_3394Index {
export function is(value: any) : value is PgToast.Types.PgToast_3394Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_3596Index {
export function is(value: any) : value is PgToast.Types.PgToast_3596Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_3592Index {
export function is(value: any) : value is PgToast.Types.PgToast_3592Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_3456Index {
export function is(value: any) : value is PgToast.Types.PgToast_3456Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_6243Index {
export function is(value: any) : value is PgToast.Types.PgToast_6243Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_3350Index {
export function is(value: any) : value is PgToast.Types.PgToast_3350Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_6106Index {
export function is(value: any) : value is PgToast.Types.PgToast_6106Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_6100Index {
export function is(value: any) : value is PgToast.Types.PgToast_6100Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_13658Index {
export function is(value: any) : value is PgToast.Types.PgToast_13658Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_13663Index {
export function is(value: any) : value is PgToast.Types.PgToast_13663Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_13668Index {
export function is(value: any) : value is PgToast.Types.PgToast_13668Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
export namespace PgToast_13673Index {
export function is(value: any) : value is PgToast.Types.PgToast_13673Index {
if (
(value.chunkId !== undefined) && (value.chunkSeq !== undefined)
) return true;
return false;
}
}
}
export namespace Procedures {
}
export namespace Tables {
}
}
export namespace Scripts {
export namespace MovieListing {
export namespace Results {
export function is(value: any) : value is Scripts.MovieListing.Results {
if (
(value.filmId !== undefined) && (value.title !== undefined) && (value.releaseYear !== undefined) && (value.rating !== undefined) && (value.actors !== undefined)
) return true;
return false;
}
}
}
export namespace Sample {
export namespace Film {
export namespace Rated {
export namespace Results {
export function is(value: any) : value is Scripts.Sample.Film.Rated.Results {
if (
(value.filmId !== undefined) && (value.title !== undefined) && (value.description !== undefined) && (value.releaseYear !== undefined) && (value.languageId !== undefined) && (value.rentalDuration !== undefined) && (value.rentalRate !== undefined) && (value.length !== undefined) && (value.replacementCost !== undefined) && (value.rating !== undefined) && (value.lastUpdate !== undefined) && (value.specialFeatures !== undefined) && (value.fulltext !== undefined)
) return true;
return false;
}
}
export namespace Parameters {
export function is(value: any) : value is Scripts.Sample.Film.Rated.Parameters {
if (
(value.argument_1 !== undefined)
) return true;
return false;
}
}
}
export namespace Tally {
export namespace Results {
export function is(value: any) : value is Scripts.Sample.Film.Tally.Results {
if (
(value.count !== undefined)
) return true;
return false;
}
}
}
}
export namespace Pick {
export namespace Results {
export function is(value: any) : value is Scripts.Sample.Pick.Results {
if (
(value.filmId !== undefined) && (value.title !== undefined) && (value.description !== undefined) && (value.releaseYear !== undefined) && (value.languageId !== undefined) && (value.rentalDuration !== undefined) && (value.rentalRate !== undefined) && (value.length !== undefined) && (value.replacementCost !== undefined) && (value.rating !== undefined) && (value.lastUpdate !== undefined) && (value.specialFeatures !== undefined) && (value.fulltext !== undefined)
) return true;
return false;
}
}
export namespace Parameters {
export function is(value: any) : value is Scripts.Sample.Pick.Parameters {
if (
(value.argument_1 !== undefined)
) return true;
return false;
}
}
}
}
export namespace Tally {
export namespace Results {
export function is(value: any) : value is Scripts.Tally.Results {
if (
(value.count !== undefined)
) return true;
return false;
}
}
}
}
// begin fetch client
import { EmbraceSQLClient as BaseClient, EmbraceSQLClientProps, HasClient } from "@embracesql/client";

  export class EmbraceSQLClient extends BaseClient {
    constructor(props: EmbraceSQLClientProps) {
      super(props);
    }

  

          public Public = new class extends HasClient {
        

          public Procedures = new class extends HasClient {
        

          public FilmInStock = new class extends HasClient {
        

          public async call(parameters: Public.Procedures.FilmInStock.Parameters) : Promise<PgCatalog.Types.Int4[]> {
            const response = await this.client.invoke<Public.Procedures.FilmInStock.Parameters, never, PgCatalog.Types.Int4[], Public.Procedures.FilmInStock.Options>({
              operation: "Public.Procedures.FilmInStock.call",
              parameters,
            });
        
return response.results?.map(r => PgCatalog.Types.Int4.parse(r)) as PgCatalog.Types.Int4[] ?? [];
}
}(this)

          public FilmNotInStock = new class extends HasClient {
        

          public async call(parameters: Public.Procedures.FilmNotInStock.Parameters) : Promise<PgCatalog.Types.Int4[]> {
            const response = await this.client.invoke<Public.Procedures.FilmNotInStock.Parameters, never, PgCatalog.Types.Int4[], Public.Procedures.FilmNotInStock.Options>({
              operation: "Public.Procedures.FilmNotInStock.call",
              parameters,
            });
        
return response.results?.map(r => PgCatalog.Types.Int4.parse(r)) as PgCatalog.Types.Int4[] ?? [];
}
}(this)

          public GetCustomerBalance = new class extends HasClient {
        

          public async call(parameters: Public.Procedures.GetCustomerBalance.Parameters) : Promise<PgCatalog.Types.Numeric | undefined> {
            const response = await this.client.invoke<Public.Procedures.GetCustomerBalance.Parameters, never, PgCatalog.Types.Numeric | undefined, Public.Procedures.GetCustomerBalance.Options>({
              operation: "Public.Procedures.GetCustomerBalance.call",
              parameters,
            });
        
return response.results ? nullIsUndefined(PgCatalog.Types.Numeric.parse(response.results)) : undefined;
}
}(this)

          public InventoryHeldByCustomer = new class extends HasClient {
        

          public async call(parameters: Public.Procedures.InventoryHeldByCustomer.Parameters) : Promise<PgCatalog.Types.Int4 | undefined> {
            const response = await this.client.invoke<Public.Procedures.InventoryHeldByCustomer.Parameters, never, PgCatalog.Types.Int4 | undefined, Public.Procedures.InventoryHeldByCustomer.Options>({
              operation: "Public.Procedures.InventoryHeldByCustomer.call",
              parameters,
            });
        
return response.results ? nullIsUndefined(PgCatalog.Types.Int4.parse(response.results)) : undefined;
}
}(this)

          public InventoryInStock = new class extends HasClient {
        

          public async call(parameters: Public.Procedures.InventoryInStock.Parameters) : Promise<PgCatalog.Types.Bool | undefined> {
            const response = await this.client.invoke<Public.Procedures.InventoryInStock.Parameters, never, PgCatalog.Types.Bool | undefined, Public.Procedures.InventoryInStock.Options>({
              operation: "Public.Procedures.InventoryInStock.call",
              parameters,
            });
        
return response.results ? nullIsUndefined(PgCatalog.Types.Bool.parse(response.results)) : undefined;
}
}(this)

          public LastDay = new class extends HasClient {
        

          public async call(parameters: Public.Procedures.LastDay.Parameters) : Promise<PgCatalog.Types.Date | undefined> {
            const response = await this.client.invoke<Public.Procedures.LastDay.Parameters, never, PgCatalog.Types.Date | undefined, Public.Procedures.LastDay.Options>({
              operation: "Public.Procedures.LastDay.call",
              parameters,
            });
        
return response.results ? nullIsUndefined(PgCatalog.Types.Date.parse(response.results)) : undefined;
}
}(this)

          public RewardsReport = new class extends HasClient {
        

          public async call(parameters: Public.Procedures.RewardsReport.Parameters) : Promise<Public.Types.Customer[]> {
            const response = await this.client.invoke<Public.Procedures.RewardsReport.Parameters, never, Public.Types.Customer[], Public.Procedures.RewardsReport.Options>({
              operation: "Public.Procedures.RewardsReport.call",
              parameters,
            });
        
return response.results?.map(r => Public.Types.Customer.parse(r)) as Public.Types.Customer[] ?? [];
}
}(this)
}(this)

          public Tables = new class extends HasClient {
        

          public FilmActor = new class extends HasClient {
        

          public async create(values: Partial<Public.Types.FilmActor>) : Promise<Public.Types.FilmActor|undefined> {
            const response = await this.client.invoke<never, Partial<Public.Types.FilmActor>, Public.Types.FilmActor, never>({
              operation: "Public.Tables.FilmActor.create",
              values: {actorId: values.actorId,filmId: values.filmId,lastUpdate: values.lastUpdate}
            });
            return (
    nullIsUndefined<Public.Types.FilmActor>(Public.Types.FilmActor.parse(response.results))
  )
  ;
          }
        

          public async all(options?: Public.Tables.FilmActor.Options) : Promise<Public.Types.FilmActor[]> {
            const response = await this.client.invoke<never, never, Public.Types.FilmActor[], Public.Tables.FilmActor.Options>({
              operation: "Public.Tables.FilmActor.all",
              options
            });
            return (
    response.results
      ?.map(Public.Types.FilmActor.parse)
      .map(nullIsUndefined<Public.Types.FilmActor>)
      .filter((x): x is Public.Types.FilmActor => x !== undefined) ?? []
  )
  ;
          }
        

          public FilmActorPkey = new class extends HasClient {
        

          public async read(parameters: Public.Types.FilmActorPkey, options?: Public.Tables.FilmActor.Options) {
            const response = await this.client.invoke<Public.Types.FilmActorPkey, never, Public.Types.FilmActor | undefined, Public.Tables.FilmActor.Options>({
              operation: "Public.Tables.FilmActor.FilmActorPkey.read",
              parameters: {actorId: parameters.actorId,filmId: parameters.filmId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.FilmActor>(Public.Types.FilmActor.parse(response.results))
  )
  ;
}

          public async update(parameters: Public.Types.FilmActorPkey, values: Partial<Public.Types.FilmActor>) {
            const response = await this.client.invoke<Public.Types.FilmActorPkey, Partial<Public.Types.FilmActor>, Public.Types.FilmActor | undefined, never>({
              operation: "Public.Tables.FilmActor.FilmActorPkey.update",
              parameters: {actorId: parameters.actorId,filmId: parameters.filmId},
              values: {actorId: values.actorId,filmId: values.filmId,lastUpdate: values.lastUpdate}
            });
        
return (
    nullIsUndefined<Public.Types.FilmActor>(Public.Types.FilmActor.parse(response.results))
  )
  ;
}

          public async delete(parameters: Public.Types.FilmActorPkey, options?: Public.Tables.FilmActor.Options) {
            const response = await this.client.invoke<Public.Types.FilmActorPkey, never, Public.Types.FilmActor | undefined, Public.Tables.FilmActor.Options>({
              operation: "Public.Tables.FilmActor.FilmActorPkey.delete",
              parameters: {actorId: parameters.actorId,filmId: parameters.filmId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.FilmActor>(Public.Types.FilmActor.parse(response.results))
  )
  ;
}
}(this)
public get ByPrimaryKey(){ return this.FilmActorPkey };

          public IdxFkFilmId = new class extends HasClient {
        

          public async read(parameters: Public.Types.IdxFkFilmId, options?: Public.Tables.FilmActor.Options) {
            const response = await this.client.invoke<Public.Types.IdxFkFilmId, never, Public.Types.FilmActor[] | undefined, Public.Tables.FilmActor.Options>({
              operation: "Public.Tables.FilmActor.IdxFkFilmId.read",
              parameters: {filmId: parameters.filmId},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.FilmActor.parse)
      .map(nullIsUndefined<Public.Types.FilmActor>)
      .filter((x): x is Public.Types.FilmActor => x !== undefined) ?? []
  )
  ;
}

          public async update(parameters: Public.Types.IdxFkFilmId, values: Partial<Public.Types.FilmActor>) {
            const response = await this.client.invoke<Public.Types.IdxFkFilmId, Partial<Public.Types.FilmActor>, Public.Types.FilmActor[] | undefined, never>({
              operation: "Public.Tables.FilmActor.IdxFkFilmId.update",
              parameters: {filmId: parameters.filmId},
              values: {actorId: values.actorId,filmId: values.filmId,lastUpdate: values.lastUpdate}
            });
        
return (
    response.results
      ?.map(Public.Types.FilmActor.parse)
      .map(nullIsUndefined<Public.Types.FilmActor>)
      .filter((x): x is Public.Types.FilmActor => x !== undefined) ?? []
  )
  ;
}

          public async delete(parameters: Public.Types.IdxFkFilmId, options?: Public.Tables.FilmActor.Options) {
            const response = await this.client.invoke<Public.Types.IdxFkFilmId, never, Public.Types.FilmActor[] | undefined, Public.Tables.FilmActor.Options>({
              operation: "Public.Tables.FilmActor.IdxFkFilmId.delete",
              parameters: {filmId: parameters.filmId},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.FilmActor.parse)
      .map(nullIsUndefined<Public.Types.FilmActor>)
      .filter((x): x is Public.Types.FilmActor => x !== undefined) ?? []
  )
  ;
}
}(this)

}(this)

          public Address = new class extends HasClient {
        

          public async create(values: Partial<Public.Types.Address>) : Promise<Public.Types.Address|undefined> {
            const response = await this.client.invoke<never, Partial<Public.Types.Address>, Public.Types.Address, never>({
              operation: "Public.Tables.Address.create",
              values: {addressId: values.addressId,address: values.address,address2: values.address2,district: values.district,cityId: values.cityId,postalCode: values.postalCode,phone: values.phone,lastUpdate: values.lastUpdate}
            });
            return (
    nullIsUndefined<Public.Types.Address>(Public.Types.Address.parse(response.results))
  )
  ;
          }
        

          public async all(options?: Public.Tables.Address.Options) : Promise<Public.Types.Address[]> {
            const response = await this.client.invoke<never, never, Public.Types.Address[], Public.Tables.Address.Options>({
              operation: "Public.Tables.Address.all",
              options
            });
            return (
    response.results
      ?.map(Public.Types.Address.parse)
      .map(nullIsUndefined<Public.Types.Address>)
      .filter((x): x is Public.Types.Address => x !== undefined) ?? []
  )
  ;
          }
        

          public AddressPkey = new class extends HasClient {
        

          public async read(parameters: Public.Types.AddressPkey, options?: Public.Tables.Address.Options) {
            const response = await this.client.invoke<Public.Types.AddressPkey, never, Public.Types.Address | undefined, Public.Tables.Address.Options>({
              operation: "Public.Tables.Address.AddressPkey.read",
              parameters: {addressId: parameters.addressId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.Address>(Public.Types.Address.parse(response.results))
  )
  ;
}

          public async update(parameters: Public.Types.AddressPkey, values: Partial<Public.Types.Address>) {
            const response = await this.client.invoke<Public.Types.AddressPkey, Partial<Public.Types.Address>, Public.Types.Address | undefined, never>({
              operation: "Public.Tables.Address.AddressPkey.update",
              parameters: {addressId: parameters.addressId},
              values: {addressId: values.addressId,address: values.address,address2: values.address2,district: values.district,cityId: values.cityId,postalCode: values.postalCode,phone: values.phone,lastUpdate: values.lastUpdate}
            });
        
return (
    nullIsUndefined<Public.Types.Address>(Public.Types.Address.parse(response.results))
  )
  ;
}

          public async delete(parameters: Public.Types.AddressPkey, options?: Public.Tables.Address.Options) {
            const response = await this.client.invoke<Public.Types.AddressPkey, never, Public.Types.Address | undefined, Public.Tables.Address.Options>({
              operation: "Public.Tables.Address.AddressPkey.delete",
              parameters: {addressId: parameters.addressId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.Address>(Public.Types.Address.parse(response.results))
  )
  ;
}
}(this)
public get ByPrimaryKey(){ return this.AddressPkey };

          public IdxFkCityId = new class extends HasClient {
        

          public async read(parameters: Public.Types.IdxFkCityId, options?: Public.Tables.Address.Options) {
            const response = await this.client.invoke<Public.Types.IdxFkCityId, never, Public.Types.Address[] | undefined, Public.Tables.Address.Options>({
              operation: "Public.Tables.Address.IdxFkCityId.read",
              parameters: {cityId: parameters.cityId},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.Address.parse)
      .map(nullIsUndefined<Public.Types.Address>)
      .filter((x): x is Public.Types.Address => x !== undefined) ?? []
  )
  ;
}

          public async update(parameters: Public.Types.IdxFkCityId, values: Partial<Public.Types.Address>) {
            const response = await this.client.invoke<Public.Types.IdxFkCityId, Partial<Public.Types.Address>, Public.Types.Address[] | undefined, never>({
              operation: "Public.Tables.Address.IdxFkCityId.update",
              parameters: {cityId: parameters.cityId},
              values: {addressId: values.addressId,address: values.address,address2: values.address2,district: values.district,cityId: values.cityId,postalCode: values.postalCode,phone: values.phone,lastUpdate: values.lastUpdate}
            });
        
return (
    response.results
      ?.map(Public.Types.Address.parse)
      .map(nullIsUndefined<Public.Types.Address>)
      .filter((x): x is Public.Types.Address => x !== undefined) ?? []
  )
  ;
}

          public async delete(parameters: Public.Types.IdxFkCityId, options?: Public.Tables.Address.Options) {
            const response = await this.client.invoke<Public.Types.IdxFkCityId, never, Public.Types.Address[] | undefined, Public.Tables.Address.Options>({
              operation: "Public.Tables.Address.IdxFkCityId.delete",
              parameters: {cityId: parameters.cityId},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.Address.parse)
      .map(nullIsUndefined<Public.Types.Address>)
      .filter((x): x is Public.Types.Address => x !== undefined) ?? []
  )
  ;
}
}(this)

}(this)

          public City = new class extends HasClient {
        

          public async create(values: Partial<Public.Types.City>) : Promise<Public.Types.City|undefined> {
            const response = await this.client.invoke<never, Partial<Public.Types.City>, Public.Types.City, never>({
              operation: "Public.Tables.City.create",
              values: {cityId: values.cityId,city: values.city,countryId: values.countryId,lastUpdate: values.lastUpdate}
            });
            return (
    nullIsUndefined<Public.Types.City>(Public.Types.City.parse(response.results))
  )
  ;
          }
        

          public async all(options?: Public.Tables.City.Options) : Promise<Public.Types.City[]> {
            const response = await this.client.invoke<never, never, Public.Types.City[], Public.Tables.City.Options>({
              operation: "Public.Tables.City.all",
              options
            });
            return (
    response.results
      ?.map(Public.Types.City.parse)
      .map(nullIsUndefined<Public.Types.City>)
      .filter((x): x is Public.Types.City => x !== undefined) ?? []
  )
  ;
          }
        

          public CityPkey = new class extends HasClient {
        

          public async read(parameters: Public.Types.CityPkey, options?: Public.Tables.City.Options) {
            const response = await this.client.invoke<Public.Types.CityPkey, never, Public.Types.City | undefined, Public.Tables.City.Options>({
              operation: "Public.Tables.City.CityPkey.read",
              parameters: {cityId: parameters.cityId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.City>(Public.Types.City.parse(response.results))
  )
  ;
}

          public async update(parameters: Public.Types.CityPkey, values: Partial<Public.Types.City>) {
            const response = await this.client.invoke<Public.Types.CityPkey, Partial<Public.Types.City>, Public.Types.City | undefined, never>({
              operation: "Public.Tables.City.CityPkey.update",
              parameters: {cityId: parameters.cityId},
              values: {cityId: values.cityId,city: values.city,countryId: values.countryId,lastUpdate: values.lastUpdate}
            });
        
return (
    nullIsUndefined<Public.Types.City>(Public.Types.City.parse(response.results))
  )
  ;
}

          public async delete(parameters: Public.Types.CityPkey, options?: Public.Tables.City.Options) {
            const response = await this.client.invoke<Public.Types.CityPkey, never, Public.Types.City | undefined, Public.Tables.City.Options>({
              operation: "Public.Tables.City.CityPkey.delete",
              parameters: {cityId: parameters.cityId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.City>(Public.Types.City.parse(response.results))
  )
  ;
}
}(this)
public get ByPrimaryKey(){ return this.CityPkey };

          public IdxFkCountryId = new class extends HasClient {
        

          public async read(parameters: Public.Types.IdxFkCountryId, options?: Public.Tables.City.Options) {
            const response = await this.client.invoke<Public.Types.IdxFkCountryId, never, Public.Types.City[] | undefined, Public.Tables.City.Options>({
              operation: "Public.Tables.City.IdxFkCountryId.read",
              parameters: {countryId: parameters.countryId},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.City.parse)
      .map(nullIsUndefined<Public.Types.City>)
      .filter((x): x is Public.Types.City => x !== undefined) ?? []
  )
  ;
}

          public async update(parameters: Public.Types.IdxFkCountryId, values: Partial<Public.Types.City>) {
            const response = await this.client.invoke<Public.Types.IdxFkCountryId, Partial<Public.Types.City>, Public.Types.City[] | undefined, never>({
              operation: "Public.Tables.City.IdxFkCountryId.update",
              parameters: {countryId: parameters.countryId},
              values: {cityId: values.cityId,city: values.city,countryId: values.countryId,lastUpdate: values.lastUpdate}
            });
        
return (
    response.results
      ?.map(Public.Types.City.parse)
      .map(nullIsUndefined<Public.Types.City>)
      .filter((x): x is Public.Types.City => x !== undefined) ?? []
  )
  ;
}

          public async delete(parameters: Public.Types.IdxFkCountryId, options?: Public.Tables.City.Options) {
            const response = await this.client.invoke<Public.Types.IdxFkCountryId, never, Public.Types.City[] | undefined, Public.Tables.City.Options>({
              operation: "Public.Tables.City.IdxFkCountryId.delete",
              parameters: {countryId: parameters.countryId},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.City.parse)
      .map(nullIsUndefined<Public.Types.City>)
      .filter((x): x is Public.Types.City => x !== undefined) ?? []
  )
  ;
}
}(this)

}(this)

          public Customer = new class extends HasClient {
        

          public async create(values: Partial<Public.Types.Customer>) : Promise<Public.Types.Customer|undefined> {
            const response = await this.client.invoke<never, Partial<Public.Types.Customer>, Public.Types.Customer, never>({
              operation: "Public.Tables.Customer.create",
              values: {customerId: values.customerId,storeId: values.storeId,firstName: values.firstName,lastName: values.lastName,email: values.email,addressId: values.addressId,activebool: values.activebool,createDate: values.createDate,lastUpdate: values.lastUpdate,active: values.active}
            });
            return (
    nullIsUndefined<Public.Types.Customer>(Public.Types.Customer.parse(response.results))
  )
  ;
          }
        

          public async all(options?: Public.Tables.Customer.Options) : Promise<Public.Types.Customer[]> {
            const response = await this.client.invoke<never, never, Public.Types.Customer[], Public.Tables.Customer.Options>({
              operation: "Public.Tables.Customer.all",
              options
            });
            return (
    response.results
      ?.map(Public.Types.Customer.parse)
      .map(nullIsUndefined<Public.Types.Customer>)
      .filter((x): x is Public.Types.Customer => x !== undefined) ?? []
  )
  ;
          }
        

          public CustomerPkey = new class extends HasClient {
        

          public async read(parameters: Public.Types.CustomerPkey, options?: Public.Tables.Customer.Options) {
            const response = await this.client.invoke<Public.Types.CustomerPkey, never, Public.Types.Customer | undefined, Public.Tables.Customer.Options>({
              operation: "Public.Tables.Customer.CustomerPkey.read",
              parameters: {customerId: parameters.customerId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.Customer>(Public.Types.Customer.parse(response.results))
  )
  ;
}

          public async update(parameters: Public.Types.CustomerPkey, values: Partial<Public.Types.Customer>) {
            const response = await this.client.invoke<Public.Types.CustomerPkey, Partial<Public.Types.Customer>, Public.Types.Customer | undefined, never>({
              operation: "Public.Tables.Customer.CustomerPkey.update",
              parameters: {customerId: parameters.customerId},
              values: {customerId: values.customerId,storeId: values.storeId,firstName: values.firstName,lastName: values.lastName,email: values.email,addressId: values.addressId,activebool: values.activebool,createDate: values.createDate,lastUpdate: values.lastUpdate,active: values.active}
            });
        
return (
    nullIsUndefined<Public.Types.Customer>(Public.Types.Customer.parse(response.results))
  )
  ;
}

          public async delete(parameters: Public.Types.CustomerPkey, options?: Public.Tables.Customer.Options) {
            const response = await this.client.invoke<Public.Types.CustomerPkey, never, Public.Types.Customer | undefined, Public.Tables.Customer.Options>({
              operation: "Public.Tables.Customer.CustomerPkey.delete",
              parameters: {customerId: parameters.customerId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.Customer>(Public.Types.Customer.parse(response.results))
  )
  ;
}
}(this)
public get ByPrimaryKey(){ return this.CustomerPkey };

          public IdxFkAddressId = new class extends HasClient {
        

          public async read(parameters: Public.Types.IdxFkAddressId, options?: Public.Tables.Customer.Options) {
            const response = await this.client.invoke<Public.Types.IdxFkAddressId, never, Public.Types.Customer[] | undefined, Public.Tables.Customer.Options>({
              operation: "Public.Tables.Customer.IdxFkAddressId.read",
              parameters: {addressId: parameters.addressId},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.Customer.parse)
      .map(nullIsUndefined<Public.Types.Customer>)
      .filter((x): x is Public.Types.Customer => x !== undefined) ?? []
  )
  ;
}

          public async update(parameters: Public.Types.IdxFkAddressId, values: Partial<Public.Types.Customer>) {
            const response = await this.client.invoke<Public.Types.IdxFkAddressId, Partial<Public.Types.Customer>, Public.Types.Customer[] | undefined, never>({
              operation: "Public.Tables.Customer.IdxFkAddressId.update",
              parameters: {addressId: parameters.addressId},
              values: {customerId: values.customerId,storeId: values.storeId,firstName: values.firstName,lastName: values.lastName,email: values.email,addressId: values.addressId,activebool: values.activebool,createDate: values.createDate,lastUpdate: values.lastUpdate,active: values.active}
            });
        
return (
    response.results
      ?.map(Public.Types.Customer.parse)
      .map(nullIsUndefined<Public.Types.Customer>)
      .filter((x): x is Public.Types.Customer => x !== undefined) ?? []
  )
  ;
}

          public async delete(parameters: Public.Types.IdxFkAddressId, options?: Public.Tables.Customer.Options) {
            const response = await this.client.invoke<Public.Types.IdxFkAddressId, never, Public.Types.Customer[] | undefined, Public.Tables.Customer.Options>({
              operation: "Public.Tables.Customer.IdxFkAddressId.delete",
              parameters: {addressId: parameters.addressId},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.Customer.parse)
      .map(nullIsUndefined<Public.Types.Customer>)
      .filter((x): x is Public.Types.Customer => x !== undefined) ?? []
  )
  ;
}
}(this)


          public IdxFkStoreId = new class extends HasClient {
        

          public async read(parameters: Public.Types.IdxFkStoreId, options?: Public.Tables.Customer.Options) {
            const response = await this.client.invoke<Public.Types.IdxFkStoreId, never, Public.Types.Customer[] | undefined, Public.Tables.Customer.Options>({
              operation: "Public.Tables.Customer.IdxFkStoreId.read",
              parameters: {storeId: parameters.storeId},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.Customer.parse)
      .map(nullIsUndefined<Public.Types.Customer>)
      .filter((x): x is Public.Types.Customer => x !== undefined) ?? []
  )
  ;
}

          public async update(parameters: Public.Types.IdxFkStoreId, values: Partial<Public.Types.Customer>) {
            const response = await this.client.invoke<Public.Types.IdxFkStoreId, Partial<Public.Types.Customer>, Public.Types.Customer[] | undefined, never>({
              operation: "Public.Tables.Customer.IdxFkStoreId.update",
              parameters: {storeId: parameters.storeId},
              values: {customerId: values.customerId,storeId: values.storeId,firstName: values.firstName,lastName: values.lastName,email: values.email,addressId: values.addressId,activebool: values.activebool,createDate: values.createDate,lastUpdate: values.lastUpdate,active: values.active}
            });
        
return (
    response.results
      ?.map(Public.Types.Customer.parse)
      .map(nullIsUndefined<Public.Types.Customer>)
      .filter((x): x is Public.Types.Customer => x !== undefined) ?? []
  )
  ;
}

          public async delete(parameters: Public.Types.IdxFkStoreId, options?: Public.Tables.Customer.Options) {
            const response = await this.client.invoke<Public.Types.IdxFkStoreId, never, Public.Types.Customer[] | undefined, Public.Tables.Customer.Options>({
              operation: "Public.Tables.Customer.IdxFkStoreId.delete",
              parameters: {storeId: parameters.storeId},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.Customer.parse)
      .map(nullIsUndefined<Public.Types.Customer>)
      .filter((x): x is Public.Types.Customer => x !== undefined) ?? []
  )
  ;
}
}(this)


          public IdxLastName = new class extends HasClient {
        

          public async read(parameters: Public.Types.IdxLastName, options?: Public.Tables.Customer.Options) {
            const response = await this.client.invoke<Public.Types.IdxLastName, never, Public.Types.Customer[] | undefined, Public.Tables.Customer.Options>({
              operation: "Public.Tables.Customer.IdxLastName.read",
              parameters: {lastName: parameters.lastName},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.Customer.parse)
      .map(nullIsUndefined<Public.Types.Customer>)
      .filter((x): x is Public.Types.Customer => x !== undefined) ?? []
  )
  ;
}

          public async update(parameters: Public.Types.IdxLastName, values: Partial<Public.Types.Customer>) {
            const response = await this.client.invoke<Public.Types.IdxLastName, Partial<Public.Types.Customer>, Public.Types.Customer[] | undefined, never>({
              operation: "Public.Tables.Customer.IdxLastName.update",
              parameters: {lastName: parameters.lastName},
              values: {customerId: values.customerId,storeId: values.storeId,firstName: values.firstName,lastName: values.lastName,email: values.email,addressId: values.addressId,activebool: values.activebool,createDate: values.createDate,lastUpdate: values.lastUpdate,active: values.active}
            });
        
return (
    response.results
      ?.map(Public.Types.Customer.parse)
      .map(nullIsUndefined<Public.Types.Customer>)
      .filter((x): x is Public.Types.Customer => x !== undefined) ?? []
  )
  ;
}

          public async delete(parameters: Public.Types.IdxLastName, options?: Public.Tables.Customer.Options) {
            const response = await this.client.invoke<Public.Types.IdxLastName, never, Public.Types.Customer[] | undefined, Public.Tables.Customer.Options>({
              operation: "Public.Tables.Customer.IdxLastName.delete",
              parameters: {lastName: parameters.lastName},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.Customer.parse)
      .map(nullIsUndefined<Public.Types.Customer>)
      .filter((x): x is Public.Types.Customer => x !== undefined) ?? []
  )
  ;
}
}(this)

}(this)

          public Actor = new class extends HasClient {
        

          public async create(values: Partial<Public.Types.Actor>) : Promise<Public.Types.Actor|undefined> {
            const response = await this.client.invoke<never, Partial<Public.Types.Actor>, Public.Types.Actor, never>({
              operation: "Public.Tables.Actor.create",
              values: {actorId: values.actorId,firstName: values.firstName,lastName: values.lastName,lastUpdate: values.lastUpdate}
            });
            return (
    nullIsUndefined<Public.Types.Actor>(Public.Types.Actor.parse(response.results))
  )
  ;
          }
        

          public async all(options?: Public.Tables.Actor.Options) : Promise<Public.Types.Actor[]> {
            const response = await this.client.invoke<never, never, Public.Types.Actor[], Public.Tables.Actor.Options>({
              operation: "Public.Tables.Actor.all",
              options
            });
            return (
    response.results
      ?.map(Public.Types.Actor.parse)
      .map(nullIsUndefined<Public.Types.Actor>)
      .filter((x): x is Public.Types.Actor => x !== undefined) ?? []
  )
  ;
          }
        

          public ActorPkey = new class extends HasClient {
        

          public async read(parameters: Public.Types.ActorPkey, options?: Public.Tables.Actor.Options) {
            const response = await this.client.invoke<Public.Types.ActorPkey, never, Public.Types.Actor | undefined, Public.Tables.Actor.Options>({
              operation: "Public.Tables.Actor.ActorPkey.read",
              parameters: {actorId: parameters.actorId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.Actor>(Public.Types.Actor.parse(response.results))
  )
  ;
}

          public async update(parameters: Public.Types.ActorPkey, values: Partial<Public.Types.Actor>) {
            const response = await this.client.invoke<Public.Types.ActorPkey, Partial<Public.Types.Actor>, Public.Types.Actor | undefined, never>({
              operation: "Public.Tables.Actor.ActorPkey.update",
              parameters: {actorId: parameters.actorId},
              values: {actorId: values.actorId,firstName: values.firstName,lastName: values.lastName,lastUpdate: values.lastUpdate}
            });
        
return (
    nullIsUndefined<Public.Types.Actor>(Public.Types.Actor.parse(response.results))
  )
  ;
}

          public async delete(parameters: Public.Types.ActorPkey, options?: Public.Tables.Actor.Options) {
            const response = await this.client.invoke<Public.Types.ActorPkey, never, Public.Types.Actor | undefined, Public.Tables.Actor.Options>({
              operation: "Public.Tables.Actor.ActorPkey.delete",
              parameters: {actorId: parameters.actorId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.Actor>(Public.Types.Actor.parse(response.results))
  )
  ;
}
}(this)
public get ByPrimaryKey(){ return this.ActorPkey };

          public IdxActorLastName = new class extends HasClient {
        

          public async read(parameters: Public.Types.IdxActorLastName, options?: Public.Tables.Actor.Options) {
            const response = await this.client.invoke<Public.Types.IdxActorLastName, never, Public.Types.Actor[] | undefined, Public.Tables.Actor.Options>({
              operation: "Public.Tables.Actor.IdxActorLastName.read",
              parameters: {lastName: parameters.lastName},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.Actor.parse)
      .map(nullIsUndefined<Public.Types.Actor>)
      .filter((x): x is Public.Types.Actor => x !== undefined) ?? []
  )
  ;
}

          public async update(parameters: Public.Types.IdxActorLastName, values: Partial<Public.Types.Actor>) {
            const response = await this.client.invoke<Public.Types.IdxActorLastName, Partial<Public.Types.Actor>, Public.Types.Actor[] | undefined, never>({
              operation: "Public.Tables.Actor.IdxActorLastName.update",
              parameters: {lastName: parameters.lastName},
              values: {actorId: values.actorId,firstName: values.firstName,lastName: values.lastName,lastUpdate: values.lastUpdate}
            });
        
return (
    response.results
      ?.map(Public.Types.Actor.parse)
      .map(nullIsUndefined<Public.Types.Actor>)
      .filter((x): x is Public.Types.Actor => x !== undefined) ?? []
  )
  ;
}

          public async delete(parameters: Public.Types.IdxActorLastName, options?: Public.Tables.Actor.Options) {
            const response = await this.client.invoke<Public.Types.IdxActorLastName, never, Public.Types.Actor[] | undefined, Public.Tables.Actor.Options>({
              operation: "Public.Tables.Actor.IdxActorLastName.delete",
              parameters: {lastName: parameters.lastName},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.Actor.parse)
      .map(nullIsUndefined<Public.Types.Actor>)
      .filter((x): x is Public.Types.Actor => x !== undefined) ?? []
  )
  ;
}
}(this)

}(this)

          public FilmCategory = new class extends HasClient {
        

          public async create(values: Partial<Public.Types.FilmCategory>) : Promise<Public.Types.FilmCategory|undefined> {
            const response = await this.client.invoke<never, Partial<Public.Types.FilmCategory>, Public.Types.FilmCategory, never>({
              operation: "Public.Tables.FilmCategory.create",
              values: {filmId: values.filmId,categoryId: values.categoryId,lastUpdate: values.lastUpdate}
            });
            return (
    nullIsUndefined<Public.Types.FilmCategory>(Public.Types.FilmCategory.parse(response.results))
  )
  ;
          }
        

          public async all(options?: Public.Tables.FilmCategory.Options) : Promise<Public.Types.FilmCategory[]> {
            const response = await this.client.invoke<never, never, Public.Types.FilmCategory[], Public.Tables.FilmCategory.Options>({
              operation: "Public.Tables.FilmCategory.all",
              options
            });
            return (
    response.results
      ?.map(Public.Types.FilmCategory.parse)
      .map(nullIsUndefined<Public.Types.FilmCategory>)
      .filter((x): x is Public.Types.FilmCategory => x !== undefined) ?? []
  )
  ;
          }
        

          public FilmCategoryPkey = new class extends HasClient {
        

          public async read(parameters: Public.Types.FilmCategoryPkey, options?: Public.Tables.FilmCategory.Options) {
            const response = await this.client.invoke<Public.Types.FilmCategoryPkey, never, Public.Types.FilmCategory | undefined, Public.Tables.FilmCategory.Options>({
              operation: "Public.Tables.FilmCategory.FilmCategoryPkey.read",
              parameters: {filmId: parameters.filmId,categoryId: parameters.categoryId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.FilmCategory>(Public.Types.FilmCategory.parse(response.results))
  )
  ;
}

          public async update(parameters: Public.Types.FilmCategoryPkey, values: Partial<Public.Types.FilmCategory>) {
            const response = await this.client.invoke<Public.Types.FilmCategoryPkey, Partial<Public.Types.FilmCategory>, Public.Types.FilmCategory | undefined, never>({
              operation: "Public.Tables.FilmCategory.FilmCategoryPkey.update",
              parameters: {filmId: parameters.filmId,categoryId: parameters.categoryId},
              values: {filmId: values.filmId,categoryId: values.categoryId,lastUpdate: values.lastUpdate}
            });
        
return (
    nullIsUndefined<Public.Types.FilmCategory>(Public.Types.FilmCategory.parse(response.results))
  )
  ;
}

          public async delete(parameters: Public.Types.FilmCategoryPkey, options?: Public.Tables.FilmCategory.Options) {
            const response = await this.client.invoke<Public.Types.FilmCategoryPkey, never, Public.Types.FilmCategory | undefined, Public.Tables.FilmCategory.Options>({
              operation: "Public.Tables.FilmCategory.FilmCategoryPkey.delete",
              parameters: {filmId: parameters.filmId,categoryId: parameters.categoryId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.FilmCategory>(Public.Types.FilmCategory.parse(response.results))
  )
  ;
}
}(this)
public get ByPrimaryKey(){ return this.FilmCategoryPkey };
}(this)

          public Inventory = new class extends HasClient {
        

          public async create(values: Partial<Public.Types.Inventory>) : Promise<Public.Types.Inventory|undefined> {
            const response = await this.client.invoke<never, Partial<Public.Types.Inventory>, Public.Types.Inventory, never>({
              operation: "Public.Tables.Inventory.create",
              values: {inventoryId: values.inventoryId,filmId: values.filmId,storeId: values.storeId,lastUpdate: values.lastUpdate}
            });
            return (
    nullIsUndefined<Public.Types.Inventory>(Public.Types.Inventory.parse(response.results))
  )
  ;
          }
        

          public async all(options?: Public.Tables.Inventory.Options) : Promise<Public.Types.Inventory[]> {
            const response = await this.client.invoke<never, never, Public.Types.Inventory[], Public.Tables.Inventory.Options>({
              operation: "Public.Tables.Inventory.all",
              options
            });
            return (
    response.results
      ?.map(Public.Types.Inventory.parse)
      .map(nullIsUndefined<Public.Types.Inventory>)
      .filter((x): x is Public.Types.Inventory => x !== undefined) ?? []
  )
  ;
          }
        

          public InventoryPkey = new class extends HasClient {
        

          public async read(parameters: Public.Types.InventoryPkey, options?: Public.Tables.Inventory.Options) {
            const response = await this.client.invoke<Public.Types.InventoryPkey, never, Public.Types.Inventory | undefined, Public.Tables.Inventory.Options>({
              operation: "Public.Tables.Inventory.InventoryPkey.read",
              parameters: {inventoryId: parameters.inventoryId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.Inventory>(Public.Types.Inventory.parse(response.results))
  )
  ;
}

          public async update(parameters: Public.Types.InventoryPkey, values: Partial<Public.Types.Inventory>) {
            const response = await this.client.invoke<Public.Types.InventoryPkey, Partial<Public.Types.Inventory>, Public.Types.Inventory | undefined, never>({
              operation: "Public.Tables.Inventory.InventoryPkey.update",
              parameters: {inventoryId: parameters.inventoryId},
              values: {inventoryId: values.inventoryId,filmId: values.filmId,storeId: values.storeId,lastUpdate: values.lastUpdate}
            });
        
return (
    nullIsUndefined<Public.Types.Inventory>(Public.Types.Inventory.parse(response.results))
  )
  ;
}

          public async delete(parameters: Public.Types.InventoryPkey, options?: Public.Tables.Inventory.Options) {
            const response = await this.client.invoke<Public.Types.InventoryPkey, never, Public.Types.Inventory | undefined, Public.Tables.Inventory.Options>({
              operation: "Public.Tables.Inventory.InventoryPkey.delete",
              parameters: {inventoryId: parameters.inventoryId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.Inventory>(Public.Types.Inventory.parse(response.results))
  )
  ;
}
}(this)
public get ByPrimaryKey(){ return this.InventoryPkey };

          public IdxStoreIdFilmId = new class extends HasClient {
        

          public async read(parameters: Public.Types.IdxStoreIdFilmId, options?: Public.Tables.Inventory.Options) {
            const response = await this.client.invoke<Public.Types.IdxStoreIdFilmId, never, Public.Types.Inventory[] | undefined, Public.Tables.Inventory.Options>({
              operation: "Public.Tables.Inventory.IdxStoreIdFilmId.read",
              parameters: {storeId: parameters.storeId,filmId: parameters.filmId},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.Inventory.parse)
      .map(nullIsUndefined<Public.Types.Inventory>)
      .filter((x): x is Public.Types.Inventory => x !== undefined) ?? []
  )
  ;
}

          public async update(parameters: Public.Types.IdxStoreIdFilmId, values: Partial<Public.Types.Inventory>) {
            const response = await this.client.invoke<Public.Types.IdxStoreIdFilmId, Partial<Public.Types.Inventory>, Public.Types.Inventory[] | undefined, never>({
              operation: "Public.Tables.Inventory.IdxStoreIdFilmId.update",
              parameters: {storeId: parameters.storeId,filmId: parameters.filmId},
              values: {inventoryId: values.inventoryId,filmId: values.filmId,storeId: values.storeId,lastUpdate: values.lastUpdate}
            });
        
return (
    response.results
      ?.map(Public.Types.Inventory.parse)
      .map(nullIsUndefined<Public.Types.Inventory>)
      .filter((x): x is Public.Types.Inventory => x !== undefined) ?? []
  )
  ;
}

          public async delete(parameters: Public.Types.IdxStoreIdFilmId, options?: Public.Tables.Inventory.Options) {
            const response = await this.client.invoke<Public.Types.IdxStoreIdFilmId, never, Public.Types.Inventory[] | undefined, Public.Tables.Inventory.Options>({
              operation: "Public.Tables.Inventory.IdxStoreIdFilmId.delete",
              parameters: {storeId: parameters.storeId,filmId: parameters.filmId},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.Inventory.parse)
      .map(nullIsUndefined<Public.Types.Inventory>)
      .filter((x): x is Public.Types.Inventory => x !== undefined) ?? []
  )
  ;
}
}(this)

}(this)

          public Category = new class extends HasClient {
        

          public async create(values: Partial<Public.Types.Category>) : Promise<Public.Types.Category|undefined> {
            const response = await this.client.invoke<never, Partial<Public.Types.Category>, Public.Types.Category, never>({
              operation: "Public.Tables.Category.create",
              values: {categoryId: values.categoryId,name: values.name,lastUpdate: values.lastUpdate}
            });
            return (
    nullIsUndefined<Public.Types.Category>(Public.Types.Category.parse(response.results))
  )
  ;
          }
        

          public async all(options?: Public.Tables.Category.Options) : Promise<Public.Types.Category[]> {
            const response = await this.client.invoke<never, never, Public.Types.Category[], Public.Tables.Category.Options>({
              operation: "Public.Tables.Category.all",
              options
            });
            return (
    response.results
      ?.map(Public.Types.Category.parse)
      .map(nullIsUndefined<Public.Types.Category>)
      .filter((x): x is Public.Types.Category => x !== undefined) ?? []
  )
  ;
          }
        

          public CategoryPkey = new class extends HasClient {
        

          public async read(parameters: Public.Types.CategoryPkey, options?: Public.Tables.Category.Options) {
            const response = await this.client.invoke<Public.Types.CategoryPkey, never, Public.Types.Category | undefined, Public.Tables.Category.Options>({
              operation: "Public.Tables.Category.CategoryPkey.read",
              parameters: {categoryId: parameters.categoryId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.Category>(Public.Types.Category.parse(response.results))
  )
  ;
}

          public async update(parameters: Public.Types.CategoryPkey, values: Partial<Public.Types.Category>) {
            const response = await this.client.invoke<Public.Types.CategoryPkey, Partial<Public.Types.Category>, Public.Types.Category | undefined, never>({
              operation: "Public.Tables.Category.CategoryPkey.update",
              parameters: {categoryId: parameters.categoryId},
              values: {categoryId: values.categoryId,name: values.name,lastUpdate: values.lastUpdate}
            });
        
return (
    nullIsUndefined<Public.Types.Category>(Public.Types.Category.parse(response.results))
  )
  ;
}

          public async delete(parameters: Public.Types.CategoryPkey, options?: Public.Tables.Category.Options) {
            const response = await this.client.invoke<Public.Types.CategoryPkey, never, Public.Types.Category | undefined, Public.Tables.Category.Options>({
              operation: "Public.Tables.Category.CategoryPkey.delete",
              parameters: {categoryId: parameters.categoryId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.Category>(Public.Types.Category.parse(response.results))
  )
  ;
}
}(this)
public get ByPrimaryKey(){ return this.CategoryPkey };
}(this)

          public Country = new class extends HasClient {
        

          public async create(values: Partial<Public.Types.Country>) : Promise<Public.Types.Country|undefined> {
            const response = await this.client.invoke<never, Partial<Public.Types.Country>, Public.Types.Country, never>({
              operation: "Public.Tables.Country.create",
              values: {countryId: values.countryId,country: values.country,lastUpdate: values.lastUpdate}
            });
            return (
    nullIsUndefined<Public.Types.Country>(Public.Types.Country.parse(response.results))
  )
  ;
          }
        

          public async all(options?: Public.Tables.Country.Options) : Promise<Public.Types.Country[]> {
            const response = await this.client.invoke<never, never, Public.Types.Country[], Public.Tables.Country.Options>({
              operation: "Public.Tables.Country.all",
              options
            });
            return (
    response.results
      ?.map(Public.Types.Country.parse)
      .map(nullIsUndefined<Public.Types.Country>)
      .filter((x): x is Public.Types.Country => x !== undefined) ?? []
  )
  ;
          }
        

          public CountryPkey = new class extends HasClient {
        

          public async read(parameters: Public.Types.CountryPkey, options?: Public.Tables.Country.Options) {
            const response = await this.client.invoke<Public.Types.CountryPkey, never, Public.Types.Country | undefined, Public.Tables.Country.Options>({
              operation: "Public.Tables.Country.CountryPkey.read",
              parameters: {countryId: parameters.countryId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.Country>(Public.Types.Country.parse(response.results))
  )
  ;
}

          public async update(parameters: Public.Types.CountryPkey, values: Partial<Public.Types.Country>) {
            const response = await this.client.invoke<Public.Types.CountryPkey, Partial<Public.Types.Country>, Public.Types.Country | undefined, never>({
              operation: "Public.Tables.Country.CountryPkey.update",
              parameters: {countryId: parameters.countryId},
              values: {countryId: values.countryId,country: values.country,lastUpdate: values.lastUpdate}
            });
        
return (
    nullIsUndefined<Public.Types.Country>(Public.Types.Country.parse(response.results))
  )
  ;
}

          public async delete(parameters: Public.Types.CountryPkey, options?: Public.Tables.Country.Options) {
            const response = await this.client.invoke<Public.Types.CountryPkey, never, Public.Types.Country | undefined, Public.Tables.Country.Options>({
              operation: "Public.Tables.Country.CountryPkey.delete",
              parameters: {countryId: parameters.countryId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.Country>(Public.Types.Country.parse(response.results))
  )
  ;
}
}(this)
public get ByPrimaryKey(){ return this.CountryPkey };
}(this)

          public Language = new class extends HasClient {
        

          public async create(values: Partial<Public.Types.Language>) : Promise<Public.Types.Language|undefined> {
            const response = await this.client.invoke<never, Partial<Public.Types.Language>, Public.Types.Language, never>({
              operation: "Public.Tables.Language.create",
              values: {languageId: values.languageId,name: values.name,lastUpdate: values.lastUpdate}
            });
            return (
    nullIsUndefined<Public.Types.Language>(Public.Types.Language.parse(response.results))
  )
  ;
          }
        

          public async all(options?: Public.Tables.Language.Options) : Promise<Public.Types.Language[]> {
            const response = await this.client.invoke<never, never, Public.Types.Language[], Public.Tables.Language.Options>({
              operation: "Public.Tables.Language.all",
              options
            });
            return (
    response.results
      ?.map(Public.Types.Language.parse)
      .map(nullIsUndefined<Public.Types.Language>)
      .filter((x): x is Public.Types.Language => x !== undefined) ?? []
  )
  ;
          }
        

          public LanguagePkey = new class extends HasClient {
        

          public async read(parameters: Public.Types.LanguagePkey, options?: Public.Tables.Language.Options) {
            const response = await this.client.invoke<Public.Types.LanguagePkey, never, Public.Types.Language | undefined, Public.Tables.Language.Options>({
              operation: "Public.Tables.Language.LanguagePkey.read",
              parameters: {languageId: parameters.languageId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.Language>(Public.Types.Language.parse(response.results))
  )
  ;
}

          public async update(parameters: Public.Types.LanguagePkey, values: Partial<Public.Types.Language>) {
            const response = await this.client.invoke<Public.Types.LanguagePkey, Partial<Public.Types.Language>, Public.Types.Language | undefined, never>({
              operation: "Public.Tables.Language.LanguagePkey.update",
              parameters: {languageId: parameters.languageId},
              values: {languageId: values.languageId,name: values.name,lastUpdate: values.lastUpdate}
            });
        
return (
    nullIsUndefined<Public.Types.Language>(Public.Types.Language.parse(response.results))
  )
  ;
}

          public async delete(parameters: Public.Types.LanguagePkey, options?: Public.Tables.Language.Options) {
            const response = await this.client.invoke<Public.Types.LanguagePkey, never, Public.Types.Language | undefined, Public.Tables.Language.Options>({
              operation: "Public.Tables.Language.LanguagePkey.delete",
              parameters: {languageId: parameters.languageId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.Language>(Public.Types.Language.parse(response.results))
  )
  ;
}
}(this)
public get ByPrimaryKey(){ return this.LanguagePkey };
}(this)

          public Rental = new class extends HasClient {
        

          public async create(values: Partial<Public.Types.Rental>) : Promise<Public.Types.Rental|undefined> {
            const response = await this.client.invoke<never, Partial<Public.Types.Rental>, Public.Types.Rental, never>({
              operation: "Public.Tables.Rental.create",
              values: {rentalId: values.rentalId,rentalDate: values.rentalDate,inventoryId: values.inventoryId,customerId: values.customerId,returnDate: values.returnDate,staffId: values.staffId,lastUpdate: values.lastUpdate}
            });
            return (
    nullIsUndefined<Public.Types.Rental>(Public.Types.Rental.parse(response.results))
  )
  ;
          }
        

          public async all(options?: Public.Tables.Rental.Options) : Promise<Public.Types.Rental[]> {
            const response = await this.client.invoke<never, never, Public.Types.Rental[], Public.Tables.Rental.Options>({
              operation: "Public.Tables.Rental.all",
              options
            });
            return (
    response.results
      ?.map(Public.Types.Rental.parse)
      .map(nullIsUndefined<Public.Types.Rental>)
      .filter((x): x is Public.Types.Rental => x !== undefined) ?? []
  )
  ;
          }
        

          public RentalPkey = new class extends HasClient {
        

          public async read(parameters: Public.Types.RentalPkey, options?: Public.Tables.Rental.Options) {
            const response = await this.client.invoke<Public.Types.RentalPkey, never, Public.Types.Rental | undefined, Public.Tables.Rental.Options>({
              operation: "Public.Tables.Rental.RentalPkey.read",
              parameters: {rentalId: parameters.rentalId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.Rental>(Public.Types.Rental.parse(response.results))
  )
  ;
}

          public async update(parameters: Public.Types.RentalPkey, values: Partial<Public.Types.Rental>) {
            const response = await this.client.invoke<Public.Types.RentalPkey, Partial<Public.Types.Rental>, Public.Types.Rental | undefined, never>({
              operation: "Public.Tables.Rental.RentalPkey.update",
              parameters: {rentalId: parameters.rentalId},
              values: {rentalId: values.rentalId,rentalDate: values.rentalDate,inventoryId: values.inventoryId,customerId: values.customerId,returnDate: values.returnDate,staffId: values.staffId,lastUpdate: values.lastUpdate}
            });
        
return (
    nullIsUndefined<Public.Types.Rental>(Public.Types.Rental.parse(response.results))
  )
  ;
}

          public async delete(parameters: Public.Types.RentalPkey, options?: Public.Tables.Rental.Options) {
            const response = await this.client.invoke<Public.Types.RentalPkey, never, Public.Types.Rental | undefined, Public.Tables.Rental.Options>({
              operation: "Public.Tables.Rental.RentalPkey.delete",
              parameters: {rentalId: parameters.rentalId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.Rental>(Public.Types.Rental.parse(response.results))
  )
  ;
}
}(this)
public get ByPrimaryKey(){ return this.RentalPkey };

          public IdxFkInventoryId = new class extends HasClient {
        

          public async read(parameters: Public.Types.IdxFkInventoryId, options?: Public.Tables.Rental.Options) {
            const response = await this.client.invoke<Public.Types.IdxFkInventoryId, never, Public.Types.Rental[] | undefined, Public.Tables.Rental.Options>({
              operation: "Public.Tables.Rental.IdxFkInventoryId.read",
              parameters: {inventoryId: parameters.inventoryId},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.Rental.parse)
      .map(nullIsUndefined<Public.Types.Rental>)
      .filter((x): x is Public.Types.Rental => x !== undefined) ?? []
  )
  ;
}

          public async update(parameters: Public.Types.IdxFkInventoryId, values: Partial<Public.Types.Rental>) {
            const response = await this.client.invoke<Public.Types.IdxFkInventoryId, Partial<Public.Types.Rental>, Public.Types.Rental[] | undefined, never>({
              operation: "Public.Tables.Rental.IdxFkInventoryId.update",
              parameters: {inventoryId: parameters.inventoryId},
              values: {rentalId: values.rentalId,rentalDate: values.rentalDate,inventoryId: values.inventoryId,customerId: values.customerId,returnDate: values.returnDate,staffId: values.staffId,lastUpdate: values.lastUpdate}
            });
        
return (
    response.results
      ?.map(Public.Types.Rental.parse)
      .map(nullIsUndefined<Public.Types.Rental>)
      .filter((x): x is Public.Types.Rental => x !== undefined) ?? []
  )
  ;
}

          public async delete(parameters: Public.Types.IdxFkInventoryId, options?: Public.Tables.Rental.Options) {
            const response = await this.client.invoke<Public.Types.IdxFkInventoryId, never, Public.Types.Rental[] | undefined, Public.Tables.Rental.Options>({
              operation: "Public.Tables.Rental.IdxFkInventoryId.delete",
              parameters: {inventoryId: parameters.inventoryId},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.Rental.parse)
      .map(nullIsUndefined<Public.Types.Rental>)
      .filter((x): x is Public.Types.Rental => x !== undefined) ?? []
  )
  ;
}
}(this)


          public IdxUnqRentalRentalDateInventoryIdCustomerId = new class extends HasClient {
        

          public async read(parameters: Public.Types.IdxUnqRentalRentalDateInventoryIdCustomerId, options?: Public.Tables.Rental.Options) {
            const response = await this.client.invoke<Public.Types.IdxUnqRentalRentalDateInventoryIdCustomerId, never, Public.Types.Rental | undefined, Public.Tables.Rental.Options>({
              operation: "Public.Tables.Rental.IdxUnqRentalRentalDateInventoryIdCustomerId.read",
              parameters: {rentalDate: parameters.rentalDate,inventoryId: parameters.inventoryId,customerId: parameters.customerId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.Rental>(Public.Types.Rental.parse(response.results))
  )
  ;
}

          public async update(parameters: Public.Types.IdxUnqRentalRentalDateInventoryIdCustomerId, values: Partial<Public.Types.Rental>) {
            const response = await this.client.invoke<Public.Types.IdxUnqRentalRentalDateInventoryIdCustomerId, Partial<Public.Types.Rental>, Public.Types.Rental | undefined, never>({
              operation: "Public.Tables.Rental.IdxUnqRentalRentalDateInventoryIdCustomerId.update",
              parameters: {rentalDate: parameters.rentalDate,inventoryId: parameters.inventoryId,customerId: parameters.customerId},
              values: {rentalId: values.rentalId,rentalDate: values.rentalDate,inventoryId: values.inventoryId,customerId: values.customerId,returnDate: values.returnDate,staffId: values.staffId,lastUpdate: values.lastUpdate}
            });
        
return (
    nullIsUndefined<Public.Types.Rental>(Public.Types.Rental.parse(response.results))
  )
  ;
}

          public async delete(parameters: Public.Types.IdxUnqRentalRentalDateInventoryIdCustomerId, options?: Public.Tables.Rental.Options) {
            const response = await this.client.invoke<Public.Types.IdxUnqRentalRentalDateInventoryIdCustomerId, never, Public.Types.Rental | undefined, Public.Tables.Rental.Options>({
              operation: "Public.Tables.Rental.IdxUnqRentalRentalDateInventoryIdCustomerId.delete",
              parameters: {rentalDate: parameters.rentalDate,inventoryId: parameters.inventoryId,customerId: parameters.customerId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.Rental>(Public.Types.Rental.parse(response.results))
  )
  ;
}
}(this)

}(this)

          public Staff = new class extends HasClient {
        

          public async create(values: Partial<Public.Types.Staff>) : Promise<Public.Types.Staff|undefined> {
            const response = await this.client.invoke<never, Partial<Public.Types.Staff>, Public.Types.Staff, never>({
              operation: "Public.Tables.Staff.create",
              values: {staffId: values.staffId,firstName: values.firstName,lastName: values.lastName,addressId: values.addressId,email: values.email,storeId: values.storeId,active: values.active,username: values.username,password: values.password,lastUpdate: values.lastUpdate,picture: values.picture}
            });
            return (
    nullIsUndefined<Public.Types.Staff>(Public.Types.Staff.parse(response.results))
  )
  ;
          }
        

          public async all(options?: Public.Tables.Staff.Options) : Promise<Public.Types.Staff[]> {
            const response = await this.client.invoke<never, never, Public.Types.Staff[], Public.Tables.Staff.Options>({
              operation: "Public.Tables.Staff.all",
              options
            });
            return (
    response.results
      ?.map(Public.Types.Staff.parse)
      .map(nullIsUndefined<Public.Types.Staff>)
      .filter((x): x is Public.Types.Staff => x !== undefined) ?? []
  )
  ;
          }
        

          public StaffPkey = new class extends HasClient {
        

          public async read(parameters: Public.Types.StaffPkey, options?: Public.Tables.Staff.Options) {
            const response = await this.client.invoke<Public.Types.StaffPkey, never, Public.Types.Staff | undefined, Public.Tables.Staff.Options>({
              operation: "Public.Tables.Staff.StaffPkey.read",
              parameters: {staffId: parameters.staffId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.Staff>(Public.Types.Staff.parse(response.results))
  )
  ;
}

          public async update(parameters: Public.Types.StaffPkey, values: Partial<Public.Types.Staff>) {
            const response = await this.client.invoke<Public.Types.StaffPkey, Partial<Public.Types.Staff>, Public.Types.Staff | undefined, never>({
              operation: "Public.Tables.Staff.StaffPkey.update",
              parameters: {staffId: parameters.staffId},
              values: {staffId: values.staffId,firstName: values.firstName,lastName: values.lastName,addressId: values.addressId,email: values.email,storeId: values.storeId,active: values.active,username: values.username,password: values.password,lastUpdate: values.lastUpdate,picture: values.picture}
            });
        
return (
    nullIsUndefined<Public.Types.Staff>(Public.Types.Staff.parse(response.results))
  )
  ;
}

          public async delete(parameters: Public.Types.StaffPkey, options?: Public.Tables.Staff.Options) {
            const response = await this.client.invoke<Public.Types.StaffPkey, never, Public.Types.Staff | undefined, Public.Tables.Staff.Options>({
              operation: "Public.Tables.Staff.StaffPkey.delete",
              parameters: {staffId: parameters.staffId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.Staff>(Public.Types.Staff.parse(response.results))
  )
  ;
}
}(this)
public get ByPrimaryKey(){ return this.StaffPkey };
}(this)

          public Store = new class extends HasClient {
        

          public async create(values: Partial<Public.Types.Store>) : Promise<Public.Types.Store|undefined> {
            const response = await this.client.invoke<never, Partial<Public.Types.Store>, Public.Types.Store, never>({
              operation: "Public.Tables.Store.create",
              values: {storeId: values.storeId,managerStaffId: values.managerStaffId,addressId: values.addressId,lastUpdate: values.lastUpdate}
            });
            return (
    nullIsUndefined<Public.Types.Store>(Public.Types.Store.parse(response.results))
  )
  ;
          }
        

          public async all(options?: Public.Tables.Store.Options) : Promise<Public.Types.Store[]> {
            const response = await this.client.invoke<never, never, Public.Types.Store[], Public.Tables.Store.Options>({
              operation: "Public.Tables.Store.all",
              options
            });
            return (
    response.results
      ?.map(Public.Types.Store.parse)
      .map(nullIsUndefined<Public.Types.Store>)
      .filter((x): x is Public.Types.Store => x !== undefined) ?? []
  )
  ;
          }
        

          public StorePkey = new class extends HasClient {
        

          public async read(parameters: Public.Types.StorePkey, options?: Public.Tables.Store.Options) {
            const response = await this.client.invoke<Public.Types.StorePkey, never, Public.Types.Store | undefined, Public.Tables.Store.Options>({
              operation: "Public.Tables.Store.StorePkey.read",
              parameters: {storeId: parameters.storeId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.Store>(Public.Types.Store.parse(response.results))
  )
  ;
}

          public async update(parameters: Public.Types.StorePkey, values: Partial<Public.Types.Store>) {
            const response = await this.client.invoke<Public.Types.StorePkey, Partial<Public.Types.Store>, Public.Types.Store | undefined, never>({
              operation: "Public.Tables.Store.StorePkey.update",
              parameters: {storeId: parameters.storeId},
              values: {storeId: values.storeId,managerStaffId: values.managerStaffId,addressId: values.addressId,lastUpdate: values.lastUpdate}
            });
        
return (
    nullIsUndefined<Public.Types.Store>(Public.Types.Store.parse(response.results))
  )
  ;
}

          public async delete(parameters: Public.Types.StorePkey, options?: Public.Tables.Store.Options) {
            const response = await this.client.invoke<Public.Types.StorePkey, never, Public.Types.Store | undefined, Public.Tables.Store.Options>({
              operation: "Public.Tables.Store.StorePkey.delete",
              parameters: {storeId: parameters.storeId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.Store>(Public.Types.Store.parse(response.results))
  )
  ;
}
}(this)
public get ByPrimaryKey(){ return this.StorePkey };

          public IdxUnqManagerStaffId = new class extends HasClient {
        

          public async read(parameters: Public.Types.IdxUnqManagerStaffId, options?: Public.Tables.Store.Options) {
            const response = await this.client.invoke<Public.Types.IdxUnqManagerStaffId, never, Public.Types.Store | undefined, Public.Tables.Store.Options>({
              operation: "Public.Tables.Store.IdxUnqManagerStaffId.read",
              parameters: {managerStaffId: parameters.managerStaffId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.Store>(Public.Types.Store.parse(response.results))
  )
  ;
}

          public async update(parameters: Public.Types.IdxUnqManagerStaffId, values: Partial<Public.Types.Store>) {
            const response = await this.client.invoke<Public.Types.IdxUnqManagerStaffId, Partial<Public.Types.Store>, Public.Types.Store | undefined, never>({
              operation: "Public.Tables.Store.IdxUnqManagerStaffId.update",
              parameters: {managerStaffId: parameters.managerStaffId},
              values: {storeId: values.storeId,managerStaffId: values.managerStaffId,addressId: values.addressId,lastUpdate: values.lastUpdate}
            });
        
return (
    nullIsUndefined<Public.Types.Store>(Public.Types.Store.parse(response.results))
  )
  ;
}

          public async delete(parameters: Public.Types.IdxUnqManagerStaffId, options?: Public.Tables.Store.Options) {
            const response = await this.client.invoke<Public.Types.IdxUnqManagerStaffId, never, Public.Types.Store | undefined, Public.Tables.Store.Options>({
              operation: "Public.Tables.Store.IdxUnqManagerStaffId.delete",
              parameters: {managerStaffId: parameters.managerStaffId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.Store>(Public.Types.Store.parse(response.results))
  )
  ;
}
}(this)

}(this)

          public Payment = new class extends HasClient {
        

          public async create(values: Partial<Public.Types.Payment>) : Promise<Public.Types.Payment|undefined> {
            const response = await this.client.invoke<never, Partial<Public.Types.Payment>, Public.Types.Payment, never>({
              operation: "Public.Tables.Payment.create",
              values: {paymentId: values.paymentId,customerId: values.customerId,staffId: values.staffId,rentalId: values.rentalId,amount: values.amount,paymentDate: values.paymentDate}
            });
            return (
    nullIsUndefined<Public.Types.Payment>(Public.Types.Payment.parse(response.results))
  )
  ;
          }
        

          public async all(options?: Public.Tables.Payment.Options) : Promise<Public.Types.Payment[]> {
            const response = await this.client.invoke<never, never, Public.Types.Payment[], Public.Tables.Payment.Options>({
              operation: "Public.Tables.Payment.all",
              options
            });
            return (
    response.results
      ?.map(Public.Types.Payment.parse)
      .map(nullIsUndefined<Public.Types.Payment>)
      .filter((x): x is Public.Types.Payment => x !== undefined) ?? []
  )
  ;
          }
        

          public PaymentPkey = new class extends HasClient {
        

          public async read(parameters: Public.Types.PaymentPkey, options?: Public.Tables.Payment.Options) {
            const response = await this.client.invoke<Public.Types.PaymentPkey, never, Public.Types.Payment | undefined, Public.Tables.Payment.Options>({
              operation: "Public.Tables.Payment.PaymentPkey.read",
              parameters: {paymentId: parameters.paymentId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.Payment>(Public.Types.Payment.parse(response.results))
  )
  ;
}

          public async update(parameters: Public.Types.PaymentPkey, values: Partial<Public.Types.Payment>) {
            const response = await this.client.invoke<Public.Types.PaymentPkey, Partial<Public.Types.Payment>, Public.Types.Payment | undefined, never>({
              operation: "Public.Tables.Payment.PaymentPkey.update",
              parameters: {paymentId: parameters.paymentId},
              values: {paymentId: values.paymentId,customerId: values.customerId,staffId: values.staffId,rentalId: values.rentalId,amount: values.amount,paymentDate: values.paymentDate}
            });
        
return (
    nullIsUndefined<Public.Types.Payment>(Public.Types.Payment.parse(response.results))
  )
  ;
}

          public async delete(parameters: Public.Types.PaymentPkey, options?: Public.Tables.Payment.Options) {
            const response = await this.client.invoke<Public.Types.PaymentPkey, never, Public.Types.Payment | undefined, Public.Tables.Payment.Options>({
              operation: "Public.Tables.Payment.PaymentPkey.delete",
              parameters: {paymentId: parameters.paymentId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.Payment>(Public.Types.Payment.parse(response.results))
  )
  ;
}
}(this)
public get ByPrimaryKey(){ return this.PaymentPkey };

          public IdxFkCustomerId = new class extends HasClient {
        

          public async read(parameters: Public.Types.IdxFkCustomerId, options?: Public.Tables.Payment.Options) {
            const response = await this.client.invoke<Public.Types.IdxFkCustomerId, never, Public.Types.Payment[] | undefined, Public.Tables.Payment.Options>({
              operation: "Public.Tables.Payment.IdxFkCustomerId.read",
              parameters: {customerId: parameters.customerId},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.Payment.parse)
      .map(nullIsUndefined<Public.Types.Payment>)
      .filter((x): x is Public.Types.Payment => x !== undefined) ?? []
  )
  ;
}

          public async update(parameters: Public.Types.IdxFkCustomerId, values: Partial<Public.Types.Payment>) {
            const response = await this.client.invoke<Public.Types.IdxFkCustomerId, Partial<Public.Types.Payment>, Public.Types.Payment[] | undefined, never>({
              operation: "Public.Tables.Payment.IdxFkCustomerId.update",
              parameters: {customerId: parameters.customerId},
              values: {paymentId: values.paymentId,customerId: values.customerId,staffId: values.staffId,rentalId: values.rentalId,amount: values.amount,paymentDate: values.paymentDate}
            });
        
return (
    response.results
      ?.map(Public.Types.Payment.parse)
      .map(nullIsUndefined<Public.Types.Payment>)
      .filter((x): x is Public.Types.Payment => x !== undefined) ?? []
  )
  ;
}

          public async delete(parameters: Public.Types.IdxFkCustomerId, options?: Public.Tables.Payment.Options) {
            const response = await this.client.invoke<Public.Types.IdxFkCustomerId, never, Public.Types.Payment[] | undefined, Public.Tables.Payment.Options>({
              operation: "Public.Tables.Payment.IdxFkCustomerId.delete",
              parameters: {customerId: parameters.customerId},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.Payment.parse)
      .map(nullIsUndefined<Public.Types.Payment>)
      .filter((x): x is Public.Types.Payment => x !== undefined) ?? []
  )
  ;
}
}(this)


          public IdxFkRentalId = new class extends HasClient {
        

          public async read(parameters: Public.Types.IdxFkRentalId, options?: Public.Tables.Payment.Options) {
            const response = await this.client.invoke<Public.Types.IdxFkRentalId, never, Public.Types.Payment[] | undefined, Public.Tables.Payment.Options>({
              operation: "Public.Tables.Payment.IdxFkRentalId.read",
              parameters: {rentalId: parameters.rentalId},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.Payment.parse)
      .map(nullIsUndefined<Public.Types.Payment>)
      .filter((x): x is Public.Types.Payment => x !== undefined) ?? []
  )
  ;
}

          public async update(parameters: Public.Types.IdxFkRentalId, values: Partial<Public.Types.Payment>) {
            const response = await this.client.invoke<Public.Types.IdxFkRentalId, Partial<Public.Types.Payment>, Public.Types.Payment[] | undefined, never>({
              operation: "Public.Tables.Payment.IdxFkRentalId.update",
              parameters: {rentalId: parameters.rentalId},
              values: {paymentId: values.paymentId,customerId: values.customerId,staffId: values.staffId,rentalId: values.rentalId,amount: values.amount,paymentDate: values.paymentDate}
            });
        
return (
    response.results
      ?.map(Public.Types.Payment.parse)
      .map(nullIsUndefined<Public.Types.Payment>)
      .filter((x): x is Public.Types.Payment => x !== undefined) ?? []
  )
  ;
}

          public async delete(parameters: Public.Types.IdxFkRentalId, options?: Public.Tables.Payment.Options) {
            const response = await this.client.invoke<Public.Types.IdxFkRentalId, never, Public.Types.Payment[] | undefined, Public.Tables.Payment.Options>({
              operation: "Public.Tables.Payment.IdxFkRentalId.delete",
              parameters: {rentalId: parameters.rentalId},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.Payment.parse)
      .map(nullIsUndefined<Public.Types.Payment>)
      .filter((x): x is Public.Types.Payment => x !== undefined) ?? []
  )
  ;
}
}(this)


          public IdxFkStaffId = new class extends HasClient {
        

          public async read(parameters: Public.Types.IdxFkStaffId, options?: Public.Tables.Payment.Options) {
            const response = await this.client.invoke<Public.Types.IdxFkStaffId, never, Public.Types.Payment[] | undefined, Public.Tables.Payment.Options>({
              operation: "Public.Tables.Payment.IdxFkStaffId.read",
              parameters: {staffId: parameters.staffId},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.Payment.parse)
      .map(nullIsUndefined<Public.Types.Payment>)
      .filter((x): x is Public.Types.Payment => x !== undefined) ?? []
  )
  ;
}

          public async update(parameters: Public.Types.IdxFkStaffId, values: Partial<Public.Types.Payment>) {
            const response = await this.client.invoke<Public.Types.IdxFkStaffId, Partial<Public.Types.Payment>, Public.Types.Payment[] | undefined, never>({
              operation: "Public.Tables.Payment.IdxFkStaffId.update",
              parameters: {staffId: parameters.staffId},
              values: {paymentId: values.paymentId,customerId: values.customerId,staffId: values.staffId,rentalId: values.rentalId,amount: values.amount,paymentDate: values.paymentDate}
            });
        
return (
    response.results
      ?.map(Public.Types.Payment.parse)
      .map(nullIsUndefined<Public.Types.Payment>)
      .filter((x): x is Public.Types.Payment => x !== undefined) ?? []
  )
  ;
}

          public async delete(parameters: Public.Types.IdxFkStaffId, options?: Public.Tables.Payment.Options) {
            const response = await this.client.invoke<Public.Types.IdxFkStaffId, never, Public.Types.Payment[] | undefined, Public.Tables.Payment.Options>({
              operation: "Public.Tables.Payment.IdxFkStaffId.delete",
              parameters: {staffId: parameters.staffId},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.Payment.parse)
      .map(nullIsUndefined<Public.Types.Payment>)
      .filter((x): x is Public.Types.Payment => x !== undefined) ?? []
  )
  ;
}
}(this)

}(this)

          public Film = new class extends HasClient {
        

          public async create(values: Partial<Public.Types.Film>) : Promise<Public.Types.Film|undefined> {
            const response = await this.client.invoke<never, Partial<Public.Types.Film>, Public.Types.Film, never>({
              operation: "Public.Tables.Film.create",
              values: {filmId: values.filmId,title: values.title,description: values.description,releaseYear: values.releaseYear,languageId: values.languageId,rentalDuration: values.rentalDuration,rentalRate: values.rentalRate,length: values.length,replacementCost: values.replacementCost,rating: values.rating,lastUpdate: values.lastUpdate,specialFeatures: values.specialFeatures,fulltext: values.fulltext}
            });
            return (
    nullIsUndefined<Public.Types.Film>(Public.Types.Film.parse(response.results))
  )
  ;
          }
        

          public async all(options?: Public.Tables.Film.Options) : Promise<Public.Types.Film[]> {
            const response = await this.client.invoke<never, never, Public.Types.Film[], Public.Tables.Film.Options>({
              operation: "Public.Tables.Film.all",
              options
            });
            return (
    response.results
      ?.map(Public.Types.Film.parse)
      .map(nullIsUndefined<Public.Types.Film>)
      .filter((x): x is Public.Types.Film => x !== undefined) ?? []
  )
  ;
          }
        

          public FilmPkey = new class extends HasClient {
        

          public async read(parameters: Public.Types.FilmPkey, options?: Public.Tables.Film.Options) {
            const response = await this.client.invoke<Public.Types.FilmPkey, never, Public.Types.Film | undefined, Public.Tables.Film.Options>({
              operation: "Public.Tables.Film.FilmPkey.read",
              parameters: {filmId: parameters.filmId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.Film>(Public.Types.Film.parse(response.results))
  )
  ;
}

          public async update(parameters: Public.Types.FilmPkey, values: Partial<Public.Types.Film>) {
            const response = await this.client.invoke<Public.Types.FilmPkey, Partial<Public.Types.Film>, Public.Types.Film | undefined, never>({
              operation: "Public.Tables.Film.FilmPkey.update",
              parameters: {filmId: parameters.filmId},
              values: {filmId: values.filmId,title: values.title,description: values.description,releaseYear: values.releaseYear,languageId: values.languageId,rentalDuration: values.rentalDuration,rentalRate: values.rentalRate,length: values.length,replacementCost: values.replacementCost,rating: values.rating,lastUpdate: values.lastUpdate,specialFeatures: values.specialFeatures,fulltext: values.fulltext}
            });
        
return (
    nullIsUndefined<Public.Types.Film>(Public.Types.Film.parse(response.results))
  )
  ;
}

          public async delete(parameters: Public.Types.FilmPkey, options?: Public.Tables.Film.Options) {
            const response = await this.client.invoke<Public.Types.FilmPkey, never, Public.Types.Film | undefined, Public.Tables.Film.Options>({
              operation: "Public.Tables.Film.FilmPkey.delete",
              parameters: {filmId: parameters.filmId},
              options
            });
        
return (
    nullIsUndefined<Public.Types.Film>(Public.Types.Film.parse(response.results))
  )
  ;
}
}(this)
public get ByPrimaryKey(){ return this.FilmPkey };

          public FilmFulltextIdx = new class extends HasClient {
        

          public async read(parameters: Public.Types.FilmFulltextIdx, options?: Public.Tables.Film.Options) {
            const response = await this.client.invoke<Public.Types.FilmFulltextIdx, never, Public.Types.Film[] | undefined, Public.Tables.Film.Options>({
              operation: "Public.Tables.Film.FilmFulltextIdx.read",
              parameters: {fulltext: parameters.fulltext},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.Film.parse)
      .map(nullIsUndefined<Public.Types.Film>)
      .filter((x): x is Public.Types.Film => x !== undefined) ?? []
  )
  ;
}

          public async update(parameters: Public.Types.FilmFulltextIdx, values: Partial<Public.Types.Film>) {
            const response = await this.client.invoke<Public.Types.FilmFulltextIdx, Partial<Public.Types.Film>, Public.Types.Film[] | undefined, never>({
              operation: "Public.Tables.Film.FilmFulltextIdx.update",
              parameters: {fulltext: parameters.fulltext},
              values: {filmId: values.filmId,title: values.title,description: values.description,releaseYear: values.releaseYear,languageId: values.languageId,rentalDuration: values.rentalDuration,rentalRate: values.rentalRate,length: values.length,replacementCost: values.replacementCost,rating: values.rating,lastUpdate: values.lastUpdate,specialFeatures: values.specialFeatures,fulltext: values.fulltext}
            });
        
return (
    response.results
      ?.map(Public.Types.Film.parse)
      .map(nullIsUndefined<Public.Types.Film>)
      .filter((x): x is Public.Types.Film => x !== undefined) ?? []
  )
  ;
}

          public async delete(parameters: Public.Types.FilmFulltextIdx, options?: Public.Tables.Film.Options) {
            const response = await this.client.invoke<Public.Types.FilmFulltextIdx, never, Public.Types.Film[] | undefined, Public.Tables.Film.Options>({
              operation: "Public.Tables.Film.FilmFulltextIdx.delete",
              parameters: {fulltext: parameters.fulltext},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.Film.parse)
      .map(nullIsUndefined<Public.Types.Film>)
      .filter((x): x is Public.Types.Film => x !== undefined) ?? []
  )
  ;
}
}(this)


          public IdxFkLanguageId = new class extends HasClient {
        

          public async read(parameters: Public.Types.IdxFkLanguageId, options?: Public.Tables.Film.Options) {
            const response = await this.client.invoke<Public.Types.IdxFkLanguageId, never, Public.Types.Film[] | undefined, Public.Tables.Film.Options>({
              operation: "Public.Tables.Film.IdxFkLanguageId.read",
              parameters: {languageId: parameters.languageId},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.Film.parse)
      .map(nullIsUndefined<Public.Types.Film>)
      .filter((x): x is Public.Types.Film => x !== undefined) ?? []
  )
  ;
}

          public async update(parameters: Public.Types.IdxFkLanguageId, values: Partial<Public.Types.Film>) {
            const response = await this.client.invoke<Public.Types.IdxFkLanguageId, Partial<Public.Types.Film>, Public.Types.Film[] | undefined, never>({
              operation: "Public.Tables.Film.IdxFkLanguageId.update",
              parameters: {languageId: parameters.languageId},
              values: {filmId: values.filmId,title: values.title,description: values.description,releaseYear: values.releaseYear,languageId: values.languageId,rentalDuration: values.rentalDuration,rentalRate: values.rentalRate,length: values.length,replacementCost: values.replacementCost,rating: values.rating,lastUpdate: values.lastUpdate,specialFeatures: values.specialFeatures,fulltext: values.fulltext}
            });
        
return (
    response.results
      ?.map(Public.Types.Film.parse)
      .map(nullIsUndefined<Public.Types.Film>)
      .filter((x): x is Public.Types.Film => x !== undefined) ?? []
  )
  ;
}

          public async delete(parameters: Public.Types.IdxFkLanguageId, options?: Public.Tables.Film.Options) {
            const response = await this.client.invoke<Public.Types.IdxFkLanguageId, never, Public.Types.Film[] | undefined, Public.Tables.Film.Options>({
              operation: "Public.Tables.Film.IdxFkLanguageId.delete",
              parameters: {languageId: parameters.languageId},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.Film.parse)
      .map(nullIsUndefined<Public.Types.Film>)
      .filter((x): x is Public.Types.Film => x !== undefined) ?? []
  )
  ;
}
}(this)


          public IdxTitle = new class extends HasClient {
        

          public async read(parameters: Public.Types.IdxTitle, options?: Public.Tables.Film.Options) {
            const response = await this.client.invoke<Public.Types.IdxTitle, never, Public.Types.Film[] | undefined, Public.Tables.Film.Options>({
              operation: "Public.Tables.Film.IdxTitle.read",
              parameters: {title: parameters.title},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.Film.parse)
      .map(nullIsUndefined<Public.Types.Film>)
      .filter((x): x is Public.Types.Film => x !== undefined) ?? []
  )
  ;
}

          public async update(parameters: Public.Types.IdxTitle, values: Partial<Public.Types.Film>) {
            const response = await this.client.invoke<Public.Types.IdxTitle, Partial<Public.Types.Film>, Public.Types.Film[] | undefined, never>({
              operation: "Public.Tables.Film.IdxTitle.update",
              parameters: {title: parameters.title},
              values: {filmId: values.filmId,title: values.title,description: values.description,releaseYear: values.releaseYear,languageId: values.languageId,rentalDuration: values.rentalDuration,rentalRate: values.rentalRate,length: values.length,replacementCost: values.replacementCost,rating: values.rating,lastUpdate: values.lastUpdate,specialFeatures: values.specialFeatures,fulltext: values.fulltext}
            });
        
return (
    response.results
      ?.map(Public.Types.Film.parse)
      .map(nullIsUndefined<Public.Types.Film>)
      .filter((x): x is Public.Types.Film => x !== undefined) ?? []
  )
  ;
}

          public async delete(parameters: Public.Types.IdxTitle, options?: Public.Tables.Film.Options) {
            const response = await this.client.invoke<Public.Types.IdxTitle, never, Public.Types.Film[] | undefined, Public.Tables.Film.Options>({
              operation: "Public.Tables.Film.IdxTitle.delete",
              parameters: {title: parameters.title},
              options
            });
        
return (
    response.results
      ?.map(Public.Types.Film.parse)
      .map(nullIsUndefined<Public.Types.Film>)
      .filter((x): x is Public.Types.Film => x !== undefined) ?? []
  )
  ;
}
}(this)

}(this)
}(this)
}(this)

          public PgToast = new class extends HasClient {
        

          public Procedures = new class extends HasClient {
        
}(this)

          public Tables = new class extends HasClient {
        
}(this)
}(this)

          public Scripts = new class extends HasClient {
        

          public MovieListing = new class extends HasClient {
        

          public async call() : Promise<Scripts.MovieListing.Results[]> {
            const response = await this.client.invoke<never, never, Scripts.MovieListing.Results[], Scripts.MovieListing.Options>({
              operation: "Scripts.MovieListing.call",
            });
        
return response.results?.map(r => Scripts.MovieListing.Results.parse(r)) as Scripts.MovieListing.Results[] ?? [];
}
}(this)

          public Sample = new class extends HasClient {
        

          public Film = new class extends HasClient {
        

          public Rated = new class extends HasClient {
        

          public async call(parameters: Scripts.Sample.Film.Rated.Parameters) : Promise<Scripts.Sample.Film.Rated.Results[]> {
            const response = await this.client.invoke<Scripts.Sample.Film.Rated.Parameters, never, Scripts.Sample.Film.Rated.Results[], Scripts.Sample.Film.Rated.Options>({
              operation: "Scripts.Sample.Film.Rated.call",
              parameters,
            });
        
return response.results?.map(r => Scripts.Sample.Film.Rated.Results.parse(r)) as Scripts.Sample.Film.Rated.Results[] ?? [];
}
}(this)

          public Tally = new class extends HasClient {
        

          public async call() : Promise<Scripts.Sample.Film.Tally.Results[]> {
            const response = await this.client.invoke<never, never, Scripts.Sample.Film.Tally.Results[], Scripts.Sample.Film.Tally.Options>({
              operation: "Scripts.Sample.Film.Tally.call",
            });
        
return response.results?.map(r => Scripts.Sample.Film.Tally.Results.parse(r)) as Scripts.Sample.Film.Tally.Results[] ?? [];
}
}(this)
}(this)

          public Pick = new class extends HasClient {
        

          public async call(parameters: Scripts.Sample.Pick.Parameters) : Promise<Scripts.Sample.Pick.Results[]> {
            const response = await this.client.invoke<Scripts.Sample.Pick.Parameters, never, Scripts.Sample.Pick.Results[], Scripts.Sample.Pick.Options>({
              operation: "Scripts.Sample.Pick.call",
              parameters,
            });
        
return response.results?.map(r => Scripts.Sample.Pick.Results.parse(r)) as Scripts.Sample.Pick.Results[] ?? [];
}
}(this)
}(this)

          public Tally = new class extends HasClient {
        

          public async call() : Promise<Scripts.Tally.Results[]> {
            const response = await this.client.invoke<never, never, Scripts.Tally.Results[], Scripts.Tally.Options>({
              operation: "Scripts.Tally.call",
            });
        
return response.results?.map(r => Scripts.Tally.Results.parse(r)) as Scripts.Tally.Results[] ?? [];
}
}(this)
}(this)
}
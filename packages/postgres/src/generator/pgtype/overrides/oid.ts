import { PGTypeNumber } from "../base/number";
import { registerOverride } from "./_overrides";

class OID extends PGTypeNumber {}

registerOverride("oid", OID);
registerOverride("cid", OID);
registerOverride("xid", OID);
registerOverride("xid8", OID);
registerOverride("txid", OID);
registerOverride("txid_snapshot", OID);

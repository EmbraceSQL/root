import { PGTypeNumber } from "../base/number";
import { registerOverride } from "./_overrides";

export { overrides } from "./_overrides";

// yeah -- looks odd -- but registerOverride needs to be defined first
export * from "./uuid";
export * from "./point";
export * from "./box";
export * from "./line";
export * from "./lseg";
export * from "./int2vector";
export * from "./date";
export * from "./json";
export * from "./cube";

registerOverride("interval", PGTypeNumber);

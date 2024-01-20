import { PGTypeNumber } from "../base/number";
import { registerOverride } from "./_overrides";

export { overrides } from "./_overrides";

export * from "./uuid";
export * from "./geometric/point";
export * from "./geometric/path";
export * from "./geometric/box";
export * from "./geometric/circle";
export * from "./geometric/line";
export * from "./geometric/lseg";
export * from "./vector";
export * from "./date";
export * from "./json";
export * from "./cube";
export * from "./postgis";
export * from "./tsvector";

registerOverride("interval", PGTypeNumber);

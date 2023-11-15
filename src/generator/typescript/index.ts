import * as path from "path";

export * from "./generateProcRoutes";
export * from "./generateProcCalls";
export * from "./generateSchemaDefinitions";
export * from "./generateRequestResponseClient";

export const GenerateInto = path.join(__dirname, "../../generated");

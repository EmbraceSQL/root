import { createRequire } from "module";
import preset from "ts-jest/presets/index.js";

const require = createRequire(import.meta.url);

/** @type {import('ts-jest').JestConfigWithTsJest} */
const jestConfig = {
  ...preset.defaultsESM,
  moduleNameMapper: {
    "^uuid$": require.resolve("uuid"),
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json",
        useESM: true,
      },
    ],
  },
};

export default jestConfig;

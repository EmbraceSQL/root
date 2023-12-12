module.exports = {
  maxConcurrency: 1,
  resetModules: true,
  // early exit makes it easier to spot the fail -- maybe a bit perfectionist
  bail: true,
  projects: ["<rootDir>/packages/test", "<rootDir>/packages/test-generation"],
};

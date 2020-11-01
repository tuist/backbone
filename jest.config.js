module.exports = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/app/javascript/**/*.test.(ts|tsx)"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
};

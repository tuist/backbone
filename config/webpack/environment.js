const webpack = require("webpack");
const { environment } = require("@rails/webpacker");
const typescript = require("./loaders/typescript");

// Typescript
environment.loaders.prepend("typescript", typescript);

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const ignoreGraphQL = {
  test: /\.graphql$/,
  use: "ignore-loader",
};
const ignoreTests = {
  test: /\.test.ts(x)?$/,
  use: "ignore-loader",
};

environment.loaders.append("ignore-graphql", ignoreGraphQL);
environment.loaders.append("ignore-tests", ignoreTests);

const envVariables = {
  API_URL:
    process.env.NODE_ENV === "development"
      ? JSON.stringify("http://127.0.0.1:3000")
      : JSON.stringify("https://stats.tuist.io"),
};
if (process.env.SENTRY_FRONTEND_DSN) {
  envVariables["SENTRY_FRONTEND_DSN"] = JSON.stringify(
    process.env.SENTRY_FRONTEND_DSN
  );
}
environment.plugins.append(
  "DefineGlobals",
  new webpack.DefinePlugin(envVariables)
);

module.exports = environment;

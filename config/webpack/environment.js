const webpack = require("webpack");

const { environment } = require("@rails/webpacker");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const ignoreLoader = {
  test: /\.graphql$/,
  use: "ignore-loader",
};

environment.loaders.append("ignore", ignoreLoader);

environment.plugins.append(
  "DefineGlobals",
  new webpack.DefinePlugin({
    API_URL:
      process.env.NODE_ENV === "development"
        ? JSON.stringify("http://127.0.0.1:3000")
        : JSON.stringify("https://app.tuistpro.io"),
    SENTRY_FRONTEND_DSN: process.env.SENTRY_FRONTEND_DSN
      ? JSON.stringify(process.env.SENTRY_FRONTEND_DSN)
      : JSON.stringify(""),
  })
);

module.exports = environment;

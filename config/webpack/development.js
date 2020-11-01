const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const webpack = require("webpack");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const environment = require("./environment");

// environment.plugins.append("BundleAnalyzerPlugin", new BundleAnalyzerPlugin());

module.exports = environment.toWebpackConfig();

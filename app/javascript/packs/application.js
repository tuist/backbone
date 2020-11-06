require("@rails/ujs").start();
import setupErrorTracking from "../errors/setupErrorTracking";

// Error tracking
setupErrorTracking();

// Styles
require("../styles/application.css");

// React
var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);

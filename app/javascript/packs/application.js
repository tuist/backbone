require("@rails/ujs").start();
import setupErrorTracking from "../errors/setupErrorTracking";

// Styles
require("../styles/application.css");

const images = require.context("../images", true);
// const imagePath = (name) => images(name, true)

// React
var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);

// Error tracking
setupErrorTracking();

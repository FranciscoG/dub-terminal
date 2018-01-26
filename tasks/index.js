/******************************************************************
 * custom tasks
 */
require('dotenv').config();
const log = require("./colored-console.js");
const extensionBuild = require(process.cwd() + "/tasks/extensions.js");
const makeIcons = require('./icons');

// find out which task we're running
var currentTask = process.argv[2];
var arg = process.argv[3];

function onError(err) {
  log.error(err);
}

var options = {
  src: ["./build/dub-terminal.js", "./build/dub-terminal.js.map"],
  zip: true
};

switch (currentTask) {
  case "ext:icons":
    makeIcons()
    break;
    
  case "ext:zip":
    extensionBuild(options);
    break;

  case "ext:deploy":
    var deployExt = require(process.cwd() + "/tasks/deploy-ext.js");
    extensionBuild(options);
    deployExt(arg);
    break;

  // default to just buidling the extensions
  default:
  case "ext:build":
    options.zip = false;
    extensionBuild(options);
    break;
}

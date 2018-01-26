/***********************************************
 * This is a task to cross-build our extensions
 * from 'one' common source code
 */
const path = require('path');
const fs = require('fs-extra');
const sharp = require('sharp');
const doZip = require('./zip.js');
const log = require('./colored-console.js');
var pkg = require(process.cwd() + '/package.json');
const extPath = process.cwd() + "/extensions";

var libSrc = null;
var shouldZip = false;

/**
 * Clear existing extensions build folders
 */
function rmCommonManifests() {
  ['Chrome','Firefox'].forEach(function(dir){
    fs.removeSync(`${extPath}/${dir}/manifest.core.json`);
    fs.removeSync(`${extPath}/${dir}/manifest.chrome.json`);
    fs.removeSync(`${extPath}/${dir}/manifest.firefox.json`);
  });
}

/**
 * copy common items into each extension folder
 */
function copyCommonStatic(){
  ['Chrome','Firefox'].forEach(function(dir){
    fs.copySync(
      `${extPath}/common`,
      `${extPath}/${dir}`
    );
  });
}

/**
 * parse json file into in-memory object
 * 
 * @param {string} filename 
 */
function parseJSONfile(filename) {
  var jsonfile = extPath + "/common/"+ filename;
  var obj = {};

  try {
    obj = require(jsonfile);
    //obj = JSON.parse(fs.readFileSync(jsonfile, 'utf8'));
  } catch (e) {
    log.error("Error in file: " + jsonfile);
    log.dir(e + "\n");
  }

  return obj;
}

/**
 * Combine objects, convert to json, and save as local file
 * 
 * @param {object} obj1 
 * @param {object} obj2 
 * @param {string} dest 
 */
function combine(obj1, obj2, dest) {
  var finalObj = Object.assign({}, obj1, obj2);
  var fileContents = JSON.stringify(finalObj, null, 2);
  fs.writeFileSync(extPath + "/"+ dest + "/manifest.json", fileContents);
}

/**
 * Copy our main script sources to each extension folder in its own /script subfolder
 */
function copyScript() {
  ['Chrome','Firefox'].forEach(function(dir){
    libSrc.forEach(function(filePath){
      let file = path.basename(filePath);
      fs.copySync(filePath, `${extPath}/${dir}/scripts/${file}`);
    });
  });
}

/**
 * 
 * @param {object} opts 
 * @param {array} opts.src Array of filenames, including paths, to our source scripts
 * @param {boolean} opts.zip Whether to zip up the individual extension folders after build
 */
module.exports = function(opts) {
  if (!opts.src || !Array.isArray(opts.src)) {
    log.error('You must provide options.src as an Array of paths to your script file(s)')
    process.exit(1);
  }
  libSrc = opts.src;
  if (typeof opts.zip !== 'undefined') {
    shouldZip = opts.zip
  }

  /***********************************************
   * Create our Chrome and Firefox folders if they
   * don't exist already
   */
  [ 'Chrome','Firefox'].forEach(function(dir){
    fs.ensureDirSync(`${extPath}/${dir}`);
  });

  /**********************************************
   * First, copy static files from common into
   * both the Chrome and Firefox folder
   */

  console.log('Copying /common to /Chrome and /Firefox)');
  copyCommonStatic();

  /**********************************************
   * Make Manifest.json for each browser
   */

  console.log("Parsing manifest files and building to appropriate folder");
  var mCore = parseJSONfile("manifest.core.json");
  var mChrome = parseJSONfile("manifest.chrome.json");
  var mFF = parseJSONfile("manifest.firefox.json");

  // set version number from package.json
  mCore.version = pkg.version;

  // combine and export manifest files
  combine(mCore, mChrome, "Chrome");
  combine(mCore, mFF, "Firefox");

  // remove the common manifests from each folder
  rmCommonManifests();

  // just in case, copy the Dubplus script to each extension folder
  copyScript();

  if (shouldZip) {
    doZip("Chrome");
    doZip("Firefox");
  }
};
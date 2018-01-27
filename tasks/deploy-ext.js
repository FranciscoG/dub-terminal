var chrome_ext = require('./deploy-chrome.js');
var ff_ext = require('./deploy-ff.js');

function capFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

module.exports = function(platform){
  // if specific platform wasn't provided then we do both
  if (!platform) {
    chrome_ext();
    ff_ext();
    return;
  }

  // format our platform string just in case
  // var target = capFirst(platform);
  target = target.toUpperCase();

  if (target === "CHROME") {
    chrome_ext();
    return;
  }

  if (target === "FIREFOX") {
    ff_ext();
    return;
  }


};


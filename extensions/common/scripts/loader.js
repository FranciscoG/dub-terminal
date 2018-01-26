// src = https://stackoverflow.com/a/28002292/395414

/**
 * Pure JS version of jQuery's $.getScript
 * 
 * @param {string} source url/path to JS file
 * @param {function} callback function to run after script is loaded
 */
function getScript(source, callback) {
  var script = document.createElement('script');
  var prior = document.getElementsByTagName('script')[0];
  script.async = 1;

  script.onload = script.onreadystatechange = function( _, isAbort ) {
      if(isAbort || !script.readyState || /loaded|complete/.test(script.readyState) ) {
          script.onload = script.onreadystatechange = null;
          script = undefined;

          if(!isAbort) { if(callback) callback(); }
      }
  };

  script.src = source;
  prior.parentNode.insertBefore(script, prior);
}

// cdn: https://cdn.rawgit.com/FranciscoG/dub-terminal/b4584942/build/dub-terminal.js
var myScript = 'https://rawgit.com/FranciscoG/dub-terminal/master/build/dub-terminal.js';
getScript(myScript);
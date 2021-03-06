const request = require('request');
const googleToken = require('./google-token.js');
const fs = require('fs');
const log = require('./colored-console.js');
/*******************************************************************
 * setup vars from env or json file
 */

// using dotenv lib to load vars
var private = {
  CHROME_EXT_ITEM_ID : process.env.CHROME_EXT_ITEM_ID,
  CLIENT_ID : process.env.CLIENT_ID,
  CLIENT_SECRET : process.env.CLIENT_SECRET,
  REFRESH_TOKEN : process.env.REFRESH_TOKEN
};


/*******************************************************************
 * Upload extension package
 * docs:
 * https://developer.chrome.com/webstore/webstore_api/items/update
 */
function uploadExtension(tokenResp) {
  var resp = JSON.parse(tokenResp.body);
  var TOKEN = resp.access_token;
  var options = {
    url: `https://www.googleapis.com/upload/chromewebstore/v1.1/items/${private.CHROME_EXT_ITEM_ID}`,
    headers: {
      'x-goog-api-version': '2',
      'Authorization': `Bearer ${TOKEN}`
    }
  };
  var filePath = process.cwd() + '/extensions/Dub-Terminal-Chrome-Extension.zip';

  return new Promise(function (resolve, reject){
    fs.createReadStream(filePath)
      .pipe(request.put(options, 
        function(err, itemResponse) {
          if (err) { reject(err); }
          else {
            log.info('got new token');
            itemResponse.TOKEN = TOKEN; // pass through of the token
            resolve(itemResponse);
          }
        }
      ));
  });
}

/*******************************************************************
 * after upload, you need to publish it to testers or public
 * docs:
 * https://developer.chrome.com/webstore/webstore_api/items/publish
 */
function publishExt(itemResponse){
  var resp = JSON.parse(itemResponse.body);
  
  if (resp.uploadState !== 'SUCCESS') {
    log.error("Error uploading extension");
    log.error(resp.itemError); // should exist if there was an error right?
    process.exit(1);
    return;
  }

  var options = {
    url: `https://www.googleapis.com/chromewebstore/v1.1/items/${private.CHROME_EXT_ITEM_ID}/publish`,
    headers: {
      'x-goog-api-version': '2',
      'Content-Length': 0,
      'Authorization': `Bearer ${itemResponse.TOKEN}`
    }
  };

  return new Promise(function (resolve, reject){
    request.post(options, 
      function(err,response){
        if (err) {reject(err);}
        else {
          log.info('published extension');
          resolve(response);
        }
      }
    );
  });

}

/*******************************************************************
 * get publish response and see if everything went ok
 */
function checkPublish(pubResponse){
  var resp = JSON.parse(pubResponse.body);
  
  if (resp.error) {
    log.error(`error occured during publishing: ${resp.error}`);
    process.exit(1);
  }

  log.info('success!');
  log.dir(resp);
}

module.exports = function(){

  googleToken(private.CLIENT_ID, private.CLIENT_SECRET, private.REFRESH_TOKEN)
    .then(uploadExtension)
    .then(publishExt)
    .then(checkPublish)
    .catch(function(err){
      log.error(err);
      process.exit(1);
    });

};

const request = require('request');
const log = require('./colored-console.js');

/**
 * get google auth token using CODE
 * @return {Promise}
 */
function getAccessTokenFromCode() {
  /***************************************************************************
   * IMPORTANT
   *
   * you must first get the CODE following the steps here:
   * https://developer.chrome.com/webstore/using_webstore_api
   * 
   * CODE is a ONE TIME USE item so you must always pass it via env variable
   *
   */


  var private = {
    CLIENT_ID : process.env.CLIENT_ID,
    CLIENT_SECRET : process.env.CLIENT_SECRET,
    CODE : process.env.CODE
  };
  
  var options = {
    url: 'https://accounts.google.com/o/oauth2/token',
    formData: {
      client_id: private.CLIENT_ID,
      client_secret: private.CLIENT_SECRET,
      code: private.CODE,
      grant_type: 'authorization_code',
      redirect_uri: 'urn:ietf:wg:oauth:2.0:oob'
    }
  };

  return new Promise(function (resolve, reject){
    request.post(options, 
      function(err,httpResponse){
        if (err) {reject(err);}
        else {resolve(httpResponse);}
      }
    );
  });
}

// for this function I'm going to make all required secrets passed via arguments
function getTokenFromRefresh(clientID, clientSecret, refreshToken) {
  var options = {
    url: 'https://accounts.google.com/o/oauth2/token',
    formData: {
      client_id: clientID,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token'
    }
  };

  // promisifying request module
  return new Promise(function (resolve, reject){
    request.post(options, 
      function(err,resp){
        if (err) {reject(err);}
        else {resolve(resp);}
      }
    );
  });
}

// if we call this module from the command line then we're trying to get a new refresh token
// make sure you get a new CODE and pass it through env var
if (require.main === module) {
  console.log('called from command line');
  getAccessTokenFromCode()
    .then(function(body){
      log.dir(body);
    })
    .catch(function(err){
      log.error(err);
    });
}

// if we're requiring this module then we're trying to get a new access token using 
// the refresh token
module.exports = getTokenFromRefresh;

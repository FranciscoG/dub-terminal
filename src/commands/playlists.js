/**
 * Playlists
 * List a user's playlists by name
 */

import playlists from "../utils/playlists.js";

const metadata = {
  command: "playlists"
}

export default function myPlaylists(data) {
  // create a new playlist
  if (data && data.length > 0) {
    return new Promise(function(resolve, reject){
      playlists
        .new( data.join(" ").trim() )
        .then(function(msg) {
          resolve( Object.assign( {}, metadata, {success: msg }) );
        })
        .catch(function(err) {
          reject(err);
        });
    });
  }

  // get a list of user's playlist by name in alpha order
  return new Promise(function(resolve, reject){
    playlists
      .fetch()
      .then(function(data) {
        var list = data.map(el => el.name);
        resolve( Object.assign( {}, metadata, {success: list.sort().join(", ") }) );
      })
      .catch(function(err) {
        reject(err);
      });
  })
 
}

/*
Example single playlist response data
  [
    {
      __v: {int}
      _id: {string}
      created: {timestamp}
      isPublic: {bool}
      name: {string}
      removed: {bool}
      status: {int}
      totalItems: {int}
      userid: {string}
    },
    ...
  ]

*/

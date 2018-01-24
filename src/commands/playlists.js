/**
 * Playlists
 * List a user's playlists by name
 */

import playlists from "../utils/playlists.js";

const metadata = {
  command: "playlists"
}

export default function myPlaylists() {
  
  return new Promise(function(resolve, reject){
     // load playlists on load
    playlists
      .fetch()
      .then(function(data) {
        var list = data.map(el => el.name);
        console.log(list);
        resolve( Object.assign( {}, metadata, {success: list.join(", ") }) );
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

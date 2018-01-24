/**
 * Get User playlists
 */

const api = 'https://api.dubtrack.fm/playlist';

function fetchUserPlaylists(){
  return new Promise(function(resolve, reject){
    // get playlists on page load
    $.getJSON(api)
      .fail(function(){
        reject('error fetching playlists');
      })
      .done(function(data){ 
        if (data && Array.isArray(data.data)) {
          resolve(data.data);
        } else {
          reject('error fetching playlists');
        }
      });
  });
}

function addToPlaylist(songName, playListName, playlistID, songID) {
  let postUrl = api + `/${playlistID}/songs`
  return new Promise(function(resolve, reject){
    $.post( postUrl, { songid: songID })
      .done(function() {
        resolve(`${songName} added to playlist ${playListName}`);
      })
      .fail(function(error) {
        reject('error saving to playlist');
      })
  });
}

export default {
  fetch : fetchUserPlaylists,
  add : addToPlaylist
}
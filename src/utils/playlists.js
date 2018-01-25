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

function createNewPlayList(playlistName) {
  return new Promise(function(resolve, reject){
    $.post( api, 
      { 
        created :	null,
        isPublic : false,
        name : playlistName,
        status : null,
        totalItems : 0,
        userid: null 
      })
      .done(function(resp) {
        console.log('create new playlist success',resp);
        if (resp.code === 200) {
          resolve(`New playlist ${playlistName} created`);
        } else {
          reject('error creating playlist, check console for issues');
        }
      })
      .fail(function(error) {
        reject('error creating playlist');
      })
  });
}

export default {
  fetch : fetchUserPlaylists,
  add : addToPlaylist,
  new : createNewPlayList
}
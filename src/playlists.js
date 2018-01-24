/**
 * Get User playlists
 */

var playlists = [];

// get playlists on page load
$.getJSON('https://api.dubtrack.fm/playlist')
  .fail(function(){
    console.error('error fetching playlists');
  })
  .done(function(data){ 
    if (data && Array.isArray(data.data)) {
      playlists = data.data;
    }
  });

export default function fetchUserPlaylists(){
  if (Dubtrack && Dubtrack.user && Dubtrack.user.playlist) {
    return Dubtrack.user.playlists;
  }

  if (playlists.length > 0) {
    return playlists;
  }

  return new Promise(function(resolve, reject){
    
  });
}
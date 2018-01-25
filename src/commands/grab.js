/**
 * Grab
 * add current playing song to a user's playlist
 */
import userData from '../utils/user-data.js';
import playlists from '../utils/playlists.js';

const metadata = {
  command: "grab"
}
export default function(data) {
  let result = {};

  if (!data) {
    return Promise.reject("you must specify a playlist name");
  }

  let playListName = data.join(" ").trim();
  let _list = userData.playlists[playListName];
  let song = userData.currentSong;

  if (_list) {
    let pID = _list._id;
    let sID = song.songInfo._id;
    let songName = song.songInfo.name;

    return new Promise(function(resolve,reject){
      playlists
        .add(songName, playListName, pID, sID)
        .then(function(success){
          result.success = success;
          resolve( Object.assign({}, metadata, result) )
        })
        .catch(function(error){
          reject(error);
        });
    });
    
  } else {
    return Promise.reject(`playlist ${playListName} does not exist`);
  }
}

/*
Example single playlist response data
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
  }

You can also fetch current song like this:
Dubtrack.room.player.activeSong.fetch().done(function(d){console.log(d.data)} );

example of current song data
 {
    song: {
      __v: 0
      _id: "5a64971e224f91010030d02f"
      _song: "5a05d38b0230dd0100d53787"
      _user: "560a9df68c01bf030099c8a4"
      created: 1516541722302
      downdubs: 0
      isActive: true
      isPlayed: false
      order: 150
      played: 1516808119053
      roomid: "55ff1ad54c828c03008bd5e2"
      skipped: false
      songLength: 119000
      songid: "5a05d38b0230dd0100d53787"
      updubs: 0
      userid: "560a9df68c01bf030099c8a4"
      __proto__: Object { … }
    }
  songInfo: {
      __v: 0
      _id: "5a05d38b0230dd0100d53787"
      created: "2017-11-10T16:27:55.750Z"
      fkid: "Ivfll6hwufM"
      images: Object { thumbnail: "https://i.ytimg.com/vi/Ivfll6hwufM/hqdefault.jpg" }
      name: "plusma - thes3"
      songLength: 119000
      type: "youtube"
    }
  }
*/

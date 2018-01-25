/**
 * Data Store
 * all user data updated and stored and made available here
 */

import playlists from "./playlists.js";

class DataStore {
  constructor() {
    this.playlists = {};
    this.listCount = 0;
    this.currentSong = null;

    // load playlists on load
    playlists
      .fetch()
      .then((data)=> {
        this.listCount = data.length;
        data.forEach((el) => {
          this.playlists[el.name] = el;
        });
      })
      .catch(function(err) {
        console.error(err);
      });

    // fetch current song on load
    Dubtrack.room.player.activeSong.fetch().done((d)=> {
      this.currentSong = d.data;
    });
    // always update current song
    Dubtrack.Events.on("realtime:room_playlist-update", (e)=> {
      this.currentSong = e;
    });
  }

}

var userData = new DataStore();

export default userData;
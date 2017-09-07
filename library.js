// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function () {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


var library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },
  printPlaylists: function () {
    for (var key in this.playlists) {
      var name = this["playlists"][key]['name'];
      var numTracks = this["playlists"][key]['tracks'].length;
      var shortTitle = this["playlists"][key]['id'];
      console.log(shortTitle + ': ' + name + ' - ' + numTracks + ' tracks');
    }
  },
  printTracks: function () {
    for (var key in this.tracks) {
      var trackName = this["tracks"][key]['name'];
      var artistName = this["tracks"][key]['artist'];
      var albumName = this["tracks"][key]['album'];
      console.log(trackName + ' by ' + artistName + ' (' + albumName + ')');
    }
  },
  printPlaylist: function (playlistId) {
    var tracksArray = this["playlists"][playlistId]['tracks'];
    var playlistName = this["playlists"][playlistId]['name'];
    var playlistIdName = this["playlists"][playlistId]['id'];
    var numTracks = this["playlists"][playlistId]['tracks'].length;
    console.log(playlistIdName + ': ' + playlistName + ' - ' + numTracks + ' tracks');
    for (var i in tracksArray) {
      var tracks = this['tracks'][tracksArray[i]];
      var trackName = tracks['id'];
      var artistName = tracks['artist'];
      var albumName = tracks['album'];
      console.log(trackName + ' by ' + artistName + ' (' + albumName + ')');
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    this["playlists"][playlistId]['tracks'].push(trackId);
  },
  addTrack: function (name, artist, album) {
    var id = uid();
    console.log(id);
    this["tracks"][id] = {};
    this["tracks"][id]['name'] = name;
    this["tracks"][id]['artist'] = artist;
    this["tracks"][id]['album'] = album;
  },
  addPlaylist: function (name) {
    var playlistId = uid();
    this["playlists"][playlistId] = {};
    this["playlists"][playlistId]['id'] = playlistId;
    this["playlists"][playlistId]['name'] = name;
    this["playlists"][playlistId]['tracks'] = [];

  },
  printSearchResults: function (query) {
    console.log('none');
  }
};

// FUNCTIONS

/*
// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

library.printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

library.printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

library.printPlaylist('p01');

// adds an existing track to an existing playlist

library.addTrackToPlaylist('t01','p02');
console.log(library["playlists"]['p02']['tracks']);

// adds a track to the library

library.addTrack('all star', 'smash mouth', 'crappy album name');
console.log(library["tracks"]);

// adds a playlist to the library

library.addPlaylist("tasha's playlist");
console.log(library["playlists"]);


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function (query) {
//   console.log('none');
// };

*/




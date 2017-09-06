var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks


var printPlaylists = function () {
for(var i in library.playlists){
let name = library.playlists[i].name;
let tracks = library.playlists[i].tracks.length;
console.log(i + ": " + name + ' - ' + tracks);

}

}


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

//name + artist + album

var printTracks = function () {
for(var i in library.tracks){
let name = library.tracks[i].name;
let artist =  library.tracks[i].artist;
let album =  library.tracks[i].album;

console.log(i + ": " + name + ' by ' + artist + " (" + album + ")");
}
}


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

// id + : + name + by + artist

var printPlaylist = function (playlistId) {
for (var i in library.playlists){
  if (i === playlistId) {
let name = library.playlists[i].name;
let tracks = library.playlists[i].tracks.length;
console.log(i + ": " + name + ' - ' + tracks + ' tracks');

}
}
}

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  const pl = library.playlists[playlistId];
  if(pl.tracks.indexOf(trackId) < 0){
  pl.tracks.push(trackId);
}
  // for  (var i in library.tracks) {
  //   if (i === trackId){
  //     library.playlists[playlistId] = library.tracks[i];
  //   }
  // }
}

// addTrackToPlaylist('t04', 'p02' )

// console.log(library.playlists);

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  let id = uid()
library.tracks[id] = { id: id, name: name, artist: artist, album: album}
}
// addTrack('Violet', 'john', 'Yellow');
// console.log(library.tracks)

// adds a playlist to the library

var addPlaylist = function (name) {
let id = uid()
library.playlists[id] = {P: id, name: name, tracks: []}
}
// addPlaylist('chilling music');
// console.log(library.playlists)

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}
import { corsAnywhere, urlHash } from "./helpers"

const CLIENT_ID = "8d7d16cf7cf748ae906826e4eea17ed7"
const LIMIT = 20
const REDIRECT_URL = "http://localhost:3000/"
const SCOPES = [
  'user-read-birthdate',
  'user-read-email',
  'user-read-private',
  'playlist-modify-public',
  'playlist-modify-private'
]

class Spotify {
  constructor() {
    const { access_token, state: term } = urlHash()
    this.token = access_token
    this.defaultHeaders = {
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${this.token}`,
        "Content-Type": "application/json"
      }
    }
    if (!this.token) this.authorize(term || "")
  }

  authorize(term) {
    window.location = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURI(REDIRECT_URL)}&scope=${SCOPES.join('%20')}&response_type=token&state=${term}`
  }

  search(term) {
    return fetch(
      corsAnywhere(`https://api.spotify.com/v1/search?type=track&limit=${LIMIT}&q=${encodeURI(term)}`),
      this.defaultHeaders
    )
    .then(response => response.json())
    .then(jsonResponse => {
      const songs = jsonResponse.tracks && jsonResponse.tracks.items
      console.info(songs)
      return songs || []
    })
  }

  createPlaylist({ name = "", description = "", publicFlag = false }) {
    const data = {
      name,
      description,
      public: publicFlag
    }
    return fetch(
      corsAnywhere(`https://api.spotify.com/v1/me/playlists`),
      {
        method: "POST",
        ...this.defaultHeaders,
        body: JSON.stringify(data)
      }
    )
    .then(response => response.json())
  }

  addSongsToPlaylist(songs = [], playlistId) {
    console.log('addsongs to play list')
    console.log(songs)
    console.log(playlistId)
    console.log('uris')
    console.log(songs.map(s => `spotify:track:${s.id}`).join(","))
    const data = {
      position: 0,
      uris: songs.map(s => `spotify:track:${s.id}`)
    }
    return fetch(
      corsAnywhere(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`),
      {
        method: "POST",
        ...this.defaultHeaders,
        body: JSON.stringify(data)
      }
    )
    .then(response => response.json())
  }

  savePlaylist({ name, list: songs }) {
    return this.createPlaylist({ name })
    .then(playlist => playlist.id)
    .then(playlistId => this.addSongsToPlaylist(songs, playlistId))
  }
}

export default Spotify

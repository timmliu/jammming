const CLIENT_ID = "8d7d16cf7cf748ae906826e4eea17ed7"
const CORS_ANYWHERE = "https://cors-anywhere.herokuapp.com/"
const LIMIT = 20
const REDIRECT_URL = "http://localhost:3000/"
const SCOPES = [
  'user-read-birthdate',
  'user-read-email',
  'user-read-private'
]

const Spotify = {
  authorize: (term) => {
    window.location = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURI(REDIRECT_URL)}&scope=${SCOPES.join('%20')}&response_type=token&state=${term}`
  },

  search: (term, accessToken) => {
    return fetch(
      `${CORS_ANYWHERE}https://api.spotify.com/v1/search?type=track&limit=${LIMIT}&q=${encodeURI(term)}`,
      {
        headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        }
      }
    )
    .then(response => response.json())
    .then(jsonResponse => {
      const songs = jsonResponse.tracks && jsonResponse.tracks.items
      console.info(songs)
      return songs || []
    })
  },

  // !!!
  savePlaylist: (playlist) => {
    return playlist
  }
}

export default Spotify

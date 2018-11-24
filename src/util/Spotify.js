const AUTH_TOKEN = "BQCEUnJ9188eV7_w4jECaEHvcyyMIA8CWyfsr0TkEr1BwMQ5Il0TUisf1cExevUUoN9PWwX3sP4p6I7qNOdufoFzftoOtUuIzjgLkw3hihqoBVQ-dAbgsDniDoetpXkRScTPz1H8Bv9fC6ohcPh5wA3Q9bE8yRd6aA"
const CORS_ANYWHERE = "https://cors-anywhere.herokuapp.com/"
const LIMIT = 20

const Spotify = {
  search: (term) => {
    return fetch(
      `${CORS_ANYWHERE}https://api.spotify.com/v1/search?type=track&limit=${LIMIT}&q=${encodeURI(term)}`,
      {
        headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${AUTH_TOKEN}`,
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
  }
}

export default Spotify

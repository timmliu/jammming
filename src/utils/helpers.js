const CORS_ANYWHERE = "https://cors-anywhere.herokuapp.com/"

const urlHash = () => {
  const hash = window.location.hash
    .substring(1)
    .split('&')
    .reduce(function (initial, item) {
      if (item) {
        const parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])
      }
      return initial
    }, {})

    return hash
}

const corsAnywhere = (url) =>
  `${CORS_ANYWHERE}${url}`

module.exports = {
  corsAnywhere,
  urlHash
}

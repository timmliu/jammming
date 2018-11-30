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

    window.location.hash = ''

  return hash
}

module.exports = {
  urlHash
}

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import ResultList from './components/ResultList/ResultList'
import Playlist from './components/Playlist/Playlist'
import Spotify from './util/Spotify'
import { urlHash } from './util/helpers'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
      loading: false
    }
    this.searchSpotify = this.searchSpotify.bind(this)
  }

  componentDidMount() {
    const { access_token, state: term } = urlHash()
    this.accessToken = access_token || this.accessToken
    if (term) this.searchSpotify(term)
  }

  searchSpotify(term) {
    if (!term || !term.length) return alert("Please enter something to search")
    if (!this.accessToken) return Spotify.authorize(term)

    this.setState({ loading: true })
    Spotify.search(term, this.accessToken)
    .then(results => {
      this.setState({
        results: results || this.state.results,
        loading: false
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar searchSpotify={this.searchSpotify} loading={this.state.loading} />
        <ResultList results={this.state.results} />
        <Playlist />
      </div>
    );
  }
}

export default App;

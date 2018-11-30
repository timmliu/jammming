import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import ResultList from './components/ResultList/ResultList'
import Playlist from './components/Playlist/Playlist'
import Spotify from './utils/Spotify'
import { urlHash } from './utils/helpers'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playlist: [],
      results: [],
      loading: false
    }
    this.searchSpotify = this.searchSpotify.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
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

  handleAdd(song) {
    this.setState({
      playlist: this.state.playlist.concat(song)
    })
  }

  handleRemove(song) {
    this.setState({
      playlist: this.state.playlist.filter(s => s.id !== song.id)
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar searchSpotify={this.searchSpotify} loading={this.state.loading} />
        <ResultList results={this.state.results} list={this.state.playlist} handleAdd={this.handleAdd} />
        <Playlist list={this.state.playlist} handleRemove={this.handleRemove} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import ResultList from './components/ResultList/ResultList'
import Playlist from './components/Playlist/Playlist'
import Spotify from './util/Spotify'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
      loading: false
    }
    this.searchSpotify = this.searchSpotify.bind(this)
  }

  searchSpotify(term) {
    if (!term || !term.length) return alert("Please enter something to search")
    this.setState({ loading: true })
    Spotify.search(term)
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

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import ResultList from './components/ResultList/ResultList'
import Playlist from './components/Playlist/Playlist'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <ResultList />
        <Playlist />
      </div>
    );
  }
}

export default App;

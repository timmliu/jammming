import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar">
        <input className="search-input" placeholder="Enter a Song, Album, or Artist" />
        <button className="search-button">Search</button>
      </div>
    )
  }
}

export default SearchBar

import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleTermChange = this.handleTermChange.bind(this)
  }

  handleSearch(event) {
    const { term } = this.state
    this.props.searchSpotify(term)
    event.preventDefault()
  }

  handleKeyPress(event) {
    if (event.key === "Enter") {
      const { term } = this.state
      this.props.searchSpotify(term)
    }
  }

  handleTermChange(event) {
    this.setState({
      term: event.target.value
    })
  }

  render() {
    const buttonText = this.props.loading ? "Loading…" : "Search"
    return (
      <div className="search-bar">
        <input className="search-input" placeholder="Enter a Song, Album, or Artist" onChange={this.handleTermChange} onKeyPress={this.handleKeyPress} />
        <button className="search-button" onClick={this.handleSearch}>{buttonText}</button>
      </div>
    )
  }
}

export default SearchBar

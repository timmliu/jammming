import React from 'react';
import './Song.css';

class Song extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.handleClick(this.props.song)
    event.preventDefault()
  }

  render() {
    const { artists, album, name: title } = this.props.song
    const artistNames = artists.map(a => a.name).join(", ")
    const albumName = album.name
    return (
      <div className="song" onClick={this.handleClick}>
        <div>{title}</div>
        <div>{artistNames} | {albumName}</div>
      </div>
    )
  }
}

export default Song

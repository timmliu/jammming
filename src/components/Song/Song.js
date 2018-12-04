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
      <div className="song-wrapper" onClick={this.handleClick}>
        <div className="song">
          <div className="title">{title}</div>
          <div className="artist-album">{artistNames} | {albumName}</div>
        </div>
        <div className="action">{this.props.action === "add" ? "+" : "-"}</div>
      </div>
    )
  }
}

export default Song

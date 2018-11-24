import React from 'react';
import './Song.css';

class Song extends React.Component {
  render() {
    const { artists, album, name: title } = this.props.song
    const artistNames = artists.map(a => a.name).join(", ")
    const albumName = album.name
    return (
      <div className="song">
        <div>{title}</div>
        <div>{artistNames} | {albumName}</div>
      </div>
    )
  }
}

export default Song

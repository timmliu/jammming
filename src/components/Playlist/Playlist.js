import React from 'react';
import './Playlist.css';
import Song from '../Song/Song'

class Playlist extends React.Component {
  render() {
    return (
      <div className="playlist">
        <h2>Playlist</h2>
        {
          // addedSongs.map(song => {
          //   return <Song song={song} />
          // })
        }
        <button className="save-to-spotify">Save to Spotify</button>
      </div>
    )
  }
}

export default Playlist

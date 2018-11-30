import React from 'react';
import './Playlist.css';
import Song from '../Song/Song'

class Playlist extends React.Component {
  constructor(props) {
    super(props)
    this.handleSave = this.handleSave.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(song) {
    this.props.handleRemove(song)
  }

  handleSave(event) {
    // call spotify api to save this.state.this
    event.preventDefault()
  }

  render() {
    return (
      <div className="playlist">
        <h2>Playlist</h2>
        <div>
          <input type="text" placeholder="New Playlist" />
        </div>
        {
          this.props.list.map(song => {
            return <Song handleClick={this.handleClick} key={song.id} song={song} />
          })
        }
        <button className="save-to-spotify" onClick={this.handleSave}>Save to Spotify</button>
      </div>
    )
  }
}

export default Playlist

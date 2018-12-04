import React from 'react';
import './Playlist.css';
import Song from '../Song/Song'

class Playlist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "New Playlist"
    }
    this.handleSave = this.handleSave.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleRemove(song) {
    this.props.handleRemove(song)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSave(event) {
    event.preventDefault()
    const { spotify } = this.props
    if (!this.props.list || !this.props.list.length) return alert("Please add at least one song to save your playlist.")
    return spotify.savePlaylist({
      name: this.state.name,
      list: this.props.list
    })
    .then(() => alert(`${this.state.name} was saved to account.`))
    .catch((error) => {
      console.log(error)
      alert("Sorry, something went wrong.")
    })
  }

  render() {
    return (
      <div className="playlist">
        <form onSubmit={this.handleSave}>
          <h2>Playlist</h2>
          <input className="playlist-input" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          <br />
          {
            this.props.list.map(song => {
              return <Song action="remove" handleClick={this.handleRemove} key={song.id} song={song} />
            })
          }
          <button className="save-to-spotify" type="submit">Save to Spotify</button>
        </form>
      </div>
    )
  }
}

export default Playlist

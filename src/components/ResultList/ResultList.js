import React from 'react';
import './ResultList.css';
import Song from '../Song/Song';

class ResultList extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(song) {
    this.props.handleAdd(song)
  }

  render() {
    const { results } = this.props

    return (
      <div className="result-list">
        <h2>Results</h2>
        {
          results.map(song => {
            return <Song handleClick={this.handleClick} key={song.id} song={song} />
          })
        }
      </div>
    )
  }
}

export default ResultList

import React from 'react';
import './ResultList.css';
import Song from '../Song/Song';

class ResultList extends React.Component {
  constructor(props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(song) {
    this.props.handleAdd(song)
  }

  render() {
    const { results, list } = this.props
    const listIds = list.map(s => s.id)

    return (
      <div className="result-list">
        <h2>Results</h2>
        {
          results
            .filter(song => !listIds.includes(song.id))
            .map(song => {
              return <Song handleClick={this.handleAdd} key={song.id} song={song} />
            })
        }
      </div>
    )
  }
}

export default ResultList

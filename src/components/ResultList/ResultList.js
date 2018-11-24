import React from 'react';
import './ResultList.css';
import Song from '../Song/Song';

class ResultList extends React.Component {
  render() {
    return (
      <div className="result-list">
        <h2>Results</h2>
        {
          // searchResults.map(song => {
          //   return <Song song={song} />
          // })
        }
      </div>
    )
  }
}

export default ResultList

import React from 'react';
import '../App.css';

class Playlist extends React.Component {
  render() {
    return (
      <div className="playlist_column">
        <img alt="" />
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    )
  };
}

export default Playlist;
import React from 'react';
import Aggregate from './components/Aggregate';
import Filter from './components/Filter';
import Playlist from './components/Playlist';

class App extends React.Component {
  render() {
    return (
      <div style={{ textAlign:"center"}}>
        <h1>Better Playlist</h1>
        <Aggregate />
        <Aggregate />
        <Filter />
        <div className="playlist">
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
        </div>
      </div>
      
    )
  }
}

export default App;

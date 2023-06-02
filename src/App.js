import React, { Component } from "react";
import SongCard from "./components/SongCard";
import songs from "./services/songs.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { songs };
  }
  handleByTitleRating = (type) => {
    console.log({ songs });
    console.log(type);
    if (type === "title") {
      const strAscending = [...songs].sort((a, b) =>
        a.title > b.title ? 1 : -1
      );
      console.log(strAscending);
      this.setState({ songs: strAscending });
    } else {
      const strAscending = [...songs].sort((a, b) =>
        b.rating > a.rating ? 1 : -1
      );
      console.log(strAscending);
      this.setState({ songs: strAscending });
    }
  };
  render() {
    return (
      <>
        <div id="super-tunes">
          <h2 id="st-title">SuperTunes - Songs of the Week</h2>
          <div>
            <button
              className="st-btn"
              onClick={() => this.handleByTitleRating("title")}
            >
              Sort by Title
            </button>
            <button
              className="st-btn"
              onClick={() => this.handleByTitleRating("rating")}
            >
              Sort by Rating
            </button>
          </div>
          <div id="song-list">
            {this.state.songs.map((song) => (
              <SongCard song={song} key={song.id} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;

import React from "react";
import Rating from "./Rating";
const SongCard = ({ song, songId }) => {
  return (
    <div className="song-card">
      <img className="st-thumb" src={song.thumb} alt="pic" />
      <div className="song-title">{song.title}</div>
      <Rating rating={song.rating} />
    </div>
  );
};

export default SongCard;

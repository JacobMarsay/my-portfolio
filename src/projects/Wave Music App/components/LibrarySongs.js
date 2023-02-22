import React from "react";
import { useSelector } from "react-redux";
const LibrarySongs = () => {
  const songs = useSelector((state) => state.player.songs);
  // Handlers
  const songSelectHandler = async () => {};

  return (
    <div>
      {songs.map((song) => (
        <div onClick={songSelectHandler}>
          <img alt={song.name} src={song.cover}></img>
          <div className="song__description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LibrarySongs;

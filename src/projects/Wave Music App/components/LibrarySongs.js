import React from "react";

const LibrarySongs = () => {
  // Handlers
  const songSelectHandler = async () => {};

  return (
    <div onClick={songSelectHandler}>
      {/* <img alt={song.name} src={song.cover}></img> */}
      <div className="song__description">
        <h3>name</h3>
        <h4>artist</h4>
      </div>
    </div>
  );
};

export default LibrarySongs;

import React from "react";
import { useParams } from "react-router-dom";

import "./global-styles/global.scss";
import Nav from "./components/Nav";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";

const MusicApp = () => {
  const { id } = useParams();
  return (
    <div className="App">
      <Nav />
      <Song />
      <Player />
      <Library />
    </div>
  );
};

export default MusicApp;

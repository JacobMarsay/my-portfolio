import React from "react";
import styled from "styled-components";
import "./global-styles/global.scss";
import Nav from "./components/Nav";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import { useRef } from "react";
import { useSelector } from "react-redux";

const MusicApp = () => {
  const audioRef = useRef();
  const isPlaying = useSelector((state) => state.player.isPlaying);

  return (
    <AppContainer>
      <Nav />
      <Song />
      <Player audioRef={audioRef} isPlaying={isPlaying} />
      <Library audioRef={audioRef} isPlaying={isPlaying} />
    </AppContainer>
  );
};

export default MusicApp;

const AppContainer = styled.div`
  transition: all 0.5s ease;
  background: rgb(66, 66, 66);
  height: 100vh;
`;

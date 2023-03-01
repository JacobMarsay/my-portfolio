import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import "./global-styles/global.scss";
import Nav from "./components/Nav";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";

const MusicApp = () => {
  const { id } = useParams();
  return (
    <AppContainer>
      <Nav />
      <Song />
      <Player />
      <Library />
    </AppContainer>
  );
};

export default MusicApp;

const AppContainer = styled.div`
  transition: all 0.5s ease;
  background: rgb(66, 66, 66);
  height: 100vh;
`;

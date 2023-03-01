import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Song = () => {
  const currentSong = useSelector((state) => state.player.currentSong);
  return (
    <SongContainer>
      <img alt={currentSong.name} src={currentSong.cover}></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </SongContainer>
  );
};

export default Song;

const SongContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 60vh;
  width: 100%;
  // Uses predefined variables to postion flex items (See 'stles/abstracts/mixins.scss')
  img {
    margin-top: 2rem;
    width: 20%;
    border-radius: 50%;
    animation: rotation 15s infinite linear;
  }
  h2 {
    padding: 3rem 1rem 1rem 1rem;
    color: rgb(190, 190, 190);
  }
  h3 {
    color: rgb(190, 190, 190);
  }
`;

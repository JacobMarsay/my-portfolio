import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const LibrarySongs = () => {
  const songs = useSelector((state) => state.player.songs);
  // Handlers
  const songSelectHandler = async () => {};

  return (
    <div>
      {songs.map((song) => (
        <LibrarySongContainer onClick={songSelectHandler}>
          <img alt={song.name} src={song.cover}></img>
          <SongDescriptionContainer>
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
          </SongDescriptionContainer>
        </LibrarySongContainer>
      ))}
    </div>
  );
};

export default LibrarySongs;

const LibrarySongContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
  cursor: pointer;
  img {
    width: 40%;
  }
  &:hover {
    background: rgb(121, 121, 121);
    border: 0.3rem solid #50b050;
    h3,
    h4 {
      color: #50b050;
    }
  }
`;

const SongDescriptionContainer = styled.div`
  padding-left: 1rem;
  h3,
  h4 {
    color: rgb(190, 190, 190);
  }
`;

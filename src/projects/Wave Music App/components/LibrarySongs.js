import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { activeLibrary, activeSong } from "../redux/slices/musicSlice";

const LibrarySongs = ({ audioRef }) => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.player.isPlaying);
  const currentSong = useSelector((state) => state.player.currentSong);
  const songInfo = useSelector((state) => state.player.songInfo);
  const songs = useSelector((state) => state.player.songs);

  const songSelectHandler = async (selectedSong) => {
    dispatch(activeSong(selectedSong.id));
    audioRef.current.play();
  };

  return (
    <div>
      {songs.map((song) => (
        <LibrarySongContainer
          key={song.id}
          onClick={() => songSelectHandler(song)}
        >
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

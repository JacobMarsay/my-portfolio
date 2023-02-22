import React from "react";
import styled from "styled-components";
//import redux
import { useSelector } from "react-redux";
import LibrarySongs from "./LibrarySongs";

const Library = () => {
  const toggle = useSelector((state) => state.player.libraryStatus);

  return (
    <LibraryContainer className={`library ${toggle ? "active__library" : ""}`}>
      <h2>Library</h2>
      <LibrarySongsContainer>
        <LibrarySongs />
      </LibrarySongsContainer>
    </LibraryContainer>
  );
};
export default Library;

const LibraryContainer = styled.div`
  &.library {
    position: fixed;
    top: 0;
    left: 0;
    width: 30rem;
    height: 100%;
    box-shadow: $boxShadow;
    overflow: scroll;
    transform: translateX(-100%);
    transition: all 0.5s ease;
    opacity: 0;
    background: rgb(66, 66, 66);
    h2 {
      padding: 3rem 2rem;
      color: rgb(17, 17, 17);
    }
  }
  &.active__library {
    transform: translateX(0%);
    opacity: 1;
  }
`;

const LibrarySongsContainer = styled.div``;

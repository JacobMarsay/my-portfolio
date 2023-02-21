import React from "react";
import styled from "styled-components";
//import redux
import { useSelector } from "react-redux";
import LibrarySongs from "./LibrarySongs";

const Library = () => {
  const toggle = useSelector((state) => state.player.libraryStatus);

  return (
    <>
      {toggle ? (
        <div>
          <h2>Library</h2>
          <div className="library__songs">
            <LibrarySongs />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Library;

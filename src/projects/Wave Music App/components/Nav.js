import React from "react";
// Redux Import
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

import { toggleLibrary } from "../redux/slices/musicSlice";

const Nav = () => {
  const dispatch = useDispatch();
  const toggleLibraryHandler = () => {
    dispatch(toggleLibrary());
  };
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={toggleLibraryHandler}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;

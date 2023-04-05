import React from "react";
import styled from "styled-components";
// Redux Import
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

import { toggleLibrary } from "../redux/slice/musicSlice";

const Nav = () => {
  const dispatch = useDispatch();
  const toggleLibraryHandler = () => {
    dispatch(toggleLibrary());
  };
  return (
    <NavElement>
      <h1>Waves</h1>
      <button onClick={toggleLibraryHandler}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </NavElement>
  );
};

export default Nav;

const NavElement = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  min-height: 10vh;

  h1 {
    color: rgb(190, 190, 190);
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    border: 2px solid rgb(48, 48, 48);
    padding: 0.5rem;
    transition: all 0.3s ease;
    color: rgb(190, 190, 190);
    &:hover {
      background: rgb(66, 66, 66);
      border-color: #50b050;
      color: #50b050;
    }

    @media screen and (max-width: 768px) {
      button {
        z-index: 10;
      }
    }
  }
`;

import React from "react";
import styled from "styled-components";
import "../global-styles/global.scss";
import Nav from "../components/Nav";
import Song from "../components/Song";
import Player from "../components/Player";
import Library from "../components/Library";
import { useRef } from "react";
import Cursor from "../../../components/Cursor";
import HomeButton from "../../../components/HomeButton";
import { fadeIn, fadeUp, pageAnimation } from "../../../anims/animations";
import { motion } from "framer-motion";

const MusicPlayer = () => {
  const audioRef = useRef();

  return (
    <AppContainer
        variants={fadeIn}
        initial="hidden"
        animate="show"
    >
      <Cursor />
      <HomeButton />
      <Nav />
      <Song />
      <Player audioRef={audioRef} />
      <Library audioRef={audioRef} />
    </AppContainer>
  );
};

export default MusicPlayer;

const AppContainer = styled(motion.div)`
  transition: all 0.5s ease;
  background: rgb(66, 66, 66);
  height: 100vh;
`;

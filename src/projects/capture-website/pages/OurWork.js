import React from "react";
// Import styles
import styled from "styled-components";
// Import router
import { Link } from "react-router-dom";
// Imported images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
// Import FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
// Import motions
import { motion } from "framer-motion";
import {
  pageAnimation,
  fadeIn,
  animImage,
  lineAnim,
  sliderAnimContainer,
  sliderAnim,
} from "../animations";

function OurWork() {
  return (
    <WorkContainer
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderAnimContainer}>
        <Frame1 variants={sliderAnim}></Frame1>
        <Frame2 variants={sliderAnim}></Frame2>
        <Frame3 variants={sliderAnim}></Frame3>
        <Frame4 variants={sliderAnim}></Frame4>
      </motion.div>

      <MovieContainer>
        <motion.h2 variants={fadeIn}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/projects/Photography%20&%20Movies%20website/2/work/the-athlete">
          <FontAwesomeIcon className="icon" icon={faCirclePlay} />
          <Hide>
            <motion.img
              variants={animImage}
              src={athlete}
              alt="athlete Movie"
            />
          </Hide>
        </Link>
      </MovieContainer>
      <MovieContainer>
        <h2>The Racer</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/projects/Photography%20&%20Movies%20website/2/work/the-racer">
          <FontAwesomeIcon className="icon" icon={faCirclePlay} />
          <img src={theracer} alt="The Racer Movie" />
        </Link>
      </MovieContainer>
      <MovieContainer>
        <h2>Good Times</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/projects/Photography%20&%20Movies%20website/2/work/good-times">
          <FontAwesomeIcon className="icon" icon={faCirclePlay} />
          <img src={goodtimes} alt="Good Times Movie" />
        </Link>
      </MovieContainer>
    </WorkContainer>
  );
}

const WorkContainer = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 15rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  // Mobile
  @media (min-width: 280px) and (max-width: 540px) {
    padding: 10rem 0rem;
    margin: 1rem;
  }
`;

const MovieContainer = styled.div`
  padding-bottom: 10rem;
  position: relative;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  .icon {
    color: #ccccccd6;
    height: 15%;
    width: 15%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    filter: brightness(70%);
    transition: ease 0.5s;
    &:hover {
      filter: brightness(90%);
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  z-index: 3;
  width: 100%;
  height: 100vh;
  background: #fffebf;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;

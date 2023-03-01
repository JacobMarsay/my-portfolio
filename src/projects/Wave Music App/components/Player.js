import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { songStatus } from "../redux/slices/musicSlice";
import {
  faPlayCircle,
  faAngleLeft,
  faAngleRight,
  faPauseCircle,
} from "@fortawesome/free-solid-svg-icons";
const Player = (audioRef) => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.player.isPlaying);
  console.log(isPlaying);
  // Event Handlers
  function playSongHandler() {
    if (isPlaying) {
      // audioRef.current.play();
      dispatch(songStatus());
    } else {
      // audioRef.current.pause();
      dispatch(songStatus());
    }
  }

  function timeUpdateHandler(e) {
    // Event handler that targets the current time and duration
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current); // Gets full seconds of the current time into the song
    const roundedDuration = Math.round(duration); // Gets the full seconds of the duration of the song
    const animationPercentage = Math.round(
      (roundedCurrent / roundedDuration) * 100 // Divides the current time by the duration, then * by 100 to get the percentage of the current time into the song
    );
  }

  function getTime(time) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2) // Formatting the digital time
    );
  }

  function dragInputBarHandler(e) {}

  function activeLibraryHandler(nextPrev) {}

  const skipTrackHandler = async (direction) => {};

  const songEndHandler = async () => {};

  return (
    <PlayerContainer>
      <TimeControlContainer>
        <p>current time</p>
        <TrackContainer>
          <input />
          <AnimatedTrackContainer />
        </TrackContainer>
        <p>song Duration</p>
      </TimeControlContainer>
      <PlayControlContainer>
        <FontAwesomeIcon size="3x" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="4x"
          icon={isPlaying ? faPauseCircle : faPlayCircle}
        />
        <FontAwesomeIcon size="3x" icon={faAngleRight} />
      </PlayControlContainer>
      {/* <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler} // Get time duration of song on load
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio> */}
    </PlayerContainer>
  );
};

export default Player;

const PlayerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  min-height: 20vh;
`;

const TimeControlContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 50%;
  P {
    padding: 1rem;
    color: rgb(190, 190, 190);
  }
  input {
    width: 100%;
    padding: 1rem 0rem;
    -webkit-appearance: none; // Removes all styles from the input slider bar
    background-color: transparent;
    cursor: pointer;
    input[type="range"]::-webkit-slider-thumb {
      // Google and edge
      -webkit-appearance: none;
      height: 1.6rem;
      width: 1.6rem;
    }

    input[type="range"]::-moz-range-thumb {
      // Firefox
      -webkit-appearance: none;
      height: 1.6rem;
      width: 1.6rem;
    }
  }
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const TrackContainer = styled.div`
  width: 100%;
  height: 1rem;
  background: lightblue;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
`;

const PlayControlContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 30%;
  svg {
    cursor: pointer;
    color: rgb(134, 134, 134);
  }
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

const AnimatedTrackContainer = styled.div`
  /* background: rgb(204, 204, 204);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(0%);
  pointer-events: none;
  z-index: -1; */
`;

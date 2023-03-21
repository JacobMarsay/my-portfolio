import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import {
  songStatus,
  setSongInfo,
  skipTrackForward,
  skipTrackBackward,
} from "../redux/slices/musicSlice";
import {
  faPlayCircle,
  faAngleLeft,
  faAngleRight,
  faPauseCircle,
} from "@fortawesome/free-solid-svg-icons";
const Player = ({ audioRef }) => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.player.isPlaying);
  const currentSong = useSelector((state) => state.player.currentSong);
  const songInfo = useSelector((state) => state.player.songInfo);
  const songs = useSelector((state) => state.player.songs);

  // Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.play();
      console.log(audioRef.current);
      dispatch(songStatus());
    } else {
      audioRef.current.pause();
      console.log(console.log(audioRef.current));
      dispatch(songStatus());
    }
  };

  const timeUpdateHandler = (e) => {
    // Event handler that targets the current time and duration
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current); // Gets full seconds of the current time into the song
    const roundedDuration = Math.round(duration); // Gets the full seconds of the duration of the song
    const animationPercentage = Math.round(
      (roundedCurrent / roundedDuration) * 100 // Divides the current time by the duration, then * by 100 to get the percentage of the current time into the song
    );
    dispatch(
      setSongInfo({
        ...songInfo,
        currentTime: current,
        duration: duration,
        animationPercentage: animationPercentage,
      })
    );
  };

  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  function dragInputBarHandler(e) {
    audioRef.current.currentTime = e.target.value; // Sets current time to the value the slider has been dragged to
    setSongInfo({ ...songInfo, currentTime: e.target.value }); // Sets the start time to the value which the input slider has been dragged to
  }

  function getTime(time) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2) // Formatting the digital time
    );
  }

  function activeLibraryHandler(nextPrev) {}

  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);

    if (direction === "skip__forward") {
      await dispatch(skipTrackForward());
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    }

    if (direction === "skip__back") {
      if ((currentIndex - 1) % songs.length === -1) {
        activeLibraryHandler(songs[songs.length - 1]);
        if (isPlaying) audioRef.current.play();
        return;
      }
      await dispatch(skipTrackBackward());
      activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
    }

    if (isPlaying) audioRef.current.play();
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await dispatch(songs[(currentIndex + 1) % songs.length]);

    if (isPlaying) {
      setTimeout(() => {
        audioRef.current.play(); // Code to run 0.1 seconds
      }, 100);
    }
  };

  return (
    <PlayerContainer>
      <TimeControlContainer>
        <p>{getTime(songInfo.currentTime)}</p>
        <TrackContainer>
          <input
            onChange={dragInputBarHandler}
            min={0} // Start from 0
            max={songInfo.duration || 0} // End on the song duration
            value={songInfo.currentTime} //Move across on the current time
          />
          <AnimatedTrackContainer style={trackAnim} />
        </TrackContainer>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </TimeControlContainer>
      <PlayControlContainer>
        <FontAwesomeIcon
          size="3x"
          icon={faAngleLeft}
          className="skip__back"
          onClick={() => skipTrackHandler("skip__back")}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="4x"
          icon={isPlaying ? faPauseCircle : faPlayCircle}
        />
        <FontAwesomeIcon
          size="3x"
          icon={faAngleRight}
          className="skip__forward"
          onClick={() => skipTrackHandler("skip__forward")}
        />
      </PlayControlContainer>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler} // Get time duration of song on load
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
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

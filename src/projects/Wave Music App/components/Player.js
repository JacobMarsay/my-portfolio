import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faAngleLeft,
  faAngleRight,
  faPauseCircle,
} from "@fortawesome/free-solid-svg-icons";
const Player = () => {
  // Event Handlers
  function playSongHandler() {}

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

  function dragInputBarHandler(e) {

  }

  function activeLibraryHandler(nextPrev) {}

  const skipTrackHandler = async (direction) => {};

  const songEndHandler = async () => {};

  return (
    <div className="player">
      <div className="time__control">
        <p>current time</p>
        <div>
          <input
        
          />
          <div className="animate__track"></div>
        </div>
        <p>song Duration</p>
      </div>
      <div className="play__control">
        <FontAwesomeIcon
   
        />
        <FontAwesomeIcon/>
        <FontAwesomeIcon/>
      </div>
      <audio
      ></audio>
    </div>
  );
};

export default Player;

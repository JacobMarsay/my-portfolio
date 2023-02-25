import { createSlice } from "@reduxjs/toolkit";
import songData from "../../util/songData";

const songsList = songData();

const initialState = {
  songs: songsList,
  currentSong: songsList[0],
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  animationPercentage: 0,
  libraryStatus: false,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    activeSong: (state) => {
      console.log(state.currentSong);
    },
    playlist: (state) => {},
    songInfo: (state) => {},
    musiclibrary: (state) => {},

    toggleLibrary: (state) => {
      state.libraryStatus = !state.libraryStatus;
      console.log(state.libraryStatus);
    },
  },
});

export const { activeSong, playlist, toggleLibrary } = playerSlice.actions;

export default playerSlice.reducer;

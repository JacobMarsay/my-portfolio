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
    songStatus: (state) => {
      state.isPlaying = !state.isPlaying;
      console.log(state.isPlaying);
    },
    toggleLibrary: (state) => {
      state.libraryStatus = !state.libraryStatus;
    },
  },
});

export const { toggleLibrary, songStatus } = playerSlice.actions;

export default playerSlice.reducer;

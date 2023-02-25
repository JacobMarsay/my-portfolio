import { createSlice } from "@reduxjs/toolkit";
import songData from "../../util/songData";

const initialState = {
  songs: songData(),
  currentSong: null,
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
    activeSong: (state) => {},
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

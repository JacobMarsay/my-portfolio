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

    toggleLibrary: (state) => {
      state.libraryStatus = !state.libraryStatus;
      console.log(state.libraryStatus);
    },
  },
});

export const { activeSong, playlist, toggleLibrary } = playerSlice.actions;

export default playerSlice.reducer;

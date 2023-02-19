import { createSlice } from "@reduxjs/toolkit";
import songData from "../../util/songData";

const intialState = {
  songs: songData(),
  currentSong: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  animationPercentage: 0,
  libraryStatus: false,
};

export const playerSlice = createSlice({
  name: "music player",
  intialState,
  reducers: {
    activeSong: (state) => {},
    playlist: (state) => {},
    songInfo: (state) => {},
    musiclibrary: (state) => {},
  },
});

export const { activeSong, playlist } = playerSlice.actions;

export default playerSlice.reducer;

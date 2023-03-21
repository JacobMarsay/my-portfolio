import { createSlice } from "@reduxjs/toolkit";
import songData from "../../util/songData";

const songsList = songData();

const initialState = {
  songs: songsList,
  currentSong: songsList[0],
  isPlaying: false,
  songInfo: {
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  },
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
    setSongInfo: (state, action) => {
      state.songInfo = {
        ...state.songInfo,
        ...action.payload,
      };
    },
    musiclibrary: (state) => {},
    songStatus: (state) => {
      state.isPlaying = !state.isPlaying;
      console.log(state.isPlaying);
    },
    toggleLibrary: (state) => {
      state.libraryStatus = !state.libraryStatus;
    },
    skipTrackForward: (state) => {
      let currentIndex = state.songs.findIndex(
        (song) => song.id === state.currentSong.id
      );
      state.currentSong = state.songs[(currentIndex + 1) % state.songs.length];
    },
    skipTrackBackward: (state) => {
      let currentIndex = state.songs.findIndex(
        (song) => song.id === state.currentSong.id
      );
      if ((currentIndex - 1) % state.songs.length === -1) {
        currentIndex = state.songs.length - 1;
      } else {
        currentIndex = (currentIndex - 1) % state.songs.length;
      }
      state.currentSong = state.songs[currentIndex];
    },
  },
});

export const {
  toggleLibrary,
  songStatus,
  setSongInfo,
  skipTrackForward,
  skipTrackBackward,
} = playerSlice.actions;

export default playerSlice.reducer;

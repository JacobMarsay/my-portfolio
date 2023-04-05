import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstLoad: true,
};

export const splashSlice = createSlice({
  name: "splash",
  initialState,
  reducers: {
    showSplash: (state) => {
      state.firstLoad = false;
    },
  },
});

export const { showSplash } = splashSlice.actions;

export default splashSlice.reducer;
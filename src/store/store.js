import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import playerReducer from "../projects/Wave Music App/redux/slices/musicSlice";

const rootReducer = combineReducers({
  player: playerReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});

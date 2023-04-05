import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import playerReducer from "../projects/Wave Music App/redux/slice/musicSlice";
import splashReducer from "./slice/SplashSlice";

const rootReducer = combineReducers({
  player: playerReducer,
  splash: splashReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "./mainReducer";

const rootReducer = combineReducers( {
  main: mainReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})
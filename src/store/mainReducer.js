import { createReducer, createAction } from "@reduxjs/toolkit";

import { data } from "../data";

const initialState = {
  originData: data,
}

export default createReducer(initialState, {
});

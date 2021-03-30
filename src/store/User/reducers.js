import { lang } from "~Utils";
// import * as actionTypes from "./types";

const initialState = {
  name: 'Abdallah Kabalan',
  imgUrl: '',
  status: 'Active'
};

// ----------------------------------------
// Exported handler
// ----------------------------------------

const reducers = {};

const reducer = (state = initialState, { type, payload }) => {
  if (!lang.isFunction(reducers[type])) return state;
  return reducers[type](state, payload);
};

export default reducer;

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../rootReducer";

const enhancer = applyMiddleware(thunk);

export const configureStore = (preloadedState) =>
  createStore(rootReducer, preloadedState, enhancer);

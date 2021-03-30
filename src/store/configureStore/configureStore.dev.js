import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "../rootReducer";

export const configureStore = (preloadedState) => {
  const middlewares = [thunk]; // enables the use of deferred action creators
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const storeEnhancers = [middlewareEnhancer];
  const composedEnhancer = composeWithDevTools(...storeEnhancers);

  // create Store
  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  // enable hot reloading
  if (module.hot) {
    module.hot.accept("../rootReducer", () => {
      const nextReducer = require("../rootReducer");
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

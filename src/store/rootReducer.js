import { combineReducers } from "redux";

import employee from "./Employee/reducers";
import user from './User/reducers';

const rootReducer = combineReducers({
  employee,
  user
});

export default rootReducer;

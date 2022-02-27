import { combineReducers } from "redux";
import { filterReducer } from "./filters/filterReducer";

import { positionReducer } from "./positions/positionReducer";

export const rootReducer = combineReducers({
  positions: positionReducer,
  filters: filterReducer
});
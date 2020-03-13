import { combineReducers } from "redux";
import { nameReducer } from "./nameReducer";
import { fieldReducer } from "./fieldReducer";
import { counterReducer } from "./counterReducer";
import { RESTART_GAME } from "../constants/constants";

const appReducer = combineReducers({
  name: nameReducer,
  field: fieldReducer,
  counter: counterReducer
});

export const rootReducer = (state, action) => {
  if (action.type === RESTART_GAME) {
    state = undefined;
  }

  return appReducer(state, action);
};

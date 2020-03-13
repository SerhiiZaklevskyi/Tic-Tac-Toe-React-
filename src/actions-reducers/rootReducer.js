import { combineReducers } from "redux";
import { nameReducer } from "./name/nameReducer";
import { fieldReducer } from "./field/fieldReducer";
import { counterReducer } from "./counter/counterReducer";
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

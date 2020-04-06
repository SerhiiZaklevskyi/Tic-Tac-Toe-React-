import { nameReducer } from "./name/nameReducer";
import { fieldReducer } from "./field/fieldReducer";
import { counterReducer } from "./counter/counterReducer";
import { symbolReducer } from "./symbol/symbolReducer";
import { combineReducers } from "redux";

const appReducer = combineReducers({
  name: nameReducer,
  field: fieldReducer,
  counter: counterReducer,
  symbol: symbolReducer
});

export const rootReducer = (state, action) => {
  if (action.type === "restart") {
    state = undefined;
  }
  return appReducer(state, action);
};

import { nameReducer } from "./nameReducer";
import { fieldReducer } from "./fieldReducer";
import { counterReducer } from "./counterReducer";
import { symbolReducer } from "./symbolReducer";

const initialState = {
  ...nameReducer,
  ...fieldReducer,
  ...counterReducer,
  ...symbolReducer
};

export const rootReducer = (state = initialState, action) => {
  if (action.type === "restart") {
    state = initialState;
  }
  if (typeof action.execute === "function") return action.execute(state);
  return state;
};

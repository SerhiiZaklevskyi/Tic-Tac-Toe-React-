import { CHANGE_COUNTER_ONE } from "../constants/constants";
import { CHANGE_COUNTER_TWO } from "../constants/constants";

const initialState = {
  counterOne: 0,
  counterTwo: 0
};

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COUNTER_ONE:
      return {
        ...state,
        counterOne: state.counterOne + action.payload
      };
    case CHANGE_COUNTER_TWO:
      return {
        ...state,
        counterTwo: state.counterTwo + action.payload
      };
    default:
      return state;
  }
}

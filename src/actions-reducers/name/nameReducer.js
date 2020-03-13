import { SAVE_FIRST_NAME, SAVE_SECOND_NAME } from "../../constants/constants";

const initialState = {
  playerOneName: "First Player",
  playerTwoName: "Second Player"
};

export function nameReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_FIRST_NAME:
      return {
        ...state,
        playerOneName: action.payload
      };
    case SAVE_SECOND_NAME:
      return {
        ...state,
        playerTwoName: action.payload
      };
    default:
      return state;
  }
}

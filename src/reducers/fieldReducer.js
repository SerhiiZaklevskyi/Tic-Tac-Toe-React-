import { SWITCH_TURN } from "../constants/constants";
import { CHOOSE_SYMBOL } from "../constants/constants";
import { RESET_GAME } from "../constants/constants";
import { SHOW_WINNER } from "../constants/constants";
import { GET_CELLS } from "../constants/constants";

const initialState = {
  cells: Array(9).fill(null),
  firstPlayerMove: true,
  firstPlayerX: true,
  symbolChosen: false,
  winner: null
};

export function fieldReducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_TURN:
      return {
        ...state,
        cells: [
          ...state.cells.slice(0, action.payload.index),
          action.payload.value,
          ...state.cells.slice(action.payload.index + 1, state.cells.length)
        ],
        firstPlayerMove: !state.firstPlayerMove
      };
    case CHOOSE_SYMBOL:
      return {
        ...state,
        firstPlayerX: action.payload.firstPlayerX,
        symbolChosen: true,
        firstPlayerMove: action.payload.firstPlayerMove
      };
    case RESET_GAME:
      return {
        ...state,
        cells: [...initialState.cells],
        firstPlayerMove: action.payload,
        firstPlayerX: action.payload
      };
    case SHOW_WINNER:
      return {
        ...state,
        winner: action.payload
      };
    case GET_CELLS:
      return {
        ...state,
        cells: action.payload
      };
    default:
      return state;
  }
}

import { SWITCH_TURN } from "../constants/constants";
import { CHOOSE_SYMBOL } from "../constants/constants";
import { RESET_GAME } from "../constants/constants";
import { SHOW_WINNER } from "../constants/constants";
import { GET_CELLS } from "../constants/constants";

export const switchTurn = (value, index) => {
  return {
    type: SWITCH_TURN,
    payload: {
      value: value,
      index: index
    }
  };
};

export const chooseSymbol = (firstPlayerX, firstPlayerMove) => {
  return {
    type: CHOOSE_SYMBOL,
    payload: {
      firstPlayerX: firstPlayerX,
      firstPlayerMove: firstPlayerMove
    }
  };
};

export const resetGame = value => {
  return {
    type: RESET_GAME,
    payload: value
  };
};

export const showWinner = winner => {
  return {
    type: SHOW_WINNER,
    payload: winner
  };
};

export const getCells = cells => {
  return {
    type: GET_CELLS,
    payload: cells
  };
};

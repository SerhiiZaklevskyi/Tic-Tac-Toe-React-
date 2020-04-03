import { fieldReducer as initialState } from "../reducers/fieldReducer";
import { update } from "ramda";
const type = "field";

export const switchTurn = payload => ({
  execute: state => {
    return {
      ...state,
      cells: update(payload.id, payload, state.cells),
      firstPlayerMove: !state.firstPlayerMove
    };
  },
  type
});

export const choosePlayer = payload => ({
  execute: state => ({ ...state, firstPlayerMove: payload }),
  type
});

export const firstPlayerChoseX = payload => ({
  execute: state => ({ ...state, firstPlayerX: payload }),
  type
});

export const chooseSymbol = payload => ({
  execute: state => ({ ...state, symbolChosen: true, playerSymbol: payload }),
  type
});

export const resetGame = payload => ({
  execute: state => {
    return {
      ...state,
      cells: initialState.cells,
      firstPlayerMove: payload,
      firstPlayerX: payload
    };
  },
  type
});

export const showWinner = payload => ({
  execute: state => ({ ...state, winner: payload }),
  type
});

export const getCells = payload => ({
  execute: state => ({
    ...state,
    cells: payload
  }),
  type
});

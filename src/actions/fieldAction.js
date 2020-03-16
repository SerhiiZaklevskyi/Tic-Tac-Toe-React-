const type = "field";
const R = require("ramda");

export const switchTurn = (value, index) => ({
  execute: function(state) {
    return {
      ...state,
      cells: R.update(index, value, state.cells),
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

export const chooseSymbol = () => ({
  execute: state => ({ ...state, symbolChosen: true }),
  type
});

export const resetGame = payload => ({
  execute: function(state) {
    return {
      ...state,
      cells: Array(9).fill(null),
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

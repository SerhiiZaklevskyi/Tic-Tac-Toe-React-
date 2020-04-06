const type = "symbol";

export const chooseSymbol = payload => ({
  execute: state => ({ ...state, symbolChosen: true, playerSymbol: payload }),
  type
});

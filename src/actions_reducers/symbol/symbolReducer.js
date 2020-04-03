const initialState = {
  symbolChosen: null,
  playerSymbol: "X"
};

export const symbolReducer = (state = initialState, action) => {
  if (typeof action.execute === "function" && action.type === "symbol")
    return action.execute(state);
  return state;
};

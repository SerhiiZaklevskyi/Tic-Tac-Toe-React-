const initialState = {
  playerOneName: "First Player",
  playerTwoName: "Second Player"
};

export const nameReducer = (state = initialState, action) => {
  if (typeof action.execute === "function" && action.type === "name")
    return action.execute(state);
  return state;
};

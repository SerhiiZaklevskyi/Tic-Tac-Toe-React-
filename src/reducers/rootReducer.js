const initialState = {
  cells: Array(9).fill(),
  firstPlayerMove: true,
  firstPlayerX: true,
  symbolChosen: null,
  winner: null,
  playerOneName: "First Player",
  playerTwoName: "Second Player",
  counterOne: 0,
  counterTwo: 0
};

export const rootReducer = (state = initialState, action) => {
  if (action.type === "restart") {
    state = initialState;
  }
  if (typeof action.execute === "function") return action.execute(state);
  return state;
};

export const initialState = {
  cells: [
    { value: null, id: 0 },
    { value: null, id: 1 },
    { value: null, id: 2 },
    { value: null, id: 3 },
    { value: null, id: 4 },
    { value: null, id: 5 },
    { value: null, id: 6 },
    { value: null, id: 7 },
    { value: null, id: 8 }
  ],
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

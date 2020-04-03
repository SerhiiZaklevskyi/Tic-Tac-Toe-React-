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
  winner: null
};

export const fieldReducer = (state = initialState, action) => {
  if (typeof action.execute === "function" && action.type === "field")
    return action.execute(state);
  return state;
};

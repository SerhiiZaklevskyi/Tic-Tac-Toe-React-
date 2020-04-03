const initialState = {
  counterOne: 0,
  counterTwo: 0
};

export const counterReducer = (state = initialState, action) => {
  if (typeof action.execute === "function" && action.type === "counter")
    return action.execute(state);
  return state;
};

const type = "counter";

export const changeCounterOne = payload => ({
  execute: function(state) {
    return { ...state, counterOne: state.counterOne + payload };
  },
  type
});
export const changeCounterTwo = payload => ({
  execute: function(state) {
    return { ...state, counterTwo: state.counterTwo + payload };
  },
  type
});

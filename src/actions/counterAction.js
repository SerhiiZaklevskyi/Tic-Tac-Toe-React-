const type = "counter";

export const changeCounterOne = payload => ({
  execute: state => {
    return { ...state, counterOne: state.counterOne + payload };
  },
  type
});
export const changeCounterTwo = payload => ({
  execute: state => {
    return { ...state, counterTwo: state.counterTwo + payload };
  },
  type
});

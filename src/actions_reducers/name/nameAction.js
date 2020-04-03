const type = "name";

export const saveFirstName = payload => ({
  execute: state => ({ ...state, playerOneName: payload }),
  type
});

export const saveSecondName = payload => ({
  execute: state => ({ ...state, playerTwoName: payload }),
  type
});

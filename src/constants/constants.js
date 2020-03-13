export const SAVE_FIRST_NAME = "SAVE_FIRST_NAME";
export const SAVE_SECOND_NAME = "SAVE_SECOND_NAME";
export const SWITCH_TURN = "SWITCH_TURN";
export const CHOOSE_SYMBOL = "CHOOSE_SYMBOL";
export const RESET_GAME = "RESET_GAME";
export const CHANGE_COUNTER_ONE = "CHANGE_COUNTER_ONE";
export const CHANGE_COUNTER_TWO = "CHANGE_COUNTER_TWO";
export const SHOW_WINNER = "SHOW_WINNER";
export const RESTART_GAME = "RESTART_GAME";
export const GET_CELLS = "GET_CELLS";
export const combinations = cells => {
  const combination = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]]
  ];
  return combination;
};

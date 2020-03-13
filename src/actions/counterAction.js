import { CHANGE_COUNTER_ONE } from "../constants/constants";
import { CHANGE_COUNTER_TWO } from "../constants/constants";

export const changeCounterOne = num => {
  return {
    type: CHANGE_COUNTER_ONE,
    payload: num
  };
};

export const changeCounterTwo = num => {
  return {
    type: CHANGE_COUNTER_TWO,
    payload: num
  };
};

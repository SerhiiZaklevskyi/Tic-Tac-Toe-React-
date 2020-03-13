import { SAVE_FIRST_NAME } from "../../constants/constants";
import { SAVE_SECOND_NAME } from "../../constants/constants";

export const saveFirstName = name => {
  return {
    type: SAVE_FIRST_NAME,
    payload: name
  };
};

export const saveSecondName = name => {
  return {
    type: SAVE_SECOND_NAME,
    payload: name
  };
};

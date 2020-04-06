import React from "react";
import styles from "./GamePage.module.css";
import Header from "./Header/Header";
import Score from "./Score/Score";
import GameField from "./GameField/GameField";
import { connect } from "react-redux";
import {
  changeCounterOne,
  changeCounterTwo
} from "../../../actions_reducers/counter/counterAction";
import {
  saveFirstName,
  saveSecondName
} from "../../../actions_reducers/name/nameAction";

const GamePage = ({
  saveSecondName,
  saveFirstName,
  changeCounterOne,
  changeCounterTwo,
  ...rest
}) => {
  return (
    <div>
      <Header
        saveFirstName={saveFirstName}
        saveSecondName={saveSecondName}
        {...rest}
      />
      <div className={styles.gameWrapper}>
        <GameField
          changeCounterOne={changeCounterOne}
          changeCounterTwo={changeCounterTwo}
          {...rest}
        />
        <Score
          changeCounterOne={changeCounterOne}
          changeCounterTwo={changeCounterTwo}
          saveFirstName={saveFirstName}
          saveSecondName={saveSecondName}
          {...rest}
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({
  counter: { counterOne, counterTwo },
  name: { playerOneName, playerTwoName }
}) => ({
  counterOne,
  counterTwo,
  playerOneName,
  playerTwoName
});
const mapDispatchToProps = {
  changeCounterOne,
  changeCounterTwo,
  saveFirstName,
  saveSecondName
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);

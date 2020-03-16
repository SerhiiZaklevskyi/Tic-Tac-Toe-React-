import React from "react";
import styles from "./App.module.css";
import Header from "../Header/Header";
import Score from "../../components/Score/Score";
import GameField from "../GameField/GameField";
import { connect } from "react-redux";
import {
  changeCounterOne,
  changeCounterTwo
} from "../../actions/counterAction";
import { saveFirstName, saveSecondName } from "../../actions/nameAction";
const R = require("ramda");

const App = props => {
  const {
    playerOneName,
    playerTwoName,
    counterOne,
    counterTwo,
    cells,
    saveSecondName,
    saveFirstName,
    changeCounterOne,
    changeCounterTwo
  } = props;
  return (
    <div>
      <Header
        playerOneName={playerOneName}
        playerTwoName={playerTwoName}
        counterOne={counterOne}
        counterTwo={counterTwo}
        cells={cells}
        saveFirstName={saveFirstName}
        saveSecondName={saveSecondName}
      />
      <div className={styles.gameWrapper}>
        <GameField
          playerOneName={playerOneName}
          playerTwoName={playerTwoName}
          counterOne={counterOne}
          counterTwo={counterTwo}
          cells={cells}
          changeCounterOne={changeCounterOne}
          changeCounterTwo={changeCounterTwo}
        />
        <Score
          playerOneName={playerOneName}
          playerTwoName={playerTwoName}
          counterOne={counterOne}
          counterTwo={counterTwo}
          cells={cells}
          changeCounterOne={changeCounterOne}
          changeCounterTwo={changeCounterTwo}
          saveFirstName={saveFirstName}
          saveSecondName={saveSecondName}
        />
      </div>
    </div>
  );
};

const mapStateToProps = R.pick([
  "playerOneName",
  "playerTwoName",
  "counterOne",
  "counterTwo",
  "cells"
]);

const mapDispatchToProps = {
  changeCounterOne,
  changeCounterTwo,
  saveFirstName,
  saveSecondName
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

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
  return (
    <div>
      <Header
        playerOneName={props.playerOneName}
        playerTwoName={props.playerTwoName}
        counterOne={props.counterOne}
        counterTwo={props.counterTwo}
        cells={props.cells}
        saveFirstName={props.saveFirstName}
        saveSecondName={props.saveSecondName}
      />
      <div className={styles.gameWrapper}>
        <GameField
          playerOneName={props.playerOneName}
          playerTwoName={props.playerTwoName}
          counterOne={props.counterOne}
          counterTwo={props.counterTwo}
          cells={props.cells}
          changeCounterOne={props.changeCounterOne}
          changeCounterTwo={props.changeCounterTwo}
        />
        <Score
          playerOneName={props.playerOneName}
          playerTwoName={props.playerTwoName}
          counterOne={props.counterOne}
          counterTwo={props.counterTwo}
          cells={props.cells}
          changeCounterOne={props.changeCounterOne}
          changeCounterTwo={props.changeCounterTwo}
          saveFirstName={props.saveFirstName}
          saveSecondName={props.saveSecondName}
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

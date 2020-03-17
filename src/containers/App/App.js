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
import { pick } from "ramda";

const App = ({
  saveSecondName,
  saveFirstName,
  changeCounterOne,
  changeCounterTwo,
  cells,
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
          cells={cells}
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

const mapStateToProps = pick([
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

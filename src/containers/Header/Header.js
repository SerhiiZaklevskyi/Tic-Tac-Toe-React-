import React from "react";
import styles from "./Header.module.css";
import PlayerName from "../../components/PlayerName/PlayerName";
import ResetGame from "../../components/ResetGame/ResetGame";
import ShowWinner from "../../components/ShowWinner/ShowWinner";
import { connect } from "react-redux";
import {
  choosePlayer,
  chooseSymbol,
  firstPlayerChoseX
} from "../../actions/fieldAction";
import { restartGame } from "../../actions/restartAction";
import ChooseSymbol from "../../components/ChooseSymbol/ChooseSymbol";
const R = require("ramda");

export const Header = props => {
  return (
    <div className={styles.headerWrapper}>
      <p className={styles.header}>Tic-Tac-Toe!</p>
      <div id={styles.playersWrapper}>
        <PlayerName
          saveFirstName={props.saveFirstName}
          saveSecondName={props.saveSecondName}
        />
      </div>
      <ResetGame restartGame={props.restartGame} />
      <ShowWinner
        winner={props.winner}
        playerOneName={props.playerOneName}
        playerTwoName={props.playerTwoName}
      />
      {!props.symbolChosen && (
        <ChooseSymbol
          choosePlayer={props.choosePlayer}
          chooseSymbol={props.chooseSymbol}
          firstPlayerChoseX={props.firstPlayerChoseX}
        />
      )}
    </div>
  );
};

const mapStateToProps = R.pick(["symbolChosen", "winner"]);

const mapDispatchToProps = {
  chooseSymbol,
  choosePlayer,
  restartGame,
  firstPlayerChoseX
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

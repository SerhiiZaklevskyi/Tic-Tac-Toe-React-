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
import { pick } from "ramda";

export const Header = ({
  saveFirstName,
  saveSecondName,
  restartGame,
  winner,
  playerOneName,
  playerTwoName,
  symbolChosen,
  choosePlayer,
  chooseSymbol,
  firstPlayerChoseX
}) => {
  return (
    <div className={styles.headerWrapper}>
      <p className={styles.header}>Tic-Tac-Toe!</p>
      <div id={styles.playersWrapper}>
        <PlayerName
          saveFirstName={saveFirstName}
          saveSecondName={saveSecondName}
        />
      </div>
      <ResetGame restartGame={restartGame} />
      <ShowWinner
        winner={winner}
        playerOneName={playerOneName}
        playerTwoName={playerTwoName}
      />
      {!symbolChosen && (
        <ChooseSymbol
          choosePlayer={choosePlayer}
          chooseSymbol={chooseSymbol}
          firstPlayerChoseX={firstPlayerChoseX}
        />
      )}
    </div>
  );
};

const mapStateToProps = pick(["symbolChosen", "winner"]);

const mapDispatchToProps = {
  chooseSymbol,
  choosePlayer,
  restartGame,
  firstPlayerChoseX
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

import React from "react";
import styles from "./Header.module.css";
import PlayerName from "./PlayerName/PlayerName";
import ResetGame from "./ResetGame/ResetGame";
import ShowWinner from "./ShowWinner/ShowWinner";
import { connect } from "react-redux";
import {
  choosePlayer,
  chooseSymbol,
  firstPlayerChoseX
} from "../../../../actions/fieldAction";
import { restartGame } from "../../../../actions/restartAction";
import ChooseSymbol from "./ChooseSymbol/ChooseSymbol";
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
  firstPlayerChoseX,
  playerSymbol
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
          playerSymbol={playerSymbol}
        />
      )}
    </div>
  );
};

const mapStateToProps = pick(["symbolChosen", "winner", "playerSymbol"]);

const mapDispatchToProps = {
  chooseSymbol,
  choosePlayer,
  restartGame,
  firstPlayerChoseX
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

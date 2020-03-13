import React from "react";
import styles from "./Header.module.css";
import PlayerName from "./PlayerName/PlayerName";
import ResetGame from "./ResetGame/ResetGame";
import ShowWinner from "./ShowWinner/ShowWinner";
import { connect } from "react-redux";
import { chooseSymbol } from "../../actions/fieldAction";
import { restartGame } from "../../actions/restartAction";
import { saveFirstName, saveSecondName } from "../../actions/nameAction";
import ChooseSymbol from "./ChooseSymbol/ChooseSymbol";

const Header = props => {
  const chooseSymbol = () => {
    if (
      props.cell.every(cell => cell === null) &&
      props.symbolChosen === false &&
      props.counterTwo === 0 &&
      props.counterOne === 0
    ) {
      return <ChooseSymbol chooseSymbol={props.chooseSymbol} />;
    }
  };
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
      {chooseSymbol()}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cell: state.fieldReducer.cells,
    symbolChosen: state.fieldReducer.symbolChosen,
    counterOne: state.counterReducer.counterOne,
    counterTwo: state.counterReducer.counterTwo,
    winner: state.fieldReducer.winner,
    playerOneName: state.nameReducer.playerOneName,
    playerTwoName: state.nameReducer.playerTwoName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    chooseSymbol: (firstPlayerX, fristPlayerMove) =>
      dispatch(chooseSymbol(firstPlayerX, fristPlayerMove)),
    restartGame: () => dispatch(restartGame()),
    saveFirstName: name => dispatch(saveFirstName(name)),
    saveSecondName: name => dispatch(saveSecondName(name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

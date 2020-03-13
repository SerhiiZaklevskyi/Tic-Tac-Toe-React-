import React from "react";
import styles from "./Header.module.css";
import PlayerName from "../../components/PlayerName/PlayerName";
import ResetGame from "../../components/ResetGame/ResetGame";
import ShowWinner from "../../components/ShowWinner/ShowWinner";
import { connect } from "react-redux";
import { chooseSymbol } from "../../actions-reducers/field/fieldAction";
import { restartGame } from "../../actions-reducers/restart/restartAction";
import { saveFirstName, saveSecondName } from "../../actions-reducers/name/nameAction";
import ChooseSymbol from "../../components/ChooseSymbol/ChooseSymbol";

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
    cell: state.field.cells,
    symbolChosen: state.field.symbolChosen,
    counterOne: state.counter.counterOne,
    counterTwo: state.counter.counterTwo,
    winner: state.field.winner,
    playerOneName: state.name.playerOneName,
    playerTwoName: state.name.playerTwoName
  };
};

const mapDispatchToProps = {
  chooseSymbol,
  restartGame,
  saveFirstName,
  saveSecondName
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

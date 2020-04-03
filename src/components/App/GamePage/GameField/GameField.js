import React from "react";
import styles from "./GameField.module.css";
import Cell from "./Cell/Cell";
import { connect } from "react-redux";
import combinations from "../../../../utils/combinations";
import {
  showWinner,
  resetGame,
  switchTurn,
  getCells
} from "../../../../actions_reducers/field/fieldAction";
import { chooseSymbol } from "../../../../actions_reducers/symbol/symbolAction";
import PropTypes from "prop-types";

export class GameField extends React.Component {
  componentDidMount() {
    const cells = JSON.parse(localStorage.getItem("cells"));
    cells && this.props.getCells(cells);
  }

  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  componentDidUpdate(prevProps) {
    if (this.props.cells !== prevProps.cells) {
      this.checkWinner();
    }
  }

  firstPlayerWon() {
    this.props.showWinner(this.props.playerOneName);
    this.props.changeCounterOne(1);
    this.setItem("counterOne", this.props.counterOne + 1);
  }

  secondPlayerWon() {
    this.props.showWinner(this.props.playerTwoName);
    this.props.changeCounterTwo(1);
    this.setItem("counterTwo", this.props.counterTwo + 1);
  }

  checkWinner() {
    this.setItem("cells", this.props.cells);
    const symbol = combinations(this.props.cells);
    if (!symbol) return;
    const { resetGame, firstPlayerX, playerSymbol } = this.props;
    resetGame(!!firstPlayerX);
    this.setItem("firstPlayerMove", !!firstPlayerX);
    localStorage.removeItem("cells");
    playerSymbol === symbol ? this.firstPlayerWon() : this.secondPlayerWon();
  }

  render() {
    const {
      firstPlayerX,
      firstPlayerMove,
      switchTurn,
      chooseSymbol,
      symbolChosen,
      cells,
      playerSymbol
    } = this.props;
    return (
      <div className={styles.gameField}>
        <div className={styles.cellsWrapper}>
          {cells.map(cell => (
            <Cell
              key={cell.id}
              cell={cell}
              firstPlayerX={firstPlayerX}
              firstPlayerMove={firstPlayerMove}
              switchTurn={switchTurn}
              chooseSymbol={chooseSymbol}
              symbolChosen={symbolChosen}
              playerSymbol={playerSymbol}
            />
          ))}
        </div>
      </div>
    );
  }
}

GameField.propTypes = {
  changeCounterOne: PropTypes.func.isRequired,
  changeCounterTwo: PropTypes.func.isRequired,
  getCells: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
  showWinner: PropTypes.func.isRequired,
  counterOne: PropTypes.number.isRequired,
  counterTwo: PropTypes.number.isRequired,
  playerOneName: PropTypes.string.isRequired,
  playerTwoName: PropTypes.string.isRequired
};

const mapStateToProps = ({
  field: { firstPlayerMove, firstPlayerX, cells },
  counter: { counterOne, counterTwo },
  symbol: { symbolChosen, playerSymbol }
}) => {
  return {
    firstPlayerX,
    firstPlayerMove,
    counterOne,
    counterTwo,
    symbolChosen,
    playerSymbol,
    cells
  };
};
const mapDispatchToProps = {
  getCells,
  resetGame,
  showWinner,
  switchTurn,
  chooseSymbol
};

export default connect(mapStateToProps, mapDispatchToProps)(GameField);

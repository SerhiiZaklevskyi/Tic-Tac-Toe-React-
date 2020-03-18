import React from "react";
import styles from "./GameField.module.css";
import Cell from "./Cell/Cell";
import { connect } from "react-redux";
import { getCells } from "../../actions/fieldAction";
import combinations from "../../utils/combinations";
import {
  showWinner,
  resetGame,
  switchTurn,
  chooseSymbol
} from "../../actions/fieldAction";
import { pick } from "ramda";

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
    const { resetGame, firstPlayerX } = this.props;
    resetGame(!!firstPlayerX);
    this.setItem("firstPlayerMove", !!firstPlayerX);
    localStorage.removeItem("cells");
    if (symbol === "X") {
      firstPlayerX ? this.firstPlayerWon() : this.secondPlayerWon();
    } else if (symbol === "O") {
      firstPlayerX ? this.secondPlayerWon() : this.firstPlayerWon();
    }
  }

  render() {
    const {
      firstPlayerX,
      firstPlayerMove,
      switchTurn,
      chooseSymbol,
      symbolChosen,
      cells
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
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = pick([
  "firstPlayerX",
  "firstPlayerMove",
  "counterOne",
  "counterTwo",
  "symbolChosen"
]);

const mapDispatchToProps = {
  getCells,
  resetGame,
  showWinner,
  switchTurn,
  chooseSymbol
};

export default connect(mapStateToProps, mapDispatchToProps)(GameField);

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
import { store } from "../../store/configureStore";
import { pick } from "ramda";

export class GameField extends React.Component {
  componentDidMount() {
    const cells = JSON.parse(localStorage.getItem("cells"));
    cells && this.props.getCells(cells);
  }

  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  onVictory(counter, winner) {
    counter(1);
    this.props.showWinner(winner);
    this.props.resetGame(!!this.props.firstPlayerX);
    const state = store.getState();
    this.setItem("firstPlayerMove", !!this.props.firstPlayerX);
    this.setItem("counterOne", state.counterOne);
    this.setItem("counterTwo", state.counterTwo);
    localStorage.removeItem("cells");
  }

  checkWinner() {
    const cells = store.getState().cells;
    this.setItem("cells", cells);
    if (combinations(cells) === "X") {
      this.props.firstPlayerX
        ? this.onVictory(this.props.changeCounterOne, this.props.playerOneName)
        : this.onVictory(this.props.changeCounterTwo, this.props.playerTwoName);
    } else if (combinations(cells) === "O") {
      this.props.firstPlayerX
        ? this.onVictory(this.props.changeCounterTwo, this.props.playerTwoName)
        : this.onVictory(this.props.changeCounterOne, this.props.playerOneName);
    }
  }

  render() {
    return (
      <div className={styles.gameField}>
        <div className={styles.cellsWrapper}>
          {this.props.cells.map((cell, index) => (
            <Cell
              key={index}
              id={index}
              checkWinner={this.checkWinner.bind(this)}
              firstPlayerX={this.props.firstPlayerX}
              firstPlayerMove={this.props.firstPlayerMove}
              switchTurn={this.props.switchTurn}
              chooseSymbol={this.props.chooseSymbol}
              cell={cell}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = pick(["firstPlayerX", "firstPlayerMove"]);

const mapDispatchToProps = {
  getCells,
  resetGame,
  showWinner,
  switchTurn,
  chooseSymbol
};

export default connect(mapStateToProps, mapDispatchToProps)(GameField);

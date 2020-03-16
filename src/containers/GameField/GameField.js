import React from "react";
import styles from "./GameField.module.css";
import Cell from "./Cell/Cell";
import { connect } from "react-redux";
import { getCells } from "../../actions/fieldAction";
import combinations from "../../utils/combinations";
import { showWinner, resetGame } from "../../actions/fieldAction";
import { store } from "../../store/configureStore";
const R = require("ramda");

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
        : this.playerTwoWon(
            this.props.changeCounterTwo,
            this.props.playerTwoName
          );
    } else if (combinations(cells) === "O") {
      this.props.firstPlayerX
        ? this.playerTwoWon(
            this.props.changeCounterTwo,
            this.props.playerTwoName
          )
        : this.onVictory(this.props.changeCounterOne, this.props.PlayerOneName);
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
              cell={cell}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = R.pick(["firstPlayerX"]);

const mapDispatchToProps = {
  getCells,
  resetGame,
  showWinner
};

export default connect(mapStateToProps, mapDispatchToProps)(GameField);

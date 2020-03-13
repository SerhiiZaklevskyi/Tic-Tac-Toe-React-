import React from "react";
import styles from "./GameField.module.css";
import Cell from "./Cell/Cell";
import { connect } from "react-redux";
import { getCells } from "../../actions/fieldAction";
import { combinations } from "../../constants/constants";
import { store } from "../../store/configureStore";
import {
  changeCounterOne,
  changeCounterTwo
} from "../../actions/counterAction";
import { showWinner, resetGame } from "../../actions/fieldAction";

class GameField extends React.Component {
  constructor(props) {
    super(props);
    this.checkWinner = this.checkWinner.bind(this);
  }
  componentDidMount() {
    const cells = JSON.parse(localStorage.getItem("cells"));
    cells && this.props.getCells(cells);
  }

  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  onVictory(turn, counter, name) {
    counter(1);
    const state = store.getState();
    const items = [
      {
        key: "firstPlayerMove",
        value: turn
      },
      {
        key: "counterOne",
        value: state.counterReducer.counterOne
      },
      {
        key: "counterTwo",
        value: state.counterReducer.counterTwo
      }
    ];
    items.forEach(item => this.setItem(item.key, item.value));
    this.props.resetGame(turn);
    this.props.showWinner(name);
    localStorage.removeItem("cells");
  }

  checkWinner() {
    const cells = store.getState().fieldReducer.cells;
    this.setItem("cells", cells);
    combinations(cells).forEach(row => {
      if (row.every(cell => cell === "X")) {
        this.props.firstPlayerX
          ? this.onVictory(
              true,
              this.props.changeCounterOne,
              this.props.playerOne
            )
          : this.onVictory(
              false,
              this.props.changeCounterTwo,
              this.props.playerTwo
            );
      } else if (row.every(cell => cell === "O")) {
        this.props.firstPlayerX
          ? this.onVictory(
              true,
              this.props.changeCounterTwo,
              this.props.playerTwo
            )
          : this.onVictory(
              false,
              this.props.changeCounterOne,
              this.props.playerOne
            );
      }
    });
  }

  render() {
    return (
      <div className={styles.gameField}>
        <div className={styles.cellsWrapper}>
          {this.props.cells.map((cell, index) => (
            <Cell key={index} id={index} checkWinner={this.checkWinner} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cells: state.fieldReducer.cells,
    firstPlayerX: state.fieldReducer.firstPlayerX,
    playerOne: state.nameReducer.playerOneName,
    playerTwo: state.nameReducer.playerTwoName
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCells: (cells, firstPlayerMove) =>
      dispatch(getCells(cells, firstPlayerMove)),
    resetGame: value => dispatch(resetGame(value)),
    changeCounterOne: num => dispatch(changeCounterOne(num)),
    changeCounterTwo: num => dispatch(changeCounterTwo(num)),
    showWinner: winner => dispatch(showWinner(winner))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameField);

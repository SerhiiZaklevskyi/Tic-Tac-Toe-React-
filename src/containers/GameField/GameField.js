import React from "react";
import styles from "./GameField.module.css";
import Cell from "./Cell/Cell";
import { connect } from "react-redux";
import { getCells } from "../../actions-reducers/field/fieldAction";
import combinations from "../../utils/combinations";
import { store } from "../../store/configureStore";
import {
  changeCounterOne,
  changeCounterTwo
} from "../../actions-reducers/counter/counterAction";
import { showWinner, resetGame } from "../../actions-reducers/field/fieldAction";

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

  playerOneWon() {
    this.props.changeCounterOne(1);
    this.props.showWinner(this.props.playerOne);
    this.props.resetGame(this.props.firstPlayerX);
    const state = store.getState();
    this.setItem("firstPlayerMove", this.props.firstPlayerX);
    this.setItem("counterOne", state.counter.counterOne);
    localStorage.removeItem("cells");
  }

  playerTwoWon() {
    this.props.changeCounterTwo(1);
    this.props.showWinner(this.props.playerTwo);
    this.props.resetGame(!this.props.firstPlayerX);
    const state = store.getState();
    this.setItem("firstPlayerMove", !this.props.firstPlayerX);
    this.setItem("counterOne", state.counter.counterTwo);
    localStorage.removeItem("cells");
  }
  checkWinner() {
    const cells = store.getState().field.cells;
    this.setItem("cells", cells);
    if (combinations(cells) === "X") {
      this.props.firstPlayerX ? this.playerOneWon() : this.playerTwoWon();
    } else if (combinations(cells) === "O") {
      this.props.firstPlayerX ? this.playerTwoWon() : this.playerOneWon();
    }
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
    cells: state.field.cells,
    firstPlayerX: state.field.firstPlayerX,
    playerOne: state.name.playerOneName,
    playerTwo: state.name.playerTwoName
  };
};
const mapDispatchToProps = {
  getCells,
  resetGame,
  changeCounterOne,
  changeCounterTwo,
  showWinner
};

export default connect(mapStateToProps, mapDispatchToProps)(GameField);

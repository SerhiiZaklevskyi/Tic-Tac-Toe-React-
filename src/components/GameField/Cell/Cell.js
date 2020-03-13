import React from "react";
import styles from "./Cell.module.css";
import { connect } from "react-redux";
import { switchTurn } from "../../../actions/fieldAction";

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  handleClick(event) {
    this.setItem("firstPlayerX", this.props.firstPlayerX);
    if (event.target.innerText === "") {
      this.props.firstPlayerMove
        ? this.props.switchTurn("X", this.props.id)
        : this.props.switchTurn("O", this.props.id);
      this.setItem("firstPlayerMove", !this.props.firstPlayerMove);
      this.props.checkWinner();
    }
  }

  render() {
    return (
      <p className={styles.cell} onClick={this.handleClick}>
        {this.props.cell[this.props.id]}
      </p>
    );
  }
}

const mapStateToProps = state => {
  return {
    cell: state.fieldReducer.cells,
    firstPlayerMove: state.fieldReducer.firstPlayerMove,
    firstPlayerX: state.fieldReducer.firstPlayerX
  };
};

const mapDispatchToProps = dispatch => {
  return {
    switchTurn: (value, index) => dispatch(switchTurn(value, index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);

import React from "react";
import styles from "./Cell.module.css";
import { connect } from "react-redux";
import { switchTurn, chooseSymbol } from "../../../actions/fieldAction";
const R = require("ramda");

export const Cell = props => {
  const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const defaultSymbol = () => {
    setItem("firstPlayerX", props.firstPlayerX);
    setItem("symbolChosen", true);
    props.chooseSymbol();
  };

  const handleClick = event => {
    if (event.target.innerText !== "") return;
    defaultSymbol();
    props.firstPlayerMove
      ? props.switchTurn("X", props.id)
      : props.switchTurn("O", props.id);
    setItem("firstPlayerMove", !props.firstPlayerMove);
    props.checkWinner();
  };
  return (
    <p className={styles.cell} onClick={handleClick.bind(this)}>
      {props.cell}
    </p>
  );
};

const mapStateToProps = R.pick(["firstPlayerMove"]);

const mapDispatchToProps = {
  switchTurn,
  chooseSymbol
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);

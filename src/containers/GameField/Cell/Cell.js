import React from "react";
import styles from "./Cell.module.css";

export const Cell = props => {
  const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const defaultSymbol = () => {
    setItem("firstPlayerX", props.firstPlayerX);
    setItem("symbolChosen", true);
    props.chooseSymbol();
  };

  const handleClick = ({ target: { innerText } }) => {
    if (innerText !== "") return;
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

export default Cell;

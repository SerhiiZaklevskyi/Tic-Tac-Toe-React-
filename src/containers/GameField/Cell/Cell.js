import React from "react";
import styles from "./Cell.module.css";

export const Cell = ({
  switchTurn,
  firstPlayerMove,
  firstPlayerX,
  chooseSymbol,
  cell,
  symbolChosen
}) => {
  const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const defaultSymbol = () => {
    if (symbolChosen !== null) return;
    setItem("firstPlayerX", firstPlayerX);
    setItem("symbolChosen", true);
    chooseSymbol();
  };

  const handleClick = ({ target: { innerText } }) => {
    if (innerText !== "") return;
    defaultSymbol();
    firstPlayerMove
      ? switchTurn({ value: "X", id: cell.id })
      : switchTurn({ value: "O", id: cell.id });
    setItem("firstPlayerMove", !firstPlayerMove);
  };
  return (
    <p className={styles.cell} onClick={handleClick}>
      {cell.value}
    </p>
  );
};

export default Cell;

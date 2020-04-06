import React from "react";
import styles from "./Cell.module.css";
import PropTypes from "prop-types";

export const Cell = ({
  switchTurn,
  firstPlayerMove,
  firstPlayerX,
  chooseSymbol,
  cell,
  symbolChosen,
  playerSymbol
}) => {
  const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const items = [
    { key: "firstPlayerX", value: firstPlayerX },
    { key: "symbolChosen", value: true },
    { key: "playerSymbol", value: playerSymbol }
  ];

  const defaultSymbol = () => {
    if (symbolChosen !== null) return;
    items.forEach(item => setItem(item.key, item.value));
    chooseSymbol("X");
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
Cell.propTypes = {
  chooseSymbol: PropTypes.func.isRequired,
  switchTurn: PropTypes.func.isRequired,
  firstPlayerMove: PropTypes.bool.isRequired,
  firstPlayerX: PropTypes.bool.isRequired,
  playerSymbol: PropTypes.string.isRequired,
  cell: PropTypes.shape({
    id: PropTypes.number.isRequired
  })
};

export default Cell;

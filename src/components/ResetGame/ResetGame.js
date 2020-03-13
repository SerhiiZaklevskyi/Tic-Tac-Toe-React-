import React from "react";
import styles from "./ResetGame.module.css";

const ResetGame = props => {
  const restartGame = () => {
    localStorage.clear();
    props.restartGame();
  };
  return (
    <span className={styles.resettWrapper}>
      <button className={styles.resetGame} onClick={restartGame}>
        ResetGame
      </button>
    </span>
  );
};

export default ResetGame;

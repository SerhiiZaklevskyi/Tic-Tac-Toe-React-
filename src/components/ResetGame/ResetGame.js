import React from "react";
import styles from "./ResetGame.module.css";

const ResetGame = ({ restartGame }) => {
  const restart = () => {
    localStorage.clear();
    restartGame();
  };
  return (
    <span className={styles.resettWrapper}>
      <button className={styles.resetGame} onClick={restart}>
        ResetGame
      </button>
    </span>
  );
};

export default ResetGame;

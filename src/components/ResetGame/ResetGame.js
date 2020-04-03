import React from "react";
import styles from "./ResetGame.module.css";

const ResetGame = ({ restartGame }) => {
  const handleClick = () => {
    localStorage.clear();
    restartGame();
  };
  return (
    <span className={styles.resettWrapper}>
      <button className={styles.resetGame} onClick={handleClick}>
        ResetGame
      </button>
    </span>
  );
};

export default ResetGame;

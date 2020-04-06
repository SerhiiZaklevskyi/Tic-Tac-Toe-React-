import React from "react";
import styles from "./ResetGame.module.css";
import PropTypes from "prop-types";

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

ResetGame.propTypes = {
  restartGame: PropTypes.func.isRequired
};
export default ResetGame;

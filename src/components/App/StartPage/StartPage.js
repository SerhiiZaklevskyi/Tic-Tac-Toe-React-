import React from "react";
import styles from "./StartPage.module.css";
import { Link } from "react-router-dom";

const StartPage = props => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.welcome}>Welcome to tic-tac-toe!</p>
      <Link to="/gamePage">
        <button className={styles.startGame}>StartGame</button>
      </Link>
    </div>
  );
};

export default StartPage;

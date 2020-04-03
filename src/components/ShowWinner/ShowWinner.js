import React from "react";
import styles from "./ShowWinner.module.css";

const ShowWinner = ({ winner }) => {
  return <div className={styles.winner}>Winner: {winner}</div>;
};

export default ShowWinner;

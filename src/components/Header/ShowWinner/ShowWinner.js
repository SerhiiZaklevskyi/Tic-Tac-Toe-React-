import React from "react";
import styles from "./ShowWinner.module.css";

const ShowWinner = props => {
  return <div className={styles.winner}>Winner: {props.winner}</div>;
};

export default ShowWinner;

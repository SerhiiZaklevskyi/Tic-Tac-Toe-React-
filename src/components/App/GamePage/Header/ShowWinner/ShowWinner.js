import React from "react";
import styles from "./ShowWinner.module.css";
import PropTypes from "prop-types";

const ShowWinner = ({ winner }) => {
  return <div className={styles.winner}>Winner: {winner}</div>;
};

ShowWinner.propTypes = {
  playerOneName: PropTypes.string.isRequired,
  playerTwoName: PropTypes.string.isRequired
};

export default ShowWinner;

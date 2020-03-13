import React from "react";
import styles from "./ChooseSymbol.module.css";

class ChooseSymbol extends React.Component {
  componentDidMount() {
    const getItem = key => JSON.parse(localStorage.getItem(key));
    const firstPlayerX = getItem("firstPlayerX");
    const firstPlayerMove = getItem("firstPlayerMove");
    firstPlayerX !== null &&
      firstPlayerMove !== null &&
      this.props.chooseSymbol(firstPlayerX, firstPlayerMove);
  }

  chooseSymbol = (firstPlayerX, fristPlayerMove) => {
    this.props.chooseSymbol(firstPlayerX, fristPlayerMove);
    localStorage.setItem("firstPlayerX", JSON.stringify(firstPlayerX));
  };
  render() {
    return (
      <div className={styles.chooseSymbol}>
        <p>Chose your symbol</p>
        <button
          className={styles.xButton}
          onClick={() => this.chooseSymbol(true, true)}
        >
          X
        </button>
        <button
          className={styles.oButton}
          onClick={() => this.chooseSymbol(false, false)}
        >
          O
        </button>
      </div>
    );
  }
}

export default ChooseSymbol;

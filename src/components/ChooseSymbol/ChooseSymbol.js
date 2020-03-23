import React from "react";
import styles from "./ChooseSymbol.module.css";
import fireAction from "../../utils/action-util";

class ChooseSymbol extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      {
        actionName: this.props.firstPlayerChoseX,
        itemName: "firstPlayerX"
      },
      {
        actionName: this.props.choosePlayer,
        itemName: "firstPlayerMove"
      },
      {
        actionName: this.props.chooseSymbol,
        itemName: "playerSymbol"
      }
    ];
  }

  componentDidMount() {
    this.items.forEach(fireAction);
  }

  handleClick = (value, symbol) => () => {
    const setItem = (key, item) =>
      localStorage.setItem(key, JSON.stringify(item));
    this.items.forEach(item => {
      if (item.itemName !== "playerSymbol") {
        setItem(item.itemName, value);
        item.actionName(value);
      }
    });
    setItem("playerSymbol", this.props.playerSymbol);
    this.props.chooseSymbol(symbol);
  };
  render() {
    return (
      <div className={styles.chooseSymbol}>
        <p>Chose your symbol</p>
        <button
          className={styles.xButton}
          onClick={this.handleClick(true, "X")}
        >
          X
        </button>
        <button
          className={styles.oButton}
          onClick={this.handleClick(false, "O")}
        >
          O
        </button>
      </div>
    );
  }
}

export default ChooseSymbol;

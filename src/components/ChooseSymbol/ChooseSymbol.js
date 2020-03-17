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
        itemName: "symbolChosen"
      }
    ];
  }

  componentDidMount() {
    this.items.forEach(fireAction);
  }

  handleClick = value => () => {
    this.props.choosePlayer(value);
    this.props.firstPlayerChoseX(value);
    this.props.chooseSymbol();
    this.items.forEach(item =>
      localStorage.setItem(item.itemName, JSON.stringify(value))
    );
  };
  render() {
    return (
      <div className={styles.chooseSymbol}>
        <p>Chose your symbol</p>
        <button className={styles.xButton} onClick={this.handleClick(true)}>
          X
        </button>
        <button className={styles.oButton} onClick={this.handleClick(false)}>
          O
        </button>
      </div>
    );
  }
}

export default ChooseSymbol;

import React from "react";
import styles from "./PlayerName.module.css";

class PlayerName extends React.Component {
  constructor(props) {
    super(props);
    this.inputOne = React.createRef();
    this.inputTwo = React.createRef();
  }

  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  nameOneHandler() {
    this.props.saveFirstName(this.inputOne.current.value);
    this.setItem("PlayerOneName", this.inputOne.current.value);
    this.inputOne.current.value = "";
  }
  nameTwoHandler() {
    this.props.saveSecondName(this.inputTwo.current.value);
    this.setItem("PlayerTwoName", this.inputTwo.current.value);
    this.inputTwo.current.value = "";
  }
  nameOneKeyPress(event) {
    event.key === "Enter" && this.nameOneHandler();
  }
  nameTwoKeyPress(event) {
    event.key === "Enter" && this.nameTwoHandler();
  }

  render() {
    return (
      <React.Fragment>
        <span className={styles.playerOne}>
          <input
            type="text"
            onKeyPress={this.nameOneKeyPress.bind(this)}
            id={styles.playerOne}
            placeholder="Player-1"
            ref={this.inputOne}
          />
          <button
            className={styles.save}
            id="savePlayerOne"
            onClick={this.nameOneHandler.bind(this)}
          >
            save
          </button>
        </span>
        <span className={styles.playerTwo}>
          <input
            type="text"
            id={styles.playerTwo}
            placeholder="Player-2"
            ref={this.inputTwo}
            onKeyPress={this.nameTwoKeyPress.bind(this)}
          />
          <button
            className={styles.save}
            id="savePlayerTwo"
            onClick={this.nameTwoHandler.bind(this)}
          >
            save
          </button>
        </span>
      </React.Fragment>
    );
  }
}

export default PlayerName;

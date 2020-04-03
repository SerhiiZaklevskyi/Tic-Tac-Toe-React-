import React from "react";
import styles from "./PlayerName.module.css";
import PropTypes from "prop-types";

class PlayerName extends React.Component {
  constructor(props) {
    super(props);
    this.inputOne = React.createRef();
    this.inputTwo = React.createRef();
    this.nameOneHandler = this.nameOneHandler.bind(this);
    this.nameTwoHandler = this.nameTwoHandler.bind(this);
    this.nameOneKeyPress = this.nameOneKeyPress.bind(this);
    this.nameTwoKeyPress = this.nameTwoKeyPress.bind(this);
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
  nameOneKeyPress({ key }) {
    key === "Enter" && this.nameOneHandler();
  }
  nameTwoKeyPress({ key }) {
    key === "Enter" && this.nameTwoHandler();
  }

  render() {
    return (
      <React.Fragment>
        <span className={styles.playerOne}>
          <input
            type="text"
            onKeyPress={this.nameOneKeyPress}
            id={styles.playerOne}
            placeholder="Player-1"
            ref={this.inputOne}
          />
          <button
            className={styles.save}
            id="savePlayerOne"
            onClick={this.nameOneHandler}
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
            onKeyPress={this.nameTwoKeyPress}
          />
          <button
            className={styles.save}
            id="savePlayerTwo"
            onClick={this.nameTwoHandler}
          >
            save
          </button>
        </span>
      </React.Fragment>
    );
  }
}

PlayerName.propTypes = {
  saveFirstName: PropTypes.func.isRequired,
  saveSecondName: PropTypes.func.isRequired
};

export default PlayerName;

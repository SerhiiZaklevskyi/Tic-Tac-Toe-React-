import React from "react";
import styles from "./Score.module.css";
import fireAction from "../../utils/action-util";
export class Score extends React.Component {
  items() {
    return [
      {
        actionName: this.props.saveFirstName,
        itemName: "PlayerOneName"
      },
      {
        actionName: this.props.saveSecondName,
        itemName: "PlayerTwoName"
      },
      {
        actionName: this.props.changeCounterOne,
        itemName: "counterOne"
      },
      {
        actionName: this.props.changeCounterTwo,
        itemName: "counterTwo"
      }
    ];
  }
  componentDidMount() {
    this.items().forEach(fireAction);
  }

  render() {
    const { playerOneName, playerTwoName, counterOne, counterTwo } = this.props;

    return (
      <div className={styles.score}>
        <p id="firstPlayer">
          {playerOneName}: {counterOne}
        </p>
        <p id="secondPlayer">
          {playerTwoName} : {counterTwo}
        </p>
      </div>
    );
  }
}

export default Score;

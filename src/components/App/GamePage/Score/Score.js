import React from "react";
import styles from "./Score.module.css";
import fireAction from "../../../../utils/action-util";
import PropTypes from "prop-types";

export class Score extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
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
    this.items.forEach(fireAction);
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

Score.propTypes = {
  changeCounterOne: PropTypes.func.isRequired,
  changeCounterTwo: PropTypes.func.isRequired,
  saveFirstName: PropTypes.func.isRequired,
  saveSecondName: PropTypes.func.isRequired
};
export default Score;

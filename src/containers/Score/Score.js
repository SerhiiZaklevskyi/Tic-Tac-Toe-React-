import React from "react";
import styles from "./Score.module.css";
import { connect } from "react-redux";
import {
  changeCounterOne,
  changeCounterTwo
} from "../../actions-reducers/counter/counterAction";
import { saveFirstName, saveSecondName } from "../../actions-reducers/name/nameAction";
import fireAction from "../../utils/action-util";

class Score extends React.Component {
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

const mapDispatchToProps = {
  changeCounterOne,
  changeCounterTwo,
  saveFirstName,
  saveSecondName
};

const mapStateToProps = state => {
  return {
    playerOneName: state.name.playerOneName,
    playerTwoName: state.name.playerTwoName,
    counterOne: state.counter.counterOne,
    counterTwo: state.counter.counterTwo
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Score);

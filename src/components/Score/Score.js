import React from "react";
import styles from "./Score.module.css";
import { connect } from "react-redux";
import {
  changeCounterOne,
  changeCounterTwo
} from "../../actions/counterAction";
import { saveFirstName, saveSecondName } from "../../actions/nameAction";

class Score extends React.Component {
  fireAction({ actionName, itemName }) {
    const getItem = key => JSON.parse(localStorage.getItem(key));
    const entity = getItem(itemName);
    entity !== null && actionName(entity);
  }
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
    this.items().forEach(this.fireAction);
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

const mapDispatchToProps = dispatch => {
  return {
    changeCounterOne: num => dispatch(changeCounterOne(num)),
    changeCounterTwo: num => dispatch(changeCounterTwo(num)),
    saveFirstName: name => dispatch(saveFirstName(name)),
    saveSecondName: name => dispatch(saveSecondName(name))
  };
};

const mapStateToProps = state => {
  return {
    playerOneName: state.nameReducer.playerOneName,
    playerTwoName: state.nameReducer.playerTwoName,
    counterOne: state.counterReducer.counterOne,
    counterTwo: state.counterReducer.counterTwo
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Score);

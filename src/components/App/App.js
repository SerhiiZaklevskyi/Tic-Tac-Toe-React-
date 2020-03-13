import React from "react";
import styles from "./App.module.css";
import Header from "../../containers/Header/Header";
import Score from "../../containers/Score/Score";
import GameField from "../../containers/GameField/GameField";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.gameWrapper}>
        <GameField />
        <Score />
      </div>
    </div>
  );
}

export default App;

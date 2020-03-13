import React from "react";
import styles from "./App.module.css";
import Header from "../Header/Header";
import Score from "../Score/Score";
import GameField from "../GameField/GameField";

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

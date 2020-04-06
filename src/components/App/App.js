import React from "react";
import StartPage from "./StartPage/StartPage";
import GamePage from "./GamePage/GamePage";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = props => {
  return (
    <Router>
      <Route exact path="/">
        <StartPage />
      </Route>
      <Route path="/gamePage">
        <GamePage />
      </Route>
    </Router>
  );
};

export default App;

import React, { Component } from "react";
import RollDice from "./RollDice";
import Die from "./Die";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="text">The Dice Game</h1>
        <h2 className="text">Give em a roll to test your luck!!!</h2>
        <Die face="five" />
        <RollDice />
      </div>
    );
  }
}

export default App;

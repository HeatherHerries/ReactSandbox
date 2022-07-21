import React, { Component } from "react";
import RollDice from "./RollDice";
import Die from "./Die";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>My App</h1>
        <RollDice />
        <Die />
      </div>
    );
  }
}

export default App;

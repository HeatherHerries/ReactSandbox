import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    return (
      <div>
        <i className={`die fas fa-dice-${this.props.face}`}></i>
        <i className={`die fas fa-dice-${this.props.face}`}></i>
      </div>
    );
  }
}

export default Die;

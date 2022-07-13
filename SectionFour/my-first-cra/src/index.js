import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import foods from "./foods";
import { choice, remove } from "./helpers";
import reportWebVitals from "./reportWebVitals";

let food = choice(foods);

console.log(`I'd like one ${food}, please.`);

console.log(`Here is a ${food} for you!`);

console.log("Delicious! May I have another?");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

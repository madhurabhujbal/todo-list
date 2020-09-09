import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h3>To-do List</h3>
        </header>
        <main>
          <li className="item-list">
            <input type="text" className="item" />
          </li>
        </main>
      </div>
    );
  }
}

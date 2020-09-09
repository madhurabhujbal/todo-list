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
          <li>
            <input type="text" />
          </li>
        </main>
      </div>
    );
  }
}

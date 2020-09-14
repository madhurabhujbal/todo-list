import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";

class App extends Component {
  state = {
    list: [{ id: 1, value: "" }],
  };

  addItem = (e) => {
    // const list = [...this.state.list];
    let itemName = e.target.value;
    console.log(itemName);
    this.setState((prevState) => {
      return { ...prevState, value: itemName };
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h3>To-do List</h3>
        </header>
        <main>
          <li className="item-list">
            <Display list={this.state.list} addItem={this.addItem} />
          </li>
        </main>
      </div>
    );
  }
}

export default App;

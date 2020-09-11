import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";

export default class App extends Component {
  state = {
    list: [
      { id: 1, value: "sugar" },
      { id: 2, value: "tea" },
      { id: 3, value: "milk" },
      { id: 4, value: "honey" },
    ],
  };

  // addItem = (e) => {
  //   let listItems = [...this.state.input];
  //   if (e.key === "Enter") {
  //     this.setState((prevState) => {
  //       listItems = "Enter next item";
  //       return { ...prevState, input: listItems };
  //     });
  //     console.log(this.state.input);
  //   }
  // };

  render() {
    return (
      <div className="App">
        <header>
          <h3>To-do List</h3>
        </header>
        <Display list={this.state.list} />
      </div>
    );
  }
}

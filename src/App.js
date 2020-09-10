import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Display />
      </div>
    );
  }
}

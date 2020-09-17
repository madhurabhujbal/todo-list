import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";

class App extends Component {
  state = {
    list: [{ id: 1, value: "" }],
  };

  addNewItem = () => {
    let item = { id: 2, value: "new item" };
    const list = [...this.state.list, item];
    this.setState({ list });
    console.log(list);
  };

  updateItem = () => {
    //change id'th item in the list with the newValue.
    let list = this.state.list;
    list[0].value = "updated item";
    this.setState({ list: this.state.list });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h3>To-do List</h3>
        </header>
        <main>
          <li className="item-list">
            <Display
              list={this.state.list}
              addNewItem={this.addNewItem}
              updateItem={this.updateItem}
            />
          </li>
          <input type="button" onClick={this.addNewItem} value="Add new Item" />
          <br />
          <input
            type="button"
            onClick={this.updateItem}
            value="Update existing Item"
          />
        </main>
      </div>
    );
  }
}

export default App;

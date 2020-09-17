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
  };

  updateItem = (id) => {
    //change id'th item in the list with the newValue.
    console.log("Key pressed on id:" + id);
    let list = this.state.list;
    let position = -1;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        position = i;
        break;
      }
    }
    list[position].value = "updated item";
    this.setState({ list: this.state.list });
    // console.log(list);
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

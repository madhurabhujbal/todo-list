import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";

class App extends Component {
  state = {
    list: [
      { id: 1, value: "" },
      { id: 2, value: "" },
      { id: 3, value: "" },
    ],
  };

  handleEvent = (e, id) => {
    console.log("pressed key: " + e.key + " on id : " + id);
    if (e.key === "Enter") {
      console.log("key pressed is enter");
      this.addNewItem(id);
    }
  };

  addNewItem = (id) => {
    console.log("item id: " + id);
    let list = [...this.state.list];
    let incId = 1;
    if (list.length !== 0) {
      incId = list[list.length - 1].id + 1;
    }
    console.log("increased id: " + incId);
    let item = { id: incId, value: "new item" };
    list = [...this.state.list, item];
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
    console.log("position: " + position);
    list[position].value = "updated item";
    this.setState({ list });
    console.log(list);
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
              handleEvent={this.handleEvent}
            />
          </li>
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

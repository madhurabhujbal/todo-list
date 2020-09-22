import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";

class App extends Component {
  state = {
    list: [{ id: 1, value: "" }],
  };

  handleEvent = (e, id) => {
    if (e.key === "Enter") {
      console.log("key pressed is enter");
      this.addNewItem(id);
    }
    this.updateItem(e, id);
  };

  addNewItem = (e, id) => {
    if (e.key !== "Enter") return;

    console.log("item id: " + id);
    let list = [...this.state.list];
    let incId = 1;
    if (list.length !== 0) {
      incId = list[list.length - 1].id + 1;
    }
    console.log("increased id: " + incId);
    let item = { id: incId, value: "" };
    list = [...this.state.list, item];
    this.setState({ list });
  };

  updateItem = (e, id) => {
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
    list[position].value = e.target.value;
    this.setState({ list });
    console.log(list);
    // if (e.key === "Enter") {
    //   this.addNewItem(id);
    // }
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
        </main>
      </div>
    );
  }
}

export default App;

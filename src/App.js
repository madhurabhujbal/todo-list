import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";

class App extends Component {
  state = {
    list: [
      { id: 1, value: "milk", isChecked: true },
      { id: 2, value: "salt", isChecked: false },
      { id: 3, value: "sugar", isChecked: true },
    ],
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
    let item = { id: incId, value: "", isChecked: false };
    list = [...this.state.list, item];
    this.setState({ list });
    console.log(list);
  };

  getPosition(id) {
    let list = this.state.list;
    let position = -1;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        position = i;
        break;
      }
    }
    return position;
  }

  updateItem = (e, id) => {
    console.log("Key pressed on id:" + id);
    if (e.key === "Enter") {
      console.log("key pressed is enter");
      this.addNewItem(e, id);
    }
    let list = this.state.list;
    let position = this.getPosition(id);
    list[position].value = e.target.value;
    this.setState({ list });
  };

  deleteItem = (id) => {
    console.log("Deleted item : " + id);
    // const list = this.state.list.filter((listItem) => listItem.id !== id);
    // this.setState({ list });
    // console.log("List after deleting item : ", list);
  };

  toggleIsChecked = (id) => {
    let list = this.state.list;
    let position = this.getPosition(id);
    list[position].isChecked = !list[position].isChecked;
    this.setState({ list });
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
              deleteItem={this.deleteItem}
              toggleIsChecked={this.toggleIsChecked}
            />
          </li>
          <br />
          <br />
          <hr className="horizontal-line" />
        </main>
        <h3>Ticked Items</h3>
      </div>
    );
  }
}

export default App;

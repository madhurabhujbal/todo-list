import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    list: [
      { id: 1, value: "milk", isChecked: false },
      { id: 2, value: "sugar", isChecked: false },
      { id: 3, value: "jam", isChecked: false },
    ],
    backgroundColor: "rgb(243, 243, 242)",
  };

  changeAppBackgroundColor = (color) => {
    console.log("in changeAppBackgroundColor function");
    console.log("selected color : " + color);
    this.setState({ backgroundColor: color });
    // document
    //   .getElementById("AppId")
    //   .classList.remove(["myClass1", "myClass2", "myClass3"]);

    // document.getElementById("AppId").classList.add(color);
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

  toggleIsChecked = (id) => {
    let list = this.state.list;
    let position = this.getPosition(id);
    list[position].isChecked = !list[position].isChecked;
    this.setState({ list });
  };

  removeItem = (id) => {
    let list = this.state.list;
    list = list.filter((listItem) => listItem.id !== id);
    this.setState({ list });
    console.log("final list: ", list);
  };

  render() {
    return (
      <div className="App" style={{ background: this.state.backgroundColor }}>
        <header>
          <h3>To-do List</h3>
        </header>
        <main>
          <li className="todo-list">
            <Display
              list={this.state.list}
              addNewItem={this.addNewItem}
              updateItem={this.updateItem}
              tickedItem={this.tickedItem}
              condition={(listItem) => !listItem.isChecked}
              toggleIsChecked={this.toggleIsChecked}
              removeItem={this.removeItem}
            />
          </li>
          <br />
          <br />
          <hr className="horizontal-line" />
        </main>
        <h3>Done List</h3>
        <li className="done-list">
          <Display
            list={this.state.list}
            addNewItem={this.addNewItem}
            updateItem={this.updateItem}
            condition={(listItem) => listItem.isChecked}
            toggleIsChecked={this.toggleIsChecked}
            removeItem={this.removeItem}
          />
        </li>
        <footer>
          <Footer changeAppBackgroundColor={this.changeAppBackgroundColor} />
        </footer>
      </div>
    );
  }
}

export default App;

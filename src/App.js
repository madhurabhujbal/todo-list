import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";

class App extends Component {
  state = {
    list: [{ id: 1, value: "" }],
  };

  addItem = (e) => {
    // let itemName = e.target.value;
    // console.log(id);
    // this.state.list[id].value = itemName;
    // const newList = [...this.state.list, { id, value: itemName }];
    //this.state.value = itemName;
    // this.setState((prevState) => {
    //   console.log(prevState);
    //   return { ...prevState, value: itemName };
    // });
  };

  addNewItem = () => {
    let item = { id: 11, value: "new item" };
    const list = [...this.state.list, item];
    this.setState({ list });
  };

  // updateItem(id, newValue) {
  //   //change id'th item in the list with the newValue.
  // }

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
          <input type="button" onClick={this.addNewItem} value="Add new Item" />
          <br />
          {/* <input
            type="button"
            onClick={this.updateItem(1, "new value for the item")}
            value="Update existing Item"
          /> */}
        </main>
      </div>
    );
  }
}

export default App;

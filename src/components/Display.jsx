import React from "react";
import { Component } from "react";
import ListItem from "./ListItem";

class Display extends Component {
  render() {
    const { list, addItem } = this.props;
    return (
      <div className="container">
        {list.map((listItem) => (
          <ListItem list={list} listItem={listItem} addItem={addItem} />
        ))}
      </div>
    );
  }
}

export default Display;

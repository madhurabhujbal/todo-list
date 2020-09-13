import React from "react";
import { Component } from "react";
import ListItem from "./ListItem";

class Display extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="container">
        {list.map((listItem) => (
          <ListItem />
        ))}
      </div>
    );
  }
}

export default Display;

import React from "react";
import { Component } from "react";

class Display extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="container">
        {list.map((listItem) => (
          <div className="row" key={list.id}>
            <div className="col-md-1">
              <input type="checkbox" className="checkbox" />
            </div>
            <div className="col-md-2">
              <input
                type="text"
                className="item"
                value={listItem.value}
                autoFocus
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Display;

import React from "react";
import { Component } from "react";

class Display extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        <main>
          <li className="item-list">
            <div className="container">
              {list.map((listItems) => (
                <div className="row" key={list.id}>
                  <div className="col-md-1">
                    <input type="checkbox" className="checkbox" />
                  </div>
                  <div className="col-md-2">
                    <input
                      type="text"
                      className="item"
                      value={listItems.value}
                      autoFocus
                    />
                  </div>
                </div>
              ))}
            </div>
          </li>
        </main>
      </div>
    );
  }
}

export default Display;

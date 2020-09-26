import React from "react";
import { Component } from "react";
import ListItem from "./ListItem";

class Display extends Component {
  render() {
    const { list, addNewItem, updateItem, deleteItem } = this.props;
    return (
      <div className="container">
        {list.map((listItem) => (
          <ListItem
            key={listItem.id}
            listItem={listItem}
            addNewItem={addNewItem}
            updateItem={updateItem}
            deleteItem={deleteItem}
            newCheckBox={this.newCheckBox}
          />
        ))}
      </div>
    );
  }

  newCheckBox() {
    let checked = true;
    let checkboxClass = "checkbox-new";
    checkboxClass += !checked ? checkboxClass : "-checked";
    return checkboxClass;
  }
}

export default Display;

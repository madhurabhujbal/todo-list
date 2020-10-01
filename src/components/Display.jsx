import React from "react";
import { Component } from "react";
import ListItem from "./ListItem";

class Display extends Component {
  render() {
    const {
      list,
      addNewItem,
      updateItem,
      condition,
      toggleIsChecked,
      removeItem,
    } = this.props;
    return (
      <div className="container">
        {list.filter(condition).map((listItem) => (
          <ListItem
            key={listItem.id}
            listItem={listItem}
            addNewItem={addNewItem}
            updateItem={updateItem}
            toggleIsChecked={toggleIsChecked}
            getCheckBoxClassName={this.getCheckBoxClassName}
            removeItem={removeItem}
          />
        ))}
      </div>
    );
  }

  getCheckBoxClassName(isChecked) {
    let checkboxClass = "checkbox-new";
    if (isChecked) checkboxClass += "-checked";
    return checkboxClass;
  }
}

export default Display;

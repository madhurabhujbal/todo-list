import React from "react";

function ListItem({ listItem, addNewItem, updateItem }) {
  return (
    <div className="row" key={listItem.id}>
      <div className="col-md-1">
        <input type="checkbox" className="checkbox" />
      </div>
      <div className="col-md-2">
        <input
          type="text"
          className="item"
          defaultValue={listItem.value}
          onKeyPress={() => updateItem(listItem.id)}
          autoFocus
        />
      </div>
    </div>
  );
}

export default ListItem;

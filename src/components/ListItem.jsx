import React from "react";

function ListItem({ list, listItem, addItem }) {
  return (
    <div className="row" key={list.id}>
      <div className="col-md-1">
        <input type="checkbox" className="checkbox" />
      </div>
      <div className="col-md-2">
        <input
          type="text"
          className="item"
          onChange={addItem(listItem.id)}
          value={listItem.value}
          autoFocus
        />
      </div>
    </div>
  );
}

export default ListItem;

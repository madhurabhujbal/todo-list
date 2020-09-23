import React from "react";

function ListItem({ listItem, addNewItem, updateItem, deleteItem }) {
  return (
    <div className="row" key={listItem.id}>
      <div className="col-md-1">
        <input type="checkbox" className="checkbox" onClick={deleteItem} />
      </div>
      <div className="col-md-2">
        <input
          type="text"
          className="item"
          value={listItem.value}
          onKeyPress={(e) => {
            addNewItem(e, listItem.id);
          }}
          onChange={(e) => {
            updateItem(e, listItem.id);
          }}
          autoFocus
        />
      </div>
    </div>
  );
}

export default ListItem;

import React from "react";

function ListItem({ list, listItem }) {
  return (
    <div className="row" key={list.id}>
      <div className="col-md-1">
        <input type="checkbox" className="checkbox" />
      </div>
      <div className="col-md-2">
        <input type="text" className="item" value={listItem.value} autoFocus />
      </div>
    </div>
  );
}

export default ListItem;

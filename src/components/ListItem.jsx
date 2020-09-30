import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ListItem({
  listItem,
  addNewItem,
  updateItem,
  toggleIsChecked,
  getCheckBoxClassName,
}) {
  return (
    <div className="row" key={listItem.id}>
      <div className="col-md-1 ">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={listItem.isChecked}
            onChange={() => toggleIsChecked(listItem.id)}
          />
          <span className="checkbox-new"></span>
        </label>
      </div>
      <div className="col-md-2">
        <input
          type="text"
          className={getCheckBoxClassName(listItem.isChecked)}
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

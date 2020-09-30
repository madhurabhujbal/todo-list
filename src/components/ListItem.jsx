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
      <div className="col-md-10">
        <input
          type="text"
          className={(getCheckBoxClassName(listItem.isChecked), "input-text")}
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
      <div className="col-md-1 trash-icon">
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
}

export default ListItem;

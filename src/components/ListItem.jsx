import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

function ListItem({
  listItem,
  addNewItem,
  updateItem,
  toggleIsChecked,
  removeItem,
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
          <span className="customized-checkbox"></span>
        </label>
      </div>
      <div className="col-md-10">
        <input
          type="text"
          className={
            strikeOutListItemIfChecked(listItem.isChecked) + " input-text"
          }
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
      <div className="col-md-1 trash-icon del-btn">
        <i className="far fa-trash-alt"></i>
        <button onClick={() => removeItem(listItem.id)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
}

function strikeOutListItemIfChecked(isChecked) {
  let checkboxClass = "customized-checkbox";
  if (isChecked) checkboxClass += "-checked";
  return checkboxClass;
}

export default ListItem;

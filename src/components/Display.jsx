import React from "react";

function Display() {
  return (
    <div>
      <header>
        <h3>To-do List</h3>
      </header>
      <main>
        <li className="item-list">
          <div className="container">
            <div className="row">
              <div className="col-md-1">
                <input type="checkbox" className="checkbox" />
              </div>
              <div className="col-md-2">
                <input type="text" className="item" autoFocus />
              </div>
            </div>
          </div>
        </li>
      </main>
    </div>
  );
}

export default Display;

import React from "react";

function ColorButtons({ changeAppBackgroundColor }) {
  return (
    <div className="color-buttons">
      <button
        className="red"
        onClick={() =>
          changeAppBackgroundColor("linear-gradient(#e66465, #9198e5)")
        }
      ></button>

      <button
        className="blue"
        onClick={() =>
          changeAppBackgroundColor("linear-gradient(#def6ff, #a5a8ce)")
        }
      ></button>

      <button
        className="green"
        onClick={() =>
          changeAppBackgroundColor("linear-gradient(#e0f1e7, #adf7ce)")
        }
      ></button>

      <button
        className="yellow"
        onClick={() =>
          changeAppBackgroundColor("linear-gradient(#f5f2de, #f7df78)")
        }
      ></button>
    </div>
  );
}

export default ColorButtons;

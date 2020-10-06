import React from "react";

function ColorButtons({ changeAppBackgroundColor }) {
  return (
    <div className="color-buttons">
      <button
        className="red"
        onClick={() => changeAppBackgroundColor("rgb(219, 145, 145)")}
      ></button>

      <button className="blue" onClick={() => changeAppBackgroundColor("blue")}>
        Blue
      </button>

      <button
        className="green"
        onClick={() => changeAppBackgroundColor("green")}
      >
        Green
      </button>

      <button
        className="yellow"
        onClick={() => changeAppBackgroundColor("yellow")}
      >
        Yellow
      </button>
    </div>
  );
}

export default ColorButtons;

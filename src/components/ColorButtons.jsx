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

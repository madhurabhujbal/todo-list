import React from "react";

function ColorButtons({ changeAppBackgroundColor }) {
  return (
    <div>
      <button className="red" onClick={() => changeAppBackgroundColor("red")}>
        Red
      </button>
      <button className="blue" onClick={() => changeAppBackgroundColor("blue")}>
        Blue
      </button>
    </div>
  );
}

export default ColorButtons;

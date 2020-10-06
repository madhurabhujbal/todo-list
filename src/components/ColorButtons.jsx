import React from "react";

function ColorButtons({ changeAppBackgroundColor }) {
  return (
    <div className="color-buttons">
      <button onClick={() => changeAppBackgroundColor("red")}>Red</button>

      <button onClick={() => changeAppBackgroundColor("blue")}>Blue</button>

      <button onClick={() => changeAppBackgroundColor("green")}>Green</button>

      <button onClick={() => changeAppBackgroundColor("yellow")}>Yellow</button>
    </div>
  );
}

export default ColorButtons;

import ColorButtons from "./ColorButtons";

import React from "react";

function Footer({ changeAppBackgroundColor }) {
  return (
    <div>
      <ColorButtons changeAppBackgroundColor={changeAppBackgroundColor} />
    </div>
  );
}

export default Footer;

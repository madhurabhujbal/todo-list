import ColorButtons from "./ColorButtons";
import React from "react";

function Footer({ changeAppBackgroundColor }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <h6>Select App color :</h6>
        </div>

        <div className="col-md-6">
          <ColorButtons changeAppBackgroundColor={changeAppBackgroundColor} />
        </div>
      </div>
    </div>
  );
}

export default Footer;

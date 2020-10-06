import ColorButtons from "./ColorButtons";
import React, { Component } from "react";

class Footer extends Component {
  render() {
    const { changeAppBackgroundColor } = this.props;
    return (
      <div>
        <ColorButtons changeAppBackgroundColor={changeAppBackgroundColor} />
      </div>
    );
  }
}

export default Footer;

import ColorButtons from "./ColorButtons";
// import React, { Component } from "react";

import React from "react";

function Footer({ changeAppBackgroundColor }) {
  return (
    <div>
      <ColorButtons changeAppBackgroundColor={changeAppBackgroundColor} />
    </div>
  );
}

export default Footer;

// class Footer extends Component {
//   render() {
//     const { changeAppBackgroundColor } = this.props;
//     return (
//       <div>
//         <ColorButtons changeAppBackgroundColor={changeAppBackgroundColor} />
//       </div>
//     );
//   }
// }

// export default Footer;

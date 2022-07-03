import React from "react";
import airbnbLogo from "../src/images/airbnb-logo.png";

function NavBar() {
  return (
    <nav>
      <img src={airbnbLogo} className="nav--logo" />
    </nav>
  );
}

export default NavBar;

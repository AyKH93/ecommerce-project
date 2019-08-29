import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../crown.svg.svg";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div class="options">
        <Link className="option" to="/shop">
          <span>SHOP</span>
        </Link>
        <Link to="/contact" className="option">
          <span>CONTACT</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;

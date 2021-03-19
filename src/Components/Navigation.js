import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo192.png";

function Navigation() {
  return (
    // Nav- Start
    <div className="Nav">
      <img src={Logo} alt="로고" className="nav-logo"></img>
      <div className="nav-item">
        <Link to="/">HOME</Link>
        <Link to="/my stage">MY STAGE</Link>
        <Link to="/signin">LOGIN</Link>
      </div>
    </div>
    //    Nav-End
  );
}

export default Navigation;

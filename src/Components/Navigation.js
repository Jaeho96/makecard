import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    // Nav- Start
    <div className="Nav">
      <img src="" alt="로고" className="nav-logo"></img>
      <div className="nav-item">
        <Link to="/">Home</Link>
        <Link to="/1">카테고리1</Link>
        <Link to="/2">카테고리2</Link>
      </div>
    </div>
    //    Nav-End
  );
}

export default Navigation;

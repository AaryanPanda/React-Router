import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div id="navbar">
      <Link to="/" id="logo">
        Kalvium ❤️ 
      </Link>
      <div id="buttons">
        <Link className="button" to="/contacts">Contacts</Link>
        <Link className="button" to="/about">About</Link>
      </div>
    </div>
  );
}

export default Navbar;
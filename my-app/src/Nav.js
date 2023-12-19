import React from "react";
import logo from "./icons_assets/Logo.svg";

function Nav() {
  return (
    <div className="nav">
      <img src={logo} alt="Logo" />
      <ul className="nav_ul">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/order">Order Online</a>
        </li>
        <li>
          <a href="/reservations">Reservations</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;

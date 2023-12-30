import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "./icons_assets/Logo.svg";

function Nav() {
  return (
    <div className="nav">
      <img src={logo} alt="Logo" />
      <ul className="nav_ul">
        <li>
          <Link to="/header">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/Main">Menu</Link>{" "}
          {/* Assuming "/menu" is the path to Main */}
        </li>
        <li>
          <Link to="/order">Order Online</Link>
        </li>
        <li>
          <Link to="/reservations">Reservations</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;

// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IoMdSunny } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";
import useDarkMode from "../../hooks/UseDarkMode";

export const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header>
      <div className="logo">
        <img src="../../src/assets/images/logo-7-light.png" alt="logo" />
      </div>
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <button className="wallet">Connect Wallet</button>
        </li>
        <li>
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {isDarkMode ? <IoMdSunny className="svg" /> : <FaRegMoon />}
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;

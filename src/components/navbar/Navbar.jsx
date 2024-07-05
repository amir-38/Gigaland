import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IoMdSunny } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";

export const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty("--background-color", "#040836");
      root.style.setProperty("--text-color", "white");
      root.style.setProperty("--button-background-color", "#333");
      root.style.setProperty("--button-hover-background-color", "#555");
    } else {
      root.style.setProperty("--background-color", "white");
      root.style.setProperty("--text-color", "black");
      root.style.setProperty("--button-background-color", "#007bff");
      root.style.setProperty("--button-hover-background-color", "#0056b3");
    }
  }, [isDarkMode]);

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
            {isDarkMode ? <IoMdSunny /> : <FaRegMoon />}
          </button>
        </li>
      </ul>
    </header>
  );
};

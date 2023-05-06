import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleToggleClick = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav className="navbar">
      <div className="nav-header">
        <Link to="/">
          <p className="logo">Sameer Jha</p>
        </Link>
        <div className="toggle">
          <button className="toggle-btn" onClick={handleToggleClick}>
            Click me
          </button>
        </div>
      </div>
      <div className={`nav-links ${showLinks ? "show" : ""}`}>
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

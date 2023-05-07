import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import { FaEnvelope } from "react-icons/fa";
import { HiRocketLaunch } from "react-icons/hi2";
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
            <Link to="/" data-text="Home">
              <BiHomeAlt2 className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/portfolio" data-text="Portfolio">
              <HiRocketLaunch className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/contact" data-text="Contact">
              <FaEnvelope className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/about" data-text="About">
              <RxAvatar className="icon" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

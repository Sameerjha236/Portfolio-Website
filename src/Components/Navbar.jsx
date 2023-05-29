import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import { FaEnvelope } from "react-icons/fa";
import { HiRocketLaunch } from "react-icons/hi2";
import { FaBars } from "react-icons/fa";
import { Code } from "react-feather";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav className={`navbar ${showLinks ? "show" : ""}`}>
      <div className="nav-header">
        <NavLink to="/">
          <p className="logo">Sameer Jha</p>
        </NavLink>
        <FaBars className="nav-toggle" onClick={toggleLinks} />
      </div>
      <div className={`links-container ${showLinks ? "show" : ""}`}>
        <ul className={`links ${showLinks ? "show" : ""}`}>
          <li>
            <NavLink to="/" data-text="Home">
              <BiHomeAlt2 className="icon" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" data-text="About">
              <RxAvatar className="icon" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" data-text="Skills">
              <Code className="icon" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" data-text="Portfolio">
              <HiRocketLaunch className="icon" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" data-text="Contact">
              <FaEnvelope className="icon" />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

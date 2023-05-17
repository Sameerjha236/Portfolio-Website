import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import { FaEnvelope } from "react-icons/fa";
import { HiRocketLaunch } from "react-icons/hi2";
import { FaBars } from "react-icons/fa";
const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav className="navbar">
      <div className="nav-header">
        <NavLink to="/">
          <p className="logo">Sameer Jha</p>
        </NavLink>
        <button className="nav-toggle" onClick={toggleLinks}>
          <FaBars />
        </button>
      </div>
      <div className="links-container" ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
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

export default Nav;

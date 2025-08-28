import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import "animate.css/animate.min.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navBar">
      <div className="navBar-container">
        <div className="navBar-left">
          <Link to="/">
            <img
              src="/logo-white.png"
              className="navBar-logo"
              alt="Hoyalytics"
            />
          </Link>
        </div>
        <div className={isOpen ? "navBar-right" : "navBar-right hidden"}>
          <div className="navBar-right-links">
            <Link to="/services" className="navBar-right-link">
              Our Work
            </Link>
            <Link to="/training" className="navBar-right-link">
              Our Training
            </Link>

            <Link to="/team" className="navBar-right-link">
              Our Team
            </Link>
            
            <Link to="/join" className="navBar-right-link">
              Join Us
            </Link>
          </div>
          <div className="navBar-right-social">
            <a
              href="https://www.instagram.com/hoyalytics/"
              target="_blank"
              className="icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/company/hoyalytics/"
              target="_blank"
              className="icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>{" "}
          </div>
        </div>
      </div>
      <h2 className="navbar-icon" onClick={toggleMenu}>
        {isOpen ? (
          <FontAwesomeIcon icon={faX} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </h2>
    </div>
  );
};

export default Navbar;

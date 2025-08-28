import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const NavbarAlt = () => {
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
              src="/logo-blue.png"
              className="navBar-logo"
              alt="Hoyalytics"
            />
          </Link>
        </div>
        <div className={isOpen ? "navBar-right" : "navBar-right hidden"}>
          <div className="navBar-right-links">
            <Link to="/services" className="navBar-right-link alt-color">
              Our Work
            </Link>
            <Link to="/training" className="navBar-right-link alt-color">
              Our Training
            </Link>

            <Link to="/team" className="navBar-right-link alt-color">
              Our Team
            </Link>

            <Link to="/join" className="navBar-right-link alt-color">
              Join Us
            </Link>
          </div>
          <div className="navBar-right-social alt-color">
            <a
              href="https://www.instagram.com/hoyalytics/"
              target="_blank"
              className="icon alt-color">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/company/hoyalytics/"
              target="_blank"
              className="icon alt-color">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="mailto:hoyalytics-ug@georetown.edu"
              target="_blank"
              className="icon alt-color">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
      <h2 className="navbar-icon alt-color" onClick={toggleMenu}>
        {isOpen ? (
          <FontAwesomeIcon icon={faX} className="toggled" />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </h2>
    </div>
  );
};

export default NavbarAlt;

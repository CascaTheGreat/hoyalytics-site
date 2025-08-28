import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top-content">
        <img src="/logo-white.png" className="footer-logo" alt="Hoyalytics" />

        <p>
          &copy; Hoyalytics 2025. Website designed and developed by
          <a href="https://reeduhlik.com">Reed Uhlik</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;

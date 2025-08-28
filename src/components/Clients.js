import React from "react";
import '../styles/components/clients.scss';
import { Link } from "react-router-dom";

const Clients = () => {
  const images = [
    "clients/city78.png",
    "clients/newchaia.png",
    "clients/dc.png",
    "clients/df.png",
    "clients/elevate.png",
    "clients/epicured.png",
    "clients/guml.png",
    "clients/issuevoter.png",
    "clients/maman.png",
    "clients/newsmatics.png",
    "clients/pathai.png",
    "clients/rounds.png",
    "clients/storage.png",
    "clients/taproom.png"
  ];
  

  const bottomImage = "/svgs/consulting/landing_bottom.svg";

  return (
    <div className="clients">
      <div className="clients-text">
        <h1>Clients</h1>
        <p>
          Check out some of the clients we've worked with in the past.
        </p>
      </div>
      <div className="client-grid">
        {images.map((image, index) => (
          <div className="client-image" key={index}>
            <img src={image} alt="Company" />
          </div>
        ))}
      </div>
      <Link to="/research" className="research-link">
        Explore our research projects →
      </Link>
      <img src={bottomImage} alt="" className="service-landing-image" />
    </div>
  );
};

export default Clients;

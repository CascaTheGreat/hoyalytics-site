import React from "react";
import NavbarAlt from "./shared/NavbarAlt";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const scrollContact = () => {
  console.log("test");
  var element = document.getElementById("consulting-contact");
  element.scrollIntoView({ behavior: "smooth" });
};
const ServicesLanding = () => {
  const landingTitle =
    "A seamless consulting experience tailored to your individual needs.";
  const landingSubtitle =
    "We are a team of problem-solvers providing data-driven solutions to businesses. Our pro-bono organization produces quality, purposeful deliverables over a semester-long partnership with our clients.";
  const bottomImage = "/svgs/consulting/landing_bottom.svg";
  const openPDF = () => {
    window.open("/Hoyalytics Client Packet.pdf", "_blank");
  };

  return (
    <div className="service-landing">
      <div className="service-landing-container">
        <NavbarAlt />

        <AnimationOnScroll animateIn="animate__fadeIn" delay={300}>
          <h1 className="service-landing-title">{landingTitle}</h1>
          <h4 className="service-landing-subtitle">{landingSubtitle}</h4>
          <a
            href="Hoyalytics Client Packet.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="service-landing-p4"
          >
            <h4>You can find our client partnership packet here</h4>
          </a>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn" delay={500}>
          <div className="service-landing-buttons">
            <button className="service-landing-button" onClick={scrollContact}>
              Contact Us
            </button>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default ServicesLanding;

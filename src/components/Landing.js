import React from "react";
import Navbar from "./shared/Navbar";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { TypeAnimation } from "react-type-animation";

const Landing = () => {
  //Modify these variables to change the homepage text
  const header = "Georgetown's Premier Data Analytics Consulting Organization.";
  const subHeader =
    "We use advanced technical skills to draw unique insights from data, enabling our clients to grow and succeed.";

  return (
    <div className="landing">
      <div className="landing-container">
        <Navbar />
        <AnimationOnScroll animateIn="animate__fadeIn" delay={300}>
          <TypeAnimation
            sequence={[header]}
            wrapper="h1"
            className="landing-typing-text"
            repeat={false}
          ></TypeAnimation>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn" delay={300}>
          <h3 className="landing-subtitle">{subHeader}</h3>
        </AnimationOnScroll>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfARUMKCcsAYwp4dbdBfViS_xsQSfcVGYAa6-0vmHWWu-paLg/viewform"
          target="_blank"
          className="landing-button"
        >
          Join Hoyalytics
        </a>
        <img src="/svgs/mainlanding.svg" alt="" className="landing-image" />
      </div>
    </div>
  );
};

export default Landing;

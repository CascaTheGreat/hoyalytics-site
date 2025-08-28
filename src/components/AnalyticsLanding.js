import React from "react";
import NavbarAlt from "./shared/NavbarAlt";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const AnalyticsLanding = () => {
  const landingTitle = "The forefront of data science exploration.";
  const landingSubtitle =
    "Our Analytics division is a space for members to explore their interest in tech and analytics outside of the business world. Our members use their own curiosity to fuel new research projects and to explore technical concepts in-depth. In addition to publishing articles on our blog, our Data Analysts provide assistance to consulting project teams, develop capstone projects, and present their findings at technical workshops.";
  return (
    <div className="analytics-landing">
      <div className="analytics-landing-container">
        <NavbarAlt />

        <AnimationOnScroll
          animateIn="animate__fadeIn"
          delay={300}
          className="analytics-landing-content">
          <div className="analytics-landing-left">
            <h1 className="analytics-landing-title">{landingTitle}</h1>
            <h4 className="analytics-landing-subtitle">{landingSubtitle}</h4>
          </div>
          <img
            className="analytics-landing-right"
            src="/svgs/analytics-landing.svg"
            alt="analytics landing"
          />
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default AnalyticsLanding;

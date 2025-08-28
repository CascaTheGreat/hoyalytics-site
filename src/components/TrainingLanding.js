import React from "react";
import NavbarAlt from "./shared/NavbarAlt";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const TrainingLanding = () => {
  const landingTitle = "Learning for good.";
  const landingSubtitle =
    "Our dedicated training team is committed to delivering high-quality educational content in the data analytics field.  Every member of our club engages in continuous learning, satisfying our collective desire to explore the field of data analytics in a collaborative, supportive environment.";
  const sideImage = "/svgs/training_landing.svg";
  return (
    <div className="training-landing">
      <div className="training-landing-container">
        <NavbarAlt />
        <div className="training-landing-content">
          <div className="training-landing-content-left">
            <AnimationOnScroll animateIn="animate__fadeIn" delay={300}>
              <h1 className="training-landing-title">{landingTitle}</h1>
              <h4 className="training-landing-subtitle">{landingSubtitle}</h4>
            </AnimationOnScroll>
          </div>
          <img src={sideImage} alt="" className="training-landing-image" />
        </div>
      </div>
    </div>
  );
};

export default TrainingLanding;

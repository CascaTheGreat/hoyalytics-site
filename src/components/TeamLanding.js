import React from "react";
import NavbarAlt from "./shared/NavbarAlt";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { TypeAnimation } from "react-type-animation";

const TeamLanding = () => {
  return (
    <div className="team-landing">
      <div className="team-container">
        <NavbarAlt />
        <div className="team-landing-content">
          <div className="team-landing-title-container">
            <h1 className="team-landing-title">A team of </h1>
            <TypeAnimation
              sequence={[
                "problem-solvers.",
                2000,
                "students.",
                2000,
                "learners.",
                2000,
              ]}
              wrapper="h1"
              repeat={Infinity}
            />
          </div>
          <img src="/svgs/team.svg" alt="" className="team-landing-svg" />
        </div>
      </div>
    </div>
  );
};

export default TeamLanding;

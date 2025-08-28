import React from "react";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Divisions = () => {
  const divisions = [
    {
      name: "Consulting",
      description:
        "Our data consultants work on project teams of 4-6 students with innovative companies, providing an expansive array of consulting services.",
      icon: "/svgs/divisions/consulting.svg",
      color: "#072F5F",
      link: "/services",
      filter:
        "invert(17%) sepia(24%) saturate(3255%) hue-rotate(187deg) brightness(91%) contrast(104%)",
    },
    {
      name: "Training",
      description:
        "Our Training team is responsible for the development of our Analyst Training Programs, as well as the creation of our Technical Training Modules.",
      icon: "/svgs/divisions/training.svg",
      color: "#1261A0",
      link: "/training",
      filter:
        "invert(15%) sepia(96%) saturate(3336%) hue-rotate(194deg) brightness(97%) contrast(86%)",
    },
    {
      name: "Data Science",
      description:
        "Our data scientists work on project teams alongside data consultants, or on technical research projects.",
      icon: "/svgs/divisions/analytics.svg",
      color: "#3895D3",
      link: "/services",
      filter:
        "invert(58%) sepia(18%) saturate(2881%) hue-rotate(177deg) brightness(87%) contrast(88%)",
    },
  ];
  return (
    <div className="divisions">
      <div className="divisions-container">
        <h1 className="divisions-header">What we do</h1>
        <h4 className="divisions-subheader">
          We offer engaging, inclusive opportunities tailored directly to the
          interests of our members and community.
        </h4>
        <div className="divisions-grid">
          {divisions.map((division, index) => {
            return (
              <AnimationOnScroll
                animateIn="animate__fadeInUp"
                animateOnce={true}
                delay={index * 150}
                className="division"
                style={{
                  borderBottom: `10px solid ${division.color}`,
                }}
                key={division.name}>
                <div className="division-icon">
                  <img
                    src={division.icon}
                    alt={division.name}
                    style={{
                      filter: division.filter,
                    }}
                  />
                </div>
                <h2
                  className="division-title"
                  style={{
                    color: division.color,
                  }}>
                  {division.name}
                </h2>
                <p className="division-description">{division.description}</p>
                <a href={division.link} className="division-link">
                  Learn More
                </a>
              </AnimationOnScroll>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Divisions;

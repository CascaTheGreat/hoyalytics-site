import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Showcase = () => {
  const showcases = [
    {
      keyword: "Top-notch",
      subwords: "Training Curriculum.",
      description:
        "Our semester-long training curriculum is designed to equip new analysts with all of the skills and knowledge necessary to succed on their future analytics projects.",
    },
    {
      keyword: "Professional",
      subwords: "Development Opportunities.",
      description:
        "Our rapidly growing alumni community and commitment to hosting and promoting industry-related events provide valuable opportunities for our students to network and grow.",
    },
    {
      keyword: "Welcoming",
      subwords: "Club Environment.",
      description:
        "Centered around community and inclusion, we strive for everyone to feel welcome and important. Our club culture values collaboration and diversity of thought.",
    },
    {
      keyword: "Dynamic",
      subwords: "Project Teams.",
      description:
        "We believe that our members are the most successful when given the opportunity to work collaboratively on projects that interest them. Our project teams allow members to choose what they want to do and work with other passionate members to achieve their goals.",
    },
  ];
  return (
    <div className="showcase">
      <div className="showcase-container">
        <h2 className="showcase-title">A place for you to excel.</h2>
        <h4 className="showcase-subtitle">
          See what Hoyalytics has to offer in your time on the Hilltop.
        </h4>
        <div className="showcase-content">
          {showcases.map((showcase, index) => (
            <AnimationOnScroll
              animateIn="animate__fadeInDownBig"
              delay={index * 100}>
              <div className="showcase-item" key={index}>
                <h3 className="showcase-item-keyword">{showcase.keyword}</h3>
                <h3 className="showcase-item-subwords">{showcase.subwords}</h3>
                <hr className="showcase-line"></hr>
                <p className="showcase-item-description">
                  {showcase.description}
                </p>
              </div>
            </AnimationOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showcase;

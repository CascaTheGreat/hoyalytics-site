import React from "react";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import { useState } from "react";
import courses from "./categories";

const TrainingModules = () => {
  const [selectedCategories, setSelectedCategories] = useState(["all"]);
  const [selectedDays, setSelectedDays] = useState(["all"]);
  const [selectedLevels, setSelectedLevels] = useState(["all"]);

  const categoryOptions = [
    { value: "all", label: "All Categories" },
    { value: "R", label: "R" },
    { value: "Python", label: "Python" },
    { value: "Tableau", label: "Tableau" },
    { value: "Excel", label: "Excel" },
    { value: "Lecture Series", label: "Lecture Series" },
  ];
  const dayOptions = [
    { value: "all", label: "All Days" },
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
    { value: "Saturday", label: "Saturday" },
    { value: "Sunday", label: "Sunday" },
  ];

  const levelOptions = [
    { value: "all", label: "All Levels" },
    { value: "Beginner", label: "Beginner" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Advanced", label: "Advanced" },
  ];
  const getSectionClassName = (module) => {
    console.log(module);
    let className = "training-modules-grid-item";
    if (!module.shown) {
      className += " hidden";
    }
    if (module.analystTraining) {
      console.log("analyst training");
      className += " analyst-training";
    }
    className += " training-module-done";

    return className;
  };
  return (
    <div className="training-modules">
      <div className="training-modules-container">
        <h1 className="training-modules-title">Hoyalytics Course Catalog</h1>
        <h4 className="training-modules-subtitle">
          Our technical training catalog will be released soon.
        </h4>

        <div className="training-modules-grid">
          {courses.map((section, index2) => (
            <div className="training-modules-grid-col">
              <div
                className="training-modules-grid-col-title"
                style={{ backgroundColor: section.color }}>
                <h2>{section.sectionTitle}</h2>
              </div>
              {section.modules.map((module, index) => {
                const shown =
                  (selectedCategories?.includes(module.category) ||
                    selectedCategories?.includes("all")) &&
                  (selectedDays?.includes(module.day) ||
                    selectedDays?.includes("all")) &&
                  (selectedLevels?.includes(module.level) ||
                    selectedLevels?.includes("all"));
                return (
                  <AnimationOnScroll
                    animateIn="animate__fadeInUp"
                    delay={100 * index * index2}
                    animateOnce={true}
                    key={index}
                    className={getSectionClassName(module)}>
                    <img src={module.img} alt="Icon" />
                    <div className="training-modules-grid-item-content">
                      <h6>{module.courseCode}</h6>
                      <h3>{module.title}</h3>
                      <p>{module.description}</p>

                      <div className="training-modules-grid-item-content-bottom">
                        <div className="training-modules-grid-item-content-bottom-item">
                          <p>Taught by</p>
                          <h5>{module.instructor}</h5>
                        </div>
                        <div className="training-modules-grid-item-content-bottom-item">
                          <p>When?</p>
                          <h5>{module.day}</h5>
                        </div>
                        <div className="training-modules-grid-item-content-bottom-item">
                          <p>Where?</p>
                          <h5>{module.location}</h5>
                        </div>
                      </div>
                      <a
                        href={module.link}
                        target="_blank"
                        className="training-modules-grid-item-content-button">
                        Enroll Now
                      </a>
                    </div>
                  </AnimationOnScroll>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingModules;

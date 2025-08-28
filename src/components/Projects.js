import React from "react";
import Navbar from "./shared/Navbar";
import { useState, useEffect, useRef } from "react";

const Projects = () => {
  const containerRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const amountToScroll =
        containerRef.current.getBoundingClientRect().height -
        window.innerHeight;

      const amountRefScrolled = window.scrollY - containerRef.current.offsetTop;

      const percentageScrolled = amountRefScrolled / amountToScroll;

      console.log(percentageScrolled);

      setScrollPos(percentageScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="projects" ref={containerRef}>
      <div className="projects-container">
        <div className="projects-content">
          <div
            className={
              scrollPos > 0.25
                ? "projects-text-1 projects-hidden"
                : "projects-text-1"
            }>
            <h1>Hoyalytics Projects</h1>
            <p>
              Our projects combine strong visualization and consulting skills
              with our advanced technical capabilities, giving our clients
              high-quality, pro-bono deliverables.
            </p>
          </div>
          {scrollPos < 1 && (
            <img
              src="/project-graphic.png"
              alt="projects"
              className={
                scrollPos > 0.25
                  ? "project-graphic shift-left"
                  : "project-graphic"
              }
            />
          )}

          <div
            className={
              scrollPos < 0.35 || scrollPos > 0.6
                ? "projects-text-2 projects-hidden"
                : "projects-text-2"
            }>
            <h4>Hoyalytics Projects</h4>
            <h2>Data Consulting</h2>
            <p>
              Our cohort of Data Consultants work on projects to provide
              qualitative business analysis, market research, and customer
              behavior analysis.
            </p>
            <p>
              Additionally, all of our Data Consultants are proficient in
              Tableau, creating beautiful, insightful visualizations for our
              clients as part of the final deliverable.
            </p>
          </div>
          <div
            className={
              scrollPos < 0.65 || scrollPos > 1
                ? "projects-text-3 projects-hidden"
                : "projects-text-3"
            }>
            <h4>Hoyalytics Projects</h4>
            <h2>Data Science</h2>
            <p>
              Our cohort of Data Scientists work on projects to clean data,
              source data from existing APIs and websites, and to use AI and
              machine learning to develop models from client data.
            </p>
            <p>
              All data scientists are well-versed in Python, providing clients
              with valuable statistical insights and projects with powerful
              tools.
            </p>
          </div>
          <img
            className={
              scrollPos < 0.65 || scrollPos > 1
                ? "projects-graphic-pointer projects-hidden"
                : "projects-graphic-pointer"
            }
            src="/profile-pointer2.png"
          />
          <img
            className={
              scrollPos < 0.3 || scrollPos > 0.7
                ? "projects-graphic-pointer projects-hidden"
                : "projects-graphic-pointer"
            }
            src="/profile-pointer.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

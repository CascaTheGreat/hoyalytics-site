import React from "react";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import fadownlaod icon
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const TrainingProgram = () => {
  return (
    <div className="training-program">
      <div className="training-program-container">
        <h1 className="training-program-title">
          Start your Hoyalytics Journey!
        </h1>
        <h4 className="training-program-subtitle">
          Become a General Member of Hoyalytics by enrolling in 1 of our
          training programs! Those who complete either training program will be
          invited to apply for a spot on one of our project teams as either a
          Data Consultant or Data Scientist.
        </h4>

        <div className="training-program-content">
          <div className="training-program-item training-program-lighter">
            <img src="/svgs/training/consulting-logo.svg" alt="" />
            <h2>Data Consulting Training Program</h2>
            <h6>
              Learn the essential skills needed to be highly successful in the
              consulting industry and excel as a Hoyalytics Data Consultant.
            </h6>
            <img src="/svgs/training/consulting-icons.svg" alt="" />
            <ul>
              <li>
                Gain proficiency in Microsoft Excel to clean data, join
                datasets, and analyze sheets using powerful functions
              </li>
              <li>
                Learn the basics of Tableau and how to create visualizations and
                dashboards with various types of graphs
              </li>
              <li>
                Develop advanced Powerpoint skills to create high-quality
                presentations
              </li>
              <li>
                Understand how to analyze data, read graphs, and pull in
                external trends to generate meaningful insights about a data
                set.
              </li>
            </ul>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfARUMKCcsAYwp4dbdBfViS_xsQSfcVGYAa6-0vmHWWu-paLg/viewform"
              target="_blank"
              className="training-consulting-register"
            >
              Register Now
            </a>
          </div>
          <div className="training-program-item">
            <img src="/svgs/training/science-logo.svg" alt="" />
            <h2>Data Science Training Program</h2>
            <h6>
              Learn the essential skills needed to be highly successful in the
              data analytics industry and excel as a Hoyalytics Data Scientist.
            </h6>
            <img src="/svgs/training/science-icons.svg" alt="" />
            <ul>
              <li>
                Gain fundamental proficiency in Python writing functions and
                utilizing libraries.
              </li>
              <li>
                Learn how to clean large datasets, merge tables, and modify
                values using Pandas
              </li>
              <li>
                Learn how to call APIs to retrieve data, as well as web scrape
                useful data using BeautifulSoup.
              </li>
              <li>
                Use Tensorflow and SKLearn to create basic machine learning
                models for classification and predictive purposes.
              </li>
            </ul>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfARUMKCcsAYwp4dbdBfViS_xsQSfcVGYAa6-0vmHWWu-paLg/viewform"
              target="_blank"
              className="training-consulting-register"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingProgram;

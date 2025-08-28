import React from "react";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CountUp from "react-countup";
const Impact = () => {
  const numbers = [
    {
      number: 113,
      text: "Total curriculum hours",
      plus: false,
    },
    {
      number: 71,
      text: "Applied Members",
      plus: false,
    },
    {
      number: 383,
      text: "General Members",
      plus: false,
    },
    {
      number: 27,
      text: "Articles published",
      plus: false,
    },
  ];
  return (
    <div className="impact">
      <img src="/image-section/numbers_img.jpeg" alt="Members presenting" />
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        delay={200}
        className="impact-right">
        <div className="impact-right-title">By the numbers...</div>
        <div className="impact-right-numbers">
          {numbers.map((number, index) => (
            <div className="impact-right-number" key={index}>
              {number.plus ? (
                <CountUp
                  end={number.number}
                  duration={2}
                  suffix="+"
                  className="impact-right-number-big"
                  enableScrollSpy
                />
              ) : (
                <CountUp
                  end={number.number}
                  duration={2}
                  className="impact-right-number-big"
                  enableScrollSpy
                />
              )}
              <h6 className="impact-right-number-text">{number.text}</h6>
            </div>
          ))}
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Impact;

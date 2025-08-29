import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faBullhorn,
  faFileAlt,
  faComments,
  faUsers,
  faLaptopCode,
  faMugHot,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/components/timeline.scss";

const Timeline = ({
  heading = "Explanation of how training fits into recruitment",
  description = "We offer two distinct pathways to join our team, with common interview stages for all candidates.",
  buttons = {
    primary: { text: "Contact Us", url: "#" },
    secondary: { text: "Learn More", url: "#" },
  },
  trackItems = [
    {
      icon: faFileAlt,
      title: "Applications Open",
      description:
        "Begin your journey — Training Track sign-ups and Applied Membership applications are now open.",
      track: "both",
      season: "August 28th, 2025",
    },

    {
      icon: faUsers,
      title: "CAB Fair",
      description:
        "Connect with us at CAB Fair to explore membership opportunities and upcoming events.",
      track: "both",
      season: "August 30th, 2025 11am-2pm",
    },

    {
      icon: faBullhorn,
      title: "Info Session #1",
      subtitle: "MSB 150",
      description:
        "Join us for an overview of Hoyalytics, including our training program, application process, and upcoming events.",
      track: "both",
      season: "September 2nd, 2025 7-8pm",
    },

    {
      icon: faMugHot,
      title: "Coffee Chats",
      description:
        "Engage in informal discussions with our team to learn more about Hoyalytics. Coffee Chats are informative only and will not impact applications.",
      track: "both",
      season: "September 3rd & 4th, 2025",
    },

    {
      icon: faBullhorn,
      title: "Info Session #2",
      subtitle: "MSB 140",
      description:
        "Join us for an overview of Hoyalytics, including our training program, application process, and upcoming events.",
      track: "both",
      season: "September 3rd, 2025 7-8pm",
    },

    {
      icon: faFileAlt,
      title: "Written Application Due",
      description:
        "Submit a written application indicating your interest in joining Hoyalytics.",
      track: "non-training",
      season: "September 5th, 2025 11:59pm",
    },

    {
      icon: faFileAlt,
      title: "Training Sign-ups Close",
      description: "Reserve your spot in analyst training for Fall 2025.",
      track: "training",
      season: "September 14th, 2025 11:59pm",
    },
    // {
    //   icon: faComments,
    //   title: "Behavioral Interview",
    //   description:
    //     "After the written application, candidates will be invited to a behavioral interview with our board and leadership team. Applicants that have successfully completed the training track in previous semesters are guaranteed to advance to the behavioral interview stage.",
    //   track: "non-training",
    //   season: "Fall 2025",
    // },

    // {
    //   icon: faLaptopCode,
    //   title: "Technical Case Interview",
    //   description:
    //     "Candidates will be invited to a technical and case interview with our executive board.",
    //   track: "non-training",
    //   season: "Fall 2025",
    // },

    // {
    //   icon: faChalkboardTeacher,
    //   title: "12 Week Training Program + Final Presentation",
    //   description: "Undertake a comprehensive training program designed with industry standard skills in mind.",
    //   track: "training",
    //   season: "Fall 2025",
    // },

    // {
    //   icon: faComments,
    //   title: "Behavioral Interview",
    //   description:
    //     "After the written application, candidates will be invited to a behavioral interview with our board and leadership team. Applicants that have successfully completed the training track in previous semesters are guaranteed to advance to the behavioral interview stage.",
    //   track: "training",
    //   season: "Spring 2026",
    // },

    // {
    //   icon: faLaptopCode,
    //   title: "Technical Case Interview",
    //   description:
    //     "Candidates will be invited to a technical and case interview with our executive board.",
    //   track: "training",
    //   season: "Spring 2026",
    // },
  ],
}) => {
  const renderSingleItem = (item, index) => {
    const sideClass = item.track === "both" ? "centered" : item.track;
    return (
      <div key={`single-${index}`} className={`timeline-item ${sideClass}`}>
        {/* Center node */}
        <div className="timeline-node">
          <FontAwesomeIcon icon={faCircle} />
        </div>

        {/* Content */}
        <div className="timeline-content">
          <div className="season">{item.season}</div>
          <div className="content-box">
            <div className="icon">
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <h4 className="title">{item.title}</h4>
            {item.subtitle && (
              <h5 className="subtitle">{item.subtitle}</h5>
            )}{" "}
            <p className="description">{item.description}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderParallelItem = (item, index) => {
    const { left, right } = item;
    return (
      <div key={`parallel-${index}`} className="timeline-item parallel">
        {/* Single shared center node */}
        <div className="timeline-node">
          <FontAwesomeIcon icon={faCircle} />
        </div>

        {/* Left side = training */}
        <div className="timeline-content training">
          <div className="season">{left.season}</div>
          <div className="content-box">
            <div className="icon">
              <FontAwesomeIcon icon={left.icon} />
            </div>
            <h4 className="title">{left.title}</h4>
            {left.subtitle && <h5 className="subtitle">{left.subtitle}</h5>}
            <p className="description">{left.description}</p>
          </div>
        </div>

        {/* Right side = non-training */}
        <div className="timeline-content non-training">
          <div className="season">{right.season}</div>
          <div className="content-box">
            <div className="icon">
              <FontAwesomeIcon icon={right.icon} />
            </div>
            <h4 className="title">{right.title}</h4>
            {right.subtitle && <h5 className="subtitle">{right.subtitle}</h5>}
            <p className="description">{right.description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="recruitment-timeline-section">
      <div className="timeline-container">
        <div className="timeline-header">
          <div className="track-labels">
            <h3 className="track-label training">Training Track</h3>
            <h3 className="track-label non-training">Non-Training Track</h3>
          </div>
        </div>

        <div className="timeline-container">
          {/* Central vertical line */}
          <div className="timeline-line"></div>

          {/* Render items (parallel or single) */}
          {trackItems.map((item, index) =>
            item.track === "parallel"
              ? renderParallelItem(item, index)
              : renderSingleItem(item, index)
          )}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

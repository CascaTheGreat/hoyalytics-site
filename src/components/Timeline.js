import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faBullhorn,
  faFileAlt,
  faComments,
  faLaptopCode,
  faCircle
} from "@fortawesome/free-solid-svg-icons";

import '../styles/components/timeline.scss';

const Timeline = ({
  heading = "Explanation of how training fits into recruitment",
  description = "We offer two distinct pathways to join our team, with common interview stages for all candidates.",
  buttons = {
    primary: {
      text: "Contact Us",
      url: "#",
    },
    secondary: {
      text: "Learn More",
      url: "#",
    },
  },
  trackItems = [
    {
      icon: faChalkboardTeacher,
      title: "12 Week Training Program + Final Presentation",
      description: "Undertake a comprehensive training program designed with industry standard skills in mind.",
      track: "training",
      season: "Spring 2025"
    },
    {
      icon: faFileAlt,
      title: "Written Application",
      description: "Submit a written application indicating your interest in joining Hoyalytics.",
      track: "non-training",
      season: "Fall 2025"
    },
    {
      icon: faComments,
      title: "Behavioral Interview",
      description: "After the written application, candidates will be invited to a behavioral interview with our board and leadership team. Applicants that have successfully completed the training track in previous semesters are guaranteed to advance to the behavioral interview stage.",
      track: "both",
      season: "Fall 2025"
    },
    {
      icon: faLaptopCode,
      title: "Technical Case Interview",
      description: "Candidates will be invited to a technical and case interview with our executive board.",
      track: "both",
      season: "Fall 2025"
    },
  ],
}) => {
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
          {/* Central timeline line */}
          <div className="timeline-line"></div>

          {/* Timeline items */}
          {trackItems.map((item, index) => (
            <div 
              key={index} 
              className={`timeline-item ${item.track === 'both' ? 'centered' : item.track}`}
            >
              {/* Timeline node */}
              <div className="timeline-node">
                <FontAwesomeIcon icon={faCircle} />
              </div>

              {/* Content box */}
              <div className="timeline-content">
                <div className="season">{item.season}</div>
                <div className="content-box">
                  <div className="icon">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <h4 className="title">{item.title}</h4>
                  <p className="description">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
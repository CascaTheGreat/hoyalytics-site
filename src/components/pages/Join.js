import React from "react";
import Timeline from "../Timeline";
import NavbarAlt from "../shared/NavbarAlt";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "../../styles/components/join.scss";

const Join = () => {
  // Timeline features data
  const joinFeatures = [
    {
      image: "/images/join/application.jpg",
      title: "Apply",
      description:
        "Submit your application through our online portal. We review applications on a rolling basis each semester.",
    },
    {
      image: "/images/join/interview.jpg",
      title: "Interview",
      description:
        "Selected candidates will be invited for an interview with our team to discuss your background and interests.",
    },
    {
      image: "/images/join/onboarding.jpg",
      title: "Onboarding",
      description:
        "Successful applicants will participate in our comprehensive training program to get up to speed.",
    },
    {
      image: "/images/join/project.jpg",
      title: "Project Work",
      description:
        "Join a project team and work directly with clients to deliver data-driven solutions.",
    },
  ];

  return (
    <div className="join-page">
      <NavbarAlt />
      <AnimationOnScroll animateIn="animate__fadeIn" delay={300}>
        <section className="join-hero">
          <div className="container">
            <h1>Join Our Team</h1>
            <p className="subtitle">
              Be part of a community of problem-solvers making a difference
            </p>
            {/*<a href="https://docs.google.com/forms/d/e/1FAIpQLScmenGBuThqeqyh6uAc9VKPMksYhM6WfrTJuOmvQ45cRQPZJw/viewform" className="cta-button">Apply Now</a>*/}
          </div>
        </section>
      </AnimationOnScroll>

      <section className="join-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-content">
              <h2>Why Join Hoyalytics?</h2>
              <p>
                At Hoyalytics, we bring together passionate individuals with
                diverse backgrounds to provide data-driven solutions for
                organizations. As a pro-bono consulting group, we offer students
                valuable hands-on experience while making a real impact.
              </p>
              <h3>What We're Looking For</h3>
              <ul className="qualities-list">
                <li>Problem-solvers with analytical mindsets</li>
                <li>Team players passionate about data and its applications</li>
                <li>
                  Students from all academic backgrounds with a willingness to
                  learn
                </li>
                <li>
                  Individuals committed to delivering quality work for our
                  clients
                </li>
              </ul>
            </div>
            <div className="info-image">
              <img
                src="/image-section/goof.jpeg"
                alt="Hoyalytics team working together"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="join-info-tracks-section">
        <div className="container">
          <h2>Training or Direct Application</h2>
          <div className="tracks-grid">
            <div className="track-box">
              <h3>Training Track</h3>
              <p>
                Recommended for those who want to build foundational skills
                before applying. The Training Track will teach you all the
                technical skills you need to succeed as an Applied Member.
              </p>
              <ul className="qualities-list">
                <li>No prior experience required</li>
                <li>Two training sessions per week</li>
                <li>Guaranteed first-round interview for Applied Membership</li>
              </ul>
            </div>
            <div className="track-box">
              <h3>Direct Application</h3>
              <p>
                For experienced candidates who are ready to apply without
                training.
              </p>
              <ul className="qualities-list">
                <li>
                  Strong prior experience in coding, analytics, or consulting
                </li>
                <li>Must be a second-semester freshman or above</li>
                <li>Apply directly to Applied Membership</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="join-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What is the time commitment?</h3>
              <p>
                Members typically dedicate 5-8 hours per week to Hoyalytics
                activities, including project work, meetings, and training
                sessions.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do I need prior experience in coding or analytics?</h3>
              <p>
                No! We welcome students from all backgrounds and provide
                comprehensive training for the skills you'll need.
              </p>
            </div>
            <div className="faq-item">
              <h3>When can I apply?</h3>
              <p>
                We recruit new members at the beginning of each semester. Check
                our social media for specific application deadlines.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do I need to go through the training program?</h3>
              <p>
                No going through the trainning program is not a requirement, but
                candidates who do go through the training program will have an
                accelerated application process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;

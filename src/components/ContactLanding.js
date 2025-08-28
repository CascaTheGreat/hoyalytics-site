import React from "react";
import Navbar from "./shared/Navbar";
import { useState } from "react";
import axios from "axios";
import moment from "moment";
import SuccessModalAlt from "./shared/SuccessModalAlt";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const ContactLanding = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const sendMail = () => {
    axios
      .post(
        "https://sheet.best/api/sheets/79ea313e-709e-4a13-b050-fc71ba327bdd",
        {
          timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
          name: name,
          email: email,
          message: message,
        }
      )
      .then(() => {
        setShowModal(true);
      });
  };
  const closeModal = () => {
    setShowModal(false);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-landing">
      <div className="container">
        <Navbar />
        <div className="contact-landing-content">
          <div className="contact-landing-left">
            <h1 className="contact-landing-left-title">Let's get in touch.</h1>
            <h3 className="contact-landing-left-text">
              Interested in becoming a client? Have a question for one of our
              Board Members? Fill out our contact form here and we will be in
              touch within 24 hours.
            </h3>
          </div>
          <AnimationOnScroll
            className="contact-landing-right"
            animateIn="animate__slideInUp"
            delay={300}>
            <div>
              <h2>Contact Us</h2>
              <form
                className="contact-form"
                onSubmit={(e) => e.preventDefault()}>
                <label className="contact-label">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="contact-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label className="contact-label">Your Email</label>
                <input
                  type="text"
                  placeholder="john.doe@gmail.com"
                  className="contact-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="contact-label">Your Message...</label>
                <textarea
                  type="textarea"
                  placeholder="Start typing here..."
                  className="contact-textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />

                <input
                  type="submit"
                  value="Join!"
                  className="contact-button"
                  onClick={sendMail}
                />
              </form>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
      {showModal && <SuccessModalAlt closeModal={closeModal} />}
    </div>
  );
};

export default ContactLanding;

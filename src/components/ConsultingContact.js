import React from "react";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axios from "axios";
import SuccessModal from "./shared/SuccessModal";

const ConsultingContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [showModal, setShowModal] = useState(0);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowModal(1);
  
    fetch("https://script.google.com/macros/s/AKfycbwsI87mTSrUkTS3rI51AycUejqYgtZFSl7NNlpg4FK5N5JMODXTKcFQgIGScLICvDm5SA/exec", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        name,
        email,
        company,
        description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEmail("");
        setName("");
        setCompany("");
        setDescription("");
        setShowModal(2);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  return (
    <div className="consulting-contact" id="consulting-contact">
      <div className="consulting-contact-container">
        <div className="consulting-contact-left">
          <h1 className="consulting-contact-left-title">Let's get in touch.</h1>
          <p className="consulting-contact-text">
            We are actively looking to help new and inspiring companies grow
            their businesses. If you’re interested in learning more about what
            we can do for you, please fill out the contact form here. A
            Hoyalytics board member will reach out to you within 48 hours to set
            up a personalized 1-on-1 call.
          </p>
        </div>
        <div className="consulting-contact-right">
          <h4 className="consulting-contact-right-form-title">Your Name</h4>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h4 className="consulting-contact-right-form-title">Your Company</h4>
          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <h4 className="consulting-contact-right-form-title">Your Email</h4>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h4 className="consulting-contact-right-form-title">Description</h4>
          <input
            type="text"
            placeholder="Tell us more about how we can help you..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      {showModal != 0 && (
        <SuccessModal
          status={showModal}
          closeModal={() => setShowModal(0)}
          message="Thank you for reaching out! We will be in touch with you shortly."
        />
      )}
    </div>
  );
};

export default ConsultingContact;

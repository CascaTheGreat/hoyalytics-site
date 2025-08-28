import React from "react";
import { useState, useEffect } from "react";
import SuccessModal from "../shared/SuccessModal";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const CabFair = () => {
  const [netID, setNetID] = useState("");
  const [showModal, setShowModal] = useState(0);

  const appendNetID = () => {
    setShowModal(1);
    console.log(netID);
    fetch("/addNetID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ netID }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShowModal(2);
      })
      .catch((error) => {
        console.error("Error:", error);
        setShowModal(3);
      });
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      console.log("User pressed: ", event.key);

      if (event.key === "Enter") {
        event.preventDefault();
        if (netID.length > 0 && showModal === 0) {
          appendNetID();
        }
        if (showModal === 2) {
          closeModal();
        }
      }
    };
    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });

  const closeModal = () => {
    setShowModal(0);
    setNetID("");
  };

  return (
    <div className="cab-fair">
      <AnimationOnScroll animateIn="animate__fadeIn" delay={300}>
        <h1 className="cab-title">Hoyalytics</h1>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn" delay={300}>
        <h3 className="cab-subtitle">
          Interested in joining Hoyalytics? Type your NetID below and click
          enter!
        </h3>
      </AnimationOnScroll>
      <div className="cab-input">
        <input
          type="text"
          value={netID}
          placeholder="Your NetID"
          onChange={(e) => setNetID(e.target.value)}
        />
      </div>
      {showModal !== 0 && (
        <SuccessModal
          closeModal={closeModal}
          netID={netID}
          status={showModal}
        />
      )}
    </div>
  );
};

export default CabFair;

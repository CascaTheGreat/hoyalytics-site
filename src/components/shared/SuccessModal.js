import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
//impport spinner
import { ClimbingBoxLoader } from "react-spinners";

const SuccessModal = (props) => {
  return (
    <div className="modal-background">
      {props.status === 1 && (
        <AnimationOnScroll
        animateIn="animate__fadeIn"
        className="modal-content"
        delay={0}
      >
        <div className="modal-content-left">
          <h3 className="modal-content-left-title">Success!</h3>
          <p className="modal-content-left-text">
            Your submission has been received! We will be in touch with you
            shortly!
          </p>
          <button
            className="modal-content-left-button"
            onClick={props.closeModal}
          >
            Dismiss
          </button>
        </div>
        <div className="modal-content-right">
          <img src="/svgs/success.svg" alt="" className="modal-svg" />
        </div>
      </AnimationOnScroll>
      )}
      {props.status === 2 && (
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          className="modal-content"
          delay={0}
        >
          <div className="modal-content-left">
            <h3 className="modal-content-left-title">Success!</h3>
            <p className="modal-content-left-text">
              We've got your NetID! Be on the lookout for emails from us soon
              with more information about our Analyst Training Program!
            </p>
            <button
              className="modal-content-left-button"
              onClick={props.closeModal}
            >
              Dismiss
            </button>
          </div>
          <div className="modal-content-right">
            <img src="/svgs/success.svg" alt="" className="modal-svg" />
          </div>
        </AnimationOnScroll>
      )}
    </div>
  );
};

export default SuccessModal;

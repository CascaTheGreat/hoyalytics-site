import React from "react";

const SuccessModalAlt = (props) => {
  return (
    <div className="modal-background">
      <div className="modal-content">
        <div className="modal-content-left">
          <h3 className="modal-content-left-title">Success!</h3>
          <p className="modal-content-left-text">
            We have received your message. We will be in contact with you
            shortly.
          </p>
          <button
            className="modal-content-left-button"
            onClick={props.closeModal}>
            Dismiss
          </button>
        </div>
        <div className="modal-content-right">
          <img src="/svgs/success.svg" alt="" className="modal-svg" />
        </div>
      </div>
    </div>
  );
};

export default SuccessModalAlt;

import React from "react";

const MainInfo = (props) => {
  return (
    <div className="main-info">
      <div className="main-info-container">
        <div className="main-info-left">
          <h5 className="main-info-left-subtitle">{props.section}</h5>
          <hr></hr>
          <h1 className="main-info-left-title">{props.title}</h1>
          <p className="main-info-left-text">{props.text}</p>
        </div>
      </div>
      <div className="main-info-right">
        <img src={props.image} alt="" className="main-info-image" />
      </div>
    </div>
  );
};

export default MainInfo;

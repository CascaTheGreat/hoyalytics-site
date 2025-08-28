import React from "react";
import { useEffect } from "react";
const Alumni = () => {
  const images = [
    "/alumni/amazon.png",
    "/alumni/apple.png",
    "/alumni/ares.png",
    "/alumni/bain.png",
    "/alumni/bcg-logo.webp",
    "/alumni/capital-one.png",
    "/alumni/citadel.png",
    "/alumni/Deloitte.png",
    "/alumni/desco.png",
    "/alumni/ey.png",
    "/alumni/fti.png",
    "/alumni/google.png",
    "/alumni/gs.png",
    "/alumni/ms.png",
    "/alumni/ibm.png",
    "/alumni/jpmorgan.png",
    "/alumni/mckinsey.png",
    "/alumni/microsoft.webp",
    "/alumni/nih.png",
    "/alumni/palantir.png",
    //"/alumni/manyMore.png",
  ];
  return (
    <div className="alumni">
      <h1>Where We Have Worked</h1>
      <h4>
        Our commitment to excellence helps us to build a strong, well-connected
        alumni network, giving current members valuable mentorship across a
        variety of fields.
      </h4>
      <div className="alumni-grid">
        {images.map((image, index) => (
          <div className="alumni-image" key={index}>
            <img src={image} alt="Company" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alumni;

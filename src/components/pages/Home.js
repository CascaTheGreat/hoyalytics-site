import React from "react";
import Landing from "../Landing";
import Showcase from "../Showcase";
import MainInfo from "../shared/MainInfo";
import Alumni from "../Alumni";
import Footer from "../shared/Footer";
import Divisions from "../Divisions";
import Impact from "../Impact";

const Home = () => {
  const mainInfoTitle =
    "We’re a team of undergraduate students passionate about learning data analytics.";
  const mainInfoText =
    "We collectively aim to find meaning, tell stories, and explore the growing importance of data analysis across all disciplines. Through hands-on learning and working on project teams, our members gain valuable pre-professional experience at the intersections of data science and consulting, research, and education.";
  const mainInfoImage = "/image-section/club-photo-2024.jpg";

  return (
    <div>
      <Landing />
      <MainInfo
        section="What is Hoyalytics?"
        title={mainInfoTitle}
        text={mainInfoText}
        image={mainInfoImage}
      />
      <Divisions />
      <Impact />
      <Showcase />
      <Alumni />
      <Footer />
    </div>
  );
};

export default Home;

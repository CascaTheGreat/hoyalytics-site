import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useState } from "react";

const TeamDivisions = () => {
  const consulting = [
    { firstName: "Isha", lastName: "Bahadur", title: "Data Consultant" },
    { firstName: "Camden", lastName: "Baucom", title: "Data Consultant" },
    { firstName: "Sophina", lastName: "Boychenko", title: "Data Consultant" },
    { firstName: "Ethan", lastName: "Choe", title: "Data Consultant" },
    { firstName: "Sean", lastName: "Clavadetscher", title: "Data Consultant" },
    { firstName: "Kyla", lastName: "Corrin", title: "Data Consultant" },
    { firstName: "Lily", lastName: "Coulter", title: "Data Consultant" },
    { firstName: "Alexandra", lastName: "Dassopoulos", title: "Data Consultant" },
    { firstName: "Arezu", lastName: "Fayyazi", title: "Data Consultant" },
    { firstName: "Kristen", lastName: "Han", title: "Data Consultant" },
    { firstName: "Shikha", lastName: "Kini", title: "Data Consultant" },
    { firstName: "Janice", lastName: "Ku", title: "Data Consultant" },
    { firstName: "Chloe", lastName: "Lee", title: "Data Consultant" },
    { firstName: "Michael", lastName: "Ma", title: "Data Consultant" },
    { firstName: "Thomas", lastName: "Moran", title: "Data Consultant" },
    { firstName: "Michael", lastName: "Mostofi", title: "Data Consultant" },
    { firstName: "Parker", lastName: "Parris", title: "Data Consultant" },
    { firstName: "Julia", lastName: "Revill", title: "Data Consultant" },
    { firstName: "Colin", lastName: "Schlitt", title: "Data Consultant" },
  ];
  
  const analytics = [
    { firstName: "Matteo", lastName: "Balentine", title: "Data Scientist" },
    { firstName: "Samuel", lastName: "Berryessa", title: "Data Scientist" },
    { firstName: "Sajan", lastName: "Blum", title: "Data Scientist" },
    { firstName: "Chris", lastName: "Bond", title: "Data Scientist" },
    { firstName: "Jessica", lastName: "Cao", title: "Data Scientist" },
    { firstName: "Devon", lastName: "Connerly", title: "Data Scientist" },
    { firstName: "William", lastName: "Cunnion", title: "Data Scientist" },
    { firstName: "Emmet", lastName: "Feeney", title: "Data Scientist" },
    { firstName: "Helen", lastName: "Freedman", title: "Data Scientist" },
    { firstName: "Meredith", lastName: "Joo", title: "Data Scientist" },
    { firstName: "Gui", lastName: "Lima", title: "Data Scientist" },
    { firstName: "Allie", lastName: "Liu", title: "Data Scientist" },
    { firstName: "Krish", lastName: "Malik", title: "Data Scientist" },
    { firstName: "Chris", lastName: "Murphy", title: "Data Scientist" },
    { firstName: "Adrian", lastName: "Ng", title: "Data Scientist" },
    { firstName: "James", lastName: "Oh", title: "Data Scientist" },
    { firstName: "Veer", lastName: "Pahwa", title: "Data Scientist" },
    { firstName: "Caleb", lastName: "Park", title: "Data Scientist" },
    { firstName: "Will", lastName: "Riley", title: "Data Scientist" },
    { firstName: "Cole", lastName: "Rutherford", title: "Data Scientist" },
    { firstName: "Laura", lastName: "Taylor", title: "Data Scientist" },
    { firstName: "Kushaan", lastName: "Vardhan", title: "Data Scientist" }
  ];

  const [division, setDivision] = useState(0);
  return (
    <div className="team-divisions">
      <div className="container">
        <h1 className="team-divisions-title">Our Analysts</h1>
        <div className="team-divisions-buttons">
          <div
            className={
              division === 0
                ? "team-divisions-button-active"
                : "team-divisions-button"
            }
            onClick={() => setDivision(0)}>
            <img src="/svgs/divisions/consulting.svg" alt="consulting" />
            <h5>Consulting</h5>
          </div>
          <div
            className={
              division === 1
                ? "team-divisions-button-active"
                : "team-divisions-button"
            }
            onClick={() => setDivision(1)}>
            <img src="/svgs/divisions/analytics.svg" alt="consulting" />
            <h5>Data Science</h5>
          </div>
        </div>
        <div className="team-divisions-members">
          {division === 0 &&
            consulting.map((member, index) => {
              return (
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOnce={true}
                  delay={index * 40}
                  key={member.name}
                  className="team-division-member">
                  <img
                    src={
                      "/headshots-2024/" +
                      member.lastName +
                      ", " +
                      member.firstName +
                      ".jpg"
                    }
                    alt={member.name}
                  />
                  <h2>{member.firstName + " " + member.lastName}</h2>
                  <h3>{member.title}</h3>
                </AnimationOnScroll>
              );
            })}
          {division === 1 &&
            analytics.map((member, index) => {
              return (
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOnce={true}
                  delay={index * 40}
                  key={member.name}
                  className="team-division-member">
                  <img
                    src={
                      "/headshots-2024/" +
                      member.lastName +
                      ", " +
                      member.firstName +
                      ".jpg"
                    }
                    alt={member.name}
                  />
                  <h2>{member.firstName + " " + member.lastName}</h2>
                  <h3>{member.title}</h3>
                </AnimationOnScroll>
              );
            })}

        </div>
      </div>
    </div>
  );
};

export default TeamDivisions;

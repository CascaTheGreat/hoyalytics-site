import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const TeamBoardMembers = () => {
  const execBoard = [
    {
      firstName: "Maggie",
      lastName: "Shen",
      title: "Chief Executive Officer",
      description: "Maggie is a junior in the College double majoring in Mathematics and Computer Science and minoring in Economics. She has previosuly interned at PWC. Outside of Hoyalytics, she enjoys doing photography, playing poker, and exploring new restaurants.",
      email: "xs196@georgetown.edu", 
      linkedin: "https://www.linkedin.com/in/maggie-shen/",
    },
    {
      firstName: "Sonya",
      lastName: "Savelyev",
      title: "Chief Operating Officer",
      description:
        "Sonya is a sophomore in the College studying Biochemistry and Statistics. Outside of Hoyalytics, she is a computational researcher for a biophysics research lab at Georgetown. In her free time, she loves playing tennis, learning piano pieces, and exploring new recipes.",
        email: "sas559@georgetown.edu",
        linkedin: "https://www.linkedin.com/in/sonya-savelyev-189568265/"
    },
    {
      firstName: "Christopher",
      lastName: "Tengey",
      title: "Chief Analytics Officer",
      description:
        "Chris is a junior in the College studying Computer Science and Mathematics. Last summer he interned at JP Morgan Chase, and in his free time enjoys playing soccer and watching movies.",
      email: "cdt50@georgetown.edu",
      linkedin: "https://www.linkedin.com/in/christopher-tengey-12555b24a/",
    },
    {
      firstName: "Rohan",
      lastName: "Mistry",
      title: "Chief Consulting Officer",
      description:
        "Rohan is a junior in the MSB studying Finance and OPAN. He is a student researcher at the Psaros Center for Financial Markets and Policy. In his free time he enjoys exploring cafes, mueseums and running.",
      email: "rrm80@georgetown.edu",
      linkedin: "https://www.linkedin.com/in/rohan-m-a026b3237/",
    },
    {
      firstName: "Amanda",
      lastName: "Hao",
      title: "Chief Training Officer",
      description:
        "Amanda is a senior in the SFS studying Science Technology and International Affairs, and is pursuing a Masters in Data Science. She is a student researcher at the Massive Data Insitute and recently interned at the NBA. In her free time, she enjoys playing volleyball and reading.",
      email: "alh326@georgetown.edu",
      linkedin: "https://www.linkedin.com/in/amandahao/",
    },
    {
      firstName: "Leo",
      lastName: "Ledlow",
      title: "Chief HR Officer",
      description:
        "Leo is a sophomore in the SFS studying Science, Tech, and International Affairs. Outside of Hoyalytics, they are a PM with Hoya Developers and like visiting the monuments, graphic design, and cooking.",
      email: "jdl162@georgetown.edu",
      linkedin: "https://www.linkedin.com/in/jledlow/",
    }
  ];

  const directors = [
    {
      firstName: "Isabelle",
      lastName: "Frangakis",
      title: "Director of Public Relations",
      email: "#",
      linkedin: "#",
    },
    {
      firstName: "Catherine",
      lastName: "Cho",
      title: "Director of Public Relations",
      email: "#",
      linkedin: "#",
    },
    {
      firstName: "Navya",
      lastName: "Dalmia",
      title: "Director of Professional Development",
      email: "#",
      linkedin: "#",
    },
    {
      firstName: "William",
      lastName: "Kertajaya",
      title: "Director of Client Recruitment",
      email: "#",
      linkedin: "#",
    },
    {
      firstName: "Elizabeth",
      lastName: "Astorina",
      title: "Director of Client Recruitment",
      email: "#",
      linkedin: "#",
    },
    {
      firstName: "Jackson",
      lastName: "Chase",
      title: "Director of Client Recruitment",
      email: "#",
      linkedin: "#",
    },
    {
      firstName: "Michelle",
      lastName: "Hu",
      title: "Director of Client Recruitment",
      email: "#",
      linkedin: "#",
    },
    {
      firstName: "Samantha",
      lastName: "Choung",
      title: "Director of Community",
      email: "#",
      linkedin: "#",
    },
    {
      firstName: "Gui",
      lastName: "Lima",
      title: "Director of Community",
      email: "#",
      linkedin: "#",
    },
    {
      firstName: "William",
      lastName: "Yu",
      title: "Director of Training",
      email: "#",
      linkedin: "#",
    },
    {
      firstName: "Kaity",
      lastName: "Weng",
      title: "Director of Training",
      email: "#",
      linkedin: "#",
    },
    {
      firstName: "Adrian",
      lastName: "Frauca",
      title: "Director of Training",
      email: "#",
      linkedin: "#",
    },
    {
      firstName: "Adam",
      lastName: "Li",
      title: "Director of Training",
      email: "#",
      linkedin: "#",
    }
  ];

  const projectManagers = [
    { firstName: "Samantha", lastName: "Stein", title: "Project Manager" },
    { firstName: "William", lastName: "McLane", title: "Project Manager" },
    { firstName: "Laura", lastName: "Fan", title: "Project Manager" },
    { firstName: "Ty", lastName: "Swanson", title: "Project Manager" },
    { firstName: "Andrew", lastName: "Kim", title: "Project Manager" },
    { firstName: "Sarah", lastName: "Liang", title: "Project Manager" },
    { firstName: "Victor", lastName: "Chen", title: "Project Manager" },
    { firstName: "Jaden", lastName: "Bobb", title: "Project Manager" },
  ];
  
  
  return (
    <div className="team-board-members">
      <h1 className="team-board-members-title">Hoyalytics Executive Board</h1>
      <div className="team-board-members-content">
        <div className="team-board-members-exec">
          {execBoard.map((member) => {
            return (
              <AnimationOnScroll
                animateIn="animate__fadeInUp"
                className="team-member-exec"
                animateOnce={true}
                key={member.firstName}>
                <img
                  src={
                    "/headshots-2024/" +
                    member.lastName +
                    ", " +
                    member.firstName +
                    ".jpg"
                  }
                  alt={member.firstName}
                />
                <div className="team-member-exec-info">
                  <div className="team-member-exec-info-left">
                    <h2>{member.firstName + " " + member.lastName}</h2>
                    <h3>{member.title}</h3>
                  </div>
                  <div className="team-member-exec-info-right">
                    <a href={member.linkedin} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                </div>
                <p>{member.description}</p>
              </AnimationOnScroll>
            );
          })}
        </div>
        <h1 className="team-board-members-title">Board of Directors</h1>
        <div className="team-board-members-directors">
          {directors.map((member, index) => {
            return (
              <AnimationOnScroll
                animateIn="animate__fadeInUp"
                className="team-member-director"
                animateOnce={true}
                key={member.firstName}>
                <img
                  src={
                    "/headshots-2024/" +
                    member.lastName +
                    ", " +
                    member.firstName +
                    ".jpg"
                  }
                  alt={member.firstName}
                />
                <div className="team-member-exec-info">
                  <div className="team-member-exec-info-left">
                    <h2>{member.firstName + " " + member.lastName}</h2>
                    <h3>{member.title}</h3>
                  </div>
                </div>
                <p>{member.description}</p>
              </AnimationOnScroll>
            );
          })}
        </div>
        
        <h1 className="team-board-members-title">Project Managers</h1>
        <div className="team-board-members-directors">
          {projectManagers.map((member, index) => {
            return (
              <AnimationOnScroll
                animateIn="animate__fadeInUp"
                className="team-member-director"
                animateOnce={true}
                key={member.firstName}>
                <img
                  src={
                    "/headshots-2024/" +
                    member.lastName +
                    ", " +
                    member.firstName +
                    ".jpg"
                  }
                  alt={member.firstName}
                />
                <div className="team-member-exec-info">
                  <div className="team-member-exec-info-left">
                    <h2>{member.firstName + " " + member.lastName}</h2>
                    <h3>{member.title}</h3>
                  </div>
                </div>
                <p>{member.description}</p>
              </AnimationOnScroll>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamBoardMembers;

import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const TeamBoardMembers = () => {
  const execBoard = [
    {
      firstName: "Sonya",
      lastName: "Savelyev",
      title: "Chief Executive Officer",
      description:
        "Sonya is a junior in the College studying Biochemistry and Statistics. At Georgetown, she is also a computational biophysics researcher. Outside of academics, she enjoys playing tennis, learning piano pieces, and exploring new recipes. ",
      email: "sas559@georgetown.edu",
      linkedin: "https://www.linkedin.com/in/sonyasavelyev/",
    },
    {
      firstName: "Elizabeth",
      lastName: "Astorina",
      title: "Chief Operating Officer",
      description:
        "Elizabeth is a junior in the College studying Mathematics and Computer Science. She gained experience last summer interning with RainFocus and D.C. United, and her interests include sports, insurance, and business marketing analytics. Outside the classroom, Elizabeth enjoys rock climbing, baking, working out, and watching dystopian films.",
      email: "eqa5@georgetown.edu",
      linkedin: "https://www.linkedin.com/in/lizzie-astorina-75a278307/",
    },
    {
      firstName: "Ty",
      lastName: "Swanson",
      title: "Chief Analytics Officer",
      description:
        "Ty is a junior in the College studying Physics and Mathematics. Ty is the Co-Founder of College Canine, a university based pet care company. In his free time, he enjoys mountain biking, watching soccer, and gardening.",
      email: "tps71@georgetown.edu",
      linkedin: "https://www.linkedin.com/in/ty-swanson/",
    },
    {
      firstName: "Navya",
      lastName: "Dalmia",
      title: "Chief Consulting Officer",
      description:
        "Navya Dalmia is a junior in the college double majoring in math and economics with a minor in business studies. She is interested in data backed analyses and digital transformation specifically within fashion and luxury. Outside of work, she enjoys trying new restaurants in dc and doing yoga and pilates classes. ",
      email: "nd631@georgetown.edu",
      linkedin: "https://www.linkedin.com/in/navyadalmia/",
    },
    {
      firstName: "William",
      lastName: "Yu",
      title: "Chief Training Officer",
      description:
        "William is a junior in the SFS studying International Economics. Outside of Hoyalytics, he is an intern at the U.S. Department of the Treasury and previously interned in the U.S. House of Representatives. In his free time, William enjoys playing soccer, working out, and playing poker.",
      email: "wjy7@georgetown.edu",
      linkedin: "https://www.linkedin.com/in/williamjyyu/",
    },
    {
      firstName: "Gui",
      lastName: "Lima",
      title: "Chief HR Officer",
      description:
        "Gui is a junior in the SFS studying Science, Technology and International Affairs. He is a Section Editor at Georgetown's Journal of International Affairs. In his free time, he enjoys watching movies, drinking coffee, and traveling.",
      email: "gsl39@georgetown.edu",
      linkedin: "https://www.linkedin.com/in/guilherme-silveira-lima/",
    },
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
    },
  ];

  const projectManagers = [
    { firstName: "Samantha", lastName: "Stein", title: "Project Manager" },
    { firstName: "William", lastName: "McLane", title: "Project Manager" },
    { firstName: "Laura", lastName: "Fan", title: "Project Manager" },
    { firstName: "Leo", lastName: "Ledlow", title: "Project Manager" },
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
                key={member.firstName}
              >
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
                key={member.firstName}
              >
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
                key={member.firstName}
              >
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

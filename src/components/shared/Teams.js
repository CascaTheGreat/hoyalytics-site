import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Teams = (props) => {
  const teams = [
    {
      title: "Analytics Division",
      isNew: true,
      description:
        "Our data analytics team focuses on research and dissemination of analytics content. Additionally, they help strengthen our core competency and expertise in data analytics.",
      image: "/image-section/analytics.png",
    },
    {
      title: "Consulting Divison",
      isNew: false,
      description:
        "Business Analysts work in small project teams each led by a project manager.  They consult with client companies to identify and implement data-driven predictions, visualizations, and recommendations.",
      image: "/image-section/consulting.png",
    },
    {
      title: "Training Divison",
      isNew: false,
      description:
        "Our Training Division continually strives to provide the best training and resources to our members.  They work to develop new advanced training modules and open events to the general Georgetown community.",
      image: "/image-section/training.png",
    },
  ];
  return (
    <div className="teams-section">
      <h1>{props.title}</h1>
      <div className="teams">
        {teams.map((team) => {
          return (
            <AnimationOnScroll animateIn="animate__fadeIn" delay={200}>
              <div className="team" key={team.id}>
                {team.isNew ? <h5 className="new-team">New!</h5> : null}
                <h2>{team.title}</h2>
                <img src={team.image} alt={team.name} />
                <p>{team.description}</p>
              </div>
            </AnimationOnScroll>
          );
        })}
      </div>
    </div>
  );
};

export default Teams;

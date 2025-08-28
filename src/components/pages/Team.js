import React from "react";
import TeamBoardMembers from "../TeamBoardMembers";
import TeamLanding from "../TeamLanding";
import TeamDivisions from "../TeamDivisions";
import Footer from "../shared/Footer";

const Team = () => {
  return (
    <div>
      <TeamLanding />
      <TeamBoardMembers />
      <TeamDivisions />
      <Footer />
    </div>
  );
  //return <ComingSoon />;
};

export default Team;

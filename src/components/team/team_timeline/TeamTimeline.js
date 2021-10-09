import React from "react";
import "../../../styles/team/team_timeline/team_timeline.css";
import TeamIndividualProfileComp from "./TeamIndividualProfileComp";

  return (
    <div className="team-timeline-primary-wrapper">
      {timelineData?.map((item, index) => {
        return (
          <div className="team-timeline-item-wrapper" key={index}>
            <TeamIndividualProfileComp />
          </div>
        );
      })}
    </div>
  );
}

export default TeamTimeline;

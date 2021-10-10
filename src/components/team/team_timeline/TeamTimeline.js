import React from "react";
import "../../../styles/team/team_timeline/team_timeline.css";
import TeamIndividualProfileComp from "./TeamIndividualProfileComp";

function TeamTimeline({ timelineData, colorThemeIndex }) {
  return (
    <div className="team-timeline-primary-wrapper">
      {timelineData?.map((individualData, index) => {
        return (
          <div className="team-timeline-item-wrapper" key={index}>
            <TeamIndividualProfileComp
              individualData={individualData}
              colorThemeIndex={colorThemeIndex}
            />
          </div>
        );
      })}
    </div>
  );
}

export default TeamTimeline;

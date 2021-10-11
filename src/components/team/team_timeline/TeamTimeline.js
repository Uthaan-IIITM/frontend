import React from "react";
import "../../../styles/team/team_timeline/team_timeline.css";
import TeamIndividualProfileComp from "./TeamIndividualProfileComp";

function TeamTimeline({ timelineData, colorThemeIndex }) {
  return (
    <div className="team-timeline-primary-wrapper">
      {timelineData?.map((individualData, index) => {
        return (
          <div
            className="team-timeline-item-wrapper"
            key={index}
            style={
              index == timelineData.length - 1
                ? {
                    marginRight: "0px",
                  }
                : {}
            }
          >
            <div
              className="team-timeline-item-profile-comp-wrapper"
              style={
                index % 2 == 0
                  ? {
                      marginTop: "0px",
                    }
                  : {}
              }
            >
              <TeamIndividualProfileComp
                individualData={individualData}
                colorThemeIndex={colorThemeIndex[index]}
              />
            </div>
            {index < timelineData.length - 1 ? (
              <div className="team-timeline-item-line-path-wrapper">
                <div
                  className="team-timeline-item-line-path"
                  style={{
                    clipPath:
                      index % 2 == 0
                        ? "polygon(0 0%, 5% 0, 100% 100%, 95% 100%)"
                        : "polygon(95% 0, 100% 0%, 5% 100%, 0% 100%)",
                  }}
                />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default TeamTimeline;

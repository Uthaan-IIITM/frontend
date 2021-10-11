import React from "react";
import PropTypes from "prop-types";

import LineDot from "../../_general/LineDot";
import EventCard from "./EventCard";

import "../../../styles/event/lower-section/event_timeline.css";

function EventTimeline({ isDotted, isRight }) {
  return (
    <div
      className="event-timeline-wrapper-wrapper"
      style={
        isRight
          ? {
              marginLeft: "auto",
              borderRight: "0",
              borderLeft: "3.5px dashed #000000",
              width: "calc(50% + 3.5px)",
            }
          : null
      }
    >
      <div
        className="event-timeline-wrapper"
        style={isRight ? { marginLeft: "6.5%", marginRight: "0" } : null}
      >
        <EventCard isRight={isRight} />
        <div
          className="event-line-dot-wrapper"
          style={isRight ? { right: "0", left: "-12.9%" } : null}
        >
          <LineDot
            outerRadiusStates={["1vw", "1vw"]}
            innerRadiusStates={["0.6vw", "0.7vw"]}
            innerCircleColorStates={["#303030", "#303030"]}
            outerCircleColorStates={["#000000", "#00000000"]}
            opacityStates={[1, 1]}
            strokeStates={["2px", "1px"]}
            currentState={isDotted ? 1 : 0}
          />
        </div>
      </div>
    </div>
  );
}

EventTimeline.propTypes = {};

export default EventTimeline;

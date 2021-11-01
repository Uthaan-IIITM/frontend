import React, { useEffect } from "react";
import PropTypes from "prop-types";

import LineDot from "../../_general/LineDot";
import EventCard from "./EventCard";

import "../../../styles/event/lower-section/event_timeline.css";
import useMediaQuery from "./../../_general/helpers/useMediaQuery";

function EventTimeline({ isDotted, isRight, eventData }) {
  const [windowWidth] = useMediaQuery();
  const [dotsDimens, setDotsDimens] = React.useState({
    outerRadiusStates: ["15px", "15px"],
    innerRadiusStates: ["9px", "10px"],
  });

  useEffect(() => {
    if (parseInt(windowWidth) <= 425) {
      setDotsDimens({
        outerRadiusStates: ["2.3vw", "2.3vw"],
        innerRadiusStates: ["1.17vw", "1.64vw"],
      });
    } else if (parseInt(windowWidth) < 1250) {
      setDotsDimens({
        outerRadiusStates: ["10px", "10px"],
        innerRadiusStates: ["5px", "7px"],
      });
    } else {
      setDotsDimens({
        outerRadiusStates: ["15px", "15px"],
        innerRadiusStates: ["9px", "10px"],
      });
    }
  }, [windowWidth]);

  return (
    <div
      className={
        "event-timeline-wrapper-wrapper" +
        (isRight ? " event-timeline-wrapper-wrapper-is-right" : "")
      }
      // style={
      //   isRight
      //     ? {
      //         marginLeft: "auto",
      //         borderRight: "0",
      //         borderLeft: "3.5px dashed #000000",
      //         width: "calc(50% + 3.5px)",
      //       }
      //     : null
      // }
    >
      <div
        className={
          "event-timeline-wrapper" +
          (isRight ? " event-timeline-wrapper-is-right" : "")
        }
      >
        <EventCard
          isRight={isRight}
          description={eventData?.description}
          title={eventData?.title}
          imageURL={eventData?.imageURL}
          redirectURL={eventData?.redirectURL}
        />
        <div
          className={
            "event-line-dot-wrapper" +
            (isRight ? " event-line-dot-wrapper-is-right" : "")
          }
          // style={isRight ? { right: "0", left: "-12.9%" } : null}
        >
          <LineDot
            outerRadiusStates={dotsDimens.outerRadiusStates}
            innerRadiusStates={dotsDimens.innerRadiusStates}
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

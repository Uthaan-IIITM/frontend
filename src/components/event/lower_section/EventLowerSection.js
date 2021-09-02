import React from "react";

import "../../../styles/event/lower-section/event_lower_section.css";
import EventTimeline from "./EventTimeline";
import { useEffect } from "react/cjs/react.development";

import SecondaryFooter from "../../_general/footer/SecondaryFooter";

function EventLowerSection() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let childElements = document.getElementsByClassName(
        "event-lower-section-wrapper"
      )[0]?.childNodes;

      if (childElements) {
        let elemHeight = parseFloat(
          getComputedStyle(childElements[0]).getPropertyValue("height")
        );

        let firstChildElemPosition =
          childElements[0].getBoundingClientRect().top;

        let positionDiffrenceBetweenFirstElemAndCenter =
          window.innerHeight / 2 - firstChildElemPosition;

        let activePositionIdexForLine = Math.ceil(
          positionDiffrenceBetweenFirstElemAndCenter / elemHeight
        );

        let lineDiv = document.getElementsByClassName(
          "events-timeline-filled-line"
        )[0];
        let lineDivHeight =
          (3 * window.innerWidth) / 100 +
          activePositionIdexForLine * elemHeight;

        if (activePositionIdexForLine == childElements.length - 1) {
          lineDivHeight = lineDivHeight + (3 * window.innerWidth) / 100;
        }

        lineDiv.style.height = lineDivHeight + "px";
      }
    });
  }, []);

  return (
    <>
      <div className="event-lower-section-wrapper">
        <EventTimeline />
        <EventTimeline isRight />
        <EventTimeline />
        <EventTimeline isRight />
        <div className="events-timeline-filled-line"></div>
      </div>
      <div>
        <SecondaryFooter />
      </div>
    </>
  );
}

export default EventLowerSection;

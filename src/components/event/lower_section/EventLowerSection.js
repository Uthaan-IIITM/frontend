import React from "react";

import "../../../styles/event/lower-section/event_lower_section.css";
import EventTimeline from "./EventTimeline";
import { useEffect } from "react/cjs/react.development";

function EventLowerSection() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let childElements = document.getElementsByClassName(
        "event-lower-section-wrapper"
      )[0].childNodes;

      // console.log(childElements.length);
      // childElements.splice(-1,1);
      // console.log(childElements);

      // let elemHeight = childElements[0].offsetHeight;
      let elemHeight = parseFloat(
        getComputedStyle(childElements[0]).getPropertyValue("height")
      );
      // console.log(elemHeight);

      let firstChildElemPosition = childElements[0].getBoundingClientRect().top;
      // let firstChildElemPosition = getComputedStyle(
      //   childElements[0]
      // ).getPropertyValue("position");
      console.log(firstChildElemPosition);

      let positionDiffrenceBetweenFirstElemAndCenter =
        window.innerHeight / 2 - firstChildElemPosition;
      console.log(positionDiffrenceBetweenFirstElemAndCenter);

      let activePositionIdexForLine = Math.ceil(
        positionDiffrenceBetweenFirstElemAndCenter / elemHeight
      );

      console.log(activePositionIdexForLine);

      let lineDiv = document.getElementsByClassName(
        "events-timeline-filled-line"
      )[0];
      let lineDivHeight =
        (3 * window.innerWidth) / 100 + activePositionIdexForLine * elemHeight;

      if (activePositionIdexForLine == childElements.length - 1) {
        lineDivHeight = lineDivHeight + (3 * window.innerWidth) / 100;
      }

      console.log(lineDivHeight);
      lineDiv.style.height = lineDivHeight + "px";

      // if () {
      //   childElements[childElements.length - 1].classList.add("active");
      // }
    });
  }, []);

  return (
    <div className="event-lower-section-wrapper">
      <EventTimeline />
      <EventTimeline isRight />
      <EventTimeline />
      <EventTimeline isRight />
      <div className="events-timeline-filled-line"></div>
    </div>
  );
}

export default EventLowerSection;

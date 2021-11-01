import React, { useState, useEffect } from "react";

import "../../../styles/event/lower-section/event_lower_section.css";

import EventTimeline from "./EventTimeline";
import SecondaryFooter from "../../_general/footer/SecondaryFooter";
import EventsCardDataObj from "./helpers/events_card_obj_constructor";
import { events } from "../../../services/events.service";
import useMediaQuery from "./../../_general/helpers/useMediaQuery";

function EventLowerSection() {
  const [eventsData, setEventsData] = useState([]);

  const setUpEventsPageLineScroll = () => {
    let childElements = document.getElementsByClassName(
      "event-lower-section-wrapper"
    )[0]?.childNodes;

    if (childElements) {
      let elemHeight = parseFloat(
        getComputedStyle(childElements[0]).getPropertyValue("height")
      );

      let firstChildElemPosition = childElements[0].getBoundingClientRect().top;

      let positionDiffrenceBetweenFirstElemAndCenter =
        window.innerHeight / 2 - firstChildElemPosition;

      let activePositionIdexForLine = Math.ceil(
        positionDiffrenceBetweenFirstElemAndCenter / elemHeight
      );

      let lineDiv = document.getElementsByClassName(
        "events-timeline-filled-line"
      )[0];
      let lineDivHeight =
        (3 * window.innerWidth) / 100 + activePositionIdexForLine * elemHeight;

      if (activePositionIdexForLine == childElements.length - 1) {
        lineDivHeight = lineDivHeight;
      }

      lineDiv.style.height = lineDivHeight + "px";
    }
  };

  const [windowWidth] = useMediaQuery();

  useEffect(() => {
    loadEventsData();
    window.addEventListener("scroll", setUpEventsPageLineScroll);

    return () => {
      window.removeEventListener("scroll", setUpEventsPageLineScroll);
    };
  }, []);

  async function loadEventsData() {
    try {
      const rawEventsData = await events();
      let tempDataObj = [];
      for (let index = 0; index < rawEventsData.length; index++) {
        tempDataObj.push(
          new EventsCardDataObj(
            rawEventsData[index].image,
            rawEventsData[index].name,
            rawEventsData[index].description,
            rawEventsData[index].url
          )
        );
      }
      setEventsData(tempDataObj);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="event-lower-section-wrapper">
        {eventsData.map((event, index) => {
          return parseInt(windowWidth) <= 800 ? (
            <EventTimeline key={index} eventData={event} isRight={true} />
          ) : (
            <EventTimeline
              key={index}
              eventData={event}
              isRight={index % 2 == 0}
            />
          );
        })}
        <div className="events-timeline-filled-line"></div>
      </div>
      <div>
        <SecondaryFooter />
      </div>
    </>
  );
}

export default EventLowerSection;

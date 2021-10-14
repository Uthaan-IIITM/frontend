import React, { useState, useEffect } from "react";
import axios from "axios";

import "../../../styles/event/lower-section/event_lower_section.css";

import EventTimeline from "./EventTimeline";
import SecondaryFooter from "../../_general/footer/SecondaryFooter";
import { EVENTS_DATA_URL } from "../../../utils/APIs";
import EventsCardDataObj from "./helpers/events_card_obj_constructor";

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
        lineDivHeight = lineDivHeight + (3 * window.innerWidth) / 100;
      }

      lineDiv.style.height = lineDivHeight + "px";
    }
  };

  useEffect(() => {
    loadEventsData();
    window.addEventListener("scroll", setUpEventsPageLineScroll);

    return () => {
      window.removeEventListener("scroll", setUpEventsPageLineScroll);
    };
  }, []);

  async function loadEventsData() {
    try {
      const rawEventsData = (await axios.get(EVENTS_DATA_URL)).data;
      console.log(rawEventsData);
      let tempDataObj = [];
      for (let index = 0; index < rawEventsData.length; index++) {
        tempDataObj.push(
          new EventsCardDataObj(
            rawEventsData[index].image,
            rawEventsData[index].name,
            rawEventsData[index].description
          )
        );
      }
      setEventsData(tempDataObj);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    console.log(eventsData);
  }, [eventsData]);

  return (
    <>
      <div className="event-lower-section-wrapper">
        {eventsData.map((event, index) => {
          return (
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

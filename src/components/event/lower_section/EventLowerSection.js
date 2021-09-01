import React from "react";

import "../../../styles/event/lower-section/event_lower_section.css";
import EventTimeline from "./EventTimeline";

function EventLowerSection() {
  return (
    <div className="event-lower-section-wrapper">
      <EventTimeline />
      <EventTimeline isRight />
      <EventTimeline />
      <EventTimeline isRight />
    </div>
  );
}

export default EventLowerSection;

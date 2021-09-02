import React from "react";
import EventLowerSection from "./lower_section/EventLowerSection";
import EventsUpperSection from "./upper_section/EventsUpperSection";

function EventPage() {
  return (
    <div>
      <EventsUpperSection/>
      <EventLowerSection />
    </div>
  );
}

export default EventPage;

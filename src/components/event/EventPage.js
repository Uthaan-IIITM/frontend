import React from "react";
import EventLowerSection from "./lower_section/EventLowerSection";
import EventsUpperSection from "./upper_section/EventsUpperSection";
import ListingPagesSmoothScrollContainer from "./../_general/listing_pages_top_bottom_comps/ListingPagesSmoothScrollContainer";

function EventPage() {
  return (
    <div>
      <ListingPagesSmoothScrollContainer
        topContainer={<EventsUpperSection />}
        bottomContainer={<EventLowerSection />}
      />
    </div>
  );
}

export default EventPage;

import React from "react";
import ListingPagesSmoothScrollContainer from './../_general/listing_pages_top_bottom_comps/ListingPagesSmoothScrollContainer';
import ShowsLowerSection from './../shows/lower_section/ShowsLowerSection';
import InterviewsUpperSection from './upper_section/InterviewsUpperSection';

function InterviewsPage() {
  return (
    <div>
      <ListingPagesSmoothScrollContainer
        topContainer={[<InterviewsUpperSection />]}
        bottomContainer={<ShowsLowerSection />}
      />
    </div>
  );
}

export default InterviewsPage;

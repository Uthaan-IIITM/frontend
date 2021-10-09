import React from "react";
import ListingPagesSmoothScrollContainer from "./../_general/listing_pages_top_bottom_comps/ListingPagesSmoothScrollContainer";
import InterviewsUpperSection from "./upper_section/InterviewsUpperSection";
import InterviewsLowerSection from "./lower_section/InterviewsLowerSection";

function InterviewsPage() {
  return (
    <div>
      <ListingPagesSmoothScrollContainer
        topContainer={[<InterviewsUpperSection />]}
        bottomContainer={<InterviewsLowerSection />}
      />
    </div>
  );
}

export default InterviewsPage;

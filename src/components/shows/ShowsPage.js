import React from "react";
import ShowsLowerSection from "./lower_section/ShowsLowerSection";
import ShowsUpperSection from "./upper_section/ShowsUpperSection";
import ListingPagesSmoothScrollContainer from "./../_general/listing_pages_top_bottom_comps/ListingPagesSmoothScrollContainer";

function ShowsPage() {
  return (
    <div>
      <div>
        <ListingPagesSmoothScrollContainer
          topContainer={[<ShowsUpperSection />]}
          bottomContainer={<ShowsLowerSection />}
        />
      </div>
    </div>
  );
}

export default ShowsPage;

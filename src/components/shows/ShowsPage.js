import React from "react";
import ListingPagesTopBreifComp from "../../components/_general/listing_pages_top_bottom_comps/ListingPagesTopBreifComp";
import ShowsLowerSection from "./lower_section/ShowsLowerSection";
import ShowsUpperSection from "./upper_section/ShowsUpperSection";
import ListingPagesSmoothScrollContainer from "./../_general/listing_pages_top_bottom_comps/ListingPagesSmoothScrollContainer";

function ShowsPage() {
  let divStyling = {
    top: "21vh",
    left: "10vw",
  };
  let textTitleStyle = {
    fontFamily: "Manrope",
    fontSize: "4vw",
    fontWeight: "800",
    letterSpacing: "0.3em",
  };

  let textDescriptionStyle = {
    fontFamily: "Manrope",
    fontSize: "1.5vw",
    fontWeight: "500",
    width: "40vw",
  };

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

import React from "react";
import ListingPagesTopBreifComp from "../../components/_general/listing_pages_top_bottom_comps/ListingPagesTopBreifComp";
import { ReactComponent as Graphic1 } from "../../assets/shows/bg/bg1.svg";
import { ReactComponent as Graphic2 } from "../../assets/shows/bg/bg2.svg";
import { ReactComponent as Graphic3 } from "../../assets/shows/bg/bg3.svg";
import { ReactComponent as Graphic4 } from "../../assets/shows/bg/bg4.svg";

function ShowsPage() {
  let divStyling = {
    top: "21vh",
    left: "10vw",
  };
  return (
    <div>
      <ListingPagesTopBreifComp
        floatingBgImagesList={[
          <Graphic1 preserveAspectRatio="none" />,
          <Graphic2 preserveAspectRatio="none" />,
          <Graphic3 preserveAspectRatio="none" />,
          <Graphic4 preserveAspectRatio="none" />,
        ]}
        bgELementsRatios={[1, 0.9, 0.55, 0.45]}
        primaryHeight="50vh"
        topicTitle="SHOWS"
        topicDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus, quis dolor sit amet"
        textDivStyling={divStyling}
      />
      {/* <Graphic1 /> */}
    </div>
  );
}

export default ShowsPage;

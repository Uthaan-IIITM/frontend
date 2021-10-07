import React from "react";
import { ReactComponent as Graphic1 } from "../../../assets/interviews/bg/bg1.svg";
import { ReactComponent as Graphic2 } from "../../../assets/interviews/bg/bg2.svg";
import { ReactComponent as Graphic3 } from "../../../assets/interviews/bg/bg3.svg";
import { ReactComponent as Graphic4 } from "../../../assets/interviews/bg/bg4.svg";
import { ReactComponent as PrimaryGraphic } from "../../../assets/interviews/graphic.svg";
import ListingPagesTopBreifComp from "../../_general/listing_pages_top_bottom_comps/ListingPagesTopBreifComp";

function InterviewsUpperSection() {
  return (
    <div>
      <ListingPagesTopBreifComp
        floatingBgImagesList={[
          <Graphic1 preserveAspectRatio="none" />,
          <Graphic2 preserveAspectRatio="none" />,
          <Graphic3 preserveAspectRatio="none" />,
          <Graphic4 preserveAspectRatio="none" />,
        ]}
        bgELementsRatios={[1, 0.75 , 0.38, 0.16]}
        primaryHeight="47.5vh"
        topicTitle="INTERVIEWS"
        topicDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus, quis dolor sit amet"
        textDivStylingClass="lisitng-page-center-text-div-for-interviews-page"
        textTitleStylingClass="listing-page-center-text-title-for-interviews-page"
        textDescriptionStylingClass="listing-page-center-text-description-for-interviews-page"
        primaryGraphicCompStylingClass="listing-pages-top-breif-sec-primary-graphic-component-wrapper-for-interviews-page"
        PrimaryGraphicComp={<PrimaryGraphic />}
        primaryGraphicExtremePositions={{
          xInitialExtreme: "-1%",
          xEndExtreme: "1%",
          yEndExtreme: "-1%",
          yInitialExtreme: "2%",
        }}
        extremeBgPositionValues={{
          xInitialExtremes: ["5%", "3%", "-3%", "-4%"],
          xEndExtremes: ["-1%", "-1%", "1%", "2%"],
          yInitialExtremes: ["-1.5%", "-1%", "0%", "0%"],
          yEndExtremes: ["0%", "-0.5%", "-1%", "-2%"],
        }}
      />
    </div>
  );
}

export default InterviewsUpperSection;

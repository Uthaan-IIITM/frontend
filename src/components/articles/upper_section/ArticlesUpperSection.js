import React from "react";
import { ReactComponent as Graphic1 } from "../../../assets/articles/bg/bg1.svg";
import { ReactComponent as Graphic2 } from "../../../assets/articles/bg/bg2.svg";
import { ReactComponent as Graphic3 } from "../../../assets/articles/bg/bg3.svg";
import { ReactComponent as Graphic4 } from "../../../assets/articles/bg/bg4.svg";
import { ReactComponent as PrimaryGraphic } from "../../../assets/articles/graphic.svg";
import { pageDescriptions } from "../../../utils/GeneralConstants";
import ListingPagesTopBreifComp from "../../_general/listing_pages_top_bottom_comps/ListingPagesTopBreifComp";

function ArticlesUpperSection() {
  return (
    <div>
      <ListingPagesTopBreifComp
        floatingBgImagesList={[
          <Graphic1 preserveAspectRatio="none" />,
          <Graphic2 preserveAspectRatio="none" />,
          <Graphic3 preserveAspectRatio="none" />,
          <Graphic4 preserveAspectRatio="none" />,
        ]}
        bgELementsRatios={[0.9, 1, 0.65, 0.6]}
        primaryHeight="58vh"
        topicTitle="ARTICLES"
        topicDescription={pageDescriptions.ARTICLE_PAGE}
        textDivStylingClass="lisitng-page-center-text-div-for-articles-page"
        textTitleStylingClass="listing-page-center-text-title-for-articles-page"
        textDescriptionStylingClass="listing-page-center-text-description-for-articles-page"
        primaryGraphicCompStylingClass="listing-pages-top-breif-sec-primary-graphic-component-wrapper-for-articles-page"
        PrimaryGraphicComp={<PrimaryGraphic />}
        primaryGraphicExtremePositions={{
          xInitialExtreme: "-2%",
          xEndExtreme: "4%",
          yEndExtreme: "2%",
          yInitialExtreme: "-4%",
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

export default ArticlesUpperSection;

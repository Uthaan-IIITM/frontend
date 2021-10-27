import React, { useState, useEffect } from "react";

import "../../../styles/home/upper-section/home_uupper_sec.css";

import ElementsSlider from "./slider/ElementsSlider";
import BridgingGapBetweenJuniorsAndSeniors from "./illustration-components/BridgingGapBetweenJuniorsAndSeniors_copy";
import CreateConnectAndTrancend from "./illustration-components/CreateConnectAndTrancend_copy";
import PushingBoundariesOnOurIdeasAndOurCraft from "./illustration-components/PushingBoundariesOnOurIdeasAndOurCraft_copy";
import BridgingGapBetweenJuniorsAndSeniors2 from "./illustration-components/BridgingGapBetweenJuniorsAndSeniors";
import CreateConnectAndTrancend2 from "./illustration-components/CreateConnectAndTrancend";
import PushingBoundariesOnOurIdeasAndOurCraft2 from "./illustration-components/PushingBoundariesOnOurIdeasAndOurCraft";
import homePageSliderOpacityController from "./helper-functions/home-page-slider-opacity-controller";
import homePageSliderScaleController from "./helper-functions/home-page-slider-scale-controller";
import WhatIsUthaanMainContent from "./what-is-uthaan-content/WhatIsUthaanMainContent";
import ProgressLine from "./progress_line/ProgressLine";

import { ReactComponent as HomeUpperSectionIllustration } from "../../../assets/home/what_is_uthaan/bridging_gap_between_juniors_and_seniors/preview.svg";
import { ReactComponent as HomeUpperSectionIllustration2 } from "../../../assets/home/what_is_uthaan/create_connect_and_trancend/preview.svg";
import { ReactComponent as HomeUpperSectionIllustration3 } from "../../../assets/home/what_is_uthaan/pushing_boundaries_on_our_art_and_our_craft/preview.svg";
import useMediaQuery from "./../../_general/helpers/useMediaQuery";

function HomeUpperSection() {
  const windowWidth = useMediaQuery();

  const [primaryCurrentState, setPrimaryCurrentState] = useState({
    intIndex: 0,
    floatIndex: 0.0,
  });

  const [carouselStyle, setCarouselStyle] = useState({
    spaceBetween: "100px",
    carouselInnerHeight: "400px",
    carouselOuterHeight: "400px",
    elementWidth: "600px",
  });

  const [sliderGoToPosition, setSliderGoToState] = useState(0);

  useEffect(() => {
    switch (true) {
      case parseInt(windowWidth) < 480:
        {
          setCarouselStyle({
            spaceBetween: "80px",
            carouselInnerHeight: "200px",
            carouselOuterHeight: "200px",
            elementWidth: "300px",
          });
        }
        break;
      case parseInt(windowWidth) < 700:
        {
          setCarouselStyle({
            spaceBetween: "100px",
            carouselInnerHeight: "300px",
            carouselOuterHeight: "300px",
            elementWidth: "450px",
          });
        }
        break;

      default:
        {
          setCarouselStyle({
            spaceBetween: "100px",
            carouselInnerHeight: "400px",
            carouselOuterHeight: "400px",
            elementWidth: "600px",
          });
        }
        break;
    }
  }, [windowWidth]);

  function handleSliderChange(newState, opacityAndScaleDimensions) {
    setPrimaryCurrentState(newState);
  }

  return (
    <div className="home-upper-section-container">
      <WhatIsUthaanMainContent currentState={primaryCurrentState.intIndex} />

      <div className="home-upper-sec-slider-wrapper">
        <ElementsSlider
          sliderComponents={[
            <BridgingGapBetweenJuniorsAndSeniors
              containerWidth={carouselStyle.elementWidth}
            />,
            <CreateConnectAndTrancend
              containerWidth={carouselStyle.elementWidth}
            />,
            <PushingBoundariesOnOurIdeasAndOurCraft
              containerWidth={carouselStyle.elementWidth}
            />,
          ]}
          elementWidth="45vw"
          carouselInnerHeight="auto"
          carouselOuterHeight="auto"
          opacityFunction={homePageSliderOpacityController}
          scaleFunction={homePageSliderScaleController}
          onScrollChangeFunction={handleSliderChange}
          autoSlide={true}
          autoSlideInterval={3000}
          autoSlideTransitionDuration={2000}
          spaceBetween={carouselStyle.spaceBetween}
          carouselInnerHeight={carouselStyle.carouselInnerHeight}
          carouselOuterHeight={carouselStyle.carouselOuterHeight}
          elementWidth={carouselStyle.elementWidth}
          carouselWidth={carouselStyle.carouselWidth}
          goToPosition={null}
        />

        <div className="home-upper-section-progress_line_wrapper">
          <ProgressLine currentState={primaryCurrentState.floatIndex} />
        </div>
      </div>
    </div>
  );
}

export default HomeUpperSection;

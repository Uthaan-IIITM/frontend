import React, { useState, useEffect } from "react";
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

function HomeUpperSection() {
  const [primaryCurrentState, setPrimaryCurrentState] = useState({
    intIndex: 0,
    floatIndex: 0.0,
  });

  const [sliderGoToPosition, setSliderGoToState] = useState(0);

  function handleSliderChange(newState, opacityAndScaleDimensions) {
    setPrimaryCurrentState(newState);
  }

  return (
    <div>
      <WhatIsUthaanMainContent currentState={primaryCurrentState.intIndex} />

      <ElementsSlider
        sliderComponents={[
          <BridgingGapBetweenJuniorsAndSeniors containerWidth="50vw" />,
          <CreateConnectAndTrancend containerWidth="50vw" />,
          <PushingBoundariesOnOurIdeasAndOurCraft containerWidth="50vw" />,
        ]}
        opacityFunction={homePageSliderOpacityController}
        scaleFunction={homePageSliderScaleController}
        onScrollChangeFunction={handleSliderChange}
        autoSlide={true}
        autoSlideInterval={5000}
        autoSlideTransitionDuration={900}
        // goToPosition={sliderGoToPosition}
      />

      <ProgressLine currentState={primaryCurrentState.floatIndex} />
    </div>
  );
}

export default HomeUpperSection;

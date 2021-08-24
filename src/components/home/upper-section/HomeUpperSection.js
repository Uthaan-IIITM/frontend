import React, { useState, useEffect } from "react";
import ElementsSlider from "./slider/ElementsSlider";
import BridgingGapBetweenJuniorsAndSeniors from "./illustration-components/BridgingGapBetweenJuniorsAndSeniors";
import CreateConnectAndTrancend from "./illustration-components/CreateConnectAndTrancend";
import PushingBoundariesOnOurIdeasAndOurCraft from "./illustration-components/PushingBoundariesOnOurIdeasAndOurCraft";
import homePageSliderOpacityController from "./helper-functions/home-page-slider-opacity-controller";
import homePageSliderScaleController from "./helper-functions/home-page-slider-scale-controller";
import WhatIsUthaanMainContent from "./what-is-uthaan-content/WhatIsUthaanMainContent";
import ProgressLine from "./progress_line/ProgressLine";

const IllustionComponentsArray = [
  <BridgingGapBetweenJuniorsAndSeniors />,
  <CreateConnectAndTrancend />,
  <PushingBoundariesOnOurIdeasAndOurCraft />,
];

function HomeUpperSection() {
  const [primaryCurrentState, setPrimaryCurrentState] = useState({
    intIndex: 0,
    floatIndex: 0.0,
  });

  useEffect(() => {}, [primaryCurrentState]);

  function handleSliderChange(newState) {
    setPrimaryCurrentState(newState);
  }

  return (
    <div>
      <WhatIsUthaanMainContent currentState={primaryCurrentState.intIndex} />
      <ElementsSlider
        sliderComponents={IllustionComponentsArray}
        opacityFunction={homePageSliderOpacityController}
        scaleFunction={homePageSliderScaleController}
        onScrollChangeFunction={handleSliderChange}
      />
      <ProgressLine currentState={primaryCurrentState.floatIndex} />
    </div>
  );
}

export default HomeUpperSection;

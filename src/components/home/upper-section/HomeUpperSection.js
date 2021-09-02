import React, { useState, useEffect } from "react";
import ElementsSlider from "./slider/ElementsSlider";
import BridgingGapBetweenJuniorsAndSeniors from "./illustration-components/BridgingGapBetweenJuniorsAndSeniors_copy";
import CreateConnectAndTrancend from "./illustration-components/CreateConnectAndTrancend_copy";
import PushingBoundariesOnOurIdeasAndOurCraft from "./illustration-components/PushingBoundariesOnOurIdeasAndOurCraft_copy";
// import BridgingGapBetweenJuniorsAndSeniors from "./illustration-components/BridgingGapBetweenJuniorsAndSeniors";
// import CreateConnectAndTrancend from "./illustration-components/CreateConnectAndTrancend";
// import PushingBoundariesOnOurIdeasAndOurCraft from "./illustration-components/PushingBoundariesOnOurIdeasAndOurCraft";
import homePageSliderOpacityController from "./helper-functions/home-page-slider-opacity-controller";
import homePageSliderScaleController from "./helper-functions/home-page-slider-scale-controller";
import WhatIsUthaanMainContent from "./what-is-uthaan-content/WhatIsUthaanMainContent";
import ProgressLine from "./progress_line/ProgressLine";

function HomeUpperSection() {
  // const IllustionComponentsArray = [
  //   <BridgingGapBetweenJuniorsAndSeniors
  //     containerWidth={`calc(45vw * ${componentsScaleFractionIndices[0]})`}
  //   />,
  //   <CreateConnectAndTrancend
  //     containerWidth={`calc(45vw * ${componentsScaleFractionIndices[1]})`}
  //   />,
  //   <PushingBoundariesOnOurIdeasAndOurCraft
  //     containerWidth={`calc(45vw * ${componentsScaleFractionIndices[2]})`}
  //   />,
  // ];

  const [primaryCurrentState, setPrimaryCurrentState] = useState({
    intIndex: 0,
    floatIndex: 0.0,
  });

  const [componentsScaleFractionIndices, setComponentsScaleFractionIndices] =
    useState([1, 0.5, 0.5]);

  useEffect(() => {}, [primaryCurrentState]);

  function handleSliderChange(newState, opacityAndScaleDimensions) {
    setPrimaryCurrentState(newState);
    if (opacityAndScaleDimensions.scaleDimensionsByActualPosition) {
      console.log(opacityAndScaleDimensions.scaleDimensionsByActualPosition);
      setComponentsScaleFractionIndices([
        opacityAndScaleDimensions.scaleDimensionsByActualPosition[0],
        opacityAndScaleDimensions.scaleDimensionsByActualPosition[1],
        opacityAndScaleDimensions.scaleDimensionsByActualPosition[2],
      ]);
    }
  }

  return (
    <div>
      <WhatIsUthaanMainContent currentState={primaryCurrentState.intIndex} />
      <ElementsSlider
        sliderComponents={[
          <BridgingGapBetweenJuniorsAndSeniors
            containerWidth={`calc(45vw * ${componentsScaleFractionIndices[0]})`}
          />,
          <CreateConnectAndTrancend
            containerWidth={`calc(45vw * ${componentsScaleFractionIndices[1]})`}
          />,
          <PushingBoundariesOnOurIdeasAndOurCraft
            containerWidth={`calc(45vw * ${componentsScaleFractionIndices[2]})`}
          />,
        ]}
        opacityFunction={homePageSliderOpacityController}
        scaleFunction={homePageSliderScaleController}
        onScrollChangeFunction={handleSliderChange}
      />
      <ProgressLine currentState={primaryCurrentState.floatIndex} />
    </div>
  );
}

export default HomeUpperSection;

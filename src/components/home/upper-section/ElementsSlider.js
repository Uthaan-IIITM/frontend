import PropTypes from "prop-types";
import { useState } from "react/cjs/react.development";
import "../../../styles/home/upper-section/slider/image-slider-container.css";
import "../../../styles/home/upper-section/slider/core-image-slider-container.css";
import homePageSliderOpacityController from "./helper-functions/home-page-slider-opacity-controller";
import homePageSliderScaleController from "./helper-functions/home-page-slider-scale-controller";
import formatNumber from "./slider-helpers/nemerical-formatter";
import scaleAndOpacityControllerByActualPosition from "./slider-helpers/scale_and_opacity_controller_by_actual_position";
import scaleAndOpacityControllerByPositionFromCenter from "./slider-helpers/scale_and_opacity_controller_by_position_from_center";
import scaleAndOpacitySetter from "./slider-helpers/scale_and_opacity_setter";
import { useEffect } from "react";

function ElementsSlider({
  sliderComponents,
  spaceBetween,
  paddingGeneral,
  alignment,
  elementWidth,
  carouselWidth,
  opacityFunction,
  scaleFunction,
  onScrollChangeFunction,
}) {
  const [sliderChildElements, setSliderChildElements] = useState([]);
  const [opacityAndScaleDimensions, setOpacityAndScaleDimensions] = useState(
    {}
  );
  const [currentScrollStateIndices, setCurrentScrollStateIndices] = useState(
    {}
  );
  const [beingDragged, setBeingDragged] = useState(false);
  const [lastTimeBeingAnimated, setLastTimeBeingAnimated] = useState(
    Date.now()
  );

  useEffect(() => {
    if (onScrollChangeFunction !== undefined) {
      onScrollChangeFunction(
        currentScrollStateIndices.floatIndex,
        currentScrollStateIndices.intIndex
      );
    }

    let [
      localeArrayForOpacityCalculationByPositionFromCenter,
      localeArrayForScaleCalculationByPositionFromCenter,
    ] = scaleAndOpacityControllerByPositionFromCenter(
      sliderChildElements.length,
      currentScrollStateIndices.intIndex,
      opacityFunction,
      scaleFunction
    );

    let [
      localeArrayForOpacityCalculationByActualPosition,
      localeArrayForScaleCalculationByActualPosition,
    ] = scaleAndOpacityControllerByActualPosition(
      currentScrollStateIndices.intIndex,
      currentScrollStateIndices.floatIndex,
      sliderChildElements.length,
      localeArrayForOpacityCalculationByPositionFromCenter,
      localeArrayForScaleCalculationByPositionFromCenter
    );

    let localeDimensionsObject = {};
    localeDimensionsObject.opacityDimensionsByPositionFromCenter =
      localeArrayForOpacityCalculationByPositionFromCenter;
    localeDimensionsObject.opacityDimensionsByActualPosition =
      localeArrayForOpacityCalculationByActualPosition;
    localeDimensionsObject.scaleDimensionsByPositionFromCenter =
      localeArrayForScaleCalculationByPositionFromCenter;
    localeDimensionsObject.scaleDimensionsByActualPosition =
      localeArrayForScaleCalculationByActualPosition;

    setOpacityAndScaleDimensions(localeDimensionsObject);
  }, [currentScrollStateIndices]);

  useEffect(() => {
    scaleAndOpacitySetter(
      sliderChildElements,
      opacityAndScaleDimensions.scaleDimensionsByActualPosition,
      opacityAndScaleDimensions.opacityDimensionsByActualPosition
    );
  }, [opacityAndScaleDimensions]);

  /** function to drag carousel when user is dragging **/
  function dragCarousel(event) {
    if (beingDragged) {
      const userMousePos = event.clientX;
      console.log(userMousePos);
    }
  }

  function updateLayoutOnScroll(e) {
    let childElements = e.target.childNodes[0].childNodes[0].childNodes;
    setSliderChildElements(childElements);

    let sliderfirstElement = childElements[0];
    let sliderfirstElementComputedStyles = getComputedStyle(sliderfirstElement);

    let localCurrentPositionIndex =
      e.target.scrollLeft /
      (parseFloat(sliderfirstElementComputedStyles.width) +
        2 * parseFloat(sliderfirstElementComputedStyles.marginLeft));

    let localeCurrentScrollStateIndices = {};
    localeCurrentScrollStateIndices.floatIndex = formatNumber(
      localCurrentPositionIndex,
      2
    );
    localeCurrentScrollStateIndices.intIndex = formatNumber(
      localCurrentPositionIndex,
      0
    );

    setCurrentScrollStateIndices(localeCurrentScrollStateIndices);
  }

  return (
    <div
      className="slider-elements-wrapper-wrapper-wrapper"
      onScroll={(e) => updateLayoutOnScroll(e)}
      style={{
        width: carouselWidth,
        paddinTop: paddingGeneral,
        padduBottom: paddingGeneral,
        height: "60vh",
      }}
    >
      <div
        className="slider-elements-wrapper-wrapper"
        // onMouseDown={() => setBeingDragged(true)}
        // onMouseUp={() => setBeingDragged(false)}
        // onMouseMove={dragCarousel(e)}
        style={{
          width: "fit-content",
        }}
      >
        <div
          className="slider-elements-wrapper"
          style={{
            marginLeft: `calc( (${carouselWidth} /2 - ${elementWidth}/ 2) + ${spaceBetween} )`,
            marginRight: `calc( (${carouselWidth} /2 - ${elementWidth}/ 2) + ${spaceBetween} )`,
          }}
        >
          {sliderComponents.map((component, index) => {
            return (
              <div
                key={index}
                className="core-slider-elements-wrapper-wrapper"
                style={{
                  width: elementWidth,
                  marginLeft: `-${spaceBetween}`,
                  marginRight: `-${spaceBetween}`,
                  alignItems: alignment,
                }}
              >
                <div
                  className="core-slider-elements-wrapper"
                  style={{
                    width: `100%`,
                  }}
                >
                  {component}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

ElementsSlider.propTypes = {
  sliderComponents: PropTypes.array.isRequired,
  spaceBetween: PropTypes.string,
  paddingGeneral: PropTypes.string,
  alignment: PropTypes.string,
};

ElementsSlider.defaultProps = {
  spaceBetween: "5vw",
  paddingGeneral: "10vw",
  alignment: "flex-end",
  carouselWidth: "100vw",
  elementWidth: "40rem",
  opacityFunction: { homePageSliderOpacityController },
  scaleFunction: { homePageSliderScaleController },
};

export default ElementsSlider;

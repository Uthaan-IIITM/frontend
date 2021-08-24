import PropTypes from "prop-types";
import { useState } from "react/cjs/react.development";
import "../../../../styles/home/upper-section/slider/image-slider-container.css";
import "../../../../styles/home/upper-section/slider/core-image-slider-container.css";
import homePageSliderOpacityController from "../helper-functions/home-page-slider-opacity-controller";
import homePageSliderScaleController from "../helper-functions/home-page-slider-scale-controller";
import formatNumber from "./slider_helpers/nemerical_formatter";
import scaleAndOpacityControllerByActualPosition from "./slider_helpers/scale_and_opacity_controller_by_actual_position";
import scaleAndOpacityControllerByPositionFromCenter from "./slider_helpers/scale_and_opacity_controller_by_position_from_center";
import scaleAndOpacitySetter from "./slider_helpers/scale_and_opacity_setter";
import { useEffect, useRef } from "react";

function ElementsSlider({
  sliderComponents,
  spaceBetween,
  paddingGeneral,
  alignment,
  elementWidth,
  carouselWidth,
  carouselInnerHeight,
  carouselOuterHeight,
  opacityFunction,
  scaleFunction,
  onScrollChangeFunction,
}) {
  const sliderChildElements = useRef([]);
  const beingDragged = useRef(false);
  const previousScrollPosition = useRef(0);
  const startMousePosition = useRef(0);

  // const [sliderChildElements, setSliderChildElements] = useState([]);
  const [opacityAndScaleDimensions, setOpacityAndScaleDimensions] = useState(
    {}
  );
  const [currentScrollStateIndices, setCurrentScrollStateIndices] = useState(
    {}
  );
  // const [lastTimeBeingAnimated, setLastTimeBeingAnimated] = useState(
  //   Date.now()
  // );

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
      sliderChildElements.current.length,
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
      sliderChildElements.current.length,
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
      sliderChildElements.current,
      opacityAndScaleDimensions.scaleDimensionsByActualPosition,
      opacityAndScaleDimensions.opacityDimensionsByActualPosition
    );
  }, [opacityAndScaleDimensions]);

  /** function to drag carousel when user is dragging **/
  function startDragging(e) {
    beingDragged.current = true;
    startMousePosition.current = e.clientX;
    // console.log(startMousePosition.current);
    // const userMousePos = e.clientX;
    // console.log(userMousePos);
  }

  function stopDragging(e) {
    beingDragged.current = false;
    previousScrollPosition.current = e.target.scrollLeft;
    // console.log(currentScrollStateIndices.intIndex);
    scrollToPosition(currentScrollStateIndices.intIndex, e.target);
    // console.log(previousScrollPosition.current);
    // const userMousePos = e.clientX;
    // console.log(userMousePos);
  }

  /** Function to drag carousel when user is dragging **/
  function dragSlider(e) {
    // e.preventDefault();
    if (beingDragged.current) {
      // console.log(
      //   -e.clientX + startMousePosition.current + previousScrollPosition.current
      // );

      let element = e.target;
      element.focus();

      // e.target.scrollLeft =
      //   -e.clientX +
      //   startMousePosition.current +
      //   previousScrollPosition.current;
      e.target.scrollTo({
        top: 0,
        left:
          -e.clientX +
          startMousePosition.current +
          previousScrollPosition.current,
      });
      // e.target.scrollTo({
      //   top: 0,
      //   left:
      //     -e.clientX +
      //     startMousePosition.current +
      //     previousScrollPosition.current,
      //   behavior: "smooth",
      // });
    }
  }

  function scrollToPosition(index, element) {
    let childElements = element.childNodes[0].childNodes[0].childNodes;
    let sliderfirstElement = childElements[0];
    
    let elementWidth = getComputedStyle(sliderfirstElement).width;
    let sliderfirstElementComputedStyles = getComputedStyle(sliderfirstElement);
    // console.log( parseInt( elementWidth) * index)
    element.scrollTo({
      top: 0,
      left:
        (parseFloat(sliderfirstElementComputedStyles.width) +
          2 * parseFloat(sliderfirstElementComputedStyles.marginLeft)) *
        index,
      behavior: "smooth",
    });
  }

  function updateLayoutOnScroll(e) {
    if (!beingDragged.current) {
      previousScrollPosition.current = e.target.scrollLeft;
    }

    let childElements = e.target.childNodes[0].childNodes[0].childNodes;
    // setSliderChildElements(childElements);
    sliderChildElements.current = childElements;

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
      className="slider-elements-wrapper-wrapper-wrapper draggable"
      onScroll={(e) => updateLayoutOnScroll(e)}
      onMouseDown={(e) => startDragging(e)}
      onMouseUp={(e) => stopDragging(e)}
      onMouseLeave={(e) => stopDragging(e)}
      onDragStart={(e) => startDragging(e)}
      onMouseMove={(e) => dragSlider(e)}
      // style={{
      //   width: carouselWidth,
      //   // paddinTop: paddingGeneral,
      //   // padduBottom: paddingGeneral,
      //   height: carouselOuterHeight,
      // }}
      style={{
        width: carouselWidth,
        height: carouselOuterHeight,
      }}
    >
      <div
        className="slider-elements-wrapper-wrapper"
        // onMouseDown={() => setBeingDragged(true)}
        // onMouseUp={() => setBeingDragged(false)}
        // onMouseMove={dragCarousel(e)}
        style={{
          // width: "fit-content",
          pointerEvents: "none",
        }}
      >
        <div
          className="slider-elements-wrapper"
          style={{
            marginLeft: `calc( (${carouselWidth} /2 - ${elementWidth}/ 2) + ${spaceBetween} )`,
            marginRight: `calc( (${carouselWidth} /2 - ${elementWidth}/ 2) + ${spaceBetween} )`,
            height: carouselInnerHeight,
            pointerEvents: "none",
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
                  pointerEvents: "none",
                  // alignItems: alignment,
                }}
              >
                <div
                  className="core-slider-elements-wrapper"
                  style={{
                    width: `100%`,
                    alignItems: alignment,
                    pointerEvents: "none",
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
  carouselInnerHeight: "35vw",
  carouselOuterHeight: "45vw",
  elementWidth: "60vw",
  opacityFunction: { homePageSliderOpacityController },
  scaleFunction: { homePageSliderScaleController },
};

export default ElementsSlider;

import reactDom from "react-dom";
import PropTypes from "prop-types";
import { useState } from "react/cjs/react.development";
import { useEffect, useRef } from "react";

import "../../../../styles/home/upper-section/slider/image-slider-container.css";
import "../../../../styles/home/upper-section/slider/core-image-slider-container.css";

import homePageSliderOpacityController from "../helper-functions/home-page-slider-opacity-controller";
import homePageSliderScaleController from "../helper-functions/home-page-slider-scale-controller";
import formatNumber from "./slider-helpers/nemerical_formatter";
import scaleAndOpacityControllerByActualPosition from "./slider-helpers/scale_and_opacity_controller_by_actual_position";
import scaleAndOpacityControllerByPositionFromCenter from "./slider-helpers/scale_and_opacity_controller_by_position_from_center";

import easyScroll from "easy-scroll";
import useMediaQuery from "./../../../_general/helpers/useMediaQuery";

function ElementsSlider({
  sliderComponents,
  spaceBetween,
  transformOriginValue,
  elementWidth,
  carouselWidth,
  carouselInnerHeight,
  carouselOuterHeight,
  opacityFunction,
  scaleFunction,
  onScrollChangeFunction,
  goToPosition,
  autoSlide,
  autoSlideInterval,
  autoSlideTransitionDuration,
}) {
  /* References */
  const sliderPrimaryWrapperReference = useRef(125);
  const sliderChildElementsNodes = useRef([]);
  const autoSlideIntervalRef = useRef(null);

  /* Carousel and mouse states */
  const beingDragged = useRef(false);
  const previousScrollPosition = useRef(0);
  const startMousePosition = useRef(0);

  /* Slider states */
  const [sliderOpacity, setSliderOpacity] = useState(0);
  const [opacityAndScaleDimensions, setOpacityAndScaleDimensions] = useState({
    opacityDimensionsByPositionFromCenter: [],
    opacityDimensionsByActualPosition: [],
    scaleDimensionsByPositionFromCenter: [],
    scaleDimensionsByActualPosition: [],
  });
  const [currentScrollStateIndices, setCurrentScrollStateIndices] = useState({
    intIndex: 0,
    floatIndex: 0,
  });

  const [windowWidth] = useMediaQuery();

  useEffect(() => {
    let primaryWrapper = reactDom.findDOMNode(
      sliderPrimaryWrapperReference.current
    );
    let sliderChildElementsArray =
      primaryWrapper.childNodes[0].childNodes[0].childNodes;
    sliderChildElementsNodes.current = sliderChildElementsArray;

    // primaryWrapper.scrollLeft = 1;
    primaryWrapper.scrollLeft = 0;

    setTimeout(() => {
      setSliderOpacity(1);
    }, 400);
  }, [windowWidth]);

  useEffect(() => {
    if (goToPosition >= 0) {
      scrollSliderToPosition(
        goToPosition,
        autoSlideTransitionDuration,
        "easeInOutQuad"
      );
    }
  }, [goToPosition]);

  useEffect(() => {
    let [
      localeArrayForOpacityCalculationByPositionFromCenter,
      localeArrayForScaleCalculationByPositionFromCenter,
    ] = scaleAndOpacityControllerByPositionFromCenter(
      sliderChildElementsNodes.current.length,
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
      sliderChildElementsNodes.current.length,
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
    if (onScrollChangeFunction !== undefined) {
      onScrollChangeFunction(
        currentScrollStateIndices,
        opacityAndScaleDimensions
      );
    }
  }, [opacityAndScaleDimensions]);

  useEffect(() => {
    if (autoSlideIntervalRef.current !== null) {
      autoSlideIntervalRef.current = clearTimeout(autoSlideIntervalRef.current);
    }

    if (autoSlide && beingDragged.current === false) {
      autoSlideIntervalRef.current = setTimeout(() => {
        scrollSliderToPosition(
          (currentScrollStateIndices.intIndex + 1) % sliderComponents.length,
          autoSlideTransitionDuration,
          "easeInOutQuad"
        );
      }, autoSlideInterval);
    }
  }, [autoSlide, currentScrollStateIndices.intIndex]);

  function startDragging(e) {
    if (autoSlideIntervalRef.current !== null) {
      autoSlideIntervalRef.current = clearTimeout(autoSlideIntervalRef.current);
    }

    beingDragged.current = true;
    startMousePosition.current = e.clientX;
  }

  function stopDragging(e) {
    beingDragged.current = false;
    previousScrollPosition.current = e.target.scrollLeft;
    scrollSliderToPosition(
      currentScrollStateIndices.intIndex,
      500,
      "easeOutQuad"
    );

    if (autoSlide) {
      autoSlideIntervalRef.current = setTimeout(() => {
        scrollSliderToPosition(
          (currentScrollStateIndices.intIndex + 1) % sliderComponents.length,
          autoSlideTransitionDuration,
          "easeInOutQuad"
        );
      }, autoSlideInterval);
    }
  }

  /** Function to drag carousel when user is dragging **/
  function dragSlider(e) {
    if (beingDragged.current) {
      let element = e.target;
      element.focus();

      e.target.scrollTo({
        top: 0,
        left:
          -e.clientX +
          startMousePosition.current +
          previousScrollPosition.current,
      });
    }
  }

  function scrollSliderToPosition(index, animDuration, animEasing) {
    let sliderWrapper = reactDom.findDOMNode(
      sliderPrimaryWrapperReference.current
    );
    if (!sliderWrapper) {
      return;
    }
    let sliderfirstElement = sliderChildElementsNodes.current[0];

    if (
      !(sliderfirstElement && sliderfirstElement.nodeType === Node.ELEMENT_NODE)
    ) {
      return;
    }
    let sliderfirstElementComputedStyles = getComputedStyle(sliderfirstElement);

    easyScroll({
      scrollableDomEle: sliderWrapper,
      direction: "right",
      duration: animDuration ? animDuration : 500,
      easingPreset: animEasing ? animEasing : "easeOutQuad",
      // cubicBezierPoints: {
      //   'x1': 0.8,
      //   'y1': 0,
      //   'x2': 0,
      //   'y2': 1,
      // }
      // cubicBezierPoints: {
      //   x1: 0.8,
      //   y1: 0,
      //   x2: 0,
      //   y2: 1,
      // },
      scrollAmount:
        (parseFloat(sliderfirstElementComputedStyles.width) +
          2 * parseFloat(sliderfirstElementComputedStyles.marginLeft)) *
          index -
        sliderWrapper.scrollLeft,
    });

    // let sliderWrapper = reactDom.findDOMNode(
    //   sliderPrimaryWrapperReference.current
    // );
    // let sliderfirstElement = sliderChildElementsNodes.current[0];

    // let sliderfirstElementComputedStyles = getComputedStyle(sliderfirstElement);
    // sliderWrapper.scrollTo({
    //   top: 0,
    //   left:
    //     (parseFloat(sliderfirstElementComputedStyles.width) +
    //       2 * parseFloat(sliderfirstElementComputedStyles.marginLeft)) *
    //     index,
    //   behavior: "smooth",
    // });
  }

  function updateLayoutOnScroll(e) {
    if (!beingDragged.current) {
      previousScrollPosition.current = e.target.scrollLeft;
    }

    let sliderfirstElement = sliderChildElementsNodes.current[0];
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
      style={{
        width: carouselWidth,
        height: carouselOuterHeight,
        opacity: sliderOpacity,
      }}
      ref={sliderPrimaryWrapperReference}
    >
      <div
        className="slider-elements-wrapper-wrapper"
        style={{
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
                }}
              >
                <div
                  className="core-slider-elements-wrapper"
                  style={{
                    transform: `scale(${parseFloat(
                      opacityAndScaleDimensions.scaleDimensionsByActualPosition[
                        index
                      ]
                    )})`,
                    transformOrigin: transformOriginValue,
                    // width: `${
                    //   100 *
                    //   parseFloat(
                    //     opacityAndScaleDimensions
                    //       .scaleDimensionsByActualPosition[index]
                    //   )
                    // }%`,
                    // alignItems: alignment,
                    pointerEvents: "none",
                    opacity:
                      opacityAndScaleDimensions
                        .opacityDimensionsByActualPosition[index],
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
  alignment: PropTypes.string,
};

ElementsSlider.defaultProps = {
  spaceBetween: "10vw",
  // alignment: "flex-end",
  transformOriginValue: "50% 100%",
  carouselWidth: "100vw",
  carouselInnerHeight: "36vw",
  carouselOuterHeight: "36vw",
  elementWidth: "54vw",
  opacityFunction: { homePageSliderOpacityController },
  scaleFunction: { homePageSliderScaleController },
  goToPosition: null,
};

export default ElementsSlider;

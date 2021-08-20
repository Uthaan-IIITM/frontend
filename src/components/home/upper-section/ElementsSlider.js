import PropTypes from 'prop-types'
import { useState } from 'react/cjs/react.development'
import "../../../styles/home/upper-section/slider/image-slider-container.css"
import "../../../styles/home/upper-section/slider/core-image-slider-container.css"
import homePageSliderOpacityController from './helper-functions/home-page-slider-opacity-controller';
import homePageSliderScaleController from './helper-functions/home-page-slider-scale-controller';
import formatNumber from './slider-helpers/nemerical-formatter';
function ElementsSlider(
  {
    sliderComponents,
    spaceBetween,
    paddingGeneral,
    alignment,
    elementWidth,
    carouselWidth,
    opacityFunction,
    scaleFunction
  }
) {

  const [currentPositionFloatIndex, setCurrentPositionFloatIndex] = useState(0.00)
  const [currentPositionIndex, setCurrentPositionIndex] = useState(0)
  const [sliderElementsOpacity, setSliderElementsOpacity] = useState([])
  const [sliderElementsScale, setSliderElementsScale] = useState([])
  const [beingDragged, setBeingDragged] = useState(false)



  /** function to drag carousel when user is dragging **/
  function dragCarousel(event) {
    if (beingDragged) {
      const userMousePos = event.clientX
      console.log(userMousePos)
    }
  }

  function updateLayoutOnScroll(e) {
    // console.log(e.target.childNodes[0].childNodes[0].childNodes)
    let childElements = e.target.childNodes[0].childNodes[0].childNodes
    // for (let i = 0; i < childElements.length; i++) {
    //   console.log(childElements[i].offsetLeft)
    // }
    // console.log(e.target.scrollLeft)
    // console.log(e.target.offsetWidth )

    let sliderfirstElement = childElements[0]
    let sliderfirstElementComputedStyles = getComputedStyle(sliderfirstElement)

    // console.log(tempElee.getBoundingClientRect());
    // console.log(Number(tempEleeComputedStyles.width )+ tempEleeComputedStyles.marginLeft);
    // console.log(parseInt(tempEleeComputedStyles.marginLeft));




    let localCurrentPositionIndex = (e.target.scrollLeft / (parseFloat(sliderfirstElementComputedStyles.width) + 2 * parseFloat(sliderfirstElementComputedStyles.marginLeft)))

    setCurrentPositionFloatIndex(formatNumber(localCurrentPositionIndex, 2))
    setCurrentPositionIndex(formatNumber(localCurrentPositionIndex, 0))
    // console.log(currentPositionFloatIndex);
    // console.log(currentPositionIndex);

    let maxIndexForScaleAndOpacity = Math.max(childElements.length - currentPositionIndex, 1 + parseInt(currentPositionIndex)) + 1;

    let localeArrayForOpacityCalculation = [];
    let localeArrayForScaleCalculation = [];
    for (let i = 0; i < maxIndexForScaleAndOpacity; i++) {
      localeArrayForOpacityCalculation.push(opacityFunction(i))
      localeArrayForScaleCalculation.push(scaleFunction(i))
    }

    setSliderElementsOpacity(localeArrayForOpacityCalculation)
    setSliderElementsScale(localeArrayForScaleCalculation)

    console.log(sliderElementsOpacity);
    console.log(sliderElementsScale);


    let comparisonIndex = 0;
    let comparisonRatio = 0;
    if (currentPositionFloatIndex > currentPositionIndex) {
      comparisonIndex = 1;
      comparisonRatio = currentPositionFloatIndex - currentPositionIndex;
    } else if (currentPositionFloatIndex < currentPositionIndex) {
      comparisonIndex = - 1;
      comparisonRatio = currentPositionIndex - currentPositionFloatIndex;
    }

    for (let i = 0; i < childElements.length; i++) {
      // let tempWidth = `${Math.floor((Math.random() * 100) + 1)}%`;

      let currentIndexElementOpacity = sliderElementsOpacity[Math.abs(i - currentPositionIndex)]
      let currentIndexElementWidth = sliderElementsScale[Math.abs(i - currentPositionIndex)]

      let opacityToBeSet = currentIndexElementOpacity;
      let scaleToBeSet = currentIndexElementWidth;

      if (comparisonIndex != 0) {

        let comparisonElementIndex  = 

        opacityToBeSet = opacityFunction(i + comparisonIndex)
        scaleToBeSet = scaleFunction(i + comparisonIndex)
      }
      
      childElements[i].childNodes[0].style.width = `${100 * parseFloat(currentIndexElementWidth)}%`;
      childElements[i].childNodes[0].style.opacity = currentIndexElementOpacity;
    }

  }


  return (
    <div className="slider-elements-wrapper-wrapper-wrapper"
      onScroll={(e) => updateLayoutOnScroll(e)}
      style={{
        width: carouselWidth,
        paddinTop: paddingGeneral,
        padduBottom: paddingGeneral,
      }}
    >
      <div className="slider-elements-wrapper-wrapper"
        // onMouseDown={() => setBeingDragged(true)}
        // onMouseUp={() => setBeingDragged(false)}
        // onMouseMove={dragCarousel(e)}
        style={{
          width: "fit-content",
        }}
      >
        <div className="slider-elements-wrapper"

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
            )
          })}
        </div>
      </div>
    </div>
  )
}

ElementsSlider.propTypes = {
  sliderComponents: PropTypes.array.isRequired,
  spaceBetween: PropTypes.string,
  paddingGeneral: PropTypes.string,
  alignment: PropTypes.string,
}

ElementsSlider.defaultProps = {
  spaceBetween: "5vw",
  paddingGeneral: "10vw",
  alignment: "center",
  carouselWidth: "100vw",
  elementWidth: "40rem",
  opacityFunction: { homePageSliderOpacityController },
  scaleFunction: { homePageSliderScaleController }
}

export default ElementsSlider



import PropTypes from 'prop-types'
import { useState } from 'react/cjs/react.development'
import "../../../styles/home/upper-section/slider/image-slider-container.css"
import "../../../styles/home/upper-section/slider/core-image-slider-container.css"
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

  const [currentPositionIndex, setCurrentPositionIndex] = useState(0)
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

    let tempElee = e.target.childNodes[0].childNodes[0].childNodes[0].style

    let centerPositionAtZeroScroll = carouselWidth / 2 - elementWidth / 2 + spaceBetween
    for (let i = 0; i < childElements.length; i++) {
      // let tempWidth = `${Math.floor((Math.random() * 100) + 1)}%`;
      // childElements[i].childNodes[0].style.width = tempWidth;
    }

  }


  return (
    <div className="slider-elements-wrapper-wrapper-wrapper"
      onScroll={(e) => updateLayoutOnScroll(e)}
      style={{
        width: carouselWidth,
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
  paddingGeneral: "45vw",
  alignment: "center",
  carouselWidth: "100vw",
  elementWidth: "40rem",
}

export default ElementsSlider
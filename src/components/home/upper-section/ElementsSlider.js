import PropTypes from 'prop-types'

function ElementsSlider(
  {
    sliderComponents,
    spaceBetween,
    paddingGeneral,
    alignment,
  }
) {
  return (
    <div className="primary-slider-elements-container" >Hello, {
      spaceBetween} {
        paddingGeneral} {
        alignment}
        
        {sliderComponents}
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
  spaceBetween: "10vw",
  paddingGeneral: "45vw",
  alignment: "center",
}

export default ElementsSlider
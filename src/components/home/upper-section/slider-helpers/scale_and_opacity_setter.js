const scaleAndOpacitySetter = (sliderElements, scaleValues, opacityValues) => {
  for (let index = 0; index < sliderElements.length; index++) {
    const sliderElement = sliderElements[index];
    sliderElement.childNodes[0].style.width = `${
      100 * parseFloat(scaleValues[index])
    }%`;
    sliderElement.childNodes[0].style.opacity = opacityValues[index];
  }
};

export default scaleAndOpacitySetter;

const scaleAndOpacityControllerByPositionFromCenter = (
  noOfElements,
  currentPositionIndex,
  opacityFunction,
  scaleFunction
) => {
  let maxIndexForScaleAndOpacity =
    Math.max(
      noOfElements - currentPositionIndex,
      1 + parseInt(currentPositionIndex)
    ) + 1;

  let arrayForOpacityCalculationByPositionFromCenter = [];
  let arrayForScaleCalculationByPositionFromCenter = [];
  for (let i = 0; i < maxIndexForScaleAndOpacity; i++) {
    arrayForOpacityCalculationByPositionFromCenter.push(opacityFunction(i));
    arrayForScaleCalculationByPositionFromCenter.push(scaleFunction(i));
  }

  return [
    arrayForOpacityCalculationByPositionFromCenter,
    arrayForScaleCalculationByPositionFromCenter,
  ];
};

export default scaleAndOpacityControllerByPositionFromCenter;

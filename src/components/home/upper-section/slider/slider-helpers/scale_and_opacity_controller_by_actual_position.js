import formatNumber from "../slider-helpers/nemerical_formatter";

const scaleAndOpacityControllerByActualPosition = (
  currentPositionIndex,
  currentPositionFloatIndex,
  noOfElements,
  opacityValues,
  scaleValues
) => {
  let comparisonRatio = currentPositionFloatIndex - currentPositionIndex;
  let comparisonRatioMod = Math.abs(comparisonRatio);
  let comparisonElementPositionIndex = comparisonRatio > 0 ? -1 : 1;
  let basePositionDiffrence = 0 - currentPositionIndex;

  let opacityValuesToReturn = [];
  let scaleValuesToReturn = [];

  for (let i = 0; i < noOfElements; i++) {
    let currentElementOpacityValue =
      opacityValues[Math.abs(i + basePositionDiffrence)];
    let comparisonElementOpacityValue =
      opacityValues[
        Math.abs(i + basePositionDiffrence + comparisonElementPositionIndex)
      ];
    let opacityToBeSet =
      comparisonRatioMod * comparisonElementOpacityValue +
      (1 - comparisonRatioMod) * currentElementOpacityValue;

    opacityValuesToReturn.push(formatNumber(opacityToBeSet, 2));

    let currentElementScaleValue =
      scaleValues[Math.abs(i + basePositionDiffrence)];
    let comparisonElementScaleValue =
      scaleValues[
        Math.abs(i + basePositionDiffrence + comparisonElementPositionIndex)
      ];
    let scaleToBeSet =
      comparisonRatioMod * comparisonElementScaleValue +
      (1 - comparisonRatioMod) * currentElementScaleValue;

    scaleValuesToReturn.push(formatNumber(scaleToBeSet, 2));
  }

  return [opacityValuesToReturn, scaleValuesToReturn];
};

export default scaleAndOpacityControllerByActualPosition;
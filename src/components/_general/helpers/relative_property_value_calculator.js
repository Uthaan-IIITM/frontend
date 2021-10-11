let calculateRelativeValue = (
  propertyArrayValue,
  fractionIndex,
  currentStateIndex,
  multiplicationIndex
) => {
  return fractionIndex != 0
    ? `calc( ((${
        propertyArrayValue[Math.floor(currentStateIndex)]
      }) *(${fractionIndex})
  + (${propertyArrayValue[Math.ceil(currentStateIndex)]} )*(${
        1 - fractionIndex
      }))*${multiplicationIndex})`
    : `calc( (${
        propertyArrayValue[Math.floor(currentStateIndex)]
      })*${multiplicationIndex})`;
};


export default calculateRelativeValue;
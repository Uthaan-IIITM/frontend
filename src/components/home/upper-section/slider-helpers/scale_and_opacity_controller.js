const scaleAndOpacityController = (currentPositionIndex, sliderElements, opacityValues, sclaleValues) => {
      
}

export default scaleAndOpacityController





// let comparisonIndex = 0;
// let comparisonRatio = 0.00;
// if (currentPositionFloatIndex > currentPositionIndex) {
//   comparisonIndex = 1;
//   comparisonRatio = currentPositionFloatIndex - currentPositionIndex;
// } else if (currentPositionFloatIndex < currentPositionIndex) {
//   comparisonIndex = - 1;
//   comparisonRatio = currentPositionIndex - currentPositionFloatIndex;
// } else {
//   comparisonIndex = 0;
//   comparisonRatio = 0;
// }

// // console.log(comparisonRatio);
// // console.log(comparisonIndex);

// for (let i = 0; i < childElements.length; i++) {
//   // let tempWidth = `${Math.floor((Math.random() * 100) + 1)}%`;

//   let currentElementIndex
//   if (i - currentPositionIndex > 0) {
//     currentElementIndex = i - currentPositionIndex
//   } else {
//     currentElementIndex = currentPositionIndex - i
//     comparisonIndex = -comparisonIndex
//   }


//   console.log(currentElementIndex)

//   let currentIndexElementOpacity = sliderElementsOpacity[currentElementIndex]
//   let currentIndexElementWidth = sliderElementsScale[currentElementIndex]

//   let opacityToBeSet = currentIndexElementOpacity;
//   let scaleToBeSet = currentIndexElementWidth;



//   if (comparisonIndex != 0) {

//     let comparisonElementIndex = currentElementIndex + comparisonIndex;


//     let comparisonIndexElementOpacity = sliderElementsOpacity[comparisonElementIndex]
//     let comparisonIndexElementWidth = sliderElementsScale[comparisonElementIndex]

//     opacityToBeSet = (1.00 - comparisonRatio) * parseFloat(currentIndexElementOpacity) + parseFloat(comparisonRatio) * parseFloat(comparisonIndexElementOpacity)
//     scaleToBeSet = (1.00 - comparisonRatio) * parseFloat(currentIndexElementWidth) + parseFloat(comparisonRatio) * parseFloat(comparisonIndexElementWidth)

//     console.log(comparisonRatio);
//     // console.log(opacityToBeSet);
//     // console.log(scaleToBeSet);
//   }

//   childElements[i].childNodes[0].style.width = `${100 * parseFloat(scaleToBeSet)}%`;
//   // childElements[i].childNodes[0].style.opacity = opacityToBeSet;
// }
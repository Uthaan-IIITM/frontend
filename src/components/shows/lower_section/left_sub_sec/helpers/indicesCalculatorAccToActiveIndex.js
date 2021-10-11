import formatNumber from "./../../../../_general/helpers/nemerical_formatter";

function calculateIndicesAccToActiveIndexForNav(activeIndex, listSize) {
  let arrToReturn = [];
  for (let i = 0; i < listSize; i++) {
    let tempPosVar = Math.abs(activeIndex - i);
    arrToReturn.push(Math.exp(-tempPosVar*0.2));
    // arrToReturn.push(formatNumber(Math.exp(-tempPosVar), 2));
  }
  return arrToReturn;
}

export default calculateIndicesAccToActiveIndexForNav;

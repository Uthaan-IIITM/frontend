function sortDataBy(data, sortWith, sortingIndex) {
  let tempData = data.slice();
  console.log("slice", tempData);
  return tempData.sort((a, b) => {
    if (a[sortWith] < b[sortWith]) {
      return -1 * sortingIndex;
    }
    if (a[sortWith] > b[sortWith]) {
      return 1 * sortingIndex;
    }
    return 0;
  });
}

export default sortDataBy;

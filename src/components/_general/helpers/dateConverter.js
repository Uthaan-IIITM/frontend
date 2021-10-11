function convertTsToDate(timeInMillies) {
  return new Date(timeInMillies).toLocaleString("en-us", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default convertTsToDate;

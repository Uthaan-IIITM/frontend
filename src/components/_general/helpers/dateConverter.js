function parseDate(date) {
  return new Date(date).toLocaleString("en-us", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default parseDate;

function setSVGPathFill(path, color) {
  if (Array.isArray(path)) {
    path.forEach(function (p) {
      setSVGPathFill(p, color);
    });
  } else {
    path.style.fill = color;
  }
}

function setMultipleSVGPathFill(paths, colors) {
  paths.forEach(function (p, index) {
    setSVGPathFill(p, colors[index]);
  });
}

export default setSVGPathFill;
export { setMultipleSVGPathFill };

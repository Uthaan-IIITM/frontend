import React from "react";

function TextComponent({ innerContent, textComponentStyle }) {
  return <div style={textComponentStyle}>{innerContent}</div>;
}

export default TextComponent;

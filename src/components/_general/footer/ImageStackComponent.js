import React, { useState } from "react";

function ImageStackComponent(props) {
  const [displayClass, setDisplayClass] = useState("normalDisplay commonImg");
  const [hoverClass, setHoverClass] = useState("hoverDisplay commonImg");

  return (
    <div
      className="imgStackContainer"
      onMouseOver={() => {
        setDisplayClass("hoverDisplay commonImg");
        setHoverClass("normalDisplay commonImg");
      }}
      onMouseOut={() => {
        setHoverClass("hoverDisplay commonImg");
        setDisplayClass("normalDisplay commonImg");
      }}
    >
      <img
        src={props.normalDisplay}
        alt="normal state"
        className={displayClass}
      />
      <img
        src={props.hoverDisplay}
        alt="hover display"
        className={hoverClass}
      />
    </div>
  );
}

export default ImageStackComponent;

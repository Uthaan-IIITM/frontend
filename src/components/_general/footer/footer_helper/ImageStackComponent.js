import React, { useState } from "react";
import "../../../../styles/_general/ImageStackComponent.css";

function ImageStackComponent(props) {
  const [displayClass, setDisplayClass] = useState(
    "primary-footer-normal-display primary-footer-common-img-class"
  );
  const [hoverClass, setHoverClass] = useState(
    "primary-footer-hover-display primary-footer-common-img-class"
  );

  return (
    <div
      className="primary-footer-img-stack-wrapper"
      onMouseOver={() => {
        setDisplayClass(
          "primary-footer-hover-display primary-footer-common-img-class"
        );
        setHoverClass(
          "primary-footer-normal-display primary-footer-common-img-class"
        );
      }}
      onMouseOut={() => {
        setHoverClass(
          "primary-footer-hover-display primary-footer-common-img-class"
        );
        setDisplayClass(
          "primary-footer-normal-display primary-footer-common-img-class"
        );
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

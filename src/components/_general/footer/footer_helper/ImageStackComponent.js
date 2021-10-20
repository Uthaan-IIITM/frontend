import React, { useState } from "react";
import "../../../../styles/_general/ImageStackComponent.css";
import "../../../../styles/_general/responsive/image_stack_component_responsive.css";

function ImageStackComponent(props) {
  const [displayClass, setDisplayClass] = useState(
    "primary-footer-normal-display primary-footer-common-img-class"
  );
  const [hoverClass, setHoverClass] = useState(
    "primary-footer-hover-display primary-footer-common-img-class"
  );

  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className={"primary-footer-img-stack-wrapper" + " " + props.iconsClass}
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
      style={props.StackImageStyle}
    >
      <img
        src={props.normalDisplay}
        alt="normal state"
        className={displayClass + " " + props.iconsClass}
        style={props.StackImageStyle}
      />
      <img
        src={props.hoverDisplay}
        alt="hover display"
        className={hoverClass + " " + props.iconsClass}
        style={props.StackImageStyle}
      />
    </a>
  );
}

export default ImageStackComponent;

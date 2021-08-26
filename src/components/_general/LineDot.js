import React from "react";
import PropTypes from "prop-types";
import "../../styles/_general/line_dot.css";
import { useEffect } from "react/cjs/react.development";

function LineDot({
  innerRadiusStates,
  outerRadiusStates,
  innerCircleColorStates,
  outerCircleColorStates,
  strokeStates,
  opacityStates,
  currentState,
  transitionDuration,
  // defaultState,
}) {
  useEffect(() => {
    let outerDiv = document.getElementsByClassName("dot-outer-div")[0];
    let innerDiv = document.getElementsByClassName("dot-inner-div")[0];

    // let outerWidth = `calc(${Math.up}`
  }, [Math.floor(currentState)]);

  return (
    <div
      className="dot-wrapper"
      // style={{
      //   width: `calc( ${2 * outerRadiusStates[Math.floor(currentState)]})`,
      //   height: `calc( ${2 * outerRadiusStates[Math.floor(currentState)]})`,
      // }}
    >
      <div
        className="dot-outer-div"
        style={{
          width: `calc( ${outerRadiusStates[Math.floor(currentState)]}*2)`,
          height: `calc( ${outerRadiusStates[Math.floor(currentState)]}*2)`,
          borderRadius: `${outerRadiusStates[Math.floor(currentState)]}`,
          opacity: opacityStates[Math.floor(currentState)],
          borderWidth: `${strokeStates[Math.floor(currentState)]}`,
          borderColor: outerCircleColorStates[Math.floor(currentState)],
          transitionDuration: `${transitionDuration}ms`,
        }}
      >
        <div
          className="dot-inner-div"
          style={{
            width: `calc( ${innerRadiusStates[Math.floor(currentState)]}*2)`,
            height: `calc( ${innerRadiusStates[Math.floor(currentState)]} * 2)`,
            borderRadius: `${innerRadiusStates[Math.floor(currentState)]}`,
            opacity: opacityStates[Math.floor(currentState)],
            backgroundColor: innerCircleColorStates[Math.floor(currentState)],
            transitionDuration: `${transitionDuration}ms`,
          }}
        ></div>
      </div>
    </div>
  );
}

LineDot.propTypes = {
  innerRadiusStates: PropTypes.array,
  outerRadiusStates: PropTypes.array,
  innerCircleColorStates: PropTypes.array,
  outerCircleColorStates: PropTypes.array,
  opacityStates: PropTypes.array,
  // defaultState: PropTypes.number,
  currentState: PropTypes.number,
  transitionDuration: PropTypes.number,
};

LineDot.defaultProps = {
  innerRadiusStates: ["0.5vw", "0.3vw", "0.1vw"],
  outerRadiusStates: ["0.8vw", "0.6vw", "0.4vw"],
  innerCircleColorStates: ["#FFBC10", "#FFE39A", "#FFF0C9"],
  outerCircleColorStates: ["#222222", "#444444", "#888888"],
  strokeStates: ["3px", "1px", "1px"],
  opacityStates: [1, 1, 1],
  // defaultState: 0,
  currentState: 0,
  transitionDuration: 200,
};

export default LineDot;

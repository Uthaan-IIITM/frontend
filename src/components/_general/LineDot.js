import React from "react";
import PropTypes from "prop-types";
import "../../styles/_general/line_dot.css";

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
  return (
    <div
      className="dot-wrapper"
      // style={{
      //   width: `calc( ${2 * outerRadiusStates[currentState]})`,
      //   height: `calc( ${2 * outerRadiusStates[currentState]})`,
      // }}
    >
      <div
        className="dot-outer-div"
        style={{
          width: `calc( ${outerRadiusStates[currentState]}*2)`,
          height: `calc( ${outerRadiusStates[currentState]}*2)`,
          borderRadius: `${outerRadiusStates[currentState]}`,
          opacity: opacityStates[currentState],
          borderWidth: `${strokeStates[currentState]}`,
          borderColor: outerCircleColorStates[currentState],
          transitionDuration: `${transitionDuration}ms`,
        }}
      >
        <div
          className="dot-inner-div"
          style={{
            width: `calc( ${innerRadiusStates[currentState]}*2)`,
            height: `calc( ${innerRadiusStates[currentState]} * 2)`,
            borderRadius: `${innerRadiusStates[currentState]}`,
            opacity: opacityStates[currentState],
            backgroundColor: innerCircleColorStates[currentState],
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

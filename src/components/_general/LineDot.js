import React from "react";
import PropTypes from "prop-types";
import "../../styles/_general/line_dot.css";
import { useEffect, useState } from "react/cjs/react.development";
import calculateRelativeValue from "./helpers/relative_property_value_calculator";
import formatNumber from "./helpers/nemerical_formatter";

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
  const [stateFraction, setStateFraction] = useState(0);

  useEffect(() => {
    setStateFraction(Math.ceil(currentState) - currentState);
  }, [currentState]);

  return (
    <div className="dot-wrapper">
      <div
        className="dot-outer-div"
        style={{
          width: calculateRelativeValue(
            outerRadiusStates,
            stateFraction,
            currentState,
            2
          ),
          height: calculateRelativeValue(
            outerRadiusStates,
            stateFraction,
            currentState,
            2
          ),
          borderRadius: calculateRelativeValue(
            outerRadiusStates,
            stateFraction,
            currentState,
            1
          ),
          opacity: calculateRelativeValue(
            opacityStates,
            stateFraction,
            currentState,
            1
          ),
          borderWidth: calculateRelativeValue(
            strokeStates,
            stateFraction,
            currentState,
            1
          ),
          borderColor: outerCircleColorStates[formatNumber(currentState, 0)],
          transitionDuration: `${transitionDuration}ms`,
        }}
      >
        <div
          className="dot-inner-div"
          style={{
            width: calculateRelativeValue(
              innerRadiusStates,
              stateFraction,
              currentState,
              2
            ),
            height: calculateRelativeValue(
              innerRadiusStates,
              stateFraction,
              currentState,
              2
            ),
            borderRadius: calculateRelativeValue(
              innerRadiusStates,
              stateFraction,
              currentState,
              1
            ),
            opacity: calculateRelativeValue(
              opacityStates,
              stateFraction,
              currentState,
              1
            ),
            backgroundColor:
              innerCircleColorStates[formatNumber(currentState, 0)],
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
  outerRadiusStates: ["0.9vw", "0.6vw", "0.4vw"],
  innerCircleColorStates: ["#FFBC10", "#FFBC10", "#FFBC10"],
  outerCircleColorStates: ["#222222", "#222222", "#222222"],
  strokeStates: ["3px", "1px", "1px"],
  opacityStates: [1, 0.7, 0.5],
  // defaultState: 0,
  currentState: 0,
  transitionDuration: 100,
};

export default LineDot;

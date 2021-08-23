import React from "react";
import PropTypes from "prop-types";
import clock from "../../../../../assets/home/what_is_uthaan/bridging_gap_between_juniors_and_seniors/graphic_parts/SVG/clock.svg";
import "../../../../../styles/home/upper-section/illustration-container/BridgingGapBetweenJuniorsAndSeniors/BgbjasClock.css";

function BGBJAS_Clock({ clockContainerWidth }) {
  return (
    <div
      style={{
        width: `calc(${clockContainerWidth}*0.069)`,
        height: `calc(${clockContainerWidth}*0.069)`,
      }}
      id="BGBJAS-Clock-wrapper"
    >
      <img src={clock} alt="clock" id="BGBJAS-Clock" />
    </div>
  );
}

BGBJAS_Clock.propTypes = {
  clockContainerWidth: PropTypes.string.isRequired,
};

export default BGBJAS_Clock;

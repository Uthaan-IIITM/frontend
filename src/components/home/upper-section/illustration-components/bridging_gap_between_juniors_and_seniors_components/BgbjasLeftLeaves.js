import React from "react";
import PropTypes from "prop-types";
import "../../../../../styles/home/upper-section/illustration-container/BridgingGapBetweenJuniorsAndSeniors/BgbjasLeftLeaves.css";
import leftLeaves1 from "../../../../../assets/home/what_is_uthaan/bridging_gap_between_juniors_and_seniors/graphic_parts/SVG/left_leaves_1.svg";
import leftLeaves2 from "../../../../../assets/home/what_is_uthaan/bridging_gap_between_juniors_and_seniors/graphic_parts/SVG/left_leaves_2.svg";
import leftLeaves3 from "../../../../../assets/home/what_is_uthaan/bridging_gap_between_juniors_and_seniors/graphic_parts/SVG/left_leaves_3.svg";
import leftLeaves4 from "../../../../../assets/home/what_is_uthaan/bridging_gap_between_juniors_and_seniors/graphic_parts/SVG/left_leaves_4.svg";
import leftLeaves5 from "../../../../../assets/home/what_is_uthaan/bridging_gap_between_juniors_and_seniors/graphic_parts/SVG/left_leaves_5.svg";

function BGBJAS_LeftLeaves() {
  return (
    <div id="BGBJAS_LeftLeaves">
      <img src={leftLeaves1} alt="leave" id="BGBJAS_LeftLeaves1" />
      <img src={leftLeaves2} alt="leave" id="BGBJAS_LeftLeaves2" />
      <img src={leftLeaves3} alt="leave" id="BGBJAS_LeftLeaves3" />
      <img src={leftLeaves4} alt="leave" id="BGBJAS_LeftLeaves4" />
      <img src={leftLeaves5} alt="leave" id="BGBJAS_LeftLeaves5" />
    </div>
  );
}

BGBJAS_LeftLeaves.propTypes = {
  leftLeavesContainerWidth: PropTypes.string.isRequired,
};

export default BGBJAS_LeftLeaves;

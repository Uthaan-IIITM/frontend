import React from "react";
import PropTypes from "prop-types";
import "../../../../../styles/home/upper-section/illustration-container/BridgingGapBetweenJuniorsAndSeniors/BgbjasRightLeaves.css";

import rightLeavesPot from "../../../../../assets/home/what_is_uthaan/bridging_gap_between_juniors_and_seniors/graphic_parts/SVG/right_leaves_pot.svg";
import rightLeavesL from "../../../../../assets/home/what_is_uthaan/bridging_gap_between_juniors_and_seniors/graphic_parts/SVG/right_leaf_l.svg";
import rightLeavesR from "../../../../../assets/home/what_is_uthaan/bridging_gap_between_juniors_and_seniors/graphic_parts/SVG/right_leaf_r.svg";

function BgbjasRightLeaves({ rightLeavesContainerWidth }) {
  return (
    <div
      id="BGBJAS_RightLeaves"
      style={{
        width: `calc(${rightLeavesContainerWidth}*0.034)`,
        height: `calc(${rightLeavesContainerWidth}*0.0305)`,
      }}
    >
      <img src={rightLeavesPot} alt="rightLeave" id="BGBJAS_RightLeavesPot" />
      <img src={rightLeavesL} alt="rightLeave" id="BGBJAS_RightLeavesL" />
      <img src={rightLeavesR} alt="rightLeave" id="BGBJAS_RightLeavesR" />
    </div>
  );
}

BgbjasRightLeaves.propTypes = {
  rightLeavesContainerWidth: PropTypes.string.isRequired,
};

export default BgbjasRightLeaves;

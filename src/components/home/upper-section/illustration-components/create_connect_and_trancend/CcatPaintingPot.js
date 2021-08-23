import React from "react";
import PropTypes from "prop-types";

import "../../../../../styles/home/upper-section/illustration-container/CreateConnectAndTrancend/CcatPaintingPot.css";
import paintingPot from "../../../../../assets/home/what_is_uthaan/create_connect_and_trancend/graphic_parts/SVG/painting_pot.svg";
import brush1 from "../../../../../assets/home/what_is_uthaan/create_connect_and_trancend/graphic_parts/SVG/brush_1.svg";
import brush2 from "../../../../../assets/home/what_is_uthaan/create_connect_and_trancend/graphic_parts/SVG/brush_2.svg";
import brush3 from "../../../../../assets/home/what_is_uthaan/create_connect_and_trancend/graphic_parts/SVG/brush_3.svg";

function CcatPaintingPot({ PaintingPotContainerWidth }) {
  return (
    <div
      style={{
        width: `calc(${PaintingPotContainerWidth}*0.034)`,
        height: `calc(${PaintingPotContainerWidth}*0.05)`,
      }}
      id="CCAT-PaintingPot"
    >
      <img src={paintingPot} alt="graphic" id="CCAT-Pot" />
      <img src={brush1} alt="graphic" id="CCAT-Brush1" />
      <img src={brush2} alt="graphic" id="CCAT-Brush2" />
      <img src={brush3} alt="graphic" id="CCAT-Brush3" />
    </div>
  );
}

CcatPaintingPot.propTypes = {
  PaintingPotContainerWidth: PropTypes.string.isRequired,
};

export default CcatPaintingPot;

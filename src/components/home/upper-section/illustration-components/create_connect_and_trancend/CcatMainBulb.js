import React from "react";
import PropTypes from "prop-types";

import "../../../../../styles/home/upper-section/illustration-container/CreateConnectAndTrancend/CcatMainBulb.css";

import bulbBaseLayer from "../../../../../assets/home/what_is_uthaan/create_connect_and_trancend/graphic_parts/SVG/bulb_base_layer.svg";
import bulbSeparatorLines from "../../../../../assets/home/what_is_uthaan/create_connect_and_trancend/graphic_parts/SVG/bulb_separator_lines.svg";
import bulbTopLeftPart from "../../../../../assets/home/what_is_uthaan/create_connect_and_trancend/graphic_parts/SVG/bulb_top_left_part.svg";
import bulbBottomRightPart from "../../../../../assets/home/what_is_uthaan/create_connect_and_trancend/graphic_parts/SVG/bulb_bottom_right_part.svg";
import bulbFilament from "../../../../../assets/home/what_is_uthaan/create_connect_and_trancend/graphic_parts/SVG/bulb_filament.svg";

function CcatMainBulb({ mainBulbContainerWidth }) {
  return (
    <div
      style={{
        width: `calc(${mainBulbContainerWidth}*0.228)`,
        height: `calc(${mainBulbContainerWidth}*0.276)`,
      }}
      id="CCAT-MainBulb"
    >
      <img src={bulbBaseLayer} alt="Ccat_graphic" id="CCAT-BulbBaseLayer" />
      <img
        src={bulbSeparatorLines}
        alt="Ccat_graphic"
        id="CCAT-BulbSeparatorLines"
      />
      <img src={bulbTopLeftPart} alt="Ccat_graphic" id="CCAT-BulbTopLeftPart" />
      <img
        src={bulbBottomRightPart}
        alt="Ccat_graphic"
        id="CCAT-BulbBottomRightPart"
      />
      <img src={bulbFilament} alt="Ccat_graphic" id="CCAT-BulbFilament" />
    </div>
  );
}

CcatMainBulb.propTypes = {
  mainBulbContainerWidth: PropTypes.string.isRequired,
};

export default CcatMainBulb;

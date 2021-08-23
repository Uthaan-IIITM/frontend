import React from "react";
import PropTypes from "prop-types";

import "../../../../../styles/home/upper-section/illustration-container/CreateConnectAndTrancend/CcatRightChar.css";

import char4 from "../../../../../assets/home/what_is_uthaan/create_connect_and_trancend/graphic_parts/SVG/char_4.svg";
import char4HandZH from "../../../../../assets/home/what_is_uthaan/create_connect_and_trancend/graphic_parts/SVG/char_4_hand_z_h.svg";
import char4HandZL from "../../../../../assets/home/what_is_uthaan/create_connect_and_trancend/graphic_parts/SVG/char_4_hand_z_l.svg";
import bulbSeparatedPart from "../../../../../assets/home/what_is_uthaan/create_connect_and_trancend/graphic_parts/SVG/bulb_separated_part.svg";

function CcatRightChar({ rightCharContainerWidth }) {
  return (
    <div
      style={{
        width: `calc(${rightCharContainerWidth}*0.180)`,
        height: `calc(${rightCharContainerWidth}*0.352)`,
      }}
      id="CCAT-RightChar"
    >
      <img src={char4} alt="ccat_graphic" id="CCAR-Char4" />
      <img src={char4HandZH} alt="ccat_graphic" id="CCAR-Char4HandZH" />
      <img src={char4HandZL} alt="ccat_graphic" id="CCAR-Char4HandZL" />
      <img
        src={bulbSeparatedPart}
        alt="ccat_graphic"
        id="CCAR-BulbSeparatedPart"
      />
    </div>
  );
}

CcatRightChar.propTypes = {
  containerWidth: PropTypes.string.isRequired,
};

export default CcatRightChar;
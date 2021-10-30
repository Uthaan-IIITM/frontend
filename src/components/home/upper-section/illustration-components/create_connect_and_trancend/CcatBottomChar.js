import React from "react";
import "../../../../../styles/home/upper-section/illustration-container/CreateConnectAndTrancend/CcatBottomChar.css";
import char3 from "../../../../../assets/home/what_is_uthaan/create_connect_and_trancend/graphic_parts/SVG/char_3.svg";
import char3HandZH from "../../../../../assets/home/what_is_uthaan/create_connect_and_trancend/graphic_parts/SVG/char_3_hand_z_h.svg";
import char3HandZL from "../../../../../assets/home/what_is_uthaan/create_connect_and_trancend/graphic_parts/SVG/char_3_hand_z_l.svg";
import bulbBottomSeparatedPart from "../../../../../assets/home/what_is_uthaan/create_connect_and_trancend/graphic_parts/SVG/bulb_bottom_separated_part.svg";
function CcatBottomChar() {
  return (
    <div id="CCAT-BottomChar">
      <img src={char3HandZL} alt="ccat_graphic" id="CCAR-Char3HandZL" />
      <img src={char3} alt="ccat_graphic" id="CCAR-Char3" />
      <img
        src={bulbBottomSeparatedPart}
        alt="ccat_graphic"
        id="CCAR-BulbBottomSeparatedPart"
      />
      <img src={char3HandZH} alt="ccat_graphic" id="CCAR-Char3HandZH" />
    </div>
  );
}


export default CcatBottomChar;

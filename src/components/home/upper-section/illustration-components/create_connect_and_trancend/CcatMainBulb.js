import React from "react";

import "../../../../../styles/home/upper-section/illustration-container/CreateConnectAndTrancend/CcatMainBulb.css";

import bulbBaseLayer from "../../../../../assets/home/what_is_uthaan/create_connect_and_trancend/graphic_parts/SVG/bulb_base_layer.svg";
import bulbSeparatorLines from "../../../../../assets/home/what_is_uthaan/create_connect_and_trancend/graphic_parts/SVG/bulb_separator_lines.svg";
import bulbTopLeftPart from "../../../../../assets/home/what_is_uthaan/create_connect_and_trancend/graphic_parts/SVG/bulb_top_left_part.svg";
import bulbBottomRightPart from "../../../../../assets/home/what_is_uthaan/create_connect_and_trancend/graphic_parts/SVG/bulb_bottom_right_part.svg";
import bulbFilament from "../../../../../assets/home/what_is_uthaan/create_connect_and_trancend/graphic_parts/SVG/bulb_filament.svg";

function CcatMainBulb() {
  return (
    <div id="CCAT-MainBulb">
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


export default CcatMainBulb;

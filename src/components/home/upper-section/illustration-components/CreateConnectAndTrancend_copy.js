import React from "react";
import PropTypes from "prop-types";

import "../../../../styles/home/upper-section/illustration-container/illustration-comp_copy.css";
import "../../../../styles/home/upper-section/illustration-container/CreateConnectAndTrancend/CreateConnectAndTrancend.css";

import CcatRightChar from "./create_connect_and_trancend/CcatRightChar";
import CcatMainBulb from "./create_connect_and_trancend/CcatMainBulb";
import CcatBottomChar from "./create_connect_and_trancend/CcatBottomChar";
import CcatPaintingPot from "./create_connect_and_trancend/CcatPaintingPot";
import CcatGears from "./create_connect_and_trancend/CcatGears";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context(
    "../../../../assets/home/what_is_uthaan/create_connect_and_trancend/graphic_parts/SVG_NON_TRIM",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

function CreateConnectAndTrancendCopy({ containerWidth = "75vw" }) {
  return (
    <div
      className="home-page-illustration-image-wrapper"
      style={{ width: containerWidth, height: `calc(${containerWidth}*2/3)` }}
    >
      <img src={images["bg_gears_group.svg"].default} alt="graphic" />
      <img src={images["bg_line.svg"].default} alt="graphic" />
      <img src={images["bg_square_pattern_1.svg"].default} alt="graphic" />
      <img src={images["bg_square_pattern_2.svg"].default} alt="graphic" />
      <img src={images["bg_triangle.svg"].default} alt="graphic" />
      <img
        src={images["bulb_bottom.svg"].default}
        alt="graphic"
        id="CCAT-BulbBottom"
      />
      <img src={images["char_1.svg"].default} alt="graphic" id="CCAT-Char1" />
      <img src={images["char_2.svg"].default} alt="graphic" id="CCAT-Char2" />
      <img src={images["ladder.svg"].default} alt="graphic" id="CCAT-Ladder" />
      <img src={images["shadow_large.svg"].default} alt="graphic" />
      <img src={images["shadow_small.svg"].default} alt="graphic" />
      <img src={images["bulb_sparkles.svg"].default} alt="graphic" />

      <CcatRightChar />
      <CcatMainBulb />
      <CcatBottomChar bottomCharContainerWidth={containerWidth} />
      <CcatPaintingPot PaintingPotContainerWidth={containerWidth} />
      <CcatGears GearsContainerWidth={containerWidth} />
    </div>
  );
}

CreateConnectAndTrancendCopy.propTypes = {
  containerWidth: PropTypes.string.isRequired,
};

export default CreateConnectAndTrancendCopy;

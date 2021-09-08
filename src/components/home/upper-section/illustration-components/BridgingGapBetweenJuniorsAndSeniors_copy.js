import React from "react";
import PropTypes from "prop-types";
import graphic from "../../../../assets/home/what_is_uthaan.png";
import "../../../../styles/home/upper-section/illustration-container/illustration-comp_copy.css";
import BgbjasClock from "./bridging_gap_between_juniors_and_seniors_components/BgbjasClock";
import BgbjasLeftLeaves from "./bridging_gap_between_juniors_and_seniors_components/BgbjasLeftLeaves";
import BgbjasRightLeaves from "./bridging_gap_between_juniors_and_seniors_components/BgbjasRightLeaves";
import BgbjasChai from "./bridging_gap_between_juniors_and_seniors_components/BgbjasChai";

import importAll from "../../../_general/helpers/import_all";

const images = importAll(
  require.context(
    "../../../../assets/home/what_is_uthaan/bridging_gap_between_juniors_and_seniors/graphic_parts/SVG_NON_TRIM",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

function BridgingGapBetweenJuniorsAndSeniorsCopy({ containerWidth = "75vw" }) {
  return (
    <div
      className="home-page-illustration-image-wrapper"
      style={{ width: containerWidth, height: `calc(${containerWidth}*2/3)` }}
    >
      <img src={images["bg.svg"].default} alt="graphic" id="BGBJAS-bg" />
      <BgbjasLeftLeaves />
      <img
        src={images["left_bush.svg"].default}
        alt="graphic"
        id="BGBJAS-left-bush"
      />
      <img
        src={images["bg_rectangle.svg"].default}
        alt="graphic"
        id="BGBJAS-bg_rectangle"
      />
      <img
        src={images["bird_1.svg"].default}
        alt="graphic"
        id="BGBJAS-bird_1"
      />
      <img
        src={images["bird_2.svg"].default}
        alt="graphic"
        id="BGBJAS-bird_2"
      />
      <img src={images["cloud.svg"].default} alt="graphic" id="BGBJAS-cloud" />
      <img
        src={images["drawer.svg"].default}
        alt="graphic"
        id="BGBJAS-drawer"
      />
      <img
        src={images["drawer_shadow.svg"].default}
        alt="graphic"
        id="BGBJAS-drawer_shadow"
      />
      <img src={images["table.svg"].default} alt="graphic" id="BGBJAS-table" />
      <img
        src={images["girl_1.svg"].default}
        alt="graphic"
        id="BGBJAS-girl_1"
      />
      <img
        src={images["girl_2.svg"].default}
        alt="graphic"
        id="BGBJAS-girl_2"
      />
      <img src={images["man_1.svg"].default} alt="graphic" id="BGBJAS-man_1" />

      <img src={images["man_2.svg"].default} alt="graphic" id="BGBJAS-man_2" />
      <img
        src={images["laptop.svg"].default}
        alt="graphic"
        id="BGBJAS-laptop"
      />
      <img src={images["stool.svg"].default} alt="graphic" id="BGBJAS-stool" />
      <img
        src={images["clock_shadow.svg"].default}
        alt="graphic"
        id="BGBJAS-clock-shdow"
      />

      <BgbjasClock />
      <BgbjasRightLeaves />
      <BgbjasChai />
    </div>
  );
}

BridgingGapBetweenJuniorsAndSeniorsCopy.propTypes = {
  containerWidth: PropTypes.string.isRequired,
};

export default BridgingGapBetweenJuniorsAndSeniorsCopy;

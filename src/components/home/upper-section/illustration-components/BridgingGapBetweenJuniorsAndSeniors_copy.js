import React from "react";
import graphic from "../../../../assets/home/what_is_uthaan.png";
// import * as GraphicAssets from "../../../../assets/home/what_is_uthaan/bridging_gap_between_juniors_and_seniors/graphic_parts/SVG";
import "../../../../styles/home/upper-section/illustration-container/illustration-comp.css";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context(
    "../../../../assets/home/what_is_uthaan/bridging_gap_between_juniors_and_seniors/graphic_parts/SVG_NON_TRIM",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

function BridgingGapBetweenJuniorsAndSeniorsCopy({ containerWidth }) {
  return (
    <div
      className="home-page-illustration-image-wrapper"
      style={{ width: containerWidth, height: `calc(${containerWidth}*2/3)` }}
    >
      <img src={images["bg.svg"].default} alt="graphic" id="BGBJAS-bg" />
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
    </div>
  );
}

export default BridgingGapBetweenJuniorsAndSeniorsCopy;

import React from "react";
import PropTypes from "prop-types";
import "../../../../styles/home/upper-section/illustration-container/illustration-comp_copy.css";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context(
    "../../../../assets/home/what_is_uthaan/pushing_boundaries_on_our_art_and_our_craft/graphic_parts/SVG_NON_TRIM",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

function PushingBoundariesOnOurIdeasAndOurCraftCopy({ containerWidth }) {
  return (
    <div
      className="home-page-illustration-image-wrapper"
      style={{ width: containerWidth, height: `calc(${containerWidth}*2/3)` }}
    >
      {Object.keys(images).map((keyName, index) => (
        <img src={images[keyName].default} alt="graphic_PBOOAOC" key={index} />
      ))}
    </div>
  );
}
PushingBoundariesOnOurIdeasAndOurCraftCopy.propTypes = {
  containerWidth: PropTypes.string.isRequired,
};
export default PushingBoundariesOnOurIdeasAndOurCraftCopy;

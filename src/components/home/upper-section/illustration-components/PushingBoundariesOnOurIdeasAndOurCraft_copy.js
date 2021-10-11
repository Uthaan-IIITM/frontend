import React from "react";
import PropTypes from "prop-types";
import "../../../../styles/home/upper-section/illustration-container/illustration-comp_copy.css";
import importAll from "../../../_general/helpers/import_all";

const images = importAll(
  require.context(
    "../../../../assets/home/what_is_uthaan/pushing_boundaries_on_our_art_and_our_craft/graphic_parts/SVG_NON_TRIM",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

function PushingBoundariesOnOurIdeasAndOurCraftCopy({
  containerWidth = "75vw",
}) {
  return (
    <div
      className="home-page-illustration-image-wrapper"
      style={{ width: containerWidth, height: `calc(${containerWidth}*2/3)` }}
    >
      <img src={images["bg_play.svg"].default} alt="graphic_PBOOAOC" />
      <img src={images["bottom_image.svg"].default} alt="graphic_PBOOAOC" />
      <img src={images["bottom_wand.svg"].default} alt="graphic_PBOOAOC" />
      <img src={images["eraser_tool.svg"].default} alt="graphic_PBOOAOC" />
      <img src={images["green_balls.svg"].default} alt="graphic_PBOOAOC" />
      <img src={images["man.svg"].default} alt="graphic_PBOOAOC" />
      <img src={images["laptop.svg"].default} alt="graphic_PBOOAOC" />
      <img src={images["path.svg"].default} alt="graphic_PBOOAOC" />
      <img src={images["path_with_handles.svg"].default} alt="graphic_PBOOAOC" />
      <img src={images["path_with_pen_tool.svg"].default} alt="graphic_PBOOAOC" />
      <img src={images["purple_balls.svg"].default} alt="graphic_PBOOAOC" />
      <img src={images["purple_dashes.svg"].default} alt="graphic_PBOOAOC" />
      <img src={images["purple_triangle.svg"].default} alt="graphic_PBOOAOC" />
      <img src={images["red_balls.svg"].default} alt="graphic_PBOOAOC" />
      <img src={images["red_dashes.svg"].default} alt="graphic_PBOOAOC" />
      <img src={images["red_elem.svg"].default} alt="graphic_PBOOAOC" />
      <img src={images["tbottom_stick.svg"].default} alt="graphic_PBOOAOC" />
      <img src={images["top_image.svg"].default} alt="graphic_PBOOAOC" />
      <img src={images["top_sticks.svg"].default} alt="graphic_PBOOAOC" />
      <img src={images["top_wand.svg"].default} alt="graphic_PBOOAOC" />
      <img src={images["yellow_balls.svg"].default} alt="graphic_PBOOAOC" />
      <img src={images["yellow_dashes.svg"].default} alt="graphic_PBOOAOC" />
      <img src={images["yellow_elem.svg"].default} alt="graphic_PBOOAOC" />
      <img src={images["yellow_squares.svg"].default} alt="graphic_PBOOAOC" />
      <img src={images["mail.svg"].default} alt="graphic_PBOOAOC" />
      <img src={images["page_left_red.svg"].default} alt="graphic_PBOOAOC" />
      <img src={images["page_right_green.svg"].default} alt="graphic_PBOOAOC" />
      <img src={images["card.svg"].default} alt="graphic_PBOOAOC" />

    </div>
  );
}
PushingBoundariesOnOurIdeasAndOurCraftCopy.propTypes = {
  containerWidth: PropTypes.string.isRequired,
};
export default PushingBoundariesOnOurIdeasAndOurCraftCopy;

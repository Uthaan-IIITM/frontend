import React from "react";
import "../../../../styles/shows/lower_section/left_sub_sec/shows_lower_left_sub_sec_nav_title.css";

function ShowsLowerLeftSubSectionTitleComp({
  title,
  scaleIndex,
  opacityIndex,
  isActive,
}) {
  return (
    <div className="shows-lower-left-sec-nav-title-primary-wrapper">
      <div
        clssName="shows-lower-left-sec-nav-title-text"
        style={{
          color: isActive ? "#FF9300" : "#3D3D3D",
          transform: `scale(${scaleIndex})`,
          opacity: opacityIndex,
        }}
      >
        {title}
      </div>
    </div>
  );
}

export default ShowsLowerLeftSubSectionTitleComp;

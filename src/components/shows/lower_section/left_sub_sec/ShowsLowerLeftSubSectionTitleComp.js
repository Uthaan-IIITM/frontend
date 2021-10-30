import React from "react";
import "../../../../styles/shows/lower_section/left_sub_sec/shows_lower_left_sub_sec_nav_title.css";

function ShowsLowerLeftSubSectionTitleComp({
  title,
  scaleIndex,
  opacityIndex,
  isActive,
  isInDynamicState,
}) {
  return (
    <div className="shows-lower-left-sec-nav-title-primary-wrapper"
    
    style={{
      borderColor: isActive ? "#FF9300" : "#3D3D3D",
    }}>
      <div
        className="shows-lower-left-sec-nav-title-text"
        style={{
          color: isActive ? "#FF9300" : "#3D3D3D",
          transform: `scale(${scaleIndex})`,
          opacity: opacityIndex,
          transition: isInDynamicState
            ? "transform 0.2s ease-out, color 0.05s ease-out,opacity 0.2s ease-out"
            : "transform 1s ease-out, color 0.1s ease-out,opacity 1s ease-out",
        }}
      >
        {title}
      </div>
    </div>
  );
}

export default ShowsLowerLeftSubSectionTitleComp;

import React from "react";
import "../../../styles/home/lower-section/DirectorImageComponent.css";

function DirectorImageComponent({ ImgSource }) {
  return (
    <div className="director-image-wrapper-wrapper">
      <div className="director-image-wrapper">
        <img src={ImgSource} alt="prof_rajendra_sahu" />
      </div>
    </div>
  );
}

export default DirectorImageComponent;

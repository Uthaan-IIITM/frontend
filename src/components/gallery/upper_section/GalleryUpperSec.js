import React from "react";

import "../../../styles/gallery/gallery_upper_sec.css";

import { ReactComponent as BgGraphic } from "../../../assets/gallery/bg.svg";
import { ReactComponent as PrimaryGraphic } from "../../../assets/gallery/graphic.svg";
import { ReactComponent as PotGraphic } from "../../../assets/gallery/pot.svg";

function GalleryUpperSec() {
  return (
    <div className="gallery-upper-section-primary-wrapper">
      <div className="gallery-upper-section-top-wrapper">
        <div className="gallery-upper-section-top-sub-wrapper">
          <BgGraphic className="gallery-upper-section-bg-graphic" />
        </div>
        <h2 className="gallery-upper-section-title">GALLERY</h2>
      </div>
      <PrimaryGraphic className="gallery-upper-section-primary-graphic" />
      <PotGraphic className="gallery-upper-section-pot-graphic" />
    </div>
  );
}

export default GalleryUpperSec;

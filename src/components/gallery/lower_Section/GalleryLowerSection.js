import React, { useState, useEffect } from "react";
import Gallery from "react-grid-gallery";

import "../../../styles/gallery/gallery_lower_sec.css";
import GalleryImagesDataSetObject from "./helpers/gallery_images_data_set_constructor";

function GalleryLowerSection() {
  const [imagesDataSet, setImagesDataSet] = useState([]);

  useEffect(async () => {
    function rand() {
      return Math.floor(Math.random() * 100);
    }

    let tmpArr = [];
    for (let i = 0; i < 40; i++) {
      tmpArr.push(
        new GalleryImagesDataSetObject(
          "https://picsum.photos/400/300",
          `https://picsum.photos/${400 + rand()}/${300 + rand()}?random=1`
        )
      );
    }

    setImagesDataSet(tmpArr);
  }, []);

  return (
    <div className="gallery-lower-sec-primary-wrapper">
      <div className="gallery-lower-sec-secondary-wrapper">
        <Gallery images={imagesDataSet} enableImageSelection={false} />
      </div>
    </div>
  );
}

export default GalleryLowerSection;

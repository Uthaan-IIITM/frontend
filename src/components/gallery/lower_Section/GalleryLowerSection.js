import React, { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import "../../../styles/gallery/gallery_lower_sec.css";
import SecondaryFooter from "../../_general/footer/SecondaryFooter";

function GalleryLowerSection() {
  const [imagesDataSet, setImagesDataSet] = useState([]);

  useEffect(async () => {
    function rand() {
      return Math.floor(Math.random() * 100);
    }

    let tmpArr = [];
    for (let i = 0; i < 40; i++) {
      tmpArr.push(
        `https://picsum.photos/${400 + rand()}/${300 + rand()}?random=1`
      );
    }

    setImagesDataSet(tmpArr);
  }, []);

  return (
    <>
      <div className="gallery-lower-sec-primary-wrapper">
        <div className="gallery-lower-sec-secondary-wrapper">
          <ImageList variant="masonry" cols={3} gap={8}>
            {imagesDataSet.map((item, index) => (
              <ImageListItem key={index}>
                <img src={item} loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
      <SecondaryFooter />
    </>
  );
}

export default GalleryLowerSection;

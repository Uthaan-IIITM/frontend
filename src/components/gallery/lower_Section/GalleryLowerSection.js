import React, { useState, useEffect } from "react";

import "../../../styles/gallery/gallery_lower_sec.css";

import { galleryImages } from "./../../../services/gallery.service";

import SecondaryFooter from "../../_general/footer/SecondaryFooter";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function GalleryLowerSection() {
  const [imagesDataSet, setImagesDataSet] = useState([]);

  useEffect(() => {
    loadGalleryImages();
  }, []);

  async function loadGalleryImages() {
    try {
      const receivedImagesData = await galleryImages();
      console.log(receivedImagesData);
      setImagesDataSet(receivedImagesData.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="gallery-lower-sec-primary-wrapper">
        <div className="gallery-lower-sec-secondary-wrapper">
          <ImageList variant="masonry" cols={3} gap={8}>
            {imagesDataSet?.map((item, index) => (
              <ImageListItem key={index}>
                <img src={item.url} loading="lazy" />
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

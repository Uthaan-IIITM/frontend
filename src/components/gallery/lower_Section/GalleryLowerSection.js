import React, { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import "../../../styles/gallery/gallery_lower_sec.css";

import { galleryImages } from "./../../../services/gallery.service";

import useMediaQuery from "./../../_general/helpers/useMediaQuery";

import SecondaryFooter from "../../_general/footer/SecondaryFooter";
import Preloader from "./../../preloader/Preloader";

function GalleryLowerSection() {
  const [imagesDataSet, setImagesDataSet] = useState([]);
  const [galleryGridDimens, setGalleryGridDimens] = useState({
    cols: 3,
    gap: 8,
  });

  const [windowWidthValue] = useMediaQuery();

  useEffect(() => {
    loadGalleryImages();
  }, []);
  useEffect(() => {
    switch (true) {
      case windowWidthValue <= 1016 && windowWidthValue > 658:
        setGalleryGridDimens({
          ...galleryGridDimens,
          cols: 2,
        });
        break;

      case windowWidthValue <= 658:
        setGalleryGridDimens({
          cols: 1,
          gap: 10,
        });
        break;

      default:
        setGalleryGridDimens({
          ...galleryGridDimens,
          cols: 3,
        });

        break;
    }
  }, [windowWidthValue]);

  async function loadGalleryImages() {
    try {
      const receivedImagesData = await galleryImages();
      setImagesDataSet(receivedImagesData.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {imagesDataSet[0] ? (
        <>
          <div className="gallery-lower-sec-primary-wrapper">
            <div className="gallery-lower-sec-secondary-wrapper">
              <ImageList
                variant="masonry"
                cols={galleryGridDimens.cols}
                gap={galleryGridDimens.gap}
              >
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
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default GalleryLowerSection;

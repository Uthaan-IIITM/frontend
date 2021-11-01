import React from "react";
import ListingPagesSmoothScrollContainer from "./../_general/listing_pages_top_bottom_comps/ListingPagesSmoothScrollContainer";
import GalleryUpperSec from "./upper_section/GalleryUpperSec";
import GalleryLowerSection from "./lower_section/GalleryLowerSection";

function GalleryPage() {
  return (
    <>
      <ListingPagesSmoothScrollContainer
        topContainer={<GalleryUpperSec />}
        bottomContainer={<GalleryLowerSection />}
      />
    </>
  );
}

export default GalleryPage;

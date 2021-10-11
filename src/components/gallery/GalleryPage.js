import React from "react";
import ListingPagesSmoothScrollContainer from "./../_general/listing_pages_top_bottom_comps/ListingPagesSmoothScrollContainer";
import GalleryUpperSec from "./upper_section/GalleryUpperSec";
import InterviewsLowerSection from './../interviews/lower_section/InterviewsLowerSection';

function GalleryPage() {
  return (
    <>
      <ListingPagesSmoothScrollContainer
        topContainer={[<GalleryUpperSec />]}
        bottomContainer={<InterviewsLowerSection />}
      />
    </>
  );
}

export default GalleryPage;

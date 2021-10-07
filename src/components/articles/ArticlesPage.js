import React from "react";
import ArticlesUpperSection from "./upper_section/ArticlesUpperSection";
import ShowsLowerSection from "./../shows/lower_section/ShowsLowerSection";
import ListingPagesSmoothScrollContainer from "./../_general/listing_pages_top_bottom_comps/ListingPagesSmoothScrollContainer";

function ArticlesPage() {
  return (
    <ListingPagesSmoothScrollContainer
      topContainer={[<ArticlesUpperSection />]}
      bottomContainer={<ShowsLowerSection />}
    />
  );
}

export default ArticlesPage;

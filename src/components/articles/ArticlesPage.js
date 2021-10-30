import React from "react";
import ArticlesUpperSection from "./upper_section/ArticlesUpperSection";
import ListingPagesSmoothScrollContainer from "./../_general/listing_pages_top_bottom_comps/ListingPagesSmoothScrollContainer";
import ArticlesLowerSection from './lower_section/ArticlesLowerSection';

function ArticlesPage() {
  return (
    <ListingPagesSmoothScrollContainer
      topContainer={<ArticlesUpperSection />}
      bottomContainer={<ArticlesLowerSection />}
    />
  );
}

export default ArticlesPage;

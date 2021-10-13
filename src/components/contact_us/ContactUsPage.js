import React from "react";

import ListingPagesSmoothScrollContainer from "../_general/listing_pages_top_bottom_comps/ListingPagesSmoothScrollContainer";
import ContactUsUpperSection from "./upper_section/ContactUsUpperSection";
import ContactUsLowerSection from "./lower_section/ContactUsLowerSection";

function ContactUsPage() {
  return (
    <>
      <ListingPagesSmoothScrollContainer
        topContainer={[<ContactUsUpperSection />]}
        bottomContainer={<ContactUsLowerSection />}
      />
    </>
  );
}

export default ContactUsPage;

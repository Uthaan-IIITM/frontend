import React from "react";
import "../../../styles/_general/listing_pages_top_bottom_comps/listing_pages_top_breif_comp.css";

function ListingPagesTopBreifComp({
  floatingBgImagesList,
  bgELementsRatios,
  primaryHeight,
}) {
  return (
    <div className="listing-pages-top-breif-sec-primary-wrapper">
      <div className="listing-pages-top-breif-sec-graphic-wrapper">
        {floatingBgImagesList
          .slice(0)
          .reverse()
          .map((image, index) => {
            console.log(image);
            return (
              <div
                key={index}
                className="listing-pages-floating-bg-img"
                style={{
                  height: `calc(${primaryHeight}*${bgELementsRatios[index]})`,
                  width: `120vw`,
                }}
              >
                {image}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ListingPagesTopBreifComp;

import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "../../../styles/_general/listing_pages_top_bottom_comps/listing_pages_smooth_scroll_container.css";

function ListingPagesSmoothScrollContainer({ topContainer, bottomContainer }) {
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      let bottomComponentContainer = document.getElementsByClassName(
        "listing-pages-smooth-scroll-bottom-container-wrapper"
      )[0];

      if (bottomComponentContainer) {
        let windowScrllPosititon = window.scrollY;
        let windowHeight = window.innerHeight;
        if (windowScrllPosititon < window.innerHeight / 10) {
          if (bottomComponentContainer.style.transitionDuration === 800) {
            setTimeout(() => {
              bottomComponentContainer.style.transitionDuration = "100ms";
            }, 800);
          }
          bottomComponentContainer.style.marginTop = `-${windowScrllPosititon}px`;
        } else {
          bottomComponentContainer.style.transitionDuration = "800ms";

          bottomComponentContainer.style.marginTop = `-${
            windowHeight - windowHeight / 10
          }px`;
        }
      }
    });
  }, []);

  // useEffect(() => {
  //   console.log(transitionDurationInBottomContainerForSmoothScroll);
  // }, [transitionDurationInBottomContainerForSmoothScroll]);

  return (
    <div className="listing-pages-smooth-scroll-primary-wrapper">
      <div className="listing-pages-smooth-scroll-top-container-wrapper">
        {topContainer}
      </div>
      <div
        className="listing-pages-smooth-scroll-bottom-container-wrapper"
        style={{
          transitionDuration: `100ms`,
        }}
      >
        {bottomContainer}
      </div>
    </div>
  );
}

export default ListingPagesSmoothScrollContainer;

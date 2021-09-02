import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "../../../styles/_general/listing_pages_top_bottom_comps/listing_pages_smooth_scroll_container.css";

function ListingPagesSmoothScrollContainer({ topContainer, bottomContainer }) {
  const [
    transitionDurationInBottomContainerForSmoothScroll,
    setTransitionDurationInBottomContainerForSmoothScroll,
  ] = useState(100);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      let bottomComponentContainer = document.getElementsByClassName(
        "listing-pages-smooth-scroll-bottom-container-wrapper"
      )[0];

      if (bottomComponentContainer) {
      
      let windowScrllPosititon = window.scrollY;
      // console.log(windowScrllPosititon);
      let windowHeight = window.innerHeight;
      if (windowScrllPosititon < window.innerHeight / 10) {
        setTimeout(() => {
          setTransitionDurationInBottomContainerForSmoothScroll(100);
        }, 800);

        bottomComponentContainer.style.marginTop = `-${windowScrllPosititon}px`;
      } else {
        if (transitionDurationInBottomContainerForSmoothScroll === 100) {
          e.preventDefault();
          // console.log(transitionDurationInBottomContainerForSmoothScroll);
          setTransitionDurationInBottomContainerForSmoothScroll(800);

          bottomComponentContainer.style.marginTop = `-${
            windowHeight - windowHeight / 10
          }px`;
        }
      }}
    });
  }, []);

  useEffect(() => {
    console.log(transitionDurationInBottomContainerForSmoothScroll);
  }, [transitionDurationInBottomContainerForSmoothScroll]);

  return (
    <div className="listing-pages-smooth-scroll-primary-wrapper">
      <div className="listing-pages-smooth-scroll-top-container-wrapper">
        {topContainer}
      </div>
      <div
        className="listing-pages-smooth-scroll-bottom-container-wrapper"
        style={{
          transitionDuration: `${transitionDurationInBottomContainerForSmoothScroll}ms`,
        }}
      >
        {bottomContainer}
      </div>
    </div>
  );
}

export default ListingPagesSmoothScrollContainer;

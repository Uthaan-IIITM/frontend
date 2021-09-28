import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { useStateValue } from "../../../StateProvider";
import "../../../styles/_general/listing_pages_top_bottom_comps/listing_pages_smooth_scroll_container.css";

function ListingPagesSmoothScrollContainer({ topContainer, bottomContainer }) {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      let bottomComponentContainer = document.getElementsByClassName(
        "listing-pages-smooth-scroll-bottom-container-wrapper"
      )[0];

      if (bottomComponentContainer) {
        let windowScrllPosititon = window.scrollY;
        let windowHeight = window.innerHeight;
        if (windowScrllPosititon < window.innerHeight / 6) {
          if (bottomComponentContainer.style.transitionDuration === 800) {
            setTimeout(() => {
              bottomComponentContainer.style.transitionDuration = "100ms";
            }, 800);
          }
          bottomComponentContainer.style.marginTop = `-${windowScrllPosititon}px`;

          dispatch({
            type: "UPDATE_NAVBAR_STATE",
            navbar_state:
              (windowScrllPosititon / window.innerHeight) * 6 > 1
                ? 1
                : (windowScrllPosititon / window.innerHeight) * 6,
          });
        } else {
          bottomComponentContainer.style.transitionDuration = "800ms";

          bottomComponentContainer.style.marginTop = `-${
            windowHeight - windowHeight / 6
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

import React, { useRef, useState } from "react";
import reactDom from "react-dom";
import { useEffect } from "react/cjs/react.development";
import { useStateValue } from "../../../StateProvider";
import "../../../styles/_general/listing_pages_top_bottom_comps/listing_pages_smooth_scroll_container.css";

function ListingPagesSmoothScrollContainer({ topContainer, bottomContainer }) {
  const [state, dispatch] = useStateValue();

  const bottomContainerRef = useRef(121212);

  const setUpSmoothScrollContainer = () => {
    let windowScrllPosititon = window.scrollY;
    let windowHeight = window.innerHeight;

    if ((windowScrllPosititon / windowHeight) * 10 < 1) {
      if (state.navbar_state != (windowScrllPosititon / windowHeight) * 10) {
        dispatch({
          type: "UPDATE_NAVBAR_STATE",
          navbar_state: (windowScrllPosititon / windowHeight) * 10,
        });
      }
    } else if (state.navbar_state != 1) {
      dispatch({
        type: "UPDATE_NAVBAR_STATE",
        navbar_state: 1,
      });
    }

    let bottomComponentContainer = reactDom.findDOMNode(
      bottomContainerRef.current
    );

    if (bottomComponentContainer) {
      if (windowScrllPosititon < 100) {
        bottomComponentContainer.style.marginTop = `-${windowScrllPosititon}px`;
      } else {
        bottomComponentContainer.style.marginTop = `-${windowHeight - 100}px`;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setUpSmoothScrollContainer);

    return () => {
      window.removeEventListener("scroll", setUpSmoothScrollContainer);
    };
  }, []);

  return (
    <div className="listing-pages-smooth-scroll-primary-wrapper">
      <div className="listing-pages-smooth-scroll-top-container-wrapper">
        {topContainer}
      </div>
      <div
        className="listing-pages-smooth-scroll-bottom-container-wrapper"
        style={{
          transitionDuration: `1s`,
        }}
        ref={bottomContainerRef}
      >
        {bottomContainer}
      </div>
    </div>
  );
}

export default ListingPagesSmoothScrollContainer;

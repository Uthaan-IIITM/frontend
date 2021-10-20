import React, { useRef, useState, useEffect } from "react";
import reactDom from "react-dom";

import "../../../../styles/shows/lower_section/left_sub_sec/shows_lower_left_sub_sec.css";

import ShowsLowerLeftSubSectionTitleComp from "./ShowsLowerLeftSubSectionTitleComp";
import calculateIndicesAccToActiveIndexForNav from "./helpers/indicesCalculatorAccToActiveIndex";

import { useStateValue } from "./../../../../StateProvider";

function ShowsLowerLeftSubSection({ showsTitlesList: showsList = [] }) {
  const titlesListWrapperRef = useRef(123);

  const [{ active_show }, dispatch] = useStateValue();

  const [titlesStateIndices, setTitlesStateIndices] = useState([]);
  const [isInDynamicState, setIsInDynamicState] = useState(false);
  const [currentActiveDisplayListPosIndex, setCurrentActiveListPosIndex] =
    useState(0);

  useEffect(() => {
    focusToActiveShow();
  }, [active_show]);

  const handleListHover = (e) => {
    setIsInDynamicState(true);
    let containerProps = reactDom
      .findDOMNode(titlesListWrapperRef.current)
      .getBoundingClientRect();
    let hoverStateIndex = e.clientY - containerProps.top;

    calculateAndSetStatesForList(
      (hoverStateIndex / containerProps.height) * showsList.length
    );
  };

  const handleListMouseLeave = (e) => {
    setIsInDynamicState(false);
    focusToActiveShow();
  };

  const focusToActiveShow = () => {
    calculateAndSetStatesForList(
      showsList.findIndex(
        (show) => show.playlistIDs === active_show.playlistIDs
      ) + 0.5
    );
  };

  const calculateAndSetStatesForList = (index) => {
    setTitlesStateIndices(
      calculateIndicesAccToActiveIndexForNav(index - 0.5, showsList.length)
    );
  };

  function setCurrentActiveShow(show) {
    dispatch({
      type: "UPDATE_ACTIVE_SHOW",
      show: show,
    });
  }

  return (
    <div
      className="shows-lower-left-sec-primary-wrapper"
      onMouseMove={(e) => {
        handleListHover(e);
      }}
      onMouseLeave={(e) => {
        handleListMouseLeave(e);
      }}
      ref={titlesListWrapperRef}
    >
      {showsList.map((show, index) => {
        return (
          <span
            className="shows-lower-left-title-comp-wrapper"
            key={index}
            onClick={(e) => {
              setCurrentActiveShow(show);
            }}
          >
            <ShowsLowerLeftSubSectionTitleComp
              title={show.name}
              opacityIndex={titlesStateIndices[index]}
              scaleIndex={titlesStateIndices[index] * 0.7 + 0.3}
              isActive={active_show === show}
              isInDynamicState={isInDynamicState}
            />
          </span>
        );
      })}
    </div>
  );
}

export default ShowsLowerLeftSubSection;

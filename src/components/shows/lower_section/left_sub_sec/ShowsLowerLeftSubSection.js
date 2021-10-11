import React, { useRef, useState } from "react";
import reactDom from "react-dom";
import "../../../../styles/shows/lower_section/left_sub_sec/shows_lower_left_sub_sec.css";
import ShowsLowerLeftSubSectionTitleComp from "./ShowsLowerLeftSubSectionTitleComp";

import calculateIndicesAccToActiveIndexForNav from "./helpers/indicesCalculatorAccToActiveIndex";
import formatNumber from "../../../_general/helpers/nemerical_formatter";

function ShowsLowerLeftSubSection({ showsTitlesList = [] }) {
  const titlesListWrapperRef = useRef(123);

  const [titlesStateIndices, setTitlesStateIndices] = useState([]);
  const [currentActiveDisplayListPosIndex, setCurrentActiveListPosIndex] =
    useState(0);

  const handleListHover = (e) => {
    let container = reactDom.findDOMNode(titlesListWrapperRef.current);
    let containerProps = reactDom
      .findDOMNode(titlesListWrapperRef.current)
      .getBoundingClientRect();
    let hoverStateIndex = e.clientY - containerProps.top;
    console.log(
      Math.floor(
        (hoverStateIndex / containerProps.height) * showsTitlesList.length
      )
    );
    calculateStatesForList(
      (hoverStateIndex / containerProps.height) * showsTitlesList.length
    );
  };

  const calculateStatesForList = (index) => {
    // setCurrentActiveListPosIndex(index);
    setTitlesStateIndices(
      // formatNumber(
      calculateIndicesAccToActiveIndexForNav(index, showsTitlesList.length)
      // 1
      // )
    );
  };

  return (
    <div
      className="shows-lower-left-sec-primary-wrapper"
      onMouseMove={(e) => {
        handleListHover(e);
      }}
      ref={titlesListWrapperRef}
    >
      {showsTitlesList.map((showsTitle, index) => {
        return (
          <span className="shows-lower-left-title-comp-wrapper" key={index}>
            <ShowsLowerLeftSubSectionTitleComp
              title={showsTitle}
              opacityIndex={titlesStateIndices[index]}
              scaleIndex={titlesStateIndices[index] * 0.7 + 0.3}
            />
          </span>
        );
      })}
    </div>
  );
}

export default ShowsLowerLeftSubSection;

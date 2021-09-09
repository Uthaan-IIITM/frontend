import React from "react";
import "../../../../styles/shows/lower_section/left_sub_sec/shows_lower_left_sub_sec.css";
import ShowsLowerLeftSubSectionTitleComp from "./ShowsLowerLeftSubSectionTitleComp";

function ShowsLowerLeftSubSection({ showsTitlesList }) {
  return (
    <div className="shows-lower-left-sec-primary-wrapper">
      {showsTitlesList.map((showsTitle, index) => {
        return (
          <div className="shows-lower-left-title-comp-wrapper" key={index}>
            <ShowsLowerLeftSubSectionTitleComp />
          </div>
        );
      })}
    </div>
  );
}

export default ShowsLowerLeftSubSection;

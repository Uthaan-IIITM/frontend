import React, { useState, useEffect } from "react";
import ReactTextTransition, { presets } from "react-text-transition";

import "../../../../styles/home/upper-section/what-is-uthaan-content/WhatIsUthaanStyledText.css";

function WhatIsUthaanStyledText({ currentState = 0 }) {
  const StyleTextContent = [
    "Bridging The Gap Between Juniors And Seniors",
    "Pushing Boundaries On Our Ideas And Our Craft",
    "Create Connect And Trancend",
  ];

  return (
    <div>
      <div className="what-is-uthaan-styled-text">
        <ReactTextTransition
          text={
            // StyleTextContent[styleTextContentIndex % StyleTextContent.length]
            StyleTextContent[currentState]
          }
          noOverflow
        />
      </div>
    </div>
  );
}

export default WhatIsUthaanStyledText;

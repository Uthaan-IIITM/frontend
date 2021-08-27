import React, { useState, useEffect, useRef } from "react";
import ReactTextTransition, { presets } from "react-text-transition";

import "../../../../styles/home/upper-section/what-is-uthaan-content/WhatIsUthaanStyledText.css";

function WhatIsUthaanStyledText({ currentState = 0 }) {
  const previousAnimState = useRef(currentState);
  const [textAnimDirection, setTextAnimDirection] = useState("up");

  useEffect(() => {
    if (currentState > previousAnimState.current) {
      setTextAnimDirection("up");
    } else {
      setTextAnimDirection("down");
    }
    previousAnimState.current = currentState;
  }, [currentState]);

  const StyleTextContent = useRef([
    "Bridging The Gap Between Juniors And Seniors",
    "Pushing Boundaries On Our Ideas And Our Craft",
    "Create Connect And Trancend",
  ]);

  console.log(currentState);

  return (
    <div>
      <div className="what-is-uthaan-styled-text">
        <ReactTextTransition
          text={
            // StyleTextContent[styleTextContentIndex % StyleTextContent.length]
            StyleTextContent.current[currentState]
          }
          direction={textAnimDirection}
        />
      </div>
    </div>
  );
}

export default WhatIsUthaanStyledText;

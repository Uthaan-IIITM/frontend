import React, { useState, useEffect } from "react";
import ReactTextTransition, { presets } from "react-text-transition";

import "../../../../styles/home/upper-section/what-is-uthaan-content/WhatIsUthaanStyledText.css";

function WhatIsUthaanStyledText({ currentState }) {
  const [styleTextContentIndex, setStyleTextContentIndex] = useState(0);
  const StyleTextContent = [
    "ALorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus, quis dolor sit amet, consectetur adipiscing elit nunc tempus",
    "BLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus, quis dolor sit amet, consectetur adipiscing elit nunc tempus",
    "CLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus, quis dolor sit amet, consectetur adipiscing elit nunc tempus",
  ];

  useEffect(() => {
    let tempvar = 0;
    setInterval(() => {
      tempvar = tempvar + 1;
      setStyleTextContentIndex(tempvar);
      console.log(tempvar);
    }, 4000);
  }, []);

  return (
    <div>
      <div className="what-is-uthaan-styled-text">
        <ReactTextTransition
          text={
            // StyleTextContent[styleTextContentIndex % StyleTextContent.length]
            StyleTextContent[currentState]
          }
          noOverflow
          springConfig={presets.wobbly}
        />
      </div>
    </div>
  );
}

export default WhatIsUthaanStyledText;

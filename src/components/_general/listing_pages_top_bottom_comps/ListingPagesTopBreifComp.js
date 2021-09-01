import React, { useRef, useState, useEffect } from "react";
import "../../../styles/_general/listing_pages_top_bottom_comps/listing_pages_top_breif_comp.css";
import formatNumber from "../helpers/nemerical_formatter";
import TextComponent from "../TextComponent";

function ListingPagesTopBreifComp({
  floatingBgImagesList,
  bgELementsRatios,
  primaryHeight,
  topicTitle,
  topicDescription,
  textDivStyling,
}) {
  const extremeBgPositionValues = useRef({
    xInitialExtremes: ["11%", "10%", "-15%", "-17%"],
    xEndExtremes: ["-1%", "-5%", "10%", "12%"],
    yEndExtremes: ["0%", "-1%", "-1%", "-2%"],
    yInitialExtremes: ["-1.5%", "-1.3%", "0%", "0%"],
  });

  const [bgElementsPositionValues, setBgElementsPositionValues] = useState({
    xPos: ["0px", "0px", "0px", "0px"],
    yPos: ["0px", "0px", "0px", "0px"],
  });
  const [lastTimeHeheh, setLastTimeHeheh] = useState(Date.now());

  const handleMouseMovement = (e) => {
    if (Date.now() - lastTimeHeheh > 100) {
      setLastTimeHeheh(Date.now());
      let tempBgDivPositions = bgElementsPositionValues;
      let xFractionIndex = formatNumber(
        e.clientX / document.body.clientWidth,
        2
      );
      let yFractionIndex = formatNumber(e.clientY / window.innerHeight, 2);
      for (let i = 0; i < 4; i++) {
        let tempElemXPos = `calc( (${xFractionIndex} * ${
          extremeBgPositionValues.current.xEndExtremes[i]
        }) +
        (${1 - xFractionIndex} *
          ${extremeBgPositionValues.current.xInitialExtremes[i]}))`;
        let tempElemYPos = `calc( (${yFractionIndex} * ${
          extremeBgPositionValues.current.yEndExtremes[i]
        }) +
        (${1 - yFractionIndex} *
          ${extremeBgPositionValues.current.yInitialExtremes[i]}))`;
        tempBgDivPositions.yPos[i] = tempElemYPos;
        tempBgDivPositions.xPos[i] = tempElemXPos;
      }
      setBgElementsPositionValues(tempBgDivPositions);
    }
  };

  let textTitleStyle = {
    fontFamily: "Manrope",
    fontSize: "4vw",
    fontWeight: "800",
    letterSpacing: "0.3em",
  };

  let textDescriptionStyle = {
    fontFamily: "Manrope",
    fontSize: "1.5vw",
    fontWeight: "500",
    width: "40vw",
  };

  return (
    <div
      className="listing-pages-top-breif-sec-primary-wrapper"
      onMouseMove={(e) => handleMouseMovement(e)}
    >
      <div className="listing-pages-top-breif-sec-graphic-wrapper">
        {floatingBgImagesList
          .slice(0)
          .reverse()
          .map((image, index) => {
            return (
              <div
                key={index}
                className="listing-pages-floating-bg-img"
                style={{
                  height: `calc(${primaryHeight}*${bgELementsRatios[index]})`,
                  width: `120vw`,
                  marginLeft: bgElementsPositionValues.xPos[index],
                  marginBottom: bgElementsPositionValues.yPos[index],
                }}
              >
                {image}
              </div>
            );
          })}
      </div>
      <div
        className="listing-pages-top-breif-sec-text-wrapper"
        style={textDivStyling}
      >
        <TextComponent
          innerContent={topicTitle}
          textComponentStyle={textTitleStyle}
        />
        <TextComponent
          innerContent={topicDescription}
          textComponentStyle={textDescriptionStyle}
        />
      </div>
    </div>
  );
}

export default ListingPagesTopBreifComp;

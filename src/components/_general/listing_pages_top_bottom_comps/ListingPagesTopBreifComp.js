import React, { useRef, useState, useEffect } from "react";
import "../../../styles/_general/listing_pages_top_bottom_comps/listing_pages_top_breif_comp.css";
import "../../../styles/_general/listing_pages_top_bottom_comps/listing_pages_top_breif_comp_events_page.css";
import "../../../styles/_general/listing_pages_top_bottom_comps/listing_pages_top_breif_comp_shows_page.css";
import formatNumber from "../helpers/nemerical_formatter";
import TextComponent from "../TextComponent";

function ListingPagesTopBreifComp({
  floatingBgImagesList,
  bgELementsRatios,
  primaryHeight,
  topicTitle,
  topicDescription,
  textDivStylingClass,
  textTitleStylingClass,
  textDescriptionStylingClass,
  primaryGraphicCompStylingClass,
  PrimaryGraphicComp,
}) {
  const extremeBgPositionValues = useRef({
    xInitialExtremes: ["11%", "10%", "-15%", "-17%"],
    xEndExtremes: ["-1%", "-5%", "10%", "12%"],
    yEndExtremes: ["0%", "-1%", "-1%", "-2%"],
    yInitialExtremes: ["-1.5%", "-1.3%", "0%", "0%"],
  });

  const primaryGraphicExtremePositions = useRef({
    xInitialExtreme: "1%",
    xEndExtreme: "-0.5%",
    yEndExtreme: "-1%",
    yInitialExtreme: "1%",
  });

  const [bgElementsPositionValues, setBgElementsPositionValues] = useState({
    xPos: ["0px", "0px", "0px", "0px"],
    yPos: ["0px", "0px", "0px", "0px"],
  });
  const [lastTimeLayoutUpdationTime, setLastTimeLayoutUpdationTime] = useState(
    Date.now()
  );
  const [primaryGarphicPosValues, setPrimaryGarphicPosValues] = useState({
    vertical: 0,
    horizontal: 0,
  });

  const handleMouseMovement = (e) => {
    if (Date.now() - lastTimeLayoutUpdationTime > 100) {
      setLastTimeLayoutUpdationTime(Date.now());
      let tempBgDivPositions = { ...bgElementsPositionValues };
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
      setPrimaryGarphicPosValues({
        horizontal: `calc( (${xFractionIndex} * ${
          primaryGraphicExtremePositions.current.xEndExtreme
        }) +
        (${1 - xFractionIndex} *
          ${primaryGraphicExtremePositions.current.xInitialExtreme}))`,
        vertical: `calc( (${yFractionIndex} * ${
          primaryGraphicExtremePositions.current.yEndExtreme
        }) +
        (${1 - yFractionIndex} *
          ${primaryGraphicExtremePositions.current.yInitialExtreme}))`,
      });
    }
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
        className={primaryGraphicCompStylingClass}
        style={{
          transform: `translate(${primaryGarphicPosValues.horizontal} , ${primaryGarphicPosValues.vertical})`,
        }}
      >
        {PrimaryGraphicComp}
      </div>

      <div className={textDivStylingClass}>
        {/* <TextComponent
          innerContent={topicTitle}
          textComponentStyle={textTitleStylingClass}
        /> */}
        <div className={textTitleStylingClass}>{topicTitle}</div>
        <div className={textDescriptionStylingClass}>{topicDescription}</div>
        {/* <TextComponent
          innerContent={topicDescription}
          textComponentStyle={}
        /> */}
      </div>
    </div>
  );
}

export default ListingPagesTopBreifComp;

import React from "react";
import "../../../../../styles/home/upper-section/illustration-container/BridgingGapBetweenJuniorsAndSeniors/BgbjasChai.css";
import chaiCup from "../../../../../assets/home/what_is_uthaan/bridging_gap_between_juniors_and_seniors/graphic_parts/SVG/chai_cup.svg";
import chaiVapours from "../../../../../assets/home/what_is_uthaan/bridging_gap_between_juniors_and_seniors/graphic_parts/SVG/chai_vapours.svg";

function BgbjasChai() {
  return (
    <div id="BGBJAS_Chai">
      <img src={chaiCup} alt="chai" id="BGBJAS_ChaiCup" />
      <img src={chaiVapours} alt="chai" id="BGBJAS_ChaiVapours" />
    </div>
  );
}

export default BgbjasChai;

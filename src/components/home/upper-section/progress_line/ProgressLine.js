import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import "../../../../styles/home/upper-section/progress_line/progress_line.css";
import LineDot from "./../../../_general/LineDot";

import progressLibePositionController from "./helpers/position_conroller";

function ProgressLine({ numberOfDots, currentState }) {
  const positionSideDefiner = useRef([1, 1, 1]);
  const [currentStateForDot, setStateForCurrentDot] = useState([0, 1, 2]);

  useEffect(() => {
    let tempStateObj = [];
    let sideDefiner = [];
    for (let index = 0; index < 3; index++) {
      let tempState = index - currentState;
      let tempSide = tempState > 0 ? 1 : -1;
      tempStateObj.push(Math.abs(tempState));
      sideDefiner.push(tempSide);
    }
    // console.log(tempStateObj);
    // console.log(sideDefiner);
    setStateForCurrentDot(tempStateObj);
    positionSideDefiner.current = sideDefiner;
  }, [currentState]);

  useEffect(() => {
    // let windowWidth = document.documentElement.clientWidth;
    // console.log(windowWidth);
    let windowWidth = window.innerWidth;
    let elements = document.getElementsByClassName("line-dot-wrapper");
    // console.log(windowWidth);
    for (let index = 0; index < currentStateForDot.length; index++) {
      let position;
      let elementState = currentStateForDot[index];
      if (!Number.isInteger(elementState)) {
        let bottomState = Math.floor(elementState);
        let topState = Math.ceil(elementState);
        // console.log(elementState, bottomState , topState);
        let positionIndexAccordingToBottomState =
          progressLibePositionController(bottomState);
        let positionIndexAccordingToTopState =
          progressLibePositionController(topState);

        position =
          (positionIndexAccordingToBottomState * (topState - elementState) +
            positionIndexAccordingToTopState * (elementState - bottomState)) /
          2;

        // console.log(position);
      } else {
        position = progressLibePositionController(elementState)/2;
        console.log(position);
      }
      // console.log(
      //   parseFloat(position) *
      //     parseFloat(positionSideDefiner.current[index]) *
      //     parseFloat(windowWidth) *
      //     0.7
      // );
      elements[index].style.transform = `translateX(${
        parseFloat(position) *
        parseFloat(positionSideDefiner.current[index]) *
        parseFloat(windowWidth) *
        0.7
      }px)`;
    }
  }, [currentStateForDot]);

  return (
    <div className="progress-line-wrapper">
      <div className="progress-bar-line"></div>
      <div className="line-dot-wrapper">
        <LineDot currentState={currentStateForDot[0]} />
      </div>
      <div className="line-dot-wrapper">
        <LineDot currentState={currentStateForDot[1]} />
      </div>
      <div className="line-dot-wrapper">
        <LineDot currentState={currentStateForDot[2]} />
      </div>
    </div>
  );
}

ProgressLine.propTypes = {
  numberOfDots: PropTypes.number,
  currentState: PropTypes.number,
};

export default ProgressLine;
//   function hehedd() {
//     var indents = [];
//     for (var i = 0; i < numberOfDots; i++) {
//       indents.push(
//         <div className="indent" key={i}>
//           <LineDot />
//         </div>
//       );
//     }
//     return indents;
//   }

//   const dotsList = () => {
//     let dots = [];

//     for (let index = 0; index < numberOfDots; index++) {
//       dots.push(<LineDot />);
//     }

//     return dots;
//   };

//   let hehe = [];
//   for (var i = 0; i < numberOfDots; i++) {
//     hehe.push(
//       <div className="indent" key={i}>
//         <LineDot />
//       </div>
//     );
//   }
//   const hehelist = hehe.map((item, index) => {
//     return item;
//   });

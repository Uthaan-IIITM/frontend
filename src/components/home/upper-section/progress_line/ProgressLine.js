import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "../../../../styles/home/upper-section/progress_line/progress_line.css";
import LineDot from "./../../../_general/LineDot";

function ProgressLine({ numberOfDots, currentState }) {
  const [currentStateForDot, setStateForCurrentDot] = useState([0, 1, 2]);

  useEffect(() => {}, [currentStateForDot]);

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
  numberOfDots: PropTypes.number.isRequired,
  currentState: PropTypes.number.isRequired,
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

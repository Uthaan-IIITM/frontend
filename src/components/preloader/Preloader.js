import React from "react";

import "../../styles/preloader/preloader.css";

function Preloader() {
  return (
    <div className="preloader-wrapper-wrapper">
      <div className="preloader-wrapper">
        <div className="preloader-outer-wrapper"></div>
        <div className="preloader-inner-wrapper"></div>
      </div>
    </div>
  );
}

export default Preloader;

import React from "react";
import { useEffect } from "react/cjs/react.development";

import "../../styles/_general/sorting_comp.css";

function SortingComp() {
  const [currentSort, setCurrentSort] = React.useState("DATE");
  return (
    <div className="sorting-comp-primary-div">
      {/* <div className="sorting-comp-secondary-div"> */}
      <h5 className="sorting-title">Sort By:</h5>
      <h6 className="sorting-state">{currentSort}</h6>
      {/* </div> */}
    </div>
  );
}

export default SortingComp;

import React, { useState, useEffect, useRef } from "react";

import "../../styles/_general/sorting_comp.css";

function SortingComp({ onSortChangeFun }) {
  const stateNames = useRef({
    NEWEST_FIRST: "Newest First",
    OLDEST_FIRST: "Oldest First",
  });

  const [currentSort, setCurrentSort] = useState("NEWEST_FIRST");
  useEffect(() => {
    if (onSortChangeFun) {
      onSortChangeFun(currentSort);
    }
  }, [currentSort]);

  function updateSortState(e) {
    e.target.style.opacity = 0;
    if (currentSort === "NEWEST_FIRST") {
      setCurrentSort("OLDEST_FIRST");
    } else {
      setCurrentSort("NEWEST_FIRST");
    }
    setTimeout(() => {
      e.target.style.opacity = 1;
    }, 100);
  }

  return (
    <div className="sorting-comp-primary-wrapper">
      <div
        className="sorting-comp-secondary-wrapper"
        onClick={(e) => {
          updateSortState(e);
        }}
      >
        <h5 className="sorting-comp-title">Sort By : </h5>
        <h6 className="sorting-comp-sorting-state">
          {stateNames.current[currentSort]}
        </h6>
      </div>
      <hr />
    </div>
  );
}

export default SortingComp;

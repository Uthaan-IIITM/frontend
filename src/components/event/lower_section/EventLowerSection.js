import React from "react";
import LineDot from "../../_general/LineDot";
import EventCard from "./EventCard";

function EventLowerSection() {
  return (
    <div>
      <LineDot
        innerRadiusStates={["1vw"]}
        outerRadiusStates={["1.5vw"]}
        innerCircleColorStates={["#303030"]}
      />
    </div>
  );
}

export default EventLowerSection;

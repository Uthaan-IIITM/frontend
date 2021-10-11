import React from "react";
import PropTypes from "prop-types";

import "../../../styles/event/lower-section/event_card.css";
import roughBg from "../../../assets/_rough/event_bg.svg";

const titleRightAlignStyles = {
  textAlign: "right",
};
const descriptionRightAlignStyles = {
  textAlign: "right",
  justifyContent: "flex-end",
};
function EventCard({ isRight }) {
  return (
    <div
      className={`event-card-wrapper-wrapper ${
        isRight
          ? "event-card-wrapper-wrapper-is-right"
          : "event-card-wrapper-wrapper-is-left"
      }`}
    >
      <div className="event-card-image-wrapper">
        <img src={roughBg} alt="event-bg" />
        <div
          className="event-card-description"
          style={isRight ? descriptionRightAlignStyles : null}
        >
          <div>
            Lorem ipsum dolor sit amet consectetur, adipi elit. Eius in veniam
            voluptate Lorem ipsum dolor sit amet.
          </div>
        </div>
      </div>
      <div
        className="event-card-title"
        style={isRight ? titleRightAlignStyles : null}
      >
        Picturesque
      </div>
    </div>
  );
}

EventCard.propTypes = {
  isRight: PropTypes.bool,
};

export default EventCard;

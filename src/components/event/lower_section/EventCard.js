import React from "react";
import PropTypes from "prop-types";

import "../../../styles/event/lower-section/event_card.css";
import roughBg from "../../../assets/_rough/event_bg.svg";

function EventCard({ isRight }) {
  return (
    <div className="event-card-wrapper-wrapper">
      <div className="event-card-image-wrapper">
        <img src={roughBg} alt="event-bg" />
      </div>
      <div className="event-card-title">Picturesque</div>
    </div>
  );
}

EventCard.propTypes = {
  isRight: PropTypes.bool,
};

export default EventCard;

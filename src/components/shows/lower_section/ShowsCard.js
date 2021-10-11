import React from "react";
import PropTypes from "prop-types";

import "../../../styles/shows/lower_section/shows_card.css";

function ShowsCard({ cardTitle, cardDate, cardDescription, cardImage }) {
  return (
    <div className="shows-card-main-wrapper">
      <div className="shows-card-image-wrapper">
        <img src={cardImage} alt="shows-card-image" />
      </div>
      <div className="shows-card-content-wrapper">
        <div className="shows-card-title-wrapper">{cardTitle}</div>
        <div className="shows-card-date-wrapper">{cardDate}</div>
        <div className="shows-card-description-wrapper">{cardDescription}</div>
      </div>
    </div>
  );
}

ShowsCard.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  cardDate: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
};

export default ShowsCard;

import React from "react";
import PropTypes from "prop-types";

import "../../../styles/shows/lower_section/shows_card.css";

function ShowsCard({ show }) {
  return (
    <a
      href={show.link}
      target="_blank"
      rel="noopener noreferrer"
      className="shows-card-main-wrapper"
    >
      <div className="shows-card-image-wrapper">
        <img src={show.thumbnailURL} alt="shows-card-image" />
      </div>
      <div className="shows-card-content-wrapper">
        <div className="shows-card-title-wrapper">{show.title}</div>
        <div className="shows-card-date-wrapper">{show.releaseDate}</div>
        <div className="shows-card-description-wrapper">{show.description}</div>
      </div>
    </a>
  );
}

ShowsCard.propTypes = {
  show: PropTypes.object.isRequired,
};

export default ShowsCard;

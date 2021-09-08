import React from "react";
import PropTypes from "prop-types";

import "../../../styles/shows/lower_section/shows_card.css";

function ShowsCard({ cardTitle, cardDate, cardDescription, cardImage }) {
  return <div className="shows-card-main-wrapper"></div>;
}

ShowsCard.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  cardDate: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
};

export default ShowsCard;

import React from "react";

import "../../../styles/shows/lower_section/shows_lower_section.css";
import ShowsCard from "./ShowsCard";

import roughPhoto from "../../../assets/_rough/shows_thumbnail.svg";

function ShowsLowerSection() {
  return (
    <div
      className="shows-lower-section-wrapper"
      style={{
        marginTop: "200px",
      }}
    >
      <div>Manrope Navbar Here</div>
      <div className="shows-lower-section-cards-wrapper">
        <ShowsCard
          cardTitle="Alfaaz - Season 2 | Ft. Nitish Upadhyay - 'Ek Jigyasu Chitrakar' | Episode 3 | Uthaan | IIIT Gwalior"
          cardDate="1 Aug 2021"
          cardDescription={`We present to you "Ek Jigyasu Chitrakar" Mr. Nitish Upadhyay, portraying his art's elegance and soul captivating beauty through his words which are not enough to describe the ravishing and tantalizing art that he created. `}
          cardImage={roughPhoto}
        />
        <ShowsCard
          cardTitle="Alfaaz - Season 2 | Ft. Nitish Upadhyay - 'Ek Jigyasu Chitrakar' | Episode 3 | Uthaan | IIIT Gwalior"
          cardDate="1 Aug 2021"
          cardDescription={`We present to you "Ek Jigyasu Chitrakar" Mr. Nitish Upadhyay, portraying his art's elegance and soul captivating beauty through his words which are not enough to describe the ravishing and tantalizing art that he created. `}
          cardImage={roughPhoto}
        />
      </div>
    </div>
  );
}

export default ShowsLowerSection;

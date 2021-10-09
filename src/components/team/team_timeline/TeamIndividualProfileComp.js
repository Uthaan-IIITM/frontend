import React from "react";

import { ReactComponent as TeamIndividualProfileBaseCard } from "../../../assets/team/card.svg";
import { ReactComponent as TeamIndividualProfileShadowBase } from "../../../assets/team/card.svg";

function TeamIndividualProfileComp({ theme }) {
  return (
    <div className="team-individual-primary-wrapper">
      <div className="team-individual-base-wrapper">
        <TeamIndividualProfileBaseCard className="team-individual-base-card" />
        <TeamIndividualProfileShadowBase className="team-individual-shadow-base" />
      </div>
      <div className="team-individual-profile-wrapper"></div>
    </div>
  );
}

export default TeamIndividualProfileComp;

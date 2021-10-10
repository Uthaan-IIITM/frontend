import React from "react";
import { useEffect } from "react/cjs/react.development";

import "../../styles/team/team_page.css";

import TeamIndividualDataObj from "./team_timeline/helpers/team_individual_data_obj_constructor";
import TeamTimeline from "./team_timeline/TeamTimeline";

function TeamPage() {
  const [teamData, setTeamData] = React.useState({
    Foundes: null,
    Alumni: null,
  });

  useEffect(() => {
    setTeamData({
      ...teamData,
      Foundes: [
        new TeamIndividualDataObj(
          "Amandeep Singh",
          {
            facebookLink: "https://www.facebook.com/",
            linkedinLink: "https://www.linkedin.com/",
            mailID: "mailto:abc@xyz.com",
            githubLink: "https://github.com/",
            instagramLink: "https://www.instagram.com/",
          },
          "https://s3-alpha-sig.figma.com/img/d8c5/de85/df5a0c73886a5c2ca2e5a44d9f7f9efb?Expires=1634515200&Signature=AMH8RVoQ~-OmZaXrx2N83--eAnip2yTwZsEp4510T~ZVN1CU1wRO2rNLszGZL0i9AS0yq0dOlW06GaIxnw8sHyT6m4ncupaXpAg-7VK335mCS21RC7ONObqoKt0I0VNer~Gca5flLkwLLaVzqbNZhbDNXC9nuI1ZFetr~QXv36FKqc9YImOmEYr4hjv-CKjkWvNPf1IyzZxQmjdeb0KwtZzjtEKYFZpPOB5yEPtEeUEvWFBt3Rev3UM5I25SPscKqtuiNsjW0nq1aLJpISy7QrMJCkKlOxRyGjRGdbTTbQJBasmRXHiNLwP2Q1eIbNCO0DS8uCXQGyidP4Fzf5EWCg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          "The main aim of Uthann is not just to conduct events but to eliminate the distance between junior & senior."
        ),
      ],
    });
  }, []);

  return (
    <div className="team-page-primary-wrapper">
      <div className="team-page-founders-wrapper">
        <TeamTimeline
          timelineData={teamData.Foundes}
          colorThemeIndex={Math.floor(Math.random() * 5)}
        />
      </div>
    </div>
  );
}

export default TeamPage;

import React from "react";
import { useEffect } from "react/cjs/react.development";

import "../../styles/team/team_page.css";

import TeamIndividualDataObj from "./team_timeline/helpers/team_individual_data_obj_constructor";
import TeamTimeline from "./team_timeline/TeamTimeline";
import { team } from "./../../services/team.service";
// import { func } from "prop-types";

function TeamPage() {
  const [teamData, setTeamData] = React.useState({
    Foundes: null,
    Alumni: null,
    Executives: null,
  });

  useEffect(() => {
    fetchTeamData();
  }, []);

  async function fetchTeamData() {
    try {
      const receivedImagesData = await team();

      console.log(receivedImagesData);
      setTeamData(receivedImagesData);

      let foundersTempData = parseTeamData(receivedImagesData.data.executive);
      let alumniTempData = parseTeamData(receivedImagesData.data.executive);
      let executivesTempData = parseTeamData(receivedImagesData.data.executive);

      for (let i = 0; i < 2; i++) {
        foundersTempData.push(foundersTempData[0]);
      }

      alumniTempData[0].uthaanStatement = null;
      executivesTempData[0].uthaanStatement = null;

      setTeamData({
        Foundes: foundersTempData,
        Alumni: alumniTempData,
        Executives: executivesTempData,
      });

      console.log({
        Foundes: parseTeamData(receivedImagesData.data.executive),
        Alumni: receivedImagesData.data.executive,
        Executives: executivesTempData,
      });
    } catch (error) {
      console.error(error);
    }
  }

  function parseTeamData(data) {
    const withHttp = (url) => {
      if (!url) {
        return null;
      }
      return !/^https?:\/\//i.test(url) ? `http://${url}` : url;
    };

    let dataToReturn = [];
    console.log(data.length);
    for (let i = 0; i < data.length; i++) {
      console.log(i);
      let child = data[i];
      dataToReturn.push(
        new TeamIndividualDataObj(
          child.name,
          {
            facebookLink: withHttp(child.links.facebook),
            linkedinLink: withHttp(child.links.linkedin),
            mailID: child.links.email ? "mailto:" + child.links.email : null,
            githubLink: withHttp(child.links.github),
            instagramLink: withHttp(child.links.instagram),
          },
          child.image,
          child.statement
        )
      );
    }
    console.log(dataToReturn);
    return dataToReturn;
  }

  return (
    <div className="team-page-primary-wrapper">
      <div className="team-page-founders-wrapper">
        <h3 className="team-page-heading">
          Founder’s
          <br />
          word
        </h3>
        <div className="team-page-founders-list-wrapper">
          <TeamTimeline
            timelineData={teamData.Foundes}
            colorThemeIndex={Array(teamData.Foundes?.length).fill(
              Math.floor(Math.random() * 5)
            )}
            lineColor="#F5F5F5"
          />
        </div>
      </div>
      <div className="team-page-alumni-wrapper">
        <h3 className="team-page-heading">Alumni</h3>
        <div className="team-page-alumni-list-wrapper">
          <TeamTimeline timelineData={teamData.Alumni} lineColor="#FBC9FC" />
        </div>
      </div>
      <div className="team-page-executives-wrapper">
        <h3 className="team-page-heading">Executives</h3>
        <div className="team-page-executives-list-wrapper">
          <TeamTimeline
            timelineData={teamData.Executives}
            lineColor="#FBC9FC"
          />
        </div>
      </div>
    </div>
  );
}

export default TeamPage;

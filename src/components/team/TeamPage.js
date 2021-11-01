import React, { useEffect, useRef } from "react";
import easyScroll from "easy-scroll";

import "../../styles/team/team_page.css";

import TeamIndividualDataObj from "./team_timeline/helpers/team_individual_data_obj_constructor";
import TeamTimeline from "./team_timeline/TeamTimeline";
import { team } from "./../../services/team.service";
import { foundersData } from "../../utils/GeneralConstants";
import Preloader from "../preloader/Preloader";
// import { func } from "prop-types";

function TeamPage() {
  const [teamData, setTeamData] = React.useState({
    Foundes: null,
    Alumni: null,
    Executives: null,
  });

  useEffect(() => {
    fetchTeamData();
    let interval = setInterval(() => {
      let childNodes = teamPagePrimaryWrapperRef.current.childNodes;
      for (let i = 0; i < childNodes?.length; i++) {
        easyScroll({
          scrollableDomEle: childNodes[i],
          direction: "right",
          duration: 500,
          easingPreset: "easeOutQuad",
          scrollAmount: 300,
        });
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const teamPagePrimaryWrapperRef = useRef(123);

  async function fetchTeamData() {
    try {
      const receivedImagesData = await team();

      let foundersTempData = foundersData;
      let alumniTempData = parseTeamData(receivedImagesData.data.alumni);
      let executivesTempData = parseTeamData(receivedImagesData.data.executive);

      setTeamData({
        Foundes: foundersTempData,
        Alumni: alumniTempData,
        Executives: executivesTempData,
      });
    } catch (error) {
      console.error(error);
    }
  }

  function parseTeamData(data) {
    if (!data || data?.length === 0 || data === null) {
      return [];
    }
    const withHttp = (url) => {
      if (!url) {
        return null;
      }
      return !/^https?:\/\//i.test(url) ? `http://${url}` : url;
    };

    let dataToReturn = [];
    for (let i = 0; i < data.length; i++) {
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
    return dataToReturn;
  }

  return (
    <>
      {teamData.Alumni ? (
        <div
          className="team-page-primary-wrapper"
          ref={teamPagePrimaryWrapperRef}
        >
          <div className="team-page-founders-wrapper team-list-wrapper-for-horizontal-scroll">
            <h3 className="team-page-heading founders-heading">
              Founder’s word
            </h3>
            <div className="team-page-founders-list-wrapper">
              <TeamTimeline
                timelineData={teamData.Foundes}
                lineColor="#F5F5F5"
              />
            </div>
          </div>
          <div className="team-page-alumni-wrapper team-list-wrapper-for-horizontal-scroll">
            <h3 className="team-page-heading">Alumni</h3>
            <div className="team-page-alumni-list-wrapper">
              <TeamTimeline
                timelineData={teamData.Alumni}
                lineColor="#FBC9FC"
              />
            </div>
          </div>
          <div className="team-page-executives-wrapper team-list-wrapper-for-horizontal-scroll">
            <h3 className="team-page-heading">Executives</h3>
            <div className="team-page-executives-list-wrapper">
              <TeamTimeline
                timelineData={teamData.Executives}
                lineColor="#FBC9FC"
              />
            </div>
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default TeamPage;

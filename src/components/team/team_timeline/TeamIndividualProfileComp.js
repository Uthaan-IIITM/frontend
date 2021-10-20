import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "../../../styles/team/team_timeline/team_individual_profile_comp.css";

import { ReactComponent as TeamIndividualProfileBaseCard } from "../../../assets/team/card.svg";
import { ReactComponent as TeamIndividualProfileShadowBase } from "../../../assets/team/shadow_base.svg";

import { ReactComponent as FacebookIcon } from "../../../assets/_general/social_media_icons/ic_facebook.svg";
import { ReactComponent as GithubIcon } from "../../../assets/_general/social_media_icons/ic_github.svg";
import { ReactComponent as InstagramIcon } from "../../../assets/_general/social_media_icons/ic_instagram.svg";
import { ReactComponent as LinkedinIcon } from "../../../assets/_general/social_media_icons/ic_linkedin.svg";
import { ReactComponent as MailIcon } from "../../../assets/_general/social_media_icons/ic_mail.svg";

import { teamPageColorThemes } from "../../../utils/GeneralConstants";
import { setMultipleSVGPathFill } from "./helpers/svg_path_color_setter";

function TeamIndividualProfileComp({ individualData, colorThemeIndex }) {
  const shadowBaseRef = useRef(1);
  const baseCardRef = useRef(11);
  const userProfileLinksWrapperRef = useRef(111);

  const [rotationAnglesForLinkIcons, setRotationAnglesForLinkIcons] = useState(
    []
  );

  useEffect(() => {
    const noOfProfileLinks = Object.keys(individualData.links).length;
    let tmpRotationAnglesArr = [];
    const basicAngleDifferenceForLinks = 25;
    const baseAngleForLinks =
      (-1 / 2) * (noOfProfileLinks - 1) * basicAngleDifferenceForLinks;

    for (let index = 0; index < noOfProfileLinks; index++) {
      console.log(baseAngleForLinks + index * basicAngleDifferenceForLinks);
      tmpRotationAnglesArr.push(
        baseAngleForLinks + index * basicAngleDifferenceForLinks
      );
    }
    setRotationAnglesForLinkIcons(tmpRotationAnglesArr);

    const colorTheme = teamPageColorThemes[colorThemeIndex];

    const baseCardPaths = ReactDOM.findDOMNode(baseCardRef.current).childNodes;
    const shadowBasePath = ReactDOM.findDOMNode(shadowBaseRef.current)
      .childNodes[0];
    const userProfileLinkButtons = ReactDOM.findDOMNode(
      userProfileLinksWrapperRef.current
    ).childNodes;

    const userProfileLinkButtonPaths = [];
    for (let i = 0; i < userProfileLinkButtons.length; i++) {
      userProfileLinkButtonPaths.push(
        Array.from(userProfileLinkButtons[i].childNodes[0].childNodes)
      );
    }

    setMultipleSVGPathFill(
      [
        [baseCardPaths[0], userProfileLinkButtonPaths],
        baseCardPaths[1],
        shadowBasePath,
      ],
      [colorTheme.primaryColor, colorTheme.baseColor, colorTheme.shadowColor]
    );
  }, [individualData, colorThemeIndex]);

  function socialMediaIconsCompByKey(key) {
    switch (key) {
      case "facebookLink":
        return <FacebookIcon />;
      case "linkedinLink":
        return <LinkedinIcon />;
      case "mailID":
        return <MailIcon />;
      case "githubLink":
        return <GithubIcon />;
      case "instagramLink":
        return <InstagramIcon />;
      default:
        return null;
    }
  }

  return (
    <div className="team-individual-primary-wrapper">
      <div className="team-individual-top-wrapper">
        <div className="team-individual-base-wrapper">
          <TeamIndividualProfileShadowBase
            className="team-individual-shadow-base"
            ref={shadowBaseRef}
          />
          <TeamIndividualProfileBaseCard
            className="team-individual-base-card"
            ref={baseCardRef}
          />
        </div>
        <div className="team-individual-profile-wrapper">
          <div
            className="team-individual-profile-links-wrapper"
            ref={userProfileLinksWrapperRef}
          >
            {Object.keys(individualData.links).map((link, index) => {
              return (
                <a
                  href={individualData.links[link]}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-individual-profile-links"
                  style={{
                    "--angle": `${rotationAnglesForLinkIcons[index]}deg`,
                  }}
                >
                  {socialMediaIconsCompByKey(link)}
                </a>
              );
            })}
          </div>
          <div
            className="team-individual-profile-image-wrapper"
            style={{
              background: teamPageColorThemes[colorThemeIndex].baseColor,
              outlineColor: teamPageColorThemes[colorThemeIndex].primaryColor,
            }}
          >
            <img
              className="team-individual-profile-image"
              src={individualData.profilePicURL}
              alt="team member"
              onLoad={(e) => {
                e.target.style.opacity = 1;
                e.target.style.filter = "blur(0)";
              }}
            />
          </div>
        </div>
      </div>
      <div className="team-individual-bottom-wrapper">
        <div className="team-individual-name-wrapper">
          <h3
            className="team-individual-name"
            style={{
              color: teamPageColorThemes[colorThemeIndex].primaryColor,
            }}
          >
            {individualData.name}
          </h3>
        </div>
        <div className="team-individual-line-wrapper">
          <div
            className="team-individual-line"
            style={{
              background: teamPageColorThemes[colorThemeIndex].primaryColor,
              width: `${30 * Math.random() + 40}%`,
              marginLeft: `${70 * Math.random() - 20}%`,
            }}
          />
        </div>
        {individualData.uthaanStatement ? (
          <div className="team-individual-statement-wrapper">
            <p className="team-individual-statement">
              {individualData.uthaanStatement}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default TeamIndividualProfileComp;

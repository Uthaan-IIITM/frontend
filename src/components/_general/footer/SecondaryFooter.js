import React from "react";

import ImageStackComponent from "./footer_helper/ImageStackComponent";
import { Link } from "react-router-dom";

import "../../../styles/_general/secondary_footer.css";

import importAll from "../helpers/import_all";
import uthaanLogo from "../../../assets/uthaan_logo/uthaan_logo.svg";

const images = importAll(
  require.context(
    "../../../assets/_general/social_media_icons",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const SocialMediaIcons = [
  "facebook",
  "mail",
  "instagram",
  "youtube",
  "linkedin",
  "github",
];

const SocialMediaIconsList = SocialMediaIcons.map((SocialMediaIcons, index) => {
  return (
    <ImageStackComponent
      normalDisplay={images[`ic_${SocialMediaIcons}.svg`].default}
      hoverDisplay={images[`h_ic_${SocialMediaIcons}.svg`].default}
      StackImageStyle={{ width: "2.1vw", height: "2.1vw" }}
    />
  );
});

function SecondaryFooter() {
  return (
    <div className="secondary-footer-wrapper">
      <div className="secondary-footer-left-wrapper">
        <img src={uthaanLogo} alt="uthaanlogo" />
        <div className="secondary-footer-left-copyright-wrapper">
          Copyright (c) 2021
        </div>
      </div>
      <div className="secondary-footer-right-wrapper">
        <div className="secondary-footer-social-media-icons">
          {SocialMediaIconsList}
        </div>
        <p>
          <Link to="/">Privacy Policy</Link>
          <span style={{ color: "#929292", padding: "0 0.5vw" }}>|</span>
          <Link to="/">Terms of Use</Link>
        </p>
      </div>
    </div>
  );
}

export default SecondaryFooter;

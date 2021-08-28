import React from "react";
import { Link } from "react-router-dom";
import uthaanLogo from "../../../assets/uthaan_logo/uthaan_logo.svg";
import Instituelogo from "../../../assets/footer/insitute_logo.svg";
import linkedInIcon from "../../../assets/footer/ic_linkedin.svg";
import linkedInIconHover from "../../../assets/footer/h_ic_linkedin.svg";
import githubIcon from "../../../assets/footer/ic_github.svg";
import githubIconHover from "../../../assets/footer/h_ic_github.svg";
import mailIcon from "../../../assets/footer/ic_mail.svg";
import mailIconHover from "../../../assets/footer/h_ic_mail.svg";
import "../../../styles/_general/PrimaryFooter.css";
import ImageStackComponent from "./footer_helper/ImageStackComponent";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context(
    "../../../assets/_general/social_media_icons",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const General = ["Home", "Admin"];
const Browse = [
  "Events & Shows",
  "Articles",
  "Interviews",
  "Gallery",
  "Team",
  "Contact Us",
];
const Support = ["contact@uthaan.org", "(+91) 8989738932", "(+91) 8317057596"];
const SocialMediaIcons = [
  "facebook",
  "mail",
  "instagram",
  "youtube",
  "linkedin",
  "github",
];

const GeneralList = General.map((General, index) => {
  return (
    <li key={index}>
      <Link to={`${General}`}>{General}</Link>
    </li>
  );
});
const BrowseList = Browse.map((Browse, index) => {
  return (
    <li key={index}>
      <Link to="/">{Browse}</Link>
    </li>
  );
});
const SupportList = Support.map((Support, index) => {
  return (
    <li key={index}>
      <Link to="/">{Support}</Link>
    </li>
  );
});
const SocialMediaIconsList = SocialMediaIcons.map((SocialMediaIcons, index) => {
  return (
    <ImageStackComponent
      normalDisplay={images[`ic_${SocialMediaIcons}.svg`].default}
      hoverDisplay={images[`h_ic_${SocialMediaIcons}.svg`].default}
    />
  );
});

function PrimaryFooter() {
  return (
    <footer className="primary-footer-wrapper">
      <div className="primary-footer-upper-container">
        <div className="primary-footer-footer-links">
          <div style={{ marginLeft: "7.18vw" }}>
            General
            <ul>{GeneralList}</ul>
          </div>
          <div style={{ marginLeft: "6.04vw" }}>
            Browse
            <ul>{BrowseList}</ul>
          </div>
          <div style={{ marginLeft: "6.04vw" }}>
            Support
            <ul>{SupportList}</ul>
          </div>
        </div>
        <img src={uthaanLogo} alt="uthaanLogo" />
      </div>

      <div className="primary-footer-lower-container">
        <div className="primary-footer-instiute-information-wrapper">
          <div className="primary-footer-instiute-information-outer-container">
            <div className="primary-footer-instiute-information-inner-container">
              <img src={Instituelogo} alt="Institutelogo" />
            </div>
          </div>
          <p>
            Atal Bihari Vajpayee Indian Institute of Information Technology and
            Management, Gwalior
          </p>
        </div>
        <div className="primary-footer-right-icons">
          <div
            style={{
              display: "flex",
            }}
          >
            {SocialMediaIconsList}
          </div>
          <p>
            <Link to="/">Privacy Policy</Link>
            <span style={{ color: "#929292", padding: "0 0.5vw" }}>|</span>
            <Link to="/">Terms of Use</Link>
          </p>
          <div className="primary-footer-copyright">Copyright (c) 2021</div>
        </div>
      </div>
    </footer>
  );
}

export default PrimaryFooter;

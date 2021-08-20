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
import ImageStackComponent from "./ImageStackComponent";

const General = ["Login", "Sign-Up", "About", "Home", "Admin"];
const Browse = [
  "Projects",
  "Jobs",
  "Queries",
  "Connection",
  "Message",
  "Notification",
  "profile",
];
const Support = ["help.connectx@gmail.com", "(+91) 9113742865"];

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

function PrimaryFooter() {
  // const [footerImage, setFooterImage] = useState(linkedInIcon);

  return (
    <footer className="LandingPageFooter">
      <div className="footerUpperContainer">
        <div className="footerLinks">
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
        <img src={uthaanLogo} alt="ConnectxLogo" />
      </div>

      <div className="footerLowerContainer">
        <div className="instiuteinformation">
          <div className="logoOutercontainer">
            <div className="logoInnerContainer">
              <img src={Instituelogo} alt="Institutelogo" />
            </div>
          </div>
          <p>
            Atal Bihari Vajpayee Indian Institute of Information Technology and
            Management, Gwalior
          </p>
        </div>
        <div className="footerRightIcons">
          <div
            style={{
              display: "flex",
            }}
          >
            <ImageStackComponent
              normalDisplay={linkedInIcon}
              hoverDisplay={linkedInIconHover}
            />
            <ImageStackComponent
              normalDisplay={githubIcon}
              hoverDisplay={githubIconHover}
            />
            <ImageStackComponent
              normalDisplay={mailIcon}
              hoverDisplay={mailIconHover}
            />
          </div>
          <p>
            <Link to="/">Privacy Policy</Link>
            <span style={{ color: "#929292", padding: "0 0.5vw" }}>|</span>
            <Link to="/">Terms of Use</Link>
          </p>
          <div className="copyright">Copyright (c) 2021</div>
        </div>
      </div>
    </footer>
  );
}

export default PrimaryFooter;

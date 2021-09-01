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
import instagramicon from "../../../assets/_general/social_media_icons/ic_instagram.svg";
import instagramiconhover from "../../../assets/_general/social_media_icons/h_ic_instagram.svg";
import facebookicon from "../../../assets/_general/social_media_icons/ic_facebook.svg";
import facebookiconhover from "../../../assets/_general/social_media_icons/h_ic_facebook.svg";
import ImageStackComponent from "./footer_helper/ImageStackComponent";
import "../../../styles/_general/SecondaryFooter.css";

function SecondaryFooter() {
  return (
    <footer className="primary-footer-wrapper">
     <div className="primary-footer-lower-container">
        <div style={{ display: "flex" }}>
          <div style={{width: "6.875vw", paddingTop: "5px"}}>
          <img src={uthaanLogo} alt="uthaanLogo" />
          </div>
          <div className="primary-footer-copyright" style={{marginTop: "13px", paddingLeft:"20px"}}>Copyright (c) 2021</div>
        </div>
        <div className="primary-footer-right-icons">
          <p style={{ marginTop: "6px", fontSize: "16px" }}>
            <Link to="/">Privacy Policy</Link>
            <span style={{ color: "#929292", padding: "0 0.5vw" }}>|</span>
            <Link to="/">Terms of Use</Link>
          </p>
          <div
            style={{
              display: "flex",
              paddingLeft: "15px"
            }}
          >
            <div style={{width: "1em", paddingRight: "3em"}}>
            <ImageStackComponent
              normalDisplay={linkedInIcon}
              hoverDisplay={linkedInIconHover}
            />
            </div>
            <div style={{width: "1em", paddingRight: "3em"}}>
            <ImageStackComponent
              normalDisplay={githubIcon}
              hoverDisplay={githubIconHover}
            />
            </div>
            <div style={{width: "1em", paddingRight: "3em"}}>
            <ImageStackComponent
              normalDisplay={mailIcon}
              hoverDisplay={mailIconHover}
            />
            </div> 
            <div style={{width: "1em", paddingRight: "3em"}}>
            <ImageStackComponent
              normalDisplay={instagramicon}
              hoverDisplay={instagramiconhover}
            />
            </div> 
            <div style={{width: "1em", paddingRight: "3em"}}>
            <ImageStackComponent
              normalDisplay={facebookicon}
              hoverDisplay={facebookiconhover}
            />
            </div>          
          </div>

        </div>
      </div>
    </footer>
  );
}

export default SecondaryFooter;

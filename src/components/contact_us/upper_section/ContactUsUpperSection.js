import React from "react";

import "../../../styles/contact_us/contact_us_upper_sec.css";

import { collegeNameAndAddress } from "./../../../utils";
import ImageStackComponent from "../../_general/footer/footer_helper/ImageStackComponent";

import { ReactComponent as ContactusPrimaryGraphic } from "../../../assets/contact_us/graphic.svg";

import importAll from "../../_general/helpers/import_all";

import { contactLinks, contactPhoneNumbers } from "../../../utils";

const socialMediaImages = importAll(
  require.context(
    "../../../assets/_general/social_media_icons",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const SocialMediaIconNames = [
  "facebook",
  "linkedin",
  "mail",
  "github",
  "instagram",
  "youtube",
];

function ContactUsUpperSection() {
  return (
    <div className="contact-us-upper-sec-primary-wrapper">
      <div className="contact-us-upper-sec-left-sec-wrapper">
        <h2 className="contact-us-upper-sec-left-sec-title">Contact Us</h2>
        <h4 className="contact-us-upper-sec-left-sec-college-name-and-address">
          {collegeNameAndAddress}
        </h4>
        <div className="contact-us-upper-sec-left-sec-links-wrapper">
          {SocialMediaIconNames.map((SocialMediaIconName, index) => {
            return (
              <ImageStackComponent
                link={contactLinks[SocialMediaIconName]}
                normalDisplay={
                  socialMediaImages[`ic_${SocialMediaIconName}.svg`].default
                }
                hoverDisplay={
                  socialMediaImages[`h_ic_${SocialMediaIconName}.svg`].default
                }
                StackImageStyle={{
                  width: "33px",
                  height: "33px",
                  marginBottom: "0",
                  marginLeft: "0",
                  marginRight: "12px",
                }}
              />
            );
          })}
        </div>
        <div className="contact-us-upper-sec-left-sec-numbers-wrapper">
          {contactPhoneNumbers.map((phoneNumber, index) => {
            let numLink = `tel:91${phoneNumber}`;
            return (
              <a href={numLink} key={index}>
                (+91) {phoneNumber}
              </a>
            );
          })}
        </div>
      </div>
      <div className="contact-us-upper-sec-right-sec-wrapper">
        <ContactusPrimaryGraphic className="contact-us-primary-graphic" />
      </div>
    </div>
  );
}

export default ContactUsUpperSection;

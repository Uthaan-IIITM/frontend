import React from "react";

import "../../../styles/contact_us/contact_us_lower_sec.css";
import { googleMapsEmbedURL } from "../../../utils";

function ContactUsLowerSection() {
  return (
    <div className="contact-us-lower-sec-primary-wrapper">
      <div className="contact-us-lower-sec-left-wrapper">
        <form className="contact-us-lower-sec-form-wrapper">
          <h3 className="contact-us-lower-sec-form-heading">
            Drop Us A Message
          </h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="contact-us-lower-sec-form-inputs"
          />
          <input
            type="mail"
            name="email"
            placeholder="Mail"
            className="contact-us-lower-sec-form-inputs"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="contact-us-lower-sec-form-inputs"
          />
          <textarea
            placeholder="Message"
            name="message"
            className="contact-us-lower-sec-form-inputs contact-us-lower-sec-form-inputs-text-area"
          />
          <button
            className="contact-us-lower-sec-form-submit-btn"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              console.log(
                document.getElementsByClassName(
                  "contact-us-lower-sec-form-wrapper"
                )[0].elements
              );
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="contact-us-lower-sec-right-wrapper">
        <div className="contact-us-lower-sec-map-embed-wrapper">
          <iframe
            src={googleMapsEmbedURL}
            loading="lazy"
            className="contact-us-lower-sec-map-embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUsLowerSection;
